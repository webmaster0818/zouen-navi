import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Steps, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/camellia-sasanqua/";
const UPDATED_LABEL = "2026年11月1日";
const UPDATED_ISO = "2026-11-01";
const TITLE = "ツバキ・サザンカの剪定時期と方法｜花芽が付く時期とチャドクガへの注意";
const DESC =
  "ツバキ・サザンカの剪定は、ツバキが3月〜4月中旬、サザンカが花後〜4月上旬が目安です（江東区資料の表）。花芽は6月中旬〜7月中旬に枝先にでき始めるため、夏以降に枝先を切ると翌年の花が減ります。年2回発生するチャドクガの時期と、見つけた場合の扱い、業者に依頼する際の確認事項を自治体の資料をもとに整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "ツバキ・サザンカの剪定時期、花芽の位置、チャドクガの発生時期と扱いを自治体の資料をもとに整理しています。",
  },
};

const toc = [
  { id: "cs-time", label: "剪定の時期の目安" },
  { id: "cs-bud", label: "夏以降に枝先を切ると花が減る理由" },
  { id: "cs-how", label: "剪定の進め方" },
  { id: "cs-chadokuga", label: "チャドクガの発生時期と注意点" },
  { id: "cs-found", label: "チャドクガを見つけた場合・触れてしまった場合" },
  { id: "cs-request", label: "業者に依頼する際の確認事項" },
  { id: "cs-faq", label: "よくある質問" },
  { id: "cs-sources", label: "本ページで参照した資料" },
];

const timeItems: Item[] = [
  {
    h: "ツバキ類：剪定 3月〜4月中旬",
    b: "江東区の資料の表では、ツバキ類の剪定時期は3月〜4月中旬、花芽ができる時期（花芽分化期）は6月中旬〜7月中旬、花芽の位置は頂芽（枝先）、開花期は11月中旬〜4月下旬とされています。",
  },
  {
    h: "サザンカ類：剪定 花後〜4月上旬",
    b: "同じ表で、サザンカ類の剪定時期は花後〜4月上旬、花芽分化期は6月中旬〜7月中旬、花芽の位置は頂芽、開花期は11月下旬〜1月中旬とされています。",
  },
  {
    h: "時期は目安です",
    b: "表の注記には、時期はすべて目安であり、天候や日照条件などにより変化すると書かれています。お住まいの地域や木の状態によって前後します。",
  },
];

const howItems: Item[] = [
  {
    h: "花が終わったら、早めに行います",
    b: "江東区の資料では、花木の刈込は花芽をつける時期を考慮して行うこととされています。ツバキ・サザンカは花芽分化期が6月中旬〜7月中旬のため、花が終わってから花芽ができ始めるまでの間が作業の時期になります。",
  },
  {
    h: "枯れ枝・病気の枝は時期を問わず先に切ります",
    b: "江東区の資料（街路樹の剪定）では、枯枝、病気の枝、折損枝などの切除は、いつの場合でも必ず先行させるとされています。",
  },
  {
    h: "毛虫の発生時期と重ならないか確認します",
    b: "ツバキの剪定時期の終わり（4月中旬）は、後述するチャドクガの第1回の幼虫が出始める時期（4月中旬〜）と重なります。4月以降に作業する場合は、作業前に葉の裏を確認します。",
  },
];

const chadokugaFacts: string[] = [
  "年2回発生し、卵で越冬します（江東区）。杉並区は、ツバキ、サザンカなどに年に2回（初夏と秋）発生すると案内しています。",
  "江東区の資料では、第1回の幼虫の発生は4月中旬〜6月下旬、第2回は8月下旬〜10月中旬とされています。横浜市衛生研究所は、幼虫は5月〜6月と9月〜10月にかけてみられるとしています。",
  "食べるのは、ツバキ、サザンカ、ヤブツバキなどツバキ科の植物です（江東区）。横浜市衛生研究所も、幼虫の食べ物はチャ、サザンカ、ツバキなどツバキ科の植物としています。",
  "体毛に毒があり、触れると激しいかゆみを覚え発疹が出ます（江東区）。",
  "横浜市衛生研究所によると、幼虫が脱ぎ捨てた外皮にもたくさんの毒針が付いており、風で飛ぶこともあります。成虫が明かりに飛んできて毒針を落とし、それに触れて皮膚炎を起こすこともあります。",
];

const foundItems: Item[] = [
  {
    h: "枝ごと袋に切り落とします",
    b: "横浜市衛生研究所は、虫のいる枝や葉の下に大きい袋を置き、虫のいる枝・葉を袋の中に切り落とす方法を案内しています。集団の毛虫はわずかな振動や刺激で糸を引きながら落ちるため、慎重に作業するよう書かれています。袋の外に落ちた毛虫は、わりばしでつまんで袋に入れます。",
  },
  {
    h: "触れてしまった場合",
    b: "横浜市衛生研究所は、水道水を勢いよく患部に流し、ガムテープで押さえてははがす操作を繰り返し、再び水で流すことを数度繰り返すよう案内しています。痛みが残り、赤くはれ、湿疹ができた場合は医師に相談してください。",
  },
  {
    h: "範囲が広い場合は業者に依頼します",
    b: "生垣全体や高い位置に広がっている場合、毛が飛ぶ中での作業になります。江東区では、発生した際にバーナーによる焼却、剪定、薬剤散布による駆除を行っているとしています。薬剤を使う場合の近隣への配慮は、住宅地での薬剤散布のページで解説しています。",
  },
];

const requestItems: Item[] = [
  {
    h: "作業の時期",
    b: "花後の剪定を希望することを伝え、業者の予定が合わず夏以降になる場合は、枝先を切り詰める量を控えるかどうかを相談します。夏以降に枝先を切ると、翌年の花が減ることを理解したうえで依頼します。",
  },
  {
    h: "チャドクガが出ている場合の対応",
    b: "毛虫が付いている状態で依頼する場合は、そのことを先に伝え、駆除を作業に含めるか、切った枝葉をどう処分するかを確認します。",
  },
  {
    h: "生垣か単木か",
    b: "サザンカやツバキを生垣にしている場合は、生垣の長さと高さ、片面か両面かを伝え、見積もりの単位（1本ごとか、長さや面積ごとか）を確認します。生垣の手入れの考え方は、生垣の手入れのページで解説しています。",
  },
];

const faqs: Faq[] = [
  {
    q: "ツバキとサザンカの剪定は、いつ行えばよいですか。",
    a: "江東区の資料の表では、ツバキ類は3月〜4月中旬、サザンカ類は花後〜4月上旬が剪定時期の目安とされています。いずれも花芽分化期が6月中旬〜7月中旬で、花芽は枝先に付くとされているため、花が終わってから夏前までに行います。",
  },
  {
    q: "秋に剪定したら、花が咲きませんでした。",
    a: "江東区の資料の表では、ツバキ・サザンカの花芽は6月中旬〜7月中旬にでき、枝先（頂芽）に付くとされています。秋に枝先を切り詰めると、できていた花芽を切り落とすことになります。翌年は花後に剪定すると、花への影響を抑えられます。",
  },
  {
    q: "チャドクガはいつ発生しますか。",
    a: "江東区の資料では年2回、第1回の幼虫が4月中旬〜6月下旬、第2回が8月下旬〜10月中旬とされています。横浜市衛生研究所は、幼虫は5月〜6月と9月〜10月にかけてみられるとしています。",
  },
  {
    q: "チャドクガの抜け殻にも注意が必要ですか。",
    a: "横浜市衛生研究所によると、幼虫が脱ぎ捨てた外皮にもたくさんの毒針が付いており、風で飛ぶこともあります。毛虫そのものが見えなくなった後も、葉や枝に触れる作業では注意が必要です。",
  },
];

const sources: Source[] = [
  {
    org: "江東区（表の出典は経済調査会「道路植栽の設計・施工・維持管理」）",
    title: "4－3 適切な維持管理に向けて～剪定など～（PDF）",
    url: "https://www.city.koto.lg.jp/470200/documents/20260810092618.pdf",
  },
  {
    org: "横浜市 医療局衛生研究所",
    title: "5月、6月の庭木の手入れにはご注意（チャドクガ）",
    url: "https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/kenko-iryo/eiken/kankyoeisei/gaichu/niwaki.html",
  },
  {
    org: "杉並区",
    title: "樹木に発生する毛虫",
    url: "https://www.city.suginami.tokyo.jp/s102/846.html",
  },
];

export default function CamelliaSasanquaPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "ツバキ・サザンカの剪定" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        ツバキ・サザンカの剪定は、ツバキが3月〜4月中旬、サザンカが花後〜4月上旬が目安です。花芽は6月中旬〜7月中旬に枝先にでき始めるため、夏以降に枝先を切り詰めると翌年の花が減ります。
        本ページでは、江東区・横浜市・杉並区の資料をもとに、剪定の時期と進め方、年2回発生するチャドクガへの注意、業者に依頼する際の確認事項を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="cs-time" title="剪定の時期の目安">
        <P>
          江東区が街路樹などの維持管理について示した資料には、主な花木の剪定時期と花芽分化期の表（出典：経済調査会「道路植栽の設計・施工・維持管理」）が掲載されています。ツバキ類・サザンカ類の記載は次のとおりです。
        </P>
        <Steps items={timeItems} />
      </Section>

      <Section id="cs-bud" title="夏以降に枝先を切ると花が減る理由">
        <P>
          同じ表では、ツバキ類・サザンカ類とも花芽分化期は6月中旬〜7月中旬、花芽の位置は頂芽（枝先）とされています。つまり、夏から秋にかけては、翌シーズンに咲く花芽が枝先にできている状態です。
        </P>
        <P>
          この時期に、外形を整えるために枝先を刈り込むと、できていた花芽を切り落とすことになります。花後から初夏までに剪定を済ませるのは、このためです。
        </P>
        <Note>
          花を楽しむ木は、花が終わったら早めに剪定する、と覚えておくと時期を外しにくくなります。サザンカは花期が11月下旬〜1月中旬、ツバキは11月中旬〜4月下旬と、品種によって長く咲くため、花後の時期は木ごとに異なります。
        </Note>
      </Section>

      <Section id="cs-how" title="剪定の進め方">
        <Cards items={howItems} />
        <After>
          剪定費用の考え方は
          <L href="/cost/pruning-price/">庭木の剪定費用の相場</L>
          、生垣にしている場合は
          <L href="/guide/hedge-care/">生垣の手入れ</L>
          で解説しています。
        </After>
      </Section>

      <Section id="cs-chadokuga" title="チャドクガの発生時期と注意点">
        <P>ツバキ・サザンカで特に注意が必要なのが、チャドクガの幼虫です。自治体の資料の記載は次のとおりです。</P>
        <Bullets items={chadokugaFacts} />
        <After>
          庭木に付くほかの害虫・病気との見分け方は
          <L href="/guide/pest-disease/">庭木の害虫と病気</L>
          で解説しています。
        </After>
      </Section>

      <Section id="cs-found" title="チャドクガを見つけた場合・触れてしまった場合">
        <Cards items={foundItems} alt />
        <After>
          薬剤を使う場合の考え方は
          <L href="/guide/spraying/">住宅地で庭木の消毒を行う・依頼する場合</L>
          、切った枝葉の処分は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          で解説しています。
        </After>
      </Section>

      <Section id="cs-request" title="業者に依頼する際の確認事項">
        <Steps items={requestItems} />
      </Section>

      <Section id="cs-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="cs-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/pest-disease/", label: "庭木の害虫と病気" },
          { href: "/guide/hedge-care/", label: "生垣の手入れ" },
          { href: "/guide/spraying/", label: "住宅地での薬剤散布" },
          { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
        ]}
      />

      <Cta
        text="ツバキ・サザンカは、花後に剪定すると翌年の花を残せます。チャドクガが出ている場合は、そのことを伝えたうえで業者に相談することをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
