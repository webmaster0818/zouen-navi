import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/fallen-leaves/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "落ち葉が多い庭の手入れ｜溜めない集め方と、樋・側溝・隣家への配慮";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "落ち葉が問題になるのは、庭の中ではなく外に出たときです。雨樋と側溝、隣家の敷地、道路と車。溜まる場所の見方、集め方と道具、捨てずに使う場合の条件、毎年の量を減らす考え方を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "落ち葉が溜まる場所の見方と、集め方・使い方・近隣への配慮を整理しました。",
  },
};

const toc = [
  { id: "fl-outside", label: "落ち葉が問題になるのは、庭の外に出たとき" },
  { id: "fl-timing", label: "まとめて一回か、こまめに何回か" },
  { id: "fl-tools", label: "集め方と道具の選び方" },
  { id: "fl-use", label: "捨てずに使う場合の条件" },
  { id: "fl-neighbor", label: "近所とのあいだで起きやすいこと" },
  { id: "fl-reduce", label: "毎年の量を減らすという考え方" },
  { id: "fl-faq", label: "よくある質問" },
];

const problemSpots = [
  {
    h: "雨樋",
    b: "屋根に落ちた葉が樋に集まり、流れを塞ぎます。詰まると雨水があふれて外壁を伝い、地面の一点に落ち続けることになります。屋根の上や高い位置の樋は、庭仕事の範囲を超える作業です。自分で登るのは、濡れた屋根では特に危険です。",
  },
  {
    h: "側溝と排水の受け口",
    b: "地面にある雨水の受け口が塞がると、水が引かずに庭や通路に溜まります。落ち葉の時期に水たまりが増えたなら、水はけそのものより、まず受け口の上を見てください。",
  },
  {
    h: "隣の敷地",
    b: "風で飛んで入る、こちらの木から直接落ちる。どちらも起こります。これは掃除の問題である以上に、近隣との関係の話になります。",
  },
  {
    h: "道路と歩道",
    b: "濡れた落ち葉は滑ります。自転車や歩行者が通る場所に積もっている状態は、見た目の問題では済まなくなります。側溝の上に積もると、雨のときに水が流れません。",
  },
  {
    h: "駐車場所と車",
    b: "濡れた葉は車体に貼り付き、乾くと跡が残ることがあります。自分の車なら自分で洗えばよいのですが、隣の家の車となると話が変わります。",
  },
];

const leafTiming = [
  {
    h: "濡れる前に取る",
    b: "乾いた葉は軽く、集めやすく、まとめやすいものです。濡れると重くなり、地面に貼り付き、袋も重くなります。雨の予報が出ているなら、その前に一度取っておくだけで、作業量がはっきり変わります。",
  },
  {
    h: "溜まる場所を先に覚える",
    b: "落ち葉は均等には積もりません。風の向きと建物の形で、毎年同じ場所に吹き溜まります。壁ぎわ、門の内側、植え込みの陰、階段の下。そこだけを見に行けば、全体を回らずに済みます。",
  },
  {
    h: "水の通り道は、待たずに取る",
    b: "樋、側溝、受け口。ここだけは「全部落ちてから」では遅く、落葉が続いている期間中も見ておく対象です。逆に言えば、この三か所さえ押さえておけば、残りはまとめてで足ります。",
  },
  {
    h: "落ちきる時期は木によって違う",
    b: "同じ庭でも、早く落ちきる木と、長く落とし続ける木があります。一度片づけてもまた積もるのは、掃除が足りないのではなく、まだ落ちている木があるからです。どの木がいつまで落とすかを一年見ておくと、翌年から回数を決めやすくなります。",
  },
];

const leafTools = [
  {
    h: "熊手とほうき",
    b: "最も使い回しが利きます。熊手は広い面をまとめるのに向き、ほうきは硬い舗装面や隅を掃くのに向きます。芝生の上では、爪の細かい熊手のほうが芝を傷めにくくなります。",
  },
  {
    h: "送風で寄せる道具",
    b: "広い面を一気に寄せられますが、音が出ること、粉じんが舞うこと、隣の敷地へ飛ばしてしまう可能性があることが制約になります。使うなら時間帯を選び、境界から内側へ向けて寄せる向きで使います。",
  },
  {
    h: "砂利と植え込みの中",
    b: "最も取りにくい場所です。熊手を強くかけると砂利ごと動き、送風で吹くと砂利が飛びます。手で取るか、細い道具で拾うことになるため、ここは溜め込まないほうが結果として楽になります。",
  },
  {
    h: "濡れた葉と、貼り付いた葉",
    b: "乾かしてから取るほうが早いのですが、舗装に貼り付いて乾いたものは残ります。デッキや石の上に長く置くと、跡が残ったり、滑りやすくなったりします。水の通り道と歩く場所は、濡れているうちに取ります。",
  },
];

const leafUse = [
  {
    h: "木の根元に敷く",
    b: "地面を覆うと、乾きにくくなり、温度の変化も緩やかになります。幹に密着させると幹の側が蒸れるため、根元から少し離して敷きます。厚く積みすぎると水が入らなくなるので、地面が見えなくなる程度で足ります。",
  },
  {
    h: "積んで土に戻す",
    b: "囲いを作って積み、時間をかけて分解させる方法があります。場所を取ること、時間がかかること、積んだ場所に虫や小動物が来ることは前提になります。家の壁ぎわや、隣地との境には置かないほうが無難です。",
  },
  {
    h: "症状の出た葉は混ぜない",
    b: "斑点が出ていた葉、白い付着物があった葉、虫の食害が目立った葉は、敷いたり積んだりする対象から外します。翌年、同じ木の足元に戻ることになります。",
  },
  {
    h: "置き場所の条件を先に決める",
    b: "風で散らない場所か、水が流れ込む場所ではないか、通路を塞がないか。積んだあとで動かすのは大変なので、先に決めます。",
  },
];

const leafNeighbor = [
  {
    h: "自分の木から落ちていると分かっているとき",
    b: "気づいているなら、先に一言あるかどうかで受け取られ方が変わります。掃除に行くかどうかは相手の意向にもよるので、「気づいたら声をかけてください」と伝えておく形もあります。何も言わないまま毎年続くのが、最もこじれる形です。",
  },
  {
    h: "掃除の時間帯と音",
    b: "早朝や夜間の掃除は、静かにやっているつもりでも音が響きます。送風で寄せる道具を使う場合は特に、時間帯を選びます。",
  },
  {
    h: "集めた葉の置き場所",
    b: "袋にまとめたものを道路際に置いたまま日数が経つと、破れて散り、雨で重くなります。出す日と、それまでの置き場所を決めてから集め始めます。",
  },
  {
    h: "量が多い年に相談するなら早めに",
    b: "落葉の時期は、庭の作業の依頼が集まる時期でもあります。まとめて片づけを頼みたい場合、落ちきってから探し始めると日程が取りにくくなります。",
  },
];

const leafReduce = [
  {
    h: "枝の量を減らす",
    b: "葉の総量は枝の量で決まります。大きくなりすぎた木の枝を整理すると、落ちる量も減ります。ただし、木ごとに適した時期と切り方があるため、量を減らす目的だけで判断しないでください。",
  },
  {
    h: "落ちる先を変える",
    b: "道路側や隣地側に張り出している枝を整理すると、落ちる先が自分の敷地内に寄ります。全体を小さくするより、方向を絞るほうが木への負担も少なくて済みます。",
  },
  {
    h: "落ちても困らない場所をつくる",
    b: "取りにくい場所と、取りやすい場所があります。砂利や植え込みの中は取りにくく、平らな地面や芝の上は集めやすい。木の下の地面をどう作るかで、毎年の手間が変わります。",
  },
  {
    h: "植え替えを考えるとき",
    b: "毎年の量が手に負えない、樋や隣地の問題が繰り返される。この場合、木の側を見直すという判断もあります。これから植えるなら、落葉する種類かどうかと、成長後の大きさを見込んで場所を決めます。",
  },
];

const faqs = [
  {
    q: "隣の木から落ちてくる葉は、誰が片づけるのですか。",
    a: "落ちた葉そのものの扱いは、枝が越境している場合の枝の扱いとは別の話になります。実際には、落ちた側が片づけているのが通常です。ただし量が多く毎年続く場合は、相手に状況を伝えて、枝の整理を相談してもらうという進め方があります。枝や根が境界を越えている場合のルールは、別ページで整理しています。",
  },
  {
    q: "雨樋に葉が詰まっているようです。自分で掃除できますか。",
    a: "屋根の上や高い位置の樋の作業は、庭仕事の範囲を超えます。濡れた屋根は特に滑るため、自分で登るのは避けてください。地上から届く範囲の受け口や側溝であれば自分で取れますが、高さのあるものは、対応できる相手に頼む対象です。庭木が原因であっても、建物の上のことは別の相談先になる場合があります。",
  },
  {
    q: "集めた落ち葉はどう処分すればよいですか。",
    a: "自治体の回収に出す、処理施設へ持ち込む、作業を頼んだ業者に引き取ってもらう、庭の中で使う、という選択肢があります。出せる量やまとめ方のルールは自治体によって違うため、住んでいる市区町村の案内で確認してください。庭で燃やす方法は取らないでください。",
  },
  {
    q: "送風で寄せる道具を使ってもよいですか。",
    a: "使えますが、音が出ること、粉じんが舞うこと、隣の敷地へ飛ばしてしまう可能性があることが制約になります。時間帯を選び、境界から内側へ向けて寄せる向きで使ってください。砂利の上では砂利まで飛ぶため、向いていません。",
  },
  {
    q: "落ち葉を庭に敷きっぱなしにすると木に悪いですか。",
    a: "適度に敷くぶんには、地面が乾きにくくなり、温度の変化も緩やかになります。注意する点は三つです。幹に密着させないこと、水が入らないほど厚く積まないこと、斑点や白い付着物、虫の食害が目立った葉は混ぜないことです。症状の出た葉を敷くと、翌年また同じ木の足元に戻ります。",
  },
];

export default function FallenLeavesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "落ち葉が庭の外へ出たときに起きることと、集め方・活用・量を減らす考え方を整理しました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "落ち葉の手入れ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          落ち葉は、庭に落ちているぶんには急いで片づける必要のないものです。困るのは、庭の外に出たときと、水の通り道を塞いだときです。雨樋が詰まる、側溝から水があふれる、隣の敷地に入る、駐車している車に貼り付く。掃除の手間そのものより、こちらのほうが厄介です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          このページでは、どこに溜まると問題になるのか、集め方をどう組み立てるか、捨てずに使う場合の条件、そして毎年の量を減らすという考え方を整理します。
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

      <section id="fl-outside" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          落ち葉が問題になるのは、庭の外に出たとき
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          優先順位を付けるために、まず「放っておくと困る場所」を押さえます。庭の真ん中に積もっているぶんには、後回しでかまいません。
        </p>
        <div className="space-y-4">
          {problemSpots.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          水が引かない原因が受け口の詰まりではなかった場合の切り分けは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="fl-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          まとめて一回か、こまめに何回か
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          全部落ちきってから一度に片づけるのが楽に思えますが、場所によってはそれでは間に合いません。
        </p>
        <ol className="space-y-4">
          {leafTiming.map((x, i) => (
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

      <section id="fl-tools" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          集め方と道具の選び方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          場所によって、使える道具が違います。
        </p>
        <div className="space-y-4">
          {leafTools.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fl-use" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          捨てずに使う場合の条件
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          集めた葉を全部出す必要はありません。ただし、条件を外すと逆効果になります。
        </p>
        <ol className="space-y-4">
          {leafUse.map((x, i) => (
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
          庭に置かずに出す場合の方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で、症状の出た葉の見分けは
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="fl-neighbor" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          近所とのあいだで起きやすいこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          落ち葉は、庭の作業の中でも近隣の話になりやすいものです。こちらが出す側にも、受ける側にもなります。
        </p>
        <div className="space-y-4">
          {leafNeighbor.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          枝そのものが越境している場合の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で整理しています。作業日の近隣への配慮は
          <Link href="/area/saitama/" className="text-primary underline underline-offset-2 mx-1">
            作業日の近隣への配慮と事前の段取り
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="fl-reduce" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          毎年の量を減らすという考え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掃除の効率を上げるより、落ちる量そのものを変えるほうが効く場合があります。
        </p>
        <div className="space-y-4">
          {leafReduce.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          樹種ごとの性質は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが楽な庭木おすすめ
          </Link>
          で、年間の作業の組み立ては
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="fl-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/guide/storm-care/", label: "台風・強風に備える庭木の点検" },
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
          樋や高い位置の作業、落ちる量そのものを減らす枝の整理は、相談する対象です。状態を伝えてみてください。
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
