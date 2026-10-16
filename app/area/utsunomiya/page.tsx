import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/utsunomiya/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "宇都宮の造園・庭の手入れ業者の選び方｜年間契約とスポット依頼の選び方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れには、年間契約で継続的に任せる形式と、必要な時にその都度依頼する形式があります。適否の判断材料、年間契約で確認すべき項目、都度依頼の短所、まず一度依頼してから決める方法を整理し、宇都宮での業者選びと掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "年間契約と都度依頼のどちらを選ぶかという観点から、宇都宮での業者選びを整理しています。",
  },
};

const toc = [
  { id: "utsunomiya-form", label: "作業内容より先に決めるべきは依頼の形式です" },
  { id: "utsunomiya-judge", label: "適否を判断する4つの材料" },
  { id: "utsunomiya-contract", label: "年間契約で必ず確認すべき事項" },
  { id: "utsunomiya-spot", label: "都度依頼の短所" },
  { id: "utsunomiya-pick", label: "この条件に適した3サービス" },
  { id: "utsunomiya-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "utsunomiya-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "utsunomiya-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["townlife", "smile-garden", "epark"] as const;

const pickReasons: Record<string, string> = {
  "townlife":
    "希望条件を入力すると、複数社からプラン・見積もりを無料で取り寄せられる窓口です。外構（エクステリア）専用の請求窓口があり、庭・外構のプランの取り寄せに利用できます。継続的な依頼を前提に相談したい場合に、各社がどのような計画を提案するかを比較できます。運営はタウンライフ株式会社です。",
  "smile-garden":
    "庭木1本の剪定から年間管理まで、剪定・伐採・草刈り・芝刈り・植栽などの庭の手入れを専門に扱う全国チェーンです。完全自店舗施工により余分なマージンを削減し、無料の明瞭な見積もりと追加料金なしを掲げています。庭師経験10年以上のスタッフが9割以上、リピート率95%以上（公式・自社調べ）と公表しており、継続的な依頼を検討する際の判断材料になります。運営は株式会社ガーデンメーカーです。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから業者を探すことができ、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。今回はこの作業のみ依頼したいという場合に、作業単位で候補を探しやすい構成です。全国47都道府県の業者を地域ごとに検索・電話予約できます。運営は株式会社REstaです。",
};

const judgeItems = [
  {
    h: "庭の規模より、自分で手入れできない部分の量",
    b: "庭の広さよりも、自分では手入れできない部分の量によって決まります。脚立でも届かない高さの木が複数ある、生垣が長い、手の届かない裏側があるといった庭は、放置すると一年で元の状態に戻るため、継続的に手入れを依頼する形式が適しています。反対に、手入れの対象が一、二本に限られる場合は、都度依頼で十分です。",
  },
  {
    h: "植栽の成長速度と年間に必要な手入れの回数",
    b: "年に一度整えれば形を保てるものと、伸びるたびに刈り込まないと形が崩れるものがあります。生垣、成長の早い木、地面を覆う植物など、年に複数回の手入れが前提となる場合は、都度依頼では業者を探して日程を確保する手間が毎回発生します。この点が、年間契約の利点が大きくなる場面です。",
  },
  {
    h: "依頼者自身による手入れの継続性",
    b: "足元の草や低い部分は自分で手入れするという前提が、実際に続いているかどうかを確認します。続いている場合は、依頼するのは高所と年一回の整枝のみで済み、都度依頼で対応できます。この一年間で実施できていない場合は、その前提を除いて検討するほうが現実的です。自分で行う範囲の判断材料は、DIYのページで解説しています。",
  },
  {
    h: "毎回立ち会えるか、日程を自分で決められるか",
    b: "都度依頼の場合は、毎回依頼者が日程を決めて調整することになります。平日に対応しにくい、長期で不在にする時期がある、体調や年齢により毎回の対応が負担になっているといった場合は、年間契約で業者が組んだ日程に合わせるほうが、手間は小さくなります。",
  },
];

const contractChecks = [
  {
    h: "年間の訪問回数と各回の作業内容",
    b: "回数のみ決まっていて内容が記載されていない取り決めは、後に認識の相違が生じます。一回目は高木の剪定、二回目は生垣と草刈り、三回目は落ち葉の清掃といったように、回ごとの作業内容が書面に記載されているかを確認します。「状況に応じて対応」とのみ記載されている場合は、何が含まれる想定なのかを口頭ではなく文書でご確認ください。",
  },
  {
    h: "含まれない作業と追加費用が発生する条件",
    b: "含まれないことが多いのは、剪定した枝の処分、伐採や抜根、高所作業、防除の薬剤散布、土や砂利の搬入です。これらが含まれるのか別扱いなのかを確認し、含まれない作業が必要になった場合に、その場で進めるのか、一度依頼者に連絡するのかを決めておきます。追加費用の条件が記載されていない取り決めは、実質的に上限がない状態です。",
  },
  {
    h: "途中解約の可否と自動更新の有無",
    b: "契約期間の終了後に自動で更新されるのか、依頼者から申し出なければ停止しないのかを確認します。途中で解約する場合の連絡期限や扱いも確認します。転居や庭の縮小の予定がある場合は、特に重要です。継続を前提とする取り決めほど、解約時の条件を事前に確認しておく価値があります。",
  },
  {
    h: "担当者と担当者交代時の扱い",
    b: "継続して依頼する形式の利点は、庭の状態を把握してもらえることです。毎回異なる担当者が訪問する場合、その利点は小さくなります。同じ担当者が継続する運用か、記録を引き継ぐ仕組みがあるかを確認します。紹介型で毎回手配される仕組みか、自社の担当者が訪問する仕組みかによっても異なります。",
  },
];

const spotWeakness = [
  {
    h: "毎回、庭の状態を最初から説明する必要がある",
    b: "前回どこをどのように剪定したか、どの木が弱っていたか、境界のどこに配慮したかといった情報は、業者が変われば毎回伝え直す必要があります。写真と作業記録を依頼者が残しておけば補えますが、残していない場合は、説明の精度が年々低下します。",
  },
  {
    h: "依頼が集中する時期ほど日程を確保しにくい",
    b: "庭の作業は時期が集中します。伸びきってから業者を探し始めると、希望の週に予約できないことがあります。都度依頼を選ぶ場合は、依頼を始める時期を事前に決めておかないと、毎年時期が遅れていきます。",
  },
  {
    h: "毎回、業者選びからやり直す必要がある",
    b: "前回の業者に再度依頼できるとは限りません。日程が合わない、条件が変わる、担当者がいないといった場合は、その都度業者を探し、条件を伝え、比較する作業が発生します。回数が少ないうちは問題になりませんが、年に何度も手入れが必要な庭では負担になります。",
  },
  {
    h: "それでも都度依頼を選ぶ理由はあります",
    b: "短所ばかりではありません。必要な時にのみ依頼するため、不要な年は依頼しないこともできます。庭の使い方が変わる見込みがある、しばらく手入れをしない予定がある、依頼先をまだ決めきれていないといった状況では、都度依頼のほうが柔軟に対応できます。継続するかどうかは、一度依頼してから判断しても遅くありません。",
  },
];

const checklist = [
  {
    h: "自宅の庭に年何回の手入れが必要かの目安を立てたか",
    b: "一回で足りるのか、複数回必要なのかが決まらなければ、どちらの形式が適しているかも決まりません。",
  },
  {
    h: "自分で行う範囲の手入れが、この一年間で実際に継続できていたか",
    b: "継続できていない前提で計画すると、都度依頼の形式では対応しきれなくなります。",
  },
  {
    h: "年間契約の場合、回ごとの作業内容を書面で確認したか",
    b: "回数のみ決まっていて内容が記載されていない取り決めは、後に認識の相違が生じます。",
  },
  {
    h: "含まれない作業と追加費用の条件を確認したか",
    b: "処分、伐採、高所作業、薬剤散布が含まれるのか別扱いなのか、その場で進めるのか連絡を受けるのかまで確認します。",
  },
  {
    h: "解約の方法と更新の扱いを確認したか",
    b: "自動更新されるのか、いつまでに申し出れば停止できるのかは、契約前に確認しておくべき項目です。",
  },
];

const faqs = [
  {
    q: "最初から年間契約にしたほうがよいのでしょうか。",
    a: "まず一度依頼し、そのうえで決めるという進め方があります。実際に作業を依頼すると、作業の丁寧さ、連絡の取りやすさ、片づけの状態、希望の汲み取り方が分かります。これらは書面や説明のみでは判断できない部分です。年に何度も手入れが必要な庭で、依頼先の目安が立っている場合は、最初から年間契約とする形も可能です。迷っている段階であれば、一度依頼してから継続するかを決めるほうが、見直しが容易です。",
  },
  {
    q: "年間で頼むと、そのつど頼むより合計は安くなりますか。",
    a: "金額の増減は本ページでは扱いませんが、比較する際は合計金額のみを見ないでください。含まれる作業の範囲、処分費の扱い、追加費用の条件、回数の四点が異なれば、合計金額は比較の対象になりません。同じ条件で整理してから比較する必要があります。費用の目安は料金のページをご参照ください。",
  },
  {
    q: "途中で庭の状況が変わったら、決めた内容は変えられますか。",
    a: "変更の扱いは取り決めによります。木を減らした、駐車場にした、隣地の状況が変わったといった変化があると、当初決めた回数や内容が実態に合わなくなります。契約の段階で、内容を見直す場合の手順と、途中で解約する場合の条件を確認しておいてください。これが決まっていないと、実態に合わない内容のまま契約が継続することになります。",
  },
  {
    q: "宇都宮市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、宇都宮市内での個別の対応可否・作業日程・出張範囲は公開されていません。年間を通じた継続的な対応の可否も同様です。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaUtsunomiyaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "年間契約で継続的に任せる形式と、都度依頼する形式の選び方について、判断材料、年間契約で確認すべき項目、都度依頼の短所を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "宇都宮" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを依頼する際、多くの方は「何を依頼するか」から検討します。ただし、その前に決めるべきことがもう一つあります。年間契約で継続的に任せる形式にするのか、必要な時にその都度依頼する形式にするのかです。この選択によって、毎年の手間も、確認すべき項目も変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          宇都宮市内の住宅の庭を依頼する場合も同様です。どちらが優れているということではなく、庭と生活スタイルによって適否が分かれます。本ページでは、その判断基準と、年間契約とする場合に必ず確認すべき項目、都度依頼の短所を整理します。費用の目安は料金のページで解説しています。
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

      <section id="utsunomiya-form" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業内容より先に決めるべきは依頼の形式です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「剪定をお願いしたい」という依頼でも、年間契約と都度依頼では、業者から提示される内容が変わります。前者は一年間の計画の提案となり、後者はその回の作業の見積もりとなります。どちらを求めているのかが伝わっていないと、相談が噛み合いません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          年間契約は、回数と内容を事前に取り決め、日程は業者の計画に合わせることが基本です。手間は最初にまとめて発生し、その後は減ります。都度依頼は、必要になった時点で業者を探し、条件を伝え、日程を調整します。柔軟に対応できる一方で、その手間が毎回発生します。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            最初から年間契約を結ばなければならないということはありません。一度依頼し、様子を見てから継続するかを判断する形も可能です。むしろ、依頼先をまだ把握していない段階で長期の取り決めを結ぶより、そのほうが見直しが容易です。以下では、どちらの形式が適しているかを判断する材料を解説します。
          </p>
        </div>
      </section>

      <section id="utsunomiya-judge" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          適否を判断する4つの材料
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          判断の基準は庭の広さではありません。年に何回の手入れが必要か、そのうち何回を自分で対応できるかという観点で判断します。
        </p>
        <ol className="space-y-4">
          {judgeItems.map((x, i) => (
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
          一年のどの時期に何を行うかの計画は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          、自分で行う範囲の判断は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="utsunomiya-contract" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          年間契約で必ず確認すべき事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          継続して任せる形式は、一度決めると次に見直すのが一年後になります。そのため、契約前の確認が重要です。
        </p>
        <div className="space-y-4">
          {contractChecks.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          書面の確認箇所は
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          、支払いの形式と契約が成立する時点は
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="utsunomiya-spot" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          都度依頼の短所
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          必要な時にのみ依頼できることが利点ですが、回数が増えるほど見えにくい負担が蓄積します。
        </p>
        <div className="space-y-4">
          {spotWeakness.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          日程が変動する要因と順延の決め方は
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          、次回の依頼に役立つ記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            認識の相違に備える記録の残し方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="utsunomiya-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、年間契約と都度依頼を比較したいという条件では、次の3サービスの特徴の違いが分かりやすい構成です。
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

      <section id="utsunomiya-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="宇都宮" />
      </section>

      <section id="utsunomiya-checklist" className="scroll-mt-20 mb-12">
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

      <section id="utsunomiya-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="utsunomiya" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/cost/price/", label: "庭工事の料金相場" },
            { href: "/area/kyoto/", label: "仕上がりの方針と継続管理" },
            { href: "/area/kumamoto/", label: "支払いの方法と契約が決まる時点" },
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
          年間契約とするか都度依頼とするかを決めてから相談すると、提示される提案の形式が変わります。
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
