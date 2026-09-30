import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/gifu/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "岐阜の造園・庭の手入れ業者の選び方｜返事が来ないときの待ち方と進め方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "問い合わせたのに返事が来ない、見積りを出すと言われたまま来ない、作業後の書類が届かない。待つ期限を自分の側で決め、催促の一往復目に何を書き、どこで別の候補に切り替えるか。岐阜で庭の手入れを頼むときの連絡が途切れたあとの進め方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "連絡が途切れたときに、どこまで待ち、何を書いて催促し、いつ切り替えるか。岐阜での業者選びをこの観点から整理しました。",
  },
};

const toc = [
  { id: "gifu-stage", label: "「返事がない」は、依頼のどの段階かで意味が変わる" },
  { id: "gifu-deadline", label: "いつまで待つかを、自分の側で先に決める" },
  { id: "gifu-followup", label: "催促の一往復目に書いておく4つ" },
  { id: "gifu-judge", label: "遅れているだけなのか、受ける気がないのか" },
  { id: "gifu-switch", label: "並行して動かす段階と、打ち切ると決めたとき" },
  { id: "gifu-pick", label: "この条件で見ておきたい3サービス" },
  { id: "gifu-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "gifu-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "gifu-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["kurashi-market", "oniwa-madoguchi", "houzz"] as const;

const pickReasons: Record<string, string> = {
  "kurashi-market":
    "見積もりを取らずに料金が決まる形で、サービスごとに料金が表示されています。金額を決めるための往復そのものが少ない構成のため、見積りの返事を待つ時間が発生しにくいという性質があります。完了後に口コミ・評価を投稿でき、万一に備えた損害賠償補償制度も用意されています。",
  "oniwa-madoguchi":
    "「ガーデン業者サーチ」で全国の造園・園芸・外構業者を探せる情報・比較サイトです。自分で相手を選んで直接当たる形になるため、連絡の経路が一本になり、どこで止まっているのかを把握しやすくなります。運営は株式会社ガーデンメーカー（愛知県稲沢市馬場1-96）で、庭手入れ専門の全国チェーン「smileガーデン」も展開しています。",
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価レビューが掲載されています。候補を複数持っておきたいときに一覧から並べられるため、一社の返事を待ち続けずに済みます。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
};

const waitRules = [
  {
    h: "送った時点で「いつまで」を決めておく",
    b: "返事が来てから考えるのではなく、送信した日に自分の中で期限を置きます。決めていないと、待っているのか諦めたのかがあいまいなまま日が過ぎ、気づいたときには頼みたかった時期を外しています。期限は相手に合わせて選ぶより、自分の予定から逆算して置くほうが現実的です。",
  },
  {
    h: "作業日から逆算して余裕を残す",
    b: "この日までに終わらせたいという日があるなら、そこから現地確認・見積り・日程調整の分を引いて、返事を待てる最終日を出します。待てる日数は依頼の内容で変わるので、一律の目安を当てはめるより、自分の予定の側から決めたほうがずれません。",
  },
  {
    h: "段階ごとに期限を分けて置く",
    b: "最初の反応、見積りの提示、日程の確定、作業後の書類。それぞれで待つ長さは違います。全部まとめて「返事がない」と扱うと、どこで止まっているのかが見えなくなります。段階ごとに別の期限を置いておくと、催促するときも用件が一つに絞れます。",
  },
  {
    h: "期限が来たら、必ず何かを動かす",
    b: "期限を決めても、その日に何もしなければ決めていないのと同じです。催促を出す、経路を変える、別の候補に当たる。どれか一つを実行する日として置いておきます。",
  },
];

const followUpItems = [
  {
    h: "いつ、何を依頼したかを書く",
    b: "「先日お願いした件」ではなく、送った日付と、依頼した内容を一行で書き添えます。相手の側では複数の案件が並行しているのが通常で、どの話かを特定する手間がかかるほど後回しになります。最初に送った文面を引用して付ける形でも足ります。",
  },
  {
    h: "何の返事を待っているかを一つに絞る",
    b: "聞きたいことが複数あると、全部そろってから返そうとして止まることがあります。いま欲しいのが見積りなのか、来られる日なのか、受けられるかどうかの可否なのかを一つに絞って書きます。残りは返事が来てから足せば済みます。",
  },
  {
    h: "いつまでに返事がほしいかを添える",
    b: "期限が書かれていない問い合わせは、急ぎではないものとして扱われます。「この日までに返事がなければ他を当たります」まで書く必要はなく、「◯日ごろまでに可否だけいただけると助かります」という形で十分に伝わります。",
  },
  {
    h: "文面の調子は最初と変えない",
    b: "催促だからといって強い言い方にしても、返事が早くなるとは限りません。むしろ、その後の作業を頼みにくくなります。伝えるべきは感情ではなく、止まっている箇所と期限です。",
  },
];

const judgeItems = [
  {
    h: "時期による遅れかどうか",
    b: "庭の作業は、季節によって依頼が集まる時期があります。その時期は現地確認の日程自体が先まで埋まっていることがあり、返事が遅いのは単に順番待ちという場合があります。受付の窓口と実際に作業する人が別の場合、窓口の反応は早くても現地の日程で止まることがあります。",
  },
  {
    h: "受けるかどうかを決めかねている",
    b: "距離、作業の種類、庭の条件。受けられるとも断るとも言いにくい状態だと、返事が止まりがちです。この場合、こちらから「難しければその旨だけで構いません」と伝えると、可否の返事が返ってくることがあります。断りの返事でも、次に動けるだけ待ち続けるより得られるものがあります。",
  },
  {
    h: "届いていない可能性を一度は疑う",
    b: "入力フォームの送信が完了していなかった、迷惑メールに振り分けられた、番号の打ち間違い。単純な不達は珍しくありません。自動返信が来ていたかどうか、送信済みの記録が残っているかを先に確かめると、無駄に待たずに済みます。",
  },
  {
    h: "二度目で反応がなければ、それが答えのことがある",
    b: "経路を変えて二度当たっても動きがない場合、それ以上待っても状況は変わらないことが多いものです。理由は相手の側にあり、こちらに落ち度があるとは限りません。三度目を考えるより、次の候補に時間を使うほうが前に進みます。",
  },
];

const switchItems = [
  {
    h: "経路を変えて、もう一度だけ当たる",
    b: "入力フォームから送って反応がなければ、電話の窓口に変える。担当者の個人宛で止まっているなら、代表の窓口に出す。同じ経路で同じ文面を繰り返すより、届く経路を変えるほうが結果が変わります。受付時間を公表しているサービスなら、その時間帯に合わせて連絡するだけで進むこともあります。",
  },
  {
    h: "窓口が複数ある会社は、経路を一つに決める",
    b: "電話とフォームの両方から同じ依頼を出すと、社内で別々の案件として扱われ、かえって止まることがあります。二重に出すのではなく、経路を変えるときは「先にフォームから送った件です」と前の連絡を指して伝えます。",
  },
  {
    h: "並行して別の候補を動かしてよい段階",
    b: "依頼が成立する前、つまり見積りや可否の返事を待っている段階であれば、他に当たっておいて差し支えありません。返事が来た順に進め、来なかったところは候補から外れるだけです。複数社に当たるときに条件を揃える方法は別のページで整理しています。",
  },
  {
    h: "打ち切ると決めたら、黙って消えない",
    b: "「今回は見送ります」の一言を送っておきます。理由を細かく書く必要はありません。放置すると、相手の側では案件が残ったままになり、あとから見積りや連絡が届いて行き違いが起きます。次に同じ地域で頼むときに、同じ相手に当たることもあります。",
  },
];

const checklist = [
  {
    h: "用件を1通にまとめたか",
    b: "小分けに何度も送ると、どれが最新かが分からなくなります。庭の状況、やってほしいこと、希望の時期を一度に渡します。",
  },
  {
    h: "返事がほしい期限を添えたか",
    b: "期限のない問い合わせは後回しになりやすく、こちらもいつまで待つかを決められないまま時間が過ぎます。",
  },
  {
    h: "連絡の経路を一つに決めたか",
    b: "窓口が複数ある場合、同じ依頼を二重に出すと社内で別の案件として扱われることがあります。",
  },
  {
    h: "自分が待てる最終日を出したか",
    b: "作業したい日から逆算して、現地確認と見積りの分を引きます。その日を過ぎたら次を動かす日として置いておきます。",
  },
  {
    h: "最初から複数に出したか",
    b: "一社の返事だけを待つ形にすると、止まったときに一から探し直すことになります。",
  },
];

const faqs = [
  {
    q: "問い合わせて何日返事がなければ、催促してよいですか。",
    a: "一律の目安はありません。相手の受付体制や時期によって適切な長さが変わるためです。送った日に自分の中で期限を決め、その日が来たら催促するか経路を変えるか次の候補に当たるか、いずれかを実行してください。催促すること自体は失礼にあたりません。用件が一つに絞られていて、返事がほしい期限が書かれていれば、相手の側でも処理しやすくなります。",
  },
  {
    q: "見積りを出すと言われたまま、届きません。どうすればよいですか。",
    a: "まず、いつ・どの内容で見積りを依頼したかを添えて、見積りの提示だけを用件にした連絡を出します。金額の話や日程の話を同じ文面に混ぜないほうが、返事が返ってきやすくなります。それでも動かない場合、現地を見たうえで受けるかどうかを決めかねていることがあります。「難しければその旨だけで構いません」と添えると、可否の返事が返ってくることがあります。",
  },
  {
    q: "返事を待っているあいだに、他の会社に問い合わせてもよいですか。",
    a: "見積りや可否の返事を待っている段階であれば、差し支えありません。依頼が成立する前の段階だからです。返事が来た順に検討し、進めないところには見送る旨を伝えれば足ります。条件を揃えて複数社に当たる方法と、断り方については岡山のページで整理しています。",
  },
  {
    q: "岐阜市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、岐阜市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaGifuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "連絡が途切れたときに待つ期限をどう決め、催促の一往復目に何を書き、どこで切り替えるかを整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "岐阜" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          問い合わせを送ったのに反応がない。見積りを出しますと言われたまま届かない。日程を確認してもらう約束が返ってこない。作業は終わったのに請求や書類が来ない。どれも、こちらが何か間違えたのかと考え込みやすい場面ですが、待っているあいだは何も進みません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          岐阜にある家の庭で頼む場合も同じです。連絡が途切れたときに効くのは、相手の事情を推し量ることではなく、いつまで待つかを自分の側で決めておくことと、催促の一往復に何を書くかです。このページでは、段階ごとの見方と、経路の変え方、そして打ち切ると決めたときの伝え方までを順に整理します。
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

      <section id="gifu-stage" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          「返事がない」は、依頼のどの段階かで意味が変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「連絡が来ない」でも、最初の問い合わせに反応がないのと、作業が終わったあとの書類が届かないのとでは、こちらの立場も打てる手も違います。前者はまだ相手を選んでいる段階なので、次に移ればよいだけです。後者は依頼が成立したあとの話なので、次に移るという選択肢がありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この違いを分けずに「返事が来ない」とひとまとめにすると、待たなくてよい場面で待ち続けたり、逆に詰めるべき場面で連絡を止めてしまったりします。まず、いま止まっているのがどの段階かを言葉にしてから動きます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            段階はおおむね四つです。受けてもらえるかどうかの可否、現地を見てもらう日程、見積りの提示、そして作業後の請求や書類。このうち前の二つは切り替えが利き、後の二つは相手を替えられません。以降は、この前提のうえで待ち方と催促のしかたを見ていきます。
          </p>
        </div>
      </section>

      <section id="gifu-deadline" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          いつまで待つかを、自分の側で先に決める
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          何日待てばよいかという問いには、相手の側に答えがありません。決められるのはこちらの予定のほうです。
        </p>
        <ol className="space-y-4">
          {waitRules.map((x, i) => (
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
          作業したい時期から逆算する考え方は
          <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2 mx-1">
            困りごとの切り分けと優先順位
          </Link>
          、日程そのものが動く理由は
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="gifu-followup" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          催促の一往復目に書いておく4つ
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「その後いかがでしょうか」だけを送ると、相手の側では最初の問い合わせを探し直すところから始まります。一通で判断できる形にしておくと、返事が戻る確率が変わります。
        </p>
        <div className="space-y-4">
          {followUpItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          最初の連絡そのものに何を書くかは
          <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2 mx-1">
            問い合わせ手段と最初のやり取り
          </Link>
          、やり取りの記録をどう残しておくかは
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            食い違いに備える記録の残し方
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="gifu-judge" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          遅れているだけなのか、受ける気がないのか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          返事がない理由は一つではありません。どちらなのかで、待つ意味があるかどうかが変わります。
        </p>
        <div className="space-y-4">
          {judgeItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gifu-switch" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          並行して動かす段階と、打ち切ると決めたとき
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          待ち続けるか諦めるかの二択にせず、経路を変える、並行して当たる、区切りをつける、という順に動きます。
        </p>
        <ol className="space-y-4">
          {switchItems.map((x, i) => (
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
          複数社に当たるときに条件を揃える方法と、進めない相手への断り方は
          <Link href="/area/okayama/" className="text-primary underline underline-offset-2 mx-1">
            相見積もりの揃え方と断り方
          </Link>
          で扱っています。費用の目安が知りたい段階であれば
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          を先に見ておくと、見積りを待つあいだの判断がしやすくなります。
        </p>
      </section>

      <section id="gifu-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、連絡の往復をできるだけ少なくしたい、あるいは候補を複数持ったまま進めたいという条件で見ると、次の3つは構成上の性格がはっきりしています。
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

      <section id="gifu-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。受付の体制や連絡の取りやすさは公開情報からは読み取れないため、実際のやり取りで確かめることになります。
        </p>
        <AreaCompanyTable cityName="岐阜" />
      </section>

      <section id="gifu-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          連絡が滞りにくい形は、最初の一通で決まる部分があります。送る前に次の5点を確かめておきます。
        </p>
        <div className="space-y-4">
          {checklist.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gifu-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="gifu" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/shizuoka/", label: "問い合わせ手段と最初のやり取り" },
            { href: "/area/sakai/", label: "食い違いに備える記録の残し方" },
            { href: "/area/okayama/", label: "相見積もりの揃え方と断り方" },
            { href: "/ranking/", label: "造園・庭師業者ランキング" },
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
          待つ期限を決めて、候補を複数持っておくと、返事が来ないことで止まらずに済みます。まずは並べて見比べてみてください。
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
