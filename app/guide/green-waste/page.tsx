import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/green-waste/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "剪定枝・刈った草の処分方法｜自治体回収・持ち込み・業者引き取りの使い分け";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の作業で最後に残るのは、剪定した枝と刈った草です。自治体の回収に出す、処理施設へ自分で持ち込む、作業を依頼した業者に引き取ってもらうといった方法について、それぞれの適否と、処分前に確認すべき規定、行ってはいけない処分方法を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "剪定枝と刈った草の処分方法を4つに整理し、選び方と確認すべき規定をまとめています。",
  },
};

const toc = [
  { id: "waste-point", label: "処分方法は作業を依頼する前に決まります" },
  { id: "waste-options", label: "処分方法は大きく4つあります" },
  { id: "waste-rule", label: "自治体の規定で確認すべき項目" },
  { id: "waste-reduce", label: "量を減らす・搬出しやすくする工夫" },
  { id: "waste-order", label: "業者に引き取りを依頼する際の決め方" },
  { id: "waste-ng", label: "行ってはいけない処分方法" },
  { id: "waste-faq", label: "よくある質問" },
];

const options = [
  {
    h: "自治体の回収に出す",
    good: "量が多くない、期限に余裕がある",
    b: "決められた曜日に、決められた形にまとめて出す方法です。束ねる長さや太さ、一度に出せる量、袋に入れるのか紐で縛るのかといった条件が細かく定められており、その内容は自治体ごとに異なります。条件を満たさないと回収されないため、剪定前に確認しておくことをおすすめします。土が付いた根や、大きな幹は対象外とされることがあります。",
  },
  {
    h: "処理施設へ自分で持ち込む",
    good: "回収日を待てない、一度に片づけたい",
    b: "自治体や指定の施設へ直接搬入する方法です。受け入れ品目、受付時間、事前予約の要否、身分証や居住の確認が必要かどうかは地域によって異なります。運搬手段を自分で確保する必要があるため、量と車両の積載量を事前に見積もっておきます。費用がかかる場合があり、金額や算定方法も地域によって異なります。",
  },
  {
    h: "作業を依頼した業者に引き取ってもらう",
    good: "量が多い、自分で運べない、当日中に片づけたい",
    b: "剪定や草刈りを依頼した業者が、剪定した枝をそのまま持ち帰る形式です。最も手間がかかりませんが、引き取りが作業に含まれているのか、別の扱いになるのかは会社によって異なります。見積もりの段階で、処分まで含むのかを必ずご確認ください。含まれていない見積もりを見て安いと判断すると、後で認識の相違が生じます。",
  },
  {
    h: "庭の中で活用する",
    good: "量が少ない、置いておける場所がある",
    b: "落ち葉や細かい草を積んで堆肥化する、細かくして地面に敷くといった活用方法です。ゴミとして出す量そのものが減ります。ただし、置き場所によっては虫が集まり、湿気の溜まり場にもなります。病気や害虫が発生した枝葉を残すことは避けてください。",
  },
];

const ruleItems = [
  {
    h: "出せる長さと太さ",
    b: "枝は長さと太さによって扱いが変わります。基準を超えたものは回収されず、別の方法が必要になります。剪定しながら基準に合わせておけば、後で切り直す手間がなくなります。",
  },
  {
    h: "一度に出せる量",
    b: "一回あたりの袋の数や束の数に上限が設けられていることがあります。上限がある場合は、複数回に分けて出すか、別の方法を併用するかを判断することになります。",
  },
  {
    h: "まとめ方（袋か束か）",
    b: "指定の袋に入れるのか、紐で縛るのかを確認します。草と枝で扱いが分かれることもあります。この点を誤ると、量が基準内であっても回収されません。",
  },
  {
    h: "土や根の扱い",
    b: "根に付いた土は、可燃ごみとして扱えないことが一般的です。抜根した根株や、土の付いた草をそのまま出せるとは限りません。事前に確認が必要な項目です。",
  },
  {
    h: "受付窓口と最新の情報",
    b: "条件は見直されることがあります。人から聞いた情報や古いメモではなく、お住まいの自治体が公開している最新の案内をご確認ください。本ページで記載できるのは、地域を問わず共通する考え方までです。",
  },
];

const reducePoints = [
  {
    h: "剪定しながら短くまとめる",
    b: "作業中に基準の長さに切り揃えておくと、後でまとめ直す必要がありません。作業後に山積みのまま置いておくと、乾燥して絡まり、扱いにくくなります。",
  },
  {
    h: "枝と草を分ける",
    b: "扱いが異なる場合があるため、最初から分けておきます。混ざったものを後から仕分けるのは、時間のかかる作業です。",
  },
  {
    h: "乾燥させてから出す",
    b: "刈ったばかりの草は水分を含んで重く、かさばります。置ける場所がある場合は、少し乾燥させてからまとめるほうが扱いやすくなります。ただし、積んだまま放置すると蒸れて傷むため、期間は短くします。",
  },
  {
    h: "搬出経路を事前に決める",
    b: "庭から道路までの通路が狭い場合は、まとめる大きさもそれに合わせる必要があります。通れない大きさに束ねてしまうと、その場で解くことになります。",
  },
];

const orderPoints = [
  {
    h: "処分まで含む見積もりかを確認する",
    b: "作業費とは別に扱われることがあります。含む・含まないのいずれであっても、書面に記載されていれば後に争点になりません。",
  },
  {
    h: "持ち帰る範囲を決める",
    b: "剪定した枝をすべて持ち帰るのか、細かい葉は残るのか、掃き掃除までを含むのかどうかによって、作業後の庭の状態が変わります。",
  },
  {
    h: "量が増えた場合の扱いを確認する",
    b: "実際に剪定してみたところ想定より多かったという事態はよく起こります。その場合に追加の相談となるのか、そのまま持ち帰ってもらえるのかを、着手前に確認しておきます。",
  },
  {
    h: "一部を自分で処分する場合の区分",
    b: "細い枝は自分で自治体の回収に出し、太い幹のみ引き取ってもらうという分け方もできます。どちらが何を担当するのかを明確にしておけば、当日に迷いません。",
  },
];

const ngItems = [
  {
    h: "庭で焼却する",
    b: "廃棄物を野外で焼却することは、法律で原則として禁止されています。煙やにおいは近隣への影響も大きく、苦情や通報につながります。落ち葉である、少量であるといった理由で例外になるとは考えないでください。",
  },
  {
    h: "空き地や山林に廃棄する",
    b: "自分の所有地ではない場所へ持ち込んで廃棄する行為は不法投棄です。自然物であるため土に還るという理由は通用しません。",
  },
  {
    h: "河川や側溝に流す",
    b: "刈った草を水路へ流すと、下流で詰まりの原因になります。自分の敷地から見えなくなっても、問題が移動しただけです。",
  },
  {
    h: "無許可の回収業者に渡す",
    b: "巡回している回収車や、突然訪問してくる業者に渡すことは避けてください。適正に処理されるとは限らず、結果として所有者が責任を問われる場合があります。作業を依頼した業者に引き取ってもらうか、自治体の案内に沿って処分してください。",
  },
];

const faqs = [
  {
    q: "剪定した枝は燃やすごみとして出せますか。",
    a: "多くの地域で家庭から出る枝葉は可燃ごみとして扱われますが、長さ・太さ・一度に出せる量・まとめ方の条件が定められています。条件は自治体ごとに異なり、見直されることもあるため、お住まいの自治体が公開している最新の案内をご確認ください。土の付いた根や太い幹は対象外とされることがあります。",
  },
  {
    q: "量が多くて回収に出しきれません。",
    a: "複数回に分けて出す、処理施設へ自分で搬入する、作業を依頼した業者に引き取ってもらうといった選択肢があります。運搬手段がない場合や、期限が決まっている場合は、作業と処分をまとめて依頼するほうが現実的です。依頼する場合は、処分が見積もりに含まれているかをご確認ください。",
  },
  {
    q: "抜いた根や切り株はどう処分しますか。",
    a: "土が付いたものは、枝葉と同じ扱いにならないことが一般的です。大きな切り株は自分で運搬することも難しいため、作業を依頼する段階で処分までを含めて相談することが確実です。",
  },
  {
    q: "虫や病気が出た枝葉は、庭に積んでおいてよいですか。",
    a: "避けてください。地面に残ったものが翌年の発生源になることがあります。剪定した枝葉を庭の外へ搬出するところまでを一連の対処とお考えください。",
  },
  {
    q: "業者に頼めば、切った枝は必ず持ち帰ってもらえますか。",
    a: "必ずしも含まれるわけではありません。作業に含む会社もあれば、別の扱いとしている会社もあります。見積もりの段階で確認し、書面に記録される形にしておくことが確実です。",
  },
];

export default function GreenWastePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "剪定枝と刈った草の処分方法を4つに整理し、選び方と確認すべき規定をまとめています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "剪定枝・草の処分" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の作業を終えた後、必ず手元に残るものがあります。剪定した枝と刈った草です。
          作業そのものは半日で終わっても、処分方法が決まっていなければ、庭の隅に山積みのまま残り続けます。
          本ページでは、処分方法の選択肢を整理し、剪定前に決めておくべき事項をまとめます。
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

      <section id="waste-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          処分方法は作業を依頼する前に決まります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          剪定後に考えればよいと思われがちですが、実際には逆です。処分方法が決まっていれば、剪定の進め方そのものが変わります。
          自治体の回収に出す場合は、基準の長さに合わせて切り分けながら作業するほうが効率的です。業者に持ち帰ってもらう場合は、その必要はありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          業者に依頼する場合も同様で、処分まで含むのかどうかは見積もりの前提に関わります。この点が曖昧なまま話を進めると、作業後に「持ち帰ってもらえると思っていた」という認識の相違が生じます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            自分で処分するのか、業者に依頼するのか。この一点を先に決めるだけで、当日の段取りと相談の内容が定まります。
          </p>
        </div>
      </section>

      <section id="waste-options" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          処分方法は大きく4つあります
        </h2>
        <div className="space-y-4">
          {options.map((o, i) => (
            <div key={o.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
                <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{o.h}</span>
              </h3>
              <p className="text-sm text-text-muted mb-2 leading-7">適している状況：{o.good}</p>
              <p className="text-[15px] leading-8 text-text-secondary">{o.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="waste-rule" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自治体の規定で確認すべき項目
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          詳細な条件は地域ごとに異なるため、ここでは「どこを確認すればよいか」を挙げます。確認すべき項目が分かっていれば、自治体の案内を容易に理解できます。
        </p>
        <ol className="space-y-4">
          {ruleItems.map((r, i) => (
            <li key={r.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{r.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{r.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="waste-reduce" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          量を減らす・搬出しやすくする工夫
        </h2>
        <div className="space-y-4">
          {reducePoints.map((p) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{p.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="waste-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者に引き取りを依頼する際の決め方
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          見積書のどの欄で処分の扱いを確認するかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="waste-ng" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          行ってはいけない処分方法
        </h2>
        <div className="space-y-4">
          {ngItems.map((n) => (
            <div key={n.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{n.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{n.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="waste-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/garden-cleaning/", label: "庭の掃除を業者に頼むとき" },
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び方" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
            { href: "/area/fukuoka/", label: "依頼内容の伝え方と仕上がりの共有" },
            { href: "/guide/grass-cutting/", label: "庭・空き地の草刈り｜刈る時期と回数の考え方" },
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
          自分で処分しきれない量になりそうな場合は、作業と処分をまとめて相談できる窓口を比較することをおすすめします。
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
