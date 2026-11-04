// TOP「エリアから探す」用の一覧（2026-11-04）。app/components/AreaLinks.tsx の AREAS（＝app/area/<slug>/page.tsx がある市）を地方・都道府県ごとに並べる。
// 東京は別枠（/area/tokyo/ のみ。23区・市ごとのページは当サイトに無い）。
// AREAS に市を足したら、ここにも足す（足し忘れはビルド時にエラーで止まる）。
import { AREAS } from "@/app/components/AreaLinks";

export type AreaLink = { slug: string; label: string };
export type Prefecture = { name: string; areas: AreaLink[] };
export type Region = { name: string; prefectures: Prefecture[] };

const label = (slug: string): AreaLink => {
  const hit = AREAS.find((x) => x.slug === slug);
  if (!hit) throw new Error(`areaRegions: AREAS に無い slug ${slug}`);
  return { slug, label: hit.city };
};
const p = (name: string, slugs: string[]): Prefecture => ({ name, areas: slugs.map(label) });

export const tokyo = label("tokyo");

export const regions: Region[] = [
  { name: "北海道・東北", prefectures: [p("北海道", ["sapporo"]), p("宮城県", ["sendai"])] },
  {
    name: "関東（東京を除く）",
    prefectures: [
      p("茨城県", ["mito"]),
      p("栃木県", ["utsunomiya"]),
      p("埼玉県", ["saitama", "kawaguchi"]),
      p("千葉県", ["chiba", "funabashi"]),
      p("神奈川県", ["yokohama", "kawasaki", "sagamihara"]),
    ],
  },
  {
    name: "中部",
    prefectures: [
      p("新潟県", ["niigata"]),
      p("富山県", ["toyama"]),
      p("石川県", ["kanazawa"]),
      p("長野県", ["nagano"]),
      p("岐阜県", ["gifu"]),
      p("静岡県", ["shizuoka", "hamamatsu"]),
      p("愛知県", ["nagoya"]),
    ],
  },
  {
    name: "近畿",
    prefectures: [
      p("京都府", ["kyoto"]),
      p("大阪府", ["osaka", "sakai"]),
      p("兵庫県", ["kobe", "himeji", "nishinomiya"]),
      p("奈良県", ["nara"]),
    ],
  },
  {
    name: "中国・四国",
    prefectures: [p("岡山県", ["okayama", "kurashiki"]), p("広島県", ["hiroshima"]), p("香川県", ["takamatsu"]), p("愛媛県", ["matsuyama"])],
  },
  {
    name: "九州",
    prefectures: [
      p("福岡県", ["fukuoka", "kitakyushu"]),
      p("長崎県", ["nagasaki"]),
      p("熊本県", ["kumamoto"]),
      p("大分県", ["oita"]),
      p("鹿児島県", ["kagoshima"]),
    ],
  },
];

export const allAreaSlugs: string[] = [tokyo.slug, ...regions.flatMap((r) => r.prefectures.flatMap((x) => x.areas.map((a) => a.slug)))];
/** 東京を含む都道府県の数 */
export const prefCount = 1 + regions.reduce((n, r) => n + r.prefectures.length, 0);

// AREAS との突き合わせ（重複・漏れがあればビルドを止める）
{
  const set = new Set(allAreaSlugs);
  const missing = AREAS.map((a) => a.slug).filter((s) => !set.has(s));
  if (set.size !== allAreaSlugs.length || missing.length > 0 || set.size !== AREAS.length) {
    throw new Error(`areaRegions: AREAS と一致しません（漏れ: ${missing.join(",")}）`);
  }
}
