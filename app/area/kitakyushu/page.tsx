import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kitakyushu/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "北九州の造園・庭の手入れ業者の選び方｜日程の決め方と天候による順延";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の作業は屋外で行うため、予定した日に必ず実施できるとは限りません。北九州で庭の手入れを依頼する際に、日程が変動する理由と、順延やキャンセルの扱いの決め方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "日程が変動する理由と、順延・キャンセルの取り決め方という観点から、北九州での造園業者の選び方を整理しています。",
  },
};

const toc = [
  { id: "kitakyushu-point", label: "予定した日に必ず実施できるとは限りません" },
  { id: "kitakyushu-reasons", label: "日程が変動する4つの理由" },
  { id: "kitakyushu-rules", label: "順延とキャンセルの扱いを事前に決める" },
  { id: "kitakyushu-urgency", label: "待てる依頼と待てない依頼を区別する" },
  { id: "kitakyushu-pick", label: "この条件に適した3サービス" },
  { id: "kitakyushu-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kitakyushu-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kitakyushu-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["epark", "mitsumoa", "townlife"] as const;

const pickReasons: Record<string, string> = {
  epark:
    "「植木屋・造園業者・庭師」のカテゴリで剪定・草刈り・草取り・芝刈り・伐採・植栽などを依頼できるポータルで、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。業者ごとの営業時間が分かるため、連絡可能な時間帯を事前に把握したい場合に利用できます。全国47都道府県の業者を地域ごとに検索し、電話で予約する形式です。業者のページによっては、口コミの閲覧にログインが必要で、本文が表示されない場合があります。",
  mitsumoa:
    "条件を入力すると最大5件の見積もりが届き、依頼後は業者とチャットで直接打ち合わせができます。候補が複数ある状態であれば、第一希望の日程が埋まっていた場合にも次の候補へ移れます。日程のやり取りを文字で記録できる点も、順延の相談の際に有用です。実際の作業品質は見積もりを提示した業者により異なるため、口コミと見積もりの内容は個別にご確認ください。",
  townlife:
    "希望条件を入力すると、複数社からプラン・見積もりを無料で取り寄せられる、外構（エクステリア）専用の請求窓口です。届いた会社ごとに連絡の速さや対応に差があり、「資料が届かない」といった厳しい口コミもあります。一方で、返信の速さそのものを判断材料にすることもできます。日程を優先したい依頼では、最初のやり取りでの反応を見て候補を絞り込む使い方ができます。",
};

const reasons = [
  {
    h: "天候",
    b: "雨天時に脚立に登る作業は危険であり、濡れた枝葉は扱いも処分も負担が大きくなります。強風の日も、高所での作業は中止されます。屋外の作業である以上、天候は避けられない要因です。前日や当日の朝に判断されることが多く、依頼者側で調整できるものではありません。",
  },
  {
    h: "前の現場の作業が延長される",
    b: "庭の作業には、着手してみなければ分からない部分があります。想定より枝が多い、剪定した枝の量が見込みより多いといった場合、前の現場の作業が延長され、後の予定がずれます。一日に複数の現場を回る業者ほど、この影響を受けやすくなります。",
  },
  {
    h: "繁忙期と重なる",
    b: "庭の作業には適期があり、その時期に依頼が集中します。同じ作業でも、時期によって待ち期間が異なります。どの作業をいつ依頼するのが適しているかについては、札幌のページで年間計画として解説しています。",
  },
  {
    h: "現地で作業が増える",
    b: "見積もりの段階で把握できていなかった事項が、当日に判明することがあります。枯れた木が見つかる、抜根が必要と分かる、隣地に立ち入らなければ剪定できないと判明するなどの場合です。範囲が変われば当日中に完了せず、別日を改めて確保することになります。",
  },
];

const rulePoints = [
  {
    h: "雨天時に誰がいつ判断するか",
    b: "小雨であれば実施するのか、どの程度で中止とするのか、誰がいつまでに連絡するのかを決めておきます。この取り決めがないと、当日の朝に双方が相手からの連絡を待つことになります。「前日の夕方までに業者から連絡」といった形で決めておけば、当日の混乱を防げます。",
  },
  {
    h: "順延時の次の候補日",
    b: "順延した場合に、翌日とするのか、次の空き日まで待つのかを決めておきます。第二候補日まで事前に伝えておけば、順延の連絡がそのまま日程確定の連絡になります。この点を決めていないと、順延後に日程調整をやり直すことになります。",
  },
  {
    h: "キャンセルの条件",
    b: "依頼者の都合で取り消す場合、いつまでであれば影響がないのかは、申し込みの仕組みによって規定が異なります。料金が発生する条件の有無を含め、申し込む前に規定の記載箇所をご確認ください。金額に関わる事項は各社の規定によるため、本ページでは扱いません。",
  },
  {
    h: "立ち会いの予定との関係",
    b: "日程が変動すれば、立ち会いの予定も変動します。仕事を休んで予定を合わせている場合は、順延時の対応まで考えておく必要があります。立ち会いをせずに進める選択肢もあり、その手順は仙台のページで解説しています。",
  },
];

const urgencyPoints = [
  {
    h: "待てる依頼",
    b: "外観を整えたい、伸びてきたので剪定したいといった依頼は、多少の順延があっても支障はありません。むしろ時期を合わせたほうが、木にとって望ましい場合もあります。急ぎではない依頼であることを伝えておくと、業者も日程を組みやすくなります。",
  },
  {
    h: "期限がある依頼",
    b: "来客の予定がある、住宅を賃貸に出す予定がある、点検が入るといった場合は、完了を希望する期限を最初に伝えます。順延の可能性を見込み、期限より前に作業日を設定する方法もあります。",
  },
  {
    h: "安全に関わる依頼",
    b: "枝が道路にせり出している、傾いた木が住宅や塀に迫っているなど、放置すると危険な状態は、日程の優先順位が変わります。急ぐ理由と状態を具体的に伝えてください。24時間受付の窓口を持つサービスは、こうした場面で連絡が取りやすい点が利点です。",
  },
  {
    h: "天候そのものが理由の依頼",
    b: "台風や強風の前に対策をしたい、通過後に点検してほしいといった依頼は、依頼が集中する時期と重なります。事前の備えの考え方と通過後の点検方法は、別のページにまとめています。",
  },
];

const checklist = [
  {
    h: "第二候補日まで伝えてあるか",
    b: "候補日が一つのみでは、順延のたびに調整が必要です。候補日を二つ伝えておくだけで手間が減ります。",
  },
  {
    h: "雨天時の判断と連絡の取り決めを確認したか",
    b: "誰が、いつまでに、どのような方法で連絡するかを決めておくと、当日の朝に連絡を待つ状態を避けられます。",
  },
  {
    h: "キャンセル規定の記載箇所を確認したか",
    b: "規定の記載箇所を申し込む前に確認しておきます。仕組みによって扱いが異なります。",
  },
  {
    h: "期限がある場合は伝えたか",
    b: "完了を希望する期限がある場合は、最初に伝えておくと日程の組み方が変わります。",
  },
  {
    h: "当日に作業が増えた場合の進め方を決めたか",
    b: "その場で追加するのか、別日にするのか、判断をどこまで委ねるかを事前に決めておきます。",
  },
];

const faqs = [
  {
    q: "雨が降ったら作業は中止になりますか。",
    a: "作業の内容と雨の程度によります。濡れた状態での高所作業は危険なため、見合わせる判断がされることが一般的です。重要なのは中止になるかどうかより、誰がいつ判断して連絡するかを事前に決めておくことです。前日の夕方までに連絡する、といった形で取り決めておけば、当日の朝に連絡を待つ状態を避けられます。",
  },
  {
    q: "順延になった場合、料金は変わりますか。",
    a: "各社の規定によります。造園ナビでは掲載サービスごとの順延時の扱いを一次確認していないため、本ページでは金額に関わる事項は記載していません。申し込みの前に、規定の記載箇所をご確認ください。見積書に記載されている項目の読み方については、神戸のページで解説しています。",
  },
  {
    q: "急ぎで頼みたい場合はどうすればよいですか。",
    a: "急ぐ理由と現在の状態を具体的に伝えてください。枝が道路にせり出している、木が傾いているといった安全に関わる状態であれば、優先順位が変わる場合があります。掲載サービスの中には、コールセンターが24時間365日受け付けていると公表しているものがあります。ただし、受付の時間帯と実際に作業に訪問できる日は別の問題です。",
  },
  {
    q: "北九州市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、北九州市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKitakyushuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "日程が変動する理由と、順延・キャンセルの取り決め方をまとめています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "北九州" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          日程を決め、その日を空けて待つという前提は、屋外で行う庭の作業では成り立たないことがあります。
          雨が降れば中止となり、前の現場が延長されれば予定がずれ、繁忙期には当初から日程を確保できません。
          問題は日程が変動すること自体ではなく、変動した場合の扱いが決まっていないことです。本ページでは、北九州で庭の手入れを依頼する方に向けて、日程が変動する理由と、決めておくべき取り決めを整理します。
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

      <section id="kitakyushu-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          予定した日に必ず実施できるとは限りません
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          屋内の工事であれば天候は関係ありませんが、庭の作業は異なります。雨に濡れた枝は滑りやすく、脚立の足元はぬかるみ、剪定した枝は水を含んで重くなります。
          安全に作業を進められないと判断されれば、その日は実施されません。これは業者の都合というより、屋外作業の性質によるものです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          変動を前提に予定を組んでおけば、変動しても支障はありません。問題となるのは、日程を一つしか確保しておらず、その日のために仕事を休み、
          前日の夜まで連絡の有無が分からないという状態です。取り決めが一つあるだけで、この状況は防げます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            決めておくべき事項は三つです。雨天時に誰がいつ判断するか、順延した場合の次の候補日、依頼者から取り消す場合の条件です。
            いずれも、申し込む前に確認できる事項です。
          </p>
        </div>
      </section>

      <section id="kitakyushu-reasons" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          日程が変動する4つの理由
        </h2>
        <ol className="space-y-4">
          {reasons.map((r, i) => (
            <li key={r.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{r.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{r.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          このうち「現地で作業が増える」については、その場で範囲が変わるかどうかの判断の問題でもあります。依頼する範囲の決め方は
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            福岡のページ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kitakyushu-rules" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          順延とキャンセルの扱いを事前に決める
        </h2>
        <div className="space-y-4">
          {rulePoints.map((r) => (
            <div key={r.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{r.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{r.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kitakyushu-urgency" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          待てる依頼と待てない依頼を区別する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          すべての依頼が急ぎとは限りません。反対に、急ぐべき依頼を後回しにしていると、状況が悪化します。自分の依頼がどれに該当するかを区別しておくと、日程の相談を円滑に進められます。
        </p>
        <div className="space-y-4">
          {urgencyPoints.map((u) => (
            <div key={u.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{u.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{u.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          強風の前後に行うべき対策は
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          、年間を通じた作業計画は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="kitakyushu-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、日程のやり取りを早く進めたいという条件では、次の3サービスの連絡方法にそれぞれ特徴があります。
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

      <section id="kitakyushu-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="北九州" />
      </section>

      <section id="kitakyushu-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kitakyushu-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kitakyushu" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/storm-care/", label: "台風・強風に備える庭木の点検" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/guide/weed-control/", label: "庭の雑草対策" },
            { href: "/cost/pruning-price/", label: "剪定費用ガイド" },
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
          候補日を二つ用意し、雨天時の連絡の取り決めを確認しておくと、当日の混乱を防げます。
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
