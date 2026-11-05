import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/matsuyama/sentei-eda/";
const TITLE = "松山市の剪定枝の出し方｜直径15cm以下・長さ50cm程度にして可燃ごみ、1回3束まで";
const DESC =
  "松山市では、直径や厚さが15cm以内の枝は長さ50cm程度にして可燃ごみに出せます（1回3束まで）。" +
  "切れない枝・太い枝の区分と、業者に剪定を頼む前の確認事項を市のごみ分別はやわかり帳（家庭用）で整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "松山市の剪定枝の出し方（直径15cm以内・長さ50cm程度で可燃ごみ、1回3束まで）を市のごみ分別はやわかり帳にもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "matsuyama",
  city: "松山",
  crumb: "剪定枝の出し方",
  title: TITLE,
  jsonLdDescription:
    "松山市（松山・北条地域）で植木や枝を出すときの区分（可燃ごみ・粗大ごみ・埋立ごみ・市が収集しないごみ）を、市のごみ分別はやわかり帳（家庭用）の「木」の排出方法にもとづいて整理しています。",
  updatedIso: "2026-11-05",
  updatedLabel: "2026年11月5日",
  checked: "2026年11月5日",
  lead: [
    "松山市で庭木を剪定したとき、直径や厚さが15cm以内の枝は、長さを50cm程度に切れば可燃ごみとして出せます。枝の太さと切れる長さによって、粗大ごみ・埋立ごみ・市が収集しないごみに分かれます。",
    "本ページでは、松山市「ごみ分別はやわかり帳(家庭用)」のページに掲載の冊子（2026年11月5日確認）の「木」の排出方法の記載をもとに、出し方と業者に頼む前の確認事項を整理します。",
  ],
  factsTitle: "松山市の剪定枝の出し方の要点",
  facts: [
    { k: "対象", v: "植木・枝・木・木の板・木の根・切株・庭木など。重量が著しく大きいものは収集できない" },
    { k: "可燃ごみ", v: "直径や厚さが15cm以内で、長さを50cm程度にできるもの。ひもでしばって出しても可。1回に3束（袋）まで" },
    { k: "粗大ごみ", v: "直径や厚さが15cm以内で、長さ50cm程度にできないが長さ150cm以内のもの。粗大ごみの申込が可能" },
    { k: "埋立ごみ", v: "直径や厚さが15cmを超え、長さを50cm程度にできるもの。1回に3束まで" },
    { k: "市が収集しないごみ", v: "長さ150cmを超えるもの、直径や厚さが15cmを超えて長さ50cm程度にできないもの。どうしても切断できない場合は南クリーンセンターに問い合わせる" },
    { k: "草・枯葉", v: "可燃ごみ。落ち葉は1回に3袋まで" },
  ],
  factsNote:
    "出典：松山市「ごみ分別はやわかり帳(家庭用)」（更新日：2025年10月10日）、同ページ掲載の冊子の「木」の排出方法について（22ページ）・可燃ごみ（5ページ）。2026年11月5日確認。松山・北条地域の分別です。中島地域の出し方は市の別のページで案内されています。",
  sections: [
    {
      id: "sb-cut",
      title: "可燃ごみに出すまでの手順",
      steps: [
        { h: "太さを確かめる", b: "直径や厚さが15cm以内の枝が可燃ごみの対象です。" },
        { h: "長さ50cm程度に切る", b: "枝を長さ50cm程度に切りそろえます。" },
        { h: "ひもでしばるか袋に入れる", b: "ひもでしばって出しても構いません。1回に出せるのは3束（袋）までです。" },
      ],
    },
    {
      id: "sb-thick",
      title: "切れない枝・太い枝のとき",
      body: (
        <P>
          長さ50cm程度に切れない枝は、長さ150cm以内であれば粗大ごみの申込ができます。直径や厚さが15cmを超える幹や枝は、長さ50cm程度に切れば埋立ごみ（1回に3束まで）になり、切れなければ市が収集しないごみです。どうしても切断できない場合は、冊子では南クリーンセンターへの問い合わせが案内されています。
        </P>
      ),
    },
    {
      id: "sb-request",
      title: "業者に剪定を頼む前に決めておくこと",
      body: (
        <P>
          業者に剪定を頼む場合は、出た枝を業者が引き取るのか、自分でごみに出すのかを見積もりの段階で決めておきます。自分で出す分は、作業時に長さ50cm程度に切ってもらうと可燃ごみに出しやすくなります。1回3束までのため、量が多いときは引き取りを含めて頼むほうが段取りが立ちます。
        </P>
      ),
      after: (
        <>
          処分方法の選び方は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          、松山で業者を選ぶ際の確認事項は
          <L href="/area/matsuyama/">松山の造園・庭の手入れ業者</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "松山市で剪定した枝は何ごみですか。", a: "直径や厚さが15cm以内で長さ50cm程度に切れる枝は可燃ごみです。ひもでしばって出しても構いません。1回に3束（袋）までです。" },
    { q: "太い幹はどうしますか。", a: "直径や厚さが15cmを超えるものは、長さ50cm程度に切れば埋立ごみ（1回に3束まで）です。切れなければ市が収集しないごみになります。" },
    { q: "落ち葉は何袋まで出せますか。", a: "冊子では、落ち葉は可燃ごみで1回に3袋までとされています。" },
  ],
  sources: [
    { org: "松山市", title: "ごみ分別はやわかり帳(家庭用)", url: "https://www.city.matsuyama.ehime.jp/kurashi/gomi/dashikata/bunbetsu_jiten_katei.html" },
    { org: "松山市", title: "ごみ分別はやわかり帳（家庭用・全ページ）", url: "https://www.city.matsuyama.ehime.jp/kurashi/gomi/dashikata/bunbetsu_jiten_katei.files/R7.4gomibunbetsuhayawakaricho.pdf" },
  ],
  related: [
    { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
    { href: "/area/matsuyama/", label: "松山の造園・庭の手入れ業者" },
    { href: "/guide/stump-removal/", label: "切り株の処分" },
    { href: "/service/pruning/", label: "庭木の剪定を業者に頼む" },
  ],
  cta: "剪定を頼むときは、枝の処分を見積もりに含めるかを最初に決めておくと、作業後に枝が残りません。",
};

export default function MatsuyamaSenteiEdaPage() {
  return <SubsidyPage c={c} />;
}
