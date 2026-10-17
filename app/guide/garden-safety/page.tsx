import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/garden-safety/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "庭作業の事故を防ぐ｜脚立・刈払機・刃物による事故の実態と、自分で行わない作業の判断基準";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭木の剪定中の脚立からの転落、刈払機による切創や飛散物、剪定ばさみによる負傷について、消費者庁・国民生活センター・NITEが公表している事故の形態と注意点にもとづき、自分で行わない作業の判断基準、作業前の準備、一人で作業しないための取り決めを整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "脚立・刈払機・刃物を使用する庭作業の事故を、公的機関の注意喚起にもとづいて整理しています。",
  },
};

const toc = [
  { id: "gs-records", label: "公的機関の記録にある庭作業の事故" },
  { id: "gs-line", label: "自分で行わない作業を事前に決めておく" },
  { id: "gs-ladder", label: "脚立・はしごは設置場所と乗る位置が重要です" },
  { id: "gs-cutter", label: "刈払機は刃より先に周囲を確認する" },
  { id: "gs-blades", label: "剪定ばさみ・のこぎり・チェーンソーの取り扱い" },
  { id: "gs-alone", label: "作業前に決めること、一人で作業しないこと" },
  { id: "gs-faq", label: "よくある質問" },
  { id: "gs-sources", label: "本ページで参照した公的機関の資料" },
];

const records = [
  {
    h: "脚立・はしごからの転落は、庭木の剪定中が最も多い",
    b: "消費者庁の公表資料「脚立・はしごからの転落に注意！～庭木の剪定、屋根修理で、死亡事故の危険も～」（平成26年12月22日）では、脚立・はしごからの転落事故の情報が437件寄せられ、頭部を強打して死亡に至ったものが8件あったとされています。年齢が分かるものでは50歳以上が7割強を占め、発生時の状況では「庭木の剪定」が最も多く、次いで「屋根の修繕」でした。",
  },
  {
    h: "転落の原因は、製品の破損よりも使い方とバランスの喪失",
    b: "同じ資料では、原因が分かっているもののうち製品の破損によるものは1割に満たず、使い方が正しくなかったもの、昇降時や作業中にバランスを崩したものが大半とされています。製品評価技術基盤機構（NITE）の「事故の約4割が60代以上！『はしごの上で作業しない』『脚立にまたがらない』」（令和4年9月16日）でも、2017年度から2021年度の5年間に通知された「はしご・脚立」の事故162件のうち、事故原因の半数近くが使用者の不適切な取り扱いや不注意によるものとされています。",
  },
  {
    h: "刈払機では、刃との接触と飛散物による事故",
    b: "消費者庁と国民生活センターの「刈払機（草刈機）の使用中の事故にご注意ください！」（平成29年7月20日）では、刈払機の使用中に指を切断した、骨折したなどの事故情報が平成21年9月から平成29年6月末までに計140件寄せられ、被害者の約半数が60歳以上とされています。医療機関ネットワークに寄せられた112件の内訳では、接触・巻き込みによる事故が76件、飛散物による事故が20件でした。",
  },
];

const lines = [
  {
    h: "脚立の上で体を伸ばさなければ届かない高さ",
    b: "手を伸ばしてようやく届く枝は、脚立の位置を変えても届きにくいままです。身を乗り出す、天板に乗るといった使い方になりやすいのがこの高さです。消費者庁のアンケートでも、転落やひやりとした経験の直前の行動として、身を乗り出しての作業と天板に乗っての作業が挙げられています。届かないと分かった時点で、それより上は業者に依頼する範囲とします。",
  },
  {
    h: "電線に近い枝",
    b: "枝が電線に接触している、あるいは近い場合は、剪定した枝がどちらに落ちるかを自分では制御できません。接触していなくても、のこぎりや高枝ばさみが届く距離であれば同様です。台風の後に電線へ掛かった枝の扱いは、台風・強風のガイドで別に解説しています。",
  },
  {
    h: "幹が太い木や高木の伐採・大幅な切り詰め",
    b: "太い幹や枝は、切った瞬間に重さが一気に移動します。倒す方向を決める作業には、木の傾きや重心を判断する技術が必要です。チェーンソーを用いた伐木は、業務として行う場合には特別教育が必要な業務とされています（後述）。住宅の庭であっても、同じ重さの木を扱うことに変わりはありません。",
  },
  {
    h: "屋根や塀の上に乗らなければ届かない枝",
    b: "消費者庁の資料には、塀に上って枝を剪定していて転落した例があります。足場が建物や塀になる時点で、庭作業の範囲を超えています。屋根に掛かる枝は、建物側の作業として依頼先を検討します。",
  },
  {
    h: "体調や天候が通常と異なる日",
    b: "判断基準は場所のみで決まるものではありません。消費者庁の資料には、朝に飲酒した後、地面が砂利で不安定な場所で脚立に乗り、3メートルほどの高さから転落した例が掲載されています。通常であれば行える作業でも、その日の条件が悪ければ見送ります。",
  },
];

const ladderPoints = [
  {
    h: "天板には乗らない、座らない、またがない",
    b: "消費者庁の資料では、脚立の天板をまたがない、はしごの上から3段目以上に乗らないといった使用上の注意を知らないと回答した人が4割以上いたとされています。NITEも『脚立の天板には乗らない・座らない・またがない』を注意点に挙げています。脚立にまたがって剪定していて転落した例も、消費者庁の資料に掲載されています。",
  },
  {
    h: "はしごの上で作業しない",
    b: "NITEは『はしごの上で作業しない（作業する場合は脚立を利用する）』としています。はしごは昇降のための道具であり、上で両手を使う作業には適していません。枝に立て掛けたはしごは、枝がしなった分だけ足元がずれます。",
  },
  {
    h: "平坦で固い場所に設置する",
    b: "消費者庁の資料では、平坦でない場所で使用してはいけないことは多くの人が知っている一方で、実際にはタイルの床、玉砂利の上、平坦でない土の上などで使用して事故が起きているとされています。庭は、ほぼ全面がこの条件に該当します。脚を置く場所を事前にならし、沈まないかを確認してから上ります。",
  },
  {
    h: "開き止めを確実に固定する",
    b: "NITEは、開き止め具を確実に固定し、安定した地面に設置することを挙げています。消費者庁の資料には、側面の固定をしていなかった脚立が開いて倒れ、入院に至った例があります。",
  },
  {
    h: "はしごの立て掛け角度と補助者",
    b: "消費者庁の資料では、はしごの立て掛け角度は75度が最も安定するとされ、この点を知らなかったと回答した人も4割以上いました。また、はしごを使用する際は補助者に支えてもらうことが挙げられています。一人ではしごを上っていて、はしごごと倒れた例も掲載されています。",
  },
  {
    h: "物を持ったまま昇降しない",
    b: "消費者庁のアンケートでは、転落やひやりとした経験の直前の行動として、身を乗り出しての作業、荷物を持ちながらの昇降、天板に乗りながらの作業が挙げられています。いずれも取扱説明書で禁止されている使い方です。道具は事前に置いておくか、下から渡してもらいます。",
  },
];

const cutterPoints = [
  {
    h: "保護具を着用してから機械を点検する",
    b: "消費者庁と国民生活センターは、ヘルメット、保護メガネ、防振手袋などの保護具を必ず着け、事前に機器を点検してから作業するよう呼びかけています。軍手は刈刃に巻き込まれる危険があるので使わないこと、刈刃の欠けやネジの緩みを使用前に確かめることも挙げられています。",
  },
  {
    h: "作業場所の石・枝・針金を事前に拾う",
    b: "同じ資料には、落ちていた針金が刈払機に巻き込まれて飛び出し、胸に刺さった例があります。国民生活センターのテストでは、20〜30ミリの石を刈刃に当てた場合、最も遠くまで飛んだのは4枚刃で約67.8メートルでした。庭は住宅や車、隣家が近い場所です。テスト結果からのアドバイスとして、近くに人がいる場所や自動車・家屋の近くでは十分な飛散防止対策を講じること、異物の多い場所ではナイロンコードカッターを使用することが挙げられています。",
  },
  {
    h: "周囲に人がいないことを確認する",
    b: "作業中は15メートル以内に人を立ち入らせないこと、人や車が近づいたら作業を一旦止めることが呼びかけられています。周囲の人がやむを得ず近づく際は、前方から声をかけ、刈払機が確実に停止したことを確認してから近づくこととされています。家族が庭に出る時間帯は避けます。",
  },
  {
    h: "刃の跳ね返り（キックバック）が起きる位置を避ける",
    b: "回転中の刈刃が障害物や地面に当たると、回転と反対側に勢いよく跳ねることがあります。資料では、刈刃の左側の前3分の1で刈ること、刈刃を左右に大きく振り回さず右から左の一方向に動かすことが示されています。建物の際や障害物の多い場所では、刈払機を使用せずに鎌などで手刈りすることも検討するよう記載されています。",
  },
  {
    h: "詰まった草を取り除く際は必ず停止させる",
    b: "絡まったツタを取り除こうとして手が巻き込まれた例が掲載されています。レバーから手を離していてもエンジンを切らないままだと、異物が外れた瞬間に刃が動き出すことがあります。エンジンを切る、バッテリーやコンセントを外すなどして、完全に停止したことを確認してから取り除きます。NITEも草刈機の事故事例を紹介した製品安全情報マガジンで、刃に絡まった草などを取り除く際は必ずエンジンを止めるよう呼びかけています。",
  },
];

const bladePoints = [
  {
    h: "刃物を持ったまま足場の悪い場所に上がらない",
    b: "消費者庁の「ご家族など身近な方で高齢者の事故を防止しましょう！」（平成29年9月13日）には、高さ1メートルの塀に上って枝を剪定していて転落し、剪定ばさみで頬を刺した例が掲載されています。刃物と転落が重なった事故です。脚立に上がる際は、はさみやのこぎりを手に持たず、腰に下げるか下から渡してもらいます。転落時に手に刃物があると、負傷の程度が大きくなります。",
  },
  {
    h: "刃の清掃や手入れは手袋を着用してから",
    b: "同じ資料には、剪定ばさみを指先で清掃していて指を切った例もあり、手袋を着用していない状態で起きています。作業後の片づけの時間も、刃物を扱う時間です。",
  },
  {
    h: "電動工具は、触れる前に電源から切り離す",
    b: "消費者庁の資料には、電動工具で作業中、電源を切らずにおがくずを捨てようとして指を巻き込んだ例が掲載されています。生垣用の電動ばさみなども含め、刃の周辺に手を入れる前には、スイッチではなく電源そのものを切り離します。",
  },
  {
    h: "チェーンソーは、業務では教育と保護衣が求められる道具です",
    b: "労働安全衛生規則では、チェーンソーを用いて行う立木の伐木、かかり木の処理または造材の業務は、特別教育が必要な業務とされています（第36条第8号）。また、チェーンソーで伐木や造材を行う際は、下肢の切創防止用保護衣を着用させることが事業者に義務付けられています（第485条）。これは事業者と労働者に向けた規定であり、個人が自宅の庭で使用する場合に直接適用されるものではありませんが、それだけの備えを前提とした道具であることは把握しておく価値があります。",
  },
];

const aloneItems = [
  {
    h: "作業開始前に家族や周囲に伝える",
    b: "消費者庁と国民生活センターは、家庭で刈払機を使う場合は事前に家族や周囲の人に告げ、家族は防護具の準備ができているか一緒に確認するよう呼びかけています。長時間の作業では、ときどき声をかけることも挙げられています。",
  },
  {
    h: "一人で作業していると助けを呼べません",
    b: "消費者庁の「ご家族など身近な方で高齢者の事故を防止しましょう！」では、一人で作業していて事故が起きた場合はすぐに救助を呼べない可能性が高く、処置が遅れるおそれがあるとして、作業前には一声かけるよう本人に伝えておくことを勧めています。剪定中にはしごから転落し、倒れているところを家族が発見して救急搬送された例も掲載されています。",
  },
  {
    h: "その日の作業内容を家族が把握しておく",
    b: "同じ資料では、身近な人が、その日の作業内容、服装、体調、天候、作業環境を確認し、不慣れな作業や危険な場所、体調が悪い場合などは作業を控えるよう呼びかけたり、代わりに行うことを検討したりするよう記載されています。高所の作業だけでも、誰かがいる日に行います。",
  },
  {
    h: "身体能力の低下は、本人の自覚より先に進みます",
    b: "同じ資料では、高齢者が問題なしと評価した動作でも、測定すると重心の揺れが大きく、本人の認識と実態に相違があることが紹介されています。消費者庁の脚立の資料も、自身の身体能力を過信せず、高所での作業は避けることを挙げています。前年に行えたことを基準にしないことが、判断の出発点になります。",
  },
];

const faqs = [
  {
    q: "低い脚立なら、一人で使っても大丈夫ですか。",
    a: "高さが低くても事故は起きています。消費者庁の資料には、約1メートルの高さの脚立の最上段に上って倒れ、頭部の骨折などで入院した例や、傾いた地面で脚立が滑り、1メートルの高さからコンクリートに落ちて入院した例が掲載されています。高さよりも、天板に乗らない、平坦で固い場所に設置する、開き止めを固定するといった使い方のほうが重要です。",
  },
  {
    q: "刈払機は、どんな場所なら使わないほうがよいですか。",
    a: "国民生活センターは、近くに人がいる場所や、自動車や家屋の近くではなるべく刈払機を使用しないよう呼びかけています。住宅の庭は、この条件に該当することが多い場所です。使用する場合は、事前に石や枝、針金を拾い、飛散防止カバーを確実に装着し、15メートル以内に人がいないことを確認します。建物の際や障害物の多い場所では、鎌などによる手刈りも選択肢です。",
  },
  {
    q: "どのくらいの木から、業者に頼むべきですか。",
    a: "木の大きさのみで判断する基準は、公的な資料には示されていません。本ページでは、脚立の上で体を伸ばさなければ届かない、電線に近い、太い幹を伐採する、屋根や塀に乗らなければ届かない、のいずれかに該当するものを業者に依頼する範囲として整理しています。判断に迷う場合は、作業を依頼するかどうかとは別に、現地を確認してもらって意見を聞く方法もあります。",
  },
  {
    q: "暑い時期の庭作業で気をつけることは何ですか。",
    a: "消費者庁と国民生活センターの刈払機の資料でも、気温が高い季節の長時間の作業には熱中症の危険があるとして、休憩や使用の中止を促すなど周囲の協力が重要であるとされています。暑い時期の作業時間の考え方や、庭木側の高温対策は、夏の高温と水やりのガイドで解説しています。",
  },
  {
    q: "親が一人で庭木の手入れを続けていて心配です。何から話せばよいですか。",
    a: "作業をやめてほしいと伝える前に、作業前に一声かける、高所の作業は誰かがいる日に行うという二点を決めることから始めると、話を進めやすくなります。消費者庁の資料も、作業前の声かけと、その日の作業内容や体調を身近な人が確認することを勧めています。高所の作業のみを業者に依頼し、足元の作業は続けるという分け方もできます。",
  },
];

const sources = [
  {
    org: "消費者庁",
    title: "脚立・はしごからの転落に注意！～庭木の剪定、屋根修理で、死亡事故の危険も～（平成26年12月22日）",
    url: "https://www.caa.go.jp/policies/policy/consumer_safety/release/pdf/141222kouhyou_1.pdf",
  },
  {
    org: "消費者庁・独立行政法人国民生活センター",
    title: "刈払機（草刈機）の使用中の事故にご注意ください！（平成29年7月20日）",
    url: "https://www.kokusen.go.jp/news/data/n-20170720_1.html",
  },
  {
    org: "消費者庁",
    title: "ご家族など身近な方で高齢者の事故を防止しましょう！（平成29年9月13日）",
    url: "https://www.caa.go.jp/policies/policy/consumer_safety/caution/pdf/safety_caution_170913_0001.pdf",
  },
  {
    org: "独立行政法人製品評価技術基盤機構（NITE）",
    title: "事故の約4割が60代以上！『はしごの上で作業しない』『脚立にまたがらない』（令和4年9月16日）",
    url: "https://www.nite.go.jp/jiko/chuikanki/press/2022fy/prs22091601.html",
  },
  {
    org: "独立行政法人製品評価技術基盤機構（NITE）",
    title: "製品安全情報マガジン Vol.128『草刈機による事故』",
    url: "https://www.nite.go.jp/jiko/chuikanki/mailmagazin/2010fy/psm_vol128_0824.html",
  },
  {
    org: "e-Gov法令検索",
    title: "労働安全衛生規則（第36条第8号、第485条）",
    url: "https://laws.e-gov.go.jp/law/347M50002000032",
  },
];

export default function GardenSafetyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "脚立・はしご、刈払機、剪定ばさみやチェーンソーを使用する庭作業の事故を、消費者庁・国民生活センター・NITEの公表資料にもとづいて整理し、自分で行わない作業の判断基準と作業前の準備をまとめています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭作業の事故を防ぐ" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れで生じる大きな負傷は、特別な作業ではなく、毎年繰り返している作業の中で起きています。脚立に上がって枝を剪定する、刈払機で草を刈る、剪定ばさみを片づけるといった作業です。消費者庁や国民生活センター、製品評価技術基盤機構（NITE）が公表している事故の記録によると、その多くが道具の故障ではなく、使い方と、その日の条件から起きていることが分かります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、公的機関の資料に記載されている内容のみを根拠に、庭作業でどのような事故が起きているか、自分で行わない作業をどこで判断するか、脚立・刈払機・刃物それぞれで守るべき点を整理します。数値や事例は、本文中に示した機関と資料名によるものです。
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

      <section id="gs-records" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          公的機関の記録にある庭作業の事故
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          どの作業で、どのような形態の負傷が起きているのかを事前に把握しておくと、注意すべき点が具体的になります。以下はいずれも、公的機関が収集した事故情報にもとづいて公表されているものです。
        </p>
        <div className="space-y-4">
          {records.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          件数は各資料の公表時点で集計されたもので、すべての事故を網羅したものではありません。読み取るべきは件数の大小よりも、事故がどのような形態で起きているかです。
        </p>
      </section>

      <section id="gs-line" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分で行わない作業を事前に決めておく
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          作業の途中で「ここまでにしておこう」と判断することは難しいものです。枝が目の前にあると、もう少し手を伸ばしたくなります。どこから先を業者に依頼するかは、脚立を出す前に決めておきます。
        </p>
        <ol className="space-y-4">
          {lines.map((x, i) => (
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
          台風や強風の後に折れた枝・傾いた木で、自分で触れないほうがよい状態は
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風への備え
          </Link>
          、自分で行う範囲と業者に依頼する範囲の分け方は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          、伐採作業を依頼する場合の考え方は
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採費用相場と業者の選び方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gs-ladder" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          脚立・はしごは設置場所と乗る位置が重要です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          消費者庁とNITEの資料に共通しているのは、脚立・はしごの事故は、使用上の注意を知らないか、知っていても守られていない場面で起きているという点です。庭で使用する場合に特に関係する点を挙げます。
        </p>
        <div className="space-y-4">
          {ladderPoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          NITEは、使用前に製品の注意表示を確認して守ることに加え、補助脚の付いたはしごや上枠の付いた脚立など、より安全に使用できる機能の付いた製品を選ぶことも挙げています。所有している脚立の注意表示を一度確認することから始めてください。
        </p>
      </section>

      <section id="gs-cutter" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          刈払機は刃より先に周囲を確認する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          消費者庁と国民生活センターの資料では、刈払機は本来農作業や林業などで使用されてきた機器で、現在はホームセンターやインターネットで個人でも容易に購入できるようになっている一方、業務で使用する場合には労働安全衛生法による技能講習や特別教育に準じた安全衛生教育が推奨されている機器であると説明されています。資料が挙げている注意点を、庭で使用する場面に沿って整理します。
        </p>
        <ol className="space-y-4">
          {cutterPoints.map((x, i) => (
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
          草が伸びる前に地面の状態を変え、刈払機を使用する回数そのものを減らす考え方は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策の選び方
          </Link>
          、芝の刈り込みの頻度は
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れガイド
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gs-blades" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          剪定ばさみ・のこぎり・チェーンソーの取り扱い
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          刃物による負傷は、切っている最中だけでなく、昇降の途中や片づけの最中にも起きています。道具ごとの使い方より、どの場面で刃物が体の近くに来るかを意識するほうが、事故を防ぎやすくなります。
        </p>
        <div className="space-y-4">
          {bladePoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          どの枝をどこで剪定するかという剪定の考え方は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            剪定ガイド
          </Link>
          、生垣の刈り込みの時期と範囲は
          <Link href="/guide/hedge-care/" className="text-primary underline underline-offset-2 mx-1">
            生垣の手入れ
          </Link>
          、剪定した枝の処分方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gs-alone" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          作業前に決めること、一人で作業しないこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          消費者庁の資料に掲載されている事例には、一人で作業していて、倒れているところを家族が発見したというものが少なくありません。事故そのものを防ぐことと同程度に、事故が起きた際にすぐに気づいてもらえる状態にしておくことが重要です。
        </p>
        <ol className="space-y-4">
          {aloneItems.map((x, i) => (
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
          暑い時期の作業時間の取り方は
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温と水やり
          </Link>
          、毛虫やハチの巣など、触れる前に確認すべきものは
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          、手入れの量そのものを減らす方向は
          <Link href="/guide/garden-downsizing/" className="text-primary underline underline-offset-2 mx-1">
            庭じまいという選択
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gs-faq" className="scroll-mt-20 mb-12">
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

      <section id="gs-sources" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          本ページで参照した公的機関の資料
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          本文の数値と事例は、以下の資料から引用・要約したものです。件数は各資料の公表時点のものです。最新の注意喚起は、各機関のページにてご確認ください。
        </p>
        <ul className="space-y-3">
          {sources.map((s) => (
            <li key={s.url} className="rounded-2xl border border-border bg-surface-alt p-4">
              <p className="text-sm text-text-muted mb-1">{s.org}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-primary underline underline-offset-2"
              >
                「{s.title.replace(/（[^（）]*）$/, "")}」
                {s.title.match(/（[^（）]*）$/)?.[0] ?? ""}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/storm-care/", label: "台風・強風への備え" },
            { href: "/cost/diy/", label: "DIY庭づくりガイド" },
            { href: "/guide/spraying/", label: "住宅地で庭木の消毒を行う・依頼する場合" },
            { href: "/guide/summer-heat/", label: "夏の高温と水やり" },
            { href: "/guide/grass-cutting/", label: "庭・空き地の草刈り｜刈る時期と回数の考え方" },
            { href: "/guide/silver-center/", label: "庭の手入れをシルバー人材センターに依頼する場合" },
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
          高所、電線の近く、太い木など、自分で行わないと決めた作業のみを切り出して相談すると、依頼する範囲が明確になります。まずは候補を比較することをおすすめします。
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
