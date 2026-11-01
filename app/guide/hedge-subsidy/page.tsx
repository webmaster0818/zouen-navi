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
const TITLE = "政令市・中核市の生垣・緑化助成の一覧｜金額・条件・申請の順番（2026年11月1日確認）";
const DESC =
  "政令市10市（仙台・さいたま・横浜・川崎・相模原・新潟・名古屋・浜松・福岡・熊本）と中核市5市（岐阜・水戸・西宮・松山・高松）の生垣・庭木の植栽の助成、大阪・静岡・広島・北九州の保存樹の助成を、各市・外郭団体の公式ページで2026年11月1日に確認した内容で一覧にしました。助成額、延長や高さの条件、申請先、共通する注意点（着工前の申請、見積書、5年間の管理）と、確認できなかった市を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "政令市・中核市の生垣・緑化・保存樹の助成を、公式ページで確認した金額と条件で一覧にしています。",
  },
};

const toc = [
  { id: "hs-list", label: "生垣・植栽の助成（政令市10市）" },
  { id: "hs-core", label: "生垣・植栽の助成（中核市5市）" },
  { id: "hs-tree", label: "保存樹の助成（4市）" },
  { id: "hs-common", label: "どの市でも共通する注意点" },
  { id: "hs-request", label: "助成を使うときの業者への伝え方" },
  { id: "hs-hold", label: "今回確認できなかった市" },
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
  { city: "福岡市", href: "/area/fukuoka/ryokka-josei/", name: "緑化助成事業（福岡市緑のまちづくり協会）", amount: "道路から見える範囲の緑化施工費用の1/2（1m²当たりの限度あり、上限20万円）。ブロック塀の撤去費用は対象外", cond: "市内の戸建住宅。幅員4m以上の公衆用道路から見える新たな緑化（単木・生垣など）で緑化面積5m²以上。受付は4月1日〜2月15日", where: "福岡市緑のまちづくり協会" },
  { city: "熊本市", href: "/area/kumamoto/tsunagari-mori/", name: "つながりの森づくり補助金", amount: "生垣は1m当たり3,500円と見積額の1/2の低いほう（上限7万円、緑化重点地区10万円）。樹木は樹高別に1本5,000〜25,000円（個人住宅上限10万円）", cond: "生垣は樹高1m以上・延長5m以上。個人住宅の樹木は高さ2m以上を3本以上。申請は各年度4月1日〜2月28日", where: "熊本市花とみどり協働課" },
];

const coreRows: Row[] = [
  { city: "岐阜市", href: "/area/gifu/ikegaki-hojo/", name: "生け垣づくり奨励補助金（岐阜市未来のまちづくり財団）", amount: "公道に面した部分は1m当たり2,000円（それ以外1,500円、上限3万円）。公道に面したブロック塀等の取り壊しは1m当たり7,000円（上限7万円）", cond: "住宅用地。施工延長5m以上、おおむね1m以内に2本以上、高さ0.6m以上・幅0.2m以上。同年度内（最終2月末）に完成", where: "岐阜市未来のまちづくり財団 緑化推進事務所" },
  { city: "水戸市", href: "/area/mito/ikegaki-hojo/", name: "生垣設置奨励補助金", amount: "設置費用の1/2（1m当たり5千円・全体15万円が限度）。ブロック塀等の撤去は1/2（1m当たり3千円・全体9万円が限度）", cond: "住宅用地。公共用道路に面し延長5m以上、樹高おおむね1m以上。交付決定通知の後に着工", where: "水戸市公園緑地課 緑化係" },
  { city: "西宮市", href: "/area/nishinomiya/ryokka-josei/", name: "住まいの緑化助成制度", amount: "接道緑化は樹高別に1本450〜15,000円（限度額5万円）。壁面緑化は工事費の1/2（限度額10万円）", cond: "住居専用の敷地。道路・水路から7m以内で外部から眺望できる場所に、高木・中木を合わせて3本以上。着工前（2週間前ぐらいまで）に申請", where: "西宮市花と緑の課" },
  { city: "松山市", href: "/area/matsuyama/ikegaki-shoreikin/", name: "緑のまちづくり奨励金", amount: "生け垣は1m当たり3,000円と実費の低いほう（上限6万円）、ブロック塀等を生け垣に改造する場合は1m当たり6,000円（上限9万円）。庭木は費用の半額（上限2万円）", cond: "道路に接した場所に延長3m以上、購入した高さ45cm以上の木を1m当たり2本以上。設置前に事業指定申請", where: "松山市公園管理課" },
  { city: "高松市", href: "/area/takamatsu/ikegaki-josei/", name: "緑化事業助成制度（生垣設置事業）", amount: "植栽工事費の2/3、延長×5,000円（塀の取り壊しは1m当たり2,500円加算）、15万円のいずれか少ない額", cond: "居住誘導区域・都市機能誘導区域の個人所有の住宅（ブロック塀等を撤去する場合は市内全域）。公衆用道路に面して2m以上、高さ50cm以上の常緑樹を1m当たり2本以上", where: "高松市公園緑地課" },
];

const treeRows: Row[] = [
  { city: "大阪市", href: "/area/osaka/hozonju-josei/", name: "保存樹・保存樹林等の助成", amount: "剪定費・病虫害防除費などの1/2以内、10万円限度", cond: "市が指定した保存樹・保存樹林のみ。毎年4月頃に所有者へ個別のお知らせ", where: "大阪市緑化課" },
  { city: "静岡市", href: "/area/shizuoka/hozonju-hojo/", name: "保存樹木等の補助金", amount: "保存行為の経費の1/2以内、一行為あたり30万円上限", cond: "静岡市みどり条例で指定した保存樹木等。原則年1回まで", where: "静岡市緑地政策課" },
  { city: "広島市", href: "/area/hiroshima/hozonju-hojo/", name: "美しい樹木・樹林保存事業補助金", amount: "枯損防止に要する経費の1/2（保存樹1本10万円、保存樹林1か所30万円が限度）", cond: "市が指定した保存樹・保存樹林で、樹勢回復の措置が必要なもの。着手の14日前までに申請", where: "広島市緑政課 花と緑の施策係" },
  { city: "北九州市", href: "/area/kitakyushu/hozonju-josei/", name: "保存樹（保存樹林）助成金", amount: "保存樹1本1年につき5,000円、保存樹林1集団1年につき20,000円", cond: "市が指定した保存樹・保存樹林。年度ごとに交付申請書と実績報告書を提出", where: "各区役所まちづくり整備課" },
];

const commonItems: Item[] = [
  { h: "工事の前に申請し、決定を受けてから着工する", b: "今回確認した生垣・植栽の助成のうち、お金を助成する14市の制度はいずれも、工事の前の申請や確認を求めています。業者と着工日を決めるのは、交付決定や承認の通知を受けた後です。" },
  { h: "見積書は申請書類の一つ", b: "多くの市で、業者の見積書（写し）が申請時の添付書類になっています。延長・本数・苗の高さが読み取れ、対象外の工事（フェンスなど）が分かれている見積書が求められます。" },
  { h: "年度と予算に限りがある", b: "多くの制度が「申請した年度内に完了」「予算がなくなり次第終了」としています。年明けからの申請では、工事の期限に余裕がないことがあります。" },
  { h: "植えた後の管理が条件になる", b: "横浜（5年間の緑の街づくり協定）、さいたま・相模原・高松（5年間の管理）、新潟・熊本（5年以上）、福岡（5年以内に枯れた場合は植え替え）など、設置後の管理を条件にする市があります。" },
  { h: "道路に面した場所が中心", b: "生垣の助成は、道路から見える場所に設ける生垣を対象にしているものがほとんどです。隣家との境界は対象外とする市（仙台など）と、対象に含む市（浜松）があり、岐阜は公道に面していない部分も1m当たりの額を下げて対象にしています。" },
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
  { h: "千葉市", b: "市のよくある質問では、屋上・壁面緑化の助成は中心市街地の建築物が対象とされています。保存樹木の協定者には1本当り年額3,000円の奨励金が交付されています（市のページ「保存樹木」）。個人宅の生垣の設置を対象とする制度は、今回確認できませんでした。" },
  { h: "岡山市", b: "岡山市公園協会の緑化事業のページでは、学校・町内会などの団体向けの支援や記念植樹の配布などが案内されており、個人宅の生垣の設置費を助成する制度は今回確認できませんでした。" },
  { h: "広島市（生垣）", b: "民有地緑化推進事業補助金は、敷地面積1,000平方メートル以上の建築物の新築等に伴う緑化が対象です。個人向けには緑のカーテン設置補助金や記念樹の贈呈などが案内されていますが、生垣の設置費を助成する制度は今回確認できませんでした。保存樹の補助は上の一覧に掲載しています。" },
  { h: "北九州市（生垣）", b: "市のページ「市街地の緑化」では、民有地の緑化の施策として緑地協定と保存樹が案内されており、個人宅の生垣の設置費を助成する制度は今回確認できませんでした。保存樹の助成金は上の一覧に掲載しています。" },
  { h: "船橋市", b: "市のページ「樹木の保全」では、市が指定した樹木・樹林・生垣（延長30m以上）に保全経費の一部として助成金を支給すると案内されています。新たに生垣を設置する費用の助成は、現行の公式ページを今回確認できませんでした。" },
  { h: "金沢市", b: "金沢市スポーツ事業団が、住宅を新築した方に記念樹の引換券や、緑化計画策定地区で高木を植える方に新築記念高木植栽助成券（30,000円）を配付しています。新築以外の生垣の設置を対象とする制度は、今回確認できませんでした。" },
  { h: "姫路市", b: "市のページでは、兵庫県の「県民まちなみ緑化事業」（植栽・生垣など）が案内されていますが、令和8年度の募集内容は今回確認できなかったため掲載していません。" },
  { h: "鹿児島市", b: "市のよくある質問では、保存樹に指定されると樹木医の診断や奨励金の交付などを受けられると案内されていますが、奨励金の金額は記載されていません。個人宅の生垣を対象とする制度は今回確認できませんでした。" },
  { h: "宇都宮市・長崎市・奈良市・大分市・倉敷市・長野市・富山市", b: "個人宅の生垣の設置を対象とする現行の制度を、今回公式ページで確認できませんでした。" },
];

const faqs: Faq[] = [
  { q: "自分の市が一覧にない場合は、助成がないということですか。", a: "そうとは限りません。本ページは、政令指定都市20市と、造園ナビにエリアページのある中核市について、2026年11月1日に公式ページで内容を確認できた制度のみを掲載しています。ほかの市町村にも、生垣の設置や保存樹の管理を支援する制度がある場合があります。お住まいの自治体の緑化担当の窓口にご確認ください。" },
  { q: "工事が終わってから申請することはできますか。", a: "今回確認した生垣・植栽の助成のうち、お金を助成する制度（政令市9市・中核市5市）はいずれも、工事の前に申請や確認を受けることを求めています。工事後の申請や、すでに設置した生垣は対象外です。浜松市は苗木の交付で、申請から交付まで1か月半程度かかります。" },
  { q: "既存のブロック塀を撤去する費用も助成されますか。", a: "市によって異なります。仙台・さいたま・川崎・新潟・熊本・岐阜・水戸・松山・高松は塀の撤去も対象（または加算）にしています。横浜市緑の協会の助成では、ブロック塀を撤去して生垣を設置する場合は対象外となり、横浜市建築局の別の事業が案内されています。福岡市緑のまちづくり協会の助成でも撤去費用は対象外で、福岡市のブロック塀等除却費補助事業が案内されています。" },
  { q: "金額は毎年変わりますか。", a: "改定される場合があります。本ページの金額は2026年11月1日に各市・団体の公式ページで確認したものです。申請前に必ず各窓口で最新の内容をご確認ください。" },
];

const sources: Source[] = [
  { org: "仙台市", title: "生垣づくり助成事業", url: "https://www.city.sendai.jp/ryokukasuishin/kurashi/shizen/midori/shinse/jose/ikegaki.html" },
  { org: "公益財団法人さいたま市公園緑地協会", title: "みどりの街並みづくり助成制度のご案内（PDF）", url: "https://www.sgp.or.jp/library/5c6f9dd8c49fc15e55041b8a/69d8664649758552badaf441.pdf" },
  { org: "公益財団法人横浜市緑の協会", title: "助成事業", url: "https://www.hama-midorinokyokai.or.jp/midori/grant.php" },
  { org: "公益財団法人川崎市公園緑地協会", title: "屋上・壁面緑化／生垣づくり助成", url: "https://www.kawasaki-green.or.jp/furtherance/greening" },
  { org: "公益財団法人相模原市まち・みどり公社", title: "みどりのまちづくり奨励金", url: "https://green.sagamiharashi-machimidori.or.jp/%E9%83%BD%E5%B8%82%E3%81%AE%E7%B7%91%E5%8C%96/%E3%81%BF%E3%81%A9%E3%82%8A%E3%81%AE%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%A5%A8%E5%8A%B1%E9%87%91" },
  { org: "新潟市", title: "緑地協定及び生垣等設置費補助金について", url: "https://www.city.niigata.lg.jp/kurashi/park/midori-jyosei/koen2020.html" },
  { org: "名古屋市", title: "みどりの補助金（名古屋市　民有地緑化助成事業）", url: "https://www.city.nagoya.jp/jigyou/douro/1026345/1026346.html" },
  { org: "浜松市", title: "浜松市風致地区内住宅生垣用苗木交付制度の概要", url: "https://www.city.hamamatsu.shizuoka.jp/ryokuka/greening/hanamidori/ikegakikoufu.html" },
  { org: "大阪市", title: "保存樹・保存樹林等、貴重な緑の保全・育成への助成について", url: "https://www.city.osaka.lg.jp/kensetsu/page/0000158867.html" },
  { org: "静岡市", title: "静岡市みどり条例に基づく保存樹木等の指定", url: "https://www.city.shizuoka.lg.jp/s8967/s001654.html" },
  { org: "札幌市", title: "さっぽろ都心みどりのまちづくり助成制度", url: "https://www.city.sapporo.jp/ryokuka/midori/minyuuchijosei/index.html" },
  { org: "京都市", title: "緑化助成制度", url: "https://www.city.kyoto.lg.jp/menu4/category/57-6-0-0-0-0-0-0-0-0.html" },
  { org: "堺市", title: "緑化樹配付【団体の方】（令和8年度申込みについて）※今年度の申込み受付は終了しました", url: "https://www.city.sakai.lg.jp/kurashi/koen/midori_enjoy/shimin/shien/ryokkaju.html" },
  { org: "神戸市", title: "まちの花壇や緑化への助成制度", url: "https://www.city.kobe.lg.jp/a53249/kurashi/machizukuri/flower/josei/index.html" },
  { org: "公益財団法人福岡市緑のまちづくり協会", title: "緑化助成事業", url: "https://www.midorimachi.jp/help/promotion.html" },
  { org: "熊本市", title: "緑化助成制度のご案内　～つながりの森づくり補助金～", url: "https://www.city.kumamoto.jp/kiji00315684/index.html" },
  { org: "広島市", title: "美しい樹木・樹林保存事業補助金のご案内", url: "https://www.city.hiroshima.lg.jp/living/park-green/1021378/1006063/1026394/1018254.html" },
  { org: "広島市", title: "建物の敷地内を緑化する際の助成などはありますか。(FAQID-5581)", url: "https://www.city.hiroshima.lg.jp/faq/community/1001651/1028198/1002575.html" },
  { org: "北九州市", title: "保存樹について", url: "https://www.city.kitakyushu.lg.jp/contents/05900127.html" },
  { org: "北九州市", title: "市街地の緑化", url: "https://www.city.kitakyushu.lg.jp/contents/924_00812.html" },
  { org: "千葉市", title: "保存樹木", url: "https://www.city.chiba.jp/toshi/koenryokuchi/ryokusei/jumoku.html" },
  { org: "千葉市", title: "屋上や壁面への緑化に対する助成制度はありますか。", url: "https://www.city.chiba.jp/faq/toshi/koenryokuchi/ryokusei/2145.html" },
  { org: "公益財団法人岡山市公園協会", title: "緑化事業", url: "https://www.okayama-park.or.jp/greening/" },
  { org: "岐阜市", title: "民有地緑化の補助制度", url: "https://www.city.gifu.lg.jp/info/machizukuri/1007994/1008018/1008026.html" },
  { org: "水戸市", title: "生垣補助の手続きについて", url: "https://www.city.mito.lg.jp/site/ryokuka/30405.html" },
  { org: "西宮市", title: "住まいの緑化助成制度", url: "https://www.nishi.or.jp/kotsu/kankyo/hanatomidori/seido/ikimonokyosei.html" },
  { org: "松山市", title: "緑のまちづくり奨励金制度", url: "https://www.city.matsuyama.ehime.jp/shisetsu/koen/ryokuka/syoureikin.html" },
  { org: "高松市", title: "高松市緑化事業助成制度（生垣設置、ブロック塀撤去等）", url: "https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/josei/kurashi/ryokka.html" },
  { org: "船橋市", title: "樹木の保全", url: "https://www.city.funabashi.lg.jp/machi/kouen/004/p001356.html" },
  { org: "金沢市", title: "民有地緑化助成制度（金沢市スポーツ事業団）", url: "https://www4.city.kanazawa.lg.jp/soshikikarasagasu/midoritohananoka/gyomuannai/3/1/4598.html" },
  { org: "公益財団法人金沢市スポーツ事業団", title: "新築記念樹・協力樹引換券、高木植栽助成券", url: "https://www.kanazawa-sports.jp/green/green-ticket/" },
  { org: "姫路市", title: "県民まちなみ緑化事業", url: "https://www.city.himeji.lg.jp/kurashi/0000002918.html" },
  { org: "鹿児島市", title: "庭の木を保存樹に指定した場合、市からどのような助成を受けられますか。", url: "https://www.city.kagoshima.lg.jp/faq-kankyomachizukuri/hozen/q40.html" },
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
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "政令市・中核市の生垣・緑化助成の一覧" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        生垣をつくる工事や、古い大木の剪定には、市や外郭団体の助成を使える場合があります。本ページは、政令指定都市20市と、造園ナビにエリアページのある中核市について、2026年11月1日に公式ページを開いて金額・条件・申請先を確認できた19市の制度を一覧にしたものです。各市の詳しい条件と業者への依頼の段取りは、市ごとのページで解説しています。金額や受付状況は改定されることがあるため、申請前に必ず各窓口で確認してください。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="hs-list" title="生垣・植栽の助成（政令市10市）">
        <P>道路に面した場所に生垣を新しく設ける場合を中心とする制度です。浜松市のみ、お金ではなく苗木を交付します。福岡市と熊本市は、生垣のほか庭木（単木）の植栽も対象です。</P>
        <RowTable rows={hedgeRows} />
        <p className="text-sm leading-7 text-text-muted mt-3">出典：各市・外郭団体の公式ページ（2026年11月1日確認）。</p>
      </Section>

      <Section id="hs-core" title="生垣・植栽の助成（中核市5市）">
        <P>造園ナビにエリアページのある中核市のうち、個人宅の生垣・植栽を対象とする制度を公式ページで確認できた市です。西宮市は生垣ではなく、道路沿いに高木・中木を植える接道緑化が中心です。</P>
        <RowTable rows={coreRows} />
        <p className="text-sm leading-7 text-text-muted mt-3">
          出典：各市・外郭団体の公式ページ（2026年11月1日確認）。中核市の川口市の制度は
          <L href="/area/kawaguchi/">川口で生垣を設置する際の業者選び</L>
          で解説しています。
        </p>
      </Section>

      <Section id="hs-tree" title="保存樹の助成（4市）">
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

      <Section id="hs-hold" title="今回確認できなかった市">
        <P>次の市は、2026年11月1日の確認の時点で、個人宅の生垣を対象とする現行の制度を公式ページで確認できなかったか、対象・受付状況が異なるため、一覧に含めていません。「確認できず」は、制度がないという意味ではありません。</P>
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
