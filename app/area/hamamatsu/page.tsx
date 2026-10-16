import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/hamamatsu/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "浜松の造園・庭の手入れ業者の選び方｜作業日までに行う受け入れ準備";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "作業当日に作業が中断する原因の多くは、庭に置かれている物です。前日までに移動する物、移動できないため事前に伝える物、家族とペットの待機場所について、浜松で庭の手入れを依頼する際の受け入れ準備を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "作業日までに依頼者側で済ませておく準備という観点から、浜松での業者選びを整理しています。",
  },
};

const toc = [
  { id: "hamamatsu-stop", label: "作業中断の主な原因は庭に置かれている物です" },
  { id: "hamamatsu-clear", label: "前日までに移動しておく物" },
  { id: "hamamatsu-fixed", label: "移動できない物は事前に伝える" },
  { id: "hamamatsu-people", label: "家族とペットの待機場所を決めておく" },
  { id: "hamamatsu-pick", label: "この条件に適した3サービス" },
  { id: "hamamatsu-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "hamamatsu-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "hamamatsu-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "epark", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "紹介ではなく完全自店舗施工で、明瞭な見積もりを掲げています。見積もりの担当者と当日の作業者が同じ組織に属するため、伝えた内容が現場まで伝わりやすい構成です。公式・自社調べとして、庭師経験10年以上のスタッフが9割以上、リピート率95%以上と公表されています。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから業者を探すことができ、各業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。業者ごとに営業時間が掲載されているため、当日までの確認連絡をいつ行えるかを事前に把握できます。",
  "hikaku-biz":
    "発注者の利用は無料で、造園のほか門・塀・フェンス・デッキなどの区分も扱っています。庭に構造物が多く、作業の対象範囲を事前に区別しておきたい場合の相談先として候補になります。運営21年・登録事業者10万社超と公表されています。",
};

const clearItems = [
  {
    h: "鉢とプランター",
    b: "作業する木の根元に置いている物は、最初に移動します。落下した枝が当たれば破損し、土がこぼれれば片づけの手間が増えます。重くて移動できない物がある場合は、その旨を伝えて位置を共有しておきます。",
  },
  {
    h: "洗濯物と物干し",
    b: "当日は屋外に洗濯物を干せないものと考えておきます。剪定時の粉や葉くずは想定より広範囲に飛散します。物干し竿そのものが、脚立を立てる際の妨げになることもあります。",
  },
  {
    h: "自転車・車・駐輪スペース",
    b: "敷地内に停めている物は、当日の朝までに移動します。業者の車両を敷地内に入れるのか、近隣に停めてもらうのかは事前に決めておく項目です。近隣に停める場合、駐車可能な場所は依頼者のほうが把握していることが多いため、事前に伝えます。",
  },
  {
    h: "ホース・散水設備・園芸用品",
    b: "地面に這わせたホースは、踏まれたり引っかかったりします。巻いて片づけておきます。水道の使用可否は別途伝える項目であり、使用を控えてほしい場合は事前に伝えます。",
  },
  {
    h: "ゴミの収集日との重複",
    b: "作業日が収集日と重なると、道路際にゴミが出ている状態で車両を停めることになります。日程を決める際に確認しておくと、当日の出入りが円滑になります。",
  },
];

const fixedItems = [
  {
    h: "設備機器と配管",
    b: "室外機、給湯器、メーター、換気口などが植え込みの陰に隠れていることがあります。枝が落下して当たる位置にある場合は、養生の要否を含めて事前に伝えます。設備の位置は、居住者でなければ把握できません。",
  },
  {
    h: "照明と配線",
    b: "庭の照明、センサー、防犯カメラ、それらに接続している配線などがあります。地面を這う配線は、落ち葉や土に隠れていると踏まれることがあります。位置を伝えるか、目印を置いておきます。",
  },
  {
    h: "水栓・池・井戸・浄化槽の蓋",
    b: "地面にある開口部は、上に物を置かれると作業後に探す必要が生じます。また、剪定した枝が池に落ちると回収に手間がかかります。蓋の位置と、避けてほしい場所を伝えておきます。",
  },
  {
    h: "庭石・灯籠・据え置きの物",
    b: "移動できない重量物は、周囲での作業中に接触する可能性があります。気にしている物があれば、作業前に伝えます。傷が気になる物は、作業前に写真を撮影しておくと、後の確認を円滑に進められます。",
  },
  {
    h: "残しておきたい草花",
    b: "根元の小さな株や、これから開花する植物は、作業者には雑草との区別がつきません。印を付ける、囲っておく、位置を具体的に伝えるなどの対応が必要です。「あの辺りの花は残してください」という説明では伝わりません。",
  },
];

const peopleItems = [
  {
    h: "在宅するか外出するか",
    b: "どちらでも作業は進められますが、事前に決めて伝えておく必要があります。外出する場合は、連絡可能な電話番号と、判断を委ねてよい範囲を伝えておきます。在宅する場合は、作業の妨げにならない待機場所を最初に確認します。",
  },
  {
    h: "小さな子どもがいる場合",
    b: "作業中の庭に出ないようにすることが前提です。窓から様子を見たがることもあるため、開けないでほしい窓を伝えておくと、粉や葉くずの室内への侵入も防げます。",
  },
  {
    h: "犬や猫の出入り",
    b: "門扉を開けたままにする時間帯があると、屋外に出てしまう可能性があります。室内に入れておくか、出入りする扉を決めておくかを伝えます。物音に反応する場合は、その旨も伝えておくと配慮を受けられる場合があります。",
  },
  {
    h: "庭に生息する生き物",
    b: "植え込みの中に鳥の巣がある、地面にハチが出入りしているといった場合があります。把握している場合は必ず事前に伝えます。刺す虫の巣は作業を中止する理由となり、別途対応が必要になる場合があります。",
  },
];

const checklist = [
  {
    h: "作業する木の周囲を空けたか",
    b: "根元に物があると、移動作業から始めることになります。前日までに依頼者自身で移動しておきます。",
  },
  {
    h: "手を加えないでほしい物に印を付けたか",
    b: "残したい草花や気にしている庭石は、言葉で伝えるより現物に印を付けるほうが確実です。",
  },
  {
    h: "水道と電源の位置、使用の可否を伝えたか",
    b: "使用できる前提か、使用しない前提かを伝えます。どちらでも作業は進められますが、伝えていないと当日に確認を求められます。",
  },
  {
    h: "駐車場所を確定したか",
    b: "敷地内に入れるのか、近隣に停めるのかを決めます。近隣の駐車可能な場所は、居住者のほうが詳しく把握しています。",
  },
  {
    h: "在宅の有無と連絡先を伝えたか",
    b: "外出する場合は、連絡可能な電話番号と、判断を委ねてよい範囲を伝えておきます。",
  },
];

const faqs = [
  {
    q: "作業の前に、自分で準備しておくことはありますか。",
    a: "作業する木の周囲を空けておくこと、洗濯物を取り込んでおくこと、敷地内の自転車や車を移動しておくことの三点を済ませておくと、当日の作業が円滑に進みます。加えて、室外機や配線、水栓の蓋など移動できない物の位置と、残したい草花の場所を伝えておきます。必要な準備の範囲は作業内容と業者によって異なるため、日程を決める際にご確認ください。",
  },
  {
    q: "庭にある鉢や物置は、業者が動かしてくれますか。",
    a: "作業に支障がある範囲であれば移動してもらえる場合が多いと考えられますが、その分の時間は作業時間から差し引かれます。また、割れ物や重量物を移動して破損した場合の扱いは業者によって異なります。自分で移動できる物は前日までに移動し、移動できない物は位置を伝えておくことをおすすめします。",
  },
  {
    q: "残しておきたい草花がある場合、どう伝えればよいですか。",
    a: "口頭での位置説明では伝わりません。印を付ける、鉢や支柱で囲う、写真に印を付けて渡すなど、現物で判別できる形にします。作業者には、小さな株の植物と雑草の区別がつかない場合があります。反対に「ここはすべて刈ってよい」という範囲もあわせて伝えておくと、作業者の判断の迷いが減ります。",
  },
  {
    q: "浜松市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、浜松市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaHamamatsuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "作業当日までに敷地側で済ませておく準備と、事前に伝えておくべき事項を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "浜松" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          日程と金額が決まり、当日を待つだけの段階でも、何も準備をしないと作業の最初の30分が片づけに費やされることがあります。鉢や自転車を移動し、物置の前を空けるといった作業は、本来であれば前日までに依頼者側で済ませられるものです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          浜松市内の住宅の庭で作業を依頼する場合も、当日の進み方は敷地の状態によって決まります。本ページでは、作業日までに移動する物、事前に伝える事項、家族とペットの待機場所を整理します。
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

      <section id="hamamatsu-stop" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業中断の主な原因は庭に置かれている物です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          作業者は、脚立を立て、剪定した枝を落とし、それを集めて搬出します。この一連の作業には足場が必要です。木の周囲に物が置かれていると、まず物を移動するところから始まり、作業後に元に戻すことになります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          もう一つは、移動してよいかどうかの判断です。所有者に確認しなければ移動できない物があると、その都度確認が必要となり、不在の場合は作業が中断します。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            確認すべきは「作業する木の周囲に何が置かれているか」です。置かれている物を、当日移動するのか、前日までに移動するのか、移動せずに残すのか。この三つに分類しておけば、当日に判断に迷う場面はほとんどなくなります。
          </p>
        </div>
      </section>

      <section id="hamamatsu-clear" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          前日までに移動しておく物
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自分で移動できる物は、自分で移動しておくほうが早く確実です。
        </p>
        <ol className="space-y-4">
          {clearItems.map((x, i) => (
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
          剪定した枝の搬出方法は、当日ではなく依頼の段階で決まります。処分方法の選び方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="hamamatsu-fixed" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          移動できない物は事前に伝える
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭には、移動できない物や、触れられると困る物があります。作業者には、それが何であるかを外見だけでは判別できません。
        </p>
        <div className="space-y-4">
          {fixedItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="hamamatsu-people" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          家族とペットの待機場所を決めておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          刃物と脚立を使用する場所であるため、誰がどこにいるかは安全に関わる事項でもあります。
        </p>
        <div className="space-y-4">
          {peopleItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          刺す虫や、触れるとかぶれる植物の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="hamamatsu-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、当日の段取りを事前に調整しておきたいという条件では、次の3サービスが確認方法の分かりやすい構成です。
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

      <section id="hamamatsu-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="浜松" />
      </section>

      <section id="hamamatsu-checklist" className="scroll-mt-20 mb-12">
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

      <section id="hamamatsu-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="hamamatsu" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/sagamihara/", label: "作業当日の立ち会い方" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
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
          必要な準備の内容は作業の種類によって異なります。空けておくべき範囲についても、問い合わせの際にご確認ください。
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
