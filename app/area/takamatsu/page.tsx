import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/takamatsu/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "高松の造園・庭の手入れ業者の選び方｜初めて依頼する際の全体の流れ";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れを初めて依頼する際の流れを、依頼前・業者探しと問い合わせ・見積もりと契約・作業日まで・作業完了後の段階に分け、各段階で決める事項と、決めずに進めた場合に生じる問題をまとめています。各段階の詳しい解説ページへの案内と、掲載サービスの運営会社・対応エリアも掲載しています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "初めて庭の手入れを依頼する際に、どの順序で何を決めればよいかを段階ごとに整理した案内ページです。",
  },
};

const toc = [
  { id: "takamatsu-order", label: "判断に迷う原因は決める順序にあります" },
  { id: "takamatsu-before", label: "依頼前に自分で決めておく段階" },
  { id: "takamatsu-contact", label: "業者を探し、最初の連絡をする段階" },
  { id: "takamatsu-estimate", label: "見積もりを受け取り、契約を決める段階" },
  { id: "takamatsu-workday", label: "作業日を決め、当日を迎える段階" },
  { id: "takamatsu-after", label: "作業完了後の段階" },
  { id: "takamatsu-pick", label: "この条件に適した3サービス" },
  { id: "takamatsu-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "takamatsu-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "takamatsu-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

type Stage = {
  no: string;
  h: string;
  decide: string;
  skip: string;
  links: { href: string; label: string }[];
};

const beforeStages: Stage[] = [
  {
    no: "01",
    h: "困りごとを依頼する作業の名称に置き換える",
    decide:
      "「庭が荒れている」「木が大きくなりすぎた」という状態を、剪定、伐採、草の処理、地面や構造物の工事のいずれに当たるかに置き換えます。すべてを正確に特定する必要はなく、中心となる作業の目安がつけば十分です。",
    skip:
      "業者ごとに異なる作業を想定して回答するため、届いた提案を比較できなくなります。問い合わせのやり直しが最も多く発生するのがこの段階です。",
    links: [
      { href: "/area/hiroshima/", label: "依頼内容の整理と優先順位" },
      { href: "/area/toyama/", label: "説明・見積もりで使われる作業用語" },
      { href: "/area/kurashiki/", label: "前の住人から庭を引き継いだ場合" },
    ],
  },
  {
    no: "02",
    h: "意思決定者と依頼の名義を決める",
    decide:
      "庭の所有者、費用の負担者、業者との連絡担当者が同一とは限りません。家族で住んでいる家、親の家、賃貸や店舗の物件では、最終的な決定者と、申し込み・書類の名義を事前に揃えます。",
    skip:
      "見積もりが届いてから家族内で意見が分かれ、回答が止まります。名義の異なる書類が届き、作り直しが必要になることもあります。",
    links: [
      { href: "/area/niigata/", label: "意思決定者と費用負担者の確認" },
      { href: "/area/nara/", label: "家族に代わって手配する場合の手順" },
      { href: "/area/osaka/", label: "個人宅・管理組合・店舗それぞれの依頼方法" },
      { href: "/area/nagano/", label: "事業用・賃貸物件の庭を依頼する際の書類" },
    ],
  },
  {
    no: "03",
    h: "規制や制度の対象となるかを確認する",
    decide:
      "木の伐採、生垣の設置、庭の形状の変更といった作業では、地域の規制により事前の手続きが必要な場合や、補助の対象となる場合があります。隣地にかかる枝の扱いにも法律上の規定があります。自分の依頼がこれらに該当する可能性があるかを、依頼前に確認します。",
    skip:
      "手続きが必要な作業を先に進めてしまう、補助の申請を工事前に行う必要があったなど、取り返しのつかない順序の誤りが生じます。",
    links: [
      { href: "/area/mito/", label: "風致地区で伐採・庭の改修を行う前の確認" },
      { href: "/area/kawaguchi/", label: "生垣・緑化の補助制度を利用した依頼" },
      { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
    ],
  },
  {
    no: "04",
    h: "予算の上限と完了希望時期を決める",
    decide:
      "使える金額の上限と、完了を希望する日をおおまかに決めます。いずれも業者に伝えるための目安であるため、厳密である必要はありません。季節に左右される作業や、来客・引っ越しなどの期日がある場合は、その日から逆算します。",
    skip:
      "上限が決まっていないと、届いた見積もりの金額を判断する基準がなくなります。期日が決まっていないと、業者の都合に合わせた日程となり、期日に間に合わないことが後から判明します。",
    links: [
      { href: "/area/kagoshima/", label: "予算から範囲を組み立てる" },
      { href: "/area/nishinomiya/", label: "期日から逆算した依頼の進め方" },
      { href: "/area/sapporo/", label: "積雪を考慮した年間計画" },
    ],
  },
];

const contactStages: Stage[] = [
  {
    no: "05",
    h: "依頼の形態を選ぶ",
    decide:
      "一度だけ依頼するのか、継続して任せるのか。剪定・草の処理・外構工事を1社にまとめるのか、分けるのか。窓口が自ら作業する業者か、別の業者を紹介する仕組みか。この三つの組み合わせにより、探す先が変わります。",
    skip:
      "一度きりのつもりで選んだ業者に、後から毎年の管理まで依頼しようとして条件が合わない、紹介型であることを知らずに窓口と現場の説明が食い違う、といった相違が生じます。",
    links: [
      { href: "/area/utsunomiya/", label: "年間契約とスポット依頼の選び方" },
      { href: "/area/himeji/", label: "1社にまとめて依頼するか分けて依頼するか" },
      { href: "/area/nagoya/", label: "自社施工型と紹介型の見分け方" },
    ],
  },
  {
    no: "06",
    h: "候補を絞り込む判断材料を決める",
    decide:
      "口コミ、施工事例、会社情報、作業者の資格のうち、何を基準に候補を残すかを先に決めておくと、比較にかかる時間を短縮できます。この段階では、候補を数社に絞り込むところまでを行います。",
    skip:
      "評価の星の数や印象だけで決めてしまい、自分の庭の条件に合うかどうかを確認しないまま進めることになります。",
    links: [
      { href: "/area/nagasaki/", label: "口コミと実績の読み方" },
      { href: "/area/chiba/", label: "資格と許可の確認方法" },
    ],
  },
  {
    no: "07",
    h: "最初の連絡で伝える情報を決める",
    decide:
      "電話、フォーム、メッセージのいずれで連絡するかを決め、庭の所在地、中心となる作業、希望時期、写真をどこまで最初に伝えるかを決めます。回答を待つ期限も、この時点で決めておきます。",
    skip:
      "最初の回答が「一度現地を確認します」のみとなり、業者ごとの比較に入るまでのやり取りが増えます。回答が来ない場合に、次の行動に移る判断も遅れます。",
    links: [
      { href: "/area/shizuoka/", label: "問い合わせ手段と最初のやり取り" },
      { href: "/area/funabashi/", label: "現地調査の前に写真で状況を伝える方法" },
      { href: "/area/fukuoka/", label: "依頼内容の伝え方と仕上がりの共有" },
      { href: "/area/gifu/", label: "返信がない場合の対応" },
    ],
  },
];

const estimateStages: Stage[] = [
  {
    no: "08",
    h: "何社に同じ条件で依頼するかを決める",
    decide:
      "見積もりを複数取得する場合は、すべての業者に同じ範囲・同じ仕上がりの希望を伝えます。断る業者が出ることも、この時点で想定しておきます。",
    skip:
      "条件の異なる見積もりが揃い、金額の差が作業内容の差なのか単価の差なのかを判断できなくなります。断りの連絡を後回しにすると、業者との関係に支障が生じることもあります。",
    links: [{ href: "/area/okayama/", label: "相見積もりの条件の揃え方と断り方" }],
  },
  {
    no: "09",
    h: "見積書の記載内容を確認する",
    decide:
      "合計金額より先に、作業範囲、処分の扱い、追加費用が発生する条件が記載されているかを確認します。口頭で説明を受けた内容が書面に反映されているかも、この段階で確認します。",
    skip:
      "作業当日になって「それは含まれていません」という説明を受けることになります。書面に記載のない事項は、後から申し出ても合意に至りにくくなります。",
    links: [
      { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
      { href: "/cost/price/", label: "庭工事の料金相場" },
    ],
  },
  {
    no: "10",
    h: "契約の成立時点、支払方法、事故時の責任を確認する",
    decide:
      "どの時点で依頼が確定するのか、支払いの方法と時期、取り消しや日程変更の扱い、作業中に物が破損した場合の補償。この四点を、申し込み前に確認します。",
    skip:
      "検討中のつもりで回答したところ確定扱いになっていた、取り消し後に費用が発生すると知った、事故の際の補償範囲が分からない、といった問題が生じます。",
    links: [
      { href: "/area/kumamoto/", label: "支払いの方法と契約が決まる時点" },
      { href: "/area/matsuyama/", label: "依頼後の取り消し・日程変更" },
      { href: "/area/yokohama/", label: "高低差のある庭と保険・保証" },
    ],
  },
];

const workdayStages: Stage[] = [
  {
    no: "11",
    h: "日程と順延時の扱いを決める",
    decide:
      "作業日の候補に加えて、雨天や業者の都合で延期となった場合の再調整の方法を決めます。延期を許容できる依頼かどうかも、この段階で区別します。",
    skip:
      "延期の連絡を受けた際に次の候補日をその場で決められず、数週間空いてしまうことがあります。",
    links: [{ href: "/area/kitakyushu/", label: "日程の決め方と天候による順延" }],
  },
  {
    no: "12",
    h: "住宅と周辺の受け入れ準備",
    decide:
      "庭に置いている物を移動するか、移動できない物をどのように伝えるか。車両や枝の搬出経路、隣家への事前の挨拶を行うかどうか。住宅側で用意する事項を、作業日の前に決めます。",
    skip:
      "当日に作業が中断し、予定の時間内に終わらなくなります。近隣との関係に支障が残ることもあります。",
    links: [
      { href: "/area/hamamatsu/", label: "作業日までの受け入れ準備" },
      { href: "/area/saitama/", label: "作業日の近隣への配慮と段取り" },
      { href: "/area/tokyo/", label: "狭小地・搬出経路の確認" },
    ],
  },
  {
    no: "13",
    h: "当日の立ち会いの有無を決める",
    decide:
      "立ち会う場合は、どの場面で何を伝えるか。立ち会えない場合は、鍵や門の扱いと、作業報告の受け取り方法を決めます。",
    skip:
      "立ち会っていても要望を伝える機会を逃すことがあり、立ち会わない場合は、作業完了後にどこまで作業が行われたのかを把握できなくなります。",
    links: [
      { href: "/area/sagamihara/", label: "作業当日の立ち会い方" },
      { href: "/area/sendai/", label: "立ち会いができない場合の依頼方法" },
    ],
  },
];

const afterStages: Stage[] = [
  {
    no: "14",
    h: "引き渡し時に確認する事項",
    decide:
      "作業完了の直後に、依頼した範囲の作業と片づけが済んでいるかを確認する時間を設けます。植栽を行った場合は、その後の保証やアフターサービスの内容も確認します。",
    skip:
      "業者の退出後に気づいた点は、伝えることが難しくなります。植えた木が枯れた場合に、どちらの負担となるかが不明確なままになります。",
    links: [
      { href: "/area/kawasaki/", label: "完了時の確認と手直しの依頼方法" },
      { href: "/area/oita/", label: "植栽後の保証とアフターサービスの確認方法" },
    ],
  },
  {
    no: "15",
    h: "記録として残す資料を決める",
    decide:
      "見積書、やり取りの記録、作業前後の写真を、どこにどのように保管するかを決めます。",
    skip:
      "後に認識の相違が生じた際に確認する手段がなく、次回の依頼時にも前回の内容を最初から説明し直すことになります。",
    links: [{ href: "/area/sakai/", label: "認識の相違に備える記録の残し方" }],
  },
  {
    no: "16",
    h: "次回も同じ業者に依頼するかを決める",
    decide:
      "今回の仕上がりを基準に継続して任せるか、別の業者に変更するかを決めます。継続する場合は仕上がりの方針を言語化し、変更する場合は新しい業者に引き継ぐ情報を揃えます。",
    skip:
      "その都度の判断で依頼することになり、年ごとに仕上がりにばらつきが生じます。業者を変更した際に、これまでの庭の経緯が引き継がれません。",
    links: [
      { href: "/area/kyoto/", label: "仕上がりの方針と継続管理" },
      { href: "/area/kanazawa/", label: "依頼先を変更する際の引き継ぎ" },
    ],
  },
];

const picks = ["oniwa-master", "kurashi-market", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-master":
    "剪定・伐採・草刈り・芝刈りなどに対応する業者を無料で紹介するサービスで、受付は24時間365日とされています。自社では施工せず加盟業者を紹介する形態のため、作業内容がまだ定まらない段階で相談し、紹介された業者と詳細を詰めていく使い方ができます。見積もりは無料ですが、一部の調査費用は別途とされているため、別途費用となる項目は申し込み前にご確認ください。運営は株式会社アシストです。",
  "kurashi-market":
    "地域の登録業者を検索して依頼する仕組みで、見積もりなしで料金が決まり、作業内容が標準化されています。依頼する作業の名称と範囲がすでに決まっている方であれば、見積もりのやり取りを省いて契約の段階まで進められます。完了後に口コミを投稿でき、損害賠償補償制度も用意されています。一方で、キャンセル処理や業者の遅刻など、トラブル時の運営対応に不満を示す口コミもあるため、予約条件とキャンセル規定は申し込み前にご確認ください。運営はみんなのマーケット株式会社です。",
  "mitsumoa":
    "依頼内容を入力すると最大5件の見積もりが届き、費用・口コミ・評判を比較して選べます。依頼後は業者とチャットで打ち合わせができるため、見積もりを比較する段階と条件を詰める段階を、同じ画面で進められます。実際の作業品質は見積もりを提示した業者により異なるため、見積書の内容は業者ごとにご確認ください。運営は株式会社ミツモアです。",
};

const checklist = [
  {
    h: "依頼する作業の中心を明確にしたか",
    b: "剪定、伐採、草の処理、工事のいずれが中心かの目安がついていれば十分です。",
  },
  {
    h: "意思決定者と申し込みの名義が決まっているか",
    b: "家族や所有者との合意ができていない場合は、問い合わせの前に合意を得ておきます。",
  },
  {
    h: "地域の規制や制度に該当する可能性を確認したか",
    b: "木の伐採、庭の形状の変更、生垣の設置、隣地に枝がかかる場合は、特に確認が必要です。",
  },
  {
    h: "予算の上限と完了希望時期を決めたか",
    b: "おおまかな目安で構いません。届いた見積もりを判断する基準になります。",
  },
  {
    h: "最初の連絡で伝える情報を揃えたか",
    b: "庭の所在地、中心となる作業、希望時期、写真を揃えます。回答を待つ期限も決めておきます。",
  },
];

const faqs = [
  {
    q: "全部の段階を順番どおりに進めないといけませんか。",
    a: "いいえ。依頼する作業が小規模で、名称も範囲も明確であれば、いくつかの段階は省略できます。本ページの順序は、判断に迷った際に「現在どの段階にいて、何が決まっていないか」を確認するためのものです。決まっていない段階が見つかった場合は、その段階の詳しいページをご参照ください。",
  },
  {
    q: "いちばん先に決めておくべきなのはどれですか。",
    a: "依頼する作業、つまり困りごとを作業の名称に置き換える段階です。ここが決まると、業者の探し方、見積もりの比較方法、作業日の準備まで、後の段階を順に決めやすくなります。判断が難しい場合は、無理に決めず、状態を写真で伝えて相談する方法もあります。",
  },
  {
    q: "途中まで進めてから、前の段階に戻ってもかまいませんか。",
    a: "問題ありません。見積もりを確認してから予算の上限を見直す、問い合わせのやり取りの中で依頼の形態を変更する、といった見直しはよく行われます。ただし、業者とのやり取りが始まっている段階で見直す場合は、変更点を業者にも伝えないと、従来の条件のまま話が進みます。複数社に依頼している場合は、すべての業者に同じ変更を伝えてください。",
  },
  {
    q: "費用の目安はどこで分かりますか。",
    a: "造園ナビでは、作業の種類ごとの費用の考え方を料金のページにまとめています。庭全体の工事は「庭工事の料金相場」、木の手入れは剪定費用のページをご参照ください。実際の金額は庭の条件により異なるため、目安を把握したうえで、同じ条件で見積もりを取得して比較することをおすすめします。",
  },
  {
    q: "高松市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、高松市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

function StageList({ stages }: { stages: Stage[] }) {
  return (
    <ol className="space-y-5">
      {stages.map((s) => (
        <li key={s.no} className="rounded-2xl border border-border bg-surface p-5">
          <div className="flex items-start gap-3 mb-3">
            <span className="mono text-primary flex-shrink-0 mt-1">{s.no}</span>
            <h3 className="font-bold text-text-primary">{s.h}</h3>
          </div>
          <p className="text-[15px] leading-8 text-text-secondary mb-3">
            <span className="font-bold text-text-primary">この段階で決めること：</span>
            {s.decide}
          </p>
          <p className="text-[15px] leading-8 text-text-secondary mb-3">
            <span className="font-bold text-text-primary">決めずに進めた場合：</span>
            {s.skip}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {s.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-primary underline underline-offset-2">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default function AreaTakamatsuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "初めて庭の手入れを依頼する際の流れを段階に分け、各段階で決める事項と、詳しい解説ページへの案内を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "高松" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを初めて依頼する際、どこから着手すればよいかが分からず、まず一社に電話をするという進め方になりがちです。それで円滑に進む場合もありますが、途中で「先にこれを決めておけばよかった」と気づき、やり直しが生じることも少なくありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          高松市内の住宅の庭を依頼する場合も、流れそのものは変わりません。本ページでは、依頼前から作業完了後までを16の段階に分け、各段階で決める事項と、決めずに進めた場合に生じる問題をまとめています。詳しい進め方は、段階ごとに造園ナビの関連ページで解説しています。
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

      <section id="takamatsu-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          判断に迷う原因は決める順序にあります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の依頼で決める事項は、一つひとつは難しいものではありません。何を依頼するか、予算はいくらか、期限はいつか、誰に依頼するか。判断に迷うのは、それらを決める順序が前後した場合です。業者の提案を聞いてから自分の希望を考え始めると、業者ごとに前提の異なる提案を比較することになります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          前の段階で決めた事項が後の段階の判断基準となるよう順序を整えておくと、一つ決めるごとに次の判断がしやすくなります。以下の段階は、その順序で整理しています。すべてを完璧に決める必要はなく、自分の依頼で決まっていない事項を確認するための指針としてご活用ください。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            大きく分けると、自分だけで決められる段階（01〜04）、業者を探して連絡する段階（05〜07）、見積もりと契約の段階（08〜10）、作業日までと当日の段階（11〜13）、作業完了後の段階（14〜16）の五つです。後の段階ほど業者が関わるため、決め直す際の負担が大きくなります。
          </p>
        </div>
      </section>

      <section id="takamatsu-before" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          依頼前に自分で決めておく段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          まだどの業者にも連絡していない段階です。ここで決めた事項は、業者に配慮することなく自由に変更できます。後の段階でのやり直しを減らす効果が最も大きいのも、この段階です。
        </p>
        <StageList stages={beforeStages} />
      </section>

      <section id="takamatsu-contact" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者を探し、最初の連絡をする段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この段階から業者が関わります。どのような形態の業者を探すか、何を基準に候補を残すか、最初に何を伝えるか。この三点により、最初に得られる回答の質が変わります。
        </p>
        <StageList stages={contactStages} />
      </section>

      <section id="takamatsu-estimate" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積もりを受け取り、契約を決める段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          届いた見積もりを比較して一社に決め、契約するまでの段階です。前の段階で決めた範囲・予算・時期が、比較の判断基準になります。
        </p>
        <StageList stages={estimateStages} />
      </section>

      <section id="takamatsu-workday" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業日を決め、当日を迎える段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          依頼先が決まった後は、住宅側の準備が中心となります。作業そのものは業者が行いますが、日程と受け入れの準備は依頼者側で決める必要があります。
        </p>
        <StageList stages={workdayStages} />
      </section>

      <section id="takamatsu-after" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業完了後の段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭木は成長を続けるため、一度の作業ですべてが完了することは多くありません。作業完了の直後に確認する事項と、次回の依頼に向けて残しておく事項があります。
        </p>
        <StageList stages={afterStages} />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          季節ごとの手入れの目安は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          、木の手入れの費用は
          <Link href="/cost/pruning-price/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定費用の相場
          </Link>
          、自分で手入れを行う場合の考え方は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="takamatsu-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、初めて依頼する方がどの段階から利用するかという観点では、次の3サービスはそれぞれ利用に適した段階が異なります。作業内容がまだ決まっていない段階、作業と範囲が決まっている段階、見積もりを比較したい段階の順に掲載しています。
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

      <section id="takamatsu-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。業者を探す段階（05・06）で、窓口の形態と運営会社を比較する際にご活用ください。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="高松" />
      </section>

      <section id="takamatsu-checklist" className="scroll-mt-20 mb-12">
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

      <section id="takamatsu-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="takamatsu" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/hiroshima/", label: "依頼内容の整理と優先順位" },
            { href: "/area/shizuoka/", label: "問い合わせ手段と最初のやり取り" },
            { href: "/area/okayama/", label: "相見積もりの条件の揃え方と断り方" },
            { href: "/area/kawasaki/", label: "完了時の確認と手直しの依頼方法" },
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
          すべてを決めてから行動する必要はありません。決まっていない段階を一つ確認し、そこから進めることをおすすめします。
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
