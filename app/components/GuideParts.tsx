import Link from "next/link";
import type { ReactNode } from "react";

/**
 * 庭づくりガイド（/guide/*）の部品。2026-10-17 追加分の記事で使用。
 * 出力する HTML は既存のガイド（storm-care など）と同じクラス・構造にしている。
 */

export type Item = { h: string; b: string };
export type Faq = { q: string; a: string };
export type Source = { org: string; title: string; url: string };
export type RelatedLink = { href: string; label: string };

export function L({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-primary underline underline-offset-2 mx-1">
      {children}
    </Link>
  );
}

export function P({ children, last }: { children: ReactNode; last?: boolean }) {
  return <p className={`text-[15px] leading-8 text-text-secondary${last ? "" : " mb-5"}`}>{children}</p>;
}

export function After({ children }: { children: ReactNode }) {
  return <p className="text-[15px] leading-8 text-text-secondary mt-5">{children}</p>;
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface-alt p-5">
      <p className="text-[15px] leading-8 text-text-secondary">{children}</p>
    </div>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 mb-12">
      <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">{title}</h2>
      {children}
    </section>
  );
}

export function Steps({ items }: { items: Item[] }) {
  return (
    <ol className="space-y-4">
      {items.map((c, i) => (
        <li key={c.h} className="flex items-start gap-3">
          <span className="mono text-primary flex-shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="font-bold text-text-primary mb-1">{c.h}</h3>
            <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Cards({ items, alt }: { items: Item[]; alt?: boolean }) {
  return (
    <div className="space-y-4">
      {items.map((b) => (
        <div key={b.h} className={`rounded-2xl border border-border ${alt ? "bg-surface-alt" : "bg-surface"} p-5`}>
          <h3 className="font-bold text-text-primary mb-2">{b.h}</h3>
          <p className="text-[15px] leading-8 text-text-secondary">{b.b}</p>
        </div>
      ))}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <span className="mono text-primary flex-shrink-0 mt-1">-</span>
          <p className="text-[15px] leading-8 text-text-secondary">{t}</p>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((f) => (
        <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
          <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
        </div>
      ))}
    </div>
  );
}

export function SourceList({ sources, checked }: { sources: Source[]; checked: string }) {
  return (
    <>
      <p className="text-[15px] leading-8 text-text-secondary mb-5">
        本文の制度・団体に関する記述は、以下の公式ページの記載にもとづいています（{checked}確認）。最新の内容は、各機関のページにてご確認ください。
      </p>
      <ul className="space-y-3">
        {sources.map((s) => (
          <li key={s.url} className="rounded-2xl border border-border bg-surface-alt p-4">
            <p className="text-sm text-text-muted mb-1">{s.org}</p>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[15px] text-primary underline underline-offset-2">
              「{s.title}」
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export function Toc({ toc }: { toc: { id: string; label: string }[] }) {
  return (
    <nav className="my-10 rounded-2xl border border-border bg-surface-alt p-5">
      <p className="font-bold text-text-primary mb-3 text-sm">目次</p>
      <ol className="space-y-2 text-sm list-decimal list-inside marker:text-text-muted">
        {toc.map((t) => (
          <li key={t.id}>
            <a href={`#${t.id}`} className="text-primary hover:underline">
              {t.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function GuideHeader({ title, updatedIso, updatedLabel, children }: { title: string; updatedIso: string; updatedLabel: string; children: ReactNode }) {
  return (
    <header className="mt-2">
      <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
      <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{title}</h1>
      <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
        <time dateTime={updatedIso}>最終更新：{updatedLabel}</time>
        <span className="w-px h-3 bg-border" />
        <span>造園ナビ編集部</span>
      </div>
      <p className="text-[15px] leading-8 text-text-secondary">{children}</p>
    </header>
  );
}

export function Related({ links }: { links: RelatedLink[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">関連ページ</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block rounded-2xl border border-border bg-surface p-4 text-text-primary font-medium hover:border-primary transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Cta({ text, updatedLabel }: { text: string; updatedLabel: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center">
      <p className="text-sm text-text-secondary mb-4">{text}</p>
      <Link
        href="/ranking/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
      >
        掲載サービスを比較する
      </Link>
      <p className="mt-3 text-xs text-text-muted">本ページにはPR（広告）を含む場合があります。掲載情報は{updatedLabel}時点のものです。</p>
    </div>
  );
}

export function articleJsonLd(o: { title: string; description: string; updatedIso: string; url: string; faqs: Faq[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: o.title,
        description: o.description,
        dateModified: o.updatedIso,
        author: { "@type": "Organization", name: "造園ナビ" },
        publisher: { "@type": "Organization", name: "造園ナビ", url: "https://zouen-navi.com/" },
        mainEntityOfPage: o.url,
      },
      {
        "@type": "FAQPage",
        mainEntity: o.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
