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
] as const;

export type AreaSlug = (typeof AREAS)[number]["slug"];

/**
 * 5エリアを相互にリンクするブロック。
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
