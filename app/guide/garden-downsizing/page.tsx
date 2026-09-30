import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/garden-downsizing/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "庭じまいという選択｜手入れをやめる・庭を減らすときの決め方と段階";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭が手に負えなくなったとき、全部なくす前にできることがあります。木を減らす、地面を覆う、管理する面積を区切る。減らす方向の選択肢と向き不向き、減らしたあとに出てくる別の手間、残しておいたほうがよいもの、空き家や遠方の庭で先に決めることを整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "手入れをやめる・庭を減らすという意思決定を、段階と選択肢に分けて整理しました。",
  },
};

const toc = [
  { id: "gd-why", label: "手に負えなくなる場面は、だいたい決まっている" },
  { id: "gd-steps", label: "「全部なくす」の前にある段階" },
  { id: "gd-options", label: "減らす方向の選択肢と、向き不向き" },
  { id: "gd-tradeoff", label: "減らすと出てくる、別の手間" },
  { id: "gd-keep", label: "残しておいたほうがよいもの" },
  { id: "gd-ask", label: "空き家・遠方の庭と、業者への伝え方" },
  { id: "gd-faq", label: "よくある質問" },
];

const triggers = [
  {
    h: "自分の体力と、作業の高さが合わなくなった",
    b: "同じ庭でも、脚立に上がれるかどうかで手入れできる範囲が変わります。できなくなったのは一部なのか全部なのかを分けておくと、やめる範囲も決めやすくなります。高いところだけを人に頼み、足元は続けるという形も成り立ちます。",
  },
  {
    h: "住む人が減った、住まなくなった",
    b: "使わない庭は、見る人がいないまま伸びます。転居や施設への入居で家を空ける場合、庭は住まいの問題より先に近隣の問題になります。誰も見に行かない状態が続く前に、どこまで減らしておくかを決めておく場面です。",
  },
  {
    h: "家を継ぐ人と、庭を見る人が違う",
    b: "所有している人と、実際に手を入れている人が別というのはよくあります。手を入れていた人ができなくなったとき、庭はそのままの大きさで残ります。減らすかどうかは、誰が今後見るのかを決めてからの話になります。",
  },
  {
    h: "木が大きくなりすぎた",
    b: "植えたときは手の届く高さだったものが、屋根を越えている。この段階になると、自分で切るのは難しく、切る量も毎年増えます。木そのものを減らすか、大きさを抑えて維持するかの判断が要ります。維持を選ぶなら、それは続けるという決定です。",
  },
  {
    h: "庭より、家のほかの部分に手を回したい",
    b: "手入れをやめるのは、衰えたからとは限りません。かけられる時間とお金を別のところに向けたいという理由でも、庭を減らす判断は成り立ちます。この場合は急ぐ必要がないので、段階的に進めやすい場面です。",
  },
];

const steps = [
  {
    h: "本数を減らす",
    b: "面積を変えずに手間だけを落とす方法です。手入れが重い木、大きくなりすぎた木、あまり見ていない場所の木から外していきます。全部を残したまま剪定の回数だけ減らすと、翌年以降の作業が重くなって戻ってきます。減らすなら本数のほうです。",
  },
  {
    h: "地面を覆って、草の出る面を減らす",
    b: "木を残したまま、足元の手間だけを落とす段階です。手入れの多くは草に取られているので、地面の側を変えると体感がはっきり変わります。覆い方の選び分けそのものは雑草対策のページで扱っています。",
  },
  {
    h: "手のかかる植栽をやめる",
    b: "毎年植え替える花壇、こまめな刈り込みが要る生垣、芝生。これらは「庭があるから手間がかかる」のではなく、その種類だから手間がかかっています。やめる対象を種類で選ぶと、庭の広さを変えずに手入れが軽くなります。",
  },
  {
    h: "管理する面積を区切る",
    b: "見える側だけ手を入れ、奥は伸びてもよい状態にする。境目をどこに置くかを決めて、そこから内側だけを維持します。決めずに全体を薄く放置すると、結局どこも中途半端になり、荒れた印象だけが残ります。区切るなら線を引いておきます。",
  },
];

const options = [
  {
    h: "芝生を別のものに替える",
    b: "芝は見た目のわりに手間が多い部分です。刈る、目土を入れる、伸びる時期に追いつかなくなる。踏んで歩く場所として使っているなら替えると不便になりますが、見ているだけの面なら替える候補になります。芝を続ける場合の作業量は芝生のページで整理しています。",
  },
  {
    h: "砂利を敷く",
    b: "土の面を覆って、草が出る量を落とせます。雨の日にぬかるまない、足音で人の出入りが分かるという利点もあります。一方で、隙間から草は出ますし、落ち葉が入ると取りにくく、あとから土に戻すのは手間です。木の根元まで厚く入れるのは避けます。",
  },
  {
    h: "舗装する",
    b: "草の面をいちばん確実に減らせますが、後戻りがしにくい選択です。雨水が地面にしみ込まなくなるため、水の行き先を考えずに全面を固めると、別の場所に水が集まります。近くに木を残す場合は、根の伸びる先を塞ぐことになる点も考えておきます。",
  },
  {
    h: "防草の下地を入れる",
    b: "砂利や舗装の下に敷いて、下から出る草を抑える考え方です。端の処理や重ね方が甘いとそこから出るため、施工の丁寧さで結果が変わります。敷いたままにできる年数にも限りがあります。選び分けと失敗しやすい点は雑草対策のページで扱っています。",
  },
  {
    h: "駐車や物置のスペースに変える",
    b: "庭として維持するのをやめ、使う場所に変える方法です。使う目的があるぶん、手入れをしない理由がはっきりします。ただし、車が乗る前提だと下地の作り方が変わり、庭の工事というより外構の工事に近くなります。家庭菜園をやめて空いた面も、そのままにせず何にするかを決めておきます。",
  },
];

const tradeoffs = [
  {
    h: "砂利の隙間から草は出る",
    b: "敷いた直後は出ませんが、時間が経つと隙間に土がたまり、そこから生えます。抜こうとすると砂利ごと動き、地面の中に道具を入れにくいので、土の面より取りにくくなることもあります。減らしたのは草の量であって、草がなくなったわけではありません。",
  },
  {
    h: "固めた面には割れ目ができる",
    b: "舗装やコンクリートには、時間とともに継ぎ目や割れ目が出ます。そこに土がたまると、そこだけに草が生えます。近くに木を残している場合、根が持ち上げて割れることもあります。根と構造物の関係は別のページで扱っています。",
  },
  {
    h: "雨水の行き先が変わる",
    b: "しみ込んでいた面を固めると、水はどこかへ流れます。隣地の側へ向かう、建物のきわに溜まる、通路に流れ出す。減らす工事のあとで水の不具合が出た場合、原因はたいてい面の変更です。どこへ流すかを決めてから面を変えます。",
  },
  {
    h: "日かげと湿り気がなくなる",
    b: "木を減らし、地面を固めると、夏の照り返しが強くなり、地面の温度も上がります。窓のそばの木を切ると、室内の暑さの感じ方が変わることがあります。残す木を選ぶときに、日よけとして働いているかどうかを見ておきます。",
  },
];

const keepItems = [
  {
    h: "日よけになっている木",
    b: "夏に建物や窓へ落ちる影は、切ってから気づくことが多いものです。落ち葉が面倒だからという理由だけで判断すると、暑さの側で戻ってきます。減らすなら、枝の張り出しを整理して、幹は残すという選択もあります。",
  },
  {
    h: "目隠しとして働いているもの",
    b: "道路や隣家からの視線を遮っている植栽は、なくすと生活の見え方が変わります。代わりに何かを立てるなら、その手配まで含めて決めてから外します。生垣の手入れを軽くしたいだけなら、種類や高さを変えるという方向もあります。",
  },
  {
    h: "隣との間の緩衝になっているもの",
    b: "音、ほこり、視線。境界に沿った植栽がこれらを和らげている場合があります。なくすと隣家との距離の感じ方が変わり、あとから戻すのは簡単ではありません。境界に関わるものを動かすときは、先に隣へ一言あるほうが無難です。",
  },
  {
    h: "根が斜面や土を支えているもの",
    b: "傾斜地や、土を留めている場所の木を抜くと、土がゆるむことがあります。斜面、擁壁の近く、段差の際にある木は、見た目の理由だけで判断せず、抜いた後に何が支えるのかを確かめてからにします。抜根が構造に関わる場所では、造園以外の判断が必要になります。",
  },
];

const askItems = [
  {
    h: "誰が見に行くかを決める",
    b: "空き家や遠方の家では、作業そのものより、状態を誰が確認するかで止まります。現地確認に立ち会えるのか、写真で判断するのか、鍵と出入りをどうするのか。頼む前にここが決まっていないと、日程の話が進みません。立ち会えない場合の進め方は別のページで整理しています。",
  },
  {
    h: "いつ手を入れるかを決める",
    b: "減らす工事は一度で終わりますが、減らしたあとにも見に行く必要は残ります。草が出る時期に誰も行かなければ、砂利を敷いても数年で元に近い見え方になります。年に何回、誰が見るのかを決めてから、どこまで減らすかを決める順番です。",
  },
  {
    h: "「更地にしてほしい」とは言わない",
    b: "この一言で頼むと、残したかったものまで含めて判断されます。伝えるべきは、何を残して何をやめるかです。この木は残す、生垣はやめる、こちらの面は草が出にくい状態にしたい。残すものを先に挙げると、相手も手の入れ方を決めやすくなります。",
  },
  {
    h: "一度に全部決めない",
    b: "減らす方向の判断は、戻すのが難しいものが多く含まれます。まず本数を減らして一年見る、次に地面を考える、という順で進めても不都合はありません。急いで全部を決めた結果、日よけや目隠しを失うほうが痛手になります。",
  },
  {
    h: "工事の領域に入ると、相手が変わることがある",
    b: "木を切る、草を刈る、植栽を整理するまでは造園の範囲ですが、舗装する、駐車場にする、排水の経路を変えるとなると、外構や土木の工事になります。一社で受けられる場合もあれば、別の会社が入る場合もあります。どこまでを誰がやるのかを、見積りの段階で分けて確かめておきます。",
  },
];

const faqs = [
  {
    q: "庭を全部なくしてしまえば、手入れは終わりますか。",
    a: "手入れの種類が変わるだけで、ゼロにはなりません。砂利の隙間からは草が出ますし、舗装には継ぎ目や割れ目ができ、そこにも草は生えます。落ち葉や砂は固めた面のほうが目につきます。手間の量は確かに減りますが、年に何回か見る必要は残ります。むしろ、誰も見に行かない状態が続くことのほうが、庭の状態を悪くします。",
  },
  {
    q: "どこから減らすのが順当ですか。",
    a: "後戻りしやすいものからです。本数を減らす、手のかかる植栽をやめる、管理する面積を区切る。ここまでは判断を変えられます。舗装や、根を抜いてしまう作業は戻すのが難しいので、後に回します。急いで全部を決めると、日よけや目隠しとして働いていたものを失ってから気づくことになります。",
  },
  {
    q: "空き家の庭は、どこまで手を入れておけばよいですか。",
    a: "どこまで減らすかより先に、誰が年に何回見に行くかを決めてください。見に行ける回数が少ないほど、伸びても困らない状態に寄せる必要があります。境界を越える枝、道路にはみ出す部分、倒れる可能性のある木は、見に行く回数にかかわらず先に手を入れる対象です。減らしたあとも、草の出る時期には一度は見ておく前提で考えます。",
  },
  {
    q: "木を切るだけでなく、根まで抜いたほうがよいですか。",
    a: "そのあと何をするかによります。舗装したり駐車スペースにしたりするなら、根を残すと下から持ち上がることがあります。一方、傾斜地や擁壁の近く、段差の際では、根が土を支えている場合があります。抜いたあとに何が支えるのかがはっきりしない場所では、その場で決めずに、現地を見た相手と確かめてください。",
  },
  {
    q: "費用はどのくらいかかりますか。",
    a: "作業の種類、量、搬出の経路によって大きく変わるため、このページでは扱っていません。費用の考え方と、自分でやる範囲を作る場合の判断は、料金のページとDIYのページで整理しています。見積りを取るときは「更地にしてほしい」ではなく、何を残して何をやめるかを書いて渡すと、比べられる形の見積りが返ってきます。",
  },
];

export default function GardenDownsizingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "手入れをやめる・庭を減らすという判断を、段階と選択肢、残すべきもの、頼むときの伝え方に分けて整理しました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭じまい" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れを続けるかどうかは、どこかで一度考える場面が来ます。上れなくなった、住む人が減った、木が屋根を越えた、見に行けない家になった。そのときに出てくるのが、庭を減らす、あるいはやめるという選択です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          この判断が難しいのは、作業のやり方の問題ではなく、何を手放して何を残すかを決める話だからです。しかも、戻せるものと戻せないものが混ざっています。このページでは、全部なくす前にある段階、減らす方向の選択肢と向き不向き、減らしたあとに出てくる別の手間、そして残しておいたほうがよいものを順に整理します。
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

      <section id="gd-why" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          手に負えなくなる場面は、だいたい決まっている
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭が急に手に負えなくなることはあまりありません。たいていは、少しずつ追いつかなくなっていたものが、何かの変化をきっかけにはっきりします。どの場面にいるのかが分かると、どこまで減らすかの見当がつきます。
        </p>
        <div className="space-y-4">
          {triggers.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          自分でやる範囲を残す場合の線引きは
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          、家族に代わって手配する場合の段取りは
          <Link href="/area/nara/" className="text-primary underline underline-offset-2 mx-1">
            家族に代わって手配するときの段取り
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="gd-steps" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          「全部なくす」の前にある段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手入れをやめる話は、残すか更地かの二択になりがちです。実際には、その間にいくつかの段階があります。手前から試すほど、あとで戻せる余地が残ります。
        </p>
        <ol className="space-y-4">
          {steps.map((x, i) => (
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
          木を減らす場合の考え方は
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採費用相場と業者の選び方
          </Link>
          、残す木を手間の少ない種類に寄せる方向は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが楽な庭木おすすめ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="gd-options" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          減らす方向の選択肢と、向き不向き
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          どれを選んでも手間は減りますが、減り方と、その後の使い方が違います。戻しやすさにも差があります。
        </p>
        <div className="space-y-4">
          {options.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          砂利・防草の下地・舗装のどれを選ぶかという比較そのものは
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策の選び分け
          </Link>
          、芝を続ける場合の年間の作業量は
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れガイド
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="gd-tradeoff" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          減らすと出てくる、別の手間
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          減らした結果、手入れがゼロになるわけではありません。種類の違う手間に入れ替わります。ここを知らずに進めると、こんなはずではなかったという話になります。
        </p>
        <ol className="space-y-4">
          {tradeoffs.map((x, i) => (
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
          面を変えたあとの水の行き先は
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          、木を残す場合の根と構造物の関係は
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根が塀・舗装・排水に影響しているとき
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="gd-keep" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          残しておいたほうがよいもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭にあるものは、見るためだけに立っているとは限りません。役目を持っているものを外すと、その役目の分だけ別のところに出ます。
        </p>
        <div className="space-y-4">
          {keepItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          目隠しを残したまま手間だけ落とす方向は
          <Link href="/plant/hedge/" className="text-primary underline underline-offset-2 mx-1">
            生垣におすすめの品種
          </Link>
          、夏の日かげと暑さの関係は
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温と水やり
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="gd-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          空き家・遠方の庭と、業者への伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          減らす作業は一度で終わっても、そのあと見に行く人は要ります。頼む前に決めておくことと、伝え方を整理します。
        </p>
        <div className="space-y-4">
          {askItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          立ち会えない庭の頼み方は
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会えない庭の頼み方
          </Link>
          、切ったものや抜いたものの出し方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          、費用の考え方は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="gd-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び分け" },
            { href: "/service/felling/", label: "庭木の伐採費用相場と業者の選び方" },
            { href: "/plant/low-maintenance/", label: "手入れが楽な庭木おすすめ" },
            { href: "/guide/tree-roots/", label: "庭木の根が塀・舗装・排水に影響しているとき" },
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
          何を残して何をやめるかを書き出してから相談すると、返ってくる提案が具体的になります。まずは候補を並べてみてください。
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
