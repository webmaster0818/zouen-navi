import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nishinomiya/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "西宮の造園・庭の手入れ業者の選び方｜期日から逆算して頼む段取り";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "引っ越し、家の売却や引き渡し、来客や法事、自治会の清掃日。締め切りのある庭の依頼は、期日から逆算して段取りを組むと慌てずに済みます。いつ問い合わせ、いつ現地を見てもらい、予備日をどこに置くか。期日を最初に伝える言い方と、間に合わないときの範囲の絞り方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "締め切りのある庭の依頼を、期日から逆算して組み立てる段取りを整理しました。",
  },
};

const toc = [
  { id: "nishinomiya-deadline", label: "「いつまでに」がある依頼は、決める順番が逆になる" },
  { id: "nishinomiya-kinds", label: "締め切りのある依頼の4つの型" },
  { id: "nishinomiya-backward", label: "期日から逆にたどる段取り" },
  { id: "nishinomiya-tell", label: "期日は最初の連絡の一文目に置く" },
  { id: "nishinomiya-narrow", label: "間に合わないと分かったときの絞り方" },
  { id: "nishinomiya-pick", label: "この条件で見ておきたい3サービス" },
  { id: "nishinomiya-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nishinomiya-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nishinomiya-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "townlife", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "コールセンターが24時間365日受付しており、全国の加盟店を紹介・手配する形で、草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽などに対応しています。期日が決まった時点で、時間帯を問わずまず窓口に条件を伝えておけるのが、逆算の起点を早く置きたい場合に効きます。現地調査・見積りは無料（条件あり）とされています。実際に作業するのは加盟店なので、期日に合わせられるかどうかは手配された加盟店との間で確かめてください。運営は東証上場のシェアリングテクノロジー株式会社（証券コード3989）です。",
  "townlife":
    "希望条件を入力すると、複数社からプラン・見積もりを無料で取り寄せられます。外構（エクステリア）専用の請求窓口があり、庭・外構のプランを並べて検討できます。期日までにある程度の余裕があり、売却や入居の前に庭の形そのものを整え直したいといった、工事寄りの依頼を比べたいときに向く形です。届いた会社ごとに連絡の速さに差があるという声もあるため、期日を条件に書いたうえで、返事の早さも比較の材料にしてください。運営はタウンライフ株式会社です。",
  "mitsumoa":
    "依頼内容を入力すると最大5件の見積もりが届き、依頼後は業者とチャットで直接相談できます。期日をはじめに書いておけば、届いた見積もりの段階でその日に合わせられるかどうかを各社に聞き返せます。やり取りが文字で残るため、期日について交わした言葉を後から見直せる点も、締め切りのある依頼では役に立ちます。運営は株式会社ミツモアです。",
};

const kinds = [
  {
    h: "引っ越し・入居の前",
    b: "新しく住む家の庭を、荷物が入る前に片づけておきたいという依頼です。荷物の搬入や家具の配置と作業の日が重なると、車を停める場所や通り道を取り合うことになります。期日は「入居日」ではなく「搬入が始まる前」に置くほうが実際に近くなります。逆に、今の家を出る側の依頼なら、退去の立ち会いや鍵を返す日が締め切りになります。",
  },
  {
    h: "家の売却・引き渡しの前",
    b: "売りに出す家の庭を、写真を撮る前、内覧の前、引き渡しの前のどこまでに整えるかで、期日が三つに分かれます。どこまで手を入れるか、木を残すか撤去するかは、売買の取り決めや買い手との話し合いで決まることがあり、庭の業者が判断できる事柄ではありません。仲介を頼んでいる不動産会社に、庭について何か取り決めがあるかを先に確かめてから、作業の範囲を決めてください。",
  },
  {
    h: "来客・法事・家の行事の前",
    b: "人が集まる日に、玄関まわりや座敷から見える庭を整えておきたいという依頼です。この型は、期日の当日に終わっていればよいのではなく、前日までに作業の音や車がなくなっていることが求められる場合が多くなります。親族が前の日から来るのであれば、その到着が本当の締め切りです。",
  },
  {
    h: "自治会の清掃日・地域の行事の前",
    b: "道路に面した生け垣や、隣地との境界の草を、清掃日や点検の日までに整えておきたいという依頼です。敷地の外へはみ出した枝や草が対象になりやすいので、どこまでが自分の敷地か、共用の部分にかかるかを先に確かめておきます。共用部分の扱いは自治会や管理組合で決めていることがあるため、そちらの取り決めも確かめてください。",
  },
];

const steps = [
  {
    h: "本当の締め切りを決める",
    b: "カレンダーに書いてある日と、作業が終わっていなければならない時点は、ずれていることがよくあります。来客なら前日の夕方、売却なら写真撮影の前、引っ越しなら搬入の前。まず「何の前に終わっていればよいのか」を一行で書き出し、その時点を締め切りとして扱います。",
  },
  {
    h: "予備日を締め切りの手前に置く",
    b: "作業日を締め切りの直前にすると、雨や機材の都合で一度ずれただけで間に合わなくなります。作業日と締め切りの間に、もう一度作業できる日をあらかじめ空けておきます。どのくらい空けるかは依頼の大きさと自分の予定次第で、決まった目安があるわけではありません。天候で日がずれる場合の取り決めは、北九州のページで扱っています。",
  },
  {
    h: "作業日の候補を、自分の側から先に出す",
    b: "予備日を差し引いた残りの期間から、立ち会える日、車を停められる日、近所に迷惑がかかりにくい日を選び、候補を二つ三つ用意しておきます。相手から日を出してもらうのを待つより、こちらから候補を出すほうが話が一往復で済みます。",
  },
  {
    h: "現地を見てもらう日を、作業日の前に入れる",
    b: "写真だけで見積もりが出る作業もありますが、木の大きさや搬出の経路によっては現地を見てからでないと金額も日数も決まりません。現地確認が必要かどうか、必要ならいつ来てもらえるかは、問い合わせの時点で各社に聞いてください。現地確認と作業を同じ日にできるかどうかも、会社によって扱いが違います。",
  },
  {
    h: "問い合わせと比較の期間を最後に割り当てる",
    b: "ここまでで、作業日と現地確認の日が決まれば、問い合わせに使える期間が残ります。複数社に聞いて比べたい場合は、返事を待つ時間もこの期間に入ります。どのくらい前に問い合わせれば間に合うかは、時期と相手の混み具合で変わるので、決め打ちせずに各社へ確かめるのが確実です。",
  },
];

const tellPoints = [
  {
    h: "日付と、何の期日かを一緒に書く",
    b: "「◯月◯日までに」だけでは、その日が動かせるのかどうかが相手に伝わりません。「◯月◯日に法事があるため、前日までに終えたい」と理由を添えると、相手は優先度を判断しやすくなり、間に合わない場合も早めに言ってもらえます。",
  },
  {
    h: "動かせるかどうかをはっきり書く",
    b: "期日が絶対に動かないのか、多少なら後ろにずれてもよいのかで、相手が組む段取りは変わります。動かせない期日なら、そう書いてください。ぼかして伝えると、相手は通常の依頼として扱い、予備日を取らずに日程を組むことがあります。",
  },
  {
    h: "期日までに必要な範囲と、後でもよい範囲を分ける",
    b: "「玄関から見える生け垣は期日までに、裏の草は後でもよい」のように、締め切りに関係する部分と関係しない部分を分けて伝えると、相手は期日に必要な分だけを先に組めます。全部を同じ重さで伝えると、全部が終わる日程を探すことになり、かえって期日に間に合わなくなることがあります。",
  },
  {
    h: "間に合わないなら、早めに言ってほしいと頼む",
    b: "締め切りのある依頼でいちばん困るのは、直前になって間に合わないと分かることです。「難しそうなら早めに教えてください、別の手を考えます」と一言添えておくと、相手も断りやすくなり、こちらは次の候補に当たる時間が残ります。",
  },
];

const narrowPoints = [
  {
    h: "期日の場面で目に入る場所から順に",
    b: "来客なら玄関と通路、売却の写真なら道路側からの見え方、清掃日なら敷地の外へ出ている部分。期日の場面で誰が、どこから庭を見るのかを考えると、先に手を入れる場所が決まります。そこ以外は期日のあとに回しても、期日の目的は果たせます。",
  },
  {
    h: "作業を「整える」と「つくり直す」に分ける",
    b: "伸びた枝を切る、草を取る、落ち葉を片づけるといった整える作業は、比較的短い段取りで組めることが多いのに対し、木を抜く、植え替える、地面を作り直すといった作業は、準備や後片づけが増えます。期日が迫っているなら、整える作業だけを期日までに済ませ、つくり直す作業は期日のあとに改めて相談する形にできます。",
  },
  {
    h: "期日前と期日後で二回に分けて頼む",
    b: "一度に全部を頼むと、作業日が後ろにずれやすくなります。期日までに必要な分を一回目、残りを二回目として、同じ相手に分けて頼めるかを聞いてみてください。分けた場合に費用や手間がどう変わるかは会社によって違うので、その点も合わせて確かめます。1社にまとめるか分けるかの考え方は、姫路のページで扱っています。",
  },
  {
    h: "自分でできる部分を切り出す",
    b: "落ち葉を掃く、鉢を移動する、足元の草を抜くといった作業を自分で済ませておけば、業者に頼む範囲が小さくなり、日程の組みやすさも変わります。どこまでを自分でやるかの目安は、DIYのページにまとめています。高い場所の枝や刃物を使う作業は、急いでいるときほど無理をしないでください。",
  },
];

const checklist = [
  {
    h: "締め切りを「何の前か」で書き出したか",
    b: "カレンダーの日付ではなく、作業が終わっていなければならない時点を締め切りにします。",
  },
  {
    h: "作業日と締め切りの間に予備日を空けたか",
    b: "一度ずれても間に合う形にしておくと、慌てずに済みます。",
  },
  {
    h: "最初の連絡に期日と理由を書いたか",
    b: "日付だけでなく、何の期日か、動かせるかどうかを添えます。",
  },
  {
    h: "期日に必要な範囲と後でもよい範囲を分けたか",
    b: "全部を同じ重さで伝えると、期日に必要な分の作業が後回しになることがあります。",
  },
  {
    h: "売却や共用部分にかかる取り決めを確かめたか",
    b: "不動産会社や自治会・管理組合で決まっていることがあれば、作業範囲の前に確かめます。",
  },
];

const faqs = [
  {
    q: "期日までにあまり余裕がありません。どう問い合わせればよいですか。",
    a: "最初の連絡の一文目に、期日とその理由、動かせるかどうかを書いてください。そのうえで、期日までに必要な範囲だけを伝え、残りは後でもよいと添えます。何日前までに問い合わせれば間に合うかは時期や相手の状況で変わるため、決まった目安はありません。返事が遅い相手を待ち続けるより、同じ条件で複数の窓口に同時に当たるほうが、次の手を考える時間が残ります。",
  },
  {
    q: "期日に間に合うと言われました。それで安心してよいですか。",
    a: "口頭で間に合うと言われても、天候や先の現場の都合で日がずれることはあります。作業日が決まったら、その日付と期日を書面やメッセージで残してもらい、ずれた場合にどう連絡が来るのかも聞いておきます。作業日と期日の間に予備日を一日でも置いておけば、一度ずれても慌てずに済みます。",
  },
  {
    q: "売りに出す家の庭は、どこまで手を入れておくべきですか。",
    a: "庭の状態をどうするかは、売買の取り決めや買い手との話し合いで決まることがあり、造園の業者が決める事柄ではありません。木を残すのか撤去するのか、引き渡しまでに何をしておくのかを、仲介を頼んでいる不動産会社に先に確かめてください。そのうえで、写真撮影や内覧の前に整える分と、引き渡しまでに済ませる分とに分けて依頼すると、期日ごとの段取りが組みやすくなります。",
  },
  {
    q: "期日の直前で作業が中止になったらどうなりますか。",
    a: "中止や延期の扱いは会社ごとの規定によります。期日のある依頼では、延期になったときに次の作業日がいつ頃になるのかを、契約の前に聞いておくことが大切です。取りやめや日程変更の申し出方については松山のページ、天候による順延の取り決めについては北九州のページで整理しています。",
  },
  {
    q: "西宮市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、西宮市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうか、期日に間に合うかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaNishinomiyaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "締め切りのある庭の依頼を、期日から逆算して組み立てる段取りと、期日の伝え方、間に合わないときの範囲の絞り方を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "西宮" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを思い立つきっかけは、伸びた枝が気になったからとは限りません。引っ越しが決まった、家を売ることになった、法事で親族が集まる、自治会の清掃日が近い。こうした依頼には、それまでに終わっていなければならない日があります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          西宮にある家の庭で頼む場合も、期日のある依頼は、期日のない依頼と同じ順番で進めると間に合わなくなりがちです。このページでは、締め切りから逆にたどって、いつ問い合わせ、いつ見てもらい、予備日をどこに置くかを組み立てる考え方と、期日を最初に伝える言い方、間に合わないと分かったときの範囲の絞り方を整理します。
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

      <section id="nishinomiya-deadline" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          「いつまでに」がある依頼は、決める順番が逆になる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          期日のない依頼は、問い合わせて、見積もりをもらって、比べて、日を決めるという順に進みます。作業日は最後に決まるもので、多少後ろにずれても困りません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          期日のある依頼では、この順番が逆になります。最初に動かせない日があり、そこから予備日、作業日、現地を見てもらう日、問い合わせの期間と、手前に向かって決めていきます。前から順に進めて最後に日を合わせようとすると、比べている間に期日が近づき、空いている日がなくなることがあります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            どの時期に何をするかという一年を通した計画は
            <Link href="/area/sapporo/" className="text-primary underline underline-offset-2 mx-1">
              雪を前提にした年間計画
            </Link>
            で、決めた日がずれる理由と順延の取り決めは
            <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
              日程の決め方と天候による順延
            </Link>
            で扱っています。このページは、外からやってくる締め切りに合わせる場合に絞って整理します。
          </p>
        </div>
      </section>

      <section id="nishinomiya-kinds" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          締め切りのある依頼の4つの型
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「◯日までに」でも、その日が何の期日なのかによって、本当の締め切りの位置と、気にしておくことが変わります。
        </p>
        <div className="space-y-4">
          {kinds.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          作業の日に近所へどう声をかけるかは
          <Link href="/area/saitama/" className="text-primary underline underline-offset-2 mx-1">
            作業日の近隣への配慮と段取り
          </Link>
          、前の住人から引き継いだ庭をどう扱うかは
          <Link href="/area/kurashiki/" className="text-primary underline underline-offset-2 mx-1">
            前の住人の庭を引き継いだとき
          </Link>
          、住まなくなる家の庭を手放す考え方は
          <Link href="/guide/garden-downsizing/" className="text-primary underline underline-offset-2 mx-1">
            庭じまい
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="nishinomiya-backward" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          期日から逆にたどる段取り
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          ここでは順番と、どこに余白を置くかだけを示します。それぞれの間隔を何日取るかは、依頼の大きさ、時期、相手の混み具合、自分の予定によって変わるため、決まった目安はありません。所要日数の見込みは、依頼の段階で各社に確かめてください。
        </p>
        <ol className="space-y-4">
          {steps.map((x, i) => (
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
        <div className="rounded-2xl border border-border bg-surface-alt p-5 mt-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            書き出してみると、問い合わせに使える期間が思っていたより短いと分かることがあります。その場合は、比べる社数を減らすか、次の節のように期日までに頼む範囲を絞ります。現地を見てもらう前に写真で状況を伝えておくと、現地確認を省ける作業もあります。写真の撮り方は
            <Link href="/area/funabashi/" className="text-primary underline underline-offset-2 mx-1">
              現地を見てもらう前に写真で伝える
            </Link>
            にまとめています。
          </p>
        </div>
      </section>

      <section id="nishinomiya-tell" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          期日は最初の連絡の一文目に置く
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          期日は、庭の様子や作業の中身より先に伝えます。相手は最初に、その日までに受けられるかどうかを判断するからです。期日が文面の最後にあると、見積もりの話が進んでから合わないと分かり、やり取りが一往復無駄になります。
        </p>
        <div className="space-y-4">
          {tellPoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-surface-alt p-5 mt-5">
          <p className="font-bold text-text-primary mb-2 text-sm">書き出しの例</p>
          <p className="text-[15px] leading-8 text-text-secondary">
            「◯月◯日に自宅で法事があり、前日の夕方までに作業を終えていただきたいと考えています。この日は動かせません。玄関側の生け垣と、座敷から見える松の手入れを期日までにお願いしたく、裏庭の草取りは期日のあとでも構いません。この日程で難しい場合は、早めに教えていただけると助かります。」
          </p>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          電話、問い合わせフォーム、チャットなどの連絡手段の選び方と、期日以外に最初の連絡へ入れておくことは
          <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2 mx-1">
            問い合わせ手段と最初のやり取り
          </Link>
          で扱っています。期日が近いときに返事が来ない場合の見切り方は
          <Link href="/area/gifu/" className="text-primary underline underline-offset-2 mx-1">
            返事が来ないときの進め方
          </Link>
          を参考にしてください。
        </p>
      </section>

      <section id="nishinomiya-narrow" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          間に合わないと分かったときの絞り方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          どの相手からも期日までの日程が出てこない場合、期日を動かせないなら、動かせるのは頼む範囲のほうです。ここでの絞り方は金額ではなく、期日の目的を果たすのに何が必要かで決めます。
        </p>
        <ol className="space-y-4">
          {narrowPoints.map((x, i) => (
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
          予算の側から範囲を決める考え方は
          <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2 mx-1">
            予算から範囲を組み立てる
          </Link>
          、まとめて頼むか分けるかは
          <Link href="/area/himeji/" className="text-primary underline underline-offset-2 mx-1">
            1社にまとめるか、分けて頼むか
          </Link>
          、自分でやる範囲の目安は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で扱っています。切った枝や刈った草の処分を自分でする場合は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・草の処分
          </Link>
          も確かめてください。
        </p>
      </section>

      <section id="nishinomiya-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、期日を先に伝えて、その日に合わせられるかを早く確かめたいという条件で見ると、次の3つは受付の形に特徴があります。
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

      <section id="nishinomiya-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。期日までに受けてもらえるかどうかは公開情報からは分からないため、問い合わせの一文目で確かめてください。
        </p>
        <AreaCompanyTable cityName="西宮" />
      </section>

      <section id="nishinomiya-checklist" className="scroll-mt-20 mb-12">
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

      <section id="nishinomiya-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="nishinomiya" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kitakyushu/", label: "日程の決め方と天候による順延" },
            { href: "/area/matsuyama/", label: "頼んだあとに取りやめる・日をずらす" },
            { href: "/area/shizuoka/", label: "問い合わせ手段と最初のやり取り" },
            { href: "/area/kagoshima/", label: "予算から範囲を組み立てる" },
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
          期日のある依頼は、締め切りから手前に向かって日を決めていきます。最初の連絡では、期日とその理由を一文目に置いてください。
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
