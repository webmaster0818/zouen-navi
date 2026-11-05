import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/takamatsu/sentei-eda/";
const TITLE = "高松市の剪定枝の出し方｜太さ5cm・束の直径30cm・長さ50cm以下、2束までを燃やせるごみに";
const DESC =
  "高松市では、少量の剪定枝は太さ5cm以下・束の直径30cm以下・長さ50cm以下にしばり、2束までを燃やせるごみに出します。" +
  "3束以上のときの扱いと、業者に剪定を頼む前の確認事項を市のごみ分別一覧とガイドブックで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "高松市の剪定枝の出し方（太さ5cm・束の直径30cm・長さ50cm以下、2束まで燃やせるごみ）を市の公式ページとごみ分別ガイドブックにもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "takamatsu",
  city: "高松",
  crumb: "剪定枝の出し方",
  title: TITLE,
  jsonLdDescription:
    "高松市で剪定枝を燃やせるごみに出すときの大きさ・束の数・指定収集袋の使い方と、3束以上になったときの扱いを、市の公式ページとごみ分別ガイドブックにもとづいて整理しています。",
  updatedIso: "2026-11-05",
  updatedLabel: "2026年11月5日",
  checked: "2026年11月5日",
  lead: [
    "高松市で庭木を剪定したとき、少量の枝はひもでしばって燃やせるごみに出せます。太さ・束の大きさ・長さと、1回に出せる束の数に決まりがあり、3束以上は粗大ごみになります。",
    "本ページでは、高松市「燃やせるごみ（可燃ごみ）」のページと、「保存版　家庭ごみの正しい出し方（ごみ分別ガイドブック）」（いずれも2026年11月5日確認）の記載をもとに、出し方と業者に頼む前の確認事項を整理します。",
  ],
  factsTitle: "高松市の剪定枝の出し方の要点",
  facts: [
    { k: "ごみの区分", v: "剪定ごみ（少量）は燃やせるごみ" },
    { k: "大きさ", v: "太さ（直径）5cm以下、束の直径30cm以下、長さ50cm以下" },
    { k: "出し方", v: "ひもでしばる。指定収集袋に入らない場合は、指定収集袋（大）を貼り付け・巻き付け等する" },
    { k: "量", v: "少量（2束以下）に限る。多量（3束以上）は粗大ごみ" },
    { k: "落ち葉・枯れ草", v: "燃やせるごみ。少量（2袋以下）に限る" },
    { k: "野焼き", v: "ごみの野焼きは原則禁止" },
  ],
  factsNote:
    "出典：高松市「燃やせるごみ（可燃ごみ）」（更新日：2023年4月17日）、「保存版　家庭ごみの正しい出し方（ごみ分別ガイドブック）」（更新日：2026年6月12日）掲載のガイドブック6ページ「燃やせるごみ（可燃ごみ）」。2026年11月5日確認。",
  sections: [
    {
      id: "sb-cut",
      title: "燃やせるごみに出すまでの手順",
      steps: [
        { h: "太さ5cm・長さ50cm以下に切る", b: "枝は太さ（直径）5cm以下、長さ50cm以下にそろえます。" },
        { h: "束の直径30cm以下でしばる", b: "ひもでしばり、束の直径を30cm以下にします。" },
        { h: "指定収集袋（大）を貼り付け・巻き付ける", b: "指定収集袋に入らない場合は、指定収集袋（大）を貼り付けるか巻き付けます。" },
        { h: "2束までを出す", b: "燃やせるごみに出せるのは少量（2束以下）です。" },
      ],
    },
    {
      id: "sb-much",
      title: "3束以上になるとき",
      body: (
        <P>
          市のごみ分別一覧では、剪定ごみが多量（3束以上）のときは粗大ごみとされています。ガイドブックでは臨時・粗大ごみの扱いが別のページにまとめられているため、申し込みや自己搬入の方法は市の案内で確かめてから手配します。
        </P>
      ),
    },
    {
      id: "sb-request",
      title: "業者に剪定を頼む前に決めておくこと",
      body: (
        <P>
          業者に剪定を頼む場合は、出た枝を業者が引き取るのか、自分で燃やせるごみに出すのかを見積もりの段階で決めておきます。自分で出す分は、作業時に長さ50cm以下に切ってもらうと束ねやすくなります。1回2束までのため、量が多いときは引き取りを含めて頼むほうが段取りが立ちます。
        </P>
      ),
      after: (
        <>
          処分方法の選び方は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          、高松で業者を選ぶ際の確認事項は
          <L href="/area/takamatsu/">高松の造園・庭の手入れ業者</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "高松市で剪定した枝は何ごみですか。", a: "少量なら燃やせるごみです。太さ5cm以下・束の直径30cm以下・長さ50cm以下にしばり、2束までを出します。" },
    { q: "枝が指定収集袋に入らないときは。", a: "指定収集袋（大）を貼り付けるか巻き付ける等して出します。" },
    { q: "3束以上あるときは。", a: "市のごみ分別一覧では、多量（3束以上）は粗大ごみとされています。" },
  ],
  sources: [
    { org: "高松市", title: "燃やせるごみ（可燃ごみ）", url: "https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/gomi/dashikata/bunbetsu/kanen.html" },
    { org: "高松市", title: "保存版　家庭ごみの正しい出し方（ごみ分別ガイドブック）", url: "https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/gomi/guidebook.html" },
  ],
  related: [
    { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
    { href: "/area/takamatsu/", label: "高松の造園・庭の手入れ業者" },
    { href: "/guide/fallen-leaves/", label: "落ち葉の掃除と処分" },
    { href: "/service/pruning/", label: "庭木の剪定を業者に頼む" },
  ],
  cta: "剪定を頼むときは、枝の処分を見積もりに含めるかを最初に決めておくと、作業後に枝が残りません。",
};

export default function TakamatsuSenteiEdaPage() {
  return <SubsidyPage c={c} />;
}
