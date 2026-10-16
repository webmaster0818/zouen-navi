import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kanazawa/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "金沢の造園・庭の手入れ業者の選び方｜依頼先を変更する際の引き継ぎ";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "依頼先を変更する際に失われやすいのは、作業の頻度、前回の剪定の程度、過去に指摘された木の状態といった庭の経緯です。金沢で依頼先を変更する際に新しい業者へ伝える情報と、前の業者との関係の終え方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "依頼先を変更する際の引き継ぎという観点から、金沢での業者選びを整理しています。",
  },
};

const toc = [
  { id: "kanazawa-logic", label: "依頼先の変更時に失われやすいのは庭の経緯です" },
  { id: "kanazawa-reasons", label: "変更の理由を事前に明確にしておく" },
  { id: "kanazawa-handover", label: "新しい業者に伝える4つの情報" },
  { id: "kanazawa-manner", label: "前の業者との関係の終え方と、新しい業者への確認方法" },
  { id: "kanazawa-pick", label: "この条件に適した3サービス" },
  { id: "kanazawa-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kanazawa-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kanazawa-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["hikaku-biz", "kurashi-market", "oniwa-master"] as const;

const pickReasons: Record<string, string> = {
  "hikaku-biz":
    "発注者は無料で利用でき、複数の業者の見積もりを比較して依頼先を選べます。造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分があり、これまで依頼していた作業がどの区分に当たるかを整理しながら候補を選定できます。運営21年・登録事業者10万社超と公表しています。運営は株式会社ワンズマインドです。",
  "kurashi-market":
    "見積もりを取らずに料金が決まる形式で、作業内容が標準化されているため、これまで依頼してきた作業がどの項目に相当するかを事前に確認できます。完了後に口コミ・評価を投稿でき、利用者は口コミと料金を見て業者を選ぶ仕組みです。損害賠償の補償制度も用意されています。運営はみんなのマーケット株式会社です。",
  "oniwa-master":
    "自社では施工せず、要望に合う業者を無料で紹介する仕組みです。剪定・伐採・草刈り・芝刈りなど庭の手入れ全般に対応する業者が対象で、受付は24時間365日です。引き継ぎたい内容を事前に窓口へ伝えてから紹介を受けたい場合に適しています。運営は株式会社アシストで、全国47都道府県に多数の加盟拠点があるとしています。",
};

const switchReasons = [
  {
    h: "金額が理由の場合",
    b: "高いと感じているのか、前年より値上がりしたのか、内訳が分からないのか。この三つは別の問題です。内訳が分からないだけであれば、業者を変更しなくても解決する場合があります。金額そのものが理由であれば、新しい業者にも同じ範囲を伝えなければ、適切な比較になりません。",
  },
  {
    h: "仕上がりが理由の場合",
    b: "切りすぎた、切り足りない、形が好みと異なるのいずれに当たるかを明確にしておきます。「何となく気に入らない」という状態のまま変更すると、新しい業者にも同じ伝え方しかできず、同じ結果になります。写真が残っていれば、それが最も的確な伝達手段になります。",
  },
  {
    h: "連絡と日程が理由の場合",
    b: "返信が来ない、日程が変更される、当日の連絡がないといった問題は、作業の質とは別の問題です。次の業者を探す際の確認点も変わり、技術よりも連絡体制や受付体制を先に確認することになります。",
  },
  {
    h: "担当者が理由の場合",
    b: "会社は同じでも、担当者が交代してから合わなくなったという場合があります。この場合は、依頼先ごと変更する前に、担当者の変更が可能かを確認するという選択肢があります。変更を決めた後では確認できません。",
  },
];

const handoverItems = [
  {
    h: "これまでの作業内容と頻度",
    b: "「年に一回、秋に庭木の剪定」「二年に一回、生垣の刈り込みのみ」といった一行があるだけで、業者は現在の庭の状態が何年分の伸びかを判断できます。頻度が分からないと、毎年手入れしてきた庭なのか、久しぶりに手入れする庭なのかを現地で判断されることになります。",
  },
  {
    h: "前回の作業時期と剪定の程度",
    b: "同じ木でも、前回どの高さ・どの太さまで剪定したかによって、今回の剪定方法が変わります。前回から間もないのに強く剪定すると、木に負担が残ります。日付が正確に分からなくても、「昨年の秋頃」といった情報で十分な手がかりになります。",
  },
  {
    h: "過去に指摘された木の状態",
    b: "枯れ枝がある、幹に空洞がある、根元が浮いている、病気の疑いがあるなど、前の業者から指摘されていた事項はそのまま伝えます。「指摘されたが、その年は見送った」という経緯も含めて伝えると、今回の優先順位を組み立てる材料になります。",
  },
  {
    h: "自分で行ってきた作業と、依頼していなかった作業",
    b: "足元の草は自分で刈っていた、剪定した枝は自分で処分していた、裏側は毎回対象外にしていたといった情報を伝えないと、今回の見積もりの範囲が前回と異なります。金額の比較も、この条件が揃っていなければ成立しません。",
  },
];

const mannerItems = [
  {
    h: "前の業者には、継続しない旨を伝えれば足ります",
    b: "理由を詳しく説明する義務はありません。「今回は別の業者に依頼することにしました」と伝えれば区切りになります。年間管理や定期契約がある場合は、いつで終了するのかを明確にしておきます。何も伝えずに連絡を絶つと、次の時期に見積もりや連絡が届き、その対応に手間がかかります。",
  },
  {
    h: "伝える必要のない事項",
    b: "次の依頼先、依頼金額、紹介者は、伝える必要のない事項です。不満の内容も、改善を求めて継続したいのでなければ、詳しく述べるほど話が長くなります。反対に、今後も依頼する可能性を残したい場合は、不満を伝えて改善の余地を確認するほうが先です。",
  },
  {
    h: "新しい業者に前の業者の作業を評価させない",
    b: "「前回はこのように剪定されたのですが、どう思いますか」という質問は、否定的な回答を引き出しやすくなります。そう回答したほうが受注につながりやすいためで、回答が正確とは限りません。確認する場合は、「この状態から、今回はどこまで剪定することになりますか」と、今後の作業に関する質問に置き換えます。",
  },
  {
    h: "再び依頼する可能性を残す終え方",
    b: "一度だけ別の業者に依頼してみるという方法もあります。その場合は、前の業者に不満を伝えて関係を終わらせないことが重要です。「今年は事情があり別の業者に依頼します」と伝えておけば、翌年再び依頼できます。庭の経緯を把握している業者が近くにいることは、それ自体が手間の削減になります。",
  },
];

const checklist = [
  {
    h: "変更の理由を一つに絞ったか",
    b: "金額・仕上がり・連絡と日程・担当者のいずれかによって、次に確認すべき点が変わります。",
  },
  {
    h: "これまでの作業内容と頻度を書き出したか",
    b: "何を、どの程度の間隔で依頼してきたかを一行で記載すれば足ります。",
  },
  {
    h: "前回の作業時期と剪定した高さを把握しているか",
    b: "写真が残っていれば、それが最も的確な伝達手段になります。",
  },
  {
    h: "過去に指摘されていた状態を伝えたか",
    b: "枯れ枝、空洞、根元の浮きなどを、見送った経緯も含めて伝えます。",
  },
  {
    h: "前の業者に終了の区切りを伝えたか",
    b: "定期契約がある場合は、いつで終了するかを明確にしておきます。",
  },
];

const faqs = [
  {
    q: "前に頼んでいた業者のことは、新しい相手に伝えるべきですか。",
    a: "前の業者の社名まで伝える必要はありませんが、庭にどのような作業が行われてきたかは伝えてください。伝えるのは事実のみで足ります。何年に何回どの作業を行ってきたか、前回はいつか、どこまで剪定したか、過去に指摘された状態はあるか。評価や不満は判断材料になりませんが、この四点は今回の剪定方法を決める材料になります。",
  },
  {
    q: "引き継ぎをしないまま頼むと、何が起きますか。",
    a: "現地の状態のみから判断されるため、切りすぎ・切り足りないのいずれかに偏りやすくなります。前回から間もないのに強く剪定される、反対に様子見で軽く終わり翌年の作業量が増える、といった形です。加えて、これまでの経緯を毎回最初から説明し直すことになり、見積もりの範囲も前回と異なるため、金額を比較しても意味を持ちません。",
  },
  {
    q: "前の業者に、替える理由を説明しなければいけませんか。",
    a: "義務はありません。「今回は別の業者に依頼することにしました」と伝えれば区切りになります。ただし、年間管理や定期契約がある場合は、いつで終了するのかを明確にしておいてください。改善を前提に継続したい意向がある場合は、変更する前に不満の内容を伝えて対応を確認するほうが、順序としては先です。",
  },
  {
    q: "金沢市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、金沢市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "庭の手入れの依頼先を変更する際に、新しい業者へ伝える情報と、前の業者との関係の終え方を整理しています。",
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
          庭の手入れは、一度で完了する工事ではありません。数年間同じ業者に依頼していて、ある時点で変更を検討することがあります。理由は金額、仕上がり、連絡の取りにくさ、担当者の交代などさまざまです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          金沢市内の住宅の庭で依頼先を変更する場合も同様ですが、この際に見落とされやすいのは、庭に蓄積されてきた経緯に関する情報です。前の業者は、何年分の伸びを確認してきたか、どこまで剪定したか、どの木に懸念があるかを把握しています。依頼先を変更すると、その情報が引き継がれずに失われます。本ページでは、新しい業者に伝える情報と、前の業者との関係の終え方を整理します。
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
          依頼先の変更時に失われやすいのは庭の経緯です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          新しい業者は、現地を訪れた日の状態しか確認できません。その枝が昨年剪定されたものか、三年間手入れされていないものかは、外見だけでは判断できません。判断材料がないまま進めると、判断はいずれかに偏ります。前回から間もないのに強く剪定されるか、様子見で軽く終わり翌年の作業量が増えるかです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          さらに、これまでの経緯を最初から説明し直すことになります。自分で行っていた作業、毎回対象外にしていた範囲、昨年見送った枝などの説明が漏れると、見積もりの範囲が前回と異なります。範囲の異なる見積もりは、前回より高いか安いかを判断する材料になりません。変更の効果を測れないまま、翌年を迎えることになります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            行うべきことは二つです。変更の理由を依頼者側で一つに絞っておくことと、これまで庭に行われてきた作業を事実のみ書き出して伝えることです。順序としては、理由を絞るほうが先です。理由によって、次の業者に確認すべき点が変わるためです。
          </p>
        </div>
      </section>

      <section id="kanazawa-reasons" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          変更の理由を事前に明確にしておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          不満の多くは複数の要因が混在しています。整理しておかないと、次の業者を選ぶ際の確認点が定まりません。
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
          金額の内訳が分からないことが理由であれば、書面の見方を先に確認するほうが早い場合があります。
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          と
          <Link href="/cost/pruning-price/" className="text-primary underline underline-offset-2 mx-1">
            剪定の料金
          </Link>
          をご参照ください。
        </p>
      </section>

      <section id="kanazawa-handover" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          新しい業者に伝える4つの情報
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          長い文章は必要ありません。問い合わせの文面に数行を加えるだけで、回答の内容が変わります。
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
          こうした経緯を毎回記録しておけば、次に変更する際も同じ手間で済みます。記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            認識の相違に備える記録の残し方
          </Link>
          、年ごとの作業計画は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kanazawa-manner" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          前の業者との関係の終え方と、新しい業者への確認方法
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          依頼先の変更自体は、伝えにくい話ではありません。問題が生じやすいのは、伝え方と確認の仕方です。
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
          新しい業者を選ぶ際に、会社の素性をどこまで確認できるかは
          <Link href="/area/chiba/" className="text-primary underline underline-offset-2 mx-1">
            資格と許可の確認方法
          </Link>
          、初回の仕上がりの確認方法は
          <Link href="/area/kawasaki/" className="text-primary underline underline-offset-2 mx-1">
            完了時の確認と手直しの依頼方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kanazawa-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、これまでの経緯を伝えたうえで次の候補を選びたいという条件では、次の3サービスが進め方を整理しやすい構成です。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/chiba/", label: "資格と許可の確認方法" },
            { href: "/area/kawasaki/", label: "完了時の確認と手直しの依頼方法" },
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
          これまでの経緯を数行添えて相談すると、初回から前提条件の揃った提案を受けられます。経緯を書き出してから相談することをおすすめします。
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
