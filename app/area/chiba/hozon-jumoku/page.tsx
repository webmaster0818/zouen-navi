import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/chiba/hozon-jumoku/";
const TITLE = "千葉市の保存樹木・保存樹林の奨励金｜1本年額3,000円、生垣設置の助成はなし（市のQ＆A）";
const DESC =
  "千葉市は幹周1.2m以上または高さ12m以上の樹木を保存樹木に指定し、協定者に1本当り年額3,000円の奨励金を交付しています。" +
  "保存樹林の奨励金、生垣設置の助成がないこと、剪定を業者に頼む前の確認事項を市の公式ページにもとづいて整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "千葉市の保存樹木・保存樹林の指定要件と奨励金、生垣の助成の有無、業者に手入れを頼む際の確認事項を整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "chiba",
  city: "千葉",
  crumb: "保存樹木の奨励金",
  title: TITLE,
  jsonLdDescription: "千葉市の保存樹木・保存樹林の指定要件、指定状況、奨励金と、生垣設置の助成制度がないことを市の公式ページにもとづいて整理しています。",
  updatedIso: "2026-11-03",
  updatedLabel: "2026年11月3日",
  checked: "2026年11月3日",
  lead: [
    "千葉市は、地域のシンボルとなるような風致・景観が優れた樹木を、所有者の協力を得て保存樹木に指定しています。" +
      "市のページによると、令和8年4月1日現在で計461本の保存樹木と、計179.9haの保存樹林が指定されています。",
    "指定を受けた樹木の管理は所有者が行い、市は奨励金を交付しています。剪定などの費用を直接助成する制度ではない点に注意が必要です。" +
      "本ページでは、千葉市の「保存樹木」「保存樹林」「緑と花の地域活動に関するQ＆A」（2026年11月3日確認）の記載をもとに整理します。",
  ],
  factsTitle: "制度の要点",
  facts: [
    { k: "保存樹木の要件", v: "1.5メートルの高さにおける幹の周囲が1.2メートル以上、又は高さが12メートル以上で、健全であるもの" },
    { k: "保存樹木の奨励金", v: "協定者に1本当り年額3,000円" },
    { k: "保存樹林の要件", v: "樹林内の樹木が健全で、集団の存する土地の面積が300平方メートル以上" },
    { k: "保存樹林の奨励金", v: "保存樹林の面積に応じ、1平方メートル当り年額10円" },
    { k: "管理", v: "保存樹木・保存樹林の管理は所有者（土地の所有者）が行う" },
    { k: "生垣の助成", v: "市のQ＆Aで「千葉市では、生垣設置の助成制度はありません」と案内" },
    { k: "問い合わせ", v: "千葉市 都市局公園緑地部緑政課（電話 043-245-5774）" },
  ],
  factsNote: "出典：千葉市「保存樹木」「保存樹林」（指定状況は令和8年4月1日現在）、「緑と花の地域活動に関するQ＆A」（いずれも2026年11月3日確認）。",
  sections: [
    {
      id: "sb-status",
      title: "区ごとの保存樹木の指定状況",
      body: <P>市のページに掲載されている、令和8年4月1日現在の区ごとの保存樹木の本数です。</P>,
      cards: [
        { h: "中央区・花見川区", b: "中央区103本、花見川区78本。" },
        { h: "稲毛区・若葉区", b: "稲毛区67本、若葉区139本。" },
        { h: "緑区・美浜区", b: "緑区74本、美浜区0本。" },
      ],
      cardsAlt: true,
      note: "市のページでは、樹高・枝張り・幹周の上位30本を「高い木・30傑」「茂る木・30傑」「太い木・30傑」として紹介しています（平成23年の調査）。",
    },
    {
      id: "sb-hedge",
      title: "生垣をつくりたい場合",
      body: (
        <P>
          市のQ＆Aでは、外構を生垣にしたい場合の助成金について「千葉市では、生垣設置の助成制度はありません」とし、
          千葉市都市緑化植物園の生垣見本園で生垣に関する技術的な相談を受けられると案内しています（電話 264-9559）。
        </P>
      ),
      after: (
        <>
          生垣の樹種選びと植え付けは
          <L href="/guide/hedge-planting/">生垣の植え付け</L>
          、手入れは
          <L href="/guide/hedge-care/">生垣の手入れ</L>
          で解説しています。
        </>
      ),
    },
    {
      id: "sb-request",
      title: "保存樹木の手入れを業者に頼むときの確認事項",
      cards: [
        { h: "管理は所有者が行う", b: "保存樹木の管理は所有者が行うとされています。剪定などの費用は奨励金とは別に所有者が負担します。" },
        { h: "大木の作業になる", b: "保存樹木は幹周1.2メートル以上又は高さ12メートル以上の木です。高所作業車の要否や道路の使用を見積もりで確認します。" },
        { h: "伐採や大きく切る前に相談する", b: "指定を受けている木を伐採したり大きく切り詰めたりする場合は、事前に緑政課へ扱いを確認します。" },
      ],
      cardsAlt: true,
      after: (
        <>
          千葉で庭の手入れを業者に頼む方法は
          <L href="/area/chiba/">千葉の造園・庭の手入れ業者</L>
          、剪定枝の出し方は
          <L href="/area/chiba/sentei-eda/">千葉市の剪定枝の出し方</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "保存樹木の奨励金はいくらですか。", a: "協定者に1本当り年額3,000円の奨励金が交付されています。" },
    { q: "剪定の費用は助成されますか。", a: "市のページには、剪定費を助成する制度の記載はありません。保存樹木の管理は所有者が行うとされています。" },
    { q: "生垣をつくる助成はありますか。", a: "市のQ＆Aで、千葉市には生垣設置の助成制度はないと案内されています。都市緑化植物園で技術的な相談を受けられます。" },
    { q: "保存樹林の奨励金はいくらですか。", a: "保存樹林の面積に応じ、1平方メートル当り年額10円です。" },
  ],
  sources: [
    { org: "千葉市", title: "保存樹木", url: "https://www.city.chiba.jp/toshi/koenryokuchi/ryokusei/jumoku.html" },
    { org: "千葉市", title: "保存樹林", url: "https://www.city.chiba.jp/toshi/koenryokuchi/ryokusei/jurin.html" },
    { org: "千葉市", title: "緑と花の地域活動に関するQ＆A", url: "https://www.city.chiba.jp/toshi/koenryokuchi/ryokusei/midoritohana/midori-hana-q-a.html" },
  ],
  related: [
    { href: "/guide/hedge-subsidy/", label: "政令市・中核市の生垣・緑化助成の一覧" },
    { href: "/area/chiba/", label: "千葉の造園・庭の手入れ業者" },
    { href: "/area/chiba/sentei-eda/", label: "千葉市の剪定枝の出し方" },
    { href: "/guide/tree-size-reduction/", label: "大きくなりすぎた庭木" },
  ],
  cta: "保存樹木の剪定を業者に頼む場合は、管理は所有者が行うことと、大きく切る前に緑政課へ確認することを踏まえて見積もりを依頼してください。",
};

export default function ChibaHozonJumokuPage() {
  return <SubsidyPage c={c} />;
}
