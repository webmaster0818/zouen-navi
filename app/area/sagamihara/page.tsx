import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/sagamihara/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "相模原の造園・庭の手入れ業者の選び方｜作業当日の立ち会い方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "在宅して作業に立ち会う場合でも、常に作業を見ている必要はありません。確認に適した場面、声をかける際の伝え方、当日の追加作業はその場で決めないという方針について、相模原で庭の手入れを依頼する際の立ち会い方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "作業当日に在宅して立ち会う際の対応という観点から、相模原での業者選びを整理しています。",
  },
};

const toc = [
  { id: "sagamihara-stance", label: "立ち会いは常に作業を見ることではありません" },
  { id: "sagamihara-timeline", label: "一日の流れと確認に適した場面" },
  { id: "sagamihara-words", label: "声をかける際の伝え方" },
  { id: "sagamihara-host", label: "依頼者側で準備しておくとよいもの" },
  { id: "sagamihara-pick", label: "この条件に適した3サービス" },
  { id: "sagamihara-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "sagamihara-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "sagamihara-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["kurashi-market", "houzz", "oniwa-master"] as const;

const pickReasons: Record<string, string> = {
  "kurashi-market":
    "作業内容ごとに料金が事前に表示され、見積もりを取らずに依頼内容を確定できます。条件が事前に確定しているため、当日に金額や範囲の相談が発生しにくい形式です。完了後に口コミを投稿でき、損害賠償補償制度も設けられています。",
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価付きの口コミが掲載されています。仕上がりの写真を事前に確認しておくと、当日に「想定と異なる」という事態が生じにくくなります。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
  "oniwa-master":
    "受付は24時間365日で、自社では施工せず、要望に合う業者を無料で紹介する形式です。当日に判断を求められて相談したい場合に、窓口の受付時間の制約が少ない点が利点です。見積もりは無料（一部調査費用は別途）と公表されています。",
};

const timeline = [
  {
    h: "到着直後",
    b: "挨拶の際に、当日の流れを確認しておきます。どこから作業を始めるか、終了の目安は何時か、途中で休憩する時間があるかを確認します。この時点で「手を加えないでほしいもの」を現物で示しておきます。口頭で説明するより、一緒に歩いて示すほうが早く正確です。",
  },
  {
    h: "最初の一本の作業に着手する前",
    b: "最も重要な場面です。どこまで剪定するのかを、実際の枝を示しながら確認します。「この程度ですね」という共通の理解ができれば、残りの木は任せられます。この確認を省くと、作業完了後に「想定より短い」という事態になります。",
  },
  {
    h: "昼をはさむ頃",
    b: "作業が半分ほど進んだ段階です。ここで一度確認しておくと、方向性が異なっていた場合に午後の作業で修正できます。作業完了後では元に戻せませんが、この時点であれば残りの木で調整できます。",
  },
  {
    h: "片づけに入る頃",
    b: "剪定作業が終わり、枝を集めて搬出する段階です。このタイミングで、依頼した作業がすべて完了しているかを一緒に確認します。道具がまだ現場にあるうちであれば、漏れていた部分の作業を依頼できる余地があります。",
  },
];

const wording = [
  {
    h: "作業を止めてほしい場合は、理由より先に止める",
    b: "「少々よろしいでしょうか」と声をかければ十分です。刃物を使用している最中に長い説明を始めるより、まず手を止めてもらってから話します。剪定した後では元に戻せないため、迷った場合は止めることをおすすめします。",
  },
  {
    h: "違和感は「想定と異なる」という形で伝える",
    b: "「切りすぎではないか」と伝えると否定的に受け取られますが、「想定より短いように感じるのですが」と伝えれば、依頼者の想定との相違についての話になります。業者も理由を説明しやすく、残りの木で調整する相談に移れます。",
  },
  {
    h: "業者が判断に迷っている場合は依頼者から決める",
    b: "作業の手が止まり、木を見ている、同じ場所を何度も確認しているといった場合は、依頼者の判断を待っている可能性があります。声をかけて、「その箇所はお任せします」か「その箇所は残してください」かを明確に伝えると、作業が進みます。",
  },
  {
    h: "追加作業を提案された場合はその場で決めない",
    b: "「あわせてこの木も」という提案は当日によくあります。必要な提案であることも多いのですが、金額と範囲がその場の口頭で決まると、後に問題が残ります。「金額と範囲はどの程度ですか」と確認し、書面を受け取ってから決めることが基本です。",
  },
  {
    h: "伝えにくいことを後回しにしない",
    b: "その場で伝えられなかったことは、翌日にはさらに伝えにくくなります。気になった時点で一言伝えておくと、業者も作業中に修正できます。作業完了後にまとめて指摘されることが、業者にとっても最も対応の難しい形です。",
  },
];

const hosting = [
  {
    h: "水道と電源の使用可否",
    b: "道具の洗浄や電動工具に使用することがあります。使用してよい場合は場所を、使用を控えてほしい場合はその旨を最初に伝えます。後から伝えるより、着手前に伝えるほうが段取りを組み直さずに済みます。",
  },
  {
    h: "お手洗いの扱い",
    b: "半日を超える作業では、必要になる場面があります。貸すかどうかは依頼者の判断で構いませんが、貸さない方針であれば、近隣で利用できる場所を伝えておくと親切です。決めていないと、業者も確認しにくいまま時間が経過します。",
  },
  {
    h: "飲み物の扱い",
    b: "用意する義務はありません。用意する場合は、作業の区切りに置いておく形にすると、作業を中断させずに済みます。受け取らない方針の会社もあるため、辞退されても気にする必要はありません。",
  },
  {
    h: "雨が降り出した場合の待機場所",
    b: "作業中に雨が降り出した場合は、続行するか中断するかの判断が必要になります。軒下など一時的に待機できる場所があれば、事前に示しておきます。順延となる場合の取り決めは、日程を決める段階で確認しておく項目です。",
  },
];

const checklist = [
  {
    h: "当日の流れを到着時に確認したか",
    b: "どこから始めて何時頃終わるかを確認しておくと、確認する場面を依頼者自身で決められます。",
  },
  {
    h: "作業の妨げにならない待機場所を確認したか",
    b: "作業動線上に立っていると、業者が声をかけにくくなります。最初に確認しておくことが効率的です。",
  },
  {
    h: "最初の一本の作業前に確認する約束をしたか",
    b: "仕上がりの程度を合わせるには、この場面が最も重要です。作業完了後では元に戻せません。",
  },
  {
    h: "その場で追加作業を決めない方針を持っているか",
    b: "当日の提案は、金額と範囲を確認し、書面を受け取ってから決定します。",
  },
  {
    h: "水道・電源・お手洗いの扱いを決めたか",
    b: "貸すかどうかはどちらでも構いませんが、決めて伝えておくと双方が対応しやすくなります。",
  },
];

const faqs = [
  {
    q: "作業の間、ずっと庭にいたほうがよいですか。",
    a: "その必要はありません。到着直後、最初の一本の作業前、半分ほど進んだ頃、片づけに入る頃の四つの場面で確認すれば、判断が必要な場合に間に合います。常に見ていると業者が手を止めて説明する時間が増え、かえって作業時間が長くなります。",
  },
  {
    q: "お茶や昼食は用意すべきですか。",
    a: "用意する義務はありません。会社の方針として受け取らないところもあります。用意する場合は、作業の区切りに置いておく形にすると、作業を中断させずに済みます。辞退されても失礼にあたるものではないため、気にする必要はありません。",
  },
  {
    q: "作業中に「この木も切りましょうか」と言われたら、その場で決めるべきですか。",
    a: "その場で決める必要はありません。必要な提案であることも多いのですが、金額と範囲が口頭のみで決まると、後から相違が生じます。「金額と範囲はどの程度ですか」と確認し、書面を受け取ってから判断してください。急ぎでなければ、別の日に改めて依頼するという選択肢もあります。",
  },
  {
    q: "相模原市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、相模原市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaSagamiharaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "作業当日に立ち会う際の確認に適した場面と、声をかける際の伝え方を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "相模原" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          在宅して作業に立ち会う場合、どの程度関わればよいか迷うことがあります。常に見ていると業者も気を使い、反対に室内にいると、気づいた時点ですでに剪定が終わっていることもあります。依頼の経験が少ないほど、適切な関わり方は分かりにくいものです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          相模原市内の住宅の庭で作業を依頼する場合も、当日の対応には一定の型があります。本ページでは、確認に適した場面と、その際に何を確認し何を伝えるのかを整理します。
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

      <section id="sagamihara-stance" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          立ち会いは常に作業を見ることではありません
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          立ち会いの目的は監視ではありません。判断が必要になった際にすぐ回答できること、そして仕上がりが想定と異なる方向に進みかけた際に、早い段階で止められることの二点です。いずれも、常に作業を見ている必要はありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          むしろ常に見られていると、業者は手を止めて説明する時間が増えます。確認したい事項をまとめておき、区切りのよいところでまとめて確認するほうが、作業時間を削らずに済みます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            最初に「何時頃に一度確認させていただけますか」と伝えておくと、そのタイミングで業者から声をかけてもらえます。依頼者から確認に行く形より、互いに気を使わずに済みます。
          </p>
        </div>
      </section>

      <section id="sagamihara-timeline" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          一日の流れと確認に適した場面
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          作業の進行には区切りがあります。その区切りに合わせると、作業を中断させずに確認できます。
        </p>
        <ol className="space-y-4">
          {timeline.map((x, i) => (
            <li key={x.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{x.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          作業完了後の引き渡しの場面で確認する項目は
          <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2 mx-1">
            完了時の確認と手直しの依頼方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="sagamihara-words" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          声をかける際の伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          伝えたいことがあっても、伝え方が思い浮かばずに伝えずにしまうことが、後に最も問題を生じさせます。伝え方の型を持っておくと、伝えやすくなります。
        </p>
        <div className="space-y-4">
          {wording.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sagamihara-host" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          依頼者側で準備しておくとよいもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          もてなす必要はありませんが、決めておくと双方が対応しやすくなる項目があります。
        </p>
        <div className="space-y-4">
          {hosting.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          雨で日程が変更になった場合の扱いは
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="sagamihara-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、当日に条件を決め直す場面を減らしたいという条件では、次の3サービスがそれぞれ異なる形で役立ちます。
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

      <section id="sagamihara-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="相模原" />
      </section>

      <section id="sagamihara-checklist" className="scroll-mt-20 mb-12">
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

      <section id="sagamihara-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="sagamihara" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/hamamatsu/", label: "作業日までに庭を空けておく支度" },
            { href: "/area/kawasaki/", label: "完了時の確認と手直しの依頼方法" },
            { href: "/area/kitakyushu/", label: "日程の決め方と天候による順延" },
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
          当日の流れは会社によって異なります。立ち会いの進め方も、問い合わせの際に確認しておくことをおすすめします。
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
