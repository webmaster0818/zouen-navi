import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/sagamihara/hozon-jumoku/";
const TITLE = "相模原市の保存樹木・保存樹林｜治療費・高木剪定費の2分の1補助（樹木20万円・樹林30万円まで）";
const DESC =
  "相模原市は保存樹木に樹木診断と、樹木治療費・高木剪定費の2分の1補助（上限20万円）を、保存樹林に奨励金と高木剪定費・樹木伐採費の2分の1補助（上限30万円）を設けています。" +
  "指定基準と業者に頼む前の確認事項を市の公式ページで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "相模原市の保存樹木・保存樹林の指定基準と、樹木診断・治療費・高木剪定費・伐採費の補助、奨励金を、市の公式ページにもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "sagamihara",
  city: "相模原",
  crumb: "保存樹木の補助",
  title: TITLE,
  jsonLdDescription: "相模原市の保存樹木・保存樹林の指定基準、指定状況、樹木診断、治療費・高木剪定費・伐採費の2分の1補助、奨励金を、市の公式ページにもとづいて整理しています。",
  updatedIso: "2026-11-07",
  updatedLabel: "2026年11月7日",
  checked: "2026年11月7日",
  lead: [
    "相模原市は、市街地に残された貴重な樹林や名木・古木を保存樹林・保存樹木に指定し、所有者の協力のもとで保全しています。" +
      "令和7年7月1日現在、保存樹林は24箇所・4.4ヘクタール、保存樹木は138本です。",
    "指定を受けた樹木・樹林には、樹木診断や、治療費・高木剪定費などの2分の1補助があります。一般の庭木には使えません。" +
      "本ページでは、相模原市「保存樹林・保存樹木」（2026年11月7日確認）の記載をもとに整理します。",
  ],
  factsTitle: "制度の要点",
  facts: [
    { k: "保存樹木の指定基準", v: "都市計画区域内で、健全かつ公道または公有地から樹容が確認でき、1.5mの高さの幹周1.2m以上・高さ15m以上・株立樹木で高さ3m以上・はん登性樹木で枝葉の面積30㎡以上のいずれか" },
    { k: "保存樹木への支援", v: "樹木診断の実施。樹木治療費・高木剪定費の2分の1補助（上限20万円）。施設賠償責任保険に加入" },
    { k: "保存樹木の指定期間・管理", v: "指定期間は原則5年。管理は樹木所有者" },
    { k: "保存樹林の指定基準", v: "都市計画区域内で面積500㎡以上（樹林が集団で生育し、かつ健全であること）" },
    { k: "保存樹林への支援", v: "指定年度の固定資産税＋都市計画税に相当する奨励金。高木剪定費・樹木伐採費の2分の1補助（上限30万円）。施設賠償責任保険に加入" },
  ],
  factsNote: "出典：相模原市「保存樹林・保存樹木」（最終更新日：令和7年7月10日）。2026年11月7日確認。",
  sections: [
    {
      id: "sb-request",
      title: "保存樹木の剪定を業者に頼むときの確認事項",
      cards: [
        { h: "指定を受けているか確かめる", b: "補助の対象は市が指定した保存樹木・保存樹林です。指定の有無が分からない場合は、先に市の担当課に確認します。" },
        { h: "補助の対象になる作業か", b: "保存樹木は樹木治療費と高木剪定費、保存樹林は高木剪定費と樹木伐採費が2分の1補助の対象として示されています。" },
        { h: "上限額を見積もりと照らす", b: "保存樹木は上限20万円、保存樹林は上限30万円です。見積額と補助の上限を比べて自己負担を確認します。" },
        { h: "申請の手順は市に確認する", b: "公式ページには申請の時期や書類の記載がありません。作業の前に市の担当課へ手順を確認してから業者に依頼します。" },
      ],
      cardsAlt: true,
      after: (
        <>
          相模原で庭の手入れを業者に頼む方法は
          <L href="/area/sagamihara/">相模原の造園・庭の手入れ業者</L>
          、生垣をつくる場合の助成は
          <L href="/area/sagamihara/ikegaki-josei/">相模原市の生垣設置奨励金</L>
          で解説しています。
        </>
      ),
    },
    {
      id: "sb-note",
      title: "高木の剪定で気をつけること",
      body: (
        <P>
          保存樹木の基準は高さ15m以上や幹周1.2m以上など、一般の庭木より大きな木です。高所作業の体制や、作業中の事故に備えた保険の有無を見積もりの段階で業者に確認します。樹勢が気になる場合は、
          <L href="/guide/tree-doctor/">樹木医への相談</L>
          も参考にしてください。
        </P>
      ),
    },
  ],
  faqs: [
    { q: "相模原市の保存樹木の剪定に補助はありますか。", a: "あります。保存樹木は樹木治療費・高木剪定費の2分の1が補助され、上限は20万円です。" },
    { q: "保存樹林の場合はどうなりますか。", a: "保存樹林は高木剪定費・樹木伐採費の2分の1補助（上限30万円）があり、指定年度の固定資産税＋都市計画税に相当する奨励金も示されています。" },
    { q: "普通の庭木にも使えますか。", a: "使えません。対象は相模原市が指定した保存樹木・保存樹林です。" },
    { q: "保存樹木の指定期間はどのくらいですか。", a: "原則5年です。管理は樹木所有者が行います。" },
  ],
  sources: [
    { org: "相模原市", title: "保存樹林・保存樹木｜相模原市", url: "https://www.city.sagamihara.kanagawa.jp/kurashi/shisetsu/kouen_kankou/kouen_ryokuchi/1003104.html" },
  ],
  related: [
    { href: "/area/kawasaki/hozon-jumoku/", label: "川崎市の保存樹木等の奨励金・まちの樹の助成" },
    { href: "/guide/hedge-subsidy/", label: "政令市・中核市の生垣・緑化助成の一覧" },
    { href: "/area/sagamihara/", label: "相模原の造園・庭の手入れ業者" },
    { href: "/area/sagamihara/ikegaki-josei/", label: "相模原市の生垣設置奨励金" },
    { href: "/guide/tree-doctor/", label: "樹木医への相談" },
  ],
  cta: "保存樹木の剪定に補助を使う場合は、作業の前に市の担当課へ手順を確認し、補助の上限と見積額を照らしてから業者に依頼してください。",
};

export default function SagamiharaHozonJumokuPage() {
  return <SubsidyPage c={c} />;
}
