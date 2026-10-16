import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/fallen-leaves/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "落ち葉が多い庭の手入れ｜溜めない集め方と、雨樋・側溝・隣家への配慮";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "落ち葉が問題となるのは、庭の外に出た場合です。雨樋と側溝、隣家の敷地、道路と車両などが該当します。溜まりやすい場所の確認方法、集め方と道具、廃棄せずに活用する場合の条件、毎年の量を減らす考え方を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "落ち葉が溜まる場所の確認方法と、集め方・活用方法・近隣への配慮を整理しています。",
  },
};

const toc = [
  { id: "fl-outside", label: "落ち葉が問題となるのは庭の外に出た場合です" },
  { id: "fl-timing", label: "まとめて一度に行うか、こまめに複数回行うか" },
  { id: "fl-tools", label: "集め方と道具の選び方" },
  { id: "fl-use", label: "廃棄せずに活用する場合の条件" },
  { id: "fl-neighbor", label: "近隣との間で生じやすい問題" },
  { id: "fl-reduce", label: "毎年の量を減らすという考え方" },
  { id: "fl-faq", label: "よくある質問" },
];

const problemSpots = [
  {
    h: "雨樋",
    b: "屋根に落ちた葉が雨樋に集まり、流れを塞ぎます。詰まると雨水があふれて外壁を伝い、地面の一点に落ち続けることになります。屋根の上や高所の雨樋の清掃は、庭の手入れの範囲を超える作業です。濡れた屋根に自分で登ることは特に危険です。",
  },
  {
    h: "側溝と排水の受け口",
    b: "地面にある雨水の受け口が塞がると、水が引かずに庭や通路に溜まります。落葉の時期に水たまりが増えた場合は、水はけそのものより、まず受け口の上をご確認ください。",
  },
  {
    h: "隣家の敷地",
    b: "風で飛んで入る場合と、自宅の木から直接落ちる場合のいずれもあります。これは清掃の問題であると同時に、近隣との関係に関わる問題です。",
  },
  {
    h: "道路と歩道",
    b: "濡れた落ち葉は滑りやすくなります。自転車や歩行者が通る場所に積もっている状態は、外観の問題にとどまりません。側溝の上に積もると、降雨時に水が流れなくなります。",
  },
  {
    h: "駐車場所と車両",
    b: "濡れた葉は車体に貼り付き、乾くと跡が残ることがあります。自分の車であれば自分で洗浄すれば済みますが、隣家の車の場合は対応が異なります。",
  },
];

const leafTiming = [
  {
    h: "濡れる前に取り除く",
    b: "乾いた葉は軽く、集めやすく、まとめやすいものです。濡れると重くなり、地面に貼り付き、袋も重くなります。雨の予報が出ている場合は、その前に一度取り除いておくだけで、作業量が大きく変わります。",
  },
  {
    h: "溜まりやすい場所を把握しておく",
    b: "落ち葉は均等には積もりません。風向きと建物の形状により、毎年同じ場所に吹き溜まります。壁際、門の内側、植え込みの陰、階段の下などです。これらの場所のみを確認すれば、庭全体を回る必要はありません。",
  },
  {
    h: "水の通り道は落葉を待たずに清掃する",
    b: "雨樋、側溝、受け口は、「すべて落ちてから」では遅く、落葉が続いている期間中も確認すべき対象です。反対に、この三か所を押さえておけば、その他はまとめて清掃すれば足ります。",
  },
  {
    h: "落葉が終わる時期は木によって異なります",
    b: "同じ庭でも、早く落葉が終わる木と、長期間落葉が続く木があります。一度片づけても再び積もるのは、清掃が不十分なのではなく、まだ落葉している木があるためです。どの木がいつまで落葉するかを一年間確認しておくと、翌年から清掃の回数を決めやすくなります。",
  },
];

const leafTools = [
  {
    h: "熊手とほうき",
    b: "最も汎用性の高い道具です。熊手は広い面をまとめるのに適し、ほうきは硬い舗装面や隅を掃くのに適しています。芝生の上では、爪の細かい熊手のほうが芝を傷めにくくなります。",
  },
  {
    h: "送風機",
    b: "広い面を一度に寄せられますが、作業音が出ること、粉じんが舞うこと、隣家の敷地へ飛ばしてしまう可能性があることが制約となります。使用する場合は時間帯を選び、境界から内側へ向けて寄せる方向で使用します。",
  },
  {
    h: "砂利と植え込みの中",
    b: "最も取り除きにくい場所です。熊手を強くかけると砂利ごと動き、送風機を使うと砂利が飛散します。手で取るか、細い道具で拾うことになるため、溜め込まないほうが結果として手間が少なくなります。",
  },
  {
    h: "濡れた葉と貼り付いた葉",
    b: "乾かしてから取り除くほうが早く済みますが、舗装に貼り付いたまま乾いたものは残ります。デッキや石の上に長期間放置すると、跡が残ったり、滑りやすくなったりします。水の通り道と歩く場所は、濡れているうちに取り除きます。",
  },
];

const leafUse = [
  {
    h: "木の根元に敷く",
    b: "地面を覆うと、乾燥しにくくなり、温度の変化も緩やかになります。幹に密着させると幹が蒸れるため、根元から少し離して敷きます。厚く積みすぎると水が浸透しなくなるため、地面が見えなくなる程度で十分です。",
  },
  {
    h: "積み上げて堆肥化する",
    b: "囲いを設けて積み上げ、時間をかけて分解させる方法があります。場所を取ること、時間がかかること、積んだ場所に虫や小動物が集まることは前提となります。住宅の壁際や、隣地との境界には置かないことをおすすめします。",
  },
  {
    h: "症状の出た葉は混ぜない",
    b: "斑点が出ていた葉、白い付着物があった葉、虫の食害が目立った葉は、敷いたり積んだりする対象から除外します。翌年、同じ木の根元に病害虫が戻ることになります。",
  },
  {
    h: "置き場所の条件を事前に決める",
    b: "風で散らない場所か、水が流れ込む場所ではないか、通路を塞がないかを確認します。積んだ後に移動するのは手間がかかるため、事前に決めておきます。",
  },
];

const leafNeighbor = [
  {
    h: "自宅の木から落葉していると分かっている場合",
    b: "把握している場合は、事前に一言伝えるかどうかで受け取られ方が変わります。清掃に伺うかどうかは相手の意向にもよるため、「気づいた際はお声がけください」と伝えておく方法もあります。何も伝えないまま毎年続くことが、最も問題がこじれる形です。",
  },
  {
    h: "清掃の時間帯と作業音",
    b: "早朝や夜間の清掃は、静かに行っているつもりでも音が響きます。送風機を使用する場合は特に、時間帯を選びます。",
  },
  {
    h: "集めた葉の置き場所",
    b: "袋にまとめたものを道路際に置いたまま日数が経過すると、破れて散乱し、雨で重くなります。収集日と、それまでの置き場所を決めてから集め始めます。",
  },
  {
    h: "量が多い年に相談する場合は早めに",
    b: "落葉の時期は、庭の作業の依頼が集中する時期でもあります。まとめて片づけを依頼したい場合、落葉が終わってから探し始めると日程を確保しにくくなります。",
  },
];

const leafReduce = [
  {
    h: "枝の量を減らす",
    b: "葉の総量は枝の量で決まります。大きくなりすぎた木の枝を整理すると、落葉量も減ります。ただし、木ごとに適した時期と剪定方法があるため、量を減らす目的のみで判断しないでください。",
  },
  {
    h: "落葉する場所を変える",
    b: "道路側や隣地側に張り出している枝を整理すると、落葉する場所が自分の敷地内に寄ります。全体を小さくするより、方向を絞るほうが木への負担も少なく済みます。",
  },
  {
    h: "落葉しても支障のない場所をつくる",
    b: "取り除きにくい場所と取り除きやすい場所があります。砂利や植え込みの中は取り除きにくく、平らな地面や芝の上は集めやすい場所です。木の下の地面をどのように整備するかによって、毎年の手間が変わります。",
  },
  {
    h: "植え替えを検討する場合",
    b: "毎年の量が管理しきれない、雨樋や隣地の問題が繰り返されるといった場合は、木自体を見直すという判断もあります。これから植栽する場合は、落葉樹かどうかと、成長後の大きさを見込んで場所を決めます。",
  },
];

const faqs = [
  {
    q: "隣の木から落ちてくる葉は、誰が片づけるのですか。",
    a: "落ちた葉そのものの扱いは、越境した枝の扱いとは別の問題です。実際には、落ちた側が片づけていることが通常です。ただし、量が多く毎年続く場合は、相手に状況を伝え、枝の整理を相談するという進め方があります。枝や根が境界を越えている場合の規定は、別のページで解説しています。",
  },
  {
    q: "雨樋に葉が詰まっているようです。自分で掃除できますか。",
    a: "屋根の上や高所の雨樋の作業は、庭の手入れの範囲を超えます。濡れた屋根は特に滑りやすいため、自分で登ることは避けてください。地上から届く範囲の受け口や側溝であれば自分で清掃できますが、高さのあるものは、対応できる業者に依頼してください。原因が庭木であっても、建物の上の作業は別の相談先となる場合があります。",
  },
  {
    q: "集めた落ち葉はどう処分すればよいですか。",
    a: "自治体の回収に出す、処理施設へ持ち込む、作業を依頼した業者に引き取ってもらう、庭の中で活用するといった選択肢があります。出せる量やまとめ方の規定は自治体によって異なるため、お住まいの市区町村の案内でご確認ください。庭で焼却する方法は取らないでください。",
  },
  {
    q: "送風で寄せる道具を使ってもよいですか。",
    a: "使用できますが、作業音が出ること、粉じんが舞うこと、隣家の敷地へ飛ばしてしまう可能性があることが制約となります。時間帯を選び、境界から内側へ向けて寄せる方向で使用してください。砂利の上では砂利まで飛散するため、適していません。",
  },
  {
    q: "落ち葉を庭に敷きっぱなしにすると木に悪いですか。",
    a: "適度に敷く分には、地面が乾燥しにくくなり、温度の変化も緩やかになります。注意すべき点は三つです。幹に密着させないこと、水が浸透しないほど厚く積まないこと、斑点や白い付着物、虫の食害が目立った葉は混ぜないことです。症状の出た葉を敷くと、翌年再び同じ木の根元に病害虫が戻ります。",
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
          "落ち葉が庭の外へ出た場合に生じる問題と、集め方・活用方法・量を減らす考え方を整理しています。",
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
          庭に落ちている落ち葉は、急いで片づける必要のないものです。問題となるのは、庭の外に出た場合と、水の通り道を塞いだ場合です。雨樋が詰まる、側溝から水があふれる、隣家の敷地に入る、駐車している車に貼り付くといった問題は、清掃の手間そのものより対応が難しくなります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、どこに溜まると問題になるのか、集め方をどのように計画するか、廃棄せずに活用する場合の条件、毎年の量を減らす考え方を整理します。
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
          落ち葉が問題となるのは庭の外に出た場合です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          優先順位を付けるために、まず「放置すると問題となる場所」を把握します。庭の中央に積もっている分は、後回しで構いません。
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
          で解説しています。
        </p>
      </section>

      <section id="fl-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          まとめて一度に行うか、こまめに複数回行うか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          すべて落葉してから一度に片づけるほうが効率的に思えますが、場所によってはそれでは間に合いません。
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
          場所によって、使用できる道具が異なります。
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
          廃棄せずに活用する場合の条件
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          集めた葉をすべて廃棄する必要はありません。ただし、条件を満たさない場合は逆効果となります。
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
          庭に置かずに処分する方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で、症状の出た葉の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="fl-neighbor" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          近隣との間で生じやすい問題
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          落ち葉は、庭の作業の中でも近隣との問題になりやすいものです。落葉させる側にも、受ける側にもなり得ます。
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
          で解説しています。作業日の近隣への配慮は
          <Link href="/area/saitama/" className="text-primary underline underline-offset-2 mx-1">
            作業日の近隣への配慮と事前の段取り
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="fl-reduce" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          毎年の量を減らすという考え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          清掃の効率を上げるより、落葉量そのものを変えるほうが効果的な場合があります。
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
            手入れが容易な庭木のおすすめ
          </Link>
          で、年間の作業計画は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
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
          関連ページ
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
          雨樋や高所の作業、落葉量そのものを減らす枝の整理は、業者に相談すべき作業です。状態を伝えて相談することをおすすめします。
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
