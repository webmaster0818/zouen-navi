import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kyoto/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "京都の造園・庭の手入れ業者の選び方｜仕上がりの方針と継続管理";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れは一度で終わるものではなく、同じ庭に毎年作業が行われます。京都で庭を長く維持するために、樹形の方針をどのように決め、同じ基準で継続して依頼するためにどのような条件が必要かを整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "樹形の方針の決め方と、同じ基準で継続して依頼するための条件という観点から、京都での造園業者の選び方を整理しています。",
  },
};

const toc = [
  { id: "kyoto-point", label: "庭の手入れは一度で完了する工事ではありません" },
  { id: "kyoto-policy", label: "仕上がりの方針を決める3つの基準" },
  { id: "kyoto-continue", label: "同じ基準で継続して依頼するための条件" },
  { id: "kyoto-record", label: "引き継ぎのための記録を残す" },
  { id: "kyoto-pick", label: "この条件に適した3サービス" },
  { id: "kyoto-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kyoto-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kyoto-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "houzz", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "庭木1本の剪定から年間管理まで扱う庭の手入れ専門のチェーンで、完全自店舗施工を掲げています。公式サイトでは、庭師経験の長いスタッフが大半を占めることや、継続利用者の割合が高いことを自社調べとして公表しています。継続して依頼することを前提に相談したい場合の候補です。ただし、全国対応を掲げる一方で公式サイトに列挙されている都道府県は限られるため、対象地域かどうかの確認が必要です。",
  houzz:
    "造園・ガーデンデザイナーやエクステリアの専門家を地域・サービス別に検索でき、施工事例の写真と星評価付きの口コミを確認できます。どのような庭に育てていきたいかという方向性を、写真を用いて共有したい場合に利用できます。掲載の中心はデザインを担う専門家のため、手入れが中心の依頼は対応の可否をご確認ください。",
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった庭まわりの情報を発信するとともに、全国の造園・園芸・外構業者を検索できる情報・比較サイトです。運営会社は庭の手入れの全国チェーンも展開しています。依頼先を決める前に、作業の考え方を調べておきたい場合の起点になります。",
};

const policyAxes = [
  {
    h: "自然な樹形を保つか、形を整えるか",
    b: "同じ木でも、枝ぶりを活かして透かしていく手入れと、輪郭を決めて刈り込む手入れでは、目指す形が異なります。途中で方針が変わると、木は数年をかけて不揃いな姿になります。どちらを希望するかは、最初の相談で伝えておくべき事項です。",
  },
  {
    h: "どの大きさで維持するか",
    b: "木は放置すれば大きくなります。現在の高さを維持するのか、徐々に小さくするのか、それとも伸ばしたいのかを決めます。維持したい大きさが決まっていれば、毎年の作業量も安定します。決めずにいると、管理が困難になってから大きく剪定することになり、樹形が崩れます。",
  },
  {
    h: "花や実をどのように扱うか",
    b: "花を咲かせる木は、剪定の時期によって翌年の花付きが変わります。花を優先するのか、大きさを抑えることを優先するのかによって、作業の時期そのものが変わります。木ごとの適期は個別に異なるため、庭全体で一度に決められるものではありません。",
  },
];

const continuePoints = [
  {
    h: "同じ担当者に継続して依頼できるか",
    b: "前回の剪定方法を把握している担当者が訪問すれば、説明の手間はほとんどかかりません。全国チェーンでも紹介型でも、次回に同じ担当者を指名できるかどうかは窓口によって扱いが異なります。継続を前提とする場合は、最初に確認しておく項目です。",
  },
  {
    h: "年間管理として依頼できるか",
    b: "その都度依頼する形式と、年間を通じた管理として依頼する形式があります。後者であれば、いつどの作業を行うかが事前に決まるため、適期を逃しにくくなります。庭木の作業は適期が限られるものが多く、予定として確保できることには意味があります。",
  },
  {
    h: "方針が書面や記録に残るか",
    b: "口頭で伝えた方針は、担当者が変われば失われます。仕上がりの方針を書面や写真として残してもらえるか、あるいは依頼者自身が記録して次回に伝えられるかを確認します。記録があれば、業者が変わっても同じ方針で引き継げます。",
  },
  {
    h: "途中で方針を変更できるか",
    b: "家族構成が変わる、日当たりが変わる、手入れにかけられる時間が減るなど、庭の方針は途中で変更して構いません。変更する際に、どの木からどのように変えていくかを相談できる業者かどうかが、長く継続するうえでの判断基準になります。",
  },
];

const recordItems = [
  {
    h: "作業日と作業内容",
    b: "いつ、どの木に、どのような作業を行ったかが分かるだけで、次の時期の判断がしやすくなります。",
  },
  {
    h: "同じ位置から撮影した写真",
    b: "毎回同じ位置から撮影しておくと、木の変化を把握できます。大きくしたくないと伝えているにもかかわらず徐々に伸びている、といった相違にも気づけます。",
  },
  {
    h: "伝えた方針と対応の内容",
    b: "何を依頼し、どのように対応されたかの記録は、業者が変わった際にそのまま引き継ぎ資料になります。",
  },
  {
    h: "木ごとの気になる点",
    b: "枯れ込みが見られる、葉の色が例年と異なる、虫が付いたなど、気づいたことを記録しておくと、次回確認してもらう際の相談が具体的になります。",
  },
];

const checklist = [
  {
    h: "継続して依頼する前提であることを伝えたか",
    b: "一度きりの依頼と、翌年以降も継続する依頼では、提案の内容が変わります。継続する前提であることは最初に伝えます。",
  },
  {
    h: "維持したい大きさを伝えられるか",
    b: "現在の高さを維持したいのか、小さくしたいのか。方針が明確であれば、毎年の作業が安定します。",
  },
  {
    h: "同じ担当者を指名できるか確認したか",
    b: "窓口によって扱いが異なります。継続を重視する場合は、依頼を決める前に確認しておく項目です。",
  },
  {
    h: "年間管理として相談できるか",
    b: "時期の決まった作業をまとめて計画できるかどうかを確認します。予定として確保できれば、適期を逃しにくくなります。",
  },
  {
    h: "記録の残し方を決めたか",
    b: "写真とメモのみでも構いません。次回依頼する際に、自分で説明できる材料が手元に残ります。",
  },
];

const faqs = [
  {
    q: "毎年同じ業者に頼んだほうがよいのでしょうか。",
    a: "前回の作業を把握している担当者が訪問するほうが、方針は維持されやすくなります。ただし、同じ業者に依頼し続けること自体が目的ではありません。記録が残っていれば、業者が変わっても方針は引き継げます。重要なのは、庭をどのようにしたいかが言葉と記録として残っていることです。",
  },
  {
    q: "和風の庭の手入れは、専門の業者でないと難しいですか。",
    a: "様式を保った手入れを希望する場合は、どのような庭にしたいかを具体的に伝え、近い施工事例を見せてもらうことが確実です。事例写真を確認できるサービスを利用すると、言葉で説明しきれない部分を補えます。庭の様式については、和庭園の成り立ちを解説したページもご参照ください。",
  },
  {
    q: "途中で方針を変えても大丈夫ですか。",
    a: "変更して構いませんが、木の姿は一度で切り替わるものではありません。特に大きさを抑える方向に変更する場合は、数年をかけて段階的に移行するほうが木への負担が小さくなります。変更したい理由と、どの程度の期間で移行したいかを伝えて相談してください。",
  },
  {
    q: "京都市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、京都市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKyotoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "樹形の方針の決め方と、同じ基準で継続して依頼するための条件をまとめています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "京都" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れは、一度依頼して終わるものではありません。同じ庭に翌年も、その次の年も作業が行われます。
          そのため、一回ごとの仕上がりよりも、どのような庭にしていきたいかという方針のほうが結果を左右します。方針が定まらないまま毎回異なる剪定が行われると、木は年ごとに異なる姿になります。
          本ページでは、京都で庭を長く維持したい方に向けて、方針の決め方と、それを継続するための条件を整理します。
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

      <section id="kyoto-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭の手入れは一度で完了する工事ではありません
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          外構工事であれば、完成した時点で工事は終了します。庭木はこれとは異なり、剪定後も伸び続け、剪定の積み重ねがそのまま樹形になります。
          前年の剪定方法が今年の枝の出方を決め、今年の判断が翌年の形を決めます。手入れとは、このような連続した作業です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この前提に立つと、業者選びで確認すべき点が変わります。一回の仕上がりの良し悪しだけでなく、翌年も同じ考え方で継続できるかどうかが重要です。
          そのためには、依頼者にも「このようにしたい」という基準が必要です。基準がなければ、業者が変わるたびに庭の方向性も変わってしまいます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            専門的な用語で方針を説明する必要はありません。「この高さより大きくしたくない」「自然な形を保ちたい」「春の花は残したい」といった表現でも、
            継続して伝えれば、十分に方針として機能します。
          </p>
        </div>
      </section>

      <section id="kyoto-policy" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          仕上がりの方針を決める3つの基準
        </h2>
        <div className="space-y-4">
          {policyAxes.map((a, i) => (
            <div key={a.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
                <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{a.h}</span>
              </h3>
              <p className="text-[15px] leading-8 text-text-secondary">{a.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          木ごとの適期の考え方は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定費用と適した時期
          </Link>
          、庭全体の年間の流れは
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="kyoto-continue" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          同じ基準で継続して依頼するための条件
        </h2>
        <div className="space-y-4">
          {continuePoints.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kyoto-record" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          引き継ぎのための記録を残す
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          記録は業者のためではなく、依頼者が方針を維持するための手段です。手元にあれば、業者が変わっても同じ説明ができます。
          記録する項目は多くありません。
        </p>
        <ol className="space-y-4">
          {recordItems.map((r, i) => (
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

      <section id="kyoto-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、方針を共有して継続的に依頼したいという条件では、次の3サービスが相談の材料を揃えやすい構成です。
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

      <section id="kyoto-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="京都" />
      </section>

      <section id="kyoto-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <div className="space-y-4">
          {checklist.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kyoto-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kyoto" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/japanese-garden/", label: "和庭園の作り方" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/plant/low-maintenance/", label: "手入れが容易な庭木のおすすめ" },
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
          方針が決まったら、それを継続して依頼できる業者かどうかという観点で各サービスを比較することをおすすめします。
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
