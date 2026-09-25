import Link from "next/link";

export const AREAS = [
  {
    slug: "tokyo",
    city: "東京",
    label: "東京",
    angle: "狭小地・搬出経路から考える",
  },
  {
    slug: "osaka",
    city: "大阪",
    label: "大阪",
    angle: "個人宅と管理組合・店舗の分岐",
  },
  {
    slug: "nagoya",
    city: "名古屋",
    label: "名古屋",
    angle: "自社施工型と紹介型の見分け方",
  },
  {
    slug: "yokohama",
    city: "横浜",
    label: "横浜",
    angle: "高低差のある庭と保険・保証",
  },
  {
    slug: "sapporo",
    city: "札幌",
    label: "札幌",
    angle: "雪を前提にした年間計画",
  },
  {
    slug: "fukuoka",
    city: "福岡",
    label: "福岡",
    angle: "依頼内容の伝え方と仕上がりの共有",
  },
  {
    slug: "sendai",
    city: "仙台",
    label: "仙台",
    angle: "立ち会えない庭の頼み方",
  },
  {
    slug: "kobe",
    city: "神戸",
    label: "神戸",
    angle: "見積書の読み方と書面の確認",
  },
  {
    slug: "kyoto",
    city: "京都",
    label: "京都",
    angle: "仕上がりの方針と継続管理",
  },
  {
    slug: "hiroshima",
    city: "広島",
    label: "広島",
    angle: "困りごとの切り分けと優先順位",
  },
  {
    slug: "saitama",
    city: "さいたま",
    label: "さいたま",
    angle: "作業日の近隣への配慮と段取り",
  },
  {
    slug: "chiba",
    city: "千葉",
    label: "千葉",
    angle: "資格と許可の確かめ方",
  },
  {
    slug: "kawasaki",
    city: "川崎",
    label: "川崎",
    angle: "完了時の確認と手直しの頼み方",
  },
  {
    slug: "kitakyushu",
    city: "北九州",
    label: "北九州",
    angle: "日程の決め方と天候による順延",
  },
  {
    slug: "niigata",
    city: "新潟",
    label: "新潟",
    angle: "誰が決めて誰が払うかの分担",
  },
  {
    slug: "shizuoka",
    city: "静岡",
    label: "静岡",
    angle: "問い合わせ手段と最初のやり取り",
  },
  {
    slug: "hamamatsu",
    city: "浜松",
    label: "浜松",
    angle: "作業日までの受け入れの支度",
  },
  {
    slug: "sagamihara",
    city: "相模原",
    label: "相模原",
    angle: "当日の立ち会い方と声のかけどころ",
  },
  {
    slug: "sakai",
    city: "堺",
    label: "堺",
    angle: "食い違いに備える記録の残し方",
  },
  {
    slug: "okayama",
    city: "岡山",
    label: "岡山",
    angle: "相見積もりの揃え方と断り方",
  },
  {
    slug: "kumamoto",
    city: "熊本",
    label: "熊本",
    angle: "支払いの方法と契約が決まる時点",
  },
  {
    slug: "kagoshima",
    city: "鹿児島",
    label: "鹿児島",
    angle: "予算から範囲を組み立てる",
  },
] as const;

export type AreaSlug = (typeof AREAS)[number]["slug"];

/**
 * 全エリアを相互にリンクするブロック。
 * current に自分のスラッグを渡すと、そのエリアだけ非リンクの現在地表示になる。
 */
export default function AreaLinks({ current }: { current?: AreaSlug }) {
  return (
    <section id="other-areas" className="scroll-mt-20 mb-12">
      <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
        他のエリアの業者選び
      </h2>
      <p className="text-[15px] leading-8 text-text-secondary mb-5">
        造園ナビでは、エリアごとに異なる「庭の条件」と「依頼のしかた」を切り口に業者選びを整理しています。
        いずれのページも掲載サービスは共通ですが、確認すべき順番が変わります。
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {AREAS.map((a) => {
          const isCurrent = a.slug === current;
          return (
            <li key={a.slug}>
              {isCurrent ? (
                <span
                  aria-current="page"
                  className="block rounded-2xl border border-primary bg-surface-alt p-4"
                >
                  <span className="block font-bold text-text-primary">
                    {a.city}（このページ）
                  </span>
                  <span className="block text-sm text-text-secondary mt-1">{a.angle}</span>
                </span>
              ) : (
                <Link
                  href={`/area/${a.slug}/`}
                  className="block rounded-2xl border border-border bg-surface p-4 hover:border-primary transition-colors"
                >
                  <span className="block font-bold text-text-primary">
                    {a.city}の造園・庭の手入れ業者
                  </span>
                  <span className="block text-sm text-text-secondary mt-1">{a.angle}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
