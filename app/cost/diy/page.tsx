import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "DIY庭づくりガイド【費用・道具・失敗しないコツ】",
  description:
    "DIYで庭をつくる方法を初心者向けにわかりやすく解説。必要な道具・費用の目安・失敗しないコツ。プロに頼むべき作業との見極め方も紹介します。",
};

const diyProjects = [
  {
    title: "芝張りDIY",
    difficulty: "初級",
    cost: "1万〜5万円（30㎡）",
    time: "1〜2日",
    tools: ["スコップ", "レーキ", "目土", "ローラー"],
    steps: [
      "雑草を除去し地面を平らにならす",
      "床土（目土）を均一に敷く",
      "芝生をブロック状にカットして敷き詰める",
      "目土を入れてローラーで転圧",
      "たっぷり水やりをして根付かせる",
    ],
    points: "高麗芝なら比較的失敗が少ない。傾斜地はプロに依頼推奨。",
  },
  {
    title: "砂利敷きDIY",
    difficulty: "初級",
    cost: "5,000〜3万円（10㎡）",
    time: "半日〜1日",
    tools: ["スコップ", "熊手", "防草シート", "砂利"],
    steps: [
      "雑草を除去して地面を整える",
      "防草シートを敷いてピンで固定",
      "砂利を均一に3〜5cm厚さに敷く",
      "砂利の量は1㎡あたり60〜80kgが目安",
    ],
    points: "防草シートを必ず敷くことで雑草対策になる。砂利の種類（玉砂利・砕石等）で雰囲気が変わる。",
  },
  {
    title: "花壇の縁取りDIY",
    difficulty: "初級",
    cost: "3,000〜2万円",
    time: "半日",
    tools: ["スコップ", "煉瓦またはレンガ調ブロック", "砂"],
    steps: [
      "花壇の形をロープで決める",
      "溝を掘って砂を入れる",
      "レンガ・石を並べて縁を作る",
      "内側に腐葉土・培養土を入れる",
    ],
    points: "水糸を使うと直線・曲線が美しく仕上がる。",
  },
  {
    title: "ウッドデッキDIY",
    difficulty: "中級",
    cost: "10〜30万円",
    time: "2〜5日",
    tools: ["電動ドライバー", "丸ノコ", "水平器", "防腐材"],
    steps: [
      "設計図を作成してサイズを決める",
      "基礎（束石）を設置して水平を確認",
      "根太・大引きを組んで床を構成",
      "デッキ材を並べてビスで固定",
      "防腐塗料を全面に塗装して完成",
    ],
    points: "ハードウッド（イペ・ウリン）は耐久性が高いが加工が難しい。初心者はSPF材（防腐処理済み）がおすすめ。",
  },
];

const diyVsPro = [
  {
    category: "草刈り・除草",
    diy: "◎ 自分でOK",
    pro: "広い庭・法面は業者が効率的",
    note: "電動草刈り機があれば十分",
  },
  {
    category: "低木の軽い剪定",
    diy: "◎ 自分でOK",
    pro: "仕上がりのこだわりがあれば業者",
    note: "電動バリカン・剪定バサミで対応可",
  },
  {
    category: "高木の剪定（3m以上）",
    diy: "× 危険",
    pro: "◎ 必ず業者へ",
    note: "転落リスクが高い",
  },
  {
    category: "木の伐採",
    diy: "△ 小木のみ",
    pro: "◎ 基本的に業者へ",
    note: "3m以上は絶対にプロへ",
  },
  {
    category: "芝張り",
    diy: "◎ 自分でOK",
    pro: "大面積・傾斜地は業者推奨",
    note: "基礎知識があれば可能",
  },
  {
    category: "庭のデザイン設計",
    diy: "△ 小規模なら",
    pro: "◎ トータルリフォームは業者",
    note: "設計の専門知識が必要",
  },
];

export default function DIYPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "費用・料金ガイド", href: "/cost/price/" },
          { label: "DIY庭づくりガイド" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-full">DIYガイド</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">DIY庭づくりガイド</h1>
          <p className="text-gray-500 mt-2">初心者でもできるDIYと、プロに任せるべき作業の見極め方</p>
        </div>

        {/* DIY vs Pro Table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <div className="bg-[#15803D] text-white px-6 py-4">
            <h2 className="font-bold text-lg">DIY vs プロ依頼 判断チャート</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left text-gray-600 font-bold">作業</th>
                  <th className="p-3 text-center text-gray-600 font-bold">DIY</th>
                  <th className="p-3 text-center text-gray-600 font-bold">プロ依頼</th>
                  <th className="p-3 text-left text-gray-600 font-bold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {diyVsPro.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium text-gray-700">{row.category}</td>
                    <td className={`p-3 text-center font-bold text-sm ${row.diy.startsWith("◎") ? "text-green-600" : row.diy.startsWith("×") ? "text-red-500" : "text-yellow-600"}`}>
                      {row.diy}
                    </td>
                    <td className={`p-3 text-center text-sm ${row.pro.startsWith("◎") ? "text-green-600 font-bold" : "text-gray-600"}`}>
                      {row.pro}
                    </td>
                    <td className="p-3 text-xs text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DIY Projects */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">人気のDIY庭づくりプロジェクト</h2>
        <div className="space-y-6 mb-8">
          {diyProjects.map((project) => (
            <div key={project.title} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${project.difficulty === "初級" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                  {project.difficulty}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4 text-center text-sm">
                <div className="bg-[#F0FDF4] rounded-lg p-2">
                  <p className="text-xs text-gray-500">費用目安</p>
                  <p className="font-bold text-[#15803D]">{project.cost}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">所要時間</p>
                  <p className="font-bold text-blue-700">{project.time}</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">必要道具</p>
                  <p className="font-bold text-orange-700">{project.tools.length}点</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs font-bold text-gray-500 mb-2">必要な道具</p>
                <div className="flex flex-wrap gap-1">
                  {project.tools.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-700 rounded-full px-2 py-0.5 text-xs">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs font-bold text-gray-500 mb-2">手順</p>
                <ol className="space-y-1">
                  {project.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="bg-[#15803D] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <p className="text-xs text-yellow-800">
                  <span className="font-bold">💡 ポイント：</span>{project.points}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">DIYが難しい作業はプロに任せよう</h2>
          <p className="text-green-100 text-sm mb-4">高木の剪定や大規模リフォームはプロへの依頼が安心・確実です</p>
          <Link href="/ranking/" className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all inline-block">
            おすすめ業者ランキングを見る
          </Link>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </div>
  );
}
