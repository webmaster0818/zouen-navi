import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/pruning-price/" },
  title: "庭木の剪定費用｜掲載業者の公式料金と見積もりの確認点",
  description:
    "庭木の剪定費用を、掲載業者（お庭マスター・お庭110番）の公式料金（税込・下限）で示します。見積もりで確認する項目と、季節ごとの剪定の適期も紹介します。",
};

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
          <span className="bg-[#15803D] text-white text-xs font-bold px-3 py-1 rounded-full">剪定費用ガイド</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">庭木の剪定費用（掲載業者の公式料金）</h1>
          <p className="text-gray-500 mt-2">公式料金の下限と、見積もりで確認する項目</p>
        </div>

        {/* Summary Box */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border-l-4 border-[#15803D]">
          <h2 className="font-bold text-gray-800 mb-3">剪定の公式料金（税込・下限、2026-10-25確認）</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: "お庭マスター 植込み・庭木・生垣", price: "550円〜/本", src: "https://oniwa-master.info/servicelist/index.html" },
              { label: "お庭110番 庭木の剪定", price: "3,300円〜/本", src: "https://www.kusakari-a.com/price/" },
              { label: "お庭110番 生垣の剪定", price: "1,700円〜/m", src: "https://www.kusakari-a.com/price/" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F0FDF4] rounded-xl p-3 text-center border border-green-100">
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="font-bold text-[#15803D] text-sm mt-1">{item.price}</p>
                <p className="text-xs mt-1"><a href={item.src} target="_blank" rel="noopener noreferrer" className="underline text-gray-400 hover:text-[#15803D]">公式料金ページ</a></p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">※各社公式の下限です。お庭110番の同じ料金ページには「剪定 4,000円〜/本」の表示もあり、「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」と注記しています。木の高さ・樹種ごとの金額は、業者の見積もりで確認してください。</p>
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
              { num: "1", item: "作業内容の明細", desc: "対象の木と剪定方法が明記されているかを確認します" },
              { num: "2", item: "廃棄物処分費", desc: "剪定ゴミの処分費が含まれているか、別途かを確認します" },
              { num: "3", item: "出張・交通費", desc: "出張費が含まれているかを確認します" },
              { num: "4", item: "追加料金の条件", desc: "想定以上の作業量になった場合の追加料金の規定を確認します" },
              { num: "5", item: "アフターフォロー", desc: "作業後の不備対応・保証の有無を確認します" },
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
              <p className="font-bold text-gray-700">剪定ガイド</p>
              <p className="text-xs text-gray-500">時期・方法・業者の選び方</p>
            </div>
          </Link>
          <Link href="/ranking/pruning/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors shadow-sm flex items-center gap-3">
            <span className="text-3xl"></span>
            <div>
              <p className="font-bold text-gray-700">剪定業者ランキング</p>
              <p className="text-xs text-gray-500">上位5社の比較</p>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">剪定費用を見積もりで確認する</h2>
          <p className="text-green-100 text-sm mb-4">お庭110番は24時間365日受付です。対応エリア・加盟店・現場状況により、当日中の施工が難しい場合や、事前確認のうえ調査・見積もりに費用がかかる場合があります</p>
          <Link href="/company/oniwa-110/" className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all inline-block">
            お庭110番の詳細を見る
          </Link>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </div>
  );
}
