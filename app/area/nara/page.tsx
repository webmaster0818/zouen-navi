import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nara/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "奈良の造園・庭の手入れ業者の選び方｜所有者以外の家族が手配する場合の手順";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "親の家、相続前後の実家、離れて暮らす家族の庭など、手配する人と庭の所有者が異なる場合は、申し込みの名義、書面の宛名、連絡経路を事前に決めておかないと、手続きが途中で止まります。奈良で家族が代わりに手配する場合の手順と、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭の所有者ではない家族が手配する場合の、名義・書面・連絡経路の決め方を整理しています。",
  },
};

const toc = [
  { id: "nara-point", label: "手配する人と庭の所有者が異なる場合があります" },
  { id: "nara-first", label: "申し込む前に確認する4つの事項" },
  { id: "nara-name", label: "申し込みの名義と書面の送付先" },
  { id: "nara-living", label: "所有者本人がその家に住んでいる場合の手順" },
  { id: "nara-pick", label: "この条件に適した3サービス" },
  { id: "nara-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nara-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nara-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "oniwa-master", "townlife"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "完全自店舗施工で、剪定・伐採・草刈り・芝刈り・植栽などの庭の手入れを専門に扱う全国チェーンです。窓口と実際に作業する側が同じ組織であるため、手配する人と現場にいる人が異なる状況でも、伝えた内容が経由する段階が少なく済みます。無料の明瞭な見積もりと追加料金なしを掲げており、庭師経験10年以上のスタッフが9割以上、リピート率95%以上（公式・自社調べ）としています。運営は株式会社ガーデンメーカーです。",
  "oniwa-master":
    "自社では施工せず、要望に合う業者を無料で紹介する仕組みです。受付は24時間365日のため、平日の日中に電話をかけにくい方でも相談を始めやすい体制です。剪定・伐採・草刈り・芝刈りなど庭の手入れ全般に対応し、全国47都道府県に加盟拠点があります。見積もりは無料（一部調査費用は別途）としています。",
  "townlife":
    "希望条件を入力すると、複数社からプランと見積もりが無料で届きます。届く資料が書面の形式であるため、離れて暮らす家族同士で同じ資料を確認しながら相談する際に扱いやすくなります。外構（エクステリア）専用の請求窓口があり、庭・外構のプランの取り寄せに利用できます。運営はタウンライフ株式会社です。",
};

const firstChecks = [
  {
    h: "住宅と庭の所有者",
    b: "登記上の所有者を確認します。親が住んでいても名義は別である、相続の手続きが済んでいない、兄弟の共有になっているといった場合があります。手配のみであれば所有者本人でなくても可能ですが、木を伐採する、地面を変更するといった元に戻せない作業を含む場合は、所有者の了承を得てから進める必要があります。",
  },
  {
    h: "費用の負担者",
    b: "手配する人が負担するのか、所有者が負担するのかを決めます。この点が決まっていないと、見積もりが届いた段階で手続きが止まります。支払う人と申し込む人が異なる場合は、請求先を問い合わせの時点で伝えておくと、書面の作り直しを防げます。",
  },
  {
    h: "当日の在宅者",
    b: "所有者本人が在宅するのか、手配した人が現地に行くのか、誰も在宅しないのかを決めます。業者にとっては、当日敷地に入れるか、水道や電源を使用できるか、判断が必要な場合に誰に確認すればよいかが変わります。誰も在宅しない形で進める場合は、その前提で取り決めを増やしておく必要があります。",
  },
  {
    h: "作業完了の確認者",
    b: "作業完了時にその場で確認するのは誰かを決めます。所有者本人が確認する場合は、確認してもらう範囲を伝えておきます。手配した人が後日確認する場合は、その間に片づけられたり移動されたりするものがあります。確認者と確認の時期を、申し込みの際に決めておきます。",
  },
];

const nameAndPaper = [
  {
    h: "申し込みの名義をどちらにするか",
    b: "手配する人の名前で申し込み、作業場所として実家の住所を伝える方法が、連絡の行き違いが最も少なくなります。所有者本人の名前で申し込むと、確認の電話が本人に入ります。本人が対応できる状態かどうかによって、どちらにするかを決めてください。名義を手配する人にする場合は、その旨を最初に伝えておきます。",
  },
  {
    h: "見積書・請求書の宛名と送付先",
    b: "申し込みの名義、書面の宛名、支払う人がすべて同じとは限りません。後から名義を変更すると作り直しになるため、最初に「宛名はこの名前、送付先はこの住所」と伝えておきます。書面が実家に届く形にすると、所有者本人が内容を見て驚くという場面も起こり得ます。",
  },
  {
    h: "連絡先を2つにする場合の伝え方",
    b: "見積もりと日程の相談は手配する人の携帯電話、当日の連絡は親の固定電話、という分け方は可能です。ただし、両方の番号を記載するだけでは、業者はどちらに連絡すべきか迷います。どの用件をどちらに連絡してほしいかを明記してください。当日に急ぎの連絡が必要な場面では、現地にいる人につながる番号が優先されます。",
  },
  {
    h: "所有者本人に伝わっていない状態で進めない",
    b: "依頼したこと自体を所有者本人が知らないまま作業日を迎えると、当日に断られることがあります。庭に人が入る、作業音が出る、木の姿が変わるといったことは、本人にとっては自宅に関わる事項です。詳細まで共有できなくても、誰がいつ訪問するのかは事前に伝わっている状態にしておきます。",
  },
];

const livingCases = [
  {
    h: "残したいものを事前に確認する",
    b: "植えた経緯のある木、実を収穫している木、手入れをしている一角などは、所有者本人にとって、伸びているから剪定する対象とは限りません。手配する側が「全体をすっきりさせてください」と伝えると、この区別が失われます。剪定してほしくないものがあるかを確認し、ある場合は業者に具体的に伝えます。",
  },
  {
    h: "当日の所有者本人の負担を考慮する",
    b: "作業当日は、人が出入りし、作業音が出て、水道や駐車場所を使用します。半日から一日、落ち着かない状態が続きます。高齢の所有者が一人でその状況に対応することは、想定以上の負担になります。立ち会いを本人に任せる場合は、どの場面で対応が必要になるかを事前に伝えておきます。",
  },
  {
    h: "集合住宅や共用部分が関わる場合",
    b: "専用庭、共用の植え込み、敷地内の通路など、本人が使用している場所であっても、作業の可否の判断が管理者側にある場合があります。この確認は、業者ではなく依頼者が行うべき事項です。手配する人が管理者に直接連絡できない場合は、誰が確認するかを決めてから進めます。",
  },
  {
    h: "後に問題が生じやすい事項",
    b: "伐採した木が元に戻らないこと、費用の負担者が曖昧であること、他の家族に知らされていないこと。この三つが重なると、作業自体に問題がなくても、家族間の関係に影響が残ります。元に戻せない作業と、金額に関わる事項は、事前に共有した記録を残しておくことをおすすめします。",
  },
];

const checklist = [
  {
    h: "所有者を確認したか",
    b: "元に戻せない作業を含む場合は、所有者の了承を得てから進める必要があります。",
  },
  {
    h: "申し込みの名義と書面の宛名を決めたか",
    b: "後から変更すると作り直しになります。送付先の住所もあわせて伝えます。",
  },
  {
    h: "用件ごとの連絡先を伝えたか",
    b: "番号を2つ記載するだけでは業者が迷います。用件ごとに指定します。",
  },
  {
    h: "残したいものを所有者本人に確認したか",
    b: "「全体をすっきり」と伝えると、本人が残したい木の区別が失われます。",
  },
  {
    h: "訪問者と訪問日を所有者本人に伝えたか",
    b: "知らないまま当日を迎えると、その場で断られることがあります。",
  },
];

const faqs = [
  {
    q: "親の家の庭ですが、本人の名前で申し込む必要がありますか。",
    a: "手配そのものは、所有者本人でなくても可能です。確認の連絡を手配する人が受けたい場合は、手配する人の名前で申し込み、作業場所として実家の住所を伝えるほうが行き違いを防げます。ただし、木の伐採や地面の変更といった元に戻せない作業を含む場合は、名義とは別に、所有者本人の了承を得てから進める必要があります。書面の宛名と請求先は、申し込みの際に指定しておいてください。",
  },
  {
    q: "見積もりの連絡は自分に、当日の連絡は親に、という形にできますか。",
    a: "可能ですが、連絡先を2つ記載するだけでは、業者はどちらに連絡すべきか迷います。「見積もりと日程の相談はこちら、作業当日の連絡は現地のこちら」と、用件ごとに指定してください。当日に急ぎの判断が必要な場面では、現地にいる人につながる番号が優先されます。反対に、金額に関わる連絡は手配した人に届くようにしておくことをおすすめします。",
  },
  {
    q: "本人が「切らなくていい」と言っている木があります。どう伝えればよいですか。",
    a: "その木を具体的に伝えてください。場所と、識別できる特徴（門の横の一本、物置の裏側など）を添えると確実です。「全体をすっきりさせてください」という依頼方法では、この区別は伝わりません。可能であれば、現地確認の際に所有者本人か手配した人が同席し、現物を示して伝えることが最も確実です。同席が難しい場合は、写真に印を付けて渡す方法もあります。",
  },
  {
    q: "奈良市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、奈良市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaNaraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭の所有者ではない家族が手配する場合に、名義・書面の宛名・連絡経路・当日の役割をどのように決めるかを整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "奈良" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを依頼する人が、その庭の所有者とは限りません。高齢の親の家、相続手続き中の実家、同居していない家族の家など、所有者は別にいて、業者を探して連絡し日程を決めるのは家族という形はよくあります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          奈良市内の実家の庭を、離れて暮らす家族が手配する場合も同様です。作業内容そのものは変わりませんが、決めるべき事項が増えます。申し込みの名義、書面の送付先、用件ごとの連絡先などです。本ページでは、手配する側の実務に絞って整理します。
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

      <section id="nara-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          手配する人と庭の所有者が異なる場合があります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自宅の庭であれば、決定も支払いも立ち会いも依頼者自身が行い、業者にとっても相談相手が一人で完結します。しかし、手配する人が所有者でない場合、この役割が二人以上に分かれます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          役割が分かれていること自体は問題ではありません。問題となるのは、それを業者に伝えていない場合です。確認の電話が想定外の人に入る、書面が想定外の宛名で届く、当日の判断を誰も行えないといった問題は、いずれも最初に伝えておけば防げたものです。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            決めるべきは、四つの役割をそれぞれ誰が担うかです。申し込む人、費用を負担する人、当日現地にいる人、作業完了を確認する人です。すべてが同じ人でない場合は、その分担を業者に伝えるまでが手配する人の役割になります。
          </p>
        </div>
      </section>

      <section id="nara-first" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          申し込む前に確認する4つの事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          問い合わせフォームに入力する前に、この四点を決めておきます。
        </p>
        <ol className="space-y-4">
          {firstChecks.map((x, i) => (
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
          家族間で意思決定者と費用負担者を決める手順は
          <Link href="/area/niigata/" className="text-primary underline underline-offset-2 mx-1">
            意思決定者と費用負担者の確認
          </Link>
          、費用の目安は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="nara-name" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          申し込みの名義と書面の送付先
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この点は好みの問題に見えますが、後から修正すると手間が大きくなります。最初に決めて、最初に伝えます。
        </p>
        <div className="space-y-4">
          {nameAndPaper.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          届いた書面の確認箇所は
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で、やり取りの手段ごとの特徴は
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="nara-living" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          所有者本人がその家に住んでいる場合の手順
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          空き家の庭と、人が住んでいる家の庭では、手配する側が注意すべき点が異なります。
        </p>
        <div className="space-y-4">
          {livingCases.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          当日に誰も立ち会えない形で進める場合の手順は
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会いができない場合の依頼方法
          </Link>
          、立ち会う場合の対応は
          <Link href="/area/sagamihara/" className="text-primary underline underline-offset-2 mx-1">
            作業当日の立ち会い方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="nara-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、手配する人と現場が離れているという条件では、次の3サービスが連絡経路や資料の形式の点で扱いやすい構成です。
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

      <section id="nara-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="奈良" />
      </section>

      <section id="nara-checklist" className="scroll-mt-20 mb-12">
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

      <section id="nara-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="nara" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/sendai/", label: "立ち会いができない場合の依頼方法" },
            { href: "/area/niigata/", label: "意思決定者と費用負担者の確認" },
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンス" },
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
          申し込む人、費用を負担する人、当日現地にいる人、作業完了を確認する人の四つの分担を添えて問い合わせると、その後のやり取りを簡潔に進められます。
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
