import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/tree-roots/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "庭木の根が塀・舗装・排水に影響しているとき｜症状の見方と対処の選び方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "駐車場のコンクリートが持ち上がる、ブロック塀にひびが入る、排水の流れが悪い。原因が庭木の根にあることがあります。根はどこまで広がるのか、症状から何を疑うのか、根を切ってよいのか。自分の敷地の中で起きる根の問題を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "根が構造物に影響しているときの症状の見方と、対処の選択肢を整理しました。",
  },
};

const toc = [
  { id: "roots-spread", label: "根は思っているより浅く、広く広がる" },
  { id: "roots-signs", label: "根を疑う4つの症状" },
  { id: "roots-confirm", label: "本当に根なのかを確かめる" },
  { id: "roots-options", label: "対処の選択肢と、向き不向き" },
  { id: "roots-cut", label: "根を切ることのリスク" },
  { id: "roots-prevent", label: "これから植えるならできること" },
  { id: "roots-order", label: "相談するときに伝えること" },
  { id: "roots-faq", label: "よくある質問" },
];

const signs = [
  {
    h: "舗装や敷石が持ち上がる、ひび割れる",
    b: "駐車場のコンクリート、玄関までのアプローチ、敷石の通路。根が下を通ると、成長に伴って少しずつ押し上げます。特徴は、割れ目が木のある方向へ向かって伸びること、そして持ち上がりが年ごとに進むことです。一度に割れるのではなく、去年より段差が大きくなっている、という現れ方をします。",
  },
  {
    h: "ブロック塀や擁壁が傾く、ひびが入る",
    b: "塀ぎわに植えられた木は、根が塀の基礎の下に入り込むことがあります。塀の一部だけが外側へ押されている、木のある側にだけひびが集中している、といった形で現れます。塀の傾きは倒壊の危険につながるため、木の問題である以前に構造の問題として見る必要があります。",
  },
  {
    h: "排水の流れが悪くなる",
    b: "雨水の受け口や排水の経路に根が入り込むと、流れが悪くなります。特徴的なのは、詰まりを取ってもしばらくすると戻ることです。落ち葉やゴミによる詰まりは取れば直りますが、根が原因なら成長とともに再発します。同じ場所で繰り返すかどうかが見分けの手がかりになります。",
  },
  {
    h: "地面が盛り上がる、芝生が凸凹になる",
    b: "木の根元から放射状に、地面が筋状に盛り上がることがあります。芝生の中であれば、その筋に沿って芝が薄くなったり、刈るときに刃が当たったりします。構造物への被害ではありませんが、根が浅い位置を走っているという情報になります。",
  },
];

const confirmItems = [
  {
    h: "木との位置関係を見る",
    b: "症状が出ている場所と木を線で結び、その延長に根の通り道が想像できるか。木から離れるほど別の原因の可能性が高くなりますが、根は幹から遠くまで伸びるため、距離だけでは決められません。",
  },
  {
    h: "進み方が年単位かどうか",
    b: "根によるものは、ゆっくり進みます。地震や土の流出であれば、あるとき急に変わります。いつからそうなっているのか、去年と比べてどうかを思い出してください。以前の写真があれば確実です。",
  },
  {
    h: "ほかの原因を先に外す",
    b: "地面の沈下、締め固めの不足、水による土の流出、施工時の納まり。いずれも同じような症状を出します。特に水が絡む場合は、根ではなく水の側が原因のことがあります。水の動きについては別ページで扱っています。",
  },
  {
    h: "掘って確かめるのは慎重に",
    b: "実際に根かどうかは掘れば分かりますが、地中には水道管やガス管、電気の配線が通っています。構造物のすぐそばを掘るのは、その構造物を弱めることにもつながります。浅く探る以上のことは、相談の対象です。",
  },
];

const options = [
  {
    h: "根を切る・減らす",
    good: "原因の根が特定でき、切っても木の支えが残る",
    b: "押している根を取り除く方法です。効果は直接的ですが、切る位置と量によって木の安定性が変わります。太い根、幹に近い根ほど影響が大きくなります。どこまでなら切れるかは木ごとの判断になり、素人が決められる部分ではありません。",
  },
  {
    h: "根と構造物の間に仕切りを入れる",
    good: "これから直す場所があり、木は残したい",
    b: "根が構造物の下へ入らないよう、間に板状のものを立てて方向を変える考え方です。作り直すタイミングでなければ入れにくいため、舗装や塀をやり直す機会に併せて検討する対処になります。",
  },
  {
    h: "構造物の側を作り直す",
    good: "根を切ると木が危うい、木を残したい",
    b: "木ではなく、壊れた側を根のことを見込んだ作りに変える方法です。持ち上がりを受け流せる納まりにする、根の通り道を避ける、といった形になります。庭木の手入れとは別の工事区分になるため、扱える相手かどうかを確認する必要があります。",
  },
  {
    h: "木を別の場所へ移す",
    good: "木は残したいが、位置が根本的に合っていない",
    b: "根を含めて掘り上げ、離れた場所へ植え直す方法です。木の大きさと種類によってできるかどうかが変わり、移した後に根付くかどうかも確実ではありません。大きくなった木ほど難しくなります。可否は現物を見てもらう必要があります。",
  },
  {
    h: "木そのものを見直す",
    good: "被害が進み、ほかの手が残っていない",
    b: "残す前提を外す判断です。建物や塀の安全に関わる段階まで来ている場合、選択肢に入ります。費用や手順については庭木の伐採費用相場のページで扱っています。",
  },
  {
    h: "何もせず見続ける",
    good: "進みが遅く、実害が出ていない",
    b: "対処しないことも選択です。ただし決めたなら、同じ場所を同じ角度から撮って記録を残してください。進んでいるのかどうかが分からないまま放置するのとは違います。",
  },
];

const cutRisks = [
  {
    h: "支える力が減る",
    b: "根は木を立たせている部分です。片側の根を切れば、その方向への抵抗が落ちます。切った直後は何も起きなくても、強い風が吹いたときに傾くことがあります。風に対する見方は台風・強風のページで扱っています。",
  },
  {
    h: "水と養分の吸収が落ちる",
    b: "細い根は水や養分を吸う役目を持ちます。まとめて失うと、葉が減る、枝先が枯れるといった形で後から現れます。切った直後ではなく、季節が変わってから出てくることがあります。",
  },
  {
    h: "切り口から腐りが入る",
    b: "土の中の切り口は乾きません。太い根を切ると、そこから腐朽が幹の方向へ進むことがあります。外から見えないため、気づいたときには進んでいるという性質のものです。",
  },
  {
    h: "越境した根の場合は前提が変わる",
    b: "隣の敷地から入ってきた根については、法律上の扱いが別に定められています。自分の敷地の中の木か、隣地の木かで考え方が変わるため、境界をまたぐ場合は越境した枝と根のページを先に確認してください。",
  },
];

const preventItems = [
  {
    h: "構造物からの距離を取る",
    b: "植える段階で決まってしまう部分です。塀、基礎、舗装、排水の経路。これらから離すほど、後の問題は起きにくくなります。植えたときの幹の細さではなく、大きくなったときの姿で位置を考えます。",
  },
  {
    h: "大きくなる木は場所を選ぶ",
    b: "地上部が大きくなる木は、根も相応に広がります。狭い場所に高木を植えると、数年後に選択肢がなくなります。品種ごとの性質を見てから決めるほうが確実です。",
  },
  {
    h: "根が浅く広がりやすい種類を把握する",
    b: "根の張り方は種類によって傾向が違います。深く伸びるものもあれば、浅く横へ広がるものもあります。舗装のそばに植えるなら、この違いは効いてきます。",
  },
  {
    h: "土の条件を整えておく",
    b: "深いところが固い、水が抜けないといった条件があると、根は浅い位置へ逃げます。結果として舗装や地面を持ち上げやすくなります。地面の側の条件は、植える前に確かめておく意味があります。",
  },
];

const orderItems = [
  {
    h: "症状の写真と、いつからかを伝える",
    b: "割れている場所、持ち上がっている段差、傾いている塀。近くから撮ったものと、木が一緒に写る位置から撮ったものの両方があると、位置関係が伝わります。",
  },
  {
    h: "木の種類と、植えてからの年数",
    b: "分かる範囲で構いません。種類が分からなければ、葉と幹の写真を添えてください。植えた時期が分かれば、根の広がり具合の見当がつきます。",
  },
  {
    h: "地中に何が通っているかを伝える",
    b: "水道、ガス、排水、電気。図面が残っていれば見せられるようにしておきます。掘る作業を伴う場合、この情報がないと進められません。",
  },
  {
    h: "木を残したいかどうかを先に言う",
    b: "残す前提なのか、場合によっては外してもよいのか。この方針で提案の中身が変わります。決めかねているなら、そう伝えて選択肢を出してもらってください。",
  },
  {
    h: "扱える区分かどうかを確かめる",
    b: "庭木の手入れが中心の相手に、舗装や塀の作り直しまで頼めるとは限りません。木の側と構造物の側、どちらの工事も必要になる場合があるため、どこまで受けられるかを最初に確認してください。",
  },
];

const faqs = [
  {
    q: "駐車場のコンクリートが割れてきました。庭木の根が原因でしょうか。",
    a: "可能性はありますが、それだけでは決められません。根によるものは、割れ目が木のある方向へ向かって伸び、年ごとに段差が進むという特徴があります。一方で、地面の沈下や締め固めの不足、水による土の流出でも同じような症状が出ます。木との位置関係と、いつからそうなっているのかを確かめてから判断してください。",
  },
  {
    q: "邪魔な根を自分で切ってもよいですか。",
    a: "細い根であれば大きな影響は出にくいものの、太い根や幹に近い根を切ると、木を支える力が落ちます。切った直後ではなく、強い風が吹いたときや季節が変わってから影響が現れることがあります。また土の中の切り口は乾かないため、そこから腐りが入ることもあります。どこまでなら切れるかは木ごとに違うため、太いものは相談の対象です。",
  },
  {
    q: "根を切らずに済む方法はありますか。",
    a: "あります。構造物の側を作り直して根を受け流す納まりにする、根と構造物の間に仕切りを入れて方向を変える、木を別の場所へ移す、といった選択肢があります。どれが向いているかは、被害の程度と木の大きさ、そして木を残したいかどうかで変わります。",
  },
  {
    q: "排水の詰まりが何度も起きます。根が入っている可能性はありますか。",
    a: "同じ場所で繰り返し起きるなら、その可能性はあります。落ち葉やゴミによる詰まりは取り除けば直りますが、根が入り込んでいる場合は成長とともに再発します。ただし、そもそも水が引かない状態が原因のこともあります。地面全体の水の動きについては庭の水はけのページで整理しています。",
  },
  {
    q: "隣の家から伸びてきた根はどう扱えばよいですか。",
    a: "自分の敷地の木か、隣地の木かで前提が変わります。境界を越えた根については法律上の扱いが別に定められており、枝とも扱いが異なります。隣家にはみ出した庭木の枝と根のページで整理していますので、そちらを先に確認してください。",
  },
];

export default function TreeRootsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "根が構造物に影響しているときの症状の見方と、対処の選択肢を整理しました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭木の根と構造物" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          駐車場のコンクリートに段差ができている。ブロック塀の一か所だけひびが広がってきた。排水の詰まりを取っても、しばらくすると戻る。
          こうした症状の原因が、庭に植えた木の根であることがあります。地上の姿は変わらないまま、地面の下だけが少しずつ進んでいる状態です。
          このページでは、根を疑うべき症状の見分け方と、分かったときに取れる手を整理します。
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

      <section id="roots-spread" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          根は思っているより浅く、広く広がる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          根が地中深くまっすぐ伸びている、という絵を思い浮かべる人は多いのですが、実際には多くの木で、
          水や空気を得やすい比較的浅い層に根が集まります。そして横方向には、枝が張っている範囲を超えて広がることがあります。
          つまり、木から離れた場所の舗装の下にも、根は届いている可能性があるということです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          根が伸びる方向を決めるのは、土の条件です。深い層が固く締まっていたり、水が抜けなかったりすると、根は浅い位置へ逃げます。
          舗装の下は雨が当たらない代わりに温度と湿りが安定していることがあり、そこへ向かって伸びることもあります。
          結果として、構造物の下を通るかたちで太くなり、押し上げる力になります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            押し上げは、根が動いて起きるのではありません。同じ場所にある根が年ごとに太くなることで起きます。
            だからこそ進みが遅く、気づいたときにはある程度まで進んでいる、という現れ方をします。
          </p>
        </div>
      </section>

      <section id="roots-signs" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          根を疑う4つの症状
        </h2>
        <ol className="space-y-4">
          {signs.map((s, i) => (
            <li key={s.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{s.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="roots-confirm" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          本当に根なのかを確かめる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ症状は、根以外の理由でも起きます。原因を取り違えると、木に手を入れても状態は変わりません。
        </p>
        <div className="space-y-4">
          {confirmItems.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          水が絡む場合の切り分けは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="roots-options" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          対処の選択肢と、向き不向き
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          根を切る以外にも手はあります。木を残したいのかどうかで、選べるものが変わります。
        </p>
        <div className="space-y-4">
          {options.map((o) => (
            <div key={o.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{o.h}</h3>
              <p className="text-sm text-text-muted mb-2 leading-7">向いている状況：{o.good}</p>
              <p className="text-[15px] leading-8 text-text-secondary">{o.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          木を残さない判断に至った場合の進め方は
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採費用相場と業者の選び方
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="roots-cut" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          根を切ることのリスク
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          根を切れば症状は止まりますが、木の側に負担が残ります。切ってから現れるものがあるという点が、判断を難しくします。
        </p>
        <div className="space-y-4">
          {cutRisks.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          風を受けたときの挙動については
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          、境界をまたぐ根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="roots-prevent" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          これから植えるならできること
        </h2>
        <div className="space-y-4">
          {preventItems.map((p) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{p.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          品種ごとの性質は
          <Link href="/plant/symbol-tree/" className="text-primary underline underline-offset-2 mx-1">
            シンボルツリーおすすめ
          </Link>
          と
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが楽な庭木おすすめ
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="roots-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          相談するときに伝えること
        </h2>
        <ol className="space-y-4">
          {orderItems.map((o, i) => (
            <li key={o.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{o.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{o.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="roots-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/guide/storm-care/", label: "台風・強風に備える庭木の点検" },
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/service/felling/", label: "庭木の伐採費用相場と業者の選び方" },
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
          木の側と構造物の側、どちらに手を入れるかで相談先が変わります。まずはどちらも扱えるかを確認してみてください。
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
