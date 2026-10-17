import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/sendai/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "仙台の造園・庭の手入れ業者の選び方｜立ち会いができない場合の依頼方法";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "離れて暮らす実家の庭や、普段使用していない住宅の植栽は、所有者が現地に立ち会えないまま作業を依頼することになります。仙台で立ち会いなしの依頼を進める際の、敷地への立ち入り・報告・支払いの決め方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "現地に立ち会えないまま庭の手入れを依頼する際の段取りという観点から、仙台での業者選びを整理しています。",
  },
};

const toc = [
  { id: "sendai-point", label: "立ち会えない依頼では取り決めの数が増えます" },
  { id: "sendai-steps", label: "立ち会いなしで進める際の手順" },
  { id: "sendai-report", label: "報告の形式を事前に決める" },
  { id: "sendai-pick", label: "この条件に適した3サービス" },
  { id: "sendai-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "sendai-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "sendai-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-master", "kurashi-market", "epark"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-master":
    "受付は24時間365日で、自社では施工せず、要望に合う業者を無料で紹介する形式です。遠方から連絡する場合、日中に電話をかけ直す時間がないことも多いため、受付時間の制約が少ない窓口は相談を始めやすくなります。",
  "kurashi-market":
    "作業内容ごとに料金が事前に表示され、見積もりを取らずに依頼内容を確定できます。現地に立ち会って見積もりを受け取ることが難しい場合、条件が事前に確定する形式は判断しやすい構成です。完了後に口コミを投稿でき、損害賠償補償制度も設けられています。",
  epark:
    "「植木屋・造園業者・庭師」のカテゴリから業者を探すことができ、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。電話で予約できる窓口のため、現地の状況を口頭で補足しながら進めたい場合に適しています。",
};

const steps = [
  {
    h: "敷地に立ち入る方法を決める",
    b: "空き家や留守宅では、門扉や勝手口の開錠が最初の課題となります。近隣に住む家族が立ち会うのか、鍵を預けるのか、施錠していない場所から入ってもらうのかを決めます。鍵を預ける場合は、受け渡しと返却の方法まで含めて決めておきます。曖昧なまま日程のみを確保すると、当日に作業を開始できません。",
  },
  {
    h: "水道と電源の使用可否を確認する",
    b: "長期間使用していない住宅では、水道が止まっていたり、屋外コンセントが通電していなかったりします。道具の洗浄や清掃に使用する想定があるかどうかは業者によって異なるため、使用できない前提で伝えておくほうが安全です。",
  },
  {
    h: "作業前の状態を写真で共有する",
    b: "最後に確認した時点と現況が異なることは珍しくありません。近隣の家族に撮影を依頼する、あるいは現地確認の際に撮影してもらうなどして、着手前の状態を双方で確認できる形にしておきます。",
  },
  {
    h: "近隣への連絡経路を決める",
    b: "留守宅での作業は、隣家にとっては突然始まる工事です。誰が事前に挨拶するのか、作業中に近隣から問い合わせがあった場合に誰へ連絡するのかを決めておきます。所有者の連絡先が現地で分からない状態では、問題が生じた際の対応に時間がかかります。",
  },
  {
    h: "支払いと書類の受け取り方法を決める",
    b: "現地で現金を支払えないため、支払い方法と請求書・領収書の送付先は事前に決めておく必要があります。宛名を誰にするか（所有者本人か、手続きを代行する家族か）もあわせて確認します。",
  },
];

const reportPoints = [
  {
    h: "作業前後の写真を受け取れるか",
    b: "立ち会えない依頼では、写真が唯一の確認手段です。同じ角度で撮影した作業前と作業後の写真を受け取れるかどうかを、依頼を決める前に確認しておきます。対応していない場合、仕上がりの確認は次回現地を訪れる時まで持ち越しになります。",
  },
  {
    h: "作業できなかった箇所の報告があるか",
    b: "予定していた木の作業ができなかった、途中で天候が悪化したといった事情は、現地にいなければ把握できません。実施した作業だけでなく、実施しなかった作業とその理由が報告に含まれるかを確認します。",
  },
  {
    h: "追加で判明した問題の伝え方",
    b: "枯れている木があった、外壁に枝が接触していた、雨樋が詰まっていたなど、作業中に判明する問題があります。その場で判断を求められても即答できないため、写真で報告してもらい、後日改めて相談する流れにしておくと、落ち着いて判断できます。",
  },
  {
    h: "処分した物の内訳",
    b: "剪定した枝や刈った草をどれだけ持ち帰ったかは、作業量の記録でもあります。量や内容の報告があれば、次回依頼する際の目安になります。",
  },
];

const checklist = [
  {
    h: "敷地への立ち入り方法が決まっているか",
    b: "鍵、門扉、駐車場所について、誰がどのように開けるのかが決まっていないと、日程のみを確保しても当日作業を開始できません。",
  },
  {
    h: "連絡可能な時間帯を伝えたか",
    b: "遠方からの依頼では、業者からの確認連絡に対応できない時間帯が生じます。連絡可能な時間帯と、連絡がつかない場合の代わりの連絡先を事前に伝えておきます。",
  },
  {
    h: "写真報告の有無を確認したか",
    b: "作業前後の写真を受け取れるかどうかは、依頼を決める前に確認すべき項目です。後から依頼しても、着手前の写真は撮り直せません。",
  },
  {
    h: "判断を委ねる範囲を決めたか",
    b: "現場で判断が必要になった際、どこまでを業者の裁量に委ね、どこからは連絡して確認してもらうのかを決めます。この基準を伝えておくと、当日の作業の停滞を避けられます。",
  },
  {
    h: "書類の宛名と送付先を決めたか",
    b: "請求書や領収書の宛名と送付先の住所を決めます。現地に郵便物を送っても受け取れない場合があるため、依頼の段階で確定させておきます。",
  },
];

const faqs = [
  {
    q: "立ち会わずに庭の手入れを頼むことはできますか。",
    a: "作業そのものは立ち会いなしでも進められますが、敷地への立ち入り方法、作業前の状態の共有、報告の方法、支払いの手順といった取り決めが増えます。これらを依頼前に決めておけば、現地にいなくても進行状況を把握できます。対応の可否と条件は各社で異なるため、問い合わせ時にご確認ください。",
  },
  {
    q: "鍵を業者に預けても問題ありませんか。",
    a: "預ける場合は、受け渡しと返却の方法、預ける期間、紛失時の扱いまで確認したうえで判断してください。近隣に住む家族が立ち会える日程を優先する、施錠していない範囲のみで作業が完結するよう依頼内容を調整するといった代替案もあります。",
  },
  {
    q: "作業中に判断を求められたらどうすればよいですか。",
    a: "連絡可能な時間帯と、判断を委ねてよい範囲を事前に伝えておくことが現実的です。即答できない内容は、写真で報告してもらい、別日に改めて相談する形にしておくと、その場での判断を迫られずに済みます。",
  },
  {
    q: "仙台市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、仙台市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaSendaiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "現地に立ち会えないまま庭の手入れを依頼する際の段取りと、報告の決め方をまとめています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "仙台" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを依頼する所有者が、その住宅に住んでいるとは限りません。離れて暮らす実家の庭、しばらく使用していない住宅の植栽、家族が入院や転居で不在となっている間の管理などが該当します。
          仙台市内の住宅の庭を遠方から手配する場合も同様です。現地にいないまま依頼を進める場合、居住していれば当日その場で決められたことを、すべて事前に決めておく必要があります。
          本ページでは、立ち会えないことを前提に依頼を組み立てる手順を整理します。
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

      <section id="sendai-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          立ち会えない依頼では取り決めの数が増えます
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自宅の庭であれば、当日その場にいるだけで多くのことに対応できます。門を開け、作業の範囲を示し、迷った箇所は声をかけてもらい、作業完了後は一緒に確認します。
          立ち会えない依頼では、これらを一つずつ事前に決めて文書にしておくことになります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          難しいのは作業内容ではなく、作業に付随する手続きです。敷地に入れるか、連絡がつくか、作業の完了をどのように確認するかが課題となります。
          これらが決まっていれば、現地にいなくても依頼は成立します。決まっていないと、当日に作業が止まります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            問い合わせの最初に「現地に立ち会えません」と伝えておくと、その後の確認事項を業者側から提示してもらえます。
            伝えずに進めて後から伝えると、段取りの組み直しが必要になります。
          </p>
        </div>
      </section>

      <section id="sendai-steps" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          立ち会いなしで進める際の手順
        </h2>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{s.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="sendai-report" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          報告の形式を事前に決める
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          立ち会えない依頼では、報告がそのまま検収となります。何をどこまで報告してもらうかを依頼時に決めておけば、後から確認のやり取りを重ねずに済みます。
        </p>
        <div className="space-y-4">
          {reportPoints.map((p) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{p.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          長期間手入れされていない庭では、雑草の広がり方そのものが次の相談事項になります。対処方法の選び方は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="sendai-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、遠方から連絡を取りながら進めるという条件では、次の3サービスが連絡と条件確定の手段を把握しやすい構成です。
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

      <section id="sendai-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="仙台" />
      </section>

      <section id="sendai-checklist" className="scroll-mt-20 mb-12">
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

      <section id="sendai-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="sendai" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び方" },
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/review/", label: "掲載サービスの口コミ・評判まとめ" },
            { href: "/guide/grass-cutting/", label: "庭・空き地の草刈り｜刈る時期と回数の考え方" },
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
          敷地への立ち入り方法と報告の形式が決まったら、複数のサービスで進め方を比較することをおすすめします。
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
