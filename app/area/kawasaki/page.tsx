import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kawasaki/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "川崎の造園・庭の手入れ業者の選び方｜作業完了日の確認と手直しの依頼方法";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の作業には、完了した当日でなければ確認できない事項があります。川崎で庭の手入れを依頼する際に、引き渡しの場で確認すべき点と、気になる点をいつ・どのように伝えるかを整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "引き渡しの場での確認点と、手直しを依頼する際の伝え方という観点から、川崎での造園業者の選び方を整理しています。",
  },
};

const toc = [
  { id: "kawasaki-point", label: "作業完了直後にしか確認できない事項があります" },
  { id: "kawasaki-inspect", label: "引き渡しの場で確認する5つの点" },
  { id: "kawasaki-timing", label: "その場で伝えるか、後日伝えるか" },
  { id: "kawasaki-rework", label: "手直しを依頼する際の伝え方" },
  { id: "kawasaki-pick", label: "この条件に適した3サービス" },
  { id: "kawasaki-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kawasaki-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kawasaki-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "oniwa-master", "kurashi-market"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽などに対応する加盟店を紹介・手配するサービスで、運営は東証上場のシェアリングテクノロジー株式会社です。コールセンターが24時間365日受け付け、請負賠償保険にも加入していると公表しています。作業を行うのは加盟店ですが、手配した窓口が別にあるため、作業完了後の連絡先が二つある構成になります。料金は作業内容や状態により異なるため、現地調査・見積もりで確認してから依頼してください。",
  "oniwa-master":
    "自社では施工せず、要望に合う業者を無料で紹介する仕組みで、受付は24時間365日とされています。運営は株式会社アシストです。紹介型であるため、作業した会社とのやり取りが進まない場合に、紹介元の窓口に相談できる点が利点です。公式サイトに掲載されている口コミは過去分が中心のため、現在の対応内容は見積もりの際にご確認ください。",
  "kurashi-market":
    "地域の登録業者を検索して依頼する仕組みで、作業の完了後に利用者が口コミ・評価を投稿できます。評価が後から残る仕組みは、作業完了後のやり取りにも関係します。損害賠償補償制度も用意されています。ただし、キャンセル処理や業者の遅刻など、トラブル時の運営対応に不満を示す口コミもあります。制度の対象範囲と連絡先は、申し込む前にご確認ください。",
};

const inspectPoints = [
  {
    h: "依頼した作業がすべて完了しているか",
    b: "最初に確認するのは仕上がりの良し悪しではなく、作業の漏れの有無です。木の本数を指定して依頼した場合は、その本数すべてに作業が行われているかを確認します。裏手や物置の陰は、作業の漏れが生じやすく、依頼者も確認を忘れやすい場所です。庭を一周して本数を照合すれば十分です。",
  },
  {
    h: "切り口の状態",
    b: "太い枝を切り落とした跡は、当日であれば白く新しい状態で確認できます。裂けたまま残っていないか、幹に沿って深くえぐれていないかを確認します。この確認は後日でも可能ですが、どの作業によるものかを特定しやすいのは当日です。気になる箇所があれば、その場で示して確認するのが最も早い方法です。",
  },
  {
    h: "残った枝葉と搬出物",
    b: "刈った枝葉をどこまで持ち帰る約束であったかを確認します。植え込みの中や側溝の上に落ちたままになっていないかも確認します。袋に詰めて置いていく取り決めであれば、その袋の位置と数も確認しておきます。処分に関する取り決めは、依頼の段階で決めておく事項です。",
  },
  {
    h: "設備や外構に傷がないか",
    b: "室外機、水道の栓、照明、フェンス、植木鉢など、脚立や機材が当たりやすい位置にある物は、作業前と作業後の状態を比較します。作業前に撮影した写真があれば、この確認は短時間で済みます。",
  },
  {
    h: "搬入・搬出に使用した経路の状態",
    b: "通路や駐車場所、集合住宅の場合は共用部に、搬出時に落ちた葉や土が残っていないかを確認します。敷地外を含めてどこまで片づける約束であったかによって、確認する範囲が変わります。",
  },
];

const timingPoints = [
  {
    h: "その場で伝えられる事項はその場で伝える",
    b: "作業の漏れ、当日中に対応できる片づけ、目に見える傷などは、作業者がまだ現場にいる間に伝えるのが最も早く解決します。後日連絡すると、再度の訪問が必要になります。伝えにくさを理由に後回しにすると、双方の手間が増えます。",
  },
  {
    h: "判断がつかない事項は保留して構いません",
    b: "切りすぎではないか、この形でよいのかといった感覚的な事項は、その場では判断がつかない場合があります。「少し様子を見てから連絡します」と伝えておけば、後日伝える余地が残ります。何も伝えずに見送ると、後から申し出にくくなります。",
  },
  {
    h: "後日になってから判明する事項もあります",
    b: "切り口からの枯れ込みや、残っていた枝の折れは、数週間から数か月後に判明します。作業当日には分からない事項です。いつまで相談に応じてもらえるかを、作業完了前に確認しておいてください。",
  },
  {
    h: "感想と手直しの依頼は分けて伝える",
    b: "「思ったより短いですね」は感想であり、「この木をもう少し残してほしい」は依頼です。両者が混在したまま伝えると、業者は受け取り方に迷います。手直しを希望する場合は、依頼として明確に伝えるほうが伝わります。",
  },
];

const reworkPoints = [
  {
    h: "対象の木と部位を示して伝える",
    b: "「全体的に」という伝え方では、業者は対応できません。庭のどの場所の、どの木の、どのあたりかを示して伝えられれば、その場で対応してもらえる場合もあります。後日連絡する場合は、写真を添えると同様の効果があります。",
  },
  {
    h: "希望する状態を伝える",
    b: "「短すぎる」は状態の指摘です。切った枝は元に戻りません。伝えるべきは、今後どのように対応してほしいかです。残っている部分をどう扱うか、次回はどうするかといった、今後に向けた伝え方のほうが話が進みます。",
  },
  {
    h: "依頼した内容と照らし合わせて伝える",
    b: "最初に依頼した内容との相違であれば、手直しを求める根拠になります。反対に、依頼していなかった作業を後から求める場合は、追加の依頼となります。この区別を依頼者自身が把握しておくと、話がこじれません。",
  },
  {
    h: "話し合いがまとまらない場合の連絡先を確保しておく",
    b: "作業した業者と直接話しても進まない場合は、手配した窓口や紹介元に連絡する方法があります。窓口と施工が分かれているサービスでは、この二段階の連絡体制を利用できます。連絡先は、依頼を決めた時点で把握しておいてください。",
  },
];

const checklist = [
  {
    h: "作業前の状態を写真に撮影したか",
    b: "庭全体と、機材が当たりそうな設備の周辺を数枚撮影すれば足ります。作業完了後の確認が早くなります。",
  },
  {
    h: "依頼した作業を書き出してあるか",
    b: "口頭のやり取りのみでは、作業完了時に何と照合すればよいかが分かりません。手元に記録が残る形にしておきます。",
  },
  {
    h: "引き渡しに立ち会えるか",
    b: "立ち会える場合は、その場で庭を一周する時間を設けます。立ち会いができない場合の進め方は仙台のページで解説しています。",
  },
  {
    h: "後日気づいた場合の連絡先を確認したか",
    b: "作業した業者の連絡先と、窓口の連絡先の両方があるかを確認しておきます。",
  },
  {
    h: "相談に応じてもらえる期間を確認したか",
    b: "作業完了直後には分からない事項もあります。期間の目安の有無は、作業完了前に確認できる項目です。",
  },
];

const faqs = [
  {
    q: "作業が終わった直後に、何を見ればよいですか。",
    a: "まず、依頼した作業に漏れがないかを、庭を一周して確認してください。仕上がりの良し悪しより先に、本数と範囲を確認します。そのうえで、太い枝の切り口、残った枝葉、設備や外構の傷、搬出に使用した経路の状態を確認します。作業前に写真を撮影しておくと、この確認は短時間で済みます。",
  },
  {
    q: "切りすぎだと感じたとき、その場で言うべきですか。",
    a: "感覚的な事項は、その場で判断がつかない場合があります。無理に結論を出す必要はありませんが、「少し様子を見てから連絡します」と伝えておいてください。何も伝えずに見送ると、後から申し出にくくなります。なお、切った枝は元に戻らないため、伝える内容は、残っている部分の扱いと次回の対応になります。",
  },
  {
    q: "後日になって枯れ込みが出た場合はどう扱われますか。",
    a: "切り口からの枯れ込みは、作業から時間が経過してから判明することがあります。原因が作業にあるのか、木の状態や地面側の条件によるものなのかは、専門家の確認を受けなければ判断できません。まずは連絡して状態を確認してもらってください。枝や葉の症状の見分け方は害虫と病気のページ、根の周辺の条件については水はけのページで解説しています。",
  },
  {
    q: "川崎市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、川崎市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKawasakiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "引き渡しの場での確認点と、手直しを依頼する際の伝え方をまとめています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "川崎" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          業者選びの解説は、多くの場合、依頼するまでの段階で終わります。しかし、庭の作業で問題が生じやすいのは、作業完了日とその後です。
          作業車が去った後に作業の漏れに気づく、数日後に切りすぎであったと感じ始める、数か月後に枝先が枯れてくるといった問題です。
          本ページでは、川崎で庭の手入れを依頼する方に向けて、引き渡しの場で確認すべき点と、気になる点をいつ・どのように伝えるかを整理します。
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

      <section id="kawasaki-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業完了直後にしか確認できない事項があります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の作業には、時間が経過すると確認できなくなる事項があります。切り口は日数の経過とともに変色し、傷がいつ付いたものかも分からなくなります。
          落ちた葉くずは風で散り、どこまで片づいていたのかを確認できなくなります。作業者は当日で現場を離れ、次に訪問するのは早くても数日後です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そのため、作業完了日の数分間の確認が重要です。庭を一周して本数を照合し、気になる箇所を示して確認します。それだけで、後から申し出にくくなる状況の大半を避けられます。
          特別な知識は必要ありません。必要なのは、依頼した内容を依頼者自身が把握していることのみです。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            確認は、業者を疑うための作業ではありません。依頼した内容と実施された内容を照合する作業です。
            業者にとっても、その場で確認を受けるほうが、後日連絡を受けるより手間が少なく済みます。
          </p>
        </div>
      </section>

      <section id="kawasaki-inspect" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          引き渡しの場で確認する5つの点
        </h2>
        <ol className="space-y-4">
          {inspectPoints.map((p, i) => (
            <li key={p.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{p.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          持ち帰る分と置いていく分の取り決めは
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          、敷地外を含めた片づけの範囲は
          <Link href="/area/saitama/" className="text-primary underline underline-offset-2 mx-1">
            さいたまのページ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kawasaki-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          その場で伝えるか、後日伝えるか
        </h2>
        <div className="space-y-4">
          {timingPoints.map((t) => (
            <div key={t.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{t.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{t.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kawasaki-rework" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          手直しを依頼する際の伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手直しの相談は、伝え方によって進み方が変わります。業者が対応しやすい形に整理して伝えるほうが、早く解決します。
        </p>
        <div className="space-y-4">
          {reworkPoints.map((r) => (
            <div key={r.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{r.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{r.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kawasaki-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、作業完了後の連絡先を確保しておきたいという条件では、次の3サービスが窓口の構成を把握しやすいサービスです。
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

      <section id="kawasaki-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="川崎" />
      </section>

      <section id="kawasaki-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kawasaki-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kawasaki" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
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
          作業完了後の連絡先を確認してから依頼するだけで、その後の対応が大幅に円滑になります。
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
