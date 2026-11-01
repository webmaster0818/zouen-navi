import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Steps, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/citrus-care/";
const UPDATED_LABEL = "2026年11月1日";
const UPDATED_ISO = "2026-11-01";
const TITLE = "庭のミカン（柑橘）の剪定時期と方法｜3月の剪定と、表年・裏年での切り方の違い";
const DESC =
  "庭のミカンの剪定は、3月上旬頃から新しい枝が出る前までが目安です（JA埼玉中央）。花芽は前年に伸びた枝の先に付くため、枝先を切り戻しすぎると花が減ります。実が多い年（表年）と少ない年（裏年）での切り方の違い、摘果、寒さ対策、主な病害虫をJA埼玉中央の栽培情報をもとに整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "庭のミカンの剪定時期、表年・裏年での切り方、摘果と寒さ対策をJA埼玉中央の栽培情報をもとに整理しています。",
  },
};

const toc = [
  { id: "ct-time", label: "剪定の時期" },
  { id: "ct-habit", label: "花芽の付き方と、切りすぎると花が減る理由" },
  { id: "ct-cut", label: "間引き剪定と切り返し剪定" },
  { id: "ct-year", label: "実が多い年・少ない年の切り方" },
  { id: "ct-other", label: "摘果・寒さ対策・病害虫" },
  { id: "ct-request", label: "業者に依頼する際の確認事項" },
  { id: "ct-faq", label: "よくある質問" },
  { id: "ct-sources", label: "本ページで参照した資料" },
];

const cutItems: Item[] = [
  {
    h: "間引き剪定",
    b: "枝が混み合い、木の内側に光が入らず、風通しが悪い場所は、枝を付け根から切り落とします（JA埼玉中央「家庭で楽しむカンキツ栽培」）。剪定で木の内側への日当たりを良くすることで、果実の品質を高め、カイガラムシ類などの発生を減らすとされています（同「カンキツ類の整枝せん定」）。",
  },
  {
    h: "切り返し剪定",
    b: "実の付く量を調節するため、花芽が伸びた新しい枝を途中で切り詰めます（JA埼玉中央「家庭で楽しむカンキツ栽培」）。",
  },
  {
    h: "目安：実の付いた枝が全体の4割程度",
    b: "毎年安定して実を付けるために、間引き剪定と切り返し剪定を行い、実の付いた枝（結果枝）が新しい枝全体の4割程度になるように剪定するとされています（同）。",
  },
];

const yearItems: Item[] = [
  {
    h: "実が多い年（表年）",
    b: "春の花が多すぎるため、切り返し剪定を多くします。大きな枝を切っても徒長枝は出にくいため、立ち枝や多すぎる側枝は間引きます。実が多いと新しい枝が出にくいため、長すぎる側枝は切り返し、翌年の実を付ける枝を出すための剪定（予備枝せん定）も行います。",
  },
  {
    h: "実が少ない年（裏年）",
    b: "花の割合より、花の付いていない新しい枝（発育枝）が多い状態です。発育枝がある枝は剪定しません。花が付いた後に、実の付いた枝にかぶさる枝を間引き、花の付いていない長い枝は切り返します。",
  },
  {
    h: "発育枝が少ない場合",
    b: "発育枝が30％以下の場合は、日当たりと風通しのための間引き以外は剪定せず、冬に発育枝が多くなった場合に剪定するとされています。",
  },
];

const otherItems: string[] = [
  "摘果：大きい果実を残し、小さい果実や傷のある果実を摘果します。時期は自然落果が始まる7月頃が目安で、1果につき葉が25枚程度確保されるようにします（JA埼玉中央）。",
  "寒さ対策：幼木は寒さに弱く、冬の寒風にさらすと落葉し枝が枯れ込むことがあるため、ワラやコモを巻き、株元に敷ワラをするなどの防寒対策を行います（同）。",
  "植え付け：苗は寒さに弱いため春植え（3月〜4月）が適しており、日当たりが良く北風などが当たらない場所を選びます（同）。",
  "病害虫：主な病害虫はそうか病、かいよう病、カイガラムシ類、ハダニ類などです。農薬を使う場合は、ラベルに記載された使用基準を守ります（同）。",
];

const requestItems: Item[] = [
  {
    h: "今年の実の付き方を伝えます",
    b: "表年か裏年かで切り方が変わるため、前年と今年の実の量を伝えます。花が多かったか少なかったかの記録があると判断材料になります。",
  },
  {
    h: "作業の時期",
    b: "3月上旬頃から新しい枝が出る前までに作業できるかを確認します。ほかの庭木と一緒に秋や冬に依頼する場合は、柑橘の枝先を切り詰めないよう伝えます。",
  },
  {
    h: "木の高さ",
    b: "収穫や摘果ができる高さに抑えたい場合は、そのことを伝えます。大きくなりすぎた木を数年かけて小さくする考え方は、大きくなりすぎた庭木のページで解説しています。",
  },
];

const faqs: Faq[] = [
  {
    q: "庭のミカンの剪定は、いつ行えばよいですか。",
    a: "JA埼玉中央の「カンキツ類の整枝せん定」では、3月上旬頃から新しい枝が発生してくる前までに実施するとされています。",
  },
  {
    q: "剪定したら、翌年ほとんど花が咲きませんでした。",
    a: "JA埼玉中央によると、カンキツ類は前年に伸びた枝に花芽を持つ芽が付き、枝の先端部が花芽になるため、新しい枝の先端を切り戻す剪定が多いと開花数が減ります。枝先をそろえて刈り込むと、花芽の多くを切り落とすことになります。",
  },
  {
    q: "1年おきに実がたくさんなったり、ならなかったりします。",
    a: "JA埼玉中央は、実が多い年（表年）は切り返し剪定を多くして花の数を減らし、実が少ない年（裏年）は間引き剪定を中心にする剪定の方法を紹介しています。摘果で実の数を調整することもあわせて行います。",
  },
  {
    q: "ミカンの木は1本でも実がなりますか。",
    a: "JA埼玉中央の「家庭で楽しむカンキツ栽培」では、温州ミカンは単為結果性のため1本でも結実するとされています。ほかの柑橘は種類によって異なるため、購入先や近くの農協の栽培情報でご確認ください。",
  },
];

const sources: Source[] = [
  {
    org: "JA埼玉中央",
    title: "カンキツ類の整枝せん定 ～隔年結果になっていませんか～",
    url: "https://www.ja-sc.or.jp/garden/kankitsu_kakunenkekka/",
  },
  {
    org: "JA埼玉中央",
    title: "家庭で楽しむカンキツ栽培",
    url: "https://www.ja-sc.or.jp/garden/kate_tanoshimukankitsu/",
  },
];

export default function CitrusCarePage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭のミカン（柑橘）の剪定" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        庭のミカンの剪定は、3月上旬頃から新しい枝が出る前までが目安です。花芽は前年に伸びた枝の先に付くため、ほかの庭木と同じように枝先をそろえて切ると、翌年の花が大きく減ります。
        本ページでは、JA埼玉中央の栽培情報（温州ミカンを例にしたもの）をもとに、剪定の時期と方法、実が多い年・少ない年での切り方、摘果と寒さ対策を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="ct-time" title="剪定の時期">
        <P>
          JA埼玉中央の「カンキツ類の整枝せん定」では、ミカンの剪定は3月上旬頃から新しい枝が発生してくる前までに実施するとされています。
        </P>
        <Note>
          本ページの内容は、JA埼玉中央が温州ミカンなどを例に示した栽培情報にもとづいています。ユズ・レモンなどほかの柑橘や、地域によって適した時期が異なる場合があるため、近くの農協や購入先の栽培情報もあわせてご確認ください。
        </Note>
      </Section>

      <Section id="ct-habit" title="花芽の付き方と、切りすぎると花が減る理由">
        <P>
          JA埼玉中央によると、ミカンなどのカンキツ類は、前年に伸びた新しい枝に花芽を持つ芽を付け、その芽から伸びた枝に花が咲きます。特にカンキツ類では枝の先端部が花芽になるため、新しい枝の先端を切り戻す剪定を多くすると、開花数が減ります。
        </P>
        <P>
          また、同JAの「家庭で楽しむカンキツ栽培」では、実を付けた枝は翌年は葉芽だけが付き、花は咲かないとされています。今年実を付けた枝と、花が付かなかった枝が混ざっているのが、ミカンの木の通常の状態です。
        </P>
      </Section>

      <Section id="ct-cut" title="間引き剪定と切り返し剪定">
        <Cards items={cutItems} />
      </Section>

      <Section id="ct-year" title="実が多い年・少ない年の切り方">
        <P>
          JA埼玉中央の「カンキツ類の整枝せん定」は、1年おきに実の量が大きく変わる状態（隔年結果）を前提に、表年と裏年で剪定の方法を変えることを紹介しています。
        </P>
        <Steps items={yearItems} />
        <After>
          果樹全体の、実がならない理由の切り分けは
          <L href="/guide/fruit-trees/">庭の果樹の手入れ</L>
          で解説しています。
        </After>
      </Section>

      <Section id="ct-other" title="摘果・寒さ対策・病害虫">
        <Bullets items={otherItems} />
        <After>
          冬の備えは
          <L href="/guide/winter-care/">冬の庭木の寒さ対策</L>
          、薬剤を使う場合の近隣への配慮は
          <L href="/guide/spraying/">住宅地での薬剤散布</L>
          で解説しています。
        </After>
      </Section>

      <Section id="ct-request" title="業者に依頼する際の確認事項">
        <Steps items={requestItems} />
        <After>
          剪定費用の考え方は
          <L href="/cost/pruning-price/">庭木の剪定費用の相場</L>
          、木を小さくする場合は
          <L href="/guide/tree-size-reduction/">大きくなりすぎた庭木</L>
          で解説しています。
        </After>
      </Section>

      <Section id="ct-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="ct-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/fruit-trees/", label: "庭の果樹の手入れ" },
          { href: "/guide/ume-pruning/", label: "梅の剪定時期と方法" },
          { href: "/guide/winter-care/", label: "冬の庭木の寒さ対策" },
          { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
        ]}
      />

      <Cta
        text="ミカンは、枝先をそろえて切ると翌年の花が減ります。剪定の時期と、今年の実の付き方を伝えたうえで業者に相談することをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
