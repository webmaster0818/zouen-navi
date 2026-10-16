import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/hiroshima/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "広島の造園・庭の手入れ業者の選び方｜依頼内容の整理と優先順位";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の管理が行き届かなくなった場合、困りごとは一つではなく、複数が同時に発生しています。広島で庭の手入れを依頼する前に、庭の状態から必要な作業を判断し、優先順位を決めるための要点と、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭の困りごとを作業の種類に分類し、優先順位を付けるという観点から、広島での業者選びを整理しています。",
  },
};

const toc = [
  { id: "hiroshima-point", label: "「庭が荒れている」状態は一つの作業では解決しません" },
  { id: "hiroshima-triage", label: "庭の状態から必要な作業を判断する" },
  { id: "hiroshima-order", label: "まとめて依頼するか、分けて依頼するか" },
  { id: "hiroshima-pick", label: "この条件に適した3サービス" },
  { id: "hiroshima-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "hiroshima-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "hiroshima-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "oniwa-master", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽まで対応範囲が広く、複数の困りごとをまとめて相談しやすい窓口です。受付は24時間365日で、現地調査・見積もりは無料（条件あり）と公開されています。施工は加盟店が担当するため、見積もりの内容を必ずご確認ください。",
  "oniwa-master":
    "剪定・伐採・草刈り・芝刈りなど庭の手入れ全般に対応する業者を、自社では施工せず無料で紹介する形式です。依頼内容を決めきれていない段階で、相談先を一本化したい場合に利用できます。公式サイトに掲載されている口コミは過去分が中心のため、現在の対応内容は見積もりの際にご確認ください。",
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった作業ごとの情報を発信するとともに、全国の造園・園芸・外構業者を検索できる情報・比較サイトです。自分の庭の状態がどの作業に該当するかを、依頼前に調べておきたい場合に利用できます。施工は、検索で表示される各業者へ依頼する形になります。",
};

const triageRows = [
  {
    sign: "枝が隣地や道路へ出ている",
    work: "剪定（越境した部分の処理）",
    note: "剪定前に確認すべき手順があります。自分の木か隣家の木かによって進め方が変わります。",
  },
  {
    sign: "木が大きくなりすぎて日が入らない",
    work: "剪定、または高さを下げる作業",
    note: "一度に大きく剪定すると樹形が崩れるため、何年かけてどこまで低くするかを相談します。",
  },
  {
    sign: "地面が草で覆われて歩けない",
    work: "草刈り・除草",
    note: "刈るだけか、根まで除去するか、覆って生えにくくするかによって、その後の手間が変わります。",
  },
  {
    sign: "葉の色や形がおかしい、虫が付いている",
    work: "状態の確認と、樹種に応じた対処",
    note: "触れると害のある虫もいます。判別できないうちは、自分で除去しないでください。",
  },
  {
    sign: "雨のあと水が引かず、ぬかるむ",
    work: "地面の状態の確認と排水の見直し",
    note: "植栽ではなく地面側の問題です。手入れを重ねても解決しません。",
  },
  {
    sign: "枯れた木や切り株が残っている",
    work: "撤去や抜根",
    note: "根が構造物に絡んでいる場合があるため、掘削前に現地で判断してもらいます。",
  },
  {
    sign: "切った枝や刈った草が敷地に積んである",
    work: "片づけと処分",
    note: "自治体の回収に出すか、業者に持ち帰りを依頼するかによって段取りが変わります。",
  },
];

const orderPoints = [
  {
    h: "足元を先に片づけると、他の問題を把握できます",
    b: "草が茂ったままでは、木の根元も地面の状態も確認できません。何から依頼すべきか分からない場合は、地面まわりを先に片づけると、残る問題が明確になります。状況を把握できていない段階で大規模な作業から着手することは避けることをおすすめします。",
  },
  {
    h: "時期が限られる作業を先に確保する",
    b: "庭の作業には、適期が限られるものと、時期を問わず行えるものがあります。前者を後回しにすると、一年待つことになります。急ぎでなくても、時期が限られる作業から日程を確保するほうが、結果的に早く完了します。",
  },
  {
    h: "安全に関わる作業を優先する",
    b: "道路にせり出した枝、傾いた木、折れかかった枝は、放置すると第三者に被害が及ぶおそれがあります。外観の問題より先に対処すべき困りごとです。",
  },
  {
    h: "一度にすべてを行わない選択肢もあります",
    b: "同日にまとめれば準備は一度で済みますが、作業量が増えれば一日では完了しません。優先順位を付けて分けて依頼するほうが、予算の面でも判断しやすくなります。分けて依頼する場合は、次回の作業日まで決めておきます。",
  },
];

const checklist = [
  {
    h: "困りごとを書き出したか",
    b: "「荒れている」と一括りにせず、気になっている点を一つずつ書き出します。件数を把握すると、優先順位を付けられます。",
  },
  {
    h: "急ぎの事項を区別したか",
    b: "安全に関わる事項や近隣に影響している事項は別に扱います。他の事項と一緒にせず、先に相談してください。",
  },
  {
    h: "対応範囲の広い窓口かを確認したか",
    b: "剪定のみを扱う業者に、草刈りや処分まで依頼できるとは限りません。複数の作業が関わる場合は、対応できる範囲を最初に確認します。",
  },
  {
    h: "分けて依頼する場合の日程を決めたか",
    b: "一度に依頼しない場合、次の作業日を決めておかないと、そのまま作業が止まります。",
  },
  {
    h: "自分で判断しない範囲を決めたか",
    b: "虫が付いている木、枯れているように見える木、根が構造物に近い木は、専門家の確認を受けてから判断します。",
  },
];

const faqs = [
  {
    q: "何を頼めばよいか分からないまま問い合わせてもよいですか。",
    a: "問題ありません。困っている状態をそのまま伝えれば、必要な作業を判断してもらえます。写真を添付できる窓口であれば、状態をより的確に伝えられます。ただし、判断を受けた後に範囲と仕上がりを依頼者が決める場面は残るため、希望する対応もあわせて検討しておいてください。",
  },
  {
    q: "複数の作業をまとめて頼むと効率がよいですか。",
    a: "準備や移動が一度で済む点では効率的です。一方で、作業量が増えると一日で完了しない場合があり、日をまたぐ場合の扱いを決めておく必要があります。まとめて依頼したい旨を伝えたうえで、一日で完了するかどうかをご確認ください。",
  },
  {
    q: "急ぎで見てほしい場合はどうすればよいですか。",
    a: "受付時間の長い窓口であれば、時間帯を問わず相談を始められます。ただし、受付が可能であることと、すぐに作業に着手できることは別です。完了を希望する時期を最初に伝え、その日程で対応できる業者かどうかをご確認ください。",
  },
  {
    q: "広島市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、広島市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "庭の状態から必要な作業を判断し、依頼の優先順位を決めるための要点を整理しています。",
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
          しばらく手入れをしていない庭では、困りごとが一つにとどまりません。枝が伸び、足元は草に覆われ、片づけきれない枝が隅に積まれている、といった状態です。
          この状態で「庭を何とかしたい」と相談を始めると、着手箇所が決まっていないため、相談はどこかで停滞します。
          本ページでは、広島で庭の手入れを依頼する前に、状態を作業の種類へ分類し、順序を決めるまでの要点を整理します。
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
          「庭が荒れている」状態は一つの作業では解決しません
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の困りごとは、多くの場合、複数が同時に発生しており、それぞれが別の作業として扱われます。
          枝の処理と草の処理は道具も手順も異なり、地面の水はけの問題はそもそも植栽の問題ではありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          まとめて相談すること自体は問題ありません。ただし、まとめたまま依頼すると、依頼の範囲が曖昧になります。
          依頼者の側で分類しておけば、見積もりも作業も、どの部分に関するものかを把握できるようになります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            分類は専門家でなくても可能です。「木の問題」「地面の問題」「片づけの問題」の三つに分けるだけでも、相談を具体的に進められます。
          </p>
        </div>
      </section>

      <section id="hiroshima-triage" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭の状態から必要な作業を判断する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          外見上の状態と、そこから想定される作業の対応表です。実際に必要な作業は現地確認を経て決まりますが、相談の起点としては十分に活用できます。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3">外見上の状態</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                  想定される作業
                </th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">相談時の補足</th>
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
          、ぬかるみについては
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で個別に解説しています。
        </p>
      </section>

      <section id="hiroshima-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          まとめて依頼するか、分けて依頼するか
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
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、複数の困りごとをまとめて相談したいという条件では、次の3サービスの対応範囲の広さが公開情報から確認できます。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び方" },
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
          依頼の順序が決まったら、その範囲に対応できる業者かどうかを各サービスでご確認ください。
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
