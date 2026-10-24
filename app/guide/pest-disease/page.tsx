import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/pest-disease/";
const UPDATED_LABEL = "2026年10月24日";
const UPDATED_ISO = "2026-10-24";
const TITLE = "庭木の害虫と病気の種類｜チャドクガ・アブラムシ・カイガラムシ・うどんこ病を症状で見分ける";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭木に多い害虫は、チャドクガ・イラガなどの毛虫、アブラムシ類、カイガラムシ類、幹を食べるカミキリムシ類（テッポウムシ）、病気はうどんこ病・すす病などです。症状から見分ける方法と、自分で対処できる範囲、業者に任せる範囲を自治体・国の資料をもとに整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭木の害虫と病気を症状から切り分け、自分で対処できる範囲と業者に任せるべき範囲を整理しています。",
  },
};

const toc = [
  { id: "pest-names", label: "庭木に多い害虫と病気の種類（早見表）" },
  { id: "pest-signs", label: "症状の現れ方から原因の目安をつける" },
  { id: "pest-danger", label: "最初に確認すべき「触れてはいけない」もの" },
  { id: "pest-bugs", label: "庭木に付く虫は食害の仕方で4つに分かれます" },
  { id: "pest-illness", label: "病気として現れる4つの症状" },
  { id: "pest-steps", label: "発見した際の手順" },
  { id: "pest-prevent", label: "発生しにくい庭にするための考え方" },
  { id: "pest-pro", label: "自分で行う範囲と、業者に任せたほうがよい範囲" },
  { id: "pest-faq", label: "よくある質問" },
];

const names = [
  {
    name: "チャドクガ（毛虫）",
    kind: "害虫・葉を食べる",
    tree: "ツバキ、サザンカなど",
    sign: "年2回（初夏と秋）発生し、初期は葉の裏に集団で付いて葉を食べる。毒針毛や鱗粉が皮膚に付くと皮膚炎を起こす",
    src: "杉並区",
  },
  {
    name: "イラガ（毛虫）",
    kind: "害虫・葉を食べる",
    tree: "サクラ、ウメ、カキなど",
    sign: "年2回（夏から秋）発生し、冬にはまゆが見られる。幼虫はトゲを持ち、触れると激しい痛みがある",
    src: "杉並区",
  },
  {
    name: "アブラムシ類",
    kind: "害虫・汁を吸う",
    tree: "サクラ類、ケヤキ、ツツジ類、マツ類など",
    sign: "成虫・幼虫が汁を吸い、生育を妨げる。種類によっては葉を巻いたり、虫こぶを作ったりする",
    src: "北海道開発局",
  },
  {
    name: "カイガラムシ類",
    kind: "害虫・枝や幹に張り付く",
    tree: "サクラ類、カエデ類、イチイなど",
    sign: "多くは殻をまとい、汁を吸う。ふ化した幼虫が移動して殻を作り、定着する",
    src: "北海道開発局",
  },
  {
    name: "カミキリムシ類（幼虫はテッポウムシ）",
    kind: "害虫・幹の内部を食べる",
    tree: "サクラ類、カエデ類、ケヤキなど",
    sign: "幼虫が樹皮の下や材の部分を食べる。被害を受けた木は枯れるか、生長が著しく妨げられる。弱った木に入りやすい",
    src: "北海道開発局",
  },
  {
    name: "うどんこ病",
    kind: "病気",
    tree: "カエデ類、ケヤキ、サクラ類など",
    sign: "新しい葉に白い粉をまぶしたような状態になる。葉がねじれたり、奇形になったりする",
    src: "北海道開発局",
  },
  {
    name: "すす病",
    kind: "病気",
    tree: "ツツジ類、ヤナギ類など",
    sign: "葉や茎の表面がすすを付けたように黒くなる。木が枯れることはないが、樹勢が衰える。カイガラムシ・アブラムシ類の駆除が対処になる",
    src: "北海道開発局",
  },
];

const signs = [
  {
    h: "葉に穴が開く、葉の縁が欠ける",
    b: "葉を食べる虫がいます。穴の大きさと欠け方で、おおよその目安がつきます。葉脈のみを残して透けるように食べられている場合は、群れで葉裏に付いていることが多く、株全体を確認する必要があります。",
  },
  {
    h: "葉が縮れる、べたつく、黒くなる",
    b: "汁を吸う虫の痕跡です。吸汁された葉は縮れ、排出された甘い液で葉がべたつき、そこに黒いすす状のものが広がります。黒いものは汚れではなく、べたつきを足場に広がったものです。虫を放置したままでは改善しません。",
  },
  {
    h: "白い粉をかぶったように見える",
    b: "葉の表面に白い粉状のものが広がる症状です。風通しが悪く、日が当たらない場所で目立ちやすくなります。茂りすぎた枝の内側から発生することが多く、枝を透かすこと自体が対処になります。",
  },
  {
    h: "幹におがくずのような粉が落ちている",
    b: "幹の内部を食い進む虫の痕跡です。外から見える被害は小さくても、内部が空洞になっていることがあります。放置すると倒木の危険につながるため、発見した時点で専門家に確認を依頼すべき症状です。",
  },
  {
    h: "枝や幹に小さな突起が並んで付いている",
    b: "動かないため虫に見えないことがありますが、枝に張り付いて汁を吸っているものがあります。取り除けば減りますが、数が多い場合は枝ごと整理したほうが効率的なこともあります。",
  },
  {
    h: "枝先から枯れ込んでくる",
    b: "原因は虫とは限りません。根の傷み、水はけ、植え付け後の環境の変化など、地面側に原因があることもあります。葉や枝のみで判断せず、根元と地面の状態もあわせてご確認ください。",
  },
];

const dangerItems = [
  {
    h: "毛に触れるとかぶれる種類の毛虫",
    b: "ツバキやサザンカの仲間に付くチャドクガの幼虫のように、毛に触れただけで強いかゆみと発疹を起こすものがあります。注意すべきなのは、虫そのものに触れなくても、風で飛んだ毛や、脱皮した抜け殻、葉に残った毛で症状が出る点です。発生している木の下で作業するだけでも被害を受けます。該当する木で毛虫を発見した場合は、素手で払わず、枝を揺らさず、一旦その場を離れてください。",
  },
  {
    h: "刺す虫の巣",
    b: "植え込みの中や軒下、幹の空洞に巣が作られることがあります。庭木の作業中に気づかずに近づくと刺されます。巣を発見した場合は自分で駆除しようとせず、専門の業者や自治体の窓口にご相談ください。庭木の手入れを依頼する際も、巣があることは事前に伝えます。",
  },
  {
    h: "触れるとかぶれる植物",
    b: "虫だけでなく、樹液に触れるとかぶれる木もあります。庭に何が植えられているか分からない状態で、素手で枝を扱うことは避けてください。作業する際は長袖と手袋の着用を基本とします。",
  },
  {
    h: "高所の作業",
    b: "害虫や病気は高い枝にも発生します。発見したからといって脚立で無理に届かせようとすると、薬剤を浴びる姿勢になったり、バランスを崩したりします。手の届く範囲を超えた場合は、そこが自分で行える作業の限界です。",
  },
];

const bugTypes = [
  {
    h: "葉を食べる種類",
    b: "幼虫が葉を食べて穴を開けます。数が少ないうちは取り除けば済みますが、群れで付いている場合は葉が一気に減ります。木そのものが枯れることは多くありませんが、樹形と外観には影響します。触れると害のある種類が含まれるため、種類が分からないうちは素手で扱わないでください。",
  },
  {
    h: "汁を吸う種類",
    b: "新芽や葉裏に群れで付き、汁を吸います。葉が縮れ、べたつき、そこから二次的な汚れが広がります。風通しの悪い場所や、肥料が効きすぎて柔らかい新芽が多い木で目立ちやすくなります。",
  },
  {
    h: "枝や幹に張り付く種類",
    b: "殻をかぶって動かないため、発見が遅れがちです。枝が黒ずんできて初めて気づくことがあります。数が少なければこすり落とせますが、広がっている場合は枝の整理とあわせて対処します。",
  },
  {
    h: "内部を食い進む種類",
    b: "幹や太い枝の内部を食べ進みます。外見からは分かりにくく、根元や幹の途中に落ちた粉が唯一の手がかりになることがあります。木の強度そのものに関わるため、自分の判断で様子を見る対象ではありません。",
  },
];

const illnessTypes = [
  {
    h: "葉の表面に白いものが広がる",
    b: "枝が混み合い、風が通らず、日が入らない条件で発生しやすくなります。放置すると葉の機能が低下し、木が弱ります。まず枝を透かして環境を改善することが対処の中心となります。",
  },
  {
    h: "葉や枝が黒くすすけて見える",
    b: "汁を吸う虫の排出物を足場に広がります。外観は汚れに近く、拭けば一時的には取れますが、虫がいる限り再び広がります。原因である虫に対処します。",
  },
  {
    h: "葉に斑点が出て、やがて落ちる",
    b: "斑点が出て葉が落ちる症状は、木の種類によって現れ方が異なります。落ちた葉をそのまま放置すると翌年に持ち越すことがあるため、拾い集めて処分します。",
  },
  {
    h: "根元や幹の一部が変色する、きのこが生える",
    b: "地際や根の傷みを示している場合があります。木の支持力に関わるため、大きな木でこの症状が出ている場合は、倒木の危険を含めて専門家に確認を依頼してください。",
  },
];

const steps = [
  {
    h: "触れる前に状況を記録する",
    b: "症状が出ている葉や枝を、近接と全体の両方で撮影します。いつから発生しているか、どの木のどの高さかも記録します。後に相談する際、この記録がそのまま説明資料になります。",
  },
  {
    h: "触れてよいものかを確認する",
    b: "毛のある虫、見慣れない虫、巣のようなものは、判断がつかないうちは払わず、揺らさず、その場を離れます。特に、毛に触れるとかぶれる種類が付きやすい木では慎重に扱ってください。",
  },
  {
    h: "被害の拡大を止める",
    b: "被害が一部の枝にとどまっている場合は、その枝を切り取って搬出するだけで数が減ります。落ちた葉や剪定した枝をその場に置いておくと、翌年再び同じ場所から発生することがあります。片づけまでを一連の対処とお考えください。",
  },
  {
    h: "環境を改善する",
    b: "枝が混み合っている、風が通らない、日が入らないといった条件は、害虫にも病気にも好都合な状態です。枝を透かすことは、外観を整えるだけでなく、再発を防ぐための手入れでもあります。",
  },
  {
    h: "薬剤を使用する場合は前提を確認する",
    b: "園芸用の薬剤には、使用できる植物と使用方法が定められています。手元にあるという理由で流用せず、対象と方法を確認してから使用してください。周囲への飛散、隣地への影響、ペットや子どもの動線もあわせて考慮します。判断がつかない場合は、散布そのものを業者に相談したほうが確実です。農林水産省・環境省の通知「住宅地等における農薬使用について」は、人が居住し、滞在する場所の植栽について、病害虫の発生の有無にかかわらず定期的に農薬を散布することをやめ、早期に発見して、被害を受けた部分のせん定や捕殺で対応するよう努めることを求めています。",
  },
  {
    h: "木そのものの状態を確認してもらう",
    b: "幹の内部が食べられている、根元が傷んでいる、大きな木の枝先が枯れ込んでいるといった症状は、倒木や落枝につながることがあります。症状の記録を持参し、現地で確認してもらってください。",
  },
];

const preventPoints = [
  {
    h: "風と光が通る枝ぶりを維持する",
    b: "混み合った内側は湿気がこもり、発見も遅れます。定期的に枝を透かしておくと、発生しやすい条件そのものが変わります。庭木の手入れが予防になるのは、この意味においてです。",
  },
  {
    h: "落ち葉と剪定した枝を残さない",
    b: "地面に残ったものが、翌年の発生源になることがあります。片づけは作業の後始末ではなく、対処の一部です。",
  },
  {
    h: "木に適した場所かどうかを考える",
    b: "日当たり、風通し、水はけについて、その木にとって無理のある場所に植えられていると、毎年同じ問題が発生します。手入れで抑え続けるか、植栽場所を見直すかの判断になります。",
  },
  {
    h: "早期に発見できる状態にしておく",
    b: "庭に出る機会が少ないほど、発見は遅れます。気づいた時点ですでに広がっていたという事態は、庭を確認する頻度によって変わります。季節の変わり目に一度、葉裏と幹を確認するだけでも効果があります。",
  },
];

const proWork = [
  {
    h: "自分で行いやすいこと",
    items: [
      "症状が出ている葉や枝の記録（写真と日付）",
      "手の届く範囲の、被害が出た枝の切り取りと搬出",
      "落ち葉や切った枝の片づけ",
      "枝が混み合っていないかの確認",
    ],
  },
  {
    h: "業者に任せたほうがよいこと",
    items: [
      "触れると害のある虫が発生している木の処理",
      "刺す虫の巣がある場所での作業",
      "幹の内部や根元が傷んでいる木の診断",
      "高い枝への対処と、広い範囲への薬剤の散布",
    ],
  },
];

const faqs = [
  {
    q: "庭木に付く害虫には、どのような種類がありますか。",
    a: "葉を食べるチャドクガ・イラガなどの毛虫、汁を吸うアブラムシ類、枝や幹に張り付くカイガラムシ類、幹の内部を食べるカミキリムシ類（幼虫はテッポウムシ）が代表的です。杉並区は、チャドクガはツバキ・サザンカなどに年2回（初夏と秋）発生し、毒針毛や鱗粉が皮膚に付くと皮膚炎を起こすと案内しています。病気では、うどんこ病やすす病がよく見られ、すす病はカイガラムシやアブラムシ類の駆除が対処になります。",
  },
  {
    q: "虫の種類が分からないときは、どうすればよいですか。",
    a: "まず触れずに撮影してください。近接の写真と、その虫がどの木のどこに付いていたかが分かる写真の両方があると、相談の際に絞り込みやすくなります。特に毛のある虫は、触れただけで症状が出る種類があるため、種類が分からないうちは払わないでください。",
  },
  {
    q: "薬剤をまけば解決しますか。",
    a: "症状によります。汁を吸う虫が原因で広がった汚れのように、虫への対処で改善するものもあれば、枝が混み合って風が通らないことが背景にあり、環境を変えなければ再発するものもあります。また、園芸用の薬剤には使用できる植物と使用方法の定めがあるため、確認せずに流用しないでください。周囲への飛散が避けられない場所では、散布そのものを業者に相談したほうが確実です。",
  },
  {
    q: "毛虫が大量に発生しています。自分で駆除できますか。",
    a: "触れるとかぶれる種類が含まれている可能性がある場合は、自分で払うことは避けてください。毛が飛散するため、木の下に立つだけで被害を受けることがあります。杉並区は、殺虫剤だけで駆除する方法は毒針毛を飛散させるため適していないとし、発生している葉を枝ごと切り落とす方法などを案内しています。発生している木の種類と、どの程度の範囲に広がっているかを伝えて、対処を依頼することが安全です。",
  },
  {
    q: "木が枯れてきました。手遅れでしょうか。",
    a: "枝先から枯れているのか、根元が傷んでいるのか、幹の内部が食べられているのかによって見通しが変わります。葉のみで判断せず、幹と根元、地面の状態まで含めて確認してもらってください。地面側に原因がある場合は、水はけの見直しが先になることもあります。",
  },
  {
    q: "毎年同じ木に同じ症状が出ます。",
    a: "その木にとって条件が適していない可能性があります。枝を透かして風と光を通す、落ち葉を残さないといった手入れで抑えられることもありますが、植栽場所そのものが原因であれば、毎年の対処を続けるか、配置を見直すかの判断になります。",
  },
];

export default function PestDiseasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭木の害虫と病気を症状から切り分け、自分で対処できる範囲と業者に任せるべき範囲を整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭木の害虫と病気" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭木に多い害虫は、ツバキやサザンカに付くチャドクガ、サクラやウメに付くイラガなどの毛虫、新芽の汁を吸うアブラムシ類、枝に張り付くカイガラムシ類、幹の内部を食べるカミキリムシ類（幼虫はテッポウムシ）です。
          病気では、葉が白い粉をまぶしたようになるうどんこ病、葉が黒くすすけるすす病がよく見られます。
          チャドクガは毒針毛に触れると皮膚炎を起こすため、名前が分からない毛虫は素手で払わないでください。
          本ページでは、症状から原因を絞り込む手順と、自分で対処してよい範囲、触れてはいけないもの、業者に任せる範囲を整理します。
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

      <section id="pest-names" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭木に多い害虫と病気の種類（早見表）
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自治体と国の資料に掲載されている、庭木や街路樹に多い害虫と病気です。付きやすい木は資料に挙げられている例で、これ以外の木に発生しないという意味ではありません。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead className="bg-surface-alt">
              <tr>
                <th className="p-3 text-left border-b border-border">名前</th>
                <th className="p-3 text-left border-b border-border">分類</th>
                <th className="p-3 text-left border-b border-border">付きやすい木の例</th>
                <th className="p-3 text-left border-b border-border">症状・特徴</th>
                <th className="p-3 text-left border-b border-border">出典</th>
              </tr>
            </thead>
            <tbody>
              {names.map((n) => (
                <tr key={n.name} className="align-top">
                  <td className="p-3 border-b border-border font-bold text-text-primary">{n.name}</td>
                  <td className="p-3 border-b border-border text-text-secondary">{n.kind}</td>
                  <td className="p-3 border-b border-border text-text-secondary">{n.tree}</td>
                  <td className="p-3 border-b border-border text-text-secondary leading-7">{n.sign}</td>
                  <td className="p-3 border-b border-border text-text-muted">{n.src}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs leading-6 text-text-muted mt-3">
          出典：杉並区「
          <a href="https://www.city.suginami.tokyo.jp/s102/846.html" target="_blank" rel="noopener noreferrer" className="underline">樹木に発生する毛虫</a>
          」（2024年3月8日更新）、国土交通省北海道開発局 旭川開発建設部「
          <a href="https://www.hkd.mlit.go.jp/as/douro_keikaku/vkvvn800000013xn-att/ryokuka3_8.pdf" target="_blank" rel="noopener noreferrer" className="underline">道路緑化技術資料（病害虫）</a>
          」（平成15年度版）。いずれも2026年10月24日確認。
        </p>
      </section>

      <section id="pest-signs" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          症状の現れ方から原因の目安をつける
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          害虫か病気かは、見えている症状で大きく分かれます。食べられた跡があれば害虫、表面に何かが広がっていれば病気というのが、おおまかな判断の目安です。
          ただし、両者は関連していることも多く、虫が先に発生し、その結果として別の症状が出ている場合もあります。
        </p>
        <div className="space-y-4">
          {signs.map((s) => (
            <div key={s.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{s.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pest-danger" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          最初に確認すべき「触れてはいけない」もの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          対処方法より先に、こちらをお読みください。庭木の手入れで実際に被害を受けるのは、木ではなく作業する人です。
        </p>
        <div className="space-y-4">
          {dangerItems.map((d) => (
            <div key={d.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{d.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{d.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pest-bugs" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭木に付く虫は食害の仕方で4つに分かれます
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          種類を一つずつ覚えなくても、食害の仕方で分ければ、対処の方向性が分かります。
        </p>
        <ol className="space-y-4">
          {bugTypes.map((b, i) => (
            <li key={b.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{b.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{b.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="pest-illness" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          病気として現れる4つの症状
        </h2>
        <div className="space-y-4">
          {illnessTypes.map((t) => (
            <div key={t.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{t.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{t.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          症状が地面側の条件によるものと考えられる場合は、
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          もあわせてご確認ください。根が常に湿った状態にあると、葉や枝の症状として現れることがあります。
        </p>
      </section>

      <section id="pest-steps" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          発見した際の手順
        </h2>
        <ol className="space-y-4">
          {steps.map((s, i) => (
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          農薬の使用については、農林水産省「
          <a href="https://www.maff.go.jp/j/nouyaku/n_tekisei/jutakuti/20130426tuchi.html" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">住宅地等における農薬使用について</a>
          」（平成25年4月26日・2026年10月24日確認）もあわせてご確認ください。
          切り取った枝や集めた葉の処分方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          にまとめています。庭に残したままにしないことが、対処の一部です。
        </p>
      </section>

      <section id="pest-prevent" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          発生しにくい庭にするための考え方
        </h2>
        <div className="space-y-4">
          {preventPoints.map((p) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{p.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          季節ごとに行う作業は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。手入れの予定に組み込んでおけば、確認する機会も自然に増えます。
        </p>
      </section>

      <section id="pest-pro" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分で行う範囲と、業者に任せたほうがよい範囲
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {proWork.map((p) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-3">{p.h}</h3>
              <ul className="space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[15px] leading-7 text-text-secondary">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="pest-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/plant/low-maintenance/", label: "手入れが容易な庭木のおすすめ" },
            { href: "/guide/pine-care/", label: "庭の松の手入れ" },
            { href: "/guide/dead-tree/", label: "庭木が枯れたかどうかの見分け方" },
            { href: "/guide/tree-doctor/", label: "樹木医に相談する場面" },
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
          触れると危険な虫や、幹の内部に関わる症状は、無理をせず一度専門家に確認を依頼してください。
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
