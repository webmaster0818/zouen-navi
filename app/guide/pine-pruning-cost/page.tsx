import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/pine-pruning-cost/";
const UPDATED_LABEL = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const TITLE = "松の剪定を業者に頼む費用｜高さ別の単価と、掲載業者20社の1本あたりの料金を集計";
const DESC =
  "松の剪定を業者に頼む費用を、ミツモアの高さ別の料金相場（2〜3mの松1本 16,200〜20,000円）と、同じページの業者20社の「高さ2〜3mの松1本当たり」の料金（当サイト集計：中央値18,000円・12,000〜24,000円）で整理しました（2026年11月22日確認）。業者を選ぶ際の確認点もご説明します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "松の剪定を業者に頼む費用を、高さ別の料金相場と掲載業者20社の料金の集計で整理しています。",
  },
};

const toc = [
  { id: "pp-height", label: "高さ別の松の剪定料金" },
  { id: "pp-count", label: "掲載業者20社の料金を集計した結果" },
  { id: "pp-other", label: "一般的な庭木の剪定料金との差" },
  { id: "pp-choose", label: "松の剪定を頼む業者の選び方" },
  { id: "pp-tell", label: "見積もりの前に伝えること" },
  { id: "pp-faq", label: "よくある質問" },
  { id: "pp-sources", label: "本ページで参照した資料" },
];

type HeightRow = { height: string; price: string };

const heightRows: HeightRow[] = [
  { height: "2m以下", price: "9,900〜11,000円/本" },
  { height: "2〜3m", price: "16,200〜20,000円/本" },
  { height: "3〜4m", price: "26,100〜31,900円/本" },
  { height: "4〜5m", price: "40,000〜48,400円/本" },
  { height: "5〜6m", price: "55,000〜66,000円/本" },
  { height: "6〜7m", price: "70,000〜82,500円/本" },
];

type CountRow = { range: string; n: string };

const countRows: CountRow[] = [
  { range: "12,000〜15,000円", n: "5社" },
  { range: "15,001〜17,999円", n: "1社" },
  { range: "18,000円", n: "10社" },
  { range: "18,001〜24,000円", n: "4社" },
];

const chooseItems: Item[] = [
  {
    h: "高さ別の単価を出しているか",
    b: "ミツモアは松の剪定について「高さごとに単価が決まっており、何本剪定するかで料金が変わります」と案内しています。見積もりでは、1本ごとの高さと単価が書かれているかを確認すると、他社との比較がしやすくなります。",
  },
  {
    h: "みどり摘み・もみあげのどちらを行うか",
    b: "松の手入れには、春の新芽を整えるみどり摘みと、秋から冬に古い葉を取り除く作業があります。同じ「松の剪定」でも、どの作業を行うかで作業時間が変わるため、見積もりに作業の内容が書かれているかを確認します。作業の考え方は庭の松の手入れのページで解説しています。",
  },
  {
    h: "松枯れの相談ができるか",
    b: "松の葉が赤く変色するなど、松枯れが疑われる場合は、剪定だけでなく原因の判断が必要になります。一般財団法人日本緑化センターは、マツ材線虫病について幅広い知識を持ち、防除対策を考えて作業指導を行う専門家として「松保護士」を養成しており、令和8年4月1日現在の登録者は全国で486名です。",
  },
];

const tellItems: string[] = [
  "松の本数と、1本ごとのおおよその高さ。高さで単価が大きく変わるため、2m以下・2〜3m・3m以上のどれに当たるかを伝えます。",
  "依頼したい作業（みどり摘み・もみあげ・枝の切り詰めなど）と、希望する時期。",
  "剪定した枝葉の処分を依頼するかどうか。",
  "作業場所の条件（脚立を立てられるか、道路や電線に近いか、隣家との距離）。",
  "松以外の庭木もあわせて依頼するかどうか。",
];

const faqs: Faq[] = [
  {
    q: "松の剪定は1本いくらかかりますか。",
    a: "2026年11月22日に確認したミツモアの料金相場では、高さ2m以下の松が1本9,900〜11,000円、2〜3mが16,200〜20,000円、3〜4mが26,100〜31,900円です。同じページに掲載された業者20社の「高さ2〜3mの松1本当たり」の料金を当サイトで集計すると、中央値は18,000円、最も低い業者は12,000円、最も高い業者は24,000円でした。",
  },
  {
    q: "松の剪定は、ほかの庭木より高くなりますか。",
    a: "高くなる傾向があります。お庭110番の料金表は庭木の剪定を3,300円〜/本（税込）としていますが、ミツモアの松の剪定の相場は2m以下でも1本9,900円からです。ただし、両者は表示の根拠が異なる（料金表の下限と、見積もり価格の平均）ため、単純な比較ではなく目安としてご覧ください。",
  },
  {
    q: "シルバー人材センターに頼むと安くなりますか。",
    a: "シルバー人材センターの料金は、多くが作業時間や1日あたりの単価で決まり、作業できる木の高さに上限があります。各地のセンターの公式の料金と高さの上限は、シルバー人材センターに松の剪定を頼む料金のページで比べています。",
  },
  {
    q: "高い松は、どこに頼めばよいですか。",
    a: "ミツモアの相場表は7mまでの高さを掲載しています。それを超える高さの松や、電線・建物に近い松は、高所作業車やロープを使う作業になることがあります。特殊伐採の費用のページもあわせてご覧ください。",
  },
];

const sources: Source[] = [
  { org: "ミツモア", title: "松の剪定おすすめ業者【口コミ・費用で比較】（松の剪定の料金相場）", url: "https://meetsmore.com/services/pine-pruning" },
  { org: "お庭110番（草刈り110番）", title: "草刈り、剪定、伐採、芝刈りなどのお庭のお手入れに関するサービスの料金表", url: "https://www.kusakari-a.com/price/" },
  { org: "一般財団法人日本緑化センター", title: "松保護士制度（はじめに・松保護士とは）", url: "https://www.jpgreen.or.jp/matsu_hogoshi/hogoshi_1.html" },
];

export default function PinePruningCostPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "松の剪定を業者に頼む費用" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        松の剪定を業者に頼む費用は、松の高さで大きく変わります。2026年11月22日に確認したミツモアの料金相場では、高さ2〜3mの松が1本16,200〜20,000円、3〜4mが26,100〜31,900円です。
        同じページに掲載されている業者20社の「高さ2〜3mの松1本当たり」の料金を当サイトで集計すると、中央値は18,000円で、20社のうち10社が18,000円でした。
        本ページでは、高さ別の単価、一般的な庭木との料金の差、業者を選ぶ際の確認点を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="pp-height" title="高さ別の松の剪定料金">
        <P>
          ミツモアは、松の剪定の料金相場を高さ別に掲載しています。表は同社のページの表示をそのまま転記したものです。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[420px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">松の高さ</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">剪定料金（1本あたり）</th>
              </tr>
            </thead>
            <tbody>
              {heightRows.map((r, idx) => (
                <tr key={r.height} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3">
                    {r.height}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          ミツモアの注記によると、相場は同社における「松の剪定」の平均見積もり価格（2024年2月1日〜2026年1月31日）から算出したもので、対応事業者や日程などの条件により変動します。2026年11月22日に確認した表示です。
        </After>
        <Note>
          高さが1m上がるごとに単価が上がり、3〜4mの松は2〜3mの松の約1.6倍、4〜5mの松は約2.5倍になっています（各帯の下限どうしを当サイトで比較）。
        </Note>
      </Section>

      <Section id="pp-count" title="掲載業者20社の料金を集計した結果">
        <P>
          ミツモアの松の剪定のページには、2026年11月22日時点で、おすすめの業者として20社が「高さ2〜3mの松1本当たり」の料金とともに表示されていました。当サイトでその20社の料金を集計した結果は次のとおりです。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[360px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3">高さ2〜3mの松1本当たりの料金</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">業者数</th>
              </tr>
            </thead>
            <tbody>
              {countRows.map((r, idx) => (
                <tr key={r.range} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3">
                    {r.range}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          20社の中央値は18,000円、最も低い料金は12,000円、最も高い料金は24,000円でした。表示の順番や掲載される業者は、地域・日程の条件や時期によって変わります。個別の業者名と評価は、本ページでは掲載していません。
        </After>
        <P last>
          中央値の18,000円は、高さ別の相場（16,200〜20,000円）の範囲に収まっています。一方で、同じ高さの松でも業者によって2倍の差があるため、1社だけでなく複数の業者に見積もりを依頼すると、料金の水準を判断しやすくなります。
        </P>
      </Section>

      <Section id="pp-other" title="一般的な庭木の剪定料金との差">
        <P last>
          お庭110番の料金表では、庭木の剪定が3,300円〜/本（税込）、生垣の剪定が1,700円〜/m（税込）と表示されています（2026年11月22日確認）。ミツモアの松の剪定の相場は、最も低い2m以下の帯でも1本9,900円からです。松は芽や葉を1本ずつ整える作業が多く、樹形を保つ技術も必要になるため、ほかの庭木と同じ単価にはならないことが一般的です。見積もりで松だけ単価が高い場合は、松の作業内容（みどり摘み・もみあげなど）の説明を受けておくと安心です。
        </P>
      </Section>

      <Section id="pp-choose" title="松の剪定を頼む業者の選び方">
        <Cards items={chooseItems} />
        <After>
          みどり摘みと古葉取りの考え方は
          <L href="/guide/pine-care/">庭の松の手入れ</L>
          、業者を比べる際の全般的な確認点は
          <L href="/cost/price/">造園・庭の手入れの費用</L>
          で解説しています。
        </After>
      </Section>

      <Section id="pp-tell" title="見積もりの前に伝えること">
        <Bullets items={tellItems} />
      </Section>

      <Section id="pp-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="pp-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/pine-care/", label: "庭の松の手入れ" },
          { href: "/guide/silver-center-pine/", label: "シルバー人材センターに松の剪定を頼む料金" },
          { href: "/guide/tall-tree-felling-cost/", label: "特殊伐採の費用" },
          { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
          { href: "/cost/price/", label: "造園・庭の手入れの費用" },
        ]}
      />

      <Cta
        text="松の剪定の費用は、高さ・本数・作業の内容で変わります。1本ごとの高さと依頼したい作業を伝えて、複数の業者から見積もりを取ることをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
