import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/kawasaki/hozon-jumoku/";
const TITLE = "川崎市の保存樹木・保存樹林・保存生垣の奨励金｜保存樹木は年2,400円、まちの樹の診断・治療助成";
const DESC =
  "川崎市では、市と管理協定を結んだ保存樹木に年2,400円、保存樹林・保存生垣に年12,000円の奨励金が交付されます。" +
  "「まちの樹50選」の樹木には診断・治療の助成もあります。対象と業者に頼む前の確認事項を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "川崎市の保存樹木・保存樹林・保存生垣の奨励金と、まちの樹50選の診断・治療の助成を、川崎市公園緑地協会の公式ページにもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "kawasaki",
  city: "川崎",
  crumb: "保存樹木の奨励金",
  title: TITLE,
  jsonLdDescription: "川崎市の保存樹木・保存樹林・保存生垣の基準と奨励金、まちの樹50選の診断・治療の助成を、川崎市公園緑地協会の公式ページにもとづいて整理しています。",
  updatedIso: "2026-11-07",
  updatedLabel: "2026年11月7日",
  checked: "2026年11月7日",
  lead: [
    "川崎市では、一定の大きさの樹木・樹林・生垣について、市と管理協定を締結した所有者に奨励金が交付されます。" +
      "また、川崎市「まちの樹50選」の指定を受けた樹木には、樹木医等の診断と治療の費用の一部を助成する制度があります。",
    "いずれも対象は協定や指定を受けた樹木で、一般の庭木には使えません。" +
      "本ページでは、公益財団法人川崎市公園緑地協会の「緑地保全事業」「まちの樹診断助成」（2026年11月7日確認）の記載をもとに整理します。",
  ],
  factsTitle: "制度の要点",
  facts: [
    { k: "保存樹木", v: "高さ10m以上、幹周り（目通り）1m以上の樹木。市と管理協定を締結した所有者に年間2,400円の奨励金" },
    { k: "保存樹林", v: "300㎡以上の樹林。市と管理協定を締結した所有者に年間12,000円の奨励金" },
    { k: "保存生垣", v: "30m以上の生垣。市と管理協定を締結した所有者に年間12,000円の奨励金" },
    { k: "まちの樹の診断", v: "「まちの樹50選」の指定樹木。1件当たり診断に要した費用または15,000円のいずれか低い額" },
    { k: "まちの樹の治療", v: "診断の結果により樹木の衰退対策として行う治療。経費の2分の1以内・10万円が限度" },
    { k: "問い合わせ（奨励金）", v: "川崎市建設緑政局 みどりの協働推進課（電話 044-200-2380）" },
  ],
  factsNote: "出典：川崎市公園緑地協会「緑地保全事業」「まちの樹診断助成」。2026年11月7日確認。",
  sections: [
    {
      id: "sb-request",
      title: "保存樹木・まちの樹の手入れを業者に頼むときの確認事項",
      cards: [
        { h: "協定・指定の有無を確かめる", b: "奨励金は市と管理協定を締結した所有者が対象です。まちの樹の助成は「まちの樹50選」の指定樹木が対象です。" },
        { h: "奨励金は剪定費の補助ではない", b: "保存樹木等の奨励金は年額で交付されるもので、公式ページには剪定費そのものを補助する記載はありません。" },
        { h: "治療は診断の結果にもとづく", b: "まちの樹の治療の助成は、樹木医等の診断の結果により衰退対策として行う経費が対象です。" },
        { h: "申請書類を先にそろえる", b: "まちの樹診断等助成金交付申請書・変更（取消）申請書・完了報告書が協会のページで案内されています。" },
      ],
      cardsAlt: true,
      after: (
        <>
          川崎で庭の手入れを業者に頼む方法は
          <L href="/area/kawasaki/">川崎の造園・庭の手入れ業者</L>
          、生垣をつくる場合の助成は
          <L href="/area/kawasaki/ikegaki-josei/">川崎市の生垣づくり助成</L>
          で解説しています。
        </>
      ),
    },
    {
      id: "sb-note",
      title: "大木の手入れで気をつけること",
      body: (
        <P>
          保存樹木の基準は高さ10m以上・幹周り1m以上の木です。高所作業の体制や、作業中の事故に備えた保険の有無を見積もりの段階で業者に確認します。樹勢が気になる場合は、
          <L href="/guide/tree-doctor/">樹木医への相談</L>
          も参考にしてください。
        </P>
      ),
    },
  ],
  faqs: [
    { q: "川崎市の保存樹木の奨励金はいくらですか。", a: "高さ10m以上、幹周り（目通り）1m以上の樹木について、市と管理協定を締結した所有者に年間2,400円が交付されます。" },
    { q: "保存樹林や生垣にも奨励金はありますか。", a: "300㎡以上の保存樹林、30m以上の保存生垣について、市と管理協定を締結した所有者に年間12,000円が交付されます。" },
    { q: "まちの樹の治療の助成はいくらですか。", a: "「まちの樹50選」の指定樹木について、経費の2分の1以内・10万円が限度です。診断は1件当たり診断に要した費用または15,000円のいずれか低い額です。" },
    { q: "普通の庭木にも使えますか。", a: "使えません。対象は市と管理協定を締結した樹木等、または「まちの樹50選」の指定樹木です。" },
  ],
  sources: [
    { org: "川崎市公園緑地協会", title: "緑地保全事業 - 公益財団法人 川崎市公園緑地協会", url: "https://www.kawasaki-green.or.jp/about/project/green-conservation" },
    { org: "川崎市公園緑地協会", title: "まちの樹診断助成 - 公益財団法人 川崎市公園緑地協会", url: "https://www.kawasaki-green.or.jp/furtherance/diagnosis" },
  ],
  related: [
    { href: "/area/sagamihara/hozon-jumoku/", label: "相模原市の保存樹木・保存樹林の補助" },
    { href: "/guide/hedge-subsidy/", label: "政令市・中核市の生垣・緑化助成の一覧" },
    { href: "/area/kawasaki/", label: "川崎の造園・庭の手入れ業者" },
    { href: "/area/kawasaki/ikegaki-josei/", label: "川崎市の生垣づくり助成" },
    { href: "/guide/tree-doctor/", label: "樹木医への相談" },
  ],
  cta: "まちの樹の治療に助成を使う場合は、樹木医等の診断を受けてから申請書類をそろえ、協会の手順に沿って業者に作業を依頼してください。",
};

export default function KawasakiHozonJumokuPage() {
  return <SubsidyPage c={c} />;
}
