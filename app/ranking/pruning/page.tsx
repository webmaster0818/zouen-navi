import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import { getVerifiedRating } from "@/app/lib/verifiedRating";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/pruning/" },
  title: "剪定業者ランキング【おすすめ5選】費用・口コミ比較",
  description:
    "庭木の剪定を得意とする業者を比較しています。料金・対応の早さ・口コミの観点から、剪定専門業者の上位5社をランキング形式で紹介します。",
};

const pruningSpecialists = companiesData.filter((c) =>
  ["oniwa-master", "oniwa-110", "smile-garden", "oniwa-madoguchi", "kurashi-market"].includes(c.slug)
);

// 掲載業者の公式料金（税込・下限）。2026-10-25 に各社の公式料金ページで確認した値だけを載せる
const pricingTable = [
  { company: "お庭マスター", type: "植込み・庭木・生垣の剪定", price: "550円〜/本", src: "https://oniwa-master.info/servicelist/index.html" },
  { company: "お庭110番", type: "庭木の剪定", price: "3,300円〜/本", src: "https://www.kusakari-a.com/price/" },
  { company: "お庭110番", type: "生垣の剪定", price: "1,700円〜/m", src: "https://www.kusakari-a.com/price/" },
];

export default function PruningRankingPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "業者ランキング", href: "/ranking/" },
          { label: "剪定専門ランキング" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="bg-[#15803D] text-white text-xs font-bold px-3 py-1 rounded-full">剪定特化</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">剪定業者ランキング</h1>
          <p className="text-gray-500 mt-2">庭木の剪定を得意とする業者の上位5社</p>
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">剪定の公式料金（掲載業者）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#15803D] text-white">
                  <th className="p-3 text-left rounded-tl-lg">業者</th>
                  <th className="p-3 text-left">作業</th>
                  <th className="p-3 text-center">公式料金（税込・下限）</th>
                  <th className="p-3 text-left rounded-tr-lg">出典</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={row.company + row.type} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium text-gray-700">{row.company}</td>
                    <td className="p-3 text-gray-700">{row.type}</td>
                    <td className="p-3 text-center text-[#15803D] font-bold">{row.price}</td>
                    <td className="p-3 text-xs"><a href={row.src} target="_blank" rel="noopener noreferrer" className="underline text-gray-500 hover:text-[#15803D]">公式料金ページ</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">※2026-10-25確認。お庭110番の同じ料金ページには「剪定 4,000円〜/本」の表示もあり、「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」と注記しています。木の高さごとの金額は、業者の見積もりで確認してください。</p>
        </div>

        {/* Rankings */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">剪定業者おすすめ TOP5</h2>
        <div className="space-y-4 mb-8">
          {pruningSpecialists.map((company, i) => {
            const medals = ["", "", "", "4位", "5位"];
            return (
              <div key={company.slug} className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 ${i === 0 ? "border-yellow-400" : "border-transparent"}`}>
                <div className="flex flex-col md:flex-row">
                  <div className={`${i === 0 ? "bg-gradient-to-b from-yellow-400 to-yellow-500" : "bg-[#15803D]"} flex items-center justify-center p-4 md:w-20 text-white`}>
                    <div className="text-center">
                      <span className="text-2xl">{["", "", "", "", ""][i]}</span>
                      <p className="text-xs font-bold mt-1">{medals[i]}</p>
                    </div>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{company.name}</h3>
                        <p className="text-sm text-gray-500">{company.tagline}</p>
                      </div>
                      {(() => {
                        const vr = getVerifiedRating(company.slug);
                        return vr ? (
                          <div className="text-right">
                            <span className="font-bold text-gray-800">★{vr.rating}</span>
                            <p className="text-xs text-gray-400">{vr.sourceLabel}・口コミ{vr.reviewCount}件（{vr.fetchedAt}時点）</p>
                          </div>
                        ) : null;
                      })()}
                    </div>
                    <ul className="text-xs text-gray-600 space-y-1 mb-3">
                      {company.pros.slice(0, 2).map((p) => (
                        <li key={p} className="flex items-start gap-1">
                          <span className="text-green-500"></span> {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/company/${company.slug}/`}
                      className="inline-block bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors"
                    >
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips */}
        <div className="bg-[#F0FDF4] rounded-xl p-6 mb-6 border border-green-200">
          <h2 className="font-bold text-[#15803D] text-lg mb-3">剪定業者選びの3つのポイント</h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "見積もりの明確さ", desc: "作業内容・ゴミ処分費・出張費が明記されているかを確認します" },
              { num: "2", title: "資格・保険の有無", desc: "造園技能士・樹木医の資格と賠償責任保険の加入状況を確認します" },
              { num: "3", title: "複数社で比較する", desc: "3社以上から見積もりを取得すると、相場を把握しやすくなります" },
            ].map((tip) => (
              <div key={tip.num} className="flex items-start gap-3">
                <span className="bg-[#15803D] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {tip.num}
                </span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{tip.title}</p>
                  <p className="text-xs text-gray-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">無料見積もりのご案内</h2>
          <p className="text-green-100 text-sm mb-4">お庭マスターでは、全国47都道府県の加盟拠点から剪定業者を紹介しています</p>
          <Link href="/company/oniwa-master/" className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all inline-block">
            お庭マスターで無料見積もり
          </Link>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </div>
  );
}
