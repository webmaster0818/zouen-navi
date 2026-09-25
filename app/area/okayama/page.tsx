import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/okayama/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "岡山の造園・庭の手入れ業者の選び方｜相見積もりの揃え方と断り方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "複数社から見積もりを取るとき、金額を比べる前に条件を揃える必要があります。何社に当たるか、同じ文面をどう配るか、返ってきたものをどう並べるか、そして断り方。岡山で庭の手入れを頼むときの相見積もりの進め方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "複数社に当たるときの条件の揃え方と断り方という観点から、岡山での業者選びを整理しました。",
  },
};

const toc = [
  { id: "okayama-basis", label: "比べられるのは、条件を揃えたときだけ" },
  { id: "okayama-howmany", label: "何社に当たるか、どう選ぶか" },
  { id: "okayama-same", label: "全社に同じものを渡す" },
  { id: "okayama-compare", label: "返ってきたものを並べる" },
  { id: "okayama-decline", label: "断り方を先に決めておく" },
  { id: "okayama-pick", label: "この条件で見ておきたい3サービス" },
  { id: "okayama-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "okayama-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "okayama-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["mitsumoa", "townlife", "oniwa-madoguchi"] as const;

const pickReasons: Record<string, string> = {
  "mitsumoa":
    "「2分で依頼」で最大5件の見積もりを比較できる形式です。一度入力した条件が複数社に渡るため、社ごとに書き分ける手間が発生しません。チャットで業者と直接相談でき、見積もり依頼は無料です。",
  "townlife":
    "希望条件を入力すると、複数社からプランと見積もりを無料で取り寄せられます。同じ条件から出てきたプランが並ぶ形になるため、金額だけでなく提案の内容の差を見比べやすい構成です。プラン請求・見積もりは無料です。",
  "oniwa-madoguchi":
    "造園・剪定・伐採・草刈りなどの情報発信と、全国の業者を検索できる機能を持つ情報・比較サイトです。一括で配る形式だけに寄らず、型の違う窓口を候補に混ぜたいときの探し先になります。運営元は庭手入れ専門の全国チェーンも展開しています。",
};

const howMany = [
  {
    h: "型の違う窓口を混ぜる",
    b: "自分のところで施工する形式、業者を紹介する形式、料金が先に表示されている形式、複数社からプランを取り寄せる形式。同じ型ばかりに当たると、返ってくる答えも似たものになります。型が違うと、同じ依頼に対する考え方の違いが見えます。",
  },
  {
    h: "現地に来てもらう回数を数える",
    b: "現地を見てからでないと出せない見積もりの場合、社数の分だけ立ち会う日が要ります。写真だけで概算を出してもらえるかどうかを先に聞いておくと、最初の絞り込みを立ち会いなしで進められます。",
  },
  {
    h: "自分が回せる数にする",
    b: "問い合わせ、返信、日程調整、断りの連絡。一社あたりに発生するやり取りは思ったより多くなります。回しきれずに放置すると、相手にも自分にも良いことがありません。",
  },
  {
    h: "最初から一社に絞らない",
    b: "一社だけで進めると、その金額が高いのか妥当なのかを判断する手がかりがありません。比べる相手がいることで、質問する内容も具体的になります。",
  },
];

const sameCondition = [
  {
    h: "送る文面を一つ作る",
    b: "やってほしいこと、対象の本数や場所、仕上がりの希望、やってほしくないこと、希望の時期、連絡がつく時間。これを一つの文面にまとめ、宛名だけ変えて送ります。社ごとに書き足すと、比較の前提が崩れます。",
  },
  {
    h: "写真は同じ組み合わせを使う",
    b: "引きの写真と、対象の木の寄りの写真。同じ枚数、同じ角度のものを全社に送ります。ある社にだけ追加の写真を送ると、その社の見積もりだけ精度が変わります。",
  },
  {
    h: "予算を言うかどうかを決めて、全社で統一する",
    b: "上限を伝えると、その範囲での提案が返ってきます。伝えないと、相手が考える必要量での提案が返ってきます。どちらにも意味がありますが、社によって変えると比較になりません。",
  },
  {
    h: "返事の期限を揃える",
    b: "「いつまでにご連絡をいただけると助かります」と書いておきます。期限がばらばらだと、早く返ってきた社と話が進んでしまい、後から届いたものを見る前に決めることになります。",
  },
];

const comparing = [
  {
    h: "含まれている範囲を先に並べる",
    b: "対象の木の本数、作業の種類、切ったものの持ち帰り、出張や駐車の扱い。この四つを紙に横並びで書き出すと、差がどこにあるかがすぐ分かります。金額を見るのはそのあとです。",
  },
  {
    h: "書かれていないものを探す",
    b: "安く見える見積もりは、含まれていない項目があることがあります。特に持ち帰りと処分は、金額に大きく効きます。「この見積もりに入っていないものは何ですか」と聞けば、はっきりします。",
  },
  {
    h: "安い理由も、高い理由も聞く",
    b: "どちらにも理由があります。範囲が狭いから安いのか、自分のところで施工するから安いのか。高いほうは、手間をかける前提なのか、道具や人が多いのか。理由を聞くと、金額そのものより相手の考え方が見えます。",
  },
  {
    h: "返信の速さと内容も材料にする",
    b: "同じ条件を送って、返ってきたものの精度と速さには差が出ます。これは依頼したあとのやり取りの予告でもあります。金額だけで決めると、この情報を捨てることになります。",
  },
];

const declining = [
  {
    h: "いつ断るかを決めておく",
    b: "決めた日に、その日のうちに連絡します。先延ばしにするほど言いづらくなり、相手の予定も押さえたままになります。早く断ることは、相手にとっても助かる話です。",
  },
  {
    h: "短くてよい",
    b: "「今回は他社にお願いすることにしました。お手数をおかけしました」。これで足ります。長い説明は要らず、謝りすぎる必要もありません。見積もりを出すのは相手の仕事の一部です。",
  },
  {
    h: "理由は言える範囲で",
    b: "聞かれたら、言える範囲で答えれば十分です。他社の金額をそのまま伝える義務はありません。「予算の都合で」「日程が合わなかったので」でも、相手には十分伝わります。",
  },
  {
    h: "断った相手も候補として残る",
    b: "今回合わなかっただけで、次の作業では合うかもしれません。丁寧に断っておくと、次に声をかけやすくなります。見積もりの内容も、次の依頼の参考資料として取っておきます。",
  },
];

const checklist = [
  {
    h: "配る文面を一つ作ったか",
    b: "宛名だけ変えて送れる形にします。社ごとに書き足すと、比較の土台が崩れます。",
  },
  {
    h: "写真を同じ組み合わせで送ったか",
    b: "枚数も角度も揃えます。一社にだけ追加すると、その社の見積もりだけ精度が変わります。",
  },
  {
    h: "予算を伝えるかどうかを統一したか",
    b: "伝えるか伝えないかは自由ですが、社によって変えると比べられなくなります。",
  },
  {
    h: "返事の期限を揃えたか",
    b: "先に届いたところで決めてしまわないよう、判断する日を自分の側で決めておきます。",
  },
  {
    h: "断る連絡まで予定に入れたか",
    b: "決めた日のうちに連絡します。短くてかまいません。放置するのが一番よくない形です。",
  },
];

const faqs = [
  {
    q: "相見積もりであることを、相手に伝えたほうがよいですか。",
    a: "伝えても問題ありません。複数社から取ること自体は一般的な進め方です。伝えることで、含まれる範囲を明示した見積もりが返ってきやすくなる面もあります。一方で、他社の金額を伝えて値下げを促すやり方は、条件の比較という目的からは外れます。",
  },
  {
    q: "予算を先に言うと、その額に合わせて高くされませんか。",
    a: "上限を伝えると、その範囲で組んだ提案が返ってきます。気になる場合は、上限だけでなく「優先してほしい作業」と「削ってよい作業」を添えて伝えると、範囲の調整として扱われます。判断するのは返ってきた内訳を見てからで、何が含まれていて何が含まれていないかを確認すれば比較はできます。",
  },
  {
    q: "断るときに理由を聞かれたら、正直に言ってよいですか。",
    a: "言える範囲で答えれば十分です。他社の金額をそのまま伝える義務はありません。「予算の都合で」「日程が合わなかったので」といった答え方でかまいません。断ったからといって次に頼めなくなるわけではないので、早めに、短く連絡するのが双方にとって楽な形です。",
  },
  {
    q: "岡山市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、岡山市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaOkayamaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "相見積もりを取るときの社数の決め方、同じ条件の配り方、比べ方、断り方を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "岡山" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          複数社から見積もりを取るのは、良い進め方だと言われます。ただ実際にやってみると、届いた三通の内容がばらばらで、どれと比べればよいのか分からないということが起きます。一社は木の本数で、一社は作業日数で、一社は「一式」。これでは金額の大小に意味がありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          岡山にある家の庭で見積もりを取る場合も同じです。このページでは、比較が成立する状態をどう作るか、そして選ばなかった相手にどう断るかまでを整理します。
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

      <section id="okayama-basis" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          比べられるのは、条件を揃えたときだけ
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりの金額は、作業量と、含まれている範囲で決まります。こちらが渡した条件が社ごとに違えば、返ってくる金額も違って当たり前です。安い見積もりが本当に安いのか、それとも範囲が狭いだけなのかは、条件が揃っていない限り判断できません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          揃えるのは金額ではなく、こちらから出す情報のほうです。同じ写真、同じ本数、同じ希望、同じ期限。これを全社に配れば、返ってきたものの差がそのまま相手の差になります。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            手間をかける価値があるのは、最初の一通を作るところまでです。一度作ってしまえば、あとは同じものを送るだけになります。社ごとに書き分けると、比較の土台が崩れます。
          </p>
        </div>
      </section>

      <section id="okayama-howmany" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          何社に当たるか、どう選ぶか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          多ければよいというものではありません。対応する時間は自分の側にも発生します。
        </p>
        <div className="space-y-4">
          {howMany.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="okayama-same" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          全社に同じものを渡す
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          配るものを一式そろえてから、送り始めます。
        </p>
        <ol className="space-y-4">
          {sameCondition.map((x, i) => (
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
          仕上がりの希望をどう言葉にするかは
          <Link href="/area/fukuoka/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の伝え方と仕上がりの共有
          </Link>
          で詳しく扱っています。
        </p>
      </section>

      <section id="okayama-compare" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          返ってきたものを並べる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          金額は最後に見ます。先に見るのは、何が含まれているかです。
        </p>
        <div className="space-y-4">
          {comparing.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          一通の見積書の中をどう読むかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="okayama-decline" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          断り方を先に決めておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          相見積もりを取るということは、断る連絡が発生するということです。ここを決めずに始めると、断りづらくて放置し、気まずさから次の依頼で相見積もりを避けるようになります。
        </p>
        <div className="space-y-4">
          {declining.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="okayama-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、同じ条件を複数社に渡すという条件で見ると、次の3つは配り方の形が違います。
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

      <section id="okayama-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="岡山" />
      </section>

      <section id="okayama-checklist" className="scroll-mt-20 mb-12">
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

      <section id="okayama-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="okayama" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/fukuoka/", label: "依頼内容の伝え方と仕上がりの共有" },
            { href: "/cost/price/", label: "庭工事の料金相場" },
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
          配る文面ができたら、型の違う窓口をいくつか混ぜて送ってみてください。返ってくるものの差が判断材料になります。
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
