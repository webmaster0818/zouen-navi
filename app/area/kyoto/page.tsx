import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kyoto/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "京都の造園・庭の手入れ業者の選び方｜仕上がりの方針と継続管理";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れは一度で終わらず、同じ庭に毎年手が入ります。京都で庭を長く保つために、樹形の方針をどう決め、同じ基準で続けて任せるにはどんな条件が要るのかを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "樹形の方針の決め方と、同じ基準で継続して任せるための条件から、京都での造園業者の選び方を整理しました。",
  },
};

const toc = [
  { id: "kyoto-point", label: "庭の手入れは一度きりの工事ではない" },
  { id: "kyoto-policy", label: "仕上がりの方針を決める3つの軸" },
  { id: "kyoto-continue", label: "同じ基準で続けて任せるための条件" },
  { id: "kyoto-record", label: "引き継ぎのための記録を残す" },
  { id: "kyoto-pick", label: "この条件で見ておきたい3サービス" },
  { id: "kyoto-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kyoto-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kyoto-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "houzz", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "庭木1本の剪定から年間管理まで扱う庭手入れ専門のチェーンで、完全自店舗施工を掲げています。公式では庭師経験の長いスタッフが大半を占めること、継続して利用する人の割合が高いことを自社調べとして公表しています。続けて任せることを前提に相談したいときの候補です。ただし全国対応をうたう一方で公式に列挙される都道府県は限られるため、対象かどうかは確認が必要です。",
  houzz:
    "造園・ガーデンデザイナーやエクステリアの専門家を地域・サービス別に検索でき、施工事例の写真と星評価レビューを確認できます。どんな庭に育てていきたいのかという方向性を、写真を介して共有したい場面で使えます。掲載の中心はデザインを担う専門家のため、手入れ中心の依頼は対応可否を確認してください。",
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった庭まわりの情報を発信しつつ、全国の造園・園芸・外構業者を検索できる情報・比較サイトです。運営は庭手入れの全国チェーンも展開しています。依頼先を決める前に、作業の考え方そのものを調べておきたいときの入口になります。",
};

const policyAxes = [
  {
    h: "自然な樹形を保つのか、形を作るのか",
    b: "同じ木でも、枝ぶりを活かして透かしていく手入れと、輪郭を決めて刈り込む手入れでは、目指す形が違います。途中で方針が入れ替わると、木は数年かけてちぐはぐな姿になります。どちらを望むのかは、最初の相談で伝えておきたい部分です。",
  },
  {
    h: "大きさをどこで止めるのか",
    b: "木は放っておけば大きくなります。今の高さを保ち続けるのか、少しずつ小さくしていくのか、それとも伸ばしたいのか。止めたい大きさが決まっていれば、毎年の作業量も落ち着きます。決めずにいると、手に負えなくなってから大きく切ることになり、樹形が崩れます。",
  },
  {
    h: "花や実をどう扱うのか",
    b: "花を咲かせる木は、切る時期によって翌年の花付きが変わります。花を優先するのか、大きさを抑えることを優先するのかで、手を入れる時期そのものが動きます。木ごとの適期は個別に違うため、庭全体で一度に決められるものではありません。",
  },
];

const continuePoints = [
  {
    h: "同じ担当に続けて頼めるか",
    b: "前回どう切ったかを知っている人が来れば、説明の手間はほとんど要りません。全国チェーンでも紹介型でも、次回に同じ担当を指名できるかどうかは窓口によって扱いが違います。継続を前提にするなら、最初に聞いておく項目です。",
  },
  {
    h: "年間の管理として組めるか",
    b: "その都度依頼する形と、年間を通じた管理として組む形があります。後者であれば、いつどの作業を行うかが先に決まるため、時期を逃しにくくなります。庭木の作業は適期が限られるものが多く、予定として押さえられることには意味があります。",
  },
  {
    h: "方針が書面や記録に残るか",
    b: "口頭で伝えた方針は、担当が変われば消えます。仕上がりの方針を書面や写真として残してもらえるか、あるいは自分で残して次回に渡せるか。記録があれば、相手が変わっても同じ庭として引き継げます。",
  },
  {
    h: "途中で方針を変えられるか",
    b: "家族構成が変わる、日当たりが変わる、手入れに割ける時間が減る。庭の方針は途中で変わって構いません。変えるときに、どの木からどう変えていくかを相談できる相手かどうかが、長く続けるうえでの分かれ目になります。",
  },
];

const recordItems = [
  {
    h: "作業した日と、行った内容",
    b: "いつ、どの木に、どんな手を入れたか。これが分かるだけで、次の時期の判断がしやすくなります。",
  },
  {
    h: "同じ位置から撮った写真",
    b: "毎回同じ場所から撮っておくと、木がどう変化しているかが分かります。大きくしたくないと言い続けているのに少しずつ伸びている、といったずれにも気づけます。",
  },
  {
    h: "伝えた方針と、応じてもらえたこと",
    b: "何を頼み、どう返ってきたか。相手が変わったときに、この記録がそのまま引き継ぎ資料になります。",
  },
  {
    h: "木ごとの気になる点",
    b: "枯れ込みが出ている、葉の色が例年と違う、虫が付いた。気づいたことを書き留めておくと、次に見てもらうときの相談が具体的になります。",
  },
];

const checklist = [
  {
    h: "続けて頼む前提かどうかを伝えたか",
    b: "一度きりの依頼と、来年以降も続ける依頼では、提案の内容が変わります。続ける前提であることは最初に伝えます。",
  },
  {
    h: "止めたい大きさを言えるか",
    b: "今の高さを保ちたいのか、小さくしたいのか。方針が言葉になっていれば、毎年の作業がぶれません。",
  },
  {
    h: "同じ担当を指名できるか聞いたか",
    b: "窓口によって扱いが違います。継続を重視するなら、依頼を決める前に確認しておく項目です。",
  },
  {
    h: "年間の管理として相談できるか",
    b: "時期の決まった作業をまとめて組めるかどうか。予定として押さえられれば、適期を逃しにくくなります。",
  },
  {
    h: "記録を残す形を決めたか",
    b: "写真とメモだけでも構いません。次に頼むとき、自分で説明できる材料が手元に残ります。",
  },
];

const faqs = [
  {
    q: "毎年同じ業者に頼んだほうがよいのでしょうか。",
    a: "前回の作業を知っている人が来るほうが、方針は保たれやすくなります。ただし同じ相手に頼み続けることが目的ではありません。記録が残っていれば、相手が変わっても方針は引き継げます。大切なのは、庭をどうしたいかが言葉と記録になっていることです。",
  },
  {
    q: "和風の庭の手入れは、専門の業者でないと難しいですか。",
    a: "様式を保った手入れを望む場合は、どういう庭にしたいのかを具体的に伝え、近い施工の事例を見せてもらうのが確実です。事例写真を確認できるサービスを使うと、言葉で説明しきれない部分を補えます。庭の様式そのものについては、和庭園の成り立ちを扱ったページも参考にしてください。",
  },
  {
    q: "途中で方針を変えても大丈夫ですか。",
    a: "変えて構いませんが、木の姿は一度で切り替わりません。大きさを抑える方向に変える場合は特に、数年かけて少しずつ移すほうが木への負担が小さくなります。変えたい理由と、どのくらいの期間で移したいかを伝えて相談してください。",
  },
  {
    q: "京都市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、京都市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKyotoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "樹形の方針の決め方と、同じ基準で継続して任せるための条件をまとめました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "京都" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れは、一度頼んで終わりになりません。同じ庭に来年も手が入り、その次の年も入ります。
          だからこそ、一回ごとの仕上がりよりも、どういう庭にしていきたいのかという方針のほうが結果を左右します。方針が定まらないまま毎回違う切られ方をすれば、木は年ごとに違う姿になっていきます。
          京都で庭を長く保ちたい人に向けて、このページでは方針の決め方と、それを続けるための条件を整理します。
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

      <section id="kyoto-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭の手入れは一度きりの工事ではない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          外構の工事なら、出来上がった時点が完成です。庭木は違います。切った後も伸び続け、切り方の積み重ねがそのまま姿になります。
          去年どう切ったかが今年の枝の出方を決め、今年の判断が来年の形を決める。手入れとは、そういう連続した作業です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この前提に立つと、業者選びで見るべきものが変わります。一回の仕上がりの良し悪しだけでなく、来年も同じ考え方で続けられるかどうか。
          そのためには、依頼する側にも「こうしたい」という軸が要ります。軸がなければ、相手が変わるたびに庭の方向も変わってしまいます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            専門的な言葉で方針を語る必要はありません。「この高さより大きくしたくない」「自然な形のままがよい」「春の花は残したい」。
            この程度の言葉でも、続けて伝えれば十分に方針として機能します。
          </p>
        </div>
      </section>

      <section id="kyoto-policy" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          仕上がりの方針を決める3つの軸
        </h2>
        <div className="space-y-4">
          {policyAxes.map((a, i) => (
            <div key={a.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
                <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{a.h}</span>
              </h3>
              <p className="text-[15px] leading-8 text-text-secondary">{a.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          木ごとの適期の考え方は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定費用と最適な時期
          </Link>
          、庭全体の年間の流れは
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="kyoto-continue" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          同じ基準で続けて任せるための条件
        </h2>
        <div className="space-y-4">
          {continuePoints.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kyoto-record" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          引き継ぎのための記録を残す
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          記録は業者のためではなく、依頼する側が方針を保つための道具です。手元にあれば、相手が変わっても同じ説明ができます。
          残す項目は多くありません。
        </p>
        <ol className="space-y-4">
          {recordItems.map((r, i) => (
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
      </section>

      <section id="kyoto-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、方針を共有して続けて任せたいという条件で見ると、次の3つは相談の材料が揃えやすい構成です。
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

      <section id="kyoto-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="京都" />
      </section>

      <section id="kyoto-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kyoto-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kyoto" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/japanese-garden/", label: "和庭園の作り方" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/plant/low-maintenance/", label: "手入れが楽な庭木おすすめ" },
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
          方針が決まったら、それを続けて任せられる相手かどうかという目で各サービスを見てみてください。
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
