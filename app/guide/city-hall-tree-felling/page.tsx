import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  After, Bullets, Cards, Cta, FaqList, GuideHeader, L, Note, P, Related, Section, SourceList, Toc, articleJsonLd,
  type Faq, type Item, type Source,
} from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/guide/city-hall-tree-felling/";
const UPDATED_LABEL = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const TITLE = "木の伐採は市役所に頼める？｜私有地の木は所有者の管理、4市の案内で確認した市が対応する範囲";
const DESC =
  "自宅の敷地の木や、敷地から道路にはみ出した木の伐採を市役所に頼めるかを、熊本市・長野市・北九州市・千葉市の公式ページ（2026年11月21日確認）で比べました。4市とも、私有地の木は所有者に所有権があるため市では伐採・剪定を行わないと案内しています。市に相談できる場面と、所有者が業者に依頼する際の確認事項を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "私有地の木の伐採を市役所に頼めるかを、4市の公式ページで比べて整理しています。",
  },
};

const toc = [
  { id: "ch-answer", label: "私有地の木は、市役所では伐採しません" },
  { id: "ch-compare", label: "4市の案内の比較（2026年11月21日確認）" },
  { id: "ch-city", label: "市役所に相談できる場面" },
  { id: "ch-owner", label: "所有者の責任と、道路の上に空けておく高さ" },
  { id: "ch-request", label: "所有者が業者に伐採を依頼する際の確認事項" },
  { id: "ch-faq", label: "よくある質問" },
  { id: "ch-sources", label: "本ページで参照した資料" },
];

type CityRow = { city: string; rule: string; exception: string; laws: string; desk: string; updated: string };

const cityRows: CityRow[] = [
  {
    city: "熊本市",
    rule: "私有地から道路上へ越境している樹木等は土地の所有者に所有権があるため、原則として市で伐採や剪定ができない",
    exception: "「原則として」と記載（緊急時の扱いの記載なし）",
    laws: "道路法第43条、民法第233条・第717条、道路法第30条・道路構造令第12条（建築限界）",
    desk: "市コールセンター（ページ下部の案内）",
    updated: "2023年7月25日",
  },
  {
    city: "長野市",
    rule: "私有地から張り出している樹木等は土地所有者に所有権があるため、市で伐採・枝払い等はできない",
    exception: "倒木など緊急時を除く",
    laws: "民法第233条・第717条、道路法第43条",
    desk: "建設部 監理課 占用担当",
    updated: "2026年2月10日",
  },
  {
    city: "北九州市（八幡西区役所）",
    rule: "私有地から道路上にはみ出している樹木等は土地の所有者に所有権があるため、市で伐採や枝払い等はできない",
    exception: "緊急時を除く",
    laws: "民法第233条・第717条、道路法第43条",
    desk: "八幡西区役所 まちづくり整備課",
    updated: "2021年6月1日",
  },
  {
    city: "千葉市",
    rule: "私有地から道路にはみ出した樹木などは、市が剪定や伐採をすることができない",
    exception: "記載なし",
    laws: "道路法第43条",
    desk: "各区の土木事務所 管理課",
    updated: "2025年3月27日",
  },
];

const cityItems: Item[] = [
  {
    h: "倒木・折れ枝で道路が通れないとき",
    b: "長野市と北九州市は、市で伐採・枝払いを行わない扱いについて「倒木など緊急時を除き」「緊急時を除き」と書いています。台風や大雪で私有地の木が道路に倒れ、通行に支障が出ている場合は、市の道路を管理する部署に連絡します。どこまで市が対応するかは、市ごとに異なります。",
  },
  {
    h: "道路や公園に植えられている木（街路樹・公園樹）",
    b: "道路や公園に植えられている木は、その道路・公園を管理する役所が管理します。市道の街路樹であれば市、国道や県道であれば国や県の担当事務所が管理者です。自宅の前の街路樹の枝や落ち葉が気になる場合は、自分で切らずに道路の管理者に相談します。",
  },
  {
    h: "道路にはみ出した木を切る作業で、道路を使うとき",
    b: "北九州市（八幡西区役所）は、作業によって道路の通行に支障が出る場合は、事前にまちづくり整備課へ連絡するよう案内しています。高所作業車を道路に停める場合などは、作業日が決まった段階で業者と一緒に確認します。",
  },
];

const ownerChecks: string[] = [
  "4市とも、私有地の木が原因で道路上の事故が起きた場合は、所有者が責任を問われることがあると案内しています（熊本市・長野市・北九州市は民法第717条と道路法第43条を挙げています）。",
  "熊本市は、道路法第30条と道路構造令第12条の建築限界として、車道の上空4.5メートル、歩道の上空2.5メートルの範囲に通行の障害となる物を置いてはならないと記載しています。道路側の枝は、この高さを目安に確認します。",
  "電線や電話線の近くの枝は、作業に危険が伴います。長野市・北九州市・千葉市は、事前に電力会社や電話会社（NTT など）に連絡するよう案内しています。",
  "長野市は、冬季の作業は危険を伴うため降雪前に行うよう案内しています。",
];

const requestItems: Item[] = [
  {
    h: "木が敷地のどこにあり、どこへ伸びているかを伝えます",
    b: "道路側か、隣家側か、建物や電線との距離はどの程度かを、写真を添えて伝えます。道路の上で作業する場合は、車両の停め方や通行人への配慮が必要になるため、見積もりの段階で業者に伝えます。",
  },
  {
    h: "伐採だけか、切り株・根の処理まで含めるかを決めます",
    b: "伐採した後に切り株を残すか、抜根するかで作業と費用が変わります。伐採後にその場所をどう使うかを決めてから依頼します。",
  },
  {
    h: "伐採した幹・枝の処分を見積もりに含めるかを確認します",
    b: "大量の枝や太い幹は、家庭ごみとして出せる大きさや量を超えることがあります。処分を業者に任せるのか、自分で自治体のルールに沿って出すのかを確認します。",
  },
  {
    h: "保存樹や風致地区など、切る前に手続きが要る木でないかを確認します",
    b: "市から保存樹の指定を受けている木や、風致地区内の一定の大きさの木は、伐採の前に届出や許可が必要になる場合があります。指定や地区の有無は、市の担当課に確認します。",
  },
];

const faqs: Faq[] = [
  {
    q: "自宅の庭の木を、市役所に切ってもらえますか。",
    a: "本ページで確認した熊本市・長野市・北九州市・千葉市は、いずれも私有地の木（道路にはみ出した木を含む）は土地の所有者に所有権があるため、市では伐採や剪定を行わないと案内しています。自宅の木の伐採は、所有者が造園業者などに依頼します。",
  },
  {
    q: "自宅の木が道路に倒れた場合は、どこに連絡すればよいですか。",
    a: "市の道路を管理する部署に連絡します。長野市と北九州市は、市で伐採・枝払いを行わない扱いについて、倒木などの緊急時を除くと書いています。緊急時にどこまで市が対応するか、その後の片付けを誰が行うかは市によって異なるため、連絡の際に確認してください。",
  },
  {
    q: "家の前の街路樹の枝が伸びています。自分で切ってもよいですか。",
    a: "道路に植えられている街路樹は、道路の管理者（市道なら市、国道・県道なら国や県）が管理しています。自分では切らず、道路の管理者に相談してください。",
  },
  {
    q: "道路にはみ出した枝は、どの高さまで切ればよいですか。",
    a: "熊本市は、道路法第30条と道路構造令第12条の建築限界として、車道の上空4.5メートル、歩道の上空2.5メートルの範囲に通行の障害となる物を置いてはならないと記載しています。標識やカーブミラーが隠れていないかもあわせて確認してください。",
  },
  {
    q: "木の伐採に市の補助金は使えますか。",
    a: "本ページで確認した4市の道路の案内には、伐採費用の補助の記載はありません。保存樹の指定を受けている木の剪定・治療など、別の制度で補助を設けている市はあります。お住まいの市の制度は、市の担当課に確認してください。",
  },
];

const sources: Source[] = [
  { org: "熊本市", title: "道路上に張り出している樹木等の管理について", url: "https://www.city.kumamoto.jp/kiji00317386/index.html" },
  { org: "長野市", title: "道路上に張り出している樹木等の剪定にご協力ください", url: "https://www.city.nagano.nagano.jp/n180500/contents/p003421.html" },
  { org: "北九州市（八幡西区役所）", title: "道路上にはみ出している樹木の剪定にご協力ください", url: "https://www.city.kitakyushu.lg.jp/yahatanishi/w6100271.html" },
  { org: "千葉市", title: "道路にはみ出した樹木等の剪定と伐採のお願い", url: "https://www.city.chiba.jp/kensetsu/doboku/dobokukanri/zyumokusentei.html" },
];

export default function CityHallTreeFellingPage() {
  const jsonLd = articleJsonLd({ title: TITLE, description: DESC, updatedIso: UPDATED_ISO, url: PAGE_URL, faqs });
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "木の伐採は市役所に頼めるか" }]} />

      <GuideHeader title={TITLE} updatedIso={UPDATED_ISO} updatedLabel={UPDATED_LABEL}>
        自宅の敷地にある木は、道路にはみ出している場合も含めて、市役所では伐採しません。
        熊本市・長野市・北九州市・千葉市の公式ページ（2026年11月21日確認）は、いずれも私有地の木は土地の所有者に所有権があるため、市では伐採や剪定ができないと案内しています。
        市に相談できるのは、倒木などの緊急時（長野市・北九州市が例外として記載）や、道路・公園に植えられている木の場合です。
        本ページでは、4市の案内の比較、市に相談できる場面、所有者の責任、業者に依頼する際の確認事項を整理します。
      </GuideHeader>

      <Toc toc={toc} />

      <Section id="ch-answer" title="私有地の木は、市役所では伐採しません">
        <P>
          自宅の庭の木や、敷地から道路にはみ出した木は、その土地の所有者が管理します。
          本ページで確認した4市は、いずれも「土地の所有者に所有権がある」ことを理由に、市では伐採や剪定を行わないと案内しています。
          伐採が必要な場合は、所有者が造園業者などに依頼します。
        </P>
        <Note>
          市が対応するのは、倒木などの緊急時や、道路・公園に植えられている木です。緊急時の扱いは市によって書き方が異なるため、連絡の際に確認します。
        </Note>
      </Section>

      <Section id="ch-compare" title="4市の案内の比較（2026年11月21日確認）">
        <P>
          当サイトで、4市の道路の管理に関するページを開き、市が伐採を行うかどうか、例外として書かれている場面、根拠として挙げている法令、問い合わせ先を同じ項目でそろえました。
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">市</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">私有地の木の扱い（ページの記載）</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">例外</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">挙げている法令</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">問い合わせ先</th>
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">ページの更新日</th>
              </tr>
            </thead>
            <tbody>
              {cityRows.map((r, idx) => (
                <tr key={r.city} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                    {r.city}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.rule}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.exception}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.laws}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{r.desk}</td>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7 whitespace-nowrap">{r.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <After>
          4市とも、市が私有地の木を切らない点は共通しています。違いは、緊急時の例外を明記しているか（長野市・北九州市）と、問い合わせ先の部署です。
          お住まいの市の扱いは、市の道路を管理する部署のページで確認してください。
        </After>
      </Section>

      <Section id="ch-city" title="市役所に相談できる場面">
        <Cards items={cityItems} />
        <After>
          台風の前後に行う庭木の点検は
          <L href="/guide/storm-care/">台風・強風に備える庭木の点検</L>
          で解説しています。
        </After>
      </Section>

      <Section id="ch-owner" title="所有者の責任と、道路の上に空けておく高さ">
        <Bullets items={ownerChecks} />
        <After>
          隣の家との境界を越えた枝や根の扱い（民法第233条）は
          <L href="/guide/neighbor-branch/">隣家にはみ出した庭木の枝と根</L>
          で解説しています。
        </After>
      </Section>

      <Section id="ch-request" title="所有者が業者に伐採を依頼する際の確認事項">
        <Cards items={requestItems} alt />
        <After>
          伐採の費用と業者の選び方は
          <L href="/service/felling/">庭木の伐採費用相場と業者の選び方</L>
          、切り株の扱いは
          <L href="/guide/stump-removal/">伐採した木の切り株</L>
          、伐採した枝の出し方は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          で解説しています。
        </After>
      </Section>

      <Section id="ch-faq" title="よくある質問">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="ch-sources" title="本ページで参照した資料">
        <SourceList sources={sources} checked={UPDATED_LABEL} />
      </Section>

      <Related
        links={[
          { href: "/service/felling/", label: "庭木の伐採費用相場と業者の選び方" },
          { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
          { href: "/guide/storm-care/", label: "台風・強風に備える庭木の点検" },
          { href: "/guide/silver-center/", label: "庭の手入れをシルバー人材センターに依頼する場合" },
        ]}
      />

      <Cta
        text="私有地の木の伐採は、所有者が業者に依頼します。道路側で作業する場合は、作業方法と処分の範囲を見積もりの段階で確認することをおすすめします。"
        updatedLabel={UPDATED_LABEL}
      />
    </article>
  );
}
