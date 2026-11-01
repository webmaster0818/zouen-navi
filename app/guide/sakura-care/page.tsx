import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Steps, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/sakura-care/";
const UPDATED_LABEL = "2026年11月1日";
const UPDATED_ISO = "2026-11-01";
const TITLE = "庭の桜の剪定時期と切り方｜落葉後の11月〜3月上旬、太い枝を切る手順と病害虫";
const DESC =
  "桜の剪定は落葉後の11月〜3月上旬が目安です（日本花の会）。桜は枝の切り口から腐りやすいため、剪定ばさみで切れる太さのうちに切り、500円玉以上の枝は手順を守って切り口に保護剤を塗ります。切る枝の種類、「桜切る馬鹿」の誤解、てんぐ巣病・クビアカツヤカミキリ・毛虫への注意を公益財団法人日本花の会などの資料をもとに整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "庭の桜の剪定時期、太い枝を切る手順、病害虫への注意を日本花の会などの資料をもとに整理しています。",
  },
};

const toc = [
  { id: "sk-time", label: "剪定の時期" },
  { id: "sk-why", label: "桜の枝は「切ってはいけない」のか" },
  { id: "sk-branches", label: "切る枝の種類" },
  { id: "sk-thick", label: "太い枝を切る手順" },
  { id: "sk-pest", label: "注意したい病害虫" },
  { id: "sk-felling", label: "伐採を考える場合の注意" },
  { id: "sk-request", label: "業者に依頼する際の確認事項" },
  { id: "sk-faq", label: "よくある質問" },
  { id: "sk-sources", label: "本ページで参照した資料" },
];

const timeItems: Item[] = [
  {
    h: "日本花の会：落葉後の11月〜3月上旬",
    b: "公益財団法人日本花の会は、桜の剪定時期を落葉後の11月〜3月上旬としています。",
  },
  {
    h: "日本植物生理学会の回答：落葉が終わった11月頃",
    b: "桜の花芽は開花前年の7〜8月に形成されるため、剪定は花芽が判断できる、落葉が終わった11月頃が最適とされています。",
  },
  {
    h: "江東区資料の表：9月末〜12月、1月末〜3月",
    b: "江東区の資料の表（出典：経済調査会「道路植栽の設計・施工・維持管理」）では、サクラ類の剪定時期は9月末〜12月、1月末〜3月、花芽分化期は6月下旬〜8月上旬、花芽の位置は側芽とされています。時期は目安で、天候や日照条件で変化すると注記されています。",
  },
];

const branchItems: Item[] = [
  {
    h: "ひこばえ・台芽",
    b: "地際から伸びる枝は台木から出ている枝が多く、切らないと栄養がこの枝のほうに集中してしまいます（日本花の会）。",
  },
  {
    h: "ふところ枝・からみ枝",
    b: "他の枝に絡むように伸び、風でこすれて傷ができたり折れたりして、腐朽が入り込みやすくなります（日本花の会）。",
  },
  {
    h: "胴ぶき枝と、地面から1.5〜2.0mまでの枝",
    b: "木が成長しても枝の位置は変わらないため、将来通行の障害になる1.5〜2.0m以下の枝は早めに剪定します（日本花の会）。なお江東区の資料では、胴吹枝は木が樹勢を回復させるための新芽でもあり、緊急性がない場合は休眠期（冬季）まで待って剪定することが望まれるとしています。",
  },
  {
    h: "さかさ枝・枯れ枝",
    b: "さかさ枝は異形な樹形になる可能性があるため切り落とします。枯れ枝は景観上よくなく、健全な枝の空間を狭くします（日本花の会）。",
  },
];

const thickSteps: Item[] = [
  { h: "1. 下側に切れ目を入れる", b: "切る枝の下側に、太さの約3分の1程度の切れ目を入れます。" },
  { h: "2. 上から枝を切り落とす", b: "上から枝を切り落とします。" },
  { h: "3. えりを残して切り直す", b: "枝の付け根のふくらみ（えり）を残し、幹に沿って切り口が平らになるように再度切ります。" },
  { h: "4. 切り口に保護剤を塗る", b: "切り口には必ず傷口の保護剤を塗布します。" },
];

const pestFacts: string[] = [
  "サクラ類てんぐ巣病：日本花の会によると、‘染井吉野’はこの病気にかかりやすい品種です。かかった枝を放置すると徐々にまん延し、花が咲かなくなり、やがて枯れます。伝染性の病気のため、同会は‘染井吉野’の苗木の配布・販売を取りやめ、かかりにくい‘神代曙’を推奨しています。",
  "クビアカツヤカミキリ：環境省によると、サクラ、ウメ、モモをはじめとしたバラ科の樹木を主に害する外来のカミキリムシで、令和8年8月現在22都府県で発生が確認され、特定外来生物として生きたままの移動や飼育等が原則禁止されています。日本花の会も、加害されたサクラは枯れてしまう可能性があるとしています。",
  "モンクロシャチホコ：江東区の資料によると、幼虫は8〜9月に1回、サクラに発生し、木の葉がすべて食べられるほど食べます。無毒ですが、肌に触れると軽度のアレルギーが生じることがあります。",
  "アブラムシ類：日本花の会によると、春に新葉が捲くれて展開しない症状が増え、ひどい場合は新枝の成長が止まり夏に落葉することもあります。萌芽直前ごろの薬剤散布が効果的で、葉が捲いてしまった後の散布は効果が少ないとされています。",
  "枝の“こぶ”：日本花の会は、近年サクラの枝にこぶがよく観察されており、第二のてんぐ巣病になる可能性があるとして調査中としています。",
];

const requestItems: Item[] = [
  {
    h: "作業の時期",
    b: "落葉後から3月上旬までの作業を希望することを伝えます。業者の予定で時期がずれる場合は、切る枝の量を控えるか相談します。",
  },
  {
    h: "太い枝の切り方と保護剤",
    b: "太い枝を切る場合は、付け根で切るか、切り口に保護剤を塗るかを確認します。枝の途中で切る方法は、日本花の会が不適切な剪定例として挙げています。",
  },
  {
    h: "病害虫の確認",
    b: "てんぐ巣病が疑われる枝、根元の木くず、葉の異常などがあれば、作業前に伝えて見てもらいます。",
  },
];

const faqs: Faq[] = [
  {
    q: "桜の枝は切ってはいけないのですか。",
    a: "日本花の会は、「桜の枝を切ってはいけない」というのは間違いとしています。枝は出た位置から上に移動しないため、切らずにおくと太く長くなり、結果的に太い枝を切ることになるケースがよく見られるとして、将来じゃまになりそうな枝は剪定ばさみで切れる太さのうちに剪定することが大事としています。",
  },
  {
    q: "桜の剪定は何月に行えばよいですか。",
    a: "日本花の会は落葉後の11月〜3月上旬としています。日本植物生理学会の回答では、花芽は開花前年の7〜8月に形成され、花芽が判断できる落葉後の11月頃が最適とされています。",
  },
  {
    q: "太い枝を途中で切ってしまいました。",
    a: "日本花の会は、枝を途中で切ると、そこから腐朽菌が侵入して太枝や幹の腐朽が進み、樹勢に悪影響を与えるとしています。切り口の処置について、造園業者や樹木医に相談することをおすすめします。",
  },
  {
    q: "庭に桜を植えるとき、根について気をつけることはありますか。",
    a: "日本花の会によると、桜の根は浅根性といわれ、表面から深さ60cm程度の場所に多く発生するため、適切な深さで植えることが大切です。また、植え付けてから5年目までの間に将来の樹形をつくる剪定を行うよう案内しています。",
  },
];

const sources: Source[] = [
  {
    org: "公益財団法人日本花の会",
    title: "整枝・剪定",
    url: "https://www.hananokai.or.jp/sakura/sakuramihonen-info/sakuramihonen-info-list7/",
  },
  {
    org: "公益財団法人日本花の会",
    title: "FAQ・桜の豆知識",
    url: "https://www.hananokai.or.jp/sakura/sakuramihonen-faq/",
  },
  {
    org: "公益財団法人日本花の会",
    title: "桜の病害",
    url: "https://www.hananokai.or.jp/sakura/sakuramihonen-topic/",
  },
  {
    org: "日本植物生理学会 みんなのひろば",
    title: "なぜ桜の枝を切ってはいけないのか",
    url: "https://jspp.org/hiroba/q_and_a/detail.html?id=4644",
  },
  {
    org: "江東区（表の出典は経済調査会「道路植栽の設計・施工・維持管理」）",
    title: "4－3 適切な維持管理に向けて～剪定など～（PDF）",
    url: "https://www.city.koto.lg.jp/470200/documents/20260810092618.pdf",
  },
  {
    org: "環境省",
    title: "クビアカツヤカミキリの関連情報のリンク集",
    url: "https://www.env.go.jp/nature/gairai/info_kubiaka.html",
  },
  {
    org: "東京都環境局",
    title: "クビアカツヤカミキリの被害が発生・拡大しています",
    url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/400100a20191204115758336/",
  },
];

export default function SakuraCarePage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭の桜の剪定" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        桜の剪定は、落葉後の11月〜3月上旬が目安です。桜は枝の切り口から腐りやすく、太い枝を切ると木が衰弱する原因になるため、剪定ばさみで切れる太さのうちに切ることが基本です。
        本ページでは、公益財団法人日本花の会・日本植物生理学会・江東区・環境省・東京都の資料をもとに、時期、切る枝、太い枝を切る手順、病害虫と伐採時の注意を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="sk-time" title="剪定の時期">
        <P>資料によって示し方に幅がありますが、いずれも花芽ができる夏を避け、落葉期を中心にしています。</P>
        <Steps items={timeItems} />
      </Section>

      <Section id="sk-why" title="桜の枝は「切ってはいけない」のか">
        <P>
          日本花の会は、桜は枝の切り口から腐りやすく、太い枝を切ると木が衰弱する原因になるとしたうえで、「桜の枝を切ってはいけない」という諺は間違いとしています。枝は出た位置から上に移動しないため、切らずにおくと太く長くなり、結果として太い枝を切ることになるためです。
        </P>
        <P>
          同会は、大木になってから枝を切らないよう、植え付けてから5年目までの間に将来の樹形をつくるための剪定を行うよう案内しています。日本植物生理学会の回答でも、「桜伐る馬鹿 梅伐らぬ馬鹿」は確固とした科学的証拠に基づいた言葉ではないようだとし、剪定する時期を守ることや切り口を保護する手段で問題を解決している、としています。
        </P>
      </Section>

      <Section id="sk-branches" title="切る枝の種類">
        <Cards items={branchItems} />
      </Section>

      <Section id="sk-thick" title="太い枝を切る手順">
        <P>
          日本花の会は、剪定ばさみで切れる太さの枝のうちに切り、500円玉以上の太さの枝は次の手順で切って、切り口には必ず傷口の保護剤を塗布するよう案内しています。
        </P>
        <Steps items={thickSteps} />
        <Note>
          日本花の会は、枝を途中で切ると、そこから腐朽菌が侵入して太枝や幹の腐朽が進み、樹勢に悪影響を与えるとして、不適切な剪定例に挙げています。
        </Note>
        <After>
          高い位置の枝を切る作業の危険は
          <L href="/guide/garden-safety/">庭作業の事故を防ぐ</L>
          で解説しています。
        </After>
      </Section>

      <Section id="sk-pest" title="注意したい病害虫">
        <Bullets items={pestFacts} />
        <After>
          ほかの害虫との見分け方は
          <L href="/guide/pest-disease/">庭木の害虫と病気</L>
          、薬剤を使う場合の近隣への配慮は
          <L href="/guide/spraying/">住宅地での薬剤散布</L>
          で解説しています。
        </After>
      </Section>

      <Section id="sk-felling" title="伐採を考える場合の注意">
        <P>
          根元に木くず（フラス）がたまっている、幹に縦長の楕円形の穴（長径2〜3cm程度）があるといった場合は、クビアカツヤカミキリの被害の可能性があります（東京都環境局）。東京都環境局は、被害を確認した場合は区市町村の環境担当窓口か都に連絡するよう案内し、伐採・伐根は最も効果的に被害を防げる方法で、伐採後は焼却またはチップ化する必要があるとしています。
        </P>
        <P>
          被害が疑われる桜を伐採する場合は、先に自治体に連絡し、伐った幹や枝の処分方法を業者と確認してから作業します。環境省のページには、成虫やフラスを見かけた場合の各府県の問い合わせ先がまとめられています。
        </P>
        <After>
          伐採の流れは
          <L href="/service/felling/">庭木の伐採</L>
          、残った切り株の扱いは
          <L href="/guide/stump-removal/">伐採後の切り株</L>
          、木を残せるかの判断は
          <L href="/guide/tree-doctor/">樹木医に相談する場面</L>
          で解説しています。
        </After>
      </Section>

      <Section id="sk-request" title="業者に依頼する際の確認事項">
        <Steps items={requestItems} />
        <After>
          剪定費用の考え方は
          <L href="/cost/pruning-price/">庭木の剪定費用の相場</L>
          で解説しています。
        </After>
      </Section>

      <Section id="sk-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="sk-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/ume-pruning/", label: "梅の剪定時期と方法" },
          { href: "/guide/pest-disease/", label: "庭木の害虫と病気" },
          { href: "/guide/tree-size-reduction/", label: "大きくなりすぎた庭木" },
          { href: "/service/felling/", label: "庭木の伐採" },
        ]}
      />

      <Cta
        text="桜は、太い枝の切り方と切り口の処置で、その後の傷み方が変わります。切り方と時期を確認したうえで業者に相談することをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
