import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import { getVerifiedRating } from "@/app/lib/verifiedRating";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/" },
  title: "造園・庭師業者ランキング2026年【10社比較】",
  description:
    "造園ナビ編集部が選定した庭師・造園業者のランキングです。料金・実績・口コミを総合的に比較した10社を紹介しています。無料で一括見積もりができるサービスも掲載しています。",
};

const medals = ["", "", ""];

export default function RankingPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "造園業者ランキング" }]} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-full">2026年版 編集部厳選</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">造園・庭師業者ランキング</h1>
          <p className="text-gray-500 mt-2">料金・実績・口コミ・対応エリアを総合評価した全10社</p>
        </div>

        {/* Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm text-yellow-800">
          <strong>※編集部注記：</strong>当ランキングは造園ナビ編集部が独自調査・取材した情報をもとに作成しています。順位は総合評価であり、特定のサービスを推奨するものではありません。アフィリエイト広告を含みます。
        </div>

        {/* Rankings */}
        <div className="space-y-4">
          {companiesData.map((company, i) => (
            <div
              key={company.slug}
              className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 ${i === 0 ? "border-yellow-400" : i === 1 ? "border-gray-300" : i === 2 ? "border-amber-600" : "border-transparent"}`}
            >
              <div className="flex flex-col md:flex-row">
                <div className={`${i < 3 ? "bg-gradient-to-b from-[#15803D] to-[#166534]" : "bg-gray-100"} flex items-center justify-center p-4 md:w-20`}>
                  <div className="text-center">
                    <span className="text-3xl">{medals[i] || ""}</span>
                    <p className={`text-xs font-bold mt-1 ${i < 3 ? "text-white" : "text-gray-500"}`}>第{i + 1}位</p>
                  </div>
                </div>
                <div className="flex-1 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{(company as { displayName?: string }).displayName ?? company.name}</h2>
                      <p className="text-sm text-gray-500">{company.tagline}</p>
                    </div>
                    {(() => {
                      const vr = getVerifiedRating(company.slug);
                      return vr ? (
                        <div className="text-right flex-shrink-0">
                          <span className="font-bold text-gray-800">★{vr.rating}</span>
                          <p className="text-xs text-gray-400">{vr.sourceLabel}・口コミ{vr.reviewCount}件（{vr.fetchedAt}時点）</p>
                        </div>
                      ) : null;
                    })()}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {company.features.slice(0, 4).map((f) => (
                      <span key={f} className="bg-[#F0FDF4] text-[#15803D] border border-green-200 rounded-full px-2 py-0.5 text-xs">
                        {f}
                      </span>
                    ))}
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5 text-xs">
                      {company.coverage}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
                    <div>
                      <span className="text-green-600 font-bold">◉ </span>
                      {company.pros[0]}
                    </div>
                    {company.cons[0] && (
                      <div>
                        <span className="text-orange-500 font-bold">◉ </span>
                        {company.cons[0]}
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="inline-block bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-6 py-2 rounded-full text-sm transition-colors"
                  >
                    詳細・口コミを見る →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">無料見積もりで比較検討できます</h2>
          <p className="text-green-100 text-sm mb-4">複数の業者に一括で見積もりを依頼し、比較検討することをおすすめします。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/oniwa-master/" className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-full transition-all text-sm">
               お庭レスキュープロ（旧お庭マスター）に相談する
            </Link>
            <Link href="/company/oniwa-madoguchi/" className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full border border-white/30 transition-all text-sm">
              お庭の窓口に相談する
            </Link>
          </div>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </div>
  );
}
