import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/takamatsu/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "高松の造園・庭の手入れ業者の選び方｜はじめて頼むときの全体の流れ";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れをはじめて頼むときの流れを、頼む前・探して問い合わせる・見積もりと契約・作業日まで・終わってからの段階に分け、それぞれで何を決めるか、決めないまま進むと何が起きるかを短くまとめました。各段階の詳しい解説ページへの道案内と、掲載サービスの運営会社・対応エリアも載せています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "はじめて庭の手入れを頼むときに、どの順番で何を決めればよいかを段階ごとに整理した道案内です。",
  },
};

const toc = [
  { id: "takamatsu-order", label: "迷うのは、決める順番が見えていないから" },
  { id: "takamatsu-before", label: "頼む前に、自分の側で決めておく段階" },
  { id: "takamatsu-contact", label: "相手を探し、最初の連絡を入れる段階" },
  { id: "takamatsu-estimate", label: "見積もりを受け取り、契約を決める段階" },
  { id: "takamatsu-workday", label: "作業日を決め、当日を迎える段階" },
  { id: "takamatsu-after", label: "終わったあとに残る段階" },
  { id: "takamatsu-pick", label: "この条件で見ておきたい3サービス" },
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
    h: "困りごとを、頼む作業の名前に直す",
    decide:
      "「庭が荒れている」「木が大きくなりすぎた」という状態を、剪定なのか、伐採なのか、草の処理なのか、地面や構造物の工事なのかに置き換えます。全部を正確に言い当てる必要はなく、どの作業が中心になりそうかの見当が付けば足ります。",
    skip:
      "相手ごとに違う作業を思い浮かべて返事をしてくるので、届いた提案が比べられない形になります。問い合わせのやり直しがいちばん多く起きるのがこの段階です。",
    links: [
      { href: "/area/hiroshima/", label: "困りごとの切り分けと優先順位" },
      { href: "/area/toyama/", label: "説明や見積もりに出てくる作業の言葉" },
      { href: "/area/kurashiki/", label: "前の住人の庭を引き継いだとき" },
    ],
  },
  {
    no: "02",
    h: "誰が決めて、誰の名前で頼むか",
    decide:
      "庭の持ち主、費用を出す人、業者とやり取りする人が同じとは限りません。家族で住んでいる家、親の家、賃貸や店舗の物件では、誰が最終的に決めるのかと、申し込みと書類の名義を先に揃えます。",
    skip:
      "見積もりが届いてから家の中で意見が割れ、返事が止まります。名義が違う書類が届いて作り直しになることもあります。",
    links: [
      { href: "/area/niigata/", label: "誰が決めて誰が払うかの分担" },
      { href: "/area/nara/", label: "家族に代わって手配するときの段取り" },
      { href: "/area/osaka/", label: "個人宅と管理組合・店舗の分岐" },
      { href: "/area/nagano/", label: "事業用・賃貸物件の庭を頼むときの書類" },
    ],
  },
  {
    no: "03",
    h: "決まりと制度に当たるかどうか",
    decide:
      "木を切る、生け垣を作る、庭の形を変えるといった作業では、地域の決まりで事前の手続きが要る場合や、補助の対象になる場合があります。隣の敷地にかかる枝の扱いにも法律上のルールがあります。自分の依頼がそのどれかに触れそうかだけを、頼む前に見ておきます。",
    skip:
      "手続きが必要な作業を先に進めてしまう、補助の申請が工事より前でなければならなかった、といった取り返しのつかない順番の誤りが起きます。",
    links: [
      { href: "/area/mito/", label: "風致地区で木を切る・庭を変える前の確認" },
      { href: "/area/kawaguchi/", label: "生け垣・緑化の補助制度を使って頼む" },
      { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
    ],
  },
  {
    no: "04",
    h: "予算の枠と、いつまでに終えたいか",
    decide:
      "使える金額の上限と、終わっていてほしい日をおおまかに決めます。どちらも業者に伝える前提の数字なので、きっちりでなくてかまいません。季節に左右される作業や、来客・引っ越しなどの期日がある場合は、そこから逆に数えます。",
    skip:
      "上限が決まっていないと、届いた見積もりに対して高いか安いかの判断軸がなくなります。期日が決まっていないと、相手の都合のいい日程に流され、間に合わないことが後から分かります。",
    links: [
      { href: "/area/kagoshima/", label: "予算から範囲を組み立てる" },
      { href: "/area/nishinomiya/", label: "期日から逆算して頼む" },
      { href: "/area/sapporo/", label: "雪を前提にした年間計画" },
    ],
  },
];

const contactStages: Stage[] = [
  {
    no: "05",
    h: "頼み方の形を選ぶ",
    decide:
      "一度だけ頼むのか、続けて任せるのか。剪定と草の処理と外まわりの工事を1社にまとめるのか、分けるのか。窓口が自分で作業する会社か、別の会社を紹介する仕組みか。この三つの組み合わせで、探す先が変わります。",
    skip:
      "一回きりのつもりで選んだ相手に、あとから毎年の管理まで頼みたくなって合わない、紹介型だと知らずに窓口と現場の話が食い違う、といったずれが出ます。",
    links: [
      { href: "/area/utsunomiya/", label: "年間契約と、そのつど頼む形の選び分け" },
      { href: "/area/himeji/", label: "1社にまとめるか、分けて頼むか" },
      { href: "/area/nagoya/", label: "自社施工型と紹介型の見分け方" },
    ],
  },
  {
    no: "06",
    h: "候補を絞る材料を決める",
    decide:
      "口コミ、施工事例、会社の情報、作業する人の資格。何を見て候補に残すかを先に決めておくと、比べる時間が短くなります。ここで決めるのは、候補を数社に絞るところまでです。",
    skip:
      "星の数や見た目の印象だけで決めてしまい、自分の庭の条件に合うかどうかを確かめないまま進むことになります。",
    links: [
      { href: "/area/nagasaki/", label: "口コミと実績を何の根拠として読むか" },
      { href: "/area/chiba/", label: "資格と許可の確かめ方" },
    ],
  },
  {
    no: "07",
    h: "最初の連絡で何を渡すか",
    decide:
      "電話か、フォームか、メッセージか。どの手段で連絡し、庭の場所、作業の中心、希望の時期、写真をどこまで最初に渡すかを決めます。返事を待つ期限も、この時点で自分の中に置いておきます。",
    skip:
      "最初の返答が「一度見に行きます」だけになり、相手ごとの比較に入れるまでの往復が増えます。返事が来ないときに、いつ次へ動くかの判断も遅れます。",
    links: [
      { href: "/area/shizuoka/", label: "問い合わせ手段と最初のやり取り" },
      { href: "/area/funabashi/", label: "現地を見てもらう前に写真で伝える" },
      { href: "/area/fukuoka/", label: "依頼内容の伝え方と仕上がりの共有" },
      { href: "/area/gifu/", label: "返事が来ないときの進め方" },
    ],
  },
];

const estimateStages: Stage[] = [
  {
    no: "08",
    h: "何社に、同じ条件で頼むか",
    decide:
      "見積もりを複数取るなら、全社に同じ範囲・同じ仕上がりの希望を渡します。断る相手が出ることも、この時点で前提にしておきます。",
    skip:
      "条件の違う見積もりが並び、金額の差が作業の差なのか単価の差なのかが分からなくなります。断りの連絡を後回しにして、気まずさだけが残ることもあります。",
    links: [{ href: "/area/okayama/", label: "相見積もりの揃え方と断り方" }],
  },
  {
    no: "09",
    h: "見積書の中身で何を確かめるか",
    decide:
      "金額の合計より先に、作業の範囲、処分の扱い、追加が出る条件が書かれているかを見ます。口頭で聞いた内容が書面に入っているかどうかも、ここで確かめます。",
    skip:
      "当日になって「それは含まれていません」が出てきます。後から言っても、書面にないことは話がまとまりにくくなります。",
    links: [
      { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
      { href: "/cost/price/", label: "庭工事の料金相場" },
    ],
  },
  {
    no: "10",
    h: "いつ契約が決まり、どう払い、何が起きたら誰が負うか",
    decide:
      "どの時点で依頼が確定するのか、支払いの方法と時期、取りやめや日程変更の扱い、作業中に物が壊れたときの補償。この四つを、申し込む前に一度ずつ聞いておきます。",
    skip:
      "まだ検討中のつもりで返事をしたら確定扱いになっていた、取りやめたら費用がかかると後で知った、事故のときの補償の範囲が分からない、という順番のずれが起きます。",
    links: [
      { href: "/area/kumamoto/", label: "支払いの方法と契約が決まる時点" },
      { href: "/area/matsuyama/", label: "頼んだあとに取りやめる・日をずらす" },
      { href: "/area/yokohama/", label: "高低差のある庭と保険・保証" },
    ],
  },
];

const workdayStages: Stage[] = [
  {
    no: "11",
    h: "日程と、延びたときの扱い",
    decide:
      "作業日の候補に加えて、雨や相手の都合で延びたときにどう決め直すかを決めます。待てる依頼か、待てない依頼かもここで分けます。",
    skip:
      "延期の連絡が来たときに、次の候補日をその場で決められず、何週間も空くことがあります。",
    links: [{ href: "/area/kitakyushu/", label: "日程の決め方と天候による順延" }],
  },
  {
    no: "12",
    h: "家と周りの受け入れ",
    decide:
      "庭に置いてある物をどかすか、動かせない物をどう知らせるか。車や枝の運び出しの通り道、隣家への声かけをするかどうか。家の側で用意することを作業日の前に決めます。",
    skip:
      "当日に作業の手が止まり、予定の時間内に終わらなくなります。隣近所とのあいだに、あとまで残る引っかかりが生まれることもあります。",
    links: [
      { href: "/area/hamamatsu/", label: "作業日までの受け入れの支度" },
      { href: "/area/saitama/", label: "作業日の近隣への配慮と段取り" },
      { href: "/area/tokyo/", label: "狭小地・搬出経路から考える" },
    ],
  },
  {
    no: "13",
    h: "当日、そこにいるか、いないか",
    decide:
      "立ち会うなら、どの場面で顔を出して何を伝えるか。立ち会えないなら、鍵や門の扱い、作業の報告をどんな形で受け取るか。",
    skip:
      "立ち会っていても伝えたいことを言う機会を逃し、立ち会わない場合は、終わったあとに何がどこまで行われたのかが分からなくなります。",
    links: [
      { href: "/area/sagamihara/", label: "当日の立ち会い方と声のかけどころ" },
      { href: "/area/sendai/", label: "立ち会えない庭の頼み方" },
    ],
  },
];

const afterStages: Stage[] = [
  {
    no: "14",
    h: "引き渡しの場で確かめること",
    decide:
      "作業が終わった直後に、頼んだ範囲が済んでいるか、片づけは済んでいるかを見る時間を取ります。植えたものがある場合は、その後の保証やアフターがどうなっているかも聞いておきます。",
    skip:
      "業者が帰ったあとに気づいたことは、伝え方が難しくなります。植えた木が枯れたときに、誰の負担になるのかが分からないままになります。",
    links: [
      { href: "/area/kawasaki/", label: "完了時の確認と手直しの頼み方" },
      { href: "/area/oita/", label: "植えたあとの保証とアフターの確かめ方" },
    ],
  },
  {
    no: "15",
    h: "何を記録として残すか",
    decide:
      "見積書、やり取りの記録、作業前後の写真を、どこにどうまとめておくかを決めます。",
    skip:
      "あとで食い違いが起きたときに確かめる手段がなく、次に頼むときにも前回の内容を一から説明し直すことになります。",
    links: [{ href: "/area/sakai/", label: "食い違いに備える記録の残し方" }],
  },
  {
    no: "16",
    h: "次も同じ相手に頼むか",
    decide:
      "今回の仕上がりを基準に続けて任せるか、別の相手に替えるか。続けるなら仕上がりの方針を言葉にしておき、替えるなら新しい相手に渡す情報を揃えます。",
    skip:
      "毎回その場の判断で頼むことになり、年ごとに仕上がりがばらつきます。相手を替えたときに、これまでの庭の経緯が抜け落ちます。",
    links: [
      { href: "/area/kyoto/", label: "仕上がりの方針と継続管理" },
      { href: "/area/kanazawa/", label: "頼む先を替えるときの引き継ぎ" },
    ],
  },
];

const picks = ["oniwa-master", "kurashi-market", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-master":
    "剪定・伐採・草刈り・芝刈りなどに対応する業者を無料で紹介するサービスで、受付は24時間365日とされています。自社では施工せず加盟業者を紹介する形のため、どの作業に当たるのかがまだはっきりしない段階で相談を入れ、紹介された業者と話を詰めていく使い方ができます。見積もりは無料ですが、一部の調査費用は別途とされているので、何が別になるかは申し込みの前に聞いてください。運営は株式会社アシストです。",
  "kurashi-market":
    "地域の登録業者を検索して依頼する仕組みで、見積もりなしで料金が決まり、作業内容が標準化されています。頼みたい作業の名前と範囲がすでに決まっている人なら、見積もりの往復を省いて契約の段階まで進めます。完了後に口コミを投稿でき、損害賠償補償制度も用意されています。一方でキャンセル処理や業者の遅刻など、トラブル時の運営対応に不満を示す口コミもあるため、予約条件とキャンセル規定は申し込み前に確認してください。運営はみんなのマーケット株式会社です。",
  "mitsumoa":
    "依頼内容を入力すると最大5件の見積もりが届き、費用・口コミ・評判を比べて選べます。依頼後は業者とチャットで打ち合わせができるため、見積もりを並べて比べる段階と、条件を詰める段階を同じ画面の中で進められます。実際の作業品質は届いた業者によるので、見積書の中身は業者ごとに確かめてください。運営は株式会社ミツモアです。",
};

const checklist = [
  {
    h: "頼みたい作業の中心を一言で言えるか",
    b: "剪定、伐採、草の処理、工事のどれが中心かの見当が付いていれば十分です。",
  },
  {
    h: "決める人と、申し込みの名義が決まっているか",
    b: "家族や持ち主と話が付いていないなら、問い合わせより先にそちらを済ませます。",
  },
  {
    h: "地域の決まりや制度に触れそうかを見たか",
    b: "木を切る、庭の形を変える、生け垣を作る、隣地に枝がかかる場合は特に確認します。",
  },
  {
    h: "予算の上限と、終えたい時期を決めたか",
    b: "おおまかで構いません。届いた見積もりを判断する軸になります。",
  },
  {
    h: "最初の連絡で渡すものを揃えたか",
    b: "庭の場所、作業の中心、希望の時期、写真。返事を待つ期限も自分の中で決めておきます。",
  },
];

const faqs = [
  {
    q: "全部の段階を順番どおりに進めないといけませんか。",
    a: "いいえ。頼む作業が小さく、名前も範囲もはっきりしているなら、いくつかの段階はほとんど考えずに通り過ぎられます。このページの順番は、迷ったときに「いま自分はどこにいて、何が決まっていないのか」を確かめるためのものです。決まっていない段階が見つかったら、そこだけ詳しいページを読んでください。",
  },
  {
    q: "いちばん先に決めておくべきなのはどれですか。",
    a: "どの作業を頼みたいのか、つまり困りごとを作業の名前に直すところです。ここが決まると、相手の探し方、見積もりの比べ方、作業日の準備まで、後の段階がつながって決めやすくなります。どうしても分からない場合は、無理に決めずに、状態を写真で伝えて相談するところから始める方法もあります。",
  },
  {
    q: "途中まで進めてから、前の段階に戻ってもかまいませんか。",
    a: "かまいません。見積もりを見てから予算の枠を見直す、問い合わせのやり取りの中で頼み方の形を変える、といった戻り方はよくあります。ただ、相手がいる段階で戻る場合は、何を変えたのかを相手にも伝えておかないと、古い条件のまま話が進みます。複数社に頼んでいるなら、全社に同じ変更を伝えてください。",
  },
  {
    q: "費用の目安はどこで分かりますか。",
    a: "造園ナビでは、作業の種類ごとの費用の考え方を料金のページにまとめています。庭全体の工事は庭工事の料金相場、木の手入れは剪定費用のページを参照してください。実際の金額は庭の条件で変わるため、目安を把握したうえで、同じ条件で見積もりを取って比べるのが確実です。",
  },
  {
    q: "高松市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、高松市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
            <span className="font-bold text-text-primary">決めないまま進むと：</span>
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
          "はじめて庭の手入れを頼むときの流れを段階に分け、それぞれで何を決めるかと、詳しい解説ページへの道筋を整理しました。",
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
          庭の手入れをはじめて頼もうとすると、どこから手を付ければよいのかが分からず、とりあえず一社に電話をしてみる、という始め方になりがちです。それで上手くいくこともありますが、途中で「先にこれを決めておけばよかった」と気づいて、話を巻き戻すことも少なくありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          高松にある家の庭で頼む場合も、流れそのものは変わりません。このページでは、頼む前から作業が終わったあとまでを16の段階に並べ、それぞれで何を決めるのか、決めないまま進むと何が起きるのかだけを短く書きました。詳しい進め方は、段階ごとに造園ナビの別のページへ案内しています。
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
          迷うのは、決める順番が見えていないから
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の依頼で決めることは、一つひとつは難しくありません。何を頼むか、いくらまでか、いつまでか、誰に頼むか。迷いが生まれるのは、それを決める順番が前後したときです。相手の提案を聞いてから自分の希望を考え始めると、相手ごとに違う前提の話を比べることになります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          逆に、前の段階で決めたことが後の段階の物差しになるように並べておくと、一つ決めるたびに次が決めやすくなります。以下の段階は、その順番で並べています。すべてを完璧に決める必要はなく、自分の依頼で決まっていないところを見つけるための地図として使ってください。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            大きく分けると、自分の側だけで決められる段階（01〜04）、相手を探して連絡を入れる段階（05〜07）、見積もりと契約の段階（08〜10）、作業日までと当日の段階（11〜13）、終わったあとの段階（14〜16）の五つです。後ろの段階ほど相手が関わるので、決め直すときの手間が大きくなります。
          </p>
        </div>
      </section>

      <section id="takamatsu-before" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          頼む前に、自分の側で決めておく段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          まだ誰にも連絡していない段階です。ここで決めたことは、相手に気兼ねなくいくらでも変えられます。後ろの段階でのやり直しを減らす効果がいちばん大きいのもここです。
        </p>
        <StageList stages={beforeStages} />
      </section>

      <section id="takamatsu-contact" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          相手を探し、最初の連絡を入れる段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          ここから相手が関わります。どんな形の相手を探すのか、何を見て候補に残すのか、最初に何を渡すのか。この三つで、最初に返ってくるものの質が変わります。
        </p>
        <StageList stages={contactStages} />
      </section>

      <section id="takamatsu-estimate" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積もりを受け取り、契約を決める段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          届いた見積もりを並べて一社に決め、契約するまでの段階です。前の段階で決めた範囲・予算・時期が、ここで比べる物差しになります。
        </p>
        <StageList stages={estimateStages} />
      </section>

      <section id="takamatsu-workday" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業日を決め、当日を迎える段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          頼む相手が決まったあとは、家の側の準備の話になります。作業そのものは業者が行いますが、日程と場所の受け入れは依頼する側でしか決められません。
        </p>
        <StageList stages={workdayStages} />
      </section>

      <section id="takamatsu-after" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          終わったあとに残る段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭木は伸び続けるので、一度の作業で話が完全に終わることはあまりありません。終わった直後に確かめることと、次につなげるために残すことがあります。
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
          、自分で手を入れる場合の考え方は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="takamatsu-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、はじめて頼む人がどの段階から入るかという観点で見ると、次の3つは入り口の位置がそれぞれ違います。作業の中身がまだ決まっていない段階、作業と範囲が決まっている段階、見積もりを並べて比べたい段階の順に並べています。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。相手を探す段階（05・06）で、窓口の形と運営会社を見比べるときに使ってください。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/hiroshima/", label: "困りごとの切り分けと優先順位" },
            { href: "/area/shizuoka/", label: "問い合わせ手段と最初のやり取り" },
            { href: "/area/okayama/", label: "相見積もりの揃え方と断り方" },
            { href: "/area/kawasaki/", label: "完了時の確認と手直しの頼み方" },
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
          すべてを決めてから動く必要はありません。決まっていない段階を一つ見つけて、そこから進めてください。
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
