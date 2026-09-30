import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/funabashi/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "船橋の造園・庭の手入れ業者の選び方｜見に来てもらう前に写真と動画で庭を渡す";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "現地を見てもらう前に、庭の状態をこちらから渡しておくと最初の返答が具体的になります。撮る順番、大きさの目安になるものの入れ方、撮り忘れやすい場所、動画のほうが伝わる場面、写真では決まらないこと。船橋で庭の手入れを頼むときの渡し方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "現地確認の前に写真と動画で庭の状態を渡すという観点から、船橋での業者選びを整理しました。",
  },
};

const toc = [
  { id: "funabashi-why", label: "写真を先に渡すと、最初の返答が変わる" },
  { id: "funabashi-order", label: "撮る順番は、全景から寄っていく" },
  { id: "funabashi-forget", label: "撮り忘れやすいのは、木そのものではない場所" },
  { id: "funabashi-motion", label: "静止画では伝わらないものと、現地でしか決まらないもの" },
  { id: "funabashi-pick", label: "この条件で見ておきたい3サービス" },
  { id: "funabashi-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "funabashi-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "funabashi-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["mitsumoa", "houzz", "oniwa-110"] as const;

const pickReasons: Record<string, string> = {
  "mitsumoa":
    "条件を入力すると複数の業者から見積もりが届き、依頼後は業者とチャットで直接打ち合わせができる仕組みです。撮った写真をその場で渡し、これで足りるか、どこを撮り足せばよいかを聞ける形になります。剪定・草刈り・造園のカテゴリがあり、全国47都道府県が対象、見積もり依頼は無料です。運営は株式会社ミツモアです。",
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価レビューが掲載されています。人の庭の写真を先に見ておくと、自分の庭の写真に添える言葉が決めやすくなります。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
  "oniwa-110":
    "草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽など、作業の区分が分かれています。写真を見せながら、この状態はどの区分になるのかを相談する使い方ができます。受付は24時間365日、現地調査・見積りは無料（条件あり）と公表しており、請負賠償保険に加入しているとされています。運営は東証上場のシェアリングテクノロジー株式会社です。",
};

const shootOrder = [
  {
    h: "まず全景を、離れた位置から",
    b: "庭全体が一枚に収まる位置まで下がって撮ります。家の側から庭を見た一枚と、庭の奥から家の側を見た一枚の二方向があると、置かれているものの位置関係まで伝わります。近くで撮った写真ばかりだと、どの木がどこにあるのかが読み取れず、結局「全体が分かるものはありますか」と聞き返されることになります。",
  },
  {
    h: "次に、手を入れてほしいものを一本ずつ",
    b: "木なら根元から先端まで一枚に入れます。生垣なら端から端まで、区切って数枚。切りたいのがどれなのかを一枚ずつ分けておくと、本数の数え違いが起きません。全景の何番目の木か分かりにくい場合は、撮った順に番号を振って伝えます。",
  },
  {
    h: "最後に、気になっている箇所へ寄る",
    b: "枯れている枝、幹の割れ、白い付着物、葉の斑点、根元の盛り上がり。気になって問い合わせようと思った、そのきっかけの部分です。ここは寄って撮ります。ただし寄った写真だけを送ると、それが庭のどこの話なのかが分からなくなるため、全景と近景を撮ったあとに撮る順番が効いてきます。",
  },
  {
    h: "大きさの目安になるものを、必ず一緒に写す",
    b: "写真だけでは高さも太さも分かりません。人が立つ、脚立を置く、物干し竿やブロック塀を一緒に入れる。何でもよいので、見る側が知っている大きさのものを画面に入れてください。目安が何もない写真は、実物より小さく見積もられることも、逆に大きく見られることもあります。二階建ての家の何階分にあたるかが分かる角度で撮るのも有効です。",
  },
];

const forgotSpots = [
  {
    h: "木の足元と、その周りの地面",
    b: "見たいのは枝のほうでも、作業する側が先に見るのは足元です。根元に石が組んであるか、下草が茂っているか、地面が土か砂利か。切った枝を一度どこに置けるかもここで決まります。上ばかり撮って足元が写っていない写真は、よくあるパターンです。",
  },
  {
    h: "門から庭までの通り道",
    b: "人と道具と、切ったものが通る道です。門の幅、通路の幅、途中の段差、曲がり角、扉の開く向き。ここが狭いと、作業そのものより運び出しに時間がかかります。門の外から通路を見た一枚と、通路の途中から庭のほうを見た一枚があると伝わります。",
  },
  {
    h: "道路に面した側と、車を置く場所",
    b: "作業車をどこに置けるかは、当日の段取りに直結します。家の前の道路幅、一方通行かどうか、自分の駐車スペースが空けられるか。庭の中だけを撮っていると、この部分がまるごと抜け落ちます。",
  },
  {
    h: "電線・隣家・建物との距離",
    b: "枝が電線に近いか、隣の敷地にかかっているか、屋根や壁に触れているか。これは木の正面から撮っても分かりません。少し横に回り込んで、木と対象物の両方が一枚に入る角度から撮ります。距離が近いほど作業のしかたが変わるため、伝わっているかどうかで話の進み方が変わります。",
  },
];

const motionItems = [
  {
    h: "風で揺れる枝は、動画のほうが早い",
    b: "写真では止まって見える枝も、揺れ方を見れば付け根の状態が想像できます。一本だけ違う動き方をする、揺れたあと戻りが遅い、風がやんでも垂れたまま。強い風のあとに気になった枝は、数秒でよいので揺れている状態を撮っておいてください。",
  },
  {
    h: "傾きは、周りごと動きながら撮る",
    b: "傾いた木を正面から撮ると、たいてい傾いて見えません。カメラの角度でいくらでも変わるからです。柱や塀など、垂直だと分かっているものを一緒に画面へ入れ、木の周りを歩きながら撮ると、どちらへどれくらい傾いているかが伝わります。根元の地面が持ち上がっているなら、そこも足元から撮ります。",
  },
  {
    h: "水の溜まり方は、雨の最中と、そのあと",
    b: "乾いたあとの地面を撮っても、水が溜まる場所は写りません。降っている最中にどこへ流れて、どこに残るか。雨がやんでから何時間か経った時点でまだ残っているか。この二つを撮っておくと、水の問題なのか、それ以外なのかの切り分けが早くなります。",
  },
  {
    h: "写真でも動画でも決まらないもの",
    b: "地面の固さ、土の中の状態、幹の内部が傷んでいるか、隣地との境界がどこか、道具が実際に入るかどうか。これらは見に来てもらわないと分かりません。写真を渡す目的は、現地確認を省くことではなく、現地で確かめる項目を絞ることです。そこを取り違えると、届いた見積もりに幅が付いたまま話が進みます。",
  },
];

const checklist = [
  {
    h: "全景を、二方向から撮ったか",
    b: "家の側から庭を見た一枚と、庭の奥から家の側を見た一枚。位置関係はここでしか伝わりません。",
  },
  {
    h: "大きさの目安になるものが写っているか",
    b: "人、脚立、塀、物干し竿。何もない写真は、実物と違う大きさで受け取られます。",
  },
  {
    h: "足元と通り道を撮ったか",
    b: "木の上だけを撮っていないか。門の幅、通路の段差、車を置ける場所まで入れます。",
  },
  {
    h: "動いているものは動画にしたか",
    b: "揺れる枝、傾き、雨のときの水の流れ。静止画にすると情報が落ちます。",
  },
  {
    h: "一言を添えたか",
    b: "「気になっているのはこの木で、この枝が屋根に触っています」。写真だけを並べて送らないでください。",
  },
];

const faqs = [
  {
    q: "写真を送れば、現地を見ずに金額を出してもらえますか。",
    a: "写真だけで決まることはあまりありません。地面の固さ、土の中の状態、幹の内部、境界の位置、道具が入るかどうかは、実物を見ないと判断できないためです。写真を先に渡す目的は現地確認を省くことではなく、現地で確かめる項目を減らし、来てもらう前の時点で話を具体的にしておくことです。写真なしで概算だけを聞くと、幅の広い回答になりやすくなります。費用の目安そのものは料金のページを参照してください。",
  },
  {
    q: "写真は何枚くらい送ればよいですか。",
    a: "枚数を決めるより、揃っているかどうかで考えてください。全景が二方向、手を入れてほしいものが一つずつ、気になる箇所の寄り、足元、門から庭までの通り道、車を置ける場所、電線や隣家との距離が分かる角度。この順で撮ると、自然と必要なぶんが揃います。多すぎて困ることはあまりなく、足りないほうが聞き返しの往復を生みます。",
  },
  {
    q: "写真に何と書き添えればよいですか。",
    a: "三つで足ります。困っていること（屋根に枝が触っている、隣に落ちる）、どうしたいか（形を整えたい、短くしたいだけ）、決まっていないこと（本数を減らすかは相談したい）。この三つがあると、相手は不足している情報だけを聞いてこられます。写真だけを並べて送ると、まず状況の確認から始まることになります。立ち会えない事情がある場合の進め方は、別のエリアのページで扱っています。",
  },
  {
    q: "船橋市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、船橋市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaFunabashiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "現地確認の前に、庭の状態を写真と動画で渡すときの撮り方・撮り忘れやすい場所・添える言葉を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "船橋" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを頼むとき、多くの場合は一度見に来てもらうことになります。ただし、来てもらう前の段階でこちらから何を渡しておくかで、その一回の密度が変わります。何も渡さずに来てもらうと、最初の十数分は状況の確認に使われます。先に写真と動画が届いていれば、その時間は確かめる作業に回ります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          船橋にある家の庭で頼む場合も同じです。このページでは、どの順番で撮るか、何を一緒に写すか、どこを撮り忘れやすいか、写真より動画のほうが伝わるのはどんな場面か、そして写真では決まらないものは何かを整理します。費用の目安そのものは料金のページで扱っています。
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

      <section id="funabashi-why" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          写真を先に渡すと、最初の返答が変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「庭木の剪定をお願いしたい」とだけ書いて送ると、返ってくるのはたいてい質問です。何本あるか、どれくらいの高さか、一度見に伺えるのはいつか。こちらは答えを持っているのに、往復が一回増えます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の状態は、言葉にすると精度が落ちます。「大きめの木」が二メートルなのか五メートルなのかは人によって違い、「少し伸びた」も同じです。写真は、この食い違いを最初から消せる材料です。しかも、こちらが撮って渡すだけで済みます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            ただし、撮り方によっては渡した意味がなくなります。寄った写真ばかりで庭の全体が分からない、大きさの目安が何も写っていない、木は写っているが足元と通り道が写っていない。この三つは、送ったあとで結局聞き返される典型です。次の見出しから、撮る順番の形で整理します。
          </p>
        </div>
      </section>

      <section id="funabashi-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          撮る順番は、全景から寄っていく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          気になっている枝から撮り始めたくなりますが、逆です。広いところから順に寄っていくと、あとで見る人が位置関係を追えます。
        </p>
        <ol className="space-y-4">
          {shootOrder.map((x, i) => (
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
          どこまで手を入れるかの度合いを言葉で揃える方法は
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          、剪定の時期と費用の考え方は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定費用と最適な時期
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="funabashi-forget" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          撮り忘れやすいのは、木そのものではない場所
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手を入れてほしい木は、誰でも撮ります。抜けるのはその周りです。作業する側が知りたいのは、木の姿と同じくらい、そこへどうやって行って、切ったものをどう出すかです。
        </p>
        <div className="space-y-4">
          {forgotSpots.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          搬出経路が狭い場合に何が変わるかは
          <Link href="/area/tokyo/" className="text-primary underline underline-offset-2 mx-1">
            狭小地・搬出経路から考える業者選び
          </Link>
          、境界にかかる枝の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="funabashi-motion" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          静止画では伝わらないものと、現地でしか決まらないもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          写真は形を伝えるのに向きますが、動きと時間の経過は写りません。数秒の動画に切り替えるだけで伝わるものがあります。
        </p>
        <div className="space-y-4">
          {motionItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5 mt-5">
          <h3 className="font-bold text-text-primary mb-2">渡すときは、三行だけ添える</h3>
          <p className="text-[15px] leading-8 text-text-secondary">
            画像や動画だけを並べて送ると、相手はまず「どれをご希望ですか」から始めることになります。困っていること、どうしたいか、まだ決めていないこと。この三つを短く添えるだけで、返ってくるのは確認ではなく提案になります。長く書く必要はありません。「屋根に触っている枝を切りたい。形はこだわらない。ほかの木も一緒に頼むかは相談したい」で足ります。
          </p>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          揺れ方や傾きから何を読み取るかは
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          、水が引かない場合の切り分けは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          、根元の盛り上がりについては
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根が塀・舗装・排水に影響しているとき
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="funabashi-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、撮ったものを渡してから話を始めたいという条件で見ると、次の3つは使い方が想像しやすい構成です。
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

      <section id="funabashi-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="船橋" />
      </section>

      <section id="funabashi-checklist" className="scroll-mt-20 mb-12">
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

      <section id="funabashi-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="funabashi" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/cost/pruning-price/", label: "庭木の剪定費用の相場" },
            { href: "/area/sendai/", label: "立ち会えない庭の頼み方" },
            { href: "/area/shizuoka/", label: "問い合わせ手段と最初のやり取り" },
            { href: "/guide/storm-care/", label: "台風・強風に備える庭木の点検" },
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
          撮ってから当たると、来てもらう一回の中身が変わります。全景・近景・足元・通り道を揃えて相談してみてください。
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
