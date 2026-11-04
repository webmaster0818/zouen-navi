"use client";

import { useEffect } from "react";

/**
 * TOP のスクロール表示。JS 実行後に html.zn-js を付け、その時点で画面より下にある [data-reveal] だけを隠して順に出す。
 * 初期表示・クローラー・JS 無効では常に表示。prefers-reduced-motion では何もしない。印刷時は全部出す。
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("zn-js");
    const vh = window.innerHeight;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter((el) => {
      const r = el.getBoundingClientRect();
      return r.top > vh * 0.9 && r.height > 0;
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("zn-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    for (const el of targets) {
      el.classList.add("zn-reveal");
      const d = Number(el.dataset.reveal) || 0;
      el.style.transitionDelay = `${Math.min(d, 6) * 70}ms`;
      io.observe(el);
    }
    const showAll = () => targets.forEach((el) => el.classList.add("zn-in"));
    window.addEventListener("beforeprint", showAll);
    return () => {
      io.disconnect();
      window.removeEventListener("beforeprint", showAll);
    };
  }, []);
  return null;
}
