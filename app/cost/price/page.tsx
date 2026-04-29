import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "庭工事の料金相場【2024年最新】剪定・造園・外構の費用比較",
  description:
    "庭工事（剪定・伐採・草刈り・造園・外構）の料金相場を2024年最新版でまとめました。項目別の費用目安・業者に依頼する際の注意点も解説。",
};

const priceCategories = [
  {
    title: "剪定・刈り込み",
    icon: "✂️",
    items: [
      { name: "低木剪定（1m以下）", price: "500〜2,000円", unit: "1本" },
      { name: "中木剪定（1〜3m）", price: "2,000〜10,000円", unit: "1本" },
      { name: "高木剪定（3〜5m）", price: "10,000〜30,000円", unit: "1本" },
      { name: "高木剪定（5m以上）", price: "30,000〜80,000円", unit: "1本" },
      { name: "生垣の刈り込み", price: "1,500〜4,000円", unit: "1m" },
      { name: "松の剪定（中木）", price: "15,000〜50,000円", unit: "1本" },
    ],
  },
  {
    title: "伐採・根株除去",
    icon: "🪚",
    items: [
      { name: "低木伐採（1m以下）", price: "3,000〜10,000円", unit: "1本" },
      { name: "中木伐採（1〜3m）", price: "10,000〜30,000円", unit: "1本" },
      { name: "高木伐採（3〜5m）", price: "30,000〜70,000円", unit: "1本" },
      { name: "高木伐採（5m以上）", price: "50,000〜200,000円", unit: "1本" },
      { name: "根株除去（小〜中）", price: "15,000〜50,000円", unit: "1箇所" },
      { name: "根株除去（大）", price: "50,000〜150,000円", unit: "1箇所" },
    ],
  },
  {
    title: "草刈り・除草",
    icon: "🌿",
    items: [
      { name: "草刈り（30㎡未満）", price: "5,000〜15,000円", unit: "1回" },
      { name: "草刈り（30〜50㎡）", price: "10,000〜30,000円", unit: "1回" },
      { name: "草刈り（50㎡以上）", price: "300〜600円", unit: "1㎡" },
      { name: "防草シート施工", price: "800〜2,000円", unit: "1㎡" },
      { name: "除草剤散布", price: "300〜1,000円", unit: "1㎡" },
    ],
  },
  {
    title: "庭のデザイン・リフォーム",
    icon: "🏡",
    items: [
      { name: "小庭リフォーム（10㎡）", price: "50〜200万円", unit: "全体" },
      { name: "中庭リフォーム（20〜50㎡）", price: "200〜500万円", unit: "全体" },
      { name: "シンボルツリー植付", price: "30,000〜100,000円", unit: "1本" },
      { name: "花壇新設（1㎡）", price: "20,000〜80,000円", unit: "1㎡" },
      { name: "芝張り", price: "1,500〜4,000円", unit: "1㎡" },
      { name: "砂利敷き", price: "2,000〜5,000円", unit: "1㎡" },
    ],
  },
  {
    title: "廃棄・処分費用",
    icon: "🗑️",
    items: [
      { name: "剪定ゴミ処分（軽トラ1台）", price: "5,000〜15,000円", unit: "1回" },
      { name: "剪定ゴミ処分（2トン車1台）", price: "15,000〜40,000円", unit: "1回" },
      { name: "伐採木処分（1本）", price: "5,000〜30,000円", unit: "1本" },
    ],
  },
];

export default function PricePage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "費用・料金ガイド" },
          { label: "庭工事の料金相場" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="bg-[#92400E] text-white text-xs font-bold px-3 py-1 rounded-full">2024年最新版</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">庭工事の料金相場</h1>
          <p className="text-gray-500 mt-2">剪定・伐採・草刈り・造園の費用を詳しく解説</p>
        </div>

        {/* Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
          <strong>料金について：</strong>掲載金額はあくまで目安です。実際の費用は業者・地域・作業量・廃棄物量などにより異なります。必ず複数の業者から見積もりを取ることをおすすめします。
        </div>

        {/* Price Categories */}
        <div className="space-y-8">
          {priceCategories.map((cat) => (
            <div key={cat.title} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-[#15803D] text-white px-6 py-4 flex items-center gap-2">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-lg font-bold">{cat.title}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between px-6 py-3">
                    <span className="text-gray-700 text-sm">{item.name}</span>
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
              "複数本まとめて依頼すると1本あたりの費用が下がる",
              "年間メンテナンス契約を結ぶとスポット依頼より割安",
              "剪定ゴミは自分でゴミ袋に入れて出すと処分費が節約できる",
              "繁忙期（春・秋）を避けてオフシーズンに依頼する",
              "見積もりは最低3社以上から取って比較する",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#F59E0B] font-bold flex-shrink-0">💡</span>
                {tip}
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/cost/pruning-price/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-center shadow-sm">
            <span className="text-2xl">✂️</span>
            <p className="font-bold text-gray-700 mt-2 text-sm">剪定費用の詳細ガイド</p>
          </Link>
          <Link href="/cost/diy/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-center shadow-sm">
            <span className="text-2xl">🔨</span>
            <p className="font-bold text-gray-700 mt-2 text-sm">DIY庭づくりガイド</p>
          </Link>
          <Link href="/ranking/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-center shadow-sm">
            <span className="text-2xl">🏆</span>
            <p className="font-bold text-gray-700 mt-2 text-sm">業者ランキング</p>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">実際の費用を確認するには</h2>
          <p className="text-green-100 text-sm mb-4">複数の業者から無料見積もりを取って、最安値を探しましょう。</p>
          <Link href="/ranking/" className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all inline-block">
            無料で見積もり比較する
          </Link>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </div>
  );
}
