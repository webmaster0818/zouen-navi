import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/nara/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "奈良の造園・庭の手入れ業者の選び方｜持ち主ではない家族が手配するときの段取り";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "親の家、相続前後の実家、離れて暮らす家族の庭。手配する人と庭の持ち主が別のとき、誰の名前で申し込むか、書面の宛名を誰にするか、連絡経路をどう組むかが先に決まっていないと途中で止まります。奈良で家族が代わりに手配するときの段取りと、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭の持ち主ではない家族が手配する場合の名義・書面・連絡経路の組み方を整理しました。",
  },
};

const toc = [
  { id: "nara-point", label: "手配する人と、庭の持ち主が別のことがある" },
  { id: "nara-first", label: "申し込む前に確かめる4つのこと" },
  { id: "nara-name", label: "誰の名前で申し込み、書面をどこに出すか" },
  { id: "nara-living", label: "本人がその家に住んでいる場合の段取り" },
  { id: "nara-pick", label: "この条件で見ておきたい3サービス" },
  { id: "nara-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "nara-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "nara-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "oniwa-master", "townlife"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "完全自店舗施工で、剪定・伐採・草刈り・芝刈り・植栽などの庭手入れを専門に扱う全国チェーンです。窓口と実際に作業する側が同じ組織になるため、手配する人と現場にいる人が別という状況でも、伝えた内容が経由する段階が少なく済みます。無料の明瞭見積もりで追加料金なしを掲げており、庭師経験10年以上のスタッフが9割以上、リピート率95%以上（公式・自社調べ）としています。運営は株式会社ガーデンメーカーです。",
  "oniwa-master":
    "自社では施工せず、要望に合う業者を無料で紹介する仕組みです。受付は24時間365日で、平日の日中に電話をかけにくい立場の人でも、相談の起点を作りやすい体制になっています。剪定・伐採・草刈り・芝刈りなど庭の手入れ全般に対応し、全国47都道府県に加盟拠点があります。見積りは無料（一部調査費用は別途）としています。",
  "townlife":
    "希望条件を入力すると、複数社からプランと見積もりが無料で届きます。届くものが書面の形になるため、離れて暮らす家族どうしで同じものを見ながら相談するときに扱いやすくなります。外構（エクステリア）専用の請求窓口があり、庭・外構のプラン取り寄せに使えます。運営はタウンライフ株式会社です。",
};

const firstChecks = [
  {
    h: "その家と庭が誰のものか",
    b: "登記上の所有者が誰かということです。親が住んでいても名義は別、相続の手続きが済んでいない、兄弟の共有になっている。どれもあり得ます。手配するだけなら所有者本人でなくてもできますが、木を一本切る、地面を変えるといった、元に戻せない作業を含む場合は、所有者の了解を取ってから進める対象になります。",
  },
  {
    h: "誰が費用を出すか",
    b: "手配する人が出すのか、持ち主が出すのか。ここが決まっていないと、見積もりが届いた段階で話が止まります。支払う人と申し込む人が違う場合は、請求先をどこにするかを問い合わせの時点で伝えておくと、書面の作り直しが起きません。",
  },
  {
    h: "当日、誰が家にいるか",
    b: "本人がいるのか、手配した人が行くのか、誰もいないのか。相手からすると、当日に敷地へ入れるか、水道や電源を借りられるか、判断が要ったときに誰に聞けばよいかが変わります。誰もいない形で進めるなら、その前提で決め事を増やしておく必要があります。",
  },
  {
    h: "終わったことを誰が確認するか",
    b: "作業が終わったとき、その場で見るのは誰か。本人が見るなら、どこまで見てもらうかを伝えておきます。手配した人が後日行くなら、そのあいだに片づけられてしまうもの、動かされてしまうものが出ます。確認する人と時期を、申し込みのときに決めておきます。",
  },
];

const nameAndPaper = [
  {
    h: "申し込みの名義をどちらにするか",
    b: "手配する人の名前で申し込み、作業する場所として実家の住所を伝えるのが、連絡がいちばん行き違いません。持ち主本人の名前で申し込むと、確認の電話が本人に行きます。本人が受けられる状態かどうかで、どちらにするかを決めてください。名義を自分にする場合は、その旨を最初に伝えておきます。",
  },
  {
    h: "見積書・請求書の宛名をどこに出すか",
    b: "申し込み名義と、書面の宛名と、支払う人が全部同じとは限りません。あとから名義を変えると作り直しになるため、最初に「宛名はこの名前、送付先はこの住所」と伝えておきます。書面が実家に届く形にすると、本人が中身を見て驚く、という場面も起こり得ます。",
  },
  {
    h: "連絡先を2つにするときの伝え方",
    b: "見積もりと日程の相談は自分の携帯、当日の連絡は親の固定電話、という分け方は成立します。ただし「両方書いておく」だけでは相手はどちらにかけるか迷います。どの用件をどちらにかけてほしいかを、言葉で添えてください。当日に急ぎの連絡が要る場面では、現地にいる人につながる番号が先に要ります。",
  },
  {
    h: "本人に伝わっていない状態で進めない",
    b: "頼んだこと自体を本人が知らないまま作業日を迎えると、当日に断られることがあります。庭に人が入る、音が出る、木の姿が変わる。本人にとっては自分の家の話です。細かい内容まで共有できなくても、誰がいつ来るのかだけは先に伝わっている状態にしておきます。",
  },
];

const livingCases = [
  {
    h: "残したいものを先に聞いておく",
    b: "植えた経緯のある木、実を採っている木、手をかけている一角。持ち主本人にとっては、伸びているから切る対象という話ではありません。手配する側が「全部さっぱりさせてください」と伝えると、この区別が消えます。切らないでほしいものがあるかを聞き、あるなら相手に名指しで伝えます。",
  },
  {
    h: "当日の本人の負担を見積もる",
    b: "作業の日は、人が出入りし、音が出て、水道や駐車場所を使います。半日から一日、家の中で落ち着かない状態が続きます。高齢の本人が一人でその状況に対応するのは、思っているより負担になります。立ち会いを本人に任せる場合は、どの場面で応対が要るのかを先に伝えておきます。",
  },
  {
    h: "集合住宅や共有部分が絡む場合",
    b: "専用庭、共用の植え込み、敷地の通路。本人が使っている場所でも、手を入れてよいかの判断が管理側にある場合があります。この確認は、業者ではなく依頼する側の仕事になります。手配する人が管理側に直接話せないときは、誰が確認するのかを決めてから進めます。",
  },
  {
    h: "あとで揉めやすいところ",
    b: "切った木が戻らないこと、費用を誰が出したのか曖昧なこと、他の家族に知らされていないこと。この三つが重なると、作業そのものは問題なくても関係の側が残ります。元に戻せない作業と、金額が動く話は、事前に共有した記録を残しておくほうが確実です。",
  },
];

const checklist = [
  {
    h: "所有者が誰かを確かめたか",
    b: "元に戻せない作業を含む場合は、所有者の了解を取ってから進める対象になります。",
  },
  {
    h: "申し込み名義と書面の宛名を決めたか",
    b: "あとから変えると作り直しになります。送付先の住所も一緒に伝えます。",
  },
  {
    h: "どの用件をどちらの連絡先にかけるか伝えたか",
    b: "番号を2つ書くだけでは相手が迷います。用件ごとに指定します。",
  },
  {
    h: "残したいものを本人に聞いたか",
    b: "「全部さっぱり」と伝えると、本人が残したい木の区別が消えます。",
  },
  {
    h: "誰がいつ来るのかを本人に伝えたか",
    b: "知らないまま当日を迎えると、その場で断られることがあります。",
  },
];

const faqs = [
  {
    q: "親の家の庭ですが、本人の名前で申し込む必要がありますか。",
    a: "手配そのものは、持ち主本人でなくてもできます。むしろ、確認の連絡を自分で受けたいなら、自分の名前で申し込み、作業する場所として実家の住所を伝えるほうが行き違いが起きません。ただし、木を切る、地面を変えるといった元に戻せない作業を含む場合は、名義とは別に、所有者本人の了解を取ってから進める対象になります。書面の宛名と請求先は、申し込みのときに指定しておいてください。",
  },
  {
    q: "見積もりの連絡は自分に、当日の連絡は親に、という形にできますか。",
    a: "できますが、連絡先を2つ書いておくだけでは相手がどちらにかけるか迷います。「見積もりと日程の相談はこちらへ、作業当日の連絡は現地のこちらへ」と、用件ごとに指定して伝えてください。当日に急ぎの判断が要る場面では、現地にいる人につながる番号が先に必要になります。逆に、金額が動く話は手配した側に来るようにしておくほうが確実です。",
  },
  {
    q: "本人が「切らなくていい」と言っている木があります。どう伝えればよいですか。",
    a: "その木を名指しで伝えてください。場所と、見分けられる特徴（門の横の一本、物置の裏側、など）を添えると確実です。「全部さっぱりさせてください」という頼み方をすると、この区別は残りません。可能であれば、現地確認のときに本人か手配した人が同席して、現物を指して伝えるのが最も確実です。難しい場合は、写真に印を付けて渡す方法もあります。",
  },
  {
    q: "奈良市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、奈良市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaNaraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭の持ち主ではない家族が手配する場合に、名義・書面の宛名・連絡経路・当日の役割をどう決めるかを整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "奈良" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを頼む人が、その庭の持ち主とは限りません。高齢の親の家、相続の手続きが途中の実家、同居していない家族の家。持ち主は別にいて、探して連絡して日程を決めるのは自分、という形はよくあります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          奈良にある実家の庭を、離れて暮らす家族が手配する場合も同じです。作業の内容そのものは変わりませんが、決めることの数が増えます。誰の名前で申し込むのか、書面はどこに出すのか、どの連絡をどちらに入れてもらうのか。このページでは、手配する側の実務に絞って整理します。
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

      <section id="nara-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          手配する人と、庭の持ち主が別のことがある
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自分の家の庭なら、決めるのも払うのも立ち会うのも自分です。相手からしても、話す相手が一人で完結します。ところが手配する人が持ち主でない場合、この一人が二人以上に分かれます。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          分かれたこと自体は問題ではありません。問題になるのは、分かれていることを相手に伝えていないときです。確認の電話が思っていない人に行く、書面が思っていない宛名で届く、当日の判断を誰もできない。どれも、最初にひとこと伝えておけば起きなかったことです。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            決めるべきは、四つの役割がそれぞれ誰かということです。申し込む人、費用を出す人、当日その場にいる人、終わりを確認する人。全部が同じ人でないなら、その割り振りを相手に渡すところまでが手配の仕事になります。
          </p>
        </div>
      </section>

      <section id="nara-first" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          申し込む前に確かめる4つのこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          問い合わせのフォームを開く前に、この四つだけは手元で固めておきます。
        </p>
        <ol className="space-y-4">
          {firstChecks.map((x, i) => (
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
          家族のあいだで誰が決めて誰が払うかを詰める手順そのものは
          <Link href="/area/niigata/" className="text-primary underline underline-offset-2 mx-1">
            家族で持つ庭の意思決定
          </Link>
          、費用の目安は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="nara-name" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          誰の名前で申し込み、書面をどこに出すか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          ここは好みの問題に見えて、あとから直すと手間が大きいところです。最初に決めて、最初に伝えます。
        </p>
        <div className="space-y-4">
          {nameAndPaper.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          届いた書面のどこを見るかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          で、やり取りの手段ごとの向き不向きは
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="nara-living" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          本人がその家に住んでいる場合の段取り
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          空き家の庭と、人が住んでいる家の庭では、手配する側が気にする点が変わります。
        </p>
        <div className="space-y-4">
          {livingCases.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          当日に誰も行けない形で進める場合の手順は
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会えない庭の頼み方
          </Link>
          、立ち会うときの距離の取り方は
          <Link href="/area/sagamihara/" className="text-primary underline underline-offset-2 mx-1">
            作業当日に立ち会うときの距離の取り方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="nara-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、手配する人と現場が離れているという条件で見ると、次の3つは連絡の経路や、届くものの形の点で扱いやすい構成です。
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

      <section id="nara-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="奈良" />
      </section>

      <section id="nara-checklist" className="scroll-mt-20 mb-12">
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

      <section id="nara-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="nara" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/sendai/", label: "立ち会えない庭の頼み方" },
            { href: "/area/niigata/", label: "家族で持つ庭の意思決定" },
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンス" },
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
          申し込む人、払う人、当日いる人、確認する人。四つの割り振りを添えて問い合わせると、その後のやり取りが短く済みます。
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
