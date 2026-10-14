import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/himeji/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "姫路の造園・庭の手入れ業者の選び方｜複数の作業を1社にまとめるか、分けて頼むか";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の困りごとは一つずつ来るとは限りません。剪定も草刈りも処分も水はけも気になる、という状態で頼むとき、1社にまとめるか、作業ごとに分けるかで段取りが変わります。姫路で庭の手入れを頼むときのまとめ方・分け方の判断材料と、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "複数の作業を1社にまとめるか分けて頼むかという観点から、姫路での業者選びを整理しました。",
  },
};

const toc = [
  { id: "himeji-point", label: "庭の困りごとは、一つずつは来ない" },
  { id: "himeji-together", label: "1社にまとめたときに効くこと" },
  { id: "himeji-split", label: "分けて出したほうがよい場面" },
  { id: "himeji-order", label: "まとめられない組み合わせと、順番が決まっている作業" },
  { id: "himeji-pick", label: "この条件で見ておきたい3サービス" },
  { id: "himeji-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "himeji-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "himeji-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["houzz", "hikaku-biz", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽と、専門家が領域別に分かれた形で検索できます。事例写真と星評価レビューが掲載されているため、一つの相手がどの領域までを扱っているのかを、写真を見ながら確かめられます。まとめて頼める範囲を先に見当づけたいときの材料になります。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
  "hikaku-biz":
    "造園工事に加えて、門・塀・フェンス・デッキ・舗装・排水といった庭まわりの工事のカテゴリが揃っています。庭の作業と外構側の工事が同じ窓口に並んでいるので、「これも一緒に頼めるか」を一度に当たりたいときに使えます。発注側の利用は無料で、運営21年・登録事業者10万社超としています。",
  "mitsumoa":
    "条件を入力すると複数業者から見積もりが届き、依頼後は業者とチャットで直接やり取りできます。まとめられるかどうかは相手によって違うため、正式に頼む前に「この作業も含められますか」と聞ける経路があるのは、範囲を組むうえで効きます。剪定・草刈り・造園のカテゴリがあり、見積もり依頼は無料です。",
};

const togetherMerits = [
  {
    h: "出張と段取りが一回で済む",
    b: "現地を見に来る、日程を合わせる、駐車場所と搬出経路を確かめる。作業そのものの前後には、回数分だけ発生する手間があります。別々の相手に頼むと、この部分が作業の数だけ繰り返されます。こちらが立ち会う回数も、そのぶん増えます。",
  },
  {
    h: "責任の所在が一つになる",
    b: "作業のあとで不具合が出たとき、どこの作業が原因かをこちらが切り分けなくて済みます。刈ったあとに敷いたシートがずれた、切ったあとに根が残っていた。工程がつながっている場合、途中で相手が変わると、この切り分けが依頼した側に回ってきます。",
  },
  {
    h: "全体を見た順番を組んでもらえる",
    b: "庭の作業には、先にやっておくと後が楽になるものがあります。全部を一つの相手が見ていれば、どれを先にやるかを向こうが組めます。個別に頼むと、それぞれが自分の作業だけを前提に日程を出してくるため、順番がこちらの調整事項になります。",
  },
  {
    h: "現地で増えたときの相談先が決まっている",
    b: "見積もりの段階では分からなかったものが、作業中に出てくることはあります。伸びた枝の奥に枯れ枝があった、草を刈ったら傾いた支柱が出てきた。相手が一つなら、その場で相談して判断できます。分かれていると、誰の担当か分からないものが残ります。",
  },
];

const splitMerits = [
  {
    h: "それぞれの専門に出せる",
    b: "木を切る作業と、地面を舗装する作業と、機械を入れる作業では、手を動かす人が違います。まとめて受けた相手が、その中の一部を別の業者に回している場合もあります。どこを誰がやるのかが分かるなら、最初から分けて出したほうが、話が直接通ります。",
  },
  {
    h: "適した時期がずれる作業がある",
    b: "木の種類によって手を入れるのに適した時期は違い、草の対処や地面の工事とは重ならないことがあります。一度にまとめようとすると、どれかが適期から外れます。時期を優先するなら、作業ごとに分けて、それぞれのタイミングで出す組み方になります。",
  },
  {
    h: "断られた作業だけを別に出せる",
    b: "問い合わせたうちの一部だけ「うちでは扱っていない」と返ってくることがあります。このとき、全部をまとめて別の相手に出し直す必要はありません。受けてもらえる部分はそのまま進め、外れた作業だけを切り出して別に当たるほうが早く済みます。",
  },
  {
    h: "作業の規模が大きく違うとき",
    b: "庭木を一本整えるだけの作業と、重機や車両が要る作業が同じ依頼に入っていると、片方に合わせた体制で見積もられることがあります。規模の差が大きいなら、分けて出したほうが、それぞれに合った形で返ってきます。",
  },
];

const orderRules = [
  {
    h: "資格や許可の領域が違うものは、まとめきれない",
    b: "庭木の手入れと、外構の構造物、地面を掘る工事、電気の配線では、扱う領域が違います。一つの窓口で受けられる場合でも、実際には別の担当が入っていることがあります。まとめて頼むときは「どこまでを御社が直接やり、どこから先は別になりますか」と聞いておくと、あとで話が途切れません。",
  },
  {
    h: "順番が決まっている作業がある",
    b: "刈ってから敷く、切ってから運ぶ、抜いてから舗装する。逆にすると、やり直しになるか、片方の仕上がりを壊します。分けて頼む場合、この前後関係はこちらが把握しておく必要があります。順番が分からないときは、最初に相談した相手に「どれが先ですか」と聞いておきます。",
  },
  {
    h: "窓口が分かれるときの調整役を決める",
    b: "分けて出すと、日程の突き合わせ、前の作業の仕上がりの引き渡し、同じ日に重ならないようにする調整が発生します。これを誰がやるのかを決めていないと、依頼した側に全部が戻ってきます。自分で調整するのか、どちらかの相手に前後を合わせてもらうのかを、依頼のときに決めておきます。",
  },
  {
    h: "工程のあいだの期間をどう置くか",
    b: "続けてやるのか、間を空けるのか。間が空くあいだに草が戻る、切った枝を置いたままになる、掘った場所がそのまま残る。分けて頼むと、この「あいだの状態」が必ず発生します。どのくらい空くのかと、そのあいだ庭がどうなるのかは、先に聞いておく対象です。",
  },
];

const checklist = [
  {
    h: "困っていることを全部書き出したか",
    b: "まとめるか分けるかは、全体が見えていないと決められません。気になっている箇所を先に並べます。",
  },
  {
    h: "どれが同じ日にできるかを聞いたか",
    b: "一社で受けられる範囲は相手によって違います。全部を並べて「どこまで御社で対応できますか」と聞きます。",
  },
  {
    h: "順番が決まっている作業を把握したか",
    b: "刈ってから敷く、切ってから運ぶ、抜いてから舗装する。逆にするとやり直しになります。",
  },
  {
    h: "分ける場合の調整役を決めたか",
    b: "日程の突き合わせと前後の引き渡しを、自分がやるのか相手に頼むのかを決めておきます。",
  },
  {
    h: "一部だけ断られたときの進め方を考えたか",
    b: "受けてもらえる部分は進め、外れた作業だけを切り出して別に当たるほうが早く済みます。",
  },
];

const faqs = [
  {
    q: "剪定と草刈りと枝の処分を、まとめて一社に頼めますか。",
    a: "受けている相手であれば、まとめて頼めます。掲載しているサービスの中には、剪定・伐採・草刈り・芝刈り・植栽といった庭の作業を幅広く扱う形をとっているものがあります。ただし、どこまでを同じ日に、同じ体制でやれるかは相手によって違います。困っている箇所を全部並べたうえで「どこまで御社で対応できますか」と聞き、外れた部分だけを別に出す進め方が確実です。",
  },
  {
    q: "庭木の手入れと外構の傷みを、同じ相手に頼めますか。",
    a: "窓口として両方を受けているところはありますが、実際に手を動かす担当が同じとは限りません。庭木の手入れと、塀やフェンス、舗装や排水の工事では扱う領域が違い、途中から別の会社が入ることがあります。まとめて頼むこと自体は問題ありませんが、「どこまでを御社が直接やり、どこから先は別になりますか」を先に聞いておくと、途中で話が途切れずに済みます。",
  },
  {
    q: "分けて頼むと、合計の手間は増えますか。",
    a: "現地確認と日程調整が相手の数だけ発生するため、こちらが動く回数は増えます。そのかわり、それぞれの作業を適した時期に出せること、専門に直接話せること、一部を断られても全体をやり直さずに済むことが利点になります。分ける場合は、順番が決まっている作業の前後関係と、日程を誰が突き合わせるのかを先に決めておいてください。",
  },
  {
    q: "姫路市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、姫路市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaHimejiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "複数の作業を1社にまとめる場合と、分けて頼む場合の違いと、まとめきれない組み合わせを整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "姫路" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭のことで業者を探し始める時点で、気になっているのは一つだけではないことが多いはずです。枝が伸びている。足元の草も伸びている。切った枝をどう出すかも決まっていない。ついでに言えば、塀の際が傷んでいるし、雨のあと水が引かない場所もある。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          姫路にある家の庭で頼む場合も、ここで一度分かれ道があります。全部を一社にまとめて頼むのか、作業ごとに分けて出すのか。どちらが正しいというものではなく、まとめられる組み合わせと、まとめきれない組み合わせがあります。このページでは、その判断に必要な材料を整理します。費用の目安そのものは
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          を参照してください。
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

      <section id="himeji-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭の困りごとは、一つずつは来ない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭は一つの場所なので、手が回らなくなるときは全体が同時に傾きます。木が伸びれば下が暗くなり、暗くなれば地面の状態が変わり、風通しが落ちれば別の問題が出てきます。だから「剪定だけ」で済む状態になっていることのほうが、むしろ少なくなります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          ところが依頼の形は、たいてい作業の名前で分かれています。剪定、伐採、草刈り、処分、外構の補修。どの入口から入るかで、返ってくる話の範囲が変わります。一つの入口から入って全部を頼むこともできますし、入口ごとに分けて出すこともできます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            判断の軸は三つです。まとめたときに何が楽になるか、分けたときに何が取り戻せるか、そしてそもそもまとめられない組み合わせかどうか。最後の一つを先に確かめておかないと、まとめたつもりが途中で止まります。
          </p>
        </div>
      </section>

      <section id="himeji-together" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          1社にまとめたときに効くこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          まとめる利点は、作業そのものよりも、その前後にあります。
        </p>
        <ol className="space-y-4">
          {togetherMerits.map((x, i) => (
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
          年間を通して同じ相手に見てもらう形にする場合の考え方は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="himeji-split" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          分けて出したほうがよい場面
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          まとめることで失われるものもあります。分けたほうが通りがよくなるのは、次のような場合です。
        </p>
        <div className="space-y-4">
          {splitMerits.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          窓口が自社で施工するのか、他社を紹介する形なのかの見分けは
          <Link href="/area/nagoya/" className="text-primary underline underline-offset-2 mx-1">
            自社施工型と紹介型の見分け方
          </Link>
          で、木を切る作業そのものの区分は
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            伐採・抜根のサービス解説
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="himeji-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          まとめられない組み合わせと、順番が決まっている作業
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          ここだけは、まとめるか分けるかの好みの問題ではありません。確かめずに進めると、途中で止まります。
        </p>
        <div className="space-y-4">
          {orderRules.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          相手が持っている資格や許可の確かめ方は
          <Link href="/area/chiba/" className="text-primary underline underline-offset-2 mx-1">
            資格・許可の確かめ方
          </Link>
          、切ったものの行き先を先に決めておく話は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="himeji-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、複数の作業をまとめられるかどうかを先に確かめたいという条件で見ると、次の3つは扱っている領域の広さや、事前に聞ける経路の点で材料が揃いやすい構成です。
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

      <section id="himeji-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="姫路" />
      </section>

      <section id="himeji-checklist" className="scroll-mt-20 mb-12">
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

      <section id="himeji-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="himeji" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/maintenance/", label: "庭木の年間メンテナンス" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/area/nagoya/", label: "自社施工型と紹介型の見分け方" },
            { href: "/area/okayama/", label: "相見積もりの揃え方と断り方" },
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
          困っている箇所を全部並べて「どこまで御社で対応できますか」と聞くところから始めると、まとめるか分けるかが決まります。
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
