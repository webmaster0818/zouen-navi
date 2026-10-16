import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/toyama/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "富山の造園・庭の手入れ業者の選び方｜説明・見積もりで使われる作業用語";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "透かし剪定、切り戻し、刈り込み、強剪定、芯止め、徒長枝、ひこばえ、伐採と伐根・抜根、処分・運搬、養生など、業者の説明や見積もりで使われる作業用語の意味と、その用語が使われた際に確認すべき事項を整理しています。富山で庭の手入れを依頼する前の用語の手引きとして、掲載サービスの運営会社・対応エリアもまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "業者の説明や見積もりで使われる作業用語の意味と、確認の方法を整理しています。",
  },
};

const toc = [
  { id: "toyama-words", label: "同じ用語でも、指す程度は業者によって異なります" },
  { id: "toyama-cut", label: "枝の切り方を表す用語" },
  { id: "toyama-branch", label: "剪定対象として名前が挙がる枝" },
  { id: "toyama-remove", label: "木を取り除く作業を表す用語" },
  { id: "toyama-around", label: "作業に付随して使われる用語" },
  { id: "toyama-ask", label: "用語が使われた際に確認すべき3つの事項" },
  { id: "toyama-pick", label: "この条件に適した3サービス" },
  { id: "toyama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "toyama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "toyama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-madoguchi", "kurashi-market", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった庭まわりの専門情報を発信するとともに、「ガーデン業者サーチ」で全国の造園・園芸・外構業者を探せる情報・比較サイトです。説明で聞いた用語が、どのような作業を指すのかを依頼前に調べておきたい場合に利用できます。サイト自体は施工を行わず、実際の作業は検索で表示される各業者に依頼する形になります。運営は株式会社ガーデンメーカーで、庭の手入れ専門の全国チェーン「smileガーデン」も展開しています。",
  "kurashi-market":
    "見積もりを取らずに、サービスごとに表示された料金で依頼する形式です。作業内容が標準化されているため、出品されている作業の名称と内容を比較すると、同じ用語が出品者ごとにどのように説明されているかが分かります。完了後に口コミ・評価を投稿でき、損害賠償補償制度も用意されています。大規模な造園・外構は対応業者・内容が限られる場合があるため、作業範囲をご確認ください。運営はみんなのマーケット株式会社です。",
  "hikaku-biz":
    "発注者が無料で利用できる一括見積もりサービスで、造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分で業者を探せます。同じ条件で複数社から見積もりを取得すると、同じ作業を各社がどのような用語で記載するかを比較できます。公式サイトの口コミは本文の末尾が省略表示されており全文を確認できないため、用語の内容は見積もり時の説明でご確認ください。運営は株式会社ワンズマインドです。",
};

type Term = { term: string; mean: string; ask: string };

const cutTerms: Term[] = [
  {
    term: "透かし剪定（透かし）",
    mean: "込み合った枝を付け根から切り取って数を減らし、木の内側に光と風が通るようにする切り方です。外側の輪郭を大きく変えずに量を減らすので、木の自然な形を残したいときに使われます。",
    ask: "どの程度の量を間引くのか、作業後に向こう側がどの程度見通せるのかを確認します。「軽く」「しっかり」の感覚は人によって異なるため、写真や身振りで程度を合わせておくと、認識の相違を減らせます。",
  },
  {
    term: "間引き（間引き剪定）",
    mean: "不要な枝を付け根から切り取ることです。透かし剪定とほぼ同じ場面で使われ、同じ意味として扱う人もいます。",
    ask: "見積もりに「透かし」と「間引き」が別々に記載されている場合は、違いを確認してください。同じ作業を指している場合もあれば、対象の木が異なる場合もあります。",
  },
  {
    term: "切り戻し",
    mean: "伸びた枝を途中で切って短くすることです。枝の分かれ目や芽の少し上で切るのが基本とされ、木を一回り小さくしたいときや、伸びすぎた枝を収めたいときに使われます。",
    ask: "どこまで短くするのか、木全体としてどの程度小さくなるのかを確認します。高さを低くしたいのか、横の張り出しを抑えたいのかを先に伝えておくと、剪定位置の説明が具体的になります。",
  },
  {
    term: "刈り込み",
    mean: "刈り込み鋏や電動の刈り込み機を使用して枝先を揃えて刈り、外形を面で整える作業です。生垣や、丸く仕立てた低木などで用いられます。一本ずつ枝を選んで切る剪定とは、道具も考え方も異なります。",
    ask: "現在の形を維持するのか、一回り小さくするのかを確認します。刈り込みを続けると外側に葉が集まり、内側が透けやすくなるため、透かし剪定と組み合わせるかどうかも確認しておきます。",
  },
  {
    term: "強剪定・弱剪定",
    mean: "強剪定は太い枝まで含めて大きく切り詰め、木の大きさを大きく落とす切り方です。弱剪定は枝先を軽く整える程度の切り方を指します。強剪定は樹種や時期によっては木への負担が大きく、切り口から枯れ込んだり、幹から細い枝が多く出たりすることがあります。",
    ask: "強剪定を勧められた場合は、必要な理由、樹種と時期の面で問題がないか、翌年以降どのような姿になる見込みかを確認します。剪定後しばらくは外観が寂しくなることも、事前に確認しておくと想定外の事態を避けられます。",
  },
  {
    term: "芯止め",
    mean: "幹の最上部の先端（芯）を切り、木がそれ以上高くならないようにすることです。高さを抑えたい常緑樹などで行われます。止めた箇所の下から枝が立ち上がることがあるため、その後も手入れを続けることが前提となります。",
    ask: "どの高さで止めるのか、止めた後に形がどのように変わるのか、毎年の手入れで何が必要になるのかを確認します。一度止めた芯は元に戻らないため、高さは慎重に決めてください。",
  },
];

const branchTerms: Term[] = [
  {
    term: "徒長枝",
    mean: "勢いよくまっすぐ長く伸びる枝です。樹形を乱しやすく、花や実の付き方にも影響することがあるため、剪定で付け根から切る対象となりやすい枝です。",
    ask: "徒長枝をすべて剪定するのか、一部を残して枝の更新に利用するのかを確認します。木によっては残したほうがよい場合もあります。",
  },
  {
    term: "ひこばえ",
    mean: "木の根元や、地中の根から生えてくる若い芽や枝のことです。そのままにすると根元が込み合い、本来の幹に養分が回りにくくなることがあります。",
    ask: "地際で切るのみか、根元を少し掘って付け根から除去するのかを確認します。株立ちの木では、ひこばえを次の幹として育てる考え方もあります。",
  },
  {
    term: "胴吹き枝",
    mean: "幹の途中から直接出てくる細い枝です。強く剪定した後に出やすいとされています。",
    ask: "毎回除去するのか、将来の枝として一部を残すのかを確認します。",
  },
  {
    term: "忌み枝（逆さ枝・内向枝・交差枝・平行枝・立ち枝など）",
    mean: "樹形を乱したり、ほかの枝と接触したりするため、剪定で除去する対象とされる枝の総称です。内側へ向かう枝、ほかの枝と交差する枝、同じ向きに並んで伸びる枝、真上へ立ち上がる枝などが含まれます。",
    ask: "説明で「忌み枝を整理する」と言われた場合は、どの枝を指しているのかを、その場で一本示してもらうと分かりやすくなります。",
  },
];

const removeTerms: Term[] = [
  {
    term: "伐採",
    mean: "木を切り倒すことです。住宅の庭では、地際近くで幹を切り、切り株と根は残す形が多くなります。伐採という用語だけでは、根まで除去するかどうかは分かりません。",
    ask: "切り株をどの高さで残すのか、根は残すのか除去するのかを確認します。残す場合は、切り株からひこばえが出る樹種かどうかも確認しておきます。",
  },
  {
    term: "伐根・抜根",
    mean: "切り株と根を除去する作業です。いずれの用語も同じ作業を指して使われることが多く、会社によっては使い分けていない場合もあります。重機を使用して引き抜く方法、周囲を掘って根を切りながら除去する方法など、作業方法は現場によって異なります。",
    ask: "根をどこまで除去するのか（太い根のみか、細かい根まで掘るのか）、除去後の穴を埋め戻すのか、整地まで行うのかを確認します。近くに塀や配管がある場合は、その扱いもご確認ください。",
  },
  {
    term: "吊り切り・段切り",
    mean: "木を倒すための空間がない場所で、枝や幹を上から少しずつ切って下ろす方法を指して使われます。ロープで吊りながら下ろす場合に吊り切りと呼ぶことがあります。",
    ask: "その方法が必要な理由と、作業中に人や物が近づかないようにする範囲を確認します。高木の伐採は手間が大きく変わるため、説明を受けたうえで見積もりの内訳をご確認ください。",
  },
];

const aroundTerms: Term[] = [
  {
    term: "処分・運搬（搬出）",
    mean: "剪定した枝や幹、刈った草を敷地外へ搬出し、処理施設へ搬入することです。積み込みまでなのか、処分まで含むのかによって、用語の指す範囲が変わります。",
    ask: "剪定した枝を持ち帰ってもらえるのか、敷地内にまとめて置くのみなのかを確認します。量によって扱いが変わるかどうかも確認します。自分で処分する場合の方法は、剪定枝の処分のページにまとめています。",
  },
  {
    term: "養生",
    mean: "二つの意味で使われます。一つは、作業中に建物や車、植え込みを傷めないよう、シートや板で覆って保護すること、もう一つは、植栽した木や強く剪定した木を、回復するまで支柱や水やりで保護することです。",
    ask: "どちらの意味で使われているかを確認します。作業中の養生であれば何を覆うのか、植栽後の養生であれば依頼者側で何を行えばよいのかを確認します。",
  },
  {
    term: "消毒（薬剤散布）",
    mean: "害虫や病気を予防する、または抑えるために薬剤を散布することです。剪定とあわせて提案されることがあります。",
    ask: "対象となる害虫や病気、使用する薬剤、近隣や家族への配慮の方法を確認します。住宅地での注意点は薬剤散布のページで解説しています。",
  },
  {
    term: "雪吊り・雪囲い",
    mean: "雪の重みで枝が折れたり、低木がつぶれたりしないように、縄で枝を吊ったり、竹や板で囲ったりすることです。積雪のある地域で冬の前に行われます。",
    ask: "取り付けと取り外しが別々の作業として扱われるのかを確認します。春に取り外しに訪問する日の決め方も確認しておきます。",
  },
  {
    term: "寒肥・お礼肥",
    mean: "肥料を与える時期による呼び名です。寒肥は冬の間に与える肥料、お礼肥は花や実の後に与える肥料を指して使われます。",
    ask: "剪定と同時に施肥を提案された場合は、目的と対象の木を確認します。土と肥料の考え方は、庭の土と肥料のページで解説しています。",
  },
];

const askPoints = [
  {
    h: "対象の木と部位、作業の程度",
    b: "用語は作業方法を示しても、対象と量までは示しません。「透かします」と言われた場合は、どの木の、どの枝を、どの程度の量かを確認します。指で示してもらう、写真に印を付けてもらうなど、言葉以外の手段で認識を合わせると確実です。",
  },
  {
    h: "作業後の状態",
    b: "作業の名称より、作業後の外観のほうが、依頼者にとっては判断しやすいものです。「剪定後はどの程度の高さになりますか」「向こう側が見通せるようになりますか」と、結果の側から確認します。翌年以降の見込みもあわせて確認しておくと、次回の依頼の判断にも活用できます。",
  },
  {
    h: "書面にも同じ用語で記載してもらえるか",
    b: "説明で使われた用語と、見積書や作業明細に記載された用語が異なると、何を依頼したのかが後で分からなくなります。説明で合意した内容が書面のどの行に該当するのかを、その場で確認しておきます。",
  },
];

const checklist = [
  {
    h: "分からない用語をその場で確認したか",
    b: "確認せずにいると、用語の解釈が業者任せになります。意味だけでなく、程度も確認します。",
  },
  {
    h: "作業後の状態を確認したか",
    b: "高さ、透け具合、翌年以降の見込みなど、結果の側から確認します。",
  },
  {
    h: "根を除去するかどうかを確認したか",
    b: "伐採という用語だけでは、根まで除去するかどうかは分かりません。",
  },
  {
    h: "剪定した枝の処分方法を確認したか",
    b: "処分・運搬が含まれるのか、まとめて置くのみなのかを確認します。",
  },
  {
    h: "説明の用語と書面の用語を揃えたか",
    b: "説明で合意した内容が、見積書のどの行に該当するのかを確認します。",
  },
];

const faqs = [
  {
    q: "「透かし」と「刈り込み」、どちらを頼めばよいですか。",
    a: "木の種類と、目指す姿によって異なります。透かし剪定は枝を選んで付け根から間引き、自然な形を残しながら量を減らす方法であり、刈り込みは外形を面で揃える作業です。生垣や丸く仕立てた低木は刈り込みで整えることが多く、雑木風の庭木は透かし剪定で整えることが多いとされています。どちらが適しているかは、仕上がりのイメージを伝えたうえで、業者の説明を聞いて判断してください。",
  },
  {
    q: "強剪定を勧められました。断ってもよいですか。",
    a: "断ることは可能です。そのうえで、強剪定が必要と判断した理由を確認してください。大きくなりすぎて手入れが続けられない、建物や隣地にかかっているといった理由がある場合は、数年をかけて段階的に小さくする方法を相談できることもあります。樹種や時期によっては木への負担が大きくなるため、急ぎでない場合は時期も含めて相談することをおすすめします。",
  },
  {
    q: "伐根と抜根は同じ意味ですか。",
    a: "いずれも切り株と根を除去する作業を指して使われることが多く、会社によっては使い分けていない場合もあります。重要なのは用語の違いより、根をどこまで除去するのか、除去後の穴を埋め戻すのか、整地まで行うのかといった範囲です。見積もりにどちらの用語が記載されていても、範囲を言葉で確認してください。",
  },
  {
    q: "説明で聞いた言葉と、見積書に書かれた言葉が違います。",
    a: "同じ作業を別の用語で記載している場合もあれば、説明と異なる内容が記載されている場合もあります。どの行が説明のどの部分に該当するのかを確認し、必要であれば書面の用語を説明に合わせて修正してもらってください。見積書の欄ごとの確認方法は、神戸のページで解説しています。",
  },
  {
    q: "富山市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、富山市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
            <span className="font-bold text-text-primary">確認すべき事項：</span>
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
          "業者の説明や見積もりで使われる剪定・伐採・処分などの作業用語の意味と、その用語が使われた際に確認すべき事項を整理しています。",
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
          庭を確認してもらうと、業者から「ここは透かして、こちらは切り戻しで。この木は芯を止めましょう」といった説明を受けます。見積書にも、透かし剪定、刈り込み、伐根、処分費といった用語が記載されます。聞き慣れない用語が続くと、意味が分からないまま同意してしまいがちです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          富山市内の住宅の庭を依頼する場合も同様です。本ページでは、説明や見積もりでよく使われる作業用語について、一般的な意味と、その用語が使われた際に確認すべき事項を整理します。用語の意味を知ることよりも、用語が使われた場面で程度と範囲を確認できるようになることを目的としています。
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
          同じ用語でも、指す程度は業者によって異なります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          作業用語は、作業方法の種類を表すものです。「透かす」は枝を付け根から間引くこと、「刈り込む」は外形を揃えることを指します。ただし、どの程度間引くのか、どこまで小さくするのかは、用語そのものには含まれていません。同じ「透かし」でも、軽く風を通す程度から、向こう側がはっきり見える程度まで、人によって想定する状態が異なります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          また、地域や会社によって表現が異なったり、同じ作業を別の用語で呼んだりすることもあります。ここで挙げる意味は一般的に使われているものですが、業者がその意味で使っているとは限りません。用語が使われたら、意味を確認すると同時に、程度と範囲を確認することが基本です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            依頼者の希望を業者に伝える方法は
            <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
              依頼内容の伝え方と仕上がりの共有
            </Link>
            、見積書の欄ごとの読み方は
            <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
              見積書の読み方と書面の確認
            </Link>
            で解説しています。本ページでは、業者から使われる用語を理解する側に絞って解説します。
          </p>
        </div>
      </section>

      <section id="toyama-cut" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          枝の切り方を表す用語
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          剪定の説明で最もよく使われるのが、枝の切り方を表す用語です。一本の木に、複数の切り方を組み合わせることもよくあります。
        </p>
        <TermList terms={cutTerms} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          剪定作業全体の流れと時期は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定
          </Link>
          、生垣の刈り込みを継続する際の考え方は
          <Link href="/guide/hedge-care/" className="text-primary underline underline-offset-2 mx-1">
            生垣の手入れ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="toyama-branch" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          剪定対象として名前が挙がる枝
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          説明の中では、切り方だけでなく、剪定する枝の呼び名も使われます。どの枝を指しているのかが分かると、何を残して何を取り除くのかが把握できます。
        </p>
        <TermList terms={branchTerms} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          果樹では、花や実の付き方との関係で枝の扱いが変わります。果樹の手入れは
          <Link href="/guide/fruit-trees/" className="text-primary underline underline-offset-2 mx-1">
            庭の果樹の手入れ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="toyama-remove" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          木を取り除く作業を表す用語
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          木を切り倒す作業は、どこまでを取り除くかによって用語が分かれます。用語と範囲が一致していないと、作業完了後に「根が残っている」「穴が開いたまま」という事態になります。
        </p>
        <TermList terms={removeTerms} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          伐採作業全体については
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採
          </Link>
          、根が塀や配管に及んでいる場合は
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根と構造物
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="toyama-around" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業に付随して使われる用語
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          剪定作業そのもの以外にも、片づけや保護、季節の作業を表す用語が使われます。見積書では、これらが別の行に分けて記載されることもあります。
        </p>
        <TermList terms={aroundTerms} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          剪定した枝や刈った草の処分は
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
          、積雪に備えた年間計画は
          <Link href="/area/sapporo/" className="text-primary underline underline-offset-2 mx-1">
            積雪を考慮した年間計画
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="toyama-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          用語が使われた際に確認すべき3つの事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          用語の意味をすべて覚えておく必要はありません。どの用語が使われても、次の三点を確認すれば、作業内容はおおむね把握できます。
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
            確認することは失礼にあたりません。説明する側にとっても、依頼者が何を理解していないのかが分かるほうが、後の認識の相違を防げます。費用の見方は
            <Link href="/cost/pruning-price/" className="text-primary underline underline-offset-2 mx-1">
              剪定費用ガイド
            </Link>
            で解説しています。やり取りの内容を記録する方法は
            <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
              認識の相違に備える記録の残し方
            </Link>
            にまとめています。
          </p>
        </div>
      </section>

      <section id="toyama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、依頼前に作業用語と作業内容を比較しておきたいという条件では、次の3サービスの情報の掲載方法にそれぞれ特徴があります。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。作業の言葉をどういう意味で使っているかは、実際に作業する会社ごとに確かめてください。
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
          関連ページ
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
          作業用語は作業方法を表すもので、程度と範囲までは表しません。用語が使われたら、どの木の、どこを、どの程度かをご確認ください。
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
