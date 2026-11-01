import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Steps, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/ume-pruning/";
const UPDATED_LABEL = "2026年11月1日";
const UPDATED_ISO = "2026-11-01";
const TITLE = "梅の剪定時期と方法｜冬の整枝・収穫後の徒長枝と、花を楽しむ木の場合";
const DESC =
  "実を取る梅の剪定は、落葉後からつぼみが膨らむまでの冬が中心で、収穫後には勢いよく伸びた徒長枝をもとから外します（JA尾張中央）。花を楽しむ梅は開花後（3月上旬）が目安です（江東区資料の表）。切る枝の種類、「梅切らぬ馬鹿」の意味、クビアカツヤカミキリの見つけ方と伐採の注意を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "梅の剪定時期と切る枝、花を楽しむ木の場合の時期、クビアカツヤカミキリへの注意を整理しています。",
  },
};

const toc = [
  { id: "um-purpose", label: "実を取るか、花を楽しむかで時期が変わります" },
  { id: "um-winter", label: "冬の整枝・剪定で外す枝" },
  { id: "um-summer", label: "春から収穫後の手入れ" },
  { id: "um-flower", label: "花を楽しむ梅の剪定時期" },
  { id: "um-proverb", label: "「桜切る馬鹿 梅切らぬ馬鹿」について" },
  { id: "um-kubiaka", label: "クビアカツヤカミキリと伐採の注意" },
  { id: "um-request", label: "業者に依頼する際の確認事項" },
  { id: "um-faq", label: "よくある質問" },
  { id: "um-sources", label: "本ページで参照した資料" },
];

const winterItems: Item[] = [
  {
    h: "時期：落葉後から、つぼみが膨らむまで",
    b: "JA尾張中央の「ウメの栽培 ～年間管理～」では、整枝・せん定は落葉後から、つぼみが膨らむまでに行うとされています。",
  },
  {
    h: "外す枝：枯れ枝・徒長枝・内向枝・下垂枝",
    b: "同資料では、枯れ枝や徒長枝（勢いよく真上に伸びた枝）、内向枝（木の内側に向かう枝）、下垂枝（下に垂れた枝）などを外すとされています。徒長枝はもとから、枯れ枝も切り除きます。下垂枝と内向枝は、必要なら残して収穫後に切る扱いです。",
  },
  {
    h: "主枝・亜主枝の先端は、外向きの葉芽で切り返す",
    b: "骨格となる主枝・亜主枝の先端は、葉芽・外芽（外側を向いた芽）の位置で切り返すとされています。",
  },
  {
    h: "翌年の花芽を作る枝（予備枝）を残す",
    b: "徒長枝のうち少し短く弱めの枝は、先端を軽く切り返して、翌年に花芽をつける枝（結果母枝）にするとされています。すべての長い枝を切ってしまわないことが、翌年の実の量に関わります。",
  },
];

const summerItems: Item[] = [
  {
    h: "芽かき（春先）",
    b: "強くせん定した時や樹勢が強い場合は、不要な芽を早めに取り除きます。JA尾張中央は、夏の徒長枝の処理はなるべく春先の芽かきで対応するよう書いています。",
  },
  {
    h: "摘蕾・摘果",
    b: "つぼみが多い場合は、上向き・下向きのつぼみを指でこすって落とします。着果が多い場合は、果実同士が重ならない程度（大梅は5cm、小梅は3cmおき）に摘果します。",
  },
  {
    h: "夏季せん定・収穫後",
    b: "徒長枝は早めにもとから外します。収穫後は徒長枝を外し、斜め上向きでやや弱めの枝（予備枝）は軽く摘心したり、ねじって寝かせたり（捻枝）して、花芽が付くようにします。",
  },
];

const kubiakaFacts: string[] = [
  "環境省によると、クビアカツヤカミキリは東アジア原産の外来のカミキリムシで、サクラ、ウメ、モモをはじめとしたバラ科の樹木を主に害します。平成24年に愛知県のサクラで初めて見つかり、令和8年8月現在、22都府県で発生が確認されています。",
  "平成30年1月に外来生物法に基づく特定外来生物に指定され、原則として生きたままの移動や飼育等が禁止されています（環境省）。",
  "東京都環境局によると、幼虫の活動期は4月から10月頃までで、食べた木屑と糞が混ざった「フラス」を幹や枝の孔から盛んに出します。根元や枝の分かれ目にたまったフラスが、発見の手掛かりになります。",
  "東京都環境局は、成虫が出るのは6月から8月頃までで、フラスが見つけやすい6月から9月頃まで定期的に観察・点検するよう案内しています。成虫が出た孔は長径2〜3センチ程度の縦長の楕円形です。",
];

const kubiakaActions: Item[] = [
  {
    h: "まず自治体に連絡します",
    b: "東京都環境局は、被害を確認した場合は、その地域の区市町村（環境担当窓口）か東京都環境局に連絡するよう案内しています。環境省のページには、成虫やフラスを見かけた場合の各府県の問い合わせ先がまとめられています。",
  },
  {
    h: "伐採する場合は、処分方法まで決めます",
    b: "東京都環境局は、防除の方法として薬剤、ネット巻き、捕殺、伐採・伐根を挙げ、伐採・伐根は最も効果的に被害を防げる方法で、伐採後は焼却またはチップ化する必要があるとしています。被害木を伐った枝や幹を、そのまま庭に置いたり持ち出したりせず、処分方法を業者・自治体と確認します。",
  },
];

const requestItems: Item[] = [
  {
    h: "実を取る木か、花を楽しむ木か",
    b: "目的によって適した時期と切り方が変わります。実を取る場合は、予備枝を残すかどうかも含めて伝えます。",
  },
  {
    h: "作業の時期と回数",
    b: "冬の整枝・剪定だけを依頼するか、収穫後の徒長枝の処理も依頼するかを決めます。",
  },
  {
    h: "幹や根元の状態",
    b: "根元にフラス（木くず）がたまっている、幹に穴があるなどの状態があれば、作業前に伝え、クビアカツヤカミキリの可能性について相談します。",
  },
];

const faqs: Faq[] = [
  {
    q: "梅の剪定は、いつ行えばよいですか。",
    a: "実を取る梅は、JA尾張中央の資料では落葉後からつぼみが膨らむまでに整枝・せん定を行い、収穫後に徒長枝を外すとされています。花を楽しむ梅は、江東区の資料の表で開花後（3月上旬）が剪定時期の目安とされています。",
  },
  {
    q: "梅の花は咲くのに実がなりません。剪定のせいですか。",
    a: "剪定以外の原因もあります。JA尾張中央の資料では、「南高」だけでは受粉する相手の木（授粉樹）がないため実がならないとされています。品種が分かる場合は、購入先や近くの農協の栽培情報で、一本で実がなる品種かを確認してください。",
  },
  {
    q: "花芽はいつできますか。",
    a: "江東区の資料の表では、ウメの花芽分化期は7月上旬〜8月中旬、花芽の位置は側芽とされています。日本植物生理学会の回答では、梅は新しい枝に花芽を形成するとされています。",
  },
  {
    q: "梅の根元に木くずがたまっています。",
    a: "クビアカツヤカミキリなど、幹の中を食べる虫の可能性があります。東京都環境局は、根元や枝の分かれ目にたまったフラス（木屑と糞の混ざったもの）が発見の手掛かりになるとしています。お住まいの区市町村の環境担当窓口に連絡してください。",
  },
];

const sources: Source[] = [
  {
    org: "JA尾張中央",
    title: "ウメの栽培 ～年間管理～",
    url: "https://ja-owari-chuoh.or.jp/saibai/%E3%82%A6%E3%83%A1%E3%81%AE%E6%A0%BD%E5%9F%B9%E3%80%80%EF%BD%9E%E5%B9%B4%E9%96%93%E7%AE%A1%E7%90%86%EF%BD%9E/",
  },
  {
    org: "江東区（表の出典は経済調査会「道路植栽の設計・施工・維持管理」）",
    title: "4－3 適切な維持管理に向けて～剪定など～（PDF）",
    url: "https://www.city.koto.lg.jp/470200/documents/20260810092618.pdf",
  },
  {
    org: "日本植物生理学会 みんなのひろば",
    title: "なぜ桜の枝を切ってはいけないのか",
    url: "https://jspp.org/hiroba/q_and_a/detail.html?id=4644",
  },
  {
    org: "環境省",
    title: "クビアカツヤカミキリの関連情報のリンク集",
    url: "https://www.env.go.jp/nature/gairai/info_kubiaka.html",
  },
  {
    org: "東京都環境局",
    title: "クビアカツヤカミキリの被害が発生・拡大しています！",
    url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/400100a20191204115758336/",
  },
];

export default function UmePruningPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "梅の剪定" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        実を取る梅の剪定は、落葉後からつぼみが膨らむまでの冬が中心で、収穫後には勢いよく伸びた徒長枝をもとから外します。花を楽しむ梅は、開花後の3月上旬が剪定時期の目安です。
        本ページでは、JA尾張中央・江東区・日本植物生理学会・環境省・東京都の資料をもとに、切る枝の種類、時期、クビアカツヤカミキリへの注意を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="um-purpose" title="実を取るか、花を楽しむかで時期が変わります">
        <P>
          日本植物生理学会の回答では、梅は成長が早く新しい枝に花芽を形成するため、果実を得る目的の場合は、花が終わったとき（4〜5月）、果実の収穫後（7〜8月）、冬に樹形を整えるため、と時期を変えて複数回剪定を行うのがよいとされています。花の鑑賞だけが目的であれば、桜と同じようなもの（落葉後の11月頃）としています。
        </P>
        <Note>
          庭の梅が、実を取るために植えられた木か、花を見るための木かを先に確認しておくと、剪定の時期を決めやすくなります。品種が分からない場合は、業者に見てもらう際に相談します。
        </Note>
      </Section>

      <Section id="um-winter" title="冬の整枝・剪定で外す枝">
        <P>JA尾張中央の「ウメの栽培 ～年間管理～」に書かれている冬の整枝・剪定の要点です。</P>
        <Steps items={winterItems} />
      </Section>

      <Section id="um-summer" title="春から収穫後の手入れ">
        <Cards items={summerItems} />
        <After>
          果樹全体の手入れの考え方は
          <L href="/guide/fruit-trees/">庭の果樹の手入れ</L>
          で解説しています。
        </After>
      </Section>

      <Section id="um-flower" title="花を楽しむ梅の剪定時期">
        <P>
          江東区の資料の表（出典：経済調査会「道路植栽の設計・施工・維持管理」）では、ウメの剪定時期は開花後（3月上旬）、花芽分化期は7月上旬〜8月中旬、花芽の位置は側芽、開花期は1月中旬〜3月中旬とされています。表の注記には、時期はすべて目安で、天候や日照条件などにより変化すると書かれています。
        </P>
        <P>
          花芽は夏にできるため、花が終わってから夏までに剪定を済ませると、翌年の花への影響を抑えられます。
        </P>
      </Section>

      <Section id="um-proverb" title="「桜切る馬鹿 梅切らぬ馬鹿」について">
        <P>
          日本植物生理学会の回答では、このことわざは、桜は切ると衰弱してかえって悪く、梅はよりよい花実を育てるには無駄な枝葉を切ることを怠ってはならない、という剪定の注意を伝える言葉と紹介されています。そのうえで、確固とした科学的証拠に基づいた言葉ではないようだとしています。
        </P>
        <P>
          同回答では、梅は桜に比べて成長力が旺盛で、枝を切ったときに新しい枝の成長が盛んに起こる点が違いとして挙げられています。実を取る梅では、何度か剪定をしないと良質の果実が得られないとまとめられています。
        </P>
        <After>
          桜の剪定については
          <L href="/guide/sakura-care/">庭の桜の剪定時期と切り方</L>
          で解説しています。
        </After>
      </Section>

      <Section id="um-kubiaka" title="クビアカツヤカミキリと伐採の注意">
        <Bullets items={kubiakaFacts} />
        <Cards items={kubiakaActions} alt />
        <After>
          伐採の流れは
          <L href="/service/felling/">庭木の伐採</L>
          、ほかの害虫との見分け方は
          <L href="/guide/pest-disease/">庭木の害虫と病気</L>
          で解説しています。
        </After>
      </Section>

      <Section id="um-request" title="業者に依頼する際の確認事項">
        <Steps items={requestItems} />
        <After>
          剪定費用の考え方は
          <L href="/cost/pruning-price/">庭木の剪定費用の相場</L>
          で解説しています。
        </After>
      </Section>

      <Section id="um-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="um-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/fruit-trees/", label: "庭の果樹の手入れ" },
          { href: "/guide/sakura-care/", label: "庭の桜の剪定時期と切り方" },
          { href: "/guide/pest-disease/", label: "庭木の害虫と病気" },
          { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
        ]}
      />

      <Cta
        text="梅は、実を取る木か花を楽しむ木かで剪定の時期が変わります。目的を伝えたうえで業者に相談することをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
