import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/kagoshima/hozonju/";
const TITLE = "鹿児島市の保存樹・保存樹林の制度｜樹木医の定期診断・樹勢回復は市の負担、剪定は所有者の負担";
const DESC =
  "鹿児島市は条例に基づき、所有者の申請で保存樹・保存樹林を指定し、樹木医の定期診断や樹勢回復措置（費用は全額市の負担）と奨励金の交付を行っています。" +
  "剪定などの日常管理は所有者の負担です。指定の要件と届出を市の公式ページで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "鹿児島市の保存樹・保存樹林の指定要件、届出、樹木医の定期診断・樹勢回復と奨励金を、市の公式ページにもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "kagoshima",
  city: "鹿児島",
  crumb: "保存樹の制度",
  title: TITLE,
  jsonLdDescription: "鹿児島市の保存樹・保存樹林の制度について、指定の要件、伐採等の届出、樹木医の定期診断・樹勢回復措置（全額市の負担）、奨励金の交付と指定状況を、市の公式ページにもとづいて整理しています。",
  updatedIso: "2026-11-10",
  updatedLabel: "2026年11月10日",
  checked: "2026年11月10日",
  lead: [
    "鹿児島市は、「鹿児島市保存樹等及び自然環境保護地区に関する条例」に基づき、保存樹・保存樹林を指定しています。樹木・樹林の所有者は、市長に対して指定を申請できます。" +
      "保存樹は令和7年11月25日現在で38本が指定されています。",
    "指定されると、市が派遣する樹木医による定期診断や樹勢回復措置（費用は全額市の負担）と、奨励金の交付を受けられます。剪定や落ち葉の清掃などの日常的な管理は所有者の責任とされています。" +
      "本ページでは、鹿児島市「鹿児島市の保存樹及び保存樹林の制度」とよくある質問（2026年11月10日確認）の記載をもとに整理します。",
  ],
  factsTitle: "制度の要点",
  facts: [
    { k: "根拠", v: "鹿児島市保存樹等及び自然環境保護地区に関する条例" },
    { k: "指定の方法", v: "樹木等の所有者が市長に申請し、保存樹等指定審査会に諮問したうえで決定" },
    { k: "届出", v: "態様を著しく変更する伐採や、生育に影響を及ぼすおそれのある行為をする場合は市長への届出が必要。枝葉の剪定等の日常的な管理は届出不要" },
    { k: "市の支援", v: "樹木医による定期診断・助言・樹勢回復措置（費用は全額市の負担）。所有者等への奨励金の交付" },
    { k: "日常の管理", v: "剪定や落葉の清掃など日常的な管理は所有者等の責任・原則として所有者の負担" },
    { k: "指定状況", v: "保存樹38本（令和7年11月25日現在）" },
    { k: "問い合わせ", v: "鹿児島市 環境局環境部環境保全課（電話 099-216-1298）" },
  ],
  factsNote: "出典：鹿児島市「鹿児島市の保存樹及び保存樹林の制度」（更新日 2025年12月9日）、よくある質問「庭の木を保存樹に指定した場合、市からどのような助成を受けられますか。」（更新日 2023年10月24日）、保存樹一覧。2026年11月10日確認。奨励金の金額と申請方法は、市のページに記載がありません。",
  sections: [
    {
      id: "sb-criteria",
      title: "保存樹等の指定の要件",
      body: (
        <P>
          指定は、次の要件を満たす樹木等について、保存樹等指定審査会に諮問したうえで決定されます。
        </P>
      ),
      cards: [
        { h: "健全で樹容が美しい", b: "健全で、かつ、樹容が美観上特に優れていること。" },
        { h: "幹周り・樹高", b: "地上から1.5mの高さの幹周りが概ね1.5m以上、あるいは樹高が概ね15m以上あること。" },
        { h: "日常的に管理できる場所", b: "所有者が日常的に管理できる場所に所在すること（山林内は不可）。" },
      ],
      cardsAlt: true,
    },
    {
      id: "sb-request",
      title: "保存樹の手入れを業者に頼むときの確認事項",
      cards: [
        { h: "剪定は所有者の負担", b: "剪定や落葉の清掃などの日常的な管理にかかる費用は、原則として所有者の負担です。作業費は見積もりで確認します。" },
        { h: "大きく切る前に届出を確認", b: "枝葉の剪定は届出不要ですが、態様を著しく変更する伐採や生育に影響する行為は届出が必要です。強い切り詰めや伐採を頼む前に環境保全課へ確認します。" },
        { h: "樹勢の衰えは市に相談", b: "樹木医の定期診断で樹勢に影響があると判断された場合、樹勢回復措置が行われることがあります。費用は全額市の負担です。" },
      ],
      cardsAlt: true,
      after: (
        <>
          鹿児島で庭の手入れを業者に頼む方法は
          <L href="/area/kagoshima/">鹿児島の造園・庭の手入れ業者</L>
          、剪定で出た枝の出し方は
          <L href="/area/kagoshima/sentei-eda/">鹿児島市の剪定枝の出し方</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "鹿児島市の保存樹に指定されると、どのような支援がありますか。", a: "市のよくある質問では、樹木医による定期診断と助言、樹勢回復（樹木等の治療）の実施、所有者等への奨励金の交付が挙げられています。定期診断や樹勢回復措置の費用は全額市の負担です。" },
    { q: "奨励金はいくらですか。", a: "市のページに金額の記載はありません。申請方法とあわせて、環境保全課（電話 099-216-1298）に確認してください。" },
    { q: "保存樹の枝を切るときに届出は必要ですか。", a: "枝葉の剪定などの日常的な管理には届出は必要ありません。保存樹等の態様を著しく変更するような伐採や、生育に影響を及ぼすおそれのある行為をする場合は、市長への届出が必要です。" },
  ],
  sources: [
    { org: "鹿児島市", title: "鹿児島市の保存樹及び保存樹林の制度", url: "https://www.city.kagoshima.lg.jp/kankyo/kankyo/hozen/machizukuri/kankyohozen/shizen/hozonju/hozonju.html" },
    { org: "鹿児島市", title: "庭の木を保存樹に指定した場合、市からどのような助成を受けられますか。", url: "https://www.city.kagoshima.lg.jp/faq-kankyomachizukuri/hozen/q40.html" },
    { org: "鹿児島市", title: "鹿児島市保存樹等及び自然環境保護地区に関する条例に基づく保存樹一覧", url: "https://www.city.kagoshima.lg.jp/kankyo/kankyo/hozen/machizukuri/kankyohozen/shizen/hozonju/hozonju-02.html" },
  ],
  related: [
    { href: "/guide/hedge-subsidy/", label: "政令市・中核市の生垣・緑化助成の一覧" },
    { href: "/area/kagoshima/", label: "鹿児島の造園・庭の手入れ業者" },
    { href: "/area/kagoshima/sentei-eda/", label: "鹿児島市の剪定枝の出し方" },
    { href: "/area/saitama/hozon-jumoku/", label: "さいたま市の保存樹木の指定制度" },
    { href: "/guide/tree-doctor/", label: "樹木医への相談" },
  ],
  cta: "保存樹の指定や樹勢が気になる場合は、伐採や強い剪定を業者に頼む前に鹿児島市環境保全課へ相談してください。",
};

export default function KagoshimaHozonjuPage() {
  return <SubsidyPage c={c} />;
}
