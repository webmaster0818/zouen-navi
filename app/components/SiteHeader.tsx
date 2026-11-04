"use client";

import Link from "next/link";
import { useState } from "react";
import ZnLogo from "./top/ZnLogo";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#CDD3DA] bg-white/95 text-[#1C2330] backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" className="flex items-center gap-2" aria-label="造園ナビ トップページ">
          <ZnLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
          <Link href="/ranking/" className="hover:text-[#263F66] transition-colors">
            業者ランキング
          </Link>
          <Link href="/ranking/pruning/" className="hover:text-[#263F66] transition-colors">
            剪定専門
          </Link>
          <Link href="/cost/price/" className="hover:text-[#263F66] transition-colors">
            料金相場
          </Link>
          <Link href="/cost/pruning-price/" className="hover:text-[#263F66] transition-colors">
            剪定費用
          </Link>
          <Link href="/cost/diy/" className="hover:text-[#263F66] transition-colors">
            DIY庭づくり
          </Link>
          <Link
            href="/ranking/"
            className="bg-[#263F66] text-white px-4 py-2.5 rounded-[3px] font-bold hover:bg-[#1A2D4A] transition-colors flex items-center gap-1.5"
          >
            <span className="text-xs bg-white text-[#263F66] rounded-[2px] px-1 font-bold">PR</span>
            無料で比較
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex h-11 w-11 flex-col items-center justify-center rounded-[3px] border border-[#94A0AE] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div className="w-6 h-0.5 bg-[#263F66] mb-1.5 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '' }} />
          <div className="w-6 h-0.5 bg-[#263F66] mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-[#263F66] transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#CDD3DA]">
          <nav className="flex flex-col px-4 py-3 gap-1 text-[15px] font-bold">
            <Link href="/ranking/" className="flex min-h-[44px] items-center hover:text-[#263F66]" onClick={() => setMenuOpen(false)}>業者ランキング</Link>
            <Link href="/ranking/pruning/" className="flex min-h-[44px] items-center hover:text-[#263F66]" onClick={() => setMenuOpen(false)}>剪定専門ランキング</Link>
            <Link href="/cost/price/" className="flex min-h-[44px] items-center hover:text-[#263F66]" onClick={() => setMenuOpen(false)}>料金相場</Link>
            <Link href="/cost/pruning-price/" className="flex min-h-[44px] items-center hover:text-[#263F66]" onClick={() => setMenuOpen(false)}>剪定費用ガイド</Link>
            <Link href="/cost/diy/" className="flex min-h-[44px] items-center hover:text-[#263F66]" onClick={() => setMenuOpen(false)}>DIY庭づくり</Link>
            <Link href="/ranking/" className="mt-2 bg-[#263F66] text-white px-4 py-3 rounded-[3px] font-bold text-center flex items-center gap-1.5 justify-center" onClick={() => setMenuOpen(false)}>
              <span className="text-xs bg-white text-[#263F66] rounded-[2px] px-1 font-bold">PR</span>
              無料で業者を比較する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
