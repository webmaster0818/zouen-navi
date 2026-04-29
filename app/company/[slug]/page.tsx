import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/app/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return companiesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の評判・口コミ・費用【徹底レビュー】`,
    description: `${company.name}の特徴・料金・口コミを詳しく解説。${company.tagline}。造園ナビ編集部が実際に調査した情報をお届けします。`,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) notFound();

  const rank = companiesData.findIndex((c) => c.slug === slug) + 1;

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "業者ランキング", href: "/ranking/" },
          { label: company.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6 border-l-4 border-[#15803D]">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-sm font-bold text-white bg-[#15803D] px-2 py-0.5 rounded-full mr-2">第{rank}位</span>
              <span className="text-sm text-white bg-gray-500 px-2 py-0.5 rounded-full">{company.coverage}</span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">{company.name}</h1>
              <p className="text-gray-600 mt-1">{company.tagline}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end">
                <span className="text-yellow-400">{"".repeat(Math.round(company.rating))}</span>
                <span className="text-lg font-bold text-gray-800">{company.rating}</span>
              </div>
              <p className="text-sm text-gray-500">{company.reviewCount}件のレビュー</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{company.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {company.features.map((f) => (
              <span key={f} className="bg-[#F0FDF4] text-[#15803D] border border-green-200 rounded-full px-3 py-1 text-sm font-medium">
                 {f}
              </span>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F0FDF4] rounded-xl p-5 border border-green-200">
            <h2 className="font-bold text-[#15803D] text-lg mb-3 flex items-center gap-2">
              <span></span> メリット
            </h2>
            <ul className="space-y-2">
              {company.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold mt-0.5">◉</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
            <h2 className="font-bold text-[#92400E] text-lg mb-3 flex items-center gap-2">
              <span></span> デメリット
            </h2>
            <ul className="space-y-2">
              {company.cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-orange-500 font-bold mt-0.5">◉</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rating Details */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
          <h2 className="font-bold text-gray-800 text-lg mb-4">編集部評価</h2>
          <div className="space-y-3">
            {[
              { label: "料金の安さ", score: 4 },
              { label: "対応エリア", score: company.coverage === "全国" ? 5 : 3 },
              { label: "使いやすさ", score: 4 },
              { label: "サポート充実度", score: Math.round(company.rating) },
              { label: "総合評価", score: Math.round(company.rating) },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-3">
                <span className="w-28 text-sm text-gray-600 flex-shrink-0">{r.label}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-lg ${star <= r.score ? "text-yellow-400" : "text-gray-200"}`}></span>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-700">{r.score}.0</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">{company.name}に無料で相談する</h2>
          <p className="text-green-100 text-sm mb-4">見積もりは無料。まずは気軽に相談してみましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={company.officialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all"
            >
              公式サイトを見る（PR）
            </a>
            <Link
              href="/ranking/"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full border border-white/30 transition-all"
            >
              他の業者と比較する
            </Link>
          </div>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>

        {/* Related */}
        <div className="mt-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">関連サービスガイド</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/service/pruning/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-sm text-center">
              <span className="text-2xl"></span>
              <p className="font-medium text-gray-700 mt-1">剪定費用ガイド</p>
            </Link>
            <Link href="/cost/price/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-sm text-center">
              <span className="text-2xl"></span>
              <p className="font-medium text-gray-700 mt-1">料金相場一覧</p>
            </Link>
            <Link href="/ranking/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-sm text-center">
              <span className="text-2xl"></span>
              <p className="font-medium text-gray-700 mt-1">全業者ランキング</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
