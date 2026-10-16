import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/shizuoka/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "静岡の造園・庭の手入れ業者の選び方｜問い合わせ手段の選び方と最初のやり取り";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "電話、入力フォーム、チャット、料金表からの申し込みなど、どの手段で連絡するかによって得られる回答が変わります。静岡で庭の手入れを依頼する際の最初の連絡に記載すべき事項と、返信がない場合の判断の仕方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "問い合わせ手段の選び方と、最初のやり取りの組み立て方という観点から、静岡での業者選びを整理しています。",
  },
};

const toc = [
  { id: "shizuoka-first", label: "問い合わせの方法によって得られる回答が変わります" },
  { id: "shizuoka-channel", label: "4つの連絡手段とそれぞれに適した場面" },
  { id: "shizuoka-write", label: "最初の連絡に含めるべき5つの事項" },
  { id: "shizuoka-noreply", label: "返信がない・相談が進まない場合の判断" },
  { id: "shizuoka-pick", label: "この条件に適した3サービス" },
  { id: "shizuoka-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "shizuoka-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "shizuoka-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["epark", "kurashi-market", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから業者を探すことができ、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。電話で予約できる窓口のため、文字で伝えにくい状況を口頭で補足しながら進めたい場合に適しています。業者ごとに営業時間が掲載されているため、連絡すべき時間帯を事前に確認できます。",
  "kurashi-market":
    "作業内容ごとに料金が事前に表示され、見積もりを取らずに依頼内容を確定できます。最初のやり取りを省いて進められる形式で、依頼する作業が明確な場合は手間が少なくなります。完了後に口コミを投稿でき、損害賠償補償制度も設けられています。",
  "oniwa-madoguchi":
    "造園・剪定・伐採・草刈りなどの情報発信と、全国の業者を検索できる機能を持つ情報・比較サイトです。問い合わせの前に、どのような作業があり、どのような業者が候補になるかを確認する用途に適しています。運営元は庭の手入れ専門の全国チェーンも展開しています。",
};

const channels = [
  {
    h: "電話で相談する",
    b: "その場でやり取りできる点が利点です。庭の状態を言葉で補足しながら伝えられ、不明な点をすぐに確認できます。適さないのは、樹種や本数を依頼者自身が整理できていない場合であり、また話した内容が手元に残らない点も欠点です。電話で決めた内容は、後で依頼者側でも記録しておきます。掲載サービスの中には、コールセンターが24時間365日受け付けていると公表しているものがあります。",
  },
  {
    h: "入力フォームから送信する",
    b: "落ち着いて記載でき、送信した内容が依頼者側にも残ります。家族と相談しながら文面を作成する場合にも適しています。欠点は速さで、返信まで時間がかかる場合があります。急ぎの用件は、フォームのみに頼らないほうが安全です。",
  },
  {
    h: "チャットやメッセージでやり取りする",
    b: "文字が残る点はフォームと同じですが、そのまま何度もやり取りできる点が異なります。写真を添えながら段階的に条件を詰めていく進め方に適しています。掲載サービスの中には、チャットで業者と直接相談できる形式のものがあります。",
  },
  {
    h: "表示された料金から直接申し込む",
    b: "作業内容ごとに料金が事前に表示され、見積もりを取らずに依頼内容を確定できる形式です。最初のやり取りそのものが不要です。依頼する作業が明確で、現地確認なしで条件が決まる場合に適しています。",
  },
];

const firstMessage = [
  {
    h: "所在地をどこまで記載するか",
    b: "市区町村までで十分です。番地まで記載しなければ相談が進まないわけではなく、出張範囲に含まれるかどうかの判断には市区町村で足ります。戸建てか集合住宅か、専用庭か共用部かも一言添えると、回答が具体的になります。",
  },
  {
    h: "依頼内容を簡潔に記載する",
    b: "「木を剪定したい」「草を処理したい」「全体が荒れているので確認してほしい」といった表現で構いません。専門用語である必要はありません。樹種が分からなくても依頼はできます。不明な点は不明と明記するほうが、後の認識の相違を減らせます。",
  },
  {
    h: "急ぎかどうかとその理由",
    b: "「いつでもよい」のか「この日までに完了したい」のかを記載します。期限がある場合は理由も添えます。来客がある、隣家から指摘を受けている、売却の予定があるなど、理由が分かると、優先順位の判断や代替案の提示を受けられます。",
  },
  {
    h: "連絡可能な時間帯",
    b: "折り返しの電話に対応できない時間帯がある場合は、事前に記載します。連絡がつかないまま数日が経過するという停滞が、最も避けるべき状況です。電話よりメールを希望する場合も、その旨を記載しておきます。",
  },
  {
    h: "写真を送付できるかどうか",
    b: "現状の写真があると、相談が大幅に進みます。送付先があるか、どの形式で受け付けているかを最初に確認しておくと、次のやり取りで送付できます。",
  },
];

const noReply = [
  {
    h: "待つ日数を事前に決めておく",
    b: "送信した日に、何日まで待つかを決めておきます。決めていないと、待ち続けるか、すぐに断念するかのいずれかに偏ります。受付時間を公表しているサービスであれば、その時間帯に合わせて連絡するだけで結果が変わることもあります。",
  },
  {
    h: "催促は判断材料を追加して送る",
    b: "「その後いかがでしょうか」のみを送るより、写真を添える、希望日を絞る、範囲を縮小するなど、判断材料を追加して送るほうが返信を得やすくなります。業者の対応が止まっているのは、返信を忘れているのではなく、回答を出せずにいる場合があります。",
  },
  {
    h: "一社のみの返信を待たない",
    b: "最初の連絡は複数の業者に送っておくことが現実的です。返信が届いた順に進めればよく、返信がない業者は候補から外すだけです。同じ条件で複数社に依頼する場合の条件の揃え方は、別のページで解説しています。",
  },
  {
    h: "断られた場合は理由を一点確認する",
    b: "受注できないと回答された場合は、理由を一点だけ確認しておきます。距離、作業の種類、時期のいずれが理由かが分かれば、次にどこへ相談すればよいかの目安が立ちます。",
  },
];

const checklist = [
  {
    h: "依頼内容を簡潔に記載できるか",
    b: "専門用語である必要はありません。「荒れているので確認してほしい」という記載でも、業者は次の質問を提示できます。",
  },
  {
    h: "急ぎかどうかを記載したか",
    b: "期限の有無によって、提示される提案が変わります。急ぎの場合は理由まで添えます。",
  },
  {
    h: "折り返しに対応できる時間帯を記載したか",
    b: "連絡がつかないまま数日が経過することが、最も多い停滞の原因です。連絡がつかない時間帯を事前に伝えます。",
  },
  {
    h: "写真の送付先を確認したか",
    b: "現状の写真は最も有効な判断材料です。受け付けている形式を最初に確認しておきます。",
  },
  {
    h: "送信日と送信先を記録したか",
    b: "複数の業者に送ると、どこに何を送ったかが分からなくなります。日付と送信先だけでも記録しておきます。",
  },
];

const faqs = [
  {
    q: "電話と入力フォーム、どちらで問い合わせるのがよいですか。",
    a: "急いでいる場合や、庭の状態を言葉で補足しながら伝えたい場合は電話が適しています。内容を落ち着いて整理したい場合、家族と相談しながら決めたい場合、やり取りを手元に残したい場合はフォームが適しています。電話で決めた内容は、依頼者側でも記録しておくと、後の確認が容易になります。",
  },
  {
    q: "問い合わせただけで契約になってしまうことはありますか。",
    a: "見積もりや相談の段階では、まだ依頼は確定していないのが通常です。ただし、どの時点で依頼が成立するかは業者によって異なります。不安がある場合は「まだ検討段階です」と最初に伝えておくと、行き違いを避けられます。支払いと契約が成立する時点については、熊本のページで解説しています。",
  },
  {
    q: "返事が来ないときは、何日くらい待てばよいですか。",
    a: "一律の目安はありません。送信した時点で期限を決め、その日を過ぎたら催促するか次の候補に移ると事前に決めておくほうが、迷わずに対応できます。催促する際は同じ文面を再送するのではなく、写真を添える、希望日を絞るなど、業者が判断できる材料を追加して送ります。",
  },
  {
    q: "静岡市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、静岡市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "連絡手段ごとの特徴と、最初の問い合わせに含めるべき内容を整理しています。",
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
          業者を探す段階までは進んでも、問い合わせの直前で止まることがあります。何を記載すればよいか分からない、電話で何を質問されるか分からない、過度な営業を受けるのではないかといった不安が、よくある停滞の原因です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          静岡で庭の手入れを依頼する場合も、最初のやり取りの内容によって、その後の進み方が変わります。本ページでは、連絡手段ごとの特徴と、最初に記載しておくと相談が早く進む内容、返信がない場合の判断の仕方を整理します。
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
          問い合わせの方法によって得られる回答が変わります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「庭の剪定をお願いしたいのですが」とのみ送ると、返ってくるのは質問です。所在地、樹種、本数、時期、立ち会いの可否などの質問に回答し、再び返信を待ちます。このやり取りが二回、三回と重なると、依頼者も業者も数日を費やすことになります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          反対に、最初の連絡に必要な情報が含まれていれば、概算や日程の候補が提示されます。内容の良し悪しではなく、情報が十分かどうかによって、返信の内容が変わります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            最初の連絡で契約が決まるわけではありません。目指すのは「業者が回答を出せる状態にすること」であり、詳しく記載しすぎて迷うよりも、次の見出しの項目を箇条書きで記載すれば十分です。
          </p>
        </div>
      </section>

      <section id="shizuoka-channel" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          4つの連絡手段とそれぞれに適した場面
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じサービスでも、複数の窓口が用意されていることがあります。どれを選ぶかは好みによる面もありますが、状況によって適否があります。
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
          最初の連絡に含めるべき5つの事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          長文は必要ありません。次の5項目が含まれていれば、業者は次の対応を提示できます。
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
          写真と言葉で仕上がりのイメージまで伝える段階の進め方は
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="shizuoka-noreply" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          返信がない・相談が進まない場合の判断
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          返信がないことにも理由があります。原因を探すより、どこで止まっているのかを切り分けるほうが早く対応できます。
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
          複数社に同時に依頼する際の条件の揃え方と断り方は
          <Link href="/area/okayama/" className="text-primary underline underline-offset-2 mx-1">
            相見積もりの条件の揃え方と断り方
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="shizuoka-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、最初のやり取りの始め方という観点では、次の3サービスの窓口の形式がそれぞれ異なります。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/fukuoka/", label: "依頼内容の伝え方と仕上がりの共有" },
            { href: "/area/okayama/", label: "相見積もりの条件の揃え方と断り方" },
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び方" },
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
          記載する内容が決まったら、同じ文面を複数の窓口に送ることをおすすめします。返信の速さと内容も判断材料になります。
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
