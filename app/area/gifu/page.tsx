import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/gifu/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "岐阜の造園・庭の手入れ業者の選び方｜返信がない場合の待ち方と対応";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "問い合わせへの返信がない、見積もりの提示を約束されたまま届かない、作業後の書類が届かないといった場合の対応を解説します。待つ期限を依頼者側で決め、最初の催促に何を記載し、どの時点で別の候補に切り替えるか。岐阜で庭の手入れを依頼する際に連絡が途絶えた後の進め方を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "連絡が途絶えた際に、どこまで待ち、どのように催促し、いつ切り替えるか。この観点から岐阜での業者選びを整理しています。",
  },
};

const toc = [
  { id: "gifu-stage", label: "「返信がない」の意味は依頼の段階により異なります" },
  { id: "gifu-deadline", label: "待つ期限は依頼者側で事前に決める" },
  { id: "gifu-followup", label: "最初の催促に記載する4つの事項" },
  { id: "gifu-judge", label: "遅延か、受注の意思がないのかを見極める" },
  { id: "gifu-switch", label: "並行して依頼を進める段階と、打ち切りを決めた場合の対応" },
  { id: "gifu-pick", label: "この条件に適した3サービス" },
  { id: "gifu-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "gifu-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "gifu-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["kurashi-market", "oniwa-madoguchi", "houzz"] as const;

const pickReasons: Record<string, string> = {
  "kurashi-market":
    "見積もりを取らずに料金が決まる形式で、サービスごとに料金が表示されています。金額を決めるためのやり取りが少ない構成のため、見積もりの返信を待つ時間が発生しにくい特徴があります。完了後に口コミ・評価を投稿でき、万一に備えた損害賠償補償制度も用意されています。",
  "oniwa-madoguchi":
    "「ガーデン業者サーチ」で全国の造園・園芸・外構業者を探せる情報・比較サイトです。依頼者が業者を選んで直接連絡する形式のため、連絡経路が一本化され、どこで連絡が止まっているかを把握しやすくなります。運営は株式会社ガーデンメーカー（愛知県稲沢市馬場1-96）で、庭の手入れ専門の全国チェーン「smileガーデン」も展開しています。",
  "houzz":
    "造園・ガーデンデザイナー、エクステリア・外構、植栽の専門家を地域・サービス別に検索でき、事例写真と星評価付きの口コミが掲載されています。候補を複数確保したい場合に一覧から比較できるため、一社の返信を待ち続ける必要がありません。2009年に米国で創業し、日本では2015年4月にサービスを開始しています。",
};

const waitRules = [
  {
    h: "送信時点で回答期限を決めておく",
    b: "返信が来てから考えるのではなく、送信した日に期限を設定します。期限を決めていないと、待っているのか断念したのかが曖昧なまま日数が経過し、気づいた時点で依頼したかった時期を過ぎてしまいます。期限は業者に合わせるより、依頼者の予定から逆算して設定するほうが現実的です。",
  },
  {
    h: "作業希望日から逆算して余裕を確保する",
    b: "作業の完了を希望する日がある場合は、その日から現地確認・見積もり・日程調整に要する期間を差し引き、返信を待てる最終日を算出します。待てる日数は依頼内容によって異なるため、一律の目安を当てはめるより、依頼者の予定から決めるほうが確実です。",
  },
  {
    h: "段階ごとに期限を設定する",
    b: "最初の反応、見積もりの提示、日程の確定、作業後の書類では、それぞれ待つべき期間が異なります。すべてを「返信がない」として扱うと、どの段階で止まっているかが分からなくなります。段階ごとに期限を設定しておくと、催促の際も用件を一つに絞れます。",
  },
  {
    h: "期限を過ぎたら必ず次の対応を行う",
    b: "期限を決めても、その日に何も行わなければ意味がありません。催促する、連絡経路を変える、別の候補に依頼するのいずれかを実行する日として設定しておきます。",
  },
];

const followUpItems = [
  {
    h: "依頼した日付と内容を記載する",
    b: "「先日お願いした件」ではなく、送信した日付と依頼した内容を一行で記載します。業者側では複数の案件が並行しているのが通常であり、どの案件かを特定する手間がかかるほど対応が後回しになります。最初に送信した文面を引用して添付する形でも構いません。",
  },
  {
    h: "求める回答を一つに絞る",
    b: "確認したい事項が複数あると、すべての回答が揃ってから返信しようとして対応が止まることがあります。現在必要なのが見積もりなのか、訪問可能日なのか、受注の可否なのかを一つに絞って記載します。その他の事項は、返信を受けてから確認すれば足ります。",
  },
  {
    h: "回答を希望する期限を添える",
    b: "期限が記載されていない問い合わせは、急ぎではないものとして扱われます。「この日までに返信がなければ他に依頼します」とまで記載する必要はなく、「◯日頃までに可否のみご回答いただけますと幸いです」といった表現で十分に伝わります。",
  },
  {
    h: "文面の調子は最初の連絡と変えない",
    b: "催促であっても強い表現を用いることで返信が早くなるとは限らず、その後の作業を依頼しにくくなります。伝えるべきは感情ではなく、止まっている事項と期限です。",
  },
];

const judgeItems = [
  {
    h: "時期による遅延かどうか",
    b: "庭の作業には、季節によって依頼が集中する時期があります。その時期は現地確認の日程が先まで埋まっていることがあり、返信の遅れが単に順番待ちである場合があります。受付窓口と実際の作業者が異なる場合、窓口の反応は早くても現地の日程調整で止まることがあります。",
  },
  {
    h: "受注するかどうかを判断しかねている場合",
    b: "距離、作業の種類、庭の条件などにより、受注とも辞退とも判断しにくい状態では、返信が止まりがちです。この場合、依頼者から「対応が難しい場合はその旨のみで構いません」と伝えると、可否の回答が得られることがあります。辞退の回答であっても、待ち続けるより次の行動に移れる利点があります。",
  },
  {
    h: "連絡が届いていない可能性を確認する",
    b: "入力フォームの送信が完了していなかった、迷惑メールに振り分けられた、電話番号を誤って入力したなど、単純な不達は珍しくありません。自動返信を受信しているか、送信済みの記録が残っているかを先に確認すると、不要な待ち時間を避けられます。",
  },
  {
    h: "二度目の連絡で反応がない場合は、それが回答である場合があります",
    b: "連絡経路を変えて二度連絡しても反応がない場合、それ以上待っても状況が変わらないことが多くあります。理由は業者側にあり、依頼者に落ち度があるとは限りません。三度目の連絡を検討するより、次の候補に時間を充てるほうが効率的です。",
  },
];

const switchItems = [
  {
    h: "連絡経路を変えて、もう一度だけ連絡する",
    b: "入力フォームから送信して反応がなければ、電話窓口に切り替えます。担当者個人宛で止まっている場合は、代表窓口に連絡します。同じ経路で同じ文面を繰り返すより、経路を変えるほうが結果が変わります。受付時間を公表しているサービスであれば、その時間帯に合わせて連絡するだけで進む場合もあります。",
  },
  {
    h: "窓口が複数ある会社には、連絡経路を一つに決める",
    b: "電話とフォームの両方から同じ依頼を出すと、社内で別々の案件として扱われ、かえって対応が止まることがあります。二重に依頼するのではなく、経路を変える際は「先にフォームから送信した件です」と前回の連絡を示して伝えます。",
  },
  {
    h: "並行して別の候補に依頼してよい段階",
    b: "依頼が成立する前、つまり見積もりや可否の回答を待っている段階であれば、他の業者に依頼しても差し支えありません。回答が届いた順に検討を進め、回答がない業者は候補から外すだけです。複数社に依頼する際に条件を揃える方法は、別のページで解説しています。",
  },
  {
    h: "打ち切りを決めた場合は、その旨を伝える",
    b: "「今回は見送ります」という連絡を送っておきます。理由を詳しく記載する必要はありません。連絡しないまま放置すると、業者側では案件が残ったままとなり、後から見積もりや連絡が届いて行き違いが生じます。次回同じ地域で依頼する際に、同じ業者に依頼する可能性もあります。",
  },
];

const checklist = [
  {
    h: "用件を1通にまとめたか",
    b: "何度も分けて送信すると、どれが最新の内容か分からなくなります。庭の状況、依頼内容、希望時期を一度に伝えます。",
  },
  {
    h: "回答を希望する期限を添えたか",
    b: "期限のない問い合わせは後回しにされやすく、依頼者もいつまで待つかを決められないまま時間が経過します。",
  },
  {
    h: "連絡経路を一つに決めたか",
    b: "窓口が複数ある場合、同じ依頼を二重に出すと社内で別の案件として扱われることがあります。",
  },
  {
    h: "待てる最終日を算出したか",
    b: "作業希望日から逆算し、現地確認と見積もりに要する期間を差し引きます。その日を過ぎたら次の対応を行う日として設定しておきます。",
  },
  {
    h: "最初から複数の業者に依頼したか",
    b: "一社の返信のみを待つ形にすると、対応が止まった際に一から探し直すことになります。",
  },
];

const faqs = [
  {
    q: "問い合わせて何日返事がなければ、催促してよいですか。",
    a: "一律の目安はありません。業者の受付体制や時期によって適切な期間が異なるためです。送信した日に期限を決め、その日を過ぎたら、催促する、連絡経路を変える、次の候補に依頼するのいずれかを実行してください。催促すること自体は失礼にあたりません。用件が一つに絞られ、回答を希望する期限が記載されていれば、業者側も対応しやすくなります。",
  },
  {
    q: "見積りを出すと言われたまま、届きません。どうすればよいですか。",
    a: "まず、いつ・どの内容で見積もりを依頼したかを記載し、見積もりの提示のみを用件とした連絡をします。金額や日程の話を同じ文面に含めないほうが、回答を得やすくなります。それでも反応がない場合は、現地を確認したうえで受注するかどうかを判断しかねている可能性があります。「対応が難しい場合はその旨のみで構いません」と添えると、可否の回答が得られることがあります。",
  },
  {
    q: "返事を待っているあいだに、他の会社に問い合わせてもよいですか。",
    a: "見積もりや可否の回答を待っている段階であれば、差し支えありません。依頼が成立する前の段階であるためです。回答が届いた順に検討し、依頼しない業者には見送る旨を伝えれば足ります。条件を揃えて複数社に依頼する方法と断り方については、岡山のページで解説しています。",
  },
  {
    q: "岐阜市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、岐阜市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "連絡が途絶えた際の待つ期限の決め方、最初の催促に記載する事項、切り替えの判断基準を整理しています。",
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
          問い合わせを送信したのに反応がない、見積もりの提示を約束されたまま届かない、日程確認の連絡が返ってこない、作業は完了したのに請求書や書類が届かないといった場面では、依頼者に落ち度があったのではないかと考えがちですが、待っている間は何も進みません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          岐阜市内の住宅の庭を依頼する場合も同様です。連絡が途絶えた際に有効なのは、業者の事情を推測することではなく、待つ期限を依頼者側で決めておくことと、最初の催促に何を記載するかです。本ページでは、段階ごとの判断の仕方、連絡経路の変え方、打ち切りを決めた場合の伝え方までを順に整理します。
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
          「返信がない」の意味は依頼の段階により異なります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ「連絡が来ない」状況でも、最初の問い合わせに反応がない場合と、作業完了後の書類が届かない場合とでは、依頼者の立場も取るべき対応も異なります。前者はまだ業者を選定している段階のため、次の候補に移ればよいだけです。後者は依頼が成立した後の問題であるため、次の候補に移るという選択肢がありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          この違いを区別せずに「返信が来ない」とまとめて扱うと、待つ必要のない場面で待ち続けたり、確認を進めるべき場面で連絡を止めてしまったりします。まず、現在止まっているのがどの段階かを明確にしてから対応します。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            段階はおおむね四つです。受注の可否、現地確認の日程、見積もりの提示、作業後の請求や書類です。このうち前の二つは依頼先の切り替えが可能で、後の二つは依頼先を変更できません。以下では、この前提に沿って待ち方と催促の方法を解説します。
          </p>
        </div>
      </section>

      <section id="gifu-deadline" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          待つ期限は依頼者側で事前に決める
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          何日待てばよいかという問いの答えは、業者側にはありません。決められるのは依頼者の予定のほうです。
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
          作業希望時期から逆算する考え方は
          <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の整理と優先順位
          </Link>
          、日程が変動する理由は
          <Link href="/area/kitakyushu/" className="text-primary underline underline-offset-2 mx-1">
            日程の決め方と天候による順延
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gifu-followup" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          最初の催促に記載する4つの事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          「その後いかがでしょうか」のみを送信すると、業者側では最初の問い合わせを探し直すところから始めることになります。一通で判断できる形にしておくと、返信を得られる可能性が高まります。
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
          最初の連絡に記載する内容は
          <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2 mx-1">
            問い合わせ手段と最初のやり取り
          </Link>
          、やり取りの記録の残し方は
          <Link href="/area/sakai/" className="text-primary underline underline-offset-2 mx-1">
            認識の相違に備える記録の残し方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gifu-judge" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          遅延か、受注の意思がないのかを見極める
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          返信がない理由は一つではありません。理由によって、待つ意味があるかどうかが変わります。
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
          並行して依頼を進める段階と、打ち切りを決めた場合の対応
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          待ち続けるか断念するかの二択にせず、連絡経路を変える、並行して依頼する、区切りをつける、という順に対応します。
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
          複数社に依頼する際に条件を揃える方法と、依頼しない業者への断り方は
          <Link href="/area/okayama/" className="text-primary underline underline-offset-2 mx-1">
            相見積もりの条件の揃え方と断り方
          </Link>
          で解説しています。費用の目安を知りたい段階であれば
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          を先に確認しておくと、見積もりを待つ間の判断がしやすくなります。
        </p>
      </section>

      <section id="gifu-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、連絡のやり取りをできるだけ少なくしたい、あるいは候補を複数確保したまま進めたいという条件では、次の3サービスが構成上の特徴を明確に備えています。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。受付の体制や連絡の取りやすさは公開情報からは読み取れないため、実際のやり取りで確かめることになります。
        </p>
        <AreaCompanyTable cityName="岐阜" />
      </section>

      <section id="gifu-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          連絡が滞りにくいかどうかは、最初の一通で決まる部分があります。送信前に次の5点を確認しておきます。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/shizuoka/", label: "問い合わせ手段と最初のやり取り" },
            { href: "/area/sakai/", label: "認識の相違に備える記録の残し方" },
            { href: "/area/okayama/", label: "相見積もりの条件の揃え方と断り方" },
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
          待つ期限を決め、候補を複数確保しておくと、返信がない場合でも依頼を停滞させずに済みます。各サービスを比較検討することをおすすめします。
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
