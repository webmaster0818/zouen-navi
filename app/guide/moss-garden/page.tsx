import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/moss-garden/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "苔のある庭の手入れ｜生育条件・水やり・清掃と、生えてほしくない場所の苔";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "苔は手間のかからない地面と考えられがちですが、条件が変わると数年で消えていきます。苔が育つ場所と消える場所の違い（日の当たり方・湿り気・水はけ・踏圧）、水やり、落ち葉や雑草の取り除き方、茶色くなった場合の確認点、通路やコンクリートに生える望まない苔、業者に依頼する際の伝え方を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "苔が育つ条件と消える条件、日常の手入れ、生えてほしくない場所の苔の扱いを整理しています。",
  },
};

const toc = [
  { id: "mg-condition", label: "苔が広がる場所と消えていく場所の違い" },
  { id: "mg-water", label: "水やりは乾燥しすぎないための補助です" },
  { id: "mg-clean", label: "落ち葉と雑草を苔を傷めずに取り除く" },
  { id: "mg-brown", label: "茶色くなった・薄くなった場合の確認点" },
  { id: "mg-unwanted", label: "通路やコンクリートに生える望まない苔" },
  { id: "mg-ask", label: "苔のある庭を業者に任せる際の伝え方" },
  { id: "mg-faq", label: "よくある質問" },
];

const conditions = [
  {
    h: "日の当たり方",
    b: "苔は日陰の植物という印象がありますが、まったく光の入らない場所でよく育つわけではありません。木漏れ日が入る、午前中のみ日が当たるといった、明るさはあっても強い日差しで乾燥しすぎない場所が適しています。種類によって好む明るさに幅があるため、同じ庭でも場所ごとに育つ苔が異なるのは自然なことです。反対に、上の木を伐採して急に直射日光が当たるようになった、建物が建って一日中暗くなったといった変化があると、それまで育っていた苔が適さなくなります。",
  },
  {
    h: "空気の湿り気",
    b: "苔は根で水を吸い上げる植物ではなく、体の表面から水分を取り込みます。そのため、地面の湿り具合と同程度に、周囲の空気の湿り気が影響します。風が吹き抜ける場所や、照り返しの強い舗装に囲まれた場所は乾燥しやすく、苔が薄くなりがちです。周囲の木や生垣が風を和らげていることも多く、それらを減らした後に苔が弱るのはこのためです。",
  },
  {
    h: "水はけ",
    b: "湿り気が必要であるからといって、水が溜まり続ける場所が適しているわけではありません。雨の後に水が引かない場所では、苔が蒸れて傷んだり、泥をかぶって覆われたりします。湿っているが水は抜けるという状態が理想です。水が引かない原因の切り分けは、水はけのページで解説しています。",
  },
  {
    h: "踏圧",
    b: "苔は踏まれ続けることに強くありません。人が毎日通る経路、物を置く場所、自転車や車の通り道では、苔が切れて土が露出します。苔の中を歩く必要がある場合は、飛び石や敷材で通る場所を決め、苔の上には乗らない形にします。苔そのものを強くする方法より、踏まない使い方のほうが確実に効果があります。",
  },
  {
    h: "上部が覆われていないか",
    b: "落ち葉が積もったまま、雑草が上に被さったままという状態が続くと、苔に光が届かず、下から傷んでいきます。秋に落ち葉が厚く積もる庭では、落ち葉を取り除く手入れがそのまま苔を維持する作業になります。",
  },
];

const waterItems = [
  {
    h: "根付いた苔は毎日の水やりを前提としない",
    b: "庭の条件に合って根付いた苔は、雨と空気の湿り気で多くの期間を過ごせます。乾燥すると縮れたり色が薄くなったりしますが、湿り気が戻ると元に戻ることが多いため、乾いて見えるからといって、すぐに枯れたとは限りません。水やりは、雨の少ない時期や、張ったばかりの苔に対する補助とお考えください。",
  },
  {
    h: "張ったばかりの苔は別に扱う",
    b: "新しく張った苔は、下の土となじむまでの間、乾燥に弱い状態です。この時期は、表面が乾燥しすぎないように様子を見ながら水を与えます。どの程度の期間、どの程度の頻度で与えるかは、苔の種類と場所によって異なるため、施工した業者に確認しておくことが確実です。",
  },
  {
    h: "水を与える時間帯",
    b: "夏の日中、日が当たっている時間に水をかけると、苔の表面で温まった水が蒸れにつながることがあります。暑い時期は、朝や夕方の涼しい時間に与えることをおすすめします。夏の高温期の水やり全般の考え方は、夏の高温のページで解説しています。",
  },
  {
    h: "勢いの強い水を当てない",
    b: "ホースの水を直接強く当てると、根付いていない苔がめくれたり、下の土が流れたりします。シャワー状の細かい水で、上から全体を湿らせる方法で与えます。",
  },
];

const cleanItems = [
  {
    h: "落ち葉はこまめに少しずつ取り除く",
    b: "苔の上の落ち葉は、厚く積もる前に取り除きます。熊手で強くかくと苔ごと剥がれるため、手で拾う、柔らかいほうきで軽く掃く、送風機を弱めに使用するといった、苔を引っかけない方法を選びます。落ち葉の多い時期の段取りや、集めた落ち葉の扱いは、落ち葉のページで解説しています。",
  },
  {
    h: "雑草は小さいうちに抜く",
    b: "苔の間から生える雑草は、根が張る前の小さいうちであれば、苔をあまり傷めずに抜けます。大きくなってから抜くと、根とともに周囲の苔が持ち上がります。抜いた後に苔が浮いた場合は、手のひらで軽く押さえて土に戻します。",
  },
  {
    h: "苔の近くで除草剤を使用する場合は表示を確認する",
    b: "除草剤の中には、苔にも影響するものがあります。苔の庭やその周辺で使用する場合は、製品の表示で、使用してよい場所と対象をご確認ください。苔を残したい範囲では、手で抜くことを基本にしておくと安全です。雑草対策全般の選び方は、雑草対策のページで解説しています。",
  },
  {
    h: "苔の上に物や鉢を置いたままにしない",
    b: "鉢や道具、ホースなどを苔の上に長時間置くと、その形に苔が傷みます。作業中に一時的に置くのは構いませんが、置き場所を決め、苔の上を物置き場にしないようにします。",
  },
];

const brownItems = [
  {
    h: "乾燥して色が薄くなっているだけか",
    b: "雨の少ない時期に苔が茶色っぽくなるのは、乾燥して休眠している状態のことがあります。霧吹きなどで湿らせてしばらく置き、緑に戻るかどうかを確認します。戻る場合は、乾燥の問題です。戻らない部分が広がっている場合は、次の項目を確認します。",
  },
  {
    h: "周囲の条件が変わっていないか",
    b: "上の木を剪定して日差しが強くなった、隣に建物が建って風の通り方が変わった、周囲の生垣を減らしたといった変化がないかを確認します。苔が弱り始めた時期と、庭や周囲の変化の時期が重なっていないかを振り返ります。苔自体を手入れしても、条件の変化が原因であれば元に戻りにくい場面です。",
  },
  {
    h: "水が溜まる、泥をかぶっていないか",
    b: "雨の後に水が残る場所や、上から泥が流れてくる場所では、苔が蒸れたり埋もれたりして傷みます。傷んでいる範囲が、雨水の流れる経路や低い場所と重なっていないかを確認します。",
  },
  {
    h: "人や動物が通っていないか",
    b: "苔の切れた部分が一本の線になっている、点々と穴があいているといった場合は、踏まれているか、動物が掘り返している可能性があります。動物の痕跡の見分け方は、庭に来る動物のページで解説しています。",
  },
];

const unwantedItems = [
  {
    h: "通路や階段の苔は転倒防止の観点から扱う",
    b: "庭の一部として観賞する苔と、通路や階段、飛び石の表面に付く苔は、扱いが異なります。濡れた苔の上は滑りやすく、特に雨の日や冬場の転倒につながります。人が歩く面に付いた苔は、外観の問題より安全の問題として、早めに取り除く対象です。",
  },
  {
    h: "こすって落とす",
    b: "コンクリートや石の表面の苔は、デッキブラシなどでこすり落とすことが基本です。高圧洗浄で洗い流す方法もありますが、表面の仕上げや目地を傷めることがあるため、材質を確認してから使用します。落とした後も水が溜まりやすい凹みや、常に湿っている部分が残っている場合は、再び生えてきます。",
  },
  {
    h: "生えにくくするには乾燥しやすい条件をつくる",
    b: "苔が付く面は、日が当たらず、湿った状態が長く続く場所です。上にかぶさる枝を減らして日光と風を入れる、水の流れ込む経路を変える、水が溜まる凹みをなくすといった対策が有効です。苔を落とす作業より、乾燥しやすい状態にするほうが、再発を減らせます。",
  },
  {
    h: "薬剤を使用する場合",
    b: "苔を枯らす目的の製品もありますが、周囲の植物や、残したい苔のある場所に流れ込むことがあります。使用する場合は、製品の表示で、使用できる場所と対象、周囲への注意事項をご確認ください。住宅地で薬剤を使用する際の注意は、薬剤散布のページで解説しています。",
  },
];

const askItems = [
  {
    h: "手入れか張り直しかを区別して伝える",
    b: "今ある苔を維持したいのか、傷んだ範囲を新しく張り直したいのか、庭の一部を苔のある場所に作り変えたいのかによって、依頼する内容が変わります。今ある苔を維持したい場合は、落ち葉や雑草の手入れ、周囲の木の剪定の程度が中心となります。新しく作る場合の考え方は、和庭園のページで解説しています。",
  },
  {
    h: "周囲の木を剪定する際は苔について先に伝える",
    b: "剪定を依頼したところ、日が入りすぎて苔が弱ったということが起こります。苔を残したい範囲がある場合は、作業前に伝え、その上の枝をどこまで減らすかを業者とともに決めます。作業中に苔の上を歩いたり、剪定した枝を苔の上に置いたりしないよう、置き場所もあわせて相談しておくことをおすすめします。",
  },
  {
    h: "弱った原因についての見解を確認する",
    b: "苔が弱った範囲を張り直しても、原因が日差しや水はけ、踏圧にあれば、同じことが起きます。張り直しを依頼する前に、なぜその範囲が弱ったのかについての見解を確認し、原因への対処も行うかどうかを決めます。",
  },
  {
    h: "張った後の手入れを確認する",
    b: "新しく張った苔は、なじむまでの水やりや、踏まないようにする期間が必要です。張った後、どの程度の期間、何に注意すればよいかを、作業を依頼する際に確認しておきます。植栽後の保証やアフターサービスの扱いは、業者ごとに異なります。",
  },
];

const faqs = [
  {
    q: "苔が茶色くなりました。枯れてしまったのでしょうか。",
    a: "乾燥して休眠しているだけのこともあります。湿らせてしばらく置き、緑に戻るかどうかをご確認ください。戻る場合は乾燥の問題であり、雨の少ない時期の水やりで補えます。戻らない範囲が広がっている場合は、上の木を伐採して日差しが強くなった、水が溜まる、踏まれているといった条件の変化をご確認ください。原因が残ったまま張り直しても、同じことが起きます。",
  },
  {
    q: "苔の上の落ち葉を取るのに、熊手を使ってもよいですか。",
    a: "熊手で強くかくと、苔が引っかかって剥がれることがあります。苔の上では、手で拾う、柔らかいほうきで軽く掃く、送風機を弱めに使用するといった方法のほうが適しています。厚く積もってからでは取り除くのに力が必要になるため、落ち葉の多い時期はこまめに少しずつ取り除くほうが苔を傷めません。",
  },
  {
    q: "玄関までのアプローチの苔で滑りそうです。どうすればよいですか。",
    a: "人が歩く面の苔は、安全の問題として早めに取り除いてください。デッキブラシなどでこすり落とすことが基本です。高圧洗浄で洗う方法は、材質によって表面や目地を傷めることがあるため、確認してから使用します。落とした後も、日が当たらず湿った状態が続く場所では再び生えてくるため、上にかぶさる枝を減らす、水の溜まる凹みをなくすといった、乾燥しやすくする手入れもあわせて検討します。",
  },
  {
    q: "庭木の剪定を頼むと、苔に影響しますか。",
    a: "上の枝を大きく減らすと、苔に当たる日差しが強くなり、乾燥しやすくなって弱ることがあります。苔を残したい範囲がある場合は、作業前に伝え、その上の枝をどこまで減らすかを業者とともに決めてください。剪定した枝の置き場所や、作業中に苔の上を歩かないことも、あわせて相談しておくことをおすすめします。",
  },
  {
    q: "苔は踏んでも大丈夫ですか。",
    a: "時々踏む程度であれば大きく傷まないこともありますが、毎日同じ場所を踏むと苔が切れて土が露出します。苔の中を通る必要がある場合は、飛び石や敷材で歩く場所を決め、苔の上には乗らない形にすることが確実です。",
  },
];

export default function MossGardenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "苔が育つ条件と消える条件、水やり、落ち葉や雑草の取り除き方、望まない場所の苔の扱い、業者に依頼する際の伝え方を整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "苔のある庭の手入れ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          苔は、一度根付けば手間のかからない地面と考えられがちです。しかし、上の木を伐採した、周囲に建物が建った、通り道が変わったといった小さな変化により、数年のうちに薄くなっていくことがあります。苔の手入れは、苔そのものより、苔が置かれた条件を維持することが中心となります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、苔が広がる場所と消えていく場所の違い、水やり、落ち葉や雑草の取り除き方、茶色くなった場合の確認点、通路やコンクリートに付く望まない苔の扱いと、業者に依頼する際の伝え方を整理します。苔の種類ごとの詳細な育て方や、張り替えの費用は扱いません。
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

      <section id="mg-condition" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          苔が広がる場所と消えていく場所の違い
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ庭の中でも、苔がよく広がる場所と、何度張っても消えていく場所があります。その違いは、主に五つの条件の組み合わせによって決まります。
        </p>
        <ol className="space-y-4">
          {conditions.map((x, i) => (
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
          水が引かない場所の原因と対処は
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          、日当たりの条件から植栽を検討する場合は
          <Link href="/plant/shade/" className="text-primary underline underline-offset-2 mx-1">
            日陰に強い庭木おすすめ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="mg-water" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          水やりは乾燥しすぎないための補助です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          苔の水やりは、庭木や花壇とは考え方が異なります。量や回数を決めて与えるものではなく、条件が不足している場合に補うものです。
        </p>
        <div className="space-y-4">
          {waterItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          暑い時期の水やり全般は
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温で庭木が傷むとき
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="mg-clean" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          落ち葉と雑草を苔を傷めずに取り除く
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          苔のある庭の日常の手入れは、ほとんどが「上に乗ったものを取り除く」作業です。取り除き方を誤ると、苔ごと剥がれます。
        </p>
        <ol className="space-y-4">
          {cleanItems.map((x, i) => (
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
          落ち葉の多い時期の段取りと集めた後の扱いは
          <Link href="/guide/fallen-leaves/" className="text-primary underline underline-offset-2 mx-1">
            落ち葉が多い庭の手入れ
          </Link>
          、苔のない場所も含めた雑草対策の選び方は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="mg-brown" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          茶色くなった・薄くなった場合の確認点
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          苔の色が変わった場合は、すぐに張り直しを検討する前に、四つの点を順に確認します。原因が分からないまま張り直すと、同じ場所で同じことが起きます。
        </p>
        <div className="space-y-4">
          {brownItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          動物の痕跡の見分け方は
          <Link href="/guide/garden-animals/" className="text-primary underline underline-offset-2 mx-1">
            庭に来る動物
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="mg-unwanted" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          通路やコンクリートに生える望まない苔
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭で育てたい苔がある一方で、生えてほしくない場所に生える苔もあります。こちらは、育てる苔とは反対に、乾燥しやすい条件をつくることが対処の中心です。
        </p>
        <div className="space-y-4">
          {unwantedItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          住宅地で薬剤を使用する、または散布を依頼する際の注意は
          <Link href="/guide/spraying/" className="text-primary underline underline-offset-2 mx-1">
            住宅地で薬剤散布をするとき
          </Link>
          、ブラシや高圧洗浄機を使用する作業の安全面は
          <Link href="/guide/garden-safety/" className="text-primary underline underline-offset-2 mx-1">
            庭作業の事故を防ぐ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="mg-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          苔のある庭を業者に任せる際の伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          苔のある庭の作業を依頼する場面は、苔そのものの手入れより、周囲の木の剪定や庭の手直しのほうが多いと考えられます。その際に苔について伝えておくかどうかによって、仕上がりが変わります。
        </p>
        <div className="space-y-4">
          {askItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          苔を含む和風の庭をつくる場合は
          <Link href="/service/japanese-garden/" className="text-primary underline underline-offset-2 mx-1">
            和庭園の作り方
          </Link>
          、定期的な手入れをまとめて依頼する場合は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          、費用の考え方は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="mg-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/fallen-leaves/", label: "落ち葉が多い庭の手入れ" },
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/guide/weed-control/", label: "庭の雑草対策" },
            { href: "/service/japanese-garden/", label: "和庭園の作り方" },
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
          周囲の木の剪定や庭の手直しを依頼する際は、残したい苔の範囲を事前に伝えておくと、仕上がりの認識の相違を防げます。
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
