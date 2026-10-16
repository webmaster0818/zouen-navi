import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/tokyo/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

export const metadata: Metadata = {
  title: "東京の造園・庭の手入れ業者の選び方｜狭小地・搬出経路の確認",
  description:
    "東京で庭木の剪定や草刈りを依頼する際に、最初に検討が必要となるのが「作業車をどこに駐車し、剪定した枝をどのように搬出するか」です。狭小地・住宅密集地に特有の段取りの確認点と、掲載サービスの運営会社・対応エリアを整理しています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: "東京の造園・庭の手入れ業者の選び方｜狭小地・搬出経路の確認",
    description:
      "東京で庭の手入れを依頼する前に確認すべき、作業スペース・搬出経路・近隣への配慮の段取りを整理しています。",
  },
};

const toc = [
  { id: "tokyo-point", label: "東京で最初に確認すべきは搬出経路です" },
  { id: "tokyo-flow", label: "現地確認から作業当日までの段取り" },
  { id: "tokyo-pick", label: "この条件に適した3サービス" },
  { id: "tokyo-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "tokyo-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "tokyo-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "kurashi-market", "oniwa-110"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "完全自店舗施工を掲げているため、当日に作業する担当者と見積もりを作成した担当者が同じになりやすく、狭い作業スペースでの段取りを一度の打ち合わせで調整しやすい構成です。",
  "kurashi-market":
    "作業内容ごとに料金が事前に表示され、依頼前に業者へメッセージを送れます。駐車スペースの有無や搬出経路の写真を事前に共有し、条件が合う業者のみに絞り込む使い方ができます。",
  "oniwa-110":
    "全国の加盟店を手配する紹介型で、受付は24時間365日です。台風の後に折れた枝を早く片づけたいなど、日程の柔軟性が優先される場面に適しています。",
};

const checklist = [
  {
    h: "作業車の駐車場所",
    b: "自宅前に駐車できるのか、コインパーキングを利用するのかを確認します。駐車場所を確保できないと、道具の運搬距離がそのまま作業時間に影響します。問い合わせの段階で「前面道路の幅」と「駐車の可否」を伝えておくと、見積もりのやり直しを減らせます。",
  },
  {
    h: "枝やゴミの搬出経路",
    b: "庭が建物の裏側にある、通り抜けが屋内しかないといった条件は、作業のしやすさを大きく左右します。勝手口や通路の幅、階段や段差の有無を事前に伝えます。",
  },
  {
    h: "隣地との距離",
    b: "隣家の壁や窓に近い枝は、脚立を立てる方向が限られます。落ち葉や剪定した枝が隣地に落ちる可能性がある場合は、作業前の挨拶を業者が行うのか、依頼者が行うのかを決めておきます。",
  },
  {
    h: "集合住宅・共用部の規則",
    b: "専用庭付きの住戸では、管理規約で植栽の扱いや作業時間帯が定められていることがあります。管理会社への事前の届出が必要かどうかを確認してから日程を確保します。",
  },
  {
    h: "剪定ゴミの引き取りの可否",
    b: "搬出できる量が限られる現場では、その場で細かく裁断するのか、持ち帰るのかによって段取りが変わります。処分まで依頼するのか、自治体の回収に出すのかを事前に決めます。",
  },
];

const faqs = [
  {
    q: "東京の狭い庭でも業者に依頼できますか。",
    a: "掲載しているサービスは、いずれも公開情報では全国を対象としており、狭小地を理由に受付を断る旨の記載はありません。ただし、作業車の駐車場所や搬出経路によって段取りが変わるため、問い合わせ時に前面道路の状況と庭までの通路を伝えておくと、相談を円滑に進められます。",
  },
  {
    q: "マンションの専用庭の手入れも頼めますか。",
    a: "専用庭は共用部分の一部として扱われることが多く、管理規約で植栽の変更や作業時間に制限が設けられている場合があります。まず管理規約と管理組合の運用を確認し、必要であれば届出を行ったうえで業者にご相談ください。",
  },
  {
    q: "隣の家に近い木の剪定はどう進めればよいですか。",
    a: "脚立や高所作業の方向が限られるため、現地を確認してもらってから作業方法を決めることが確実です。枝が隣地に越境している場合は、剪定前に確認すべき手順があります。",
  },
  {
    q: "同じ日にまとめて頼んだほうがよいですか。",
    a: "駐車や養生などの準備は作業ごとに必要になるため、剪定と草刈りのように別の作業でも同日にまとめられないかを相談する価値はあります。ただし、作業量が増えると一日で完了しない場合もあるため、所要時間の見込みもあわせてご確認ください。",
  },
];

export default function AreaTokyoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "東京の造園・庭の手入れ業者の選び方｜狭小地・搬出経路の確認",
        description:
          "東京で庭の手入れを依頼する際の、作業スペース・搬出経路・近隣への配慮の確認点をまとめています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "東京" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          東京の造園・庭の手入れ業者の選び方｜狭小地・搬出経路の確認
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          東京で庭木の剪定や草刈りを依頼する際は、仕上がりよりも先に決まる要素があります。作業車をどこに駐車するか、剪定した枝をどこから搬出するか、隣家との距離からどの方向に脚立を立てられるかといった点です。
          庭の広さより、庭に至るまでの経路が段取りを左右することが、住宅が密集した市街地の特徴です。本ページでは、その前提から東京での業者選びを整理します。
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

      <section id="tokyo-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          東京で最初に確認すべきは搬出経路です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          剪定や伐採の作業そのものは、地域によって手順が大きく変わるものではありません。違いが生じるのは、その前後の工程です。
          前面道路が狭く、一方通行が多い市街地では、作業車を庭の近くに停められないことがあります。停められない場合は、道具と剪定した枝を人手で往復して運ぶことになり、同じ本数でも一日の作業量が変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          さらに、庭が建物の裏手にあり、通路が人一人分の幅しかないという条件も珍しくありません。この場合、長い枝はその場で短く切り分けてから運ぶ必要があり、養生の範囲も広くなります。
          現地確認なしでは見積もりを作成しにくいとされるのは、こうした条件が住宅ごとに異なるためです。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            つまり、東京で業者を比較する際は、「どの作業に対応できるか」よりも先に「自宅の条件で作業が可能か」を確認することになります。
            条件を事前に伝えられるサービスほど、やり取りの回数が少なく済みます。
          </p>
        </div>
      </section>

      <section id="tokyo-flow" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          現地確認から作業当日までの段取り
        </h2>
        <ol className="space-y-4">
          {[
            {
              h: "問い合わせ時に「経路」を伝える",
              b: "木の本数や高さだけでなく、前面道路の幅、駐車できる場所、庭までの通路の有無を最初に伝えます。これらの情報が揃っていると、現地確認が一度で済む場合があります。",
            },
            {
              h: "現地確認で作業方法を決める",
              b: "脚立で足りるのか、高所作業の体制が必要か、枝をその場で裁断するのかが決まります。見積もりの金額よりも、作業方法の説明が具体的かどうかをご確認ください。",
            },
            {
              h: "近隣への挨拶の担当を決める",
              b: "隣地に面した作業や、路上に車両を停める時間が長くなる場合の挨拶を、業者が行うのか依頼者が行うのかを決めます。この点が曖昧なまま当日を迎えると、作業が中断する原因になります。",
            },
            {
              h: "作業日と時間帯を確保する",
              b: "集合住宅や住宅密集地では、作業音を出せる時間帯が限られることがあります。半日で完了しない場合の続行日もあわせて確認しておきます。",
            },
            {
              h: "ゴミの処分方法を確定する",
              b: "持ち帰り処分とするか、自治体の回収に出すかを決めます。回収に出す場合は、束ね方や出せる長さの規定を事前に確認しておきます。",
            },
          ].map((s, i) => (
            <li key={s.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{s.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="tokyo-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、搬出経路や近隣への配慮を事前に調整したいという東京の条件では、次の3サービスが確認の順序を組み立てやすい構成です。
        </p>
        <div className="space-y-4">
          {picks.map((slug) => {
            const r = findReview(slug);
            if (!r) return null;
            return (
              <div key={slug} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-bold text-text-primary mb-2">{r.companyName}</h3>
                <p className="text-sm text-text-muted mb-3 leading-7">
                  運営：{infoValue(r, "運営")}
                </p>
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

      <section id="tokyo-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="東京" />
      </section>

      <section id="tokyo-checklist" className="scroll-mt-20 mb-12">
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

      <section id="tokyo-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="tokyo" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
            { href: "/review/", label: "掲載サービスの口コミ・評判まとめ" },
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
          作業内容と現場の条件が決まったら、複数のサービスで進め方を比較することをおすすめします。
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
