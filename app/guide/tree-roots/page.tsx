import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/tree-roots/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "庭木の根が塀・舗装・排水に影響しているとき｜症状の見方と対処の選び方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "駐車場のコンクリートが持ち上がる、ブロック塀にひびが入る、排水の流れが悪いといった症状の原因が、庭木の根にあることがあります。根はどこまで広がるのか、症状から何を疑うべきか、根を切ってよいのかについて、自分の敷地内で生じる根の問題を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "根が構造物に影響している場合の症状の見方と、対処の選択肢を整理しています。",
  },
};

const toc = [
  { id: "roots-spread", label: "根は想定より浅く、広範囲に広がります" },
  { id: "roots-signs", label: "根が原因と考えられる4つの症状" },
  { id: "roots-confirm", label: "原因が根であるかを確認する" },
  { id: "roots-options", label: "対処の選択肢とそれぞれの適否" },
  { id: "roots-cut", label: "根を切ることのリスク" },
  { id: "roots-prevent", label: "これから植栽する場合に行える対策" },
  { id: "roots-order", label: "相談する際に伝える事項" },
  { id: "roots-faq", label: "よくある質問" },
];

const signs = [
  {
    h: "舗装や敷石が持ち上がる、ひび割れる",
    b: "駐車場のコンクリート、玄関までのアプローチ、敷石の通路などで、根が下を通ると、成長に伴って徐々に押し上げます。特徴は、割れ目が木のある方向に向かって伸びること、そして持ち上がりが年ごとに進行することです。一度に割れるのではなく、前年より段差が大きくなっているという形で現れます。",
  },
  {
    h: "ブロック塀や擁壁が傾く、ひびが入る",
    b: "塀際に植えられた木は、根が塀の基礎の下に入り込むことがあります。塀の一部のみが外側へ押されている、木のある側にのみひびが集中しているといった形で現れます。塀の傾きは倒壊の危険につながるため、木の問題である以前に構造の問題として確認する必要があります。",
  },
  {
    h: "排水の流れが悪くなる",
    b: "雨水ますや排水経路に根が入り込むと、流れが悪くなります。特徴的なのは、詰まりを除去してもしばらくすると再発することです。落ち葉やゴミによる詰まりは除去すれば改善しますが、根が原因であれば成長とともに再発します。同じ場所で繰り返すかどうかが判別の手がかりになります。",
  },
  {
    h: "地面が盛り上がる、芝生が凹凸になる",
    b: "木の根元から放射状に、地面が筋状に盛り上がることがあります。芝生の中であれば、その筋に沿って芝が薄くなったり、芝刈りの際に刃が当たったりします。構造物への被害ではありませんが、根が浅い位置を通っていることを示す情報になります。",
  },
];

const confirmItems = [
  {
    h: "木との位置関係を確認する",
    b: "症状が出ている場所と木を線で結び、その延長上に根の通り道が想定できるかを確認します。木から離れるほど別の原因の可能性が高くなりますが、根は幹から遠くまで伸びるため、距離のみでは判断できません。",
  },
  {
    h: "年単位で進行しているかどうか",
    b: "根による症状は、ゆっくりと進行します。地震や土の流出であれば、ある時点で急に変化します。いつからその状態か、前年と比べてどうかを確認してください。以前の写真があれば確実です。",
  },
  {
    h: "他の原因を先に除外する",
    b: "地盤の沈下、締め固めの不足、水による土の流出、施工時の納まりなどは、いずれも同様の症状を生じさせます。特に水が関わる場合は、根ではなく水が原因であることがあります。水の動きについては別のページで解説しています。",
  },
  {
    h: "掘って確認する際は慎重に行う",
    b: "実際に根かどうかは掘れば分かりますが、地中には水道管やガス管、電気の配線が通っています。構造物のすぐそばを掘ることは、その構造物を弱めることにもつながります。浅く確認する以上の作業は、業者に相談すべき対象です。",
  },
];

const options = [
  {
    h: "根を切る・減らす",
    good: "原因の根が特定でき、切っても木の支えが残る",
    b: "押し上げている根を除去する方法です。効果は直接的ですが、切る位置と量によって木の安定性が変わります。太い根、幹に近い根ほど影響が大きくなります。どこまで切れるかは木ごとの判断となり、専門知識のない方が決められる部分ではありません。",
  },
  {
    h: "根と構造物の間に仕切りを設ける",
    good: "これから改修する場所があり、木は残したい",
    b: "根が構造物の下へ入らないよう、間に板状の資材を立てて方向を変える方法です。改修の機会でなければ設置しにくいため、舗装や塀を改修する機会にあわせて検討する対処です。",
  },
  {
    h: "構造物を作り直す",
    good: "根を切ると木が危険になる、木を残したい",
    b: "木ではなく、損傷した構造物を根の影響を見込んだ構造に変える方法です。持ち上がりを吸収できる納まりにする、根の通り道を避けるといった形になります。庭木の手入れとは別の工事区分となるため、対応できる業者かどうかを確認する必要があります。",
  },
  {
    h: "木を別の場所へ移植する",
    good: "木は残したいが、位置が根本的に適していない",
    b: "根を含めて掘り上げ、離れた場所へ植え直す方法です。木の大きさと種類によって可否が変わり、移植後に活着するかどうかも確実ではありません。大きく成長した木ほど難しくなります。可否は現物を確認してもらう必要があります。",
  },
  {
    h: "木そのものを見直す",
    good: "被害が進行し、他の対処方法が残っていない",
    b: "残す前提を外す判断です。建物や塀の安全に関わる段階に至っている場合は、選択肢に含まれます。費用や手順については、庭木の伐採費用相場のページで解説しています。",
  },
  {
    h: "対処せずに経過を観察する",
    good: "進行が遅く、実害が出ていない",
    b: "対処しないことも選択肢の一つです。ただし、その判断をした場合は、同じ場所を同じ角度から撮影して記録を残してください。進行しているかどうかが分からないまま放置することとは異なります。",
  },
];

const cutRisks = [
  {
    h: "支える力が低下する",
    b: "根は木を支えている部分です。片側の根を切れば、その方向への抵抗力が低下します。切った直後は問題がなくても、強風が吹いた際に傾くことがあります。風に対する見方は、台風・強風のページで解説しています。",
  },
  {
    h: "水と養分の吸収が低下する",
    b: "細い根は水や養分を吸収する役割を持ちます。まとめて失うと、葉が減る、枝先が枯れるといった形で後から現れます。切った直後ではなく、季節が変わってから現れることがあります。",
  },
  {
    h: "切り口から腐朽が進む",
    b: "土中の切り口は乾燥しません。太い根を切ると、そこから腐朽が幹の方向へ進むことがあります。外から見えないため、気づいた時点ですでに進行しているという性質のものです。",
  },
  {
    h: "越境した根の場合は前提が変わります",
    b: "隣地から侵入してきた根については、法律上の扱いが別に定められています。自分の敷地内の木か、隣地の木かによって考え方が変わるため、境界をまたぐ場合は、越境した枝と根のページを先にご確認ください。",
  },
];

const preventItems = [
  {
    h: "構造物からの距離を確保する",
    b: "植栽の段階で決まる部分です。塀、基礎、舗装、排水経路から離すほど、後の問題は起きにくくなります。植栽時の幹の細さではなく、成長後の姿で位置を検討します。",
  },
  {
    h: "大きくなる木は場所を選ぶ",
    b: "地上部が大きくなる木は、根も相応に広がります。狭い場所に高木を植えると、数年後に選択肢がなくなります。品種ごとの性質を確認してから決めるほうが確実です。",
  },
  {
    h: "根が浅く広がりやすい種類を把握する",
    b: "根の張り方は種類によって傾向が異なります。深く伸びるものもあれば、浅く横に広がるものもあります。舗装の近くに植える場合は、この違いが影響します。",
  },
  {
    h: "土の条件を整えておく",
    b: "深い層が固い、水が抜けないといった条件があると、根は浅い位置に広がります。その結果、舗装や地面を持ち上げやすくなります。地面の条件は、植栽前に確認しておく意味があります。",
  },
];

const orderItems = [
  {
    h: "症状の写真と発生時期を伝える",
    b: "割れている場所、持ち上がっている段差、傾いている塀を、近接で撮影したものと、木が一緒に写る位置から撮影したものの両方があると、位置関係が伝わります。",
  },
  {
    h: "樹種と植栽からの年数",
    b: "分かる範囲で構いません。樹種が分からなければ、葉と幹の写真を添えてください。植栽時期が分かれば、根の広がり具合の目安がつきます。",
  },
  {
    h: "地中の埋設物を伝える",
    b: "水道、ガス、排水、電気の配管・配線について、図面が残っていれば提示できるようにしておきます。掘削作業を伴う場合、この情報がなければ作業を進められません。",
  },
  {
    h: "木を残したいかどうかを先に伝える",
    b: "残す前提なのか、場合によっては撤去してもよいのかという方針によって、提案の内容が変わります。決めかねている場合は、その旨を伝えて選択肢を提示してもらってください。",
  },
  {
    h: "対応できる工事区分かどうかを確認する",
    b: "庭木の手入れが中心の業者に、舗装や塀の作り直しまで依頼できるとは限りません。木と構造物の両方の工事が必要になる場合があるため、どこまで対応できるかを最初にご確認ください。",
  },
];

const faqs = [
  {
    q: "駐車場のコンクリートが割れてきました。庭木の根が原因でしょうか。",
    a: "可能性はありますが、それのみでは判断できません。根による症状には、割れ目が木のある方向に向かって伸び、年ごとに段差が進行するという特徴があります。一方で、地盤の沈下や締め固めの不足、水による土の流出でも同様の症状が出ます。木との位置関係と、いつからその状態かを確認してから判断してください。",
  },
  {
    q: "邪魔な根を自分で切ってもよいですか。",
    a: "細い根であれば大きな影響は出にくいものの、太い根や幹に近い根を切ると、木を支える力が低下します。切った直後ではなく、強風が吹いた際や季節が変わってから影響が現れることがあります。また、土中の切り口は乾燥しないため、そこから腐朽が進むこともあります。どこまで切れるかは木ごとに異なるため、太い根は業者に相談すべき対象です。",
  },
  {
    q: "根を切らずに済む方法はありますか。",
    a: "あります。構造物を作り直して根の影響を吸収できる納まりにする、根と構造物の間に仕切りを設けて方向を変える、木を別の場所へ移植するといった選択肢があります。どれが適しているかは、被害の程度と木の大きさ、木を残したいかどうかによって異なります。",
  },
  {
    q: "排水の詰まりが何度も起きます。根が入っている可能性はありますか。",
    a: "同じ場所で繰り返し発生する場合は、その可能性があります。落ち葉やゴミによる詰まりは除去すれば改善しますが、根が入り込んでいる場合は成長とともに再発します。ただし、そもそも水が引かない状態が原因の場合もあります。地面全体の水の動きについては、庭の水はけのページで解説しています。",
  },
  {
    q: "隣の家から伸びてきた根はどう扱えばよいですか。",
    a: "自分の敷地内の木か、隣地の木かによって前提が変わります。境界を越えた根については法律上の扱いが別に定められており、枝とも扱いが異なります。隣家にはみ出した庭木の枝と根のページで解説していますので、そちらを先にご確認ください。",
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
          "根が構造物に影響している場合の症状の見方と、対処の選択肢を整理しています。",
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
          駐車場のコンクリートに段差ができている、ブロック塀の一か所のみひびが広がってきた、排水の詰まりを除去してもしばらくすると再発するといった症状があります。
          こうした症状の原因が、庭に植えた木の根であることがあります。地上の外観は変わらないまま、地中のみで徐々に進行している状態です。
          本ページでは、根が原因と考えられる症状の見分け方と、原因が判明した場合に取れる対処を整理します。
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
          根は想定より浅く、広範囲に広がります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          根は地中深くまっすぐ伸びているという印象を持つ方は多いものの、実際には多くの木で、
          水や空気を得やすい比較的浅い層に根が集まります。そして横方向には、枝が張っている範囲を超えて広がることがあります。
          つまり、木から離れた場所の舗装の下にも、根が届いている可能性があります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          根が伸びる方向は、土の条件によって決まります。深い層が固く締まっていたり、水が抜けなかったりすると、根は浅い位置に広がります。
          舗装の下は雨が当たらない一方で温度と湿度が安定していることがあり、その方向へ伸びることもあります。
          その結果、構造物の下を通る形で太くなり、押し上げる力となります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            押し上げは、根が移動して起きるのではありません。同じ場所にある根が年ごとに太くなることで起きます。
            そのため進行が遅く、気づいた時点である程度進行しているという形で現れます。
          </p>
        </div>
      </section>

      <section id="roots-signs" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          根が原因と考えられる4つの症状
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
          原因が根であるかを確認する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同様の症状は、根以外の原因でも生じます。原因を取り違えると、木に手を加えても状態は改善しません。
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
          水が関わる場合の切り分けは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="roots-options" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          対処の選択肢とそれぞれの適否
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          根を切る以外にも対処方法はあります。木を残したいかどうかによって、選べる方法が変わります。
        </p>
        <div className="space-y-4">
          {options.map((o) => (
            <div key={o.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{o.h}</h3>
              <p className="text-sm text-text-muted mb-2 leading-7">適している状況：{o.good}</p>
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
          根を切れば症状の進行は止まりますが、木に負担が残ります。切った後に現れる影響があるという点が、判断を難しくします。
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
          風を受けた際の挙動については
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          、境界をまたぐ根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="roots-prevent" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          これから植栽する場合に行える対策
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
            シンボルツリーのおすすめ
          </Link>
          と
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが容易な庭木のおすすめ
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="roots-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          相談する際に伝える事項
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
          関連ページ
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
          木と構造物のどちらに手を加えるかによって相談先が変わります。まずは両方に対応できるかをご確認ください。
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
