import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/nagasaki/sentei-eda/";
const TITLE = "長崎市の剪定枝の出し方｜燃やせるごみ、長さ1m以内・直径40cm以内に束ねて指定袋で巻く";
const DESC =
  "長崎市では、木・枝や剪定くずは燃やせるごみです。枝は長さ1m以内・直径40cm以内に束ねて指定袋で巻いて出します。" +
  "多量に出たときの持ち込み・許可業者への依頼と、業者に剪定を頼む前の確認事項を市の分別一覧表をもとに整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "長崎市の剪定枝の出し方（燃やせるごみ・長さ1m以内直径40cm以内に束ねて指定袋で巻く）を市の分別一覧表にもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "nagasaki",
  city: "長崎",
  crumb: "剪定枝の出し方",
  title: TITLE,
  jsonLdDescription: "長崎市で剪定枝を燃やせるごみに出すときの大きさと束ね方、多量に出たときの自己搬入・許可業者への依頼を、市の分別一覧表にもとづいて整理しています。",
  updatedIso: "2026-11-04",
  updatedLabel: "2026年11月4日",
  checked: "2026年11月4日",
  lead: [
    "長崎市で庭木を剪定したとき、切った枝は燃やせるごみとして出せます。袋に入れるのではなく、束ねた枝を指定袋で巻いて出すのが長崎市の出し方です。",
    "本ページでは、長崎市「ごみの分別一覧表＜50音別＞」のページと、同ページに掲載の「ごみ分別一覧表」（令和8年4月版）（2026年11月4日確認）の記載をもとに、出し方と業者に頼む前の確認事項を整理します。",
  ],
  factsTitle: "長崎市の剪定枝の出し方の要点",
  facts: [
    { k: "ごみの区分", v: "木・枝、剪定くずは燃やせるごみ" },
    { k: "大きさ", v: "枝・木切れ類は長さ1m以内、直径40cm以内に束ねる" },
    { k: "出し方", v: "束ねた枝を指定袋で巻いて出す" },
    { k: "多量のごみ", v: "粗大ごみや多量のごみ（引っ越しごみ、剪定枝など）は、自己搬入または市の許可業者に依頼できる" },
  ],
  factsNote:
    "出典：長崎市「ごみの分別一覧表＜50音別＞」（更新日：2026年6月8日）、同ページ掲載「ごみ分別一覧表」令和8年4月版。2026年11月4日確認。プラスチックの分別変更の時期（令和8年4月または10月）は地区によって異なりますが、木・枝と剪定くずの区分は令和7年10月版・令和8年4月版とも燃やせるごみです。",
  sections: [
    {
      id: "sb-cut",
      title: "燃やせるごみに出すまでの手順",
      steps: [
        { h: "長さ1m以内に切る", b: "枝・木切れ類は長さ1m以内にそろえます。" },
        { h: "直径40cm以内に束ねる", b: "束の直径が40cm以内になるようにまとめます。" },
        { h: "指定袋で巻く", b: "束ねた枝を指定袋で巻いて、燃やせるごみの日に出します。" },
      ],
    },
    {
      id: "sb-much",
      title: "剪定枝が多量に出たとき",
      body: (
        <P>
          市の分別一覧表では、粗大ごみや多量のごみ（引っ越しごみ、剪定枝など）は、ごみ処理場への自己搬入か、市の許可業者への依頼ができると案内されています。持ち込み先・許可業者は、旧長崎市地区と合併地区で異なります。搬入手数料は令和8年4月から変更されているため、持ち込む前に市のページで最新の案内を確認します。
        </P>
      ),
    },
    {
      id: "sb-request",
      title: "業者に剪定を頼む前に決めておくこと",
      body: (
        <P>
          業者に剪定を頼む場合は、出た枝を業者が引き取るのか、自分で燃やせるごみに出すのかを見積もりの段階で決めておきます。自分で出す分は、作業時に長さ1m以内に切ってもらうと束ねやすくなります。
        </P>
      ),
      after: (
        <>
          処分方法の選び方は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          、長崎で業者を選ぶ際の確認事項は
          <L href="/area/nagasaki/">長崎の造園・庭の手入れ業者</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "長崎市で剪定した枝は何ごみですか。", a: "燃やせるごみです。長さ1m以内・直径40cm以内に束ねて、指定袋で巻いて出します。" },
    { q: "枝は袋の中に入れるのですか。", a: "市の分別一覧表では、束ねた枝を指定袋で巻いて出すと案内されています。" },
    { q: "量が多いときはどうしますか。", a: "多量のごみ（剪定枝など）は、ごみ処理場への自己搬入か、市の許可業者への依頼ができます。持ち込み先は地区によって異なります。" },
  ],
  sources: [
    { org: "長崎市", title: "ごみの分別一覧表＜50音別＞", url: "https://www.city.nagasaki.lg.jp/page/3028.html" },
    { org: "長崎市", title: "ごみ分別一覧表（令和8年4月版）", url: "https://www.city.nagasaki.lg.jp/uploaded/attachment/53682.pdf" },
  ],
  related: [
    { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
    { href: "/area/nagasaki/", label: "長崎の造園・庭の手入れ業者" },
    { href: "/guide/fallen-leaves/", label: "落ち葉の掃除と処分" },
    { href: "/service/pruning/", label: "庭木の剪定を業者に頼む" },
  ],
  cta: "剪定を頼むときは、枝の処分を見積もりに含めるかを最初に決めておくと、作業後に枝が残りません。",
};

export default function NagasakiSenteiEdaPage() {
  return <SubsidyPage c={c} />;
}
