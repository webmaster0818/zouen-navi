import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/weed-control/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";
const TITLE = "庭の雑草対策｜防草シート・グランドカバー・除草の選び方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "抜いても繰り返し生えてくる庭の雑草は、対策の種類を場所ごとに選ぶことで手間が変わります。防草シート・砂利・グランドカバー・除草剤・草刈りの適否と、施工で失敗しやすい点を解説します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "防草シート・グランドカバー・除草剤・草刈りを、庭の場所ごとに選ぶための要点を整理しています。",
  },
};

const toc = [
  { id: "weed-why", label: "抜いても生えてくる理由" },
  { id: "weed-methods", label: "5つの対策とそれぞれが有効な場所" },
  { id: "weed-matrix", label: "場所別の対策の選び方" },
  { id: "weed-sheet", label: "防草シートで失敗しやすい点" },
  { id: "weed-timing", label: "対策を講じる時期の考え方" },
  { id: "weed-pro", label: "自分で行う範囲と、業者に任せたほうがよい範囲" },
  { id: "weed-faq", label: "よくある質問" },
];

const methods = [
  {
    h: "手で抜く（手取り除草）",
    good: "狭い範囲、花壇の中、根ごと確実に取り除きたい場所",
    bad: "広い面積、繰り返し生える場所",
    b: "根まで除去できることが最大の利点です。特に地下茎で広がる種類の雑草は、地上部のみ刈っても再生するため、抜くことに意味があります。ただし、面積が広くなると現実的ではありません。雨の後など土が湿っている時のほうが、根ごと抜けやすくなります。",
  },
  {
    h: "刈る（草刈り）",
    good: "広い面積、伸びすぎた状態のリセット",
    bad: "根本的な解決を求める場面",
    b: "短時間で外観を回復できる方法ですが、根は残るため必ず再生します。広い庭では「刈って維持する」という前提で回数を計画に組み込むか、刈った後に別の対策へ移行するかを決めておきます。",
  },
  {
    h: "覆う（防草シート）",
    good: "駐車場周辺、通路、砂利敷きの下、当面使用する予定のない区画",
    bad: "植栽と混在する場所、頻繁に掘り返す場所",
    b: "光を遮って発芽を抑える方法です。効果は高い一方、施工の丁寧さによって結果が大きく変わります。シートの上に砂利などを敷いて紫外線から保護すると、耐用期間が変わります。",
  },
  {
    h: "植える（グランドカバー）",
    good: "外観も兼ねたい場所、樹木の株元、花壇の周囲",
    bad: "雑草を完全になくしたい場所",
    b: "地面を這う植物で覆い、雑草が入り込む余地を減らす方法です。緑を保ちながら手間を減らせますが、植えた植物自体の管理は必要になります。広がりすぎる種類もあるため、範囲を区切れるかどうかを事前に検討します。",
  },
  {
    h: "薬剤を使う（除草剤）",
    good: "手が届きにくい場所、広い面積の初期処理",
    bad: "残したい植物のすぐ近く、家庭菜園の周囲",
    b: "製品によって性質が大きく異なります。葉にかけて枯らすものと、土壌に作用して発芽を抑えるものがあり、使用する場所も方法も異なります。必ず製品の表示を確認し、使用場所・対象・使用方法の条件に従ってください。残したい植物やペットの動線が近い場所では、慎重に判断する必要があります。",
  },
];

const placeMatrix = [
  {
    place: "駐車場周辺・通路",
    choice: "防草シート＋砂利や舗装",
    note: "人が歩く場所で植栽もないため、覆ってしまうことが最も手間を減らせます。",
  },
  {
    place: "花壇・植栽の足元",
    choice: "手取り＋グランドカバー",
    note: "残したい植物が近く、シートも薬剤も使用しにくい場所です。植物で地面を覆います。",
  },
  {
    place: "庭の広い空き地",
    choice: "草刈りでリセットしてから、シートかグランドカバーへ移行",
    note: "まず刈って状態を揃えなければ、どの対策も施工しにくくなります。",
  },
  {
    place: "建物と塀の隙間",
    choice: "防草シート＋砂利",
    note: "手が入りにくく、放置すると湿気もこもります。最初に覆っておく価値が高い場所です。",
  },
  {
    place: "芝生の中",
    choice: "手取りと、芝の密度を上げる管理",
    note: "芝が薄い場所から雑草が入ります。抜くだけでなく、芝の手入れによって雑草の入る余地をなくす考え方が必要です。",
  },
];

const sheetPitfalls = [
  {
    h: "下準備を省いた",
    b: "既存の雑草を残したままシートを敷くと、下で伸びた草がシートを押し上げます。刈るだけでなく、地下茎が残りやすい種類は可能な範囲で除去し、地面を平らにならしてから敷きます。",
  },
  {
    h: "重ね幅が不足している",
    b: "シートの継ぎ目に隙間ができると、そこから草が生えます。十分に重ねる、専用のテープで塞ぐといった処理により、継ぎ目を線ではなく面で覆います。",
  },
  {
    h: "固定が不十分",
    b: "ピンの間隔が広いと、風や踏圧でシートが浮きます。浮いた場所には土が入り込み、そこが発芽の場所になります。端部と継ぎ目は特に密に固定します。",
  },
  {
    h: "シートを露出したまま使用した",
    b: "シートは紫外線で劣化します。上に砂利やウッドチップを敷いて日光から保護すると、耐用期間が延びます。",
  },
  {
    h: "後から掘り返す場所に敷いた",
    b: "植栽を植え替える予定がある区画にシートを敷くと、そのたびに切断して継ぐことになります。掘り返す予定のある場所では、別の対策を選ぶほうが結果的に手間が少なくなります。",
  },
];

const timing = [
  {
    h: "伸びる前に対策を講じる",
    b: "雑草は伸びてから対処するほど手間が増えます。地面が見えている時期に防草シートやグランドカバーを施工しておくと、その年の作業量が変わります。",
  },
  {
    h: "種を落とす前に刈る",
    b: "花が咲いて種ができてから刈ると、翌年の発芽源を庭に撒くことになります。伸びきる前に一度刈っておくだけでも、翌シーズンの量が変わります。",
  },
  {
    h: "施工は地面が乾燥している時に行う",
    b: "シートを敷く作業は、ぬかるんだ地面では平らに仕上がりません。反対に、手で抜く作業は土が湿っているほうが根ごと抜けます。作業によって適した状態が異なります。",
  },
];

const faqs = [
  {
    q: "防草シートを敷けば雑草はゼロになりますか。",
    a: "ゼロにはなりません。継ぎ目や端部から侵入するほか、シートの上に溜まった土や落ち葉に種が付いて、そこで発芽することがあります。それでも量は大幅に減るため、残った分を時々取り除く前提で考えると扱いやすくなります。",
  },
  {
    q: "グランドカバーは本当に手間が減りますか。",
    a: "雑草の量は減りますが、植えた植物自体の管理は残ります。伸びすぎたら整える必要があり、種類によっては想定より広がります。手間がなくなるのではなく、手間の種類が変わるとお考えください。",
  },
  {
    q: "除草剤はどう選べばよいですか。",
    a: "葉にかけて枯らす種類と、土壌に作用して発芽を抑える種類では、使用する場面が大きく異なります。また、使用できる場所や対象は製品ごとに定められています。必ず製品の表示を確認し、記載された使用方法と条件に従ってください。残したい植物や家庭菜園が近い場所では、使用そのものを見送る判断も必要です。",
  },
  {
    q: "広い庭の草を一度に片づけたいのですが。",
    a: "伸びきった状態から自分で始めると、刈る作業のみで日数がかかります。まず業者に刈ってもらって状態を揃え、その後の維持を依頼者自身で行うという分担は現実的です。刈った後にどの対策へ移行するかまで含めて相談すると、作業の重複を避けられます。",
  },
];

export default function WeedControlPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "防草シート・グランドカバー・除草剤・草刈りを、庭の場所ごとに選ぶための要点を整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭の雑草対策" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          休日のたびに草を抜いているのに、数週間後には再び同じ状態になっているという経験は、庭を持つ多くの方に共通するものです。
          原因は作業量ではなく、場所に適さない方法を庭全体に適用していることにあります。
          雑草対策には、抜く・刈る・覆う・植える・薬剤を使うという5つの方法があり、それぞれ有効な場所と有効でない場所が明確に分かれています。
          本ページでは、庭のどこにどの方法を用いるかという選び方から整理します。
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

      <section id="weed-why" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          抜いても生えてくる理由
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          理由は大きく二つあります。一つは、土の中に種が残っていることです。抜いた直後は地面がきれいになりますが、その下には発芽を待つ種が残っています。
          もう一つは、地下茎で広がる種類の雑草の存在です。地上部を刈っても地中の茎は残り、そこから再び芽を出します。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          つまり、抜く・刈るという作業は「現在生えているものを減らす」対処であり、「生えてこなくする」対策ではありません。
          両者を区別しないまま作業を繰り返すと、労力に比べて状況が改善しないと感じることになります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            減らす作業と、生えにくくする対策の二つを組み合わせ、さらに場所ごとに使い分けることが、雑草対策の基本の形です。
          </p>
        </div>
      </section>

      <section id="weed-methods" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          5つの対策とそれぞれが有効な場所
        </h2>
        <div className="space-y-4">
          {methods.map((m) => (
            <div key={m.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-3">{m.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary mb-3">{m.b}</p>
              <dl className="text-sm space-y-1">
                <div className="flex gap-2">
                  <dt className="font-semibold text-text-primary flex-shrink-0">適した場所：</dt>
                  <dd className="text-text-secondary">{m.good}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-text-primary flex-shrink-0">適さない場所：</dt>
                  <dd className="text-text-secondary">{m.bad}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section id="weed-matrix" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          場所別の対策の選び方
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[520px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                  庭の場所
                </th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">主な選択肢</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">選ぶ理由</th>
              </tr>
            </thead>
            <tbody>
              {placeMatrix.map((row, idx) => (
                <tr key={row.place} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th
                    scope="row"
                    className="text-left align-top font-semibold text-text-primary px-4 py-3"
                  >
                    {row.place}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.choice}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          芝生の中の雑草については、芝そのものの管理と切り離せません。
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れガイド
          </Link>
          もあわせてご覧ください。
        </p>
      </section>

      <section id="weed-sheet" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          防草シートで失敗しやすい点
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          防草シートは効果の高い方法ですが、「敷いたのに生えてきた」という声も少なくありません。
          その原因はほぼ決まっており、次の5つのいずれかに該当します。
        </p>
        <div className="space-y-4">
          {sheetPitfalls.map((p, i) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
                <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{p.h}</span>
              </h3>
              <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="weed-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          対策を講じる時期の考え方
        </h2>
        <div className="space-y-4">
          {timing.map((t) => (
            <div key={t.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{t.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{t.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="weed-pro" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分で行う範囲と、業者に任せたほうがよい範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手で抜く作業や、狭い範囲の草刈りは自分で継続できます。一方、伸びきった広い庭を一度に片づける、防草シートを面で施工するといった作業は、道具と手順の差が結果に表れます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          現実的なのは、初期のリセットのみを業者に任せ、その後の維持を依頼者自身が担う分担です。
          刈るところまでを依頼し、地面が見える状態でシートやグランドカバーに移行する順序であれば、施工のやり直しが起きにくくなります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            依頼する際は、「刈って終了」なのか、「その後どうするか」まで相談するのかを先に伝えてください。
            後者であれば、シートや砂利の提案まで含めた相談になります。
          </p>
        </div>
      </section>

      <section id="weed-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/lawn-care/", label: "芝生の手入れの年間の流れ" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
            { href: "/plant/low-maintenance/", label: "手入れが容易な庭木のおすすめ" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
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
          伸びきった庭のリセットは、一度業者に任せるほうが早く片づきます。
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
