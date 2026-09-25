import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/shizuoka/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "静岡の造園・庭の手入れ業者の選び方｜問い合わせ手段の選び分けと最初のやり取り";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "電話、入力フォーム、チャット、料金表からの申し込み。どれで連絡するかで返ってくるものが変わります。静岡で庭の手入れを頼むときの最初の一往復に何を書くか、返事が来ないときにどう見るかを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "問い合わせの手段の選び分けと、最初のやり取りの組み立て方から、静岡での業者選びを整理しました。",
  },
};

const toc = [
  { id: "shizuoka-first", label: "問い合わせのしかたで、返ってくるものが変わる" },
  { id: "shizuoka-channel", label: "連絡手段は4つ、向いている場面が違う" },
  { id: "shizuoka-write", label: "最初の連絡に入れておきたい5つ" },
  { id: "shizuoka-noreply", label: "返事が来ない・話が進まないときの見方" },
  { id: "shizuoka-pick", label: "この条件で見ておきたい3サービス" },
  { id: "shizuoka-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "shizuoka-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "shizuoka-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["epark", "kurashi-market", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから事業者を探せ、各事業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。電話で予約できる窓口のため、文字にしづらい状況を口頭で補いながら進めたいときに向きます。営業時間が事業者ごとに出ているため、いつ連絡すればよいかを事前に確認できます。",
  "kurashi-market":
    "作業内容ごとに料金が先に表示され、見積もりを取らずに依頼内容を確定できます。最初の一往復を挟まずに進められる形式で、頼みたい作業がはっきりしている場合に手数が少なくなります。完了後に口コミを投稿でき、損害賠償補償制度も設けられています。",
  "oniwa-madoguchi":
    "造園・剪定・伐採・草刈りなどの情報発信と、全国の業者を検索できる機能を持つ情報・比較サイトです。問い合わせを出す前に、どういう作業があるのかと候補にどんな相手がいるのかを見ておく用途に向きます。運営元は庭手入れ専門の全国チェーンも展開しています。",
};

const channels = [
  {
    h: "電話で話す",
    b: "その場で往復できるのが強みです。庭の状態を言葉で補いながら伝えられ、分からないことをすぐ聞き返せます。向かないのは、木の名前や本数が自分でも整理できていない場合と、話した内容が手元に残らない点です。電話で決めたことは、後で自分の側にも書き留めておきます。掲載サービスの中には、コールセンターが24時間365日受付と公表しているところがあります。",
  },
  {
    h: "入力フォームから送る",
    b: "落ち着いて書けて、送った内容が自分の側にも残ります。家族に相談しながら文面を作る場合にも向きます。弱いのは速さで、返信まで時間がかかることがあります。急ぎの用件は、フォームだけに頼らないほうが安全です。",
  },
  {
    h: "チャットやメッセージでやり取りする",
    b: "文字が残る点はフォームと同じで、そのまま何往復もできる点が違います。写真を添えながら段階的に詰めていく進め方に向きます。掲載サービスの中には、チャットで業者と直接相談できる形式のものがあります。",
  },
  {
    h: "表示された料金から直接申し込む",
    b: "作業内容ごとに料金が先に表示され、見積もりを取らずに依頼内容を確定できる形式です。最初の一往復そのものが要りません。向くのは、頼みたい作業がはっきりしていて、現地を見てもらわなくても条件が決まる場合です。",
  },
];

const firstMessage = [
  {
    h: "場所をどこまで書くか",
    b: "市区町村までで足ります。番地まで書かないと進まないわけではなく、出張の範囲に入るかどうかの判断には市区町村で足ります。戸建てか集合住宅か、専用庭か共用部かも一言添えると、答えが具体的になります。",
  },
  {
    h: "やってほしいことを一言で",
    b: "「木を切りたい」「草を何とかしたい」「全体が荒れているので見てほしい」。専門の言葉でなくてかまいません。木の名前が分からなくても依頼はできます。分からないことは分からないと書くほうが、後の食い違いが減ります。",
  },
  {
    h: "急ぎかどうかと、その理由",
    b: "「いつでもよい」のか「この日までに終わらせたい」のか。期限がある場合は理由も添えます。来客がある、隣から言われている、売る予定がある。理由が分かると、優先順位や代替案を出してもらえます。",
  },
  {
    h: "連絡がつく時間帯",
    b: "折り返しの電話に出られない時間があるなら先に書きます。つながらないまま数日が過ぎる、という止まり方が一番もったいない形です。電話よりメールがよい場合も、その旨を書いておきます。",
  },
  {
    h: "写真を送れるかどうか",
    b: "現状の写真があると、話が一気に進みます。送り先があるか、どの形式で受け取ってもらえるかを最初に聞いておくと、次の往復で渡せます。",
  },
];

const noReply = [
  {
    h: "何日待つかを先に決めておく",
    b: "送った日に「何日まで待つ」と自分の中で決めておきます。決めていないと、待ち続けるか、すぐに諦めるかのどちらかに振れます。受付時間を公表しているサービスなら、その時間帯に合わせて連絡するだけで結果が変わることもあります。",
  },
  {
    h: "催促は、内容を足して送る",
    b: "「その後いかがでしょうか」だけを送るより、写真を添える、希望日を絞る、範囲を減らすなど、判断材料を足して送るほうが返事が来ます。相手が止まっているのは、返信を忘れているのではなく、答えを出せずにいる場合があります。",
  },
  {
    h: "一社だけで待たない",
    b: "最初の連絡は複数に出しておくのが現実的です。返事が来た順に進めればよく、来なかったところは候補から外れるだけです。同じ条件で複数社に当たる場合の揃え方は別に整理しています。",
  },
  {
    h: "断られたときは理由を一つ聞く",
    b: "受けられないと言われたら、理由を一言だけ聞いておきます。距離なのか、作業の種類なのか、時期なのか。それが分かると、次にどこへ当たればよいかの見当がつきます。",
  },
];

const checklist = [
  {
    h: "やってほしいことを一言で書けるか",
    b: "専門の言葉でなくてかまいません。「荒れているので見てほしい」でも、相手は次の質問を出せます。",
  },
  {
    h: "急ぎかどうかを書いたか",
    b: "期限の有無で、返ってくる提案が変わります。急ぎなら理由まで添えます。",
  },
  {
    h: "折り返しを受けられる時間を書いたか",
    b: "連絡がつかないまま数日が過ぎるのが、最も多い止まり方です。つながらない時間帯を先に伝えます。",
  },
  {
    h: "写真の送り先を確認したか",
    b: "現状の写真は最も効く材料です。受け取ってもらえる形式を最初に聞いておきます。",
  },
  {
    h: "送った日と相手を記録したか",
    b: "複数に出すと、どこに何を送ったか分からなくなります。日付と宛先だけでも残しておきます。",
  },
];

const faqs = [
  {
    q: "電話と入力フォーム、どちらで問い合わせるのがよいですか。",
    a: "急いでいる場合や、庭の状態を言葉で補いながら伝えたい場合は電話が向きます。内容を落ち着いて整理したい場合や、家族に相談しながら決めたい場合、やり取りを手元に残したい場合はフォームが向きます。電話で決めたことは、自分の側にも書き留めておくと後の確認が楽になります。",
  },
  {
    q: "問い合わせただけで契約になってしまうことはありますか。",
    a: "見積もりや相談の段階では、まだ依頼を確定していないのが通常です。ただし、いつの時点で依頼が成立するのかは相手によって違います。不安があれば「まだ検討段階です」と最初に伝えておくと行き違いを避けられます。支払いと契約が決まる時点については熊本のページで整理しています。",
  },
  {
    q: "返事が来ないときは、何日くらい待てばよいですか。",
    a: "一律の目安はありません。送った時点で自分の中で期限を決め、その日を過ぎたら催促するか次へ行く、と先に決めておくほうが動けます。催促するときは同じ文面を送り直すのではなく、写真を添える、希望日を絞るなど、相手が判断できる材料を足して送ります。",
  },
  {
    q: "静岡市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、静岡市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaShizuokaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "連絡手段ごとの向き不向きと、最初の問い合わせに入れておきたい内容を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "静岡" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          業者を探すところまでは進んだのに、問い合わせのボタンを押す手前で止まる。何を書けばよいのか分からない、電話で何を聞かれるのか分からない、しつこく営業されるのではないかと身構える。よくある止まり方です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          静岡で庭の手入れを頼む場合も、最初の一往復の出来で、その後の進み方が変わります。このページでは、連絡手段ごとの向き不向きと、最初に書いておくと話が早い内容、そして返事が来ないときの見方を整理します。
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

      <section id="shizuoka-first" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせのしかたで、返ってくるものが変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「庭の剪定をお願いしたいのですが」だけを送ると、返ってくるのは質問です。どこの、何の木を、何本、いつごろ、立ち会えるか。その質問に答えて、また返事を待つ。この往復が二回三回と重なると、問い合わせた側も相手も、それだけで数日を使います。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          逆に、最初の一通に必要な情報が入っていれば、返ってくるのは概算や日程の候補になります。内容の良し悪しではなく、情報が足りているかどうかで、返信の中身が変わります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            最初の一通で契約が決まるわけではありません。ここで目指すのは「相手が答えを出せる状態にすること」で、詳しく書きすぎて迷うくらいなら、次の見出しの項目だけを箇条書きで並べれば足ります。
          </p>
        </div>
      </section>

      <section id="shizuoka-channel" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          連絡手段は4つ、向いている場面が違う
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じサービスでも、複数の入口が用意されていることがあります。どれを選ぶかは好みでもありますが、状況によって向き不向きがあります。
        </p>
        <div className="space-y-4">
          {channels.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="shizuoka-write" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          最初の連絡に入れておきたい5つ
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          長文は要りません。次の5つが入っていれば、相手は次の一手を出せます。
        </p>
        <ol className="space-y-4">
          {firstMessage.map((x, i) => (
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
          写真と言葉で仕上がりのイメージまで渡す段階の詰め方は
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="shizuoka-noreply" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          返事が来ない・話が進まないときの見方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          返事がないことにも理由があります。落ち度を探すより、どこで止まっているのかを切り分けたほうが早く動きます。
        </p>
        <div className="space-y-4">
          {noReply.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          複数社に同時に当たるときの条件の揃え方と断り方は
          <Link href="/area/okayama/" className="text-primary underline underline-offset-2 mx-1">
            相見積もりの揃え方と断り方
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="shizuoka-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、最初のやり取りをどう始めるかという条件で見ると、次の3つは入口の形がそれぞれ違います。
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

      <section id="shizuoka-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="静岡" />
      </section>

      <section id="shizuoka-checklist" className="scroll-mt-20 mb-12">
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

      <section id="shizuoka-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="shizuoka" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/fukuoka/", label: "依頼内容の伝え方と仕上がりの共有" },
            { href: "/area/okayama/", label: "相見積もりの揃え方と断り方" },
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び分け" },
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
          書くことが決まったら、同じ文面をいくつかの窓口に送ってみてください。返信の速さと中身も判断材料になります。
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
