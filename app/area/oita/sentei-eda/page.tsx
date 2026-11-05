import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/oita/sentei-eda/";
const TITLE = "大分市の剪定枝の出し方｜長さ50cm・太さ5cm以内、2袋までを週の後半の燃やせるごみに";
const DESC =
  "大分市では、植木の枝や剪定枝は長さ50cm以内・太さ5cm以内にして、よく乾かし2袋までを週の後半の燃やせるごみに出します。" +
  "多量のときの持ち込み・有料収集と、業者に剪定を頼む前の確認事項を市の分別事典で整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "大分市の剪定枝の出し方（長さ50cm以内・太さ5cm以内、2袋まで・週の後半の燃やせるごみ）を市の家庭ごみ分別事典にもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "oita",
  city: "大分",
  crumb: "剪定枝の出し方",
  title: TITLE,
  jsonLdDescription:
    "大分市で剪定枝を燃やせるごみに出すときの大きさ・袋・出す日と、多量に出たときの持ち込み・有料収集を、市の家庭ごみ分別事典にもとづいて整理しています。",
  updatedIso: "2026-11-05",
  updatedLabel: "2026年11月5日",
  checked: "2026年11月5日",
  lead: [
    "大分市で庭木を剪定したとき、少量の枝は燃やせるごみとしてごみステーションに出せます。大きさと袋の数、出す日に決まりがあり、太い枝や多量の枝は持ち込みか有料収集になります。",
    "本ページでは、大分市「家庭ごみ分別事典「資源物とごみの分け方・出し方」」のページに掲載の家庭ごみ分別事典2026年（令和8年）4月改訂版（2026年11月5日確認）の記載をもとに、出し方と業者に頼む前の確認事項を整理します。",
  ],
  factsTitle: "大分市の剪定枝の出し方の要点",
  facts: [
    { k: "ごみの区分", v: "直径5cm以内の剪定枝は燃やせるごみ" },
    { k: "大きさ", v: "長さ50cm以内、太さ5cm以内にする" },
    { k: "袋", v: "剪定枝、落ち葉、草花は透明・半透明の袋で燃やせるごみの日に出せる" },
    { k: "量と出す日", v: "2袋まで、よく乾かして、週の後半に出す" },
    { k: "多量のとき", v: "長さ50cm以内にして（鬼崎埋立場に持ち込む場合は長さ75cm以内）、直接持ち込むか有料収集を依頼する" },
    { k: "太い枝", v: "直径5cm以上50cm以内のものは、長さ75cm以内にして鬼崎埋立場に直接持ち込む" },
  ],
  factsNote:
    "出典：大分市「家庭ごみ分別事典「資源物とごみの分け方・出し方」」（更新日：2026年4月27日）、同ページ掲載の家庭ごみ分別事典2026年（令和8年）4月改訂版。2026年11月5日確認。",
  sections: [
    {
      id: "sb-cut",
      title: "燃やせるごみに出すまでの手順",
      steps: [
        { h: "長さ50cm・太さ5cm以内に切る", b: "枝は長さ50cm以内、太さ5cm以内にそろえます。" },
        { h: "よく乾かす", b: "分別事典では、よく乾かしてから出すよう案内されています。" },
        { h: "透明・半透明の袋に入れる", b: "剪定枝、落ち葉、草花は透明・半透明の袋で燃やせるごみの日に出せます。" },
        { h: "2袋までを週の後半に出す", b: "1回に出すのは2袋までとし、週の後半の燃やせるごみの日に出します。" },
      ],
    },
    {
      id: "sb-much",
      title: "剪定枝が多い・太いとき",
      body: (
        <>
          <P>
            多量の剪定枝は、長さ50cm以内にして直接持ち込むか、有料収集（一時的多量ごみ）を依頼します。鬼崎埋立場に持ち込む場合は長さ75cm以内です。直径5cm以上50cm以内の枝は、長さ75cm以内にして鬼崎埋立場に直接持ち込みます。
          </P>
          <P>
            有料収集は事前予約が必要で、多量の剪定枝は45リットルの袋に入れるか束にします。持ち込みの受付や料金は、分別事典の最新版で確認してから手配します。
          </P>
        </>
      ),
    },
    {
      id: "sb-request",
      title: "業者に剪定を頼む前に決めておくこと",
      body: (
        <P>
          業者に剪定を頼む場合は、出た枝を業者が引き取るのか、自分で燃やせるごみに出すのかを見積もりの段階で決めておきます。自分で出す分は、作業時に長さ50cm以内に切ってもらうと袋に入れやすくなります。1回に出せるのは2袋までのため、量が多いときは引き取りを含めて頼むほうが段取りが立ちます。
        </P>
      ),
      after: (
        <>
          処分方法の選び方は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          、大分で業者を選ぶ際の確認事項は
          <L href="/area/oita/">大分の造園・庭の手入れ業者</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "大分市で剪定した枝は何ごみですか。", a: "直径5cm以内の剪定枝は燃やせるごみです。長さ50cm以内・太さ5cm以内にして、透明・半透明の袋で出します。" },
    { q: "一度にどれくらい出せますか。", a: "分別事典では、2袋まで、よく乾かして週の後半に出すよう案内されています。" },
    { q: "太い枝はどうしますか。", a: "直径5cm以上50cm以内のものは、長さ75cm以内にして鬼崎埋立場に直接持ち込みます。" },
  ],
  sources: [
    { org: "大分市", title: "家庭ごみ分別事典「資源物とごみの分け方・出し方」", url: "https://www.city.oita.oita.jp/o141/kurashi/gomi/1414629857980.html" },
    { org: "大分市", title: "家庭ごみ分別辞典2026年（令和8年）4月改訂版単ページバージョン", url: "https://www.city.oita.oita.jp/o141/kurashi/gomi/documents/2026jitentanpeji.pdf" },
  ],
  related: [
    { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
    { href: "/area/oita/", label: "大分の造園・庭の手入れ業者" },
    { href: "/guide/fallen-leaves/", label: "落ち葉の掃除と処分" },
    { href: "/service/pruning/", label: "庭木の剪定を業者に頼む" },
  ],
  cta: "剪定を頼むときは、枝の処分を見積もりに含めるかを最初に決めておくと、作業後に枝が残りません。",
};

export default function OitaSenteiEdaPage() {
  return <SubsidyPage c={c} />;
}
