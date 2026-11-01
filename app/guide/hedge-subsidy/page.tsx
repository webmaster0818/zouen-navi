import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/hedge-subsidy/";
const UPDATED_LABEL = "2026年11月1日";
const UPDATED_ISO = "2026-11-01";
const TITLE = "政令市の生垣・緑化助成の一覧｜金額・条件・申請の順番（2026年11月1日確認）";
const DESC =
  "仙台・さいたま・横浜・川崎・相模原・新潟・名古屋・浜松の生垣の助成と、大阪・静岡の保存樹の助成を、各市・外郭団体の公式ページで2026年11月1日に確認した内容で一覧にしました。助成額、延長や高さの条件、申請先、共通する注意点（着工前の申請、見積書、5年間の管理）と、今回掲載を見送った市の理由を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "政令市の生垣・緑化・保存樹の助成を、公式ページで確認した金額と条件で一覧にしています。",
  },
};

const toc = [
  { id: "hs-list", label: "生垣の助成（8市）" },
  { id: "hs-tree", label: "保存樹の助成（2市）" },
  { id: "hs-common", label: "どの市でも共通する注意点" },
  { id: "hs-request", label: "助成を使うときの業者への伝え方" },
  { id: "hs-hold", label: "今回掲載していない市と理由" },
  { id: "hs-faq", label: "よくある質問" },
  { id: "hs-sources", label: "本ページで参照した公式ページ" },
];

type Row = { city: string; href: string; name: string; amount: string; cond: string; where: string };

const hedgeRows: Row[] = [
  { city: "仙台市", href: "/area/sendai/ikegaki-josei/", name: "生垣づくり助成事業", amount: "見積額の1/2と本数×2,500円の少ないほう（上限15万円）。塀撤去は1m²当たり4,000円限度（上限15万円）", cond: "市街化区域・道路から見える奥行き10m以内。延長5m以上、樹高0.6m以上、1m当たり2本以上", where: "各区役所街並み形成課" },
  { city: "さいたま市", href: "/area/saitama/ikegaki-josei/", name: "みどりの街並みづくり助成（生け垣緑化）", amount: "延長×2万円＋塀撤去×1万円と経費の1/2の低いほう（生け垣上限20万円・塀撤去上限10万円）", cond: "市街化区域と駅から半径500m。総延長2m以上、高さ60cm以上3m未満、1mに2本以上", where: "さいたま市公園緑地協会" },
  { city: "横浜市", href: "/area/yokohama/ikegaki-josei/", name: "生垣設置事業（助成）", amount: "1m当たり6,000円上限（未満は実費）、限度額70,000円", cond: "居住する戸建住宅。道路に面した長さ3m以上、樹高90cm以上、1m当たり3本程度。5年間の協定", where: "横浜市緑の協会" },
  { city: "川崎市", href: "/area/kawasaki/ikegaki-josei/", name: "生垣づくり助成", amount: "新設経費・塀撤去費それぞれの1/2（1m当たり5,000円以内、延長100mまで）", cond: "公道に面する場所。延長5m以上、樹高80cm以上、1m当たり3本以上が基本", where: "川崎市公園緑地協会" },
  { city: "相模原市", href: "/area/sagamihara/ikegaki-josei/", name: "生垣設置奨励金", amount: "1m当たり5,000円。戸建は限度額10万円、共同住宅は30万円", cond: "市街化区域等の住宅。幅4m以上の公道等に面し、延長3m以上、高さおおむね90cm以上", where: "相模原市まち・みどり公社" },
  { city: "新潟市", href: "/area/niigata/ryokuchi-kyotei/", name: "生垣等設置費補助金", amount: "工事費の1/2、上限5万円", cond: "緑地協定の区域・緑化地区に限る。延長3m以上、高さ1.0m以上、1m当たり2本以上", where: "各区役所建設課" },
  { city: "名古屋市", href: "/area/nagoya/ryokka-josei/", name: "みどりの補助金（民有地緑化助成事業）", amount: "生垣のみは工事費の1/2以内かつ1m当たり5千円以内（総額3万円以上500万円以下）", cond: "生垣のみは延長15m以上・接道緑化率60％以上。令和8年度の事前相談は11月30日まで", where: "名古屋市緑地維持課" },
  { city: "浜松市", href: "/area/hamamatsu/ikegaki-naegi/", name: "風致地区内住宅生垣用苗木交付制度", amount: "苗木の現物交付（1mにつき3本まで、合計100本まで）", cond: "風致地区内の戸建て住宅。延長が連続して2m以上、1mにつき2本以上", where: "浜松市緑政課" },
];

const treeRows: Row[] = [
  { city: "大阪市", href: "/area/osaka/hozonju-josei/", name: "保存樹・保存樹林等の助成", amount: "剪定費・病虫害防除費などの1/2以内、10万円限度", cond: "市が指定した保存樹・保存樹林のみ。毎年4月頃に所有者へ個別のお知らせ", where: "大阪市緑化課" },
  { city: "静岡市", href: "/area/shizuoka/hozonju-hojo/", name: "保存樹木等の補助金", amount: "保存行為の経費の1/2以内、一行為あたり30万円上限", cond: "静岡市みどり条例で指定した保存樹木等。原則年1回まで", where: "静岡市緑地政策課" },
];

const commonItems: Item[] = [
  { h: "工事の前に申請し、決定を受けてから着工する", b: "今回確認した生垣の助成のうち、お金を助成する7市はいずれも、工事の前の申請を求め、着工後の申請やすでに設置した生垣を対象外としています。業者と着工日を決めるのは、交付決定や承認の通知を受けた後です。" },
  { h: "見積書は申請書類の一つ", b: "多くの市で、業者の見積書（写し）が申請時の添付書類になっています。延長・本数・苗の高さが読み取れ、対象外の工事（フェンスなど）が分かれている見積書が求められます。" },
  { h: "年度と予算に限りがある", b: "多くの制度が「申請した年度内に完了」「予算がなくなり次第終了」としています。年明けからの申請では、工事の期限に余裕がないことがあります。" },
  { h: "植えた後の管理が条件になる", b: "横浜（5年間の緑の街づくり協定）、さいたま・相模原（5年間の維持管理）、新潟（5年以上の保全）など、設置後の管理を条件にする市があります。" },
  { h: "道路に面した場所が中心", b: "生垣の助成は、道路から見える場所に設ける生垣を対象にしているものがほとんどです。隣家との境界は対象外とする市（仙台など）と、対象に含む市（浜松）があります。" },
];

const requestItems = [
  "最初の問い合わせで、助成を申請する予定であることと、着工は決定の後になることを伝える",
  "見積書に、生垣の延長（m）、植える本数、苗の高さを書いてもらう",
  "塀の撤去、生垣の植栽、フェンスなど助成の対象外の工事を、項目ごとに分けてもらう",
  "申請に必要な図面（計画図・平面図）を作ってもらえるか、費用に含まれるかを確認する",
  "着工前・施工中・完了後の写真を誰が撮るかを決める",
  "領収書の内訳を見積書の区分と揃えてもらう",
];

const holdItems: Item[] = [
  { h: "札幌市", b: "「さっぽろ都心みどりのまちづくり助成制度」は、札幌都心部で法人事業者が行う民有地緑化を対象としており、個人宅の生垣は対象として記載されていません。" },
  { h: "京都市", b: "市のページに、民有地緑化支援事業は令和2年度をもって終了したと記載されています。" },
  { h: "堺市", b: "緑化樹配付は、地域の方々が協同で行う緑化活動（団体）を対象としており、令和8年度の申込み受付は終了したと記載されています。" },
  { h: "神戸市", b: "市のページ「まちの花壇や緑化への助成制度」に掲載されている制度（市民の木・市民の森、県民まちなみ緑化事業、森と緑とのふれあい支援事業など）に、個人宅の生垣を対象とする制度の記載は見当たりませんでした。" },
  { h: "熊本市・福岡市", b: "今回、生垣の助成を説明する現行の公式ページに到達できず、金額と受付状況を確認できなかったため掲載していません。" },
  { h: "千葉市・岡山市・広島市・北九州市", b: "今回は個人宅の生垣を対象とする制度の確認を行っていないため、掲載していません。" },
];

const faqs: Faq[] = [
  { q: "自分の市が一覧にない場合は、助成がないということですか。", a: "そうとは限りません。本ページは、2026年11月1日に公式ページで内容を確認できた制度のみを掲載しています。政令市以外の市町村にも、生垣の設置や保存樹の管理を支援する制度がある場合があります。お住まいの自治体の緑化担当の窓口にご確認ください。" },
  { q: "工事が終わってから申請することはできますか。", a: "今回確認した生垣の助成のうち、お金を助成する7市（仙台・さいたま・横浜・川崎・相模原・新潟・名古屋）はいずれも、工事の前に申請することを求めています。工事後の申請や、すでに設置した生垣は対象外です。浜松市は苗木の交付で、申請から交付まで1か月半程度かかります。" },
  { q: "既存のブロック塀を撤去する費用も助成されますか。", a: "市によって異なります。仙台・さいたま・川崎・新潟は塀の撤去も対象にしていますが、横浜市緑の協会の助成では、ブロック塀を撤去して生垣を設置する場合は対象外となり、横浜市建築局の別の事業が案内されています。" },
  { q: "金額は毎年変わりますか。", a: "改定される場合があります。本ページの金額は2026年11月1日に各市・団体の公式ページで確認したものです。申請前に必ず各窓口で最新の内容をご確認ください。" },
];

const sources: Source[] = [
  { org: "仙台市", title: "生垣づくり助成事業", url: "https://www.city.sendai.jp/ryokukasuishin/kurashi/shizen/midori/shinse/jose/ikegaki.html" },
  { org: "公益財団法人さいたま市公園緑地協会", title: "みどりの街並みづくり助成制度のご案内（PDF）", url: "https://www.sgp.or.jp/library/5c6f9dd8c49fc15e55041b8a/69d8664649758552badaf441.pdf" },
  { org: "公益財団法人横浜市緑の協会", title: "助成事業", url: "https://www.hama-midorinokyokai.or.jp/midori/grant.php" },
  { org: "公益財団法人川崎市公園緑地協会", title: "屋上・壁面緑化／生垣づくり助成", url: "https://www.kawasaki-green.or.jp/furtherance/greening" },
  { org: "公益財団法人相模原市まち・みどり公社", title: "みどりのまちづくり奨励金", url: "https://green.sagamiharashi-machimidori.or.jp/%E9%83%BD%E5%B8%82%E3%81%AE%E7%B7%91%E5%8C%96/%E3%81%BF%E3%81%A9%E3%82%8A%E3%81%AE%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%A5%A8%E5%8A%B1%E9%87%91" },
  { org: "新潟市", title: "緑地協定及び生垣等設置費補助金について", url: "https://www.city.niigata.lg.jp/kurashi/park/midori-jyosei/koen2020.html" },
  { org: "名古屋市", title: "みどりの補助金（名古屋市 民有地緑化助成事業）", url: "https://www.city.nagoya.jp/jigyou/douro/1026345/1026346.html" },
  { org: "浜松市", title: "浜松市風致地区内住宅生垣用苗木交付制度の概要", url: "https://www.city.hamamatsu.shizuoka.jp/ryokuka/greening/hanamidori/ikegakikoufu.html" },
  { org: "大阪市", title: "保存樹・保存樹林等、貴重な緑の保全・育成への助成について", url: "https://www.city.osaka.lg.jp/kensetsu/page/0000158867.html" },
  { org: "静岡市", title: "静岡市みどり条例に基づく保存樹木等の指定", url: "https://www.city.shizuoka.lg.jp/s8967/s001654.html" },
  { org: "札幌市", title: "さっぽろ都心みどりのまちづくり助成制度", url: "https://www.city.sapporo.jp/ryokuka/midori/minyuuchijosei/index.html" },
  { org: "京都市", title: "緑化助成制度", url: "https://www.city.kyoto.lg.jp/menu4/category/57-6-0-0-0-0-0-0-0-0.html" },
  { org: "堺市", title: "緑化樹配付【団体の方】（令和8年度申込みについて）※今年度の申込み受付は終了しました", url: "https://www.city.sakai.lg.jp/kurashi/koen/midori_enjoy/shimin/shien/ryokkaju.html" },
  { org: "神戸市", title: "まちの花壇や緑化への助成制度", url: "https://www.city.kobe.lg.jp/a53249/kurashi/machizukuri/flower/josei/index.html" },
];

function RowTable({ rows }: { rows: Row[] }) {
  return (
    <div className="space-y-4">
      {rows.map((r) => (
        <div key={r.city} className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="font-bold text-text-primary mb-1">
            <Link href={r.href} className="text-primary underline underline-offset-2">
              {r.city}：{r.name}
            </Link>
          </h3>
          <dl className="text-[15px] leading-8 text-text-secondary">
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-semibold text-text-primary">金額</dt>
              <dd>{r.amount}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-semibold text-text-primary">条件</dt>
              <dd>{r.cond}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-semibold text-text-primary">窓口</dt>
              <dd>{r.where}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default function HedgeSubsidyPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "政令市の生垣・緑化助成の一覧" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        生垣をつくる工事や、古い大木の剪定には、市や外郭団体の助成を使える場合があります。本ページは、政令指定都市20市のうち、2026年11月1日に公式ページを開いて金額・条件・申請先を確認できた10市の制度を一覧にしたものです。各市の詳しい条件と業者への依頼の段取りは、市ごとのページで解説しています。金額や受付状況は改定されることがあるため、申請前に必ず各窓口で確認してください。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="hs-list" title="生垣の助成（8市）">
        <P>道路に面した場所に生垣を新しく設ける場合を対象とする制度です。浜松市のみ、お金ではなく苗木を交付します。</P>
        <RowTable rows={hedgeRows} />
        <p className="text-sm leading-7 text-text-muted mt-3">
          出典：各市・外郭団体の公式ページ（2026年11月1日確認）。中核市の川口市の制度は
          <L href="/area/kawaguchi/">川口で生垣を設置する際の業者選び</L>
          で解説しています。
        </p>
      </Section>

      <Section id="hs-tree" title="保存樹の助成（2市）">
        <P>市が指定した保存樹・保存樹木等の剪定や修繕の経費を助成する制度です。指定を受けていない庭木には使えません。</P>
        <RowTable rows={treeRows} />
      </Section>

      <Section id="hs-common" title="どの市でも共通する注意点">
        <Cards items={commonItems} alt />
      </Section>

      <Section id="hs-request" title="助成を使うときの業者への伝え方">
        <P>助成の申請では、業者が作る見積書や図面がそのまま申請書類になります。問い合わせの段階で次の点を伝えておくと、手戻りを減らせます。</P>
        <Bullets items={requestItems} />
        <div className="mt-5">
          <Note>
            植え付けの手順と植える位置の考え方は「生垣を新しく植える」、樹種の選び方は「生垣におすすめの品種」で解説しています。見積書の読み方は「見積書の読み方と書面の確認」をご参照ください。
          </Note>
        </div>
      </Section>

      <Section id="hs-hold" title="今回掲載していない市と理由">
        <P>次の市は、2026年11月1日の確認の時点で、個人宅の生垣を対象とする現行の制度を公式ページで確認できなかったか、対象・受付状況が異なるため、一覧に含めていません。制度がないという意味ではありません。</P>
        <Cards items={holdItems} alt />
      </Section>

      <Section id="hs-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="hs-sources" title="本ページで参照した公式ページ">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/hedge-planting/", label: "生垣を新しく植える" },
          { href: "/plant/hedge/", label: "生垣におすすめの品種" },
          { href: "/guide/hedge-care/", label: "生垣の手入れ" },
          { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
        ]}
      />

      <Cta text="助成を使う場合は、業者と着工日を決める前に、各市・団体の窓口へ申請してください。" updatedLabel={UPDATED_LABEL} />
    </article>
  );
}
