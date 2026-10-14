import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kanazawa/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "金沢の造園・庭の手入れ業者の選び方｜頼む先を替えるときの引き継ぎ";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "これまで頼んでいた相手を替えるとき、抜け落ちるのは庭の経緯です。何年に何回どの作業をしてきたか、前回どこまで切ってあるか、過去に指摘された木の状態。金沢で頼む先を替えるときに渡しておく情報と、前の相手との切り方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "頼む先を替えるときの引き継ぎという観点から、金沢での業者選びを整理しました。",
  },
};

const toc = [
  { id: "kanazawa-logic", label: "替えるときに抜け落ちるのは、庭の経緯のほう" },
  { id: "kanazawa-reasons", label: "替える理由を、先にこちらで言葉にしておく" },
  { id: "kanazawa-handover", label: "新しい相手に渡しておく4つの情報" },
  { id: "kanazawa-manner", label: "前の相手との切り方と、新しい相手への聞き方" },
  { id: "kanazawa-pick", label: "この条件で見ておきたい3サービス" },
  { id: "kanazawa-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kanazawa-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kanazawa-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["hikaku-biz", "kurashi-market", "oniwa-master"] as const;

const pickReasons: Record<string, string> = {
  "hikaku-biz":
    "発注する側は無料で利用でき、複数の業者の見積もりを比較して依頼先を選べます。造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分があり、これまで頼んでいた作業がどの区分に当たるのかを整理しながら候補を出せます。運営21年・登録事業者10万社超と公表しています。運営は株式会社ワンズマインドです。",
  "kurashi-market":
    "見積もりを取らずに料金が決まる形で、作業の内容が標準化されているため、これまで頼んできた作業がどの項目に相当するのかを先に確かめられます。完了後に口コミ・評価を投稿でき、利用者は口コミと料金を見て選ぶ仕組みです。損害賠償の補償制度も用意されています。運営はみんなのマーケット株式会社です。",
  "oniwa-master":
    "自社で施工せず、要望に合う業者を無料で紹介する仕組みです。剪定・伐採・草刈り・芝刈りなど庭の手入れ全般に対応する業者が対象で、受付は24時間365日。引き継ぎたい内容を先に窓口へ伝えてから紹介を受けたい場合に向きます。運営は株式会社アシストで、全国47都道府県に多数の加盟拠点があるとしています。",
};

const switchReasons = [
  {
    h: "金額が理由のとき",
    b: "高いと感じているのか、前年より上がったのか、内訳が分からないのか。この三つは別の話です。内訳が分からないだけなら、替えなくても解決する場合があります。金額そのものが理由なら、次の相手にも同じ範囲を伝えないと比べたことになりません。",
  },
  {
    h: "仕上がりが理由のとき",
    b: "切りすぎた、切り足りない、形が好みと違う。どれなのかを言葉にしておきます。「なんとなく気に入らない」のまま替えると、新しい相手にも同じ言い方しかできず、同じ結果になります。写真が残っていれば、それが一番早い伝え方になります。",
  },
  {
    h: "連絡と日程が理由のとき",
    b: "返事が来ない、日程が動く、当日の連絡がない。これは作業の質とは別の問題です。次を探すときに見るべき点も変わり、腕前より、連絡の取り方や受付の体制を先に確かめることになります。",
  },
  {
    h: "担当者が理由のとき",
    b: "会社は変わらず、担当者が替わってから合わなくなったという場合があります。この場合は、依頼先ごと替える前に、担当を替えてもらえるかを聞くという選択肢が残ります。替えると決めたあとでは聞けません。",
  },
];

const handoverItems = [
  {
    h: "これまで何を、どのくらいの頻度で頼んできたか",
    b: "「年に一回、秋に庭木の剪定」「二年に一回、生垣の刈り込みだけ」。この一行があるだけで、相手は今の庭の状態が何年分の伸びなのかを見当づけられます。頻度が分からないと、毎年手を入れてきた庭なのか、久しぶりの庭なのかが現地で判断されることになります。",
  },
  {
    h: "前回はいつで、どこまで切ってあるか",
    b: "同じ木でも、前回どの高さ・どの太さまで落としてあるかで、今回の切り方が変わります。前回から日が浅いのに強く切ると、木の側に負担が残ります。日付が正確に分からなくても「去年の秋ごろ」で十分に手がかりになります。",
  },
  {
    h: "過去に指摘されていた木の状態",
    b: "枯れ枝がある、幹に空洞がある、根元が浮いている、病気の疑いがある。前の相手から言われていたことは、そのまま伝えます。「言われていたが、その年は見送った」という経緯も含めて渡すと、今回の優先順位を組み立てる材料になります。",
  },
  {
    h: "自分でやってきた部分と、頼んでいなかった部分",
    b: "足元の草は自分で刈っていた、切った枝は自分で出していた、裏側は毎回外していた。これを言わないと、今回の見積もりの範囲が前回とずれます。安くなった・高くなったの比較も、ここが揃っていないと成立しません。",
  },
];

const mannerItems = [
  {
    h: "前の相手には、続けないことだけを伝えれば足りる",
    b: "理由を細かく説明する義務はありません。「今回は別のところに頼むことにしました」で区切りになります。年間の管理や定期の約束がある場合は、いつまでで終わりにするのかだけ、はっきりさせておきます。何も言わないまま連絡が途絶えると、次の時期に見積もりや連絡が来て、こちらが対応する手間になります。",
  },
  {
    h: "言わなくてよいこと",
    b: "他にどこへ頼むか、いくらで頼むか、誰の紹介かは、伝える必要のない話です。不満の内容も、改善を求めて続けたいのでなければ、細かく述べるほど話が長くなります。逆に、次も頼む可能性を残したいなら、不満を伝えて改善の余地を聞くほうが先です。",
  },
  {
    h: "新しい相手に、前の仕事を評価させない",
    b: "「前はこう切られたのですが、どう思いますか」という聞き方は、否定を引き出す形になりがちです。そう答えたほうが仕事につながるためで、答えが正確とは限りません。聞くなら「この状態から、今回はどこまで切ることになりますか」と、これからの話に置き換えます。",
  },
  {
    h: "また戻す可能性を残しておく切り方",
    b: "一度だけ別のところに頼んでみる、という形はあります。その場合は、前の相手に不満をぶつけて終わらせないことです。「今年は都合があって別で頼みます」と伝えておけば、翌年また声をかけられます。庭の経緯を知っている相手が近くにいることは、それ自体が手間の削減になります。",
  },
];

const checklist = [
  {
    h: "替える理由を一つに絞ったか",
    b: "金額・仕上がり・連絡と日程・担当者。どれなのかで、次に確かめる点が変わります。",
  },
  {
    h: "これまでの作業の内容と頻度を書き出したか",
    b: "何を、どのくらいの間隔で頼んできたか。一行で足ります。",
  },
  {
    h: "前回の時期と、切ってある高さが分かるか",
    b: "写真が残っていれば、それが最も早い伝え方になります。",
  },
  {
    h: "過去に指摘されていた状態を伝えたか",
    b: "枯れ枝、空洞、根元の浮き。見送った経緯も含めて渡します。",
  },
  {
    h: "前の相手に、終わりの区切りを伝えたか",
    b: "定期の約束がある場合は、いつまでで終わりかをはっきりさせておきます。",
  },
];

const faqs = [
  {
    q: "前に頼んでいた業者のことは、新しい相手に伝えるべきですか。",
    a: "前の相手の社名まで伝える必要はありませんが、庭に何がされてきたかは伝えてください。伝えるのは事実だけで足ります。何年に何回どの作業をしてきたか、前回はいつか、どこまで切ってあるか、過去に指摘されていた状態はあるか。評価や不満は情報になりませんが、この四つは今回の切り方を決める材料になります。",
  },
  {
    q: "引き継ぎをしないまま頼むと、何が起きますか。",
    a: "現地の状態だけから判断されるため、切りすぎ・切り足りないのどちらかに寄りやすくなります。前回から日が浅いのに強く切られる、逆に様子見で浅く終わって翌年の作業量が増える、といった形です。加えて、これまでの経緯を毎回一から説明し直すことになり、見積もりの範囲も前回とずれるため、金額を比べても意味を持ちません。",
  },
  {
    q: "前の業者に、替える理由を説明しなければいけませんか。",
    a: "義務はありません。「今回は別のところに頼むことにしました」で区切りになります。ただし、年間の管理や定期の取り決めがある場合は、いつまでで終わりにするのかをはっきりさせておいてください。改善してもらって続けたい気持ちが残っているなら、替える前に不満の内容を伝えて反応を見るほうが順番としては先です。",
  },
  {
    q: "金沢市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、金沢市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKanazawaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭の手入れを頼む先を替えるときに、新しい相手へ渡しておく情報と、前の相手との切り方を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "金沢" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れは、一度きりで終わる工事ではありません。何年か同じ相手に頼んでいて、あるとき替えようと思う。理由は金額のこともあれば、仕上がりのこともあり、連絡の取りづらさや担当者の交代のこともあります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          金沢にある家の庭で替える場合も同じですが、このとき見落とされやすいのは、庭に積み重なってきた経緯のほうです。前の相手は、何年分の伸びを見てきたか、どこまで切ってあるか、どの木に不安があるかを知っています。替えると、その情報だけが引き継がれずに消えます。このページでは、新しい相手に何を渡しておくのか、前の相手とはどう区切るのかを整理します。
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

      <section id="kanazawa-logic" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          替えるときに抜け落ちるのは、庭の経緯のほう
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          新しい相手は、現地に来た日の状態しか見られません。その枝が去年切られたものなのか、三年触られていないものなのかは、見ただけでは分かりません。分からないまま進むと、判断はどちらかに寄ります。前回から日が浅いのに強く切られるか、様子見で浅く終わって翌年の作業量が増えるかです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          さらに、これまでの経緯を一から説明し直すことになります。自分でやっていた部分、毎回外していた部分、去年見送った枝。説明が抜けると、見積もりに入る範囲が前回とずれます。範囲がずれた見積もりは、前より高いか安いかを判断する材料になりません。替えた意味が測れないまま、次の年を迎えることになります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            やることは二つです。替える理由を自分の側で一つに絞っておくこと。そして、庭にこれまで何がされてきたかを、事実だけ書き出して渡すこと。順番としては、理由を絞るほうが先になります。理由によって、次の相手に確かめる点が変わるためです。
          </p>
        </div>
      </section>

      <section id="kanazawa-reasons" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          替える理由を、先にこちらで言葉にしておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          不満はたいてい混ざっています。分けておかないと、次の相手を選ぶときに何を見ればよいかが決まりません。
        </p>
        <ol className="space-y-4">
          {switchReasons.map((x, i) => (
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
          金額の内訳が分からないことが理由なら、書面の見方を先に整えるほうが早い場合があります。
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          と
          <Link href="/cost/pruning-price/" className="text-primary underline underline-offset-2 mx-1">
            剪定の料金
          </Link>
          を参照してください。
        </p>
      </section>

      <section id="kanazawa-handover" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          新しい相手に渡しておく4つの情報
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          長い文章は要りません。問い合わせの文面に数行を足すだけで、返ってくる内容が変わります。
        </p>
        <div className="space-y-4">
          {handoverItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          こうした経緯を毎回残しておく形にしておくと、次に替えるときも同じ手間で済みます。記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            食い違いに備える記録の残し方
          </Link>
          、年ごとの作業の組み立ては
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kanazawa-manner" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          前の相手との切り方と、新しい相手への聞き方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          替えること自体は、断りにくい話ではありません。こじれるのは、伝え方と、聞き方のほうです。
        </p>
        <div className="space-y-4">
          {mannerItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          新しい相手を選ぶときに、会社としての素性をどこまで確かめられるかは
          <Link href="/area/chiba/" className="text-primary underline underline-offset-2 mx-1">
            資格と許可から見る業者の確かめ方
          </Link>
          、初回の仕上がりをどう受け取るかは
          <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2 mx-1">
            完了確認と手直しの頼み方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kanazawa-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、これまでの経緯を伝えたうえで次の候補を出したいという条件で見ると、次の3つは進め方が整理しやすい構成です。
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

      <section id="kanazawa-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="金沢" />
      </section>

      <section id="kanazawa-checklist" className="scroll-mt-20 mb-12">
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

      <section id="kanazawa-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kanazawa" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/chiba/", label: "資格と許可から見る業者の確かめ方" },
            { href: "/area/kawasaki/", label: "完了確認と手直しの頼み方" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/cost/pruning-price/", label: "剪定の料金" },
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
          これまでの経緯を数行そえて当たると、初回から前提の揃った提案が返ってきます。書き出してから相談してみてください。
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
