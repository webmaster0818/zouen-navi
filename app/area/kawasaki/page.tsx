import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kawasaki/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "川崎の造園・庭の手入れ業者の選び方｜作業が終わった日の確認と手直しの頼み方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の作業は、終わった日にしか確認できないことがあります。川崎で庭の手入れを頼むとき、引き渡しの場で何を見て、気になったことをいつ・どう伝えるのかを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "引き渡しの場で見る点と、手直しを頼むときの伝え方から、川崎での造園業者の選び方を整理しました。",
  },
};

const toc = [
  { id: "kawasaki-point", label: "終わった直後にしか確認できないことがある" },
  { id: "kawasaki-inspect", label: "引き渡しの場で見る5つの点" },
  { id: "kawasaki-timing", label: "その場で言うか、後から言うか" },
  { id: "kawasaki-rework", label: "手直しを頼むときの伝え方" },
  { id: "kawasaki-pick", label: "この条件で見ておきたい3サービス" },
  { id: "kawasaki-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kawasaki-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kawasaki-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["oniwa-110", "oniwa-master", "kurashi-market"] as const;

const pickReasons: Record<string, string> = {
  "oniwa-110":
    "草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽などに対応する加盟店を紹介・手配するサービスで、運営は東証上場のシェアリングテクノロジー株式会社です。コールセンターが24時間365日受付し、請負賠償保険にも加入していると公表しています。作業を行うのは加盟店ですが、手配した側の窓口が別に残るため、終わったあとに連絡する先が二つある構成になります。料金は作業内容・状態により変わるため、現地調査・見積りで確認してから依頼してください。",
  "oniwa-master":
    "自社施工は行わず、要望に合う業者を無料で紹介する仕組みで、受付は24時間365日とされています。運営は株式会社アシストです。紹介型であるため、作業した会社とのやり取りが進まないときに、紹介元の窓口が残っているという点が効いてきます。公式掲載の口コミは過去分が中心のため、最新の対応の様子は見積もり時に確かめるのが確実です。",
  "kurashi-market":
    "地域の登録業者を検索して依頼する仕組みで、作業の完了後に利用者が口コミ・評価を投稿できます。評価が後から残る仕組みは、終わったあとのやり取りの扱いに関わってきます。損害賠償補償制度も用意されています。ただしキャンセル処理や業者の遅刻など、トラブル時の運営対応に不満を示す口コミもあります。何がその制度の対象になるのか、どこへ連絡するのかは、申し込む前に確認してください。",
};

const inspectPoints = [
  {
    h: "頼んだ作業が全部終わっているか",
    b: "最初に見るのは仕上がりの良し悪しではなく、抜けがないかどうかです。木を何本と数えて頼んだなら、その本数に手が入っているか。裏手や物置の陰は、見落とされやすく、こちらも確認を忘れやすい場所です。庭を一周して数を合わせるだけで足ります。",
  },
  {
    h: "切り口の状態",
    b: "太い枝を落とした跡は、当日なら白く新しい状態で見えます。裂けたまま残っていないか、幹に沿って深くえぐれていないか。この確認は後日でもできますが、切ったのがいつの作業かを特定しやすいのは当日です。気になる箇所があれば、その場で指して聞くのが最も早く済みます。",
  },
  {
    h: "残った枝葉と、持ち出したもの",
    b: "刈ったものをどこまで持ち帰る約束だったか。植え込みの中や側溝の上に落ちたままになっていないか。袋に詰めて置いていく取り決めなら、その袋がどこに何袋あるのかも見ておきます。処分の取り決めそのものは、依頼の段階で決める部分です。",
  },
  {
    h: "設備や外構に傷がないか",
    b: "室外機、水道の栓、照明、フェンス、植木鉢。脚立や機材が当たりやすい位置にあるものは、作業前と後で状態を見比べます。作業前に撮っておいた写真があると、この確認は一瞬で終わります。",
  },
  {
    h: "出入りに使った経路の状態",
    b: "通路や駐車場所、集合住宅なら共用部。運び出しの途中で落ちた葉や土が残っていないか。敷地の外まで含めてどこまで片づける約束だったかによって、見る範囲が変わります。",
  },
];

const timingPoints = [
  {
    h: "その場で言えることは、その場で言う",
    b: "抜けている作業、その日のうちに直せる片づけ、目に見える傷。これらは相手がまだ道具を持っている間に言うのが最も早く片づきます。後から連絡すれば、もう一度来てもらうことになります。言いにくさを理由に持ち越すと、手間が増えるのはお互いです。",
  },
  {
    h: "判断がつかないものは、保留にしてよい",
    b: "切りすぎではないか、形がこれでよいのか。こうした感覚の部分は、その場では判断がつかないことがあります。「少し見てから連絡します」と伝えておけば、後から言うための余地が残ります。何も言わずに見送ると、後から切り出しにくくなります。",
  },
  {
    h: "後になってから分かるものもある",
    b: "切り口からの枯れ込みや、残っていた枝の折れは、数週間から数か月後に見えてきます。作業当日に分かることではありません。いつまでなら相談に応じてもらえるのかを、終わる前に聞いておいてください。",
  },
  {
    h: "感想と、直してほしいことは分けて伝える",
    b: "「思ったより短いですね」は感想です。「この木をもう少し残してほしい」は依頼です。混ざったまま話すと、相手は受け取り方に迷います。直してほしいことがあるなら、そう言い切るほうが伝わります。",
  },
];

const reworkPoints = [
  {
    h: "どの木の、どの部分かを指して言う",
    b: "「全体的に」では相手が動けません。庭のどこの、どの木の、どのあたりか。指して伝えられれば、その場で手が入ることもあります。後日の連絡なら、写真を添えると同じ効果になります。",
  },
  {
    h: "どうなっていてほしいのかを言う",
    b: "「短すぎる」は状態の指摘です。切った枝は戻りません。伝えるべきは、これからどうしてほしいかのほうです。残っている部分をどう扱うか、次のときにどうするか。前を向いた言い方のほうが、話が進みます。",
  },
  {
    h: "頼んだ内容と照らして話す",
    b: "最初に何を頼んだのか。そことのずれであれば、手直しの根拠になります。逆に、頼んでいなかったことを後から求めるなら、それは追加の依頼です。この線引きを自分の中で持っておくと、話がこじれません。",
  },
  {
    h: "話がつかないときの連絡先を持っておく",
    b: "作業した相手と直接話して進まない場合、手配した窓口や紹介元に連絡する道があります。窓口と施工が分かれているサービスでは、この二段構えが使えます。誰に連絡すればよいのかは、依頼を決めた時点で把握しておいてください。",
  },
];

const checklist = [
  {
    h: "作業前の状態を写真に撮ったか",
    b: "庭全体と、機材が当たりそうな設備まわり。数枚で足ります。終わったあとの確認が早くなります。",
  },
  {
    h: "頼んだ作業を書き出してあるか",
    b: "口頭のやり取りだけだと、終わったときに何と照らせばよいのかが分かりません。手元に残る形にしておきます。",
  },
  {
    h: "引き渡しに立ち会えるか",
    b: "立ち会えるなら、その場で一周する時間を取ります。立ち会えない場合の進め方は仙台のページで扱っています。",
  },
  {
    h: "後から気づいたときの連絡先を聞いたか",
    b: "作業した相手の連絡先と、窓口の連絡先。両方あるかどうかを確認しておきます。",
  },
  {
    h: "いつまで相談できるかを聞いたか",
    b: "終わった直後には分からないこともあります。期間の目安があるかどうかは、終わる前に聞ける項目です。",
  },
];

const faqs = [
  {
    q: "作業が終わった直後に、何を見ればよいですか。",
    a: "まず、頼んだ作業に抜けがないかを庭を一周して確かめてください。仕上がりの良し悪しより先に、数と範囲の確認です。そのうえで、太い枝の切り口、残った枝葉、設備や外構の傷、運び出しに使った経路の状態を見ます。作業前に写真を撮っておくと、この確認は短時間で済みます。",
  },
  {
    q: "切りすぎだと感じたとき、その場で言うべきですか。",
    a: "感覚の部分は、その場で判断がつかないことがあります。無理に結論を出す必要はありませんが、「少し見てから連絡します」と伝えておいてください。何も言わずに見送ると、後から切り出しにくくなります。なお切った枝は戻らないため、伝える内容は残っている部分をどうするか、次のときにどうするかになります。",
  },
  {
    q: "後日になって枯れ込みが出た場合はどう扱われますか。",
    a: "切り口からの枯れ込みは、作業から時間が経ってから見えてくることがあります。原因が作業にあるのか、木の状態や地面側の条件によるものなのかは、見てもらわないと分かりません。まずは連絡して状態を見てもらってください。枝や葉の症状の見分け方は害虫と病気のページ、根のまわりの条件については水はけのページで扱っています。",
  },
  {
    q: "川崎市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、川崎市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKawasakiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "引き渡しの場で見る点と、手直しを頼むときの伝え方をまとめました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "川崎" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          業者選びの話は、たいてい依頼するところまでで終わります。けれども庭の作業でつまずきが出やすいのは、終わった日とその後です。
          作業車が走り去ったあとで抜けに気づく、数日してから切りすぎだったと思い始める、数か月後に枝先が枯れてくる。
          川崎で庭の手入れを頼む人に向けて、このページでは引き渡しの場で何を見るのか、気になったことをいつどう伝えるのかを整理します。
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

      <section id="kawasaki-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          終わった直後にしか確認できないことがある
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の作業には、時間が経つと分からなくなるものがあります。切り口は日が経てば色が変わり、いつ付いた傷なのかも曖昧になります。
          落ちた葉くずは風で散り、どこまで片づいていたのかが再現できなくなります。作業した人はその日で現場を離れ、次に来るのは早くても数日後です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          だからこそ、終わった日の数分が効きます。庭を一周して数を合わせ、気になる箇所を指して聞く。それだけで、後から言い出しにくくなる状況の大半は避けられます。
          特別な知識は要りません。必要なのは、何を頼んだのかを自分が覚えていることだけです。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            確認は、疑うための作業ではありません。頼んだことと、やってもらったことを突き合わせる作業です。
            相手にとっても、その場で聞いてもらうほうが後から連絡を受けるより手間が少なく済みます。
          </p>
        </div>
      </section>

      <section id="kawasaki-inspect" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          引き渡しの場で見る5つの点
        </h2>
        <ol className="space-y-4">
          {inspectPoints.map((p, i) => (
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          持ち帰りと置いていく分の取り決めは
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          、敷地の外まで含めた片づけの範囲は
          <Link href="/area/saitama/" className="text-primary underline underline-offset-2 mx-1">
            さいたまのページ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kawasaki-timing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          その場で言うか、後から言うか
        </h2>
        <div className="space-y-4">
          {timingPoints.map((t) => (
            <div key={t.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{t.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{t.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kawasaki-rework" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          手直しを頼むときの伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手直しの話は、切り出し方で進み方が変わります。感情を抑える必要はありませんが、相手が動ける形に整えるほうが結果は早く出ます。
        </p>
        <div className="space-y-4">
          {reworkPoints.map((r) => (
            <div key={r.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{r.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{r.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kawasaki-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、終わったあとの連絡先を確保しておきたいという条件で見ると、次の3つは窓口の構成が分かりやすい部類です。
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

      <section id="kawasaki-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="川崎" />
      </section>

      <section id="kawasaki-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <div className="space-y-4">
          {checklist.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kawasaki-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kawasaki" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/service/pruning/", label: "庭木の剪定費用と最適な時期" },
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
          終わったあとに誰へ連絡すればよいのか。この一点を確かめてから頼むだけで、後の話はずいぶん楽になります。
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
