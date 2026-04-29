"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#15803D] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">🌿 造園ナビ</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/ranking/" className="hover:text-[#F59E0B] transition-colors">
            業者ランキング
          </Link>
          <Link href="/ranking/pruning/" className="hover:text-[#F59E0B] transition-colors">
            剪定専門
          </Link>
          <Link href="/cost/price/" className="hover:text-[#F59E0B] transition-colors">
            料金相場
          </Link>
          <Link href="/cost/pruning-price/" className="hover:text-[#F59E0B] transition-colors">
            剪定費用
          </Link>
          <Link href="/cost/diy/" className="hover:text-[#F59E0B] transition-colors">
            DIY庭づくり
          </Link>
          <Link
            href="/ranking/"
            className="bg-[#F59E0B] text-white px-4 py-2 rounded-full font-bold hover:bg-amber-500 transition-colors flex items-center gap-1"
          >
            <span className="text-xs bg-white text-[#F59E0B] rounded px-1 font-bold">PR</span>
            無料で比較
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '' }} />
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#166534] border-t border-green-700">
          <nav className="flex flex-col px-4 py-3 gap-3 text-sm font-medium">
            <Link href="/ranking/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>業者ランキング</Link>
            <Link href="/ranking/pruning/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>剪定専門ランキング</Link>
            <Link href="/cost/price/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>料金相場</Link>
            <Link href="/cost/pruning-price/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>剪定費用ガイド</Link>
            <Link href="/cost/diy/" className="hover:text-[#F59E0B]" onClick={() => setMenuOpen(false)}>DIY庭づくり</Link>
            <Link href="/ranking/" className="bg-[#F59E0B] text-white px-4 py-2 rounded-full font-bold text-center flex items-center gap-1 justify-center" onClick={() => setMenuOpen(false)}>
              <span className="text-xs bg-white text-[#F59E0B] rounded px-1 font-bold">PR</span>
              無料で業者を比較する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
