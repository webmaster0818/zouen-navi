import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kawaguchi/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "川口で生垣を設置する際の業者選び｜市の緑化補助を利用した依頼の手順";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "川口市の「生け垣設置等奨励補助制度」は、工事の前にみどり課へ相談することと、市内業者（市内に本社または本店を置く事業者）を利用することが条件です。対象となる場所と生垣の条件、申請と完了報告の流れ、全国対応の窓口を利用する際の確認事項、見積もりの際に業者へ伝える事項を、市の公開資料にもとづいて整理しています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "川口市の生垣・植込地・フェンス緑化の補助を利用して庭の工事を依頼する際の手順と、業者選びでの確認事項を整理しています。",
  },
};

const toc = [
  { id: "kawaguchi-scheme", label: "川口市の緑化補助は植栽前の相談から始まります" },
  { id: "kawaguchi-target", label: "対象となる場所と、生垣・植込地の条件" },
  { id: "kawaguchi-flow", label: "申請から振り込みまでに提出する書類" },
  { id: "kawaguchi-local", label: "「市内業者」の条件と全国対応の窓口" },
  { id: "kawaguchi-estimate", label: "補助の利用を前提に見積もりを依頼する際の伝え方" },
  { id: "kawaguchi-after", label: "植栽後5年間の管理の担当者" },
  { id: "kawaguchi-pick", label: "この条件に適した3サービス" },
  { id: "kawaguchi-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kawaguchi-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kawaguchi-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-madoguchi", "oniwa-master", "smile-garden"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-madoguchi":
    "造園・剪定・草刈りなどの情報を発信するとともに、全国の造園・園芸・外構業者を検索できる情報・比較サイトです。自社で施工する業者ではないため、検索した業者ごとに所在地や本社・本店の所在地を依頼者が確認し、補助の条件に合うかどうかを判断する使い方になります。運営は株式会社ガーデンメーカーです。",
  "oniwa-master":
    "剪定・伐採・草刈り・芝刈りなどに対応する加盟業者を無料で紹介する形式で、受付は24時間365日とされています。窓口と実際に施工する業者が分かれる形態のため、補助の利用を前提とする場合は、紹介される業者の名称と本社・本店の所在地を、工事の契約前に確認する必要があります。運営は株式会社アシスト（東京都中央区）です。",
  "smile-garden":
    "剪定・伐採・草刈り・芝刈り・植栽などを自店舗で施工する、お庭の手入れ専門の全国チェーンです。施工する業者が明確である一方、公開情報上の運営会社の本社は愛知県稲沢市です。補助を利用する場合は、依頼先が市の定める「市内業者」に該当するかを事前にみどり課へ確認し、補助を利用しない手入れや、植栽後の管理の相談先として候補に入れる形が考えられます。",
};

const targetItems = [
  {
    h: "道路に面した場所であること",
    b: "補助の対象は、敷地内で道路に接する部分に行う緑化です。市のパンフレットでは、この道路を「公道又は公共の用に供されている私道であって、幅員4メートル以上又は道路中心線から住居敷地までの離隔が2メートル以上ある道路」としています。庭の奥や隣地との境界に設置する生垣は、この制度の対象として記載されていません。",
  },
  {
    h: "生垣には長さと本数の条件があります",
    b: "パンフレットに示された生垣の主な条件は、道路に面した長さが合計2メートル以上（各長さは1メートル以上）であること、高さ1メートル以上のおおむね均一な樹木を列状に植え、1メートル当たり3本以上とすること、竹や木などを補助材として用いること、生長した際に道路や隣地の支障にならない樹種であることです。",
  },
  {
    h: "前面に塀やフェンスを設置する場合は高さに上限があります",
    b: "生垣の前面に構造物を設置する場合、宅地地盤面から1.8メートル以下の透過性の高いフェンス等とし、透過性のない構造物（ブロック等）は0.6メートル以下とされています。上下に組み合わせる場合は合計1.8メートル以下です。透過性の高いフェンスとは、正面から見て格子の隙間がおおむね50%以上で、隙間から樹木が見えるものとされています。",
  },
  {
    h: "植込地・フェンス緑化・既存塀の撤去も対象です",
    b: "生垣のほかに、道路に面した植込地（幅0.5メートル以上など）の設置、フェンスにつる性植物を1メートル当たり2本以上植えるフェンス緑化、生垣や植込地を設ける目的で同じ位置にある高さ0.6メートル以上の既存の塀（石垣・コンクリート塀・ブロック塀等）を撤去する場合が、パンフレットに挙げられています。",
  },
];

const subsidyRows = [
  { k: "生け垣", rate: "1メートルあたり11,000円まで", scope: "延長20メートルまで" },
  { k: "植込地", rate: "1平方メートルあたり11,000円まで", scope: "面積10平方メートルまで" },
  { k: "フェンス緑化", rate: "1メートルあたり1,100円まで", scope: "延長20メートルまで" },
  {
    k: "既存塀撤去",
    rate: "1メートルあたり8,800円まで",
    scope: "新たに生け垣または植込地を設置する場所と同じ位置にある既存の塀",
  },
];

const flowSteps = [
  {
    h: "事前相談・現地確認",
    who: "依頼者／みどり課",
    b: "補助の対象となるかどうかを、みどり課が現地を確認して判断します。工事の日程を決める前に、この手続きを済ませます。",
  },
  {
    h: "申請書の提出",
    who: "依頼者",
    b: "申請書・案内図・緑化計画図・見積書の写し・工事前の写真を提出します。見積書と緑化計画図は、業者の協力がなければ揃いません。",
  },
  {
    h: "交付の決定",
    who: "みどり課",
    b: "書類が審査され、問題がなければ交付決定通知書が送付されます。",
  },
  {
    h: "生け垣等の設置工事",
    who: "依頼者（業者が施工）",
    b: "申請した計画にもとづいて工事を行います。計画と異なる植え方をすると、補助金の確定の際に問題となる可能性があります。",
  },
  {
    h: "完了報告書の提出",
    who: "依頼者",
    b: "完了報告書・案内図・緑化竣工図・領収書の写し・完成写真を提出します。",
  },
  {
    h: "補助金の確定",
    who: "みどり課",
    b: "報告書と現地が確認され、問題がなければ交付確定通知書が届きます。",
  },
  {
    h: "補助金の請求と支払い",
    who: "依頼者／みどり課",
    b: "確定通知が届いたら請求書・振込依頼書を提出し、指定の口座に振り込まれます。業者への支払いとは別の手続きです。",
  },
];

const localPoints = [
  {
    h: "市の定義は「本市内に本社又は本店を置く事業者」です",
    b: "令和4年4月1日施行の改正により、補助の対象は市内業者を利用する場合に限られました。パンフレットでは市内業者を「本市内に本社又は本店を置く事業者」と記載しています。川口市内に作業員が訪問できるかどうかや、市内に営業所があるかどうかとは、別の基準です。",
  },
  {
    h: "紹介・一括見積もり型では施工する会社を確認する",
    b: "全国対応の紹介サービスや一括見積もりサービスを利用すると、実際に工事を行うのは加盟店や登録業者です。補助の条件に関わるのは窓口の会社ではなく、施工し、見積書と領収書を発行する会社であると考えられますが、いずれで判断されるかは市が決める事項のため、判断に迷う場合はみどり課にご確認ください。",
  },
  {
    h: "掲載サービスは市内業者であることを保証していません",
    b: "造園ナビに掲載しているサービスは、いずれも公開情報において、川口市の補助の対象業者を紹介すると約束しているものではありません。窓口の対応エリアに川口市が含まれていても、紹介された業者の本社・本店が市外であれば対象外となる可能性があります。申し込む前に、業者の名称と本社・本店の所在地を確認しておくことをおすすめします。",
  },
  {
    h: "全国チェーンの店舗も本社の所在地で判断される可能性があります",
    b: "自社で施工する全国チェーンでも、運営会社の本社が市外にある場合があります。地元の店舗が施工する場合の扱いは、本ページでは判断できません。補助の利用を前提とする場合は、候補の会社名を伝えてみどり課に事前にご確認ください。",
  },
];

const estimateItems = [
  {
    h: "補助を申請する予定であることを最初に伝える",
    b: "見積書の写しを申請に使用すること、交付決定までは着工できないことを伝えます。日程の組み方が変わるため、後から伝えると段取りのやり直しが生じます。",
  },
  {
    h: "本社・本店の所在地を確認する",
    b: "市内業者に該当するかを確認するため、見積もりの段階で会社の正式名称と本社・本店の所在地を確認します。紹介型の窓口を利用している場合は、実際に施工する会社について確認します。",
  },
  {
    h: "見積書を補助の区分ごとに分けてもらう",
    b: "生垣・植込地・フェンス緑化・既存塀撤去のいずれに該当する工事か、延長（メートル）や面積、植える本数と高さが読み取れる形にしてもらうと、申請書類との照合が容易になります。補助の対象外となる部分（構造物の設置など）が含まれる場合は、項目を分けて記載してもらいます。",
  },
  {
    h: "図面と写真の準備の担当を決める",
    b: "申請には緑化計画図と工事前の写真、完了報告には緑化竣工図と完成写真が必要です。業者に作成や撮影を依頼できるか、依頼する場合は見積もりに含まれるかを確認しておきます。",
  },
];

const afterPoints = [
  {
    h: "完了後5年以上の継続管理が求められています",
    b: "パンフレットには「緑化完了後は5年以上継続して管理すること」と記載されています。植栽して終わりではなく、刈り込みや枯れた株の扱いを含めて、少なくとも5年間は生垣として維持することが前提です。",
  },
  {
    h: "道路に面しているため、伸長した際の影響が大きくなります",
    b: "対象が道路沿いであるため、伸びた枝が通行の妨げにならないよう、定期的な刈り込みが必要です。樹種の条件にも「道路又は隣地の支障とならないよう配慮」とあり、植栽前に、どの高さと幅で維持するかを業者と相談しておくと、管理の負担を見積もりやすくなります。",
  },
];

const checklist = [
  {
    h: "工事の前にみどり課へ相談したか",
    b: "工事着手後の申請は受け付けられません。日程を決める前に相談と現地確認を済ませます。",
  },
  {
    h: "植栽する場所が道路に面しているか",
    b: "対象は道路に接する部分の緑化です。道路の幅員などの条件もあわせて確認します。",
  },
  {
    h: "施工する会社の本社・本店が川口市内にあるか",
    b: "窓口ではなく、実際に施工する会社について確認します。判断に迷う場合は、みどり課に会社名を伝えて確認します。",
  },
  {
    h: "見積書が補助の区分と数量を読み取れる形になっているか",
    b: "生垣・植込地・フェンス緑化・既存塀撤去ごとに、延長や面積、本数が分かるようにしてもらいます。",
  },
  {
    h: "図面と写真の準備の担当を決めたか",
    b: "緑化計画図・竣工図、工事前と完成時の写真の担当を、見積もりの段階で決めておきます。",
  },
  {
    h: "5年以上の管理を前提に樹種と大きさを決めたか",
    b: "完了後も継続した管理が求められます。手入れの担当者まで考慮して選定します。",
  },
];

const faqs = [
  {
    q: "工事が終わってから補助を申請することはできますか。",
    a: "できません。川口市のページとパンフレットには、補助金の交付を希望する場合は必ず設置等（工事）の前にみどり課に相談すること、設置等の後の申請は受け付けられないことが明記されています。業者と日程を決める前に、まずみどり課（推進係）にご相談ください。",
  },
  {
    q: "全国対応の紹介サービスで見つけた業者でも、補助の対象になりますか。",
    a: "実際に施工する業者が、市の定める市内業者（本市内に本社または本店を置く事業者）に該当するかどうかによって異なる可能性があります。紹介サービスや一括見積もりサービスは、紹介先が川口市の補助の対象業者であることを保証するものではありません。申し込む前に施工する会社の名称と本社・本店の所在地を確認し、判断に迷う場合はみどり課にご確認ください。",
  },
  {
    q: "いまある生垣の剪定や植え替えにも使えますか。",
    a: "市のパンフレットでは、生け垣設置・植込地設置・フェンス緑化を新たに行う人に補助金を交付すると説明されており、既存の生垣の剪定などの手入れは対象として記載されていません。植え替えや作り直しが対象となるかどうかは、計画の内容を伝えてみどり課にご確認ください。",
  },
  {
    q: "借りている土地や、これから家を建てる土地でも申請できますか。",
    a: "パンフレットでは、対象者を接道部の緑化を行う敷地の所有者、または新たに建築して接道部の緑化を行う場合の建築主としています。借地の場合は所有者の承認が必要とされています。また、川口市や埼玉県の条例にもとづく緑化計画の基準の範囲内として行う緑化部分は、補助の対象になりません。新築時の扱いは、事前にみどり課にご確認ください。",
  },
  {
    q: "川口市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、川口市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。補助を利用する場合は、あわせて施工する会社の本社・本店の所在地もご確認ください。",
  },
];

export default function AreaKawaguchiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "川口市の生け垣設置等奨励補助制度を利用して庭の緑化工事を依頼する際の条件、書類の流れ、市内業者の確認方法を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "川口" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          道路沿いのブロック塀を生垣に替えたい、駐車場の脇に植え込みを設けたいといった工事を川口市内の住宅で検討している場合は、市の緑化補助を利用できるかどうかを、業者に見積もりを依頼する前に確認しておくことをおすすめします。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          ただし、この補助には手続きの順序と依頼先に関する条件があります。工事の前に市へ相談すること、市内に本社または本店を置く業者を利用することです。本ページでは、川口市が公開している案内とパンフレットにもとづき、補助の利用を前提に業者を選ぶ際の確認事項を整理します。金額や要件は改正される場合があるため、最新の内容は必ず市の窓口にてご確認ください。
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

      <section id="kawaguchi-scheme" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          川口市の緑化補助は植栽前の相談から始まります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          川口市のページ「生け垣や屋上緑化等に対する補助制度」によると、民有地の緑化に対する補助には二つの種類があります。一つは生垣・植込地・フェンス緑化への補助（生け垣設置等奨励補助制度）、もう一つは屋上緑化・壁面緑化への補助（屋上緑化等奨励補助制度）です。いずれも「川口市環境みどり基金」を財源としています。戸建て住宅の庭の工事に関係が深いのは前者であるため、本ページでは生け垣設置等奨励補助制度を中心に解説します。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          令和4年4月1日施行の改正により、補助の対象は市内業者を利用する場合に限られ、補助単価は10%増額されました。同じページには、補助金の交付を希望する場合は必ず工事の前にみどり課に相談すること、工事後の申請は受け付けられないことが、注意事項として記載されています。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            問い合わせ先は、川口市 都市計画部 みどり課 推進係です。電話番号や受付時間は市のページに掲載されています。屋上緑化・壁面緑化の補助は、条件と単価が生垣の補助とは別に定められているため、検討している場合は市のチラシにてご確認ください。
          </p>
        </div>
      </section>

      <section id="kawaguchi-target" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          対象となる場所と、生垣・植込地の条件
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          市のパンフレット（生け垣・植込地設置、フェンス緑化 補助金のご案内）では、対象者を「川口市内に建築物を所有し、その敷地内で道路に接する場所に、生け垣設置、植込地設置若しくはフェンス緑化を行う敷地の所有者、又は新たに建築し接道部緑化を行う場合の建築主」としています。借地の場合は所有者の承認が必要です。主な条件は次のとおりです。
        </p>
        <div className="space-y-4">
          {targetItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <h3 className="font-bold text-text-primary mt-8 mb-3">パンフレットに示された補助の内容</h3>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[520px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">区分</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">1mまたは1m²あたりの補助額</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">補助対象</th>
              </tr>
            </thead>
            <tbody>
              {subsidyRows.map((row, idx) => (
                <tr key={row.k} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                    {row.k}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.rate}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-7 text-text-muted mt-3">
          出典：川口市「生け垣設置等補助金パンフレット中面」（市ページ「生け垣や屋上緑化等に対する補助制度」掲載、{UPDATED_LABEL}確認）。同じ敷地で生垣・植込地・フェンス緑化を行う場合は、いずれか一つの申請となります。生垣を10メートル以上設置する場合は補助額を10%増、生垣または植込地と道路の間に0.6メートルを超える構造物や駐車場等の空地がある場合は、その部分の補助単価を2分の1とする、と記載されています。工事費用が補助限度額未満の場合は実費相当の補助で、100円未満は切り捨てです。最新の単価と要件は、みどり課にご確認ください。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          補助の額は上限の単価で決まり、工事費そのものの目安を示すものではありません。工事費の考え方は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          、生垣に適した樹種は
          <Link href="/plant/hedge/" className="text-primary underline underline-offset-2 mx-1">
            生垣におすすめの品種
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kawaguchi-flow" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          申請から振り込みまでに提出する書類
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          市のパンフレットにある「補助金の手続きの流れ」を、担当者ごとに整理すると次のとおりです。業者に依頼する工事は4番目で、その前に相談・申請・交付決定の手続きがあります。
        </p>
        <ol className="space-y-4">
          {flowSteps.map((x, i) => (
            <li key={x.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">
                  {x.h}
                  <span className="ml-2 text-sm font-normal text-text-muted">{x.who}</span>
                </h3>
                <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          申請時の見積書の写しと、完了時の領収書の写しは、いずれも業者が発行する書類です。見積書の読み方は
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          、業者への支払いの方法と時期は
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          で解説しています。補助金は工事代金の支払いとは別に、確定後に請求して振り込まれる流れであるため、業者への支払いは一旦全額を依頼者が用意する前提で考えておきます。
        </p>
      </section>

      <section id="kawaguchi-local" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          「市内業者」の条件と全国対応の窓口
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          業者選びに直接関わるのが、市内業者の条件です。この条件を見落とすと、条件を満たした庭に条件どおりの生垣を設置しても、補助の対象から外れることがあります。
        </p>
        <div className="space-y-4">
          {localPoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          窓口と施工者が分かれる形態の見分け方は
          <Link href="/area/nagoya/" className="text-primary underline underline-offset-2 mx-1">
            自社施工型と紹介型の見分け方
          </Link>
          で解説しています。業者の資格や建設業の許可の確認方法は
          <Link href="/area/chiba/" className="text-primary underline underline-offset-2 mx-1">
            資格と許可の確認方法
          </Link>
          をご参照ください。市内業者かどうかは、それらとは別に確認する項目です。
        </p>
      </section>

      <section id="kawaguchi-estimate" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          補助の利用を前提に見積もりを依頼する際の伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          補助を利用するかどうかによって、見積書に求める内容と日程の組み方が変わります。問い合わせの最初の段階で、次の事項を伝えておくと手戻りを減らせます。
        </p>
        <div className="space-y-4">
          {estimateItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          複数社から見積もりを取得する場合の条件の揃え方は
          <Link href="/area/okayama/" className="text-primary underline underline-offset-2 mx-1">
            相見積もりの条件の揃え方と断り方
          </Link>
          で解説しています。補助の申請では見積書の写しを提出するため、比較の段階から区分と数量を読み取れる形に揃えておくと、そのまま申請に使用できます。
        </p>
      </section>

      <section id="kawaguchi-after" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植栽後5年間の管理の担当者
        </h2>
        <div className="space-y-4">
          {afterPoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          刈り込みの時期や形の維持方法は
          <Link href="/guide/hedge-care/" className="text-primary underline underline-offset-2 mx-1">
            生垣の手入れ
          </Link>
          、継続して依頼する形態の選び方は
          <Link href="/area/utsunomiya/" className="text-primary underline underline-offset-2 mx-1">
            年間契約とスポット依頼の選び方
          </Link>
          をご参照ください。
        </p>
      </section>

      <section id="kawaguchi-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としており、川口市の補助の対象業者を紹介すると公表しているものはありません。そのうえで、業者を自分で探して確認したい、紹介を受けて施工会社を確認したい、補助を利用しない手入れも含めて相談したいという利用方法では、次の3サービスがそれぞれ明確な特徴を備えています。
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

      <section id="kawaguchi-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。ここに載っているのは窓口や運営会社の情報で、紹介先や施工店の本社・本店の所在地ではありません。補助を使う場合は、施工する会社について別に確かめてください。
        </p>
        <AreaCompanyTable cityName="川口" />
      </section>

      <section id="kawaguchi-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kawaguchi-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kawaguchi" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/plant/hedge/", label: "生垣におすすめの品種" },
            { href: "/guide/hedge-care/", label: "生垣の手入れ" },
            { href: "/area/nagoya/", label: "自社施工型と紹介型の見分け方" },
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
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
          補助を利用する場合は、業者に連絡する前にみどり課へご相談ください。施工する会社の本社・本店の所在地は、申し込む前にご確認ください。
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
