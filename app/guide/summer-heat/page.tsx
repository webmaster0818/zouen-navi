import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/summer-heat/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "夏の高温で庭木が傷むとき｜水やりの考え方と、葉焼け・乾きの見分け";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "毎日水をやっているのに葉がしおれる。原因は水の量ではなく、届いている深さかもしれません。夏に出る症状の見分け、水やりの深さと時間帯、植えたばかりの木の扱い、地面の側でできることを整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "夏の高温で庭木に出る症状の見分けと、水やりの深さ・時間帯の考え方を整理しました。",
  },
};

const toc = [
  { id: "sh-signs", label: "弱っている原因は、水不足とは限らない" },
  { id: "sh-depth", label: "水やりは「回数」より「届く深さ」" },
  { id: "sh-timing", label: "やる時間と、避けたい時間" },
  { id: "sh-newly", label: "植えたばかりの木と、根付いた木は別に扱う" },
  { id: "sh-ground", label: "地面の側でできること" },
  { id: "sh-recover", label: "傷んだあと、どこまで戻るか" },
  { id: "sh-faq", label: "よくある質問" },
];

const symptoms = [
  {
    h: "葉全体がしおれて垂れる",
    b: "最も分かりやすい形で、水が足りていない可能性が高い状態です。ただし、日中に一時的にしおれて夕方に戻る木もあります。朝の涼しい時間に見てもしおれたままなら、水が根まで届いていないと考えます。",
  },
  {
    h: "葉のふちや先だけが茶色くなる",
    b: "葉の縁から内側に向かって枯れていく形です。根が吸い上げる量に対して、葉から失われる量が多い状態で起きます。水の量だけでなく、風の当たり方や照り返しも関わります。",
  },
  {
    h: "葉の一部が白っぽく抜ける",
    b: "強い日差しが直接当たる面に出ることがあります。日陰にあった木を急に日向へ移した場合や、周囲の木を切って急に日が当たるようになった場合に起きやすい変化です。病気による白い付着物とは、触ったときに粉状のものが付くかどうかで区別できます。",
  },
  {
    h: "葉が落ちる",
    b: "自分の体を守るために葉を減らすことがあります。この場合、落葉そのものは異常ではありません。問題は、落ちたあとに新しい芽が動くかどうかです。秋以降も動かない場合は、別の原因を考えます。",
  },
  {
    h: "新しく伸びた部分だけが止まる",
    b: "その年に伸びた柔らかい部分は、古い部分より先に影響を受けます。先端だけがしおれる、伸びが止まるといった変化は、全体が傷む前の段階として現れることがあります。",
  },
];

const watering = [
  {
    h: "表面だけ濡れている状態を疑う",
    b: "少量を毎日かけると、土の表面だけが濡れて乾きます。根は水のあるほうへ伸びるので、表面しか濡れない状態が続くと、根が浅いところに集まり、余計に乾きに弱くなります。水をやったあとに指で土を掘ってみて、どこまで濡れているかを一度確かめてみてください。",
  },
  {
    h: "一度に多く、間隔をあける",
    b: "毎日少しずつより、深くまで届く量を与えて、そのあと間隔をあけるほうが、根が下へ伸びます。地面に染み込む速さは土によって違うため、一気にかけるより、数回に分けてゆっくり入れるほうが深くまで届きます。",
  },
  {
    h: "根の張っている範囲に入れる",
    b: "幹の根元にかけがちですが、水を吸う細い根は、枝が広がっている範囲の外側あたりに多くあります。幹元だけに水をやっても、肝心の場所に届いていない場合があります。",
  },
  {
    h: "鉢と地植えは別の話",
    b: "鉢は土の量が限られているため、乾く速さがまったく違います。高温の時期は一日で乾き切ることもあります。地植えの木と同じ間隔で考えると足りません。逆に、地植えの木に鉢と同じ頻度でやる必要はありません。",
  },
];

const timing = [
  {
    h: "気温が上がる前の時間",
    b: "日が高くなる前に与えると、日中に必要になる分が根の周りに残ります。地面の温度も上がっていないため、水が温まってしまうこともありません。",
  },
  {
    h: "日が落ちてからの時間",
    b: "朝に時間が取れない場合の選択肢になります。夜のあいだに染み込むため、無駄が少なくなります。一方で、葉や地際が濡れたまま夜を越すことになるため、風通しの悪い場所では注意が要ります。",
  },
  {
    h: "日が高い時間は避ける",
    b: "地面が熱くなっている時間に水をかけると、土の中で温まり、根に良くありません。また、葉に水を残したまま強い日差しが当たる状態も避けたほうが安全です。しおれ方がひどくてどうしても与えるなら、葉ではなく根元の地面に、日陰側から静かに入れます。",
  },
  {
    h: "留守にする日が続くとき",
    b: "出かける前に深くまで与えておき、地面を覆って蒸発を抑えるのが基本の組み立てです。鉢は移動できるので、日陰に寄せる、まとめて置く、受け皿に水を張るといった手があります。地植えの木は、通常は数日で枯れるものではありませんが、植えて間もないものは別です。",
  },
];

const newlyPlanted = [
  {
    h: "植えて最初の一年",
    b: "根がまだ元の土の塊の中にしかない状態です。周囲の土に根が伸びるまでは、降った雨だけでは足りないことがあります。根付くまでの期間は、意識して水を与える対象になります。",
  },
  {
    h: "場所を移した直後",
    b: "移植では根を切って動かすため、吸い上げる力が一時的に落ちます。その状態で高温にさらされると、葉から失われる量に追いつきません。枝葉を減らして負担を軽くする手当てが取られることがあります。",
  },
  {
    h: "根が浅く広がる種類",
    b: "深く伸びずに地表近くに根を張る種類は、地面の表面が乾くと直接影響を受けます。同じ庭でも、この種類だけ先に弱ることがあります。",
  },
  {
    h: "鉢から地面に下ろしたばかり",
    b: "鉢の中でぐるぐると回っていた根は、地面に下ろしてもすぐには外へ伸びません。鉢の形のまま残っていると、その塊の分の水しか使えない状態が続きます。",
  },
];

const groundCare = [
  {
    h: "根元を覆う",
    b: "樹皮の欠片や刈った草、落ち葉などで地面を覆うと、蒸発が減り、地面の温度も下がります。幹に密着させると幹の側が蒸れるため、根元から少し離して敷きます。",
  },
  {
    h: "踏み固めない",
    b: "人がよく通る場所の土は締まり、水が染み込まなくなります。かけた水が横に流れて逃げている場合、量の問題ではなく、入らないことが問題です。",
  },
  {
    h: "日陰をつくる",
    b: "植えたばかりの木や、急に日が当たるようになった木には、一時的に日差しを和らげる手当てが有効なことがあります。恒久的な対策ではなく、根が張るまでの期間をしのぐための処置です。",
  },
  {
    h: "水が抜けない場所はむしろ注意",
    b: "乾く話とは逆に、水が引かずに溜まる場所では、根が常に濡れた状態になります。高温の時期にこれが重なると、根が傷んで、結果として水を吸えなくなります。しおれているのに地面が湿っている場合は、この可能性を疑います。",
  },
];

const recovery = [
  {
    h: "葉が焼けた部分",
    b: "変色した葉そのものは元の色には戻りません。その葉は落ちて、次に出る葉と入れ替わります。見るべきは、変色の範囲が広がり続けているかどうかです。",
  },
  {
    h: "枝先が枯れた",
    b: "先端の細い部分が枯れて止まることがあります。枯れた部分より下から新しい芽が出れば、木としては続いています。枯れた部分を切るかどうかは、芽の位置が分かってから決めるほうが確実です。",
  },
  {
    h: "幹まで及んでいる",
    b: "幹の樹皮が割れる、剥がれる、触ると乾いて浮いている。ここまで来ると、木の側の体力が落ちています。回復するかどうかは状態によるため、見てもらう対象です。",
  },
  {
    h: "判断は季節が変わってから",
    b: "高温の時期の途中で「枯れた」と判断すると、まだ生きている木を切ってしまうことがあります。涼しくなって、新しい芽が動くかどうかを見てから決めるほうが、後悔が少なくて済みます。",
  },
];

const faqs = [
  {
    q: "毎日水をやっているのに葉がしおれます。",
    a: "量ではなく、届いている深さを疑ってください。少量を毎日かけると表面だけが濡れて乾き、根は浅いところに集まって、かえって乾きに弱くなります。一度、水をやったあとに指で土を掘って、どこまで濡れているかを確かめてみてください。また、しおれているのに地面が湿っている場合は、水が抜けずに根が傷んでいる可能性もあります。",
  },
  {
    q: "葉が茶色くなった部分は元に戻りますか。",
    a: "変色した葉そのものは元の色には戻りません。その葉は落ちて、新しい葉と入れ替わります。見るべきは、変色が広がり続けているかどうかと、涼しくなってから新しい芽が動くかどうかです。高温の時期の途中で枯れたと判断すると、まだ生きている木を切ってしまうことがあります。",
  },
  {
    q: "留守にする間の水やりはどうすればよいですか。",
    a: "出かける前に深くまで届く量を与えたうえで、根元を覆って蒸発を抑えるのが基本です。鉢は日陰に寄せる、まとめて置くといった手が使えます。地植えの根付いた木であれば、数日で枯れるものではありませんが、植えて間もない木や移したばかりの木は別に考えてください。",
  },
  {
    q: "日中に水をやってはいけないと聞きました。本当ですか。",
    a: "地面が熱くなっている時間に水をかけると、土の中で温まって根に良くありません。気温が上がる前か、日が落ちてからのほうが確実です。しおれ方がひどくてどうしても与えるなら、葉ではなく根元の地面に、日陰側から静かに入れてください。",
  },
  {
    q: "地植えの木にも水やりは必要ですか。",
    a: "根付いた木であれば、通常は降る雨で足ります。水やりを意識する必要があるのは、植えて間もない木、場所を移した直後の木、鉢から地面に下ろしたばかりの木、そして根が浅く広がる種類です。また、長く降らない状態が続き、朝の涼しい時間に見てもしおれたままの場合は、根付いた木でも与える対象になります。",
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
          "夏の高温期に庭木へ出る症状の見分け方と、水やりの考え方、地面の側でできる手当てを整理しました。",
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
          暑い時期に庭木の葉がしおれると、まず水をやります。それで戻ることもありますが、毎日やっているのに改善しない場合があります。水が足りていないのではなく、届いていないか、そもそも原因が水ではないかのどちらかです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          このページでは、高温の時期に出る症状をどう見分けるか、水やりで何を基準にするか、そして地面の側でできることを整理します。
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
          弱っている原因は、水不足とは限らない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          出ている症状によって、疑う原因が変わります。見るのは、葉のどこが、どういう順で変化しているかです。
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
          斑点が出る、べたつく、虫がついているといった症状であれば別の原因です。見分けは
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sh-depth" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          水やりは「回数」より「届く深さ」
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          毎日やっているのに効かない、という状態の多くは深さの問題です。
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
          やる時間と、避けたい時間
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ量でも、いつやるかで効き方が変わります。
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
          植えたばかりの木と、根付いた木は別に扱う
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ庭にあっても、根の張り方が違えば必要な手当ても違います。
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
          植える場所と樹種の選び方は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが楽な庭木おすすめ
          </Link>
          と
          <Link href="/plant/symbol-tree/" className="text-primary underline underline-offset-2 mx-1">
            シンボルツリーおすすめ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sh-ground" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          地面の側でできること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          水をやる回数を増やすより、乾きにくい地面にするほうが効く場合があります。
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
          で、芝生の乾きと不調の見方は
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れガイド
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sh-recover" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          傷んだあと、どこまで戻るか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見た目が悪くなっても、木そのものが終わっているとは限りません。判断を急がないほうがよい場面があります。
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
          あわせて読みたい
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
          水をやっても改善しない、幹まで傷んでいるように見える。判断がつかないときは状態を見てもらってください。
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
