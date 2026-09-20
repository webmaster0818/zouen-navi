import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kobe/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "神戸の造園・庭の手入れ業者の選び方｜見積書の読み方と書面の確認";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "複数社から見積もりを取っても、書き方が揃っていなければ比較になりません。神戸で庭木の剪定や庭の手入れを頼むときに、見積書のどの欄を読み、追加費用の条件をどう確かめるかを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "見積書の読み方と、契約前に書面で確かめる項目という観点から、神戸での造園業者の選び方を整理しました。",
  },
};

const toc = [
  { id: "kobe-point", label: "見積書は「金額」より先に「書いてある項目」を見る" },
  { id: "kobe-read", label: "見積書で確かめたい5つの欄" },
  { id: "kobe-extra", label: "追加が発生する条件を先に聞いておく" },
  { id: "kobe-visit", label: "飛び込みの訪問営業を受けたときの扱い" },
  { id: "kobe-pick", label: "この条件で見ておきたい3サービス" },
  { id: "kobe-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kobe-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kobe-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["hikaku-biz", "oniwa-110", "townlife"] as const;

const pickReasons: Record<string, string> = {
  "hikaku-biz":
    "発注側の利用が無料で、造園工事のほか門・塀・フェンス・デッキ・舗装・排水といった区分でも事業者を探せます。同じ条件を複数社に投げて、書面の書き方そのものを見比べたいときに使える窓口です。なお公式に掲載されているクチコミは末尾が省略表示で、全文は確認できません。",
  "oniwa-110":
    "現地調査・見積りが無料（条件あり）と公開されており、作業内容や庭の状態によって費用が変わるため現地で確認してから依頼するよう案内しています。書面を受け取る前提の流れが明示されている点を確認できます。運営は東証上場のシェアリングテクノロジーで、請負賠償保険への加入も公開されています。",
  townlife:
    "希望条件を入力すると複数社からプランと見積もりを取り寄せられます。図面や仕様を伴う計画を、手元に残る形で並べたいときに向きます。一方で「資料が届かない」という厳しい口コミもあり、連絡の状況は提携会社によって差があります。",
};

const readItems = [
  {
    h: "作業の対象と数量が書かれているか",
    b: "「庭木剪定 一式」とだけ書かれた見積書は、どの木に何本手を入れるのかが読み取れません。対象と数量が書かれていれば、作業後に範囲の認識違いが起きても、どちらの理解が書面に沿っていたかを確かめられます。",
  },
  {
    h: "作業の種類が分かれているか",
    b: "剪定、刈り込み、草刈り、除草、片づけは、それぞれ別の作業です。まとめて一行になっていると、どこを削れば依頼を軽くできるのかが判断できません。分かれていれば、予算や優先順位に合わせて相談する余地が残ります。",
  },
  {
    h: "切ったものの処分が含まれているか",
    b: "処分を含むのか、自分で出すのかは、書面のどこかに必ず反映されます。項目として立っていない場合、含まれていないのか、作業費に含んでいるのかを聞いて、答えを書面に残してもらいます。",
  },
  {
    h: "出張や駐車にかかる扱い",
    b: "現場までの移動や、近隣に駐車場所を確保する必要がある場合の扱いです。含む・含まないのどちらであっても、書いてあれば後で争点になりません。",
  },
  {
    h: "有効期限と、いつの条件か",
    b: "見積書には作成日と有効期限があります。相談から日が空くと、木の状態そのものが変わることもあります。期限が切れた書面をそのまま根拠にしないでください。",
  },
];

const extraCases = [
  {
    h: "現地で見えていなかったものが出てきた",
    b: "枝の内側が枯れていた、根元に廃材が埋まっていた、木の裏側が想定より茂っていた。こうした事情で作業量が変わることはあります。問題は増えること自体ではなく、増えたときに誰の承諾を取ってから進めるかが決まっていないことです。",
  },
  {
    h: "当日に依頼を追加した",
    b: "せっかく来てもらったのだからと、その場で別の木も頼む場面はよくあります。口頭で足した分は書面に残りません。追加分の扱いをどう記録するかを、その場で確認してください。",
  },
  {
    h: "天候で日程がずれた",
    b: "雨や強風で作業が延期になった場合の扱い、途中で中断した場合の扱いです。延期の連絡が誰からいつ来るのかも併せて聞いておきます。",
  },
  {
    h: "こちらの都合で取りやめた",
    b: "キャンセルをいつまでに伝えれば費用が発生しないのか。予約型のサービスでは規定が定められていることがあり、トラブル時の対応をめぐる口コミも見られます。申し込む前に規定を読んでおくのが確実です。",
  },
];

const visitPoints = [
  {
    h: "その場で契約しない",
    b: "「今日中なら」と急かされる形の契約は、条件を比べる時間を失わせます。庭木の作業は、翌日に回して困る種類のものがほとんどありません。持ち帰って検討すると伝えて構いません。",
  },
  {
    h: "会社名と所在地を確かめる",
    b: "名刺や書面に会社名、所在地、連絡先が記載されているかを確認します。造園ナビの一覧では、各サービスの運営会社と本社所在地を公開情報から確認して掲載しています。同じように、相手の実体を自分で確かめられるかどうかが判断材料になります。",
  },
  {
    h: "書面をもらってから判断する",
    b: "口頭の説明だけで進めると、後から内容を確かめる手立てがありません。作業内容と条件が書かれた書面を受け取り、別の窓口から取った見積もりと並べてから決めます。",
  },
  {
    h: "高所や伐採の提案は特に慎重に",
    b: "大きな木に関わる作業は、いったん進めると元に戻せません。その場の判断で決めず、複数の見方を聞いてください。",
  },
];

const checklist = [
  {
    h: "同じ条件で依頼したか",
    b: "対象・範囲・処分の扱いを揃えないまま複数社に頼むと、金額の差が何の差なのか分からなくなります。比較の前提は条件を揃えることです。",
  },
  {
    h: "一式表記の中身を聞いたか",
    b: "一式と書かれていても、中身を口頭で説明してもらい、その内容を書き足してもらうよう頼めます。断られる理由のない依頼です。",
  },
  {
    h: "追加が出たときの連絡先を決めたか",
    b: "作業中に増減が生じたとき、誰に連絡して承諾を取るのか。立ち会えない場合は特に、事前に決めておく必要があります。",
  },
  {
    h: "キャンセルと延期の規定を読んだか",
    b: "予約の取り消しや天候による延期の扱いは、申し込みの前に確認しておく項目です。",
  },
  {
    h: "書面を保管する形にしたか",
    b: "紙でもメールでも、後から読み返せる形で残します。やり取りが記録に残る窓口を選ぶこと自体が、確認のしやすさにつながります。",
  },
];

const faqs = [
  {
    q: "「一式」と書かれた見積書は避けるべきですか。",
    a: "一式表記そのものが問題というより、中身を確認できないまま契約することが問題です。どの木に、どの作業を、どこまで行うのかを口頭で説明してもらい、その内容を書面に反映してもらえるかどうかを見てください。説明を避ける相手であれば、それ自体が判断材料になります。",
  },
  {
    q: "見積もりは何社から取ればよいですか。",
    a: "社数そのものより、条件を揃えて比べられているかが重要です。同じ写真と同じ範囲を渡した書面が複数あれば、作業の考え方の違いが読み取れます。逆に条件がばらばらなら、何社集めても比較にはなりません。",
  },
  {
    q: "作業中に追加を提案されたら断れますか。",
    a: "断って構いません。その場で決められない場合は、写真を撮ってもらったうえで一度持ち帰り、別途相談する形にできます。承諾なしに作業を進められたと感じた場合に備えて、依頼時の書面を残しておいてください。",
  },
  {
    q: "神戸市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、神戸市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKobePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "見積書の読み方と、契約前に書面で確かめる項目を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "神戸" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを頼むとき、多くの人は複数社から見積もりを取ります。ところが手元に並んだ書面は、様式も、項目の分け方も、書かれている細かさもばらばらです。
          一方は木ごとに行が分かれ、もう一方は「庭木剪定 一式」の一行だけ。この二枚を並べても、比べているのは書き方の違いであって、作業の中身ではありません。
          神戸で業者を選ぶにあたって、このページでは書面をどう読み、契約の前に何を確かめるかに絞って整理します。
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

      <section id="kobe-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積書は「金額」より先に「書いてある項目」を見る
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          書面を受け取ると、どうしても合計の欄に目が行きます。しかし庭の作業は、現場の状態によって必要な手間が変わるため、合計だけを見ても何と何を比べているのかが分かりません。
          先に見るべきなのは、何がその書面に書かれているかです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          項目が分かれている書面は、あとから範囲を調整できます。どこを減らせば依頼を軽くできるのか、どこを足せば懸案が片づくのかが、書面の上で相談できるからです。
          逆に一行しかない書面では、相談の単位がありません。値引きの話にしかならず、作業の話にならないのはそのためです。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            比較のために必要なのは、社数ではなく条件の同一性です。同じ写真、同じ範囲、同じ処分の扱いを渡したうえで返ってきた書面だけが、並べる意味を持ちます。
          </p>
        </div>
      </section>

      <section id="kobe-read" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          見積書で確かめたい5つの欄
        </h2>
        <ol className="space-y-4">
          {readItems.map((r, i) => (
            <li key={r.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{r.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{r.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          作業ごとの費用の考え方そのものは
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          にまとめています。書面の読み方と併せて確認してください。
        </p>
      </section>

      <section id="kobe-extra" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          追加が発生する条件を先に聞いておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりの段階で確定できない部分は、どの現場にもあります。大切なのは、確定できないことを隠さず、どうなったときに何が変わるのかを先に共有しておくことです。
        </p>
        <div className="space-y-4">
          {extraCases.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kobe-visit" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          飛び込みの訪問営業を受けたときの扱い
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自分から探した相手ではなく、向こうから訪ねてきた相手に頼む場合、比較の手順が丸ごと抜け落ちます。
          断るべきだという話ではありませんが、比べていないという事実は自覚しておく必要があります。
        </p>
        <div className="space-y-4">
          {visitPoints.map((v) => (
            <div key={v.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{v.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kobe-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、書面を取り寄せて読み比べるという使い方に照らすと、次の3つは受け取り方の流れが分かりやすい構成です。
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

      <section id="kobe-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="神戸" />
      </section>

      <section id="kobe-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kobe-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kobe" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/cost/price/", label: "庭工事の料金相場" },
            { href: "/cost/pruning-price/", label: "庭木の剪定費用の相場" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
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
          読み比べる準備ができたら、同じ条件で複数のサービスに当たってみてください。
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
