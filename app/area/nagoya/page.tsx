import type { Metadata } from "next";
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
    "造園のサービスには、自社の職人が現場に入る自社施工型と、加盟店や登録業者を手配する紹介型があります。名古屋で庭木の手入れを頼む前に知っておきたい両者の違いと、掲載サービスの運営会社・対応エリアを整理しました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "名古屋の造園・庭の手入れ業者の選び方｜自社施工型と紹介型の見分け方",
    description:
      "自社施工型と紹介型という運営体制の違いから、名古屋での造園サービスの選び方を整理しました。",
  },
};

const toc = [
  { id: "nagoya-point", label: "同じ「造園の窓口」でも中身は二種類ある" },
  { id: "nagoya-compare", label: "自社施工型と紹介型の違い" },
  { id: "nagoya-hq", label: "運営会社の所在地をどう読むか" },
  { id: "nagoya-pick", label: "この条件で見ておきたい3サービス" },
  { id: "nagoya-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nagoya-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nagoya-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "oniwa-110", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "完全自店舗施工を掲げる庭手入れのチェーンです。見積もりを出した店舗がそのまま作業に入る形のため、作業内容の擦り合わせが一本の線でつながります。",
  "oniwa-110":
    "全国の加盟店を紹介・手配する形式で、受付は24時間365日。草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽まで受け口が広く、まず相談先を一本化したいときの入口になります。",
  "oniwa-madoguchi":
    "施工そのものではなく、造園・剪定・伐採・草刈りの情報発信と業者検索を担う情報・比較サイトです。依頼先を決める前に、作業の種類や進め方の全体像を掴む用途に向きます。",
};

const compareRows = [
  {
    axis: "現場に入る人",
    own: "契約した会社の職人がそのまま作業する",
    intro: "加盟店・登録事業者が作業する（会社は手配と受付を担う）",
  },
  {
    axis: "見積もりの出どころ",
    own: "作業する担当者が現地を見て出すことが多い",
    intro: "受付が条件を聞き取り、実際に入る事業者と擦り合わせる形になる",
  },
  {
    axis: "品質のばらつき",
    own: "会社の基準に沿うため、店舗間の差が中心",
    intro: "事業者ごとの差が出やすく、口コミや評価の確認が重要になる",
  },
  {
    axis: "受付の広さ",
    own: "店舗の稼働状況に左右される",
    intro: "全国規模の受付網を持ち、日程の選択肢を確保しやすい",
  },
  {
    axis: "向いている依頼",
    own: "仕上がりの相談を重ねたい剪定・庭木の管理",
    intro: "急ぎの草刈りや、まず一度見てもらいたい相談",
  },
];

const checklist = [
  {
    h: "作業に来るのは契約先の社員か",
    b: "問い合わせの段階で「作業するのは御社の職人ですか、それとも加盟店ですか」と聞くだけで、運営体制は判別できます。どちらが良い悪いではなく、質問や変更を誰に伝えればよいかが変わります。",
  },
  {
    h: "見積もりを出す人と作業する人が同じか",
    b: "別々の場合、伝えた条件が現場まで届いているかを当日に確認する必要があります。現地確認に作業担当者が同席できるかを聞いておくと行き違いが減ります。",
  },
  {
    h: "作業後の不具合をどこへ伝えるか",
    b: "紹介型では、窓口の会社と実際の事業者のどちらが対応するのかが分かれます。連絡先と対応の範囲を作業前に確認します。",
  },
  {
    h: "保険や補償の適用範囲",
    b: "物を壊してしまった場合の補償が、窓口の制度によるのか、事業者個別の保険によるのかを確かめます。適用の条件は各社が公開している範囲で確認してください。",
  },
  {
    h: "同じ担当に継続して頼めるか",
    b: "庭木の管理は前回どう切ったかが次に効きます。同じ担当や同じ事業者を指名できるかどうかは、長く付き合う前提なら早めに聞いておきたい点です。",
  },
];

const faqs = [
  {
    q: "自社施工型と紹介型では、どちらを選ぶべきですか。",
    a: "目的によります。仕上がりの相談を重ねたい庭木の剪定なら、作業者と直接話が通る自社施工型が噛み合います。急いで草を刈りたい、まず一度見てほしいという場合は、受付網の広い紹介型のほうが日程を確保しやすくなります。",
  },
  {
    q: "運営会社が愛知県内にあると、名古屋での対応は有利になりますか。",
    a: "そうとは限りません。本社の所在地は、その地域での作業体制を意味するものではないためです。実際に作業に入るのは店舗や加盟店であり、名古屋市内で受けられるかどうかは各社の稼働状況によります。依頼時に直接確認してください。",
  },
  {
    q: "紹介型のサービスでは、業者を自分で選べますか。",
    a: "サービスによって異なります。登録業者を自分で選んで依頼する形式もあれば、条件を伝えて手配してもらう形式もあります。自分で選びたい場合は、口コミや料金が事前に確認できる形式かどうかを先に見てください。",
  },
  {
    q: "情報サイトと依頼窓口はどう使い分けますか。",
    a: "作業の種類や進め方が固まっていない段階では、情報サイトで全体像を掴むほうが早く進みます。やることが決まったら、見積もりを取れる窓口に移ります。順番を逆にすると、比較の軸が定まらないまま金額だけを見ることになりがちです。",
  },
];

export default function AreaNagoyaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "名古屋の造園・庭の手入れ業者の選び方｜自社施工型と紹介型の見分け方",
        description: "運営体制の違いから、名古屋での造園・庭の手入れの依頼先を整理しました。",
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
          庭木の手入れを検索すると、似た見た目のサイトがいくつも並びます。けれど中身は一様ではありません。
          自社の職人が現場に入る会社と、加盟店や登録事業者を手配する窓口とでは、見積もりの出方も、作業後に誰へ連絡するかも変わります。
          このページでは、その運営体制の違いを軸に、名古屋で庭の手入れを頼むときの見分け方を整理します。
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
          同じ「造園の窓口」でも中身は二種類ある
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社まで確認したサービスを並べると、大きく二つの型に分かれます。
          ひとつは、自社の店舗と職人が直接作業する型。もうひとつは、全国の加盟店や登録事業者を紹介・手配する型です。
          後者では、依頼を受ける会社と、実際に庭へ来る事業者が別になります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この違いは、金額の高い安いより先に効いてきます。たとえば「前回より少し強めに切ってほしい」という要望を誰に伝えるのか。
          作業後に枝の残り方が気になったとき、どこへ連絡すれば話が通るのか。運営体制が分かっていれば、この二つは問い合わせの時点で決められます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            どちらの型が優れているという話ではありません。相談を重ねたいのか、早く手配したいのか。
            自分の目的に合うほうを選べば、やり取りの手数はそれだけで減ります。
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
                  比べる観点
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
          運営会社の所在地をどう読むか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載サービスの運営会社を調べていくと、東海地方に本社を置く会社がいくつか含まれます。
          ただし、本社がどこにあるかは、その地域で作業を受けられるかどうかとは別の話です。紹介型であれば現場に入るのは加盟店であり、自社施工型でも作業するのは各地の店舗です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          所在地の情報が役に立つのは、むしろ「どの会社が運営しているのか」を確かめるときです。
          同じ会社が、情報サイトと施工サービスの両方を手がけていることもあります。運営元をたどると、サイト同士の関係が見えてきます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            名古屋市内で実際に作業を受けられるかどうかは、各社の公開情報からは判断できません。
            対応可否・作業日程・出張範囲は、依頼時に各社へ直接確認してください。
          </p>
        </div>
      </section>

      <section id="nagoya-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          運営体制の違いを見るという観点で、型が対照的な3つを挙げます。いずれも公開情報の上では全国を対象としています。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/review/", label: "掲載サービスの口コミ・評判まとめ" },
            { href: "/service/pruning/", label: "庭木の剪定費用と最適な時期" },
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
          運営体制の型を見分けたら、あとは自分の目的に合う窓口を選ぶだけです。
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
