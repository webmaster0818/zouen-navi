import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nishinomiya/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "西宮の造園・庭の手入れ業者の選び方｜期日から逆算した依頼の段取り";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "引っ越し、住宅の売却や引き渡し、来客や法事、自治会の清掃日など、期限のある庭の依頼は、期日から逆算して段取りを組むと円滑に進められます。問い合わせの時期、現地確認の時期、予備日の設定、期日を最初に伝える方法、間に合わない場合の範囲の絞り方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "期限のある庭の依頼を、期日から逆算して組み立てる段取りを整理しています。",
  },
};

const toc = [
  { id: "nishinomiya-deadline", label: "期限のある依頼は決める順序が逆になります" },
  { id: "nishinomiya-kinds", label: "期限のある依頼の4つの類型" },
  { id: "nishinomiya-backward", label: "期日から逆算する段取り" },
  { id: "nishinomiya-tell", label: "期日は最初の連絡の冒頭に記載する" },
  { id: "nishinomiya-narrow", label: "間に合わないと判明した場合の範囲の絞り方" },
  { id: "nishinomiya-pick", label: "この条件に適した3サービス" },
  { id: "nishinomiya-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nishinomiya-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nishinomiya-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "townlife", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "コールセンターが24時間365日受け付けており、全国の加盟店を紹介・手配する形式で、草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽などに対応しています。期日が決まった時点で、時間帯を問わず窓口に条件を伝えられるため、逆算の起点を早く設定したい場合に有用です。現地調査・見積もりは無料（条件あり）とされています。実際に作業するのは加盟店であるため、期日に対応できるかどうかは手配された加盟店にご確認ください。運営は東証上場のシェアリングテクノロジー株式会社（証券コード3989）です。",
  "townlife":
    "希望条件を入力すると、複数社からプラン・見積もりを無料で取り寄せられます。外構（エクステリア）専用の請求窓口があり、庭・外構のプランを比較検討できます。期日までに一定の余裕があり、売却や入居の前に庭の形状そのものを整備し直したいといった、工事を伴う依頼を比較したい場合に適した形式です。届いた会社ごとに連絡の速さに差があるという声もあるため、期日を条件に記載したうえで、返信の速さも比較の材料にしてください。運営はタウンライフ株式会社です。",
  "mitsumoa":
    "依頼内容を入力すると最大5件の見積もりが届き、依頼後は業者とチャットで直接相談できます。期日を最初に記載しておけば、見積もりが届いた段階で、その日に対応できるかどうかを各社に確認できます。やり取りが文字で記録されるため、期日に関するやり取りを後から確認できる点も、期限のある依頼では有用です。運営は株式会社ミツモアです。",
};

const kinds = [
  {
    h: "引っ越し・入居の前",
    b: "新居の庭を、荷物の搬入前に片づけておきたいという依頼です。荷物の搬入や家具の配置と作業日が重なると、駐車場所や通路を共有することになります。期日は「入居日」ではなく「搬入開始前」に設定するほうが実際に近くなります。反対に、現住居から退去する側の依頼であれば、退去の立ち会いや鍵の返却日が期限になります。",
  },
  {
    h: "住宅の売却・引き渡しの前",
    b: "売却する住宅の庭を、写真撮影の前、内覧の前、引き渡しの前のどの時点までに整えるかによって、期日が三つに分かれます。どこまで手入れを行うか、木を残すか撤去するかは、売買の取り決めや買主との協議で決まる場合があり、造園業者が判断できる事項ではありません。仲介を依頼している不動産会社に、庭に関する取り決めがあるかを事前に確認してから、作業の範囲を決めてください。",
  },
  {
    h: "来客・法事・家庭の行事の前",
    b: "人が集まる日に、玄関まわりや座敷から見える庭を整えておきたいという依頼です。この類型では、期日の当日に作業が完了していればよいのではなく、前日までに作業音や車両がなくなっていることが求められる場合が多くなります。親族が前日から訪れる場合は、その到着時刻が実際の期限です。",
  },
  {
    h: "自治会の清掃日・地域の行事の前",
    b: "道路に面した生垣や、隣地との境界の草を、清掃日や点検日までに整えておきたいという依頼です。敷地外に越境した枝や草が対象になりやすいため、自分の敷地の範囲と、共用部分にかかるかどうかを事前に確認しておきます。共用部分の扱いは自治会や管理組合で決められている場合があるため、そちらの取り決めもご確認ください。",
  },
];

const steps = [
  {
    h: "実際の期限を決める",
    b: "カレンダーに記載した日と、作業が完了していなければならない時点は、ずれていることがよくあります。来客であれば前日の夕方、売却であれば写真撮影の前、引っ越しであれば搬入の前です。まず「何の前に完了していればよいか」を一行で書き出し、その時点を期限として扱います。",
  },
  {
    h: "予備日を期限の前に設定する",
    b: "作業日を期限の直前に設定すると、雨や機材の都合で一度日程がずれただけで間に合わなくなります。作業日と期限の間に、再度作業できる日をあらかじめ確保しておきます。どの程度空けるかは依頼の規模と依頼者の予定によるため、決まった目安はありません。天候による日程変更の取り決めは、北九州のページで解説しています。",
  },
  {
    h: "作業日の候補を依頼者から先に提示する",
    b: "予備日を差し引いた残りの期間から、立ち会える日、駐車できる日、近隣に迷惑がかかりにくい日を選び、候補を二つか三つ用意しておきます。業者から日程の提示を待つより、依頼者から候補を提示するほうが、一度のやり取りで済みます。",
  },
  {
    h: "現地確認の日を作業日より前に設定する",
    b: "写真のみで見積もりを作成できる作業もありますが、木の大きさや搬出経路によっては、現地を確認しなければ金額も日数も決まりません。現地確認が必要かどうか、必要な場合はいつ訪問できるかを、問い合わせの時点で各社にご確認ください。現地確認と作業を同日に行えるかどうかも、会社によって扱いが異なります。",
  },
  {
    h: "問い合わせと比較の期間を最後に割り当てる",
    b: "ここまでで作業日と現地確認の日が決まれば、問い合わせに使える期間が残ります。複数社に問い合わせて比較したい場合は、回答を待つ時間もこの期間に含まれます。どの程度前に問い合わせれば間に合うかは、時期と業者の繁忙状況によって異なるため、一律に判断せず各社に確認することをおすすめします。",
  },
];

const tellPoints = [
  {
    h: "日付とともに、何の期日かを記載する",
    b: "「◯月◯日までに」のみでは、その日を変更できるかどうかが業者に伝わりません。「◯月◯日に法事があるため、前日までに完了したい」と理由を添えると、業者は優先度を判断しやすくなり、間に合わない場合も早めに伝えてもらえます。",
  },
  {
    h: "期日を変更できるかどうかを明記する",
    b: "期日が変更できないのか、多少の延期は許容できるのかによって、業者が組む段取りは変わります。変更できない期日であれば、その旨を明記してください。曖昧に伝えると、業者は通常の依頼として扱い、予備日を確保せずに日程を組むことがあります。",
  },
  {
    h: "期日までに必要な範囲と後日でもよい範囲を分ける",
    b: "「玄関から見える生垣は期日までに、裏の草は後日でもよい」のように、期限に関係する部分と関係しない部分を分けて伝えると、業者は期日に必要な作業のみを優先して組めます。すべてを同じ優先度で伝えると、すべてが完了する日程を探すことになり、かえって期日に間に合わなくなることがあります。",
  },
  {
    h: "間に合わない場合は早めに伝えてほしいと依頼する",
    b: "期限のある依頼で最も困るのは、直前になって間に合わないと判明することです。「対応が難しい場合は早めにお知らせください。別の方法を検討します」と一言添えておくと、業者も辞退を伝えやすくなり、依頼者は次の候補に相談する時間を確保できます。",
  },
];

const narrowPoints = [
  {
    h: "期日の場面で目に入る場所から優先する",
    b: "来客であれば玄関と通路、売却の写真であれば道路側からの見え方、清掃日であれば敷地外に越境している部分です。期日の場面で誰がどこから庭を見るのかを考えると、優先して手入れする場所が決まります。それ以外の場所は期日の後に回しても、期日の目的は果たせます。",
  },
  {
    h: "作業を「整える」作業と「作り直す」作業に分ける",
    b: "伸びた枝を切る、草を取る、落ち葉を片づけるといった整える作業は、比較的短い段取りで組めることが多い一方、木を抜く、植え替える、地面を作り直すといった作業は、準備や後片づけが増えます。期日が迫っている場合は、整える作業のみを期日までに済ませ、作り直す作業は期日の後に改めて相談する形にできます。",
  },
  {
    h: "期日前と期日後の二回に分けて依頼する",
    b: "一度にすべてを依頼すると、作業日が後にずれやすくなります。期日までに必要な分を一回目、残りを二回目として、同じ業者に分けて依頼できるかをご確認ください。分けた場合に費用や手間がどう変わるかは会社によって異なるため、その点もあわせて確認します。1社にまとめるか分けるかの考え方は、姫路のページで解説しています。",
  },
  {
    h: "自分で行える作業を切り分ける",
    b: "落ち葉を掃く、鉢を移動する、足元の草を抜くといった作業を自分で済ませておけば、業者に依頼する範囲が小さくなり、日程も組みやすくなります。自分で行う範囲の目安は、DIYのページにまとめています。高所の枝や刃物を使用する作業は、急いでいる場合ほど無理をしないでください。",
  },
];

const checklist = [
  {
    h: "期限を「何の前か」で書き出したか",
    b: "カレンダーの日付ではなく、作業が完了していなければならない時点を期限とします。",
  },
  {
    h: "作業日と期限の間に予備日を設けたか",
    b: "一度日程がずれても間に合う形にしておくと、慌てずに済みます。",
  },
  {
    h: "最初の連絡に期日と理由を記載したか",
    b: "日付だけでなく、何の期日か、変更できるかどうかを添えます。",
  },
  {
    h: "期日に必要な範囲と後日でもよい範囲を分けたか",
    b: "すべてを同じ優先度で伝えると、期日に必要な作業が後回しになることがあります。",
  },
  {
    h: "売却や共用部分に関する取り決めを確認したか",
    b: "不動産会社や自治会・管理組合で決められている事項があれば、作業範囲を決める前に確認します。",
  },
];

const faqs = [
  {
    q: "期日までにあまり余裕がありません。どう問い合わせればよいですか。",
    a: "最初の連絡の冒頭に、期日とその理由、変更できるかどうかを記載してください。そのうえで、期日までに必要な範囲のみを伝え、その他は後日でもよいと添えます。何日前までに問い合わせれば間に合うかは時期や業者の状況によって異なるため、決まった目安はありません。返信が遅い業者を待ち続けるより、同じ条件で複数の窓口に同時に相談するほうが、次の対応を検討する時間を確保できます。",
  },
  {
    q: "期日に間に合うと言われました。それで安心してよいですか。",
    a: "口頭で間に合うと回答されても、天候や前の現場の都合で日程がずれることはあります。作業日が決まったら、その日付と期日を書面やメッセージで残してもらい、日程がずれた場合の連絡方法も確認しておきます。作業日と期日の間に予備日を一日でも設けておけば、一度日程がずれても慌てずに済みます。",
  },
  {
    q: "売りに出す家の庭は、どこまで手を入れておくべきですか。",
    a: "庭の状態をどうするかは、売買の取り決めや買主との協議で決まる場合があり、造園業者が決める事項ではありません。木を残すのか撤去するのか、引き渡しまでに何を済ませておくのかを、仲介を依頼している不動産会社に事前にご確認ください。そのうえで、写真撮影や内覧の前に整える分と、引き渡しまでに済ませる分とに分けて依頼すると、期日ごとの段取りを組みやすくなります。",
  },
  {
    q: "期日の直前で作業が中止になったらどうなりますか。",
    a: "中止や延期の扱いは、各社の規定によります。期日のある依頼では、延期となった場合に次の作業日がいつ頃になるのかを、契約前に確認しておくことが重要です。取り消しや日程変更の申し出方については松山のページ、天候による順延の取り決めについては北九州のページで解説しています。",
  },
  {
    q: "西宮市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、西宮市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否や期日に間に合うかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "期限のある庭の依頼を期日から逆算して組み立てる段取りと、期日の伝え方、間に合わない場合の範囲の絞り方を整理しています。",
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
          庭の手入れを検討するきっかけは、伸びた枝が気になったからとは限りません。引っ越しが決まった、住宅を売却することになった、法事で親族が集まる、自治会の清掃日が近いといった依頼には、それまでに作業が完了していなければならない日があります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          西宮市内の住宅の庭を依頼する場合も、期日のある依頼を期日のない依頼と同じ順序で進めると、間に合わなくなりがちです。本ページでは、期限から逆算して、問い合わせの時期、現地確認の時期、予備日の設定を組み立てる考え方と、期日を最初に伝える方法、間に合わないと判明した場合の範囲の絞り方を整理します。
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
          期限のある依頼は決める順序が逆になります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          期日のない依頼は、問い合わせ、見積もりの取得、比較、日程の決定という順序で進みます。作業日は最後に決まるもので、多少後にずれても支障はありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          期日のある依頼では、この順序が逆になります。最初に変更できない日があり、そこから予備日、作業日、現地確認の日、問い合わせの期間と、前に向かって決めていきます。前から順に進めて最後に日程を合わせようとすると、比較している間に期日が近づき、空いている日がなくなることがあります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            どの時期に何を行うかという年間を通した計画は
            <Link href="/area/sapporo/" className="text-primary underline underline-offset-2 mx-1">
              積雪を考慮した年間計画
            </Link>
            で、決めた日程がずれる理由と順延の取り決めは
            <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
              日程の決め方と天候による順延
            </Link>
            で解説しています。本ページでは、外的な期限に合わせる場合に絞って整理します。
          </p>
        </div>
      </section>

      <section id="nishinomiya-kinds" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          期限のある依頼の4つの類型
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「◯日までに」でも、その日が何の期日なのかによって、実際の期限の位置と注意すべき点が変わります。
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
          作業日の近隣への配慮は
          <Link href="/area/saitama/" className="text-primary underline underline-offset-2 mx-1">
            作業日の近隣への配慮と段取り
          </Link>
          、前の住人から引き継いだ庭の扱いは
          <Link href="/area/kurashiki/" className="text-primary underline underline-offset-2 mx-1">
            前の住人から庭を引き継いだ場合
          </Link>
          、住まなくなる住宅の庭を整理する考え方は
          <Link href="/guide/garden-downsizing/" className="text-primary underline underline-offset-2 mx-1">
            庭じまい
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="nishinomiya-backward" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          期日から逆算する段取り
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          ここでは、順序と余裕を設ける箇所のみを示します。それぞれの間隔を何日取るかは、依頼の規模、時期、業者の繁忙状況、依頼者の予定によって異なるため、決まった目安はありません。所要日数の見込みは、依頼の段階で各社にご確認ください。
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
            書き出してみると、問い合わせに使える期間が想定より短いと分かることがあります。その場合は、比較する社数を減らすか、次の節のように期日までに依頼する範囲を絞ります。現地確認の前に写真で状況を伝えておくと、現地確認を省略できる作業もあります。写真の撮影方法は
            <Link href="/area/funabashi/" className="text-primary underline underline-offset-2 mx-1">
              現地調査の前に写真で状況を伝える方法
            </Link>
            にまとめています。
          </p>
        </div>
      </section>

      <section id="nishinomiya-tell" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          期日は最初の連絡の冒頭に記載する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          期日は、庭の状態や作業内容より先に伝えます。業者は最初に、その日までに対応できるかどうかを判断するためです。期日が文面の最後にあると、見積もりの相談が進んでから対応できないと判明し、やり取りが無駄になります。
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
          <p className="font-bold text-text-primary mb-2 text-sm">記載例</p>
          <p className="text-[15px] leading-8 text-text-secondary">
            「◯月◯日に自宅で法事があり、前日の夕方までに作業を終えていただきたいと考えています。この日は変更できません。玄関側の生垣と、座敷から見える松の手入れを期日までにお願いしたく、裏庭の草取りは期日の後でも構いません。この日程で難しい場合は、早めにお知らせいただけますと幸いです。」
          </p>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          電話、問い合わせフォーム、チャットなどの連絡手段の選び方と、期日以外に最初の連絡に含めておく事項は
          <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2 mx-1">
            問い合わせ手段と最初のやり取り
          </Link>
          で解説しています。期日が近いにもかかわらず返信がない場合の判断方法は
          <Link href="/area/gifu/" className="text-primary underline underline-offset-2 mx-1">
            返信がない場合の対応
          </Link>
          をご参照ください。
        </p>
      </section>

      <section id="nishinomiya-narrow" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          間に合わないと判明した場合の範囲の絞り方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          どの業者からも期日までの日程が提示されない場合、期日を変更できないのであれば、調整できるのは依頼する範囲です。ここでの絞り方は金額ではなく、期日の目的を果たすために何が必要かによって決めます。
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
          予算から範囲を決める考え方は
          <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2 mx-1">
            予算から範囲を組み立てる
          </Link>
          、まとめて依頼するか分けるかは
          <Link href="/area/himeji/" className="text-primary underline underline-offset-2 mx-1">
            1社にまとめて依頼するか分けて依頼するか
          </Link>
          、自分で行う範囲の目安は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で解説しています。剪定した枝や刈った草を自分で処分する場合は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・草の処分
          </Link>
          もご確認ください。
        </p>
      </section>

      <section id="nishinomiya-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、期日を先に伝え、その日に対応できるかを早く確認したいという条件では、次の3サービスの受付の形式にそれぞれ特徴があります。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。期日までに受けてもらえるかどうかは公開情報からは分からないため、問い合わせの一文目で確かめてください。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kitakyushu/", label: "日程の決め方と天候による順延" },
            { href: "/area/matsuyama/", label: "依頼後の取り消し・日程変更" },
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
          期日のある依頼は、期限から前に向かって日程を決めていきます。最初の連絡では、期日とその理由を冒頭に記載してください。
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
