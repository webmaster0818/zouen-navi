import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/nishinomiya/sentei-eda/";
const TITLE = "西宮市の剪定枝の出し方｜植木の枝は市で収集しない、処理センターへの持ち込みか許可業者へ";
const DESC =
  "西宮市では、植木の枝は市で収集しないごみです。処理センターに予約して直接持ち込むか、許可業者（有料）に依頼します。" +
  "落ち葉の出し方と、業者に剪定を頼む前に決めておく枝の引き取りを、市の分別一覧表とハローごみ2026で整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "西宮市の剪定枝の扱い（市では収集しない・処理センターへの予約持ち込みか許可業者へ依頼）を市の分別一覧表とハローごみ2026にもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "nishinomiya",
  city: "西宮",
  crumb: "剪定枝の出し方",
  title: TITLE,
  jsonLdDescription:
    "西宮市で植木の枝を処分するときの方法（市では収集しない・処理センターへの予約持ち込み・許可業者への依頼）と落ち葉の出し方を、市の公式ページと冊子にもとづいて整理しています。",
  updatedIso: "2026-11-05",
  updatedLabel: "2026年11月5日",
  checked: "2026年11月5日",
  lead: [
    "西宮市では、植木の枝はごみステーションに出せません。市の分別一覧表で「市では収集・処理できないごみ」とされ、処理センターに予約して直接持ち込むか、業者（有料）に依頼します。",
    "本ページでは、西宮市「50音別ごみ分別一覧表　あ行～さ行（新分別区分導入版）」と、同ページから案内される冊子「西宮市ハローごみ2026」の「市では収集・処分しないごみ」のページ（いずれも2026年11月5日確認）の記載をもとに、処分の方法と業者に頼む前の確認事項を整理します。",
  ],
  factsTitle: "西宮市の剪定枝の扱いの要点",
  facts: [
    { k: "ごみの区分", v: "植木の枝は、市では収集・処理できないごみ（分別一覧表）" },
    { k: "冊子での区分", v: "引越し・大掃除・植木剪定（枝葉・生木）などの一時多量ごみは、市では収集しないごみ（ハローごみ2026）" },
    { k: "処分方法1", v: "処理センターへ持ち込む。受付は西宮市ごみ電話受付センターで、搬入日の14日前から前日までに先着順" },
    { k: "処分方法2", v: "許可業者に依頼する（有料）" },
    { k: "持ち込み先", v: "ハローごみ2026では東部総合処理センター（令和8年3月31日までは西部総合処理センター）" },
    { k: "落ち葉", v: "もやすごみ。生ごみなどにまぜて少量ずつ出す" },
  ],
  factsNote:
    "出典：西宮市「50音別ごみ分別一覧表　あ行～さ行（新分別区分導入版）」（更新日：2026年6月11日）、同ページ掲載の「市では収集・処分しないごみ」（西宮市ハローごみ2026 28ページ）。2026年11月5日確認。分別一覧表の「植木の枝」の行では持ち込み先が西部総合処理センターと書かれていますが、冊子では令和8年3月31日までが西部、それ以降は東部総合処理センターとされています。持ち込む前に電話受付センターで搬入先を確かめてください。",
  sections: [
    {
      id: "sb-bring",
      title: "処理センターに持ち込むときの手順",
      steps: [
        { h: "電話受付センターに予約する", b: "西宮市ごみ電話受付センターに、搬入日の14日前から前日までに申し込みます（先着順）。" },
        { h: "搬入先を確かめる", b: "冊子では東部総合処理センターへの持ち込みと案内されています。予約の際に搬入先を確認します。" },
        { h: "予約した日に持ち込む", b: "搬入日は月曜日から土曜日（祝日を含む）で、もやすごみの受け入れ時間が冊子に記載されています。" },
      ],
    },
    {
      id: "sb-leaves",
      title: "落ち葉・刈った草の扱い",
      body: (
        <P>
          分別一覧表では、落ち葉はもやすごみで、生ごみなどにまぜて少量ずつ出すよう案内されています。枝と葉を分けておくと、葉だけは少しずつ家庭ごみに出せます。ただし冊子では、植木剪定で出た枝葉・生木は一時多量ごみとして、市では収集しないごみに挙げられています。
        </P>
      ),
    },
    {
      id: "sb-request",
      title: "業者に剪定を頼む前に決めておくこと",
      body: (
        <P>
          西宮市では枝をごみステーションに出せないため、業者に剪定を頼む場合は、切った枝の引き取りまで見積もりに含めるかを最初に決めておきます。自分で処分する場合は、処理センターへの予約と運搬の手段を作業日の前に用意しておく必要があります。
        </P>
      ),
      after: (
        <>
          処分方法の選び方は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          、西宮で業者を選ぶ際の確認事項は
          <L href="/area/nishinomiya/">西宮の造園・庭の手入れ業者</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "西宮市で剪定した枝はごみの日に出せますか。", a: "出せません。分別一覧表では植木の枝は市では収集・処理できないごみとされ、処理センターへの予約持ち込みか業者（有料）への依頼になります。" },
    { q: "持ち込みの予約はいつからできますか。", a: "西宮市ごみ電話受付センターで、搬入日の14日前から前日までに先着順で受け付けています。" },
    { q: "落ち葉はどう出しますか。", a: "もやすごみです。生ごみなどにまぜて少量ずつ出します。" },
  ],
  sources: [
    { org: "西宮市", title: "50音別ごみ分別一覧表　あ行～さ行（新分別区分導入版）", url: "https://www.nishi.or.jp/kurashi/gomi/gominoshushu/seikatsugomi/50onbetubunbetua-sa.html" },
    { org: "西宮市", title: "市では収集・処分しないごみ（西宮市ハローごみ2026）", url: "https://www.nishi.or.jp/kurashi/gomi/gominoshushu/seikatsugomi/50onbetubunbetua-sa.files/sidehasyuusyusinai12.pdf" },
    { org: "西宮市", title: "ハローごみ2026【新分別区分】", url: "https://www.nishi.or.jp/kurashi/gomi/gominoshushu/harogomi2026.html" },
  ],
  related: [
    { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
    { href: "/area/nishinomiya/", label: "西宮の造園・庭の手入れ業者" },
    { href: "/guide/fallen-leaves/", label: "落ち葉の掃除と処分" },
    { href: "/service/pruning/", label: "庭木の剪定を業者に頼む" },
  ],
  cta: "西宮市では枝をごみの日に出せないため、剪定を頼むときは枝の引き取りを見積もりに含めるかを最初に決めておきます。",
};

export default function NishinomiyaSenteiEdaPage() {
  return <SubsidyPage c={c} />;
}
