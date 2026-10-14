import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/oita/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "大分の造園・庭の手入れ業者の選び方｜植えたあとの保証とアフターの確かめ方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "植えてもらった木や生け垣、芝が枯れたとき、どう扱われるかは会社ごとに違います。保証の有無・対象・期間・対応の中身・免責を、契約前に書面で確かめる項目として整理しました。植えたあとの水やりなど自分の側の管理と記録の残し方、枯れてきたときの連絡のしかたもまとめ、掲載サービスの運営会社・対応エリアを一覧にしています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "植栽を頼んだあとに枯れた場合の扱いを、契約前に書面で確かめる項目として整理しました。",
  },
};

const toc = [
  { id: "oita-cause", label: "枯れたとき最初に問われるのは、原因がどちら側にあるか" },
  { id: "oita-items", label: "保証について書面で確かめたい5つの項目" },
  { id: "oita-exclusion", label: "免責の欄に書かれていることがある事情" },
  { id: "oita-kinds", label: "植えるものによって、確かめる点が違う" },
  { id: "oita-record", label: "自分の側の管理と、その記録" },
  { id: "oita-contact", label: "枯れてきたと思ったときの連絡のしかた" },
  { id: "oita-pick", label: "この条件で見ておきたい3サービス" },
  { id: "oita-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "oita-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "oita-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-master", "oniwa-110", "houzz"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-master":
    "自社で施工せず、要望に合う業者を無料で紹介する仕組みで、受付は24時間365日とされています。紹介型なので、植えたあとの保証を誰が引き受けるのか、つまり紹介元の窓口なのか、実際に植えた加盟業者なのかを、契約の前に分けて聞いておく必要があります。枯れたときの連絡先がどちらになるのかも合わせて確かめてください。お見積りは無料（一部調査費用は別途）と公表されています。運営は株式会社アシストです。",
  "oniwa-110":
    "全国の加盟店を紹介・手配する形で、剪定・伐採・抜根などに加えて植栽にも対応しています。運営の上場企業が請負賠償保険に加入しているとされていますが、こうした保険は一般に作業中の事故で生じた損害に備えるもので、植えた木がのちに枯れた場合の扱いとは別の話です。両者を混同せず、植栽の保証については施工する加盟店に条件を確かめてください。運営はシェアリングテクノロジー株式会社（東証上場・証券コード3989）です。",
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価レビューが掲載されています。植栽を含む庭づくりを専門家に頼む場合、保証やアフターの条件は専門家ごとに異なるため、候補を絞った段階で、それぞれに同じ項目を聞いて比べる使い方ができます。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
};

const items = [
  {
    h: "保証があるかどうか",
    b: "まず、植えた植物について保証を設けているかどうかです。設けていない会社もあり、それ自体が悪いわけではありません。ただ、保証がないなら、枯れたときは改めて依頼する形になるということを、頼む前に分かっておく必要があります。口頭の「何かあれば言ってください」は保証とは別のものとして扱います。",
  },
  {
    h: "何が対象になるか",
    b: "植物そのものなのか、植え付けの作業なのか、支柱や土の入れ替えまで含むのか。シンボルツリーは対象でも、草花や地被植物は対象外ということもあります。生け垣や芝のように数がまとまっているものは、一部だけ枯れた場合にどう扱うかも確かめておきます。",
  },
  {
    h: "いつからいつまでか",
    b: "期間は会社によって異なり、標準として言える長さはありません。起算日が植えた日なのか引き渡しの日なのか、植え付けに向く時期を外して植えた場合に扱いが変わるのかも、書面で確かめてください。期間の長さだけで比べず、次の項目と合わせて読みます。",
  },
  {
    h: "枯れた場合に何をしてもらえるか",
    b: "同じ種類の植物を植え直すのか、同等の大きさのものを用意するのか、費用の一部を負担するのか。枯れた木を抜いて処分する作業や、植え直しに伴う出張の扱いが含まれるかどうかでも、実際の負担は変わります。「同等」が何を指すのか、高さや株立ちの本数まで言葉にしてもらえると後で揉めにくくなります。",
  },
  {
    h: "対象にならない場合（免責）",
    b: "どんな事情があれば保証の対象から外れるのかが、実際にはいちばん大事な欄です。水やりや管理の指示に沿っていなかった場合、天候や災害による場合などが挙げられることがあります。次の節で、書かれていることがある事情を並べています。",
  },
];

const exclusions = [
  {
    h: "水やり不足・管理の指示と違う扱い",
    b: "植えた直後の植物は根が張りきっておらず、乾きに弱い状態です。そのため、水やりなど施主側の管理を保証の前提にしている会社があります。どの程度の水やりを求めているのかが書面で具体的に示されているかを確かめ、示されていなければ聞いてください。指示がない状態で「水やり不足」と言われても、こちらは判断のしようがありません。",
  },
  {
    h: "天候・災害",
    b: "強風、大雨、記録的な暑さや寒さ、雪の重みなど、人の手で防げない事情による枯れや倒れを対象外とする書き方があります。どこからが「災害」に当たるのか、線引きを聞いておくと後のやり取りが楽になります。",
  },
  {
    h: "病害虫・動物",
    b: "虫や病気、動物の被害を対象外とすることがあります。植えた時点ですでに持ち込まれていた場合と、あとから付いた場合で扱いが分かれることもあるため、どちらをどう扱うのかを聞いておきます。",
  },
  {
    h: "施主側での移動・剪定・工事",
    b: "植えた木を自分で動かした、強く切った、近くで別の工事をして根を傷めたといった場合です。植えたあと庭に手を加える予定があるなら、その前に植えた会社へ相談しておくと、保証の扱いを外れずに済む場合があります。",
  },
  {
    h: "置き場所の条件が後から変わった",
    b: "隣に建物が建って日が当たらなくなった、水はけが変わったなど、植えたあとで条件が変わった場合です。逆に、植える場所そのものが植物に合っていなかった場合を、提案した側の責任としてどう扱うのかも、聞いておく価値があります。",
  },
];

const kinds = [
  {
    h: "シンボルツリー",
    b: "一本の存在感が大きく、植え直すとなれば手間も大きくなります。保証の対象であることに加えて、枯れたときに用意してもらえるものが同じ樹種・同じくらいの高さなのかを確かめます。株立ちの木なら、幹の本数も「同等」の中身に入ります。",
  },
  {
    h: "生け垣",
    b: "何本もの株がつながって一つの形になっています。数本だけ枯れた場合に、その分だけを植え直すのか、並び全体の高さを揃えるのかで、仕上がりも費用も変わります。何本までなら対象になるのか、どの状態を「枯れ」と判断するのかも聞いておきます。",
  },
  {
    h: "芝張り",
    b: "季節によって葉の色が変わる芝もあり、茶色くなったからといって枯れたとは限りません。どの状態を根付かなかったと判断するのか、張ったあとの目土や水やり、刈り込みの指示がどうなっているのかを確かめます。部分的に根付かなかった場合の張り直しの扱いも聞いておきます。",
  },
  {
    h: "草花・地被・低木",
    b: "単価の小さいものは、保証の対象から外されていることがあります。対象かどうかを一つずつ確かめておくと、枯れたときに改めて自分で買い足すのか、相談できるのかが分かります。",
  },
];

const recordPoints = [
  {
    h: "管理の指示を書面でもらう",
    b: "水やりの回数や時期、支柱の結び直し、肥料を与えてよい時期など、植えた側から受けた指示を紙かメッセージで受け取っておきます。口頭で聞いた内容はあとで食い違いやすく、保証の前提が自分の側の管理にある場合は特に大事になります。",
  },
  {
    h: "水やりの日を残す",
    b: "カレンダーに印を付ける、スマートフォンのメモに書くといった簡単な形で構いません。雨が降った日も書いておくと、乾いていた期間がどのくらいあったかを後から振り返れます。",
  },
  {
    h: "植えた日と、その後の姿を写真に残す",
    b: "植えた当日、数週間後、季節が変わったころと、同じ位置から撮っておきます。葉の色や量の変化が分かり、異変に気づいたときに、いつから始まったのかを示す材料になります。撮影日が分かる形で保存してください。",
  },
  {
    h: "自分で手を入れる前に聞く",
    b: "伸びた枝を切りたい、肥料をやりたい、近くに別のものを植えたいと思ったら、保証の期間中はまず植えた会社に相談します。善意でやったことが、保証の対象から外れる理由になることがあります。",
  },
];

const contactPoints = [
  {
    h: "気づいた時点で、早めに知らせる",
    b: "葉がしおれる、色が抜ける、落葉の時期でないのに葉が落ちるといった変化に気づいたら、様子を見続けるより先に連絡します。早い段階なら手当てで持ち直すこともあり、保証の期間内に連絡したという記録にもなります。",
  },
  {
    h: "写真と記録を添える",
    b: "いま起きている状態の写真に加えて、植えた当日の写真と水やりの記録を添えます。相手が現地に来る前に状況を把握でき、こちらが指示に沿って管理していたことも伝わります。",
  },
  {
    h: "書面の該当箇所を示す",
    b: "保証の書面のどの項目に当たると考えているのかを、こちらから示します。「保証してもらえますか」とだけ聞くより、話が具体的になります。",
  },
  {
    h: "原因の判断は、見てもらってから",
    b: "枯れた原因が植え方にあるのか、管理や天候にあるのかは、外から見ただけでは決めにくいものです。まず現地で見てもらい、どう判断したのかを説明してもらいます。納得できない点があれば、その場で結論を出さずに、説明の内容を書面かメッセージで残してもらってください。",
  },
];

const checklist = [
  {
    h: "保証の有無を書面で確かめたか",
    b: "口頭の「何かあれば」ではなく、書面に書かれているかどうかを見ます。",
  },
  {
    h: "対象・期間・起算日を確かめたか",
    b: "どの植物が、いつからいつまで対象になるのかを書面で確かめます。",
  },
  {
    h: "枯れたときに何をしてもらえるかを確かめたか",
    b: "植え直しなのか費用の一部なのか、撤去・処分や出張の扱いも含めて聞きます。",
  },
  {
    h: "免責の条件と、管理の指示を受け取ったか",
    b: "水やりなど自分の側に求められていることが、具体的に書かれているかを確かめます。",
  },
  {
    h: "紹介型なら、保証する相手を確かめたか",
    b: "窓口と施工した会社のどちらに連絡するのかを、契約の前に分けて聞きます。",
  },
];

const faqs = [
  {
    q: "植えた木の保証は、何年くらいが普通ですか。",
    a: "標準として言える期間はありません。保証を設けていない会社もあれば、植物の種類によって期間を分けている会社もあり、対象や免責の条件も含めて会社ごとに違います。期間の長さだけで比べると、免責の条件が厳しいために実際には使いにくい、ということも起こりえます。対象・期間・起算日・対応の中身・免責を、同じ項目で各社に聞いて比べてください。",
  },
  {
    q: "「枯れたら植え直します」と口頭で言われました。書面にしてもらう必要はありますか。",
    a: "保証として当てにするなら、書面かメッセージで残してもらうほうが確実です。口頭の約束は、担当者が替わったり時間が経ったりすると、条件が食い違いやすくなります。見積書や契約書の備考欄に一行書いてもらうだけでも違います。書面の確かめ方全般は神戸のページで扱っています。",
  },
  {
    q: "紹介型のサービスを通して植えてもらいました。枯れたときは誰に連絡すればよいですか。",
    a: "多くの場合、実際に植えた会社と、紹介した窓口の両方が関わっています。保証を引き受けているのがどちらなのか、連絡の窓口がどちらなのかは、サービスによって違います。契約の前に分けて聞いておき、聞いていなかった場合は、まず書面に書かれている連絡先に問い合わせてください。自社施工型と紹介型の違いは名古屋のページで整理しています。",
  },
  {
    q: "作業当日に見ておくことと、植えたあとの保証は何が違いますか。",
    a: "作業が終わった日に見ておくことは、植え付けの深さや支柱、片づけといった、その場で確かめられる点です。植えたあとの保証は、数週間から季節をまたいで見えてくる変化を扱います。作業当日の確認と手直しの頼み方は川崎のページ、植えたあとの一年に木の側で何が起きているかは庭木の移植・植え替えのページで扱っています。",
  },
  {
    q: "大分市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、大分市内での個別の対応可否・作業日程・出張範囲、植栽の保証の条件までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaOitaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "植栽・生け垣・シンボルツリー・芝張りを頼んだあとに枯れた場合の扱いを、契約前に書面で確かめる項目と、施主側の管理と記録として整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "大分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          剪定や草刈りは、終わった日に仕上がりが見えます。植栽はそうはいきません。植えた木や生け垣、張った芝が根付いたかどうかは、数週間から季節をまたいで少しずつ分かってきます。そのあいだに枯れてしまったとき、植え直してもらえるのか、改めて費用がかかるのかは、会社ごとに扱いが違います。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          大分にある家の庭で植栽を頼む場合も同じです。このページでは、植えたあとの保証とアフターについて、契約の前に書面で確かめておきたい項目と、植えたあと自分の側で続ける管理と記録、枯れてきたと思ったときの連絡のしかたを整理します。
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

      <section id="oita-cause" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          枯れたとき最初に問われるのは、原因がどちら側にあるか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          植えた植物が枯れる理由はいくつもあります。植え方や植える場所の選び方、持ち込んだ苗木の状態といった植えた側の事情もあれば、水やりや手入れ、天候や虫といった植えたあとの事情もあります。どちらに当たるのかで、植え直しを誰が負担するのかが変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この線引きをその都度話し合うと、どうしても言い分がぶつかります。保証の書面は、その線引きをあらかじめ決めておくためのものです。だからこそ、保証が「ある」かどうかより、何が対象で、何が対象外なのかを読むことが大切になります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            作業中の事故や近隣への損害に備える保険・補償の確かめ方は
            <Link href="/area/yokohama/" className="text-primary underline underline-offset-2 mx-1">
              高低差のある庭と保険・保証
            </Link>
            で扱っています。このページで扱うのは、作業が終わったあとに植物が根付かなかった場合の扱いです。
          </p>
        </div>
      </section>

      <section id="oita-items" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          保証について書面で確かめたい5つの項目
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          複数の会社を比べるときは、この5つを同じ順番で聞くと差が見えやすくなります。
        </p>
        <ol className="space-y-4">
          {items.map((x, i) => (
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
          見積書のどの欄にこうした条件が書かれるかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          、いつ支払い、どの時点で契約が決まるかは
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="oita-exclusion" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          免責の欄に書かれていることがある事情
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          以下は、保証の対象外として挙げられることがある事情です。どれを対象外にするかは会社によって違い、ここに並べたものがすべての会社に当てはまるわけではありません。書面に何が書かれているかを、一つずつ照らし合わせてください。
        </p>
        <div className="space-y-4">
          {exclusions.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          虫や病気の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気
          </Link>
          、植える場所の水はけについては
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="oita-kinds" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植えるものによって、確かめる点が違う
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「植栽」でも、一本の木と、何十株もの生け垣や一面の芝とでは、枯れ方も、枯れたときの直し方も違います。
        </p>
        <div className="space-y-4">
          {kinds.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          樹種の選び方は
          <Link href="/plant/symbol-tree/" className="text-primary underline underline-offset-2 mx-1">
            シンボルツリーの選び方
          </Link>
          と
          <Link href="/plant/hedge/" className="text-primary underline underline-offset-2 mx-1">
            生垣におすすめの品種
          </Link>
          、芝の日々の手入れは
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れ
          </Link>
          、生け垣を育てていく手入れは
          <Link href="/guide/hedge-care/" className="text-primary underline underline-offset-2 mx-1">
            生垣の手入れ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="oita-record" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分の側の管理と、その記録
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          保証の前提が施主側の管理にあるなら、管理していたことを後から示せるかどうかが効いてきます。手間をかけた記録である必要はなく、続けられる形で十分です。
        </p>
        <ol className="space-y-4">
          {recordPoints.map((x, i) => (
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
          根を減らした木が張り直すまでのあいだ、木の側で何が起きているかは
          <Link href="/guide/transplant/" className="text-primary underline underline-offset-2 mx-1">
            庭木の移植・植え替え
          </Link>
          、乾く時期の水のやり方は
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温と水やり
          </Link>
          で扱っています。やり取り全般の記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            食い違いに備える記録の残し方
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="oita-contact" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          枯れてきたと思ったときの連絡のしかた
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          植えてしばらくしてからの連絡は、相手にとっても久しぶりの話になります。何を植えて、いつ植えて、いまどうなっているのかを、まとめて伝えます。
        </p>
        <div className="space-y-4">
          {contactPoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          作業が終わった当日に見ておくことと、その場での手直しの頼み方は
          <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2 mx-1">
            完了時の確認と手直しの頼み方
          </Link>
          で扱っています。連絡しても返事が来ない場合の進め方は
          <Link href="/area/gifu/" className="text-primary underline underline-offset-2 mx-1">
            返事が来ないときの進め方
          </Link>
          を参考にしてください。
        </p>
      </section>

      <section id="oita-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。植栽の保証やアフターの条件は、どのサービスでも実際に植える会社ごとに異なり、公開情報からは読み取れません。そのうえで、保証を誰に確かめればよいかという観点で見ると、次の3つは仕組みに特徴があります。
        </p>
        <div className="space-y-4">
          {picks.map((slug) => {
            const r = findReview(slug);
            if (!r) return null;
            return (
              <div key={slug} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-bold text-text-primary mb-2">{r.companyName}</h3>
                <p className="text-sm text-text-muted mb-3 leading-7">運営：{infoValue(r, "運営")}</p>
                <p className="text-[15px] leading-8 text-text-secondary mb-4">{pickReasons[slug]}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href={`/review/${r.slug}/`} className="text-primary underline underline-offset-2">
                    口コミ・評判を見る
                  </Link>
                  <Link href={`/company/${r.slug}/`} className="text-primary underline underline-offset-2">
                    特徴を比較する
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="oita-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。植えたあとの保証は、ここに並ぶ運営会社ではなく、実際に施工する会社が設けている場合があるため、依頼先が決まった段階で改めて確かめてください。
        </p>
        <AreaCompanyTable cityName="大分" />
      </section>

      <section id="oita-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <div className="space-y-4">
          {checklist.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="oita-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="oita" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/transplant/", label: "庭木の移植・植え替え" },
            { href: "/plant/symbol-tree/", label: "シンボルツリーの選び方" },
            { href: "/area/kawasaki/", label: "完了時の確認と手直しの頼み方" },
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
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
          植栽の保証は、あるかどうかより、何が対象で何が対象外かを読むものです。契約の前に、同じ項目で各社に聞いてください。
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
