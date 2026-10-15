import reviewsData from "@/data/reviews.json";

// 出典つきの一次確認値（reviews.json の ratingBlock：Googleマップ・取得日つき）だけを返す。
// ratingBlock が無い・欠けている社は null（評価を表示しない）。既定値で埋めないこと。
export type VerifiedRating = {
  rating: number;
  reviewCount: number;
  fetchedAt: string;
  mapsUri: string;
  sourceLabel: string;
};

export function getVerifiedRating(slug: string): VerifiedRating | null {
  const r = (reviewsData as any[]).find((x) => x.slug === slug);
  const b = r?.ratingBlock;
  if (!b || typeof b.rating !== "number" || typeof b.reviewCount !== "number" || !b.fetchedAt || !b.mapsUri) return null;
  return b as VerifiedRating;
}
