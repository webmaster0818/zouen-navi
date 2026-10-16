import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nagano/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "長野の造園・庭の手入れ業者の選び方｜事業用・賃貸物件の庭を依頼する際の書類";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "アパート・貸家・店舗・事務所の植栽を事業として依頼する際の、請求書の宛名と但し書き、複数物件の請求の分け方、インボイス制度での確認事項、作業報告と写真の受け取り方を整理し、長野で依頼する場合の掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "賃貸物件や店舗の庭を事業者として依頼する際に、請求書・インボイス・作業報告をどのように受け取るかを整理しています。",
  },
};

const toc = [
  { id: "nagano-papers", label: "事業用の庭では作業後に書類が残ります" },
  { id: "nagano-address", label: "宛名と但し書きは依頼前に伝える" },
  { id: "nagano-split", label: "複数物件がある場合の請求の分け方" },
  { id: "nagano-invoice", label: "インボイス制度で発注者が確認すべき事項" },
  { id: "nagano-report", label: "作業報告と写真を物件の記録として受け取る" },
  { id: "nagano-pick", label: "この条件に適した3サービス" },
  { id: "nagano-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nagano-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nagano-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["mitsumoa", "epark", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "mitsumoa":
    "条件を入力すると複数の業者から見積もりが届き、依頼後は業者とチャットで打ち合わせができます。宛名や但し書き、物件ごとの請求の分け方、登録番号の記載といった書類に関する希望を、文字のやり取りとして記録に残しながら伝えられる点が、この条件での利点です。実際の作業と書類の発行は見積もりを提示した業者ごとに行われるため、書類に関する希望への対応も比較の材料にできます。運営は株式会社ミツモアです。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから業者を探すことができ、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。検索・予約の窓口であり、作業は各業者が行う形式です。請求書を発行するのも作業した業者になると考えられるため、宛名や登録番号の記載については、予約の段階で業者に直接確認しておく前提で利用します。運営は株式会社REsta（BEST株式会社の子会社）です。",
  "hikaku-biz":
    "発注者の利用は無料で、複数業者の見積もりを比較して依頼先を選べる、造園・外構を含む幅広い分野のビジネスマッチングサービスです。造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分もあるため、物件の植栽と外構工事を同じ方法で探せます。公式サイトの口コミは本文の末尾が省略表示されており全文を確認できないため、業者の書類の発行方法は見積もり時のやり取りでご確認ください。運営は株式会社ワンズマインドです。",
};

const addressItems = [
  {
    h: "宛名は支払いの名義に合わせる",
    b: "法人として所有している物件であれば法人名、個人で貸家を所有している場合は氏名または屋号とします。請求を受ける名義を支払いの名義と揃えておくと、後の整理が容易になります。業者は問い合わせた人の名前で書類を作成するのが一般的なため、管理を任されている担当者が連絡する場合は、宛名とする名義を最初に伝えておかないと、担当者個人の名前で書類が届くことがあります。",
  },
  {
    h: "但し書きや明細に物件を特定できる情報を記載してもらう",
    b: "「庭木剪定代として」のみでは、どの物件の作業であったかを書類から判別できません。物件名や所在地、作業した区画を明細や但し書きに記載してもらうと、後で帳簿や物件の記録と照合する際に迷いません。記載を希望する内容は、文書にして事前に伝えておくと記載の誤りが減ります。",
  },
  {
    h: "作業日と請求日を区別して考える",
    b: "作業日と請求書の日付は一致するとは限りません。月末にまとめて請求する業者もあります。帳簿の締めとの関係で日付が重要な場合は、作業日を明細に記載してもらえるかを確認しておきます。",
  },
  {
    h: "紙か電子か、送付先はどこか",
    b: "郵送かデータでの送付かを確認します。送付先は物件の所在地ではなく、事務所や経理担当者の住所となることが多いはずです。物件の住所に届き、入居者の郵便受けに入るといった行き違いは、送付先を最初に伝えておくだけで防げます。",
  },
];

const splitItems = [
  {
    h: "物件ごとに請求書を分けてもらう",
    b: "複数の物件を同日にまとめて依頼しても、請求書を物件ごとに分けてもらえば、物件ごとの収支や記録にそのまま保管できます。業者によっては一枚にまとめたほうが手間が少ないため、分けてほしい場合は依頼の段階で伝えます。",
  },
  {
    h: "一枚にまとめる場合は明細を物件単位で区切る",
    b: "請求書を一枚にする場合でも、明細の行を物件ごとに区切り、それぞれの小計が分かる形にしてもらうと、後で按分する手間がなくなります。見積もりの段階から同じ区切り方にしておくと、見積もりと請求の照合も容易になります。",
  },
  {
    h: "共用部と専用庭を分けて記載してもらう",
    b: "アパートの共用部の植栽と、入居者が使用する専用庭の手入れが同日に行われることがあります。どちらの費用として扱うかが物件の取り決めによって異なる場合は、作業場所ごとに明細を分けてもらうと、後の説明が容易になります。",
  },
  {
    h: "定期的に依頼する場合は締め日と請求単位を最初に決める",
    b: "定期的に作業を依頼する形式にする場合は、月ごとか作業ごとか、物件ごとかまとめてかを最初に決めておきます。継続して依頼する形式の選び方は、宇都宮のページで解説しています。",
  },
];

const invoiceItems = [
  {
    h: "適格請求書に必要な記載事項",
    b: "国税庁「インボイス制度について」および国税庁のパンフレット「適格請求書等保存方式の概要 －インボイス制度の理解のために－」では、適格請求書（インボイス）の記載事項として、①適格請求書発行事業者の氏名又は名称及び登録番号、②取引年月日、③取引内容（軽減税率の対象品目である旨）、④税率ごとに区分して合計した対価の額（税抜き又は税込み）及び適用税率、⑤税率ごとに区分した消費税額等、⑥書類の交付を受ける事業者の氏名又は名称、が挙げられています。届いた請求書にこれらが記載されているかを確認することが、発注者としての最初の確認になります。",
  },
  {
    h: "様式の定めはなく、複数の書類で要件を満たす形式も認められています",
    b: "同じパンフレットでは、様式は法令や通達で定められておらず、必要な事項が記載されていれば名称を問わず、手書きであっても適格請求書に該当するとされています。また、請求書と納品書のように相互の関連が明確な複数の書類全体で記載事項を満たしていればよい、とも説明されています。「請求書」という表題が付いていないことのみをもって、要件を満たさないとは限りません。",
  },
  {
    h: "登録番号は「適格請求書発行事業者公表サイト」で確認する",
    b: "国税庁の「国税庁インボイス制度適格請求書発行事業者公表サイト」では、登録番号を入力すると、その事業者の氏名又は名称、法人の場合は本店又は主たる事務所の所在地、登録番号、登録年月日、登録取消・失効の年月日といった公表事項を確認できます。登録番号はＴで始まり、法人番号を有する事業者はＴ＋法人番号、それ以外の個人事業者などはＴ＋13桁の数字という構成です。請求書に記載された番号と名称が公表サイトの内容と一致しているかを一度確認しておくと、書類を受け取る側としての確認になります。",
  },
  {
    h: "登録の有無は依頼前に確認して差し支えありません",
    b: "庭の手入れを請け負う業者には、個人で営業している方も多くいます。適格請求書を交付できるのは登録を受けた事業者のみであるため、登録の有無は見積もりの段階で確認しておくと、請求書の受領後に慌てずに済みます。登録していない業者に依頼すること自体が禁じられているわけではありません。",
  },
];

const reportItems = [
  {
    h: "作業前と作業後を同じ位置から撮影してもらう",
    b: "賃貸物件では、オーナー自身が現地に行かないことがよくあります。作業前と作業後の写真を同じ位置から撮影してもらい、請求書とあわせて受け取れるかを事前に確認しておきます。写真があれば、作業が行われたことを物件の記録として残せるほか、入居者や管理会社に状況を伝える際にも利用できます。",
  },
  {
    h: "報告に記載してほしい項目を決めておく",
    b: "作業日、作業場所、作業内容、剪定した枝や刈り草の処分方法、気づいた点（枯れ込み、傾き、設備の不具合など）を記載項目とします。報告の形式は業者によって異なるため、物件ごとにこの程度の項目が揃っていれば十分という基準を依頼者が決めて伝えておくと、毎回の報告を比較しやすくなります。",
  },
  {
    h: "受け取った書類と写真は物件ごとにまとめて保管する",
    b: "請求書、作業報告、写真が別々に届くと、後から探す際に時間がかかります。物件ごとのフォルダに日付順で保管しておくだけで、次回依頼する際の指示書としても利用できます。売却や管理の引き継ぎの際も、そのまま相手に渡せます。",
  },
  {
    h: "入居者やテナントに説明できる記録を残す",
    b: "店舗や事務所の植栽は、利用者の目に触れる場所にあります。いつ手入れが行われたかが分かる記録があれば、「最近手入れされていない」という指摘に日付で回答できます。認識の相違に備えた記録の残し方については、堺のページで解説しています。",
  },
];

const checklist = [
  {
    h: "宛名とする名義を決めたか",
    b: "法人名か、個人の氏名か屋号かを決めます。担当者が問い合わせる場合は、名義を最初に伝えます。",
  },
  {
    h: "明細や但し書きに記載してほしい情報を書き出したか",
    b: "物件名、所在地、作業区画、作業日など、後で照合に使用する情報を文書で伝えます。",
  },
  {
    h: "請求を物件ごとに分けるか、まとめるかを決めたか",
    b: "まとめる場合も、明細を物件単位で区切ってもらえるかを確認します。",
  },
  {
    h: "業者が適格請求書発行事業者かどうかを確認したか",
    b: "登録番号を確認し、国税庁の公表サイトで名称と一致するかを確認します。",
  },
  {
    h: "作業報告と写真の受け取り方を決めたか",
    b: "作業前後の写真、報告の項目、送付先と送付形式を事前に伝えておきます。",
  },
];

const faqs = [
  {
    q: "個人で貸家を一軒持っているだけでも、事業者として頼むことになりますか。",
    a: "本ページでいう「事業として依頼する」とは、賃貸や店舗の運営のために庭の手入れを依頼する場面を指しています。所有の規模にかかわらず、請求書の宛名や物件を特定できる明細、作業の記録を揃えておくと、後の整理に困りません。その費用の税務上の扱いは、所有の形態や申告の状況によって異なるため、税理士または税務署にご確認ください。",
  },
  {
    q: "庭の手入れの費用は経費になりますか。",
    a: "造園ナビでは税務上の判断についてはお答えできません。経費としての扱いは、物件の用途や所有の形態、作業の内容によって異なる可能性があるため、税理士または税務署にご確認ください。本ページで扱っているのは、判断に必要な書類を業者からどのように受け取っておくかという、発注者側の段取りです。",
  },
  {
    q: "相手が適格請求書発行事業者でない場合、頼まないほうがよいですか。",
    a: "登録していない業者に依頼すること自体が禁じられているわけではありません。国税庁のパンフレットでは、制度開始後の一定期間、免税事業者等からの課税仕入れについて経過措置が設けられていることも説明されています。ただし、それが依頼者自身の申告にどのように影響するかは事業の状況によって異なるため、依頼先を決める前に税理士または税務署に確認することをおすすめします。業者には、登録の有無を見積もりの段階で確認しておいてください。",
  },
  {
    q: "管理会社を通して頼む場合も、このページの内容は当てはまりますか。",
    a: "管理会社を通す場合は、請求書が業者から管理会社に発行され、オーナーには管理会社から請求が届くという流れになることがあります。その場合、本ページで挙げた宛名や明細に関する希望は、管理会社に伝えることになります。誰が発注主体となるかによって窓口が変わる点は、大阪のページで解説しています。",
  },
  {
    q: "長野市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、長野市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

function Cards({ items, alt }: { items: { h: string; b: string }[]; alt?: boolean }) {
  return (
    <div className="space-y-4">
      {items.map((x) => (
        <div
          key={x.h}
          className={`rounded-2xl border border-border ${alt ? "bg-surface-alt" : "bg-surface"} p-5`}
        >
          <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
          <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
        </div>
      ))}
    </div>
  );
}

export default function AreaNaganoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "賃貸物件や店舗の庭を事業者として依頼する際の、請求書の宛名・但し書き、インボイス制度の確認、作業報告の受け取り方を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "長野" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          自宅の庭を依頼する場合は、作業が完了して支払いを済ませれば、それで手続きが終わることがほとんどです。しかし、アパートや貸家、店舗、事務所の植栽を事業として依頼する場合は、作業後に請求書や報告が残り、それが帳簿や物件の記録、場合によっては申告の資料として使用されます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          長野市内の物件の庭を依頼する場合も同様です。書類の記載内容は、依頼前に依頼者から伝えておかないと、業者の通常の様式で届きます。本ページでは、請求書の宛名と但し書き、複数物件がある場合の請求の分け方、インボイス制度で発注者が確認すべき事項、作業報告と写真の受け取り方を整理します。税務上の扱いそのものは扱わず、判断に必要な書類の揃え方に絞って解説します。
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

      <section id="nagano-papers" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          事業用の庭では作業後に書類が残ります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          事業用の物件の庭で後から必要になるものは、大きく三つです。誰が誰に何の代金を支払ったのかが分かる請求書や領収書、その書類が税制上の要件を満たしているかどうか、そして実際にどこでどのような作業が行われたのかを示す報告と写真です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          いずれも、作業完了後に業者に作り直してもらうことは可能ですが、業者に手間をかけることになり、時間が経つほど依頼しにくくなります。書類の形式は、見積もりを依頼する段階であわせて伝えるのが最も手間のかからない方法です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            見積書のどの欄を確認するかは
            <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
              見積書の読み方と書面の確認
            </Link>
            、支払いの方法と契約が成立する時点は
            <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
              支払いの方法と契約が決まる時点
            </Link>
            で解説しています。本ページでは、作業後に受け取る書類について解説します。
          </p>
        </div>
      </section>

      <section id="nagano-address" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          宛名と但し書きは依頼前に伝える
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          業者が書類を作成する際に参照するのは、問い合わせの際に受け取った情報です。依頼者が何も伝えなければ、連絡した人の名前と、作業した場所の住所で書類が作成されます。
        </p>
        <Cards items={addressItems} />
      </section>

      <section id="nagano-split" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          複数物件がある場合の請求の分け方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ業者に複数の物件を依頼すると、移動や段取りがまとまって依頼しやすくなる一方、書類が一つにまとまり、物件ごとの区別がつかなくなりがちです。分け方は、依頼者が後でどのように整理したいかから逆算して決めます。
        </p>
        <Cards items={splitItems} alt />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          年間でまとめて依頼するか、その都度依頼するかの選び方は
          <Link href="/area/utsunomiya/" className="text-primary underline underline-offset-2 mx-1">
            年間契約とスポット依頼の選び方
          </Link>
          、複数の作業を1社にまとめるか分けるかは
          <Link href="/area/himeji/" className="text-primary underline underline-offset-2 mx-1">
            1社にまとめて依頼するか分けて依頼するか
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="nagano-invoice" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          インボイス制度で発注者が確認すべき事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          消費税の仕入税額控除の方式として、令和5年（2023年）10月1日から適格請求書等保存方式（インボイス制度）が開始されています。国税庁の説明では、仕入税額控除の適用を受けるためには、一定の事項が記載された帳簿と、適格請求書（インボイス）等の保存が必要とされています。本ページでは、国税庁が公表している内容のうち、庭の手入れを依頼する発注者が書類を受け取る際に関わる部分のみを取り上げます。
        </p>
        <Cards items={invoiceItems} />
        <div className="rounded-2xl border border-border bg-surface-alt p-5 mt-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            出典：国税庁「インボイス制度について」、国税庁パンフレット「適格請求書等保存方式の概要 －インボイス制度の理解のために－」、国税庁インボイス制度適格請求書発行事業者公表サイト（いずれも{UPDATED_LABEL}時点で確認）。制度の細部や経過措置、特例の適用条件は改正される場合があります。最新の内容は国税庁のインボイス制度特設サイトにてご確認ください。この費用の経費としての扱いや、仕入税額控除の対象となるかといった判断は、事業の状況によって異なるため、税理士または税務署にご確認ください。
          </p>
        </div>
      </section>

      <section id="nagano-report" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業報告と写真を物件の記録として受け取る
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          請求書は金銭の記録であり、作業報告と写真は物件の状態の記録です。事業用の庭では、この二つが揃っていると、次回の手入れの指示、入居者への説明、管理の引き継ぎのいずれにも利用できます。
        </p>
        <Cards items={reportItems} alt />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          オーナーが現地に立ち会わずに作業を進める段取りは
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会いができない場合の依頼方法
          </Link>
          、認識の相違に備えた記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            認識の相違に備える記録の残し方
          </Link>
          、物件の植栽の手入れ時期の目安は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          のページで解説しています。
        </p>
      </section>

      <section id="nagano-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、書類に関する希望を文字で伝えて記録に残したい、請求書の発行元を業者単位で確認したいという条件では、次の3サービスが利用方法を組み立てやすい構成です。書類の発行方法は、どのサービスでも実際に作業する業者ごとに異なるため、依頼の前に業者へご確認ください。
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

      <section id="nagano-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。窓口のサービスと請求書を発行する業者が異なる場合があるため、運営会社の名称は窓口側の情報としてご覧ください。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="長野" />
      </section>

      <section id="nagano-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <Cards items={checklist} alt />
      </section>

      <section id="nagano-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="nagano" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/osaka/", label: "個人宅・管理組合・店舗それぞれの依頼方法" },
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/utsunomiya/", label: "年間契約とスポット依頼の選び方" },
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
          書類の形式は、見積もりを依頼する際にあわせて伝えるのが最も手間のかからない方法です。
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
