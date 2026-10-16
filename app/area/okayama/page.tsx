import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/okayama/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "岡山の造園・庭の手入れ業者の選び方｜相見積もりの条件の揃え方と断り方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "複数社から見積もりを取得する際は、金額を比較する前に条件を揃える必要があります。依頼する社数、同じ文面の送付方法、提示された見積もりの比較方法、断り方について、岡山で庭の手入れを依頼する際の相見積もりの進め方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "複数社に依頼する際の条件の揃え方と断り方という観点から、岡山での業者選びを整理しています。",
  },
};

const toc = [
  { id: "okayama-basis", label: "比較が成立するのは条件を揃えた場合のみです" },
  { id: "okayama-howmany", label: "依頼する社数と選び方" },
  { id: "okayama-same", label: "すべての業者に同じ情報を伝える" },
  { id: "okayama-compare", label: "提示された見積もりを比較する" },
  { id: "okayama-decline", label: "断り方を事前に決めておく" },
  { id: "okayama-pick", label: "この条件に適した3サービス" },
  { id: "okayama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "okayama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "okayama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["mitsumoa", "townlife", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "mitsumoa":
    "「2分で依頼」で最大5件の見積もりを比較できる形式です。一度入力した条件が複数社に伝わるため、社ごとに書き分ける手間が発生しません。チャットで業者と直接相談でき、見積もり依頼は無料です。",
  "townlife":
    "希望条件を入力すると、複数社からプランと見積もりを無料で取り寄せられます。同じ条件から作成されたプランを比較できるため、金額だけでなく提案内容の差も比較しやすい構成です。プラン請求・見積もりは無料です。",
  "oniwa-madoguchi":
    "造園・剪定・伐採・草刈りなどの情報発信と、全国の業者を検索できる機能を持つ情報・比較サイトです。一括送付の形式に限らず、形態の異なる窓口を候補に加えたい場合の探し先になります。運営元は庭の手入れ専門の全国チェーンも展開しています。",
};

const howMany = [
  {
    h: "形態の異なる窓口を組み合わせる",
    b: "自社で施工する形式、業者を紹介する形式、料金が事前に表示されている形式、複数社からプランを取り寄せる形式があります。同じ形態の窓口にばかり依頼すると、回答も似たものになります。形態が異なると、同じ依頼に対する考え方の違いが分かります。",
  },
  {
    h: "現地確認の回数を把握する",
    b: "現地を確認しなければ作成できない見積もりの場合、社数の分だけ立ち会いの日が必要です。写真のみで概算を提示してもらえるかどうかを事前に確認しておくと、最初の絞り込みを立ち会いなしで進められます。",
  },
  {
    h: "対応できる社数にする",
    b: "問い合わせ、返信、日程調整、断りの連絡など、一社あたりに発生するやり取りは想定より多くなります。対応しきれずに放置すると、業者にも依頼者にも不利益が生じます。",
  },
  {
    h: "最初から一社に絞らない",
    b: "一社のみで進めると、その金額が高いのか妥当なのかを判断する手がかりがありません。比較対象があることで、確認する内容も具体的になります。",
  },
];

const sameCondition = [
  {
    h: "送付する文面を一つ作成する",
    b: "依頼内容、対象の本数や場所、仕上がりの希望、希望しない作業、希望時期、連絡可能な時間を一つの文面にまとめ、宛名のみ変えて送付します。社ごとに書き加えると、比較の前提が崩れます。",
  },
  {
    h: "写真は同じ組み合わせを使用する",
    b: "全体の写真と、対象の木の近接写真について、同じ枚数・同じ角度のものを全社に送付します。一社にのみ追加の写真を送ると、その社の見積もりのみ精度が変わります。",
  },
  {
    h: "予算を伝えるかどうかを決め、全社で統一する",
    b: "上限額を伝えると、その範囲での提案が提示されます。伝えない場合は、業者が必要と考える作業量での提案が提示されます。どちらにも意味がありますが、社によって変えると比較になりません。",
  },
  {
    h: "回答の期限を揃える",
    b: "「◯日までにご連絡いただけますと幸いです」と記載しておきます。期限が統一されていないと、早く回答した社と話が進み、後から届いた見積もりを確認する前に決めることになります。",
  },
];

const comparing = [
  {
    h: "含まれている範囲を先に比較する",
    b: "対象の木の本数、作業の種類、剪定した枝の持ち帰り、出張や駐車の扱いの四点を紙に並べて書き出すと、差がどこにあるかがすぐに分かります。金額を確認するのはその後です。",
  },
  {
    h: "記載されていない項目を確認する",
    b: "安く見える見積もりには、含まれていない項目がある場合があります。特に持ち帰りと処分は、金額に大きく影響します。「この見積もりに含まれていないものは何ですか」と確認すれば、明確になります。",
  },
  {
    h: "安い理由も高い理由も確認する",
    b: "どちらにも理由があります。範囲が狭いから安いのか、自社で施工するから安いのか、高いほうは手間をかける前提なのか、道具や人員が多いのかなど、理由を確認すると、金額そのものより業者の考え方が分かります。",
  },
  {
    h: "返信の速さと内容も判断材料にする",
    b: "同じ条件を送付しても、回答の精度と速さには差が生じます。これは依頼後のやり取りを予測する材料にもなります。金額のみで決めると、この情報を活用できません。",
  },
];

const declining = [
  {
    h: "断る時期を決めておく",
    b: "依頼先を決めた日のうちに連絡します。先延ばしにするほど伝えにくくなり、業者の予定も確保されたままになります。早めに断ることは、業者にとっても有益です。",
  },
  {
    h: "簡潔な連絡で構いません",
    b: "「今回は他社に依頼することにいたしました。お手数をおかけしました」という連絡で十分です。詳しい説明は不要で、過度に謝罪する必要もありません。見積もりの作成は業者の業務の一部です。",
  },
  {
    h: "理由は伝えられる範囲で構いません",
    b: "理由を尋ねられた場合は、伝えられる範囲で回答すれば十分です。他社の金額をそのまま伝える義務はありません。「予算の都合により」「日程が合わなかったため」といった回答でも、業者には十分伝わります。",
  },
  {
    h: "断った業者も今後の候補として残ります",
    b: "今回条件が合わなかっただけで、次の作業では条件が合う可能性があります。丁寧に断っておくと、次回も依頼しやすくなります。見積もりの内容も、次回の依頼の参考資料として保管しておきます。",
  },
];

const checklist = [
  {
    h: "送付する文面を一つ作成したか",
    b: "宛名のみ変えて送付できる形にします。社ごとに書き加えると、比較の前提が崩れます。",
  },
  {
    h: "写真を同じ組み合わせで送付したか",
    b: "枚数も角度も揃えます。一社にのみ追加すると、その社の見積もりのみ精度が変わります。",
  },
  {
    h: "予算を伝えるかどうかを統一したか",
    b: "伝えるかどうかは自由ですが、社によって変えると比較できなくなります。",
  },
  {
    h: "回答の期限を揃えたか",
    b: "先に届いた見積もりで決めてしまわないよう、判断する日を依頼者側で決めておきます。",
  },
  {
    h: "断りの連絡まで予定に入れたか",
    b: "依頼先を決めた日のうちに連絡します。簡潔で構いません。放置することが最も望ましくない対応です。",
  },
];

const faqs = [
  {
    q: "相見積もりであることを、相手に伝えたほうがよいですか。",
    a: "伝えても問題ありません。複数社から見積もりを取得すること自体は一般的な進め方です。伝えることで、含まれる範囲を明示した見積もりが提示されやすくなる面もあります。一方で、他社の金額を伝えて値下げを求める方法は、条件の比較という目的から外れます。",
  },
  {
    q: "予算を先に言うと、その額に合わせて高くされませんか。",
    a: "上限額を伝えると、その範囲で組み立てた提案が提示されます。気になる場合は、上限額だけでなく「優先してほしい作業」と「削減してよい作業」を添えて伝えると、範囲の調整として扱われます。判断は提示された内訳を確認してから行い、何が含まれていて何が含まれていないかを確認すれば比較は可能です。",
  },
  {
    q: "断るときに理由を聞かれたら、そのまま伝えてよいですか。",
    a: "伝えられる範囲で回答すれば十分です。他社の金額をそのまま伝える義務はありません。「予算の都合により」「日程が合わなかったため」といった回答で構いません。断ったからといって次回依頼できなくなるわけではないため、早めに簡潔に連絡することが、双方にとって望ましい形です。",
  },
  {
    q: "岡山市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、岡山市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaOkayamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "相見積もりを取得する際の社数の決め方、同じ条件の伝え方、比較の方法、断り方を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "岡山" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          複数社から見積もりを取得することは、適切な進め方とされています。しかし、実際に行うと、届いた三通の内容が統一されておらず、どれと比較すればよいか分からないということが起こります。一社は木の本数、一社は作業日数、一社は「一式」で記載されている場合、金額の大小に意味はありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          岡山市内の住宅の庭で見積もりを取得する場合も同様です。本ページでは、比較が成立する状態をどのように作るか、選ばなかった業者にどのように断るかまでを整理します。
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

      <section id="okayama-basis" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          比較が成立するのは条件を揃えた場合のみです
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりの金額は、作業量と含まれている範囲で決まります。依頼者が伝えた条件が社ごとに異なれば、提示される金額も異なるのは当然です。安い見積もりが実際に安いのか、範囲が狭いだけなのかは、条件が揃っていない限り判断できません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          揃えるのは金額ではなく、依頼者から伝える情報です。同じ写真、同じ本数、同じ希望、同じ期限を全社に伝えれば、提示された見積もりの差がそのまま業者の差になります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            手間をかける価値があるのは、最初の文面を作成する段階です。一度作成すれば、後は同じ文面を送付するだけです。社ごとに書き分けると、比較の前提が崩れます。
          </p>
        </div>
      </section>

      <section id="okayama-howmany" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          依頼する社数と選び方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          社数は多ければよいというものではありません。依頼者側にも対応の時間が発生します。
        </p>
        <div className="space-y-4">
          {howMany.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="okayama-same" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          すべての業者に同じ情報を伝える
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          送付する資料をすべて揃えてから、送付を始めます。
        </p>
        <ol className="space-y-4">
          {sameCondition.map((x, i) => (
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
          仕上がりの希望を言葉で伝える方法は
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="okayama-compare" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          提示された見積もりを比較する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          金額は最後に確認します。先に確認するのは、何が含まれているかです。
        </p>
        <div className="space-y-4">
          {comparing.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          一通の見積書の読み方は
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="okayama-decline" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          断り方を事前に決めておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          相見積もりを取得すると、断りの連絡が必ず発生します。この点を決めずに始めると、断りにくさから連絡を放置し、次回の依頼で相見積もりを避けるようになりがちです。
        </p>
        <div className="space-y-4">
          {declining.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="okayama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、同じ条件を複数社に伝えるという条件では、次の3サービスの送付の形式がそれぞれ異なります。
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

      <section id="okayama-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="岡山" />
      </section>

      <section id="okayama-checklist" className="scroll-mt-20 mb-12">
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

      <section id="okayama-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="okayama" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/fukuoka/", label: "依頼内容の伝え方と仕上がりの共有" },
            { href: "/cost/price/", label: "庭工事の料金相場" },
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
          送付する文面が完成したら、形態の異なる窓口を組み合わせて送付することをおすすめします。提示された見積もりの差が判断材料になります。
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
