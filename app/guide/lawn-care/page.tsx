import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/lawn-care/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";
const TITLE = "芝生の手入れガイド｜芝刈り・目土・エアレーションと年間の流れ";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "張った後の芝生を保つには、芝刈り・目土入れ・エアレーション・サッチングという決まった作業があります。暖地型と寒地型の違い、季節ごとの手順、自分でやる範囲とプロに任せる範囲の線引きを解説します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "芝刈り・目土入れ・エアレーション・サッチングの意味と順番、季節ごとの手入れの流れを整理しました。",
  },
};

const toc = [
  { id: "lawn-basics", label: "芝生の手入れは「4つの作業」に分けられる" },
  { id: "lawn-types", label: "暖地型と寒地型で手入れの時期が変わる" },
  { id: "lawn-mowing", label: "芝刈りの考え方と高さの決め方" },
  { id: "lawn-season", label: "季節ごとの手入れの流れ" },
  { id: "lawn-trouble", label: "よくある失敗とその原因" },
  { id: "lawn-pro", label: "自分でやる範囲と、任せたほうがよい範囲" },
  { id: "lawn-faq", label: "よくある質問" },
];

const fourWorks = [
  {
    h: "芝刈り",
    b: "伸びた葉を刈って高さを揃える作業です。見た目を整えるためだけでなく、刈ることで新しい芽が増え、密度が上がります。芝生の手入れの中で最も回数が多く、最も効果が分かりやすい作業でもあります。",
  },
  {
    h: "目土入れ",
    b: "芝の上から薄く土をかける作業です。地面の凸凹をならし、乾きやすい根元を保護し、新しい根が伸びる足場をつくります。厚くかけすぎると葉が埋まって弱るため、葉先が見える程度に留めるのが基本です。",
  },
  {
    h: "エアレーション",
    b: "芝生の地面に穴を開ける作業です。人が歩く庭の土は少しずつ踏み固められ、水と空気が根まで届きにくくなります。穴を開けて通り道をつくり、そこへ目土を入れて埋め戻すと、根の伸びが回復します。",
  },
  {
    h: "サッチング",
    b: "芝の根元に溜まった枯れ葉や刈りかす（サッチ）をかき出す作業です。溜まったままだと水はけが悪くなり、病気や虫の温床にもなります。熊手やレーキでかき出し、取り除きます。",
  },
];

const grassTypes = [
  {
    h: "暖地型（高麗芝・野芝・姫高麗芝など）",
    b: "気温が上がる季節に伸び、寒くなると葉が枯れて休眠し、地上部が茶色くなります。冬の茶色は枯死ではなく休眠で、暖かくなれば再び緑になります。手入れが集中するのは生育期で、芝刈りの回数もこの時期に増えます。日本の住宅の庭で最もよく使われている系統です。",
  },
  {
    h: "寒地型（ケンタッキーブルーグラス・ベントグラスなど）",
    b: "涼しい季節によく育ち、冬でも緑を保ちやすい一方、暑さと蒸れに弱い性質があります。真夏に傷みやすいため、夏をどう越させるかが管理の要になります。緑の期間が長い代わりに、水やりや病気への目配りが増えます。",
  },
];

const seasonFlow = [
  {
    h: "芽吹く前（休眠から生育へ向かう時期）",
    b: "サッチングで根元をかき出し、地面の通気を確保します。凸凹が気になる場所には目土を入れてならします。この時期に下ごしらえをしておくと、生育期の伸びが揃います。",
  },
  {
    h: "生育が始まる時期",
    b: "芝刈りを始めます。最初は伸びた分を一度に刈らず、数回に分けて目標の高さへ近づけます。エアレーションを行うならこの時期が適します。穴を開けたら目土で埋め戻すところまでを一組と考えてください。",
  },
  {
    h: "最も伸びる時期",
    b: "芝刈りの間隔が最も短くなります。刈る回数を減らそうとして一度に短く刈り込むと、かえって弱ります。水やりは回数を増やすよりも、一度にしっかり与えて土の深くまで湿らせるほうが根が深く伸びます。",
  },
  {
    h: "伸びが落ち着く時期",
    b: "芝刈りの間隔が空いてきます。落ち葉が積もると下の芝が蒸れるため、こまめに取り除きます。翌シーズンに向けて、傷んだ場所に目土を入れて整えておきます。",
  },
  {
    h: "休眠する時期",
    b: "暖地型は地上部が茶色くなり、作業はほとんど必要なくなります。踏み荒らさないことが最大の手入れです。この時期に植栽全体の計画を見直しておくと、次の生育期に動きやすくなります。",
  },
];

const troubles = [
  {
    h: "一度に短く刈り込んで茶色くなった",
    b: "葉を一気に短くすると、光合成をする面積が急に減り、芝は体力を落とします。伸びすぎてしまったときは、数回に分けて少しずつ目標の高さへ近づけてください。刈る高さを変えるのは、芝が元気な時期に限ります。",
  },
  {
    h: "水やりをしているのに元気がない",
    b: "少量を毎日与えると、表面だけが湿って根が浅いところに留まります。結果として乾燥に弱い芝になります。回数より、一度にしっかり与えて土の深くまで届かせることを意識してください。土が踏み固まっている場合は、水そのものが浸み込んでいない可能性もあります。",
  },
  {
    h: "特定の場所だけ薄くなる",
    b: "人がよく通る場所、日当たりが足りない場所、水が溜まる場所のいずれかであることが多いです。原因が踏圧ならエアレーション、日照なら植栽や構造物の見直し、水はけなら地面の造作そのものの問題になります。同じ手入れを続けても直りません。",
  },
  {
    h: "刈りかすを放置して根元が蒸れた",
    b: "刈った葉をそのまま残すとサッチとして積もり、水と空気の通りを妨げます。少量なら分解されますが、量が多いときは集めて取り除きます。",
  },
  {
    h: "雑草が混ざって増えた",
    b: "芝が薄くなった場所から雑草は入ります。抜くことも必要ですが、根本的には芝の密度を上げるほうが効きます。雑草そのものへの対処は別に整理しています。",
  },
];

const proWork = [
  {
    h: "自分でやりやすい作業",
    items: [
      "芝刈り（手押し式・電動の芝刈り機で対応できる範囲）",
      "刈りかすや落ち葉の片づけ",
      "水やりと、目に付いた雑草の手取り",
      "狭い範囲の目土入れ",
    ],
  },
  {
    h: "任せたほうが結果が早い作業",
    items: [
      "広い面積や傾斜地のエアレーション",
      "土そのものが踏み固まっている場合の下地の改善",
      "水が溜まる場所の排水の見直し",
      "傷んだ芝の張り替えと、下地からのやり直し",
    ],
  },
];

const faqs = [
  {
    q: "冬に芝生が茶色くなりました。枯れてしまったのでしょうか。",
    a: "暖地型の芝であれば、寒い時期に地上部が茶色くなるのは休眠によるもので、枯死とは限りません。暖かくなると再び緑の芽が出てきます。心配なら、春先に芽が出てくるかどうかで判断してください。芽吹かない範囲がまとまってある場合は、下地や水はけの問題を疑います。",
  },
  {
    q: "芝刈りはどのくらいの間隔で行えばよいですか。",
    a: "日数で決めるより、伸びた量で判断するほうが確実です。一度に葉を大きく減らすと芝が弱るため、伸びすぎる前に刈るのが基本になります。生育の盛んな時期ほど間隔は短くなり、伸びが落ち着けば間隔は空きます。",
  },
  {
    q: "エアレーションは毎年必要ですか。",
    a: "人がよく歩く庭ほど土は踏み固められるため、定期的に行う意味があります。逆に、ほとんど立ち入らない芝生では頻度を下げても差し支えありません。水が浸み込みにくい、特定の場所だけ薄いといった兆候が出ているかどうかが目安になります。",
  },
  {
    q: "芝生を新しく張るところから業者に頼めますか。",
    a: "張る作業自体は個人でも行われていますが、下地づくりや水はけの確保でつまずくと後から直しにくくなります。自分でやる場合の手順は別ページで扱っています。傾斜地や広い面積は、最初から任せたほうが手戻りが少なくなります。",
  },
];

export default function LawnCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "芝刈り・目土入れ・エアレーション・サッチングの意味と順番、季節ごとの手入れの流れを整理しました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "芝生の手入れ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          芝生は、張ったときが完成ではありません。むしろそこからが始まりで、保つための作業が毎年繰り返されます。
          といっても、やることは無限にあるわけではなく、芝刈り・目土入れ・エアレーション・サッチングという4つに整理できます。
          この4つが何のための作業で、いつ、どの順番で行うのか。そこが分かると、芝生の手入れは急に扱いやすくなります。
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

      <section id="lawn-basics" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          芝生の手入れは「4つの作業」に分けられる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          芝生の管理で出てくる言葉は多いのですが、日常的に行う作業は次の4つに集約されます。
          それぞれが別々の目的を持っていて、どれかを飛ばすと別のところに不調が出ます。
        </p>
        <div className="space-y-4">
          {fourWorks.map((w, i) => (
            <div key={w.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
                <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{w.h}</span>
              </h3>
              <p className="text-[15px] leading-8 text-text-secondary">{w.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          順番にも意味があります。サッチをかき出してからエアレーションを行い、開いた穴に目土を入れる。この流れなら、それぞれの作業が次の作業を助けます。
        </p>
      </section>

      <section id="lawn-types" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          暖地型と寒地型で手入れの時期が変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          芝生の手入れを調べていて情報が食い違うと感じたら、芝の系統が違う可能性があります。
          芝は大きく二系統に分かれ、よく育つ季節が正反対だからです。自分の庭の芝がどちらかを知らないまま手順だけをなぞると、時期が丸ごとずれます。
        </p>
        <div className="space-y-4">
          {grassTypes.map((g) => (
            <div key={g.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{g.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{g.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          このページの季節ごとの流れは、住宅の庭で多く使われる暖地型を前提に、生育の段階で記述しています。
          寒地型の場合は、よく育つ季節が入れ替わると読み替えてください。
        </p>
      </section>

      <section id="lawn-mowing" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          芝刈りの考え方と高さの決め方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          芝刈りで大切なのは、日数ではなく「一度にどれだけ葉を減らすか」です。
          葉は光合成をする器官なので、大きく減らせばそのぶん体力を失います。伸びすぎてから一気に刈ると茶色くなるのは、このためです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          刈る高さそのものは、好みと使い方で決めて構いません。短く保つほど見た目は整いますが、そのぶん刈る頻度が上がり、乾燥にも弱くなります。
          子どもやペットが走り回る庭なら、やや高めに保つほうが芝は持ちこたえます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            高さを変えたいときは、一度の芝刈りで変えず、数回かけて近づけます。そして高さを変える作業は、芝が元気に伸びている時期に行ってください。
            弱っている時期の刈り込みは、回復の余力を奪います。
          </p>
        </div>
      </section>

      <section id="lawn-season" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          季節ごとの手入れの流れ
        </h2>
        <ol className="space-y-4">
          {seasonFlow.map((s, i) => (
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
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          庭木のほうの年間の作業は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          にまとめています。芝生と庭木では適期が一致しないため、別々に組み立てるほうが混乱しません。
        </p>
      </section>

      <section id="lawn-trouble" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          よくある失敗とその原因
        </h2>
        <div className="space-y-4">
          {troubles.map((t) => (
            <div key={t.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{t.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{t.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          雑草への対処は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="lawn-pro" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分でやる範囲と、任せたほうがよい範囲
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          芝生の手入れは、日々の作業と、下地に手を入れる作業とで性質が違います。
          前者は続けることに意味があり、後者は一度きちんとやると長く効きます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {proWork.map((p) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-3">{p.h}</h3>
              <ul className="space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[15px] leading-7 text-text-secondary">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          芝を新しく張る手順や道具は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で扱っています。張る前の下地づくりは、その後の手入れのしやすさをそのまま決めます。
        </p>
      </section>

      <section id="lawn-faq" className="scroll-mt-20 mb-12">
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

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び分け" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
            { href: "/plant/low-maintenance/", label: "手入れが楽な庭木おすすめ" },
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
          下地からの手直しが必要そうなら、一度プロに見てもらうと原因がはっきりします。
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
