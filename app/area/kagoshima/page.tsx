import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kagoshima/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "鹿児島の造園・庭の手入れ業者の選び方｜予算から依頼の範囲を組み立てる";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "予算の上限が先に決まっている場合、調整できるのは作業範囲です。対象を減らす、仕上がりの程度を軽くする、回数を分ける、自分で行う部分を設けるといった方法があります。鹿児島で庭の手入れを依頼する際の範囲の絞り方と、削減を避けるべき作業を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "予算が先に決まっている場合の依頼範囲の組み立て方という観点から、鹿児島での業者選びを整理しています。",
  },
};

const toc = [
  { id: "kagoshima-logic", label: "金額は作業量で決まるため、調整するのは作業範囲です" },
  { id: "kagoshima-reduce", label: "作業範囲を絞る4つの方法" },
  { id: "kagoshima-keep", label: "削減を避けるべき作業" },
  { id: "kagoshima-tell", label: "予算の伝え方" },
  { id: "kagoshima-pick", label: "この条件に適した3サービス" },
  { id: "kagoshima-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kagoshima-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kagoshima-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["houzz", "epark", "oniwa-110"] as const;

const pickReasons: Record<string, string> = {
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価付きの口コミが掲載されています。仕上がりの写真を事前に確認しておくと、どの程度まで作業を依頼するかの目安を立てられます。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから業者を探すことができ、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。作業の単位ごとに料金が表示されているため、どの作業を外すかを検討する材料になります。",
  "oniwa-110":
    "草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽など、作業の区分が分かれています。依頼する区分と見送る区分を整理して相談したい場合に適しています。現地調査・見積もりは無料（条件あり）と公表しており、請負賠償保険に加入しているとされています。",
};

const reduceWays = [
  {
    h: "対象を減らす（本数と場所）",
    b: "すべての木ではなく人目につく側のみ、庭全体ではなく道路に面した部分のみ、といった方法です。最も分かりやすい絞り方であり、仕上がりの質は下がりません。作業した場所としていない場所の差が生じるため、優先する場所を事前に決めておきます。",
  },
  {
    h: "仕上がりの程度を軽くする",
    b: "形を整えるところまで行うのか、伸びすぎた部分を切り落とすのみとするのか。同じ木でも、かける手間によって金額が変わります。「今年は短くするのみ」という依頼も可能です。",
  },
  {
    h: "回数を分ける",
    b: "今年はこの範囲、来年は残りの範囲、という方法です。一度にすべてを行うより合計金額が増える場合がありますが、一回あたりの負担は軽くなります。分ける場合は、次回の作業時期を決めておかないと、そのまま放置されることになります。",
  },
  {
    h: "自分で行う部分を設ける",
    b: "剪定した枝を自分で処分する、足元の草を自分で刈る、作業前の片づけを自分で行うなど、手間の一部を依頼者が担うと、その分が作業範囲から外れます。ただし、自分で行うと決めた部分は確実に実施する必要があります。実施しないまま残ると、結局後から依頼することになります。",
  },
];

const keepItems = [
  {
    h: "安全に関わる作業",
    b: "折れかけた枝、傾いた木、建物や電線に近い枝は、放置すると被害が発生するおそれがあります。予算が不足する場合は、他の作業を削減してでも、この作業を優先して残します。",
  },
  {
    h: "高所の作業",
    b: "自分で行うことにして削減の対象にしがちですが、脚立を使用する高さの作業は事故が起きやすい作業です。「今年は自分で行う」と決めて実施しないまま枝が伸びると、翌年の作業量が増えます。",
  },
  {
    h: "放置すると増えるもの",
    b: "地下で広がる植物、種を落とす前の雑草、木に巻きついているつる植物などは、今年削減すると翌年の作業量が増加します。抑えるべき段階で対処しておくほうが、総作業量は少なくなります。",
  },
  {
    h: "隣家に関わるもの",
    b: "境界を越えている枝、隣地に落ちるもの、隣家の屋根や壁に接触している部分は、費用の問題ではなく近隣との関係の問題になります。優先度を高く設定しておきます。",
  },
];

const howToTell = [
  {
    h: "上限額と優先したい作業をあわせて伝える",
    b: "「この金額までで、まずはこの木を優先したい」という形で伝えます。上限額のみでは、業者はどこから着手するかを推測することになります。優先順位が添えられていれば、限られた範囲でも依頼者の意図に沿った作業内容を組み立てられます。",
  },
  {
    h: "削減してよい候補を依頼者から示す",
    b: "「裏側は今年でなくてもよい」「処分は自分で行える」など、削減してよい部分を依頼者から示すと、業者は残すべき作業に手間を集中できます。何も伝えないと、全体を均等に軽くする組み立てになりがちです。",
  },
  {
    h: "上限を超えそうな場合は連絡を受ける",
    b: "現地で作業が増えることがあります。その場合はそのまま進めるのではなく、一度連絡を受ける取り決めにしておきます。上限額を伝えている以上、この取り決めがなければ意味がありません。",
  },
  {
    h: "今年見送る作業を明示する",
    b: "「今回は見送る」と明記しておくと、作業の漏れではなく、判断して除外したものとして扱われます。次回依頼する際の起点にもなります。",
  },
];

const checklist = [
  {
    h: "上限額を一つに決めたか",
    b: "上限額が決まっていないと、範囲の相談がいつまでも具体的になりません。",
  },
  {
    h: "優先したい作業を挙げたか",
    b: "上限額のみを伝えると、どこから着手するかは業者の推測に委ねられます。",
  },
  {
    h: "削減してよい候補を依頼者から示したか",
    b: "見送ってよい部分を伝えると、残す作業に手間を集中してもらえます。",
  },
  {
    h: "安全に関わる作業を削減していないか",
    b: "折れかけた枝、傾いた木、隣家に関わる部分は、予算より先に確保します。",
  },
  {
    h: "上限を超えそうな場合の連絡を依頼したか",
    b: "現地で作業が増えた場合に、そのまま進めず一度連絡を受ける取り決めにしておきます。",
  },
];

const faqs = [
  {
    q: "予算内に収まらないと言われたら、どうすればよいですか。",
    a: "金額を下げてもらうのではなく、作業範囲を組み直す方法が確実です。対象の数を減らす、仕上がりの程度を軽くする、今年と来年に分ける、処分や片づけを自分で行う。この四つのうちどれを調整できるかを相談してください。その際、安全に関わる作業と隣家に関わる作業は削減せずに残す順序で検討します。",
  },
  {
    q: "一度で全部やらずに分けて頼むと、合計は高くなりますか。",
    a: "出張や段取りの手間が回数分発生するため、合計金額は増える場合があります。一方で、一回あたりの負担は軽くなり、残りの作業を依頼する前に仕上がりを確認できるという利点もあります。分ける場合は、次回の作業時期を決めておかないと、伸びた状態が続き、次回の作業量が増えます。",
  },
  {
    q: "自分でやる部分を作れば安くなりますか。",
    a: "その分の手間が作業範囲から外れるため、費用を抑える方向に働きます。ただし、自分で行うと決めた部分を実施しないと、残った状態から改めて依頼することになり、結果として同額か、伸びた分だけ増額になる場合もあります。高所の作業や刃物を使用する作業を自分で行うかどうかは、費用ではなく安全の観点から判断してください。",
  },
  {
    q: "鹿児島市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、鹿児島市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKagoshimaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "予算の上限から依頼範囲を組み立てる際の絞り方と、削減を避けるべき作業を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "鹿児島" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭全体を整えたいものの、かけられる金額は決まっている、という状況から検討を始める方は少なくありません。しかし、問い合わせの文面は「庭全体をお願いします」となりがちで、提示された見積もりを見てから、初めて削減の検討が始まります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          鹿児島市内の住宅の庭を依頼する場合も同様です。金額は作業の量と範囲で決まるため、予算が先に決まっている場合は、調整するのは作業範囲です。本ページでは、どの部分をどのように削減できるか、反対に削減を避けるべき作業はどれかを整理します。なお、具体的な費用の目安は料金ページをご参照ください。
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

      <section id="kagoshima-logic" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          金額は作業量で決まるため、調整するのは作業範囲です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりが予算を超えた場合、値引きを依頼しようと考えがちです。しかし、庭の作業は人手と時間で成り立っているため、同じ範囲のまま金額だけが下がる場合は、どこかの手間が減っているか、含まれていた作業が外れています。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          先に範囲を組み立ててから依頼すれば、この順序が逆になります。「この金額で、どこまで対応できますか」という確認は、値引きの交渉ではなく、作業範囲の設計を業者と共同で行う形になります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            調整できるのは、対象の数、仕上がりの程度、回数、自分で行う部分の四つです。どれを調整するかによって、庭の仕上がりも変わります。以下で一つずつ解説します。
          </p>
        </div>
      </section>

      <section id="kagoshima-reduce" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業範囲を絞る4つの方法
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ金額を削減する場合でも、どこを削減するかによって残る作業が異なります。
        </p>
        <ol className="space-y-4">
          {reduceWays.map((x, i) => (
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
          自分で行う範囲を広げる場合の判断は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          、剪定した枝を自分で処分する方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kagoshima-keep" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          削減を避けるべき作業
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          費用を抑えるために除外すると、後で費用が増える作業があります。予算の相談の前に、これらの作業は除外の対象から外しておきます。
        </p>
        <div className="space-y-4">
          {keepItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          境界を越える枝と根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          、広がりやすい植物への対処は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策の選び方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kagoshima-tell" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          予算の伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          金額のみを伝えると、その金額に合わせた範囲が提示されます。それ自体は適切な対応ですが、依頼者の優先順位は反映されません。
        </p>
        <div className="space-y-4">
          {howToTell.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          当日に作業が増えた場合の進め方は
          <Link href="/area/sagamihara/" className="text-primary underline underline-offset-2 mx-1">
            作業当日の立ち会い方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kagoshima-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、作業範囲を依頼者が組み立ててから相談したいという条件では、次の3サービスが判断材料を揃えやすい構成です。
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

      <section id="kagoshima-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="鹿児島" />
      </section>

      <section id="kagoshima-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kagoshima-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kagoshima" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/cost/price/", label: "庭工事の料金相場" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
            { href: "/area/hiroshima/", label: "依頼内容の整理と優先順位" },
            { href: "/area/okayama/", label: "相見積もりの条件の揃え方と断り方" },
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
          作業範囲を組み立ててから相談すると、提示される提案が具体的になります。上限額と優先順位を添えて相談することをおすすめします。
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
