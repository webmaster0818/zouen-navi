import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/tokyo/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

export const metadata: Metadata = {
  title: "東京の造園・庭の手入れ業者の選び方｜狭小地・搬出経路から考える",
  description:
    "東京で庭木の剪定や草刈りを依頼するときに、まず決まってしまうのが「作業車をどこに停め、切った枝をどう運び出すか」です。狭小地・住宅密集地ならではの段取りの確認点と、掲載サービスの運営会社・対応エリアを整理しました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "東京の造園・庭の手入れ業者の選び方｜狭小地・搬出経路から考える",
    description:
      "東京で庭の手入れを依頼する前に確認したい、作業スペース・搬出経路・近隣配慮の段取りを整理しました。",
  },
};

const toc = [
  { id: "tokyo-point", label: "東京で最初に決まるのは「搬出経路」" },
  { id: "tokyo-flow", label: "現地確認から作業当日までの段取り" },
  { id: "tokyo-pick", label: "この条件で見ておきたい3サービス" },
  { id: "tokyo-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "tokyo-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "tokyo-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "kurashi-market", "oniwa-110"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "完全自店舗施工を掲げているため、当日に現場へ来る人と見積もりを出した人が同じになりやすく、狭い作業スペースの取り合わせを一度の打ち合わせで詰めやすい構成です。",
  "kurashi-market":
    "作業内容ごとに料金が先に表示され、依頼前に業者へメッセージを送れます。駐車スペースの有無や搬出経路の写真を事前に共有し、条件が合う業者だけに絞り込む使い方ができます。",
  "oniwa-110":
    "全国の加盟店を手配する紹介型で、受付は24時間365日。台風の後に折れた枝を早く片づけたいなど、日程の自由度が優先される場面に向きます。",
};

const checklist = [
  {
    h: "作業車を停められる場所",
    b: "自宅前に停められるのか、コインパーキングを使うのか。駐車場所が確保できないと、道具の運搬距離がそのまま作業時間に跳ね返ります。問い合わせの段階で「前面道路の幅」と「駐車できるかどうか」を伝えておくと見積もりのやり直しが減ります。",
  },
  {
    h: "枝やゴミを運び出す経路",
    b: "庭が建物の裏側にある、通り抜けが家の中しかない、といった条件は作業のしやすさを大きく変えます。勝手口や通路の幅、階段や段差の有無を先に伝えます。",
  },
  {
    h: "隣地との距離",
    b: "隣家の壁や窓に近い枝は、脚立を立てる向きが限られます。落ち葉や切った枝が隣地へ落ちる可能性がある場合、作業前の声かけを業者が行うのか、自分で行うのかを決めておきます。",
  },
  {
    h: "集合住宅・共用部のルール",
    b: "専用庭付きの住戸では、管理規約で植栽の扱いや作業時間帯が決められていることがあります。管理会社への事前届出が必要かどうかを確認してから日程を押さえます。",
  },
  {
    h: "剪定ゴミの引き取り可否",
    b: "運び出せる量が限られる現場では、その場で細かく裁断するのか、持ち帰るのかで段取りが変わります。処分まで依頼するのか、自治体の回収に出すのかを先に決めます。",
  },
];

const faqs = [
  {
    q: "東京の狭い庭でも業者に依頼できますか。",
    a: "掲載しているサービスはいずれも公開情報の上では全国を対象としており、狭小地を理由に受付を断る旨の記載はありません。ただし、作業車の駐車場所や搬出経路によって段取りが変わるため、問い合わせ時に前面道路の状況と庭までの通路を伝えておくと話が早く進みます。",
  },
  {
    q: "マンションの専用庭の手入れも頼めますか。",
    a: "専用庭は共用部分の一部として扱われることが多く、管理規約で植栽の変更や作業時間に制限が設けられている場合があります。まず管理規約と管理組合の運用を確認し、必要であれば届出をしたうえで業者へ相談してください。",
  },
  {
    q: "隣の家に近い木の剪定はどう進めればよいですか。",
    a: "脚立や高所作業の向きが限られるため、現地を見てもらってから作業方法を決めるのが確実です。枝が隣地へ越境している場合は、切る前に確認しておきたい手順があります。",
  },
  {
    q: "同じ日にまとめて頼んだほうがよいですか。",
    a: "駐車や養生などの準備は作業ごとに必要になるため、剪定と草刈りのように別作業でも同じ日程にまとめられないかを相談する価値はあります。ただし作業量が増えると一日で終わらない場合もあるので、時間の見込みを併せて聞いてください。",
  },
];

export default function AreaTokyoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "東京の造園・庭の手入れ業者の選び方｜狭小地・搬出経路から考える",
        description:
          "東京で庭の手入れを依頼する際の、作業スペース・搬出経路・近隣配慮の確認点をまとめました。",
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
          東京の造園・庭の手入れ業者の選び方｜狭小地・搬出経路から考える
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          東京で庭木の剪定や草刈りを頼むとき、仕上がりよりも先に決まってしまう要素があります。作業車をどこに停めるか、切った枝をどこから運び出すか、隣家との距離でどちら向きに脚立を立てられるか。
          庭そのものの広さより、庭に至るまでの経路が段取りを左右するのが、住宅の密集した市街地の特徴です。このページでは、その前提から東京での業者選びを整理します。
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
          東京で最初に決まるのは「搬出経路」
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          剪定や伐採の作業そのものは、どの地域でも手順が大きく変わるものではありません。違いが出るのは、その前後です。
          前面道路が狭く一方通行が多い市街地では、作業車を庭の近くに寄せられないことがあります。寄せられなければ、道具と切った枝を人の手で往復して運ぶことになり、同じ本数でも一日の作業量が変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          さらに、庭が建物の裏手にあり、通路が人ひとり分しかないという条件も珍しくありません。この場合、長い枝はその場で短く切り分けてから運ぶ必要があり、養生の範囲も広くなります。
          見積もりが現地確認なしでは出しにくいと言われるのは、こうした条件が家ごとに違うためです。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            つまり東京で業者を比べるときは、「どの作業ができるか」よりも先に「自分の家の条件で作業ができるか」を突き合わせることになります。
            条件を先に伝えられるサービスほど、やり取りの回数が少なく済みます。
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
              b: "木の本数や高さだけでなく、前面道路の幅、駐車できる場所、庭までの通路の有無を最初に伝えます。ここが揃っていると、現地確認が一度で済むことがあります。",
            },
            {
              h: "現地確認で作業方法を決める",
              b: "脚立で足りるのか、高所作業の体制が必要か、枝をその場で裁断するのかが決まります。見積もりの金額よりも、作業方法の説明が具体的かどうかを見てください。",
            },
            {
              h: "近隣への声かけの担当を決める",
              b: "隣地に面した作業や、路上に車を停める時間が長くなる場合の声かけを、業者が行うのか依頼者が行うのかを決めます。ここが曖昧なまま当日を迎えると、作業が中断する原因になります。",
            },
            {
              h: "作業日と時間帯を押さえる",
              b: "集合住宅や住宅密集地では、作業音を出せる時間帯が限られることがあります。半日で終わらない場合の続行日も併せて確認しておきます。",
            },
            {
              h: "ゴミの行き先を確定する",
              b: "持ち帰り処分か、自治体の回収に出すか。回収に出す場合は、束ね方や出せる長さのルールを事前に調べておきます。",
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
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、搬出経路や近隣配慮を先に詰めたいという東京の条件に照らすと、次の3つは確認の順番が組み立てやすい構成です。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/service/pruning/", label: "庭木の剪定費用と最適な時期" },
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
          作業内容と現場の条件が固まったら、複数のサービスで進め方を比べてみてください。
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
