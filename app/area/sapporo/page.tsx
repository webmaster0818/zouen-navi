import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/sapporo/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

export const metadata: Metadata = {
  title: "札幌の造園・庭の手入れ業者の選び方｜積雪を考慮した年間計画",
  description:
    "積雪のある地域では、庭の手入れを依頼できる時期そのものが限られます。札幌で依頼の時期をどのように計画するか、雪囲いや雪解け後の点検をいつ相談するかを整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: "札幌の造園・庭の手入れ業者の選び方｜積雪を考慮した年間計画",
    description:
      "依頼できる時期が限られる地域で、庭の手入れの段取りをどのように前倒しするかを整理しています。",
  },
};

const toc = [
  { id: "sapporo-point", label: "札幌では依頼の時期を最初に計画します" },
  { id: "sapporo-calendar", label: "依頼時期の計画の立て方" },
  { id: "sapporo-winter", label: "雪への備えと雪解け後の点検" },
  { id: "sapporo-pick", label: "この条件に適した3サービス" },
  { id: "sapporo-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "sapporo-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "sapporo-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-master", "mitsumoa", "epark"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-master":
    "受付は24時間365日で、自社では施工せず、条件に合う業者を無料で紹介する形式です。依頼が特定の時期に集中する地域では、日中に電話をかけ直す時間がなくても相談を進められる点が利点です。",
  mitsumoa:
    "質問に回答する形で依頼すると複数社から見積もりが届き、チャットで直接相談できます。作業できる期間が限られる中で、対応可能な業者を早く絞り込みたい場合に有効です。",
  epark:
    "植木屋・造園業者・庭師のカテゴリから業者を探すことができ、各業者のページで内容と口コミを確認できます。特定の時期に対応できる業者を自分で探したい場合に利用できます。",
};

const timing = [
  {
    h: "雪解け後に、まず点検を相談する",
    b: "冬を越した庭では、雪の重みで枝が裂けていたり、幹が傾いていたりすることがあります。芽吹きの前は枝ぶりを確認しやすく、傷みの有無を確認するのに適した時期です。折れた枝の処理と、その後の整え方をこの時期に相談しておくと、一年の計画を立てやすくなります。",
  },
  {
    h: "生育期は作業内容を絞る",
    b: "葉が茂る時期は、木の様子を見ながら必要な分だけ手入れを行う期間です。伸びた枝の整理や草刈りが中心となります。この時期は依頼が集中しやすいため、日程は早めに確保することをおすすめします。",
  },
  {
    h: "降雪前に雪囲いと片づけを完了する",
    b: "雪への備えは、積雪が始まってからでは間に合いません。雪囲いや支柱の設置、剪定くずの処分といった作業は、地面が凍結する前に済ませておく必要があります。相談は前倒しで行い、日程には余裕を持たせてください。",
  },
  {
    h: "積雪期は屋外作業が困難となる前提で計画する",
    b: "積雪期間中は、庭の作業そのものが困難になります。この期間は、翌シーズンに何をどのように変えるかを検討する時間に充てることをおすすめします。植栽の入れ替えや庭の改修を検討している場合は、この時期に計画と見積もりを進めておけます。",
  },
];

const winterPoints = [
  {
    h: "雪の重みから枝を保護する",
    b: "枝が横に広がる樹形や、若木のように幹が細い木は、積雪の重みで折れたり裂けたりすることがあります。雪囲いや支柱による支え方は樹種と樹形によって異なるため、自宅の庭木の扱い方を業者に確認してもらうことが確実です。",
  },
  {
    h: "落雪が当たる場所を確認する",
    b: "屋根からの落雪の直下に植栽があると、上からの荷重が繰り返しかかります。木の位置と屋根の向きの関係は、雪囲いの必要性を判断する材料になります。",
  },
  {
    h: "除雪の動線と庭の境界",
    b: "除雪した雪をどこへ寄せるかによって、特定の植栽にのみ雪が集中することがあります。雪を寄せる場所を決める際は、庭木の位置もあわせて考慮しておきます。",
  },
  {
    h: "雪解け後の点検を作業として依頼する",
    b: "折れかけた枝は、そのままにしておくと裂け目から傷みが進行します。雪解けの段階で一度確認してもらい、処理が必要な枝を片づけておくと、その後の手入れの負担が軽くなります。",
  },
];

const checklist = [
  {
    h: "作業を希望する時期を最初に伝える",
    b: "「いつでもよい」と伝えると、作業できる期間が限られる地域では後回しにされがちです。希望の時期と、調整可能な範囲を最初に示します。",
  },
  {
    h: "雪囲いを含めるかどうか",
    b: "剪定のみを依頼するのか、雪への備えまで含めて依頼するのかによって、必要な訪問の回数が変わります。年に何回訪問してもらう想定かを決めてから相談します。",
  },
  {
    h: "同じ年に二度訪問してもらえるか",
    b: "生育期の手入れと、降雪前の備えを同じ業者に依頼できるかどうかを確認します。継続して依頼できれば、前回の剪定内容を踏まえた作業を受けられます。",
  },
  {
    h: "剪定くずの処分の時期",
    b: "剪定した枝を庭に置いたまま冬を迎えると、雪解けの春まで処分できません。処分まで同日に完了する段取りにしておきます。",
  },
  {
    h: "天候により延期となった場合の扱い",
    b: "作業できる期間が限られるため、延期時の振替日の決め方を事前に確認しておきます。",
  },
];

const faqs = [
  {
    q: "雪が積もっている間は庭の手入れを頼めませんか。",
    a: "庭木の剪定や草刈りといった屋外の作業は、地面が雪に覆われている間は困難になります。ただし、翌シーズンの計画づくりや見積もりの相談は進められます。工事を伴う庭の改修を検討している場合は、この時期に検討を進めておくと着手を早められます。",
  },
  {
    q: "雪囲いはいつ相談すればよいですか。",
    a: "降雪が始まってからでは間に合いません。地面が凍結する前に設置を完了する必要があるため、相談は前倒しで行い、日程には余裕を持たせてください。剪定と同日にまとめられるかどうかもあわせて確認しておくと効率的です。",
  },
  {
    q: "札幌市内での対応可否はどこで分かりますか。",
    a: "掲載サービスはいずれも公開情報では全国を対象としていますが、札幌市内での個別の対応可否や、季節ごとの受付状況は公開されていません。希望の時期に作業を依頼できるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
  {
    q: "一般的な年間カレンダーはそのまま使えますか。",
    a: "作業の内容と順序は参考になりますが、時期の区分はそのまま当てはまりません。積雪の有無によって作業できる期間が変わるためです。全国向けの年間の流れを把握したうえで、地域の実情に合わせて時期を調整してご活用ください。",
  },
];

export default function AreaSapporoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "札幌の造園・庭の手入れ業者の選び方｜積雪を考慮した年間計画",
        description: "依頼できる時期が限られる地域での、庭の手入れの段取りを整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "札幌" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          札幌の造園・庭の手入れ業者の選び方｜積雪を考慮した年間計画
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          積雪のある地域では、庭の手入れを「どこに依頼するか」より先に決まるものがあります。それは依頼できる時期です。
          屋外の作業ができる期間が限られている以上、同じ依頼がその期間に集中します。そのため、札幌での業者選びは、比較の前に年間の段取りを計画するところから始まります。
          本ページでは、依頼の時期の計画の立て方を中心に整理します。
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

      <section id="sapporo-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          札幌では依頼の時期を最初に計画します
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭木の剪定も、草刈りも、植栽の植え替えも、屋外で行う作業です。地面が雪に覆われている間は、いずれも困難になります。
          言い換えれば、作業できる期間に依頼が集中するということです。希望の時期に作業を依頼できるかどうかは、どれだけ早く相談を始めたかによって決まる面があります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          さらに、雪への備えという作業が加わります。雪囲いや支柱の設置は、積雪後では手遅れになります。
          つまり、一年のうちに少なくとも二つの期限があります。雪解け後の点検と、降雪前の備えです。この二つを起点に計画すると、予定を立てやすくなります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            全国向けの年間カレンダーは、作業の内容と順序を把握するには役立ちます。ただし、時期の区分はそのまま当てはまりません。
            <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
              庭木の年間メンテナンスカレンダー
            </Link>
            で全体の流れを把握したうえで、地域の実情に合わせて時期を調整してください。
          </p>
        </div>
      </section>

      <section id="sapporo-calendar" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          依頼時期の計画の立て方
        </h2>
        <ol className="space-y-4">
          {timing.map((t, i) => (
            <li key={t.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{t.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{t.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="sapporo-winter" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          雪への備えと雪解け後の点検
        </h2>
        <div className="space-y-4">
          {winterPoints.map((w) => (
            <div key={w.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{w.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{w.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sapporo-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、限られた期間に早く候補を絞り込みたいという条件では、次の3サービスが早期に相談を始めやすい構成です。
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

      <section id="sapporo-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="札幌" />
      </section>

      <section id="sapporo-checklist" className="scroll-mt-20 mb-12">
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

      <section id="sapporo-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="sapporo" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/guide/lawn-care/", label: "芝生の手入れの年間の流れ" },
            { href: "/plant/low-maintenance/", label: "手入れが容易な庭木のおすすめ" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
            { href: "/guide/winter-care/", label: "冬の庭木の寒さ対策" },
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
          作業を希望する時期が決まったら、早めに複数のサービスに相談することをおすすめします。
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
