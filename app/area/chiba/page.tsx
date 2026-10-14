import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/chiba/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "千葉の造園・庭の手入れ業者の選び方｜資格と許可の確かめ方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れは、名乗るために免許が要る仕事ではありません。だからこそ確かめられるものを知っておく意味があります。千葉で業者を探すときに参照できる「人につく資格」と「会社につく許可」の違い、聞き方、そして資格だけで決めないための見方を整理しました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "人につく資格と会社につく許可の違い、その聞き方と読み方から、千葉での造園業者の選び方を整理しました。",
  },
};

const toc = [
  { id: "chiba-point", label: "庭の手入れは、名乗るための免許がない仕事" },
  { id: "chiba-kinds", label: "確かめられるのは「人の資格」と「会社の許可」" },
  { id: "chiba-ask", label: "聞き方と、返ってきた答えの読み方" },
  { id: "chiba-limit", label: "資格の有無だけで決めない" },
  { id: "chiba-pick", label: "この条件で見ておきたい3サービス" },
  { id: "chiba-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "chiba-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "chiba-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-madoguchi", "hikaku-biz", "houzz"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった庭まわりの情報を発信しつつ、全国の造園・園芸・外構業者を検索できる情報・比較サイトです。運営は株式会社ガーデンメーカーで、庭手入れの全国チェーンも展開しています。候補となる会社の名前をまず並べ、そこから一社ずつ素性を確かめていきたいときの入口になります。サイト自体は情報・検索サイトのため、実際の作業は検索で見つかる各業者に依頼する形になります。",
  "hikaku-biz":
    "発注側は無料で使える一括見積もりのサービスで、造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分でも事業者を探せます。工事の区分ごとに相談先が分かれている構成なので、庭木の手入れなのか、地面や構造物を伴う工事なのかを切り分けたうえで探せるのが利点です。公式のクチコミは本文末尾が省略表示されており全文は確認できないため、会社の中身は見積もり時の説明で補ってください。",
  houzz:
    "造園・ガーデンデザイナーやエクステリアの専門家を地域・サービス別に検索でき、専門家ごとのプロフィール、施工事例の写真、星評価レビューを確認できます。会社案内ではなく専門家単位の情報が並ぶため、誰がその仕事をしているのかという視点で見比べやすい構成です。掲載の中心はデザインを担う専門家のため、手入れ中心の依頼は対応可否を確認してください。",
};

const kinds = [
  {
    h: "人につく資格（国家検定・国家資格）",
    b: "造園の分野には、技能の水準を示す国家検定として造園技能士があり、工事の施工管理に関する国家資格として造園施工管理技士があります。いずれも人に与えられるもので、会社が持つものではありません。会社に有資格者が在籍していても、自分の庭に来るのがその人だとは限らない、という点が実務上は重要です。",
  },
  {
    h: "人につく資格（民間の認定）",
    b: "樹木の診断や治療に関わる樹木医のように、民間団体が認定する資格もあります。国家資格ではありませんが、扱う対象がはっきりしているため、何の専門なのかは分かりやすい部類です。大きな木の状態を診てほしい、といった目的が明確な相談では参照する価値があります。",
  },
  {
    h: "会社につく許可（建設業の許可）",
    b: "建設業の許可には業種の区分があり、その中に造園工事業があります。ただし一定の規模以下の工事は許可がなくても請け負えるとされており、庭木の手入れの多くはその範囲に入ります。つまり許可がないこと自体は問題ではありません。地面を造作する、構造物を作るといった工事に広がる場合に、確認する意味が出てきます。",
  },
  {
    h: "会社につく許可（廃棄物の運搬に関わるもの）",
    b: "切った枝や刈った草を持ち帰ってもらう場合、その運搬にどういう位置づけの許可が関わるかは、出るものの性質や地域の整理によって扱いが分かれます。造園ナビでは各社の許可の有無を一次確認できていないため、具体的な区分は書きません。持ち帰りを頼むなら、どういう扱いで運び出すのかを直接聞いてください。処分方法そのものは別ページで整理しています。",
  },
];

const askPoints = [
  {
    h: "会社にあるのか、来る人が持っているのか",
    b: "「有資格者が在籍しています」という説明は、会社としての説明です。当日作業する人が持っているかどうかは別の話になります。資格を重視するなら、担当する人について聞く必要があります。答えられない相手であれば、その点も判断材料になります。",
  },
  {
    h: "何の資格かを名前で聞く",
    b: "「資格があります」だけでは、何の資格かが分かりません。名称を聞けば、それが技能に関するものか、施工管理に関するものか、樹木の診断に関するものかが分かります。名称が出てこない場合、話を進める前に確認したほうが確実です。",
  },
  {
    h: "頼みたい作業に関係する資格かを見る",
    b: "資格は万能ではありません。施工管理の資格を持つ人が、庭木の切り方に長けているとは限りません。逆もあります。自分が頼みたいのが手入れなのか、造る工事なのかによって、見るべきものが変わります。",
  },
  {
    h: "会社としての所在と連絡先を確かめる",
    b: "資格の話の前に、どこの誰なのかが分かることが前提になります。会社名、所在地、固定の連絡先。これらが公開されていれば、後から連絡が取れなくなる事態は避けやすくなります。運営の形態そのものの見分け方は、名古屋のページで扱っています。",
  },
];

const limits = [
  {
    h: "資格がない相手を外す、という話ではない",
    b: "長く庭の仕事をしてきて、資格を取らずに続けている人はいます。腕と資格は一致しません。資格は判断材料の一つであって、足切りの線ではありません。",
  },
  {
    h: "資格は「説明できること」の裏づけになる",
    b: "資格そのものより、資格に触れたときの説明の中身が参考になります。なぜその切り方をするのか、なぜその時期なのか。理由を言葉にできる相手かどうかは、資格の有無とは別に見て取れます。",
  },
  {
    h: "紹介型では、資格の所在が二段になる",
    b: "窓口の会社と、実際に作業する加盟店や紹介先が別であれば、資格を持つのは作業する側です。窓口に聞いても分からないことがあります。誰に聞けばよいのかを、最初に確かめてください。",
  },
  {
    h: "実際の仕事は、見積もりの段階で見える",
    b: "現地を見て、何をどう触るかを説明してもらう。この過程そのものが、資格より具体的な判断材料になります。書面で確認する観点は神戸のページ、補償や保険の観点は横浜のページで整理しています。",
  },
];

const checklist = [
  {
    h: "頼みたい作業の種類を言葉にしたか",
    b: "庭木の手入れなのか、地面や構造物を伴う工事なのか。どちらかによって、確認すべきものが変わります。",
  },
  {
    h: "当日来る人について聞いたか",
    b: "会社に在籍しているかではなく、担当する人がどういう経験を持つのか。ここを聞くと話が具体的になります。",
  },
  {
    h: "会社名・所在地・連絡先を確認したか",
    b: "資格より前に確かめる項目です。公開されていない場合は、その理由を尋ねてください。",
  },
  {
    h: "紹介型かどうかを把握したか",
    b: "窓口と作業する相手が別なら、聞くべき相手も別です。最初に構造を把握しておきます。",
  },
  {
    h: "持ち帰りの扱いを聞いたか",
    b: "切ったものを運び出してもらうなら、どういう扱いで運ぶのかを確認します。自分で出す場合の手順は処分のページを参照してください。",
  },
];

const faqs = [
  {
    q: "資格を持っていない業者に頼むのは避けたほうがよいですか。",
    a: "そうとは限りません。庭の手入れは、名乗るために免許が要る仕事ではなく、資格を取らずに長く続けている人もいます。資格は判断材料の一つです。むしろ、現地を見たうえで何をどう触るかを説明できるかどうかのほうが、実際の仕上がりとの関係は近くなります。",
  },
  {
    q: "建設業の許可がない業者は違法なのですか。",
    a: "違います。建設業の許可には業種の区分があり造園工事業も含まれますが、一定の規模以下の工事は許可がなくても請け負えるとされています。庭木の手入れの多くはその範囲に入ります。地面を造作する、構造物を作るといった工事に広がる場合に、確認する意味が出てきます。具体的な規模の線引きは工事の内容によるため、相談時に確認してください。",
  },
  {
    q: "紹介サービス経由の場合、資格は誰に聞けばよいですか。",
    a: "実際に作業する会社や個人に聞くことになります。窓口の会社は手配や紹介を担っているため、作業者一人ひとりの資格までは把握していないことがあります。見積もりに来た相手、または当日来る相手に直接尋ねてください。窓口と施工が分かれている構造そのものについては、名古屋のページで整理しています。",
  },
  {
    q: "千葉市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、千葉市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaChibaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "人につく資格と会社につく許可の違い、その聞き方と読み方をまとめました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "千葉" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを引き受けるのに、名乗るための免許は要りません。看板を出せばその日から始められる仕事です。
          だからこそ、確かめられるものが何なのかを知っておく意味があります。資格や許可には、人に与えられるものと会社に与えられるものがあり、混同すると見当違いの質問をすることになります。
          千葉で業者を探す人に向けて、このページでは何が確かめられるのか、どう聞くのか、そしてそれをどう扱うのかを整理します。
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

      <section id="chiba-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭の手入れは、名乗るための免許がない仕事
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「造園業者」「植木屋」「庭師」。これらはいずれも、名乗ること自体に制約のある呼び名ではありません。
          経験の長い人も、始めたばかりの人も、同じ言葉で自分を紹介できます。依頼する側から見れば、名乗りだけでは何も分からないということです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          これは特別に危うい業界だという話ではありません。多くの仕事がそうです。ただ、庭木は切り方を間違えても数か月は気づけず、
          気づいたときには元に戻せないという性質があります。頼む前に確かめられるものは確かめておく、という姿勢が効いてくる分野です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            確かめられるものは、大きく二つに分かれます。人に与えられる資格と、会社に与えられる許可です。
            この二つは別物で、聞く相手も、意味するところも違います。まずここを分けて考えます。
          </p>
        </div>
      </section>

      <section id="chiba-kinds" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          確かめられるのは「人の資格」と「会社の許可」
        </h2>
        <div className="space-y-4">
          {kinds.map((k, i) => (
            <div key={k.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
                <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{k.h}</span>
              </h3>
              <p className="text-[15px] leading-8 text-text-secondary">{k.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          切ったものの出し方そのものは
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で扱っています。どの資格・許可についても、造園ナビでは掲載サービスごとの保有状況までは一次確認していません。
        </p>
      </section>

      <section id="chiba-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          聞き方と、返ってきた答えの読み方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「資格はありますか」という聞き方だと、返ってくる答えも曖昧になります。聞く対象を絞ると、答えの中身が変わります。
        </p>
        <ol className="space-y-4">
          {askPoints.map((a, i) => (
            <li key={a.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{a.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{a.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="chiba-limit" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          資格の有無だけで決めない
        </h2>
        <div className="space-y-4">
          {limits.map((l) => (
            <div key={l.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{l.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{l.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          書面で確かめる観点は
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            神戸のページ
          </Link>
          、保険や補償の確認は
          <Link href="/area/yokohama/" className="text-primary underline underline-offset-2 mx-1">
            横浜のページ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="chiba-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、相手がどういう会社・どういう人なのかを確かめてから決めたいという条件で見ると、次の3つは調べる材料が揃えやすい構成です。
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

      <section id="chiba-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="千葉" />
      </section>

      <section id="chiba-checklist" className="scroll-mt-20 mb-12">
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

      <section id="chiba-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="chiba" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/service/garden-design/", label: "庭のデザインをプロに依頼する方法" },
            { href: "/content-policy/", label: "記事の制作ポリシー" },
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
          何を確かめるのかが決まったら、その質問に答えてくれる相手かどうかという目で各サービスを見てみてください。
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
