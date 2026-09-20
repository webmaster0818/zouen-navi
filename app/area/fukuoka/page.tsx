import type { Metadata } from "next";
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
    "同じ庭を見せても業者ごとに提案が違うのは、依頼側が伝えている条件が揃っていないからです。福岡で庭木の剪定や庭の手入れを頼む前に、作業範囲と仕上がりのイメージをどう言葉と写真で渡すかを整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "作業範囲と仕上がりのイメージの伝え方という観点から、福岡での造園・庭の手入れ業者の選び方を整理しました。",
  },
};

const toc = [
  { id: "fukuoka-point", label: "提案が揃わないのは、条件が揃っていないから" },
  { id: "fukuoka-scope", label: "作業範囲を決めるときの4つの線引き" },
  { id: "fukuoka-image", label: "仕上がりのイメージを写真と言葉で渡す" },
  { id: "fukuoka-pick", label: "この条件で見ておきたい3サービス" },
  { id: "fukuoka-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "fukuoka-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "fukuoka-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["houzz", "mitsumoa", "smile-garden"] as const;

const pickReasons: Record<string, string> = {
  houzz:
    "造園・ガーデンデザイナーやエクステリアの専門家を地域・サービス別に検索でき、施工事例の写真と星評価レビューが掲載されています。言葉にしづらい仕上がりの好みを、他人の庭の写真を借りて伝えたいときの入口になります。ただし掲載の中心はデザインを担う専門家のため、手入れ中心の依頼は対応可否を確認してください。",
  mitsumoa:
    "条件を入力すると複数社から見積もりが届き、依頼後は業者とチャットで直接やり取りできます。文字で条件を渡せる形式なので、伝えた内容と返ってきた回答が記録として残り、後から見返せます。",
  "smile-garden":
    "完全自店舗施工を掲げる庭手入れ専門のチェーンで、庭木1本の剪定から年間管理まで受け口があります。見積もりを出した店舗がそのまま作業に入るため、仕上がりの相談を一本の線でつなげやすい構成です。",
};

const scopeLines = [
  {
    h: "どの木を、何本",
    b: "「庭全体をきれいに」は依頼としては成立しますが、見積もりの条件としては曖昧です。手を入れてほしい木と、触らなくてよい木を分けて伝えると、返ってくる内容が具体的になります。名前が分からなければ「玄関横の背の高い常緑樹」といった位置と見た目の説明で足ります。",
  },
  {
    h: "どこまで切るか（仕上がりの高さと幅）",
    b: "同じ木でも、形を整えるだけなのか、背を低くしたいのか、隣地側だけ抑えたいのかで作業量が変わります。「これ以上は伸ばしたくない高さ」を物差しになるもの（窓の上端、塀の高さ、屋根の軒先）に置き換えて伝えると、認識のずれが減ります。",
  },
  {
    h: "地面まわりを含めるか",
    b: "木だけを頼むのか、下草や雑草、落ち葉の片づけまで含めるのか。ここを言わずにいると、作業後に「思っていた範囲と違った」となりやすい部分です。芝生や砂利敷きの扱いも併せて伝えます。",
  },
  {
    h: "切ったものを誰が片づけるか",
    b: "持ち帰って処分してもらうのか、自分で自治体の回収に出すのか。この一点で当日の段取りと必要な時間が変わります。出す場合の束ね方や長さのルールは自治体ごとに違うため、先に調べておくと判断できます。",
  },
];

const imageTips = [
  {
    h: "引きの写真と寄りの写真を両方撮る",
    b: "庭全体が入る1枚があると、作業車を停める場所や通路の有無まで読み取ってもらえます。そのうえで、手を入れてほしい木を単体で撮った写真を添えます。片方だけでは、規模か細部のどちらかが伝わりません。",
  },
  {
    h: "困っている状態が写っている写真を選ぶ",
    b: "隣家の屋根に枝が触れている、雨樋に葉が溜まっている、日が入らなくなったなど、困りごとそのものが写っている写真は、言葉より早く伝わります。撮った日付が残る形で保存しておくと、作業前後の比較にも使えます。",
  },
  {
    h: "「こうしたい」を他の庭の写真で示す",
    b: "仕上がりの好みは、自分の庭の写真だけでは伝えられません。事例写真が見られるサービスを使い、近い雰囲気の写真を指して「このくらいの整え方」と伝えるほうが確実です。",
  },
  {
    h: "やってほしくないことも書く",
    b: "強く刈り込まないでほしい、花が咲く枝は残してほしい、この木は触らないでほしい。禁止条件は、希望条件と同じくらい仕上がりを左右します。伝え漏れると取り返しがつかない種類の情報です。",
  },
];

const checklist = [
  {
    h: "手を入れる木と触らない木を分けたか",
    b: "対象を絞るだけで、見積もりの条件は一段はっきりします。判断がつかない木があれば「見てもらったうえで相談したい」と伝えれば十分です。",
  },
  {
    h: "仕上がりの高さを物差しで言えるか",
    b: "数字で言えなくても構いません。窓の上端、塀、軒先といった、現地にある物を基準にすれば、現場で同じものを見ながら確認できます。",
  },
  {
    h: "片づけと処分の担当を決めたか",
    b: "持ち帰りを頼むのか自分で出すのか。当日になってから決めると、作業時間にも積み込みにも影響します。",
  },
  {
    h: "写真を先に渡せる窓口かどうか",
    b: "チャットやメッセージで写真を送れるサービスなら、現地を見る前に条件の大半を共有できます。電話だけの窓口では、現地確認の場で伝えることになります。",
  },
  {
    h: "やってほしくないことを書き出したか",
    b: "残したい枝、触らないでほしい植栽、入ってほしくない場所。作業が始まってからでは戻せないため、依頼の段階で渡します。",
  },
];

const faqs = [
  {
    q: "木の名前が分からなくても依頼できますか。",
    a: "名前が分からなくても依頼はできます。玄関脇、駐車場の奥といった位置と、常緑か落葉か、背の高さはどのくらいかを伝えれば、現地で確認してもらえます。写真を添えられる窓口であれば、そのほうが早く伝わります。",
  },
  {
    q: "「おまかせ」で頼んでも大丈夫ですか。",
    a: "作業自体は進みますが、仕上がりが自分の想定と違ったときに、どちらの認識違いかを確かめる手がかりが残りません。少なくとも、触らないでほしいものと、これ以上伸ばしたくない高さの二つは伝えておくことをおすすめします。",
  },
  {
    q: "複数社に見積もりを頼むとき、伝える内容は変えるべきですか。",
    a: "変えないほうが比較になります。同じ写真と同じ条件を渡し、返ってきた作業内容の違いを見てください。条件がばらばらだと、金額の差が作業範囲の差なのか単価の差なのか判別できなくなります。",
  },
  {
    q: "福岡市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、福岡市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "作業範囲と仕上がりのイメージをどう伝えるかという観点から、福岡での造園・庭の手入れ業者の選び方を整理しました。",
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
          福岡で庭の手入れを頼もうとすると、地場の造園業者から全国対応の窓口まで、相談先の候補はいくつも出てきます。
          ところが同じ庭を見せても、返ってくる提案は会社ごとにばらばらになりがちです。原因は業者側だけにあるわけではなく、依頼側が渡している条件が揃っていないことも多い。
          このページは、業者を選ぶ前の段階、つまり「何をどこまで頼むのか」を自分の側で固めるための整理です。
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
          提案が揃わないのは、条件が揃っていないから
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「庭木を見てもらいたい」という一言から始まった相談は、受け取る側が自由に解釈できてしまいます。
          ある会社は形を整える前提で考え、別の会社は背を低くする前提で考える。返ってきた内容が違うのは当然で、そのまま並べても比較にはなりません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          比較できる形にするには、渡す条件を先に固めます。対象、仕上がり、範囲、片づけ。この4点が同じであれば、会社ごとの違いは作業の考え方と体制の違いとして読み取れるようになります。
          逆に言えば、ここが空白のまま複数社に当たっても、判断材料は増えません。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            条件を固めるといっても、専門用語で書く必要はありません。自分が困っていることと、触ってほしくないものを言葉にできれば十分です。
            決められないところは「相談したい」と明示しておけば、それも条件のひとつとして扱われます。
          </p>
        </div>
      </section>

      <section id="fukuoka-scope" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業範囲を決めるときの4つの線引き
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
          木ごとの適期や切り方の考え方は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定費用と最適な時期
          </Link>
          で扱っています。範囲を決める前に、その木に手を入れてよい時期かどうかも併せて確認しておくと、日程の相談が一度で済みます。
        </p>
      </section>

      <section id="fukuoka-image" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          仕上がりのイメージを写真と言葉で渡す
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          仕上がりの好みは、言葉だけでは伝わりにくい部分です。「すっきり」も「自然な感じ」も、受け取る人によって幅があります。
          写真を使えるかどうかで、この曖昧さはかなり減らせます。
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
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、条件と仕上がりのイメージを依頼前に渡したいという観点で見ると、次の3つは伝える手段がはっきりしています。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/service/pruning/", label: "庭木の剪定費用と最適な時期" },
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
          渡す条件が固まったら、同じ内容で複数のサービスに当たって進め方を比べてみてください。
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
