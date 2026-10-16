import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/sakai/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "堺の造園・庭の手入れ業者の選び方｜認識の相違に備える記録の残し方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "作業内容や金額について認識の相違が生じた場合、手元に何が残っているかによって解決の進み方が変わります。堺で庭の手入れを依頼する際に残しておくべき記録、話し合いが進まない場合の進め方、外部の窓口に相談するという選択肢を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "認識の相違が生じた場合の記録の残し方と進め方という観点から、堺での業者選びを整理しています。",
  },
};

const toc = [
  { id: "sakai-origin", label: "認識の相違は「言った・言わない」から始まります" },
  { id: "sakai-records", label: "残しておくと有効な4つの記録" },
  { id: "sakai-stalled", label: "話し合いが進まない場合の進め方" },
  { id: "sakai-outside", label: "外部の窓口に相談するという選択肢" },
  { id: "sakai-prevent", label: "相違を防ぐための事前の対策" },
  { id: "sakai-pick", label: "この条件に適した3サービス" },
  { id: "sakai-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "sakai-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "sakai-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "hikaku-biz", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "運営はシェアリングテクノロジー株式会社（東証上場・証券コード3989）で、全国47都道府県の加盟店を紹介・手配する形式です。受付は24時間365日です。現地調査・見積もりは無料（条件あり）と公表しており、請負賠償保険に加入しているとされています。紹介元の法人が明確であるため、施工者とは別の連絡先があります。",
  "hikaku-biz":
    "発注者の利用は無料で、運営21年・登録事業者10万社超と公表されています。造園のほか門・塀・フェンス・デッキなどの区分も扱うため、作業がどの区分に該当するかを整理してから相談したい場合に適しています。",
  "mitsumoa":
    "最大5件の見積もりを比較でき、チャットで業者と直接やり取りできます。条件の確認から合意までが文字として記録されるため、後から依頼した範囲を依頼者自身で確認できます。見積もり依頼は無料です。",
};

const records = [
  {
    h: "依頼内容が記載された文面",
    b: "問い合わせフォームに記載した文章、送信したメッセージ、送付した写真などが該当します。電話のみで決めた場合は、通話後に「先ほどの件、この内容で相違ありませんか」と一通送っておくだけで、文面が残ります。業者から確認の返信があれば、それが合意の記録になります。",
  },
  {
    h: "金額が確定した時点の書面",
    b: "見積書、料金の表示画面、金額を記載した返信などです。後から金額が問題となった際に、いつの時点でいくらであったかが分かる形で残しておきます。見積書には有効期限が記載されていることがあるため、その日付も含めて保管します。",
  },
  {
    h: "作業前と作業後の同じ角度の写真",
    b: "最も有効な記録です。作業前に撮影しておくことが重要で、後から撮り直すことはできません。全体の写真と、気になる木の近接写真を数枚撮影します。同じ位置から撮影した前後の写真があれば、言葉による説明が不要になります。",
  },
  {
    h: "やり取りの日付",
    b: "いつ問い合わせ、いつ返信があり、いつ作業したのか。日付が分かるだけで、経緯の順序を再現できます。メモ書きで構いません。記憶をもとに順序を再構成するのは、想定以上に難しい作業です。",
  },
];

const stalled = [
  {
    h: "同じ業者に、伝え方を変えて改めて伝える",
    b: "口頭で伝えた内容が正しく伝わっていない場合があります。写真を添えて、文字で、具体的にどこをどうしてほしいのかを記載して改めて伝えます。「直してほしい」ではなく、「この木のこの部分を、この状態にしてほしい」まで記載します。",
  },
  {
    h: "窓口と施工者が異なる場合は両方に伝える",
    b: "紹介型のサービスを利用した場合、連絡の相手が二段階になります。施工した業者に伝えても対応がない場合は、紹介した窓口にも同じ内容を伝えます。どちらに伝えればよいかは、本来は依頼の時点で確認しておくべき事項です。",
  },
  {
    h: "回答の期限を記載して送付する",
    b: "いつまでに回答がほしいのかを記載します。期限のない依頼は後回しにされやすく、依頼者もいつまで待つかを決められないまま時間が経過します。",
  },
  {
    h: "それでも対応がない場合は経緯を一枚にまとめる",
    b: "日付、伝えた内容、回答を時系列で整理します。外部の窓口に相談する場合も、この一枚の有無によって相談の進み方が変わります。整理する過程で、依頼者側の確認漏れにも気づけます。",
  },
];

const outside = [
  {
    h: "居住地の自治体の消費生活相談窓口",
    b: "契約や取引に関する相談を受け付けている公的な窓口が各地に設置されています。具体的な名称と受付方法は自治体によって異なるため、お住まいの市区町村の案内でご確認ください。相談する際は、経緯をまとめた一枚と、金額が分かる書面を手元に用意しておきます。",
  },
  {
    h: "サービス側の問い合わせ窓口",
    b: "紹介型や仲介型のサービスでは、運営側に連絡できる窓口が設けられていることがあります。施工した業者と直接やり取りするのとは別の経路です。窓口の所在は、依頼を決める前に確認しておくことをおすすめします。",
  },
  {
    h: "補償や保険が関わる場合",
    b: "作業中に物品が破損した、隣家に被害が及んだといった場合は、どの保険が適用されるかという問題になります。掲載サービスの中には、損害賠償補償制度を設けていると公表しているものや、請負賠償保険に加入していると公表しているものがあります。適用の条件と範囲は各社で異なるため、内容は各社にご確認ください。",
  },
  {
    h: "記録がなければ、どの窓口でも解決が進みにくくなります",
    b: "外部の窓口に相談する場合でも、判断の材料となるのは記録です。口頭のやり取りしかない状態では、相談を受ける側も対応できません。そのため、問題が生じていない段階で記録を残しておくことに意味があります。",
  },
];

const prevent = [
  {
    h: "口頭で決めた内容をその日のうちに文書で送る",
    b: "電話で決めた内容を一通にまとめて送付します。「この理解で進めます」と記載すれば、業者の認識が異なる場合は訂正の返信があります。このやり取りが、後に最も有効な記録になります。",
  },
  {
    h: "行わない作業も記載しておく",
    b: "「この木には手を加えない」「地面は掘らない」「この花は残す」などを記載します。行う作業のみを記載すると、行わない作業は業者の解釈に委ねられます。範囲外を明示しておくのは、業者を制約するためではなく、判断を委ねないためです。",
  },
  {
    h: "支払いの時期を決めておく",
    b: "支払いの時期が決まっていないと、作業に不満があった際に、支払うかどうかの問題が先に生じてしまいます。支払いの時期と方法は、依頼を決める段階で確認しておく項目です。",
  },
];

const checklist = [
  {
    h: "依頼した内容が文字で残っているか",
    b: "電話のみで決めた場合は、その後に要点を一通送付しておけば文面が残ります。",
  },
  {
    h: "作業前の写真を撮影したか",
    b: "後から撮り直すことができない唯一の記録です。全体と近接の写真を数枚、同じ位置から撮影できる角度で残します。",
  },
  {
    h: "金額が確定した時点の書面があるか",
    b: "見積書や料金の表示を、有効期限の日付も含めて保管しておきます。",
  },
  {
    h: "施工者と窓口の両方の連絡先があるか",
    b: "紹介型では連絡の相手が二段階になります。どちらに伝えればよいかを依頼の時点で確認しておきます。",
  },
  {
    h: "補償や保険の有無を確認したか",
    b: "制度の有無と、適用の条件・範囲は各社で異なります。内容は各社にご確認ください。",
  },
];

const faqs = [
  {
    q: "口約束だけで頼んでしまいました。今から残せるものはありますか。",
    a: "作業前であれば、まだ対応できることがあります。「先日お話しした内容は、この理解で相違ありませんか」と一通送付しておけば、それが依頼内容の記録になります。あわせて、作業前の庭の写真を撮影しておいてください。この二つがあるだけで、後の確認が大幅に容易になります。",
  },
  {
    q: "作業前の写真を撮っていませんでした。ほかに方法はありますか。",
    a: "撮り直すことはできませんが、代わりとなる資料を探せる場合があります。以前に撮影した家族の写真に庭が写っている、地図サービスの画像に外構が写っている、近隣の方が撮影した写真があるなどの場合です。いずれも意図して撮影したものではないため十分とはいえませんが、何もない場合より経緯を説明しやすくなります。",
  },
  {
    q: "作業内容が話と違うとき、支払いを止めてもよいですか。",
    a: "支払いを留保するかどうかは契約の内容によるため、一律には判断できません。先に行うべきことは、どこがどのように異なるのかを写真と文字で具体的に伝え、業者の説明を聞くことです。手直しで解決する場合も少なくありません。それでも合意に至らない場合は、経緯をまとめたうえで、お住まいの自治体の消費生活相談窓口に相談するという選択肢があります。",
  },
  {
    q: "堺市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、堺市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaSakaiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "依頼の内容や金額について認識の相違が生じた場合に有効な記録の残し方と、話し合いが進まない場合の進め方を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "堺" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          ほとんどの依頼は問題なく完了します。ただし、まれに認識の相違が生じることがあります。依頼したはずの作業が行われていない、説明を受けた金額と異なる、残すはずの木が短く剪定されているといった場合、手元に何が残っているかによって解決の進み方が変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          堺市内の住宅の庭を依頼する場合も、備え方は同じです。本ページでは、問題を防ぐための記録の取り方と、実際に認識の相違が生じた場合に何をどの順序で進めるかを整理します。なお、本ページで扱うのは一般的な進め方であり、個別の事案に関する法的な判断ではありません。
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

      <section id="sakai-origin" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          認識の相違は「言った・言わない」から始まります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          問題の多くは、悪意ではなく解釈の違いから生じます。「短くしてください」がどの程度なのか、「きれいにする」がどこまでなのか。同じ言葉を使っていても、想定している状態が異なれば結果も異なります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そして、その違いが表面化するのは作業完了後です。そこから「そうは言っていない」「いや言った」というやり取りになると、どちらが正しいかではなく、どちらが記録を持っているかの問題になります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            記録を残すのは、業者を疑うためではありません。依頼した内容を、後から依頼者自身で確認できるようにするためです。依頼した本人が内容を覚えていないことは珍しくありません。
          </p>
        </div>
      </section>

      <section id="sakai-records" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          残しておくと有効な4つの記録
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          特別な準備は必要ありません。いずれも依頼の過程で自然に発生するものであり、破棄せずに保管しておくかどうかの違いです。
        </p>
        <ol className="space-y-4">
          {records.map((x, i) => (
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
          作業前後の写真は、立ち会わない依頼では報告そのものになります。その決め方は
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会いができない場合の依頼方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="sakai-stalled" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          話し合いが進まない場合の進め方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          伝えたにもかかわらず対応がない場合の進め方です。強い口調で伝えるより、伝え方を変えるほうが状況が進展します。
        </p>
        <div className="space-y-4">
          {stalled.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sakai-outside" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          外部の窓口に相談するという選択肢
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          当事者間で合意に至らない場合は、相談できる窓口があります。利用するかどうかは別として、選択肢として把握しておくと、焦って不利な条件で妥協せずに済みます。
        </p>
        <div className="space-y-4">
          {outside.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          高低差のある現場や、隣地に被害が及ぶ可能性のある作業での保険の確認方法は
          <Link href="/area/yokohama/" className="text-primary underline underline-offset-2 mx-1">
            高低差のある庭と保険・保証
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="sakai-prevent" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          相違を防ぐための事前の対策
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          問題が生じてから記録を作成することはできません。依頼の過程で行える、手間の少ない事前の対策を挙げます。
        </p>
        <ol className="space-y-4">
          {prevent.map((x, i) => (
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
          支払いの時期や前払いの扱いは
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="sakai-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、やり取りが記録に残る形式かどうか、窓口が明確かどうかという条件では、次の3サービスが確認しやすい構成です。
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

      <section id="sakai-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="堺" />
      </section>

      <section id="sakai-checklist" className="scroll-mt-20 mb-12">
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

      <section id="sakai-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="sakai" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kawasaki/", label: "完了時の確認と手直しの依頼方法" },
            { href: "/area/yokohama/", label: "高低差のある庭と保険・保証" },
            { href: "/area/kumamoto/", label: "支払いの方法と契約が決まる時点" },
            { href: "/content-policy/", label: "記事の制作ポリシー" },
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
          記録の残し方は、依頼する窓口の形式によっても異なります。やり取りがどのように記録されるかも比較することをおすすめします。
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
