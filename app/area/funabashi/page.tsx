import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/funabashi/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "船橋の造園・庭の手入れ業者の選び方｜現地調査の前に写真と動画で庭の状態を伝える方法";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "現地調査の前に庭の状態を伝えておくと、最初の回答が具体的になります。撮影の順序、大きさの基準となる物の写し方、撮り忘れやすい場所、動画のほうが伝わる場面、写真では判断できない事項について、船橋で庭の手入れを依頼する際の伝え方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "現地調査の前に写真と動画で庭の状態を伝えるという観点から、船橋での業者選びを整理しています。",
  },
};

const toc = [
  { id: "funabashi-why", label: "写真を事前に送ると最初の回答が具体的になります" },
  { id: "funabashi-order", label: "撮影は全景から近景の順に行う" },
  { id: "funabashi-forget", label: "撮り忘れやすいのは木の周辺です" },
  { id: "funabashi-motion", label: "静止画では伝わらない事項と現地でのみ判断できる事項" },
  { id: "funabashi-pick", label: "この条件に適した3サービス" },
  { id: "funabashi-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "funabashi-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "funabashi-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["mitsumoa", "houzz", "oniwa-110"] as const;

const pickReasons: Record<string, string> = {
  "mitsumoa":
    "条件を入力すると複数の業者から見積もりが届き、依頼後は業者とチャットで直接打ち合わせができる仕組みです。撮影した写真をその場で送付し、追加で撮影すべき箇所を確認できます。剪定・草刈り・造園のカテゴリがあり、全国47都道府県が対象で、見積もり依頼は無料です。運営は株式会社ミツモアです。",
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価付きの口コミが掲載されています。他の庭の写真を事前に確認しておくと、自分の庭の写真に添える説明を考えやすくなります。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
  "oniwa-110":
    "草刈り・草むしり・剪定・伐採・抜根・芝刈り・植栽など、作業の区分が分かれています。写真を示しながら、その状態がどの区分に該当するかを相談する使い方ができます。受付は24時間365日、現地調査・見積もりは無料（条件あり）と公表しており、請負賠償保険に加入しているとされています。運営は東証上場のシェアリングテクノロジー株式会社です。",
};

const shootOrder = [
  {
    h: "最初に全景を離れた位置から撮影する",
    b: "庭全体が一枚に収まる位置まで下がって撮影します。住宅側から庭を見た一枚と、庭の奥から住宅側を見た一枚の二方向があると、配置物の位置関係まで伝わります。近接写真のみでは、どの木がどこにあるのかが判別できず、「全体が分かる写真はありますか」と確認を求められることになります。",
  },
  {
    h: "次に、手入れを希望する対象を一本ずつ撮影する",
    b: "木の場合は根元から先端までを一枚に収めます。生垣の場合は端から端までを区切って数枚撮影します。剪定を希望する木を一枚ずつ分けておくと、本数の数え違いを防げます。全景の中でどの木かが分かりにくい場合は、撮影順に番号を付けて伝えます。",
  },
  {
    h: "最後に、気になる箇所を近接で撮影する",
    b: "枯れた枝、幹の割れ、白い付着物、葉の斑点、根元の盛り上がりなど、問い合わせのきっかけとなった箇所を近接で撮影します。ただし、近接写真のみを送ると庭のどの部分かが分からなくなるため、全景と近景を撮影した後に撮影する順序が重要です。",
  },
  {
    h: "大きさの基準となる物を必ず一緒に写す",
    b: "写真だけでは高さも太さも判断できません。人が立つ、脚立を置く、物干し竿やブロック塀を一緒に写すなど、大きさが分かる物を画面に入れてください。基準となる物が写っていない写真は、実際より小さく、あるいは大きく判断されることがあります。二階建て住宅の何階分にあたるかが分かる角度で撮影することも有効です。",
  },
];

const forgotSpots = [
  {
    h: "木の根元と周辺の地面",
    b: "依頼者が気にしているのは枝であっても、作業者が最初に確認するのは根元です。根元に石が組まれているか、下草が茂っているか、地面が土か砂利か。剪定した枝の一時置き場もここで決まります。上部のみを撮影し、根元が写っていない写真が多く見られます。",
  },
  {
    h: "門から庭までの通路",
    b: "作業者、道具、剪定した枝が通る経路です。門の幅、通路の幅、途中の段差、曲がり角、扉の開く方向を確認します。この経路が狭いと、作業そのものより搬出に時間がかかります。門の外から通路を見た一枚と、通路の途中から庭の方向を見た一枚があると状況が伝わります。",
  },
  {
    h: "道路に面した側と駐車場所",
    b: "作業車の駐車位置は、当日の段取りに直結します。住宅前の道路幅、一方通行かどうか、自宅の駐車スペースを空けられるかを確認します。庭の中のみを撮影していると、この情報が欠落します。",
  },
  {
    h: "電線・隣家・建物との距離",
    b: "枝が電線に近いか、隣地にかかっているか、屋根や壁に接触しているかは、木の正面から撮影しても判別できません。やや横に回り込み、木と対象物の両方が一枚に収まる角度から撮影します。距離が近いほど作業方法が変わるため、この情報が伝わっているかどうかで相談の進み方が変わります。",
  },
];

const motionItems = [
  {
    h: "風で揺れる枝は動画で伝える",
    b: "写真では静止して見える枝も、揺れ方から付け根の状態を推測できます。一本だけ異なる動き方をする、揺れた後の戻りが遅い、風が止んでも垂れ下がったままといった状態です。強風の後に気になった枝は、数秒程度で構いませんので揺れている状態を撮影してください。",
  },
  {
    h: "傾きは周囲を移動しながら撮影する",
    b: "傾いた木を正面から撮影すると、多くの場合は傾きが写りません。カメラの角度によって見え方が変わるためです。柱や塀など垂直であることが分かる物を一緒に写し、木の周囲を移動しながら撮影すると、どの方向にどの程度傾いているかが伝わります。根元の地面が持ち上がっている場合は、その部分も撮影します。",
  },
  {
    h: "水の溜まり方は降雨中と降雨後に撮影する",
    b: "乾いた後の地面を撮影しても、水が溜まる場所は写りません。降雨中にどこへ流れ、どこに残るか。雨が止んでから数時間経過した時点でまだ残っているか。この二つを撮影しておくと、排水の問題か、それ以外の原因かを判断しやすくなります。",
  },
  {
    h: "写真でも動画でも判断できない事項",
    b: "地面の固さ、土中の状態、幹の内部の傷み、隣地との境界の位置、道具の搬入の可否は、現地確認でなければ判断できません。写真を送る目的は現地確認を省くことではなく、現地で確認する項目を絞ることです。この点を誤ると、見積もりの金額に幅がある状態のまま話が進みます。",
  },
];

const checklist = [
  {
    h: "全景を二方向から撮影したか",
    b: "住宅側から庭を見た一枚と、庭の奥から住宅側を見た一枚が必要です。位置関係はこの写真でのみ伝わります。",
  },
  {
    h: "大きさの基準となる物が写っているか",
    b: "人、脚立、塀、物干し竿などを写します。基準となる物がない写真は、実物と異なる大きさで判断されます。",
  },
  {
    h: "根元と通路を撮影したか",
    b: "木の上部のみを撮影していないかを確認します。門の幅、通路の段差、駐車可能な場所まで撮影します。",
  },
  {
    h: "動きのあるものは動画で撮影したか",
    b: "揺れる枝、傾き、降雨時の水の流れは、静止画では情報が欠落します。",
  },
  {
    h: "説明を添えたか",
    b: "「気になっているのはこの木で、この枝が屋根に接触しています」のように説明を添えます。写真のみを送付することは避けてください。",
  },
];

const faqs = [
  {
    q: "写真を送れば、現地を見ずに金額を出してもらえますか。",
    a: "写真のみで判断できることは多くありません。地面の固さ、土中の状態、幹の内部、境界の位置、道具の搬入の可否は、現地を確認しなければ判断できないためです。写真を事前に送る目的は現地確認を省くことではなく、現地で確認する項目を減らし、訪問前の段階で相談内容を具体的にすることです。写真なしで概算のみを尋ねると、金額に幅のある回答になりやすくなります。費用の目安は料金のページをご参照ください。",
  },
  {
    q: "写真は何枚くらい送ればよいですか。",
    a: "枚数よりも、必要な写真が揃っているかを基準にしてください。全景を二方向、手入れを希望する対象を一つずつ、気になる箇所の近接、根元、門から庭までの通路、駐車可能な場所、電線や隣家との距離が分かる角度の写真です。この順序で撮影すると、必要な写真が揃います。枚数が多くて問題になることは少なく、不足しているほうがやり取りの往復を生みます。",
  },
  {
    q: "写真に何と書き添えればよいですか。",
    a: "三点で十分です。困っていること（屋根に枝が接触している、隣地に落ちる）、希望する対応（形を整えたい、短くしたい）、決まっていないこと（本数を減らすかは相談したい）です。この三点があれば、業者は不足している情報のみを確認できます。写真のみを送付すると、まず状況の確認から始まることになります。立ち会いができない場合の進め方は、別のエリアのページで解説しています。",
  },
  {
    q: "船橋市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、船橋市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "現地調査の前に庭の状態を写真と動画で伝える際の撮影方法、撮り忘れやすい場所、添える説明を整理しています。",
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
          庭の手入れを依頼する際は、多くの場合、一度現地調査を受けることになります。ただし、訪問前の段階で依頼者から何を伝えておくかによって、その一回で確認できる内容が変わります。何も伝えずに訪問を受けると、最初の十数分は状況の確認に費やされます。写真と動画を事前に送っておけば、その時間を確認作業に充てられます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          船橋市内の住宅の庭を依頼する場合も同様です。本ページでは、撮影の順序、一緒に写す物、撮り忘れやすい場所、写真より動画が適している場面、写真では判断できない事項を整理します。費用の目安は料金のページで解説しています。
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
          写真を事前に送ると最初の回答が具体的になります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「庭木の剪定をお願いしたい」とだけ記載して送ると、多くの場合、質問が返ってきます。本数、高さ、現地調査の候補日などです。依頼者は回答を把握しているにもかかわらず、やり取りが一往復増えます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の状態は、言葉にすると精度が下がります。「大きめの木」が二メートルなのか五メートルなのかは人によって異なり、「少し伸びた」も同様です。写真は、この認識の相違を最初から解消できる材料であり、撮影して送るだけで済みます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            ただし、撮影方法によっては送付した意味がなくなります。近接写真ばかりで庭の全体が分からない、大きさの基準となる物が写っていない、木は写っているが根元と通路が写っていない。この三つは、送付後に改めて確認を求められる典型的な例です。以下では、撮影の順序に沿って整理します。
          </p>
        </div>
      </section>

      <section id="funabashi-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          撮影は全景から近景の順に行う
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          気になる枝から撮影を始めがちですが、順序は逆です。広い範囲から順に近づいて撮影すると、確認する側が位置関係を把握できます。
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
          手入れの程度を言葉で統一する方法は
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          、剪定の時期と費用の考え方は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定費用と適した時期
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="funabashi-forget" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          撮り忘れやすいのは木の周辺です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手入れを希望する木は誰もが撮影しますが、その周辺が抜け落ちがちです。作業者にとっては、木の状態と同程度に、現地への進入経路と剪定した枝の搬出方法が重要です。
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
          搬出経路が狭い場合の影響は
          <Link href="/area/tokyo/" className="text-primary underline underline-offset-2 mx-1">
            狭小地・搬出経路を考慮した業者選び
          </Link>
          、境界にかかる枝の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="funabashi-motion" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          静止画では伝わらない事項と現地でのみ判断できる事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          写真は形状を伝えるのに適していますが、動きや時間の経過は写りません。数秒の動画に切り替えるだけで伝わる情報があります。
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
          <h3 className="font-bold text-text-primary mb-2">送付時は三点の説明を添える</h3>
          <p className="text-[15px] leading-8 text-text-secondary">
            画像や動画のみを送付すると、業者はまず「どの作業をご希望ですか」という確認から始めることになります。困っていること、希望する対応、まだ決めていないこと。この三点を簡潔に添えるだけで、返ってくる回答は確認ではなく提案になります。長文である必要はありません。「屋根に接触している枝を切りたい。形にはこだわらない。ほかの木もあわせて依頼するかは相談したい」程度で十分です。
          </p>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          揺れ方や傾きから判断できる事項は
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          、水が引かない場合の原因の切り分けは
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          、根元の盛り上がりについては
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根が塀・舗装・排水に影響しているとき
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="funabashi-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、撮影した写真や動画を送付してから相談を始めたいという条件では、次の3サービスが利用方法を想定しやすい構成です。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/cost/pruning-price/", label: "庭木の剪定費用の相場" },
            { href: "/area/sendai/", label: "立ち会いができない場合の依頼方法" },
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
          撮影してから相談すると、一回の現地調査で確認できる内容が変わります。全景・近景・根元・通路の写真を揃えて相談することをおすすめします。
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
