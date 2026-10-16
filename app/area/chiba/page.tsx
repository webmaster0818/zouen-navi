import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/chiba/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "千葉の造園・庭の手入れ業者の選び方｜資格と許可の確認方法";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れは、業として名乗るために免許を必要とする仕事ではありません。そのため、依頼前に確認できる事項を把握しておくことが重要です。千葉で業者を探す際に参照できる「個人に付与される資格」と「会社に付与される許可」の違い、確認の方法、資格のみで判断しないための観点を整理しています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "個人に付与される資格と会社に付与される許可の違い、確認の方法と回答の読み取り方をもとに、千葉での造園業者の選び方を整理しています。",
  },
};

const toc = [
  { id: "chiba-point", label: "庭の手入れは免許を必要としない仕事です" },
  { id: "chiba-kinds", label: "確認できるのは「個人の資格」と「会社の許可」です" },
  { id: "chiba-ask", label: "確認の方法と回答の読み取り方" },
  { id: "chiba-limit", label: "資格の有無のみで判断しない" },
  { id: "chiba-pick", label: "この条件に適した3サービス" },
  { id: "chiba-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "chiba-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "chiba-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-madoguchi", "hikaku-biz", "houzz"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった庭まわりの情報を発信するとともに、全国の造園・園芸・外構業者を検索できる情報・比較サイトです。運営は株式会社ガーデンメーカーで、庭の手入れの全国チェーンも展開しています。候補となる会社名をまず把握し、そこから一社ずつ詳細を確認したい場合の起点になります。サイト自体は情報・検索サイトのため、実際の作業は検索で表示される各業者に依頼する形になります。",
  "hikaku-biz":
    "発注者が無料で利用できる一括見積もりサービスで、造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分でも業者を探せます。工事の区分ごとに相談先が分かれているため、庭木の手入れなのか、地面や構造物を伴う工事なのかを区別したうえで探せる点が利点です。公式サイトの口コミは本文の末尾が省略表示されており全文を確認できないため、会社の詳細は見積もり時の説明でご確認ください。",
  houzz:
    "造園・ガーデンデザイナーやエクステリアの専門家を地域・サービス別に検索でき、専門家ごとのプロフィール、施工事例の写真、星評価付きの口コミを確認できます。会社案内ではなく専門家単位の情報が掲載されているため、誰が作業を担当するのかという観点で比較しやすい構成です。掲載の中心はデザインを担う専門家のため、手入れが中心の依頼は対応の可否をご確認ください。",
};

const kinds = [
  {
    h: "個人に付与される資格（国家検定・国家資格）",
    b: "造園の分野には、技能の水準を示す国家検定として造園技能士があり、工事の施工管理に関する国家資格として造園施工管理技士があります。いずれも個人に付与されるもので、会社が保有するものではありません。会社に有資格者が在籍していても、自分の庭の作業を担当するのがその人とは限らない点が、実務上は重要です。",
  },
  {
    h: "個人に付与される資格（民間の認定）",
    b: "樹木の診断や治療に関わる樹木医のように、民間団体が認定する資格もあります。国家資格ではありませんが、対象が明確であるため、専門分野を把握しやすい資格です。大きな木の状態を診断してほしいといった、目的が明確な相談では参照する価値があります。",
  },
  {
    h: "会社に付与される許可（建設業の許可）",
    b: "建設業の許可には業種の区分があり、その中に造園工事業があります。ただし、一定の規模以下の工事は許可がなくても請け負えるとされており、庭木の手入れの多くはその範囲に含まれます。したがって、許可がないこと自体は問題ではありません。地面の造成や構造物の設置を伴う工事の場合に、確認する意味があります。",
  },
  {
    h: "会社に付与される許可（廃棄物の運搬に関わるもの）",
    b: "剪定した枝や刈った草の持ち帰りを依頼する場合、その運搬にどのような許可が関わるかは、廃棄物の性質や地域の取り扱いによって異なります。造園ナビでは各社の許可の有無を一次確認していないため、具体的な区分は記載していません。持ち帰りを依頼する場合は、どのような扱いで搬出するのかを直接ご確認ください。処分方法については別のページで解説しています。",
  },
];

const askPoints = [
  {
    h: "会社の保有か、作業者本人の保有かを確認する",
    b: "「有資格者が在籍しています」という説明は、会社としての説明です。当日作業する人が資格を持っているかどうかは別の問題です。資格を重視する場合は、担当者について確認する必要があります。回答が得られない場合は、その点も判断材料になります。",
  },
  {
    h: "資格の名称を確認する",
    b: "「資格があります」という説明だけでは、何の資格かが分かりません。名称を確認すれば、技能に関するものか、施工管理に関するものか、樹木の診断に関するものかが分かります。名称の回答がない場合は、話を進める前に確認することをおすすめします。",
  },
  {
    h: "依頼する作業に関係する資格かを確認する",
    b: "資格は万能ではありません。施工管理の資格を持つ人が、庭木の剪定に長けているとは限りません。その逆の場合もあります。依頼するのが手入れなのか、造成を伴う工事なのかによって、確認すべき資格が変わります。",
  },
  {
    h: "会社の所在地と連絡先を確認する",
    b: "資格の確認の前提として、会社の素性が明らかであることが必要です。会社名、所在地、固定の連絡先が公開されていれば、後から連絡が取れなくなる事態を避けやすくなります。運営形態の見分け方は、名古屋のページで解説しています。",
  },
];

const limits = [
  {
    h: "資格のない業者を除外するという意味ではありません",
    b: "長年庭の仕事に従事し、資格を取得せずに続けている人もいます。技術と資格は必ずしも一致しません。資格は判断材料の一つであり、選定の絶対条件ではありません。",
  },
  {
    h: "資格は説明の根拠を裏付けるものです",
    b: "資格そのものより、資格に関する説明の内容が参考になります。なぜその剪定方法を選ぶのか、なぜその時期なのか。理由を説明できる業者かどうかは、資格の有無とは別に確認できます。",
  },
  {
    h: "紹介型では資格の所在が二段階になります",
    b: "窓口の会社と、実際に作業する加盟店や紹介先が異なる場合、資格を保有するのは作業する側です。窓口に確認しても回答が得られないことがあります。誰に確認すべきかを、最初にご確認ください。",
  },
  {
    h: "実際の対応は見積もりの段階で確認できます",
    b: "現地を確認したうえで、どの作業をどのように行うかの説明を受けます。この過程そのものが、資格より具体的な判断材料になります。書面で確認する観点は神戸のページ、補償や保険の観点は横浜のページで解説しています。",
  },
];

const checklist = [
  {
    h: "依頼する作業の種類を明確にしたか",
    b: "庭木の手入れなのか、地面や構造物を伴う工事なのかによって、確認すべき事項が変わります。",
  },
  {
    h: "当日の作業者について確認したか",
    b: "会社に在籍しているかではなく、担当者がどのような経験を持つかを確認すると、具体的な判断材料が得られます。",
  },
  {
    h: "会社名・所在地・連絡先を確認したか",
    b: "資格より先に確認すべき項目です。公開されていない場合は、その理由をご確認ください。",
  },
  {
    h: "紹介型かどうかを把握したか",
    b: "窓口と作業者が異なる場合は、確認すべき相手も異なります。最初に体制を把握しておきます。",
  },
  {
    h: "持ち帰りの扱いを確認したか",
    b: "剪定した枝などの搬出を依頼する場合は、どのような扱いで運搬するのかを確認します。自分で処分する場合の手順は処分のページをご参照ください。",
  },
];

const faqs = [
  {
    q: "資格を持っていない業者に頼むのは避けたほうがよいですか。",
    a: "必ずしもそうではありません。庭の手入れは業として名乗るために免許を必要とする仕事ではなく、資格を取得せずに長年続けている人もいます。資格は判断材料の一つです。現地を確認したうえで、どの作業をどのように行うかを説明できるかどうかのほうが、実際の仕上がりとの関連は強いといえます。",
  },
  {
    q: "建設業の許可がない業者は違法なのですか。",
    a: "異なります。建設業の許可には業種の区分があり、造園工事業も含まれますが、一定の規模以下の工事は許可がなくても請け負えるとされています。庭木の手入れの多くはその範囲に含まれます。地面の造成や構造物の設置を伴う工事の場合に、確認する意味があります。具体的な規模の基準は工事の内容によるため、相談時にご確認ください。",
  },
  {
    q: "紹介サービス経由の場合、資格は誰に聞けばよいですか。",
    a: "実際に作業する会社や個人に確認することになります。窓口の会社は手配や紹介を担っているため、作業者一人ひとりの資格までは把握していない場合があります。見積もりに訪れた担当者、または当日の作業者に直接ご確認ください。窓口と施工が分かれている体制については、名古屋のページで解説しています。",
  },
  {
    q: "千葉市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、千葉市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "個人に付与される資格と会社に付与される許可の違い、確認の方法と回答の読み取り方をまとめています。",
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
          庭の手入れを請け負うにあたり、業として名乗るための免許は必要ありません。開業の手続きが簡易な仕事です。
          そのため、依頼前に確認できる事項を把握しておくことが重要です。資格や許可には、個人に付与されるものと会社に付与されるものがあり、両者を混同すると的外れな質問をすることになります。
          本ページでは、千葉で業者を探す方に向けて、確認できる事項、確認の方法、確認結果の扱い方を整理します。
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
          庭の手入れは免許を必要としない仕事です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「造園業者」「植木屋」「庭師」は、いずれも名乗ること自体に制約のある名称ではありません。
          経験の長い人も、始めたばかりの人も、同じ名称で自己紹介ができます。依頼する側から見れば、名称だけでは何も判断できないということです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          これは特に危険な業界であるという意味ではなく、多くの仕事に共通することです。ただし、庭木は剪定方法を誤っても数か月は気づかず、
          気づいた時点では元に戻せないという性質があります。依頼前に確認できる事項は確認しておくことが、特に重要な分野です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            確認できる事項は、大きく二つに分かれます。個人に付与される資格と、会社に付与される許可です。
            この二つは別のものであり、確認する相手も意味も異なります。まずこの二つを区別して考えます。
          </p>
        </div>
      </section>

      <section id="chiba-kinds" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          確認できるのは「個人の資格」と「会社の許可」です
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
          剪定枝などの処分方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で解説しています。いずれの資格・許可についても、造園ナビでは掲載サービスごとの保有状況を一次確認していません。
        </p>
      </section>

      <section id="chiba-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          確認の方法と回答の読み取り方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「資格はありますか」という質問では、回答も曖昧になります。確認する対象を絞ると、回答の内容が具体的になります。
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
          資格の有無のみで判断しない
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
          書面で確認する観点は
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            神戸のページ
          </Link>
          、保険や補償の確認は
          <Link href="/area/yokohama/" className="text-primary underline underline-offset-2 mx-1">
            横浜のページ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="chiba-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、業者の会社情報や担当者を確認してから決めたいという条件では、次の3サービスが確認材料を揃えやすい構成です。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/service/garden-design/", label: "庭のデザインを専門家に依頼する方法" },
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
          確認すべき事項が決まったら、その質問に回答できる業者かどうかという観点で各サービスを比較することをおすすめします。
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
