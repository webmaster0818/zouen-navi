import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/weeding-cost/";
const UPDATED_LABEL = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const TITLE = "草むしりを便利屋・業者に頼む料金｜10㎡あたりの目安を公式表示で比べ、草刈り機での作業との違いを整理";
const DESC =
  "草むしり（手作業）を業者に頼む料金を、くらしのマーケット（10平米 ¥3,000〜¥9,000）とお庭110番（草むしり 830円〜/㎡・税込）の公式表示（2026年11月22日確認）で比べました。草刈り機での作業との料金の差、処分の扱い、見積もりの前に伝えることを整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "草むしりを業者に頼む料金を公式表示で比べ、草刈り機での作業との違いと見積もりの確認点を整理しています。",
  },
};

const toc = [
  { id: "wd-price", label: "公式の表示で比べた草むしりの料金" },
  { id: "wd-machine", label: "草刈り機での作業との料金の差" },
  { id: "wd-included", label: "料金に含まれる作業と、追加になりやすい条件" },
  { id: "wd-tell", label: "依頼の前に伝えること" },
  { id: "wd-faq", label: "よくある質問" },
  { id: "wd-sources", label: "本ページで参照した資料" },
];

type PriceRow = { company: string; work: string; shown: string; per10: string };

const priceRows: PriceRow[] = [
  {
    company: "くらしのマーケット",
    work: "草むしり（手作業）",
    shown: "相場 10平米 ¥3,000〜¥9,000",
    per10: "3,000〜9,000円（ページの表示どおり）",
  },
  {
    company: "お庭110番（草刈り110番）",
    work: "草むしり",
    shown: "830円〜/㎡（税込）",
    per10: "8,300円〜（当サイトで 830円×10㎡ を計算した下限）",
  },
  {
    company: "くらしのマーケット",
    work: "草刈り（草刈り機）",
    shown: "相場 50平米 ¥8,000〜¥15,000",
    per10: "1,600〜3,000円（当サイトで50平米の表示を10㎡に換算）",
  },
  {
    company: "お庭110番（草刈り110番）",
    work: "機会刈り（料金表の表記どおり）",
    shown: "390円〜/㎡（税込）",
    per10: "3,900円〜（当サイトで 390円×10㎡ を計算した下限）",
  },
];

const includedItems: Item[] = [
  {
    h: "くらしのマーケットの共通の作業内容",
    b: "草むしり（手作業）のカテゴリでは、すべてのサービスに共通の作業内容を「手で草むしり / 除草剤散布 / ゴミ回収を受ける場合は草むしり作業で発生したすべてのゴミを回収」と定め、表示されている料金はこの作業内容を含むとしています。抜いた雑草の処分はオプションで選択する形です。",
  },
  {
    h: "草丈が高い場合",
    b: "くらしのマーケットは予約の際のポイントとして、草丈が50㎝を超える場合は追加料金が発生するか、対応できない可能性があると案内しています。伸びきった草は、手作業ではなく草刈り機での作業を先に検討します。",
  },
  {
    h: "現地調査・見積もりの費用",
    b: "お庭110番の料金表は「現地調査の後、無料でお見積り※」としつつ、対応エリア・加盟店・現場状況により、事前に確認したうえで調査・見積りに費用がかかる場合があると注記しています。",
  },
];

const tellItems: string[] = [
  "草むしりをしてほしい場所の面積（㎡）。くらしのマーケットは、作業面積に応じて金額が変わるため、あらかじめ面積を測って予約するよう案内しています。",
  "草丈のおおよその高さ（50㎝を超えるかどうか）。",
  "抜いた草の処分を依頼するか。依頼する場合は、処分のオプションも予約します。",
  "作業する場所に置いてある物（鉢・自転車など）。くらしのマーケットは、物があると危険なため事前の移動を案内しています。",
  "除草剤の散布を希望するかどうか。散布する場合は、近隣への配慮や薬剤の扱いを業者と確認します。",
];

const faqs: Faq[] = [
  {
    q: "草むしりを業者に頼むと、10㎡でいくらかかりますか。",
    a: "2026年11月22日に確認した公式の表示では、くらしのマーケットの草むしり（手作業）の相場が10平米で¥3,000〜¥9,000、お庭110番の草むしりが830円〜/㎡（税込）でした。お庭110番の単価で10㎡を計算すると8,300円からになります。処分を加えるか、草丈が高いかで総額は変わります。",
  },
  {
    q: "草むしりと草刈りでは、どちらが安いですか。",
    a: "公式の表示を10㎡あたりにそろえると、草刈り機での作業のほうが安くなっています。くらしのマーケットでは草刈り（草刈り機）が50平米 ¥8,000〜¥15,000（10㎡あたり1,600〜3,000円）、草むしり（手作業）が10平米 ¥3,000〜¥9,000でした。手作業は根まで抜く作業のため、手間がかかる分、単価が高くなります。",
  },
  {
    q: "抜いた草の処分も頼めますか。",
    a: "くらしのマーケットの草むしり（手作業）では、抜いた雑草の処分はオプションで選択できます。自治体のごみとして出す場合の出し方は、剪定枝・刈った草の処分方法のページで解説しています。",
  },
  {
    q: "シルバー人材センターに頼む場合と、どう違いますか。",
    a: "シルバー人材センターの料金や受けられる作業はセンターごとに異なります。依頼の流れと造園業者との使い分けは、庭の手入れをシルバー人材センターに依頼する場合のページで解説しています。",
  },
];

const sources: Source[] = [
  { org: "くらしのマーケット", title: "草むしり（手作業）を料金と口コミで比較！おすすめ事業者ランキング", url: "https://curama.jp/hand-mowing/" },
  { org: "くらしのマーケット", title: "草刈り（草刈り機）を料金と口コミで比較！おすすめ事業者ランキング", url: "https://curama.jp/mechanical-mowing/" },
  { org: "お庭110番（草刈り110番）", title: "草刈り、剪定、伐採、芝刈りなどのお庭のお手入れに関するサービスの料金表", url: "https://www.kusakari-a.com/price/" },
];

export default function WeedingCostPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "草むしりを業者に頼む料金" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        草むしり（手作業）を業者に頼む料金は、2026年11月22日に確認した公式の表示で、くらしのマーケットの相場が「10平米 ¥3,000〜¥9,000」、お庭110番が「草むしり 830円〜/㎡（税込）」でした。
        お庭110番の単価で10㎡を計算すると8,300円からで、くらしのマーケットの相場の上の方に当たります。
        草刈り機での作業は、10㎡あたりにそろえると手作業より安く表示されています。
        本ページでは、料金に含まれる作業、追加になりやすい条件、依頼の前に伝えることを整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="wd-price" title="公式の表示で比べた草むしりの料金">
        <P>
          当サイトで、草むしりと草刈りを扱う2社の公式ページを開き、表示されている金額を10㎡あたりにそろえました。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">サービス</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">作業</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">公式ページの表示</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">10㎡あたり</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((r, idx) => (
                <tr key={r.company + r.work} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3">
                    {r.company}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.work}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.shown}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.per10}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          表示は2026年11月22日時点のもので、変更されることがあります。くらしのマーケットの金額は出店者の料金をもとにした相場の表示で、税込・税抜の表記はページ上にありません。草むしり（手作業）のカテゴリの掲載は1,318件、草刈り（草刈り機）は1,942件でした（同日表示）。
        </After>
        <Note>
          お庭110番の料金ページには、項目別の単価のほか、上部の一覧に「草刈り・除草 163円~/㎡(税込)」の表示もあります。本ページでは、草むしりと機会刈りの項目に記載された単価を掲載しています。「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」との注記があります。
        </Note>
      </Section>

      <Section id="wd-machine" title="草刈り機での作業との料金の差">
        <P>
          10㎡あたりにそろえると、くらしのマーケットでは草むしり（手作業）が3,000〜9,000円、草刈り（草刈り機）が1,600〜3,000円で、手作業の下限は草刈り機の上限と同じ額でした。お庭110番でも、草むしり 830円〜/㎡ に対して機会刈り 390円〜/㎡ で、手作業の単価は2倍以上です。
        </P>
        <P last>
          くらしのマーケットは、草むしり（手作業）を根っこまで除去できる作業、草刈り（草刈り機）を素早く広範囲の草刈りができる作業として案内しています。広い場所や草丈が高い場所は草刈り機、花壇の周りや根から取り除きたい場所は手作業というように、場所ごとに分けて依頼すると総額を抑えやすくなります。
        </P>
      </Section>

      <Section id="wd-included" title="料金に含まれる作業と、追加になりやすい条件">
        <Cards items={includedItems} />
      </Section>

      <Section id="wd-tell" title="依頼の前に伝えること">
        <Bullets items={tellItems} />
        <After>
          草刈りの時期と回数の考え方は
          <L href="/guide/grass-cutting/">庭・空き地の草刈り</L>
          、草が生えにくくする方法は
          <L href="/guide/weed-control/">庭の雑草対策</L>
          で解説しています。
        </After>
      </Section>

      <Section id="wd-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="wd-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/grass-cutting/", label: "庭・空き地の草刈り" },
          { href: "/guide/weed-control/", label: "庭の雑草対策" },
          { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
          { href: "/guide/silver-center/", label: "シルバー人材センターへの依頼" },
          { href: "/guide/herbicide-spraying-cost/", label: "除草剤の散布を業者に頼む費用" },
          { href: "/cost/price/", label: "造園・庭の手入れの費用" },
        ]}
      />

      <Cta
        text="草むしりの料金は、面積・草丈・処分の有無で変わります。場所の面積を測り、草の状態を伝えて、複数の業者から見積もりを取ることをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
