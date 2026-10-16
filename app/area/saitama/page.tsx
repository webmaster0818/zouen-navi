import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
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
    "庭の作業は敷地内だけでは完結しません。作業音、飛散物、車両、人の出入りの時間帯など、さいたまで庭の手入れを依頼する際に近隣に及ぶ影響の範囲を見積もり、誰がどこまで伝えるかを決める手順を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "作業日に近隣へ及ぶ影響の見積もり方と、事前に伝える段取りの決め方という観点から、さいたまでの造園業者の選び方を整理しています。",
  },
};

const toc = [
  { id: "saitama-point", label: "庭の作業は敷地内だけでは完結しません" },
  { id: "saitama-factors", label: "近隣に影響する4つの要素" },
  { id: "saitama-notice", label: "事前に伝えるかどうかの判断者" },
  { id: "saitama-road", label: "道路や共用部を使用する場合の確認事項" },
  { id: "saitama-pick", label: "この条件に適した3サービス" },
  { id: "saitama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "saitama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "saitama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["kurashi-market", "mitsumoa", "smile-garden"] as const;

const pickReasons: Record<string, string> = {
  "kurashi-market":
    "地域の登録業者を検索して依頼する仕組みで、見積もりなしで料金が決まり、作業内容が標準化されている点が特徴です。作業内容と範囲が申し込みの時点で決まっているため、当日の作業規模を依頼者が把握しやすく、近隣への説明も容易になります。完了後に口コミを投稿でき、損害賠償補償制度も用意されています。一方で、キャンセル処理や業者の遅刻など、トラブル時の運営対応に不満を示す口コミもあるため、予約条件とキャンセル規定は申し込み前にご確認ください。",
  mitsumoa:
    "条件を入力すると複数業者から見積もりが届き、依頼後は業者とチャットで直接打ち合わせができます。駐車場所や作業音が出る時間帯といった現場側の条件は、電話で話すと記録に残りにくい部分です。文字でやり取りできる窓口は、こうした詳細な取り決めを記録しておきたい場面に適しています。ただし、実際の作業品質は見積もりを提示した業者により異なるため、口コミと見積もりの内容は個別にご確認ください。",
  "smile-garden":
    "庭木1本の剪定から年間管理まで扱う庭の手入れ専門の全国チェーンで、完全自店舗施工を掲げています。窓口と作業者が同じ組織であるため、当日の作業者を事前に把握しやすい構成です。公式サイトでは、庭師経験10年以上のスタッフが9割以上と自社調べの数値を公表しています。ただし、全国対応を掲げる一方で公式サイトに列挙されている対応都道府県は限られるため、対象地域かどうかの確認が必要です。",
};

const factors = [
  {
    h: "作業音が出る時間帯と長さ",
    b: "刈り込みや草刈りで機械を使用すると作業音が出ます。問題になりやすいのは音の大きさそのものより、いつ始まりいつ終わるかが分からないことです。何時から始めるのか、昼をまたぐのか、継続して音が出るのかの見通しが立てば、近隣の方も予定を組めます。",
  },
  {
    h: "飛散物・落下物",
    b: "刈った草や細かい葉、土ぼこりは、風があれば敷地外に飛散します。洗濯物、駐車中の車、隣家の窓など、風下に何があるかによって影響の出方が変わります。作業の向きや養生でどこまで抑えられるかは、現地確認の際に確認できる項目です。",
  },
  {
    h: "車両の駐車場所",
    b: "作業車と、剪定した枝を積む車について、敷地内に駐車できるのか、前面道路に停めることになるのかを確認します。駐車場所が決まっていないまま当日を迎えると、その場で近隣とやり取りすることになります。敷地内に駐車できる場所があれば、事前に伝えておくことが確実です。",
  },
  {
    h: "人の出入りと在宅の時間帯",
    b: "作業中は人が敷地を出入りし、集合住宅であれば共用部を通行します。隣家の窓の近くで脚立を立てる場面もあります。どの位置で作業すると近隣の視線に入るかは、庭の形状によって異なります。気になる位置があれば、事前に伝えておくと配慮を得られる可能性があります。",
  },
];

const noticePoints = [
  {
    h: "業者が挨拶するのか、依頼者が行うのか",
    b: "作業前に近隣への挨拶を行う会社もあれば、行わない会社もあります。どちらが正しいというものではなく、決まっていないまま当日を迎えることが問題です。どちらが行うのかを、依頼を決める段階で確認しておきます。",
  },
  {
    h: "伝える相手を絞る",
    b: "全戸に伝える必要はありません。作業音が届く範囲、飛散物が向かう範囲、車両を停める前の住宅の三つを基準にすると、伝える相手はおおむね決まります。範囲を広げすぎると準備の負担が大きくなり、結局実施されないことになります。",
  },
  {
    h: "伝える内容は三点で十分です",
    b: "いつ行うか、どの程度の時間か、何の作業かの三点があれば、受け取る側は予定を立てられます。詳細な作業方法の説明は必要ありません。長く説明することより、日付が正確であることのほうが重要です。",
  },
  {
    h: "日程が変更になる可能性も伝える",
    b: "庭の作業は天候によって日程が変わります。「雨天の場合は別の日になります」と一言添えておくだけで、日程が変わった際の説明が不要になります。日程が変更になった場合の扱いについては、北九州のページで解説しています。",
  },
];

const roadPoints = [
  {
    h: "前面道路を作業に使用する必要があるか",
    b: "敷地内に車両を入れられない場合は、道路に停めて作業することになります。道路の使用方法によっては手続きが必要となる場合があり、誰がその手配を行うかは会社によって扱いが異なります。現地確認の段階で、車両の駐車位置の想定を確認しておいてください。",
  },
  {
    h: "集合住宅では管理者の了承が必要です",
    b: "マンションや賃貸の専用庭では、共用部を通る作業に管理組合や管理会社の了承が必要な場合があります。申請先や申請期限は物件ごとに異なります。所有形態によって窓口が変わる点は、大阪のページで解説しています。",
  },
  {
    h: "隣地に立ち入る必要があるかを確認する",
    b: "塀際の木を剪定する際、隣地に立ち入らなければ作業できない場合があります。立ち入る場合は、事前に了承を得る必要があります。境界を越える枝の扱いについては、越境した枝と根のページで解説しています。",
  },
  {
    h: "作業後の道路の清掃範囲を決めておく",
    b: "剪定した枝を搬出した後、道路に葉くずが残ることがあります。どこまで清掃するかは、作業範囲として事前に決められます。決めていないと、残ったものを依頼者が片づけることになります。",
  },
];

const checklist = [
  {
    h: "作業音が出る時間帯の希望を伝えたか",
    b: "開始時刻や終了時刻に希望がある場合は、日程を決める前に伝えておきます。",
  },
  {
    h: "駐車場所が決まっているか",
    b: "敷地内に駐車できるのか、前面道路になるのかを、現地確認の際に決めておけば、当日その場で探す必要がなくなります。",
  },
  {
    h: "近隣への挨拶をどちらが行うか決めたか",
    b: "業者が行うのか、依頼者が行うのかを決めます。決めていないと、どちらも行わないまま当日を迎えます。",
  },
  {
    h: "飛散を抑える対策を確認したか",
    b: "養生を行うのか、風向きを見て作業の順序を変えるのかなど、可能な対策は現場によって異なります。気になる方角があれば伝えます。",
  },
  {
    h: "作業後の清掃範囲を確認したか",
    b: "敷地内のみか、前面道路も含むのかを確認します。範囲は依頼内容として決められます。",
  },
];

const faqs = [
  {
    q: "近隣への挨拶は、こちらからしたほうがよいですか。",
    a: "業者が行う場合もありますが、依頼者が一声かけておくほうが、後の対応が円滑になることが多くあります。伝える内容は、日付とおおよその時間、作業内容の三点で十分です。範囲は、作業音が届く住宅、風下にあたる住宅、車両を停める前の住宅を目安にしてください。",
  },
  {
    q: "作業中に隣の家から苦情が出たらどうなりますか。",
    a: "その場での対応は業者が行うことが一般的ですが、依頼者が不在の場合は話が進まないことがあります。連絡が取れる状態にしておくか、立ち会えない場合は判断をどこまで委ねるかを事前に決めておいてください。立ち会えない場合の進め方は仙台のページで解説しています。",
  },
  {
    q: "隣家の車に葉くずが飛んだ場合はどう扱われますか。",
    a: "作業に伴う損害の扱いは、加入している保険や補償の仕組みによって異なります。掲載サービスの中には、請負賠償保険への加入や損害賠償補償制度を公表しているものがあります。対象範囲は各社の規定によるため、依頼前にご確認ください。補償の確認方法は横浜のページで解説しています。",
  },
  {
    q: "さいたま市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、さいたま市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "作業日に近隣へ及ぶ影響の見積もり方と、事前に伝える段取りの決め方をまとめています。",
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
          庭の手入れを依頼する際は、自宅の庭のことを中心に考えがちです。しかし、作業が始まれば、作業音は隣家に届き、刈った草は風で飛散し、車両は前面道路に停まります。
          庭の作業は敷地内だけでは完結しません。この点を見落としたまま当日を迎えると、庭は整っても近隣との関係に支障が生じることがあります。
          本ページでは、さいたまで庭の手入れを依頼する方に向けて、敷地外に及ぶ影響の範囲の見積もり方と、誰がどこまで段取りを行うかを整理します。
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
          庭の作業は敷地内だけでは完結しません
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          屋内のリフォームであれば、影響は建物の中に収まります。庭の作業はそうではありません。
          屋外で機械を使用し、剪定した枝を外に搬出し、そのための車両を停めるといった各工程は、いずれも境界の外から見える場所で行われます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          住宅が近接している地域では、この影響が重なりやすくなります。隣家の窓のすぐ近くで脚立を立てることもあれば、
          前面道路が狭く、車両を停めると通行の妨げになることもあります。庭の広さや木の本数ではなく、周囲との距離が段取りを左右する場面です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            特別な準備が必要なわけではありません。いつ・どの程度・何を行うのかが分かっていれば、伝えるべき事項は自然に決まります。
            反対に、依頼者がその見通しを持っていなければ、伝えることができません。段取りの確認は、近隣対応の前提として意味を持ちます。
          </p>
        </div>
      </section>

      <section id="saitama-factors" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          近隣に影響する4つの要素
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
          このうち「飛散物・落下物」の量は、剪定した枝の処分方法とも関係します。持ち帰りを依頼するのか、依頼者が処分するのかによって、
          敷地内に置いておく時間が変わるためです。処分方法の決め方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="saitama-notice" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          事前に伝えるかどうかの判断者
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          近隣への事前連絡は、行うか行わないかの二択ではありません。誰が、どの範囲に、何を伝えるのかを決めます。
          この三点が決まっていれば十分であり、決まっていなければ、多くの場合誰も行いません。
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
          道路や共用部を使用する場合の確認事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          敷地内だけで作業が完結しない場合、依頼者の判断のみでは決められない部分が生じます。どこで誰の了承が必要かを、事前に整理しておきます。
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
          越境した枝や根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で、所有形態ごとの窓口の違いは
          <Link href="/area/osaka/" className="text-primary underline underline-offset-2 mx-1">
            大阪のページ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="saitama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、当日の段取りを事前に調整しておきたいという条件では、次の3サービスが取り決めを記録しやすい構成です。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
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
          当日の段取りが明確であれば、伝えるべき事項も自然に決まります。まずは現地確認の段階でご確認ください。
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
