import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/fukuoka/sentei-eda/";
const TITLE = "福岡市の剪定枝の出し方｜燃えるごみに出せるが、市の工場には持ち込めない（民間の再資源化施設へ）";
const DESC =
  "福岡市では、剪定枝は燃えるごみです。市はリサイクルのため民間のせん定枝の受入れ施設への持ち込みに協力を求めており、" +
  "市の工場への自己搬入では生木・剪定枝・枯れ木を受け入れていません。業者に頼む前の確認事項も整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "福岡市の剪定枝の扱い（燃えるごみ・市の工場への自己搬入は不可・民間の再資源化施設への持ち込み）を市の公式ページにもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "fukuoka",
  city: "福岡",
  crumb: "剪定枝の出し方",
  title: TITLE,
  jsonLdDescription:
    "福岡市で剪定枝を処分するときの区分（燃えるごみ）、市の工場への自己搬入で受け入れられないこと、民間のせん定枝等再資源化施設への持ち込みを、市の公式ページにもとづいて整理しています。",
  updatedIso: "2026-11-05",
  updatedLabel: "2026年11月5日",
  checked: "2026年11月5日",
  lead: [
    "福岡市で庭木を剪定したとき、剪定枝は燃えるごみとして出せます。一方で、市の工場への自己搬入では生木・剪定枝・枯れ木を受け入れておらず、量が多いときは民間のせん定枝の受入れ施設を使うことになります。",
    "本ページでは、福岡市ごみと資源の分け方・出し方情報サイトの品目検索、「燃えるごみの出し方」「ごみの自己搬入について」「廃棄物（ごみ）受入基準」（いずれも2026年11月5日確認）の記載をもとに、処分の方法と業者に頼む前の確認事項を整理します。",
  ],
  factsTitle: "福岡市の剪定枝の扱いの要点",
  facts: [
    { k: "ごみの区分", v: "剪定枝・剪定樹木・枯れ木・枯れ枝類は燃えるごみ（品目検索）" },
    { k: "市の案内", v: "リサイクルのため、民間のせん定枝の受入れ施設等への持ち込みに協力を求めている" },
    { k: "燃えるごみの出し方", v: "福岡市指定の「燃えるごみ用」袋に入れて口を結ぶ。一度に出せる量は大（45リットル）の袋で10袋まで" },
    { k: "袋に入らないもの", v: "指定袋に入らない大きさ・重さのものは粗大ごみ" },
    { k: "市の工場への自己搬入", v: "生木、剪定枝、枯れ木は持ち込みを断っている" },
    { k: "持ち込み先", v: "民間の剪定枝等再資源化施設へ搬入（市が「せん定枝、木くず等の再資源化施設」の一覧を掲載）" },
    { k: "落ち葉・草", v: "落ち葉、刈草、雑草は燃えるごみ" },
  ],
  factsNote:
    "出典：福岡市ごみと資源の分け方・出し方情報サイト「ごみの分け方（品目）検索」、福岡市「燃えるごみの出し方」（更新日：2026年6月17日）、「ごみの自己搬入について」（更新日：2026年11月2日）、「廃棄物（ごみ）受入基準」（更新日：2026年11月4日）。2026年11月5日確認。民間施設の受け入れ時間・料金は、品目検索の案内どおり各施設に直接問い合わせてください。",
  sections: [
    {
      id: "sb-bag",
      title: "燃えるごみに出すとき",
      steps: [
        { h: "指定袋に入る大きさにする", b: "福岡市指定の「燃えるごみ用」袋に入れて、袋の口をしっかり結びます。" },
        { h: "10袋までにする", b: "ごみ出しで一度に出せる量は、大（45リットル）の袋で10袋までです。" },
        { h: "袋に入らない枝は分ける", b: "指定袋に入らない大きさ・重さのものは粗大ごみです。" },
      ],
    },
    {
      id: "sb-bring",
      title: "量が多いとき：民間の再資源化施設へ",
      body: (
        <P>
          市の清掃工場などへの自己搬入では、生木・剪定枝・枯れ木は受け入れていません。受入基準では、民間の剪定枝等再資源化施設へ搬入するよう案内されており、市のページに「せん定枝、木くず等の再資源化施設」の一覧（所在地・受入品目・休業日など）が掲載されています。受け入れ時間や料金は各施設に直接確かめます。
        </P>
      ),
    },
    {
      id: "sb-request",
      title: "業者に剪定を頼む前に決めておくこと",
      body: (
        <P>
          業者に剪定を頼む場合は、出た枝を業者が引き取るのか、自分で燃えるごみに出すのかを見積もりの段階で決めておきます。市の工場には剪定枝を持ち込めないため、量が多い場合は、業者に引き取りを含めて頼むか、民間の再資源化施設まで運ぶ段取りを先に決めます。
        </P>
      ),
      after: (
        <>
          処分方法の選び方は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          、福岡で業者を選ぶ際の確認事項は
          <L href="/area/fukuoka/">福岡の造園・庭の手入れ業者</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "福岡市で剪定した枝は何ごみですか。", a: "燃えるごみです。市はリサイクルのため、民間のせん定枝の受入れ施設等への持ち込みにも協力を求めています。" },
    { q: "市の清掃工場に剪定枝を持ち込めますか。", a: "持ち込めません。自己搬入の案内では、生木・剪定枝・枯れ木は持ち込みを断っているごみの例に挙げられています。" },
    { q: "一度にどれくらい出せますか。", a: "燃えるごみは、一度に大（45リットル）の袋で10袋までです。" },
  ],
  sources: [
    { org: "福岡市", title: "ごみの分け方（品目）検索｜福岡市ごみと資源の分け方・出し方情報サイト", url: "https://kateigomi-bunbetsu.city.fukuoka.lg.jp/items/search" },
    { org: "福岡市", title: "燃えるごみの出し方", url: "https://www.city.fukuoka.lg.jp/kankyo/jigyokeigomi/life/katei-bunbetsu/moerugomi.html" },
    { org: "福岡市", title: "ごみの自己搬入について", url: "https://www.city.fukuoka.lg.jp/kankyo/kanri/hp/jikohannyuu.html" },
    { org: "福岡市", title: "廃棄物（ごみ）受入基準", url: "https://www.city.fukuoka.lg.jp/kankyo/kanri/hp/kijun.html" },
  ],
  related: [
    { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
    { href: "/area/fukuoka/", label: "福岡の造園・庭の手入れ業者" },
    { href: "/area/fukuoka/hozonju/", label: "福岡市の保存樹の剪定・治療の補助" },
    { href: "/service/pruning/", label: "庭木の剪定を業者に頼む" },
  ],
  cta: "福岡市では剪定枝を市の工場に持ち込めないため、量が多いときは枝の引き取りを見積もりに含めるかを最初に決めておきます。",
};

export default function FukuokaSenteiEdaPage() {
  return <SubsidyPage c={c} />;
}
