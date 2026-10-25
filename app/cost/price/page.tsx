import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/price/" },
  title: "庭工事の料金｜剪定・伐採・草刈りの公式料金（掲載業者）",
  description:
    "掲載業者（お庭マスター・お庭110番）の公式料金ページで確認した剪定・伐採・草刈り・植栽の料金（税込・下限）をまとめています。金額は業者の見積もりで確認してください。",
};

const CategoryIcon = ({ title }: { title: string }) => {
  if (title.includes("剪定")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"/></svg>;
  if (title.includes("伐採")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
  if (title.includes("草刈り")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m0 0C12 7 7 5 7 5s1 5 5 7zm0 0c0-5 5-7 5-7s-1 5-5 7z"/></svg>;
  if (title.includes("デザイン") || title.includes("リフォーム")) return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>;
  return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>;
};

// 掲載業者の公式料金（税込・下限）。2026-10-25 に各社の公式料金ページで確認した値だけを載せる。
// 公式で確認できない幅（高さ別・面積別・処分費など）は載せない
const OM = "https://oniwa-master.info/servicelist/index.html";
const O110 = "https://www.kusakari-a.com/price/";

const priceCategories = [
  {
    title: "剪定・刈り込み",
    items: [
      { name: "植込み・庭木・生垣の剪定（お庭マスター）", price: "550円〜", unit: "1本", src: OM },
      { name: "庭木の剪定（お庭110番）", price: "3,300円〜", unit: "1本", src: O110, note: "同じ料金ページに「剪定 4,000円〜/本」の表示もあります" },
      { name: "生垣の剪定（お庭110番）", price: "1,700円〜", unit: "1m", src: O110 },
    ],
  },
  {
    title: "伐採・伐根",
    items: [
      { name: "伐採（お庭マスター）", price: "3,300円〜", unit: "1本", src: OM },
      { name: "伐採（お庭110番）", price: "5,500円〜", unit: "1本", src: O110, note: "同じ料金ページに「伐採・伐根 6,400円〜/本」の表示もあります" },
      { name: "伐根（お庭110番）", price: "11,000円〜", unit: "1本", src: O110 },
    ],
  },
  {
    title: "草刈り・除草",
    items: [
      { name: "機械刈り（お庭110番）", price: "390円〜", unit: "1㎡", src: O110, note: "同じ料金ページに「草刈り・除草 163円〜/㎡」の表示もあります" },
    ],
  },
  {
    title: "植栽・芝張り",
    items: [
      { name: "庭木の植栽（お庭110番）", price: "11,000円〜", unit: "1本", src: O110 },
      { name: "芝張り施工（お庭110番）", price: "2,800円〜", unit: "1㎡", src: O110 },
    ],
  },
];

export default function PricePage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "費用・料金ガイド" },
          { label: "庭工事の料金" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">庭工事の料金（掲載業者の公式料金）</h1>
          <p className="text-gray-500 mt-2">剪定・伐採・草刈り・植栽の公式料金（税込・下限、2026-10-25確認）</p>
        </div>

        {/* Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
          <strong>料金について：</strong>各社の公式料金ページに記載されている下限（〜円から）だけを掲載しています。木の高さ・面積ごとの金額や処分費は公式で確認できないため掲載していません。お庭110番は「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」と注記しています。金額は業者の見積もりで確認してください。
        </div>

        {/* Price Categories */}
        <div className="space-y-8">
          {priceCategories.map((cat) => (
            <div key={cat.title} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-[#15803D] text-white px-6 py-4 flex items-center gap-2">
                <CategoryIcon title={cat.title} />
                <h2 className="text-lg font-bold">{cat.title}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between px-6 py-3">
                    <div>
                      <span className="text-gray-700 text-sm">{item.name}</span>
                      {item.note && <p className="text-xs text-gray-500 mt-0.5">※{item.note}</p>}
                      <p className="text-xs mt-0.5"><a href={item.src} target="_blank" rel="noopener noreferrer" className="underline text-gray-400 hover:text-[#15803D]">公式料金ページ</a></p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-[#15803D]">{item.price}</span>
                      <span className="text-xs text-gray-400 ml-1">/ {item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Saving Tips */}
        <div className="mt-8 bg-[#F0FDF4] rounded-xl p-6 border border-green-200">
          <h2 className="font-bold text-[#15803D] text-lg mb-4">費用を抑える5つのポイント</h2>
          <div className="space-y-2">
            {[
              "複数本をまとめて依頼すると、1本あたりの費用が下がる場合があります",
              "年間メンテナンス契約は、スポット依頼より割安になる場合があります",
              "剪定ゴミを自治体の収集に出すと、処分費を抑えられます",
              "繁忙期（春・秋）を避けて依頼すると、日程を調整しやすくなります",
              "見積もりは3社以上から取得して比較します",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#F59E0B] font-bold flex-shrink-0"></span>
                {tip}
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/cost/pruning-price/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-center shadow-sm">
            <span className="text-2xl"></span>
            <p className="font-bold text-gray-700 mt-2 text-sm">剪定費用の詳細ガイド</p>
          </Link>
          <Link href="/cost/diy/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-center shadow-sm">
            <span className="text-2xl"></span>
            <p className="font-bold text-gray-700 mt-2 text-sm">DIY庭づくりガイド</p>
          </Link>
          <Link href="/ranking/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-center shadow-sm">
            <span className="text-2xl"></span>
            <p className="font-bold text-gray-700 mt-2 text-sm">業者ランキング</p>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">実際の費用を確認するには</h2>
          <p className="text-green-100 text-sm mb-4">複数の業者から無料で見積もりを取得し、費用を比較することをおすすめします。</p>
          <Link href="/ranking/" className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all inline-block">
            無料で見積もり比較する
          </Link>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </div>
  );
}
