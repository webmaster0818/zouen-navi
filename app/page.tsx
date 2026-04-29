import Link from "next/link";
import type { Metadata } from "next";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "造園ナビ｜庭づくりのプロが見つかる総合ガイド",
  description:
    "庭の剪定・造園・外構工事のおすすめ業者を徹底比較。費用相場・口コミ・特徴を詳しく解説。あなたにぴったりの造園業者がすぐに見つかります。",
};

const top3 = companiesData.slice(0, 3);

const plantNav = [
  { icon: "🌳", label: "シンボルツリー", href: "/plant/symbol-tree/" },
  { icon: "🌿", label: "生垣", href: "/plant/hedge/" },
  { icon: "🌸", label: "花壇", href: "/plant/flower-bed/" },
  { icon: "🌑", label: "日陰向き", href: "/plant/shade/" },
  { icon: "✂️", label: "手入れ楽", href: "/plant/low-maintenance/" },
];

const services = [
  { icon: "✂️", label: "剪定", href: "/service/pruning/", desc: "費用と時期の完全ガイド" },
  { icon: "🪚", label: "伐採", href: "/service/felling/", desc: "費用相場と業者の選び方" },
  { icon: "🏡", label: "庭デザイン", href: "/service/garden-design/", desc: "プロへの依頼方法と費用" },
  { icon: "⛩️", label: "和庭園", href: "/service/japanese-garden/", desc: "坪庭から本格庭園まで" },
  { icon: "📅", label: "年間管理", href: "/service/maintenance/", desc: "月別メンテナンスカレンダー" },
];

const costCards = [
  { label: "剪定（低木）", range: "500〜2,000円", unit: "1本" },
  { label: "剪定（中木）", range: "2,000〜10,000円", unit: "1本" },
  { label: "剪定（高木）", range: "10,000〜50,000円", unit: "1本" },
  { label: "伐採（3m以下）", range: "10,000〜30,000円", unit: "1本" },
  { label: "草刈り", range: "5,000〜30,000円", unit: "30㎡" },
  { label: "庭のデザイン設計", range: "10〜50万円", unit: "設計料" },
];

const faqs = [
  {
    q: "庭木の剪定はどの業者に頼むのが一番いいですか？",
    a: "実績・口コミ・費用の透明性を確認することが重要です。お庭マスターやsmileガーデンなど複数社で見積もり比較を行うことをおすすめします。",
  },
  {
    q: "造園業者選びで失敗しないポイントは？",
    a: "見積もりの詳細が明確か、資格・保険の有無、施工事例の確認の3点が最重要です。必ず複数社から見積もりを取りましょう。",
  },
  {
    q: "剪定や草刈りの費用の相場はいくらですか？",
    a: "剪定は1本500〜50,000円（木の高さにより異なる）、草刈りは30㎡あたり5,000〜30,000円が目安です。詳しくは費用ガイドをご確認ください。",
  },
  {
    q: "庭師に頼む前に準備しておくことはありますか？",
    a: "庭の広さ・木の本数・高さをメモしておくと見積もりがスムーズです。仕上がりのイメージ写真（Webや雑誌から）を用意しておくと打ち合わせが楽になります。",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#15803D] to-[#166534] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#F59E0B] font-bold text-sm mb-3 tracking-wider">庭づくりの総合ガイド</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            庭づくりのプロが見つかる。
          </h1>
          <p className="text-green-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            剪定・造園・外構工事のおすすめ業者を徹底比較。費用相場から業者の選び方まで、プロが丁寧に解説します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ranking/"
              className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/cost/price/"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full text-lg transition-all border border-white/30"
            >
              料金相場を確認する
            </Link>
          </div>
        </div>
      </section>

      {/* Plant Type Nav */}
      <section className="bg-white border-b border-green-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-4">植物・テーマ別ガイド</p>
          <div className="flex flex-wrap justify-center gap-3">
            {plantNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 bg-[#F0FDF4] hover:bg-[#dcfce7] border border-green-200 rounded-full px-4 py-2 text-sm font-medium text-[#15803D] transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOP3 Ranking */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <span className="bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-full">編集部おすすめ</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">造園業者ランキング TOP3</h2>
          <p className="text-gray-500 mt-2">口コミ・費用・対応の総合評価で厳選</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {top3.map((company, i) => {
            const medals = ["🥇", "🥈", "🥉"];
            return (
              <div
                key={company.slug}
                className={`bg-white rounded-2xl shadow-md p-6 border-2 ${i === 0 ? "border-yellow-400" : "border-transparent"} flex flex-col`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{medals[i]}</span>
                  <span className="text-sm font-bold text-white bg-[#15803D] px-2 py-0.5 rounded-full">
                    {company.coverage}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{company.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{company.tagline}</p>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400 text-sm">{"★".repeat(Math.round(company.rating))}</span>
                  <span className="text-sm font-bold text-gray-700">{company.rating}</span>
                  <span className="text-xs text-gray-400">({company.reviewCount}件)</span>
                </div>
                <ul className="text-xs text-gray-600 space-y-1 mb-4 flex-1">
                  {company.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-1">
                      <span className="text-[#15803D] font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/company/${company.slug}/`}
                  className="block text-center bg-[#F59E0B] hover:bg-amber-500 text-white font-bold py-2.5 rounded-full text-sm transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <Link href="/ranking/" className="text-[#15803D] font-bold hover:underline text-sm">
            全10社のランキングを見る →
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">庭工事サービスガイド</h2>
          <p className="text-gray-500 text-center mb-8">目的別に詳しく解説</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="bg-[#F0FDF4] hover:bg-[#dcfce7] rounded-xl p-4 text-center transition-colors border border-green-100"
              >
                <div className="text-3xl mb-2">{svc.icon}</div>
                <p className="font-bold text-[#15803D] text-sm">{svc.label}</p>
                <p className="text-xs text-gray-500 mt-1">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">庭工事の費用相場</h2>
        <p className="text-gray-500 text-center mb-8">目安料金一覧（業者・条件により異なります）</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {costCards.map((c) => (
            <div key={c.label} className="bg-white rounded-xl shadow-sm border border-green-100 p-4 text-center">
              <p className="text-sm text-gray-500 mb-1">{c.label}</p>
              <p className="text-xl font-bold text-[#15803D]">{c.range}</p>
              <p className="text-xs text-gray-400">/ {c.unit}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/cost/price/" className="text-[#15803D] font-bold hover:underline text-sm">
            詳細な費用相場ガイドを見る →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F0FDF4] rounded-xl p-5 border border-green-100">
                <p className="font-bold text-[#15803D] mb-2 flex items-start gap-2">
                  <span className="bg-[#15803D] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">Q</span>
                  {faq.q}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                  <span className="bg-[#F59E0B] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">A</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#15803D] to-[#166534] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">庭のことで困ったら、まず比較</h2>
          <p className="text-green-100 mb-6">無料で複数の業者から見積もりを取って、最適な業者を選びましょう。</p>
          <Link
            href="/ranking/"
            className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg inline-block"
          >
            無料で業者を比較する
          </Link>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </section>
    </div>
  );
}
