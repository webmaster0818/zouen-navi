import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/sagamihara/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "相模原の造園・庭の手入れ業者の選び方｜作業当日に立ち会うときの距離の取り方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "在宅して作業に立ち会うとき、ずっと見ている必要はありません。顔を出すとよい場面、声をかけるときの言い方、当日の追加をその場で決めないという方針。相模原で庭の手入れを頼むときの立ち会い方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "作業当日に在宅して立ち会うときの距離の取り方という観点から、相模原での業者選びを整理しました。",
  },
};

const toc = [
  { id: "sagamihara-stance", label: "立ち会いは「ずっと見ている」ことではない" },
  { id: "sagamihara-timeline", label: "一日の流れと、顔を出すとよい場面" },
  { id: "sagamihara-words", label: "声をかけるなら、どの言い方か" },
  { id: "sagamihara-host", label: "迎える側が用意しておくとよいもの" },
  { id: "sagamihara-pick", label: "この条件で見ておきたい3サービス" },
  { id: "sagamihara-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "sagamihara-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "sagamihara-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["kurashi-market", "houzz", "oniwa-master"] as const;

const pickReasons: Record<string, string> = {
  "kurashi-market":
    "作業内容ごとに料金が先に表示され、見積もりを取らずに依頼内容を確定できます。条件が事前に固定されているため、当日に金額や範囲の話し合いが発生しにくい形式です。完了後に口コミを投稿でき、損害賠償補償制度も設けられています。",
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価レビューが掲載されています。仕上がりの写真を先に見ておくと、当日に「思っていたのと違う」が起きにくくなります。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
  "oniwa-master":
    "受付は24時間365日で、自社施工はせず要望に合う業者を無料で紹介する形式です。当日に判断を求められて相談したくなったとき、窓口の時間帯に制約が少ないのは使いやすい点です。お見積りは無料（一部調査費用は別途）と公表されています。",
};

const timeline = [
  {
    h: "到着してすぐ",
    b: "挨拶のついでに、当日の流れを聞いておきます。どこから始めるか、終わりの目安は何時か、途中で抜ける時間があるか。ここで「触らないでほしいもの」を現物で示しておきます。口で説明するより、一緒に歩いて指したほうが早く正確です。",
  },
  {
    h: "最初の一本に手を入れる前",
    b: "一番効く場面です。どこまで切るのかを、実際の枝を指しながら確認します。「このくらいですね」という共通の理解ができれば、残りの木は任せられます。ここを飛ばすと、全部終わってから「思っていたより短い」になります。",
  },
  {
    h: "昼をはさむころ",
    b: "半分ほど進んだ段階です。ここで一度見ておくと、方向が違っていた場合に午後で修正できます。終わってからでは戻せませんが、この時点なら残りの木で調整できます。",
  },
  {
    h: "片づけに入るころ",
    b: "切る作業が終わり、集めて運び出す段階です。このタイミングで、頼んだ作業が全部終わっているかを一緒に確認します。まだ道具が出ているうちなら、抜けていた部分に手を入れてもらえる余地があります。",
  },
];

const wording = [
  {
    h: "止めてほしいときは、理由より先に止める",
    b: "「ちょっとすみません」でかまいません。刃物が動いている最中に長い説明を始めるより、まず手を止めてもらってから話します。切ってしまってからでは戻せないので、迷ったら止めるほうが正解です。",
  },
  {
    h: "違和感は「思っていたより」で伝える",
    b: "「切りすぎでは」と言うと否定に聞こえますが、「思っていたより短い気がするのですが」なら、こちらの想定とのずれの話になります。相手も理由を説明しやすく、残りの木で調整する話に移れます。",
  },
  {
    h: "迷っていると分かったら、こちらから決める",
    b: "手が止まって木を見ている、同じ場所を何度も見ている。判断を待っている場合があります。声をかけて、「そこはお任せします」か「そこは残してください」かを言い切ると進みます。",
  },
  {
    h: "追加を持ちかけられたら、その場で決めない",
    b: "「ついでにこの木も」という話は当日によく出ます。必要な提案であることも多いのですが、金額と範囲がその場の口頭で決まると後に残ります。「いくらで、どこまでですか」を聞いて、書いたものをもらってから決めるのが基本です。",
  },
  {
    h: "言いにくいことを持ち越さない",
    b: "その場で言えなかったことは、翌日には言いにくくなります。気になった時点で一言だけ出しておくと、相手も途中で直せます。全部終わってから並べて言われるのが、相手にとっても一番困る形です。",
  },
];

const hosting = [
  {
    h: "水道と電源を使ってよいか",
    b: "道具の洗浄や、電動の道具に使うことがあります。使ってよいなら場所を、使ってほしくないならその旨を最初に伝えます。後から言うより、着手前に言うほうが段取りを組み直さずに済みます。",
  },
  {
    h: "手洗いや手洗い場の扱い",
    b: "半日を超える作業では必要になる場面があります。貸すかどうかは自由ですが、貸さない方針なら近くに使える場所があるかを伝えておくと親切です。決めていないと、相手も聞きにくいまま時間が過ぎます。",
  },
  {
    h: "飲み物をどうするか",
    b: "出す義務はありません。出したい場合は、作業の区切りに置いておく形が手を止めさせません。受け取らない方針の会社もあるため、断られても気にする必要はありません。",
  },
  {
    h: "雨が降り出したときの待機場所",
    b: "途中で降ってきた場合、続行するか中断するかの判断が入ります。軒下など一時的に留まれる場所があるなら、先に示しておきます。順延になるときの取り決めは、日程を決める段階で確認しておく項目です。",
  },
];

const checklist = [
  {
    h: "当日の流れを到着時に聞いたか",
    b: "どこから始めて何時ごろ終わるか。聞いておくと、顔を出す場面を自分で決められます。",
  },
  {
    h: "どこにいれば邪魔にならないか確認したか",
    b: "動線の上に立っていると、相手が声をかけづらくなります。最初に聞いてしまうのが早道です。",
  },
  {
    h: "最初の一本の前に一度見せてもらう約束をしたか",
    b: "仕上がりの度合いを合わせる場面は、ここが一番効きます。終わってからでは戻せません。",
  },
  {
    h: "その場で追加を決めない方針を持っているか",
    b: "当日に出てくる提案は、金額と範囲を聞いて、書いたものをもらってから決めます。",
  },
  {
    h: "水道・電源・手洗いの扱いを決めたか",
    b: "貸すか貸さないかはどちらでもかまいませんが、決めて伝えておくと双方が動きやすくなります。",
  },
];

const faqs = [
  {
    q: "作業の間、ずっと庭にいたほうがよいですか。",
    a: "その必要はありません。到着してすぐ、最初の一本に手を入れる前、半分ほど進んだころ、片づけに入るころ。この四つの場面で顔を出せば、判断が必要なときに間に合います。常に見ていると相手が手を止めて説明する時間が増え、かえって作業が長くなります。",
  },
  {
    q: "お茶や昼食は用意すべきですか。",
    a: "用意する義務はありません。会社の方針として受け取らないところもあります。出したい場合は、作業の区切りに置いておく形が手を止めさせずに済みます。断られても失礼にあたる話ではないので、気にする必要はありません。",
  },
  {
    q: "作業中に「この木も切りましょうか」と言われたら、その場で決めるべきですか。",
    a: "その場で決める必要はありません。必要な提案であることも多いのですが、金額と範囲が口頭だけで決まると、後から食い違いが出ます。「いくらで、どこまでですか」を聞いて、書いたものをもらってから判断してください。急ぎでなければ、別の日にあらためて頼むという選択もあります。",
  },
  {
    q: "相模原市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、相模原市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "作業当日に立ち会うときに顔を出す場面と、声をかけるときの言い方を整理しました。",
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
          在宅して作業を見ていると、落ち着かない時間が生まれます。ずっと見ていると相手も気を使い、かといって部屋にこもっていると気づいたときには切り終わっている。どのくらいの距離でいればよいのかは、頼んだ経験が少ないほど分かりません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          相模原にある家の庭で作業を頼む場合も、当日の過ごし方には型があります。このページでは、顔を出すとよい場面と、そのときに何を見て何を言うのかを整理します。
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
          立ち会いは「ずっと見ている」ことではない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          立ち会う目的は、監視ではありません。判断が必要になったときにすぐ答えられること、そして仕上がりが想定と違う方向へ進みかけたときに、早い段階で止められることの二つです。どちらも、常時見ている必要はありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          むしろ常時見られていると、相手は手を止めて説明する時間が増えます。聞きたいことをためて、区切りのよいところでまとめて聞くほうが、作業時間を削らずに済みます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            最初に「何時ごろに一度見せてもらえますか」と伝えておくと、そのタイミングで向こうから声をかけてもらえます。こちらが見に行く形より、はるかに気まずくありません。
          </p>
        </div>
      </section>

      <section id="sagamihara-timeline" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          一日の流れと、顔を出すとよい場面
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          作業の進み方には区切りがあります。その区切りに合わせると、手を止めさせずに確認できます。
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
          作業が終わって引き渡しを受ける場面で見る項目は
          <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2 mx-1">
            作業が終わった日の確認と手直しの頼み方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sagamihara-words" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          声をかけるなら、どの言い方か
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          言いたいことがあっても、言い方が思いつかずに飲み込んでしまう。これが後から一番こじれます。型を持っておくと言いやすくなります。
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
          迎える側が用意しておくとよいもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          もてなす必要はありませんが、決めておくと双方が動きやすくなる項目があります。
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
          雨で日程が動いたときの扱いは
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="sagamihara-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、当日に条件を決め直す場面を減らしたいという条件で見ると、次の3つはそれぞれ違う形で助けになります。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/hamamatsu/", label: "作業日までに庭を空けておく支度" },
            { href: "/area/kawasaki/", label: "作業が終わった日の確認と手直しの頼み方" },
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
          当日の流れは会社によって違います。立ち会いの進め方も、問い合わせのときに聞いておくと安心です。
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
