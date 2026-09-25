import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/sakai/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "堺の造園・庭の手入れ業者の選び方｜話がまとまらないときの記録の残し方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "作業の内容や金額で食い違いが出たとき、手元に何が残っているかで進み方が変わります。堺で庭の手入れを頼むときに残しておきたい記録、話が止まったときの進め方、外の窓口に相談するという選択を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "食い違いが起きたときの記録の残し方と進め方という観点から、堺での業者選びを整理しました。",
  },
};

const toc = [
  { id: "sakai-origin", label: "食い違いは「言った・言わない」から始まる" },
  { id: "sakai-records", label: "残しておくと効く4つの記録" },
  { id: "sakai-stalled", label: "話が止まったときの進め方" },
  { id: "sakai-outside", label: "外に相談するという選択" },
  { id: "sakai-prevent", label: "起こさないための先回り" },
  { id: "sakai-pick", label: "この条件で見ておきたい3サービス" },
  { id: "sakai-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "sakai-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "sakai-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "hikaku-biz", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "運営はシェアリングテクノロジー株式会社（東証上場・証券コード3989）で、全国47都道府県の加盟店を紹介・手配する形式です。受付は24時間365日。現地調査・見積りは無料（条件あり）と公表しており、請負賠償保険に加入しているとされています。紹介元の法人がはっきりしているため、施工者とは別に連絡できる先があります。",
  "hikaku-biz":
    "発注側は利用無料で、運営21年・登録事業者10万社超と公表されています。造園のほか門・塀・フェンス・デッキなどの区分も扱うため、作業がどの区分に当たるのかを整理してから相談したい場合に向きます。",
  "mitsumoa":
    "最大5件の見積もりを比較でき、チャットで業者と直接やり取りできます。条件の確認から合意までが文字として残るため、後から「どこまで頼んだのか」を自分で見返せます。見積もり依頼は無料です。",
};

const records = [
  {
    h: "依頼した内容が書かれた文面",
    b: "問い合わせフォームに書いた文章、送信したメッセージ、送った写真。電話だけで決めた場合は、通話のあとに「先ほどの件、こういう内容で合っていますか」と一通送っておくだけで、文面が生まれます。相手の確認が返ってくれば、それが合意の記録になります。",
  },
  {
    h: "金額が決まった時点のもの",
    b: "見積書、料金の表示画面、金額を書いた返信。後から金額の話になったとき、いつの時点でいくらだったのかが分かる形で残しておきます。見積書には有効期限が書かれていることがあるので、その日付も含めて保管します。",
  },
  {
    h: "作業前と作業後の、同じ角度の写真",
    b: "最も強い記録です。作業前に撮っておくことが要で、後からは撮り直せません。引きの写真と、気にしている木の寄りの写真を数枚。同じ位置から撮った前後の二枚があれば、言葉の説明が要らなくなります。",
  },
  {
    h: "やり取りの日付",
    b: "いつ問い合わせて、いつ返事が来て、いつ作業したのか。日付が分かるだけで、話の順番を再現できます。メモ書きでかまいません。記憶で並べ直すのは、思っているより難しい作業です。",
  },
];

const stalled = [
  {
    h: "同じ相手に、形を変えてもう一度出す",
    b: "口頭で言ったことが伝わっていない場合があります。写真を添えて、文字で、具体的にどこをどうしてほしいのかを書いて出し直します。「直してほしい」ではなく「この木のこの部分を、この状態にしてほしい」まで書きます。",
  },
  {
    h: "窓口と施工者が別なら、両方に伝える",
    b: "紹介型のサービスを通した場合、話す相手が二段になります。施工した側に伝えても動かないときは、紹介した窓口にも同じ内容を伝えます。どちらに言えばよいのかは、依頼の時点で確認しておくのが本来です。",
  },
  {
    h: "返事の期限を書いて送る",
    b: "いつまでに返事がほしいのかを書きます。期限のない依頼は後回しになりやすく、こちらもいつまで待つのかを決められないまま時間が過ぎます。",
  },
  {
    h: "それでも動かないときは、経緯を一枚にまとめる",
    b: "日付、伝えた内容、返ってきた答えを時系列で並べます。外の窓口に相談する場合も、この一枚があるかどうかで話の進み方が変わります。まとめる過程で、自分の側の抜けにも気づきます。",
  },
];

const outside = [
  {
    h: "住んでいる自治体の消費生活の相談窓口",
    b: "契約や取引に関する相談を受け付けている公的な窓口が各地に置かれています。具体的な名称と受付の方法は自治体によって違うため、お住まいの市区町村の案内で確認してください。相談する際は、経緯をまとめた一枚と、金額の分かる書面を手元に用意しておきます。",
  },
  {
    h: "サービス側に用意された問い合わせ先",
    b: "紹介型や仲介型のサービスでは、運営側に連絡できる窓口が設けられていることがあります。施工した相手と直接やり取りするのとは別の経路です。どこにその窓口があるのかは、依頼を決める前に見ておくと安心です。",
  },
  {
    h: "補償や保険が関わる場合",
    b: "作業中に物が壊れた、隣家に被害が及んだといった場合、誰の保険が適用されるのかという話になります。掲載サービスの中には、損害賠償補償制度を設けていると公表しているところや、請負賠償保険に加入していると公表しているところがあります。適用の条件と範囲は各社で異なるため、内容は各社に確認してください。",
  },
  {
    h: "記録がないと、どこに行っても進みにくい",
    b: "外の窓口に相談する場合でも、判断の材料になるのは記録です。口頭のやり取りしかない状態では、相談を受ける側も動きようがありません。だからこそ、揉めていない段階で残しておくことに意味があります。",
  },
];

const prevent = [
  {
    h: "口頭で決めたことを、その日のうちに文字にして返す",
    b: "電話で決めた内容を一通にまとめて送ります。「こういう理解で進めます」と書いて、相手が違えば訂正が返ってきます。この一往復が、後になって一番効きます。",
  },
  {
    h: "やらないことも書いておく",
    b: "「この木には触らない」「地面は掘らない」「この花は残す」。やることだけを書くと、やらないことは相手の解釈に委ねられます。範囲外を明示しておくのは、相手を縛るためではなく、判断させないためです。",
  },
  {
    h: "支払う時点を決めておく",
    b: "いつ払うのかが決まっていないと、作業に不満があったときに払う・払わないの話が先に立ってしまいます。支払いの時期と方法は、依頼を決める段階で確認しておく項目です。",
  },
];

const checklist = [
  {
    h: "依頼した内容が文字で残っているか",
    b: "電話だけで決めた場合は、そのあとに要点を一通送っておけば文面が生まれます。",
  },
  {
    h: "作業前の写真を撮ったか",
    b: "後から撮り直せない唯一の記録です。引きと寄りを数枚、同じ位置から撮れる角度で残します。",
  },
  {
    h: "金額が確定した時点の書面があるか",
    b: "見積書や料金の表示。有効期限の日付も含めて保管しておきます。",
  },
  {
    h: "施工者と窓口、両方の連絡先があるか",
    b: "紹介型では相手が二段になります。どちらに言えばよいかを依頼の時点で確認しておきます。",
  },
  {
    h: "補償や保険の有無を確認したか",
    b: "制度の有無と、適用の条件・範囲は各社で異なります。内容は各社に確認してください。",
  },
];

const faqs = [
  {
    q: "口約束だけで頼んでしまいました。今から残せるものはありますか。",
    a: "作業前であれば、まだできることがあります。「先日お話しした内容はこういう理解で合っていますか」と一通送っておけば、それが依頼内容の記録になります。あわせて、作業前の庭の写真を撮っておいてください。この二つがあるだけで、後の確認がかなり楽になります。",
  },
  {
    q: "作業前の写真を撮っていませんでした。ほかに方法はありますか。",
    a: "撮り直すことはできませんが、代わりになるものを探せる場合があります。以前に撮った家族の写真に庭が写っている、地図サービスの画像に外構が写っている、近隣の家族が撮った写真があるなど。どれも狙って撮ったものではないため万全ではありませんが、何もないよりは経緯を説明しやすくなります。",
  },
  {
    q: "作業内容が話と違うとき、支払いを止めてもよいですか。",
    a: "支払いを止めるかどうかは契約の内容によるため、一律には言えません。先にやることは、どこがどう違うのかを写真と文字で具体的に伝え、相手の言い分を聞くことです。手直しで解決する場合も少なくありません。それでも折り合わない場合は、経緯をまとめたうえで、お住まいの自治体の消費生活の相談窓口に相談するという選択があります。",
  },
  {
    q: "堺市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、堺市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaSakaiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "依頼の内容や金額で食い違いが出たときに効く記録の残し方と、話が止まったときの進め方を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "堺" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          ほとんどの依頼は問題なく終わります。ただ、まれに話が噛み合わなくなることがあります。頼んだつもりの作業が入っていない、聞いていた金額と違う、残すはずの木が短くなっている。こうなったとき、手元に何が残っているかで進み方が変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          堺にある家の庭で依頼する場合も、備え方は同じです。このページでは、揉めないための記録の取り方と、実際に食い違いが出たときに何をどの順で進めるのかを整理します。なお、ここで扱うのは一般的な進め方であり、個別の事案の法的な判断ではありません。
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

      <section id="sakai-origin" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          食い違いは「言った・言わない」から始まる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          揉めごとの多くは、悪意ではなく解釈の差から起きます。「短くしてください」がどのくらいなのか、「きれいにする」がどこまでなのか。同じ言葉を使っていても、頭の中の絵が違えば結果は違います。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そして、その差が表に出るのは作業が終わった後です。そこから「そう言っていない」「いや言った」の応酬になると、どちらが正しいかではなく、どちらが記録を持っているかの話になります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            記録を残すのは、相手を疑うためではありません。自分が何を頼んだのかを、あとから自分で確認できるようにするためです。頼んだ本人が覚えていない、というのは珍しくない話です。
          </p>
        </div>
      </section>

      <section id="sakai-records" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          残しておくと効く4つの記録
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          特別なことは要りません。どれも依頼の過程で自然に発生するもので、捨てずに取っておくかどうかの違いです。
        </p>
        <ol className="space-y-4">
          {records.map((x, i) => (
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
          作業前後の写真は、立ち会えない依頼では報告そのものになります。その決め方は
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会えない庭の頼み方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="sakai-stalled" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          話が止まったときの進め方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          伝えたのに動かない、という状態になったときの順番です。感情の強さを上げるより、形を変えるほうが動きます。
        </p>
        <div className="space-y-4">
          {stalled.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sakai-outside" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          外に相談するという選択
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          当事者どうしで折り合わないとき、相談できる先があります。使うかどうかは別として、選択肢として知っておくと、焦って不利な形で妥協せずに済みます。
        </p>
        <div className="space-y-4">
          {outside.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          高低差のある現場や、隣地に被害が及ぶ可能性のある作業での保険の確認のしかたは
          <Link href="/area/yokohama/" className="text-primary underline underline-offset-2 mx-1">
            高低差のある庭と保険・保証
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="sakai-prevent" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          起こさないための先回り
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          揉めてから記録を作ることはできません。依頼の過程でやっておける、手間の少ない先回りを挙げます。
        </p>
        <ol className="space-y-4">
          {prevent.map((x, i) => (
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
          支払いの時期や前払いの扱いは
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="sakai-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、やり取りが残る形かどうか、窓口がはっきりしているかという条件で見ると、次の3つは確認しやすい構成です。
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

      <section id="sakai-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="堺" />
      </section>

      <section id="sakai-checklist" className="scroll-mt-20 mb-12">
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

      <section id="sakai-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="sakai" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kawasaki/", label: "作業が終わった日の確認と手直しの頼み方" },
            { href: "/area/yokohama/", label: "高低差のある庭と保険・保証" },
            { href: "/area/kumamoto/", label: "支払いの方法と契約が決まる時点" },
            { href: "/content-policy/", label: "記事の制作ポリシー" },
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
          記録の残し方は、依頼する相手の形式によっても変わります。やり取りがどう残るのかも比べてみてください。
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
