import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/hamamatsu/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "浜松の造園・庭の手入れ業者の選び方｜作業日までに庭を空けておく支度";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "作業当日に手が止まる理由の多くは、庭に置いてあるものです。前日までにどかすもの、動かせないから先に伝えるもの、人とペットの居場所。浜松で庭の手入れを頼むときの受け入れの支度を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "作業日までに自分の側で済ませておく支度という観点から、浜松での業者選びを整理しました。",
  },
};

const toc = [
  { id: "hamamatsu-stop", label: "当日に手が止まる理由は、たいてい庭に置いてあるもの" },
  { id: "hamamatsu-clear", label: "前日までにどかしておくもの" },
  { id: "hamamatsu-fixed", label: "動かせないものは、先に知らせておく" },
  { id: "hamamatsu-people", label: "人とペットの居場所を決めておく" },
  { id: "hamamatsu-pick", label: "この条件で見ておきたい3サービス" },
  { id: "hamamatsu-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "hamamatsu-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "hamamatsu-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "epark", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "紹介ではなく完全自店舗施工で、明瞭見積もりを掲げています。見積もりの段階で話した相手と当日来る側が同じ組織になるため、伝えた内容が現場まで届きやすい構成です。公式・自社調べとして、庭師経験10年以上のスタッフが9割以上、リピート率95%以上と公表されています。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから事業者を探せ、各事業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。営業時間が事業者ごとに出ているため、当日までの確認連絡をいつ入れられるかが事前に分かります。",
  "hikaku-biz":
    "発注側は利用無料で、造園のほか門・塀・フェンス・デッキなどの区分も扱います。庭に構造物が多く、どこまでが作業の対象になるのかを先に切り分けておきたい場合の相談先として候補になります。運営21年・登録事業者10万社超と公表されています。",
};

const clearItems = [
  {
    h: "鉢とプランター",
    b: "作業する木の足元に置いてあるものは、まず動かします。落ちてきた枝が当たれば割れますし、土がこぼれれば片づけが増えます。重くて動かせないものがある場合は、その旨を伝えて位置を共有しておきます。",
  },
  {
    h: "洗濯物と物干し",
    b: "当日は外に干せないものと考えておきます。切ったものの粉や葉くずは、思っているより広く飛びます。物干し竿そのものも、脚立を立てる邪魔になることがあります。",
  },
  {
    h: "自転車・車・駐輪スペース",
    b: "敷地内に停めているものは、当日の朝までに移します。業者の車を敷地内に入れるのか、近くに停めてもらうのかは事前に決めておく項目です。近くに停める場合、どこに停められるかは自分のほうが詳しいことが多いので、先に伝えます。",
  },
  {
    h: "ホース・散水まわり・園芸の道具",
    b: "地面に這わせたホースは、踏まれ、引っかかります。巻いて片づけておきます。水道を使ってよいかどうかは別途伝える項目で、使ってほしくない場合は先に言います。",
  },
  {
    h: "ゴミと、収集日との重なり",
    b: "作業日が収集日と重なると、道路際にゴミが出ている状態で車両が付けることになります。日程を決めるときに確認しておくと、当日の出入りが楽になります。",
  },
];

const fixedItems = [
  {
    h: "設備の機器と配管",
    b: "室外機、給湯器、メーター、換気口。植え込みの陰に隠れていることがあります。枝が落ちて当たる位置にあるなら、養生が要るかどうかを含めて先に伝えます。どこに何があるかは、住んでいる側にしか分かりません。",
  },
  {
    h: "照明と配線",
    b: "庭の照明、センサー、防犯カメラ、そこへ通っている線。地面を這っている配線は、落ち葉や土に隠れていると踏まれます。位置を伝えるか、目印を置いておきます。",
  },
  {
    h: "水栓・池・井戸・浄化槽の蓋",
    b: "地面にある開口部は、上に物を置かれると作業のあとで探すことになります。また、切ったものが池に落ちると回収が面倒です。蓋の位置と、避けてほしい場所を伝えておきます。",
  },
  {
    h: "庭石・灯籠・据えてあるもの",
    b: "動かせない重量物は、周りで作業する際にぶつける可能性があります。気にしているものがあれば、作業前に一言添えます。傷が気になるものは、作業前に写真を撮っておくと後の話が早くなります。",
  },
  {
    h: "残しておきたい草花",
    b: "足元の小さな株や、これから咲くもの。作業する側には雑草との区別がつきません。印を付けるか、囲っておくか、位置を具体的に伝えるか。「あの辺の花は残してください」では伝わりません。",
  },
];

const peopleItems = [
  {
    h: "在宅するか、外出するか",
    b: "どちらでも進められますが、決めて伝えておく必要があります。外出するなら、連絡がつく番号と、判断を委ねてよい範囲を残します。在宅するなら、どこにいれば邪魔にならないかを最初に聞きます。",
  },
  {
    h: "小さな子どもがいる場合",
    b: "作業中の庭に出ないようにするのが前提です。窓から見たがることもあるので、どの窓を開けないでほしいかを伝えておくと、粉や葉くずが室内に入るのも防げます。",
  },
  {
    h: "犬や猫の出入り",
    b: "門扉を開けたままにする時間があると、外に出てしまう可能性があります。室内に入れておくか、出入りする扉を決めておくかを伝えます。音に反応する場合は、その旨も伝えておくと配慮してもらえることがあります。",
  },
  {
    h: "庭に来ている生きもの",
    b: "植え込みの中に鳥の巣がある、地面に蜂が出入りしている、といったことがあります。気づいていれば必ず先に伝えます。刺す虫の巣は作業を止める理由になり、別の対応が必要になる場合があります。",
  },
];

const checklist = [
  {
    h: "作業する木の周りを空けたか",
    b: "足元に物があると、どかすところから始まります。前日までに自分で動かしておきます。",
  },
  {
    h: "触ってほしくないものに印を付けたか",
    b: "残したい草花や気にしている庭石は、言葉ではなく現物に印を付けるほうが確実です。",
  },
  {
    h: "水道と電源の場所、使ってよいかを伝えたか",
    b: "使える前提なのか、使わない前提なのか。どちらでも進められますが、伝わっていないと当日に聞かれます。",
  },
  {
    h: "車をどこに停めるか確定したか",
    b: "敷地内に入れるのか、近くに停めるのか。近隣の停められる場所は、住んでいる側のほうが詳しく分かります。",
  },
  {
    h: "在宅するかどうかと、連絡先を伝えたか",
    b: "外出するなら、つながる番号と、判断を任せてよい範囲を残しておきます。",
  },
];

const faqs = [
  {
    q: "作業の前に、自分で準備しておくことはありますか。",
    a: "作業する木の周りを空けておくこと、洗濯物を入れておくこと、敷地内の自転車や車を移しておくことの三つは、やっておくと当日が早く進みます。加えて、室外機や配線、水栓の蓋など動かせないものの位置と、残しておきたい草花の場所を伝えておきます。どこまで準備が必要かは作業内容と相手によって違うため、日程を決めるときに確認してください。",
  },
  {
    q: "庭にある鉢や物置は、業者が動かしてくれますか。",
    a: "作業に支障がある範囲であれば動かしてもらえることが多いはずですが、その分の時間は作業時間から引かれます。また、割れ物や重量物を動かして破損した場合の扱いは相手によって異なります。自分で動かせるものは前日までに動かし、動かせないものは位置を伝えておくのが確実です。",
  },
  {
    q: "残しておきたい草花がある場合、どう伝えればよいですか。",
    a: "口頭の位置説明では伝わりません。印を付ける、鉢や支柱で囲う、写真に丸を付けて渡すなど、現物で分かる形にします。作業する側には、株の小さい植物と雑草の区別がつかない場合があります。逆に「ここは全部刈ってよい」という範囲も、併せて伝えておくと迷いが減ります。",
  },
  {
    q: "浜松市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、浜松市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "作業当日を迎えるまでに敷地の側で済ませておく準備と、先に伝えておくべきものを整理しました。",
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
          日程が決まって、金額も決まって、あとは当日を待つだけ。ここで何もしないでいると、作業の最初の30分が片づけに消えることがあります。鉢を動かし、自転車をどかし、物置の前を空ける。本来なら前日までに自分の側で済ませられたことです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          浜松にある家の庭で作業を頼む場合も、当日の進み方は敷地の状態で決まります。このページでは、作業日を迎えるまでに何をどかし、何を先に伝え、人とペットをどこに置くのかを整理します。
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
          当日に手が止まる理由は、たいてい庭に置いてあるもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          作業をする人は、脚立を立て、切ったものを落とし、それを集めて運び出します。この一連の動きには床が要ります。木の周りに物が置いてあると、まず物をどかすところから始まり、終わったら戻すことになります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          もう一つは、動かしてよいかどうかの判断です。持ち主に確認せずに動かせないものがあると、その都度声をかけることになり、在宅していなければ作業が止まります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            見るべきは「作業する木のまわりに何が置いてあるか」です。そこに置いてあるものを、当日どかすのか、前日までにどかすのか、動かさずに残すのか。この三つに仕分けておけば、当日に迷う場面がほぼなくなります。
          </p>
        </div>
      </section>

      <section id="hamamatsu-clear" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          前日までにどかしておくもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自分で動かせるものは、自分で動かしておくほうが早く、確実です。
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
          切ったものをどう出すかは、当日ではなく依頼の段階で決まります。出し先の選び分けは
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="hamamatsu-fixed" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          動かせないものは、先に知らせておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭には、どかせないものや、触られると困るものがあります。作業する側からは、それが何なのかが見ただけでは分かりません。
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
          人とペットの居場所を決めておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          刃物と脚立が動いている場所です。誰がどこにいるかは、安全の話でもあります。
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
          刺す虫や、触れるとかぶれるものの見分けは
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="hamamatsu-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、当日の段取りを事前に詰めておきたいという条件で見ると、次の3つは確認の取り方が分かりやすい構成です。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/sagamihara/", label: "作業当日に立ち会うときの距離の取り方" },
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
          支度の内容は作業の種類によって変わります。何を空けておけばよいかも、問い合わせのときに聞いてみてください。
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
