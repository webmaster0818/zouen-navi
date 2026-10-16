import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kobe/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "神戸の造園・庭の手入れ業者の選び方｜見積書の読み方と書面の確認";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "複数社から見積もりを取得しても、記載方法が統一されていなければ比較できません。神戸で庭木の剪定や庭の手入れを依頼する際に、見積書のどの欄を確認し、追加費用の条件をどのように確認するかを整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "見積書の読み方と、契約前に書面で確認する項目という観点から、神戸での造園業者の選び方を整理しています。",
  },
};

const toc = [
  { id: "kobe-point", label: "見積書は「金額」より先に「記載項目」を確認します" },
  { id: "kobe-read", label: "見積書で確認すべき5つの欄" },
  { id: "kobe-extra", label: "追加費用が発生する条件を事前に確認する" },
  { id: "kobe-visit", label: "飛び込みの訪問営業を受けた場合の対応" },
  { id: "kobe-pick", label: "この条件に適した3サービス" },
  { id: "kobe-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kobe-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kobe-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["hikaku-biz", "oniwa-110", "townlife"] as const;

const pickReasons: Record<string, string> = {
  "hikaku-biz":
    "発注者の利用は無料で、造園工事のほか門・塀・フェンス・デッキ・舗装・排水といった区分でも業者を探せます。同じ条件を複数社に提示し、書面の記載方法そのものを比較したい場合に利用できる窓口です。なお、公式サイトに掲載されている口コミは末尾が省略表示されており、全文は確認できません。",
  "oniwa-110":
    "現地調査・見積もりが無料（条件あり）と公開されており、作業内容や庭の状態によって費用が変わるため、現地で確認してから依頼するよう案内しています。書面の受領を前提とした流れが明示されている点を確認できます。運営は東証上場のシェアリングテクノロジーで、請負賠償保険への加入も公開されています。",
  townlife:
    "希望条件を入力すると、複数社からプランと見積もりを取り寄せられます。図面や仕様を伴う計画を、記録が残る形で比較したい場合に適しています。一方で「資料が届かない」という厳しい口コミもあり、連絡の状況は提携会社によって差があります。",
};

const readItems = [
  {
    h: "作業の対象と数量が記載されているか",
    b: "「庭木剪定 一式」とのみ記載された見積書では、どの木に何本作業を行うのかを読み取れません。対象と数量が記載されていれば、作業後に範囲の認識の相違が生じても、どちらの理解が書面に沿っていたかを確認できます。",
  },
  {
    h: "作業の種類が分けて記載されているか",
    b: "剪定、刈り込み、草刈り、除草、片づけは、それぞれ別の作業です。一行にまとめて記載されていると、どの作業を減らせば依頼を軽くできるかを判断できません。分けて記載されていれば、予算や優先順位に合わせて相談する余地が残ります。",
  },
  {
    h: "剪定した枝の処分が含まれているか",
    b: "処分を含むのか、依頼者が処分するのかは、書面のいずれかの箇所に反映されるべき事項です。項目として記載されていない場合は、含まれていないのか、作業費に含まれているのかを確認し、回答を書面に記載してもらいます。",
  },
  {
    h: "出張や駐車に関する費用の扱い",
    b: "現場までの移動や、近隣に駐車場所を確保する必要がある場合の費用の扱いです。含む・含まないのいずれであっても、記載されていれば後に争点になりません。",
  },
  {
    h: "有効期限と条件の基準日",
    b: "見積書には作成日と有効期限があります。相談から期間が空くと、木の状態そのものが変わることもあります。有効期限が切れた書面をそのまま根拠にしないでください。",
  },
];

const extraCases = [
  {
    h: "現地で把握できていなかった事項が判明した場合",
    b: "枝の内側が枯れていた、根元に廃材が埋まっていた、木の裏側が想定より茂っていたといった事情で、作業量が変わることがあります。問題は作業量が増えること自体ではなく、増えた場合に誰の承諾を得てから進めるかが決まっていないことです。",
  },
  {
    h: "当日に依頼を追加した場合",
    b: "訪問の機会に、その場で別の木の作業も依頼する場面はよくあります。口頭で追加した作業は書面に残りません。追加分の記録方法を、その場でご確認ください。",
  },
  {
    h: "天候により日程が変更された場合",
    b: "雨や強風で作業が延期になった場合の扱い、途中で中断した場合の扱いを確認します。延期の連絡を誰がいつ行うのかもあわせて確認しておきます。",
  },
  {
    h: "依頼者の都合で取り消した場合",
    b: "いつまでにキャンセルを伝えれば費用が発生しないのかを確認します。予約型のサービスでは規定が定められていることがあり、トラブル時の対応に関する口コミも見られます。申し込む前に規定を確認しておくことをおすすめします。",
  },
];

const visitPoints = [
  {
    h: "その場で契約しない",
    b: "「本日中であれば」と契約を急がせる形式は、条件を比較する時間を失わせます。庭木の作業は、翌日に回して支障が生じるものはほとんどありません。持ち帰って検討する旨を伝えて構いません。",
  },
  {
    h: "会社名と所在地を確認する",
    b: "名刺や書面に会社名、所在地、連絡先が記載されているかを確認します。造園ナビの一覧では、各サービスの運営会社と本社所在地を公開情報から確認して掲載しています。同様に、業者の実在を自分で確認できるかどうかが判断材料になります。",
  },
  {
    h: "書面を受け取ってから判断する",
    b: "口頭の説明のみで進めると、後から内容を確認する手段がありません。作業内容と条件が記載された書面を受け取り、別の窓口から取得した見積もりと比較してから決定します。",
  },
  {
    h: "高所作業や伐採の提案は特に慎重に判断する",
    b: "大きな木に関わる作業は、一度進めると元に戻せません。その場で判断せず、複数の意見を確認してください。",
  },
];

const checklist = [
  {
    h: "同じ条件で依頼したか",
    b: "対象・範囲・処分の扱いを揃えないまま複数社に依頼すると、金額の差が何による差なのかを判断できません。比較の前提は、条件を揃えることです。",
  },
  {
    h: "一式表記の内訳を確認したか",
    b: "一式と記載されていても、内訳を口頭で説明してもらい、その内容を書き加えてもらうよう依頼できます。断られる理由のない依頼です。",
  },
  {
    h: "追加が生じた場合の連絡先を決めたか",
    b: "作業中に作業量の増減が生じた際、誰に連絡して承諾を得るかを決めておきます。立ち会えない場合は特に、事前に決めておく必要があります。",
  },
  {
    h: "キャンセルと延期の規定を確認したか",
    b: "予約の取り消しや天候による延期の扱いは、申し込みの前に確認しておく項目です。",
  },
  {
    h: "書面を保管できる形にしたか",
    b: "紙でもメールでも、後から確認できる形で保管します。やり取りが記録に残る窓口を選ぶこと自体が、確認のしやすさにつながります。",
  },
];

const faqs = [
  {
    q: "「一式」と書かれた見積書は避けるべきですか。",
    a: "一式表記そのものが問題というより、内訳を確認できないまま契約することが問題です。どの木に、どの作業を、どこまで行うのかを口頭で説明してもらい、その内容を書面に反映してもらえるかどうかをご確認ください。説明を避ける業者であれば、それ自体が判断材料になります。",
  },
  {
    q: "見積もりは何社から取ればよいですか。",
    a: "社数そのものより、条件を揃えて比較できているかが重要です。同じ写真と同じ範囲を伝えた書面が複数あれば、作業方針の違いを読み取れます。反対に条件が統一されていなければ、何社から取得しても比較にはなりません。",
  },
  {
    q: "作業中に追加を提案されたら断れますか。",
    a: "断って構いません。その場で判断できない場合は、写真を撮影してもらったうえで一度持ち帰り、改めて相談する形にできます。承諾なしに作業を進められたと感じた場合に備え、依頼時の書面を保管しておいてください。",
  },
  {
    q: "神戸市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、神戸市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKobePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "見積書の読み方と、契約前に書面で確認する項目を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "神戸" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを依頼する際、多くの方が複数社から見積もりを取得します。しかし、手元に揃った書面は、様式も項目の分け方も記載の詳しさも統一されていません。
          一方は木ごとに行が分かれ、もう一方は「庭木剪定 一式」の一行のみ。この二枚を比較しても、比較しているのは記載方法の違いであり、作業の内容ではありません。
          本ページでは、神戸で業者を選ぶにあたり、書面の読み方と、契約前に確認すべき事項に絞って整理します。
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

      <section id="kobe-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積書は「金額」より先に「記載項目」を確認します
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          書面を受け取ると、合計金額の欄に注目しがちです。しかし、庭の作業は現場の状態によって必要な手間が変わるため、合計金額のみを見ても何を比較しているのかが分かりません。
          先に確認すべきなのは、書面に何が記載されているかです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          項目が分けて記載されている書面であれば、後から範囲を調整できます。どこを減らせば依頼を軽くできるか、どこを追加すれば懸案を解決できるかを、書面にもとづいて相談できるためです。
          反対に、一行のみの書面では相談の単位がありません。作業内容ではなく値引きの話にしかならないのは、そのためです。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            比較に必要なのは、社数ではなく条件の同一性です。同じ写真、同じ範囲、同じ処分の扱いを伝えたうえで提示された書面のみが、比較する意味を持ちます。
          </p>
        </div>
      </section>

      <section id="kobe-read" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積書で確認すべき5つの欄
        </h2>
        <ol className="space-y-4">
          {readItems.map((r, i) => (
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          作業ごとの費用の考え方は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          にまとめています。書面の読み方とあわせてご確認ください。
        </p>
      </section>

      <section id="kobe-extra" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          追加費用が発生する条件を事前に確認する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりの段階で確定できない部分は、どの現場にもあります。重要なのは、確定できない事項を明示し、どのような場合に何が変わるのかを事前に共有しておくことです。
        </p>
        <div className="space-y-4">
          {extraCases.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kobe-visit" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          飛び込みの訪問営業を受けた場合の対応
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          依頼者が探した業者ではなく、業者側から訪問してきた場合は、比較の手順がすべて抜け落ちます。
          断るべきという意味ではありませんが、比較を行っていないという事実は認識しておく必要があります。
        </p>
        <div className="space-y-4">
          {visitPoints.map((v) => (
            <div key={v.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{v.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kobe-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、書面を取り寄せて比較するという利用方法では、次の3サービスが受け取りまでの流れを把握しやすい構成です。
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

      <section id="kobe-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="神戸" />
      </section>

      <section id="kobe-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kobe-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kobe" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/cost/price/", label: "庭工事の料金相場" },
            { href: "/cost/pruning-price/", label: "庭木の剪定費用の相場" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
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
          比較の準備ができたら、同じ条件で複数のサービスに相談することをおすすめします。
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
