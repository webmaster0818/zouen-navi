import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/saitama/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "さいたまの造園・庭の手入れ業者の選び方｜作業日の近隣への配慮と事前の段取り";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の作業は敷地の中で完結しません。音、飛散、車両、出入りの時間帯。さいたまで庭の手入れを頼むとき、隣近所に及ぶ範囲をどう見積もり、誰がどこまで伝えるのかを決める手順を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "作業日に隣近所へ及ぶ影響の見積もり方と、事前に伝える段取りの決め方から、さいたまでの造園業者の選び方を整理しました。",
  },
};

const toc = [
  { id: "saitama-point", label: "庭の作業は敷地の中で完結しない" },
  { id: "saitama-factors", label: "隣近所に及ぶ4つの要素" },
  { id: "saitama-notice", label: "事前に伝えるかどうかを、誰が決めるか" },
  { id: "saitama-road", label: "道路や共用部を使う場合の確認" },
  { id: "saitama-pick", label: "この条件で見ておきたい3サービス" },
  { id: "saitama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "saitama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "saitama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["kurashi-market", "mitsumoa", "smile-garden"] as const;

const pickReasons: Record<string, string> = {
  "kurashi-market":
    "地域の登録業者を検索して依頼する仕組みで、見積もりなしで料金が決まり、作業内容が標準化されているのが特徴です。何をどこまでやる作業なのかが申し込みの時点で決まっているため、当日どのくらいの規模の作業になるのかを自分で把握しやすく、隣近所への説明もしやすくなります。完了後に口コミを投稿でき、損害賠償補償制度も用意されています。一方でキャンセル処理や業者の遅刻など、トラブル時の運営対応に不満を示す口コミもあるため、予約条件とキャンセル規定は申し込み前に確認してください。",
  mitsumoa:
    "条件を入力すると複数業者から見積もりが届き、依頼後は業者とチャットで直接打ち合わせができます。駐車をどこにするか、何時から何時まで音が出るか、といった現場側の条件は電話で話すと記憶に残りにくい部分です。文字でやり取りできる窓口は、こうした細かい取り決めを残しておきたい場面に向いています。ただし実際の作業品質は届いた業者によるため、口コミと見積もり内容は個別に確認してください。",
  "smile-garden":
    "庭木1本の剪定から年間管理まで扱う庭手入れ専門の全国チェーンで、完全自店舗施工を掲げています。窓口と作業者が同じ組織であるため、当日誰が来るのかを事前に把握しやすい構成です。公式では庭師経験10年以上のスタッフが9割以上と自社調べの数値を公表しています。ただし全国対応をうたう一方で公式に列挙される対応都道府県は限られるため、対象かどうかは確認が必要です。",
};

const factors = [
  {
    h: "音が出る時間と、その長さ",
    b: "刈り込みや草刈りで機械を使えば音が出ます。問題になりやすいのは音の大きさそのものより、いつ始まっていつ終わるかが分からないことです。朝の何時から始めるのか、昼をまたぐのか、連続して鳴り続けるのか。この見通しが立てば、隣の家も予定を組めます。",
  },
  {
    h: "飛ぶもの、落ちるもの",
    b: "刈った草や細かい葉、土ぼこりは、風があれば敷地の外に出ます。洗濯物、駐車中の車、隣の家の窓。風下に何があるかで、影響の出方が変わります。作業の向きや養生でどこまで抑えられるかは、現地を見てもらうときに確認できる項目です。",
  },
  {
    h: "車両をどこに置くか",
    b: "作業車と、切ったものを積む車。敷地の中に入れられるのか、前の道に止めることになるのか。止める場所が決まっていないまま当日を迎えると、その場で近隣とやり取りすることになります。敷地内に置ける場所があるなら、事前に伝えておくのが確実です。",
  },
  {
    h: "人の出入りと、在宅の時間帯",
    b: "作業の間、人が敷地を出入りします。集合住宅なら共用部を通ります。隣家の窓の近くで脚立を立てる場面もあります。誰の視線が入る位置で作業するのかは、庭の形によって変わります。気になる位置があるなら、先に言っておけば配慮の余地が生まれます。",
  },
];

const noticePoints = [
  {
    h: "業者側が挨拶するのか、自分がするのか",
    b: "近隣への事前の挨拶を作業前に行う会社もあれば、行わない会社もあります。どちらが正しいというものではなく、決まっていないまま当日になることが問題です。どちらがやるのかを、依頼を決める段階で確認しておきます。",
  },
  {
    h: "誰に伝えるかを絞る",
    b: "全戸に伝える必要はありません。音が届く範囲、飛ぶものが向かう範囲、車が止まる前の家。この三つで考えると、伝える相手はおおむね決まります。範囲を広げすぎると準備が重くなり、結局やらずじまいになります。",
  },
  {
    h: "伝える内容は三つで足りる",
    b: "いつやるか、どのくらいの時間か、何の作業か。この三つがあれば、受け取る側は予定を立てられます。細かい工法の説明は要りません。長く話すことより、日付が正確であることのほうが役に立ちます。",
  },
  {
    h: "日程が動く可能性も添える",
    b: "庭の作業は天候で動きます。「雨なら別の日になります」と一言添えておくだけで、日が変わったときの説明が要らなくなります。日程が動いたときの扱いについては、北九州のページで詳しく整理しています。",
  },
];

const roadPoints = [
  {
    h: "前面道路を作業に使う必要があるか",
    b: "敷地の中に車を入れられない場合、道路に止めて作業することになります。道路の使い方によっては手続きが必要になる場面があり、誰がその手配をするのかは会社によって扱いが違います。現地を見てもらう段階で、どこに車を置く想定かを聞いておいてください。",
  },
  {
    h: "集合住宅なら管理側の了解が要る",
    b: "マンションや賃貸の専用庭では、共用部を通る作業に管理組合や管理会社の了解が必要なことがあります。誰に申請するのか、どのくらい前までに出すのかは物件ごとに違います。所有形態によって窓口が変わる点は、大阪のページで整理しています。",
  },
  {
    h: "隣地に入る必要があるかを確かめる",
    b: "塀ぎわの木を切るとき、隣の敷地に足を入れないと作業できない場合があります。入るなら、その了解は事前に要ります。境界をまたぐ枝の扱いそのものについては、越境した枝と根のページで扱っています。",
  },
  {
    h: "作業後の道路の状態を決めておく",
    b: "切ったものを運び出したあと、道路に葉くずが残ることがあります。どこまで掃いて終わりにするのかは、作業範囲の話として先に決められます。決めていないと、残ったものを自分で片づけることになります。",
  },
];

const checklist = [
  {
    h: "音が出る時間帯の希望を伝えたか",
    b: "この時間から始めてほしい、この時間には終えてほしい。希望があるなら、日程を決める前に言っておきます。",
  },
  {
    h: "車をどこに置くか決まっているか",
    b: "敷地内に置けるのか、前の道になるのか。現地確認の場で決めておけば、当日その場で探すことがなくなります。",
  },
  {
    h: "近隣への挨拶をどちらがやるか決めたか",
    b: "業者がやるのか、自分がやるのか。決めていないと、どちらもやらないまま当日を迎えます。",
  },
  {
    h: "飛散を抑える手当てを聞いたか",
    b: "養生をするのか、風の向きを見て順番を変えるのか。できることは現場によって違います。気になる方角があるなら伝えます。",
  },
  {
    h: "作業後にどこまで片づけるか確認したか",
    b: "敷地の中だけか、前の道路も含むのか。範囲の線引きは、依頼内容として決められます。",
  },
];

const faqs = [
  {
    q: "近隣への挨拶は、こちらからしたほうがよいですか。",
    a: "業者が行う場合もありますが、依頼した側が一声かけておくほうが、後の話が早くなることは多いです。伝える内容は、日付とおおよその時間、何の作業かの三つで足ります。範囲は、音が届く家、風下にあたる家、車を止める前の家を目安にしてください。",
  },
  {
    q: "作業中に隣の家から苦情が出たらどうなりますか。",
    a: "その場での対応は業者が行うことが一般的ですが、依頼した側が不在だと話が止まることがあります。連絡が取れる状態にしておくか、立ち会えない場合は判断をどこまで任せるかを先に決めておいてください。立ち会えないときの進め方は仙台のページで整理しています。",
  },
  {
    q: "隣家の車に葉くずが飛んだ場合はどう扱われますか。",
    a: "作業に伴う損害の扱いは、加入している保険や補償の仕組みによって変わります。掲載サービスの中には請負賠償保険への加入や損害賠償補償制度を公表しているところがあります。何がどこまで対象になるかは各社の規定によるため、依頼前に確認してください。補償の確認のしかたは横浜のページで扱っています。",
  },
  {
    q: "さいたま市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、さいたま市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaSaitamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "作業日に隣近所へ及ぶ影響の見積もり方と、事前に伝える段取りの決め方をまとめました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "さいたま" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを頼むとき、考えるのは自分の庭のことです。けれども作業が始まれば、音は隣に届き、刈ったものは風で飛び、車は前の道に止まります。
          庭の作業は、敷地の中だけで完結しません。ここを見落としたまま当日を迎えると、庭はきれいになったのに近所との関係だけが気まずくなる、ということが起こります。
          さいたまで庭の手入れを頼む人に向けて、このページでは敷地の外に及ぶ範囲をどう見積もり、誰がどこまで段取りするのかを整理します。
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

      <section id="saitama-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭の作業は敷地の中で完結しない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          室内のリフォームであれば、影響は建物の中に収まります。庭の作業はそうなりません。
          屋外で機械を動かし、切ったものを外に運び出し、そのための車を止める。どの工程も、境界の向こう側から見える場所で行われます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          住宅が近接して並ぶ地域では、この影響が重なりやすくなります。隣の家の窓のすぐ向こうで脚立を立てることもあれば、
          前の道が狭くて車を止めれば通行の邪魔になることもあります。庭の広さや木の本数ではなく、まわりとの距離が段取りを決める、という場面です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            構えて準備することではありません。いつ・どのくらい・何をするのかが分かっていれば、伝えるべきことは自然に決まります。
            逆に、依頼した側がその見通しを持っていないと、伝えようがありません。段取りの確認は、近隣対応の前段として意味を持ちます。
          </p>
        </div>
      </section>

      <section id="saitama-factors" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          隣近所に及ぶ4つの要素
        </h2>
        <ol className="space-y-4">
          {factors.map((f, i) => (
            <li key={f.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{f.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{f.b}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          このうち「飛ぶもの・落ちるもの」の量は、切ったあとの処分方法とも関係します。持ち帰ってもらうのか、自分で出すのかによって、
          敷地の中に置いておく時間が変わるためです。処分の決め方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="saitama-notice" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          事前に伝えるかどうかを、誰が決めるか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          近隣への事前連絡は、やる・やらないの二択ではありません。誰が、どこまでの範囲に、何を伝えるのか。
          この三つが決まっていれば十分で、決まっていなければ、たいてい誰もやりません。
        </p>
        <div className="space-y-4">
          {noticePoints.map((n) => (
            <div key={n.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{n.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{n.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="saitama-road" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          道路や共用部を使う場合の確認
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          敷地の中だけで作業が終わらない場合、自分の判断だけでは決められない部分が出てきます。どこに誰の了解が要るのかを、先に切り分けておきます。
        </p>
        <div className="space-y-4">
          {roadPoints.map((r) => (
            <div key={r.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{r.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{r.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          越境した枝や根そのものの扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で、所有形態ごとの窓口の違いは
          <Link href="/area/osaka/" className="text-primary underline underline-offset-2 mx-1">
            大阪のページ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="saitama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、当日の段取りを事前に詰めておきたいという条件で見ると、次の3つは決め事を残しやすい構成です。
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

      <section id="saitama-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="さいたま" />
      </section>

      <section id="saitama-checklist" className="scroll-mt-20 mb-12">
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

      <section id="saitama-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="saitama" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/service/pruning/", label: "庭木の剪定費用と最適な時期" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
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
          当日の段取りが見えていれば、伝えるべきことも自然に決まります。まずは現地を見てもらう段階で確認してみてください。
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
