import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/mansion-planting/";
const UPDATED_LABEL = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const TITLE = "マンションの植栽管理｜管理組合が業者に頼む範囲を国の標準管理委託契約書・標準管理規約で確認";
const DESC =
  "マンションの植栽は、国土交通省のマンション標準管理委託契約書（令和7年12月改正）で管理対象の附属施設に含まれ、日常清掃の散水・除草とは別に、剪定・施肥・害虫駆除は「植栽管理業務」として追加または別契約が望ましいとされています（2026年11月22日確認）。管理組合が造園業者に依頼する際の確認点を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "マンションの植栽管理の範囲を国の標準管理委託契約書・標準管理規約で確認し、業者に依頼する際の確認点を整理しています。",
  },
};

const toc = [
  { id: "mp-who", label: "マンションの植栽は誰が管理するか" },
  { id: "mp-scope", label: "標準管理委託契約書での植栽の扱い" },
  { id: "mp-order", label: "植栽管理を業者に依頼する際の確認点" },
  { id: "mp-resident", label: "居住者が植栽について相談したい場合" },
  { id: "mp-faq", label: "よくある質問" },
  { id: "mp-sources", label: "本ページで参照した資料" },
];

type Row = { item: string; where: string; content: string };

const scopeRows: Row[] = [
  {
    item: "管理対象としての植栽",
    where: "標準管理委託契約書 第2条（附属施設）",
    content: "附属施設として「塀、フェンス、駐車場、通路、自転車置場、ゴミ集積所、排水溝、排水口、外灯設備、植栽、掲示板、専用庭、プレイロット」を挙げています。",
  },
  {
    item: "日常清掃での散水・除草",
    where: "別表第3 清掃業務（日常清掃）",
    content: "建物周囲の清掃対象として「植栽」の散水・除草・ゴミ拾いがあり、回数は「（○回／○）」の形で契約ごとに記入します。",
  },
  {
    item: "剪定・施肥・消毒・害虫駆除",
    where: "第3条関係コメント／別表第3関係コメント④",
    content: "「植栽管理業務（施肥、剪定、消毒、害虫駆除等）」は、状況や必要性に応じて追加する業務の例として挙げられています。植栽の規模が大きい場合や施肥・剪定・害虫駆除等を行う場合は、植栽管理業務として本契約に追加するか別個の契約とすることが望ましいとされています。",
  },
  {
    item: "植栽の点検",
    where: "別表第4 建物・設備等管理業務",
    content: "附属施設の点検項目として、植栽の「立ち枯れ等の有無又は状態」が挙げられています。",
  },
  {
    item: "第三者への再委託",
    where: "標準管理委託契約書 第4条",
    content: "管理業者は、清掃業務や建物・設備等管理業務の全部または一部を、別紙に従って第三者に再委託できるとされています。",
  },
];

const orderItems: Item[] = [
  {
    h: "いまの管理委託契約に、植栽管理業務が入っているかを確認します",
    b: "標準管理委託契約書では、日常清掃として行う植栽の散水・除草と、剪定・施肥・害虫駆除などの植栽管理業務が分けて書かれています。まず現在の契約書と別表で、植栽について何が含まれているかを確認します。",
  },
  {
    h: "管理会社経由で頼むか、造園業者と直接契約するかを決めます",
    b: "植栽管理業務は、管理委託契約に追加する方法と、別個の契約とする方法が示されています。管理会社が造園業者に再委託する場合は、再委託先と業務の範囲を確認します。直接契約する場合は、管理組合として複数の業者から見積もりを取ります。",
  },
  {
    h: "作業の内容と回数を、仕様として決めます",
    b: "剪定の回数と時期、刈り込みの対象（生垣・低木・高木）、消毒や施肥の有無、剪定枝の処分を含むかを、見積もりの前提として書き出します。仕様が同じでないと、見積もりを比べられません。",
  },
  {
    h: "高木や大規模な作業は、総会での決定が必要かを確認します",
    b: "国土交通省のマンション標準管理規約（単棟型）コメントでは、植栽による日照障害などのトラブルにおいて、植栽の伐採などの重要な問題に関しては総会の決議により決定することが望ましいとしています。伐採や大きな剪定は、理事会だけで決めてよいかを管理規約で確認します。",
  },
];

const tellItems: string[] = [
  "植栽の場所と量（敷地図があれば図で示す）。高木の本数、生垣・植え込みの長さや面積。",
  "年間で依頼したい作業（剪定・刈り込み・除草・消毒・施肥）と、それぞれの回数・時期の希望。",
  "剪定枝や刈り草の処分を料金に含めるか。",
  "作業中の居住者への周知の方法（掲示・車両の移動のお願いなど）を誰が行うか。",
  "専用庭の植栽を作業の対象に含めるかどうか。",
];

const faqs: Faq[] = [
  {
    q: "マンションの植栽の剪定は、管理費に含まれていますか。",
    a: "マンションごとの管理委託契約によって異なります。国土交通省のマンション標準管理委託契約書では、植栽の散水・除草は日常清掃の業務として書かれ、剪定・施肥・消毒・害虫駆除等は「植栽管理業務」として追加するか別個の契約とすることが望ましいとされています。現在の契約書の別表で確認してください。",
  },
  {
    q: "専用庭の植栽は、誰が手入れをしますか。",
    a: "国土交通省のマンション標準管理規約（単棟型）では、敷地及び共用部分等の管理は管理組合が行うとしたうえで、バルコニー等の保存行為のうち通常の使用に伴うものは、専用使用権を有する者がその責任と負担において行うとしています。専用庭の植栽の扱いは、各マンションの管理規約と使用細則で確認してください。",
  },
  {
    q: "植栽が日当たりを遮っているので、木を切ってほしい場合はどうすればよいですか。",
    a: "共用部分の植栽は管理組合が管理するため、居住者が自分で切るのではなく、理事会または管理会社に相談します。国土交通省のマンション標準管理規約（単棟型）コメントでは、日照障害における植栽の伐採などの重要な問題に関しては、総会の決議により決定することが望ましいとしています。",
  },
  {
    q: "マンションの植栽管理の費用の目安はありますか。",
    a: "本ページで確認した国の資料には、植栽管理の費用の目安は記載されていません。費用は植栽の量、作業の回数、処分を含むかによって変わります。庭木1本あたりの剪定や生垣の剪定の公式料金は、造園・庭の手入れの費用のページで掲載しています。",
  },
];

const sources: Source[] = [
  { org: "国土交通省", title: "「マンション標準管理者事務委託契約書」、「マンション標準管理委託契約書」、管理業者管理者方式を採用した場合における「マンション標準管理規約（書き換え表）」の策定・改正について（令和７年１２月１２日）", url: "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/const/tochi_fudousan_kensetsugyo_const_tk3_000001_00095.html" },
  { org: "国土交通省", title: "マンション標準管理委託契約書及び同コメント（PDF）", url: "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/const/content/001972228.pdf" },
  { org: "国土交通省", title: "マンション標準管理規約", url: "https://www.mlit.go.jp/jutakukentiku/house/mansionkiyaku.html" },
  { org: "国土交通省", title: "令和７年改正マンション標準管理規約（単棟型）及び同コメント（PDF）", url: "https://www.mlit.go.jp/jutakukentiku/house/content/002046031.pdf" },
];

export default function MansionPlantingPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "マンションの植栽管理" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        マンションの敷地の植栽は、国土交通省のマンション標準管理規約で管理組合が管理する附属施設に含まれます。
        マンション標準管理委託契約書（令和7年12月12日改正）では、植栽の散水・除草は日常清掃の業務として書かれ、剪定・施肥・消毒・害虫駆除等は「植栽管理業務」として契約に追加するか、別個の契約とすることが望ましいとされています。
        本ページでは、2026年11月22日に国土交通省の資料を開いて確認した植栽の扱いと、管理組合が造園業者に植栽管理を依頼する際の確認点を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="mp-who" title="マンションの植栽は誰が管理するか">
        <P>
          国土交通省のマンション標準管理規約（単棟型）は、敷地及び共用部分等の管理は管理組合がその責任と負担において行うとしています。附属施設には、塀・駐車場などと並んで植栽と専用庭が含まれています。
        </P>
        <P last>
          実際の管理は、管理組合が管理会社に委託し、管理会社がさらに造園業者に再委託する形や、管理組合が造園業者と直接契約する形があります。どの形かは、マンションごとの管理委託契約で決まります。
        </P>
      </Section>

      <Section id="mp-scope" title="標準管理委託契約書での植栽の扱い">
        <P>
          当サイトで、国土交通省のマンション標準管理委託契約書及び同コメントから、植栽に関わる記載を抜き出して整理しました。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">項目</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">記載の場所</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">内容</th>
              </tr>
            </thead>
            <tbody>
              {scopeRows.map((r, idx) => (
                <tr key={r.item} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3">
                    {r.item}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.where}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>
          標準管理委託契約書は契約書のひな形です。実際の契約の内容は、各マンションの管理委託契約書と別表で確認してください。
        </Note>
      </Section>

      <Section id="mp-order" title="植栽管理を業者に依頼する際の確認点">
        <Cards items={orderItems} />
        <P>見積もりを依頼する前に、次の項目を整理しておきます。</P>
        <Bullets items={tellItems} />
        <After>
          剪定の公式料金は
          <L href="/cost/pruning-price/">庭木の剪定費用</L>
          、生垣の刈り込みの考え方は
          <L href="/guide/hedge-care/">生垣の手入れ</L>
          、住宅地での薬剤散布の注意は
          <L href="/guide/spraying/">住宅地で庭木の消毒を行う・依頼する場合</L>
          で解説しています。
        </After>
      </Section>

      <Section id="mp-resident" title="居住者が植栽について相談したい場合">
        <P>
          共用部分の植栽について、日当たり・枝の張り出し・落ち葉・害虫などの困りごとがある場合は、居住者が自分で切ったり薬剤をまいたりせず、理事会または管理会社に相談します。
        </P>
        <P last>
          国土交通省のマンション標準管理規約（単棟型）コメントは、植栽による日照障害などのトラブルにおいて、植栽の伐採などの重要な問題に関しては総会の決議により決定することが望ましいとしています。
        </P>
      </Section>

      <Section id="mp-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="mp-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/cost/pruning-price/", label: "庭木の剪定費用" },
          { href: "/guide/hedge-care/", label: "生垣の手入れ" },
          { href: "/guide/spraying/", label: "住宅地で庭木の消毒を行う・依頼する場合" },
          { href: "/guide/pest-disease/", label: "庭木の害虫と病気の種類" },
        ]}
      />

      <Cta
        text="マンションの植栽管理は、作業の内容と回数を仕様として決めてから見積もりを取ると、業者ごとの比較がしやすくなります。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
