import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/toyama/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "富山の造園・庭の手入れ業者の選び方｜説明や見積もりに出てくる作業の言葉";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "透かし剪定、切り戻し、刈り込み、強剪定、芯止め、徒長枝、ひこばえ、伐採と伐根・抜根、処分・運搬、養生。業者の説明や見積もりに出てくる作業の言葉の意味と、その言葉が出てきたときに何を聞き返せばよいかを整理しました。富山で庭の手入れを頼む前の言葉の手引きとして、掲載サービスの運営会社・対応エリアもまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "業者の説明や見積もりに出てくる作業の言葉の意味と、聞き返し方を整理しました。",
  },
};

const toc = [
  { id: "toyama-words", label: "同じ言葉でも、指している度合いは相手によって違う" },
  { id: "toyama-cut", label: "枝の切り方を表す言葉" },
  { id: "toyama-branch", label: "切る対象として名前が出てくる枝" },
  { id: "toyama-remove", label: "木をなくす作業を表す言葉" },
  { id: "toyama-around", label: "作業のまわりで使われる言葉" },
  { id: "toyama-ask", label: "言葉が出てきたら聞き返す3つのこと" },
  { id: "toyama-pick", label: "この条件で見ておきたい3サービス" },
  { id: "toyama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "toyama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "toyama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-madoguchi", "kurashi-market", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった庭まわりの専門情報を発信しつつ、「ガーデン業者サーチ」で全国の造園・園芸・外構業者を探せる情報・比較サイトです。説明で聞いた言葉が、作業としてどういうものなのかを依頼の前に調べておきたいときに使えます。サイト自体は施工を行わず、実際の作業は検索で見つかる各業者に依頼する形になります。運営は株式会社ガーデンメーカーで、庭手入れ専門の全国チェーン「smileガーデン」も展開しています。",
  "kurashi-market":
    "見積もりを取らずに、サービスごとに表示された料金で依頼する形です。作業の内容が標準化されているため、出品されている作業の名前と中身を見比べると、同じ言葉が出品者ごとにどう説明されているのかが分かります。完了後に口コミ・評価を投稿でき、損害賠償補償制度も用意されています。大規模な造園・外構は対応業者・内容が限られる場合があるため、作業範囲は確かめてください。運営はみんなのマーケット株式会社です。",
  "hikaku-biz":
    "発注側は無料で使える一括見積もりのサービスで、造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分で事業者を探せます。同じ条件で複数社から見積もりを取ると、同じ作業を各社がどんな言葉で書くのかを並べて見られます。公式のクチコミは本文末尾が省略表示されており全文は確認できないため、言葉の中身は見積もり時の説明で補ってください。運営は株式会社ワンズマインドです。",
};

type Term = { term: string; mean: string; ask: string };

const cutTerms: Term[] = [
  {
    term: "透かし剪定（透かし）",
    mean: "込み合った枝を付け根から切り取って数を減らし、木の内側に光と風が通るようにする切り方です。外側の輪郭を大きく変えずに量を減らすので、木の自然な形を残したいときに使われます。",
    ask: "どのくらいの量を抜くのか、終わったあとに向こう側がどの程度透けて見えるのかを聞きます。「軽く」「しっかり」の感覚は人によって違うため、写真や身ぶりで度合いを合わせておくと食い違いが減ります。",
  },
  {
    term: "間引き（間引き剪定）",
    mean: "不要な枝を付け根から切り取ることです。透かし剪定とほぼ同じ場面で使われ、同じ意味として扱う人もいます。",
    ask: "見積もりに「透かし」と「間引き」が別々に書かれていたら、何が違うのかを聞いてください。同じ作業を指していることもあれば、対象の木が違うこともあります。",
  },
  {
    term: "切り戻し",
    mean: "伸びた枝を途中で切って短くすることです。枝の分かれ目や芽の少し上で切るのが基本とされ、木を一回り小さくしたいときや、伸びすぎた枝を収めたいときに使われます。",
    ask: "どこまで短くするのか、木全体としてどのくらい小さくなるのかを聞きます。高さを下げたいのか、横の張り出しを抑えたいのかを先に伝えておくと、切る位置の説明が具体的になります。",
  },
  {
    term: "刈り込み",
    mean: "刈り込み鋏や電動の刈り込み機を使って、枝先をそろえて刈り、外形を面で整える作業です。生け垣や、丸く仕立てた低木などで使われます。一本ずつ枝を選んで切る剪定とは、道具も考え方も違います。",
    ask: "形をそのまま整えるのか、一回り小さくするのかを聞きます。刈り込みを続けると外側に葉が集まり内側がすけやすくなるため、透かしと組み合わせるかどうかも確かめておきます。",
  },
  {
    term: "強剪定・弱剪定",
    mean: "強剪定は太い枝まで含めて大きく切り詰め、木の大きさを大きく落とす切り方です。弱剪定は枝先を軽く整える程度の切り方を指します。強剪定は樹種や時期によっては木への負担が大きく、切り口から枯れ込んだり、幹から細い枝が多く出たりすることがあります。",
    ask: "強剪定を勧められたら、なぜ必要なのか、この木とこの時期で問題がないか、翌年以降どういう姿になる見込みかを聞きます。切ったあとしばらく見た目が寂しくなることも、先に聞いておくと驚かずに済みます。",
  },
  {
    term: "芯止め",
    mean: "幹のいちばん上の先端（芯）を切って、木がそれ以上高くならないようにすることです。高さを抑えたい常緑樹などで行われます。止めたところの下から枝が立ち上がってくることがあるため、その後も手入れを続けることが前提になります。",
    ask: "どの高さで止めるのか、止めたあと形がどう変わるのか、毎年の手入れで何が必要になるのかを聞きます。一度止めた芯は元に戻らないので、高さは慎重に決めてください。",
  },
];

const branchTerms: Term[] = [
  {
    term: "徒長枝",
    mean: "勢いよくまっすぐ、長く伸びる枝です。樹形を乱しやすく、花や実の付きにも影響することがあるため、剪定で付け根から切る対象になりやすい枝です。",
    ask: "徒長枝を全部切るのか、一部を残して枝の更新に使うのかを聞きます。木によっては残したほうがよい場合もあります。",
  },
  {
    term: "ひこばえ",
    mean: "木の根元や、地面の中の根から生えてくる若い芽や枝のことです。そのままにすると根元が込み合い、本来の幹に勢いが回りにくくなることがあります。",
    ask: "地際で切るだけなのか、根元を少し掘って付け根から取るのかを聞きます。株立ちの木では、ひこばえを次の幹として育てる考え方もあります。",
  },
  {
    term: "胴吹き枝",
    mean: "幹の途中から直接出てくる細い枝です。強く切ったあとに出やすいとされます。",
    ask: "毎回取り除くのか、将来の枝として一部を残すのかを確かめます。",
  },
  {
    term: "忌み枝（逆さ枝・内向枝・交差枝・平行枝・立ち枝など）",
    mean: "樹形を乱したり、ほかの枝とぶつかったりするため、剪定で取り除く対象とされる枝の総称です。内側へ向かう枝、ほかの枝と交差する枝、同じ向きに並んで伸びる枝、真上へ立ち上がる枝などが含まれます。",
    ask: "説明で「忌み枝を整理する」と言われたら、どの枝を指しているのかを、その場で一本指してもらうと分かりやすくなります。",
  },
];

const removeTerms: Term[] = [
  {
    term: "伐採",
    mean: "木を切り倒すことです。住宅の庭では、地際近くで幹を切り、切り株と根は残す形が多くなります。伐採という言葉だけでは、根まで取るかどうかは分かりません。",
    ask: "切り株をどの高さで残すのか、根は残すのか取るのかを聞きます。残す場合、切り株からひこばえが出てくる樹種かどうかも確かめておきます。",
  },
  {
    term: "伐根・抜根",
    mean: "切り株と根を取り除く作業です。どちらの言葉も同じ作業を指して使われることが多く、会社によって言い分けていない場合もあります。重機を使って引き抜く方法、周りを掘って根を切りながら取る方法など、やり方は現場によって違います。",
    ask: "根をどこまで取るのか（太い根だけか、細かい根まで掘るのか）、取ったあとの穴を埋め戻すのか、整地までするのかを聞きます。近くに塀や配管がある場合は、その扱いも確かめてください。",
  },
  {
    term: "吊り切り・段切り",
    mean: "倒すための空間がない場所で、枝や幹を上から少しずつ切って下ろすやり方を指して使われます。ロープで吊りながら下ろす場合に吊り切りと呼ぶことがあります。",
    ask: "なぜその方法が必要なのか、作業の間どこに人や物が近づかないようにするのかを聞きます。高い木の伐採は手間が大きく変わるため、説明を受けた上で見積もりの内訳を確かめてください。",
  },
];

const aroundTerms: Term[] = [
  {
    term: "処分・運搬（搬出）",
    mean: "切った枝や幹、刈った草を敷地の外へ運び出し、処理する先へ持ち込むことです。積み込みまでなのか、処分まで含むのかで、言葉の指す範囲が変わります。",
    ask: "切ったものを持ち帰ってもらえるのか、敷地内にまとめて置くだけなのかを聞きます。量によって扱いが変わるかどうかも確かめます。自分で処分する場合の方法は剪定枝の処分のページにまとめています。",
  },
  {
    term: "養生",
    mean: "二つの意味で使われます。一つは、作業中に建物や車、植え込みを傷めないよう、シートや板で覆って守ること。もう一つは、植えたり強く切ったりした木を、回復するまで支柱や水やりで保護することです。",
    ask: "どちらの意味で言っているのかを確かめます。作業中の養生なら何を覆うのか、植えたあとの養生なら自分の側で何をすればよいのかを聞きます。",
  },
  {
    term: "消毒（薬剤散布）",
    mean: "害虫や病気を防ぐ、または抑えるために薬剤をまくことです。剪定と合わせて提案されることがあります。",
    ask: "何の虫や病気を対象にしているのか、どの薬剤を使うのか、近所や家族への配慮をどうするのかを聞きます。住宅地での注意点は薬剤散布のページで扱っています。",
  },
  {
    term: "雪吊り・雪囲い",
    mean: "雪の重みで枝が折れたり、低木がつぶれたりしないように、縄で枝を吊ったり、竹や板で囲ったりすることです。雪の降る地域で冬の前に行われます。",
    ask: "取り付けと取り外しが別々の作業として扱われるのかを聞きます。春に外しに来てもらう日をどう決めるのかも確かめておきます。",
  },
  {
    term: "寒肥・お礼肥",
    mean: "肥料を与える時期による呼び名です。寒肥は冬のあいだに与える肥料、お礼肥は花や実のあとに与える肥料を指して使われます。",
    ask: "剪定と同時に施肥を提案されたら、何のために、どの木に与えるのかを聞きます。土と肥料の考え方は庭の土と肥料のページで扱っています。",
  },
];

const askPoints = [
  {
    h: "どの木の、どこを、どのくらい",
    b: "言葉はやり方を示しても、対象と量までは示しません。「透かします」と言われたら、どの木を、どの枝を、どのくらいの量か。指でさしてもらう、写真に印を付けてもらうなど、言葉以外の手段で合わせると確かです。",
  },
  {
    h: "終わったあと、どういう姿になるか",
    b: "作業の名前より、作業のあとの見た目のほうが、頼む側にとっては判断しやすいものです。「切ったあとどのくらいの高さになりますか」「向こうが見えるようになりますか」と、結果のほうから聞き返します。来年以降どうなっていくかも合わせて聞いておくと、次の依頼の判断にも使えます。",
  },
  {
    h: "書面にも同じ言葉で書いてもらえるか",
    b: "説明で使った言葉と、見積書や作業の明細に書かれた言葉が違うと、何を頼んだのかが後で分からなくなります。説明で合わせた内容が書面のどの行に当たるのかを、その場で確かめておきます。",
  },
];

const checklist = [
  {
    h: "分からない言葉を、その場で聞き返したか",
    b: "聞き流すと、言葉の解釈が相手任せになります。意味だけでなく、度合いも聞きます。",
  },
  {
    h: "作業のあとの姿を確かめたか",
    b: "高さ、透け具合、翌年以降の見込みなど、結果のほうから聞き返します。",
  },
  {
    h: "根を取るかどうかを確かめたか",
    b: "伐採という言葉だけでは、根まで取るかどうかは分かりません。",
  },
  {
    h: "切ったものの行き先を確かめたか",
    b: "処分・運搬が含まれるのか、まとめて置くだけなのかを聞きます。",
  },
  {
    h: "説明の言葉と書面の言葉をそろえたか",
    b: "説明で合わせた内容が、見積書のどの行に当たるのかを確かめます。",
  },
];

const faqs = [
  {
    q: "「透かし」と「刈り込み」、どちらを頼めばよいですか。",
    a: "木の種類と、どういう姿にしたいかによります。透かしは枝を選んで付け根から抜き、自然な形を残しながら量を減らす切り方で、刈り込みは外形を面で揃える作業です。生け垣や丸く仕立てた低木は刈り込みで整えることが多く、雑木風の庭木は透かしで整えることが多いとされます。どちらがよいかは、仕上がりのイメージを伝えたうえで、相手の説明を聞いて決めてください。",
  },
  {
    q: "強剪定を勧められました。断ってもよいですか。",
    a: "断ることはできます。そのうえで、なぜ強剪定が必要だと考えたのかを聞いてみてください。大きくなりすぎて手入れが続けられない、建物や隣地にかかっているといった理由があれば、何年かかけて少しずつ小さくする方法を相談できることもあります。樹種や時期によっては木への負担が大きくなるため、急がない場合は時期も含めて話し合うのが安心です。",
  },
  {
    q: "伐根と抜根は同じ意味ですか。",
    a: "どちらも切り株と根を取り除く作業を指して使われることが多く、会社によっては言い分けていないこともあります。大切なのは言葉の違いより、根をどこまで取るのか、取ったあとの穴を埋め戻すのか、整地までするのかといった範囲です。見積もりにどちらの言葉が書かれていても、範囲を言葉で確かめてください。",
  },
  {
    q: "説明で聞いた言葉と、見積書に書かれた言葉が違います。",
    a: "同じ作業を別の言葉で書いていることもあれば、説明と違う内容が書かれていることもあります。どの行が説明のどの部分に当たるのかを聞いて、必要なら書面の言葉を説明に合わせて直してもらってください。見積書の欄ごとの確かめ方は神戸のページで扱っています。",
  },
  {
    q: "富山市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、富山市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

function TermList({ terms }: { terms: Term[] }) {
  return (
    <div className="space-y-4">
      {terms.map((t) => (
        <div key={t.term} className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="font-bold text-text-primary mb-2">{t.term}</h3>
          <p className="text-[15px] leading-8 text-text-secondary mb-3">{t.mean}</p>
          <p className="text-[15px] leading-8 text-text-secondary">
            <span className="font-bold text-text-primary">聞いておくこと：</span>
            {t.ask}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function AreaToyamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "業者の説明や見積もりに出てくる剪定・伐採・処分などの作業の言葉の意味と、その言葉が出てきたときに聞き返すことを整理しました。",
        dateModified: UPDATED_ISO,
        author: { "@type": "Organization", name: "造園ナビ" },
        publisher: { "@type": "Organization", name: "造園ナビ", url: "https://zouen-navi.com/" },
        mainEntityOfPage: PAGE_URL,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "富山" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭を見てもらうと、業者からは「ここは透かして、こちらは切り戻しで。この木は芯を止めましょう」といった説明が返ってきます。見積書にも、透かし剪定、刈り込み、伐根、処分費といった言葉が並びます。聞き慣れない言葉が続くと、意味が分からないまま頷いてしまいがちです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          富山にある家の庭で頼む場合も同じです。このページでは、説明や見積もりによく出てくる作業の言葉について、一般的な意味と、その言葉が出てきたときに何を聞き返せばよいかを整理します。言葉の意味を知ることより、言葉が出てきた場面で度合いと範囲を確かめられるようになることを目指しています。
        </p>
      </header>

      <nav className="my-10 rounded-2xl border border-border bg-surface-alt p-5">
        <p className="font-bold text-text-primary mb-3 text-sm">目次</p>
        <ol className="space-y-2 text-sm list-decimal list-inside marker:text-text-muted">
          {toc.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-primary hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="toyama-words" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          同じ言葉でも、指している度合いは相手によって違う
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          作業の言葉は、やり方の種類を表すものです。「透かす」と言えば枝を付け根から抜くこと、「刈り込む」と言えば外形を揃えることを指します。ただ、どのくらい抜くのか、どこまで小さくするのかは、言葉そのものには含まれていません。同じ「透かし」でも、軽く風を通す程度から、向こうがはっきり見えるところまで、人によって思い浮かべるものが違います。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          また、地域や会社によって言い方が違ったり、同じ作業を別の言葉で呼んだりすることもあります。ここで挙げる意味は一般的に使われているものですが、相手がその意味で使っているとは限りません。言葉が出てきたら、意味を確かめると同時に、度合いと範囲を聞き返すのが基本になります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            こちらの希望を相手に伝える側の工夫は
            <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
              依頼内容の伝え方と仕上がりの共有
            </Link>
            、見積書の欄ごとの読み方は
            <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
              見積書の読み方と書面の確認
            </Link>
            で扱っています。このページは、相手から出てくる言葉を受け取る側に絞っています。
          </p>
        </div>
      </section>

      <section id="toyama-cut" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          枝の切り方を表す言葉
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          剪定の説明でいちばんよく出てくるのが、枝をどう切るかを表す言葉です。一本の木に、いくつかの切り方を組み合わせることもよくあります。
        </p>
        <TermList terms={cutTerms} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          剪定という作業全体の流れと時期は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定
          </Link>
          、生け垣の刈り込みを続けていくときの考え方は
          <Link href="/guide/hedge-care/" className="text-primary underline underline-offset-2 mx-1">
            生垣の手入れ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="toyama-branch" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          切る対象として名前が出てくる枝
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          説明の中では、切り方だけでなく、切る枝の呼び名も出てきます。どの枝を指しているのかが分かると、何を残して何を取るのかが見えてきます。
        </p>
        <TermList terms={branchTerms} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          果樹では、花や実の付き方との関係で枝の扱いが変わります。果樹の手入れは
          <Link href="/guide/fruit-trees/" className="text-primary underline underline-offset-2 mx-1">
            庭の果樹の手入れ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="toyama-remove" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          木をなくす作業を表す言葉
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          木を切り倒す作業は、どこまでを取り除くかによって言葉が分かれます。言葉と範囲が一致していないと、作業が終わってから「根が残っている」「穴が開いたまま」ということになります。
        </p>
        <TermList terms={removeTerms} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          伐採という作業全体については
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採
          </Link>
          、根が塀や配管に及んでいる場合は
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根と構造物
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="toyama-around" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業のまわりで使われる言葉
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          切る作業そのもの以外にも、片づけや保護、季節の作業を表す言葉が出てきます。見積書では、これらが別の行に分かれて書かれることもあります。
        </p>
        <TermList terms={aroundTerms} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          切った枝や刈った草の処分は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・草の処分
          </Link>
          、住宅地での薬剤散布は
          <Link href="/guide/spraying/" className="text-primary underline underline-offset-2 mx-1">
            住宅地での薬剤散布
          </Link>
          、肥料の考え方は
          <Link href="/guide/soil-fertilizer/" className="text-primary underline underline-offset-2 mx-1">
            庭の土と肥料
          </Link>
          、雪に備えた一年の組み立ては
          <Link href="/area/sapporo/" className="text-primary underline underline-offset-2 mx-1">
            雪を前提にした年間計画
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="toyama-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          言葉が出てきたら聞き返す3つのこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          言葉の意味を全部覚えておく必要はありません。どの言葉が出てきても、次の三つを聞き返せば、作業の中身はおおむね確かめられます。
        </p>
        <ol className="space-y-4">
          {askPoints.map((x, i) => (
            <li key={x.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{x.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="rounded-2xl border border-border bg-surface-alt p-5 mt-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            聞き返すことは失礼ではありません。説明する側にとっても、こちらが何を分かっていないのかが見えるほうが、後で食い違いが起きにくくなります。費用の見方は
            <Link href="/cost/pruning-price/" className="text-primary underline underline-offset-2 mx-1">
              剪定費用ガイド
            </Link>
            で扱っています。やり取りの内容を残しておく方法は
            <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
              食い違いに備える記録の残し方
            </Link>
            にまとめています。
          </p>
        </div>
      </section>

      <section id="toyama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、頼む前に作業の言葉と中身を見比べておきたいという条件で見ると、次の3つは情報の並び方に特徴があります。
        </p>
        <div className="space-y-4">
          {picks.map((slug) => {
            const r = findReview(slug);
            if (!r) return null;
            return (
              <div key={slug} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-bold text-text-primary mb-2">{r.companyName}</h3>
                <p className="text-sm text-text-muted mb-3 leading-7">運営：{infoValue(r, "運営")}</p>
                <p className="text-[15px] leading-8 text-text-secondary mb-4">{pickReasons[slug]}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href={`/review/${r.slug}/`} className="text-primary underline underline-offset-2">
                    口コミ・評判を見る
                  </Link>
                  <Link href={`/company/${r.slug}/`} className="text-primary underline underline-offset-2">
                    特徴を比較する
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="toyama-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。作業の言葉をどういう意味で使っているかは、実際に作業する会社ごとに確かめてください。
        </p>
        <AreaCompanyTable cityName="富山" />
      </section>

      <section id="toyama-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <div className="space-y-4">
          {checklist.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="toyama-faq" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          よくある質問
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <AreaLinks current="toyama" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/fukuoka/", label: "依頼内容の伝え方と仕上がりの共有" },
            { href: "/service/pruning/", label: "庭木の剪定" },
            { href: "/guide/hedge-care/", label: "生垣の手入れ" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-2xl border border-border bg-surface p-4 text-text-primary font-medium hover:border-primary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center">
        <p className="text-sm text-text-secondary mb-4">
          作業の言葉はやり方を表すもので、度合いと範囲までは表しません。言葉が出てきたら、どの木の、どこを、どのくらいかを聞き返してください。
        </p>
        <Link
          href="/ranking/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
        >
          掲載サービスを比較する
        </Link>
        <p className="mt-3 text-xs text-text-muted">
          本ページにはPR（広告）を含む場合があります。掲載情報は{UPDATED_LABEL}時点のものです。
        </p>
      </div>
    </article>
  );
}
