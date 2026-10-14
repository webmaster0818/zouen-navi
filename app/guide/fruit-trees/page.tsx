import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/fruit-trees/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "庭の果樹の手入れ｜実がならない・一年おきになる理由と、切る時期・摘果・大きくなりすぎたとき";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "柿・柑橘・梅・ブルーベリーなど、家庭の庭にある果樹の手入れを整理します。実がならない理由の切り分け、成り年と休み年をくり返すときの考え方、花芽の付く場所と剪定時期の関係、摘果、落ちた実の片付け、大きくなりすぎた木の扱い、自分でやる範囲と頼む範囲。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "家庭の果樹で起きやすい「実がならない」「一年おきになる」「大きくなりすぎた」を、花芽と切る時期の関係から整理しました。",
  },
};

const toc = [
  { id: "ft-nofruit", label: "実がならない理由は、木の側と花の側に分かれる" },
  { id: "ft-alternate", label: "たくさん成った翌年に休むのは、なぜ起きるか" },
  { id: "ft-bud", label: "花芽の付く場所で、切ってよい時期が変わる" },
  { id: "ft-thinning", label: "実を減らすと、木も翌年も楽になる" },
  { id: "ft-dropped", label: "落ちた実と、寄ってくる虫や動物" },
  { id: "ft-oversize", label: "屋根に届くほど育った果樹をどうするか" },
  { id: "ft-ask", label: "脚立の高さで分かれる、頼む範囲" },
  { id: "ft-faq", label: "よくある質問" },
];

const noFruitCauses = [
  {
    h: "花が咲いていない",
    b: "実がならない以前に、花が付いていないケースです。植えて間もない若い木はまず枝葉を伸ばす時期で、花が付き始めるまでに年数がかかります。年数の経った木で花が付かないなら、日当たりが足りない、枝が込みすぎて内側に光が入らない、あるいは花芽の付いた枝を切り落としている、のいずれかを疑います。最後の一つは、手入れのたびに起きているので気づきにくい原因です。",
  },
  {
    h: "花は咲くが、実が残らない",
    b: "花が咲いても、受粉しなければ実になりません。果樹には、一本だけでは実が付きにくく、別の品種を近くに置く必要がある種類があります。たとえばJA尾張中央の「ウメの栽培 ～年間管理～」では、ウメの「南高」は一本だけでは受粉する相手がなく実がならないとされています。同じ庭や近所に相手になる木があった時期は成っていて、その木がなくなってから成らなくなった、ということも起こります。",
  },
  {
    h: "枝の勢いが強すぎる",
    b: "勢いよく真上に伸びる太い枝ばかりの木は、枝葉を伸ばすほうに力が向いていて、花や実が付きにくくなります。JA尾張中央の「果樹の着果管理」でも、ウメやカキなどで枝の勢いが強すぎると受粉しても実が付かないことがあると書かれています。強く切った翌年に勢いのある枝が一斉に出て、実が付かない。これは切り方の結果として起きています。",
  },
  {
    h: "実が付いたあとに落ちている",
    b: "小さな実がたくさん付いたあと、初夏にかけてある程度落ちるのは、木が自分で数を調整する自然な落ち方で、生理落果と呼ばれます。これ自体は異常ではありません。一方で、ほとんど全部が落ちる、実に穴や傷がある、という場合は虫や病気の線も見ます。見分け方は害虫と病気のページで扱っています。",
  },
];

const alternateItems = [
  {
    h: "実を付けた枝は、翌年に向けた準備が遅れる",
    b: "果樹は、実を育てることと、翌年の花の準備を同じ時期に並行して行っています。実をたくさん付けた年は養分が実に回り、翌年の花の準備が手薄になります。JA埼玉中央の「カンキツ類の整枝せん定 ～隔年結果になっていませんか～」でも、実を付けた枝からは翌年の新しい枝が出にくく、実を付けなかった枝から出た枝に翌年花が付くという関係が説明されています。",
  },
  {
    h: "成り年と休み年は、自然にはそろわない",
    b: "一度大きく成ると、翌年は休み、その翌年にまた成る。このくり返しを隔年結果と呼びます。放っておいても均されることは少なく、むしろ固定されがちです。成り年にたくさん採れて満足しても、休み年に花がほとんど付かない状態が続くなら、手を入れる意味があります。",
  },
  {
    h: "均すには、成り年に減らし、休み年に残す",
    b: "考え方は単純で、花や実の多い年には数を減らし、少ない年にはなるべく残します。前出のJA埼玉中央の資料でも、カンキツで花の多い年と少ない年とで切り方を変え、年ごとの開花数の差を小さくする方法が示されています。具体的には、成り年に実を間引く（摘果）ことと、剪定で花芽の付いた枝をどれだけ残すかの二つで調整します。",
  },
  {
    h: "肥料で解決しようとしない",
    b: "休み年に実が少ないからと肥料を足しても、枝葉が伸びるだけで実には結びつかないことがあります。隔年結果は、成り年の付けすぎが原因の中心です。肥料が要る場合と要らない場合の考え方は、土と肥料のページで扱っています。",
  },
];

const budItems = [
  {
    name: "カキ",
    b: "熊本県の「落葉果樹（カキ）の整枝・せん定のポイント」によると、カキは前の年に伸びた枝（結果母枝）の先端部から出る枝に花芽が付きます。そのため、剪定で枝先を切り返すと花芽が減ります。剪定は落葉後の休眠期に行うとされています。枝先をそろえて短く刈り込むと、見た目は整っても翌年の実が大きく減る種類です。込み合った枝は、先を詰めるのではなく、付け根から間引く形で減らします。",
  },
  {
    name: "柑橘（ミカン・ユズ・レモンなど）",
    b: "JA埼玉中央の「カンキツ類の整枝せん定」では、前年に伸びた枝に花芽を持つ芽が付き、そこから伸びた枝に花が咲くと説明されています。剪定時期は3月上旬頃から新しい枝が出てくる前まで、とされています。常緑で一年中葉があるため、いつ切っても同じように見えますが、時期を外すと翌年の花の元を落とすことになります。地域や品種で差があるため、近くの農協や販売店の栽培情報もあわせて確かめてください。",
  },
  {
    name: "ウメ",
    b: "JA尾張中央の「ウメの栽培 ～年間管理～」では、ウメは短い枝（短果枝）を中心に花が付くとされ、冬の剪定は落葉後からつぼみがふくらむまでに行い、収穫後には勢いよく伸びた枝（徒長枝）を外すと書かれています。真上に伸びる長い枝には花が付きにくいため、冬に残すのは短い枝の多い側です。",
  },
  {
    name: "ブルーベリー",
    b: "冬になると、丸くふくらんだ芽と細くとがった芽の違いが見えてきます。ふくらんだほうが花芽で、枝の先寄りに集まって付く傾向があります。枝先を一律に切りそろえると、その年の花芽を落とします。なお、JA埼玉中央の「果樹を新たに育ててみませんか？」では、ブルーベリーは同じ系統（ハイブッシュ、ラビットアイなど）の受粉樹もあわせて植えることが勧められています。一本だけの庭で実が少ない場合は、この点も確かめます。",
  },
];

const thinningItems = [
  {
    h: "摘果は、実を捨てる作業ではない",
    b: "付いた実の一部を若いうちに取り除くのが摘果です。残した実が大きくなりやすいことに加え、木の負担が減って翌年の花の準備に養分が回るため、前の節で触れた成り年と休み年の差を小さくする効果があります。せっかく付いた実を取るのは惜しく感じますが、採れる量の合計で見ると損ではない場面が多い作業です。",
  },
  {
    h: "時期は、自然に落ちる分を待ってから",
    b: "JA尾張中央の「果樹の着果管理」では、カキやカンキツ類の摘果は生理落果が終わるのを待ってから行うとされています。早すぎると、そのあとの自然な落果と重なって実が足りなくなることがある、とも書かれています。初夏に小さな実が落ち着いてから、残っている数を見て判断する順番です。",
  },
  {
    h: "どれを残すか",
    b: "傷のある実、形の悪い実、上を向いて付いている実、一か所に固まって付いている実から外します。枝一本に何個まで、といった目安は樹種や品種で違うため、ここでは数字は挙げません。家庭の庭では、まず明らかに込み合っている房を減らすところからで十分です。",
  },
  {
    h: "高いところの実は、取れる範囲で決める",
    b: "摘果も収穫も、手が届かない高さの実は取り残されます。その実が熟して落ち、片付けの手間になり、虫や動物を呼びます。届かない高さに実が付く木は、摘果の工夫より先に、木の高さを下げる話になります。高さの扱いは後の節で扱います。",
  },
];

const droppedItems = [
  {
    h: "落ちた実は、その日のうちに拾う",
    b: "地面に落ちて傷んだ実は、虫を集め、においで動物を呼びます。一度食べられる場所として覚えられると、実る時期に合わせて通ってくるようになります。熟す時期は落ちる量が一気に増えるので、毎日の見回りとして拾う習慣にしておくと手間が膨らみません。",
  },
  {
    h: "採らない実を、木に残したままにしない",
    b: "食べないからと木に付けたままにしておくと、鳥や動物が来て食べ、食べ残しが落ちて散らかります。採って食べる予定がない果樹は、実が付く前の段階で摘果を多めにする、あるいは木そのものを残すかどうかを考える対象です。",
  },
  {
    h: "隣地や道路に落ちる位置の実",
    b: "枝が境界を越えて、隣の敷地や道路に実が落ちる状態は、片付けの問題と同時に近隣との問題になります。越えた枝や実の扱いの考え方は、越境した枝と根のページで扱っています。剪定のときに境界側の枝を先に整えておくと、実が外に落ちる量も減ります。",
  },
];

const oversizeItems = [
  {
    h: "大きくなった原因は、ほとんどが「上に伸びる枝を残し続けたこと」",
    b: "果樹は勢いのある枝が上に向かって伸びやすく、毎年少しずつ残すと数年で手が届かなくなります。届かない高さに実が付き、収穫も摘果もできず、落ちた実の片付けだけが増える。この状態になると、手入れの目的が「実を採る」から「木の大きさを抑える」に変わっています。",
  },
  {
    h: "高さを下げる切り方と、その翌年",
    b: "JA埼玉中央の「カキ・クリの剪定、樹形改造」では、上に向かって伸びた太い枝を、脚立で管理できる高さまで思い切って切り下げる方法が紹介されています。あわせて、翌年は切り口から勢いの強い枝が多数出て、間引きが必要になることも書かれています。高さを下げる作業は一度で終わらず、翌年以降の枝の整理まで含めて一続きの作業として考えます。",
  },
  {
    h: "一度に下げると、数年は実が減る",
    b: "大きく切った翌年は、前の節で触れたように勢いの強い枝が出て、花や実が付きにくくなります。実を楽しみにしている木であれば、何年かに分けて少しずつ下げるか、数年は実が減ることを受け入れて一度に下げるかを、先に決めておく場面です。どちらを選ぶかで、業者への伝え方も変わります。",
  },
  {
    h: "残すかどうかを考える場面",
    b: "誰も実を採らなくなった、木が家や電線に近い、落ちた実の片付けが負担になっている。このような場合は、木を小さく保ち続けるより、本数を減らす判断のほうが手間を確実に減らせます。庭全体の手入れを減らす考え方は、庭じまいのページで扱っています。",
  },
];

const askItems = [
  {
    h: "自分でやりやすいこと",
    b: "地面に立って届く範囲の剪定、摘果、収穫、落ちた実の片付け。低く仕立ててある木や、ブルーベリーのように背の高くならない種類なら、手入れの大半はこの範囲に収まります。花芽の付き方を一度覚えれば、毎年同じ考え方でできる作業です。",
  },
  {
    h: "頼むほうがよいこと",
    b: "脚立の上で刃物を使う高さの剪定、太い枝を落とす作業、屋根や電線、隣地に近い枝。いずれも、作業そのものの難しさより、落ちる・枝が当たるといった事故の危険のほうが大きい作業です。高さを下げる樹形の作り直しも、どの枝を残すかの判断を含むため、経験のある人に任せる意味があります。",
  },
  {
    h: "頼むときに伝えること",
    b: "樹種と、実を採りたいのか、大きさを抑えたいのか、という目的をはっきり伝えます。目的を言わずに頼むと、見た目を整える刈り込みになり、カキのように枝先に花芽の付く木では翌年の実が大きく減ることがあります。「実を残したいので花芽の付く枝は残してほしい」「数年は実が減ってもよいので高さを下げたい」といった言い方で、切ってよい範囲を共有しておきます。",
  },
  {
    h: "時期の相談も一緒に",
    b: "果樹は樹種ごとに切ってよい時期が違うため、庭のほかの木とまとめて同じ日に切ってもらうと、果樹だけ時期がずれることがあります。まとめて頼む場合は、果樹だけ別の時期にできるかも確かめておきます。剪定の費用や依頼の流れは剪定サービスのページにまとめています。",
  },
];

const faqs = [
  {
    q: "植えてから何年も経つのに、花が咲きません。何が原因ですか。",
    a: "日当たりが足りない、枝が込みすぎて内側に光が入らない、花芽の付いた枝を毎年切り落としている、のいずれかが多い原因です。特に、枝先をそろえて刈り込む手入れを続けていると、カキのように枝の先寄りに花芽が付く樹種では花がほとんど残りません。まず、自分や業者がどの時期に、どのように切っているかを振り返ってください。肥料を足す前に確かめる点です。",
  },
  {
    q: "梅の木が一本だけで、花は咲くのに実がなりません。",
    a: "受粉する相手がいない可能性があります。JA尾張中央の「ウメの栽培 ～年間管理～」では、「南高」は一本だけでは受粉樹がないため実がならないとされています。品種が分かれば、その品種が一本で実を付けやすいかどうかを、購入先や近くの農協の栽培情報で確かめてください。相手になる品種を近くに植えることで改善する場合があります。",
  },
  {
    q: "柿が、たくさん成った翌年はほとんど成りません。直りますか。",
    a: "成り年と休み年をくり返す隔年結果と呼ばれる状態で、成り年の付けすぎが主な原因です。成り年に実を間引いて減らし、休み年にはなるべく残す、という調整を数年続けると差が小さくなる方向に向かいます。JA尾張中央の「果樹の着果管理」では、カキの摘果は生理落果が終わるのを待ってから行うとされています。剪定で枝先を切り返すと花芽が減る点にも注意してください。",
  },
  {
    q: "大きくなりすぎた果樹を、一度で低くしてもらえますか。",
    a: "作業としては可能な場合が多いものの、大きく切った翌年は切り口から勢いの強い枝が多数出て、その整理が必要になり、数年は実も付きにくくなります。実を楽しみにしているなら何年かに分けて下げる、実が減ってもよいなら一度に下げる、というように目的を決めてから相談してください。高い位置の作業は事故の危険があるため、自分で無理をしない範囲です。",
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
          "家庭の果樹で起きやすい「実がならない」「一年おきになる」「大きくなりすぎた」を、花芽と切る時期の関係、摘果、落ちた実の片付けから整理しました。",
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
          柿、ミカンやユズ、梅、ブルーベリー。家の庭に植わっている果樹は、植えた人が実を楽しみにしていたものが多く、ほかの庭木とは手入れの目的が違います。ところが、ほかの木と同じように枝先を刈りそろえていると、翌年の花の元を落とし、実がならない木になっていきます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          このページでは、実がならない理由の切り分け、一年おきにしか成らない状態の考え方、花芽の付く場所と切ってよい時期の関係、摘果、落ちた実の片付け、大きくなりすぎた木の扱い、そして自分でやる範囲と頼む範囲を整理します。樹種ごとの時期は、農協や県の公開資料で確かめられた範囲だけを、出典を添えて書いています。
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
          実がならない理由は、木の側と花の側に分かれる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「実がならない」という同じ悩みでも、花が咲いていないのか、咲いているのに実が残らないのかで、見るところがまったく違います。まずどちらなのかを、一シーズン見て分けます。
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
          、日照の条件から考える場合は
          <Link href="/plant/shade/" className="text-primary underline underline-offset-2 mx-1">
            日陰に強い庭木おすすめ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="ft-alternate" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          たくさん成った翌年に休むのは、なぜ起きるか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          柿や柑橘でよく聞くのが、「去年はたくさん成ったのに、今年はほとんど成らない」という話です。木が弱ったのではなく、前の年の成り方の結果として起きていることが多い現象です。
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
          で扱っています。
        </p>
      </section>

      <section id="ft-bud" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          花芽の付く場所で、切ってよい時期が変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          果樹の剪定で一番大事なのは、翌年の花の元（花芽）がどの枝のどこに付くかです。ここが樹種によって違うため、同じ時期に同じ切り方をすると、ある木では問題がなく、別の木では実がなくなります。以下は代表的な樹種について、公開されている栽培資料で確かめられた範囲です。
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
          資料はいずれも産地での栽培を前提にしたもので、地域や品種、その年の気候で時期は前後します。ここに挙げていない樹種や、品種がはっきりしない木は、購入先や近くの農協の栽培情報で確かめてから切るのが確実です。剪定全般の時期の考え方と依頼の流れは
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定
          </Link>
          、年間の作業の組み立ては
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="ft-thinning" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          実を減らすと、木も翌年も楽になる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          家庭の果樹では、付いた実を全部残しがちです。ただ、付けすぎは隔年結果の原因になり、実も小さくなります。摘果は、手間の割に効き目の大きい作業です。
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
          落ちた実と、寄ってくる虫や動物
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          果樹のある庭で、ほかの庭木にない手間が出るのが実の片付けです。熟す時期の落ちた実は、放っておくとそのまま虫や動物を呼ぶ材料になります。
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
          すでに動物が来ている場合の対応は
          <Link href="/guide/garden-animals/" className="text-primary underline underline-offset-2 mx-1">
            庭に来る動物
          </Link>
          、境界を越えた枝や実の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            越境した枝と根
          </Link>
          、片付けたものの出し方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="ft-oversize" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          屋根に届くほど育った果樹をどうするか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          古い家の庭の柿や柑橘は、二階の屋根に届くほど育っていることがあります。手が届かない高さに実が付く状態では、収穫も摘果もできません。
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
          で扱っています。
        </p>
      </section>

      <section id="ft-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          脚立の高さで分かれる、頼む範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          果樹の手入れは、知識さえあれば自分でできる部分が多い一方で、高さが出た木では事故の危険が先に立ちます。分ける目安は、作業の難しさより、足元の高さです。
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
          脚立や刃物を使う作業の注意点は
          <Link href="/guide/garden-safety/" className="text-primary underline underline-offset-2 mx-1">
            庭作業の事故を防ぐ
          </Link>
          、費用の考え方は
          <Link href="/cost/pruning-price/" className="text-primary underline underline-offset-2 mx-1">
            剪定費用の目安
          </Link>
          、自分で手を入れる場合の道具の考え方は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で扱っています。
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
          あわせて読みたい
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
          高い位置の剪定や、大きくなった果樹の高さを下げる作業は、樹種と目的を伝えたうえで任せる対象です。
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
