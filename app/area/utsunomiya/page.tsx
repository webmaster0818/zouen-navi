import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/utsunomiya/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "宇都宮の造園・庭の手入れ業者の選び方｜年間契約とそのつど依頼の選び分け";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れには、年間で決めて任せる形と、必要になったつど頼む形があります。どちらが向くかを分ける材料、年間契約で必ず確かめる項目、そのつど頼む形の弱点、まず一回頼んでから決めるという選び方。宇都宮で庭の手入れを頼むときの契約の形を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "年間契約とそのつど依頼のどちらを選ぶかという観点から、宇都宮での業者選びを整理しました。",
  },
};

const toc = [
  { id: "utsunomiya-form", label: "先に決まるのは作業内容ではなく、頼み方の形" },
  { id: "utsunomiya-judge", label: "向き不向きを分ける4つの材料" },
  { id: "utsunomiya-contract", label: "年間契約で必ず確かめること" },
  { id: "utsunomiya-spot", label: "そのつど頼む形の弱点" },
  { id: "utsunomiya-pick", label: "この条件で見ておきたい3サービス" },
  { id: "utsunomiya-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "utsunomiya-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "utsunomiya-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["townlife", "smile-garden", "epark"] as const;

const pickReasons: Record<string, string> = {
  "townlife":
    "希望条件を入力すると複数社からプラン・見積もりを無料で取り寄せられる窓口です。外構（エクステリア）専用の請求窓口があり、庭・外構のプラン取り寄せに使えます。続けて任せる前提で相談したいとき、どういう組み方を提案してくるかを何社か並べて比べられる形になります。運営はタウンライフ株式会社です。",
  "smile-garden":
    "庭木1本の剪定から年間管理まで、剪定・伐採・草刈り・芝刈り・植栽などの庭手入れを専門に扱う全国チェーンです。完全自店舗施工で余分なマージンをカットし、無料の明瞭見積もりで追加料金なしを掲げています。庭師経験10年以上のスタッフが9割以上、リピート率95%以上（公式・自社調べ）と公表しており、続けて頼む形を検討するときの材料になります。運営は株式会社ガーデンメーカーです。",
  "epark":
    "「植木屋・造園業者・庭師」のカテゴリから事業者を探せ、各事業者のページに料金表・営業時間・対応エリア・利用者の声が掲載されています。今回はこの作業だけ、という形で頼みたいときに、作業の単位で当たりを付けやすい構成です。全国47都道府県の業者を地域ごとに検索・電話予約できます。運営は株式会社REstaです。",
};

const judgeItems = [
  {
    h: "庭の規模より、手が届かない部分がどれだけあるか",
    b: "広さそのものより、自分では触れない部分の量で決まります。脚立でも届かない高さの木が何本かある、生垣が長い、手の入らない裏側がある。こういう庭は、放っておくと一年で状態が戻ってしまうため、続けて見てもらう形が噛み合います。逆に、手を入れたい対象が一、二本に限られるなら、そのつどで足ります。",
  },
  {
    h: "植えているものの伸び方が、年に何度手を必要とするか",
    b: "一年に一度整えれば形が保てるものと、伸びるたびに刈らないと崩れるものがあります。生垣、成長の早い木、地面を覆う植物。年に複数回の手入れが前提になっているなら、そのつど探して日程を取る手間が毎回発生します。ここが年間で決めておく形の効きどころです。",
  },
  {
    h: "自分で手を入れる頻度が、どれくらい続くか",
    b: "足元の草や低いところは自分でやる、という前提が実際に続いているかどうかです。続いているなら、頼むのは高いところと年一回の整えだけで済み、そのつどの形で回ります。この一年やれていないなら、その前提は外して考えたほうが現実に合います。自分でやる範囲の判断材料は、DIYのページで扱っています。",
  },
  {
    h: "毎回立ち会えるか、日程を自分で決められるか",
    b: "そのつど頼む形は、毎回こちらが日程を決めて調整することになります。平日に動きにくい、長期で家を空ける時期がある、体調や年齢で毎回の対応が負担になっている。この場合、年間で決めておいて先方の組んだ日程に乗るほうが、かかる手間は小さくなります。",
  },
];

const contractChecks = [
  {
    h: "年に何回来て、その一回で何をするのか",
    b: "回数だけ決まっていて中身が書かれていない取り決めは、あとで食い違います。一回目は高木の剪定、二回目は生垣と草、三回目は落ち葉。このように、回ごとの作業内容が書面に残っているかを見ます。「状況に応じて対応」としか書かれていない場合は、何が含まれる想定なのかを口頭でなく文字で確認してください。",
  },
  {
    h: "含まれない作業と、追加が出る条件",
    b: "多いのは、切ったものの処分、伐採や抜根、高所作業、防除の薬剤散布、土や砂利の搬入です。これらが含まれるのか、別扱いなのか。そして、含まれない作業が必要になったときに、その場で進めるのか、一度こちらへ連絡がくるのかを決めておきます。追加が出る条件が書かれていない取り決めは、実質的に上限がない状態です。",
  },
  {
    h: "途中でやめられるか、自動で続くのか",
    b: "期間が終わったあと自動で更新されるのか、こちらから言わないと止まらないのか。途中で解約する場合の連絡の期限や扱いはどうなるか。転居や、庭を減らす予定がある場合はとくに関わります。続ける前提の取り決めほど、やめるときの条件を先に見ておく価値があります。",
  },
  {
    h: "誰が来るのか、担当が替わったときどうなるか",
    b: "続けて頼む形の利点は、庭の状態を覚えてもらえることです。毎回違う人が来るなら、その利点は薄くなります。同じ担当が続く運用か、記録を引き継ぐ仕組みがあるか。紹介の形で毎回手配される仕組みなのか、自社の人が来る仕組みなのかも、ここで分かれます。",
  },
];

const spotWeakness = [
  {
    h: "毎回、庭の状態を一から説明することになる",
    b: "前回どこをどう切ったか、どの木が弱っていたか、境界のどこに気を遣ったか。相手が替われば、そのつど伝え直しです。写真と作業の記録を自分で残しておけば補えますが、残していない場合、説明の精度は年々落ちます。",
  },
  {
    h: "頼みたい時期ほど、日程が取りにくい",
    b: "庭の作業は時期が集中します。伸びきってから探し始めると、希望の週に入らないことがあります。そのつど頼む形を選ぶなら、動き出す時期を自分の中で決めておかないと、毎年後ろにずれていきます。",
  },
  {
    h: "毎回、選ぶところからやり直しになる",
    b: "前回よかった相手にまた頼めるとは限りません。日程が合わない、条件が変わる、担当がいない。そのたびに探して、条件を伝えて、比べる作業が発生します。回数が少ないうちは問題になりませんが、年に何度も必要な庭では負担になります。",
  },
  {
    h: "それでも、そのつどを選ぶ理由はある",
    b: "弱点ばかりではありません。必要なときにだけ頼むので、要らない年は空けられます。庭の使い方が変わる見込みがある、しばらく手を入れない予定がある、相手をまだ決めきれていない。こういう状況では、そのつどのほうが身軽です。続けるかどうかは、一度頼んでから判断しても遅くありません。",
  },
];

const checklist = [
  {
    h: "自分の庭が年に何回の手入れを必要とするか、見当を付けたか",
    b: "一回で足りるのか、複数回いるのか。ここが決まらないと、どちらの形が向くかも決まりません。",
  },
  {
    h: "自分でやる範囲が、この一年で実際に続いていたか",
    b: "続いていない前提を置いたまま組むと、そのつどの形は回らなくなります。",
  },
  {
    h: "年間で頼む場合、回ごとの作業内容を書面で確認したか",
    b: "回数だけ決まっていて中身が書かれていない取り決めは、あとで食い違います。",
  },
  {
    h: "含まれない作業と、追加が出る条件を聞いたか",
    b: "処分、伐採、高所作業、薬剤散布。含むのか別なのか、その場で進めるのか連絡がくるのかまで。",
  },
  {
    h: "やめ方と更新のしかたを確認したか",
    b: "自動で続くのか、いつまでに言えば止まるのか。始める前に見ておく項目です。",
  },
];

const faqs = [
  {
    q: "最初から年間契約にしたほうがよいのでしょうか。",
    a: "先に一回だけ頼んで、そのうえで決めるという進め方があります。実際に来てもらうと、作業の丁寧さ、連絡の取りやすさ、片づけの状態、こちらの希望の汲み方が分かります。書面や説明だけでは判断できない部分です。年に何度も手入れが要る庭で、相手の見当が付いているなら、最初から年間で組む形も成り立ちます。迷っている段階なら、一回頼んでから続けるかを決めるほうが戻しやすくなります。",
  },
  {
    q: "年間で頼むと、そのつど頼むより合計は安くなりますか。",
    a: "金額の増減はここでは扱いませんが、比べるときは合計だけを見ないでください。含まれる作業の範囲、処分費の扱い、追加が出る条件、回数。この四つが違えば、合計の数字は比較の対象になりません。同じ条件で並べてから比べる必要があります。費用の目安そのものは料金のページを参照してください。",
  },
  {
    q: "途中で庭の状況が変わったら、決めた内容は変えられますか。",
    a: "変更の扱いは取り決めによります。木を減らした、駐車場にした、隣地の状況が変わった。こういう変化があると、当初決めた回数や内容が実態に合わなくなります。始める段階で、内容を見直す場合の手順と、途中でやめる場合の条件を確認しておいてください。ここが決まっていないと、合わなくなった内容のまま続くことになります。",
  },
  {
    q: "宇都宮市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、宇都宮市内での個別の対応可否・作業日程・出張範囲までは公開されていません。年間で続けて対応してもらえるかどうかも同様です。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaUtsunomiyaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "年間で決めて任せる形と、そのつど頼む形の選び分け。判断材料、年間契約で確かめる項目、そのつど頼む形の弱点を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "宇都宮" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを頼むとき、多くの人は「何をしてもらうか」から考えます。ただし、その手前にもう一つ決めることがあります。年間で決めて任せる形にするのか、必要になったつど頼む形にするのか。この選び方で、毎年かかる手間も、確認しておくべき項目も変わります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          宇都宮にある家の庭で頼む場合も同じです。どちらが優れているという話ではなく、庭と暮らし方で向き不向きが分かれます。このページでは、その分かれ目と、年間で決める場合に必ず確かめる項目、そのつど頼む形の弱点を整理します。費用の目安そのものは料金のページで扱っています。
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

      <section id="utsunomiya-form" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          先に決まるのは作業内容ではなく、頼み方の形
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「剪定をお願いしたい」でも、年間で決めて任せる形と、そのつど頼む形では、相手から返ってくるものが変わります。前者は一年の組み方の提案になり、後者はその回の作業の見積もりになります。どちらを求めているのかが伝わっていないと、話が噛み合いません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          年間で決める形は、回数と内容を先に取り決めておき、日程は先方の組み方に乗るのが基本です。手間は最初にまとめてかかり、あとは減ります。そのつど頼む形は、必要になった時点で探し、条件を伝え、日程を調整します。身軽ですが、その手間が毎回発生します。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            最初から年間で決めなければならない、ということはありません。一回頼んで、様子を見てから続けるかを判断する形も成り立ちます。むしろ、相手をまだ知らない段階で長い取り決めに入るより、そのほうが戻しやすくなります。次の見出しから、どちらが噛み合うかを分ける材料を見ていきます。
          </p>
        </div>
      </section>

      <section id="utsunomiya-judge" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          向き不向きを分ける4つの材料
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          判断の軸は庭の広さではありません。年に何回の手入れが要るか、そのうち何回を自分でまかなえるか、という見方をします。
        </p>
        <ol className="space-y-4">
          {judgeItems.map((x, i) => (
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
          一年のどの時期に何をするかの組み立ては
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          、自分でやる範囲の判断は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="utsunomiya-contract" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          年間契約で必ず確かめること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          続けて任せる形は、一度決めると次に見直すのが一年後になります。そのぶん、始める前の確認が効きます。
        </p>
        <div className="space-y-4">
          {contractChecks.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          書面のどこを読むかは
          <Link href="/area/kobe/" className="text-primary underline underline-offset-2 mx-1">
            見積書の読み方と書面の確認
          </Link>
          、支払いの形と契約が成立する時点は
          <Link href="/area/kumamoto/" className="text-primary underline underline-offset-2 mx-1">
            支払いの方法と契約が決まる時点
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="utsunomiya-spot" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          そのつど頼む形の弱点
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          必要なときだけ頼めるのが利点ですが、回数が増えるほど見えにくい負担が積み上がります。
        </p>
        <div className="space-y-4">
          {spotWeakness.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          日程が動く要因と順延の決め方は
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          、次に頼むときに効く記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            食い違いに備える記録の残し方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="utsunomiya-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、続けて任せる形とそのつど頼む形を見比べたいという条件で見ると、次の3つは性格の違いが分かりやすい構成です。
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

      <section id="utsunomiya-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="宇都宮" />
      </section>

      <section id="utsunomiya-checklist" className="scroll-mt-20 mb-12">
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

      <section id="utsunomiya-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="utsunomiya" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/cost/price/", label: "庭工事の料金相場" },
            { href: "/area/kyoto/", label: "仕上がりの方針と継続管理" },
            { href: "/area/kumamoto/", label: "支払いの方法と契約が決まる時点" },
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
          続けて任せるか、そのつど頼むか。決めてから当たると、返ってくる提案の形が変わります。
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
