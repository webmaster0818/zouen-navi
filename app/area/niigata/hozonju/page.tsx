import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/niigata/hozonju/";
const TITLE = "新潟市の保存樹等と松くい虫防除補助金｜防除費用の2分の1以内、松1本5,000円〜15,000円が上限";
const DESC =
  "新潟市は保存樹・保存樹林の松の所有者が行う松くい虫防除（樹幹注入・薬剤散布・土壌灌注）に、費用の2分の1以内を補助しています。" +
  "上限は松1本5,000円〜15,000円、保存樹林は1件10万円まで。指定基準と申請期限を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "新潟市の保存樹等の指定基準と、保存樹等の松くい虫防除補助金の補助率・上限額・防除適正期間・申請期限を、市の公式ページにもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "niigata",
  city: "新潟",
  crumb: "保存樹等の松くい虫防除補助",
  title: TITLE,
  jsonLdDescription: "新潟市の保存樹・保存樹林の指定基準と指定状況、保存樹等の松くい虫防除補助金の対象・補助率・上限額・防除適正期間・申請期限を、市の公式ページと交付要綱にもとづいて整理しています。",
  updatedIso: "2026-11-07",
  updatedLabel: "2026年11月7日",
  checked: "2026年11月7日",
  lead: [
    "新潟市は「新潟市樹木の保存及び緑化の推進に関する条例」にもとづき、市内の優れた樹木・樹林を保存樹等に指定し、保全活動に助成を行っています。" +
      "令和7年度末現在、保存樹はケヤキなど215本、保存樹林は樹木の集団36,133平方メートル（14件）と生垣259メートル（5件）です。",
    "保存樹・保存樹林の松については、所有者が行う松くい虫防除の費用の一部を補助しています。一般の庭木の松には使えません。" +
      "本ページでは、新潟市「保存樹等の指定」「保存樹等の松くい虫防除補助金について」と交付要綱（2026年11月7日確認）の記載をもとに整理します。",
  ],
  factsTitle: "制度の要点",
  facts: [
    { k: "保存樹の指定基準", v: "1.5mの高さの幹周1.2m以上・高さ12m以上・株立ちで高さ2.5m以上・はんと性樹木で枝葉の面積20㎡以上・希少または珍重価値が特に優れている、のいずれかで、健全かつ樹容が美観上すぐれているもの" },
    { k: "保存樹林の指定基準", v: "樹木の集団の土地の面積300㎡以上、または生垣の長さ20m以上" },
    { k: "防除補助の対象", v: "保存樹等の松の所有者が行う松くい虫防除（薬剤の樹幹注入・散布・土壌灌注のいずれか）の費用" },
    { k: "補助率", v: "補助対象経費の2分の1以内" },
    { k: "松1本あたりの上限額", v: "樹幹注入 薬効期間6年未満5,000円・6年以上15,000円。薬剤散布5,000円。土壌灌注5,000円" },
    { k: "保存樹林の限度", v: "上の表をもとに算出し、保存樹林1件あたり10万円が限度" },
  ],
  factsNote: "出典：新潟市「保存樹等の指定」（最終更新日：2026年3月27日）、「保存樹等の松くい虫防除補助金について」（最終更新日：2026年3月23日）、新潟市保存樹等の松くい虫防除補助金交付要綱。2026年11月7日確認。",
  sections: [
    {
      id: "sb-period",
      title: "防除の時期と申請期限",
      cards: [
        { h: "樹幹注入", b: "防除適正期間は11月から3月。申請期限は4月1日から1月31日です。" },
        { h: "薬剤散布", b: "防除適正期間は5月から8月。申請期限は4月1日から6月30日です。" },
        { h: "土壌灌注", b: "防除適正期間は2月から3月。申請期限は4月1日から1月31日です。" },
        { h: "防除の前に申請する", b: "補助金を希望する場合は防除実施前に申請が必要です。事前に各区役所建設課へ問い合わせます。" },
      ],
      after: (
        <>
          新潟で庭の手入れを業者に頼む方法は
          <L href="/area/niigata/">新潟の造園・庭の手入れ業者</L>
          、松の手入れは
          <L href="/guide/pine-care/">松の手入れ</L>
          で解説しています。
        </>
      ),
    },
    {
      id: "sb-request",
      title: "業者に防除を頼むときの確認事項",
      body: (
        <P>
          交付要綱では、同時に複数の手法を申請することは原則できないとされています。また、この補助金で樹幹注入を行った保存樹等は、その薬効期間の最終年以降のものが対象です。見積もりを取る段階で、防除の方法と薬剤の薬効期間を業者に確認し、申請期限に間に合う日程で依頼します。保存樹等の枝を切り落とす場合や枯死した場合も手続きが必要なため、各区役所建設課へ問い合わせます。
        </P>
      ),
    },
  ],
  faqs: [
    { q: "新潟市の松くい虫防除の補助はいくらですか。", a: "補助対象経費の2分の1以内です。松1本あたりの上限は、樹幹注入が薬効期間6年未満5,000円・6年以上15,000円、薬剤散布と土壌灌注が5,000円です。保存樹林は1件あたり10万円が限度です。" },
    { q: "いつまでに申請すればよいですか。", a: "樹幹注入と土壌灌注は4月1日から1月31日、薬剤散布は4月1日から6月30日が申請期限です。防除の実施前に申請が必要です。" },
    { q: "自宅の庭の松にも使えますか。", a: "使えません。対象は新潟市が指定した保存樹・保存樹林の松です。" },
    { q: "保存樹の枝を切るときに手続きは要りますか。", a: "指定後に枝を切り落とす場合は手続きが必要と案内されています。各区役所建設課へ問い合わせてください。" },
  ],
  sources: [
    { org: "新潟市", title: "保存樹等の指定　新潟市", url: "https://www.city.niigata.lg.jp/kurashi/park/midori-jyosei/hozonjyu.html" },
    { org: "新潟市", title: "保存樹等の松くい虫防除補助金について　新潟市", url: "https://www.city.niigata.lg.jp/kurashi/park/midori-jyosei/hozonjyumatukuijyose.html" },
    { org: "新潟市", title: "新潟市保存樹等の松くい虫防除補助金交付要綱（PDF）", url: "https://www.city.niigata.lg.jp/kurashi/park/midori-jyosei/hozonjyumatukuijyose.files/2025matukuihojyoyoukou.pdf" },
  ],
  related: [
    { href: "/area/kanazawa/hozonju/", label: "金沢市の保存樹・景観樹の補助" },
    { href: "/guide/hedge-subsidy/", label: "政令市・中核市の生垣・緑化助成の一覧" },
    { href: "/area/niigata/", label: "新潟の造園・庭の手入れ業者" },
    { href: "/area/niigata/ryokuchi-kyotei/", label: "新潟市の生垣等設置費補助金" },
    { href: "/guide/pine-care/", label: "松の手入れ" },
  ],
  cta: "保存樹の松の防除に補助を使う場合は、防除の方法と時期を決めたうえで、実施前に各区役所建設課へ申請してから業者に作業を依頼してください。",
};

export default function NiigataHozonjuPage() {
  return <SubsidyPage c={c} />;
}
