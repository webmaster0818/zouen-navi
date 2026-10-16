import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/hedge-care/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "生垣の手入れ｜刈り込みの考え方と、下部が透けた生垣の改善方法";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "生垣は放置すると上部のみが茂り、下部が透けていきます。刈り込みで重要なのは高さより形であること、どこまで剪定してよいか、下部が透けた生垣をどのように回復させるかについて、生垣を面として維持するための考え方を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "生垣を面として維持するための刈り込みの考え方と、透けた部分・枯れ込んだ部分の改善方法を整理しています。",
  },
};

const toc = [
  { id: "hedge-living", label: "生垣は壁ではなく、成長し続けるものです" },
  { id: "hedge-shape", label: "刈り込みで重要なのは高さより形です" },
  { id: "hedge-limit", label: "剪定してよい範囲と、回復しない範囲" },
  { id: "hedge-gap", label: "透けた部分・枯れ込んだ部分への対処" },
  { id: "hedge-screen", label: "目隠しとして不十分な場合" },
  { id: "hedge-diy", label: "道具と足場で決まる、自分で行える範囲" },
  { id: "hedge-faq", label: "よくある質問" },
];

const shapeRules = [
  {
    h: "上部を広くしない",
    b: "断面が四角ではなく、上部がわずかに狭い台形になるように刈り込みます。上部が張り出していると、その影で下部の葉に光が届かず、足元から順に葉が落ちていきます。下部が透ける生垣の大半は、この形状が原因です。傾斜は強くなくてよく、上に向かってわずかに狭めるだけで、光の届き方が変わります。",
  },
  {
    h: "面を平らに揃える意味",
    b: "外観上の問題だけではありません。凹んだ部分は周囲の葉の影に入り、その部分のみ光が不足します。反対に突出した枝は、そこに成長が集中して形が崩れます。面を揃えることは、光の当たり方を均一にすることでもあります。",
  },
  {
    h: "角を丸く整える",
    b: "生垣の端や、上面と側面が接する角は、鋭いと乾燥しやすく、傷みが出やすい箇所です。わずかに丸みを付けておくと傷みにくくなり、多少形が崩れても目立ちません。",
  },
  {
    h: "幅をどこで止めるか決める",
    b: "高さには注意を払っても、厚みは放置されがちです。厚くなるほど内側に光が入らず、刈り込みの位置も年々外側へ移ります。「これより外には出さない」という基準を決めて、毎回その位置に戻すほうが、長期的に維持しやすくなります。",
  },
];

const cutLimits = [
  {
    h: "葉の付いている範囲で剪定する",
    b: "最も基本的な目安です。葉の付いた部分を残して剪定すれば、そこから新しい枝が出ます。葉のない古い枝まで切り戻すと、そこから芽が出るかどうかは樹種によって異なります。芽が出ない種類の場合、その部分は枝のまま残ります。",
  },
  {
    h: "古い枝から芽を出す種類と出さない種類があります",
    b: "葉のない太い枝からでも新しい芽を出す種類と、ほとんど出さない種類があります。後者を深く切り込むと、その部分は回復しない穴になります。自宅の生垣がどちらに該当するか分からない場合は、一度に全体を行わず、目立たない一区画で試してから範囲を広げる方法があります。",
  },
  {
    h: "刈り込みの回数によって一回あたりの量が決まります",
    b: "年に何回手入れを行うかによって、一回に剪定する量が変わります。回数が少ないほど一回の剪定量が増え、葉のない部分まで切り戻す可能性が高くなります。回数を増やせば一回は軽く済み、形も維持しやすくなります。適した時期と回数は樹種によって異なるため、自宅の生垣に適した計画は業者にご確認ください。",
  },
  {
    h: "花や実が付く生垣の扱い",
    b: "花の咲く種類では、剪定する位置によって翌年の花が減ることがあります。面として整えることを優先するのか、花の観賞を優先するのかによって、刈り込み方が変わります。どちらを優先するかを事前に決めておくと、業者への伝え方も具体的になります。",
  },
];

const gapCases = [
  {
    h: "下部のみ透けている",
    b: "上部が張り出して光を遮っていることが典型的な原因です。上面を下げ、上部の幅を狭めて、足元に光を入れます。ただし、回復までには時間がかかり、葉のない枝から芽が出ない種類では回復しないこともあります。その場合は、足元のみ別の低い植物で補う方法があります。",
  },
  {
    h: "一部のみ枯れて穴が開いた",
    b: "一本のみ枯れた場合、そこに同じ種類を植え直すことは可能です。ただし、周囲の株はすでに大きく育っているため、新しい株が追いつくまで穴は残ります。枯れた原因が土や水の条件にある場合は、植え直しても同じことが起きるため、先に原因を確認します。",
  },
  {
    h: "片側のみ伸びる・傾く",
    b: "光が片側からしか当たっていない場合に生じます。刈り込みで形は戻せますが、原因が変わらなければ繰り返されます。隣の建物や木の影が原因であれば、その木の手入れを行うほうが効果的な場合もあります。",
  },
  {
    h: "全体が間延びして薄い",
    b: "何年も刈り込まれずに伸びた生垣は、枝が長く伸びて葉が先端のみに付いた状態になります。これを一度で元の大きさまで戻すと、葉のない部分ばかりになり、回復しない可能性があります。数年をかけて段階的に戻す進め方となるため、早めに相談を始めることに意味があります。",
  },
];

const screenOptions = [
  {
    h: "高さを補うか、厚みを補うか",
    b: "視線を遮りたい高さに葉があるかどうかが問題であるため、全体を高くするより、不足している高さに葉を付けさせるほうが効果的です。厚みを増やすと内側に光が入らなくなるため、厚くすれば目隠しになるという方向は長続きしません。",
  },
  {
    h: "足元を別の植物で補う",
    b: "下部の透けた部分が回復しない場合は、その高さのみ低い植物で補う方法があります。同じ種類で揃える必要はなく、日陰でも育つ植物を足元に植える形が現実的です。",
  },
  {
    h: "隣地との境界にある生垣は、単独で判断できない場合があります",
    b: "境界線上にある生垣や、隣の敷地にまたがっている場合は、剪定する・低くする・撤去するといった判断を一人で決められないことがあります。また、伸びた枝が隣地に越境している場合は、別の問題となります。",
  },
  {
    h: "季節によって葉を落とす種類かどうか",
    b: "落葉する種類を目隠しに使用している場合、葉のない時期は透けます。これは手入れでは解決しません。その時期のみ別の方法を追加するか、植え替えを検討するかの判断になります。",
  },
];

const diyRange = [
  {
    h: "自分で行いやすい条件",
    b: "地面に立ったまま上面に手が届く高さで、足場が平坦であり、長さがそれほどない生垣であれば、道具があれば自分で維持できます。面を揃えるには、糸を張るか、離れて確認しながら少しずつ進めます。",
  },
  {
    h: "難易度が急に上がる条件",
    b: "脚立が必要な高さ、足元に段差や傾斜がある、道路や隣地に面していて後方に下がれないといった条件では、刈り込みそのものより、不安定な足場で刃物を横に動かすことのほうが危険です。",
  },
  {
    h: "剪定する枝葉の量を見込んでおく",
    b: "生垣の刈り込みは、一本の木の剪定より出る量が多くなります。細かい枝葉が大量に出るため、どこにどのようにまとめ、どのように処分するかを事前に決めておかないと、刈り込み後の処理に困ります。",
  },
  {
    h: "業者に任せたほうが効率的な場面",
    b: "何年も伸びた生垣を戻す、枯れた部分を植え直す、高さを大きく下げるといった作業は、いずれも一度で決めると取り返しがつかないため、段階を組んで進める判断が必要です。",
  },
];

const faqs = [
  {
    q: "生垣の刈り込みは年に何回必要ですか。",
    a: "樹種と、どの程度整った状態を維持したいかによって異なります。回数が少ないほど一回の剪定量が増え、葉のない部分まで切り戻しやすくなります。回数を増やせば一回あたりは軽く済み、形も維持しやすくなります。適した時期と回数は樹種ごとに異なるため、自宅の生垣に適した計画は業者にご確認ください。",
  },
  {
    q: "下のほうがスカスカになってしまいました。戻せますか。",
    a: "上部が張り出して光を遮っていることが典型的な原因であるため、上面を下げ、上部の幅を狭めて足元に光を入れることが基本の対処です。ただし、回復までには時間がかかり、葉のない枝から芽を出さない種類では回復しないこともあります。その場合は、足元の高さのみ低い植物で補う方法が現実的です。",
  },
  {
    q: "一部だけ枯れた生垣は、そこだけ植え替えられますか。",
    a: "植え直すこと自体は可能です。ただし、周囲の株はすでに大きく育っているため、新しい株が揃うまで穴は残ります。また、枯れた原因が地面の水の条件や病気にある場合、同じ場所に同じ種類を植えると同じことが起きます。先に原因を確認してもらってから判断してください。",
  },
  {
    q: "生垣を低くしたいのですが、一度にどこまで下げられますか。",
    a: "葉の付いている範囲で剪定する限りは、比較的安全に低くできます。葉のない古い枝まで切り戻すと、そこから芽が出るかどうかは樹種によります。大きく低くしたい場合は、一度で決めずに数年をかけて段階的に戻す進め方が確実です。どこまで低くできるかは樹種と現状によるため、現物を確認してもらって判断してください。",
  },
  {
    q: "電動の刈り込み機があれば自分でできますか。",
    a: "地面に立ったまま上面に手が届く高さで、足場が平坦であれば、自分で維持することは十分に可能です。難しくなるのは、脚立が必要な高さ、足元に段差や傾斜がある場合、後方に下がれない場所です。不安定な足場で刃物を横に動かす作業は事故が起きやすいため、そうした条件では業者に任せることをおすすめします。",
  },
];

export default function HedgeCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "生垣の刈り込みで重要な形の考え方と、下部が透けた生垣・一部が枯れた生垣への対処を整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "生垣の手入れ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          生垣は、植栽した時点で完成するものではありません。数年経つと、上部のみが厚く茂り、足元は枝のみになって向こう側が見えるようになります。目隠しのために植えたにもかかわらず、肝心の目線の高さが透けている状態です。これは手入れの不足というより、刈り込みの形が原因であることが多くあります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、生垣を面として維持するために何を基準に刈り込むのか、どこまで剪定してよいのか、透けたり枯れたりした部分をどのように扱うのかを整理します。
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

      <section id="hedge-living" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          生垣は壁ではなく、成長し続けるものです
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          塀やフェンスは、施工した形のまま残ります。生垣はそうではありません。光の当たる側から伸び、当たらない側は葉を落としていきます。手入れをしないと、前年より少し大きく、少し形が崩れた状態になります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この崩れ方には方向性があります。植物は日の当たる場所に葉を付けるため、上部と外側が優先されます。内側と下部は後回しになり、やがて枝のみになります。つまり、放置すると生垣は「上部が厚く、下部が透けた」形へ向かいます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            手入れの目的は、大きくしないことよりも、下部まで葉が付いている状態を維持することです。高さを揃えることに注意が向くと、かえって下部が枯れ上がります。
          </p>
        </div>
      </section>

      <section id="hedge-shape" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          刈り込みで重要なのは高さより形です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ回数刈り込んでいても、形の取り方によって十年後の状態が変わります。基準は四つです。
        </p>
        <ol className="space-y-4">
          {shapeRules.map((x, i) => (
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

      <section id="hedge-limit" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          剪定してよい範囲と、回復しない範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          生垣を小さくしたい場合、どこまで切り込めるかは樹種によって異なります。共通していえることのみを挙げます。
        </p>
        <div className="space-y-4">
          {cutLimits.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          樹種ごとの性質は
          <Link href="/plant/hedge/" className="text-primary underline underline-offset-2 mx-1">
            生垣におすすめの品種
          </Link>
          で、年間の作業計画は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="hedge-gap" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          透けた部分・枯れ込んだ部分への対処
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          すでに形が崩れている生垣は、症状によって対処方法が異なります。「すべて刈り直す」ことで解決する問題ではありません。
        </p>
        <div className="space-y-4">
          {gapCases.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          枯れた原因が地面の水の条件にある場合もあります。切り分け方は
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          、葉や枝の症状から判断する場合は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          をご参照ください。
        </p>
      </section>

      <section id="hedge-screen" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          目隠しとして不十分な場合
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          植栽の目的が目隠しであれば、外観の整い方より「見えるかどうか」が判断の基準になります。
        </p>
        <ol className="space-y-4">
          {screenOptions.map((x, i) => (
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
          境界を越える枝と根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="hedge-diy" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          道具と足場で決まる、自分で行える範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          生垣の刈り込みは、庭の作業の中では自分で行いやすい作業です。ただし、条件によっては急に難易度が上がります。
        </p>
        <div className="space-y-4">
          {diyRange.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          刈り込んだ枝葉の処分方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          、自分で行う範囲の判断基準は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="hedge-faq" className="scroll-mt-20 mb-12">
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
            { href: "/plant/hedge/", label: "生垣におすすめの品種" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
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
          何年も伸びた生垣を戻す作業は、段階を組んで進める判断が必要です。現状を確認してもらったうえで相談することをおすすめします。
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
