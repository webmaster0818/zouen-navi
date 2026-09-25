import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/storm-care/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "台風・強風に備える庭木の点検｜備え方と、通過したあとの見まわり";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "強い風が来ると分かってから、庭でできることは限られます。倒れやすい木の見分け方、直前にやってよいことと避けたいこと、風が通り過ぎたあとに何をどの順で見るのか。庭木と庭まわりの備えと復旧を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "強風で倒れやすい木の見分け方、直前の備え、通過後の点検の順番を整理しました。",
  },
};

const toc = [
  { id: "storm-risk", label: "強い風で傷むのは、弱っている木とは限らない" },
  { id: "storm-check", label: "風の前に見ておきたい庭木の状態" },
  { id: "storm-before", label: "直前にできることと、やらないほうがよいこと" },
  { id: "storm-objects", label: "木以外に、庭で飛ぶもの" },
  { id: "storm-after", label: "通過したあとの見まわり" },
  { id: "storm-danger", label: "自分で触ってはいけない状態" },
  { id: "storm-longterm", label: "毎年くり返さないための考え方" },
  { id: "storm-faq", label: "よくある質問" },
];

const checkItems = [
  {
    h: "幹の根元と、まわりの地面",
    b: "風で木が倒れるとき、折れるのではなく根ごと傾くことがあります。前ぶれとして、幹の根元と地面の間に隙間ができていたり、片側の地面がわずかに盛り上がっていたりします。普段から根元を見ておくと、この変化に気づけます。地面が常に湿っていて土がやわらかい場所は、支える力そのものが弱くなります。",
  },
  {
    h: "枝の付け根の形",
    b: "幹から鋭い角度で立ち上がっている枝は、付け根に負荷が集中しやすく、風で裂けることがあります。二股に分かれて同じくらいの太さで伸びている幹も同様です。すでに付け根に割れが入っているものは、強い風を待たずに手を打つ対象になります。",
  },
  {
    h: "枯れた枝が残っていないか",
    b: "葉が出ていない枝、触るともろい枝は、風で折れて飛びます。自分の庭に落ちるだけならよいのですが、隣家の屋根や道路へ飛ぶと話が変わります。枯れ枝は風の有無にかかわらず落とす対象で、季節を選ばず手を入れられる部分です。",
  },
  {
    h: "葉が茂りすぎていないか",
    b: "葉は風を受ける面です。枝葉が密に詰まっているほど、木全体が受ける力が大きくなります。風が抜けるように枝を透かしておくと負荷は減りますが、これは適期を選んで行う作業で、風が来る直前にやることではありません。",
  },
  {
    h: "支柱や結束の状態",
    b: "植えてから間もない木や、傾きを直すために支柱を添えている木は、支柱そのものが効いているかを見ます。結束が緩んでいないか、幹に食い込んでいないか、支柱の根元が腐っていないか。支柱が折れれば、木ごと持っていかれます。",
  },
  {
    h: "建物や塀との距離",
    b: "倒れたときにどこへ向かうか。屋根、窓、塀、駐車中の車、電線。木の高さと、その方向にあるものを見比べておきます。距離が足りない木は、風のたびに気を揉むことになります。根本的には木の側を小さくするか、位置を考え直すかの判断になります。",
  },
];

const beforeItems = [
  {
    h: "できる：鉢やプランターを動かす",
    b: "背の高い鉢は倒れ、軽い鉢は転がります。壁ぎわに寄せる、地面に下ろす、室内や物置に入れる。短時間でできて効果がはっきりしている備えです。まとめて置くと互いに支え合います。",
  },
  {
    h: "できる：落ちそうなものを片づける",
    b: "支柱の予備、シート、じょうろ、椅子、物干し竿。庭に出しっぱなしのものは、そのまま飛ぶものになります。近所の家に当たれば庭木以上の問題になります。",
  },
  {
    h: "できる：排水の出口を確認する",
    b: "落ち葉や土で排水の出口が詰まっていると、雨がそのまま庭に溜まります。ます（雨水の受け口）の上に物が載っていないか、周囲に落ち葉が積もっていないかを見ておきます。庭の水はけそのものの話は別ページで扱っています。",
  },
  {
    h: "できる：すでに折れかけた枝を落とす",
    b: "付け根が裂けて垂れ下がっている枝は、放っておけば風で確実に落ちます。手の届く高さで安全に取れるなら、先に落としておきます。高いところにあるなら、無理をせず相談する対象です。",
  },
  {
    h: "避けたい：直前の強い剪定",
    b: "風を通すために大きく切る、という発想はありますが、直前にまとめて切るのは木への負担が大きく、切り口も残ります。枝を透かす作業は木ごとの適期があり、前もって計画して行うものです。差し迫ったときにできるのは、危険な枝を落とすところまでです。",
  },
  {
    h: "避けたい：幹に強く縛りつける",
    b: "倒れないようにと幹をロープで強く締めると、樹皮を傷めます。傷んだところは後から枯れ込みの入口になります。支えが必要なら、当て木をして幹を保護したうえで結ぶのが基本です。判断がつかない場合は、風が過ぎてから相談してください。",
  },
];

const afterItems = [
  {
    h: "まず、離れた場所から全体を見る",
    b: "木の下に入る前に、距離を取って見上げます。折れて引っかかったままの枝、垂れ下がっている枝、傾いた幹。真下に立ってから気づくのでは遅い種類のものです。",
  },
  {
    h: "幹の傾きと、根元の地面",
    b: "風の前と比べて傾いていないか。根元の地面に隙間や割れ、盛り上がりが出ていないか。地面が動いた跡がある木は、次の風で倒れる可能性があります。見た目に葉が茂っていても、支えが失われていることがあります。",
  },
  {
    h: "枝の付け根の裂け",
    b: "折れずに残っていても、付け根が裂けている枝があります。時間が経つとそこから腐りが入ります。裂けた枝は放置せず、どう処置するかを決める対象です。",
  },
  {
    h: "葉の変色",
    b: "海に近い地域では、潮を含んだ風で葉が茶色く変色することがあります。病気や虫とは原因が違うため、対処も変わります。広い範囲の葉が同じように一方向から傷んでいる場合は、風そのものの影響を疑います。",
  },
  {
    h: "地面と排水の状態",
    b: "雨で土が流れていないか、水が引かずに残っていないか。根が長く水に浸かる状態は、木を弱らせます。排水の出口に落ち葉や枝が詰まっていれば取り除きます。",
  },
  {
    h: "塀・フェンス・構造物",
    b: "木が寄りかかっていないか、フェンスが押されて傾いていないか。隣地との境にあるものは、自分だけで直せない場合があります。状態を写真に撮っておくと、後の話が早くなります。",
  },
];

const dangerItems = [
  {
    h: "電線に触れている、近い枝",
    b: "折れた枝が電線に掛かっている場合、自分で触らないでください。距離が近いだけでも危険です。電力会社への連絡が必要になる場面があり、業者に頼む場合もこの点は先に伝える必要があります。",
  },
  {
    h: "高い位置に引っかかったままの枝",
    b: "落ちきらずに枝の間に留まっている枝は、いつ落ちるか分かりません。脚立を立てて突く、というやり方は最も事故が起きやすい形です。高さがあるものは道具の問題ではなく、下に入らないことが先です。",
  },
  {
    h: "傾いた大きな木",
    b: "傾いた木は、切る順番を誤ると一気に倒れます。どちら側に倒れる力がかかっているかの判断が要る作業です。建物や道路に向かって傾いているなら、近づかずに相談してください。",
  },
  {
    h: "屋根の上や、建物に載ったもの",
    b: "屋根に登っての作業は、庭仕事の範囲を超えます。濡れた屋根は特に滑ります。庭木が原因であっても、建物の上のことは別の相手に頼む対象です。",
  },
];

const longtermItems = [
  {
    h: "大きさを止めるという選択",
    b: "毎年ひやひやするなら、木の側を小さく保つ方向に切り替える判断があります。ただし一度で小さくすると木は弱ります。数年かけて少しずつ移す形になるため、早めに相談を始める意味があります。",
  },
  {
    h: "植える位置と樹種を見直す",
    b: "建物や塀に近すぎる木は、大きくなるほど選択肢が減ります。これから植えるなら、成長後の大きさを見込んだ位置取りが効きます。品種ごとの性質はシンボルツリーや手入れが楽な庭木のページで扱っています。",
  },
  {
    h: "風が来る前の時期に点検を組み込む",
    b: "強い風は季節が偏ります。その前の時期に、枯れ枝を落とす・支柱を見る・排水の出口を確認する、をまとめて済ませておくと、直前に慌てずに済みます。年間の作業の組み立てはメンテナンスカレンダーにまとめています。",
  },
  {
    h: "混み合う時期を避けて相談する",
    b: "風が来る直前と、通り過ぎた直後は、同じ相談が各所から集まります。緊急性がない点検であれば、時期をずらしたほうが日程を取りやすくなります。日程の組み方については北九州のページで整理しています。",
  },
];

const faqs = [
  {
    q: "台風が近づいてから、庭木に対してできることはありますか。",
    a: "できるのは、鉢やプランターを動かす、飛ぶものを片づける、排水の出口を確認する、すでに折れかけている枝を手の届く範囲で落とす、というあたりまでです。枝を大きく透かして風を通すという考え方はありますが、それは適期を選んで前もって行う作業で、直前にまとめて切ると木への負担が大きくなります。",
  },
  {
    q: "風が通り過ぎたあと、何から見ればよいですか。",
    a: "まず木の下に入らず、離れた場所から全体を見上げてください。引っかかったままの枝や垂れ下がった枝がないかの確認が先です。そのうえで、幹の傾き、根元の地面の隙間や盛り上がり、枝の付け根の裂け、葉の変色、排水の状態、塀やフェンスの傾きを順に見ていきます。",
  },
  {
    q: "葉が一斉に茶色くなりました。病気でしょうか。",
    a: "強い風のあとであれば、風そのものの影響である可能性があります。海に近い地域では、潮を含んだ風で葉が変色することがあります。病気や虫が原因の場合は、症状の出方や広がり方が違います。葉や枝の症状の見分け方は庭木の害虫と病気のページで扱っています。判断がつかない場合は、状態を写真に撮って相談してください。",
  },
  {
    q: "折れた枝が電線に掛かっています。どうすればよいですか。",
    a: "自分で触らないでください。距離が近いだけでも危険です。電力会社への連絡が必要になる場面があり、庭の業者に頼む場合も、電線が関わることは最初に伝えてください。屋根の上に載ったものについても、庭仕事の範囲を超える作業になります。",
  },
  {
    q: "倒れそうな木を切ってもらいたいのですが、緊急でも来てもらえますか。",
    a: "対応できるかどうかは相手と状況によります。掲載サービスの中には、コールセンターが24時間365日受付していると公表しているところがあります。ただし受付の時間帯と、実際に作業に来られる日は別です。風が通り過ぎた直後は相談が集中するため、待つことになる場合があります。建物や道路に向かって傾いている木は、近づかずに状態を伝えてください。",
  },
];

export default function StormCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "強風で倒れやすい木の見分け方、直前の備え、通過後の点検の順番を整理しました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "台風・強風への備え" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          強い風が来ると分かってから、庭でできることは多くありません。鉢を寄せ、飛ぶものを片づけ、あとは待つ。
          庭木そのものに対してできることは、ほとんどが前もって済ませておく類のものです。
          このページでは、風に弱い木をどう見分けるのか、直前にやってよいことと避けたいこと、そして風が通り過ぎたあとに何をどの順で見るのかを整理します。
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

      <section id="storm-risk" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          強い風で傷むのは、弱っている木とは限らない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          枯れかけた木が倒れるのは分かりやすい話です。実際に困るのは、元気に見えていた木が傾いたり、太い枝が裂けたりする場合です。
          葉が青々としていることと、風に耐えられることは別の条件で決まります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          風に対する強さを決めるのは、おおむね三つです。根がどれだけ広く土をつかんでいるか、枝の付け根がどういう形でつながっているか、
          そして葉がどれだけ風を受けるか。よく茂った木は、それだけ受ける力も大きくなります。地面がやわらかい場所では、根の側から先に限界が来ます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            見るべきは葉の色ではなく、根元の地面と枝の付け根です。どちらも、風が来ていないときのほうがよく見えます。
            点検は、穏やかな日にやっておく作業です。
          </p>
        </div>
      </section>

      <section id="storm-check" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          風の前に見ておきたい庭木の状態
        </h2>
        <ol className="space-y-4">
          {checkItems.map((c, i) => (
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          地面が常に湿っている場合、根の張り方そのものに影響します。原因の切り分けは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="storm-before" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          直前にできることと、やらないほうがよいこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          時間が限られているときほど、効果のはっきりしたものから手を付けます。木そのものに大きく手を入れるのは、この段階でやることではありません。
        </p>
        <div className="space-y-4">
          {beforeItems.map((b) => (
            <div key={b.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{b.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{b.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="storm-objects" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          木以外に、庭で飛ぶもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭木の心配をしている間に、実際に被害を出すのは軽いものだったという場合があります。庭に置いてあるもののうち、風で動く可能性があるものを一度見渡してください。
        </p>
        <ul className="space-y-3">
          {[
            "鉢・プランター・鉢皿。背の高いものほど倒れやすく、皿は単体で飛びます。",
            "支柱・園芸用のポール・巻いたホース。細長いものは遠くまで飛びます。",
            "防草シートやマルチング材。固定が甘いとめくれ上がり、砂利や樹皮片も動きます。",
            "物干し竿・折りたたみ椅子・踏み台。屋外に出したままにしやすいものです。",
            "ゴミの収集を待っている袋。中身が軽いほど飛びます。収集日と重なるときは特に注意します。",
            "簡易なフェンス・よしず・すだれ。面で風を受けるため、固定の強さ以上の力がかかります。",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">-</span>
              <p className="text-[15px] leading-8 text-text-secondary">{t}</p>
            </li>
          ))}
        </ul>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          剪定や草刈りを終えた直後に強い風の予報が出ている場合、切ったものをどう置いているかも確認してください。
          袋詰めの状態や置き場所の考え方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="storm-after" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          通過したあとの見まわり
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          風がやんでも、庭がそのまま安全になるわけではありません。順番を守って見ていきます。
        </p>
        <ol className="space-y-4">
          {afterItems.map((a, i) => (
            <li key={a.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{a.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{a.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          隣家との境にあるものが傷んだ場合、どこまでが自分の判断で動かせる範囲かは別の問題になります。境界をまたぐ枝や根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="storm-danger" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分で触ってはいけない状態
        </h2>
        <div className="space-y-4">
          {dangerItems.map((d) => (
            <div key={d.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{d.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{d.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="storm-longterm" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          毎年くり返さないための考え方
        </h2>
        <div className="space-y-4">
          {longtermItems.map((l) => (
            <div key={l.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{l.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{l.b}</p>
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
          、年間の組み立ては
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="storm-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/tree-roots/", label: "庭木の根が塀・舗装・排水に影響しているとき" },
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
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
          高いところの枝や、傾いた大きな木は、自分で手を出さないことが前提になります。状態を伝えて相談してみてください。
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
