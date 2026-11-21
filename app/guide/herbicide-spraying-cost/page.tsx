import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/herbicide-spraying-cost/";
const UPDATED_LABEL = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const TITLE = "除草剤の散布を業者に頼む費用｜3社の公式料金を30㎡・100㎡の総額に換算し、薬剤の種類による差を整理";
const DESC =
  "除草剤の散布を業者に頼む費用を、3社の公式の料金表示（2026年11月22日確認）で比べ、30㎡・60㎡・100㎡の総額に換算しました。面積ごとの定額・㎡単価・最低作業料金の違い、農薬登録のある除草剤とない除草剤の使い分けもご説明します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "除草剤の散布を業者に頼む費用を、3社の公式料金から面積別の総額に換算して整理しています。",
  },
};

const toc = [
  { id: "hs-price", label: "3社の公式の料金表示" },
  { id: "hs-area", label: "30㎡・60㎡・100㎡の総額に換算した結果" },
  { id: "hs-type", label: "薬剤の種類で単価が変わる" },
  { id: "hs-law", label: "庭木・芝の近くは農薬登録のある除草剤で" },
  { id: "hs-tell", label: "見積もりの前に伝えること" },
  { id: "hs-faq", label: "よくある質問" },
  { id: "hs-sources", label: "本ページで参照した資料" },
];

type PriceRow = { company: string; method: string; shown: string };

const priceRows: PriceRow[] = [
  {
    company: "沼山造園",
    method: "面積帯ごとの定額（税込）",
    shown: "1㎡から25㎡ 5,500円／25㎡から50㎡ 8,800円／50㎡から70㎡ 11,000円。70㎡以上は現地で相談・見積もり",
  },
  {
    company: "株式会社HSG",
    method: "㎡単価＋最低作業料金",
    shown: "除草剤散布 180〜250円/㎡（薬剤・現場条件で変動）。最低作業料金 10,000円〜（小規模作業）",
  },
  {
    company: "GLANZ（グランツ）",
    method: "薬剤の種類別の㎡単価",
    shown: "非農耕地用 50円〜／農耕地用 70円〜／非農耕地用 枯渇+処理型 130円〜／農耕地用 枯渇+処理型 150円〜／非農耕地用 粒剤処理型 180円〜（いずれも1㎡単価）",
  },
];

type AreaRow = { company: string; a30: string; a60: string; a100: string };

const areaRows: AreaRow[] = [
  { company: "沼山造園", a30: "8,800円", a60: "11,000円", a100: "現地で見積もり" },
  { company: "株式会社HSG", a30: "10,000円〜（最低作業料金）", a60: "10,800〜15,000円", a100: "18,000〜25,000円" },
  { company: "GLANZ（農耕地用）", a30: "2,100円〜", a60: "4,200円〜", a100: "7,000円〜" },
  { company: "GLANZ（農耕地用 枯渇+処理型）", a30: "4,500円〜", a60: "9,000円〜", a100: "15,000円〜" },
];

const typeItems: Item[] = [
  {
    h: "生えている草を枯らす散布",
    b: "GLANZ は、根まで枯らす除草剤と雑草抑制期間のある除草剤を併せて散布する「枯渇+処理型」を、非農耕地用で1㎡130円〜（抑制期間は最長6カ月程度）、農耕地用で1㎡150円〜（最長3カ月程度）としています。",
  },
  {
    h: "生える前に散布する粒剤",
    b: "同社の「粒剤処理型」（非農耕地用）は1㎡180円〜で、土壌処理型の除草剤を散布し、雑草抑制期間は最長9ヵ月です。雑草の発生前や発生初期用の方法で、草丈が高い場合は効果が出にくい場合があると注記しています。",
  },
  {
    h: "植木の周りの扱い",
    b: "沼山造園は、除草剤は植木も枯らしてしまうため注意が必要で、植木の周りは散布せずに草抜きや防草シートで対処することもできると案内しています。庭木が多い庭では、散布する範囲と手で抜く範囲を分けて見積もってもらうと、総額と仕上がりの両方を確認できます。",
  },
];

const tellItems: string[] = [
  "散布してほしい場所の面積（㎡）と、場所の種類（庭・駐車場・通路・空き地など）。",
  "近くに庭木・芝・花壇・家庭菜園があるか。ある場合は、農薬登録のある除草剤を使うかを確認します。",
  "今生えている草を枯らしたいのか、これから生えるのを抑えたいのか。",
  "草丈のおおよその高さ。高い場合は、先に草刈りが必要になることがあります。",
  "隣家や道路との距離、ペットや子どもが出入りするか。",
];

const faqs: Faq[] = [
  {
    q: "除草剤の散布を業者に頼むと、いくらかかりますか。",
    a: "2026年11月22日に確認した3社の公式の表示では、沼山造園が25㎡まで5,500円・50㎡まで8,800円・70㎡まで11,000円（税込）、株式会社HSGが180〜250円/㎡（最低作業料金10,000円〜）、GLANZが薬剤の種類により1㎡50円〜180円〜でした。100㎡で換算すると、HSGは18,000〜25,000円、GLANZの農耕地用は7,000円からです。",
  },
  {
    q: "狭い場所だけでも頼めますか。",
    a: "頼めますが、狭い場所では最低料金が総額を決めることが多くなります。沼山造園は1㎡から25㎡まで一律5,500円（税込）、HSGは最低作業料金を10,000円〜としています。複数の場所をまとめて依頼すると、㎡あたりの費用を抑えやすくなります。",
  },
  {
    q: "ホームセンターの「非農耕地用」の除草剤を庭で使ってもよいですか。",
    a: "近畿農政局は、農薬として使用することができない除草剤を農作物や樹木、芝、花きなどの栽培・管理に使用することは法律で禁止されているとしています。庭木や芝の近くで使う場合は、ラベルに「農林水産省登録第〇〇〇〇〇号」の記載がある除草剤を選びます。業者に依頼する場合も、どちらの薬剤を使うかを確認します。",
  },
  {
    q: "除草剤を使わずに草を処理する場合の料金は。",
    a: "手作業の草むしりや草刈り機での作業の料金は、草むしりを業者に頼む料金のページで比べています。草が生えにくくする方法は、庭の雑草対策のページで解説しています。",
  },
];

const sources: Source[] = [
  { org: "沼山造園", title: "除草剤散布", url: "https://numayama-zoen.com/service-contents-of-numayama-zoen/herbicide-spraying" },
  { org: "株式会社HSG", title: "料金表（草刈り・草むしり・農地管理・剪定・伐採の料金目安）", url: "https://mowing-man.com/system/" },
  { org: "GLANZ（グランツ）", title: "作業メニュー / 料金 > 除草剤散布", url: "https://r.goope.jp/glanz-service/menu/c1176237" },
  { org: "農林水産省 近畿農政局", title: "農薬として使用することができない除草剤について", url: "https://www.maff.go.jp/kinki/syouhi/mn/noutiku/noyaku_josozai.html" },
];

export default function HerbicideSprayingCostPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "除草剤の散布を業者に頼む費用" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        除草剤の散布を業者に頼む費用は、料金の決め方が業者によって異なります。2026年11月22日に確認した3社の公式の表示では、面積帯ごとの定額（25㎡まで5,500円・税込）、㎡単価（180〜250円/㎡）、薬剤の種類別の㎡単価（50円〜180円〜）の3通りでした。
        当サイトで100㎡に換算すると、㎡単価の業者で18,000〜25,000円、薬剤別の単価の業者で7,000円〜15,000円〜（農耕地用）になります。
        庭木や芝の近くでは、農薬登録のある除草剤を使う必要がある点もあわせて整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="hs-price" title="3社の公式の料金表示">
        <P>
          当サイトで、除草剤の散布の料金を公式ページに掲載している3社を開き、表示を転記しました。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">業者</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">料金の決め方</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">公式ページの表示</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((r, idx) => (
                <tr key={r.company} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                    {r.company}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.method}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.shown}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          表示は2026年11月22日時点のものです。税込の表記があるのは沼山造園のみで、株式会社HSG と GLANZ のページには税込・税抜の表記がありません。各社とも、作業面積や草丈、現場の条件により料金が変わるとしています。
        </After>
      </Section>

      <Section id="hs-area" title="30㎡・60㎡・100㎡の総額に換算した結果">
        <P>
          料金の決め方が違うため、同じ面積で比べられるように当サイトで総額を計算しました。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3">業者（薬剤）</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">30㎡</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">60㎡</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">100㎡</th>
              </tr>
            </thead>
            <tbody>
              {areaRows.map((r, idx) => (
                <tr key={r.company} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3">
                    {r.company}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.a30}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.a60}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.a100}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          株式会社HSG は、30㎡では単価×面積（5,400〜7,500円）が最低作業料金10,000円〜を下回るため、最低作業料金を記載しています。GLANZ は「〜」の付いた下限の単価で計算しており、出張費などの扱いはページに記載がありません。
        </After>
        <Note>
          狭い面積では、定額や最低作業料金によって㎡あたりの費用が高くなります。沼山造園の場合、25㎡まで一律5,500円のため、10㎡なら1㎡あたり550円、25㎡なら220円になります（当サイト計算）。
        </Note>
      </Section>

      <Section id="hs-type" title="薬剤の種類で単価が変わる">
        <Cards items={typeItems} />
      </Section>

      <Section id="hs-law" title="庭木・芝の近くは農薬登録のある除草剤で">
        <P>
          GLANZ の料金表では、非農耕地用（1㎡50円〜）と農耕地用（1㎡70円〜）で単価が分かれています。農林水産省近畿農政局は、道路・駐車場・グラウンドなどの雑草の駆除に使われる農薬登録のない除草剤を「農薬として使用することができない除草剤」とし、これを農作物や樹木、芝、花きなどの栽培・管理に使用することは法律で禁止されていると説明しています。
        </P>
        <P last>
          また、「非農耕地用」という表現が、公園や緑地なら植栽管理に使えるという誤解を与える事例があるとしています。庭木・芝・花壇の近くで散布を依頼する場合は、農薬登録のある除草剤（ラベルに「農林水産省登録第〇〇〇〇〇号」の記載があるもの）を使うかどうかを業者に確認します。住宅地での農薬の使い方は
          <L href="/guide/spraying/">住宅地で庭木の消毒を行う・依頼する場合</L>
          で解説しています。
        </P>
      </Section>

      <Section id="hs-tell" title="見積もりの前に伝えること">
        <Bullets items={tellItems} />
        <After>
          手作業の草むしり・草刈り機での作業の料金は
          <L href="/guide/weeding-cost/">草むしりを業者に頼む料金</L>
          、防草シートなどの対策は
          <L href="/guide/weed-control/">庭の雑草対策</L>
          で整理しています。
        </After>
      </Section>

      <Section id="hs-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="hs-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/weeding-cost/", label: "草むしりを業者に頼む料金" },
          { href: "/guide/weed-control/", label: "庭の雑草対策" },
          { href: "/guide/spraying/", label: "住宅地で庭木の消毒を行う・依頼する場合" },
          { href: "/guide/grass-cutting/", label: "庭・空き地の草刈り" },
          { href: "/cost/price/", label: "造園・庭の手入れの費用" },
        ]}
      />

      <Cta
        text="除草剤の散布の費用は、面積・薬剤の種類・最低料金の扱いで変わります。散布する場所の面積と、庭木や芝が近くにあるかを伝えて、複数の業者から見積もりを取ることをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
