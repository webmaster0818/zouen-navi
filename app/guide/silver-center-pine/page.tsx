import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/silver-center-pine/";
const UPDATED_LABEL = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const TITLE = "シルバー人材センターに松の剪定を頼む料金｜5センターの公式の単価と高さの上限を比較";
const DESC =
  "シルバー人材センターに松の剪定を頼む料金を、千葉市・市原市・松戸市・つくば市・金沢市の5センターの公式ページ（2026年11月22日確認）で比べました。5センターとも松だけの料金は掲載しておらず、植木剪定の時間・日あたりの単価で決まります。1人4時間に換算した額と、剪定できる高さの上限を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "シルバー人材センター5か所の公式の植木剪定の単価と高さの上限を比べ、松の剪定を頼む場合の料金の考え方を整理しています。",
  },
};

const toc = [
  { id: "sp-table", label: "5センターの植木剪定の単価と高さの上限" },
  { id: "sp-pine", label: "松の剪定の料金はどう決まるか" },
  { id: "sp-gyosha", label: "業者の松の剪定料金との比べ方" },
  { id: "sp-check", label: "依頼の前に確認すること" },
  { id: "sp-faq", label: "よくある質問" },
  { id: "sp-sources", label: "本ページで参照した資料" },
];

type CenterRow = { center: string; unit: string; four: string; height: string; note: string };

const centerRows: CenterRow[] = [
  {
    center: "千葉市",
    unit: "1人 9,000円（4時間）〜、最低4時間分から、以後1時間毎",
    four: "9,000円〜",
    height: "高さ3.5mの植木まで",
    note: "樹木の伐採や根の掘り出しは行っていない",
  },
  {
    center: "市原市",
    unit: "植木の剪定 日額 16,000円〜（消費税・事務費を含む）",
    four: "日額のため換算なし",
    height: "記載なし（大木の伐採などの危険な作業は承りかねる）",
    note: "植木の剪定作業は4時間以上。料金は目安で、依頼時に見積もり",
  },
  {
    center: "松戸市",
    unit: "植木の剪定・刈込み 1日1人当たり 13,500円（令和8年度単価）。事務費として別途8%",
    four: "6,750円＋事務費（午前中で終了する場合は半額）",
    height: "記載なし",
    note: "午後にまたがる場合は1日分の料金",
  },
  {
    center: "つくば市",
    unit: "植木剪定（4m未満）作業員1人1時間あたり 1,440円〜（交通費込み）",
    four: "5,760円〜",
    height: "4m以上の高木は引き受けていない",
    note: "通常2人以上で作業。枝葉の処分費用は別途",
  },
  {
    center: "金沢市",
    unit: "作業代 1時間1,580円＋事務手数料12%。交通費1人1日500円",
    four: "約7,078円＋交通費",
    height: "高さ2.5mまで（約1階の屋根の高さ）",
    note: "基本2人以上で作業。今年度の剪定作業は受付終了と表示",
  },
];

const checkItems: Item[] = [
  {
    h: "松の高さが上限に収まるか",
    b: "千葉市は3.5m、つくば市は4m未満、金沢市は2.5mまでと、剪定できる高さの上限を公式ページに掲載しています。上限を超える松は、センターでは引き受けてもらえない可能性が高く、造園業者への依頼を検討します。",
  },
  {
    h: "何人で何時間かかるか",
    b: "5センターの単価は、いずれも作業員1人あたりの時間・日の単価です。つくば市・金沢市は通常2人以上で作業すると案内しているため、総額は人数分になります。金沢市は「何人で何時間かかったか、実際にかかった時間で金額がかわります」と説明しています。",
  },
  {
    h: "単価以外にかかる費用",
    b: "松戸市は事務費8%、金沢市は事務手数料12%と交通費、つくば市は枝葉の処分費用が別途必要です。市原市は消費税・事務費を含んだ表示です。センターごとに含まれる費用が違うため、見積もりの際に総額を確認します。",
  },
  {
    h: "受付の時期",
    b: "金沢市は2026年11月22日時点で「今年度の剪定作業は受付を終了しました」と表示しています。つくば市は繁忙期に2〜3か月待つことがあると案内しています。松のみどり摘みは春、もみあげは秋から冬が目安とされるため、早めに相談します。",
  },
];

const tellItems: string[] = [
  "松の本数と、1本ごとのおおよその高さ（センターの上限に収まるか）。",
  "依頼したい作業（みどり摘み・もみあげ・枝の切り詰めなど）。松の手入れに慣れた会員がいるかもあわせて確認します。",
  "剪定した枝葉の処分を依頼するか、自分で出すか。",
  "脚立を立てる場所があるか、道路や隣家に近いか。",
];

const faqs: Faq[] = [
  {
    q: "シルバー人材センターでは、松1本の剪定料金はいくらですか。",
    a: "2026年11月22日に確認した千葉市・市原市・松戸市・つくば市・金沢市の5センターの公式ページには、松だけの料金や1本あたりの料金の掲載はありませんでした。いずれも植木の剪定として、作業員1人あたりの時間または日の単価で料金が決まります。松1本にかかる時間は、高さや枝の量、作業の内容で変わるため、センターに見積もりを依頼して確認します。",
  },
  {
    q: "1人に4時間作業してもらうと、いくらになりますか。",
    a: "公式の単価から当サイトで計算すると、千葉市が9,000円から、つくば市が5,760円から、金沢市が約7,078円（事務手数料を含む）に交通費、松戸市が6,750円に事務費8%（午前中で終了する場合の半額）です。市原市は日額16,000円からの表示です。2人で作業する場合は、人数分になります。",
  },
  {
    q: "高い松は、シルバー人材センターに頼めますか。",
    a: "センターごとに上限があり、千葉市は3.5m、つくば市は4m未満、金沢市は2.5mまでとしています。上限を超える松は造園業者に相談します。業者の高さ別の単価は、松の剪定を業者に頼む費用のページで整理しています。",
  },
  {
    q: "シルバー人材センターへの依頼の流れを知りたいです。",
    a: "センターに作業内容を伝えて申し込み、必要に応じて下見と見積もりを受けてから作業日を決める流れが一般的です。詳しくは、庭の手入れをシルバー人材センターに依頼する場合のページで解説しています。",
  },
];

const sources: Source[] = [
  { org: "公益社団法人千葉市シルバー人材センター", title: "仕事を依頼したい方（植木剪定）", url: "https://chiba-sjc.com/request-service/" },
  { org: "公益社団法人市原市シルバー人材センター", title: "お仕事・料金", url: "https://www.ichihara-sjc.jp/jobprice/" },
  { org: "公益社団法人松戸市シルバー人材センター", title: "お仕事の紹介", url: "https://webc.sjc.ne.jp/matsudo/job2_3" },
  { org: "公益社団法人つくば市シルバー人材センター", title: "家庭の仕事（お庭・植木の手入れ）", url: "https://www.tsukuba-sjc.or.jp/job/house/01.html" },
  { org: "公益社団法人金沢市シルバー人材センター", title: "よくあるご質問", url: "https://webc.sjc.ne.jp/kanazawa/job2_8" },
  { org: "ミツモア", title: "松の剪定おすすめ業者【口コミ・費用で比較】（松の剪定の料金相場）", url: "https://meetsmore.com/services/pine-pruning" },
];

export default function SilverCenterPinePage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "シルバー人材センターに松の剪定を頼む料金" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        シルバー人材センターに松の剪定を頼む料金は、松1本あたりではなく、作業員1人あたりの時間・日の単価で決まります。2026年11月22日に千葉市・市原市・松戸市・つくば市・金沢市の5センターの公式ページを確認したところ、いずれも松だけの料金は掲載していませんでした。
        1人4時間に換算すると、つくば市の5,760円からが最も低く、千葉市は9,000円からです。
        一方で、剪定できる高さに上限（千葉市3.5m・つくば市4m未満・金沢市2.5m）があり、高い松は引き受けてもらえない場合があります。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="sp-table" title="5センターの植木剪定の単価と高さの上限">
        <P>
          当サイトで5センターの公式ページを開き、植木剪定の単価、1人4時間に換算した額、剪定できる高さの上限を並べました。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">センター</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">公式ページの単価</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">1人4時間の換算</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">高さの上限</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">備考</th>
              </tr>
            </thead>
            <tbody>
              {centerRows.map((r, idx) => (
                <tr key={r.center} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                    {r.center}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.unit}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.four}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.height}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          「1人4時間の換算」は、公式の単価をもとに当サイトで計算した額です（金沢市は1,580円×4時間に事務手数料12%を加えた額、松戸市は午前中で終了する場合の半額）。表示は2026年11月22日時点のもので、市原市のページには「令和8年10月1日より料金を改定いたします」との注記があります。
        </After>
        <Note>
          金沢市は、会員1人が1日7時間の作業をして剪定ゴミの廃棄まで行うと約18,900円と例示しています（令和8年4月以降に作業した場合の金額）。
        </Note>
      </Section>

      <Section id="sp-pine" title="松の剪定の料金はどう決まるか">
        <P>
          5センターとも、松は植木の剪定の一つとして扱われ、料金は「単価×人数×作業時間」で決まります。つくば市は「庭の広さ、庭木の種類や数により所要時間が変わります」と案内しています。
        </P>
        <P last>
          松は、新芽を整えるみどり摘みや古い葉を取り除くもみあげなど、手作業が多い木です。同じ高さのほかの庭木よりも作業時間が長くなりやすく、時間単価のセンターでは、その分が料金に反映されます。作業内容の考え方は
          <L href="/guide/pine-care/">庭の松の手入れ</L>
          で解説しています。
        </P>
      </Section>

      <Section id="sp-gyosha" title="業者の松の剪定料金との比べ方">
        <P>
          業者は松1本あたりの単価で見積もることが多く、ミツモアの料金相場（2026年11月22日確認）は、高さ2m以下の松が1本9,900〜11,000円、2〜3mが16,200〜20,000円です。
        </P>
        <P last>
          シルバー人材センターの時間単価と業者の1本あたりの単価は、そのまま比べられません。比べる場合は、センターに「何人で何時間かかる見込みか」を確認し、単価をかけた総額を業者の見積もりと並べます。高さ別の業者の単価と、掲載業者20社の料金の集計は
          <L href="/guide/pine-pruning-cost/">松の剪定を業者に頼む費用</L>
          で整理しています。
        </P>
      </Section>

      <Section id="sp-check" title="依頼の前に確認すること">
        <Cards items={checkItems} />
        <P>センターに相談する際は、次の内容を伝えると見積もりが進めやすくなります。</P>
        <Bullets items={tellItems} />
      </Section>

      <Section id="sp-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="sp-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/silver-center/", label: "シルバー人材センターへの依頼" },
          { href: "/guide/pine-pruning-cost/", label: "松の剪定を業者に頼む費用" },
          { href: "/guide/pine-care/", label: "庭の松の手入れ" },
          { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
          { href: "/cost/price/", label: "造園・庭の手入れの費用" },
        ]}
      />

      <Cta
        text="シルバー人材センターの料金は、単価・人数・作業時間と、事務費などの扱いで変わります。松の高さが上限に収まるかを確かめ、総額の見積もりを業者と比べて依頼先を決めることをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
