import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/pest-disease/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "庭木の害虫と病気｜症状の見分け方と、広げないための対処";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "葉が食われた、白い粉が吹いた、幹におがくずが落ちている。庭木に出る異変は、症状の出方で原因のあたりが付きます。触れると危険な虫の見分け方、自分で手を出してよい範囲、薬剤を使うときの前提、業者に見てもらうべき状態までを整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭木の害虫と病気を症状から切り分け、自分で対処できる範囲と任せるべき範囲を整理しました。",
  },
};

const toc = [
  { id: "pest-signs", label: "症状の出方で、原因のあたりを付ける" },
  { id: "pest-danger", label: "先に確認したい「触ってはいけない」もの" },
  { id: "pest-bugs", label: "庭木に付く虫は、食べ方で4つに分かれる" },
  { id: "pest-illness", label: "病気として現れる4つの見え方" },
  { id: "pest-steps", label: "見つけたときの手順" },
  { id: "pest-prevent", label: "出にくい庭にするための考え方" },
  { id: "pest-pro", label: "自分でやる範囲と、任せたほうがよい範囲" },
  { id: "pest-faq", label: "よくある質問" },
];

const signs = [
  {
    h: "葉に穴が開く、葉のふちが欠ける",
    b: "葉をかじる虫がいます。穴の大きさと欠け方で、だいたいの見当が付きます。葉脈だけを残して透けるように食われている場合は、群れで葉裏に付いていることが多く、株全体を見回す必要があります。",
  },
  {
    h: "葉が縮れる、べたつく、黒くなる",
    b: "汁を吸う虫の痕跡です。吸われた葉は縮れ、排出された甘い液で葉がべたつき、そこに黒いすすのようなものが広がります。黒いのは汚れではなく、べたつきを足場に広がったものです。虫を放置したままでは戻りません。",
  },
  {
    h: "白い粉をかぶったように見える",
    b: "葉の表面に白い粉状のものが広がる症状です。風通しが悪く、日が当たらない場所で目立ちやすくなります。茂りすぎた枝の内側から出ることが多く、枝を透かすこと自体が対処になります。",
  },
  {
    h: "幹におがくずのような粉が落ちている",
    b: "幹の内部を食い進む虫の痕跡です。外から見える被害は小さくても、内部が空洞になっていることがあります。放置すると木が倒れる危険につながるため、見つけた時点で専門家に見てもらう種類の症状です。",
  },
  {
    h: "枝や幹に小さな突起が並んで付いている",
    b: "動かないため虫に見えないことがありますが、枝に貼り付いて汁を吸っているものがあります。取り除けば減りますが、数が多い場合は枝ごと整理したほうが早いこともあります。",
  },
  {
    h: "枝先から枯れ込んでくる",
    b: "虫とは限りません。根の傷み、水はけ、植え付け後の環境の変化など、地面側に原因があることもあります。葉や枝だけを見て判断せず、根元と地面の状態も併せて確認してください。",
  },
];

const dangerItems = [
  {
    h: "毛に触れるとかぶれる種類の毛虫",
    b: "ツバキやサザンカの仲間に付く毛虫のように、毛に触れただけで強いかゆみと発疹を起こすものがあります。厄介なのは、虫そのものに触れなくても、風で飛んだ毛や、脱皮した抜け殻、葉に残った毛で症状が出る点です。発生している木の下で作業するだけでも被害に遭います。心当たりのある木で毛虫を見つけたら、素手で払わず、枝を揺らさず、いったん離れてください。",
  },
  {
    h: "刺す虫の巣",
    b: "植え込みの中や軒下、幹の空洞に巣が作られることがあります。庭木の作業中に気づかず近づくと刺されます。巣を見つけた場合は自分で駆除しようとせず、専門の業者や自治体の窓口に相談してください。庭木の手入れを頼むときも、巣があることは先に伝えます。",
  },
  {
    h: "触れるとかぶれる植物",
    b: "虫だけでなく、樹液に触れるとかぶれる木もあります。庭に何が植わっているか分からない状態で、素手で枝を扱うのは避けてください。作業するときは長袖と手袋を基本にします。",
  },
  {
    h: "高い場所の作業",
    b: "虫や病気は高い枝にも出ます。見つけたからといって脚立で無理に届かせようとすると、薬剤を浴びる姿勢になったり、バランスを崩したりします。手の届く範囲を超えたら、そこが自分の作業の限界です。",
  },
];

const bugTypes = [
  {
    h: "葉を食べるタイプ",
    b: "幼虫が葉を食べて穴を開けます。数が少ないうちは取り除けば済みますが、群れで付いている場合は葉が一気に減ります。木そのものが枯れることは多くありませんが、樹形と見た目には影響します。触れると害のある種類が混ざるため、種類が分からないうちは素手で扱わないでください。",
  },
  {
    h: "汁を吸うタイプ",
    b: "新芽や葉裏に群れて付き、汁を吸います。葉が縮れ、べたつき、そこから二次的な汚れが広がります。風通しの悪い場所と、肥料が効きすぎて柔らかい新芽が多い木で目立ちやすくなります。",
  },
  {
    h: "枝や幹に貼り付くタイプ",
    b: "殻をかぶって動かないため、発見が遅れがちです。枝が黒ずんできて初めて気づくことがあります。数が少なければこすり落とせますが、広がっている場合は枝の整理と併せて対処します。",
  },
  {
    h: "内部を食い進むタイプ",
    b: "幹や太い枝の内部を食べ進みます。外見からは分かりにくく、根元や幹の途中に落ちた粉が唯一の手がかりになることがあります。木の強度そのものに関わるため、自己判断で様子を見る対象ではありません。",
  },
];

const illnessTypes = [
  {
    h: "葉の表面に白いものが広がる",
    b: "枝が混み合い、風が通らず、日が入らない条件で出やすくなります。放っておくと葉の働きが落ち、木が弱ります。まず枝を透かして環境を変えることが対処の中心になります。",
  },
  {
    h: "葉や枝が黒くすすけて見える",
    b: "汁を吸う虫の排出物を足場に広がります。見た目は汚れに近く、拭けば一時的には取れますが、虫がいる限り再び広がります。原因である虫のほうに対処します。",
  },
  {
    h: "葉に斑点が出て、やがて落ちる",
    b: "斑点が出て葉が落ちる症状は、木の種類によって現れ方が違います。落ちた葉をそのまま放置すると翌年に持ち越すことがあるため、拾い集めて処分します。",
  },
  {
    h: "根元や幹の一部が変色する、きのこが生える",
    b: "地際や根の傷みを示している場合があります。木の支持力に関わるため、大きな木でこの症状が出ているときは、倒れる危険を含めて見てもらってください。",
  },
];

const steps = [
  {
    h: "触る前に、何が起きているか記録する",
    b: "症状が出ている葉や枝を、寄りと引きの両方で撮影します。いつから出ているか、どの木のどの高さかも書き留めます。あとで相談するときに、この記録がそのまま説明になります。",
  },
  {
    h: "触れてよいものかを確かめる",
    b: "毛のある虫、見たことのない虫、巣のようなもの。判断が付かないうちは払わず、揺らさず、その場を離れます。特に、毛に触れるとかぶれる種類が付きやすい木では慎重に扱ってください。",
  },
  {
    h: "広がりを止める",
    b: "被害が一部の枝に留まっているなら、その枝を切り取って持ち出すだけで数が減ります。落ちた葉や切った枝をその場に置いておくと、翌年また同じ場所から出ることがあります。片づけまでを一組と考えてください。",
  },
  {
    h: "環境を変える",
    b: "枝が混み合っている、風が抜けない、日が入らない。こうした条件は、虫にも病気にも都合がよい状態です。枝を透かすことは、見た目を整えるだけでなく、次に出にくくするための手入れでもあります。",
  },
  {
    h: "薬剤を使う場合は、前提を確認する",
    b: "園芸用の薬剤には、使える植物と使い方が定められています。手元にあるからという理由で流用せず、対象と方法を確認してから使ってください。周囲への飛散、隣地への影響、ペットや子どもの動線も併せて考えます。判断が付かない場合は、散布そのものを業者に相談したほうが確実です。",
  },
  {
    h: "木そのものの状態を見てもらう",
    b: "幹の内部を食われている、根元が傷んでいる、大きな木の枝先が枯れ込んでいる。こうした症状は、倒木や落枝につながることがあります。症状の記録を持って、現地で見てもらってください。",
  },
];

const preventPoints = [
  {
    h: "風と光が通る枝ぶりを保つ",
    b: "混み合った内側は、湿気がこもり、発見も遅れます。定期的に枝を透かしておくと、条件そのものが変わります。庭木の手入れが予防になるのは、この意味においてです。",
  },
  {
    h: "落ち葉と切った枝を残さない",
    b: "地面に残ったものが、翌年の発生源になることがあります。片づけは作業の後始末ではなく、対処の一部です。",
  },
  {
    h: "木に合った場所かどうかを考える",
    b: "日当たり、風通し、水はけ。その木にとって無理のある場所に植わっていると、毎年同じ問題が出ます。手入れで押さえ続けるか、植える場所を見直すかという判断になります。",
  },
  {
    h: "早く見つけられる状態にしておく",
    b: "庭に入る機会が少ないほど、発見は遅れます。気づいたときには広がっていたという事態は、庭を見る頻度で変わります。季節の変わり目に一度、葉裏と幹を見て回るだけでも違います。",
  },
];

const proWork = [
  {
    h: "自分でやりやすいこと",
    items: [
      "症状が出ている葉や枝の記録（写真と日付）",
      "手の届く範囲の、被害が出た枝の切り取りと持ち出し",
      "落ち葉や切った枝の片づけ",
      "枝が混み合っていないかの確認",
    ],
  },
  {
    h: "任せたほうがよいこと",
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
    q: "虫の種類が分からないときは、どうすればよいですか。",
    a: "まず触らずに撮影してください。寄りの写真と、その虫がどの木のどこに付いていたかが分かる写真の両方があると、相談したときに絞り込みやすくなります。特に毛のある虫は、触れただけで症状が出る種類があるため、種類が分からないうちは払わないでください。",
  },
  {
    q: "薬剤をまけば解決しますか。",
    a: "症状によります。汁を吸う虫が原因で広がった汚れのように、虫への対処で収まるものもあれば、枝が混み合って風が通らないことが背景にあり、環境を変えなければ再発するものもあります。また園芸用の薬剤には使える植物と使い方の定めがあるため、確認せずに流用しないでください。周囲への飛散が避けられない場所では、散布そのものを業者に相談したほうが確実です。",
  },
  {
    q: "毛虫が大量に発生しています。自分で駆除できますか。",
    a: "触れるとかぶれる種類が含まれている可能性がある場合、自分で払うのは避けてください。毛が飛ぶため、木の下に立つだけで被害に遭うことがあります。発生している木の種類と、どのくらいの範囲に広がっているかを伝えて、対処を依頼するのが安全です。",
  },
  {
    q: "木が枯れてきました。手遅れでしょうか。",
    a: "枝先から枯れているのか、根元が傷んでいるのか、幹の内部が食われているのかで見通しが変わります。葉だけを見て判断せず、幹と根元、そして地面の状態まで含めて見てもらってください。地面側に原因がある場合は、水はけの見直しが先になることもあります。",
  },
  {
    q: "毎年同じ木に同じ症状が出ます。",
    a: "その木にとって条件が合っていない可能性があります。枝を透かして風と光を通す、落ち葉を残さないといった手入れで抑えられることもありますが、植わっている場所そのものが原因なら、毎年の対処を続けるか、配置を見直すかという判断になります。",
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
          "庭木の害虫と病気を症状から切り分け、自分で対処できる範囲と任せるべき範囲を整理しました。",
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
          庭木の異変は、たいてい葉から始まります。穴が開いている、縮れている、白い粉をかぶっている、触るとべたつく。
          虫の名前を突き止めるのは簡単ではありませんが、症状の出方を手がかりにすれば、何が起きているかのあたりは付きます。
          このページでは、症状から原因を絞る筋道と、自分で手を出してよい範囲、そして触ってはいけないものを整理します。
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

      <section id="pest-signs" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          症状の出方で、原因のあたりを付ける
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          虫か病気かは、見えている症状で大きく分かれます。食われた跡があるなら虫、表面に何かが広がっているなら病気というのが、おおまかな入り口です。
          ただし両者はつながっていることも多く、虫が先にいて、その結果として別の症状が出ている場合もあります。
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
          先に確認したい「触ってはいけない」もの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          対処の方法より先に、こちらを読んでください。庭木の手入れで実際に人が被害を受けるのは、木の側ではなく作業する側です。
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
          庭木に付く虫は、食べ方で4つに分かれる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          種類を一つずつ覚えなくても、どう食べるかで分ければ、対処の方向は見えてきます。
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
          病気として現れる4つの見え方
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
          症状が地面側の条件から来ていると思われる場合は、
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          も併せて確認してください。根が常に湿った状態にあると、葉や枝の症状として現れることがあります。
        </p>
      </section>

      <section id="pest-steps" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見つけたときの手順
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
          切り取った枝や集めた葉の出し方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          にまとめています。庭に残したままにしないことが、対処の一部です。
        </p>
      </section>

      <section id="pest-prevent" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          出にくい庭にするための考え方
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
          季節ごとにどの作業を行うかは
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。手入れの予定に組み込んでおけば、見回る機会も自然に増えます。
        </p>
      </section>

      <section id="pest-pro" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分でやる範囲と、任せたほうがよい範囲
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/plant/low-maintenance/", label: "手入れが楽な庭木おすすめ" },
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
          触れると危険な虫や、幹の内部に関わる症状は、無理をせず一度見てもらってください。
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
