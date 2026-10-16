import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/summer-heat/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "夏の高温で庭木が傷む場合｜水やりの考え方と、葉焼け・乾燥の見分け方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "毎日水を与えているのに葉がしおれる場合、原因は水の量ではなく、水が浸透している深さにある可能性があります。夏に現れる症状の見分け方、水やりの深さと時間帯、植えたばかりの木の扱い、地面側で行える対策を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "夏の高温で庭木に現れる症状の見分け方と、水やりの深さ・時間帯の考え方を整理しています。",
  },
};

const toc = [
  { id: "sh-signs", label: "弱っている原因は水不足とは限りません" },
  { id: "sh-depth", label: "水やりは回数より浸透する深さが重要です" },
  { id: "sh-timing", label: "水を与える時間帯と避けるべき時間帯" },
  { id: "sh-newly", label: "植えたばかりの木と根付いた木は分けて扱う" },
  { id: "sh-ground", label: "地面側で行える対策" },
  { id: "sh-recover", label: "傷んだ後にどこまで回復するか" },
  { id: "sh-faq", label: "よくある質問" },
];

const symptoms = [
  {
    h: "葉全体がしおれて垂れる",
    b: "最も分かりやすい症状で、水が不足している可能性が高い状態です。ただし、日中に一時的にしおれて夕方に回復する木もあります。朝の涼しい時間に確認してもしおれたままであれば、水が根まで届いていないと考えます。",
  },
  {
    h: "葉の縁や先端のみが茶色くなる",
    b: "葉の縁から内側に向かって枯れていく症状です。根が吸い上げる量に対して、葉から失われる量が多い状態で生じます。水の量だけでなく、風の当たり方や照り返しも関係します。",
  },
  {
    h: "葉の一部が白っぽく抜ける",
    b: "強い日差しが直接当たる面に生じることがあります。日陰にあった木を急に日向へ移した場合や、周囲の木を伐採して急に日が当たるようになった場合に起きやすい変化です。病気による白い付着物とは、触れた際に粉状のものが付くかどうかで区別できます。",
  },
  {
    h: "葉が落ちる",
    b: "自らを守るために葉を減らすことがあります。この場合、落葉そのものは異常ではありません。問題は、落葉した後に新しい芽が動くかどうかです。秋以降も芽が動かない場合は、別の原因を考えます。",
  },
  {
    h: "新しく伸びた部分のみ成長が止まる",
    b: "その年に伸びた柔らかい部分は、古い部分より先に影響を受けます。先端のみがしおれる、伸びが止まるといった変化は、全体が傷む前の段階として現れることがあります。",
  },
];

const watering = [
  {
    h: "表面のみ濡れている状態を疑う",
    b: "少量を毎日与えると、土の表面のみが濡れて乾きます。根は水のある方向へ伸びるため、表面しか濡れない状態が続くと、根が浅い位置に集まり、より乾燥に弱くなります。水やりの後に指で土を掘り、どこまで濡れているかを一度確認してください。",
  },
  {
    h: "一度に多く与え、間隔を空ける",
    b: "毎日少しずつ与えるより、深くまで届く量を与えて、その後間隔を空けるほうが、根が下へ伸びます。地面に浸透する速さは土によって異なるため、一度にかけるより、数回に分けてゆっくり浸透させるほうが深くまで届きます。",
  },
  {
    h: "根の張っている範囲に与える",
    b: "幹の根元に与えがちですが、水を吸収する細い根は、枝が広がっている範囲の外側付近に多くあります。幹元のみに水を与えても、根の主要な部分に届いていない場合があります。",
  },
  {
    h: "鉢植えと地植えは分けて考える",
    b: "鉢植えは土の量が限られているため、乾燥する速さが大きく異なります。高温の時期は一日で乾ききることもあります。地植えの木と同じ間隔では不足します。反対に、地植えの木に鉢植えと同じ頻度で与える必要はありません。",
  },
];

const timing = [
  {
    h: "気温が上がる前の時間帯",
    b: "日が高くなる前に与えると、日中に必要な分が根の周囲に残ります。地面の温度も上がっていないため、水が温まることもありません。",
  },
  {
    h: "日没後の時間帯",
    b: "朝に時間が取れない場合の選択肢になります。夜間に浸透するため、無駄が少なくなります。一方で、葉や地際が濡れたまま夜を越すことになるため、風通しの悪い場所では注意が必要です。",
  },
  {
    h: "日が高い時間帯は避ける",
    b: "地面が熱くなっている時間帯に水をかけると、土中で温まり、根に悪影響を及ぼします。また、葉に水が残ったまま強い日差しが当たる状態も避けたほうが安全です。しおれ方がひどく、どうしても与える必要がある場合は、葉ではなく根元の地面に、日陰側から静かに注ぎます。",
  },
  {
    h: "不在の日が続く場合",
    b: "出かける前に深くまで水を与えておき、地面を覆って蒸発を抑えることが基本の対策です。鉢植えは移動できるため、日陰に寄せる、まとめて置く、受け皿に水を張るといった方法があります。地植えの木は、通常は数日で枯れるものではありませんが、植えて間もないものは別です。",
  },
];

const newlyPlanted = [
  {
    h: "植栽後最初の一年",
    b: "根がまだ元の土の塊の中にしかない状態です。周囲の土に根が伸びるまでは、降雨のみでは不足することがあります。根付くまでの期間は、意識して水を与える対象となります。",
  },
  {
    h: "移植した直後",
    b: "移植では根を切って移動するため、吸い上げる力が一時的に低下します。その状態で高温にさらされると、葉から失われる量に吸収が追いつきません。枝葉を減らして負担を軽くする処置が取られることがあります。",
  },
  {
    h: "根が浅く広がる種類",
    b: "深く伸びずに地表近くに根を張る種類は、地面の表面が乾燥すると直接影響を受けます。同じ庭でも、この種類のみ先に弱ることがあります。",
  },
  {
    h: "鉢から地面に植え替えたばかりの木",
    b: "鉢の中で回っていた根は、地面に植え替えてもすぐには外へ伸びません。鉢の形のまま残っていると、その塊の分の水しか使えない状態が続きます。",
  },
];

const groundCare = [
  {
    h: "根元を覆う",
    b: "樹皮片や刈った草、落ち葉などで地面を覆うと、蒸発が減り、地面の温度も下がります。幹に密着させると幹が蒸れるため、根元から少し離して敷きます。",
  },
  {
    h: "踏み固めない",
    b: "人がよく通る場所の土は締まり、水が浸透しなくなります。与えた水が横に流れて逃げている場合は、量ではなく、浸透しないことが問題です。",
  },
  {
    h: "日陰をつくる",
    b: "植えたばかりの木や、急に日が当たるようになった木には、一時的に日差しを和らげる対策が有効な場合があります。恒久的な対策ではなく、根が張るまでの期間をしのぐための処置です。",
  },
  {
    h: "水が抜けない場所はむしろ注意が必要です",
    b: "乾燥とは逆に、水が引かずに溜まる場所では、根が常に濡れた状態になります。高温の時期にこれが重なると、根が傷み、結果として水を吸収できなくなります。しおれているのに地面が湿っている場合は、この可能性を考慮します。",
  },
];

const recovery = [
  {
    h: "葉焼けした部分",
    b: "変色した葉そのものは元の色には戻りません。その葉は落ちて、次に出る葉と入れ替わります。確認すべきは、変色の範囲が広がり続けているかどうかです。",
  },
  {
    h: "枝先が枯れた",
    b: "先端の細い部分が枯れて止まることがあります。枯れた部分より下から新しい芽が出れば、木としては生きています。枯れた部分を剪定するかどうかは、芽の位置が分かってから判断するほうが確実です。",
  },
  {
    h: "幹まで及んでいる",
    b: "幹の樹皮が割れる、剥がれる、触ると乾いて浮いているといった状態では、木の体力が低下しています。回復するかどうかは状態によるため、専門家に確認を依頼すべき対象です。",
  },
  {
    h: "判断は季節が変わってから行う",
    b: "高温の時期の途中で「枯れた」と判断すると、まだ生きている木を伐採してしまうことがあります。涼しくなって、新しい芽が動くかどうかを確認してから決めるほうが、判断を誤りにくくなります。",
  },
];

const faqs = [
  {
    q: "毎日水をやっているのに葉がしおれます。",
    a: "量ではなく、浸透している深さを確認してください。少量を毎日与えると表面のみが濡れて乾き、根は浅い位置に集まって、かえって乾燥に弱くなります。一度、水やりの後に指で土を掘り、どこまで濡れているかをご確認ください。また、しおれているのに地面が湿っている場合は、水が抜けずに根が傷んでいる可能性もあります。",
  },
  {
    q: "葉が茶色くなった部分は元に戻りますか。",
    a: "変色した葉そのものは元の色には戻りません。その葉は落ちて、新しい葉と入れ替わります。確認すべきは、変色が広がり続けているかどうかと、涼しくなってから新しい芽が動くかどうかです。高温の時期の途中で枯れたと判断すると、まだ生きている木を伐採してしまうことがあります。",
  },
  {
    q: "留守にする間の水やりはどうすればよいですか。",
    a: "出かける前に深くまで届く量を与えたうえで、根元を覆って蒸発を抑えることが基本です。鉢植えは日陰に寄せる、まとめて置くといった方法が使えます。地植えの根付いた木であれば、数日で枯れるものではありませんが、植えて間もない木や移植したばかりの木は別にお考えください。",
  },
  {
    q: "日中に水をやってはいけないと聞きました。本当ですか。",
    a: "地面が熱くなっている時間帯に水をかけると、土中で温まって根に悪影響を及ぼします。気温が上がる前か、日没後のほうが確実です。しおれ方がひどく、どうしても与える必要がある場合は、葉ではなく根元の地面に、日陰側から静かに注いでください。",
  },
  {
    q: "地植えの木にも水やりは必要ですか。",
    a: "根付いた木であれば、通常は降雨で足ります。水やりを意識する必要があるのは、植えて間もない木、移植した直後の木、鉢から地面に植え替えたばかりの木、根が浅く広がる種類です。また、長期間降雨がなく、朝の涼しい時間に確認してもしおれたままの場合は、根付いた木でも水を与える対象となります。",
  },
];

export default function SummerHeatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "夏の高温期に庭木に現れる症状の見分け方と、水やりの考え方、地面側で行える対策を整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "夏の高温と水やり" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          暑い時期に庭木の葉がしおれると、まず水を与えることが一般的です。それで回復することもありますが、毎日与えているのに改善しない場合があります。その場合は、水が不足しているのではなく、浸透していないか、原因がそもそも水ではないかのいずれかです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、高温の時期に現れる症状の見分け方、水やりで何を基準にするか、地面側で行える対策を整理します。
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

      <section id="sh-signs" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          弱っている原因は水不足とは限りません
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          現れている症状によって、考えられる原因が変わります。確認すべきは、葉のどの部分が、どのような順序で変化しているかです。
        </p>
        <div className="space-y-4">
          {symptoms.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          斑点が出る、べたつく、虫が付いているといった症状であれば、別の原因です。見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="sh-depth" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          水やりは回数より浸透する深さが重要です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          毎日与えているのに効果がないという状態の多くは、深さの問題です。
        </p>
        <ol className="space-y-4">
          {watering.map((x, i) => (
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

      <section id="sh-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          水を与える時間帯と避けるべき時間帯
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ量でも、いつ与えるかによって効果が変わります。
        </p>
        <div className="space-y-4">
          {timing.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sh-newly" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植えたばかりの木と根付いた木は分けて扱う
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ庭にあっても、根の張り方が異なれば必要な対策も異なります。
        </p>
        <div className="space-y-4">
          {newlyPlanted.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          植栽場所と樹種の選び方は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが容易な庭木のおすすめ
          </Link>
          と
          <Link href="/plant/symbol-tree/" className="text-primary underline underline-offset-2 mx-1">
            シンボルツリーのおすすめ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="sh-ground" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          地面側で行える対策
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          水やりの回数を増やすより、乾燥しにくい地面にするほうが効果的な場合があります。
        </p>
        <ol className="space-y-4">
          {groundCare.map((x, i) => (
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
          地面に水が溜まる場合の原因の切り分けは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で、芝生の乾燥と不調の見方は
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れガイド
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="sh-recover" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          傷んだ後にどこまで回復するか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          外観が悪くなっても、木そのものが枯れているとは限りません。判断を急がないほうがよい場面があります。
        </p>
        <div className="space-y-4">
          {recovery.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sh-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/guide/lawn-care/", label: "芝生の手入れガイド" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
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
          水を与えても改善しない、幹まで傷んでいるように見えるなど、判断がつかない場合は状態を専門家に確認してもらってください。
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
