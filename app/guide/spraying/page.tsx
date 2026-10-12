import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/spraying/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "住宅地で庭木の消毒をするとき・頼むとき｜薬剤散布の前に確かめること";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "家庭の庭で使う殺虫剤・殺菌剤・除草剤も「農薬」として扱われます。農林水産省・環境省の通知「住宅地等における農薬使用について」と農薬取締法をもとに、散布以外の方法を先に考えること、ラベルどおりに使うこと、周りの家への事前の知らせ方、風と時間帯、業者に頼むときに確かめることを整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "住宅地で庭木に薬剤を散布するとき・業者に頼むときに確かめることを、国の通知と法令をもとに整理しました。",
  },
};

const toc = [
  { id: "sp-scope", label: "庭で使う殺虫剤や除草剤も「農薬」にあたる" },
  { id: "sp-notice", label: "国の通知「住宅地等における農薬使用について」の中身" },
  { id: "sp-other", label: "まず、散布しない方法で済まないかを考える" },
  { id: "sp-label", label: "散布するなら、ラベルに書かれたとおりに" },
  { id: "sp-neighbors", label: "周りの家に知らせることと、風・時間帯" },
  { id: "sp-hire", label: "業者に消毒を頼むときに確かめること" },
  { id: "sp-faq", label: "よくある質問" },
  { id: "sp-sources", label: "このページで参照した法令・公的機関の資料" },
];

const scopeItems = [
  {
    h: "農薬取締法の「農薬」には、樹木に使う薬剤が含まれる",
    b: "農薬取締法第2条は、農薬を、農作物等（樹木及び農林産物を含む）を害する病害虫の防除に用いられる殺菌剤、殺虫剤、除草剤その他の薬剤などと定めています。庭木に付いた虫や病気、庭の雑草に使う薬剤も、この定義の中に入ります。",
  },
  {
    h: "家庭園芸用のスプレー剤も、農薬に含まれる",
    b: "農林水産省・環境省のリーフレット「農薬飛散による被害の発生を防ぐために」には、農薬には作物や樹木の病害虫の防除を目的に散布するもののほかに、ガーデニングや家庭菜園用のスプレー式の殺虫剤や殺菌剤、芝生等の雑草対策で使用する除草剤なども含まれる、と注記されています。",
  },
  {
    h: "使ってよいのは、表示のある登録農薬",
    b: "農薬取締法第24条は、何人も、容器または包装に法律で定める表示のある農薬（販売が禁止されているものを除く）と特定農薬以外の農薬を使用してはならない、と定めています。農林水産省の登録番号が書かれているかどうかが、最初の確認点になります。",
  },
  {
    h: "住宅の敷地と、その近くで使うときの決まり",
    b: "農薬取締法に基づく「農薬を使用する者が遵守すべき基準を定める省令」第6条は、住宅、学校、保育所、病院、公園その他の人が居住し、滞在し、または頻繁に訪れる施設の敷地およびこれらに近接する土地で農薬を使用するときは、農薬が飛散することを防止するために必要な措置を講じるよう努めなければならない、としています。自宅の庭で散布する場合も、この「住宅の敷地」にあたります。",
  },
];

const noticePoints = [
  {
    h: "どんな事例が問題になってきたか",
    b: "通知の前文には、児童・生徒が在校中の学校や開園時間中の公園・庭園で散布された事例、街路樹などに害虫の発生状況にかかわらず一定の時期に決まった農薬が散布されている事例、周辺住民に事前の通知がないまま散布された事例が報告されている、と書かれています。",
  },
  {
    h: "誰に向けた決まりか",
    b: "通知は農林水産省消費・安全局長と環境省水・大気環境局長の連名で各都道府県知事宛てに出されたもので、農薬を使う人、散布を委託する人、病害虫防除の責任者、散布する土地や施設の管理者に対して、別紙の事項を守るよう指導することを求めています。",
  },
  {
    h: "公園・街路樹等向けと、住宅地周辺の農地向けの二本立て",
    b: "別紙は、学校や公園、街路樹、住宅地に近接する森林など人が頻繁に訪れる場所の植栽についての遵守事項と、住宅地内や住宅地に近接した農地（市民農園や家庭菜園を含む）での遵守事項に分かれています。個人の庭木を直接名指ししたものではありませんが、散布以外の方法の優先、ラベルの遵守、事前の周知、風と時間帯の選び方、記録といった項目は両方に共通しており、住宅の庭で散布するときにもそのまま当てはめられる内容です。",
  },
];

const otherWays = [
  {
    h: "時期が来たから散布する、をやめる",
    b: "通知は、病害虫の発生や被害の有無にかかわらず定期的に農薬を散布することをやめ、日常的な観察で早期に見つけるよう求めています。リーフレットはこれを「農薬のスケジュール散布はやめよう」と表現し、業者に作業を依頼している場合も同様だとしています。",
  },
  {
    h: "早く見つけて、切る・取る・捕る",
    b: "通知とリーフレットは、被害を受けた部分の剪定や捕殺などの物理的な防除で対応するよう最大限努めることを挙げています。リーフレットでは、ふ化してしばらくは幼虫が集団で行動するガの仲間（アメリカシロヒトリ等）は、早く見つければ捕殺が容易で、発見が遅れると幼虫が分散して捕殺が難しくなると説明されています。",
  },
  {
    h: "散布しない形の薬剤を使う",
    b: "やむを得ず農薬を使う場合も、通知は誘殺、塗布、樹幹注入など散布以外の方法を活用し、散布する場合でも最小限の部位と区域にとどめることを求めています。リーフレットは、粒剤など飛散の少ない農薬の活用や、害虫の発生箇所のみに散布することを挙げています。",
  },
  {
    h: "植える木を選ぶ段階で考える",
    b: "通知は、植栽の際に農薬による防除を必要とする病害虫が発生しにくい植物や品種を選ぶよう努めることを挙げています。リーフレットには、ツバキ等にはチャドクガが発生し、その毒毛で皮膚に湿疹を起こすことがあるとして、人への被害が予想される樹種を植えないことも含めて検討するよう書かれています。",
  },
];

const labelPoints = [
  {
    h: "登録番号と、使える植物を確かめる",
    b: "リーフレットは、農薬取締法に基づいて登録された、対象の植物に適用のある農薬を使うこととし、農林水産省の登録番号があるのを確認するよう求めています。同じ虫に効くと書かれていても、自分の庭の木がその農薬の適用の範囲に入っていなければ使う対象になりません。適用の内容は、農林水産省の「農薬登録情報検索システム」でも確認できます。",
  },
  {
    h: "使用方法と注意事項を、書かれたとおりに守る",
    b: "通知は、ラベルに記載されている使用方法（使用回数、使用量、使用濃度等）と使用上の注意事項を守って使用することを求めています。濃くすれば効く、多めにかければ安心、という使い方はこの前提から外れます。",
  },
  {
    h: "実を食べる木や家庭菜園では、守ることが義務になる",
    b: "「農薬を使用する者が遵守すべき基準を定める省令」第2条は、食用の農作物等に農薬を使うときは、適用の範囲に含まれない作物に使わない、定められた量や希釈倍数の最低限度、使用時期、総使用回数を守ることを「遵守しなければならない」としています。庭の果樹や家庭菜園の野菜に使う場合は、この基準の対象です。",
  },
  {
    h: "自分で混ぜない",
    b: "通知は、予防的にいくつかの農薬を混ぜて使う「現地混用」を、公園・街路樹等では行わないこととし、有機リン系農薬同士の混用は混用によって毒性影響が相加的に強まることを示唆する知見もあるとして、決して行わないよう求めています。リーフレットは、ラベルに混用に関する注意事項がある場合は必ず守るよう書いています。",
  },
];

const neighborPoints = [
  {
    h: "事前に知らせる内容は4つ",
    b: "通知は、散布にあたって事前に周辺住民に対し、農薬使用の目的、散布日時、使用農薬の種類、農薬使用者等の連絡先を、十分な時間的余裕をもって幅広く周知することを求めています。隣家に洗濯物や窓の開け閉め、子どもやペットを外に出す時間を調整してもらうためにも、日時だけでなく、何を何のために使うのかまで伝えます。",
  },
  {
    h: "化学物質に敏感な人、学校や通学路への配慮",
    b: "通知は、近くに化学物質に敏感な人が住んでいると把握している場合には十分配慮すること、散布区域の近くに学校や通学路がある場合は子どもが農薬を浴びることのないよう散布の時間帯に最大限配慮し、学校や保護者等への周知を図ることを挙げています。",
  },
  {
    h: "風のない日、弱い日を選ぶ",
    b: "通知は、農薬散布は無風または風が弱いときに行うなど、近隣に影響が少ない天候の日や時間帯を選び、風向きやノズルの向きに注意して行うことを求めています。リーフレットは、なるべく対象物の近くから散布すること、飛散を抑えるノズルの使用、動力噴霧器の圧力を上げすぎないことも挙げています。",
  },
  {
    h: "散布中と散布直後に、人が入らないようにする",
    b: "通知は、立て看板の表示や立入制限範囲の設定などで、散布時や散布直後に散布区域へ人が立ち入らないよう措置することを挙げています。家庭の庭でも、家族や来訪者、境界際を通る人が散布中に近づかない段取りを先に決めておきます。",
  },
  {
    h: "使ったものを記録しておく",
    b: "通知は、農薬を使用した年月日、場所と対象植物、使用した農薬の種類または名称、単位面積当たりの使用量または希釈倍数を記録し、一定期間保管することを求めています。省令第9条も、農薬を使用したときは帳簿に記載するよう努めることを定めています。あとで隣家から問い合わせがあったとき、何を使ったかをすぐ答えられます。",
  },
  {
    h: "体調不良の相談があったとき",
    b: "通知は、散布後に周辺住民等から体調不良等の相談があった場合には、農薬中毒の症状に詳しい病院、または公益財団法人日本中毒情報センターの相談窓口等を紹介することを挙げています。",
  },
];

const hireItems = [
  {
    h: "本当に散布が必要な状態か",
    b: "毎年この時期だから、という理由だけの散布は、通知とリーフレットがやめるよう求めている形です。どの木に何が出ているのか、散布以外の方法では足りないのかを、見積もりの段階で説明してもらいます。症状の見分け方と見つけたときの手順は、害虫と病気のガイドで整理しています。",
  },
  {
    h: "使う薬剤の名前と、その木への適用",
    b: "事前の周知には使用農薬の種類が含まれます。業者に頼む場合も、使う農薬の名称と、その農薬が対象の木に適用があることを、作業前に書面などで受け取っておきます。分からなければ、自分で隣家に説明することもできません。",
  },
  {
    h: "周りの家への周知を、誰がするか",
    b: "通知は散布の委託者にも遵守事項の指導が及ぶことを示しています。業者が周知文を配るのか、自分で伝えるのか、伝える内容（目的・日時・農薬の種類・連絡先）は誰がまとめるのかを、契約の前に決めておきます。連絡先に業者の名前を入れるかどうかも、ここで確認します。",
  },
  {
    h: "日時と、風が強いときの扱い",
    b: "風の強い日や雨の予報の日にどうするのか、延期の連絡は誰から誰にするのかを確かめます。周知した日時から変わる場合は、知らせ直しが必要になります。",
  },
  {
    h: "散布する範囲と、散布以外の方法の組み合わせ",
    b: "庭全体にかけるのか、被害の出ている木や枝だけなのか。通知は最小限の部位と区域にとどめることを求めています。剪定で被害部分を取り除く作業と組み合わせられるかどうかも聞いておきます。",
  },
  {
    h: "作業の記録を受け取れるか",
    b: "公園・街路樹等向けの遵守事項では、病害虫防除を他者に委託している場合、記録の写しを委託者が保管することとされています。家庭の庭でも、使った農薬の名称、量または希釈倍数、日付と場所の記録をもらっておくと、近隣からの問い合わせや翌年の判断に使えます。",
  },
];

const faqs = [
  {
    q: "ホームセンターで買ったスプレー剤も「農薬」なのですか。",
    a: "庭木や草花の病害虫、雑草の防除に使う薬剤で、農薬として登録されたものであれば農薬です。農林水産省・環境省のリーフレットも、ガーデニングや家庭菜園用のスプレー式の殺虫剤・殺菌剤、芝生等の除草剤も農薬に含まれると注記しています。容器に農林水産省の登録番号が書かれているかを確認し、ラベルの適用と使用方法に従って使ってください。",
  },
  {
    q: "自宅の庭で少しだけ使う場合も、隣の家に知らせる必要がありますか。",
    a: "国の通知が事前周知を求めているのは、公園・街路樹等や住宅地周辺の農地での散布です。ただ、省令第6条は住宅の敷地で使うときに飛散を防ぐ措置を講じるよう努めることを定めており、散布の霧は境界で止まりません。境界の近くの木に散布する場合や、隣家の窓・洗濯物・家庭菜園が近い場合は、目的・日時・使う農薬・連絡先を前もって伝えておくのが確実です。",
  },
  {
    q: "近所の家や業者の散布で困っています。どこに相談できますか。",
    a: "通知は、農薬の不適正な使用について周辺住民等から相談があった場合に関係部局が連携して対応できるよう、都道府県に相談窓口の設置などの体制整備を求めています。農林水産省のページ「住宅地等における農薬使用について」に、都道府県における相談窓口の一覧が掲載されています。体調に異変がある場合は、医療機関への相談を先にしてください。",
  },
  {
    q: "毎年同じ時期に業者が消毒に来ています。続けたほうがよいですか。",
    a: "病害虫の発生や被害の有無にかかわらず定期的に散布することは、通知がやめるよう求めている形です。リーフレットも、業者に作業を依頼している場合も同様だとしています。続けるかどうかを決める前に、昨年どの木に何が出たのか、今年はどうか、散布以外の方法で足りないのかを説明してもらってください。",
  },
  {
    q: "散布の費用や、おすすめの薬剤を知りたいです。",
    a: "このページでは、特定の薬剤や料金は扱っていません。どの薬剤が使えるかは、木の種類と出ている病害虫によって決まり、ラベルの適用で確認するものです。作業の費用の考え方は料金のページで扱っています。業者に頼む場合は、使う薬剤の名称と適用を作業前に示してもらってください。",
  },
];

const sources = [
  {
    org: "農林水産省・環境省",
    title: "住宅地等における農薬使用について（平成25年4月26日付け 25消安第175号・環水大土発第1304261号）",
    url: "https://www.maff.go.jp/j/nouyaku/n_tekisei/jutakuti/",
  },
  {
    org: "環境省",
    title: "住宅地等における農薬使用について（環境省水・大気環境局長及び農林水産省消費・安全局長通知）",
    url: "https://www.env.go.jp/water/noyaku/hisan_risk/jutakku_noyakushiyo.html",
  },
  {
    org: "農林水産省・環境省",
    title: "リーフレット「農薬飛散による被害の発生を防ぐために」",
    url: "https://www.maff.go.jp/j/nouyaku/n_tekisei/jutakuti/attach/pdf/index-7.pdf",
  },
  {
    org: "農林水産省",
    title: "都道府県における相談窓口（住宅地等における農薬使用について）",
    url: "https://www.maff.go.jp/j/nouyaku/n_tekisei/jutakuti/attach/pdf/index-15.pdf",
  },
  {
    org: "e-Gov法令検索",
    title: "農薬取締法（第2条、第24条）",
    url: "https://laws.e-gov.go.jp/law/323AC0000000082",
  },
  {
    org: "e-Gov法令検索",
    title: "農薬を使用する者が遵守すべき基準を定める省令（第2条、第6条、第9条）",
    url: "https://laws.e-gov.go.jp/law/415M60001200005",
  },
  {
    org: "農林水産省",
    title: "農薬登録情報検索システム",
    url: "https://pesticide.maff.go.jp/",
  },
];

export default function SprayingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "住宅地で庭木に薬剤を散布するとき・業者に頼むときに確かめることを、農林水産省・環境省の通知「住宅地等における農薬使用について」と農薬取締法をもとに整理しました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "住宅地での薬剤散布" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭木に虫が付いた、毎年この時期に消毒してきた、業者から消毒を勧められた。住宅地の庭で薬剤を散布する場面では、効くかどうかとは別に、周りの家にどう届くかという問題が付いてきます。散布した霧は、境界のところで止まってはくれません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          このページでは、農林水産省と環境省が出している通知「住宅地等における農薬使用について」、農薬取締法とその省令、両省のリーフレットに書かれていることをもとに、自分で散布するとき、業者に頼むときに確かめることを整理します。特定の薬剤や料金は扱いません。どの虫や病気なのかを見分ける段階のことは、害虫と病気のガイドで扱っています。
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

      <section id="sp-scope" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭で使う殺虫剤や除草剤も「農薬」にあたる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          農薬というと田畑で使うものという印象がありますが、法律の上では、庭木や庭の雑草に使う薬剤も同じ扱いです。まず、どの決まりがかかってくるのかを押さえておきます。
        </p>
        <div className="space-y-4">
          {scopeItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          法令の条文は改正されることがあります。最新の内容は、e-Gov法令検索の農薬取締法と同省令で確認してください。
        </p>
      </section>

      <section id="sp-notice" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          国の通知「住宅地等における農薬使用について」の中身
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          平成25年4月26日付けで、農林水産省消費・安全局長と環境省水・大気環境局長の連名により出された通知です（25消安第175号・環水大土発第1304261号）。学校、保育所、病院、公園等の公共施設内の植物、街路樹、住宅地に近接する農地（市民農園や家庭菜園を含む）および森林等を「住宅地等」とし、農薬の飛散による住民や子ども等の健康被害が生じないよう、飛散防止対策の一層の徹底を求めています。
        </p>
        <div className="space-y-4">
          {noticePoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          通知の本文と、農林水産省・環境省のリーフレットは、このページの最後に挙げた各省のページから読めます。以下の節では、通知とリーフレットの項目を、住宅の庭で散布する場面に沿って並べ直しています。
        </p>
      </section>

      <section id="sp-other" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          まず、散布しない方法で済まないかを考える
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          通知が最初に求めているのは、散布のやり方ではなく、散布しなくて済む管理です。散布の段取りを考える前に、ここで済む場面がないかを確かめます。
        </p>
        <ol className="space-y-4">
          {otherWays.map((x, i) => (
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
          症状から原因の見当を付ける方法と、見つけたときの手順は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          、被害の出た枝を切り取る剪定の考え方は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            剪定完全ガイド
          </Link>
          、虫の付きにくい木を選ぶ方向は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが楽な庭木おすすめ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sp-label" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          散布するなら、ラベルに書かれたとおりに
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          散布しないと済まないと判断した場合、次に確かめるのはラベルです。通知もリーフレットも、登録された農薬を、その植物に適用があるものに限り、ラベルの使用方法と注意事項を守って使うことを繰り返し求めています。
        </p>
        <div className="space-y-4">
          {labelPoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          実を食べる木の手入れ全体は
          <Link href="/guide/fruit-trees/" className="text-primary underline underline-offset-2 mx-1">
            庭の果樹の手入れ
          </Link>
          、薬剤に頼らず雑草を減らす方法の選び分けは
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策の選び分け
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sp-neighbors" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          周りの家に知らせることと、風・時間帯
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          住宅地で散布するときにいちばん差が出るのは、散布の前後の段取りです。通知が挙げている項目を、庭での散布に当てはめて並べます。
        </p>
        <ol className="space-y-4">
          {neighborPoints.map((x, i) => (
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
          隣家との境界に関わる木の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            越境した枝と根
          </Link>
          、脚立に上がっての散布を含む高所作業の注意は
          <Link href="/guide/garden-safety/" className="text-primary underline underline-offset-2 mx-1">
            庭作業の事故を防ぐ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sp-hire" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者に消毒を頼むときに確かめること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          散布を業者に任せても、周りの家から見れば、散布しているのはその庭の家です。頼む前に、次の点を相手と確かめておきます。見積もりの書面や作業前のやりとりで、答えが残る形にしておくと安心です。
        </p>
        <div className="space-y-4">
          {hireItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          年間の手入れの中で消毒をどこに入れるかは
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          、作業の費用の考え方は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sp-faq" className="scroll-mt-20 mb-12">
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

      <section id="sp-sources" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          このページで参照した法令・公的機関の資料
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          本文は以下の資料の記載をもとに要約したものです。通知や法令の最新の内容、都道府県の相談窓口は、各省のページで確認してください。
        </p>
        <ul className="space-y-3">
          {sources.map((s) => (
            <li key={s.url} className="rounded-2xl border border-border bg-surface-alt p-4">
              <p className="text-sm text-text-muted mb-1">{s.org}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-primary underline underline-offset-2"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/guide/garden-safety/", label: "庭作業の事故を防ぐ" },
            { href: "/guide/neighbor-branch/", label: "越境した枝と根" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
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
          使う薬剤の名前、散布の範囲、周りの家への知らせ方。この3つを確かめられる相手かどうかで比べると、頼み先を選びやすくなります。まずは候補を並べてみてください。
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
