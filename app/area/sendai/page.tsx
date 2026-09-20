import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/sendai/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "仙台の造園・庭の手入れ業者の選び方｜立ち会えない庭の頼み方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "離れて暮らす実家の庭や、普段使っていない家の植栽は、持ち主が現地に立ち会えないまま作業を頼むことになります。仙台で立ち会いなしの依頼を進めるときの敷地への立ち入り・報告・支払いの決め方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "現地に立ち会えないまま庭の手入れを頼むときの段取りという観点から、仙台での業者選びを整理しました。",
  },
};

const toc = [
  { id: "sendai-point", label: "立ち会えない依頼は「決め事」の数が増える" },
  { id: "sendai-steps", label: "立ち会いなしで進めるときの手順" },
  { id: "sendai-report", label: "報告のかたちを先に決める" },
  { id: "sendai-pick", label: "この条件で見ておきたい3サービス" },
  { id: "sendai-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "sendai-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "sendai-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-master", "kurashi-market", "epark"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-master":
    "受付は24時間365日で、自社施工はせず要望に合う業者を無料で紹介する形式です。遠方から連絡する場合、日中に電話をかけ直す余裕がないことも多いため、時間帯の制約が少ない窓口は相談の入口として使いやすくなります。",
  "kurashi-market":
    "作業内容ごとに料金が先に表示され、見積もりを取らずに依頼内容を確定できます。現地で立ち会って見積もりを受け取ることが難しい場合、条件が事前に固定される形式は判断がしやすい構成です。完了後に口コミを投稿でき、損害賠償補償制度も設けられています。",
  epark:
    "「植木屋・造園業者・庭師」のカテゴリから事業者を探せ、各事業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。電話で予約できる窓口のため、現地の状況を口頭で補いながら進めたいときに向きます。",
};

const steps = [
  {
    h: "誰が敷地に立ち入るのかを決める",
    b: "空き家や留守宅では、門扉や勝手口の開錠が最初の課題になります。近隣に住む家族が立ち会うのか、鍵を預けるのか、施錠していない場所から入ってもらうのか。鍵を預ける場合は、受け渡しと返却の方法まで含めて決めておきます。曖昧なまま日程だけ押さえると、当日に作業が始められません。",
  },
  {
    h: "水道と電源が使えるかを確認する",
    b: "長く使っていない家では、水道が止まっていたり、屋外コンセントが通電していなかったりします。道具の洗浄や清掃に使う想定があるかどうかは業者によって違うため、使えない前提で伝えておくほうが安全です。",
  },
  {
    h: "作業前の状態を写真で共有する",
    b: "最後に見たときと現況が違っていることは珍しくありません。近隣の家族に撮ってもらう、あるいは現地確認の際に撮影してもらうなどして、着手前の状態を双方で確認できる形にしておきます。",
  },
  {
    h: "近隣への連絡経路を決める",
    b: "留守宅の作業は、隣家にとっては突然始まる工事です。誰が事前に声をかけるのか、作業中に近隣から問い合わせがあったときに誰へ連絡するのかを決めておきます。持ち主の連絡先が現地にない状態は、トラブルが起きたときに時間を失います。",
  },
  {
    h: "支払いと書類の受け取り方法を決める",
    b: "現地で現金を渡せない以上、支払い方法と請求書・領収書の送付先は事前に決めておく必要があります。宛名を誰にするか（持ち主本人か、手続きを代行する家族か）も併せて確認します。",
  },
];

const reportPoints = [
  {
    h: "作業前後の写真をもらえるか",
    b: "立ち会えない依頼で唯一の確認手段が写真です。同じ角度で撮った作業前と作業後の写真がもらえるかどうかを、依頼を決める前に聞いておきます。対応していない場合、仕上がりの確認は次に現地へ行ったときまで持ち越しになります。",
  },
  {
    h: "作業できなかった箇所の報告があるか",
    b: "予定していた木に手を入れられなかった、途中で天候が崩れたといった事情は、その場にいなければ分かりません。やったことだけでなく、やらなかったこととその理由が報告に含まれるかを確認します。",
  },
  {
    h: "追加で見つかった問題の伝え方",
    b: "枯れている木があった、外壁に枝が触れていた、雨樋が詰まっていたなど、作業中に見つかる問題があります。その場で判断を求められても即答できないため、写真で報告してもらい、後日あらためて相談する流れにしておくと落ち着いて決められます。",
  },
  {
    h: "処分したものの内訳",
    b: "切った枝や刈った草をどれだけ持ち帰ったのかは、作業量の記録でもあります。量や内容の報告があると、次に頼むときの目安になります。",
  },
];

const checklist = [
  {
    h: "敷地への入り方が決まっているか",
    b: "鍵、門扉、駐車場所。誰がどう開けるのかが決まっていないと、日程だけ押さえても当日動けません。",
  },
  {
    h: "連絡がつく時間帯を伝えたか",
    b: "遠方からの依頼では、業者からの確認連絡に出られない時間が生まれます。連絡がつく時間帯と、つながらないときの代替の連絡先を先に渡しておきます。",
  },
  {
    h: "写真報告の有無を確認したか",
    b: "作業前後の写真がもらえるかどうかは、依頼を決める前に聞くべき項目です。後から頼むと、着手前の写真は撮り直せません。",
  },
  {
    h: "判断を委ねる範囲を決めたか",
    b: "現場で判断が必要になったとき、どこまでを業者の裁量に任せ、どこからは連絡して確認してもらうのか。この線引きを伝えておくと、当日の停滞を避けられます。",
  },
  {
    h: "書類の宛名と送付先を決めたか",
    b: "請求書や領収書の宛名、送り先の住所。現地に郵便物を送っても受け取れない場合があるため、依頼の段階で確定させておきます。",
  },
];

const faqs = [
  {
    q: "立ち会わずに庭の手入れを頼むことはできますか。",
    a: "作業そのものは立ち会いなしでも進められますが、敷地への入り方、作業前の状態の共有、報告の方法、支払いの手順という決め事が増えます。これらを依頼前に決めておけば、現地にいなくても進行を把握できます。対応の可否と条件は各社で異なるため、問い合わせ時に確認してください。",
  },
  {
    q: "鍵を業者に預けても問題ありませんか。",
    a: "預ける場合は、受け渡しと返却の方法、預かる期間、紛失時の扱いまで確認したうえで判断してください。近隣に住む家族が立ち会える日程を優先する、施錠していない範囲だけで作業が完結するよう依頼内容を調整するといった代替案もあります。",
  },
  {
    q: "作業中に判断を求められたらどうすればよいですか。",
    a: "連絡がつく時間帯と、判断を委ねてよい範囲を事前に伝えておくのが現実的です。即答できない内容は、写真で報告してもらい、別日にあらためて相談する形にしておくと、その場の判断を迫られずに済みます。",
  },
  {
    q: "仙台市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、仙台市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "現地に立ち会えないまま庭の手入れを依頼するときの段取りと報告の決め方をまとめました。",
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
          庭の手入れは、持ち主がその家に住んでいるとは限りません。離れて暮らす実家の庭、しばらく使っていない家の植栽、家族が入院や転居で不在になっている間の管理。
          仙台にある家の庭を遠方から手配する場合も、この形になります。現地にいないまま依頼を進めると、住んでいれば当日その場で決められたことを、すべて事前に決めておく必要が出てきます。
          このページでは、立ち会えない前提で依頼を組み立てる手順を整理します。
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
          立ち会えない依頼は「決め事」の数が増える
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自宅の庭であれば、当日その場にいるだけで多くのことが片づきます。門を開け、作業の範囲を指し示し、迷ったところは声をかけてもらい、終わったら一緒に見て確認する。
          立ち会えない依頼では、この一つひとつを事前に決めて文字にしておくことになります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          難しいのは作業内容ではなく、作業の外側にある手続きのほうです。敷地に入れるか、連絡がつくか、終わったことをどう確かめるか。
          ここが決まっていれば、現地にいなくても依頼は成立します。決まっていないと、当日になって作業が止まります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            問い合わせの最初の一言に「現地に立ち会えません」と入れておくと、そのあとの確認事項を業者側から出してもらえます。
            言わずに進めて後から伝えると、段取りの組み直しになります。
          </p>
        </div>
      </section>

      <section id="sendai-steps" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          立ち会いなしで進めるときの手順
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
          報告のかたちを先に決める
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          立ち会えない依頼では、報告がそのまま検収になります。何をどこまで報告してもらうのかを依頼時に決めておけば、後から確認のやり取りを重ねずに済みます。
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
          長く手が入っていない庭では、雑草の広がり方そのものが次の相談事になります。対処の選び分けは
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sendai-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、遠方から連絡を取りながら進めるという条件で見ると、次の3つは連絡と条件確定の手段が分かりやすい構成です。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び分け" },
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
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
          敷地への入り方と報告の形が決まったら、複数のサービスで進め方を比べてみてください。
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
