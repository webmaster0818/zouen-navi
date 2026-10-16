import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/oita/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "大分の造園・庭の手入れ業者の選び方｜植栽後の保証とアフターサービスの確認方法";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "植栽した木や生垣、芝が枯れた場合の扱いは、会社ごとに異なります。保証の有無・対象・期間・対応内容・免責を、契約前に書面で確認する項目として整理しています。植栽後の水やりなど依頼者側の管理と記録の残し方、枯れ始めた場合の連絡方法もまとめ、掲載サービスの運営会社・対応エリアを一覧にしています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "植栽を依頼した後に枯れた場合の扱いを、契約前に書面で確認する項目として整理しています。",
  },
};

const toc = [
  { id: "oita-cause", label: "枯れた場合に最初に問われるのは原因の所在です" },
  { id: "oita-items", label: "保証について書面で確認すべき5つの項目" },
  { id: "oita-exclusion", label: "免責の欄に記載されることがある事情" },
  { id: "oita-kinds", label: "植栽する植物によって確認すべき点が異なります" },
  { id: "oita-record", label: "依頼者側の管理とその記録" },
  { id: "oita-contact", label: "枯れ始めた場合の連絡方法" },
  { id: "oita-pick", label: "この条件に適した3サービス" },
  { id: "oita-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "oita-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "oita-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-master", "oniwa-110", "houzz"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-master":
    "自社では施工せず、要望に合う業者を無料で紹介する仕組みで、受付は24時間365日とされています。紹介型であるため、植栽後の保証を誰が引き受けるのか、つまり紹介元の窓口なのか、実際に植栽した加盟業者なのかを、契約前に区別して確認する必要があります。枯れた場合の連絡先がどちらになるのかもあわせてご確認ください。見積もりは無料（一部調査費用は別途）と公表されています。運営は株式会社アシストです。",
  "oniwa-110":
    "全国の加盟店を紹介・手配する形式で、剪定・伐採・抜根などに加えて植栽にも対応しています。運営する上場企業が請負賠償保険に加入しているとされていますが、こうした保険は一般に作業中の事故で生じた損害に備えるものであり、植栽した木が後に枯れた場合の扱いとは別の問題です。両者を混同せず、植栽の保証については施工する加盟店に条件をご確認ください。運営はシェアリングテクノロジー株式会社（東証上場・証券コード3989）です。",
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価付きの口コミが掲載されています。植栽を含む庭づくりを専門家に依頼する場合、保証やアフターサービスの条件は専門家ごとに異なるため、候補を絞った段階で、それぞれに同じ項目を確認して比較する使い方ができます。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
};

const items = [
  {
    h: "保証の有無",
    b: "まず、植栽した植物について保証を設けているかどうかを確認します。保証を設けていない会社もあり、それ自体が問題というわけではありません。ただし、保証がない場合は、枯れた際に改めて依頼する形になることを、依頼前に把握しておく必要があります。口頭での「何かあればご連絡ください」は、保証とは別のものとして扱います。",
  },
  {
    h: "保証の対象",
    b: "植物そのものなのか、植え付けの作業なのか、支柱や土の入れ替えまで含むのかを確認します。シンボルツリーは対象であっても、草花や地被植物は対象外という場合もあります。生垣や芝のように数がまとまっているものは、一部のみ枯れた場合の扱いも確認しておきます。",
  },
  {
    h: "保証の期間",
    b: "期間は会社によって異なり、標準的な長さはありません。起算日が植栽日なのか引き渡し日なのか、植え付けの適期を外して植栽した場合に扱いが変わるのかも、書面でご確認ください。期間の長さのみで比較せず、次の項目とあわせて確認します。",
  },
  {
    h: "枯れた場合の対応内容",
    b: "同じ種類の植物を植え直すのか、同等の大きさのものを用意するのか、費用の一部を負担するのかを確認します。枯れた木の抜根・処分や、植え直しに伴う出張の扱いが含まれるかどうかによっても、実際の負担は変わります。「同等」が何を指すのか、高さや株立ちの本数まで明記してもらえると、後の相違を防げます。",
  },
  {
    h: "保証の対象外となる場合（免責）",
    b: "どのような事情があれば保証の対象外となるかが、実際には最も重要な欄です。水やりや管理の指示に従っていなかった場合、天候や災害による場合などが挙げられることがあります。次の節で、記載されることがある事情を整理しています。",
  },
];

const exclusions = [
  {
    h: "水やり不足・管理の指示と異なる扱い",
    b: "植栽直後の植物は根が十分に張っておらず、乾燥に弱い状態です。そのため、水やりなど施主側の管理を保証の前提としている会社があります。どの程度の水やりを求めているのかが書面で具体的に示されているかを確認し、示されていなければ確認してください。指示がない状態で「水やり不足」と指摘されても、依頼者は判断できません。",
  },
  {
    h: "天候・災害",
    b: "強風、大雨、記録的な暑さや寒さ、雪の重みなど、人の手で防げない事情による枯死や倒木を対象外とする記載があります。どこからが「災害」に該当するのか、基準を確認しておくと、後のやり取りが円滑になります。",
  },
  {
    h: "病害虫・動物",
    b: "害虫や病気、動物による被害を対象外とする場合があります。植栽時点ですでに持ち込まれていた場合と、後から付いた場合で扱いが分かれることもあるため、それぞれの扱いを確認しておきます。",
  },
  {
    h: "施主による移植・剪定・工事",
    b: "植栽した木を自分で移動した、強く剪定した、近くで別の工事を行い根を傷めたといった場合です。植栽後に庭に手を加える予定がある場合は、その前に植栽した会社に相談しておくと、保証の対象外とならずに済む場合があります。",
  },
  {
    h: "植栽場所の条件が後から変化した場合",
    b: "隣に建物が建って日が当たらなくなった、水はけが変わったなど、植栽後に条件が変化した場合です。反対に、植栽場所そのものが植物に適していなかった場合を、提案した側の責任としてどのように扱うのかも、確認しておく価値があります。",
  },
];

const kinds = [
  {
    h: "シンボルツリー",
    b: "一本の存在感が大きく、植え直す場合は手間も大きくなります。保証の対象であることに加えて、枯れた場合に用意される木が同じ樹種・同程度の高さなのかを確認します。株立ちの木であれば、幹の本数も「同等」の内容に含まれます。",
  },
  {
    h: "生垣",
    b: "複数の株がつながって一つの形を構成しています。数本のみ枯れた場合に、その分のみを植え直すのか、全体の高さを揃えるのかによって、仕上がりも費用も変わります。何本まで対象となるのか、どの状態を「枯れ」と判断するのかも確認しておきます。",
  },
  {
    h: "芝張り",
    b: "季節によって葉の色が変わる芝もあり、茶色くなったからといって枯れたとは限りません。どの状態を根付かなかったと判断するのか、張った後の目土や水やり、刈り込みの指示がどうなっているのかを確認します。部分的に根付かなかった場合の張り直しの扱いも確認しておきます。",
  },
  {
    h: "草花・地被・低木",
    b: "単価の小さいものは、保証の対象から除外されていることがあります。対象かどうかを一つずつ確認しておくと、枯れた場合に自分で買い足すのか、相談できるのかが分かります。",
  },
];

const recordPoints = [
  {
    h: "管理の指示を書面で受け取る",
    b: "水やりの回数や時期、支柱の結び直し、肥料を与えてよい時期など、植栽した業者から受けた指示を書面かメッセージで受け取っておきます。口頭で聞いた内容は後で相違が生じやすく、保証の前提が依頼者側の管理にある場合は特に重要です。",
  },
  {
    h: "水やりの日を記録する",
    b: "カレンダーに印を付ける、スマートフォンのメモに記録するといった簡単な方法で構いません。雨が降った日も記録しておくと、乾燥していた期間を後から確認できます。",
  },
  {
    h: "植栽日とその後の状態を写真に残す",
    b: "植栽当日、数週間後、季節が変わった頃と、同じ位置から撮影しておきます。葉の色や量の変化が分かり、異変に気づいた際に、いつから始まったのかを示す材料になります。撮影日が分かる形で保存してください。",
  },
  {
    h: "自分で手を加える前に確認する",
    b: "伸びた枝を剪定したい、肥料を与えたい、近くに別の植物を植えたいと考えた場合は、保証の期間中はまず植栽した会社に相談します。善意で行ったことが、保証の対象外となる理由になる場合があります。",
  },
];

const contactPoints = [
  {
    h: "異変に気づいた時点で早めに連絡する",
    b: "葉がしおれる、色が抜ける、落葉の時期でないのに葉が落ちるといった変化に気づいたら、様子を見続けるより先に連絡します。早い段階であれば手当てにより回復することもあり、保証期間内に連絡したという記録にもなります。",
  },
  {
    h: "写真と記録を添える",
    b: "現在の状態の写真に加えて、植栽当日の写真と水やりの記録を添えます。業者が現地を訪れる前に状況を把握でき、依頼者が指示に沿って管理していたことも伝わります。",
  },
  {
    h: "書面の該当箇所を示す",
    b: "保証の書面のどの項目に該当すると考えているのかを、依頼者から示します。「保証してもらえますか」とのみ確認するより、相談が具体的になります。",
  },
  {
    h: "原因の判断は現地確認の後に行う",
    b: "枯れた原因が植え方にあるのか、管理や天候にあるのかは、外観のみでは判断しにくいものです。まず現地で確認してもらい、どのように判断したのかの説明を受けます。納得できない点があれば、その場で結論を出さずに、説明の内容を書面かメッセージで残してもらってください。",
  },
];

const checklist = [
  {
    h: "保証の有無を書面で確認したか",
    b: "口頭の「何かあれば」ではなく、書面に記載されているかどうかを確認します。",
  },
  {
    h: "対象・期間・起算日を確認したか",
    b: "どの植物が、いつからいつまで対象となるのかを書面で確認します。",
  },
  {
    h: "枯れた場合の対応内容を確認したか",
    b: "植え直しか費用の一部負担か、撤去・処分や出張の扱いも含めて確認します。",
  },
  {
    h: "免責の条件と管理の指示を受け取ったか",
    b: "水やりなど依頼者側に求められる事項が、具体的に記載されているかを確認します。",
  },
  {
    h: "紹介型の場合、保証の引受者を確認したか",
    b: "窓口と施工した会社のどちらに連絡するのかを、契約前に区別して確認します。",
  },
];

const faqs = [
  {
    q: "植えた木の保証は、何年くらいが普通ですか。",
    a: "標準的な期間はありません。保証を設けていない会社もあれば、植物の種類によって期間を分けている会社もあり、対象や免責の条件も含めて会社ごとに異なります。期間の長さのみで比較すると、免責の条件が厳しいために実際には利用しにくいということも起こり得ます。対象・期間・起算日・対応内容・免責を、同じ項目で各社に確認して比較してください。",
  },
  {
    q: "「枯れたら植え直します」と口頭で言われました。書面にしてもらう必要はありますか。",
    a: "保証として扱う場合は、書面かメッセージで残してもらうことをおすすめします。口頭の約束は、担当者の交代や時間の経過により、条件に相違が生じやすくなります。見積書や契約書の備考欄に一行記載してもらうだけでも効果があります。書面の確認方法全般は神戸のページで解説しています。",
  },
  {
    q: "紹介型のサービスを通して植えてもらいました。枯れたときは誰に連絡すればよいですか。",
    a: "多くの場合、実際に植栽した会社と、紹介した窓口の両方が関わっています。保証を引き受けているのがどちらなのか、連絡の窓口がどちらなのかは、サービスによって異なります。契約前に区別して確認しておき、確認していなかった場合は、まず書面に記載されている連絡先にお問い合わせください。自社施工型と紹介型の違いは名古屋のページで解説しています。",
  },
  {
    q: "作業当日に見ておくことと、植えたあとの保証は何が違いますか。",
    a: "作業完了日に確認すべきなのは、植え付けの深さや支柱、片づけといった、その場で確認できる点です。植栽後の保証は、数週間から季節をまたいで現れる変化を扱います。作業当日の確認と手直しの依頼方法は川崎のページ、植栽後の一年間に木の側で何が起きているかは庭木の移植・植え替えのページで解説しています。",
  },
  {
    q: "大分市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、大分市内での個別の対応可否・作業日程・出張範囲、植栽の保証の条件は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "植栽・生垣・シンボルツリー・芝張りを依頼した後に枯れた場合の扱いを、契約前に書面で確認する項目と、施主側の管理と記録として整理しています。",
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
          剪定や草刈りは、作業完了日に仕上がりを確認できます。植栽はそうではありません。植栽した木や生垣、張った芝が根付いたかどうかは、数週間から季節をまたいで徐々に分かります。その間に枯れてしまった場合、植え直してもらえるのか、改めて費用がかかるのかは、会社ごとに扱いが異なります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          大分市内の住宅の庭で植栽を依頼する場合も同様です。本ページでは、植栽後の保証とアフターサービスについて、契約前に書面で確認すべき項目と、植栽後に依頼者側で続ける管理と記録、枯れ始めた場合の連絡方法を整理します。
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
          枯れた場合に最初に問われるのは原因の所在です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          植栽した植物が枯れる理由は複数あります。植え方や植栽場所の選び方、持ち込んだ苗木の状態といった植栽した側の事情もあれば、水やりや手入れ、天候や害虫といった植栽後の事情もあります。どちらに該当するかによって、植え直しの費用を誰が負担するのかが変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この線引きをその都度話し合うと、双方の主張が対立しがちです。保証の書面は、その線引きを事前に決めておくためのものです。そのため、保証の有無よりも、何が対象で何が対象外なのかを読むことが重要です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            作業中の事故や近隣への損害に備える保険・補償の確認方法は
            <Link href="/area/yokohama/" className="text-primary underline underline-offset-2 mx-1">
              高低差のある庭と保険・保証
            </Link>
            で解説しています。本ページで扱うのは、作業完了後に植物が根付かなかった場合の扱いです。
          </p>
        </div>
      </section>

      <section id="oita-items" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          保証について書面で確認すべき5つの項目
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          複数の会社を比較する際は、この5項目を同じ順序で確認すると、違いが分かりやすくなります。
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
          見積書のどの欄にこうした条件が記載されるかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          、支払いの時期と契約の成立時点は
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="oita-exclusion" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          免責の欄に記載されることがある事情
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          以下は、保証の対象外として挙げられることがある事情です。どの事情を対象外とするかは会社によって異なり、ここに挙げたものがすべての会社に当てはまるわけではありません。書面の記載内容と一つずつ照合してください。
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
          害虫や病気の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気
          </Link>
          、植栽場所の水はけについては
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="oita-kinds" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植栽する植物によって確認すべき点が異なります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「植栽」でも、一本の木と、多数の株からなる生垣や一面の芝とでは、枯れ方も、枯れた場合の対処方法も異なります。
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
          、芝の日常の手入れは
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れ
          </Link>
          、生垣を育てる手入れは
          <Link href="/guide/hedge-care/" className="text-primary underline underline-offset-2 mx-1">
            生垣の手入れ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="oita-record" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          依頼者側の管理とその記録
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          保証の前提が施主側の管理にある場合は、管理していたことを後から示せるかどうかが重要になります。手間をかけた記録である必要はなく、継続できる形式で十分です。
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
          根を減らした木が再び根を張るまでの間に木の側で何が起きているかは
          <Link href="/guide/transplant/" className="text-primary underline underline-offset-2 mx-1">
            庭木の移植・植え替え
          </Link>
          、乾燥する時期の水やりの方法は
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温と水やり
          </Link>
          で解説しています。やり取り全般の記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            認識の相違に備える記録の残し方
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="oita-contact" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          枯れ始めた場合の連絡方法
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          植栽からしばらく経過した後の連絡は、業者にとっても久しぶりの案件になります。何を植栽し、いつ植栽し、現在どのような状態かを、まとめて伝えます。
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
          作業完了当日に確認すべき事項と、その場での手直しの依頼方法は
          <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2 mx-1">
            完了時の確認と手直しの依頼方法
          </Link>
          で解説しています。連絡しても返信がない場合の進め方は
          <Link href="/area/gifu/" className="text-primary underline underline-offset-2 mx-1">
            返信がない場合の対応
          </Link>
          をご参照ください。
        </p>
      </section>

      <section id="oita-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。植栽の保証やアフターサービスの条件は、どのサービスでも実際に植栽する会社ごとに異なり、公開情報からは読み取れません。そのうえで、保証を誰に確認すればよいかという観点では、次の3サービスの仕組みにそれぞれ特徴があります。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。植えたあとの保証は、ここに並ぶ運営会社ではなく、実際に施工する会社が設けている場合があるため、依頼先が決まった段階で改めて確かめてください。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/transplant/", label: "庭木の移植・植え替え" },
            { href: "/plant/symbol-tree/", label: "シンボルツリーの選び方" },
            { href: "/area/kawasaki/", label: "完了時の確認と手直しの依頼方法" },
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
          植栽の保証は、有無よりも、何が対象で何が対象外かを確認することが重要です。契約前に、同じ項目で各社にご確認ください。
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
