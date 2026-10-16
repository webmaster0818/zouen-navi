import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nagasaki/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "長崎の造園・庭の手入れ業者の選び方｜口コミと実績の読み方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "口コミから判断できることと、判断できないこと、星の数より確認すべき箇所、件数が少ない場合の見方、施工事例の写真で確認すべき点、自己申告の情報と第三者が確認できる情報の違いについて、長崎で庭の手入れを依頼する際の評判情報の読み方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "口コミと施工事例を何の根拠として読むかという観点から、長崎での業者選びを整理しています。",
  },
};

const toc = [
  { id: "nagasaki-basis", label: "「評判がよい」ことは何の根拠になるか" },
  { id: "nagasaki-answer", label: "口コミから判断できること、判断できないこと" },
  { id: "nagasaki-read", label: "星の数より確認すべき箇所" },
  { id: "nagasaki-photo", label: "施工事例の写真で確認すべき点" },
  { id: "nagasaki-claim", label: "自己申告の情報と第三者が確認できる情報" },
  { id: "nagasaki-pick", label: "この条件に適した3サービス" },
  { id: "nagasaki-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nagasaki-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nagasaki-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["epark", "oniwa-110", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから業者を探すことができ、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。利用者の声が業者ごとに分かれて掲載されているため、どの業者に対する評価かを把握しやすい構成です。運営は株式会社REsta（BEST株式会社の子会社）です。",
  "oniwa-110":
    "全国の加盟店を紹介・手配する形式で、草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽などに対応しています。窓口と実際に作業する加盟店が分かれる形態のため、評価の対象がどちらであるかを意識して読む必要があります。運営は東証上場のシェアリングテクノロジー株式会社（証券コード3989）で、請負賠償保険に加入しているとされています。",
  "mitsumoa":
    "条件を入力すると複数の業者から見積もりが届き、費用・口コミ・評判を比較して選べます。依頼後は業者とチャットで打ち合わせができるため、掲載されている評価のみで決めず、実際にやり取りを行ってから判断しやすくなります。",
};

const answerItems = [
  {
    h: "判断できること：連絡のやり取りの状況",
    b: "返信までの時間、質問に回答があったか、説明が分かりやすかったかといった点は、誰が依頼しても同様に経験する部分であるため、他の利用者の記述がそのまま参考になります。複数の投稿で同じ傾向が記載されていれば、一定程度信頼できます。",
  },
  {
    h: "判断できること：時間の厳守と片づけ",
    b: "約束の時間に訪問したか、作業後に剪定した枝や葉が残っていなかったか、近隣への挨拶があったかといった点は、庭の条件に左右されにくく、投稿者の好みも反映されにくいため、口コミの中では信頼度が高い情報です。",
  },
  {
    h: "判断できないこと：自分の庭で同じ結果になるか",
    b: "庭の広さ、木の種類と大きさ、隣家との距離、搬出経路など、条件が異なれば作業の難易度も所要時間も変わります。「丁寧で早かった」という投稿は、その投稿者の庭についての記録であり、依頼者の庭での見通しにはなりません。",
  },
  {
    h: "判断できないこと：仕上がりの好みと金額の妥当性",
    b: "刈り込みの強さや形の好みは人によって異なり、「きれいになった」がどの状態を指すのかは投稿からは読み取れません。金額についても、作業範囲が分からないまま高い・安いを比較しても意味がありません。費用の見方は料金のページで解説しています。",
  },
];

const readPoints = [
  {
    h: "低評価の投稿は内容で区別する",
    b: "低い評価が付いていること自体より、何について記載されているかを確認します。連絡が取れなかった、時間どおりに来なかった、説明と異なっていたという指摘は、条件の異なる庭でも起こり得る問題です。一方、仕上がりの好みに関する不満は、投稿者の期待と合わなかったという内容であり、他の利用者には当てはまりません。",
  },
  {
    h: "指摘への返答の内容を確認する",
    b: "低評価に返答が付いている場合、その記載内容に業者の姿勢が表れます。事実関係を説明しているのか、投稿者を非難しているのか、何をどのように改善したかが記載されているのかを確認します。返答がないこと自体は評価を下げる材料にはなりませんが、記載されている場合は確認する価値があります。",
  },
  {
    h: "同じ指摘が繰り返されているかを確認する",
    b: "一件のみの不満は、相性や行き違いの可能性があります。同じ内容の指摘が別々の投稿者から繰り返し出ている場合は、業者の運営側の問題である可能性が高くなります。これは星の平均値を見ても判断できません。",
  },
  {
    h: "件数が少ない場合は平均値に頼らない",
    b: "投稿が数件しかない場合、平均値はほとんど意味を持ちません。件数が少ない場合は平均値を見ずに、一件ずつ本文を読み、自分の依頼に近い内容があるかどうかを確認するほうが実用的です。新規登録の業者や、地域によっては件数が集まらないこともあります。",
  },
];

const photoPoints = [
  {
    h: "自分の庭と条件が近いか",
    b: "見栄えのよい事例は目を引きますが、広い敷地の庭と、隣家が迫った狭い庭では作業内容が大きく異なります。木の大きさ、地面の状態、周囲との距離などについて、自分の庭に近い条件の事例があるかどうかを確認します。",
  },
  {
    h: "作業前と作業後の写真が揃っているか",
    b: "仕上がりの写真のみでは、どの程度の作業を行った結果かが分かりません。作業前の写真があれば、何をどの程度変えたのかを読み取れます。作業前の写真がない事例ばかりであれば、仕上がりの水準は分かっても作業量は分かりません。",
  },
  {
    h: "撮影時期が分かるか",
    b: "剪定直後と、そこから数か月経過した状態では見え方が異なります。庭木は伸びるため、直後の写真のみを基準にすると、日常的な見え方と相違が生じます。季節が記載されているかどうかも確認しておきます。",
  },
  {
    h: "写っていない部分を考慮する",
    b: "写真は見せたい角度で撮影されています。切り口の処理、足元の片づけ、隣地との境界付近は写っていないことが多い部分です。気になる場合は、問い合わせの際に条件の近い事例をさらに見せてもらえるか確認する方法があります。",
  },
];

const claimPoints = [
  {
    h: "「実績◯年」「◯件」は自己申告として読む",
    b: "こうした数値は各社が自社で公表しているものであり、第三者が検証したものではありません。虚偽と判断する理由はありませんが、判断の決め手にはなりません。自社調べと記載されている場合は、その但し書きも含めて読みます。",
  },
  {
    h: "外部から確認できる情報を重視する",
    b: "運営会社の名称、所在地、会社としての許可や登録の有無、作業者の資格は、公開情報で確認できます。評判の良し悪しよりも、こちらのほうが後から検証できる材料です。確認方法は千葉のページで解説しています。",
  },
  {
    h: "評価の対象が窓口か施工者かを確認する",
    b: "造園ナビに掲載しているサービスにも、自社で施工する形態と、加盟店や提携会社を紹介する形態の両方があります。紹介型では、窓口の対応が丁寧であっても、実際に作業を行うのは別の会社です。掲載されている評価がどちらに対するものかを区別して読まないと、期待と結果に相違が生じます。運営形態の違いは名古屋のページで解説しています。",
  },
  {
    h: "最終的には実際にやり取りして判断する",
    b: "説明の仕方が自分に合うか、依頼者の条件を聞き取ってくれるか、回答しにくい事項を曖昧にせず説明するかといった点は、掲載された評価からは読み取れず、実際に問い合わせて初めて分かります。評判を読む作業は候補を絞るためのものであり、依頼先を決定するためのものではありません。",
  },
];

const checklist = [
  {
    h: "自分の依頼に近い投稿を確認したか",
    b: "平均の星ではなく、庭の条件や作業の種類が近い投稿があるかどうかを確認します。",
  },
  {
    h: "低評価の内容を読んだか",
    b: "何について記載されているか、同じ指摘が繰り返されているかを確認します。",
  },
  {
    h: "件数が少ない業者を数値のみで除外していないか",
    b: "投稿が数件であれば平均値は参考になりません。本文を読んで判断します。",
  },
  {
    h: "自己申告の数値と確認できる情報を区別したか",
    b: "実績や件数は各社の公表値です。会社の登録や資格は外部から確認できます。",
  },
  {
    h: "評価の対象が窓口か施工者かを確認したか",
    b: "紹介型では、掲載されている評価の対象と実際に作業する業者が異なることがあります。",
  },
];

const faqs = [
  {
    q: "口コミの件数が少ない業者は避けたほうがよいですか。",
    a: "件数のみを理由に除外する必要はありません。投稿が集まるかどうかは、そのサービスに口コミの仕組みがあるか、開業からの期間、地域での利用の多さなど、作業の質とは別の事情に左右されます。件数が少ない場合は平均値を見ずに、一件ずつ本文を読み、自分の依頼に近い内容があるかをご確認ください。そのうえで、会社情報や資格など、外部から確認できる材料で補います。",
  },
  {
    q: "評価が高いのに、依頼してみると印象が違いました。なぜですか。",
    a: "口コミから判断できるのは、連絡のやり取り、時間の厳守、片づけといった、庭の条件に左右されにくい部分です。仕上がりの好みや、自分の庭で同じ結果になるかどうかは、他の利用者の投稿からは読み取れません。また、窓口と実際に作業する会社が分かれている場合、評価の対象が窓口であったということもあります。問い合わせの段階で、誰が作業を担当するのかを確認しておくと、相違を小さくできます。",
  },
  {
    q: "施工事例の写真は、どこまで信じてよいですか。",
    a: "写真そのものを疑うというより、写っていない部分を意識して確認します。作業前と作業後が揃っているか、自分の庭と条件が近いか、撮影時期が分かるか。この三点が揃っている事例は参考にする価値があります。仕上がりの写真のみが掲載されている場合、水準は分かっても作業量は分かりません。気になる条件があれば、問い合わせの際に近い事例を見せてもらえるかご確認ください。",
  },
  {
    q: "長崎市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、長崎市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaNagasakiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "口コミと施工事例、自己申告の実績を、それぞれ何の根拠として読めるのかを整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "長崎" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れの依頼先を探す際、多くの方が最初に確認するのが評価の星と、掲載されている施工事例です。しかし、星の評価が高い業者に依頼しても、想定と異なる結果になることがあります。評価そのものが誤っていたというより、その数値が何を表しているのかを取り違えている場合があります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          長崎市内の住宅の庭を依頼する場合も同様です。口コミには判断できることとできないことがあり、写真には写っている部分と写っていない部分があります。本ページでは、評判の情報を何の根拠として使えるのかを区別し、どの箇所を読むと判断に役立つかを整理します。
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

      <section id="nagasaki-basis" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          「評判がよい」ことは何の根拠になるか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の作業は、同じ会社が同じ方法で行っても、庭の条件によって結果の見え方が変わります。木の大きさ、隣家との距離、搬出経路、依頼者の希望などが異なるためです。他の利用者の投稿は、その利用者の庭とその利用者の期待を前提とした記録です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          ただし、読む意味がないわけではありません。庭の条件に左右されにくい部分については、他の利用者の経験がそのまま参考になります。参考にできる部分とできない部分を区別しておくと、評判の確認にかかる時間が短くなり、判断も安定します。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            造園ナビでも掲載サービスごとに
            <Link href="/review/" className="text-primary underline underline-offset-2 mx-1">
              口コミ・評判のまとめ
            </Link>
            を掲載していますが、これは候補を絞るための材料であり、最終的な決め手として使用するものではありません。以下では、どの情報が何の根拠になるのかを順に解説します。
          </p>
        </div>
      </section>

      <section id="nagasaki-answer" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          口コミから判断できること、判断できないこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ投稿の中に、参考にできる記述と、参考にならない記述が混在しています。
        </p>
        <div className="space-y-4">
          {answerItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          金額の妥当性を判断する手順は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          、書面の確認箇所は
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="nagasaki-read" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          星の数より確認すべき箇所
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          平均値は比較が速い一方で、内容の情報が失われています。確認する箇所を決めておくと、件数が多くても短時間で確認できます。
        </p>
        <ol className="space-y-4">
          {readPoints.map((x, i) => (
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
          造園ナビが各サービスの公開情報を確認してまとめたものは
          <Link href="/review/" className="text-primary underline underline-offset-2 mx-1">
            掲載サービスの口コミ・評判まとめ
          </Link>
          、特徴を一覧で比較したものは
          <Link href="/ranking/" className="text-primary underline underline-offset-2 mx-1">
            造園・庭師業者ランキング
          </Link>
          に掲載しています。いずれも各社の公表内容にもとづいたもので、市区町村単位の対応可否は含まれていません。
        </p>
      </section>

      <section id="nagasaki-photo" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          施工事例の写真で確認すべき点
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          写真は文章より早く情報を伝えられる一方で、見る側が推測で補ってしまう部分が多くなります。
        </p>
        <div className="space-y-4">
          {photoPoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          自分の庭の写真を送って状況を伝える方法は
          <Link href="/area/funabashi/" className="text-primary underline underline-offset-2 mx-1">
            現地調査の前に写真で状況を伝える方法
          </Link>
          、仕上がりのイメージの共有方法は
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="nagasaki-claim" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自己申告の情報と第三者が確認できる情報
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          サイトに掲載されている情報は、出典によって確認できる度合いが異なります。同じ画面に掲載されていても、同じ重みでは扱えません。
        </p>
        <div className="space-y-4">
          {claimPoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          資格と許可の確認方法は
          <Link href="/area/chiba/" className="text-primary underline underline-offset-2 mx-1">
            資格と許可の確認方法
          </Link>
          、自社施工型と紹介型の違いは
          <Link href="/area/nagoya/" className="text-primary underline underline-offset-2 mx-1">
            自社施工型と紹介型の見分け方
          </Link>
          で解説しています。造園ナビにおける掲載情報の扱いは
          <Link href="/content-policy/" className="text-primary underline underline-offset-2 mx-1">
            記事の制作ポリシー
          </Link>
          に記載しています。
        </p>
      </section>

      <section id="nagasaki-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、評価や利用者の声を確認しながら候補を絞りたいという条件では、次の3サービスの情報の掲載方法にそれぞれ特徴があります。
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

      <section id="nagasaki-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。運営会社の名称と対応エリアは、評価の高低とは別に、外部から確認できる情報に該当します。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="長崎" />
      </section>

      <section id="nagasaki-checklist" className="scroll-mt-20 mb-12">
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

      <section id="nagasaki-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="nagasaki" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/review/", label: "掲載サービスの口コミ・評判まとめ" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
            { href: "/area/chiba/", label: "資格と許可の確認方法" },
            { href: "/area/nagoya/", label: "自社施工型と紹介型の見分け方" },
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
          評判を読む作業は候補を絞るためのものです。候補を絞った後は、自分の庭の条件で実際にやり取りを行い、判断することをおすすめします。
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
