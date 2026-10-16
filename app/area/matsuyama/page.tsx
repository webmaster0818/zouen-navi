import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/matsuyama/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "松山の造園・庭の手入れ業者の選び方｜依頼後の取り消し・日程変更の申し出方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "一度依頼した後に、取り消したい、日程を変更したいという事態は起こり得ます。その影響の大きさは、問い合わせ・見積もり・日程確定・手配のどの段階で申し出るかによって異なります。松山で庭の作業を取り消す、あるいは延期する際の申し出方と、契約前に確認しておく取り決めを整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "依頼後の取り消し・日程変更の申し出方という観点から、松山での業者選びを整理しています。",
  },
};

const toc = [
  { id: "matsuyama-logic", label: "取り消しの影響は申し出の時期によって異なります" },
  { id: "matsuyama-stages", label: "段階ごとに進行している準備が異なります" },
  { id: "matsuyama-terms", label: "契約前に確認しておく4つの取り決め" },
  { id: "matsuyama-how", label: "実際に申し出る際の伝え方" },
  { id: "matsuyama-pick", label: "この条件に適した3サービス" },
  { id: "matsuyama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "matsuyama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "matsuyama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-madoguchi", "townlife", "epark"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった専門情報の発信と、「ガーデン業者サーチ」で全国の造園・園芸・外構業者を探せる情報・比較サイトです。依頼を決める前の段階で候補と作業内容を比較できるため、依頼後に取り消す事態そのものを減らせます。運営は株式会社ガーデンメーカーで、庭の手入れ専門の全国チェーン「smileガーデン」も展開しています。",
  "townlife":
    "希望条件を入力すると、複数社からプラン・見積もりを無料で取り寄せられます。外構（エクステリア）専用の請求窓口があり、庭・外構のプランを比較検討できます。条件をすべて提示してから一社に絞る形式のため、依頼を伝えた後に内容を組み直すことになりにくい進め方です。運営はタウンライフ株式会社です。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから業者を探すことができ、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。営業時間が分かるため、日程を変更したい場合に、いつ連絡すれば当日までに伝わるかの目安を立てられます。運営は株式会社REstaで、全国47都道府県の業者を地域ごとに検索・電話予約できます。",
};

const stages = [
  {
    h: "問い合わせと見積もりを待っている段階",
    b: "業者がまだ現地を確認していないか、確認しただけの段階です。この段階で断ることは、見積もりを受け取ったうえで「今回は見送ります」と回答することと同じであり、特別な申し出にはなりません。連絡をせずに放置するほうが問題を残します。見送ると決めた場合は、簡潔で構いませんので一度回答してください。",
  },
  {
    h: "見積もりを受け、依頼する旨を伝えた後",
    b: "業者側では、この時点から日程の枠を確保する準備が始まります。まだ資材や人員が動いていないことが多い段階ですが、依頼者の回答を前提に他の依頼を断っている可能性はあります。「やはり今回は見送りたい」と伝える場合は、判断した時点で連絡するのが最も影響を小さくできます。",
  },
  {
    h: "作業日が確定した後",
    b: "日付が確定すると、その日の人員配置が組まれます。この段階以降は、取り消すと空いた枠が埋まらないという形で業者に影響が残ります。日程を変更する相談であれば受け付けられることも多いため、取り消しを決める前に、まず延期で対応できるかを検討してください。",
  },
  {
    h: "資材や人員の手配後、作業開始後",
    b: "土や植物、資材を取り寄せている場合、注文を取り消せないことがあります。人員を増やして体制を組んでいる場合も同様です。着手後は、すでに作業した分が残ります。この段階では「取り消し」ではなく、「どこで作業を止めるか」「残りをどう扱うか」の相談になります。",
  },
];

const termsItems = [
  {
    h: "取り消す場合の扱い",
    b: "どの時点から、どのような扱いになるのかを確認します。取り決めの内容は業者ごとに異なり、公開されていないことがほとんどです。金額の目安を推測しても意味がないため、契約前に「いつからどうなるか」を確認し、回答を記録しておきます。見積書や申込書に記載されている場合は、その条項の記載箇所を確認しておきます。",
  },
  {
    h: "日程を変更する場合の扱い",
    b: "取り消しとは別に定められていることがあります。何日前までなら振り替えられるのか、振り替えは何回まで受け付けられるのか、繁忙期は別の扱いか。延期は受け付けられやすい相談ですが、無条件ではありません。",
  },
  {
    h: "連絡の期限と連絡先",
    b: "「何日前まで」に加えて、「誰に」「どの手段で」伝えれば有効となるのかを確認します。作業員の携帯電話に伝えただけでは会社に伝わっていない、受付は営業時間内のみといった相違が起こります。連絡先と手段を一つに決めておきます。",
  },
  {
    h: "すでに発生している実費の有無",
    b: "取り寄せた資材、確保した重機、申請した手続きなどが進行していると、取り消しても戻せない費用が残ります。契約前に「どの段階から実費が発生するのか」を確認しておくと、判断を急ぐべき時期が分かります。",
  },
];

const howItems = [
  {
    h: "依頼者の都合で延期する場合",
    b: "判断した時点ですぐに連絡します。理由を詳しく説明する必要はありませんが、「いつであれば可能か」を依頼者から提示すると、調整が早く進みます。候補日を二つか三つ添えるのが現実的です。業者にも他の予定があるため、「改めて連絡します」で終えると、その枠は他の依頼に回ります。",
  },
  {
    h: "業者の都合や天候による延期との違い",
    b: "雨や強風による日程の変更は、取り消しとは別の問題です。安全上の判断で延期となる場合、依頼者が費用を負担する形にはなりません。両者を混同する必要はなく、確認すべきは「振替日をいつ決めるか」のみです。順延の扱いを最初に決めておけば、当日の連絡が簡潔になります。",
  },
  {
    h: "取り消す前に、範囲を縮小できないかを検討する",
    b: "予定していた作業をすべて取り消すのではなく、今回は一部のみにするという相談があります。業者にとっては日程が残る分受け入れやすく、依頼者も段取りをやり直さずに済みます。事情が費用と時間のいずれであっても、まずこの選択肢を提示してください。",
  },
  {
    h: "口頭で伝えた後、文書でも残す",
    b: "電話で伝えて終わりにせず、同じ内容をメールやメッセージでも送付しておきます。日付、対象の作業、取り消しか延期か、伝えた日時の四点が記録に残っていれば、後で解釈が分かれません。業者にとっても、社内で共有する記録になります。",
  },
];

const checklist = [
  {
    h: "取り消しの扱いを契約前に確認したか",
    b: "どの段階から、どのような扱いになるのかを確認し、回答を記録しておきます。",
  },
  {
    h: "日程変更の扱いを別途確認したか",
    b: "何日前まで、何回まで振り替えられるかを確認します。取り消しとは別に定められていることがあります。",
  },
  {
    h: "連絡先と連絡手段を一つに決めたか",
    b: "作業員に伝えただけでは会社に伝わっていない、という相違が起こります。",
  },
  {
    h: "実費が発生し始める段階を確認したか",
    b: "資材の取り寄せや重機の確保が進むと、戻せない費用が発生します。",
  },
  {
    h: "取り消す前に、範囲を縮小する案を提示したか",
    b: "すべてを取り消すより、一部に絞るほうが双方の段取りが残ります。",
  },
];

const faqs = [
  {
    q: "日程が決まったあとで、やはりやめたいと思いました。いつまでに言えばよいですか。",
    a: "判断した時点です。日程が近づくほど、業者側で進行している準備が増えます。期限や扱いは業者ごとに定め方が異なり、公開されていないことがほとんどのため、契約前にご確認ください。確認していなかった場合でも、連絡を遅らせる理由にはなりません。まず連絡し、そのうえで扱いを確認する順序になります。",
  },
  {
    q: "取りやめではなく、日をずらすだけなら受けてもらえますか。",
    a: "延期は、取り消しより受け付けられやすい相談です。ただし無条件ではなく、何日前までか、何回まで振り替えられるか、繁忙期は別の扱いかといった点が定められていることがあります。日程を変更したい場合は、候補日を二つか三つ添えて連絡してください。「改めて連絡します」で終えると、その枠は他の依頼に回ります。",
  },
  {
    q: "雨で作業が延びたときも、こちらが何か負担しますか。",
    a: "天候や安全上の判断による延期は、依頼者の都合による取り消しとは別の問題です。通常、依頼者が費用を負担する形にはなりません。確認しておくべきなのは、順延をどの時点で判断するのか、振替日をいつ決めるのかという段取りです。これを最初に決めておけば、当日の連絡が簡潔になります。",
  },
  {
    q: "松山市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、松山市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaMatsuyamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "一度依頼した庭の作業を取り消す、または日程を変更する際の段階ごとの考え方と、契約前に確認しておく取り決めを整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "松山" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          依頼するまでの検討は行っても、依頼後に取り消すことを事前に考えることは多くありません。しかし実際には起こり得ます。急な出費が重なった、家庭の事情で作業者を受け入れられなくなった、別の工事が先に入った、考えが変わったなど、理由はさまざまです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          松山市内の住宅の庭を依頼する場合も同様で、問題となるのは申し出にくさです。申し出ないまま日程が近づくと、業者の準備は進み、依頼者が選べる対応は減っていきます。本ページでは、取り消しや日程変更の影響がどの段階から大きくなるのか、契約前に何を確認しておくのか、実際に申し出る際にどのように伝えるのかを整理します。取り決めの内容は業者ごとに異なるため、金額や割合には触れません。
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

      <section id="matsuyama-logic" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          取り消しの影響は申し出の時期によって異なります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の作業は、当日だけの仕事ではありません。日程を確保し、人員を割り当て、場合によっては植物や資材を取り寄せ、重機を確保します。取り消しの影響が大きくなるかどうかは、この準備がどこまで進んでいるかによります。つまり、内容の問題というより時期の問題です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          申し出にくさから先延ばしにすると、その間に段階が進みます。早く申し出れば見送りで済んだものが、遅れるほど戻せない部分の相談になります。申し出にくいと感じた場合こそ、その日のうちに連絡するほうが、結果として双方の負担が小さくなります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            具体的な扱いは業者ごとに定められており、公開されていないことがほとんどです。本ページで取り上げるのは金額の目安ではなく、「契約前に何を確認しておくか」と「申し出る際にどのように伝えるか」です。事前に確認しておけば、後で判断を急ぐ場面が減ります。
          </p>
        </div>
      </section>

      <section id="matsuyama-stages" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          段階ごとに進行している準備が異なります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          現在どの段階にいるのかが分かると、連絡の緊急度が決まります。
        </p>
        <ol className="space-y-4">
          {stages.map((x, i) => (
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
          どの時点で契約が成立し、支払いがいつ発生するかについては
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="matsuyama-terms" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          契約前に確認しておく4つの取り決め
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          取り消す予定がなくても、依頼を決める際に一度確認しておく項目です。確認すること自体が失礼にあたる質問ではありません。
        </p>
        <div className="space-y-4">
          {termsItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          確認した回答の記録方法は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            認識の相違に備える記録の残し方
          </Link>
          、書面の確認箇所は
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="matsuyama-how" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          実際に申し出る際の伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          言い方そのものより、何をあわせて伝えるかによって受け取られ方が変わります。
        </p>
        <div className="space-y-4">
          {howItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          天候や業者の都合で日程が変わる場合の段取りは
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          、範囲を縮小する方向での組み直しは
          <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2 mx-1">
            予算から依頼の範囲を組み立てる
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="matsuyama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、依頼前に条件をすべて提示しておきたい、依頼後の連絡先を明確にしておきたいという条件では、次の3サービスが進め方を整理しやすい構成です。
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          取り消しや日程変更の扱いは、窓口となるサービスではなく、実際に作業を行う業者との取り決めになる場合があります。どちらに伝えれば有効かを、依頼の時点でご確認ください。
        </p>
      </section>

      <section id="matsuyama-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="松山" />
      </section>

      <section id="matsuyama-checklist" className="scroll-mt-20 mb-12">
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

      <section id="matsuyama-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="matsuyama" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kumamoto/", label: "支払いの方法と契約が決まる時点" },
            { href: "/area/kitakyushu/", label: "日程の決め方と天候による順延" },
            { href: "/area/sakai/", label: "認識の相違に備える記録の残し方" },
            { href: "/cost/price/", label: "庭工事の料金相場" },
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
          取り消しや日程変更の扱いは、依頼を決める段階で確認しておくのが最も負担の少ない方法です。確認したうえで相談することをおすすめします。
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
