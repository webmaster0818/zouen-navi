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
    "出せる金額が先に決まっているとき、動かせるのは範囲のほうです。対象を減らす、仕上がりを浅くする、回数を分ける、自分でやる部分を作る。鹿児島で庭の手入れを頼むときの範囲の削り方と、削らないほうがよいところを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "予算が先に決まっているときの範囲の組み立て方という観点から、鹿児島での業者選びを整理しました。",
  },
};

const toc = [
  { id: "kagoshima-logic", label: "金額は作業量で決まるので、動かすのは範囲の側" },
  { id: "kagoshima-reduce", label: "範囲を減らす方向は4つある" },
  { id: "kagoshima-keep", label: "削らないほうがよいところ" },
  { id: "kagoshima-tell", label: "予算を伝えるときの言い方" },
  { id: "kagoshima-pick", label: "この条件で見ておきたい3サービス" },
  { id: "kagoshima-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kagoshima-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kagoshima-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["houzz", "epark", "oniwa-110"] as const;

const pickReasons: Record<string, string> = {
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価レビューが掲載されています。仕上がりの写真を先に見ておくと、どの度合いまでやってもらうのかの見当がつきます。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから事業者を探せ、各事業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。作業の単位ごとに料金が並んでいる形なので、どれを外すかを考える材料になります。",
  "oniwa-110":
    "草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽など、作業の区分が分かれています。どの区分を頼み、どれを見送るかを整理して相談したいときに向きます。現地調査・見積りは無料（条件あり）と公表しており、請負賠償保険に加入しているとされています。",
};

const reduceWays = [
  {
    h: "対象を減らす（数と場所）",
    b: "全部の木ではなく、人目につく側だけ。庭全体ではなく、道路に面した部分だけ。最も分かりやすい削り方で、仕上がりの質は落ちません。手を入れた場所と入れていない場所の差が出るため、どこを優先するかは先に決めておきます。",
  },
  {
    h: "仕上がりの度合いを浅くする",
    b: "形を整えるところまでやるのか、伸びすぎた部分を落とすだけにするのか。同じ木でも、かける手間で金額が変わります。「今年はとりあえず短くするだけ」という頼み方は成立します。",
  },
  {
    h: "回数を分ける",
    b: "今年はこの範囲、来年は残り、という形です。一度に全部やるより合計の金額は増える場合がありますが、一回あたりの負担は下がります。分ける場合は、次にいつやるかを決めておかないと、そのまま放置になります。",
  },
  {
    h: "自分でやる部分を作る",
    b: "切ったものを自分で処分する、足元の草は自分で刈る、作業前の片づけを自分でやる。手間の一部を引き取ると、その分が範囲から外れます。ただし、自分でやると決めた部分は本当にやる必要があります。残ったままだと、結局あとから頼むことになります。",
  },
];

const keepItems = [
  {
    h: "安全に関わる作業",
    b: "折れかけた枝、傾いた木、建物や電線に近い枝。放置すると被害の側が発生します。予算が足りないなら、ほかを削ってでもここを残す順番になります。",
  },
  {
    h: "高いところの作業",
    b: "自分でやることにして削る対象にしがちですが、脚立を使う高さの作業は事故が起きやすい場面です。「今年は自分でやる」と決めて結局やらないまま伸びると、翌年の作業量が増えます。",
  },
  {
    h: "放っておくと増えるもの",
    b: "地下で広がる植物、種を落とす前の雑草、木に巻きついているつる。今年削ると、来年の作業量が増えて戻ってきます。止めるべき段階では止めておくほうが、通算では少なくなります。",
  },
  {
    h: "隣に関わるもの",
    b: "境界を越えている枝、隣の敷地に落ちるもの、隣家の屋根や壁に触れている部分。これは費用の問題ではなく、近隣との関係の問題になります。優先度は高く置いておきます。",
  },
];

const howToTell = [
  {
    h: "上限と、優先したいものを一緒に出す",
    b: "「この金額までで、まずはこの木を優先したい」という形にします。上限だけだと、相手はどこから手を付けるかを推測することになります。優先順位が添えてあれば、限られた範囲でも納得のいく組み方になります。",
  },
  {
    h: "削ってよい候補を、こちらから挙げる",
    b: "「裏側は今年でなくてもよい」「処分は自分でできる」。削ってよい部分をこちらから出すと、相手は残すべきところに手間を寄せられます。何も言わないと、全体を均等に薄くする組み方になりがちです。",
  },
  {
    h: "超えそうなときは連絡をもらう",
    b: "現地で作業が増えることはあります。その場合に、そのまま進めるのではなく一度連絡をもらう約束にしておきます。上限を伝えている以上、この取り決めがないと意味がありません。",
  },
  {
    h: "今年やらないものを明示する",
    b: "「今回は見送る」と書いておくと、やり残しではなく、決めて外したものになります。次に頼むときの出発点にもなります。",
  },
];

const checklist = [
  {
    h: "上限の金額を一つ決めたか",
    b: "決まっていないと、範囲の話がいつまでも具体的になりません。",
  },
  {
    h: "優先したい作業を挙げたか",
    b: "上限だけを伝えると、どこから手を付けるかは相手の推測になります。",
  },
  {
    h: "削ってよい候補をこちらから出したか",
    b: "見送ってよい部分を伝えると、残すところに手間を寄せてもらえます。",
  },
  {
    h: "安全に関わるものを削っていないか",
    b: "折れかけた枝、傾いた木、隣に関わる部分。ここは予算より先に確保します。",
  },
  {
    h: "超えそうなときの連絡を頼んだか",
    b: "現地で作業が増えたとき、そのまま進めずに一度連絡をもらう取り決めにしておきます。",
  },
];

const faqs = [
  {
    q: "予算内に収まらないと言われたら、どうすればよいですか。",
    a: "金額を下げてもらうのではなく、範囲を組み直すほうが確実です。対象の数を減らす、仕上がりを浅くする、今年と来年に分ける、処分や片づけを自分でやる。この四つのどれを動かせるかを相談してください。そのとき、安全に関わる作業と隣に関わる作業だけは削らずに残す順番で考えます。",
  },
  {
    q: "一度で全部やらずに分けて頼むと、合計は高くなりますか。",
    a: "出張や段取りの手間が回数分かかるため、合計では増える場合があります。一方で、一回あたりの負担は下がり、残りをやる前に仕上がりを確かめてから続きを頼めるという利点もあります。分ける場合は、次にいつやるかを決めておかないと、伸びた状態が続いて次回の作業量が増えます。",
  },
  {
    q: "自分でやる部分を作れば安くなりますか。",
    a: "その分の手間が範囲から外れるので、安くなる方向には働きます。ただし、自分でやると決めた部分を実際にやらないと、残った状態から改めて頼むことになり、結局は同じか、伸びたぶん増えることもあります。高いところの作業や、刃物を使う作業を自分でやる側に回すのは、費用より安全の問題として考えてください。",
  },
  {
    q: "鹿児島市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、鹿児島市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "出せる金額から依頼の範囲を組み立てるときの削り方と、削らないほうがよい作業を整理しました。",
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
          庭を全部きれいにしたいけれど、かけられる金額は決まっている。この順番で考え始める人は少なくないはずです。ところが問い合わせの文面は「庭全体をお願いします」になりがちで、返ってきた見積もりを見て、そこから初めて削る話が始まります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          鹿児島にある家の庭で頼む場合も同じです。金額は作業の量と範囲で決まるので、予算が先に決まっているなら、動かすのは範囲の側になります。このページでは、どこをどう削れるのか、逆に削らないほうがよいのはどこかを整理します。なお、具体的な費用の目安は掲載している料金ページを参照してください。
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
          金額は作業量で決まるので、動かすのは範囲の側
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりが予算を超えたとき、値引きを頼むという発想になりがちです。しかし庭の作業は人の手と時間で成り立っているため、同じ範囲のまま金額だけが下がるとすれば、どこかの手間が減っているか、含まれていたものが外れています。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          先に範囲を組んでから頼めば、この順番が逆になります。「この金額で、どこまでやれますか」という聞き方は、値引きの交渉ではなく、範囲の設計を一緒にやってもらう形です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            動かせるのは四つです。対象の数、仕上がりの度合い、回数、そして自分でやる部分。このうちどれを動かすかで、庭の見え方も変わります。次の見出しで一つずつ見ていきます。
          </p>
        </div>
      </section>

      <section id="kagoshima-reduce" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          範囲を減らす方向は4つある
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じだけ金額を下げるにも、どこを削るかで残るものが違います。
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
          自分でやる範囲を広げる場合の判断は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          、切ったものを自分で出す方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kagoshima-keep" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          削らないほうがよいところ
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          安くするために外すと、あとで高くつくものがあります。予算の話をする前に、ここだけは切り離しておきます。
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
          境界をまたぐ枝と根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          、広がりやすい植物への対処は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策の選び分け
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="kagoshima-tell" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          予算を伝えるときの言い方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          金額だけを言うと、その額に合わせた範囲が返ってきます。それ自体は正しい反応ですが、こちらの優先順位が反映されません。
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
          当日に作業が増えたときの進め方は
          <Link href="/area/sagamihara/" className="text-primary underline underline-offset-2 mx-1">
            作業当日に立ち会うときの距離の取り方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kagoshima-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、範囲を自分で組み立ててから相談したいという条件で見ると、次の3つは材料が揃いやすい構成です。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/cost/price/", label: "庭工事の料金相場" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
            { href: "/area/hiroshima/", label: "困りごとの切り分けと優先順位" },
            { href: "/area/okayama/", label: "相見積もりの揃え方と断り方" },
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
          範囲を組んでから当たると、返ってくる提案が具体的になります。上限と優先順位を添えて相談してみてください。
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
