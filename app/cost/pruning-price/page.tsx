import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "庭木の剪定費用の相場【2024年版】安い業者の選び方",
  description:
    "庭木の剪定費用の相場を樹種・高さ別に徹底解説。安い業者の選び方、見積もりのポイント、自分でやる場合との比較も紹介します。",
};

const treePricing = [
  { tree: "松（中木3m）", min: 15000, max: 50000, note: "手間のかかる樹種" },
  { tree: "松（高木5m）", min: 50000, max: 150000, note: "職人技が必要" },
  { tree: "ツツジ・サツキ", min: 800, max: 3000, note: "1株あたり" },
  { tree: "クロガネモチ", min: 5000, max: 20000, note: "中木クラス" },
  { tree: "カイヅカイブキ", min: 8000, max: 30000, note: "高さによる" },
  { tree: "モミジ・カエデ", min: 5000, max: 25000, note: "繊細な剪定が必要" },
  { tree: "オリーブ", min: 5000, max: 20000, note: "自然樹形を活かす" },
  { tree: "フジ", min: 10000, max: 40000, note: "棚の有無で変わる" },
  { tree: "ヤマボウシ", min: 5000, max: 25000, note: "中木クラス" },
  { tree: "ハナミズキ", min: 8000, max: 30000, note: "中〜高木クラス" },
];

const seasonalGuide = [
  {
    season: "春（3〜5月）",
    work: "常緑樹の剪定・形の整え、病害虫予防",
    note: "新芽前に実施。大幅な剪定に適した時期",
    color: "bg-pink-50 border-pink-200",
  },
  {
    season: "夏（6〜8月）",
    work: "軽い剪定・徒長枝の除去（主な剪定は避ける）",
    note: "夏の強剪定は樹木にストレスを与えるため注意",
    color: "bg-green-50 border-green-200",
  },
  {
    season: "秋（9〜11月）",
    work: "常緑樹の剪定・落葉前の整枝",
    note: "花木の花芽を確認しながら慎重に剪定",
    color: "bg-orange-50 border-orange-200",
  },
  {
    season: "冬（12〜2月）",
    work: "落葉樹の強剪定・樹形の大幅な見直し",
    note: "落葉樹の剪定適期。樹形全体を見渡しやすい",
    color: "bg-blue-50 border-blue-200",
  },
];

export default function PruningPricePage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "費用・料金ガイド", href: "/cost/price/" },
          { label: "剪定費用ガイド" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="bg-[#15803D] text-white text-xs font-bold px-3 py-1 rounded-full">完全ガイド</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">庭木の剪定費用の相場</h1>
          <p className="text-gray-500 mt-2">樹種・高さ別の費用と安い業者の選び方</p>
        </div>

        {/* Summary Box */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border-l-4 border-[#15803D]">
          <h2 className="font-bold text-gray-800 mb-3">剪定費用の早見表</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "低木（1m以下）", price: "500〜2,000円" },
              { label: "中木（1〜3m）", price: "2,000〜10,000円" },
              { label: "高木（3〜5m）", price: "10,000〜30,000円" },
              { label: "高木（5m以上）", price: "30,000〜80,000円" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F0FDF4] rounded-xl p-3 text-center border border-green-100">
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="font-bold text-[#15803D] text-sm mt-1">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">※1本あたりの目安。ゴミ処分費別途</p>
        </div>

        {/* Tree-specific pricing */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <div className="bg-[#15803D] text-white px-6 py-4">
            <h2 className="font-bold text-lg">樹種別・剪定費用の相場</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {treePricing.map((row) => (
              <div key={row.tree} className="flex items-center justify-between px-6 py-3">
                <div>
                  <span className="font-medium text-gray-800 text-sm">{row.tree}</span>
                  <span className="text-xs text-gray-400 ml-2">（{row.note}）</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#15803D] text-sm">
                    {row.min.toLocaleString()}〜{row.max.toLocaleString()}円
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Guide */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">季節別・剪定の適期ガイド</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {seasonalGuide.map((s) => (
            <div key={s.season} className={`rounded-xl p-4 border ${s.color}`}>
              <h3 className="font-bold text-gray-800 mb-1">{s.season}</h3>
              <p className="text-sm text-gray-700 font-medium">{s.work}</p>
              <p className="text-xs text-gray-500 mt-1">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Estimation Tips */}
        <div className="bg-[#F0FDF4] rounded-xl p-6 mb-6 border border-green-200">
          <h2 className="font-bold text-[#15803D] text-lg mb-4">見積もりの際に確認すべき5項目</h2>
          <div className="space-y-3">
            {[
              { num: "1", item: "作業内容の明細", desc: "どの木を、どのように剪定するかが明記されているか" },
              { num: "2", item: "廃棄物処分費", desc: "剪定ゴミの処分費が含まれているか、別途かを確認" },
              { num: "3", item: "出張・交通費", desc: "出張費が含まれているかを明確にする" },
              { num: "4", item: "追加料金の条件", desc: "想定以上の作業量になった場合の追加料金ルールを確認" },
              { num: "5", item: "アフターフォロー", desc: "作業後の不備対応・保証の有無を確認" },
            ].map((tip) => (
              <div key={tip.num} className="flex items-start gap-3">
                <span className="bg-[#15803D] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {tip.num}
                </span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{tip.item}</p>
                  <p className="text-xs text-gray-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Link href="/service/pruning/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors shadow-sm flex items-center gap-3">
            <span className="text-3xl"></span>
            <div>
              <p className="font-bold text-gray-700">剪定の完全ガイド</p>
              <p className="text-xs text-gray-500">時期・方法・業者の選び方</p>
            </div>
          </Link>
          <Link href="/ranking/pruning/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors shadow-sm flex items-center gap-3">
            <span className="text-3xl"></span>
            <div>
              <p className="font-bold text-gray-700">剪定業者ランキング</p>
              <p className="text-xs text-gray-500">おすすめ5社の比較</p>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">無料で剪定費用を確認する</h2>
          <p className="text-green-100 text-sm mb-4">お庭110番なら最短当日の見積もり・作業が可能です</p>
          <Link href="/company/oniwa-110/" className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all inline-block">
            無料で見積もりを依頼する
          </Link>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </div>
  );
}
