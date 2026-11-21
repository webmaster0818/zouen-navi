import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/sodding-cost/";
const UPDATED_LABEL = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const TITLE = "芝張りの費用｜2社の公式表示で比べた10㎡あたりの目安と、料金に含まれる作業の確認点";
const DESC =
  "業者に芝張りを依頼する場合の費用を、くらしのマーケット（芝張りの相場 10平米 ¥10,000〜¥28,000）とお庭110番（芝張り施工 2,800円〜/㎡・税込）の公式表示（2026年11月21日確認）で比べました。料金に含まれる作業、見積もりで確認する項目、張り替えの場合の注意点を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "芝張りの費用を2社の公式表示で比べ、料金に含まれる作業と見積もりの確認点を整理しています。",
  },
};

const toc = [
  { id: "sd-price", label: "2社の公式表示で比べた芝張りの費用" },
  { id: "sd-included", label: "料金に含まれる作業と、別になりやすい作業" },
  { id: "sd-estimate", label: "見積もりを依頼する前に伝えること" },
  { id: "sd-replace", label: "張り替えの場合の注意点" },
  { id: "sd-faq", label: "よくある質問" },
  { id: "sd-sources", label: "本ページで参照した資料" },
];

type PriceRow = { company: string; shown: string; per10: string; note: string };

const priceRows: PriceRow[] = [
  {
    company: "くらしのマーケット（芝張り）",
    shown: "芝張りの相場　10平米　¥10,000〜¥28,000",
    per10: "10,000〜28,000円（ページの表示どおり）",
    note: "税込・税抜の表記はページ上になし。出店者ごとに料金が異なり、カテゴリの掲載は384件（2026年11月21日表示）",
  },
  {
    company: "お庭110番（芝張り施工）",
    shown: "2,800円〜/㎡（税込）",
    per10: "28,000円〜（当サイトで 2,800円×10㎡ を計算した下限）",
    note: "「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」と注記。現地調査の後に見積もり",
  },
];

const includedItems: Item[] = [
  {
    h: "くらしのマーケットの共通の作業内容",
    b: "くらしのマーケットの芝張りのカテゴリでは、すべてのサービスに共通の作業内容として「芝・目土は出店者が用意 / 床土の整地 / 芝張り / 目土 / 散水」を定め、表示されている料金はこの作業内容を含むと記載しています。",
  },
  {
    h: "既存の芝や雑草の撤去、残土の処分",
    b: "共通の作業内容に、既存の芝をはがす作業や、雑草・石の撤去、出た土の処分は書かれていません。張る場所に芝や雑草が残っている場合は、撤去と処分を料金に含めるかを見積もりの段階で確認します。",
  },
  {
    h: "土の入れ替え・土壌改良",
    b: "お庭110番の料金表には、芝張り施工とは別に「土壌改良すきこみ 3,300円〜/㎡（税込）」の項目があります。土の状態によって土壌改良を加えるかどうかで、総額が変わります。",
  },
];

const tellItems: string[] = [
  "張る面積（㎡）。面積が分からない場合は、縦と横の長さを測って伝えます。",
  "新しく芝を張るのか、枯れた芝を張り直すのか。くらしのマーケットは、張りなおしか新しく張るのかで施工内容が異なるため、事前に状況を伝えるよう案内しています。",
  "張る場所の状態（小石の有無、日当たり、水はけ）。くらしのマーケットは、小石などの不純物があるとすぐに枯れてしまうこと、平らで日当たりと水はけがよい場所のほうが育ちがよいことを挙げています。",
  "芝の種類の希望。希望がない場合は、日当たりや用途を伝えて業者に相談します。",
  "既存の芝・雑草・石の撤去と処分、土の入れ替えが必要かどうか。",
];

const replaceItems: Item[] = [
  {
    h: "枯れた原因を先に確かめます",
    b: "日当たり、水はけ、踏まれ方などが原因で枯れた場合は、同じ条件のまま張り替えても同じことが起きることがあります。張り替えの見積もりと合わせて、原因の見立てを業者に聞きます。",
  },
  {
    h: "はがした芝の処分を確認します",
    b: "張り替えでは、古い芝と根についた土が出ます。たとえば千葉市は、芝生の根は土が多くついているため木の枝・刈り草・葉の資源収集には出せず、可燃ごみとして出すよう案内しています。出し方は自治体ごとに異なります。処分を業者に任せるかどうかを確認します。",
  },
  {
    h: "張った後の水やりと養生の期間を聞きます",
    b: "張った直後は根が付くまで水やりが必要です。根付くまで芝の上を歩かない期間や、最初の芝刈りの時期を、作業の際に確認します。",
  },
];

const faqs: Faq[] = [
  {
    q: "芝張りを業者に頼むと、10㎡でいくらかかりますか。",
    a: "2026年11月21日に確認した公式の表示では、くらしのマーケットの芝張りの相場が10平米で¥10,000〜¥28,000、お庭110番の芝張り施工が2,800円〜/㎡（税込）でした。お庭110番の単価で10㎡を計算すると28,000円からになります。既存の芝の撤去、土壌改良、処分を加えると総額は変わるため、見積もりで確認してください。",
  },
  {
    q: "表示されている料金には、芝の代金も含まれますか。",
    a: "くらしのマーケットの芝張りのカテゴリは、共通の作業内容として「芝・目土は出店者が用意」と記載し、表示されている料金はこの作業内容を含むとしています。お庭110番の料金表には芝の代金の扱いの記載がないため、見積もりの際に確認してください。",
  },
  {
    q: "芝張りの費用が高くなるのは、どのような場合ですか。",
    a: "多くの場合、面積が広い場合、既存の芝や雑草・石を撤去する場合、土の入れ替えや土壌改良を行う場合、出た土や芝の処分を依頼する場合に総額が上がります。お庭110番の料金表には、芝張り施工とは別に土壌改良すきこみ（3,300円〜/㎡・税込）の項目があります。",
  },
  {
    q: "自分で芝を張る場合と、業者に頼む場合の違いは何ですか。",
    a: "業者に依頼すると、床土の整地から芝張り、目土、散水までをまとめて任せられます（くらしのマーケットの共通の作業内容）。自分で張る場合は、芝と目土の購入、整地、張った後の管理を自分で行います。芝を張った後の手入れは、芝生の手入れガイドで解説しています。",
  },
];

const sources: Source[] = [
  { org: "くらしのマーケット", title: "芝張りを料金と口コミで比較！おすすめ事業者ランキング", url: "https://curama.jp/sodding/" },
  { org: "千葉市", title: "剪定枝等（木の枝・刈り草・葉）の再資源化事業", url: "https://www.city.chiba.jp/kankyo/junkan/shushugyomu/senteieda-recycle.html" },
  { org: "お庭110番（草刈り110番）", title: "草刈り、剪定、伐採、芝刈りなどのお庭のお手入れに関するサービスの料金表", url: "https://www.kusakari-a.com/price/" },
];

export default function SoddingCostPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "芝張りの費用" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        業者に芝張りを依頼する費用は、2026年11月21日に確認した公式の表示で、くらしのマーケットが「芝張りの相場　10平米　¥10,000〜¥28,000」、お庭110番が「芝張り施工 2,800円〜/㎡（税込）」でした。
        お庭110番の単価で10㎡を計算すると28,000円からで、くらしのマーケットの相場の上端と同じ額になります。
        いずれも目安であり、既存の芝や雑草の撤去、土壌改良、処分を加えると総額は変わります。
        本ページでは、料金に含まれる作業、見積もりの前に伝えること、張り替えの場合の注意点を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="sd-price" title="2社の公式表示で比べた芝張りの費用">
        <P>
          当サイトで、芝張りを扱う2社の公式ページを開き、表示されている金額を10㎡あたりにそろえました。お庭110番は1㎡あたりの単価のため、10㎡分を計算しています。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">サービス</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">公式ページの表示</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">10㎡あたり</th>
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
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.per10}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          表示は2026年11月21日時点のもので、変更されることがあります。実際の金額は、現地の状態を見たうえでの見積もりで確認してください。
        </After>
        <Note>
          お庭110番の料金ページには、芝張り施工の 2,800円〜/㎡ のほか、上部の一覧に別の金額の表示もあります。本ページでは、芝張り施工の項目に記載された単価を掲載しています。
        </Note>
      </Section>

      <Section id="sd-included" title="料金に含まれる作業と、別になりやすい作業">
        <Cards items={includedItems} />
        <After>
          2社を含む造園・庭の手入れの公式料金は
          <L href="/cost/price/">造園・庭の手入れの費用</L>
          でまとめています。
        </After>
      </Section>

      <Section id="sd-estimate" title="見積もりを依頼する前に伝えること">
        <Bullets items={tellItems} />
      </Section>

      <Section id="sd-replace" title="張り替えの場合の注意点">
        <Cards items={replaceItems} alt />
        <After>
          芝を張った後の芝刈り・目土・エアレーションは
          <L href="/guide/lawn-care/">芝生の手入れガイド</L>
          、水はけが悪い場所の改善は
          <L href="/guide/drainage/">庭の水はけが悪いときの原因と対処</L>
          で解説しています。
        </After>
      </Section>

      <Section id="sd-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="sd-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/lawn-care/", label: "芝生の手入れガイド" },
          { href: "/cost/price/", label: "造園・庭の手入れの費用" },
          { href: "/guide/weed-control/", label: "庭の雑草対策" },
          { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
        ]}
      />

      <Cta
        text="芝張りの総額は、面積と、既存の芝・雑草の撤去や土壌改良の有無で変わります。張る場所の状態を伝えて、複数の業者から見積もりを取ることをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
