import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/vacant-house-mowing-subsidy/";
const UPDATED_LABEL = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const TITLE = "空き家の草刈りに使える補助金｜高崎市・金沢市・福井市の3制度を比べ、業者に頼む前に確認すること";
const DESC =
  "空き家の敷地の草刈り・除草を業者に頼む費用を補助する市の制度を、高崎市（費用の1/2・年間上限20万円）、金沢市（1/2・上限5万円）、福井市（管理代行サービスの1/3・年3万6千円）の公式資料（2026年11月22日確認）で比べました。対象の空き家・業者の条件、着手前の申請など共通する注意点を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "空き家の草刈り・除草の費用を補助する3市の制度を公式資料で比べ、申請前の確認点を整理しています。",
  },
};

const toc = [
  { id: "vh-table", label: "3市の制度の比較" },
  { id: "vh-common", label: "3市に共通する条件" },
  { id: "vh-diff", label: "制度ごとの違い" },
  { id: "vh-check", label: "自分の市に制度があるかを調べる手順" },
  { id: "vh-faq", label: "よくある質問" },
  { id: "vh-sources", label: "本ページで参照した資料" },
];

type Row = { city: string; name: string; work: string; rate: string; cap: string; vendor: string };

const rows: Row[] = [
  {
    city: "高崎市",
    name: "令和8年度 空き家緊急総合対策事業 制度1 空き家管理助成金",
    work: "敷地の除草、樹木の剪定・伐採・伐根、害虫・害獣の駆除、防草シートの設置など（家屋の点検・通気等も対象）",
    rate: "助成対象経費（税込み）の2分の1",
    cap: "年間上限額20万円（上限の範囲内で複数回の申請可）",
    vendor: "高崎市内の業者",
  },
  {
    city: "金沢市",
    name: "金沢市空き家等適正管理費補助金（令和8年6月25日決裁の交付要綱）",
    work: "除草及び樹木の剪定、防草シートの設置（整地・砂利敷きを除く）、見回り・点検、害虫・害獣の駆除（シロアリを除く）など",
    rate: "費用（消費税等を含む）の2分の1（1,000円未満切り捨て）",
    cap: "50,000円。最初の交付決定の年度から3か年度まで",
    vendor: "空き家の所在地を記載した見積書・領収書を発行できる管理業者",
  },
  {
    city: "福井市",
    name: "福井市空き家適正管理促進事業補助金",
    work: "登録事業者の管理代行サービス。外観調査（3か月に1回以上）と所有者への報告は必須で、敷地内の草刈りは選べる項目の一つ",
    rate: "管理代行サービスの経費の3分の1（千円未満切り捨て）",
    cap: "36,000円／年（3年度にわたる場合の最終年度は差し引き）",
    vendor: "県の空き家管理代行サービス事業者登録制度に登録した事業者",
  },
];

const commonItems: Item[] = [
  {
    h: "業者に依頼した作業が対象です",
    b: "3市とも、所有者が業者（福井市は登録事業者）と契約して行う作業が対象です。高崎市は、業者に依頼せず申請者や親族が自ら行う作業や備品の購入は対象外と明記しています。",
  },
  {
    h: "作業を始める前に申請します",
    b: "高崎市は交付決定後に着手する作業であること（決定前に着手したものは対象外）を要件としています。金沢市・福井市の要綱も、事業やサービスに着手する前に交付申請書を出す手順です。草が伸びてから急いで業者に頼む前に、申請の時期を確認します。",
  },
  {
    h: "個人が所有する一戸建ての空き家が中心です",
    b: "高崎市・金沢市は個人の所有（所有者が死亡している場合は法定相続人）で、一戸建ての住宅などが対象です。福井市も法人を除く空き家所有者等が対象です。3市とも市税を滞納していないことが条件に含まれています。",
  },
];

const diffItems: Item[] = [
  {
    h: "高崎市：作業の範囲が広く、上限額が大きい制度です",
    b: "除草だけでなく、樹木の剪定・伐採・伐根も対象です。1年以上使用されていないことが確認できる一戸建てが対象で、令和9年2月末までに完了報告書を提出できることが条件です。整地作業や砂利敷き作業は対象外です。問い合わせ先は建築住宅課と案内されています。",
  },
  {
    h: "金沢市：3か年度まで続けて使える制度です",
    b: "補助額の上限は5万円で、最初の交付決定を受けた年度から3か年度が上限です。同じ敷地内に居住その他の使用がなされている別の建物がないことが条件です。",
  },
  {
    h: "福井市：草刈りだけを単発で頼む場合は対象外です",
    b: "対象は定期的な管理代行サービスで、外観調査と報告を必ず含み、ほかの項目とあわせて2以上を実施するものです。外観調査・報告以外のサービスのみを単発的に行うものは対象外とされています。要綱は令和10年3月31日限りで効力を失うと定められています。",
  },
];

const checkItems: string[] = [
  "市区町村のサイトで「空き家 管理 補助金」「空き家 除草 助成」などの語で検索します。空き家の担当課（建築・住宅の課が多い）のページに載っていることがあります。",
  "対象の作業に「除草」「草刈り」「樹木の剪定」が含まれるかを、要綱や案内の本文で確認します。",
  "業者の条件（市内の業者に限るか、登録事業者に限るか）を確認し、その条件に合う業者に見積もりを依頼します。",
  "申請の時期と受付期間を確認します。予算の範囲内での交付のため、年度の途中で受付が終わることがあります。",
  "作業の前に申請し、交付決定を受けてから業者に着手してもらいます。",
];

const faqs: Faq[] = [
  {
    q: "空き家の草刈りに使える国の補助金はありますか。",
    a: "本ページで確認したのは市の制度です。3市の制度はいずれも市の要綱・案内にもとづくもので、対象・金額は市ごとに異なります。お住まいの市区町村で同じような制度があるかは、空き家の担当課のページで確認してください。",
  },
  {
    q: "自分で草刈りをした場合も、補助の対象になりますか。",
    a: "高崎市は、業者に依頼せず申請者や親族が自ら行う作業は対象外と明記しています。金沢市は管理業者に請け負わせて実施するもの、福井市は登録事業者の管理代行サービスが対象です。",
  },
  {
    q: "すでに業者に草刈りを頼んでしまった後でも申請できますか。",
    a: "高崎市は、交付決定の前に着手した作業は対象外としています。年間の委託契約などで申請時点ですでに着手済みの場合は個別に相談するよう案内しています。金沢市・福井市も着手前に申請する手順のため、作業の前に市へ確認してください。",
  },
  {
    q: "草刈りの費用自体の目安はいくらですか。",
    a: "業者の公式料金は、草刈り・草むしりの料金のページと、造園・庭の手入れの費用のページで掲載しています。実際の金額は、現地の状態を見たうえでの見積もりで確認してください。",
  },
];

const sources: Source[] = [
  { org: "高崎市", title: "令和８年度 高崎市空き家緊急総合対策事業 制度１ 空き家管理助成金（PDF）", url: "https://www.city.takasaki.gunma.jp/uploaded/attachment/39041.pdf" },
  { org: "金沢市", title: "金沢市空き家等適正管理費補助金交付要綱（PDF）", url: "https://www4.city.kanazawa.lg.jp/material/files/group/76/yoko.pdf" },
  { org: "福井市", title: "福井市空き家適正管理促進事業補助金交付要綱（PDF）", url: "https://www.city.fukui.lg.jp/kurasi/jutaku/akiyataisaku/p024206_d/fil/tekiseikanri-youkou.pdf" },
];

export default function VacantHouseMowingSubsidyPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "空き家の草刈りに使える補助金" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        空き家の敷地の草刈り・除草を業者に頼む費用は、市によっては補助の対象になります。
        2026年11月22日に公式資料を開いて確認したところ、高崎市は費用の2分の1（年間上限20万円）、金沢市は2分の1（上限5万円・3か年度まで）、福井市は管理代行サービスの3分の1（年3万6千円まで）を補助する制度がありました。
        3市とも、業者に依頼した作業が対象で、作業を始める前の申請が必要です。
        本ページでは、3市の制度を同じ項目で比べ、自分の市で制度を探す手順を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="vh-table" title="3市の制度の比較">
        <P>
          当サイトで、3市の要綱・案内を開き、対象の作業、補助率、上限額、業者の条件を同じ項目にそろえました。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">市</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">制度</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">対象の作業</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">補助率</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">上限</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">業者の条件</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={r.city} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                    {r.city}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.name}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.work}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.rate}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.cap}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.vendor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          内容は2026年11月22日に確認した各市の資料によるものです。予算の範囲内での交付のため、受付の状況は各市にお問い合わせください。
        </After>
        <Note>
          3市は、本日公式資料を確認できた例として掲載しています。同じような制度を設けている市区町村はほかにもある可能性があります。
        </Note>
      </Section>

      <Section id="vh-common" title="3市に共通する条件">
        <Cards items={commonItems} />
      </Section>

      <Section id="vh-diff" title="制度ごとの違い">
        <Cards items={diffItems} alt />
      </Section>

      <Section id="vh-check" title="自分の市に制度があるかを調べる手順">
        <Bullets items={checkItems} />
        <After>
          草刈りの時期と回数の考え方は
          <L href="/guide/grass-cutting/">庭・空き地の草刈り</L>
          、業者の料金は
          <L href="/guide/weeding-cost/">草むしりを便利屋・業者に頼む料金</L>
          、手入れの負担を減らす方法は
          <L href="/guide/garden-downsizing/">庭じまいという選択</L>
          で解説しています。
        </After>
      </Section>

      <Section id="vh-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="vh-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/grass-cutting/", label: "庭・空き地の草刈り" },
          { href: "/guide/weeding-cost/", label: "草むしりを業者に頼む料金" },
          { href: "/guide/garden-downsizing/", label: "庭じまいという選択" },
          { href: "/guide/abandoned-farmland-mowing/", label: "耕作放棄地の草刈り" },
          { href: "/guide/silver-center/", label: "シルバー人材センターへの依頼" },
        ]}
      />

      <Cta
        text="本ページの3市の制度は、いずれも作業の前に申請が必要です。業者に依頼する前に、市の担当課に制度の有無と受付の状況を確認してください。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
