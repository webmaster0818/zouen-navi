import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kumamoto/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "熊本の造園・庭の手入れ業者の選び方｜支払いの方法と契約が決まる時点";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "見積もりをもらった時点では、まだ決まっていません。前払いか後払いか、使える支払い方法、宛名、そして払う前に見ること。熊本で庭の手入れを頼むときの支払いまわりの確認点を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "支払いの方法と、依頼が確定する時点という観点から、熊本での業者選びを整理しました。",
  },
};

const toc = [
  { id: "kumamoto-point", label: "見積もりを受け取った時点では、まだ決まっていない" },
  { id: "kumamoto-how", label: "支払いの形を先に聞く" },
  { id: "kumamoto-prepay", label: "前払いを求められたときの見方" },
  { id: "kumamoto-before", label: "払う前に、もう一度見ること" },
  { id: "kumamoto-recurring", label: "続けて頼むときの支払いの組み方" },
  { id: "kumamoto-pick", label: "この条件で見ておきたい3サービス" },
  { id: "kumamoto-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kumamoto-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kumamoto-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["kurashi-market", "townlife", "oniwa-110"] as const;

const pickReasons: Record<string, string> = {
  "kurashi-market":
    "作業内容ごとに料金が先に表示され、見積もりを取らずに依頼内容を確定できます。金額が確定してから依頼する形のため、当日に金額の話が発生しにくい構成です。完了後に口コミを投稿でき、損害賠償補償制度も設けられています。",
  "townlife":
    "希望条件を入力すると、複数社からプランと見積もりを無料で取り寄せられます。プラン請求・見積もりは無料と公表されているため、検討の段階で費用が発生しない範囲がはっきりしています。",
  "oniwa-110":
    "現地調査・見積りは無料（条件あり）と公表されています。「条件あり」と明記されている点は、どこまでが無料なのかを問い合わせ時に確認する手がかりになります。運営はシェアリングテクノロジー株式会社（東証上場・証券コード3989）で、請負賠償保険に加入しているとされています。",
};

const payHow = [
  {
    h: "前払いか、後払いか",
    b: "作業前に払うのか、終わってから払うのか、着手時に一部で残りが後なのか。形は相手によって違います。どれが正しいという話ではなく、知らないまま当日を迎えないことが要点です。",
  },
  {
    h: "使える支払い方法",
    b: "現金だけなのか、振込が使えるのか、カードや電子的な決済に対応しているのか。その場で現金を求められる形なら、事前に用意しておく必要があります。振込の場合は、いつまでに振り込むのかも聞いておきます。",
  },
  {
    h: "請求書と領収書の宛名",
    b: "誰の名前で出してもらうか。手配した人と支払う人が違う場合、ここが決まっていないと出し直しになります。送り先の住所も、作業した家とは別になることがあります。",
  },
  {
    h: "支払いの期日",
    b: "後払いの場合、いつまでに払うのかを確認します。書面に書かれていることが多い項目ですが、口頭だけで済ませると、双方の想定がずれます。",
  },
];

const prepay = [
  {
    h: "何に対する前払いか",
    b: "材料を先に仕入れる、機材を手配する、といった理由があるのか。理由を聞いても差し支えのない質問です。答えが返ってこない、話をそらされるという反応のほうが、金額そのものより気になる材料になります。",
  },
  {
    h: "全額か、一部か",
    b: "着手金として一部を先に、という形はよくあります。作業前に全額というのは、内容によっては確認が要ります。その場合、終わらなかったときにどうなるのかを聞いておきます。",
  },
  {
    h: "書面が伴っているか",
    b: "金額、作業の範囲、日程、支払いの条件が書かれたものがあるか。前払いを求める側であれば、書面を出すこと自体は難しくないはずです。書面がないまま先に払うのは、記録が何も残らない形になります。",
  },
  {
    h: "急がされている場合は、いったん止める",
    b: "「今日中でないとこの金額にならない」という進め方は、検討する時間を削る目的の場合があります。検討したいと伝えて、それで話が壊れるなら、その相手とはどのみち先に進みません。",
  },
];

const beforePay = [
  {
    h: "頼んだ範囲が終わっているか",
    b: "依頼したときの文面と照らします。本数、場所、作業の種類。手が入っていない箇所があれば、この時点なら道具がまだ出ています。",
  },
  {
    h: "追加が出ているなら、その内訳",
    b: "当日に増えた作業がある場合、何がいくら増えたのかを金額の内訳として見ます。「追加分」とだけ書かれている場合は、中身を聞きます。",
  },
  {
    h: "処分の扱いが合っているか",
    b: "切ったものを持ち帰る前提だったか、置いていく前提だったか。持ち帰りが含まれていない場合、後から自分で出すことになります。その手間と費用は自分の側に残ります。",
  },
  {
    h: "日付と宛名",
    b: "領収書の日付、宛名、但し書き。その場で確認しておけば直してもらえますが、後から言うと再発行の手間になります。",
  },
];

const recurring = [
  {
    h: "都度払いか、まとめた契約か",
    b: "作業のたびに払う形と、年間の管理として先に取り決める形があります。掲載サービスの中には、年間メンテナンスのプランを設けているところがあります。どちらが合うかは、頼む回数と、内容が毎回変わるかどうかで決まります。",
  },
  {
    h: "途中でやめるときの扱い",
    b: "まとめた契約にする場合、途中で終わりにしたくなったときどうなるのかを先に聞いておきます。引っ越す、家を手放す、自分でやれるようになるなど、途中でやめる理由は普通に発生します。",
  },
  {
    h: "条件が変わるときの伝わり方",
    b: "金額や内容が改定されるとき、どう知らされるのか。自動で続く形の場合、気づかないまま条件が変わっていることがあります。書面のどこに書かれているかを見ておきます。",
  },
];

const checklist = [
  {
    h: "支払いの時期を聞いたか",
    b: "前払いか後払いか、一部か全額か。当日になって知る項目ではありません。",
  },
  {
    h: "使える支払い方法を確認したか",
    b: "現金だけなのか、振込やそれ以外が使えるのか。現金が要るなら事前に用意します。",
  },
  {
    h: "宛名と送り先を決めたか",
    b: "手配した人と支払う人が違う場合、請求書と領収書の宛名を先に決めておきます。",
  },
  {
    h: "前払いなら、その理由と書面を確認したか",
    b: "何に対する前払いかを聞き、金額と範囲が書かれたものをもらってから払います。",
  },
  {
    h: "払う前に、頼んだ範囲を見たか",
    b: "支払いは内容を確認したという合図にもなります。道具が出ているうちに一度見ておきます。",
  },
];

const faqs = [
  {
    q: "見積もりをもらった後に断ってもよいですか。",
    a: "見積もりは提示であって、受け取っただけでは依頼にはなりません。断ること自体に問題はありません。検討に時間がかかりそうな場合は、その旨を伝えて有効期限の目安を聞いておくと、出し直しの手間を避けられます。断るときは短く、決めた日のうちに連絡するのが双方にとって楽な形です。",
  },
  {
    q: "作業前に全額の前払いを求められました。応じるべきですか。",
    a: "前払いという形自体は珍しくありませんが、作業前に全額という場合は、何に対する前払いなのかを聞いてください。あわせて、金額・作業の範囲・日程・支払いの条件が書かれた書面をもらってから判断します。書面がなく、その日のうちに決めるよう急がされる進め方であれば、いったん止めて検討する時間を取ってください。",
  },
  {
    q: "現金しか使えないと言われることはありますか。",
    a: "あり得ます。支払い方法は相手によって違い、現金のみという形も残っています。その場合、作業当日に手元に用意しておく必要があるため、日程を決める段階で確認しておいてください。金額が当日に変わる可能性があるかどうかも、あわせて聞いておくと安心です。",
  },
  {
    q: "熊本市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、熊本市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKumamotoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭の手入れを頼むときの支払い方法の確認点と、払う前に見ておくことを整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "熊本" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れは、多くの場合その日のうちに終わります。そのぶん、支払いの話が後回しになりがちです。作業が終わってから「では、お支払いは」と言われて、現金が手元にない、金額が思っていたのと違う、領収書の宛名をどうするか決めていない。どれもその場で慌てる類のものです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          熊本にある家の庭で頼む場合も同じです。このページでは、いつ依頼が確定するのか、どう払うのか、そして払う前に何を見るのかを整理します。なお、ここで扱うのは一般的な確認の進め方であり、個別の契約の法的な解釈ではありません。
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

      <section id="kumamoto-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積もりを受け取った時点では、まだ決まっていない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりは、こういう内容でこの金額になりますという提示です。受け取っただけでは依頼にはなりません。こちらが「お願いします」と返し、相手が受けた時点で話が動き始めます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          問題になりやすいのは、その境目が曖昧なまま進む場合です。現地を見てもらって、雑談の流れで日程まで決まって、でも金額の書いたものはもらっていない。この状態は、どちらの側からも「決まった」と言える形になっていません。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            決める前に「いま検討中です」と言っておくのは、失礼でも何でもありません。逆に、決めたのであれば「お願いします」とはっきり伝えます。曖昧なまま日程だけ押さえるのが、後で一番こじれます。
          </p>
        </div>
      </section>

      <section id="kumamoto-how" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          支払いの形を先に聞く
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          四つ聞けば足ります。どれも作業が終わる前に確認できます。
        </p>
        <ol className="space-y-4">
          {payHow.map((x, i) => (
            <li key={x.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{x.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          支払う人と手配する人が家族の中で分かれている場合の整理は
          <Link href="/area/niigata/" className="text-primary underline underline-offset-2 mx-1">
            家族で持つ庭を誰が決めて誰が払うか
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kumamoto-prepay" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          前払いを求められたときの見方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          前払いそのものは珍しい形ではありません。見るのは、何に対する前払いで、根拠が書かれているかです。
        </p>
        <div className="space-y-4">
          {prepay.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          書面のどの欄を見るかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で、やり取りを記録に残す方法は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            話がまとまらないときの記録の残し方
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="kumamoto-before" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          払う前に、もう一度見ること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          支払いは、内容を確認したという合図にもなります。払ってしまうと、後から言うのは難しくなります。
        </p>
        <div className="space-y-4">
          {beforePay.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          切ったものを自分で出す場合の方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="kumamoto-recurring" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          続けて頼むときの支払いの組み方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一回きりではなく、年に何度か続けて頼む場合、支払いの形も一回ごとの依頼とは違ってきます。
        </p>
        <ol className="space-y-4">
          {recurring.map((x, i) => (
            <li key={x.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{x.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          同じ相手に続けて任せるための条件は
          <Link href="/area/kyoto/" className="text-primary underline underline-offset-2 mx-1">
            仕上がりの方針と継続管理
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kumamoto-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、費用が発生する範囲が事前にどこまで分かるかという条件で見ると、次の3つは確認しやすい構成です。
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

      <section id="kumamoto-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="熊本" />
      </section>

      <section id="kumamoto-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kumamoto-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kumamoto" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/sakai/", label: "話がまとまらないときの記録の残し方" },
            { href: "/area/kyoto/", label: "仕上がりの方針と継続管理" },
            { href: "/cost/price/", label: "庭工事の料金相場" },
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
          支払いの形は会社ごとに違います。問い合わせの段階で、時期と方法を聞いておいてください。
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
