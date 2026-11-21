import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Steps, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/abandoned-farmland-mowing/";
const UPDATED_LABEL = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const TITLE = "耕作放棄地の草刈り｜草刈りだけでは「遊休農地」の判断を避けられない理由と、業者に頼む場合の費用の目安";
const DESC =
  "使っていない農地の草刈りについて、農地法の利用状況調査・利用意向調査の流れと、勧告を受けた遊休農地の固定資産税評価額が約1.8倍になる仕組みを、農林水産省・福岡市・箕面市の公式ページ（2026年11月21日確認）で整理しました。草刈りを業者に頼む場合の公式単価と面積別の計算例も掲載します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "耕作放棄地の草刈りと、農地法の遊休農地の調査・課税の仕組み、業者に頼む場合の費用の目安を整理しています。",
  },
};

const toc = [
  { id: "af-point", label: "草刈りは管理の一つですが、耕作の見込みとあわせて判断されます" },
  { id: "af-flow", label: "農業委員会の調査から勧告までの流れ" },
  { id: "af-tax", label: "勧告を受けた遊休農地の固定資産税" },
  { id: "af-cost", label: "草刈りを業者に頼む場合の費用の目安" },
  { id: "af-request", label: "業者に依頼する前に確認すること" },
  { id: "af-faq", label: "よくある質問" },
  { id: "af-sources", label: "本ページで参照した資料" },
];

const flowItems: Item[] = [
  {
    h: "農業委員会が、年1回、農地の利用状況を調べます",
    b: "農業委員会は、農地法第30条にもとづいて、市内のすべての農地を対象に年1回の利用状況調査を行います（福岡市農業委員会の案内）。耕作されておらず、引き続き耕作されないと見込まれる農地などが遊休農地にあたります。",
  },
  {
    h: "遊休農地の所有者に、利用の意向を尋ねます",
    b: "遊休農地があるときは、農地法第32条にもとづいて所有者に利用意向調査を行います。福岡市の案内では、所有者は、農地中間管理機構を通じて貸す、自分で売却・貸し付けなどを行う、自分で耕作する、その他、のいずれかを選びます。",
  },
  {
    h: "意向どおりに進まない場合は、勧告に進みます",
    b: "福岡市の案内では、自分で貸し付け・耕作を選んで6か月たっても実行されない場合や、6か月を経過しても意思表明がない場合に、農地中間管理機構と協議するよう勧告します（農業振興地域にあることが条件）。勧告後2か月たっても協議が整わない場合は、機構が知事に裁定を申請し、知事が裁定を行います。",
  },
];

const requestItems: Item[] = [
  {
    h: "場所と境界を、地図や写真で正確に伝えます",
    b: "使っていない農地は、隣の農地との境界が分かりにくくなっていることがあります。地番や地図、現地の写真を用意し、刈る範囲を業者と現地で確認します。",
  },
  {
    h: "草の高さ、木や竹の有無、石やごみの有無を伝えます",
    b: "長く放置した土地では、草が高く伸びたり、木や竹が生えたりしています。刈払機で刈れる草か、伐採が必要な木があるかで、作業の方法と費用が変わります。",
  },
  {
    h: "刈った草の処分を料金に含めるかを確認します",
    b: "面積が広いと、刈った草の量も多くなります。現地に置くのか、回収・処分まで依頼するのかで費用が変わるため、見積もりで分けて確認します。",
  },
  {
    h: "年に何回刈るかを決めて、継続の依頼を相談します",
    b: "草は一度刈っても伸びてきます。年に何回刈るか、時期をいつにするかを決め、継続して依頼する場合の条件を相談します。",
  },
];

const ownerChecks: string[] = [
  "箕面市は、利用意向調査の対象として「1年以上にわたり農作物の作付が行われておらず、かつ、今後も農地所有者などの農地の維持管理（草刈、耕起など）状態や農業経営に関する意向などから、農作物の栽培が行われる見込みがない農地」を挙げています。",
  "このため、草刈りを続けていることは管理の状態として見られますが、作付けがなく栽培の見込みもない場合は、意向調査の対象になり得ます。",
  "農地を貸す・売る・自分で耕作するといった今後の方針は、農地のある市町村の農業委員会に相談します。",
];

const faqs: Faq[] = [
  {
    q: "耕作放棄地は、草刈りさえしていれば問題ありませんか。",
    a: "草刈りは管理の状態として見られますが、それだけで足りるとは限りません。箕面市は、1年以上作付けがなく、草刈り・耕起などの維持管理の状態や経営の意向から栽培の見込みがない農地を、利用意向調査の対象として挙げています。農地の今後の使い方は、農業委員会に相談してください。",
  },
  {
    q: "遊休農地になると、固定資産税は上がりますか。",
    a: "福岡市の案内では、農地中間管理機構との協議を勧告された遊休農地は、固定資産税評価額が約1.8倍になり、意向調査を行った年度の翌々年度の固定資産税から反映されます。通常の農地は評価額に0.55を乗じていますが、遊休農地を放置している場合は乗じないため、結果的に約1.8倍になると説明しています。",
  },
  {
    q: "耕作放棄地の草刈りを業者に頼むと、いくらかかりますか。",
    a: "お庭110番の料金表（2026年11月21日確認）では、機械刈りが390円〜/㎡（税込）、草むしりが830円〜/㎡（税込）でした。機械刈りの単価で計算すると、300㎡で117,000円から、1,000㎡で390,000円からになります。草の状態、木や竹の有無、処分の有無で変わるため、現地の見積もりで確認してください。",
  },
  {
    q: "相続した農地を使う予定がありません。どこに相談すればよいですか。",
    a: "農地のある市町村の農業委員会に相談します。農林水産省は、平成25年の農地法改正で、耕作従事者の死亡等により耕作する人がいなくなる農地も対策の対象になり、所有者不明の遊休農地は公示・裁定を経て農地中間管理機構が借り受けられるようになったと説明しています。",
  },
];

const sources: Source[] = [
  { org: "農林水産省", title: "遊休農地対策について", url: "https://www.maff.go.jp/j/keiei/koukai/yukyu.html" },
  { org: "福岡市（農業委員会）", title: "遊休農地の発生防止対策について（農地利用状況調査と遊休農地利用意向調査）", url: "https://www.city.fukuoka.lg.jp/nogyo-iinkai/nogyoi/life/nougyou_iinkai/017_2_2_2.html" },
  { org: "箕面市", title: "農地法第32条（遊休農地の意向調査）について", url: "https://www.city.minoh.lg.jp/nougyou/nouchihou32.html" },
  { org: "お庭110番（草刈り110番）", title: "草刈り、剪定、伐採、芝刈りなどのお庭のお手入れに関するサービスの料金表", url: "https://www.kusakari-a.com/price/" },
];

export default function AbandonedFarmlandMowingPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "耕作放棄地の草刈り" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        使っていない農地の草刈りは、雑草の広がりを抑える管理として大切ですが、それだけで農地法上の「遊休農地」の判断を避けられるとは限りません。
        箕面市は、1年以上作付けがなく、草刈り・耕起などの維持管理の状態や経営の意向から栽培の見込みがない農地を、利用意向調査の対象として挙げています。
        福岡市の案内では、農地中間管理機構との協議を勧告された遊休農地は、固定資産税評価額が約1.8倍になります。
        本ページでは、調査から勧告までの流れと、草刈りを業者に頼む場合の公式単価・面積別の計算例を整理します（2026年11月21日確認）。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="af-point" title="草刈りは管理の一つですが、耕作の見込みとあわせて判断されます">
        <Bullets items={ownerChecks} />
        <After>
          宅地の空き地の草刈りの考え方は
          <L href="/guide/grass-cutting/">庭・空き地の草刈り</L>
          で解説しています。
        </After>
      </Section>

      <Section id="af-flow" title="農業委員会の調査から勧告までの流れ">
        <Steps items={flowItems} />
        <After>
          農林水産省は、平成25年の農地法改正で遊休農地対策が強化され、耕作従事者の死亡等により耕作する人がいなくなる農地も対象になったこと、令和3年度から利用状況調査と荒廃農地調査が統合されたことを説明しています。
        </After>
      </Section>

      <Section id="af-tax" title="勧告を受けた遊休農地の固定資産税">
        <P>
          福岡市農業委員会の案内では、農地中間管理機構との協議を勧告された遊休農地は、固定資産税評価額が約1.8倍になります。
          通常の農地の固定資産税の評価額は売買価格に0.55を乗じていますが、遊休農地を放置している場合は0.55を乗じないため、結果的に約1.8倍になると説明しています。
        </P>
        <Note>
          反映されるのは、意向調査を行った年度の翌々年度の固定資産税からです（福岡市の案内）。課税の扱いは、農地のある市町村で確認してください。
        </Note>
      </Section>

      <Section id="af-cost" title="草刈りを業者に頼む場合の費用の目安">
        <P>
          お庭110番の料金表（2026年11月21日確認）には、機械刈り 390円〜/㎡（税込）、草むしり 830円〜/㎡（税込）と記載されています。
          当サイトで、機械刈りの単価を面積にあてはめて計算しました。いずれも下限の単価による計算で、実際の金額は現地の見積もりで決まります。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">面積</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">機械刈り（390円〜/㎡）で計算</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">草むしり（830円〜/㎡）で計算</th>
              </tr>
            </thead>
            <tbody>
              {[
                { a: "100㎡", m: "39,000円〜", h: "83,000円〜" },
                { a: "300㎡", m: "117,000円〜", h: "249,000円〜" },
                { a: "1,000㎡", m: "390,000円〜", h: "830,000円〜" },
              ].map((r, idx) => (
                <tr key={r.a} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3">{r.a}</th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.m}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          お庭110番は「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」と注記しています。広い農地では面積に応じた割引や別の料金体系が提示されることもあるため、複数の業者から見積もりを取って比べます。
          草刈り・剪定・伐採の公式料金は
          <L href="/cost/price/">造園・庭の手入れの費用</L>
          でまとめています。
        </After>
      </Section>

      <Section id="af-request" title="業者に依頼する前に確認すること">
        <Cards items={requestItems} alt />
        <After>
          刈払機の事故を防ぐ考え方は
          <L href="/guide/garden-safety/">庭作業の事故を防ぐ</L>
          、刈った草の処分方法は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          、シルバー人材センターへの依頼は
          <L href="/guide/silver-center/">庭の手入れをシルバー人材センターに依頼する場合</L>
          で解説しています。
        </After>
      </Section>

      <Section id="af-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="af-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/guide/grass-cutting/", label: "庭・空き地の草刈り" },
          { href: "/guide/weed-control/", label: "庭の雑草対策" },
          { href: "/guide/silver-center/", label: "庭の手入れをシルバー人材センターに依頼する場合" },
          { href: "/cost/price/", label: "造園・庭の手入れの費用" },
        ]}
      />

      <Cta
        text="広い農地の草刈りは、刈る範囲・草の状態・処分の有無で費用が大きく変わります。現地を見てもらったうえで、複数の業者から見積もりを取ることをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
