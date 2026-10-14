import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/matsuyama/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "松山の造園・庭の手入れ業者の選び方｜取りやめ・日程変更の申し出方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "いったん頼んだあとで、やめたい・日をずらしたいということは起こります。重くなるのは、問い合わせ・見積り・日程確定・手配のどの段階で言うかによります。松山で庭の作業を取りやめる、あるいは延ばすときの申し出方と、契約前に確かめておく取り決めを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "頼んだあとに取りやめる・日をずらすときの申し出方という観点から、松山での業者選びを整理しました。",
  },
};

const toc = [
  { id: "matsuyama-logic", label: "取りやめの重さは、いつ言うかで変わる" },
  { id: "matsuyama-stages", label: "段階ごとに、動いているものが違う" },
  { id: "matsuyama-terms", label: "契約前に確かめておく4つの取り決め" },
  { id: "matsuyama-how", label: "実際に申し出るときの伝え方" },
  { id: "matsuyama-pick", label: "この条件で見ておきたい3サービス" },
  { id: "matsuyama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "matsuyama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "matsuyama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-madoguchi", "townlife", "epark"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-madoguchi":
    "剪定・伐採・草刈り・植栽・外構といった専門情報の発信と、「ガーデン業者サーチ」で全国の造園・園芸・外構業者を探せる情報・比較サイトです。依頼を決める前の段階で候補と作業の中身を見比べておけるため、決めたあとで取りやめる場面そのものを減らせます。運営は株式会社ガーデンメーカーで、庭手入れ専門の全国チェーン「smileガーデン」も展開しています。",
  "townlife":
    "希望条件を入力すると、複数社からプラン・見積もりを無料で取り寄せられます。外構（エクステリア）専用の請求窓口があり、庭・外構のプランを並べて検討できます。条件を出し切ってから一社に絞る形になるため、依頼を伝えたあとで組み直すことになりにくい進め方です。運営はタウンライフ株式会社です。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから事業者を探せ、各事業者のページに料金表・営業時間・対応エリア・お客さまの声が掲載されています。営業時間が分かるので、日程を動かしたいときに、いつ連絡すれば当日までに話が通るかを見当づけられます。運営は株式会社REstaで、全国47都道府県の業者を地域ごとに検索・電話予約できます。",
};

const stages = [
  {
    h: "問い合わせと、見積りを待っている段階",
    b: "まだ相手は現地を見ていないか、見ただけの段階です。ここで断るのは、見積りを受け取ったうえで「今回は見送ります」と返すことと同じで、特別な申し出にはなりません。連絡をせずに放置するほうが後を引きます。見送ると決めたなら、短くてよいので一度返してください。",
  },
  {
    h: "見積りを受けて、依頼すると伝えたあと",
    b: "相手の側では、この時点から日程の枠を空ける動きが始まります。まだ物も人も動いていないことが多い段階ですが、こちらの返事を前提に他の依頼を断っている可能性はあります。「やはり今回は見送りたい」と伝えるなら、気づいた時点がいちばん軽く済みます。",
  },
  {
    h: "作業日が確定したあと",
    b: "日付が決まると、その日の人の配置が組まれます。ここから先は、取りやめると空いた枠が埋まらないという形で相手に残ります。日をずらす相談であれば受けられることも多いので、やめると決める前に、まず延期で足りるかを考えてください。",
  },
  {
    h: "資材や人の手配が動いたあと、作業が始まったあと",
    b: "土や植物、資材を取り寄せている場合、注文が戻せないことがあります。人を増やして組んでいる場合も同じです。着手後は、すでに手をかけた分が残ります。この段階では「取りやめ」ではなく「どこで止めるか」「残りをどうするか」の相談になります。",
  },
];

const termsItems = [
  {
    h: "取りやめたい場合の扱い",
    b: "どの時点から、どういう扱いになるのか。取り決めの中身は事業者ごとに異なり、公開されていないことがほとんどです。金額の目安をこちらで想像しても意味がないので、契約の前に「いつからどうなるか」を聞いて、答えを控えておきます。見積書や申込書に書いてある場合は、その条項の場所を確かめておきます。",
  },
  {
    h: "日程を変更する場合の扱い",
    b: "取りやめとは別に定められていることがあります。何日前までなら振り替えられるのか、振り替えは何回まで受けられるのか、繁忙の時期は別扱いか。延期は受けやすい相談ですが、無条件ではありません。",
  },
  {
    h: "連絡の期限と、連絡の相手",
    b: "「何日前まで」に加えて、「誰に」「どの手段で」伝えれば有効になるのかを確かめます。作業員の携帯に伝えただけでは会社に届いていない、受付は営業時間内だけ、という食い違いが起こります。窓口と手段を一つ決めておきます。",
  },
  {
    h: "すでに発生している実費があるか",
    b: "取り寄せた資材、確保した重機、申請した手続き。こうしたものが動いていると、取りやめても戻せない分が残ります。契約の前に「どの段階から実費が出るのか」を聞いておくと、判断を急ぐべき時期が分かります。",
  },
];

const howItems = [
  {
    h: "こちらの都合で延ばすとき",
    b: "気づいた時点ですぐ連絡します。理由を長く説明する必要はありませんが、「いつなら可能か」をこちらから出すと話が早く進みます。候補を二つか三つ添えるのが現実的です。相手にも他の予定があるため、「また連絡します」で終えると、枠が他に回ります。",
  },
  {
    h: "相手の都合や天候で延びるときとの違い",
    b: "雨や強風で日が動くのは、取りやめとは別の話です。安全に関わる判断で延びる場合、こちらが費用を負う形にはなりません。混同して申し訳なさを感じる必要はなく、確かめるのは「振り替えの日をいつ決めるか」だけです。順延の扱いを最初に決めておけば、当日の連絡が短くなります。",
  },
  {
    h: "取りやめる前に、範囲を減らせないか考える",
    b: "予定していた全部をやめるのではなく、今回は一部だけにするという相談があります。相手にとっては日程が残るぶん受けやすく、こちらも段取りをやり直さずに済みます。事情が資金や時間のどちらであっても、まずこの選択肢を出してみてください。",
  },
  {
    h: "口頭で伝えたあと、文字でも残す",
    b: "電話で伝えて終わりにせず、同じ内容をメールやメッセージでも送っておきます。日付・対象の作業・取りやめか延期か・伝えた日時。この四つが残っていれば、あとで解釈が分かれません。相手にとっても、社内に回す記録になります。",
  },
];

const checklist = [
  {
    h: "取りやめの扱いを、契約の前に聞いたか",
    b: "どの段階から、どういう扱いになるのか。答えを控えておきます。",
  },
  {
    h: "日程変更の扱いを、別に確かめたか",
    b: "何日前まで、何回まで振り替えられるか。取りやめとは別に定められていることがあります。",
  },
  {
    h: "連絡する相手と手段を一つ決めたか",
    b: "作業員に言っただけでは会社に届いていない、という食い違いが起こります。",
  },
  {
    h: "実費が発生し始める段階を聞いたか",
    b: "資材の取り寄せや重機の確保が動くと、戻せない分が出ます。",
  },
  {
    h: "やめる前に、範囲を減らす案を出したか",
    b: "全部を取りやめるより、一部だけに絞るほうが双方の段取りが残ります。",
  },
];

const faqs = [
  {
    q: "日程が決まったあとで、やはりやめたいと思いました。いつまでに言えばよいですか。",
    a: "気づいた時点です。日が近づくほど、相手の側で動いているものが増えます。期限や扱いは事業者ごとに定め方が異なり、公開されていないことがほとんどなので、契約の前に確かめておいてください。確かめていなかった場合でも、遅らせる理由にはなりません。まず連絡し、そのうえで扱いを聞く順番になります。",
  },
  {
    q: "取りやめではなく、日をずらすだけなら受けてもらえますか。",
    a: "延期は、取りやめより受けられやすい相談です。ただし無条件ではなく、何日前までか、何回まで振り替えられるか、繁忙の時期は別扱いかといった点が定められていることがあります。ずらしたい場合は、こちらから候補日を二つか三つ添えて連絡してください。「また連絡します」で終えると、その枠は他に回ります。",
  },
  {
    q: "雨で作業が延びたときも、こちらが何か負担しますか。",
    a: "天候や安全上の判断で延びるのは、こちらの都合による取りやめとは別の話です。通常、こちらが費用を負う形にはなりません。確かめておくとよいのは、順延をどの時点で判断するのか、振り替えの日をいつ決めるのかという段取りのほうです。これを最初に決めておけば、当日の連絡が短く済みます。",
  },
  {
    q: "松山市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、松山市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaMatsuyamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "いったん頼んだ庭の作業を取りやめる、または日をずらすときの段階の考え方と、契約前に確かめておく取り決めを整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "松山" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          頼むところまでは考えていても、頼んだあとにやめる話は、あらかじめ考えないものです。実際には起こります。急な出費が重なった、家の事情で人を入れられなくなった、別の工事が先に入った、そもそも気が変わった。理由はどれもあり得ます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          松山にある家の庭で頼む場合も同じで、困るのは「言い出しにくい」という気持ちのほうです。そのまま日が近づくと、相手の段取りは進み、こちらの選べる形は減っていきます。このページでは、取りやめや日程変更がどの段階から重くなるのか、契約の前に何を確かめておくのか、実際に申し出るときにどう伝えるのかを整理します。取り決めの中身は事業者ごとに異なるため、金額や割合には触れません。
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

      <section id="matsuyama-logic" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          取りやめの重さは、いつ言うかで変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の作業は、当日だけの仕事ではありません。日を空け、人を割り当て、場合によっては植物や資材を取り寄せ、重機を確保します。取りやめの申し出が重くなるのは、この準備がどこまで進んでいるかによります。つまり、内容の問題というより、時点の問題です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          言いにくさから先延ばしにすると、そのあいだに段階が進みます。早く言えば「では見送りましょう」で済んだものが、遅れるほど、戻せない部分の話になります。伝えるのが気まずいと感じたときこそ、その日のうちに連絡するほうが、結果として双方の負担が小さくなります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            具体的な扱いは事業者ごとに決められていて、公開されていないことがほとんどです。ここで挙げるのは金額の目安ではなく、「契約の前に何を聞いておくか」と「申し出るときにどう伝えるか」です。聞いておけば、あとで判断を急ぐ場面が減ります。
          </p>
        </div>
      </section>

      <section id="matsuyama-stages" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          段階ごとに、動いているものが違う
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自分が今どこにいるのかが分かると、連絡の急ぎ方が決まります。
        </p>
        <ol className="space-y-4">
          {stages.map((x, i) => (
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
          どの時点で契約が成立し、支払いがいつ発生するかという線引きは
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="matsuyama-terms" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          契約前に確かめておく4つの取り決め
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          取りやめる予定がなくても、依頼を決める場面で一度聞いておく項目です。聞いたこと自体が失礼になる質問ではありません。
        </p>
        <div className="space-y-4">
          {termsItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          聞いた答えをどう残しておくかは
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            食い違いに備える記録の残し方
          </Link>
          、書面のどこを見るかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="matsuyama-how" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          実際に申し出るときの伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          言い方そのものより、何を一緒に伝えるかで受け取られ方が変わります。
        </p>
        <div className="space-y-4">
          {howItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          天候や相手の都合で日が動く場合の段取りは
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          、範囲を減らす方向での組み直しは
          <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2 mx-1">
            予算から依頼の範囲を組み立てる
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="matsuyama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、決める前に条件を出し切っておきたい、決めたあとの連絡先をはっきりさせておきたいという条件で見ると、次の3つは進め方が整理しやすい構成です。
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          取りやめや日程変更の扱いは、窓口となるサービスではなく、実際に作業を行う事業者との取り決めになる場合があります。どちらに伝えれば有効かを、依頼の時点で確かめておいてください。
        </p>
      </section>

      <section id="matsuyama-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="松山" />
      </section>

      <section id="matsuyama-checklist" className="scroll-mt-20 mb-12">
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

      <section id="matsuyama-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="matsuyama" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kumamoto/", label: "支払いの方法と契約が決まる時点" },
            { href: "/area/kitakyushu/", label: "日程の決め方と天候による順延" },
            { href: "/area/sakai/", label: "食い違いに備える記録の残し方" },
            { href: "/cost/price/", label: "庭工事の料金相場" },
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
          取りやめや日程変更の扱いは、依頼を決める場面で聞いておくのがいちばん軽く済みます。確かめてから相談してみてください。
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
