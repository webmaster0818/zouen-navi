import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/fukuoka/";
const UPDATED_LABEL = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";
const TITLE = "福岡の造園・庭の手入れ業者の選び方｜依頼内容の伝え方と仕上がりの共有";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "同じ庭を見せても業者ごとに提案が異なるのは、依頼者が伝えている条件が統一されていないためです。福岡で庭木の剪定や庭の手入れを依頼する前に、作業範囲と仕上がりのイメージを言葉と写真でどのように伝えるかを整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "作業範囲と仕上がりのイメージの伝え方という観点から、福岡での造園・庭の手入れ業者の選び方を整理しています。",
  },
};

const toc = [
  { id: "fukuoka-point", label: "提案が揃わない原因は条件の不統一にあります" },
  { id: "fukuoka-scope", label: "作業範囲を決める際の4つの基準" },
  { id: "fukuoka-image", label: "仕上がりのイメージを写真と言葉で伝える" },
  { id: "fukuoka-pick", label: "この条件に適した3サービス" },
  { id: "fukuoka-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "fukuoka-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "fukuoka-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["houzz", "mitsumoa", "smile-garden"] as const;

const pickReasons: Record<string, string> = {
  houzz:
    "造園・ガーデンデザイナーやエクステリアの専門家を地域・サービス別に検索でき、施工事例の写真と星評価付きの口コミが掲載されています。言葉で表現しにくい仕上がりの好みを、他の庭の写真を用いて伝えたい場合に利用できます。ただし、掲載の中心はデザインを担う専門家のため、手入れが中心の依頼は対応の可否をご確認ください。",
  mitsumoa:
    "条件を入力すると複数社から見積もりが届き、依頼後は業者とチャットで直接やり取りできます。文字で条件を伝える形式のため、伝えた内容と回答が記録として残り、後から確認できます。",
  "smile-garden":
    "完全自店舗施工を掲げる庭の手入れ専門のチェーンで、庭木1本の剪定から年間管理まで対応しています。見積もりを作成した店舗がそのまま作業を担当するため、仕上がりに関する相談を一貫して進めやすい構成です。",
};

const scopeLines = [
  {
    h: "対象の木と本数",
    b: "「庭全体をきれいに」という依頼は成立しますが、見積もりの条件としては曖昧です。手入れを希望する木と、手を加えなくてよい木を分けて伝えると、回答の内容が具体的になります。樹種が分からない場合は、「玄関横の背の高い常緑樹」のように位置と外観を説明すれば十分です。",
  },
  {
    h: "剪定の程度（仕上がりの高さと幅）",
    b: "同じ木でも、形を整えるだけなのか、高さを低くしたいのか、隣地側のみ抑えたいのかによって作業量が変わります。「これ以上伸ばしたくない高さ」を、窓の上端、塀の高さ、屋根の軒先などの基準物に置き換えて伝えると、認識の相違を減らせます。",
  },
  {
    h: "地面まわりを作業範囲に含めるか",
    b: "木のみを依頼するのか、下草や雑草、落ち葉の片づけまで含めるのかを明確にします。この点を伝えずにいると、作業後に「想定していた範囲と異なる」という事態が生じやすくなります。芝生や砂利敷きの扱いもあわせて伝えます。",
  },
  {
    h: "剪定枝の片づけの担当",
    b: "業者に持ち帰りと処分を依頼するのか、自分で自治体の回収に出すのかによって、当日の段取りと必要な時間が変わります。自治体の回収に出す場合の束ね方や長さの規定は自治体ごとに異なるため、事前に確認しておくと判断しやすくなります。",
  },
];

const imageTips = [
  {
    h: "全体の写真と近接の写真を両方撮影する",
    b: "庭全体が写った写真が1枚あると、作業車の駐車位置や通路の有無まで確認してもらえます。そのうえで、手入れを希望する木を個別に撮影した写真を添えます。どちらか一方だけでは、規模か細部のいずれかが伝わりません。",
  },
  {
    h: "困っている状態が写った写真を選ぶ",
    b: "隣家の屋根に枝が接触している、雨樋に葉が溜まっている、日が当たらなくなったなど、困りごとそのものが写った写真は、言葉よりも的確に状況を伝えられます。撮影日が残る形で保存しておくと、作業前後の比較にも利用できます。",
  },
  {
    h: "希望する仕上がりを他の庭の写真で示す",
    b: "仕上がりの好みは、自分の庭の写真だけでは伝えられません。事例写真を閲覧できるサービスを利用し、近い雰囲気の写真を示して「この程度の整え方」と伝える方法が確実です。",
  },
  {
    h: "希望しない作業も明記する",
    b: "強く刈り込まないでほしい、花が咲く枝は残してほしい、この木には手を加えないでほしいといった禁止条件は、希望条件と同程度に仕上がりを左右します。伝え漏れると取り返しがつかない種類の情報です。",
  },
];

const checklist = [
  {
    h: "手入れする木と手を加えない木を区別したか",
    b: "対象を絞るだけで、見積もりの条件が明確になります。判断がつかない木があれば、「現地を確認したうえで相談したい」と伝えれば十分です。",
  },
  {
    h: "仕上がりの高さを基準物で示せるか",
    b: "数値で示せなくても構いません。窓の上端、塀、軒先といった現地にある物を基準にすれば、現場で同じものを見ながら確認できます。",
  },
  {
    h: "片づけと処分の担当を決めたか",
    b: "持ち帰りを依頼するのか、自分で処分するのかを決めます。当日になってから決めると、作業時間や積み込みに影響します。",
  },
  {
    h: "写真を事前に送付できる窓口かどうか",
    b: "チャットやメッセージで写真を送付できるサービスであれば、現地確認の前に条件の大半を共有できます。電話のみの窓口では、現地確認の場で伝えることになります。",
  },
  {
    h: "希望しない作業を書き出したか",
    b: "残したい枝、手を加えないでほしい植栽、立ち入ってほしくない場所を整理します。作業開始後は元に戻せないため、依頼の段階で伝えます。",
  },
];

const faqs = [
  {
    q: "木の名前が分からなくても依頼できますか。",
    a: "樹種が分からなくても依頼はできます。玄関脇、駐車場の奥といった位置と、常緑か落葉か、高さはどの程度かを伝えれば、現地で確認してもらえます。写真を添付できる窓口であれば、より的確に伝わります。",
  },
  {
    q: "「おまかせ」で頼んでも大丈夫ですか。",
    a: "作業自体は進みますが、仕上がりが想定と異なった場合に、どちらの認識の相違かを確認する手がかりが残りません。少なくとも、手を加えないでほしいものと、これ以上伸ばしたくない高さの二点は伝えておくことをおすすめします。",
  },
  {
    q: "複数社に見積もりを頼むとき、伝える内容は変えるべきですか。",
    a: "変更しないほうが比較しやすくなります。同じ写真と同じ条件を伝え、回答された作業内容の違いをご確認ください。条件が統一されていないと、金額の差が作業範囲の差なのか単価の差なのかを判別できなくなります。",
  },
  {
    q: "福岡市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、福岡市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaFukuokaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "作業範囲と仕上がりのイメージをどのように伝えるかという観点から、福岡での造園・庭の手入れ業者の選び方を整理しています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "福岡" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          福岡で庭の手入れを依頼する場合、地域の造園業者から全国対応の窓口まで、相談先の候補は多数あります。
          しかし、同じ庭を見せても、提案の内容は業者ごとに異なる傾向があります。その原因は業者側だけにあるとは限らず、依頼者が伝えている条件が統一されていないことも少なくありません。
          本ページでは、業者を選ぶ前の段階として、「何をどこまで依頼するのか」を依頼者側で決めるための要点を整理します。
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

      <section id="fukuoka-point" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          提案が揃わない原因は条件の不統一にあります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「庭木を見てもらいたい」という依頼から始まった相談は、受け取る側が自由に解釈できてしまいます。
          ある業者は形を整える前提で、別の業者は高さを低くする前提で検討するため、提案内容が異なるのは当然であり、そのままでは比較になりません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          比較できる形にするには、伝える条件を事前に決めておきます。対象、仕上がり、範囲、片づけの4点が同じであれば、業者ごとの違いを作業方針と体制の違いとして判断できるようになります。
          反対に、これらが未定のまま複数社に相談しても、判断材料は増えません。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            条件を決めるといっても、専門用語で記載する必要はありません。困っていることと、手を加えないでほしいものを言葉で伝えられれば十分です。
            決められない事項は「相談したい」と明示しておけば、それも条件の一つとして扱われます。
          </p>
        </div>
      </section>

      <section id="fukuoka-scope" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業範囲を決める際の4つの基準
        </h2>
        <ol className="space-y-4">
          {scopeLines.map((s, i) => (
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
          木ごとの適期や剪定方法の考え方は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定費用と適した時期
          </Link>
          で解説しています。範囲を決める前に、その木の手入れに適した時期かどうかもあわせて確認しておくと、日程の相談が一度で済みます。
        </p>
      </section>

      <section id="fukuoka-image" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          仕上がりのイメージを写真と言葉で伝える
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          仕上がりの好みは、言葉だけでは伝わりにくいものです。「すっきり」や「自然な感じ」といった表現は、受け取る人によって解釈に幅があります。
          写真を用いることで、この曖昧さを大幅に減らせます。
        </p>
        <div className="space-y-4">
          {imageTips.map((t) => (
            <div key={t.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{t.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{t.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fukuoka-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、条件と仕上がりのイメージを依頼前に伝えたいという観点では、次の3サービスが伝達の手段を明確に備えています。
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

      <section id="fukuoka-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="福岡" />
      </section>

      <section id="fukuoka-checklist" className="scroll-mt-20 mb-12">
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

      <section id="fukuoka-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="fukuoka" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/service/pruning/", label: "庭木の剪定費用と適した時期" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
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
          伝える条件が決まったら、同じ内容で複数のサービスに相談し、対応を比較することをおすすめします。
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
