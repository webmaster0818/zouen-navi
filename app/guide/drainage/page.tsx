import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/drainage/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "庭の水はけが悪いときの原因と対処｜水たまり・ぬかるみの改善方法";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "雨の後に何日も水が引かない、歩くと靴が沈む、植えた木が育たないといった庭の水はけの悪さは、土の状態・地面の形状・敷地外の条件のいずれかに原因があります。原因の切り分け方と対処の選択肢、業者に相談する際の伝え方を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭の水はけが悪くなる原因の切り分けと、対処の選択肢、依頼する際の伝え方を整理しています。",
  },
};

const toc = [
  { id: "drain-check", label: "最初に水が溜まっている場所を確認する" },
  { id: "drain-causes", label: "水はけが悪くなる4つの原因" },
  { id: "drain-test", label: "自分で行える簡単な確認方法" },
  { id: "drain-methods", label: "対処の選択肢とそれぞれが有効な条件" },
  { id: "drain-plant", label: "植栽を保護するという考え方" },
  { id: "drain-order", label: "業者に相談する際の伝え方" },
  { id: "drain-faq", label: "よくある質問" },
];

const causes = [
  {
    h: "土が踏み固められている",
    b: "人がよく通る場所や、駐車場・資材置き場として使用された場所は、土の粒の隙間が潰れて水が浸透しにくくなります。表面のみが濡れて内部まで届かないため、少し掘ると下は乾いていることもあります。芝生が特定の場所のみ薄くなるのも、この状態が原因である場合があります。",
  },
  {
    h: "地面の形状が水を集めている",
    b: "庭の一角が周囲より低ければ、そこに水が集まります。建物の基礎まわり、塀際、隣地との境界は、後から地面に手を加えた結果として低くなっていることがあります。水たまりの位置が毎回同じであれば、地形の問題が考えられます。",
  },
  {
    h: "土の下に水を通さない層がある",
    b: "造成時に締め固められた層や、埋め戻した土の下に残っている固い層があると、上から浸透した水がそこで止まります。表面の土を入れ替えても、下の層が変わらなければ水は抜けません。「土を足したのに改善しない」場合は、この層が原因であることがあります。",
  },
  {
    h: "敷地外から水が流入している",
    b: "高低差のある土地では、隣接地や道路から流れ込んだ水が庭に溜まります。自分の庭の中だけを改修しても解決しません。どこから水が流入しているのかを、降雨中または降雨直後に確認する必要があります。",
  },
];

const testSteps = [
  {
    h: "降雨後に水が引くまでの時間を確認する",
    b: "雨が止んでから半日で引くのか、翌日も残っているのかを確認します。残る時間が長いほど、表面ではなく土中や下層の問題である可能性が高くなります。何日も水が残る場所は、植栽に適していません。",
  },
  {
    h: "穴を掘って水を注いでみる",
    b: "気になる場所に小さな穴を掘り、水を注いで引き方を確認します。すぐに引く場所と、ほとんど減らない場所があれば、庭の中でも条件が異なることが分かります。庭全体が同じ状態であると思い込まないための確認です。",
  },
  {
    h: "掘った土の手触りを確認する",
    b: "掘った土が粘って固まるのか、ほぐれやすいのかを確認します。粘る土は水を保持しやすく、乾くと固くなります。土の性質は、対処方法の選択に直結します。",
  },
  {
    h: "降雨中に水の流れを確認する",
    b: "水がどこから来て、どこへ向かっているかは、降雨中にしか分からない情報です。一度確認しておくと、原因の切り分けが大きく進みます。",
  },
];

const methods = [
  {
    h: "土を改良する",
    good: "踏み固められている、土が粘る",
    b: "土に隙間をつくり、水と空気が移動できるようにします。表面のみを入れ替えても、下層が詰まっていれば効果は限られます。どの深さまで改良するかによって結果が変わる対処です。",
  },
  {
    h: "地面の高さを作り直す",
    good: "同じ場所に必ず水が溜まる",
    b: "水が集まる形状になっている場合は、水の排出先に向けて地面の勾配を付け直します。ただし、無計画に勾配を付けると、隣地や建物側へ水を流してしまうことがあります。排出先を決めずに形状のみを変えることは避けてください。",
  },
  {
    h: "地中に排水経路を設ける",
    good: "水が抜けない層がある、湿った状態が続く",
    b: "地中に排水の経路を設け、水を逃がす方法です。出口の位置が重要であり、出口のない経路は意味を持ちません。掘削を伴うため、地中の配管や構造物の位置を把握しておく必要があります。",
  },
  {
    h: "水を受け止める場所を設ける",
    good: "外から水が流れ込む、排出先を確保できない",
    b: "水が溜まる場所をあらかじめ決めて受け止める考え方です。庭のどこを濡れてもよい場所とするかを設計するという発想になります。",
  },
  {
    h: "地面を覆い、使い方を変える",
    good: "歩く場所がぬかるむ",
    b: "水はけそのものを改善するのではなく、ぬかるみを踏まずに済むよう通路を整備する方法です。根本的な解決ではありませんが、生活上の支障はすぐに軽減されます。防草シートの敷設とあわせて検討されることもあります。",
  },
  {
    h: "植栽する場所を高くする",
    good: "植栽のみを保護したい",
    b: "地面全体を改修する代わりに、植栽する場所を周囲より高くして根を水から離します。庭全体の工事より手間をかけずに済む場面があります。",
  },
];

const plantPoints = [
  {
    h: "根が常に濡れていると木は弱ります",
    b: "水が引かない場所では、根が呼吸できない状態が続きます。葉の色が悪い、枝先が枯れ込むといった症状が、地面側の原因によるものであることは珍しくありません。木の手入れを重ねても改善しない場合は、原因が根の周辺にあります。",
  },
  {
    h: "枯れた原因を地上部のみで判断しない",
    b: "同じ場所に植え替えても、条件が変わっていなければ同じ結果になります。植え直す前に、その場所の水の引き方をご確認ください。",
  },
  {
    h: "湿潤に耐える植物を選ぶ選択肢もあります",
    b: "地面を改修せずに、その条件でも育つ植物へ入れ替えるという考え方です。庭のすべての場所をあらゆる植物に適した状態にする必要はありません。",
  },
  {
    h: "芝生の不調との関係を切り分ける",
    b: "芝が特定の場所のみ薄い場合、踏圧が原因のこともあれば、水が溜まっていることが原因のこともあります。同じ手入れを繰り返す前に、どちらが原因かを確認するほうが早く解決します。",
  },
];

const orderPoints = [
  {
    h: "水たまりの位置と範囲を写真で示す",
    b: "降雨直後に撮影した写真が最も有用です。どこに、どの程度の広さで水が残るのかは、晴天時の写真のみでは伝わりません。",
  },
  {
    h: "水が引くまでの時間を伝える",
    b: "半日なのか数日なのかという時間の情報は、原因を絞り込むうえで重要な手がかりになります。",
  },
  {
    h: "地面に手を加えた履歴があれば伝える",
    b: "以前に土を入れた、物置を置いていた、駐車場として使用していたといった履歴は、地中の状態を推測する材料になります。",
  },
  {
    h: "排水先として使える場所を確認する",
    b: "敷地のどこへ水を流せるのかが決まらなければ、どの対処も検討できません。隣地へ流すことはできないという前提で検討します。",
  },
  {
    h: "対応できる業者かどうかを確認する",
    b: "庭木の手入れが中心の業者に、地面の造成まで依頼できるとは限りません。掲載サービスの中には、造園工事に加えて舗装や排水といった区分でも業者を探せる窓口があります。どの区分で相談できるかを事前にご確認ください。",
  },
];

const faqs = [
  {
    q: "土を入れ替えれば水はけは直りますか。",
    a: "表面の土が原因であれば改善しますが、下層に水を通さない層がある場合や、地面の形状が水を集めている場合は、表面のみを入れ替えても元に戻ります。まず、水が引かない範囲がどこまでか、どの程度の時間で引くのかを確認してから、改良する深さを決めてください。",
  },
  {
    q: "自分でできる対処はありますか。",
    a: "原因を確認する作業は自分で行えます。降雨中に水の流れを確認する、穴を掘って水の引き方を確認する、掘った土の性質を確認するといった作業です。これらが分かっていれば、相談の精度が大きく向上します。狭い範囲の改良や、植栽する場所を周囲より高くする程度であれば、自分で対応できる場合もあります。",
  },
  {
    q: "水の行き先がない場合はどうなりますか。",
    a: "排水先を確保できない場合は、庭の中で水を受け止める、使い方を変えて濡れてもよい場所にする、植栽を条件に合わせるといった方向での対処になります。隣地や道路へ水を流す形は避けてください。近隣との問題につながります。",
  },
  {
    q: "庭木が枯れるのも水はけのせいですか。",
    a: "必ずしもそうではありませんが、根が常に濡れた状態にあると木は弱ります。葉や枝に症状が出ている場合は、害虫や病気だけでなく、地面側の条件もあわせてご確認ください。症状の見分け方は別のページで解説しています。",
  },
  {
    q: "どの業者に頼めばよいのか分かりません。",
    a: "庭木の手入れと、地面の造成や排水は別の作業です。庭の手入れを依頼している業者がそのまま対応できる場合もあれば、対応できない場合もあります。相談の段階で「地面の水はけを改善したい」と伝え、その区分の工事に対応できるかどうかをご確認ください。",
  },
];

export default function DrainagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭の水はけが悪くなる原因の切り分けと、対処の選択肢、依頼する際の伝え方を整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭の水はけ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          雨が止んでも水が引かない、歩くと靴が沈む、同じ場所に植えた木が続けて枯れるといった症状があります。
          これらの症状は、植物の手入れをいくら重ねても改善しません。原因が地面の側にあるためです。
          本ページでは、庭の水はけが悪い場合に何が起きているのかを切り分け、対処の選択肢と、相談する際に伝えるべき事項を整理します。
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

      <section id="drain-check" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          最初に水が溜まっている場所を確認する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「庭の水はけが悪い」といっても、庭全体が同じ状態であることはむしろ少数です。
          一角のみが乾かないのか、建物際のみが濡れているのか、通路として歩く部分のみがぬかるむのかによって、考えられる原因が変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          範囲が狭く、毎回同じ場所であれば、地面の形状か、その場所の土の状態が原因です。庭全体が乾かない場合は、下層の問題か、敷地外から流入する水が考えられます。
          この切り分けをせずに土を入れたり砂利を敷いたりすると、効果のない対処に手間をかけることになります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            水はけの問題は、地面に手を加える工事につながることがあります。そのため、原因を確認しないまま着手しないでください。
            原因の確認作業そのものは、特別な道具がなくても行えます。
          </p>
        </div>
      </section>

      <section id="drain-causes" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          水はけが悪くなる4つの原因
        </h2>
        <ol className="space-y-4">
          {causes.map((c, i) => (
            <li key={c.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{c.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="drain-test" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分で行える簡単な確認方法
        </h2>
        <div className="space-y-4">
          {testSteps.map((t) => (
            <div key={t.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{t.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{t.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          掘削の前に、地中に水道管やガス管、電気の配線が通っていないかをご確認ください。深く掘る必要がある場合は、自分で進めず業者に相談してください。
        </p>
      </section>

      <section id="drain-methods" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          対処の選択肢とそれぞれが有効な条件
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          いずれか一つが正解というものではなく、原因に合わせて組み合わせます。原因に合わない対処を選ぶと、手間をかけても状態は変わりません。
        </p>
        <div className="space-y-4">
          {methods.map((m) => (
            <div key={m.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{m.h}</h3>
              <p className="text-sm text-text-muted mb-2 leading-7">適している状況：{m.good}</p>
              <p className="text-[15px] leading-8 text-text-secondary">{m.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          歩く場所のぬかるみ対策として砂利を敷く場合の手順は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          、雑草対策と兼ねる場合の考え方は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="drain-plant" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植栽を保護するという考え方
        </h2>
        <div className="space-y-4">
          {plantPoints.map((p) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{p.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          葉や枝に症状が出ている場合の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気
          </Link>
          、芝生の一部のみが薄くなる場合は
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れガイド
          </Link>
          をあわせてご確認ください。
        </p>
      </section>

      <section id="drain-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者に相談する際の伝え方
        </h2>
        <ol className="space-y-4">
          {orderPoints.map((o, i) => (
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

      <section id="drain-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/lawn-care/", label: "芝生の手入れガイド" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
            { href: "/service/garden-design/", label: "庭のデザインを専門家に依頼する方法" },
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
          地面に手を加える必要がある場合は、その区分の工事に対応できるかどうかから確認することをおすすめします。
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
