import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/garden-animals/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "庭に来る動物への対処｜痕跡から見分ける方法と、自分で行ってはいけないこと";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "掘り返された芝生、同じ場所に残る糞、夜間の物音などがある場合は、まず痕跡から何が来ているかを見分け、次に法律上できることとできないことを確認します。野生鳥獣の捕獲は原則禁止されており、最初の相談先は自治体の窓口です。庭側で行える「寄せ付けない」対策と、庭師に依頼できる範囲を整理しています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭に来る動物を痕跡から見分ける方法と、法律上の制約、寄せ付けない対策を整理しています。",
  },
};

const toc = [
  { id: "ga-law", label: "野生の鳥獣は許可なく捕獲・殺傷できません" },
  { id: "ga-trace", label: "何が来ているかは痕跡の形状で判別します" },
  { id: "ga-damage", label: "被害の状況によって対処の優先順位が変わります" },
  { id: "ga-avoid", label: "庭側で行えるのは「寄せ付けない」対策です" },
  { id: "ga-nogood", label: "効果が続かないもの、逆効果になるもの" },
  { id: "ga-bee", label: "ハチの巣は触れないことを優先する" },
  { id: "ga-pro", label: "庭師・造園業者に依頼できることと、依頼できないこと" },
  { id: "ga-faq", label: "よくある質問" },
];

const traces = [
  {
    h: "土が線状に盛り上がる・小さな山ができる",
    b: "地中を進んだ跡が畝のように盛り上がり、ところどころに土の山ができている場合は、地中で活動している動物が考えられます。芝生では、この盛り上がりに沿って芝が浮き、乾燥して枯れることがあります。地上から掘った穴とは形状が異なり、入口が見当たらないことが特徴です。",
  },
  {
    h: "一か所が掘り返されている",
    b: "花壇や鉢、植えたばかりの場所が浅く掘り返されている場合は、地上から前足や鼻で掘ったものです。土を入れ替えた直後や、肥料を施した直後に集中している場合は、においに引き寄せられている可能性があります。掘った土が周囲に散っているかどうかで、地中からか地上からかを判別できます。",
  },
  {
    h: "糞が同じ場所にまとまっている",
    b: "庭の隅、物置の裏、屋根の下、板塀の上など、同じ場所に繰り返し残る場合は、特定の動物が通っている兆候です。においが残ると、そこが目印となって通い道が定着します。素手で触れず、片づける際は手袋を使用し、その後は手を洗ってください。",
  },
  {
    h: "通り道に跡が残る",
    b: "草が一本の筋状に倒れている、フェンスの下の土がへこんでいる、塀の上や雨どいに沿って汚れが付いているといった跡は、毎回同じ経路を使用していることを示します。侵入口を探す際は、この筋をたどって敷地の外側まで確認します。",
  },
  {
    h: "食害の状況と物音がする時間帯",
    b: "実が落ちて食い散らかされているのか、実のみがなくなっているのか、若い芽先のみ食べられているのかによって、来ている動物の目安が変わります。物音については、夜中に天井や床下で聞こえるのか、明け方に庭で聞こえるのかを記録しておくと、相談の際の材料になります。",
  },
];

const damageOrder = [
  {
    h: "掘り返される",
    b: "芝生、花壇、鉢、植えたばかりの苗などが対象です。外観の問題に見えますが、根が露出したままだと乾燥して傷みます。掘り返された場所は土を戻して押さえ、根が露出していれば覆っておきます。掘り返す原因が地中にある場合、地上をいくら修復しても繰り返されます。",
  },
  {
    h: "食べられる",
    b: "実、野菜、若い芽などが対象です。一度餌場として認識されると、結実の時期に合わせて訪れるようになります。落果を放置しない、収穫しない果樹を放置しないといった点から対処します。",
  },
  {
    h: "糞とにおいが残る",
    b: "衛生面の問題と、においが次の訪問を招く問題の両方があります。同じ場所に繰り返し残る状態を放置すると、そこが定着した通い先になります。片づけには手袋を使用し、乾燥したものを掃き集める際は粉じんを吸い込まないようご注意ください。",
  },
  {
    h: "住み着く",
    b: "床下、物置、屋根裏まで進むと、庭ではなく建物の問題になります。音が屋内から聞こえる、天井にしみが出る、においが室内に入るといった段階では、庭の手入れで解決する問題ではないため、自治体の窓口に相談する対象です。",
  },
];

const keepAway = [
  {
    h: "餌となるものを置かない",
    b: "屋外に置いたペットの餌と水、ふたのない生ごみ、収穫せずに落ちたままの実、においの強い肥料など、庭に来る理由の多くは食べ物です。忌避策を検討する前に、まず置いてあるものを減らします。これを残したまま他の対策を行っても、再び訪れます。",
  },
  {
    h: "水場と隠れ場所を減らす",
    b: "水場としては、鉢の受け皿にたまった水、使用していない水槽やバケツ、雨水のたまる容器があります。隠れ場所としては、積んだままの資材、めくれた波板の下、伸びきった藪、放置した段ボールや木材があります。餌と水と隠れ場所が揃うと、通いから定住に変わります。",
  },
  {
    h: "通り道と侵入口を塞ぐ",
    b: "塀と屋根の隙間、床下の通気口の破れ、物置の引き戸の下、基礎と地面の間などが侵入口となります。通り道をたどって、どこから侵入しているかを確認します。塞ぐ際は、内部にまだいる状態で閉じてしまわないよう注意が必要です。内部で死んでしまうと、においと衛生の問題が残ります。",
  },
  {
    h: "樹木と生垣で見通しを確保する",
    b: "枝が屋根や塀に届いていると、そこが上部へ移動する経路になります。生垣が厚くなって内部が空洞になっていると、隠れ場所になります。枝を屋根から離す、足元を見通せるようにする、地際に藪を作らないといった対策は、庭の手入れの範囲で行える予防策であり、効果も持続します。",
  },
];

const notWorking = [
  {
    h: "音やにおいによる忌避策には慣れが生じます",
    b: "当初は寄り付かなくなっても、危険がないと分かれば再び訪れます。同じものを同じ場所に置き続けるほど、その傾向は強まります。忌避策を使用する場合でも、餌と侵入口の対策と組み合わせないと、一時的に場所が移るだけで終わります。",
  },
  {
    h: "一か所のみ塞いでも、別の経路が生じます",
    b: "侵入口は一つとは限りません。塞いだ翌日から別の場所に跡が出る場合は、経路が複数あります。塞ぐ作業は、敷地を一周して開口部をすべて洗い出してから着手するほうが確実です。",
  },
  {
    h: "自分で捕獲する、追い詰める、傷つける",
    b: "法律上できない行為であることに加えて、危険でもあります。追い詰められた動物は反撃します。噛まれる、引っかかれるだけでなく、寄生虫や病原体に触れる場面にもなります。見つけても近づかず、距離を取ってください。子どもとペットを近づけないことも含みます。",
  },
  {
    h: "餌を与えながら、来ないようにする",
    b: "野良猫への餌やりが典型例です。餌がある限り通いは続き、糞や騒音は自宅の庭だけでなく近隣にも及びます。近隣との関係の問題になりやすい部分であり、地域によっては自治体が独自の方針を定めています。困っている側でも、餌を与えている側でも、まず自治体の案内をご確認ください。",
  },
];

const beePoints = [
  {
    h: "まず、近づかずに出入りを確認する",
    b: "巣を見つけたら、離れた場所から出入りの方向と数を確認します。近づく、棒でつつく、水をかけるといった行為は、ハチを刺激して攻撃を招くだけです。巣の下や、出入りの経路上で作業しないでください。",
  },
  {
    h: "種類と大きさによって扱いが大きく異なります",
    b: "ハチにも種類があり、巣の形状も、危険の程度も、時期による変化も異なります。大きさも、こぶし程度のものから、季節が進んで大きくなったものまで幅があります。自分で判断できない場合は、判断しないほうが安全です。",
  },
  {
    h: "自分で除去する判断をしない",
    b: "刺された際に重い症状が出ることがあり、高所であれば転落の危険も加わります。過去に刺されたことがある方は特に、自分では触れない前提でご検討ください。",
  },
  {
    h: "相談先は状況によって異なります",
    b: "自治体が対応する場合、専門の業者を紹介する場合、建物の管理者が窓口となる場合があります。制度は地域によって異なるため、まずお住まいの市区町村の案内をご確認ください。庭の作業を依頼している業者がいる場合は、巣があることを必ず事前に伝えます。",
  },
];

const proScope = [
  {
    h: "隠れ場所と通り道を減らす手入れは依頼できます",
    b: "屋根や塀に届いている枝を離す、厚くなりすぎた生垣を透かす、地際の藪を刈る、落果を片づける、積んである枝や刈った草を処分するといった作業は、造園・庭の手入れの範囲であり、予防策として効果があり、効果も持続します。動物が来ていることを伝えておくと、どこを優先すべきかを判断してもらえます。",
  },
  {
    h: "捕獲と駆除そのものは依頼の対象外です",
    b: "野生の動物を捕獲する、殺処分するという行為は、庭の手入れの範囲ではありません。許可が必要な領域であり、対応するのは自治体か、その分野の専門業者です。庭の業者に「あわせて対処してほしい」と依頼する対象ではないとお考えください。",
  },
  {
    h: "建物側の問題は別の相談先になります",
    b: "床下、屋根裏、外壁の隙間など、住み着いている場所が建物内であれば、庭の業者の対応範囲を超えます。開口部を塞ぐ工事も、建物を扱う業者の仕事です。庭の作業と同時に進めたい場合は、どこまでが誰の担当かを事前に区別します。",
  },
  {
    h: "事前に伝えておくと段取りが変わる事項",
    b: "巣がある、糞が多い、床下に侵入されているといった状況を伝えないまま作業日を迎えると、当日にその場所のみ作業できずに残ります。見積もりの段階で伝えておけば、作業の順序や、別の業者に先に対応してもらう必要があるかどうかを含めて計画してもらえます。",
  },
];

const faqs = [
  {
    q: "庭に来る野生の動物を、自分で捕まえてもよいですか。",
    a: "できません。野生の鳥や獣は鳥獣保護管理法により、原則として捕獲・殺傷が禁止されています。捕獲が必要な場合は自治体などの許可が必要で、手続きや対応の仕組みは市区町村によって異なります。わなを購入して自分で設置する、追い詰めて捕獲するといった対応は取らず、まずお住まいの市区町村の担当窓口にご相談ください。何が来ているか、いつ、どこで、どのような被害が出ているかを整理して伝えると、案内が具体的になります。",
  },
  {
    q: "野良猫が庭に入ってきて困っています。どうすればよいですか。",
    a: "飼い猫か野良猫かにかかわらず、傷つける、毒を置く、閉じ込めるといった対応は取れません。庭側で行えるのは、寄り付く理由をなくすことです。屋外に置いた餌と水を片づける、ふたのない生ごみを置かない、掘り返される場所の土を露出させたままにしない、隠れ場所になっている資材や藪を減らすといった対策です。近隣で餌やりが続いている場合は、地域ごとに自治体が方針や相談窓口を設けていることがあるため、そちらをご確認ください。",
  },
  {
    q: "芝生に土の山ができて、地面が盛り上がっています。",
    a: "地中で活動している動物が考えられます。盛り上がった部分は芝が浮いて根が切れ、そのままにすると乾燥して傷むため、土を戻して踏み固め、浮いた芝を押さえておきます。ただし、地上を修復しても地中の原因が残っていれば繰り返されます。捕獲できるかどうかは種類と地域の制度によって異なるため、対応を検討する段階で自治体の窓口にご確認ください。芝そのものの手入れは、別のページで解説しています。",
  },
  {
    q: "ハチの巣を見つけました。自分で取ってもよいですか。",
    a: "自分で除去する判断はしないでください。種類と巣の大きさ、時期によって危険の程度が変わり、刺激すると一斉に攻撃してきます。高所であれば転落の危険も加わります。まずは近づかず、巣の下や出入りの経路で作業しないようにしたうえで、お住まいの市区町村の案内をご確認ください。自治体が対応する場合、専門の業者を案内する場合、建物の管理者が窓口となる場合があり、仕組みは地域によって異なります。庭の作業を依頼している業者がいる場合は、巣があることを必ず事前に伝えてください。",
  },
  {
    q: "音や匂いで追い払うものは効きますか。",
    a: "当初は寄り付かなくなることがありますが、危険がないと分かると慣れが生じます。同じものを同じ場所に置き続けるほど、その傾向は強くなります。効果が持続しやすいのは、来る理由そのものを減らす対策です。餌となるものを置かない、水場と隠れ場所を減らす、通り道と侵入口を塞ぐ、枝や生垣を整理して見通しを確保するといった対策です。忌避策を使用する場合も、この四つと組み合わせないと、一時的に場所が移るだけで終わります。",
  },
];

export default function GardenAnimalsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "庭に来る動物を痕跡から見分ける方法、鳥獣保護管理法による制約、寄せ付けない対策、庭師に依頼できる範囲を整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭に来る動物" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          朝、芝生が掘り返されている、同じ場所に糞が残っている、夜になると物置の周辺で物音がするなど、庭に何が来ているのか分からないまま被害が続くことがあります。この状態で最も起こりやすいのは、原因を特定しないまま様々な対策を試し、効果がないまま時間が経過することです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          対処には順序があります。まず痕跡から何が来ているかの目安をつけます。次に、自分で行ってよいことと、法律上できないことを区別します。そのうえで、庭側で行える「寄せ付けない」対策を講じます。本ページでは、この順序で整理します。害虫と病気については別のページで解説しています。
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

      <section id="ga-law" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          野生の鳥獣は許可なく捕獲・殺傷できません
        </h2>
        <div className="rounded-2xl border border-border bg-surface-alt p-5 mb-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            野生の鳥や獣は、鳥獣保護管理法により原則として捕獲・殺傷が禁止されています。捕獲が必要な場合は、自治体などの許可が必要です。自分の敷地に来ている、被害が出ているという理由で、わなを設置したり追い詰めたりしてよいことにはなりません。飼い猫も野良猫も同様で、傷つける、毒を置く、閉じ込めるといった対応は取れません。
          </p>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そのため、対応を検討する段階での最初の相談先は、お住まいの市区町村の担当窓口になります。どの動物にどの制度が適用されるか、誰が対応するのか、何をすれば許可が必要になるのかは自治体によって異なり、本ページで一律に記載できるものではありません。何が来ているか、いつ、どこで、どのような被害が出ているかを整理してから問い合わせると、案内が具体的になります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          言い換えれば、庭の所有者の側で自由に講じられるのは「寄せ付けない」対策に限られます。本ページの後半は、その範囲について解説します。
        </p>
      </section>

      <section id="ga-trace" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          何が来ているかは痕跡の形状で判別します
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          姿を見ていなくても、残っている痕跡から目安はつきます。動物の種類を特定することが目的ではなく、どこから来て何を目的としているかを絞り込むための作業です。
        </p>
        <div className="space-y-4">
          {traces.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          葉が食べられている、幹に穴が開いているといった、木そのものに出る症状は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ga-damage" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          被害の状況によって対処の優先順位が変わります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ動物でも、被害の状況によって対処の対象が変わります。後の項目ほど、庭の範囲を外れていきます。
        </p>
        <ol className="space-y-4">
          {damageOrder.map((x, i) => (
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
      </section>

      <section id="ga-avoid" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭側で行えるのは「寄せ付けない」対策です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          追い出すのではなく、来る理由を減らします。対策には順序があり、上から順に効果があります。
        </p>
        <div className="space-y-4">
          {keepAway.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          生垣を透かして内部を見通せるようにする手入れは
          <Link href="/guide/hedge-care/" className="text-primary underline underline-offset-2 mx-1">
            生垣の手入れと刈り込み
          </Link>
          、刈った草や剪定した枝を溜めずに処分する方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で解説しています。落果を残さない対策は
          <Link href="/guide/fallen-leaves/" className="text-primary underline underline-offset-2 mx-1">
            落ち葉が多い庭の手入れ
          </Link>
          とも関連します。
        </p>
      </section>

      <section id="ga-nogood" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          効果が続かないもの、逆効果になるもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          対策を講じているのに変化がない場合、方法ではなく、対策を講じている場所が適切でない可能性があります。
        </p>
        <div className="space-y-4">
          {notWorking.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          庭の状態が近隣に及ぶ場面の考え方は
          <Link href="/area/saitama/" className="text-primary underline underline-offset-2 mx-1">
            作業日の近隣への配慮と事前の段取り
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ga-bee" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          ハチの巣は触れないことを優先する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭で見つかるもののうち、その場での判断を誤ると負傷につながるのがハチの巣です。ほかの動物とは扱いを分けて考えます。
        </p>
        <div className="space-y-4">
          {beePoints.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          庭で触れると危険な植物や生き物については
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          でも解説しています。
        </p>
      </section>

      <section id="ga-pro" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭師・造園業者に依頼できることと、依頼できないこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          両者の境界は明確です。これを混同して相談すると、相談が噛み合いません。
        </p>
        <div className="space-y-4">
          {proScope.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          枝を屋根や塀から離す作業は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            剪定サービスの解説
          </Link>
          、年間を通してどの時期に何を行うかは
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="ga-faq" className="scroll-mt-20 mb-12">
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

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/guide/hedge-care/", label: "生垣の手入れと刈り込み" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び方" },
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
          捕獲や駆除は、まず自治体の窓口にご相談ください。隠れ場所と通り道を減らす庭の手入れは、業者に相談できる作業です。
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
