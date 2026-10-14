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
    "庭の作業は屋外の仕事で、決めた日に必ずできるとは限りません。北九州で庭の手入れを頼むとき、日程が動く理由と、順延やキャンセルの扱いをどう決めておくのかを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "日程が動く理由と、順延・キャンセルの取り決め方から、北九州での造園業者の選び方を整理しました。",
  },
};

const toc = [
  { id: "kitakyushu-point", label: "決めた日に必ずできるとは限らない" },
  { id: "kitakyushu-reasons", label: "日程が動く4つの理由" },
  { id: "kitakyushu-rules", label: "順延とキャンセルの扱いを先に決める" },
  { id: "kitakyushu-urgency", label: "待てる依頼と、待てない依頼を分ける" },
  { id: "kitakyushu-pick", label: "この条件で見ておきたい3サービス" },
  { id: "kitakyushu-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kitakyushu-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kitakyushu-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["epark", "mitsumoa", "townlife"] as const;

const pickReasons: Record<string, string> = {
  epark:
    "「植木屋・造園業者・庭師」のカテゴリで剪定・草刈り・草取り・芝刈り・伐採・植栽などを依頼できるポータルで、各事業者ページに料金表・営業時間・対応エリア・お客さまの声が掲載されています。営業時間が事業者ごとに分かるため、いつ連絡が取れる相手なのかを先に把握したい場面で使えます。全国47都道府県の業者を地域ごとに検索して電話予約できる形です。事業者ページによっては口コミの閲覧にログインが必要で本文が表示されない場合があります。",
  mitsumoa:
    "条件を入力すると最大5件の見積もりが届き、依頼後は業者とチャットで直接打ち合わせができます。候補が複数手元にある状態は、第一希望の日が埋まっていたときにそのまま次へ移れるという意味を持ちます。日程のやり取りを文字で残せる点も、順延の相談をするときに効いてきます。実際の作業品質は届いた業者によるため、口コミと見積もり内容は個別に確認してください。",
  townlife:
    "希望条件を入力すると複数社からプラン・見積もりを無料で取り寄せられる、外構（エクステリア）専用の請求窓口です。届いた会社ごとに連絡の速さや対応に差があり、「資料が届かない」といった厳しい口コミもあります。裏を返せば、返信の速さそのものを判断材料にできるということでもあります。日程を優先したい依頼では、最初のやり取りの反応を見て絞り込む使い方ができます。",
};

const reasons = [
  {
    h: "天候",
    b: "雨のなかで脚立に登る作業は危険で、濡れた枝葉は扱いも処分も重くなります。強い風の日も、高いところでの作業は止まります。屋外の仕事である以上、天気は避けられない要因です。前日や当日朝に判断されることが多く、こちらで動かせる部分ではありません。",
  },
  {
    h: "前の現場が延びる",
    b: "庭の作業は、開けてみないと分からない部分があります。想定より枝が多い、切ったものの量が読みより増えた。そうなると前の現場が延び、後ろの予定がずれます。一日に複数件を回る組み方をしている相手ほど、この影響を受けやすくなります。",
  },
  {
    h: "混み合う時期に重なる",
    b: "庭の作業には手を入れるべき時期があり、その時期に依頼が集まります。同じ作業でも、時期によって待ちの長さが変わるということです。どの作業をいつ頼むのが適しているかという話は、札幌のページで年間の組み立てとして扱っています。",
  },
  {
    h: "現地で作業が増える",
    b: "見積もりの段階で見えていなかったものが、当日に出てくることがあります。枯れた木が見つかる、抜根が必要と分かる、隣地に入らないと切れないと判明する。範囲が変われば、その日に終わらず別日を取り直すことになります。",
  },
];

const rulePoints = [
  {
    h: "雨のときに誰がいつ判断するか",
    b: "小雨なら行うのか、どの程度で中止なのか。誰が、いつまでに連絡するのか。この取り決めがないと、当日の朝に双方が相手の連絡を待つことになります。「前日の夕方までに業者から連絡」といった形で決めておけば、当日の混乱はなくなります。",
  },
  {
    h: "順延したときの次の候補日",
    b: "延びたときに、いつになるのか。翌日なのか、次の空きまで待つのか。第二候補まで先に出しておけば、順延の連絡がそのまま日程確定の連絡になります。ここを決めていないと、延びたあとに日程調整をやり直すことになります。",
  },
  {
    h: "キャンセルの条件",
    b: "こちらの都合で取りやめる場合、いつまでなら影響がないのか。申し込みの仕組みによって規定は異なります。料金が発生する条件があるのかどうかを含め、申し込む前に規定の場所を確認してください。金額の話は各社の規定によるため、このページでは扱いません。",
  },
  {
    h: "立ち会いの予定との関係",
    b: "日程が動けば、立ち会いの予定も動きます。仕事を休んで合わせているなら、延びたときにどうするのかまで考えておく必要があります。立ち会えない形で進める選択肢もあり、その手順は仙台のページで整理しています。",
  },
];

const urgencyPoints = [
  {
    h: "待てる依頼",
    b: "見た目を整えたい、伸びてきたので切りたい。こうした依頼は、多少延びても困りません。むしろ時期を合わせたほうが木にとってよい場合もあります。急がない依頼であることを伝えておくと、相手も日程を組みやすくなります。",
  },
  {
    h: "期限がある依頼",
    b: "来客の予定がある、家を貸すことになっている、点検が入る。こうした場合は、いつまでに終わっていてほしいのかを最初に伝えます。順延の可能性を見込んで、期限より前に日を置くという組み方もできます。",
  },
  {
    h: "安全に関わる依頼",
    b: "枝が道路にせり出している、傾いた木が家や塀に迫っている。放置が危険な状態は、日程の優先順位が変わります。急ぎである理由と状態を具体的に伝えてください。24時間受付の窓口を持つサービスは、こうした場面で連絡の取りやすさが効いてきます。",
  },
  {
    h: "天候そのものが理由の依頼",
    b: "台風や強風の前に手を打ちたい、通過したあとに点検してほしい。この種の依頼は、依頼が集中するタイミングと重なります。備えの考え方と、通過後の見まわり方は別ページにまとめています。",
  },
];

const checklist = [
  {
    h: "第二候補日まで出してあるか",
    b: "一つの日しか出していないと、順延のたびに調整が要ります。候補を二つ渡しておくだけで手間が減ります。",
  },
  {
    h: "雨天時の判断と連絡の取り決めを聞いたか",
    b: "誰が、いつまでに、どうやって連絡するのか。当日の朝に待ち合うことがなくなります。",
  },
  {
    h: "キャンセル規定の場所を確認したか",
    b: "どこに書いてあるのかを申し込む前に見ておきます。仕組みによって扱いが違います。",
  },
  {
    h: "期限があるなら伝えたか",
    b: "いつまでに終わっていてほしいのか。あるなら最初に言っておけば、日程の組み方が変わります。",
  },
  {
    h: "当日に作業が増えた場合の進め方を決めたか",
    b: "その場で追加するのか、別日にするのか。判断をどこまで任せるかを先に決めておきます。",
  },
];

const faqs = [
  {
    q: "雨が降ったら作業は中止になりますか。",
    a: "作業の内容と雨の程度によります。濡れた状態での高所作業は危険なため、見合わせる判断が取られることが一般的です。重要なのは中止になるかどうかより、誰がいつ判断して連絡するかを先に決めておくことです。前日の夕方までに連絡、といった形で取り決めておけば、当日の朝に待ち合うことがなくなります。",
  },
  {
    q: "順延になった場合、料金は変わりますか。",
    a: "各社の規定によります。造園ナビでは掲載サービスごとの順延時の扱いを一次確認できていないため、このページでは金額に関わることは書きません。申し込みの前に、規定がどこに書かれているかを確認してください。見積書に書かれている項目の読み方については、神戸のページで整理しています。",
  },
  {
    q: "急ぎで頼みたい場合はどうすればよいですか。",
    a: "急ぐ理由と、現在の状態を具体的に伝えてください。枝が道路にせり出している、木が傾いているといった安全に関わる状態であれば、優先順位が変わることがあります。掲載サービスの中には、コールセンターが24時間365日受付していると公表しているところがあります。ただし受付の時間帯と、実際に作業に来られる日は別の話です。",
  },
  {
    q: "北九州市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、北九州市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "日程が動く理由と、順延・キャンセルの取り決め方をまとめました。",
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
          日程を決めて、その日を空けて待つ。庭の作業では、この前提が崩れることがあります。屋外の仕事だからです。
          雨が降れば止まり、前の現場が延びればずれ、混み合う時期には最初から日が取れません。
          問題は日程が動くこと自体ではなく、動いたときの扱いが決まっていないことです。北九州で庭の手入れを頼む人に向けて、このページでは日程が動く理由と、決めておくべき取り決めを整理します。
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
          決めた日に必ずできるとは限らない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          室内の工事なら、天気は関係ありません。庭の作業は違います。雨に濡れた枝は滑り、脚立の足元はぬかるみ、切ったものは水を含んで重くなります。
          安全に進められないと判断されれば、その日は動きません。これは相手の都合というより、屋外作業の性質です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          動くことを前提に組んでおけば、動いても困りません。困るのは、一つの日しか押さえておらず、その日のために仕事を休み、
          前日の夜まで連絡が来るかどうか分からない、という状態です。取り決めが一つあるだけで、この状況は起きなくなります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            決めておくのは三つです。雨のときに誰がいつ判断するか。延びたときの次の候補日。そして、こちらから取りやめる場合の条件。
            いずれも、申し込む前に聞けることばかりです。
          </p>
        </div>
      </section>

      <section id="kitakyushu-reasons" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          日程が動く4つの理由
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
          このうち「現地で作業が増える」については、その場で範囲が変わるかどうかの見立ての問題でもあります。何をどこまで頼むのかという線引きは
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            福岡のページ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kitakyushu-rules" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          順延とキャンセルの扱いを先に決める
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
          待てる依頼と、待てない依頼を分ける
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          すべての依頼が急ぎではありません。逆に、急ぐべき依頼を「そのうち」で流していると、状況が悪くなります。自分の依頼がどれにあたるかを分けておくと、日程の話が通じやすくなります。
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
          強い風の前後にやっておきたいことは
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          、年間を通じた作業の組み立ては
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="kitakyushu-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、日程のやり取りを早く進めたいという条件で見ると、次の3つは連絡の取り方に違いがあります。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
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
          候補日を二つ用意して、雨のときの連絡の取り決めを聞く。この二つを先にやっておくと、当日の朝が静かになります。
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
