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
  title: "札幌の造園・庭の手入れ業者の選び方｜雪を前提にした年間計画",
  description:
    "雪の積もる地域では、庭の手入れを頼める時期そのものが限られます。札幌で依頼のタイミングをどう組み立てるか、雪囲いや雪解け後の点検をいつ相談するかを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: "札幌の造園・庭の手入れ業者の選び方｜雪を前提にした年間計画",
    description:
      "依頼できる時期が限られる地域で、庭の手入れの段取りをどう前倒しするかを整理しました。",
  },
};

const toc = [
  { id: "sapporo-point", label: "札幌では「いつ頼むか」が最初の設計になる" },
  { id: "sapporo-calendar", label: "依頼タイミングの組み立て方" },
  { id: "sapporo-winter", label: "雪への備えと、雪が解けた後の点検" },
  { id: "sapporo-pick", label: "この条件で見ておきたい3サービス" },
  { id: "sapporo-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "sapporo-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "sapporo-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-master", "mitsumoa", "epark"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-master":
    "24時間365日の受付で、自社施工はせず条件に合う業者を無料で紹介する形式です。依頼が時期に集中する地域では、日中に電話をかけ直す余裕がなくても相談を進められる点が効いてきます。",
  mitsumoa:
    "質問に答える形で依頼を出すと複数社の見積もりが届き、チャットで直接相談できます。作業できる期間が限られる中で、受けられる業者を早く絞り込みたいときの当たり方として有効です。",
  epark:
    "植木屋・造園業者・庭師のカテゴリから事業者を探せ、各事業者のページで内容と口コミを確認できます。特定の時期に来てもらえる事業者を自分で探したい場合の入口になります。",
};

const timing = [
  {
    h: "雪が解けてから、まず点検を相談する",
    b: "冬を越した庭では、雪の重みで枝が裂けていたり、幹が傾いていたりすることがあります。芽吹きの前は枝ぶりが見通しやすく、傷みの有無を確かめるのに向いた時期です。折れた枝の処理と、その後どう整えるかをここで相談しておくと、一年の計画が立てやすくなります。",
  },
  {
    h: "生育期は作業内容を絞る",
    b: "葉が茂る時期は、木の様子を見ながら必要なぶんだけ手を入れる期間です。伸びた枝の整理や草刈りが中心になります。この時期は同じ依頼が重なりやすいため、日程は早めに押さえるのが現実的です。",
  },
  {
    h: "雪が来る前に、囲いと片づけを終える",
    b: "雪への備えは、積もり始めてからでは間に合いません。雪囲いや支柱の設置、剪定くずの処分といった作業は、地面が凍る前に済ませておく必要があります。相談は前倒しで、日程は余裕をもって。",
  },
  {
    h: "積雪期は屋外作業が止まる前提で考える",
    b: "雪に覆われている間は、庭の作業そのものが難しくなります。この期間は、翌シーズンに何をどう変えるかを考える時間に充てるほうが建設的です。植栽の入れ替えや庭の作り替えを検討しているなら、この時期に計画と見積もりを進めておけます。",
  },
];

const winterPoints = [
  {
    h: "雪の重みから枝を守る",
    b: "枝が横に広がる樹形や、若木のように幹が細い木は、積もった雪の重みで折れたり裂けたりすることがあります。囲いや支柱でどう支えるかは樹種と形によって変わるため、自分の庭の木をどう扱うべきかを業者に見てもらうのが確実です。",
  },
  {
    h: "落雪の当たる場所を確認する",
    b: "屋根から落ちる雪の直下に植栽があると、上からの荷重が繰り返しかかります。木の位置と屋根の向きの関係は、囲いの必要性を判断する材料になります。",
  },
  {
    h: "除雪の動線と庭の境目",
    b: "除雪した雪をどこへ寄せるかによって、特定の植栽にだけ雪が集中することがあります。寄せる場所を決めるときは、庭木の位置も併せて考えておきます。",
  },
  {
    h: "雪解け後の点検を作業として頼む",
    b: "折れかけた枝は、そのままにすると裂け目から傷みが進みます。雪が解けた段階で一度見てもらい、処理が必要な枝を片づけておくと、その後の手入れが軽くなります。",
  },
];

const checklist = [
  {
    h: "作業してほしい時期を先に伝える",
    b: "「いつでもいい」と伝えると、作業できる期間が限られる地域では後回しになりがちです。希望の時期と、動かせる幅を最初に示します。",
  },
  {
    h: "雪囲いを含めるかどうか",
    b: "剪定だけを頼むのか、雪への備えまで含めて頼むのかで、必要な訪問の回数が変わります。年に何回来てもらう想定かを決めてから相談します。",
  },
  {
    h: "同じ年に二度来てもらえるか",
    b: "生育期の手入れと、雪が来る前の備えを同じ業者に頼めるかどうか。継続して見てもらえると、前回どう切ったかを踏まえた作業になります。",
  },
  {
    h: "剪定くずの処分のタイミング",
    b: "切った枝を庭に置いたまま冬を迎えると、雪の下から出てくるのは春です。処分まで同じ日に終える段取りにしておきます。",
  },
  {
    h: "天候で延期になった場合の扱い",
    b: "作業できる期間が限られるからこそ、延期時の振り替え日をどう決めるかを先に確認しておきます。",
  },
];

const faqs = [
  {
    q: "雪が積もっている間は庭の手入れを頼めませんか。",
    a: "庭木の剪定や草刈りといった屋外の作業は、地面が雪に覆われている間は難しくなります。ただし、翌シーズンの計画づくりや見積もりの相談は進められます。工事を伴う庭の作り替えを考えているなら、この時期に検討を進めておくと着手が早まります。",
  },
  {
    q: "雪囲いはいつ相談すればよいですか。",
    a: "雪が降り始めてからでは間に合いません。地面が凍る前に設置を終える必要があるため、相談は前倒しで行い、日程には余裕をもたせてください。剪定と同じ日にまとめられるかどうかも併せて聞いておくと効率的です。",
  },
  {
    q: "札幌市内での対応可否はどこで分かりますか。",
    a: "掲載サービスはいずれも公開情報の上では全国を対象としていますが、札幌市内の個別の対応可否や、季節ごとの受付状況までは公開されていません。実際に希望の時期に作業を受けられるかは、依頼時に各社へ直接確認してください。",
  },
  {
    q: "一般的な年間カレンダーはそのまま使えますか。",
    a: "作業の内容と順番は参考になりますが、時期の区切りはそのままでは当てはまりません。雪の有無で作業できる期間が変わるためです。全国向けの年間の流れを押さえたうえで、地域の実情に合わせて前後させる読み方をしてください。",
  },
];

export default function AreaSapporoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "札幌の造園・庭の手入れ業者の選び方｜雪を前提にした年間計画",
        description: "依頼できる時期が限られる地域での、庭の手入れの段取りを整理しました。",
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
          札幌の造園・庭の手入れ業者の選び方｜雪を前提にした年間計画
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          雪の積もる地域では、庭の手入れを「どこに頼むか」より先に決まってしまうものがあります。頼める時期です。
          屋外の作業ができる期間が区切られている以上、同じ依頼がその期間に集中します。だから札幌での業者選びは、比較の前に年間の段取りを描くところから始まります。
          このページでは、依頼のタイミングをどう組み立てるかを軸に整理します。
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
          札幌では「いつ頼むか」が最初の設計になる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭木の剪定も、草刈りも、植栽の植え替えも、屋外で行う作業です。地面が雪に覆われている間は、そのどれもが難しくなります。
          裏を返せば、作業できる期間に依頼が集まるということでもあります。希望の時期に来てもらえるかどうかは、どれだけ早く相談を始めたかで決まる面があります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          さらに、雪への備えという作業がもうひとつ加わります。雪囲いや支柱の設置は、積もってからでは手遅れです。
          つまり一年のうちに、少なくとも二つの締め切りがある。雪が解けた後の点検と、雪が来る前の備えです。この二つを起点に組み立てると、予定が立てやすくなります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            全国向けの年間カレンダーは、作業の内容と順番を知るには役立ちます。ただし時期の区切りはそのままでは当てはまりません。
            <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
              庭木の年間メンテナンスカレンダー
            </Link>
            で流れを押さえたうえで、地域の実情に合わせて前後させてください。
          </p>
        </div>
      </section>

      <section id="sapporo-calendar" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          依頼タイミングの組み立て方
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
          雪への備えと、雪が解けた後の点検
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
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、限られた期間に早く候補を絞り込みたいという条件に照らすと、次の3つは動き出しが早い構成です。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/guide/lawn-care/", label: "芝生の手入れの年間の流れ" },
            { href: "/plant/low-maintenance/", label: "手入れが楽な庭木おすすめ" },
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
          作業してほしい時期が決まったら、早めに複数のサービスへ当たってみてください。
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
