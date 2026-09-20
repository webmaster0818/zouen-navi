import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/hiroshima/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "広島の造園・庭の手入れ業者の選び方｜困りごとの切り分けと優先順位";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭が手に負えなくなったとき、困りごとは一つではなく複数が同時に起きています。広島で庭の手入れを頼む前に、状態から必要な作業を見立て、どれを先に片づけるかを決めるための整理と、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭の困りごとを作業の種類に切り分け、優先順位をつけるという観点から、広島での業者選びを整理しました。",
  },
};

const toc = [
  { id: "hiroshima-point", label: "「庭が荒れている」は一つの作業では片づかない" },
  { id: "hiroshima-triage", label: "状態から必要な作業を見立てる" },
  { id: "hiroshima-order", label: "まとめて頼むか、分けて頼むか" },
  { id: "hiroshima-pick", label: "この条件で見ておきたい3サービス" },
  { id: "hiroshima-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "hiroshima-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "hiroshima-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "oniwa-master", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽まで受け口が広く、複数の困りごとをまとめて相談しやすい窓口です。受付は24時間365日で、現地調査・見積りは無料（条件あり）と公開されています。施工は加盟店が担当するため、見積もりの内容は必ず確認してください。",
  "oniwa-master":
    "剪定・伐採・草刈り・芝刈りなど庭の手入れ全般に対応する業者を、自社施工せず無料で紹介する形式です。何を頼めばよいか決めきれていない段階で、まず相談先を一本化したいときの入口になります。公式に掲載されている口コミは過去分が中心のため、最新の対応は見積もり時に確認するのが確実です。",
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった作業ごとの情報を発信しつつ、全国の造園・園芸・外構業者を検索できる情報・比較サイトです。自分の庭で起きていることがどの作業に当たるのかを、依頼の前に調べておきたいときに使えます。施工は検索で見つかる各業者へ依頼する形になります。",
};

const triageRows = [
  {
    sign: "枝が隣地や道路へ出ている",
    work: "剪定（越境した部分の処理）",
    note: "切る前に確認しておく手順があります。自分の木か相手の木かで進め方が変わります。",
  },
  {
    sign: "木が大きくなりすぎて日が入らない",
    work: "剪定、または高さを下げる作業",
    note: "一度に大きく切ると樹形が崩れるため、何年かけてどこまで下げるかを相談します。",
  },
  {
    sign: "地面が草で覆われて歩けない",
    work: "草刈り・除草",
    note: "刈るだけか、根まで取るか、覆って生えにくくするかで、その後の手間が変わります。",
  },
  {
    sign: "葉の色や形がおかしい、虫が付いている",
    work: "状態の確認と、樹種に応じた対処",
    note: "触れると害のある虫もいます。見分けがつかないうちは自分で払わないでください。",
  },
  {
    sign: "雨のあと水が引かず、ぬかるむ",
    work: "地面の状態の確認と排水の見直し",
    note: "植栽の問題ではなく地面側の問題です。手入れを重ねても解決しません。",
  },
  {
    sign: "枯れた木や切り株が残っている",
    work: "撤去や抜根",
    note: "根が構造物に絡んでいる場合があるため、掘る前に現地で判断してもらいます。",
  },
  {
    sign: "切った枝や刈った草が敷地に積んである",
    work: "片づけと処分",
    note: "自治体の回収に出すか、持ち帰ってもらうかで段取りが変わります。",
  },
];

const orderPoints = [
  {
    h: "まず足元を片づけると、他が見えるようになる",
    b: "草が茂ったままでは、木の根元も地面の状態も確認できません。何から頼めばよいか分からないときは、地面まわりを先に片づけると、残った問題がはっきりします。見立てが立たない段階で大きな作業から入るのは避けたほうが無難です。",
  },
  {
    h: "時期が決まっている作業を先に押さえる",
    b: "庭の作業には、適した時期が限られるものと、いつでもできるものがあります。前者を後回しにすると一年待つことになります。急ぎではなくても、時期のあるものから日程を確保するほうが結果的に早く片づきます。",
  },
  {
    h: "安全に関わるものを優先する",
    b: "道路にせり出した枝、傾いた木、折れかかった枝は、放置すると第三者に及びます。見た目の問題より先に扱う種類の困りごとです。",
  },
  {
    h: "一度で全部やらない選択肢もある",
    b: "同じ日にまとめれば準備は一度で済みますが、作業量が増えれば一日では終わりません。優先順位をつけて分けるほうが、予算の面でも判断しやすくなります。分ける場合は、次にいつ来てもらうかまで決めておきます。",
  },
];

const checklist = [
  {
    h: "困りごとを書き出したか",
    b: "頭の中で「荒れている」とまとめてしまわず、気になっている点を一つずつ書き出します。数が見えると、優先順位がつけられます。",
  },
  {
    h: "急ぎのものを分けたか",
    b: "安全に関わるもの、近隣に影響しているものは別枠です。他と一緒に並べず、先に相談してください。",
  },
  {
    h: "受け口の広い窓口か確認したか",
    b: "剪定だけを扱う相手に草刈りや処分まで頼めるとは限りません。複数の作業が絡むときは、どこまで受けられるかを最初に聞きます。",
  },
  {
    h: "分けて頼む場合の日程を決めたか",
    b: "一度に頼まない場合、次の作業をいつ行うのかを決めておかないと、そのまま止まります。",
  },
  {
    h: "自分で判断しない範囲を決めたか",
    b: "虫が付いている木、枯れているように見える木、根が構造物に近い木。これらは見てもらってから決める対象です。",
  },
];

const faqs = [
  {
    q: "何を頼めばよいか分からないまま問い合わせてもよいですか。",
    a: "問題ありません。困っている状態をそのまま伝えれば、必要な作業を見立ててもらえます。写真を添えられる窓口であれば、状態が早く伝わります。ただし、見立てを受けたあとに範囲と仕上がりを自分で決める場面は残るため、どうしたいのかは併せて考えておいてください。",
  },
  {
    q: "複数の作業をまとめて頼むと効率がよいですか。",
    a: "準備や移動が一度で済む点では効率的です。一方で作業量が増えると一日で終わらないことがあり、日をまたぐ場合の扱いを決めておく必要があります。まとめたい旨を伝えたうえで、一日で収まるかどうかを聞いてください。",
  },
  {
    q: "急ぎで見てほしい場合はどうすればよいですか。",
    a: "受付時間の長い窓口であれば、時間帯を気にせず相談を始められます。ただし受付ができることと、すぐに作業に入れることは別です。いつまでに片づけたいのかを最初に伝え、その日程で受けられる相手かどうかを確認してください。",
  },
  {
    q: "広島市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、広島市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaHiroshimaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭の状態から必要な作業を見立て、どれを先に頼むかを決めるための整理です。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "広島" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          しばらく手を入れていない庭を前にすると、困りごとは一つに見えません。枝が伸び、足元は草に覆われ、片づけきれない枝が隅に積まれている。
          この状態で「庭をなんとかしたい」と相談を始めると、話は必ずどこかで止まります。どこから手を付けるかが決まっていないからです。
          広島で庭の手入れを頼む前に、このページでは状態を作業の種類へ切り分け、順番を決めるところまでを整理します。
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

      <section id="hiroshima-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          「庭が荒れている」は一つの作業では片づかない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の困りごとは、たいてい複数が同時に起きています。そして一つひとつは、別々の作業として扱われます。
          枝の処理と草の処理は道具も手順も違い、地面の水はけの問題にいたっては、そもそも植栽の話ですらありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          まとめて相談すること自体は構いません。ただし、まとめたまま依頼すると、どこまでを頼んだのかが曖昧になります。
          自分の中で切り分けておけば、見積もりも作業も、どの部分の話なのかが追えるようになります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            切り分けは、専門家でなければできないものではありません。「木の話」「地面の話」「片づけの話」の三つに分けるだけでも、相談は一段進みます。
          </p>
        </div>
      </section>

      <section id="hiroshima-triage" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          状態から必要な作業を見立てる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          目に見えている状態と、そこから考えられる作業の対応です。実際にどの作業が必要かは現地を見てもらってから決まりますが、相談の入り口としては十分に機能します。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3">目に見えている状態</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                  考えられる作業
                </th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">相談時のひとこと</th>
              </tr>
            </thead>
            <tbody>
              {triageRows.map((row, idx) => (
                <tr key={row.sign} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th
                    scope="row"
                    className="text-left align-top font-semibold text-text-primary px-4 py-3"
                  >
                    {row.sign}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.work}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          越境した枝の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          、虫や病気の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気
          </Link>
          、ぬかるみは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で個別に扱っています。
        </p>
      </section>

      <section id="hiroshima-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          まとめて頼むか、分けて頼むか
        </h2>
        <div className="space-y-4">
          {orderPoints.map((o) => (
            <div key={o.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{o.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{o.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="hiroshima-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、複数の困りごとをまとめて相談したいという条件で見ると、次の3つは受け口の広さが公開情報から読み取れます。
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

      <section id="hiroshima-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="広島" />
      </section>

      <section id="hiroshima-checklist" className="scroll-mt-20 mb-12">
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

      <section id="hiroshima-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="hiroshima" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び分け" },
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
          頼む順番が決まったら、その範囲を受けられる相手かどうかを各サービスで確かめてください。
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
