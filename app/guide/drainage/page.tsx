import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/drainage/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "庭の水はけが悪いときの原因と対処｜水たまり・ぬかるみをどう直すか";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "雨のあと何日も水が引かない、歩くと靴が沈む、植えた木が育たない。庭の水はけの悪さは、土の状態・地面の形・敷地の外側の条件のどれかに原因があります。原因の切り分け方と、対処の選択肢、業者に相談するときの伝え方を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭の水はけが悪くなる原因の切り分けと、対処の選択肢、依頼するときの伝え方を整理しました。",
  },
};

const toc = [
  { id: "drain-check", label: "まず、どこに水が溜まっているかを見る" },
  { id: "drain-causes", label: "水はけが悪くなる4つの原因" },
  { id: "drain-test", label: "自分でできる簡単な確かめ方" },
  { id: "drain-methods", label: "対処の選択肢と、それぞれが効く条件" },
  { id: "drain-plant", label: "植栽を守るという考え方" },
  { id: "drain-order", label: "業者に相談するときの伝え方" },
  { id: "drain-faq", label: "よくある質問" },
];

const causes = [
  {
    h: "土が踏み固められている",
    b: "人がよく通る場所や、駐車・資材置き場として使われた場所は、土の粒の隙間が潰れて水が浸み込みにくくなります。表面だけが濡れて中まで届かないため、少し掘ると下は乾いているということも起こります。芝生が特定の場所だけ薄くなるのも、この状態が原因であることがあります。",
  },
  {
    h: "地面の形が水を集めている",
    b: "庭の一角がまわりより低ければ、そこに水が集まります。建物の基礎まわり、塀ぎわ、隣地との境目は、後から地面を触った結果として低くなっていることがあります。水たまりの位置が毎回同じなら、形の問題を疑います。",
  },
  {
    h: "土の下に水を通さない層がある",
    b: "造成時に締め固められた層や、埋め戻した土の下に残っている固い層があると、上から浸み込んだ水がそこで止まります。表面の土を入れ替えても、下の層が変わらなければ水は抜けません。「土を足したのに直らない」という場合、ここが原因のことがあります。",
  },
  {
    h: "敷地の外から水が入ってくる",
    b: "高低差のある土地では、隣接地や道路から流れ込んだ水が庭に溜まります。自分の庭の中だけを直しても解決しません。どこから水が来ているのかを、雨の最中か直後に確かめる必要があります。",
  },
];

const testSteps = [
  {
    h: "雨のあと、水が引くまでの時間を見る",
    b: "止んでから半日で引くのか、翌日も残っているのか。残る時間が長いほど、表面ではなく土の中や下の層の問題である可能性が高くなります。何日も残る場所は、植栽を置く場所として適しません。",
  },
  {
    h: "穴を掘って水を入れてみる",
    b: "気になる場所に小さな穴を掘り、水を注いで引き方を見ます。すぐ引く場所と、注いだままほとんど減らない場所があれば、庭の中でも条件が違うことが分かります。庭全体が同じ状態だと思い込まないための確認です。",
  },
  {
    h: "掘った土の手ざわりを見る",
    b: "掘った土が粘って団子になるのか、ぽろぽろとほぐれるのか。粘る土は水を抱えやすく、乾くと固くなります。土の性質は対処の選び方に直結します。",
  },
  {
    h: "雨の最中に水の流れを見る",
    b: "水がどこから来て、どこへ向かっているか。降っているときにしか分からない情報です。傘をさして一度見ておくと、原因の切り分けが一気に進みます。",
  },
];

const methods = [
  {
    h: "土を改良する",
    good: "踏み固められている、土が粘る",
    b: "土に隙間をつくり、水と空気が動けるようにします。表面だけを入れ替えても、下が詰まっていれば効果は限られます。どの深さまで手を入れるかで結果が変わる対処です。",
  },
  {
    h: "地面の高さを作り直す",
    good: "同じ場所に必ず水が溜まる",
    b: "水が集まる形になっている場合、水の行き先へ向けて地面の傾きを付け直します。ただし勝手に傾けると、隣地や建物側へ水を送ってしまうことがあります。どこへ流すのかを決めずに形だけ変えるのは避けてください。",
  },
  {
    h: "水の通り道を地中に作る",
    good: "水が抜けない層がある、湿った状態が続く",
    b: "地中に排水の経路を設け、水を逃がす方法です。出口をどこにするかが要で、出口のない経路は意味を持ちません。掘る作業を伴うため、地中の配管や構造物の位置を把握しておく必要があります。",
  },
  {
    h: "水を受ける場所を作る",
    good: "外から水が流れ込む、行き先が確保できない",
    b: "溜まる場所をあらかじめ決めて受け止める考え方です。庭のどこを濡れてよい場所とするかを設計する、という発想になります。",
  },
  {
    h: "地面を覆って使い方を変える",
    good: "歩く場所がぬかるむ",
    b: "水はけそのものを直すのではなく、ぬかるみを踏まずに済むよう通路を整える方法です。根本の解決ではありませんが、生活の支障はすぐに減ります。防草の敷設と併せて検討されることもあります。",
  },
  {
    h: "植える場所を上げる",
    good: "植栽だけを守りたい",
    b: "地面全体を直す代わりに、植える場所を周囲より高くして根を水から離します。庭全体の工事より手をかけずに済む場面があります。",
  },
];

const plantPoints = [
  {
    h: "根が常に濡れていると木は弱る",
    b: "水が引かない場所では、根が息をできない状態が続きます。葉の色が悪い、枝先が枯れ込むといった症状が地面側から来ていることは珍しくありません。木の手入れを重ねても直らない場合、原因は根のまわりにあります。",
  },
  {
    h: "枯れた原因を地上部だけで判断しない",
    b: "同じ場所に植え替えても、条件が変わっていなければ同じ結果になります。植え直す前に、その場所の水の引き方を確かめてください。",
  },
  {
    h: "湿りに耐える植物を選ぶ選択もある",
    b: "地面を直さずに、その条件でも育つ植物へ入れ替えるという考え方です。すべての場所を万能な庭にする必要はありません。",
  },
  {
    h: "芝生の不調との関係を切り分ける",
    b: "芝が特定の場所だけ薄いとき、踏圧が原因のこともあれば、水が溜まっていることが原因のこともあります。同じ手入れを繰り返す前に、どちらなのかを確かめるほうが早く片づきます。",
  },
];

const orderPoints = [
  {
    h: "水たまりの位置と範囲を写真で示す",
    b: "雨の直後に撮った写真が最も役に立ちます。どこに、どのくらいの広さで水が残るのか。晴れた日の写真だけでは、この情報は伝わりません。",
  },
  {
    h: "引くまでにかかる時間を伝える",
    b: "半日なのか、数日なのか。時間の情報は、原因を絞るうえで大きな手がかりになります。",
  },
  {
    h: "地面を触った履歴があれば伝える",
    b: "以前に土を入れた、物置を置いていた、駐車場として使っていた。こうした履歴は、地中の状態を推測する材料になります。",
  },
  {
    h: "水の行き先として使える場所を確認する",
    b: "敷地のどこへ水を流せるのか。ここが決まらないと、どの対処も検討に入れません。隣地へ流すことはできないという前提から考えます。",
  },
  {
    h: "扱える業者かどうかを確かめる",
    b: "庭木の手入れが中心の相手に、地面の造作まで頼めるとは限りません。掲載サービスの中には、造園工事に加えて舗装や排水といった区分でも事業者を探せる窓口があります。どの区分で相談できるかを先に確認してください。",
  },
];

const faqs = [
  {
    q: "土を入れ替えれば水はけは直りますか。",
    a: "表面の土が原因なら改善しますが、下に水を通さない層がある場合や、地面の形が水を集めている場合は、表面だけを入れ替えても戻ります。まず、水が引かない範囲がどこまでなのか、どのくらいの時間で引くのかを確かめてから、手を入れる深さを決めてください。",
  },
  {
    q: "自分でできる対処はありますか。",
    a: "原因を確かめる作業は自分でできます。雨の最中に水の流れを見る、穴を掘って水の引き方を見る、掘った土の性質を見る。ここまで分かっていれば、相談の精度が大きく上がります。狭い範囲の改良や、植える場所を周囲より高くする程度であれば、自分で手を付けられる場合もあります。",
  },
  {
    q: "水の行き先がない場合はどうなりますか。",
    a: "流す先が確保できない場合、庭の中で受け止める、使い方を変えて濡れてよい場所にする、植栽の側を条件に合わせるといった方向になります。隣地や道路へ水を送る形は避けてください。近隣との問題になります。",
  },
  {
    q: "庭木が枯れるのも水はけのせいですか。",
    a: "そうとは限りませんが、根が常に濡れた状態にあると木は弱ります。葉や枝の症状が出ているとき、虫や病気だけでなく地面側の条件も併せて確認してください。症状の見分け方は別ページで扱っています。",
  },
  {
    q: "どの業者に頼めばよいのか分かりません。",
    a: "庭木の手入れと、地面の造作や排水は別の作業です。庭の手入れを頼んでいる相手がそのまま扱えることもあれば、扱えないこともあります。相談の段階で「地面の水はけを直したい」と伝え、その区分の工事を受けられるかどうかを確認してください。",
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
          "庭の水はけが悪くなる原因の切り分けと、対処の選択肢、依頼するときの伝え方を整理しました。",
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
          雨が止んでも水が引かない。歩くと靴が沈む。同じ場所に植えた木が続けて枯れる。
          こうした症状は、植物の手入れをいくら重ねても直りません。原因が地面の側にあるからです。
          このページでは、庭の水はけが悪いときに何が起きているのかを切り分け、対処の選択肢と、相談するときに何を伝えればよいかを整理します。
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
          まず、どこに水が溜まっているかを見る
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「庭の水はけが悪い」と一口に言っても、庭全体が同じ状態であることはむしろ少数です。
          一角だけが乾かないのか、建物ぎわだけが濡れているのか、通路として歩く帯だけがぬかるむのか。溜まる範囲が分かると、疑うべき原因が変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          範囲が狭く、毎回同じ場所なら、地面の形か、その場所の土の状態です。庭全体が乾かないなら、下の層か、敷地の外から入ってくる水を考えます。
          この切り分けをせずに土を入れたり砂利を敷いたりすると、効かない対処に手間をかけることになります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            水はけの問題は、地面を触る工事につながることがあります。だからこそ、原因を確かめないまま着手しないでください。
            確かめる作業そのものは、特別な道具がなくてもできます。
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
          自分でできる簡単な確かめ方
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
          掘る前に、地中に水道管やガス管、電気の配線が通っていないかを確認してください。深く掘る必要がある場合は、自分で進めず相談する対象になります。
        </p>
      </section>

      <section id="drain-methods" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          対処の選択肢と、それぞれが効く条件
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          どれか一つが正解というものではなく、原因に合わせて組み合わせます。合っていない対処を選ぶと、手をかけても状態は変わりません。
        </p>
        <div className="space-y-4">
          {methods.map((m) => (
            <div key={m.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{m.h}</h3>
              <p className="text-sm text-text-muted mb-2 leading-7">向いている状況：{m.good}</p>
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
          で扱っています。
        </p>
      </section>

      <section id="drain-plant" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植栽を守るという考え方
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
          、芝生の一部だけが薄くなる場合は
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れガイド
          </Link>
          を併せて確認してください。
        </p>
      </section>

      <section id="drain-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者に相談するときの伝え方
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/lawn-care/", label: "芝生の手入れガイド" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
            { href: "/service/garden-design/", label: "庭のデザインをプロに依頼する方法" },
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
          地面に手を入れる必要がありそうなら、その区分の工事を受けられるかどうかから確認してみてください。
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
