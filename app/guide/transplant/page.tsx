import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/transplant/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "庭木の移植・植え替え｜動かすかどうかの判断と、根回し・活着までの手順";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭木を動かしたくなるのは、たいてい木ではなく周りが変わったときです。動かす以外の選択肢、木の大きさで変わる難易度、時期の考え方、根回しという準備、掘り上げと根鉢、植えたあとの支柱と水やり、そして活着しないことがあるという前提までを整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭木を動かすかどうかの判断と、時期・根回し・掘り上げ・植えたあとの管理を整理しました。",
  },
};

const toc = [
  { id: "tp-why", label: "動かしたくなるのは、木ではなく周りが変わったとき" },
  { id: "tp-alt", label: "動かす以外の選択肢を、先に一度置いてみる" },
  { id: "tp-size", label: "木の大きさで、話がまるごと変わる" },
  { id: "tp-timing", label: "時期の考え方と、急いではいけない理由" },
  { id: "tp-work", label: "根回し・掘り上げ・運搬で起きていること" },
  { id: "tp-after", label: "植えたあとの一年で決まる" },
  { id: "tp-scope", label: "自分でやれる範囲と、任せる範囲" },
  { id: "tp-faq", label: "よくある質問" },
];

const movingReasons = [
  {
    h: "大きくなりすぎた",
    b: "植えたときの大きさで場所を決めていると、数年後に収まらなくなります。ただし「大きすぎる」が理由の場合、動かした先でも同じことが起こります。移す先で最終的にどのくらいになるのかを見込まないと、数年後にまた同じ相談になります。",
  },
  {
    h: "日が当たらなくなった",
    b: "隣に建物が建った、庭の別の木が育って影になった、家を建て増した。木の側は変わっていないのに、条件だけが変わった状態です。この場合は、影を作っている側を整理すれば済むこともあります。",
  },
  {
    h: "建物や塀に近すぎる",
    b: "幹が太るにつれて、基礎や塀、配管との距離が問題になります。枝が屋根に当たる、根が舗装を持ち上げる、壁が乾かない。構造物に影響が出ているなら、切り詰めるだけでは収まらず、動かすか、残さないかの判断になります。",
  },
  {
    h: "新築や外構の工事で邪魔になる",
    b: "駐車場を作る、配管を通す、塀を新しくする。工事の都合で動かす場合は、工程に合わせた期限が先に決まります。時期を選べないという点が、他の場面と大きく違います。",
  },
  {
    h: "記念樹を持っていきたい",
    b: "引っ越し先へ連れていく、実家の木を移す。判断の基準が庭の条件ではなく、その木そのものになる場面です。この場合でも、大きさと時期の制約は同じようにかかります。動かせるかどうかを先に見てもらってから、日取りを考えることになります。",
  },
];

const alternatives = [
  {
    h: "切り詰めて、その場に置く",
    b: "大きさが理由なら、まず検討する選択肢です。木への負担は移すより小さく、失敗したときの損も小さい。ただし、切れば済むのか、切り続けることになるのかは別です。毎年強く切らないと収まらない状態なら、根本的には場所が合っていません。",
  },
  {
    h: "周りのほうを変える",
    b: "影を作っている木を整理する、塀の位置を見直す、通路の取り方を変える。動かすのは木だけとは限りません。周りを変えるほうが、木にとっては何も起きないぶん確実です。",
  },
  {
    h: "動かさずに、扱い方を変える",
    b: "構造物に近いのが理由でも、根の側の影響がどこまで及んでいるかによっては、経過を見ながら付き合える場合があります。逆に、すでに舗装や基礎に影響が出ているなら、待つほど選択肢が減ります。ここは見立ての領域なので、判断を急がず一度見てもらってください。",
  },
  {
    h: "残さず、植え替える",
    b: "動かすより、その木をあきらめて別のものを植えるほうが結果的に良い場合があります。大きい木ほど移すのは難しく、うまくいかないこともあるためです。思い入れがない木であれば、この選択肢を外さないでください。",
  },
];

const sizeItems = [
  {
    h: "人の手で動く大きさ",
    b: "植えて日が浅い木、低木、根がまだ広がっていないもの。この範囲なら、掘って運んで植え直すという流れを自分たちでも組めます。目安になるのは高さより、根がどこまで張っているかです。幹が細くても、何年もその場所にある木は根が広く出ています。",
  },
  {
    h: "人の手では動かない大きさ",
    b: "根を付けたまま掘り上げると、土を含んだ塊がかなりの重さになります。持てるかどうかで判断すると、途中で動かせなくなって根がむき出しのまま時間が経つという最悪の形になります。持ち上げられるかに自信がない時点で、相談する対象です。",
  },
  {
    h: "重機や車両が必要になる場面",
    b: "掘り上げにも、運ぶにも、機械が要る大きさがあります。このとき効いてくるのは木の大きさより、機械が庭まで入れるかどうかです。門の幅、通路の幅、地面の強さ、電線の高さ。入れない場合は手作業になり、段取りそのものが変わります。",
  },
  {
    h: "道路や隣地を使うことになる場面",
    b: "車両を道路に停める、クレーンで越して運ぶ、隣の敷地を通らせてもらう。ここまで来ると、手続きや近隣への話が先に立ちます。作業そのものより、こちらの段取りに日数がかかります。移すと決めた時点で相談を始めてください。",
  },
];

const timingItems = [
  {
    h: "木が動いていない時期に動かす",
    b: "根を切ることになる作業なので、木が水をさかんに吸い上げている時期は向きません。葉から水が出ていく量に、傷んだ根が追いつかないためです。逆に、動きが止まっている時期であれば、根が減っても持ちこたえられます。",
  },
  {
    h: "落葉するものと、葉を付けたままのもので事情が違う",
    b: "葉を落とす木は、葉がない時期に水の出入りが少なくなります。一年中葉を付けている木は、その時期がありません。同じ「休んでいる時期」でも、適した時期の取り方が変わります。木の種類ごとに違うので、その木について確認してから日を決めてください。",
  },
  {
    h: "寒さと乾きの強い時期は外す",
    b: "動いていない時期であっても、凍る時期や、風が乾く時期は根に負担がかかります。植えた直後に根が傷むと、そのまま春を迎えられません。地域の気候によって外すべき時期が変わるため、ここも現地の判断になります。",
  },
  {
    h: "工事の都合で時期を選べないとき",
    b: "外構や建築の工程に合わせる場合、適した時期を待てないことがあります。この場合は、仮に別の場所へ移しておく、鉢や仮植えで時期を待つ、といった二段構えが取られることがあります。時期を外して植えるなら、そのぶん植えたあとの手当てが重くなると考えてください。",
  },
];

const workItems = [
  {
    h: "根回しとは、先に根を切っておくこと",
    b: "移す前に、幹から一定の距離で根を切り、その場に置いておく作業です。切った先から細い根が新しく出てくるため、実際に掘り上げるときには、根鉢の中に水を吸う根が入っている状態になります。いきなり掘って運ぶと、太い根だけが残り、水を吸う細い根はほとんど残りません。",
  },
  {
    h: "根回しから掘り上げまでには、時間が要る",
    b: "切った根から新しい根が出るのを待つ作業なので、すぐには進みません。木の状態や時期によって必要な期間が変わり、季節をまたぐこともあります。「来月移したい」という相談で最初に問題になるのが、この時間です。急ぐ場合は、根回しなしで進めるかどうかの判断になり、そのぶん活着の見込みは落ちます。",
  },
  {
    h: "掘り上げと根鉢",
    b: "根を土ごと一つの塊にして、崩れないように布や縄で巻き固めます。この塊が根鉢です。途中で崩れると細い根が切れるため、掘る作業より、崩さずに保つことのほうが要点になります。根鉢を小さくすれば軽くなりますが、そのぶん残る根が減ります。",
  },
  {
    h: "運ぶあいだに傷むもの",
    b: "根鉢の乾き、枝の折れ、樹皮の擦れ。走行中の風で葉から水が抜けることもあります。距離が短くても、置いておく時間が長いと乾きます。掘り上げてから植えるまでの時間は、短いほどよいというのが基本で、受け入れ側の穴を先に用意しておくのはそのためです。",
  },
];

const afterItems = [
  {
    h: "支柱で動かないようにする",
    b: "根が減っている状態なので、風で幹が揺れると、新しく出ようとしている根が切れます。地上部を固定するのは見た目のためではなく、地下で根を落ち着かせるためです。支柱の当たる部分が樹皮を傷めることがあるので、当て木や緩衝は入れます。",
  },
  {
    h: "水やりは、量より届く深さ",
    b: "表面が濡れただけでは根鉢の中まで届きません。植えた直後は、根鉢全体に水が回るように与えます。一方で、水が引かない土に多く与え続けると、今度は根が傷みます。水の入り方と引き方を見ながら間隔を決めることになります。",
  },
  {
    h: "枝葉を減らして、つり合いを取る",
    b: "根が減っているのに葉がそのままだと、吸い上げる量と出ていく量が合いません。移植のときに枝を落とすのは、形を整えるためではなく、この差を埋めるためです。どこをどれだけ落とすかは木によって変わるので、剪定の考え方とは分けて判断されます。",
  },
  {
    h: "最初の一年は、変化を見ておく",
    b: "葉の色、新しい芽の出方、枝先の枯れ込み。うまくいっている木は、次の生育期に新しい芽が動きます。動かない、葉が小さいまま、枝先から枯れてくるといった状態は、根が付いていない兆候になります。気づいた時点で相談すると、打てる手が残っている場合があります。",
  },
];

const scopeItems = [
  {
    h: "自分でやれる範囲",
    b: "植えて日が浅い低木や、根がまだ広がっていないもの。移す先の穴を先に掘っておく、土を用意しておく、水やりを続ける。準備と、植えたあとの管理は自分の側でやれる部分が多く、ここを引き受けると頼む範囲が減ります。",
  },
  {
    h: "任せたほうがよい範囲",
    b: "持ち上げられるか分からない大きさ、根回しの要否と時期の判断、根鉢を崩さずに巻き固める作業、機械や車両が要る搬出。途中で止まると木が傷むため、始める前に最後まで通せるかを見ておく必要があります。高い位置の枝を落とす作業も、移植とは別に危険があります。",
  },
  {
    h: "活着しないことがあるという前提",
    b: "根を切って動かす以上、付かないことがあります。大きい木ほど、また根回しを省いたときほど、その可能性は上がります。「必ず付く」という前提で進めないほうが、判断を誤りません。植えたあとに枯れた場合の扱いは事業者ごとに異なるため、依頼の前に確かめておく項目になります。",
  },
  {
    h: "見てもらうときに伝えること",
    b: "いつ植えた木か、これまでどのくらいの間隔で手を入れてきたか、移したい先はどこか、いつまでに動かしたいか。この四つがあると、根回しが要るか、時期をずらせるか、機械が入るかの見当が現地で付きます。",
  },
];

const faqs = [
  {
    q: "移植と植え替えは、何が違うのですか。",
    a: "このページでは、同じ木を別の場所に動かすことを移植、その木をあきらめて別のものを植え直すことを植え替えとして扱っています。相談の場面では両方が混ざって使われるため、「この木を動かしたいのか」「この場所に別のものを植えたいのか」をはっきりさせておくと、返ってくる提案がずれません。大きい木を無理に動かすより、植え替えたほうが良い結果になる場合もあります。",
  },
  {
    q: "根回しをせずに、すぐ動かすことはできますか。",
    a: "できないわけではありませんが、根が付く見込みは落ちます。根回しは、先に根を切っておき、切った先から水を吸う細い根を出させておくための準備です。これを省くと、掘り上げたときに根鉢の中に細い根がほとんど入っていない状態になります。木が小さく、根の広がりが限られている場合は省ける余地がありますが、大きい木ほど省いた影響が出ます。",
  },
  {
    q: "どのくらいの大きさまでなら、自分で移せますか。",
    a: "高さより、根がどこまで張っているかで決まります。幹が細くても、何年もその場所にある木は根が広く出ていて、根を付けたまま掘ると土を含んだ塊がかなりの重さになります。持ち上げられるかどうかに自信がない時点で、相談する対象と考えてください。途中で動かせなくなり、根がむき出しのまま時間が経つのが、いちばん木を傷める形です。",
  },
  {
    q: "移したあと、枯れてしまうことはありますか。",
    a: "あります。根を切って動かす作業なので、付かないことは起こり得ます。大きい木ほど、また根回しを省いたときほど、その可能性は上がります。植えたあとは支柱で揺れを止め、根鉢に水が届くように与え、枝葉を減らして吸い上げと蒸散のつり合いを取る、という手当てが要ります。枯れた場合の扱いは事業者ごとに異なるため、依頼の前に確かめておいてください。",
  },
  {
    q: "木を動かすより、切ってしまったほうがよい場合はありますか。",
    a: "あります。建物や塀に影響が出ていて、移す先も確保できない場合、大きくて動かす段取りが現実的でない場合、思い入れが特にない場合。無理に移して付かなければ、手間だけが残ります。残さないと決めた場合の考え方は、伐採のページで扱っています。",
  },
];

export default function TransplantPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭木を動かすかどうかの判断、時期の考え方、根回しと掘り上げ、植えたあとの管理までを整理しました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭木の移植・植え替え" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭木を動かす作業は、植えることの延長ではありません。地面の下で広がっている根を切り、土ごと持ち上げて、別の場所でもう一度根を張らせる。木にとっては、数年分の蓄えを使う出来事になります。だから「動かせますか」の前に「動かす必要がありますか」という問いが先に来ます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          このページでは、動かしたくなる場面と、動かす以外の選択肢、木の大きさで変わる難易度、時期の考え方、根回しという準備、掘り上げと運搬、植えたあとの管理までを順に整理します。付かないことがあるという前提も含めて扱います。
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

      <section id="tp-why" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          動かしたくなるのは、木ではなく周りが変わったとき
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          場面によって、動かすかどうかの判断も、時期を選べるかどうかも変わります。まず自分がどれに当たるかを見てください。
        </p>
        <div className="space-y-4">
          {movingReasons.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          根が舗装や基礎に影響しているかどうかの見方は
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根と構造物
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="tp-alt" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          動かす以外の選択肢を、先に一度置いてみる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          動かすと決める前に、この四つを並べてみてください。検討したうえで動かすのと、他を考えずに動かすのとでは、あとの納得が違います。
        </p>
        <ol className="space-y-4">
          {alternatives.map((x, i) => (
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
          残さないと決めた場合の進め方は
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採
          </Link>
          、植え直す木を選び直す場合は
          <Link href="/plant/symbol-tree/" className="text-primary underline underline-offset-2 mx-1">
            シンボルツリーの選び方
          </Link>
          と
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが楽な庭木おすすめ
          </Link>
          を参照してください。
        </p>
      </section>

      <section id="tp-size" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          木の大きさで、話がまるごと変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「移植」という言葉でも、半日で終わるものと、段取りに日数がかかるものがあります。分かれ目は重さと、庭までの経路です。
        </p>
        <div className="space-y-4">
          {sizeItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          庭までの経路をどう見るかは
          <Link href="/area/tokyo/" className="text-primary underline underline-offset-2 mx-1">
            狭小地・搬出経路から考える業者選び
          </Link>
          、費用の目安は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="tp-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          時期の考え方と、急いではいけない理由
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          適した時期は木の種類と地域で変わるため、ここでは考え方だけを示します。日を決める前に、その木について確認してください。
        </p>
        <ol className="space-y-4">
          {timingItems.map((x, i) => (
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
          年間の作業をどう組むかは
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="tp-work" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          根回し・掘り上げ・運搬で起きていること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          任せる場合でも、何をしているかが分かっていると、日程の相談が通じやすくなります。
        </p>
        <ol className="space-y-4">
          {workItems.map((x, i) => (
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
          掘り上げのときに出た土や、落とした枝の処分は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で扱っています。移す先の土の状態が気になる場合は
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          も先に確かめてください。
        </p>
      </section>

      <section id="tp-after" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植えたあとの一年で決まる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          植えた日が終わりではありません。根が減った状態から、もう一度張り直すまでの期間があります。
        </p>
        <div className="space-y-4">
          {afterItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          支柱と揺れへの備えは
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          、乾く時期の水のやり方は
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温と水やり
          </Link>
          で扱っています。葉の様子がおかしいときの見分けは
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          も合わせて確かめてください。
        </p>
      </section>

      <section id="tp-scope" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分でやれる範囲と、任せる範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          全部を頼むか、全部を自分でやるかの二択ではありません。準備と事後の管理を引き受けると、頼む範囲が変わります。
        </p>
        <div className="space-y-4">
          {scopeItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          自分でやる範囲の決め方は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          、庭全体の配置から考え直す場合は
          <Link href="/service/garden-design/" className="text-primary underline underline-offset-2 mx-1">
            庭のリフォーム・ガーデンデザイン
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="tp-faq" className="scroll-mt-20 mb-12">
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
            { href: "/service/felling/", label: "庭木の伐採" },
            { href: "/guide/tree-roots/", label: "庭木の根と構造物" },
            { href: "/service/garden-design/", label: "庭のリフォーム・ガーデンデザイン" },
            { href: "/plant/symbol-tree/", label: "シンボルツリーの選び方" },
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
          動かせるかどうか、根回しが要るかどうかは、現地で木を見ないと決まりません。移したい先と時期を添えて相談してみてください。
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
