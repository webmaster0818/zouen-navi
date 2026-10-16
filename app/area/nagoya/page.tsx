import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nagoya/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

export const metadata: Metadata = {
  title: "名古屋の造園・庭の手入れ業者の選び方｜自社施工型と紹介型の見分け方",
  description:
    "造園のサービスには、自社の職人が現場で作業する自社施工型と、加盟店や登録業者を手配する紹介型があります。名古屋で庭木の手入れを依頼する前に確認すべき両者の違いと、掲載サービスの運営会社・対応エリアを整理しています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: "名古屋の造園・庭の手入れ業者の選び方｜自社施工型と紹介型の見分け方",
    description:
      "自社施工型と紹介型という運営体制の違いから、名古屋での造園サービスの選び方を整理しています。",
  },
};

const toc = [
  { id: "nagoya-point", label: "同じ「造園の窓口」でも運営形態は二種類あります" },
  { id: "nagoya-compare", label: "自社施工型と紹介型の違い" },
  { id: "nagoya-hq", label: "運営会社の所在地の見方" },
  { id: "nagoya-pick", label: "この条件に適した3サービス" },
  { id: "nagoya-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nagoya-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nagoya-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "oniwa-110", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "完全自店舗施工を掲げる庭の手入れのチェーンです。見積もりを作成した店舗がそのまま作業を担当する形式のため、作業内容の調整を一貫して行えます。",
  "oniwa-110":
    "全国の加盟店を紹介・手配する形式で、受付は24時間365日です。草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽まで対応範囲が広く、相談先を一本化したい場合に利用できます。",
  "oniwa-madoguchi":
    "施工ではなく、造園・剪定・伐採・草刈りの情報発信と業者検索を担う情報・比較サイトです。依頼先を決める前に、作業の種類や進め方の全体像を把握する用途に適しています。",
};

const compareRows = [
  {
    axis: "現場で作業する担当者",
    own: "契約した会社の職人が作業する",
    intro: "加盟店・登録業者が作業する（会社は手配と受付を担う）",
  },
  {
    axis: "見積もりの作成者",
    own: "作業担当者が現地を確認して作成することが多い",
    intro: "受付が条件を聞き取り、実際に作業する業者と調整する形になる",
  },
  {
    axis: "品質の差",
    own: "会社の基準に沿うため、主に店舗間の差となる",
    intro: "業者ごとの差が生じやすく、口コミや評価の確認が重要になる",
  },
  {
    axis: "受付体制の規模",
    own: "店舗の稼働状況に左右される",
    intro: "全国規模の受付網を持ち、日程の選択肢を確保しやすい",
  },
  {
    axis: "適している依頼",
    own: "仕上がりの相談を重ねたい剪定・庭木の管理",
    intro: "急ぎの草刈りや、まず現地を確認してもらいたい相談",
  },
];

const checklist = [
  {
    h: "作業担当者は契約先の社員か",
    b: "問い合わせの段階で「作業するのは御社の職人ですか、それとも加盟店ですか」と確認するだけで、運営体制を判別できます。どちらが優れているということではなく、質問や変更を誰に伝えればよいかが変わります。",
  },
  {
    h: "見積もりの作成者と作業担当者が同じか",
    b: "異なる場合は、伝えた条件が現場まで伝わっているかを当日に確認する必要があります。現地確認に作業担当者が同席できるかを確認しておくと、行き違いを減らせます。",
  },
  {
    h: "作業後の不具合の連絡先",
    b: "紹介型では、窓口の会社と実際の業者のどちらが対応するのかが分かれます。連絡先と対応範囲を作業前に確認します。",
  },
  {
    h: "保険や補償の適用範囲",
    b: "物品を破損した場合の補償が、窓口の制度によるのか、業者個別の保険によるのかを確認します。適用条件は、各社が公開している範囲でご確認ください。",
  },
  {
    h: "同じ担当者に継続して依頼できるか",
    b: "庭木の管理では、前回の剪定方法が次回の作業に影響します。同じ担当者や同じ業者を指名できるかどうかは、継続的な依頼を前提とする場合、早めに確認しておくべき点です。",
  },
];

const faqs = [
  {
    q: "自社施工型と紹介型では、どちらを選ぶべきですか。",
    a: "目的によります。仕上がりの相談を重ねたい庭木の剪定であれば、作業者と直接やり取りできる自社施工型が適しています。急いで草を刈りたい、まず現地を確認してほしいという場合は、受付網の広い紹介型のほうが日程を確保しやすくなります。",
  },
  {
    q: "運営会社が愛知県内にあると、名古屋での対応は有利になりますか。",
    a: "必ずしもそうではありません。本社の所在地は、その地域での作業体制を意味するものではないためです。実際に作業するのは店舗や加盟店であり、名古屋市内で対応できるかどうかは各社の稼働状況によります。依頼時に直接ご確認ください。",
  },
  {
    q: "紹介型のサービスでは、業者を自分で選べますか。",
    a: "サービスによって異なります。登録業者を自分で選んで依頼する形式もあれば、条件を伝えて手配してもらう形式もあります。自分で選びたい場合は、口コミや料金を事前に確認できる形式かどうかを先にご確認ください。",
  },
  {
    q: "情報サイトと依頼窓口はどう使い分けますか。",
    a: "作業の種類や進め方が定まっていない段階では、情報サイトで全体像を把握するほうが効率的です。作業内容が決まったら、見積もりを取得できる窓口に移ります。順序を逆にすると、比較の基準が定まらないまま金額のみを比較することになりがちです。",
  },
];

export default function AreaNagoyaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "名古屋の造園・庭の手入れ業者の選び方｜自社施工型と紹介型の見分け方",
        description: "運営体制の違いから、名古屋での造園・庭の手入れの依頼先を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "名古屋" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          名古屋の造園・庭の手入れ業者の選び方｜自社施工型と紹介型の見分け方
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭木の手入れについて検索すると、外観の似たサイトが多数表示されますが、その運営形態は一様ではありません。
          自社の職人が現場で作業する会社と、加盟店や登録業者を手配する窓口とでは、見積もりの作成方法も、作業後の連絡先も異なります。
          本ページでは、その運営体制の違いを基準に、名古屋で庭の手入れを依頼する際の見分け方を整理します。
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

      <section id="nagoya-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          同じ「造園の窓口」でも運営形態は二種類あります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社まで確認したサービスを整理すると、大きく二つの形態に分かれます。
          一つは、自社の店舗と職人が直接作業する形態、もう一つは、全国の加盟店や登録業者を紹介・手配する形態です。
          後者では、依頼を受け付ける会社と、実際に作業する業者が異なります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この違いは、金額の高低より先に影響します。たとえば「前回より少し強めに剪定してほしい」という要望を誰に伝えるのか、
          作業後に枝の残り方が気になった場合にどこへ連絡すればよいのか。運営体制が分かっていれば、この二点は問い合わせの時点で決められます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            どちらの形態が優れているということではありません。相談を重ねたいのか、早く手配したいのか、
            自分の目的に合う形態を選べば、やり取りの手間を減らせます。
          </p>
        </div>
      </section>

      <section id="nagoya-compare" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自社施工型と紹介型の違い
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[520px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                  比較の観点
                </th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">自社施工型</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">紹介・手配型</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, idx) => (
                <tr key={row.axis} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th
                    scope="row"
                    className="text-left align-top font-semibold text-text-primary px-4 py-3"
                  >
                    {row.axis}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.own}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.intro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="nagoya-hq" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          運営会社の所在地の見方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載サービスの運営会社を確認すると、東海地方に本社を置く会社がいくつか含まれます。
          ただし、本社の所在地は、その地域で作業に対応できるかどうかとは別の問題です。紹介型であれば作業するのは加盟店であり、自社施工型でも作業するのは各地の店舗です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          所在地の情報が役立つのは、むしろ「どの会社が運営しているのか」を確認する場合です。
          同じ会社が情報サイトと施工サービスの両方を運営していることもあり、運営元を確認すると、サイト同士の関係を把握できます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            名古屋市内で実際に作業に対応できるかどうかは、各社の公開情報からは判断できません。
            対応可否・作業日程・出張範囲は、依頼時に各社へ直接ご確認ください。
          </p>
        </div>
      </section>

      <section id="nagoya-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          運営体制の違いという観点から、形態が対照的な3サービスを紹介します。いずれも公開情報では全国を対象としています。
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

      <section id="nagoya-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="名古屋" />
      </section>

      <section id="nagoya-checklist" className="scroll-mt-20 mb-12">
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

      <section id="nagoya-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="nagoya" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/review/", label: "掲載サービスの口コミ・評判まとめ" },
            { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
            { href: "/guide/lawn-care/", label: "芝生の手入れの年間の流れ" },
            { href: "/ranking/pruning/", label: "剪定業者ランキング" },
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
          運営体制の形態を見分けたら、自分の目的に合う窓口を選ぶことをおすすめします。
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
