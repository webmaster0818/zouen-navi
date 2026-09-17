import Link from "next/link";
import reviewsData from "@/data/reviews.json";

type ReviewEntry = (typeof reviewsData)[number];

/** basicInfo（各社の一次確認情報）から指定ラベルの値を取り出す */
export function infoValue(entry: ReviewEntry, label: string): string {
  const row = entry.basicInfo.find((i) => i.label === label);
  return row ? row.value : "";
}

export function findReview(slug: string): ReviewEntry | undefined {
  return reviewsData.find((r) => r.slug === slug);
}

/**
 * 掲載サービスの一覧表。
 * 「運営」「対応エリア」はいずれも data/reviews.json に記録した各社の公開情報をそのまま表示する。
 * 市区町村単位の対応可否は各社が公開していないため、この表では扱わない。
 */
export default function AreaCompanyTable({ cityName }: { cityName: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm min-w-[560px]">
        <caption className="sr-only">
          造園ナビ掲載サービスの運営会社と対応エリア（各社公開情報）
        </caption>
        <thead>
          <tr className="bg-surface-alt">
            <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
              サービス名
            </th>
            <th className="text-left font-semibold text-text-primary px-4 py-3">運営会社</th>
            <th className="text-left font-semibold text-text-primary px-4 py-3">
              公開されている対応エリア
            </th>
            <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
              詳細
            </th>
          </tr>
        </thead>
        <tbody>
          {reviewsData.map((r, idx) => (
            <tr key={r.slug} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
              <th
                scope="row"
                className="text-left align-top font-semibold text-text-primary px-4 py-3"
              >
                {r.companyName}
              </th>
              <td className="px-4 py-3 align-top text-text-secondary leading-7">
                {infoValue(r, "運営")}
              </td>
              <td className="px-4 py-3 align-top text-text-secondary leading-7">
                {infoValue(r, "対応エリア")}
              </td>
              <td className="px-4 py-3 align-top whitespace-nowrap">
                <Link href={`/review/${r.slug}/`} className="text-primary underline underline-offset-2">
                  口コミ
                </Link>
                <span className="text-text-muted px-1">/</span>
                <Link href={`/company/${r.slug}/`} className="text-primary underline underline-offset-2">
                  比較
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="bg-surface-alt px-4 py-3 text-xs text-text-muted leading-6">
        出典：各社公式サイトの公開情報（造園ナビ編集部調べ）。いずれのサービスも公開情報の上では全国を対象としており、
        {cityName}市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に{cityName}
        で作業を受けられるかどうかは、依頼時に各社へ直接ご確認ください。
      </p>
    </div>
  );
}
