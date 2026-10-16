import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/himeji/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "姫路の造園・庭の手入れ業者の選び方｜複数の作業を1社にまとめて依頼するか分けて依頼するか";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の困りごとは一つずつ発生するとは限りません。剪定、草刈り、処分、水はけのいずれも気になる状態で依頼する場合、1社にまとめるか作業ごとに分けるかによって段取りが変わります。姫路で庭の手入れを依頼する際の判断材料と、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "複数の作業を1社にまとめて依頼するか、分けて依頼するかという観点から、姫路での業者選びを整理しています。",
  },
};

const toc = [
  { id: "himeji-point", label: "庭の困りごとは同時に発生します" },
  { id: "himeji-together", label: "1社にまとめて依頼する利点" },
  { id: "himeji-split", label: "分けて依頼したほうがよい場面" },
  { id: "himeji-order", label: "まとめられない組み合わせと、順序が決まっている作業" },
  { id: "himeji-pick", label: "この条件に適した3サービス" },
  { id: "himeji-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "himeji-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "himeji-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["houzz", "hikaku-biz", "mitsumoa"] as const;

const pickReasons: Record<string, string> = {
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽と、専門家を領域別に検索できます。事例写真と星評価付きの口コミが掲載されているため、一つの業者がどの領域まで扱っているのかを写真で確認できます。まとめて依頼できる範囲を事前に把握したい場合の判断材料になります。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
  "hikaku-biz":
    "造園工事に加えて、門・塀・フェンス・デッキ・舗装・排水といった庭まわりの工事のカテゴリが揃っています。庭の作業と外構工事が同じ窓口で扱われているため、「この作業もあわせて依頼できるか」を一度に確認したい場合に利用できます。発注者の利用は無料で、運営21年・登録事業者10万社超としています。",
  "mitsumoa":
    "条件を入力すると複数業者から見積もりが届き、依頼後は業者とチャットで直接やり取りできます。まとめて依頼できるかどうかは業者によって異なるため、正式な依頼の前に「この作業も含められますか」と確認できる経路があることは、依頼範囲を決めるうえで有用です。剪定・草刈り・造園のカテゴリがあり、見積もり依頼は無料です。",
};

const togetherMerits = [
  {
    h: "出張と段取りが一回で済む",
    b: "現地確認、日程調整、駐車場所と搬出経路の確認など、作業の前後には依頼の回数分だけ発生する手間があります。別々の業者に依頼すると、この手間が作業の数だけ繰り返され、依頼者が立ち会う回数も増えます。",
  },
  {
    h: "責任の所在が一つになる",
    b: "作業後に不具合が生じた際、どの作業が原因かを依頼者が切り分ける必要がありません。草刈り後に敷いたシートがずれた、伐採後に根が残っていたなど、工程が連続している場合、途中で業者が変わると、原因の切り分けが依頼者側の負担になります。",
  },
  {
    h: "全体を踏まえた作業順序を組んでもらえる",
    b: "庭の作業には、先に行うと後の作業が容易になるものがあります。すべてを一つの業者が把握していれば、作業の順序を業者側で組み立てられます。個別に依頼すると、各業者が自社の作業のみを前提に日程を提示するため、順序の調整が依頼者の負担になります。",
  },
  {
    h: "作業中に追加が生じた場合の相談先が明確になる",
    b: "見積もりの段階では分からなかった事項が、作業中に判明することがあります。伸びた枝の奥に枯れ枝があった、草を刈ったところ傾いた支柱が見つかったといった場合です。依頼先が一つであれば、その場で相談して判断できます。依頼先が分かれていると、担当の不明確な事項が残ります。",
  },
];

const splitMerits = [
  {
    h: "各分野の専門業者に依頼できる",
    b: "木を伐採する作業、地面を舗装する作業、重機を使用する作業では、担当する作業者が異なります。まとめて受注した業者が、その一部を別の業者に外注している場合もあります。どの作業を誰が担当するかが明確であれば、最初から分けて依頼したほうが、直接やり取りできます。",
  },
  {
    h: "適期が異なる作業がある",
    b: "木の種類によって手入れの適期は異なり、草の対処や地面の工事の時期と重ならないことがあります。一度にまとめようとすると、いずれかの作業が適期から外れます。時期を優先する場合は、作業ごとに分けて、それぞれの適期に依頼する方法になります。",
  },
  {
    h: "断られた作業のみを別に依頼できる",
    b: "問い合わせた作業の一部について「当社では扱っていない」と回答されることがあります。この場合、すべてをまとめて別の業者に依頼し直す必要はありません。受注可能な部分はそのまま進め、断られた作業のみを切り出して別の業者に依頼するほうが効率的です。",
  },
  {
    h: "作業の規模が大きく異なる場合",
    b: "庭木を一本整えるだけの作業と、重機や車両を必要とする作業が同じ依頼に含まれていると、規模の大きい作業に合わせた体制で見積もられることがあります。規模の差が大きい場合は、分けて依頼したほうが、それぞれに適した見積もりを得られます。",
  },
];

const orderRules = [
  {
    h: "資格や許可の領域が異なる作業はまとめられない場合があります",
    b: "庭木の手入れ、外構の構造物、地面の掘削工事、電気の配線では、扱う領域が異なります。一つの窓口で受注できる場合でも、実際には別の担当者が作業することがあります。まとめて依頼する際は「どこまでを御社が直接担当し、どこから先は別の業者になりますか」と確認しておくと、後で連絡が途絶えることを防げます。",
  },
  {
    h: "順序が決まっている作業がある",
    b: "草を刈ってからシートを敷く、剪定してから搬出する、抜根してから舗装するといった作業は、順序を逆にするとやり直しになるか、一方の仕上がりを損ないます。分けて依頼する場合は、この前後関係を依頼者が把握しておく必要があります。順序が分からない場合は、最初に相談した業者に確認しておきます。",
  },
  {
    h: "依頼先が分かれる場合の調整役を決める",
    b: "分けて依頼すると、日程の調整、前工程の仕上がりの引き渡し、同日の作業の重複を避ける調整が発生します。調整役を決めていないと、すべての調整が依頼者に戻ってきます。依頼者自身が調整するのか、いずれかの業者に前後の調整を依頼するのかを、依頼時に決めておきます。",
  },
  {
    h: "工程間の期間の設定",
    b: "作業を連続して行うのか、間隔を空けるのかを決めます。間隔が空く間に草が再び伸びる、剪定した枝が置かれたままになる、掘削した場所がそのまま残るなど、分けて依頼すると工程間の状態が必ず発生します。どの程度の期間が空くのか、その間の庭の状態はどうなるのかを、事前に確認しておきます。",
  },
];

const checklist = [
  {
    h: "困っている事項をすべて書き出したか",
    b: "まとめるか分けるかは、全体を把握しなければ判断できません。気になっている箇所を先に一覧にします。",
  },
  {
    h: "同日に対応できる作業を確認したか",
    b: "一社で受注できる範囲は業者によって異なります。すべての作業を示して「どこまで御社で対応できますか」と確認します。",
  },
  {
    h: "順序が決まっている作業を把握したか",
    b: "草を刈ってからシートを敷く、剪定してから搬出する、抜根してから舗装するといった作業は、順序を逆にするとやり直しになります。",
  },
  {
    h: "分けて依頼する場合の調整役を決めたか",
    b: "日程の調整と工程間の引き渡しを、依頼者が行うのか業者に依頼するのかを決めておきます。",
  },
  {
    h: "一部を断られた場合の進め方を検討したか",
    b: "受注可能な部分は進め、断られた作業のみを切り出して別の業者に依頼するほうが効率的です。",
  },
];

const faqs = [
  {
    q: "剪定と草刈りと枝の処分を、まとめて一社に頼めますか。",
    a: "対応している業者であれば、まとめて依頼できます。掲載しているサービスの中には、剪定・伐採・草刈り・芝刈り・植栽といった庭の作業を幅広く扱うものがあります。ただし、どこまでを同日に、同じ体制で対応できるかは業者によって異なります。困っている箇所をすべて示したうえで「どこまで御社で対応できますか」と確認し、対応できない部分のみを別に依頼する方法が確実です。",
  },
  {
    q: "庭木の手入れと外構の傷みを、同じ相手に頼めますか。",
    a: "窓口として両方を受け付けている業者はありますが、実際の作業担当者が同じとは限りません。庭木の手入れと、塀やフェンス、舗装や排水の工事では扱う領域が異なり、途中から別の会社が担当することがあります。まとめて依頼すること自体に問題はありませんが、「どこまでを御社が直接担当し、どこから先は別の業者になりますか」を事前に確認しておくと、途中で連絡が途絶えることを防げます。",
  },
  {
    q: "分けて頼むと、合計の手間は増えますか。",
    a: "現地確認と日程調整が業者の数だけ発生するため、依頼者の手間は増えます。その一方で、それぞれの作業を適期に依頼できること、専門業者と直接やり取りできること、一部を断られても全体をやり直さずに済むことが利点です。分けて依頼する場合は、順序が決まっている作業の前後関係と、日程の調整役を事前に決めておいてください。",
  },
  {
    q: "姫路市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、姫路市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "複数の作業を1社にまとめて依頼する場合と、分けて依頼する場合の違い、まとめられない組み合わせを整理しています。",
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
          庭のことで業者を探し始める時点では、気になっている事項が一つだけではないことが多くあります。枝が伸びている、足元の草も伸びている、剪定した枝の処分方法も決まっていない。さらに、塀の際が傷んでいる、雨の後に水が引かない場所がある、といった場合もあります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          姫路市内の住宅の庭を依頼する場合も、すべてを一社にまとめて依頼するのか、作業ごとに分けて依頼するのかを判断する必要があります。どちらが正しいというものではなく、まとめられる組み合わせと、まとめられない組み合わせがあります。本ページでは、その判断に必要な材料を整理します。費用の目安は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          をご参照ください。
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
          庭の困りごとは同時に発生します
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭は一つの空間であるため、管理が行き届かなくなると全体の状態が同時に悪化します。木が伸びれば下が暗くなり、暗くなれば地面の状態が変わり、風通しが悪くなれば別の問題が生じます。そのため「剪定のみ」で済む状態であることは、むしろ少数です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一方、依頼の形態は、多くの場合、作業の名称で区分されています。剪定、伐採、草刈り、処分、外構の補修など、どの窓口から依頼するかによって、回答の範囲が変わります。一つの窓口からすべてを依頼することも、窓口ごとに分けて依頼することもできます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            判断の基準は三つです。まとめた場合に何が容易になるか、分けた場合に何が得られるか、そしてそもそもまとめられない組み合わせかどうか。最後の一つを先に確認しておかないと、まとめて依頼したつもりでも途中で作業が止まります。
          </p>
        </div>
      </section>

      <section id="himeji-together" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          1社にまとめて依頼する利点
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          まとめて依頼する利点は、作業そのものよりも、その前後の工程にあります。
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
          年間を通して同じ業者に管理を依頼する場合の考え方は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="himeji-split" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          分けて依頼したほうがよい場面
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          まとめて依頼することで失われるものもあります。分けて依頼したほうが円滑に進むのは、次のような場合です。
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
          窓口が自社で施工するのか、他社を紹介する形態なのかの見分け方は
          <Link href="/area/nagoya/" className="text-primary underline underline-offset-2 mx-1">
            自社施工型と紹介型の見分け方
          </Link>
          で、伐採作業の区分については
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            伐採・抜根のサービス解説
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="himeji-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          まとめられない組み合わせと、順序が決まっている作業
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この点は、まとめるか分けるかの好みの問題ではありません。確認せずに進めると、途中で作業が止まります。
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
          業者が保有する資格や許可の確認方法は
          <Link href="/area/chiba/" className="text-primary underline underline-offset-2 mx-1">
            資格と許可の確認方法
          </Link>
          、剪定した枝の処分先を事前に決めておく方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="himeji-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、複数の作業をまとめて依頼できるかを事前に確認したいという条件では、次の3サービスが、扱う領域の広さや事前に確認できる経路の点で判断材料を揃えやすい構成です。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/maintenance/", label: "庭木の年間メンテナンス" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/area/nagoya/", label: "自社施工型と紹介型の見分け方" },
            { href: "/area/okayama/", label: "相見積もりの条件の揃え方と断り方" },
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
          困っている箇所をすべて示し、「どこまで御社で対応できますか」と確認することから始めると、まとめて依頼するか分けて依頼するかを判断できます。
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
