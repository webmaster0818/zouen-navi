import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/mito/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "水戸で庭木を切る・庭を変える前に｜風致地区の許可を確かめてから業者に頼む";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "水戸市には三の丸・愛宕・千波・長者山・笠原・常磐・八幡の7つの風致地区があり、地区内で木竹の伐採や宅地の造成、塀などの工作物の設置をするときは、あらかじめ市長の許可が必要です。剪定と伐採の境目、許可がいらない行為、確認のタイミング、業者に伝えることと申請を誰が出すかを、水戸市の公開情報と条例をもとに整理しました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "水戸市の風致地区で庭木の伐採や庭の改修を業者に頼む前に、確かめておくことを整理しました。",
  },
};

const toc = [
  { id: "mito-what", label: "風致地区は、庭の木にもかかる決まり" },
  { id: "mito-where", label: "自分の家が7地区に入っているか" },
  { id: "mito-acts", label: "許可がいる行為と、許可のいらない範囲" },
  { id: "mito-trees", label: "剪定と伐採の境目をどう考えるか" },
  { id: "mito-timing", label: "見積もりより前に確かめる理由" },
  { id: "mito-who", label: "申請を誰が出すか、業者に何を伝えるか" },
  { id: "mito-pick", label: "この条件で見ておきたい3サービス" },
  { id: "mito-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "mito-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "mito-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-madoguchi", "oniwa-110", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-madoguchi":
    "造園・剪定・伐採・草刈りなどの情報を発信しながら、全国の造園・園芸・外構業者を検索できる情報・比較サイトです。自社で施工する事業者ではないので、見つけた業者に、風致地区の中での作業であることを自分で伝え、許可の手続きに慣れているかを直接聞く使い方になります。運営は株式会社ガーデンメーカーです。",
  "oniwa-110":
    "草刈り・剪定・伐採・抜根・植栽などに対応する加盟店を紹介・手配する形で、24時間365日受付とされています。窓口と作業する加盟店が分かれるため、風致地区であることは受付の段階で伝え、実際に来る加盟店にも伝わっているかを現地調査のときに確かめておきます。運営は東証上場のシェアリングテクノロジー株式会社です。",
  "hikaku-biz":
    "条件を入力して複数の業者から見積もりを集められる一括見積もりサービスで、造園のほか門・塀・フェンスなどのカテゴリもあります。庭木の伐採と塀やフェンスの工事をあわせて考えている場合に、同じ条件を複数社に伝えやすい形です。依頼文に地区名と許可の確認が必要なことを書いておくと、各社の答え方を比べられます。運営は株式会社ワンズマインドです。",
};

const districts = [
  { name: "三の丸風致地区", note: "水戸城跡や旧弘道館をはじめとした歴史的資源、斜面樹林地、曝井などの水辺地と調和した景観" },
  { name: "愛宕風致地区", note: "愛宕神社や愛宕古墳などの歴史的資源、住宅地の背後の樹林地と調和した景観" },
  { name: "千波風致地区", note: "千波湖・桜川・沢渡川などの水辺地と緑地、千波湖を中心とした眺望景観" },
  { name: "長者山風致地区", note: "常磐公園や偕楽園（好文亭）などの歴史的資源、田野川の水辺地、寺社と調和した景観" },
  { name: "笠原風致地区", note: "逆川緑地と斜面樹林地、笠原水源地などの水辺地、笠原水道や笠原古墳群と調和した景観" },
  { name: "常磐風致地区", note: "沢渡川緑地や斜面地などの一団の樹林地、沢渡川などの水辺地と調和した景観" },
  { name: "八幡風致地区", note: "斜面樹林地、保和苑などの水辺地、水戸八幡宮などの寺社と調和した景観" },
];

const actRows = [
  {
    act: "建築物の新築・改築・増築・移転・色彩の変更",
    garden: "物置、離れ、サンルームなど",
    exempt: "床面積の合計が10平方メートル以下（かつ高さ15メートル以下）の新築・改築・増築など",
  },
  {
    act: "工作物の新築・改築・増築・移転・色彩の変更",
    garden: "塀、門、フェンス、擁壁、パーゴラなど",
    exempt: "高さ1.5メートル以下の工作物の新築・改築・増築・移転など",
  },
  {
    act: "宅地の造成、土地の開墾その他の土地の形質の変更",
    garden: "盛土・切土、庭の高さを変える工事、駐車場の造成など",
    exempt: "面積10平方メートル（建築物のある敷地では10平方メートルまたは建築面積のいずれか広い面積）以下で、高さ1.5メートルを超えるのりを生じる切土・盛土を伴わないもの",
  },
  {
    act: "木竹の伐採",
    garden: "庭木を切り倒す、竹林を伐る",
    exempt: "間伐・枝打ち・整枝など木竹の保護のため通常行われる伐採など（次の節で詳しく扱います）",
  },
];

const treeItems = [
  {
    h: "枝打ち・整枝は、許可の対象から外れている",
    b: "水戸市風致地区条例第3条第4号は、許可がいらない伐採として「間伐，枝打ち，整枝等木竹の保護のため通常行われる木竹の伐採」を挙げています。木を残したまま形を整える通常の剪定は、この範囲に入ると読めます。",
  },
  {
    h: "条例には、ほかにも許可のいらない伐採が並んでいる",
    b: "同じ号には、枯損した木竹または危険な木竹の伐採、自家の生活の用に供するために必要な木竹の伐採、仮植した木竹の伐採、建築物の敷地に存する高さ5メートル以下の木竹の伐採なども挙げられています。",
  },
  {
    h: "ただし、敷地の緑の割合という前提がある",
    b: "建築物のある敷地での伐採については、これらの除外は「当該敷地の面積に対する木竹が保全される土地の面積の割合が10パーセント以上であるもの」に限るとされています。庭木を何本も切って敷地の緑がこの割合を下回るような場合は、許可がいらない行為に当たらない可能性があります。",
  },
  {
    h: "根を掘る、地面をならす作業は別の行為として見られうる",
    b: "伐採のあとに抜根して地面をならしたり、庭を駐車場にしたりする場合は、宅地の造成など「土地の形質の変更」の規定が関係してきます。どこまでが伐採で、どこからが形質の変更かは作業の規模によるので、自分で線を引かずに市に確認します。",
  },
];

const timingItems = [
  {
    h: "許可が要ると、日程に審査の期間が入る",
    b: "水戸市のページによると、許可申請書の提出から許可書の交付まで、審査に10営業日程度かかります。祝日や年末年始は注意が必要で、交付日の速達指定などの要望には応じられないとされています。許可が要る作業なら、その分だけ着手が後ろにずれます。",
  },
  {
    h: "見積もりの中身が変わることがある",
    b: "許可にあたっては、許可基準のほかに「風致と著しく不調和でないこと」などが要件となり、風致の維持に必要な条件が付くこともあるとされています。建築や造成では敷地の10%以上の緑地を確保することも求められます。業者に見積もりを頼んでから条件が分かると、計画のやり直しになりかねません。",
  },
  {
    h: "完了後にも届出がある",
    b: "行為が完了したら、完了届を提出します。市のページでは、許可申請書に添付した図面一式と、全景や植栽状況が確認できる完了写真（4方向から撮影したもの）を添付するよう案内しています。完了写真を誰が撮るかも、事前に決めておくと漏れません。",
  },
];

const tellItems = [
  {
    h: "地区名と、市に確認済みかどうか",
    b: "「八幡風致地区の中です」「景観室に聞いたところ、この伐採は許可不要と言われました」のように、地区名と確認の結果を伝えます。確認前なら、その旨を正直に伝えて、作業内容を一緒に整理してもらいます。",
  },
  {
    h: "切る木の本数と高さ、残す木",
    b: "伐採する木の本数と、おおよその高さ（5メートルを超えるかどうか）、伐採後に残る木や植え込みを伝えます。条例の除外規定にかかわる数字なので、業者にとっても見積もりの前提になります。",
  },
  {
    h: "塀・フェンス・物置など、あわせて変えるもの",
    b: "生け垣を抜いてブロック塀やフェンスにする、物置を置く、といった計画があれば、高さや床面積が分かる形で伝えます。木の作業と工作物の工事を別々の業者に頼む場合は、どちらが許可の段取りをするのかが曖昧になりやすいので注意します。",
  },
  {
    h: "申請の書類づくりを誰がするか",
    b: "市のページには、手続きを代理人に委任する場合は委任状を添付するとあります。業者が代理で申請してくれるのか、図面だけ用意してくれるのか、自分で出すのかを、見積もりの段階で確認し、その作業が見積もりに含まれるかもあわせて聞いておきます。",
  },
];

const checklist = [
  {
    h: "敷地が風致地区に入っているか確かめたか",
    b: "概略図で見当をつけ、境界に近い場合は都市計画課景観室に所在地で確認します。",
  },
  {
    h: "作業が剪定なのか伐採なのかを分けたか",
    b: "枝打ちや整枝で済むのか、木を切り倒すのか、根まで掘るのかを分けて考えます。",
  },
  {
    h: "塀・フェンス・物置・地面の高さを変える予定がないか",
    b: "木の作業とあわせて工作物や造成が入ると、許可の要否が変わります。",
  },
  {
    h: "許可が要る場合の日程を見込んだか",
    b: "審査に10営業日程度かかります。着手日はそのあとで決めます。",
  },
  {
    h: "申請と完了届を誰が出すか決めたか",
    b: "代理人に委任するなら委任状が要ります。書類づくりが見積もりに含まれるかも確認します。",
  },
];

const faqs = [
  {
    q: "風致地区の中でも、庭木の剪定に許可はいりますか。",
    a: "水戸市風致地区条例は、許可がいらない伐採として、間伐・枝打ち・整枝など木竹の保護のため通常行われる伐採を挙げています。木を残して形を整える通常の剪定はこれに当たると考えられます。ただし、建築物のある敷地では、敷地に対して木竹が保全される土地の割合が10%以上であることが前提とされています。強く切り詰める、本数が多いなど判断に迷う場合は、都市計画課景観室に作業内容を伝えて確認してください。",
  },
  {
    q: "枯れた木や、倒れそうで危ない木を切るときも許可が必要ですか。",
    a: "条例では、枯損した木竹または危険な木竹の伐採は、許可がいらない行為として挙げられています。ここでも、建築物のある敷地では木竹が保全される土地の割合が10%以上であることが前提です。また、非常災害に対処するための応急措置として行う行為は許可を要しないとする規定もあります。いずれも、自分の判断だけで決めずに、可能であれば事前に景観室に相談しておくと安心です。",
  },
  {
    q: "生け垣をやめてブロック塀やフェンスにしたいのですが。",
    a: "生け垣を抜く作業は木竹の伐採、新しい塀やフェンスは工作物の新築に当たります。工作物は高さ1.5メートル以下であれば許可がいらないとされていますが、それを超える場合は許可が必要です。許可基準には工作物の高さや色彩の基準もあります。生け垣を減らすことで敷地の緑の割合が変わる点も含めて、計画の段階で景観室に相談してください。",
  },
  {
    q: "許可の申請は、業者に任せられますか。",
    a: "水戸市のページには、手続きを代理人に委任する場合は委任状を添付するとあり、代理での手続きが想定されています。ただし、申請を代行するかどうか、図面を用意するかどうかは業者によって違います。見積もりを頼む段階で、誰が申請し、誰が完了届を出すのか、その作業が見積もりに含まれるのかを確かめておいてください。",
  },
  {
    q: "水戸市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、水戸市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。風致地区内の作業であることも、そのときにあわせて伝えてください。",
  },
];

export default function AreaMitoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "水戸市の風致地区で庭木の伐採や庭の改修を頼む前に確かめることを、市の公開情報と条例をもとに整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "水戸" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          大きくなりすぎた庭木を切りたい、生け垣をやめて塀にしたい、庭の一部を駐車場にしたい。自分の土地のことなので自由にできると思いがちですが、水戸市内には、こうした行為の前に市長の許可が要る区域があります。風致地区です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          許可が要るかどうかは、業者の腕や資格ではなく、土地の場所と作業の内容で決まります。このページでは、水戸市の公開情報と水戸市風致地区条例をもとに、庭の作業で関係しやすい決まりと、業者に見積もりを頼む前に確かめておくことを整理します。個別の判断は市が行うので、最終的には担当課に確認してください。
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

      <section id="mito-what" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          風致地区は、庭の木にもかかる決まり
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          風致地区は、都市計画法で定められた地域地区の一つです（第8条第1項第7号）。同法第9条は風致地区を「都市の風致を維持するため定める地区」とし、第58条は、風致地区内における建築物の建築、宅地の造成、木竹の伐採その他の行為について、政令で定める基準に従い、地方公共団体の条例で必要な規制をすることができると定めています。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          水戸市はこれに基づいて水戸市風致地区条例（平成27年4月1日施行）を定めています。市のページによると、水戸市では昭和8年に三の丸と千波の風致地区が指定され、現在は合計7地区が指定されています。地区内で建築物の建築などを行う場合には、あらかじめ市長の許可が必要です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            ここでいう許可は、作業をする土地についての許可です。業者が持っている資格や建設業の許可とは別のもので、どんなに経験のある業者に頼んでも、土地の側の許可が要らなくなるわけではありません。業者側の資格と許可の確かめ方は
            <Link href="/area/chiba/" className="text-primary underline underline-offset-2 mx-1">
              資格と許可の確かめ方
            </Link>
            で扱っています。
          </p>
        </div>
      </section>

      <section id="mito-where" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分の家が7地区に入っているか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          水戸市は地区ごとに風致保全方針を定めています。市のページに掲載されている7地区と、方針に挙げられた景観の要素は次のとおりです。斜面の樹林地や水辺、歴史的な場所の周辺が多く、こうした場所の近くに住んでいる場合は、まず該当するかどうかを確かめます。
        </p>
        <div className="space-y-3">
          {districts.map((d) => (
            <div key={d.name} className="rounded-2xl border border-border bg-surface p-4">
              <h3 className="font-bold text-text-primary mb-1">{d.name}</h3>
              <p className="text-sm leading-7 text-text-secondary">{d.note}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          市のページには風致地区の概略図が載っていますが、境界の近くでは概略図だけでは判断できません。所在地や地番を伝えて、都市計画課景観室に確認するのが確実です。また、同じページでは、風致地区のほかにも景観法に基づく大規模建築物等の届出や、備前堀沿道地区、弘道館・水戸城跡周辺地区などの都市景観重点地区といった規制があることも案内されています。
        </p>
      </section>

      <section id="mito-acts" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          許可がいる行為と、許可のいらない範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          条例第3条は、風致地区内で許可が必要な行為として7つを挙げています。建築物、工作物、宅地の造成等、木竹の伐採、土石の類の採取、水面の埋立てまたは干拓、屋外における土石・廃棄物・再生資源の堆積です。それぞれに許可がいらない例外があります。庭の作業で関係しやすい4つを、条例と市のページをもとにまとめると次のようになります。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3">許可が必要な行為</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">庭での例</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">許可がいらない主な例外</th>
              </tr>
            </thead>
            <tbody>
              {actRows.map((row, idx) => (
                <tr key={row.act} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3">
                    {row.act}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.garden}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{row.exempt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-7 text-text-muted mt-3">
          出典：水戸市「風致地区内の建築行為等には許可が必要です（風致地区の許可申請）」、水戸市風致地区条例第3条（{UPDATED_LABEL}確認）。「庭での例」は造園ナビが当てはめたもので、個別の行為がどれに当たるかは市が判断します。例外には表に書ききれない条件があるので、条例本文と担当課で確認してください。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          市のページでは、許可を受ける場合の主な基準も示されています。たとえば建築物は建ぺい率40%以下、高さ15メートル以下（第一種低層住居専用地域は10メートル以下）、外壁から敷地境界までの距離、色彩の基準があり、建築や宅地の造成では緑化率10%以上が求められます。工作物にも高さと色彩の基準があります。庭を大きく変える計画では、こうした基準が計画の形そのものに影響します。
        </p>
      </section>

      <section id="mito-trees" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          剪定と伐採の境目をどう考えるか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の手入れで一番かかわるのは木竹の伐採です。市のページの一覧では、間伐・枝打ち・整枝など木竹の保護のために通常行われる行為は許可がいらないとされています。条例本文を見ると、例外はもう少し細かく決められています。
        </p>
        <div className="space-y-4">
          {treeItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          許可が必要な伐採でも、市のページの許可基準には「森林である土地の区域外における木竹の伐採」が挙がっており、住宅の庭木の伐採がただちに認められないというわけではありません。大事なのは、作業の前に許可の要否を確かめ、要るなら手続きを済ませてから切ることです。伐採という作業そのものの段取りは
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            伐採のページ
          </Link>
          、庭木を減らして手入れを軽くする考え方は
          <Link href="/guide/garden-downsizing/" className="text-primary underline underline-offset-2 mx-1">
            庭じまい
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="mito-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積もりより前に確かめる理由
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          許可の要否は、業者を呼ぶ前、遅くとも見積もりを頼む前に確かめておくのが順番です。理由は三つあります。
        </p>
        <div className="space-y-4">
          {timingItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          許可申請書は2部、完了届は1部（返却が必要な場合は2部）の提出で、令和3年度から押印は不要とされています。添付書類の一覧や申請様式は市のページにあります。作業日の決め方そのものは
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          を参照してください。
        </p>
      </section>

      <section id="mito-who" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          申請を誰が出すか、業者に何を伝えるか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          許可を受けなければならないのは、条例上「対象行為をしようとする者」です。庭の工事であれば、多くの場合は依頼する側が当事者になります。業者に任せきりにせず、問い合わせのときに次のことを伝えておくと話が早く進みます。
        </p>
        <div className="space-y-4">
          {tellItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          問い合わせ先は、水戸市 都市計画課 景観室 景観係です。連絡先は市のページに掲載されています。木の作業と塀などの工事を分けて頼むかどうかは
          <Link href="/area/himeji/" className="text-primary underline underline-offset-2 mx-1">
            1社にまとめるか、分けて頼むか
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="mito-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としており、風致地区の許可手続きに対応すると公表しているものはありません。許可の要否はこちらで確かめ、そのうえで業者を探す、という前提で見ると、次の3つは使い方の違いがはっきりしています。
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

      <section id="mito-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。風致地区での作業経験や、許可申請の代行の有無は含まれていないので、依頼時に直接確かめてください。
        </p>
        <AreaCompanyTable cityName="水戸" />
      </section>

      <section id="mito-checklist" className="scroll-mt-20 mb-12">
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

      <section id="mito-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="mito" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/felling/", label: "庭木の伐採" },
            { href: "/guide/garden-downsizing/", label: "庭じまい" },
            { href: "/area/chiba/", label: "資格と許可の確かめ方" },
            { href: "/area/himeji/", label: "1社にまとめるか、分けて頼むか" },
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
          切る前に、地区と作業内容を市に確かめる。そのうえで、確認の結果を業者に伝えてください。
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
