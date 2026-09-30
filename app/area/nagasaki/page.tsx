import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nagasaki/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "長崎の造園・庭の手入れ業者の選び方｜口コミと実績を何の根拠として読むか";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "口コミが答えてくれることと、答えてくれないこと。星の数より読む場所、件数が少ないときの見方、施工事例の写真で確かめるところ、自己申告と第三者が確かめられる情報の違い。長崎で庭の手入れを頼むときの評判情報の読み方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "口コミと施工事例を何の根拠として読むかという観点から、長崎での業者選びを整理しました。",
  },
};

const toc = [
  { id: "nagasaki-basis", label: "「評判がよい」は、何の根拠になるのか" },
  { id: "nagasaki-answer", label: "口コミが答えること、答えないこと" },
  { id: "nagasaki-read", label: "星の数より、どこを読むか" },
  { id: "nagasaki-photo", label: "施工事例の写真で見るところ" },
  { id: "nagasaki-claim", label: "自己申告と、第三者が確かめられる情報" },
  { id: "nagasaki-pick", label: "この条件で見ておきたい3サービス" },
  { id: "nagasaki-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nagasaki-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nagasaki-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["epark", "oniwa-110", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから事業者を探せ、各事業者のページに料金表・営業時間・対応エリア・お客さまの声が掲載されています。声が事業者ごとに分かれて並ぶ形なので、どの相手についての評価なのかが把握しやすい構成です。運営は株式会社REsta（BEST株式会社の子会社）です。",
  "oniwa-110":
    "全国の加盟店を紹介・手配する形で、草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽などに対応しています。窓口と実際に作業する加盟店が分かれる型なので、評価の対象がどちらなのかを意識して読む練習になります。運営は東証上場のシェアリングテクノロジー株式会社（証券コード3989）で、請負賠償保険に加入しているとされています。",
  "mitsumoa":
    "条件を入力すると複数の業者から見積もりが届き、費用・口コミ・評判を比較して選べます。依頼後は業者とチャットで打ち合わせができるため、書かれている評価だけで決めずに、自分でやり取りを一往復してから判断する形が取りやすくなります。",
};

const answerItems = [
  {
    h: "答えてくれること：連絡のやり取りの様子",
    b: "返事が来るまでの感覚、聞いたことに答えが返ってきたか、説明が分かりやすかったか。これは誰が書いても同じように経験する部分なので、他人の記述がそのまま参考になります。複数の投稿で同じ傾向が書かれていれば、ある程度まで当てにできます。",
  },
  {
    h: "答えてくれること：時間と片づけ",
    b: "約束の時間に来たか、作業のあとに切った枝や葉が残っていなかったか、近隣への声かけがあったか。庭の条件に左右されにくく、書き手の好みも入りにくいため、口コミの中では信頼度が高い部類です。",
  },
  {
    h: "答えてくれないこと：自分の庭で同じ結果になるか",
    b: "庭の広さ、木の種類と大きさ、隣家との距離、搬出の経路。条件が違えば作業の難しさも所要時間も変わります。「丁寧で早かった」という投稿は、その人の庭での話であって、こちらの庭での見通しにはなりません。",
  },
  {
    h: "答えてくれないこと：仕上がりの好みと金額の妥当性",
    b: "刈り込みの強さや形の好みは人によって違い、「きれいになった」がどの状態を指すのかは投稿からは読み取れません。金額についても、作業の範囲が分からないまま高い安いを比べても意味がありません。費用の見方は料金のページで扱っています。",
  },
];

const readPoints = [
  {
    h: "低評価の投稿は、内容で分ける",
    b: "低い評価が付いていること自体より、何について書かれているかを見ます。連絡が付かなかった、時間に来なかった、聞いていた内容と違ったという指摘は、条件が違う庭でも起こりうる話です。一方、仕上がりの好みに関する不満は、書き手の期待と合わなかったという話であって、別の人には当てはまりません。",
  },
  {
    h: "指摘への返答のしかたを見る",
    b: "低評価に返答が付いている場合、その書き方に姿勢が出ます。事実関係を説明しているのか、書き手を責めているのか、何をどう改めたかが書かれているのか。返答がないこと自体は評価を下げる材料になりませんが、書かれているなら読む価値があります。",
  },
  {
    h: "同じ指摘が繰り返されているかを見る",
    b: "一件だけの不満は、相性や行き違いの可能性があります。同じ内容の指摘が別々の書き手から何度も出ているなら、そこは運用の側の問題である可能性が高くなります。これは星の平均を見ていても分かりません。",
  },
  {
    h: "件数が少ないときは、平均を信用しない",
    b: "投稿が数件しかない場合、平均の数字はほとんど意味を持ちません。件数が少ないときは平均を見ずに、一件ずつ本文を読んで、自分の依頼に近い内容があるかどうかだけを探すほうが実用的です。新しく登録した事業者や、地域によっては件数が集まらないこともあります。",
  },
];

const photoPoints = [
  {
    h: "自分の庭と条件が近いか",
    b: "見栄えのする事例は目を引きますが、広い敷地の庭と、隣家が迫った狭い庭では作業の内容が別物です。木の大きさ、地面の状態、周囲との距離。自分の庭に近い条件の事例があるかどうかを探します。",
  },
  {
    h: "作業前と作業後が揃っているか",
    b: "仕上がりの写真だけでは、どこまで手を入れた結果なのかが分かりません。作業前が並んでいると、何をどれだけ変えたのかが読めます。前の写真がない事例ばかりなら、仕上がりの水準は分かっても作業量は分かりません。",
  },
  {
    h: "撮影の時期が分かるか",
    b: "剪定の直後と、そこから数か月経った状態は見え方が違います。庭木は伸びるものなので、直後の写真だけを基準にすると、日常的にどう見えるかとずれます。季節が書かれているかどうかも見ておきます。",
  },
  {
    h: "写っていない部分を考える",
    b: "写真は見せたい角度で撮られています。切り口の処理、足元の片づき方、隣地との境界あたりは写らないことが多い部分です。気になるなら、問い合わせのときに近い条件の事例をもう少し見せてもらえるか聞く手があります。",
  },
];

const claimPoints = [
  {
    h: "「実績◯年」「◯件」は、自己申告として読む",
    b: "こうした数字は各社が自社で公表しているもので、第三者が検証したものではありません。嘘だと決めつける理由はありませんが、判断の決め手にはなりません。自社調べと書かれている場合は、その但し書きも含めて読みます。",
  },
  {
    h: "外から確かめられる情報のほうを見る",
    b: "運営会社の名称、所在地、会社としての許可や登録の有無、作業する人の資格。これらは公開された情報に当たって確かめられます。評判の良し悪しよりも、こちらのほうが後から検証できる材料です。確かめ方は千葉のページで整理しています。",
  },
  {
    h: "その評価は、窓口と施工者のどちらに付いているか",
    b: "造園ナビに掲載しているサービスにも、自社で施工する型と、加盟店や提携会社を紹介する型の両方があります。紹介型では、窓口の対応が丁寧でも、実際に庭に来るのは別の会社です。書かれている評価がどちらについてのものかを分けて読まないと、期待と結果がずれます。運営の型の違いは名古屋のページで扱っています。",
  },
  {
    h: "最後は自分で一往復してみないと分からない",
    b: "説明のしかたが自分に合うか、こちらの条件を聞いてくれるか、答えにくいことをごまかさずに言うか。これは書かれた評価からは読み取れず、実際に問い合わせて初めて分かります。評判を読む作業は候補を絞るためのもので、決めるためのものではありません。",
  },
];

const checklist = [
  {
    h: "自分の依頼に近い投稿を探したか",
    b: "平均の星ではなく、庭の条件や作業の種類が近い投稿があるかどうかを見ます。",
  },
  {
    h: "低評価の中身を読んだか",
    b: "何について書かれているか、同じ指摘が繰り返されているかを確かめます。",
  },
  {
    h: "件数が少ない相手を、数字だけで外していないか",
    b: "投稿が数件なら平均は当てになりません。本文を読んで判断します。",
  },
  {
    h: "自己申告の数字と、確かめられる情報を分けたか",
    b: "実績や件数は各社の公表値です。会社の登録や資格は外から確かめられます。",
  },
  {
    h: "評価の対象が窓口か施工者かを確かめたか",
    b: "紹介型では、書かれている評価と実際に来る相手が別のことがあります。",
  },
];

const faqs = [
  {
    q: "口コミの件数が少ない業者は避けたほうがよいですか。",
    a: "件数だけを理由に外す必要はありません。投稿が集まるかどうかは、そのサービスに口コミの仕組みがあるか、開業からの期間、地域での利用の多さなど、作業の質とは別の事情に左右されます。件数が少ないときは平均の数字を見ずに、一件ずつ本文を読み、自分の依頼に近い内容があるかを探してください。そのうえで、会社の情報や資格など、外から確かめられる材料で補います。",
  },
  {
    q: "評価が高いのに、依頼してみると印象が違いました。なぜですか。",
    a: "口コミが答えてくれるのは、連絡のやり取り、時間どおりだったか、片づけといった、庭の条件に左右されにくい部分です。仕上がりの好みや、自分の庭で同じ結果になるかどうかは、他人の投稿からは読み取れません。また、窓口と実際に作業する会社が分かれている場合、評価の対象が窓口だったということもあります。問い合わせの段階で、誰が庭に来るのかを確かめておくと差が縮まります。",
  },
  {
    q: "施工事例の写真は、どこまで信じてよいですか。",
    a: "写真そのものを疑うというより、写っていない部分を意識して見ます。作業前と作業後が揃っているか、自分の庭と条件が近いか、撮影の時期が分かるか。この三点が揃っている事例は読む価値があります。仕上がりの写真だけが並んでいる場合、水準は分かっても作業量は分かりません。気になる条件があれば、問い合わせのときに近い事例を見せてもらえるか聞いてみてください。",
  },
  {
    q: "長崎市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、長崎市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "口コミと施工事例、自己申告の実績を、それぞれ何の根拠として読めるのかを整理しました。",
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
          庭の手入れを頼む相手を探すとき、多くの人が最初に見るのが評価の星と、掲載されている施工事例です。ところが、星が高い相手に頼んでも思っていたのと違ったということは起こります。評価そのものが間違っていたというより、その数字が何を表しているのかを取り違えている場合があります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          長崎にある家の庭で頼む場合も同じです。口コミには答えられることと答えられないことがあり、写真には写っている部分と写っていない部分があります。このページでは、評判の情報を何の根拠として使えるのかを切り分け、どこを読むと判断に効くのかを整理します。
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
          「評判がよい」は、何の根拠になるのか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の作業は、同じ会社が同じやり方で臨んでも、庭の条件によって結果の見え方が変わります。木の大きさ、隣家との距離、運び出す経路、依頼する人が何を望んでいるか。他人の投稿は、その人の庭とその人の期待のうえでの記録です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          だからといって読む意味がないわけではありません。庭の条件に左右されにくい部分については、他人の経験がそのまま参考になります。使えるところと使えないところを分けておくと、評判を見る時間が短くなり、判断も揺れにくくなります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            造園ナビでも掲載サービスごとに
            <Link href="/review/" className="text-primary underline underline-offset-2 mx-1">
              口コミ・評判のまとめ
            </Link>
            を用意していますが、これは候補を絞るための材料であって、最後の決め手として使うものではありません。以降は、どの情報が何の根拠になるのかを順に見ていきます。
          </p>
        </div>
      </section>

      <section id="nagasaki-answer" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          口コミが答えること、答えないこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ投稿の中に、当てにできる記述と、当てにならない記述が混ざっています。
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
          金額が妥当かどうかを見る手順は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          、書面のどこを確かめるかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="nagasaki-read" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          星の数より、どこを読むか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          平均の数字は、見比べるのが速い代わりに、中身が落ちています。読む場所を決めておくと、件数が多くても短時間で済みます。
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
          、特徴を横に並べたものは
          <Link href="/ranking/" className="text-primary underline underline-offset-2 mx-1">
            造園・庭師業者ランキング
          </Link>
          にあります。いずれも各社の公表内容をもとにしたもので、市区町村単位の対応可否までは含みません。
        </p>
      </section>

      <section id="nagasaki-photo" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          施工事例の写真で見るところ
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          写真は文章より速く伝わる代わりに、こちらが勝手に補って読んでしまう部分が多くなります。
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
          自分の庭の写真をこちらから渡して伝える方法は
          <Link href="/area/funabashi/" className="text-primary underline underline-offset-2 mx-1">
            現地を見てもらう前に写真で伝える
          </Link>
          、仕上がりのイメージをどう共有するかは
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="nagasaki-claim" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自己申告と、第三者が確かめられる情報
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          サイトに並んでいる情報は、出どころによって確かめられる度合いが違います。同じ画面に並んでいても、同じ重さでは扱えません。
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
          資格と許可の確かめ方は
          <Link href="/area/chiba/" className="text-primary underline underline-offset-2 mx-1">
            資格と許可の確かめ方
          </Link>
          、自社施工型と紹介型の違いは
          <Link href="/area/nagoya/" className="text-primary underline underline-offset-2 mx-1">
            自社施工型と紹介型の見分け方
          </Link>
          で扱っています。造園ナビが掲載情報をどう扱っているかは
          <Link href="/content-policy/" className="text-primary underline underline-offset-2 mx-1">
            記事の制作ポリシー
          </Link>
          に記載しています。
        </p>
      </section>

      <section id="nagasaki-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、評価や声を見ながら候補を絞りたいという条件で見ると、次の3つは情報の並び方に特徴があります。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。運営会社の名称と対応エリアは、評価の高低とは別に、外から確かめられる情報にあたります。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/review/", label: "掲載サービスの口コミ・評判まとめ" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
            { href: "/area/chiba/", label: "資格と許可の確かめ方" },
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
          評判を読む作業は候補を絞るためのものです。絞ったあとは、自分の庭の条件で一往復してみてください。
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
