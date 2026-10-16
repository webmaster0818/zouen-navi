import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kumamoto/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "熊本の造園・庭の手入れ業者の選び方｜支払いの方法と契約が決まる時点";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "見積もりを受け取った時点では、まだ依頼は確定していません。前払いか後払いか、利用できる支払い方法、宛名、支払い前の確認事項について、熊本で庭の手入れを依頼する際の支払いに関する確認点を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "支払いの方法と、依頼が確定する時点という観点から、熊本での業者選びを整理しています。",
  },
};

const toc = [
  { id: "kumamoto-point", label: "見積もりを受け取った時点では、まだ依頼は確定していません" },
  { id: "kumamoto-how", label: "支払いの形式を事前に確認する" },
  { id: "kumamoto-prepay", label: "前払いを求められた場合の判断" },
  { id: "kumamoto-before", label: "支払い前に改めて確認する事項" },
  { id: "kumamoto-recurring", label: "継続して依頼する場合の支払いの組み立て方" },
  { id: "kumamoto-pick", label: "この条件に適した3サービス" },
  { id: "kumamoto-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kumamoto-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kumamoto-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["kurashi-market", "townlife", "oniwa-110"] as const;

const pickReasons: Record<string, string> = {
  "kurashi-market":
    "作業内容ごとに料金が事前に表示され、見積もりを取らずに依頼内容を確定できます。金額が確定してから依頼する形式のため、当日に金額の相談が発生しにくい構成です。完了後に口コミを投稿でき、損害賠償補償制度も設けられています。",
  "townlife":
    "希望条件を入力すると、複数社からプランと見積もりを無料で取り寄せられます。プラン請求・見積もりは無料と公表されているため、検討段階で費用が発生しない範囲が明確です。",
  "oniwa-110":
    "現地調査・見積もりは無料（条件あり）と公表されています。「条件あり」と明記されている点は、無料となる範囲を問い合わせ時に確認する手がかりになります。運営はシェアリングテクノロジー株式会社（東証上場・証券コード3989）で、請負賠償保険に加入しているとされています。",
};

const payHow = [
  {
    h: "前払いか後払いか",
    b: "作業前に支払うのか、作業完了後に支払うのか、着手時に一部を支払い残額を後に支払うのか、形式は業者によって異なります。いずれが正しいということではなく、把握しないまま当日を迎えないことが要点です。",
  },
  {
    h: "利用できる支払い方法",
    b: "現金のみか、振込が利用できるか、カードや電子決済に対応しているかを確認します。その場で現金での支払いを求められる形式であれば、事前に用意しておく必要があります。振込の場合は、振込期限も確認しておきます。",
  },
  {
    h: "請求書と領収書の宛名",
    b: "どなたの名義で発行してもらうかを確認します。手配した人と支払う人が異なる場合、この点が決まっていないと再発行が必要になります。送付先の住所も、作業した住宅とは別になる場合があります。",
  },
  {
    h: "支払いの期日",
    b: "後払いの場合は、支払期日を確認します。書面に記載されていることが多い項目ですが、口頭のみで済ませると、双方の認識に相違が生じます。",
  },
];

const prepay = [
  {
    h: "何に対する前払いか",
    b: "材料を先に仕入れる、機材を手配するといった理由があるのかを確認します。理由の確認は差し支えのない質問です。回答が得られない、話をそらされるといった反応のほうが、金額そのものより重要な判断材料になります。",
  },
  {
    h: "全額か一部か",
    b: "着手金として一部を先に支払う形式は一般的です。作業前に全額を支払う形式は、内容によっては確認が必要です。その場合は、作業が完了しなかった際の扱いを確認しておきます。",
  },
  {
    h: "書面が交付されているか",
    b: "金額、作業範囲、日程、支払いの条件が記載された書面があるかを確認します。前払いを求める業者であれば、書面を交付すること自体は難しくないはずです。書面がないまま先に支払うと、記録が何も残りません。",
  },
  {
    h: "契約を急がされる場合は一旦保留する",
    b: "「本日中でなければこの金額にならない」という進め方は、検討の時間を減らす目的である場合があります。検討したい旨を伝え、それで話がまとまらないのであれば、その業者との契約は見送ることをおすすめします。",
  },
];

const beforePay = [
  {
    h: "依頼した範囲の作業が完了しているか",
    b: "依頼時の文面と照合し、本数、場所、作業の種類を確認します。作業されていない箇所があれば、この時点であれば道具がまだ現場にあるため、すぐに対応を依頼できます。",
  },
  {
    h: "追加作業がある場合はその内訳",
    b: "当日に増えた作業がある場合は、何がいくら増えたのかを金額の内訳として確認します。「追加分」とのみ記載されている場合は、内容を確認します。",
  },
  {
    h: "処分の扱いが合意どおりか",
    b: "剪定した枝を持ち帰る前提であったか、置いていく前提であったかを確認します。持ち帰りが含まれていない場合は、後から依頼者が処分することになり、その手間と費用は依頼者の負担となります。",
  },
  {
    h: "日付と宛名",
    b: "領収書の日付、宛名、但し書きを確認します。その場で確認すれば修正してもらえますが、後から申し出ると再発行の手間が生じます。",
  },
];

const recurring = [
  {
    h: "都度払いか、まとめた契約か",
    b: "作業のたびに支払う形式と、年間管理として事前に取り決める形式があります。掲載サービスの中には、年間メンテナンスのプランを設けているものがあります。どちらが適しているかは、依頼の回数と、内容が毎回変わるかどうかによって決まります。",
  },
  {
    h: "途中で解約する場合の扱い",
    b: "まとめた契約にする場合は、途中で解約したくなった際の扱いを事前に確認しておきます。転居、住宅の売却、自分で手入れできるようになったなど、途中で解約する理由は一般的に発生します。",
  },
  {
    h: "条件が変更される際の通知方法",
    b: "金額や内容が改定される際の通知方法を確認します。自動更新の形式の場合、気づかないうちに条件が変わっていることがあります。書面の記載箇所を確認しておきます。",
  },
];

const checklist = [
  {
    h: "支払いの時期を確認したか",
    b: "前払いか後払いか、一部か全額かは、当日になって確認する項目ではありません。",
  },
  {
    h: "利用できる支払い方法を確認したか",
    b: "現金のみか、振込などが利用できるかを確認します。現金が必要であれば事前に用意します。",
  },
  {
    h: "宛名と送付先を決めたか",
    b: "手配した人と支払う人が異なる場合は、請求書と領収書の宛名を事前に決めておきます。",
  },
  {
    h: "前払いの場合、その理由と書面を確認したか",
    b: "何に対する前払いかを確認し、金額と範囲が記載された書面を受け取ってから支払います。",
  },
  {
    h: "支払い前に、依頼した範囲の作業を確認したか",
    b: "支払いは、内容を確認したという意思表示にもなります。道具が現場にあるうちに一度確認しておきます。",
  },
];

const faqs = [
  {
    q: "見積もりをもらった後に断ってもよいですか。",
    a: "見積もりは提示であり、受け取っただけでは依頼にはなりません。断ること自体に問題はありません。検討に時間がかかる場合は、その旨を伝えて有効期限の目安を確認しておくと、再作成の手間を避けられます。断る際は簡潔に、決めた当日中に連絡することが、双方にとって望ましい形です。",
  },
  {
    q: "作業前に全額の前払いを求められました。応じるべきですか。",
    a: "前払いという形式自体は珍しくありませんが、作業前に全額を求められる場合は、何に対する前払いかを確認してください。あわせて、金額・作業範囲・日程・支払いの条件が記載された書面を受け取ってから判断します。書面がなく、当日中に決めるよう急がされる場合は、一旦保留して検討する時間を設けてください。",
  },
  {
    q: "現金しか使えないと言われることはありますか。",
    a: "あります。支払い方法は業者によって異なり、現金のみという形式も存在します。その場合は作業当日に手元に用意しておく必要があるため、日程を決める段階でご確認ください。当日に金額が変わる可能性があるかどうかも、あわせて確認しておくことをおすすめします。",
  },
  {
    q: "熊本市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、熊本市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKumamotoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭の手入れを依頼する際の支払い方法の確認点と、支払い前に確認すべき事項を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "熊本" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れは、多くの場合その日のうちに完了します。そのため、支払いの相談が後回しになりがちです。作業完了後に支払いを求められた際に、現金が手元にない、金額が想定と異なる、領収書の宛名が決まっていないといった問題は、いずれもその場で対応に困るものです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          熊本市内の住宅の庭を依頼する場合も同様です。本ページでは、依頼が確定する時点、支払いの方法、支払い前に確認すべき事項を整理します。なお、本ページで扱うのは一般的な確認の進め方であり、個別の契約の法的な解釈ではありません。
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

      <section id="kumamoto-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積もりを受け取った時点では、まだ依頼は確定していません
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりは、この内容でこの金額になるという提示であり、受け取っただけでは依頼にはなりません。依頼者が依頼の意思を伝え、業者がそれを受けた時点で手続きが始まります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          問題が生じやすいのは、その境目が曖昧なまま進む場合です。現地を確認してもらい、話の流れで日程まで決まったものの、金額が記載された書面は受け取っていないという状態は、どちらの側からも「確定した」と言える形になっていません。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            決定する前に「現在検討中です」と伝えておくことは、失礼にはあたりません。反対に、決定したのであれば依頼する旨を明確に伝えます。曖昧なまま日程だけを確保することが、後に最も問題を生じさせます。
          </p>
        </div>
      </section>

      <section id="kumamoto-how" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          支払いの形式を事前に確認する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          確認すべき事項は四つです。いずれも作業完了前に確認できます。
        </p>
        <ol className="space-y-4">
          {payHow.map((x, i) => (
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
          支払う人と手配する人が家族の中で異なる場合の整理は
          <Link href="/area/niigata/" className="text-primary underline underline-offset-2 mx-1">
            意思決定者と費用負担者の確認
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kumamoto-prepay" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          前払いを求められた場合の判断
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          前払いそのものは珍しい形式ではありません。確認すべきは、何に対する前払いか、その根拠が書面に記載されているかです。
        </p>
        <div className="space-y-4">
          {prepay.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          書面のどの欄を確認するかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で、やり取りを記録に残す方法は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            認識の相違に備える記録の残し方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kumamoto-before" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          支払い前に改めて確認する事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          支払いは、内容を確認したという意思表示にもなります。支払った後に申し出ることは難しくなります。
        </p>
        <div className="space-y-4">
          {beforePay.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          剪定した枝を自分で処分する方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="kumamoto-recurring" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          継続して依頼する場合の支払いの組み立て方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一度きりではなく、年に数回継続して依頼する場合は、支払いの形式も一回ごとの依頼とは異なります。
        </p>
        <ol className="space-y-4">
          {recurring.map((x, i) => (
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
          同じ業者に継続して依頼するための条件は
          <Link href="/area/kyoto/" className="text-primary underline underline-offset-2 mx-1">
            仕上がりの方針と継続管理
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kumamoto-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、費用が発生する範囲を事前にどこまで把握できるかという条件では、次の3サービスが確認しやすい構成です。
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

      <section id="kumamoto-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="熊本" />
      </section>

      <section id="kumamoto-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kumamoto-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kumamoto" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/sakai/", label: "認識の相違に備える記録の残し方" },
            { href: "/area/kyoto/", label: "仕上がりの方針と継続管理" },
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
          支払いの形式は会社ごとに異なります。問い合わせの段階で、支払いの時期と方法をご確認ください。
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
