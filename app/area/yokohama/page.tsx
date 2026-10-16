import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/yokohama/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

export const metadata: Metadata = {
  title: "横浜の造園・庭の手入れ業者の選び方｜高低差のある庭と保険・保証",
  description:
    "横浜は坂と丘陵の多い市街地で、擁壁や法面を伴う庭も珍しくありません。高低差のある現場でどこに危険が生じ、保険や補償をどのように確認すればよいかを整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: "横浜の造園・庭の手入れ業者の選び方｜高低差のある庭と保険・保証",
    description:
      "擁壁や法面を伴う庭の作業上の危険と、保険・補償の確認方法という観点から、横浜での業者選びを整理しています。",
  },
};

const toc = [
  { id: "yokohama-point", label: "高低差のある庭では安全の段取りが優先されます" },
  { id: "yokohama-risk", label: "傾斜・擁壁のある現場で生じやすい問題" },
  { id: "yokohama-insurance", label: "保険・補償の確認方法" },
  { id: "yokohama-pick", label: "この条件に適した3サービス" },
  { id: "yokohama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "yokohama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "yokohama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "kurashi-market", "smile-garden"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "現地調査・見積もりが無料（条件あり）で、請負賠償保険への加入が公開されています。伐採・抜根まで対応範囲に含まれ、作業中の事故に備える枠組みが明示されている点を確認できます。",
  "kurashi-market":
    "作業完了後に口コミを投稿でき、損害賠償補償制度が設けられています。作業前に業者へメッセージを送れるため、高低差や擁壁の状況を写真で共有してから依頼先を決められます。",
  "smile-garden":
    "完全自店舗施工を掲げているため、現場を確認した担当者がそのまま作業を担当します。足場の確保や作業の方向といった、現場でなければ決められない段取りを一度の相談で調整しやすい構成です。",
};

const risks = [
  {
    h: "脚立を立てられる平坦な場所が限られる",
    b: "斜面では脚立の四脚が均等に接地しません。その結果、平地であれば脚立で済む高さでも別の方法が必要となり、作業手順そのものが変わります。「木は低いのに費用が想定と異なった」という相違は、この段差から生じます。",
  },
  {
    h: "剪定した枝が下方へ転落する",
    b: "高低差のある敷地では、切り落とした枝が下の段や隣地へ転落することがあります。受け止める養生をどこに設置するか、下の段への立ち入りをどのように管理するかを、作業前に決めておく必要があります。",
  },
  {
    h: "擁壁や法面の際に根が張っている",
    b: "擁壁の直上や際に植えられた木は、根が構造物に絡んでいることがあります。抜根まで行う場合、擁壁への影響を考慮せずに掘削すると、想定外の事態を招くおそれがあります。抜根の可否は、現地を確認したうえで判断してもらってください。",
  },
  {
    h: "道路と庭の高さが異なる",
    b: "門から庭までに階段がある、駐車場所より庭が高い（あるいは低い）といった条件は、道具と剪定した枝の運搬に直結します。段数や手すりの有無まで伝えておくと、見積もりの精度が上がります。",
  },
];

const insurancePoints = [
  {
    h: "どの保険が適用されるかを確認する",
    b: "紹介型のサービスでは、窓口の会社が設けた補償制度と、実際に作業する業者自身の保険が別に存在します。作業中に物品を破損した場合、どちらが適用されるのかを事前に確認しておきます。",
  },
  {
    h: "適用の範囲と条件を確認する",
    b: "補償制度には、対象となる事故の種類や申請期限といった条件が付されています。制度があることと、依頼者の事故が対象となることは別の問題です。各社が公開している条件をご確認ください。",
  },
  {
    h: "近隣への被害も想定する",
    b: "高低差のある敷地では、下の段の住戸や隣地の設備に影響が及ぶ可能性があります。自宅だけでなく、第三者への損害が対象に含まれるかを確認します。",
  },
  {
    h: "作業前の状態を記録しておく",
    b: "擁壁のひび、フェンスの傷、既存設備の状態を作業前に写真で記録しておくと、後から原因を切り分けやすくなります。手間はかかりませんが、記録の有無によって相談の進み方が変わります。",
  },
];

const checklist = [
  {
    h: "敷地の高低差を伝える",
    b: "庭が何段に分かれているか、門から庭まで階段があるかを伝えます。図面がなくても、段の数と上り下りの方向を説明できれば十分に伝わります。",
  },
  {
    h: "擁壁・法面の有無",
    b: "庭の際に擁壁や斜面があるかどうかは、作業方法と抜根の可否を左右します。擁壁の上に木が植えられている場合は、その旨を必ず伝えてください。",
  },
  {
    h: "下の段に何があるか",
    b: "下が隣家の敷地なのか、自宅の駐車場なのか、道路なのかを伝えます。枝を落とす方向を決める材料になります。",
  },
  {
    h: "作業できる足場の確保",
    b: "高所作業の体制が必要か、脚立で足りるかについて、現地確認の際に判断の内容を説明してもらうよう依頼しておきます。",
  },
  {
    h: "保険・補償の確認と記録",
    b: "適用範囲を確認したうえで、作業前の現況写真を記録します。口頭の確認のみで進めないことが、後の対応を左右します。",
  },
];

const faqs = [
  {
    q: "斜面の庭でも作業を受けてもらえますか。",
    a: "掲載サービスの公開情報には、傾斜地を対象外とする記載はありません。ただし、足場の確保が必要な現場では作業方法と日数が変わるため、現地を確認したうえでの判断となります。写真を添えて相談すると、相談を円滑に進められます。",
  },
  {
    q: "擁壁の上の木を抜根してもよいですか。",
    a: "根が擁壁に絡んでいる場合、掘削により構造に影響が及ぶ可能性があります。抜根の可否は現地の状況によるため、業者に確認してもらったうえで、必要であれば擁壁の状態を判断できる専門家にもご相談ください。",
  },
  {
    q: "作業中に隣家の物を壊した場合はどうなりますか。",
    a: "対応は契約先とその補償の枠組みによります。請負賠償保険への加入や損害賠償補償制度を公開しているサービスもありますが、適用の条件は各社で異なります。作業前に、第三者への損害が対象に含まれるかをご確認ください。",
  },
  {
    q: "横浜市内での対応可否はどこで分かりますか。",
    a: "掲載サービスはいずれも公開情報では全国を対象としていますが、横浜市内での個別の対応可否や出張範囲は公開されていません。依頼時に各社へ直接確認する必要があります。",
  },
];

export default function AreaYokohamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "横浜の造園・庭の手入れ業者の選び方｜高低差のある庭と保険・保証",
        description:
          "傾斜地・擁壁を伴う庭の作業上の危険と、保険・補償の確認方法をまとめています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "横浜" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">
          横浜の造園・庭の手入れ業者の選び方｜高低差のある庭と保険・保証
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          横浜は坂と丘陵が入り組んだ市街地で、宅地に段差や擁壁を伴うことが珍しくありません。
          庭が道路より高い、庭そのものが二段に分かれている、擁壁の際に木が植えられているといった条件は、木の本数や高さと同程度に作業の進め方を左右します。
          本ページでは、高低差のある庭でどこに危険が生じるのかと、保険・補償をどのように確認するのかを中心に整理します。
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

      <section id="yokohama-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          高低差のある庭では安全の段取りが優先されます
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          平坦な庭であれば、木の高さから作業方法はおおよそ決まります。しかし、敷地に段差があると、同じ高さの木でも作業方法が変わります。
          脚立を立てられる場所があるか、剪定した枝がどちらへ落ちるか、下の段に何があるかが決まらなければ、作業方法が定まりません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そのため、この条件では、比較の基準が「何ができるか」から「どのように安全に進めるか」へ移ります。
          具体的には、現地を確認したうえで作業方法を説明してくれるか、そして万一の場合の責任の所在が明確であるかの二点です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            高低差は写真では伝わりにくい情報です。問い合わせの段階で「庭が何段に分かれているか」「擁壁があるか」を言葉で添えるだけでも、現地確認の精度が上がります。
          </p>
        </div>
      </section>

      <section id="yokohama-risk" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          傾斜・擁壁のある現場で生じやすい問題
        </h2>
        <div className="space-y-4">
          {risks.map((r) => (
            <div key={r.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{r.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{r.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="yokohama-insurance" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          保険・補償の確認方法
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載サービスの中には、請負賠償保険への加入や損害賠償補償制度を公開しているものがあります。
          ただし、「制度があること」と「依頼者の事故が対象となること」は別の問題です。次の順序でご確認ください。
        </p>
        <ol className="space-y-4">
          {insurancePoints.map((p, i) => (
            <li key={p.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{p.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="yokohama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、責任の所在と作業体制を確認しやすいという観点では、次の3サービスが判断の手がかりになります。
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

      <section id="yokohama-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="横浜" />
      </section>

      <section id="yokohama-checklist" className="scroll-mt-20 mb-12">
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

      <section id="yokohama-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="yokohama" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/felling/", label: "庭木の伐採費用相場と業者の選び方" },
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
            { href: "/review/", label: "掲載サービスの口コミ・評判まとめ" },
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
          現場の条件と責任の所在を確認したうえで、複数のサービスを比較することをおすすめします。
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
