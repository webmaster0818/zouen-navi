import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/storm-care/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "台風・強風に備える庭木の点検｜事前の備えと通過後の点検";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "強風の接近が分かってから庭で行える対策は限られます。倒れやすい木の見分け方、直前に行ってよいことと避けるべきこと、強風の通過後に何をどの順序で確認するかについて、庭木と庭まわりの備えと復旧を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "強風で倒れやすい木の見分け方、直前の備え、通過後の点検の順序を整理しています。",
  },
};

const toc = [
  { id: "storm-risk", label: "強風で被害を受けるのは弱っている木とは限りません" },
  { id: "storm-check", label: "強風の前に確認すべき庭木の状態" },
  { id: "storm-before", label: "直前に行えることと、避けるべきこと" },
  { id: "storm-objects", label: "庭木以外で飛散するもの" },
  { id: "storm-after", label: "通過後の点検" },
  { id: "storm-danger", label: "自分で触れてはいけない状態" },
  { id: "storm-longterm", label: "毎年の被害を繰り返さないための考え方" },
  { id: "storm-faq", label: "よくある質問" },
];

const checkItems = [
  {
    h: "根元と地面の状態",
    b: "風で木が倒れる際は、折れるのではなく根ごと傾くことがあります。その前兆として、幹の根元と地面の間に隙間ができていたり、片側の地面がわずかに盛り上がっていたりします。日頃から根元を確認しておくと、この変化に気づけます。地面が常に湿っていて土が柔らかい場所は、木を支える力そのものが弱くなります。",
  },
  {
    h: "枝の付け根の形状",
    b: "幹から鋭い角度で立ち上がっている枝は、付け根に負荷が集中しやすく、風で裂けることがあります。二股に分かれて同程度の太さで伸びている幹も同様です。すでに付け根に割れが入っているものは、強風を待たずに対処すべき対象です。",
  },
  {
    h: "枯れた枝が残っていないか",
    b: "葉が出ていない枝や、触るともろい枝は、風で折れて飛散します。自分の庭に落ちるだけであれば問題は小さいものの、隣家の屋根や道路へ飛散すると問題が大きくなります。枯れ枝は風の有無にかかわらず除去すべき対象であり、季節を問わず対処できる部分です。",
  },
  {
    h: "葉が茂りすぎていないか",
    b: "葉は風を受ける面です。枝葉が密に詰まっているほど、木全体が受ける力が大きくなります。風が抜けるように枝を透かしておくと負荷は減りますが、これは適期を選んで行う作業であり、強風の直前に行う作業ではありません。",
  },
  {
    h: "支柱や結束の状態",
    b: "植えてから間もない木や、傾きを直すために支柱を添えている木は、支柱そのものが機能しているかを確認します。結束が緩んでいないか、幹に食い込んでいないか、支柱の根元が腐っていないかを確認します。支柱が折れれば、木ごと倒れます。",
  },
  {
    h: "建物や塀との距離",
    b: "倒れた場合にどこへ向かうかを確認します。屋根、窓、塀、駐車中の車、電線など、木の高さとその方向にあるものを比較しておきます。距離が不足している木は、強風のたびに懸念が生じます。根本的には、木を小さくするか、植栽位置を見直すかの判断になります。",
  },
];

const beforeItems = [
  {
    h: "行えること：鉢やプランターを移動する",
    b: "背の高い鉢は倒れ、軽い鉢は転がります。壁際に寄せる、地面に下ろす、室内や物置に入れるといった対策は、短時間で行え、効果も明確です。まとめて置くと互いに支え合います。",
  },
  {
    h: "行えること：飛散しそうなものを片づける",
    b: "支柱の予備、シート、じょうろ、椅子、物干し竿など、庭に出したままのものは、そのまま飛散物になります。近隣の住宅に当たれば、庭木以上の問題になります。",
  },
  {
    h: "行えること：排水口を確認する",
    b: "落ち葉や土で排水口が詰まっていると、雨水がそのまま庭に溜まります。雨水ますの上に物が載っていないか、周囲に落ち葉が積もっていないかを確認しておきます。庭の水はけそのものについては、別のページで解説しています。",
  },
  {
    h: "行えること：すでに折れかけた枝を除去する",
    b: "付け根が裂けて垂れ下がっている枝は、放置すれば風で確実に落下します。手の届く高さで安全に除去できる場合は、事前に除去しておきます。高所にある場合は、無理をせず業者に相談してください。",
  },
  {
    h: "避けるべきこと：直前の強剪定",
    b: "風を通すために大きく剪定するという考え方はありますが、直前にまとめて剪定することは木への負担が大きく、切り口も残ります。枝を透かす作業には木ごとの適期があり、事前に計画して行うものです。差し迫った状況で行えるのは、危険な枝を除去するところまでです。",
  },
  {
    h: "避けるべきこと：幹を強く縛る",
    b: "倒れないようにと幹をロープで強く締めると、樹皮を傷めます。傷んだ箇所は、後に枯れ込みの原因になります。支えが必要な場合は、当て木で幹を保護したうえで結ぶことが基本です。判断がつかない場合は、強風の通過後にご相談ください。",
  },
];

const afterItems = [
  {
    h: "最初に離れた場所から全体を確認する",
    b: "木の下に入る前に、距離を取って見上げます。折れて引っかかったままの枝、垂れ下がっている枝、傾いた幹などは、真下に立ってから気づいたのでは危険な種類のものです。",
  },
  {
    h: "幹の傾きと根元の地面",
    b: "強風の前と比べて傾いていないか、根元の地面に隙間や割れ、盛り上がりが生じていないかを確認します。地面が動いた跡がある木は、次の強風で倒れる可能性があります。外見上は葉が茂っていても、支えが失われていることがあります。",
  },
  {
    h: "枝の付け根の裂け",
    b: "折れずに残っていても、付け根が裂けている枝があります。時間が経つとそこから腐朽が進みます。裂けた枝は放置せず、処置の方法を決める対象です。",
  },
  {
    h: "葉の変色",
    b: "海に近い地域では、潮を含んだ風で葉が茶色く変色することがあります。病気や害虫とは原因が異なるため、対処も変わります。広い範囲の葉が同様に一方向から傷んでいる場合は、風そのものの影響が考えられます。",
  },
  {
    h: "地面と排水の状態",
    b: "雨で土が流れていないか、水が引かずに残っていないかを確認します。根が長時間水に浸かる状態は、木を弱らせます。排水口に落ち葉や枝が詰まっていれば取り除きます。",
  },
  {
    h: "塀・フェンス・構造物",
    b: "木が寄りかかっていないか、フェンスが押されて傾いていないかを確認します。隣地との境界にあるものは、自分のみで修復できない場合があります。状態を写真に撮影しておくと、後の相談が円滑になります。",
  },
];

const dangerItems = [
  {
    h: "電線に接触している、または近い枝",
    b: "折れた枝が電線に掛かっている場合は、自分で触れないでください。距離が近いだけでも危険です。電力会社への連絡が必要になる場面があり、業者に依頼する場合もこの点は事前に伝える必要があります。",
  },
  {
    h: "高所に引っかかったままの枝",
    b: "落ちきらずに枝の間にとどまっている枝は、いつ落下するか分かりません。脚立を立てて突くという方法は、最も事故が起きやすい形です。高さがあるものは、道具の問題ではなく、まず下に入らないことが優先です。",
  },
  {
    h: "傾いた大きな木",
    b: "傾いた木は、切る順序を誤ると一気に倒れます。どちら側に倒れる力がかかっているかの判断が必要な作業です。建物や道路に向かって傾いている場合は、近づかずに業者にご相談ください。",
  },
  {
    h: "屋根の上や建物に載ったもの",
    b: "屋根に上っての作業は、庭の作業の範囲を超えます。濡れた屋根は特に滑りやすくなっています。原因が庭木であっても、建物の上の作業は別の業者に依頼する対象です。",
  },
];

const longtermItems = [
  {
    h: "大きさを抑えるという選択",
    b: "毎年強風のたびに懸念がある場合は、木を小さく維持する方向に切り替える判断があります。ただし、一度で小さくすると木は弱ります。数年をかけて段階的に移行する形となるため、早めに相談を始めることに意味があります。",
  },
  {
    h: "植栽位置と樹種を見直す",
    b: "建物や塀に近すぎる木は、大きくなるほど選択肢が減ります。これから植栽する場合は、成長後の大きさを見込んだ位置の選定が効果的です。品種ごとの性質は、シンボルツリーや手入れが容易な庭木のページで解説しています。",
  },
  {
    h: "強風の時期の前に点検を組み込む",
    b: "強風は特定の季節に集中します。その前の時期に、枯れ枝の除去・支柱の確認・排水口の確認をまとめて済ませておくと、直前に慌てずに済みます。年間の作業計画はメンテナンスカレンダーにまとめています。",
  },
  {
    h: "依頼が集中する時期を避けて相談する",
    b: "強風の直前と通過直後は、同様の相談が各所から集中します。緊急性のない点検であれば、時期をずらしたほうが日程を確保しやすくなります。日程の組み方については、北九州のページで解説しています。",
  },
];

const faqs = [
  {
    q: "台風が近づいてから、庭木に対してできることはありますか。",
    a: "行えるのは、鉢やプランターを移動する、飛散しそうなものを片づける、排水口を確認する、すでに折れかけている枝を手の届く範囲で除去するといった対策までです。枝を大きく透かして風を通すという考え方はありますが、それは適期を選んで事前に行う作業であり、直前にまとめて剪定すると木への負担が大きくなります。",
  },
  {
    q: "風が通り過ぎたあと、何から見ればよいですか。",
    a: "まず木の下に入らず、離れた場所から全体を見上げてください。引っかかったままの枝や垂れ下がった枝がないかの確認が先です。そのうえで、幹の傾き、根元の地面の隙間や盛り上がり、枝の付け根の裂け、葉の変色、排水の状態、塀やフェンスの傾きを順に確認します。",
  },
  {
    q: "葉が一斉に茶色くなりました。病気でしょうか。",
    a: "強風の後であれば、風そのものの影響である可能性があります。海に近い地域では、潮を含んだ風で葉が変色することがあります。病気や害虫が原因の場合は、症状の現れ方や広がり方が異なります。葉や枝の症状の見分け方は、庭木の害虫と病気のページで解説しています。判断がつかない場合は、状態を写真に撮影して相談してください。",
  },
  {
    q: "折れた枝が電線に掛かっています。どうすればよいですか。",
    a: "自分で触れないでください。距離が近いだけでも危険です。電力会社への連絡が必要になる場面があり、庭の業者に依頼する場合も、電線が関わることを最初にお伝えください。屋根の上に載ったものについても、庭の作業の範囲を超えます。",
  },
  {
    q: "倒れそうな木を切ってもらいたいのですが、緊急でも来てもらえますか。",
    a: "対応の可否は業者と状況によります。掲載サービスの中には、コールセンターが24時間365日受け付けていると公表しているものがあります。ただし、受付の時間帯と、実際に作業に訪問できる日は別です。強風の通過直後は相談が集中するため、待つことになる場合があります。建物や道路に向かって傾いている木は、近づかずに状態をお伝えください。",
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
          "強風で倒れやすい木の見分け方、直前の備え、通過後の点検の順序を整理しています。",
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
          強風の接近が分かってから、庭で行える対策は多くありません。鉢を寄せ、飛散しそうなものを片づけ、後は通過を待つことになります。
          庭木そのものに対して行える対策の多くは、事前に済ませておく種類のものです。
          本ページでは、風に弱い木の見分け方、直前に行ってよいことと避けるべきこと、強風の通過後に何をどの順序で確認するかを整理します。
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
          強風で被害を受けるのは弱っている木とは限りません
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          枯れかけた木が倒れることは容易に想像できますが、実際に問題となるのは、元気に見えていた木が傾いたり、太い枝が裂けたりする場合です。
          葉が青々としていることと、風に耐えられることは、別の条件によって決まります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          風に対する強さを決めるのは、主に三つの要素です。根がどの程度広く土をつかんでいるか、枝の付け根がどのような形でつながっているか、
          そして葉がどの程度風を受けるかです。よく茂った木は、それだけ受ける力も大きくなります。地面が柔らかい場所では、根の側から先に限界を迎えます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            確認すべきは葉の色ではなく、根元の地面と枝の付け根です。いずれも、風のない時のほうが確認しやすくなります。
            点検は、穏やかな日に行っておくべき作業です。
          </p>
        </div>
      </section>

      <section id="storm-check" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          強風の前に確認すべき庭木の状態
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
          地面が常に湿っている場合は、根の張り方そのものに影響します。原因の切り分けは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="storm-before" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          直前に行えることと、避けるべきこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          時間が限られている場合ほど、効果の明確な対策から着手します。木そのものに大きく手を加えるのは、この段階で行う作業ではありません。
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
          庭木以外で飛散するもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭木に注意が向いている間に、実際に被害を生じさせるのは軽いものであったという場合があります。庭に置いてあるもののうち、風で動く可能性があるものを一度確認してください。
        </p>
        <ul className="space-y-3">
          {[
            "鉢・プランター・鉢皿。背の高いものほど倒れやすく、鉢皿は単体で飛散します。",
            "支柱・園芸用のポール・巻いたホース。細長いものは遠くまで飛散します。",
            "防草シートやマルチング材。固定が不十分だとめくれ上がり、砂利や樹皮片も動きます。",
            "物干し竿・折りたたみ椅子・踏み台。屋外に出したままにしやすいものです。",
            "ゴミの収集を待っている袋。中身が軽いほど飛散しやすくなります。収集日と重なる場合は特に注意します。",
            "簡易なフェンス・よしず・すだれ。面で風を受けるため、固定の強さ以上の力がかかります。",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">-</span>
              <p className="text-[15px] leading-8 text-text-secondary">{t}</p>
            </li>
          ))}
        </ul>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          剪定や草刈りを終えた直後に強風の予報が出ている場合は、剪定した枝の置き方も確認してください。
          袋詰めの状態や置き場所の考え方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="storm-after" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          通過後の点検
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          風が止んでも、庭がそのまま安全になるわけではありません。順序を守って確認します。
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
          隣家との境界にあるものが損傷した場合、どこまでを自分の判断で動かせるかは別の問題になります。境界を越える枝や根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="storm-danger" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分で触れてはいけない状態
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
          毎年の被害を繰り返さないための考え方
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
            シンボルツリーのおすすめ
          </Link>
          と
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが容易な庭木のおすすめ
          </Link>
          、年間の作業計画は
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
          関連ページ
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
          高所の枝や傾いた大きな木は、自分で対処しないことが前提です。状態を伝えて業者に相談することをおすすめします。
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
