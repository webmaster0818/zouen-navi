import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "造園ナビ｜庭づくりのプロが見つかる総合ガイド",
  description:
    "庭の剪定・造園・外構工事のおすすめ業者を徹底比較。費用相場・口コミ・特徴を詳しく解説。あなたにぴったりの造園業者がすぐに見つかります。",
};

const top3 = companiesData.slice(0, 3);

const plantNav = [
  { icon: "/images/icon-tree.png", label: "シンボルツリー", href: "/plant/symbol-tree/" },
  { icon: "/images/icon-hedge.png", label: "生垣", href: "/plant/hedge/" },
  { icon: "/images/icon-flower.png", label: "花壇", href: "/plant/flower-bed/" },
  { icon: "/images/icon-tree.png", label: "日陰向き", href: "/plant/shade/" },
  { icon: "/images/icon-pruning.png", label: "手入れ楽", href: "/plant/low-maintenance/" },
];

const services = [
  { icon: "/images/icon-pruning.png", label: "剪定", href: "/service/pruning/", desc: "費用と時期の完全ガイド" },
  { icon: "/images/icon-tree.png", label: "伐採", href: "/service/felling/", desc: "費用相場と業者の選び方" },
  { icon: "/images/icon-flower.png", label: "庭デザイン", href: "/service/garden-design/", desc: "プロへの依頼方法と費用" },
  { icon: "/images/icon-japanese.png", label: "和庭園", href: "/service/japanese-garden/", desc: "坪庭から本格庭園まで" },
  { icon: "/images/icon-hedge.png", label: "年間管理", href: "/service/maintenance/", desc: "月別メンテナンスカレンダー" },
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
      {/* Hero - full-width background image with dark green gradient overlay */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          minHeight: "560px",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-b.png')" }}
          aria-hidden="true"
        />
        {/* Dark green gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(21,128,61,0.88) 0%, rgba(22,101,52,0.80) 50%, rgba(20,83,45,0.70) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-32 text-center">
          <p className="inline-block bg-[#F59E0B] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wider shadow-md">
            庭づくりの総合ガイド
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 drop-shadow-lg">
            庭づくりのプロが見つかる。
          </h1>
          <p className="text-green-100 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            剪定・造園・外構工事のおすすめ業者を徹底比較。<br className="hidden sm:inline" />
            費用相場から業者の選び方まで、プロが丁寧に解説します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking/"
              className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/cost/price/"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-10 py-4 rounded-full text-lg transition-all border-2 border-white/50 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              料金相場を確認する
            </Link>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-green-100">
            <span className="flex items-center gap-1.5">
              <span className="text-[#F59E0B]"></span> 全国対応
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#F59E0B]"></span> 無料見積もり
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#F59E0B]"></span> 複数業者を比較
            </span>
          </div>
        </div>
      </section>

      {/* Plant Type Nav */}
      <section className="bg-white border-b border-green-100 py-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">植物・テーマ別ガイド</p>
          <div className="flex flex-wrap justify-center gap-3">
            {plantNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 bg-[#F0FDF4] hover:bg-[#15803D] hover:text-white border border-green-200 hover:border-[#15803D] rounded-full px-5 py-2.5 text-sm font-medium text-[#15803D] transition-all shadow-sm hover:shadow-md"
              >
                {item.icon && <Image src={item.icon} alt={item.label} width={24} height={24} className="w-6 h-6 inline-block" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOP3 Ranking */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="bg-[#F59E0B] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">編集部おすすめ</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">造園業者ランキング TOP3</h2>
          <p className="text-gray-500 mt-2 text-sm">口コミ・費用・対応の総合評価で厳選</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {top3.map((company, i) => {
            const medals = ["", "", ""];
            const rankBorder = [
              "border-2 border-yellow-400 shadow-yellow-100 shadow-lg",
              "border border-gray-200 shadow-md",
              "border border-gray-200 shadow-md",
            ];
            const rankBadge = [
              "bg-yellow-400 text-white",
              "bg-gray-400 text-white",
              "bg-amber-700 text-white",
            ];
            return (
              <div
                key={company.slug}
                className={`bg-white rounded-2xl ${rankBorder[i]} p-6 flex flex-col transition-transform hover:-translate-y-1`}
              >
                {/* Rank header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{medals[i]}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${rankBadge[i]}`}>
                      第{i + 1}位
                    </span>
                  </div>
                  <span className="text-xs font-bold text-white bg-[#15803D] px-3 py-1 rounded-full">
                    {company.coverage}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{company.name}</h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">{company.tagline}</p>
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 bg-[#F0FDF4] rounded-lg px-3 py-2">
                  <span className="text-yellow-400 text-base">{"".repeat(Math.round(company.rating))}</span>
                  <span className="text-sm font-bold text-gray-800">{company.rating}</span>
                  <span className="text-xs text-gray-400">（{company.reviewCount}件の口コミ）</span>
                </div>
                {/* Features */}
                <ul className="text-sm text-gray-600 space-y-2 mb-5 flex-1">
                  {company.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#15803D] font-bold mt-0.5 flex-shrink-0"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/company/${company.slug}/`}
                  className={`block text-center font-bold py-3 rounded-full text-sm transition-all shadow-md hover:shadow-lg ${
                    i === 0
                      ? "bg-[#F59E0B] hover:bg-amber-500 text-white"
                      : "bg-[#15803D] hover:bg-green-700 text-white"
                  }`}
                >
                  詳細・口コミを見る →
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/ranking/"
            className="inline-flex items-center gap-2 text-[#15803D] font-bold hover:underline text-sm border border-[#15803D] px-6 py-2.5 rounded-full hover:bg-[#F0FDF4] transition-colors"
          >
            全10社のランキングを見る →
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-white py-16 border-t border-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">庭工事サービスガイド</h2>
            <p className="text-gray-500 text-sm">目的別に詳しく解説</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group bg-[#F0FDF4] hover:bg-[#15803D] rounded-2xl p-5 text-center transition-all border border-green-100 hover:border-[#15803D] shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-3 flex justify-center">
                  {svc.icon && <Image src={svc.icon} alt={svc.label} width={40} height={40} className="w-10 h-10" />}
                </div>
                <p className="font-bold text-[#15803D] group-hover:text-white text-sm mb-1 transition-colors">{svc.label}</p>
                <p className="text-xs text-gray-500 group-hover:text-green-100 transition-colors leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">庭工事の費用相場</h2>
          <p className="text-gray-500 text-sm">目安料金一覧（業者・条件により異なります）</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {costCards.map((c) => (
            <div
              key={c.label}
              className="bg-white rounded-2xl shadow-sm border border-green-100 p-5 text-center hover:shadow-md hover:border-green-300 transition-all"
            >
              <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">{c.label}</p>
              <p className="text-xl md:text-2xl font-bold text-[#15803D] leading-tight">{c.range}</p>
              <p className="text-xs text-gray-400 mt-1.5 bg-green-50 inline-block px-2 py-0.5 rounded-full">/ {c.unit}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/cost/price/"
            className="inline-flex items-center gap-2 text-[#15803D] font-bold hover:underline text-sm border border-[#15803D] px-6 py-2.5 rounded-full hover:bg-[#F0FDF4] transition-colors"
          >
            詳細な費用相場ガイドを見る →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 border-t border-green-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">よくある質問</h2>
            <p className="text-gray-500 text-sm">お客様からよく寄せられる疑問にお答えします</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F0FDF4] rounded-2xl border border-green-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5">
                  <p className="font-bold text-gray-800 mb-3 flex items-start gap-3">
                    <span className="bg-[#15803D] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-sm">Q</span>
                    <span>{faq.q}</span>
                  </p>
                  <div className="ml-9 border-l-2 border-[#F59E0B] pl-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-b.png')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(21,128,61,0.93) 0%, rgba(22,101,52,0.90) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow">庭のことで困ったら、まず比較</h2>
          <p className="text-green-100 mb-8 text-base leading-relaxed">
            無料で複数の業者から見積もりを取って、最適な業者を選びましょう。
          </p>
          <Link
            href="/ranking/"
            className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-12 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl inline-block hover:-translate-y-0.5 active:translate-y-0"
          >
            無料で業者を比較する
          </Link>
          <p className="text-xs text-green-300 mt-5">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </section>
    </div>
  );
}
