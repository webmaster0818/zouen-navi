import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/transplant/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "庭木の移植・植え替え｜移植するかどうかの判断と、根回しから活着までの手順";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭木を移植したくなるのは、多くの場合、木ではなく周囲の環境が変わった場合です。移植以外の選択肢、木の大きさによって異なる難易度、時期の考え方、根回しという準備、掘り上げと根鉢、植栽後の支柱と水やり、活着しない場合があるという前提までを整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭木を移植するかどうかの判断と、時期・根回し・掘り上げ・植栽後の管理を整理しています。",
  },
};

const toc = [
  { id: "tp-why", label: "移植を検討するのは、木ではなく周囲が変わった場合です" },
  { id: "tp-alt", label: "移植以外の選択肢を先に検討する" },
  { id: "tp-size", label: "木の大きさによって作業の内容が大きく異なります" },
  { id: "tp-timing", label: "時期の考え方と、急いではいけない理由" },
  { id: "tp-work", label: "根回し・掘り上げ・運搬で起きていること" },
  { id: "tp-after", label: "植栽後の一年間が重要です" },
  { id: "tp-scope", label: "自分で行える範囲と業者に任せる範囲" },
  { id: "tp-faq", label: "よくある質問" },
];

const movingReasons = [
  {
    h: "大きくなりすぎた",
    b: "植栽時の大きさで場所を決めていると、数年後に収まらなくなります。ただし、「大きすぎる」ことが理由の場合、移植先でも同じことが起こります。移植先で最終的にどの程度の大きさになるかを見込まないと、数年後に再び同じ問題が生じます。",
  },
  {
    h: "日が当たらなくなった",
    b: "隣に建物が建った、庭の別の木が成長して影になった、住宅を増築したといった、木自体は変わっていないのに条件のみが変わった状態です。この場合は、影を作っている側を整理すれば解決することもあります。",
  },
  {
    h: "建物や塀に近すぎる",
    b: "幹が太るにつれて、基礎や塀、配管との距離が問題になります。枝が屋根に接触する、根が舗装を持ち上げる、壁が乾かないなど、構造物に影響が出ている場合は、切り詰めるだけでは解決せず、移植するか、残さないかの判断になります。",
  },
  {
    h: "新築や外構工事の支障となる",
    b: "駐車場を設ける、配管を通す、塀を新しくするといった工事の都合で移植する場合は、工程に合わせた期限が先に決まります。時期を選べないという点が、他の場面と大きく異なります。",
  },
  {
    h: "記念樹を移したい",
    b: "転居先へ移す、実家の木を移すなど、判断の基準が庭の条件ではなく、その木そのものになる場面です。この場合でも、大きさと時期の制約は同様に適用されます。移植が可能かどうかを先に確認してもらってから、日程を検討することになります。",
  },
];

const alternatives = [
  {
    h: "切り詰めてその場に残す",
    b: "大きさが理由であれば、最初に検討すべき選択肢です。木への負担は移植より小さく、失敗した場合の損失も小さく済みます。ただし、一度の剪定で済むのか、剪定し続けることになるのかは別の問題です。毎年強く剪定しなければ収まらない状態であれば、根本的には場所が適していません。",
  },
  {
    h: "周囲を変える",
    b: "影を作っている木を整理する、塀の位置を見直す、通路の取り方を変えるなど、変更するのは木に限りません。周囲を変えるほうが、木にとっては負担がないため確実です。",
  },
  {
    h: "移植せずに扱い方を変える",
    b: "構造物に近いことが理由であっても、根の影響がどこまで及んでいるかによっては、経過を見ながら維持できる場合があります。反対に、すでに舗装や基礎に影響が出ている場合は、待つほど選択肢が減ります。専門的な判断が必要な領域であるため、判断を急がず一度確認を依頼してください。",
  },
  {
    h: "残さずに植え替える",
    b: "移植するより、その木を断念して別の木を植えるほうが、結果的に良い場合があります。大きい木ほど移植は難しく、活着しないこともあるためです。思い入れがない木であれば、この選択肢も検討してください。",
  },
];

const sizeItems = [
  {
    h: "人力で移植できる大きさ",
    b: "植えて間もない木、低木、根がまだ広がっていない木であれば、掘り上げて運び、植え直すという流れを依頼者自身でも計画できます。目安となるのは高さより、根がどこまで張っているかです。幹が細くても、何年もその場所にある木は根が広く張っています。",
  },
  {
    h: "人力では移植できない大きさ",
    b: "根を付けたまま掘り上げると、土を含んだ塊がかなりの重さになります。持ち上げられるかどうかのみで判断すると、途中で移動できなくなり、根が露出したまま時間が経過するという最も望ましくない状態になります。持ち上げられるか自信がない時点で、業者に相談すべき対象です。",
  },
  {
    h: "重機や車両が必要になる場面",
    b: "掘り上げにも運搬にも機械が必要な大きさがあります。この場合に重要なのは、木の大きさより、機械が庭まで入れるかどうかです。門の幅、通路の幅、地盤の強さ、電線の高さを確認します。入れない場合は手作業となり、段取りそのものが変わります。",
  },
  {
    h: "道路や隣地を使用する場面",
    b: "車両を道路に停める、クレーンで越して運ぶ、隣地を通行させてもらうといった段階になると、手続きや近隣への説明が先に必要となります。作業そのものより、これらの段取りに日数がかかります。移植すると決めた時点で相談を始めてください。",
  },
];

const timingItems = [
  {
    h: "木の活動が止まっている時期に移植する",
    b: "根を切る作業であるため、木が水を盛んに吸い上げている時期は適していません。葉から失われる水の量に、傷んだ根の吸収が追いつかないためです。反対に、活動が止まっている時期であれば、根が減っても持ちこたえられます。",
  },
  {
    h: "落葉樹と常緑樹では事情が異なります",
    b: "落葉樹は、葉のない時期に水の出入りが少なくなります。常緑樹にはその時期がありません。同じ「休眠期」でも、適期の取り方が変わります。樹種ごとに異なるため、その木について確認してから日程を決めてください。",
  },
  {
    h: "寒さと乾燥の厳しい時期は避ける",
    b: "活動が止まっている時期であっても、凍結する時期や、乾燥した風が吹く時期は根に負担がかかります。植栽直後に根が傷むと、そのまま春を迎えられません。地域の気候によって避けるべき時期が変わるため、この点も現地での判断となります。",
  },
  {
    h: "工事の都合で時期を選べない場合",
    b: "外構や建築の工程に合わせる場合、適期を待てないことがあります。その場合は、一時的に別の場所へ移しておく、鉢や仮植えで時期を待つといった二段階の方法が取られることがあります。適期を外して植栽する場合は、その分植栽後の手当ての負担が大きくなるとお考えください。",
  },
];

const workItems = [
  {
    h: "根回しとは、事前に根を切っておくことです",
    b: "移植の前に、幹から一定の距離で根を切り、その場に置いておく作業です。切った箇所から細い根が新たに出てくるため、実際に掘り上げる際には、根鉢の中に水を吸収する根が含まれている状態になります。根回しをせずに掘り上げて運ぶと、太い根のみが残り、水を吸収する細い根はほとんど残りません。",
  },
  {
    h: "根回しから掘り上げまでには期間が必要です",
    b: "切った根から新しい根が出るのを待つ作業であるため、すぐには進みません。木の状態や時期によって必要な期間が変わり、季節をまたぐこともあります。「来月移植したい」という相談で最初に問題となるのが、この期間です。急ぐ場合は、根回しなしで進めるかどうかの判断となり、その分活着の見込みは低下します。",
  },
  {
    h: "掘り上げと根鉢",
    b: "根を土ごと一つの塊にし、崩れないように布や縄で巻き固めます。この塊が根鉢です。途中で崩れると細い根が切れるため、掘る作業より、崩さずに保つことのほうが重要です。根鉢を小さくすれば軽くなりますが、その分残る根が減ります。",
  },
  {
    h: "運搬中に傷むもの",
    b: "根鉢の乾燥、枝の折損、樹皮の擦れが生じることがあります。走行中の風で葉から水分が失われることもあります。距離が短くても、置いておく時間が長いと乾燥します。掘り上げてから植栽するまでの時間は短いほどよいというのが基本であり、移植先の植え穴を先に用意しておくのはそのためです。",
  },
];

const afterItems = [
  {
    h: "支柱で固定する",
    b: "根が減っている状態のため、風で幹が揺れると、新たに出ようとしている根が切れます。地上部を固定するのは外観のためではなく、地中で根を安定させるためです。支柱が当たる部分が樹皮を傷めることがあるため、当て木や緩衝材を入れます。",
  },
  {
    h: "水やりは量より浸透する深さが重要です",
    b: "表面が濡れただけでは、根鉢の中まで届きません。植栽直後は、根鉢全体に水が行き渡るように与えます。一方で、水が引かない土に多く与え続けると、今度は根が傷みます。水の浸透と排水の状態を確認しながら間隔を決めることになります。",
  },
  {
    h: "枝葉を減らして均衡を取る",
    b: "根が減っているのに葉がそのままだと、吸い上げる量と失われる量が均衡しません。移植の際に枝を剪定するのは、形を整えるためではなく、この差を埋めるためです。どこをどの程度剪定するかは木によって異なるため、通常の剪定とは別に判断されます。",
  },
  {
    h: "最初の一年間は変化を確認する",
    b: "葉の色、新しい芽の出方、枝先の枯れ込みを確認します。順調に活着している木は、次の生育期に新しい芽が動きます。芽が動かない、葉が小さいまま、枝先から枯れてくるといった状態は、根が付いていない兆候です。気づいた時点で相談すると、対処できる場合があります。",
  },
];

const scopeItems = [
  {
    h: "自分で行える範囲",
    b: "植えて間もない低木や、根がまだ広がっていない木が対象です。移植先の植え穴を先に掘っておく、土を用意しておく、水やりを継続するといった、準備と植栽後の管理は依頼者側で行える部分が多く、これらを担うと依頼する範囲が減ります。",
  },
  {
    h: "業者に任せたほうがよい範囲",
    b: "持ち上げられるか分からない大きさ、根回しの要否と時期の判断、根鉢を崩さずに巻き固める作業、機械や車両が必要な搬出が該当します。途中で作業が止まると木が傷むため、着手前に最後まで完遂できるかを確認しておく必要があります。高所の枝を剪定する作業にも、移植とは別の危険があります。",
  },
  {
    h: "活着しない場合があるという前提",
    b: "根を切って移動する以上、活着しないことがあります。大きい木ほど、また根回しを省いた場合ほど、その可能性は高くなります。「必ず活着する」という前提で進めないほうが、判断を誤りません。植栽後に枯れた場合の扱いは業者ごとに異なるため、依頼前に確認しておくべき項目です。",
  },
  {
    h: "確認を依頼する際に伝える事項",
    b: "いつ植えた木か、これまでどの程度の間隔で手入れしてきたか、移植先はどこか、いつまでに移植したいかの四点を伝えると、根回しの要否、時期の調整の可否、機械の搬入の可否について、現地で判断してもらえます。",
  },
];

const faqs = [
  {
    q: "移植と植え替えは、何が違うのですか。",
    a: "本ページでは、同じ木を別の場所に移すことを移植、その木を断念して別の木を植え直すことを植え替えとして扱っています。相談の場面では両方が混同して使われるため、「この木を移したいのか」「この場所に別の木を植えたいのか」を明確にしておくと、提示される提案が意図と合います。大きい木を無理に移植するより、植え替えたほうが良い結果になる場合もあります。",
  },
  {
    q: "根回しをせずに、すぐ動かすことはできますか。",
    a: "不可能ではありませんが、活着の見込みは低下します。根回しは、事前に根を切っておき、切った箇所から水を吸収する細い根を出させておくための準備です。これを省くと、掘り上げた際に根鉢の中に細い根がほとんど含まれていない状態になります。木が小さく、根の広がりが限られている場合は省略できる余地がありますが、大きい木ほど省略した影響が出ます。",
  },
  {
    q: "どのくらいの大きさまでなら、自分で移せますか。",
    a: "高さより、根がどこまで張っているかで決まります。幹が細くても、何年もその場所にある木は根が広く張っており、根を付けたまま掘ると土を含んだ塊がかなりの重さになります。持ち上げられるかどうかに自信がない時点で、業者に相談すべき対象とお考えください。途中で移動できなくなり、根が露出したまま時間が経過することが、最も木を傷める状態です。",
  },
  {
    q: "移したあと、枯れてしまうことはありますか。",
    a: "あります。根を切って移動する作業であるため、活着しないことは起こり得ます。大きい木ほど、また根回しを省いた場合ほど、その可能性は高くなります。植栽後は支柱で揺れを抑え、根鉢に水が届くように与え、枝葉を減らして吸い上げと蒸散の均衡を取るといった手当てが必要です。枯れた場合の扱いは業者ごとに異なるため、依頼前にご確認ください。",
  },
  {
    q: "木を動かすより、切ってしまったほうがよい場合はありますか。",
    a: "あります。建物や塀に影響が出ていて移植先も確保できない場合、大きくて移植の段取りが現実的でない場合、特に思い入れがない場合などです。無理に移植して活着しなければ、手間のみが残ります。残さないと決めた場合の考え方は、伐採のページで解説しています。",
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
          "庭木を移植するかどうかの判断、時期の考え方、根回しと掘り上げ、植栽後の管理までを整理しています。",
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
          庭木の移植は、植栽の延長ではありません。地中に広がっている根を切り、土ごと持ち上げて、別の場所で再び根を張らせる作業であり、木にとっては数年分の蓄えを使う出来事です。そのため、「移植できますか」の前に「移植する必要がありますか」という問いを検討する必要があります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、移植を検討する場面と、移植以外の選択肢、木の大きさによって異なる難易度、時期の考え方、根回しという準備、掘り上げと運搬、植栽後の管理までを順に整理します。活着しない場合があるという前提も含めて解説します。
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
          移植を検討するのは、木ではなく周囲が変わった場合です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          場面によって、移植するかどうかの判断も、時期を選べるかどうかも変わります。まず、どの場面に該当するかをご確認ください。
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
          で解説しています。
        </p>
      </section>

      <section id="tp-alt" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          移植以外の選択肢を先に検討する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          移植を決める前に、次の四つを比較してください。検討したうえで移植するのと、他の選択肢を考えずに移植するのとでは、後の納得感が異なります。
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
            手入れが容易な庭木のおすすめ
          </Link>
          をご参照ください。
        </p>
      </section>

      <section id="tp-size" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          木の大きさによって作業の内容が大きく異なります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「移植」でも、半日で終わるものと、段取りに日数がかかるものがあります。その分かれ目は、重さと庭までの経路です。
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
          庭までの経路の確認方法は
          <Link href="/area/tokyo/" className="text-primary underline underline-offset-2 mx-1">
            狭小地・搬出経路を考慮した業者選び
          </Link>
          、費用の目安は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="tp-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          時期の考え方と、急いではいけない理由
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          適期は樹種と地域によって異なるため、ここでは考え方のみを示します。日程を決める前に、その木について確認してください。
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
          年間の作業計画は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="tp-work" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          根回し・掘り上げ・運搬で起きていること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          業者に任せる場合でも、作業内容を把握していると、日程の相談を円滑に進められます。
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
          掘り上げの際に出た土や、剪定した枝の処分は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で解説しています。移植先の土の状態が気になる場合は
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          も事前にご確認ください。
        </p>
      </section>

      <section id="tp-after" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植栽後の一年間が重要です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          植栽した日で作業が終わるわけではありません。根が減った状態から、再び根を張るまでの期間があります。
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
          、乾燥する時期の水やりの方法は
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温と水やり
          </Link>
          で解説しています。葉の様子に異常がある場合の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          もあわせてご確認ください。
        </p>
      </section>

      <section id="tp-scope" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分で行える範囲と業者に任せる範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          すべてを依頼するか、すべてを自分で行うかの二択ではありません。準備と事後の管理を依頼者が担うと、依頼する範囲が変わります。
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
          自分で行う範囲の決め方は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          、庭全体の配置から見直す場合は
          <Link href="/service/garden-design/" className="text-primary underline underline-offset-2 mx-1">
            庭のリフォーム・ガーデンデザイン
          </Link>
          で解説しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/felling/", label: "庭木の伐採" },
            { href: "/guide/tree-roots/", label: "庭木の根と構造物" },
            { href: "/service/garden-design/", label: "庭のリフォーム・ガーデンデザイン" },
            { href: "/plant/symbol-tree/", label: "シンボルツリーの選び方" },
            { href: "/guide/tree-planting/", label: "庭木を新しく植える" },
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
          移植できるかどうか、根回しが必要かどうかは、現地で木を確認しなければ判断できません。移植先と時期を添えて相談することをおすすめします。
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
