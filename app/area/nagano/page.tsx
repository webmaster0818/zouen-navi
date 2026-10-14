import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nagano/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "長野の造園・庭の手入れ業者の選び方｜事業用・賃貸物件の庭を頼むときの書類";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "アパート・貸家・店舗・事務所の植栽を事業として頼むと、作業後に書類が残ります。請求書の宛名と但し書き、複数物件の請求の分け方、インボイス制度で確かめること（国税庁公表サイトでの登録番号確認）、作業報告と写真の受け取り方。長野で事業用の庭を頼むときの書類まわりと、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "賃貸物件や店舗の庭を事業者として頼むときに、請求書・インボイス・作業報告をどう受け取るかを整理しました。",
  },
};

const toc = [
  { id: "nagano-papers", label: "事業用の庭では、作業のあとに書類が残る" },
  { id: "nagano-address", label: "宛名と但し書きは、頼む前に伝えておく" },
  { id: "nagano-split", label: "物件が複数あるときの請求の分け方" },
  { id: "nagano-invoice", label: "インボイス制度で、発注側が確かめておくこと" },
  { id: "nagano-report", label: "作業報告と写真を、物件の記録として受け取る" },
  { id: "nagano-pick", label: "この条件で見ておきたい3サービス" },
  { id: "nagano-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nagano-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nagano-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["mitsumoa", "epark", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "mitsumoa":
    "条件を入力すると複数の業者から見積もりが届き、依頼後は業者とチャットで打ち合わせができます。宛名や但し書き、物件ごとの請求の分け方、登録番号の記載といった書類の希望を、文字のやり取りとして残したまま相手に伝えられるのが、この条件での使いどころです。実際の作業と書類の発行は届いた業者ごとになるため、書類の希望にどう応えてくれるかも比較の材料にできます。運営は株式会社ミツモアです。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから事業者を探せ、各事業者のページに料金表・営業時間・対応エリア・お客さまの声が掲載されています。検索・予約の窓口で、作業は各事業者が行う形です。請求書を出すのも作業をした事業者になると考えられるため、宛名や登録番号の記載について、予約の段階で相手の事業者に直接確かめておく前提で使います。運営は株式会社REsta（BEST株式会社の子会社）です。",
  "hikaku-biz":
    "発注側は利用無料で、複数業者の見積もりを比較して依頼先を選べる、造園・外構を含む幅広い分野のビジネスマッチングのサービスです。造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分もあるため、物件の植栽と外まわりの工事を同じ探し方で当たれます。公式のクチコミは本文末尾が省略表示されており全文は確認できないため、相手の書類の出し方は見積もり時のやり取りで確かめてください。運営は株式会社ワンズマインドです。",
};

const addressItems = [
  {
    h: "宛名は、支払う名義に合わせる",
    b: "法人として持っている物件なら法人名、個人で貸家を持っているなら氏名か屋号。誰の名前で請求を受けるのかは、支払いの出どころと揃えておくと後で整理しやすくなります。業者の側は、問い合わせてきた人の名前で書類を作るのが普通なので、管理を任されている担当者が連絡する場合は、宛名にする名義を最初に伝えておかないと、担当者個人の名前で書類が届くことがあります。",
  },
  {
    h: "但し書きや明細に、物件が分かる情報を入れてもらう",
    b: "「庭木剪定代として」だけでは、どの物件の作業だったのかが書類から読めません。物件名や所在地、作業した区画を明細や但し書きに入れてもらうと、あとで帳簿や物件の記録と突き合わせるときに迷いません。何を書いてほしいかは、文章にして先に渡しておくと書き間違いが減ります。",
  },
  {
    h: "作業日と請求日を分けて考える",
    b: "作業をした日と、請求書の日付は一致するとは限りません。月末にまとめて請求する業者もあります。帳簿の締めとの関係で日付が気になる場合は、作業日を明細に入れてもらえるかを聞いておきます。",
  },
  {
    h: "紙か電子か、送り先はどこか",
    b: "郵送か、データでの送付か。送り先は物件の所在地ではなく、事務所や経理の担当者の住所になることが多いはずです。物件の住所に届いてしまい、入居者の郵便受けに入るといった行き違いは、送り先を最初に一行伝えるだけで避けられます。",
  },
];

const splitItems = [
  {
    h: "物件ごとに一枚ずつにしてもらう",
    b: "複数の物件を同じ日にまとめて頼んでも、請求書を物件ごとに分けてもらえば、物件ごとの収支や記録にそのまま綴じられます。業者によっては一枚にまとめたほうが手間が少ないので、分けてほしい場合は依頼の段階で伝えます。",
  },
  {
    h: "一枚にまとめるなら、明細を物件単位で区切る",
    b: "請求書を一枚にする場合でも、明細の行を物件ごとに区切り、それぞれの小計が分かる形にしてもらうと、あとで按分する手間がなくなります。見積もりの段階から同じ区切り方にしておくと、見積もりと請求の突き合わせも楽になります。",
  },
  {
    h: "共用部と専用庭を分けて書いてもらう",
    b: "アパートの共用部の植栽と、入居者が使う専用庭の手入れが同じ日に入ることがあります。どちらの費用として扱うのかが物件の取り決めによって違う場合、作業場所ごとに明細を分けてもらうと、あとで説明が付けやすくなります。",
  },
  {
    h: "定期で頼むなら、締めと単位を最初に決める",
    b: "定期的に入ってもらう形にするなら、月ごとか作業ごとか、物件ごとかまとめてかを最初に決めておきます。続けて頼む形そのものの選び方は、宇都宮のページで扱っています。",
  },
];

const invoiceItems = [
  {
    h: "適格請求書に必要な記載事項",
    b: "国税庁「インボイス制度について」および国税庁のパンフレット「適格請求書等保存方式の概要 －インボイス制度の理解のために－」では、適格請求書（インボイス）の記載事項として、①適格請求書発行事業者の氏名又は名称及び登録番号、②取引年月日、③取引内容（軽減税率の対象品目である旨）、④税率ごとに区分して合計した対価の額（税抜き又は税込み）及び適用税率、⑤税率ごとに区分した消費税額等、⑥書類の交付を受ける事業者の氏名又は名称、が挙げられています。届いた請求書にこれらが揃っているかを見るのが、発注側の最初の確認になります。",
  },
  {
    h: "様式は決まっておらず、複数の書類で満たす形もある",
    b: "同じパンフレットでは、様式は法令や通達で定められておらず、必要な事項が記載されていれば名称を問わず、手書きでも適格請求書に該当するとされています。また、請求書と納品書のように相互の関連が明確な複数の書類全体で記載事項を満たしていればよい、とも説明されています。「請求書」という題が付いていないから足りない、とは限らないということです。",
  },
  {
    h: "登録番号は「適格請求書発行事業者公表サイト」で確かめる",
    b: "国税庁の「国税庁インボイス制度適格請求書発行事業者公表サイト」では、登録番号を入力すると、その事業者の氏名又は名称、法人の場合は本店又は主たる事務所の所在地、登録番号、登録年月日、登録取消・失効の年月日といった公表事項を確認できます。登録番号はＴで始まり、法人番号を持つ事業者はＴ＋法人番号、それ以外の個人事業者などはＴ＋13桁の数字という構成です。請求書に書かれた番号と名称が公表サイトの内容と一致しているかを一度確かめておくと、書類の受け取り側としての確認になります。",
  },
  {
    h: "相手が登録しているかどうかは、頼む前に聞いてよい",
    b: "庭の手入れを請け負う事業者には、個人で営んでいる人も多くいます。適格請求書を交付できるのは登録を受けた事業者だけなので、登録しているかどうかは見積もりの段階で聞いておくと、請求書が届いてから慌てずに済みます。登録していない事業者に頼むこと自体が禁じられているわけではありません。",
  },
];

const reportItems = [
  {
    h: "作業前と作業後を、同じ位置から撮ってもらう",
    b: "賃貸物件では、オーナー自身が現地に行かないことがよくあります。作業前と作業後の写真を同じ位置から撮ってもらい、請求書と一緒に受け取れるかを先に聞いておきます。写真があれば、作業が行われたことを物件の記録として残せますし、入居者や管理会社に状況を伝えるときにも使えます。",
  },
  {
    h: "報告に入れてほしい項目を決めておく",
    b: "作業日、作業した場所、作業の内容、出た枝や刈り草をどう処分したか、気づいたこと（枯れ込み、傾き、設備の不具合など）。業者の報告の形はまちまちなので、物件ごとにこの程度の項目が揃っていれば十分、という線をこちらで決めて伝えておくと、毎回の報告が比べやすくなります。",
  },
  {
    h: "受け取ったら、物件ごとに書類と写真を一緒に綴じる",
    b: "請求書、作業報告、写真がばらばらに届くと、後から探すときに時間がかかります。物件ごとのフォルダに日付順で入れておくだけで、次に頼むときの指示書代わりにもなります。売却や管理の引き継ぎがあったときも、そのまま相手に渡せます。",
  },
  {
    h: "入居者やテナントの側から見える記録を残す",
    b: "店舗や事務所の植栽は、利用者の目に触れる場所にあります。いつ手が入ったかが分かる記録があれば、「最近手入れされていない」という指摘に日付で答えられます。食い違いが起きたときの記録の残し方そのものは、堺のページで扱っています。",
  },
];

const checklist = [
  {
    h: "宛名にする名義を決めたか",
    b: "法人名か、個人の氏名か屋号か。担当者が問い合わせる場合は、名義を最初に伝えます。",
  },
  {
    h: "明細や但し書きに入れてほしい情報を書き出したか",
    b: "物件名、所在地、作業区画、作業日など、後で突き合わせに使う情報を文章で渡します。",
  },
  {
    h: "請求を物件ごとに分けるか、まとめるかを決めたか",
    b: "まとめる場合も、明細を物件単位で区切ってもらえるかを確かめます。",
  },
  {
    h: "相手が適格請求書発行事業者かどうかを聞いたか",
    b: "登録番号を教えてもらい、国税庁の公表サイトで名称と一致するかを確かめます。",
  },
  {
    h: "作業報告と写真の受け取り方を決めたか",
    b: "作業前後の写真、報告の項目、送り先と送る形式を先に伝えておきます。",
  },
];

const faqs = [
  {
    q: "個人で貸家を一軒持っているだけでも、事業者として頼むことになりますか。",
    a: "このページでいう「事業として頼む」は、賃貸や店舗の運営のために庭の手入れを頼む場面を指しています。所有の規模にかかわらず、請求書の宛名や物件が分かる明細、作業の記録を揃えておくと、後で整理するときに困りません。その費用が税務上どう扱われるかは、所有のしかたや申告の状況によって変わるため、税理士または税務署に確認してください。",
  },
  {
    q: "庭の手入れの費用は経費になりますか。",
    a: "造園ナビでは税務上の判断はお答えできません。経費としての扱いは、物件の用途や所有の形、作業の内容によって変わりうるため、税理士または税務署に確認してください。このページで扱っているのは、判断に必要な書類を業者からどう受け取っておくか、という発注側の段取りです。",
  },
  {
    q: "相手が適格請求書発行事業者でない場合、頼まないほうがよいですか。",
    a: "登録していない事業者に頼むこと自体が禁じられているわけではありません。国税庁のパンフレットでは、制度開始後の一定期間、免税事業者等からの課税仕入れについて経過措置が設けられていることも説明されています。ただ、それが自分の申告にどう影響するかは事業の状況によって違うため、依頼先を決める前に税理士または税務署に確認するのが確実です。業者の側には、登録の有無を見積もりの段階で聞いておいてください。",
  },
  {
    q: "管理会社を通して頼む場合も、このページの内容は当てはまりますか。",
    a: "管理会社を通す場合は、請求書が業者から管理会社に出され、オーナーには管理会社から請求が来る、という流れになることがあります。その場合、ここで挙げた宛名や明細の希望は、管理会社に伝えることになります。誰が発注主体になるかで窓口が変わる点は、大阪のページで整理しています。",
  },
  {
    q: "長野市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、長野市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "賃貸物件や店舗の庭を事業者として頼むときの、請求書の宛名・但し書き、インボイス制度の確認、作業報告の受け取り方を整理しました。",
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
          自宅の庭を頼むときは、作業が終わって支払いを済ませれば、それで話が閉じることがほとんどです。ところが、アパートや貸家、店舗、事務所の植栽を事業として頼む場合は、作業のあとに請求書や報告が残り、それが帳簿や物件の記録、場合によっては申告の資料として使われます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          長野にある物件の庭を頼む場合も同じです。書類に何が書かれているかは、頼む前にこちらから伝えておかないと、業者の側の普段の書き方で届きます。このページでは、請求書の宛名と但し書き、物件が複数あるときの請求の分け方、インボイス制度で発注側が確かめること、作業報告と写真の受け取り方を整理します。税務上の扱いそのものは扱わず、判断に必要な書類をどう揃えておくかに絞っています。
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
          事業用の庭では、作業のあとに書類が残る
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          事業用の物件の庭で、後から必要になるのは大きく三つです。誰が誰に何の代金を払ったのかが分かる請求書や領収書、その書類が税の制度上の要件を満たしているかどうか、そして実際にどこでどんな作業が行われたのかを示す報告と写真です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          どれも、作業が終わってから業者に作り直してもらうことはできますが、相手に手間をかけさせることになり、時間が経つほど頼みにくくなります。書類の形は、見積もりを頼む段階で一緒に伝えてしまうのがいちばん手間がかかりません。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            見積書そのもののどの欄を確かめるかは
            <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
              見積書の読み方と書面の確認
            </Link>
            、支払いの方法と契約が決まる時点は
            <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
              支払いの方法と契約が決まる時点
            </Link>
            で扱っています。このページでは、作業のあとに受け取る書類の側を見ていきます。
          </p>
        </div>
      </section>

      <section id="nagano-address" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          宛名と但し書きは、頼む前に伝えておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          業者が書類を作るときに参照するのは、問い合わせのときに受け取った情報です。こちらが何も言わなければ、連絡してきた人の名前と、作業した場所の住所で書類が作られます。
        </p>
        <Cards items={addressItems} />
      </section>

      <section id="nagano-split" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          物件が複数あるときの請求の分け方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ業者に複数の物件を任せると、移動や段取りがまとまって頼みやすくなる一方、書類が一つにまとまって物件ごとの区別が付かなくなりがちです。分け方は、こちらが後でどう整理したいかから逆に決めます。
        </p>
        <Cards items={splitItems} alt />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          年間でまとめて任せるか、そのつど頼むかの選び方は
          <Link href="/area/utsunomiya/" className="text-primary underline underline-offset-2 mx-1">
            年間契約と、そのつど頼む形の選び分け
          </Link>
          、複数の作業を1社にまとめるか分けるかは
          <Link href="/area/himeji/" className="text-primary underline underline-offset-2 mx-1">
            1社にまとめるか、分けて頼むか
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="nagano-invoice" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          インボイス制度で、発注側が確かめておくこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          消費税の仕入税額控除の方式として、令和5年（2023年）10月1日から適格請求書等保存方式（インボイス制度）が始まっています。国税庁の説明では、仕入税額控除の適用を受けるためには、一定の事項が記載された帳簿と、適格請求書（インボイス）等の保存が必要とされています。ここでは、国税庁が公表している内容のうち、庭の手入れを頼む発注側が書類を受け取るときに関わる部分だけを挙げます。
        </p>
        <Cards items={invoiceItems} />
        <div className="rounded-2xl border border-border bg-surface-alt p-5 mt-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            出典：国税庁「インボイス制度について」、国税庁パンフレット「適格請求書等保存方式の概要 －インボイス制度の理解のために－」、国税庁インボイス制度適格請求書発行事業者公表サイト（いずれも{UPDATED_LABEL}時点で確認）。制度の細部や経過措置、特例の適用条件は改正されることがあります。最新の内容は国税庁のインボイス制度特設サイトで確認してください。この費用が経費としてどう扱われるか、仕入税額控除の対象になるかといった判断は、事業の状況によって異なるため、税理士または税務署に確認してください。
          </p>
        </div>
      </section>

      <section id="nagano-report" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業報告と写真を、物件の記録として受け取る
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          請求書はお金の記録ですが、作業報告と写真は物件の状態の記録です。事業用の庭では、この二つが揃っていると、次の手入れの指示、入居者への説明、管理の引き継ぎのどれにも使えます。
        </p>
        <Cards items={reportItems} alt />
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          オーナーが現地に行かずに作業を進める段取りは
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会えない庭の頼み方
          </Link>
          、食い違いに備えた記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            食い違いに備える記録の残し方
          </Link>
          、物件の植栽に手を入れる時期の目安は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          のページにあります。
        </p>
      </section>

      <section id="nagano-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、書類の希望を文字で伝えて残したい、請求書を出す相手を事業者単位で確かめたいという条件で見ると、次の3つは使い方を組み立てやすい構成です。書類の発行のしかたは、どのサービスでも実際に作業する事業者ごとに違うため、依頼の前に相手に確かめてください。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。窓口のサービスと、請求書を発行する事業者が別になる場合があるため、運営会社の名称は窓口側の情報として読んでください。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/osaka/", label: "個人宅と管理組合・店舗の分岐" },
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/utsunomiya/", label: "年間契約と、そのつど頼む形の選び分け" },
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
          書類の形は、見積もりを頼むときに一緒に伝えるのがいちばん手間がかかりません。
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
