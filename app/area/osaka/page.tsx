import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/osaka/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

export const metadata: Metadata = {
  title: "大阪の造園・庭の手入れ業者の選び方｜個人宅と管理組合・店舗の分岐",
  description:
    "大阪で庭木の剪定や植栽の管理を頼むとき、依頼主が個人か、マンション管理組合か、店舗・事業所かで適した窓口は変わります。発注主体ごとの分かれ道と、掲載サービスの運営会社・対応エリアを整理しました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "大阪の造園・庭の手入れ業者の選び方｜個人宅と管理組合・店舗の分岐",
    description:
      "個人宅・マンション管理組合・店舗という発注主体の違いから、大阪での造園業者の探し方を整理しました。",
  },
};

const toc = [
  { id: "osaka-point", label: "大阪では「誰が発注するか」で窓口が変わる" },
  { id: "osaka-types", label: "発注主体ごとの分かれ道" },
  { id: "osaka-pick", label: "この条件で見ておきたい3サービス" },
  { id: "osaka-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "osaka-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "osaka-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["hikaku-biz", "townlife", "houzz"] as const;

const pickReasons: Record<string, string> = {
  "hikaku-biz":
    "発注側の利用が無料で、造園のほか門・塀・フェンス・デッキといった区分でも事業者を探せます。管理組合や店舗のように、複数社の提案を持ち帰って稟議にかける必要がある発注に向いた構成です。",
  townlife:
    "希望条件を入力すると複数社からプランと見積もりを取り寄せられます。図面や仕様を伴う外構・植栽の計画を、比較できる形で手元に揃えたいときに使いやすい窓口です。",
  houzz:
    "造園・ガーデンデザイナーや外構の専門家を地域・サービス別に検索でき、事例写真とレビューが確認できます。店舗の外周や共用部のように、見え方そのものが目的になる案件で候補を絞る入口になります。",
};

const requesterTypes = [
  {
    h: "個人宅（戸建て・専用庭）",
    b: "依頼するのは本人で、決めるのも本人です。作業の範囲が限られる代わりに、日程も仕上がりも直接やり取りできます。料金が先に表示されるサービスや、当日中の手配に強いサービスが選択肢になります。",
    link: { href: "/review/kurashi-market/", label: "くらしのマーケットの口コミを見る" },
  },
  {
    h: "マンション管理組合・共用部",
    b: "発注の主体は組合であり、決議や予算の手続きが先に立ちます。年に何回、どの範囲をどう管理するかを文書で示せる見積もりが必要で、単価より作業仕様の書き方が重要になります。複数社の提案を並べて比較できる窓口が向きます。",
    link: { href: "/review/hikaku-biz/", label: "比較ビズの口コミを見る" },
  },
  {
    h: "店舗・事業所の外周植栽",
    b: "営業時間との調整が前提になります。作業できる時間帯が限られ、見た目が売り場の印象に直結するため、仕上がりのイメージを事前に共有できるかどうかが分かれ目です。事例写真から探せるサービスが役に立ちます。",
    link: { href: "/review/houzz/", label: "Houzzの口コミを見る" },
  },
  {
    h: "賃貸物件のオーナー・管理会社",
    b: "自分が住んでいない物件の植栽管理は、現地に立ち会えないことが前提になります。作業前後の写真報告や、定期的に同じ範囲を管理する契約が組めるかどうかを確認します。",
    link: { href: "/review/oniwa-master/", label: "お庭マスターの口コミを見る" },
  },
];

const checklist = [
  {
    h: "誰の名義で契約するか",
    b: "個人名義か、法人・管理組合名義か。名義によって必要な書類（見積書の宛名、請求書、領収書の扱い）が変わります。最初の問い合わせで伝えておくと、後から出し直しになりません。",
  },
  {
    h: "一回きりか、継続か",
    b: "スポットで頼むのか、年間を通じて同じ範囲を管理してもらうのか。継続なら、作業の回数と時期を仕様として書き出せるかどうかが比較の軸になります。",
  },
  {
    h: "作業できる時間帯の制約",
    b: "店舗なら開店前、集合住宅なら住民の生活時間帯。作業音や通行の制限がある場合は、日程調整の前に条件として渡します。",
  },
  {
    h: "提案を何社から取るか",
    b: "組合や事業所の意思決定では、比較対象の数そのものが説明材料になります。一括して複数社から取り寄せられる窓口を使うか、個別に当たるかを決めてから動きます。",
  },
  {
    h: "作業後の報告のかたち",
    b: "立ち会えない発注では、作業前後の写真や作業日報の有無が確認手段になります。報告の形式まで含めて依頼内容に入れておきます。",
  },
];

const faqs = [
  {
    q: "マンションの植栽管理も掲載サービスから頼めますか。",
    a: "比較ビズは造園や門・塀・フェンスといった区分で事業者を探せ、発注側の利用は無料と公開されています。ただし、管理組合としての契約条件や共用部の作業可否は個別の取り決めになるため、候補を絞ったうえで各社へ直接確認してください。",
  },
  {
    q: "店舗の外構工事と庭木の手入れは同じ業者に頼めますか。",
    a: "外構と植栽の両方を扱う事業者は少なくありませんが、得意分野は会社ごとに異なります。工事としての外構と、継続的な植栽管理は求められる体制が違うため、どちらが主目的かを先に決めて窓口を選ぶほうが噛み合います。",
  },
  {
    q: "大阪市内での対応可否はどこで分かりますか。",
    a: "掲載サービスはいずれも公開情報の上では全国を対象としていますが、大阪市内の個別の対応可否や出張範囲までは公開されていません。実際に受けられるかどうかは依頼時に各社へ確認する必要があります。",
  },
  {
    q: "見積もりを複数社から取るとき、条件は揃えるべきですか。",
    a: "揃えてください。対象の本数や範囲、ゴミの処分を含むかどうかが社ごとに違うと、金額を並べても比較になりません。同じ条件を書いた文面を用意して、全社に同じものを渡すのが確実です。",
  },
];

export default function AreaOsakaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "大阪の造園・庭の手入れ業者の選び方｜個人宅と管理組合・店舗の分岐",
        description:
          "発注主体の違いから、大阪での造園・庭の手入れの依頼先を整理しました。",
        dateModified: UPDATED_ISO,
        author: { "@type": "Organization", name: "造園ナビ" },
        publisher: { "@type": "Organization", name: "造園ナビ", url: "https://zouen-navi.com/" },
        mainEntityOfPage: PAGE_URL,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "大阪" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          大阪の造園・庭の手入れ業者の選び方｜個人宅と管理組合・店舗の分岐
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          大阪で庭木や植栽の手入れを頼むとき、探し方が噛み合わなくなる一番の原因は「誰が発注するか」を曖昧にしたまま比較を始めてしまうことです。
          住まいと商いが同じ通りに並ぶ市街地では、戸建ての庭、集合住宅の共用部、店舗の外周植栽が隣り合っています。同じ剪定でも、発注主体が違えば必要な書類も決め方も別物になります。このページはその分かれ道から整理します。
        </p>
      </header>

      <nav className="my-10 rounded-2xl border border-border bg-surface-alt p-5">
        <p className="font-bold text-text-primary mb-3 text-sm">目次</p>
        <ol className="space-y-2 text-sm list-decimal list-inside marker:text-text-muted">
          {toc.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-primary hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="osaka-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          大阪では「誰が発注するか」で窓口が変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          個人が自宅の庭木を切ってもらう場合、決めるのは本人ひとりです。日程も仕上がりも直接やり取りでき、料金が先に分かる形式のサービスが使いやすく働きます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          ところが、マンションの共用部や店舗の外周になると、同じ作業でも進め方が変わります。決めるのは組合や会社であり、比較した記録を残す必要が出てきます。
          このとき効いてくるのは金額の安さではなく、「作業の仕様を文書で示せるか」「複数社の提案を同じ形式で並べられるか」です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            個人宅の探し方をそのまま組合や店舗に持ち込むと、提案の粒度が合わずにやり直しになります。逆に、個人宅の小さな剪定に法人向けの窓口を使うと、手続きのほうが重くなります。
            大阪で迷ったときは、まず発注主体を確定させてから窓口を選んでください。
          </p>
        </div>
      </section>

      <section id="osaka-types" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          発注主体ごとの分かれ道
        </h2>
        <div className="space-y-4">
          {requesterTypes.map((t) => (
            <div key={t.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{t.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary mb-3">{t.b}</p>
              <Link href={t.link.href} className="text-sm text-primary underline underline-offset-2">
                {t.link.label}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="osaka-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、複数社の提案を並べて意思決定したいという条件に照らすと、次の3つは提案を持ち帰りやすい構成です。
        </p>
        <div className="space-y-4">
          {picks.map((slug) => {
            const r = findReview(slug);
            if (!r) return null;
            return (
              <div key={slug} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-bold text-text-primary mb-2">{r.companyName}</h3>
                <p className="text-sm text-text-muted mb-3 leading-7">運営：{infoValue(r, "運営")}</p>
                <p className="text-[15px] leading-8 text-text-secondary mb-4">{pickReasons[slug]}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href={`/review/${r.slug}/`} className="text-primary underline underline-offset-2">
                    口コミ・評判を見る
                  </Link>
                  <Link href={`/company/${r.slug}/`} className="text-primary underline underline-offset-2">
                    特徴を比較する
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="osaka-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="大阪" />
      </section>

      <section id="osaka-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <div className="space-y-4">
          {checklist.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="osaka-faq" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          よくある質問
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">Q. {f.q}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <AreaLinks current="osaka" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/garden-design/", label: "庭のデザインをプロに依頼する方法" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び分け" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-2xl border border-border bg-surface p-4 text-text-primary font-medium hover:border-primary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-2xl border border-border bg-surface-alt p-6 text-center">
        <p className="text-sm text-text-secondary mb-4">
          発注主体と作業範囲が決まったら、同じ条件文で複数のサービスに当たってみてください。
        </p>
        <Link
          href="/ranking/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
        >
          掲載サービスを比較する
        </Link>
        <p className="mt-3 text-xs text-text-muted">
          本ページにはPR（広告）を含む場合があります。掲載情報は{UPDATED_LABEL}時点のものです。
        </p>
      </div>
    </article>
  );
}
