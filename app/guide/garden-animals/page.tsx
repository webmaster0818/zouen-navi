import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/garden-animals/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "庭に来る動物への対処｜痕跡から見分ける方法と、自分でやってはいけないこと";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "掘り返された芝生、同じ場所に残る糞、夜の物音。まず何が来ているかを痕跡から見分け、次に法律上できることとできないことを押さえます。野生鳥獣の捕獲は原則禁止で、自治体の窓口が最初の相談先です。庭側でできる「来にくくする」手立てと、庭師に頼める範囲を整理しました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "庭に来る動物を痕跡から見分ける方法と、法律上の制約、来にくくする手立てを整理しました。",
  },
};

const toc = [
  { id: "ga-law", label: "先に押さえる：勝手に捕まえない、傷つけない" },
  { id: "ga-trace", label: "何が来ているかは、痕跡の形で分かれる" },
  { id: "ga-damage", label: "被害の出方で、急ぐ順番が変わる" },
  { id: "ga-avoid", label: "庭側でできるのは「来にくくする」こと" },
  { id: "ga-nogood", label: "効き目が続かないもの、逆効果になるもの" },
  { id: "ga-bee", label: "ハチの巣は、触らない判断が先に立つ" },
  { id: "ga-pro", label: "庭師・造園業者に頼めることと、頼めないこと" },
  { id: "ga-faq", label: "よくある質問" },
];

const traces = [
  {
    h: "土が線状に盛り上がる／小さな山ができる",
    b: "地面の下を進んだ跡が畝のように盛り上がり、ところどころに土の山ができている場合、地中で活動しているものが考えられます。芝生では、この盛り上がりに沿って芝が浮き、乾いて枯れることがあります。地上から掘った穴とは形が違い、入口が見当たらないのが特徴です。",
  },
  {
    h: "一点を掘り返してある",
    b: "花壇や鉢、植えたばかりの場所が浅く掘り返されている場合は、地上から手や鼻で掘ったものです。土を入れ替えた直後、肥料を入れた直後に集中するなら、においに寄ってきている可能性があります。掘った土が周囲に散っているかどうかで、地中からか地上からかを見分けられます。",
  },
  {
    h: "糞が同じ場所にまとまっている",
    b: "庭の隅、物置の裏、屋根の下、板塀の上など、同じ場所に繰り返し残るなら、決まった動物が通っている合図です。においが残ると、そこが目印になって通いが定着します。素手で触らず、片づけるときは手袋を使い、そのあと手を洗ってください。",
  },
  {
    h: "通り道に跡が残る",
    b: "草が一本の筋になって倒れている、フェンスの下の土がへこんでいる、塀の上や雨どいに沿って汚れがついている。こうした跡は、毎回同じ経路を使っていることを示します。侵入口を探すときは、この筋をたどって敷地の外側まで見ます。",
  },
  {
    h: "食べられ方と、音のする時間帯",
    b: "実が落ちて食い散らかされているのか、実だけきれいになくなっているのか、若い芽先だけ食われているのかで、来ているものの見当が変わります。音については、夜中に天井や床下で聞こえるのか、明け方に庭で聞こえるのかを記録しておくと、相談するときの材料になります。",
  },
];

const damageOrder = [
  {
    h: "掘られる",
    b: "芝生、花壇、鉢、植えたばかりの苗。見た目の問題に見えますが、根が露出したままだと乾いて傷みます。掘られた場所は土を戻して押さえ、根が出ていたら覆っておきます。掘る原因が地中にある場合、地上をいくら直しても繰り返します。",
  },
  {
    h: "食べられる",
    b: "実、野菜、若い芽。一度食べられる場所として覚えられると、実る時期に合わせて通うようになります。落ちた実をそのままにしない、収穫しない果樹を放置しない、というところから手を打つ対象です。",
  },
  {
    h: "糞とにおいが残る",
    b: "衛生の面と、においが次を呼ぶ面の両方があります。同じ場所に繰り返し残る状態を放置すると、そこが定着した通い先になります。片づけは手袋を使い、乾いたものを掃き上げるときは粉じんを吸い込まないようにしてください。",
  },
  {
    h: "住みつく",
    b: "床下、物置、屋根裏。ここまで進むと庭の話ではなくなり、建物側の問題になります。音が屋内から聞こえる、天井にしみが出る、においが室内に入る。この段階では、庭の手入れで解決する話ではないため、自治体の窓口に相談する対象です。",
  },
];

const keepAway = [
  {
    h: "餌になるものを置かない",
    b: "屋外に置いたペットの餌と水、ふたのない生ごみ、収穫せずに落ちたままの実、においの強い肥料。庭に来る理由の多くは食べ物です。忌避を考える前に、まず置いてあるものを減らします。ここを残したまま他の手を打っても、戻ってきます。",
  },
  {
    h: "水場と隠れ場所を減らす",
    b: "鉢の受け皿にたまった水、使っていない水槽やバケツ、雨水のたまる容器。隠れ場所としては、積んだままの資材、めくれた波板の下、伸びきった藪、放置した段ボールや木材。餌と水と隠れ場所が揃うと、通いから居つきに変わります。",
  },
  {
    h: "通り道と侵入口をふさぐ",
    b: "塀と屋根の隙間、床下の通気口の破れ、物置の引き戸の下、基礎と地面のあいだ。通り道をたどって、どこから入っているかを確かめます。ふさぐときは、中にまだいる状態で閉じてしまわないよう注意が要ります。中で死んでしまうと、においと衛生の問題が残ります。",
  },
  {
    h: "木と生垣で「見通し」を作る",
    b: "枝が屋根や塀に届いていると、そこが上へ渡る橋になります。生垣が厚くなって中が空洞になっていると、隠れ場所になります。枝を屋根から離す、足元を見通せるようにする、地際の藪を作らない。これは庭の手入れの範囲でできる予防で、効き目も続きます。",
  },
];

const notWorking = [
  {
    h: "音や匂いによる忌避は、慣れが起きる",
    b: "最初は寄りつかなくても、危険がないと分かれば戻ってきます。同じものを同じ場所に置き続けるほど、その傾向は強まります。忌避を使うにしても、餌と侵入口の対処と組み合わせないと、一時的に場所がずれるだけで終わります。",
  },
  {
    h: "一か所だけふさいでも、別の経路ができる",
    b: "入口は一つとは限りません。ふさいだ翌日から別の場所に跡が出るなら、経路が複数あります。ふさぐ作業は、敷地を一周して開口部を全部洗い出してから取りかかるほうが確実です。",
  },
  {
    h: "自分で捕まえる、追い詰める、傷つける",
    b: "法律上できないことに加えて、危険でもあります。追い詰められた動物は反撃します。噛まれる、引っかかれるだけでなく、寄生虫や病原体に触れる場面にもなります。見つけても近づかず、距離を取ってください。子どもとペットを近づけないことも含みます。",
  },
  {
    h: "餌をやりながら、来ないようにする",
    b: "野良猫への餌やりが典型です。餌がある限り通いは続き、糞や騒音は自分の庭だけでなく近隣にも及びます。近所との関係の話になりやすい部分で、地域によっては自治体が独自の方針を出しています。困っている側でも、与えている側でも、まず自治体の案内を確かめてください。",
  },
];

const beePoints = [
  {
    h: "まず、近づかずに出入りを見る",
    b: "巣を見つけたら、離れた場所から出入りの向きと数を見ます。近づく、棒でつつく、水をかけるといった行為は、こちらに向かわせるだけです。巣の下や、出入りの経路上で作業しないでください。",
  },
  {
    h: "種類と大きさで、扱いがまったく変わる",
    b: "ハチにも種類があり、巣の形も、危険の度合いも、時期による変化も違います。大きさも、こぶし程度のものから、季節が進んで大きくなったものまで幅があります。自分で判断できないなら、判断しないほうが安全です。",
  },
  {
    h: "自分で落とす判断をしない",
    b: "刺されたときに重い症状が出ることがあり、高い場所であれば落下の危険も加わります。過去に刺されたことがある人は特に、自分では触らない前提で考えてください。",
  },
  {
    h: "相談先は、状況によって分かれる",
    b: "自治体が対応する場合、専門の業者を紹介する場合、建物の管理者が窓口になる場合があります。制度は地域によって違うため、まず住んでいる市区町村の案内を確かめてください。庭の作業を頼んでいる業者がいるなら、巣があることを必ず先に伝えます。",
  },
];

const proScope = [
  {
    h: "頼めること：隠れ場所と通り道を減らす手入れ",
    b: "屋根や塀に届いている枝を離す、厚くなりすぎた生垣を透かす、地際の藪を刈る、落ちた実を片づける、積んである枝や刈った草を出す。これらは造園・庭の手入れの範囲で、予防として効き、効果も続きます。動物が来ていることを伝えておくと、どこを優先するかを見てもらえます。",
  },
  {
    h: "頼めないこと：捕獲と駆除そのもの",
    b: "野生の動物を捕まえる、殺すという行為は、庭の手入れの範囲ではありません。許可が要る領域であり、対応するのは自治体か、その分野の専門の業者です。庭の業者に「ついでに何とかしてほしい」と頼む対象ではないと考えてください。",
  },
  {
    h: "建物側は別の相談先になる",
    b: "床下、屋根裏、外壁の隙間。住みついている場所が建物の中なら、庭の業者の範囲を超えます。開口部をふさぐ工事も、建物側を扱う相手の仕事です。庭の作業と同時に進めたい場合は、どこまでが誰の担当かを先に切り分けます。",
  },
  {
    h: "伝えておくと段取りが変わること",
    b: "巣がある、糞が多い、床下に入られている。こうした状況を伏せたまま作業日を迎えると、当日にその場所だけ手を付けられず残ります。見積もりの段階で伝えておけば、作業の順番や、別の相手に先に入ってもらう必要があるかどうかを含めて組んでもらえます。",
  },
];

const faqs = [
  {
    q: "庭に来る野生の動物を、自分で捕まえてもよいですか。",
    a: "できません。野生の鳥や獣は鳥獣保護管理法により、原則として捕獲・殺傷が禁止されています。捕獲が必要な場合は自治体などの許可が必要で、手続きや対応の仕組みは市区町村によって異なります。わなを買って自分で仕掛ける、追い詰めて捕まえるといった対応は取らず、まず住んでいる市区町村の担当窓口に相談してください。何が来ているか、いつ、どこで、どんな被害が出ているかを整理して伝えると、案内が具体的になります。",
  },
  {
    q: "野良猫が庭に入ってきて困っています。どうすればよいですか。",
    a: "飼い猫か野良猫かにかかわらず、傷つける、毒を置く、閉じ込めるといった対応は取れません。庭側でできるのは、寄りつく理由をなくすことです。屋外に置いた餌と水を片づける、ふたのない生ごみを置かない、掘り返される場所の土を露出させたままにしない、隠れ場所になっている資材や藪を減らす。近隣で餌やりが続いている場合は、地域ごとに自治体が方針や相談窓口を設けていることがあるため、そちらを確かめてください。",
  },
  {
    q: "芝生に土の山ができて、地面が盛り上がっています。",
    a: "地中で活動しているものが考えられます。盛り上がった部分は芝が浮いて根が切れ、そのままにすると乾いて傷むため、土を戻して踏み固め、浮いた芝を押さえておきます。ただし、地上を直しても地中の側が残っていれば繰り返します。捕獲できるかどうかは種類と地域の制度によって異なるため、対応を考える段階で自治体の窓口に確認してください。芝そのものの手入れは、別ページで扱っています。",
  },
  {
    q: "ハチの巣を見つけました。自分で取ってもよいですか。",
    a: "自分で取る判断はしないでください。種類と巣の大きさ、時期によって危険の度合いが変わり、刺激すると一斉に向かってきます。高い場所であれば落下の危険も加わります。まずは近づかず、巣の下や出入りの経路で作業をしないようにしたうえで、住んでいる市区町村の案内を確かめてください。自治体が対応する場合、専門の業者を案内する場合、建物の管理者が窓口になる場合があり、仕組みは地域によって異なります。庭の作業を依頼している相手がいるなら、巣があることを必ず先に伝えてください。",
  },
  {
    q: "音や匂いで追い払うものは効きますか。",
    a: "最初は寄りつかなくなることがありますが、危険がないと分かると慣れが起きます。同じものを同じ場所に置き続けるほど、その傾向は強くなります。効き目が続きやすいのは、来る理由そのものを減らす側です。餌になるものを置かない、水場と隠れ場所を減らす、通り道と侵入口をふさぐ、枝や生垣を整理して見通しを作る。忌避を使う場合も、この四つと組み合わせないと、一時的に場所がずれるだけで終わります。",
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
          "庭に来る動物を痕跡から見分ける方法、鳥獣保護管理法による制約、来にくくする手立て、庭師に頼める範囲を整理しました。",
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
          朝、芝生が掘り返されている。同じ場所に糞が残っている。夜になると物置のあたりで音がする。庭に来ているのが何かは分からないまま、被害だけが続く。この状態でいちばん起きやすいのは、相手を特定しないまま手当たり次第に対策を試し、効かないまま時間が過ぎることです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          順番があります。まず痕跡から何が来ているかの見当をつける。次に、自分でやってよいことと、法律上できないことを分ける。そのうえで、庭側でできる「来にくくする」手立てを打つ。このページでは、この順で整理します。虫と病気については別ページで扱っています。
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
          先に押さえる：勝手に捕まえない、傷つけない
        </h2>
        <div className="rounded-2xl border border-border bg-surface-alt p-5 mb-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            野生の鳥や獣は、鳥獣保護管理法により原則として捕獲・殺傷が禁止されています。捕獲が必要な場合には、自治体などの許可が必要です。自分の敷地に来ているから、被害が出ているからという理由で、わなを仕掛けたり追い詰めたりしてよいことにはなりません。飼い猫も野良猫も同じで、傷つける、毒を置く、閉じ込めるといった対応は取れません。
          </p>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そのため、対応を考える段階での第一の相談先は、住んでいる市区町村の担当窓口になります。どの動物にどの制度が当たるか、誰が対応するのか、何をすれば許可が要るのかは自治体によって違い、ここで一律に書けるものではありません。何が来ているか、いつ、どこで、どんな被害が出ているかを整理してから問い合わせると、案内が具体的になります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          裏を返すと、庭の持ち主の側で自由に手を打てるのは「来にくくする」ことに限られます。この記事の後半は、その範囲の話になります。
        </p>
      </section>

      <section id="ga-trace" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          何が来ているかは、痕跡の形で分かれる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          姿を見ていなくても、残っているものから見当はつきます。名前を当てることが目的ではなく、どこから来て何を目当てにしているかを絞るための作業です。
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
          葉が食われている、幹に穴が開いているといった、木そのものに出る症状は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="ga-damage" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          被害の出方で、急ぐ順番が変わる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ動物でも、出ている被害によって手を打つ先が変わります。後ろにいくほど、庭の範囲を外れていきます。
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
          庭側でできるのは「来にくくする」こと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          追い出すのではなく、来る理由を減らします。順番があり、上から順に効きます。
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
          生垣を透かして中を見通せるようにする手入れは
          <Link href="/guide/hedge-care/" className="text-primary underline underline-offset-2 mx-1">
            生垣の手入れと刈り込み
          </Link>
          、刈った草や切った枝を溜めずに出す方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          で扱っています。落ちた実を残さない話は
          <Link href="/guide/fallen-leaves/" className="text-primary underline underline-offset-2 mx-1">
            落ち葉が多い庭の手入れ
          </Link>
          とも重なります。
        </p>
      </section>

      <section id="ga-nogood" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          効き目が続かないもの、逆効果になるもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手を打っているのに変わらない場合、やり方ではなく、打っている場所が違うことがあります。
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
          で整理しています。
        </p>
      </section>

      <section id="ga-bee" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          ハチの巣は、触らない判断が先に立つ
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭で見つかるもののうち、その場の判断を誤ると怪我につながるのがハチの巣です。ほかの動物とは扱いを分けて考えます。
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
          庭で触れると危ない植物や生き物については
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          でも扱っています。
        </p>
      </section>

      <section id="ga-pro" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          庭師・造園業者に頼めることと、頼めないこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          境目がはっきりしている部分です。ここを混ぜて相談すると、話が噛み合いません。
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
          、年間を通してどの時期に何をするかは
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/guide/hedge-care/", label: "生垣の手入れと刈り込み" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び分け" },
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
          捕獲や駆除は自治体の窓口が先です。隠れ場所と通り道を減らす庭の手入れは、相談できる対象になります。
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
