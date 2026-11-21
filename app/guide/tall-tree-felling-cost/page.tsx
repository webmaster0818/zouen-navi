import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/tall-tree-felling-cost/";
const UPDATED_LABEL = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const TITLE = "特殊伐採の費用｜高い木の伐採料金を高さ別の公式表示で確認し、クレーン・高所作業車を使う場合の確認点を整理";
const DESC =
  "高い木を伐採する費用を、くらしのマーケットの高さ別の相場（高さ5m以上 ¥15,000〜¥30,000）と、お庭110番・お庭レスキュープロの公式料金（2026年11月22日確認）で確認しました。特殊伐採・クレーン作業の料金は公式ページに記載がないため、見積もりの確認点と道路使用許可の手続きを整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "高い木の伐採費用を公式の表示で確認し、特殊伐採・クレーン作業の見積もりで確認する項目を整理しています。",
  },
};

const toc = [
  { id: "tt-price", label: "公式の表示で確認した高さ別の伐採費用" },
  { id: "tt-why", label: "高い木で伐採の方法と費用が変わる理由" },
  { id: "tt-crane", label: "クレーン・高所作業車を使う場合の手続き" },
  { id: "tt-estimate", label: "見積もりで確認する項目" },
  { id: "tt-faq", label: "よくある質問" },
  { id: "tt-sources", label: "本ページで参照した資料" },
];

type PriceRow = { company: string; shown: string; height: string; note: string };

const priceRows: PriceRow[] = [
  {
    company: "くらしのマーケット（庭木の伐採・抜根）",
    shown: "伐採：高さ3m未満 ¥3,000〜¥9,000／高さ3~5m ¥8,000〜¥20,000／高さ5m以上 ¥15,000〜¥30,000",
    height: "高さ別の3区分あり。最上位は「5m以上」",
    note: "出店者ごとに料金が異なる。ゴミ回収はオプション。カテゴリの掲載は1,324件（2026年11月22日表示）",
  },
  {
    company: "お庭110番（草刈り110番）",
    shown: "伐採 5,500円〜/本（税込）",
    height: "高さ別の記載なし",
    note: "同じ料金ページの上部に「伐採・伐根 6,400円~/本(税込)」の表示もある。現地調査の後に見積もり",
  },
  {
    company: "お庭レスキュープロ（旧お庭マスター）",
    shown: "伐採作業 3,300円（税込）～／本",
    height: "高さ別の記載なし",
    note: "処分費・高所作業車・クレーンの料金の記載なし",
  },
];

const whyItems: Item[] = [
  {
    h: "木を倒すには、高さに応じた広さが要ります",
    b: "厚生労働省は2019年の労働安全衛生規則の改正で、事業者は立木の高さの2倍に相当する距離を半径とする円の内側に、伐倒の作業に従事する労働者以外の労働者を立ち入らせてはならないこと等を定めました。造園工事業を含む、伐木作業を行うすべての業種が対象です。高さ10mの木であれば半径20mが目安になり、住宅が近い庭ではこの範囲を確保できないことが多くなります。",
  },
  {
    h: "倒せない木は、上から少しずつ切り下ろします",
    b: "根元から倒せない場合、業者は木に登ったり高所作業車やクレーンを使ったりして、枝や幹を上から順に切り分けて下ろします。業者はこのような伐採を「特殊伐採」と呼ぶことがあり、くらしのマーケットにも「特殊伐採専門店」と記載した出店者があります。本日確認した公的な資料に、この語の定義は見当たりませんでした。",
  },
  {
    h: "人手・機械・時間が増える分、費用が上がります",
    b: "上から切り下ろす作業は、木を倒す作業より手間がかかり、機械や人員も増えます。くらしのマーケットの相場でも、高さ3m未満と5m以上では上限が¥9,000から¥30,000に上がっています。5m以上の区分は一つにまとめられており、10mや20mの木の料金は表示されていません。",
  },
];

const permitItems: Item[] = [
  {
    h: "道路にクレーンや作業車を置く場合は、道路使用許可が要ります",
    b: "警視庁は、道路で工事や作業を行う場合は、その場所を管轄する警察署長の道路使用許可が必要としており、作業の例として「クレーンを使用した資材搬出入」を挙げています。あわせて道路管理者の「道路占用許可」も必要になる場合があるとしています。申請先は管轄の警察署（交通規制係）で、受付は平日の午前8時30分から午後4時30分です（警視庁の場合）。",
  },
  {
    h: "許可の取得を誰が行うかを確認します",
    b: "申請書類には、工事概要、現場案内図、緊急時の連絡先、作業帯図などが挙げられています。通常は作業を行う業者が準備しますが、見積もりの段階で、許可の取得を業者が行うか、その費用が見積もりに含まれるかを確認します。",
  },
  {
    h: "作業日の近隣への連絡を決めておきます",
    b: "クレーンや高所作業車を使う作業では、道路の一部を使ったり、作業中に人の通行を止めたりすることがあります。近隣への事前の連絡を業者が行うか、依頼する側で行うかを決めておきます。",
  },
];

const estimateItems: string[] = [
  "木の高さと幹の太さ。分からない場合は、2階の屋根より高いかどうかなど、建物と比べた高さを伝えます。",
  "木の周りの状況（建物・塀・電線までの距離、隣地との境界）と、作業車が入れる道の幅。",
  "根元から倒せるか、上から切り下ろす必要があるか、業者の見立て。",
  "高所作業車・クレーンを使うかどうかと、その費用が見積もりに含まれているか。",
  "伐採した枝や幹の処分費。くらしのマーケットでは、ゴミ回収はオプションの扱いです。",
  "切り株を残すか、抜根するか。抜根はくらしのマーケットでも別の料金区分（幹周りで分かれる）です。",
  "道路使用許可などの手続きを業者が行うか、その費用の扱い。",
];

const faqs: Faq[] = [
  {
    q: "特殊伐採の費用はいくらですか。",
    a: "2026年11月22日に確認した公式のページでは、特殊伐採やクレーン作業の料金を表示しているものはありませんでした。高さ別の表示があるのはくらしのマーケットで、伐採の相場は高さ5m以上で¥15,000〜¥30,000です。上から切り下ろす作業や機械を使う作業は現地の状況で費用が変わるため、見積もりで確認してください。",
  },
  {
    q: "高さ5mを超える木は、どの業者に頼めばよいですか。",
    a: "高い木に対応できるかは業者によって異なります。くらしのマーケットの伐採カテゴリには、「高所作業車有り」「高さ30Mまで対応」などと記載した出店者もあります。見積もりを依頼する際に、木の高さと周りの状況を伝え、対応できるか、どの方法で作業するかを確認します。",
  },
  {
    q: "クレーン車を道路に置く手続きは、自分で行う必要がありますか。",
    a: "道路使用許可は、作業場所を管轄する警察署長に申請します（警視庁の案内）。申請書類には工事概要や作業帯図などがあり、通常は作業を行う業者が準備します。誰が申請するかと費用の扱いは、見積もりの段階で業者に確認してください。",
  },
  {
    q: "高い木を自分で切ってもよいですか。",
    a: "高い木の伐採は、倒れる方向の制御や高所での作業を伴います。厚生労働省は、チェーンソーを使った伐木作業の災害を防ぐため、業種を問わず伐木作業の安全対策を強化しています。自分で行わない作業の判断は、庭作業の事故を防ぐページで解説しています。",
  },
];

const sources: Source[] = [
  { org: "くらしのマーケット", title: "庭木の伐採・抜根を料金と口コミで比較！おすすめ事業者ランキング", url: "https://curama.jp/tree-felling/" },
  { org: "お庭110番（草刈り110番）", title: "草刈り、剪定、伐採、芝刈りなどのお庭のお手入れに関するサービスの料金表", url: "https://www.kusakari-a.com/price/" },
  { org: "お庭レスキュープロ（旧お庭マスター）", title: "サービス一覧", url: "https://oniwa-master.info/servicelist/index.html" },
  { org: "厚生労働省", title: "伐木作業等の安全対策の規制が変わります！（リーフレット）", url: "https://www.mhlw.go.jp/content/000524013.pdf" },
  { org: "警視庁", title: "道路使用許可申請手続きについて", url: "https://www.keishicho.metro.tokyo.lg.jp/tetsuzuki/kotsu/road_permission.html" },
];

export default function TallTreeFellingCostPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "特殊伐採の費用" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        2026年11月22日に確認した公式の表示では、高さ別の伐採料金を示しているのはくらしのマーケットのみで、相場は高さ3m未満が¥3,000〜¥9,000、高さ5m以上が¥15,000〜¥30,000でした。
        お庭110番（伐採 5,500円〜/本・税込）とお庭レスキュープロ（3,300円〜/本・税込）は1本あたりの下限のみで、高さ別の料金はありません。
        特殊伐採やクレーン作業の料金は、確認したいずれの公式ページにも記載がないため、総額は現地の見積もりで決まります。
        本ページでは、高い木で費用が上がる理由、クレーンを使う場合の手続き、見積もりで確認する項目を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="tt-price" title="公式の表示で確認した高さ別の伐採費用">
        <P>
          当サイトで、伐採を扱う3社の公式ページを開き、表示されている金額と、高さ別の区分があるかどうかを確認しました。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">サービス</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">公式ページの表示</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">高さ別の区分</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">注記</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((r, idx) => (
                <tr key={r.company} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3">
                    {r.company}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.shown}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.height}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          表示は2026年11月22日時点のもので、変更されることがあります。くらしのマーケットの金額は出店者の料金をもとにした相場の表示で、税込・税抜の表記はページ上にありません。
        </After>
        <Note>
          3社とも、特殊伐採・クレーン・高所作業車の料金は公式ページに記載がありませんでした。高い木の伐採では、表の金額は下限の目安にとどまります。
        </Note>
      </Section>

      <Section id="tt-why" title="高い木で伐採の方法と費用が変わる理由">
        <Cards items={whyItems} />
      </Section>

      <Section id="tt-crane" title="クレーン・高所作業車を使う場合の手続き">
        <Cards items={permitItems} alt />
        <After>
          道路使用許可の申請先や受付時間は都道府県警察によって異なる場合があります。上記は警視庁の案内です。
        </After>
      </Section>

      <Section id="tt-estimate" title="見積もりで確認する項目">
        <Bullets items={estimateItems} />
        <After>
          切り株の扱いは
          <L href="/guide/stump-removal/">伐採した木の切り株</L>
          、伐採した枝の処分方法は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          で解説しています。高さを下げて残す選択肢は
          <L href="/guide/tree-size-reduction/">大きくなりすぎた庭木を小さくする</L>
          をご覧ください。
        </After>
      </Section>

      <Section id="tt-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="tt-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/service/felling/", label: "庭木の伐採費用相場と業者の選び方" },
          { href: "/cost/price/", label: "造園・庭の手入れの費用" },
          { href: "/guide/stump-removal/", label: "伐採した木の切り株" },
          { href: "/guide/tree-size-reduction/", label: "大きくなりすぎた庭木を小さくする" },
          { href: "/guide/garden-safety/", label: "庭作業の事故を防ぐ" },
          { href: "/guide/city-hall-tree-felling/", label: "木の伐採は市役所に頼めるか" },
        ]}
      />

      <Cta
        text="高い木の伐採費用は、高さだけでなく、周りの建物・電線との距離や作業車が入れるかで変わります。木の高さと周りの状況を伝えて、複数の業者から見積もりを取ることをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
