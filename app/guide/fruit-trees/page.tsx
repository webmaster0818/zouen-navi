import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/fruit-trees/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "庭の果樹の手入れ｜実がならない・隔年結果の理由と、剪定時期・摘果・大きくなりすぎた場合の対処";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "柿・柑橘・梅・ブルーベリーなど、家庭の庭にある果樹の手入れを整理します。実がならない理由の切り分け、成り年と休み年を繰り返す場合の考え方、花芽の付く位置と剪定時期の関係、摘果、落果の片づけ、大きくなりすぎた木の扱い、自分で行う範囲と業者に依頼する範囲を解説します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "家庭の果樹で生じやすい「実がならない」「一年おきにしか実がならない」「大きくなりすぎた」という問題を、花芽と剪定時期の関係から整理しています。",
  },
};

const toc = [
  { id: "ft-nofruit", label: "実がならない理由は、木の状態と花の状態に分かれます" },
  { id: "ft-alternate", label: "豊作の翌年に実が少なくなる理由" },
  { id: "ft-bud", label: "花芽の付く位置によって剪定の適期が異なります" },
  { id: "ft-thinning", label: "摘果により木の負担が減り、翌年の結実にもつながります" },
  { id: "ft-dropped", label: "落果と、集まる虫や動物への対処" },
  { id: "ft-oversize", label: "屋根に届くほど成長した果樹の扱い" },
  { id: "ft-ask", label: "脚立の高さを基準とした依頼範囲の判断" },
  { id: "ft-faq", label: "よくある質問" },
];

const noFruitCauses = [
  {
    h: "花が咲いていない",
    b: "実がならない以前に、花が付いていない場合です。植えて間もない若い木は枝葉を伸ばす時期にあり、花が付き始めるまでに年数がかかります。植えてから年数が経った木で花が付かない場合は、日当たりの不足、枝が込みすぎて内側に光が入らない、花芽の付いた枝を剪定している、のいずれかが考えられます。最後の原因は、手入れのたびに生じているため気づきにくいものです。",
  },
  {
    h: "花は咲くが実が残らない",
    b: "花が咲いても、受粉しなければ実になりません。果樹には、一本のみでは実が付きにくく、別の品種を近くに植える必要がある種類があります。たとえばJA尾張中央の「ウメの栽培 ～年間管理～」では、ウメの「南高」は一本のみでは受粉樹がなく実がならないとされています。同じ庭や近隣に受粉樹があった時期は実がなっていたものの、その木がなくなってから実がならなくなった、ということも起こります。",
  },
  {
    h: "枝の勢いが強すぎる",
    b: "勢いよく真上に伸びる太い枝ばかりの木は、枝葉を伸ばすほうに養分が向かい、花や実が付きにくくなります。JA尾張中央の「果樹の着果管理」でも、ウメやカキなどで枝の勢いが強すぎると受粉しても実が付かないことがあると記載されています。強く剪定した翌年に勢いのある枝が一斉に伸び、実が付かないという状態は、剪定方法の結果として生じています。",
  },
  {
    h: "実が付いた後に落ちている",
    b: "小さな実が多数付いた後、初夏にかけてある程度落ちるのは、木が自ら数を調整する自然な現象で、生理落果と呼ばれます。これ自体は異常ではありません。一方で、ほとんどすべてが落ちる、実に穴や傷がある場合は、害虫や病気の可能性も考慮します。見分け方は害虫と病気のページで解説しています。",
  },
];

const alternateItems = [
  {
    h: "実を付けた枝は、翌年に向けた準備が遅れます",
    b: "果樹は、実を育てることと、翌年の花芽の準備を同じ時期に並行して行っています。実を多く付けた年は養分が実に回り、翌年の花芽の準備が不十分になります。JA埼玉中央の「カンキツ類の整枝せん定 ～隔年結果になっていませんか～」でも、実を付けた枝からは翌年の新しい枝が出にくく、実を付けなかった枝から伸びた枝に翌年花が付くという関係が説明されています。",
  },
  {
    h: "成り年と休み年は自然には平準化しません",
    b: "一度豊作になると翌年は実が少なく、その翌年に再び豊作になる。この繰り返しを隔年結果と呼びます。放置しても平準化されることは少なく、むしろ固定されがちです。成り年に多く収穫できても、休み年に花がほとんど付かない状態が続く場合は、手入れを行う意味があります。",
  },
  {
    h: "平準化するには、成り年に減らし、休み年に残します",
    b: "考え方は単純で、花や実の多い年には数を減らし、少ない年にはできるだけ残します。前出のJA埼玉中央の資料でも、カンキツで花の多い年と少ない年とで剪定方法を変え、年ごとの開花数の差を小さくする方法が示されています。具体的には、成り年に実を間引くこと（摘果）と、剪定で花芽の付いた枝をどの程度残すかの二つで調整します。",
  },
  {
    h: "肥料で解決しようとしない",
    b: "休み年に実が少ないからといって肥料を追加しても、枝葉が伸びるのみで結実に結びつかないことがあります。隔年結果の主な原因は、成り年の着果過多です。肥料が必要な場合と不要な場合の考え方は、土と肥料のページで解説しています。",
  },
];

const budItems = [
  {
    name: "カキ",
    b: "熊本県の「落葉果樹（カキ）の整枝・せん定のポイント」によると、カキは前年に伸びた枝（結果母枝）の先端部から出る枝に花芽が付きます。そのため、剪定で枝先を切り返すと花芽が減ります。剪定は落葉後の休眠期に行うとされています。枝先を揃えて短く刈り込むと、外観は整っても翌年の実が大きく減る樹種です。込み合った枝は、先端を詰めるのではなく、付け根から間引く形で減らします。",
  },
  {
    name: "柑橘（ミカン・ユズ・レモンなど）",
    b: "JA埼玉中央の「カンキツ類の整枝せん定」では、前年に伸びた枝に花芽を持つ芽が付き、そこから伸びた枝に花が咲くと説明されています。剪定時期は3月上旬頃から新しい枝が出る前まで、とされています。常緑で一年中葉があるため、いつ剪定しても同じように見えますが、時期を外すと翌年の花芽を落とすことになります。地域や品種によって差があるため、近隣の農協や販売店の栽培情報もあわせてご確認ください。",
  },
  {
    name: "ウメ",
    b: "JA尾張中央の「ウメの栽培 ～年間管理～」では、ウメは短い枝（短果枝）を中心に花が付くとされ、冬の剪定は落葉後からつぼみがふくらむまでに行い、収穫後には勢いよく伸びた枝（徒長枝）を除去すると記載されています。真上に伸びる長い枝には花が付きにくいため、冬に残すのは短い枝が多い側です。",
  },
  {
    name: "ブルーベリー",
    b: "冬になると、丸くふくらんだ芽と細くとがった芽の違いが分かるようになります。ふくらんだほうが花芽で、枝の先端寄りに集まって付く傾向があります。枝先を一律に切り揃えると、その年の花芽を落とします。なお、JA埼玉中央の「果樹を新たに育ててみませんか？」では、ブルーベリーは同じ系統（ハイブッシュ、ラビットアイなど）の受粉樹もあわせて植えることが推奨されています。一本のみの庭で実が少ない場合は、この点もご確認ください。",
  },
];

const thinningItems = [
  {
    h: "摘果は実を廃棄するための作業ではありません",
    b: "付いた実の一部を若いうちに取り除くのが摘果です。残した実が大きくなりやすいことに加え、木の負担が減って翌年の花芽の準備に養分が回るため、前の節で触れた成り年と休み年の差を小さくする効果があります。付いた実を取り除くことは惜しく感じられますが、収穫量の合計で見ると不利にならない場面が多い作業です。",
  },
  {
    h: "時期は、自然に落果する分を待ってから",
    b: "JA尾張中央の「果樹の着果管理」では、カキやカンキツ類の摘果は生理落果が終わるのを待ってから行うとされています。早すぎると、その後の自然な落果と重なって実が不足することがある、とも記載されています。初夏に小さな実の落果が落ち着いてから、残っている数を見て判断する順序です。",
  },
  {
    h: "残す実の選び方",
    b: "傷のある実、形の悪い実、上向きに付いている実、一か所に固まって付いている実から取り除きます。枝一本あたりの目安は樹種や品種によって異なるため、本ページでは数値は挙げていません。家庭の庭では、まず明らかに込み合っている房を減らすことから始めれば十分です。",
  },
  {
    h: "高所の実は、取れる範囲で判断する",
    b: "摘果も収穫も、手の届かない高さの実は取り残されます。その実が熟して落ち、片づけの手間となり、虫や動物を呼び寄せます。手の届かない高さに実が付く木は、摘果の工夫より先に、木の高さを下げることを検討します。高さの扱いは後の節で解説します。",
  },
];

const droppedItems = [
  {
    h: "落果はその日のうちに拾う",
    b: "地面に落ちて傷んだ実は、虫を集め、においで動物を呼び寄せます。一度餌場として認識されると、結実の時期に合わせて訪れるようになります。熟す時期は落果量が急増するため、毎日の見回りで拾う習慣にしておくと、手間の増加を抑えられます。",
  },
  {
    h: "収穫しない実を木に残したままにしない",
    b: "食べないからといって木に付けたままにしておくと、鳥や動物が訪れて食べ、食べ残しが落ちて散乱します。収穫して食べる予定がない果樹は、実が付く前の段階で摘果を多めに行うか、木そのものを残すかどうかを検討する対象です。",
  },
  {
    h: "隣地や道路に落果する位置の実",
    b: "枝が境界を越え、隣地や道路に実が落ちる状態は、片づけの問題であると同時に近隣との問題になります。越境した枝や実の扱いの考え方は、越境した枝と根のページで解説しています。剪定の際に境界側の枝を先に整えておくと、敷地外への落果も減ります。",
  },
];

const oversizeItems = [
  {
    h: "大きくなった原因の多くは、上に伸びる枝を残し続けたことです",
    b: "果樹は勢いのある枝が上に向かって伸びやすく、毎年少しずつ残すと数年で手が届かなくなります。手の届かない高さに実が付き、収穫も摘果もできず、落果の片づけのみが増える状態になると、手入れの目的が「実を収穫する」から「木の大きさを抑える」に変わっています。",
  },
  {
    h: "高さを下げる剪定とその翌年",
    b: "JA埼玉中央の「カキ・クリの剪定、樹形改造」では、上に向かって伸びた太い枝を、脚立で管理できる高さまで大きく切り下げる方法が紹介されています。あわせて、翌年は切り口から勢いの強い枝が多数伸び、間引きが必要になることも記載されています。高さを下げる作業は一度で終わらず、翌年以降の枝の整理まで含めた一連の作業として考えます。",
  },
  {
    h: "一度に下げると数年は実が減ります",
    b: "大きく剪定した翌年は、前の節で触れたように勢いの強い枝が伸び、花や実が付きにくくなります。実を楽しみにしている木であれば、数年に分けて段階的に下げるか、数年は実が減ることを受け入れて一度に下げるかを、事前に決めておく必要があります。どちらを選ぶかによって、業者への伝え方も変わります。",
  },
  {
    h: "残すかどうかを検討する場面",
    b: "実を収穫しなくなった、木が住宅や電線に近い、落果の片づけが負担になっているといった場合は、木を小さく維持し続けるより、本数を減らす判断のほうが確実に手間を減らせます。庭全体の手入れを減らす考え方は、庭じまいのページで解説しています。",
  },
];

const askItems = [
  {
    h: "自分で行いやすい作業",
    b: "地面に立って届く範囲の剪定、摘果、収穫、落果の片づけは自分で行いやすい作業です。低く仕立てた木や、ブルーベリーのように背の高くならない種類であれば、手入れの大半はこの範囲に収まります。花芽の付き方を一度理解すれば、毎年同じ考え方で行える作業です。",
  },
  {
    h: "業者に依頼したほうがよい作業",
    b: "脚立の上で刃物を使う高さの剪定、太い枝を切り落とす作業、屋根や電線、隣地に近い枝の作業は、いずれも作業そのものの難しさより、転落や枝の接触といった事故の危険のほうが大きい作業です。高さを下げる樹形の作り直しも、どの枝を残すかの判断を伴うため、経験のある業者に任せる意味があります。",
  },
  {
    h: "依頼する際に伝える事項",
    b: "樹種と、実を収穫したいのか、大きさを抑えたいのかという目的を明確に伝えます。目的を伝えずに依頼すると、外観を整える刈り込みとなり、カキのように枝先に花芽の付く木では翌年の実が大きく減ることがあります。「実を残したいので花芽の付く枝は残してほしい」「数年は実が減ってもよいので高さを下げたい」といった伝え方で、剪定してよい範囲を共有しておきます。",
  },
  {
    h: "時期の相談もあわせて行う",
    b: "果樹は樹種ごとに剪定の適期が異なるため、庭のほかの木とまとめて同日に剪定してもらうと、果樹のみ時期が適さないことがあります。まとめて依頼する場合は、果樹のみ別の時期に作業できるかも確認しておきます。剪定の費用や依頼の流れは、剪定サービスのページにまとめています。",
  },
];

const faqs = [
  {
    q: "植えてから何年も経つのに、花が咲きません。何が原因ですか。",
    a: "日当たりの不足、枝が込みすぎて内側に光が入らない、花芽の付いた枝を毎年剪定している、のいずれかが主な原因です。特に、枝先を揃えて刈り込む手入れを続けていると、カキのように枝の先端寄りに花芽が付く樹種では、花がほとんど残りません。まず、依頼者自身や業者がどの時期に、どのように剪定しているかをご確認ください。肥料を追加する前に確認すべき点です。",
  },
  {
    q: "梅の木が一本だけで、花は咲くのに実がなりません。",
    a: "受粉樹がない可能性があります。JA尾張中央の「ウメの栽培 ～年間管理～」では、「南高」は一本のみでは受粉樹がないため実がならないとされています。品種が分かれば、その品種が一本で結実しやすいかどうかを、購入先や近隣の農協の栽培情報でご確認ください。受粉樹となる品種を近くに植えることで改善する場合があります。",
  },
  {
    q: "柿が、たくさん成った翌年はほとんど成りません。直りますか。",
    a: "成り年と休み年を繰り返す、隔年結果と呼ばれる状態で、成り年の着果過多が主な原因です。成り年に実を間引いて減らし、休み年にはできるだけ残すという調整を数年続けると、差が小さくなる方向に向かいます。JA尾張中央の「果樹の着果管理」では、カキの摘果は生理落果が終わるのを待ってから行うとされています。剪定で枝先を切り返すと花芽が減る点にもご注意ください。",
  },
  {
    q: "大きくなりすぎた果樹を、一度で低くしてもらえますか。",
    a: "作業としては可能な場合が多いものの、大きく剪定した翌年は切り口から勢いの強い枝が多数伸び、その整理が必要となり、数年は実も付きにくくなります。実を楽しみにしている場合は数年に分けて下げる、実が減ってもよい場合は一度に下げる、というように目的を決めてから相談してください。高所の作業は事故の危険があるため、無理に自分で行わないでください。",
  },
];

export default function FruitTreesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "家庭の果樹で生じやすい「実がならない」「一年おきにしか実がならない」「大きくなりすぎた」という問題を、花芽と剪定時期の関係、摘果、落果の片づけから整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭の果樹の手入れ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          柿、ミカンやユズ、梅、ブルーベリーなど、住宅の庭に植えられている果樹は、植えた人が実を楽しみにしていたものが多く、ほかの庭木とは手入れの目的が異なります。しかし、ほかの木と同じように枝先を刈り揃えていると、翌年の花芽を落とし、実がならない木になっていきます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、実がならない理由の切り分け、一年おきにしか実がならない状態の考え方、花芽の付く位置と剪定の適期の関係、摘果、落果の片づけ、大きくなりすぎた木の扱い、自分で行う範囲と業者に依頼する範囲を整理します。樹種ごとの時期は、農協や県の公開資料で確認できた範囲のみを、出典を添えて記載しています。
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

      <section id="ft-nofruit" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          実がならない理由は、木の状態と花の状態に分かれます
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「実がならない」という同じ問題でも、花が咲いていないのか、咲いているのに実が残らないのかによって、確認すべき点がまったく異なります。まずどちらに該当するかを、一シーズンかけて確認します。
        </p>
        <ol className="space-y-4">
          {noFruitCauses.map((x, i) => (
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          実や葉に穴・斑点がある場合の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          、日照の条件から検討する場合は
          <Link href="/plant/shade/" className="text-primary underline underline-offset-2 mx-1">
            日陰に強い庭木おすすめ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ft-alternate" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          豊作の翌年に実が少なくなる理由
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          柿や柑橘でよく見られるのが、「昨年は多く実がなったのに、今年はほとんど実がならない」という状態です。木が弱ったのではなく、前年の結実の結果として生じていることが多い現象です。
        </p>
        <div className="space-y-4">
          {alternateItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          肥料を与えるかどうかの判断は
          <Link href="/guide/soil-fertilizer/" className="text-primary underline underline-offset-2 mx-1">
            庭の土と肥料
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ft-bud" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          花芽の付く位置によって剪定の適期が異なります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          果樹の剪定で最も重要なのは、翌年の花芽がどの枝のどの位置に付くかです。この点が樹種によって異なるため、同じ時期に同じ方法で剪定すると、ある木では問題がなく、別の木では実がならなくなります。以下は代表的な樹種について、公開されている栽培資料で確認できた範囲です。
        </p>
        <div className="space-y-4">
          {budItems.map((x) => (
            <div key={x.name} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.name}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          資料はいずれも産地での栽培を前提としたもので、地域や品種、その年の気候によって時期は前後します。ここに挙げていない樹種や、品種が不明な木は、購入先や近隣の農協の栽培情報で確認してから剪定することをおすすめします。剪定全般の時期の考え方と依頼の流れは
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定
          </Link>
          、年間の作業計画は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ft-thinning" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          摘果により木の負担が減り、翌年の結実にもつながります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          家庭の果樹では、付いた実をすべて残しがちです。しかし、着果過多は隔年結果の原因となり、実も小さくなります。摘果は、手間に比べて効果の大きい作業です。
        </p>
        <ol className="space-y-4">
          {thinningItems.map((x, i) => (
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
      </section>

      <section id="ft-dropped" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          落果と、集まる虫や動物への対処
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          果樹のある庭で、ほかの庭木にはない手間となるのが落果の片づけです。熟す時期の落果は、放置するとそのまま虫や動物を呼び寄せる原因になります。
        </p>
        <div className="space-y-4">
          {droppedItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          すでに動物が訪れている場合の対応は
          <Link href="/guide/garden-animals/" className="text-primary underline underline-offset-2 mx-1">
            庭に来る動物
          </Link>
          、境界を越えた枝や実の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            越境した枝と根
          </Link>
          、片づけたものの処分方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ft-oversize" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          屋根に届くほど成長した果樹の扱い
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          古い住宅の庭の柿や柑橘は、二階の屋根に届くほど成長していることがあります。手の届かない高さに実が付く状態では、収穫も摘果もできません。
        </p>
        <div className="space-y-4">
          {oversizeItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          木を残さない判断をする場合は
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採
          </Link>
          、庭全体の手入れを減らす方向の考え方は
          <Link href="/guide/garden-downsizing/" className="text-primary underline underline-offset-2 mx-1">
            庭じまいという選択
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ft-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          脚立の高さを基準とした依頼範囲の判断
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          果樹の手入れは、知識があれば自分で行える部分が多い一方で、高さのある木では事故の危険が優先されます。判断の目安は、作業の難しさより、足元の高さです。
        </p>
        <div className="space-y-4">
          {askItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          脚立や刃物を使用する作業の注意点は
          <Link href="/guide/garden-safety/" className="text-primary underline underline-offset-2 mx-1">
            庭作業の事故を防ぐ
          </Link>
          、費用の考え方は
          <Link href="/cost/pruning-price/" className="text-primary underline underline-offset-2 mx-1">
            剪定費用の目安
          </Link>
          、自分で手入れする場合の道具の考え方は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ft-faq" className="scroll-mt-20 mb-12">
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

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/guide/garden-animals/", label: "庭に来る動物" },
            { href: "/guide/soil-fertilizer/", label: "庭の土と肥料" },
            { href: "/service/pruning/", label: "庭木の剪定" },
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
          高所の剪定や、大きくなった果樹の高さを下げる作業は、樹種と目的を伝えたうえで業者に任せることをおすすめします。
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
