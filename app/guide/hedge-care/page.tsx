import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/hedge-care/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "生垣の手入れ｜刈り込みの考え方と、透いてしまった生垣の直し方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "生垣は放っておくと上だけが茂り、下が透けていきます。刈り込みで決まるのは高さより形であること、どこまで切ってよいか、下がスカスカになった生垣をどう戻すか。生垣を面として保つための考え方を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "生垣を面として保つための刈り込みの考え方と、透いた・枯れ込んだ部分の直し方を整理しました。",
  },
};

const toc = [
  { id: "hedge-living", label: "生垣は「壁」ではなく、育ち続けるもの" },
  { id: "hedge-shape", label: "刈り込みで決まるのは、高さより「形」" },
  { id: "hedge-limit", label: "どこまで切ってよいか、戻らないのはどこか" },
  { id: "hedge-gap", label: "透けた・枯れ込んだところをどうするか" },
  { id: "hedge-screen", label: "目隠しとして足りていないとき" },
  { id: "hedge-diy", label: "道具と足元で決まる、自分でやれる範囲" },
  { id: "hedge-faq", label: "よくある質問" },
];

const shapeRules = [
  {
    h: "上を広くしない",
    b: "断面が四角ではなく、上がわずかに狭い台形になるように刈ります。上が張り出していると、その影で下の葉に光が届かず、足元から順に葉が落ちていきます。下が透ける生垣の大半は、この形が原因です。傾きは強くなくてよく、上に向かってわずかに絞るだけで届く光が変わります。",
  },
  {
    h: "面を平らに揃える意味",
    b: "見た目の問題だけではありません。凹んだ部分は周りの葉の影に入り、そこだけ光が足りなくなります。逆に飛び出した枝は、そこに勢いが集中して形が崩れます。面を揃えるのは、光の当たり方を揃えることでもあります。",
  },
  {
    h: "角を落とす",
    b: "生垣の端と、上面と側面が出会う角。鋭い角は乾きやすく、傷みが出やすい場所です。わずかに丸みを付けておくと、傷みにくくなり、多少形が崩れても目立ちません。",
  },
  {
    h: "幅をどこで止めるか決める",
    b: "高さは気にしても、厚みは放置されがちです。厚くなるほど内側に光が入らず、刈り込みの位置も年々外へ出ていきます。「ここより外には出さない」という線を決めて、毎回そこへ戻すほうが、長い目で見て維持しやすくなります。",
  },
];

const cutLimits = [
  {
    h: "葉の付いている範囲で切る",
    b: "最も基本的な目安です。葉の付いた部分を残して切れば、そこから新しい枝が出ます。葉のない古い枝まで戻して切ると、そこから芽が出るかどうかは樹種次第になります。出ない種類の場合、その部分は枝のまま残ります。",
  },
  {
    h: "古い枝から芽を出す種類と、出さない種類がある",
    b: "葉のない太い枝からでも新しい芽を出す種類と、ほとんど出さない種類があります。後者を深く切り込むと、そこだけ永久に穴が開いた状態になります。自分の生垣がどちらなのか分からない場合は、一度に全体をやらず、目立たない一区画で試してから広げる方法があります。",
  },
  {
    h: "刈る回数で、一回あたりの量が決まる",
    b: "年に何回手を入れるかで、一回に切る量が変わります。回数が少ないほど一回で切る量が増え、葉のない部分まで戻る可能性が高くなります。回数を増やせば一回は浅く済み、形も保ちやすくなります。適した時期と回数は樹種によって違うため、自分の生垣に合う組み方は業者に確認してください。",
  },
  {
    h: "花や実がつく生垣の扱い",
    b: "花の咲く種類では、切る位置によって翌年の花が減ることがあります。面として整えることを優先するのか、花を見ることを優先するのかで、刈り方が変わります。どちらを取るかは先に決めておくと、業者への伝え方も具体的になります。",
  },
];

const gapCases = [
  {
    h: "下のほうだけ透けている",
    b: "上が張り出して光を遮っているのが典型的な原因です。上面を下げ、上の幅を絞って、足元に光を入れます。ただし戻るまでには時間がかかり、葉のない枝から芽が出ない種類では戻らないこともあります。その場合、足元だけ別の低い植物で埋めるという手があります。",
  },
  {
    h: "一部だけ枯れて穴が開いた",
    b: "一本だけ枯れた場合、そこに同じ種類を植え直すことはできます。ただし周囲の株はすでに大きいため、新しい株が追いつくまで穴は残ります。枯れた原因が土や水の条件にある場合、植え直しても同じことが起きるので、先に原因を見ます。",
  },
  {
    h: "片側だけ伸びる・傾く",
    b: "光が片側からしか当たっていない場合に起きます。刈り込みで形は戻せますが、原因が変わらなければ繰り返します。隣の建物や木の影が原因なら、その木の側に手を入れるほうが効くこともあります。",
  },
  {
    h: "全体が間延びして薄い",
    b: "何年も刈られずに伸びた生垣は、枝が長く伸びて葉が先端だけに付いた状態になります。これを一度で元の大きさまで戻すと、葉のない部分だらけになって回復しない可能性があります。数年かけて段階的に戻す進め方になるため、早めに相談を始める意味があります。",
  },
];

const screenOptions = [
  {
    h: "高さを足すか、厚みを足すか",
    b: "視線を遮りたい高さに葉があるかどうかが問題なので、全体を高くするより、足りていない高さに葉を付けさせるほうが効きます。厚みを増やすと内側に光が入らなくなるため、厚くすれば隠れるという方向は長続きしません。",
  },
  {
    h: "足元を別のもので埋める",
    b: "下の透けた部分が戻らない場合、その高さだけ低い植物で埋めるという組み方があります。同じ種類でそろえる必要はなく、日陰でも育つものを足元に入れる形が現実的です。",
  },
  {
    h: "隣との境にある生垣は、単独で決められないことがある",
    b: "境界線の上にある生垣や、隣の敷地にまたがっている場合、切る・低くする・抜くといった判断を一人で決められないことがあります。また、伸びた枝が隣地に入っている場合は別の話になります。",
  },
  {
    h: "季節で葉を落とす種類かどうか",
    b: "落葉する種類を目隠しに使っている場合、葉のない時期は透けます。これは手入れでは解決しません。その時期だけ別の方法を足すか、植え替えを考えるかの判断になります。",
  },
];

const diyRange = [
  {
    h: "自分でやりやすい条件",
    b: "地面に立ったまま上面に手が届く高さで、足場が平らで、長さがそれほどない生垣。この条件なら、道具さえあれば自分で維持できます。面を揃えるには、糸を張るか、離れて見ながら少しずつ進めます。",
  },
  {
    h: "急に難しくなる条件",
    b: "脚立が要る高さ、足元に段差や傾斜がある、道路や隣地に面していて後ろに下がれない。刈り込みそのものより、不安定な足場で刃物を横に動かすことのほうが危険です。",
  },
  {
    h: "切ったものの量を見込んでおく",
    b: "生垣の刈り込みは、一本の木の剪定より出る量が多くなります。細かい枝葉が大量に出るため、どこにどうまとめて、どう出すかを先に決めておかないと、刈り終わってから途方に暮れます。",
  },
  {
    h: "任せたほうが早い場面",
    b: "何年も伸びたものを戻す、枯れた部分を植え直す、高さを大きく下げる。いずれも一度で決めると取り返しがつかないため、段階を組んで進める判断が要ります。",
  },
];

const faqs = [
  {
    q: "生垣の刈り込みは年に何回必要ですか。",
    a: "樹種と、どのくらい整った状態を保ちたいかによって変わります。回数が少ないほど一回で切る量が増え、葉のない部分まで戻りやすくなります。回数を増やせば一回あたりは浅く済み、形も保ちやすくなります。適した時期と回数は樹種ごとに違うため、自分の生垣に合う組み方は業者に確認してください。",
  },
  {
    q: "下のほうがスカスカになってしまいました。戻せますか。",
    a: "上が張り出して光を遮っているのが典型的な原因なので、上面を下げ、上の幅を絞って足元に光を入れるのが基本の手当てです。ただし戻るまでには時間がかかり、葉のない枝から芽を出さない種類では戻らないこともあります。その場合は、足元の高さだけ低い植物で埋める組み方が現実的です。",
  },
  {
    q: "一部だけ枯れた生垣は、そこだけ植え替えられますか。",
    a: "植え直すこと自体はできます。ただし周囲の株はすでに大きく育っているため、新しい株が並ぶまで穴は残ります。また、枯れた原因が地面の水の条件や病気にある場合、同じ場所に同じ種類を植えると同じことが起きます。先に原因を見てもらってから決めてください。",
  },
  {
    q: "生垣を低くしたいのですが、一度にどこまで下げられますか。",
    a: "葉の付いている範囲で切る限りは、比較的安全に下げられます。葉のない古い枝まで戻すと、そこから芽が出るかどうかは樹種によります。大きく下げたい場合は、一度で決めずに数年かけて段階的に戻す進め方が確実です。どこまで下げられるかは樹種と現状によるため、現物を見てもらって判断してください。",
  },
  {
    q: "電動の刈り込み機があれば自分でできますか。",
    a: "地面に立ったまま上面に手が届く高さで、足場が平らであれば、自分で維持することは十分に可能です。難しくなるのは、脚立が要る高さ、足元に段差や傾斜がある場合、後ろに下がれない場所です。不安定な足場で刃物を横に動かす作業は事故が起きやすいため、その条件では任せる判断をしてください。",
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
          "生垣の刈り込みで決まる形の話と、下が透けた生垣・一部が枯れた生垣への対処を整理しました。",
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
          生垣は、植えたときが完成ではありません。何年か経つと、上のほうだけが厚く茂り、足元は枝だけになって向こうが見える。目隠しのつもりで植えたのに、肝心の目線の高さが透けている。これは手入れを怠ったからというより、刈り方の形が原因であることが多いものです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          このページでは、生垣を面として保つために何を基準に刈るのか、どこまで切ってよいのか、そして透けたり枯れたりした部分をどう扱うのかを整理します。
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
          生垣は「壁」ではなく、育ち続けるもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          塀やフェンスは、作った形のまま残ります。生垣はそうではありません。光の当たる側から伸び、当たらない側は葉を落としていきます。手を入れないと、去年より少し大きく、少し形が崩れた状態になります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そして、この崩れ方には方向があります。植物は日の当たるところに葉を付けるので、上と外側が優先されます。内側と下は後回しになり、やがて枝だけになります。つまり、放っておくと生垣は「上が厚く、下が透けた」形へ向かいます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            手入れの目的は、大きくしないことよりも、下まで葉が付いている状態を保つことです。高さを揃えることに気を取られると、かえって下が枯れ上がります。
          </p>
        </div>
      </section>

      <section id="hedge-shape" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          刈り込みで決まるのは、高さより「形」
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ回数だけ刈っていても、形の取り方で十年後が変わります。基準は四つです。
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
          どこまで切ってよいか、切ると戻らないのはどこか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          生垣を小さくしたいとき、どこまで切り込めるかは樹種によって違います。共通して言えることだけを挙げます。
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
          で、年間の作業の組み立ては
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="hedge-gap" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          透けた・枯れ込んだところをどうするか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          すでに崩れている生垣は、症状によって打ち手が違います。「全部刈り直す」で片づく話ではありません。
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
          、葉や枝の症状から見る場合は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          を参照してください。
        </p>
      </section>

      <section id="hedge-screen" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          目隠しとして足りていないとき
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          植えた目的が目隠しであれば、見た目の整い方より「見えるかどうか」が判断の基準になります。
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
          境界をまたぐ枝と根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="hedge-diy" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          道具と足元で決まる、自分でやれる範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          生垣の刈り込みは、庭仕事の中では自分でやりやすい部類です。ただし、条件によっては急に難しくなります。
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
          刈った枝葉の出し方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          、自分でやる範囲の線引きは
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で扱っています。
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
          あわせて読みたい
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
          何年も伸びた生垣を戻す作業は、段階を組んで進める判断が要ります。現状を見てもらって相談してみてください。
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
