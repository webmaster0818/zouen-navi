import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/garden-downsizing/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "庭じまいという選択｜手入れをやめる・庭を縮小する際の判断と段階";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の管理が困難になった場合でも、すべてを撤去する前に行える対策があります。木を減らす、地面を覆う、管理する面積を区切るといった縮小の選択肢とその適否、縮小後に生じる別の手間、残しておくべきもの、空き家や遠方の庭で事前に決めるべき事項を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "手入れをやめる・庭を縮小するという判断を、段階と選択肢に分けて整理しています。",
  },
};

const toc = [
  { id: "gd-why", label: "管理が困難になる場面には一定の傾向があります" },
  { id: "gd-steps", label: "すべてを撤去する前の段階" },
  { id: "gd-options", label: "縮小の選択肢とそれぞれの適否" },
  { id: "gd-tradeoff", label: "縮小によって生じる別の手間" },
  { id: "gd-keep", label: "残しておくべきもの" },
  { id: "gd-ask", label: "空き家・遠方の庭と業者への伝え方" },
  { id: "gd-faq", label: "よくある質問" },
];

const triggers = [
  {
    h: "体力と作業の高さが合わなくなった",
    b: "同じ庭でも、脚立に上がれるかどうかによって手入れできる範囲が変わります。対応できなくなったのが一部なのか全部なのかを区別しておくと、やめる範囲も決めやすくなります。高所のみを業者に依頼し、足元の手入れは続けるという形も可能です。",
  },
  {
    h: "居住者が減った、または住まなくなった",
    b: "使用しない庭は、管理する人がいないまま草木が伸びます。転居や施設への入居で住宅を空ける場合、庭は住まいの問題より先に近隣の問題になります。誰も管理しない状態が続く前に、どこまで縮小しておくかを決めておく必要があります。",
  },
  {
    h: "住宅の相続人と庭の管理者が異なる",
    b: "所有者と、実際に手入れをしている人が異なることはよくあります。手入れをしていた人が対応できなくなると、庭はそのままの規模で残ります。縮小するかどうかは、今後誰が管理するかを決めてから判断することになります。",
  },
  {
    h: "木が大きくなりすぎた",
    b: "植栽時は手の届く高さだった木が、屋根を越えている段階になると、自分で剪定することは難しく、剪定する量も毎年増えます。木そのものを減らすか、大きさを抑えて維持するかの判断が必要です。維持を選ぶ場合は、手入れを継続するという決定になります。",
  },
  {
    h: "庭より住宅のほかの部分に費用と時間を充てたい",
    b: "手入れをやめる理由は、体力の衰えとは限りません。かけられる時間と費用を別の用途に充てたいという理由でも、庭を縮小する判断は成り立ちます。この場合は急ぐ必要がないため、段階的に進めやすい場面です。",
  },
];

const steps = [
  {
    h: "本数を減らす",
    b: "面積を変えずに手間のみを減らす方法です。手入れの負担が大きい木、大きくなりすぎた木、あまり目にしない場所の木から減らしていきます。すべてを残したまま剪定の回数のみを減らすと、翌年以降の作業の負担が大きくなります。減らすのであれば本数のほうです。",
  },
  {
    h: "地面を覆い、草の生える面を減らす",
    b: "木を残したまま、足元の手間のみを減らす段階です。手入れの多くは除草に費やされているため、地面の状態を変えると負担の軽減を実感しやすくなります。覆い方の選び方は、雑草対策のページで解説しています。",
  },
  {
    h: "手間のかかる植栽をやめる",
    b: "毎年植え替える花壇、こまめな刈り込みが必要な生垣、芝生などは、「庭があるから手間がかかる」のではなく、その種類であるから手間がかかっています。やめる対象を種類で選ぶと、庭の広さを変えずに手入れの負担を軽減できます。",
  },
  {
    h: "管理する面積を区切る",
    b: "見える側のみ手入れを行い、奥は伸びても支障のない状態にします。境界をどこに設けるかを決め、その内側のみを維持します。決めずに全体を少しずつ放置すると、結局どこも中途半端になり、荒れた印象のみが残ります。区切る場合は、明確に境界を設けておきます。",
  },
];

const options = [
  {
    h: "芝生を別のものに替える",
    b: "芝は外観に比べて手間の多い部分です。芝刈り、目土入れが必要で、伸びる時期には作業が追いつかなくなることもあります。歩く場所として使用している場合は替えると不便になりますが、観賞用の面であれば替える候補になります。芝を続ける場合の作業量は、芝生のページで解説しています。",
  },
  {
    h: "砂利を敷く",
    b: "土の面を覆い、草が生える量を減らせます。雨の日にぬかるまない、足音で人の出入りが分かるという利点もあります。一方で、隙間から草は生え、落ち葉が入ると取り除きにくく、後から土に戻すことは手間がかかります。木の根元まで厚く敷くことは避けます。",
  },
  {
    h: "舗装する",
    b: "草の生える面を最も確実に減らせますが、元に戻しにくい選択です。雨水が地面に浸透しなくなるため、排水先を考えずに全面を舗装すると、別の場所に水が集まります。近くに木を残す場合は、根が伸びる先を塞ぐことになる点も考慮しておきます。",
  },
  {
    h: "防草シートを敷設する",
    b: "砂利や舗装の下に敷いて、下から生える草を抑える方法です。端部の処理や重ね方が不十分だとそこから草が生えるため、施工の丁寧さによって結果が変わります。敷設したまま使用できる年数にも限りがあります。選び方と失敗しやすい点は、雑草対策のページで解説しています。",
  },
  {
    h: "駐車場や物置のスペースに変える",
    b: "庭としての維持をやめ、用途のある場所に変える方法です。用途がある分、手入れをしない理由が明確になります。ただし、車両が乗る前提では下地の施工方法が変わり、庭の工事というより外構工事に近くなります。家庭菜園をやめて空いた面も、そのままにせず用途を決めておきます。",
  },
];

const tradeoffs = [
  {
    h: "砂利の隙間から草は生えます",
    b: "敷設直後は生えませんが、時間が経つと隙間に土がたまり、そこから草が生えます。抜こうとすると砂利ごと動き、地中に道具を入れにくいため、土の面より除草しにくくなることもあります。減ったのは草の量であり、草がなくなったわけではありません。",
  },
  {
    h: "舗装した面には割れ目ができます",
    b: "舗装やコンクリートには、時間の経過とともに継ぎ目や割れ目が生じます。そこに土がたまると、その部分にのみ草が生えます。近くに木を残している場合、根が持ち上げて割れることもあります。根と構造物の関係は別のページで解説しています。",
  },
  {
    h: "雨水の排出先が変わります",
    b: "雨水が浸透していた面を舗装すると、水はどこかへ流れます。隣地側へ向かう、建物の際に溜まる、通路に流れ出すといった問題が生じます。縮小の工事後に排水の不具合が生じた場合、原因の多くは面の変更です。排出先を決めてから面を変更します。",
  },
  {
    h: "日陰と湿り気がなくなります",
    b: "木を減らし、地面を舗装すると、夏の照り返しが強くなり、地面の温度も上がります。窓の近くの木を伐採すると、室内の暑さの感じ方が変わることがあります。残す木を選ぶ際に、日よけとして機能しているかどうかを確認しておきます。",
  },
];

const keepItems = [
  {
    h: "日よけになっている木",
    b: "夏に建物や窓へ落ちる影は、伐採してから気づくことが多いものです。落ち葉の手間のみを理由に判断すると、暑さの面で問題が生じます。減らす場合は、枝の張り出しを整理して幹は残すという選択肢もあります。",
  },
  {
    h: "目隠しとして機能しているもの",
    b: "道路や隣家からの視線を遮っている植栽は、撤去すると生活上の見え方が変わります。代わりに塀などを設置する場合は、その手配まで含めて決めてから撤去します。生垣の手入れの負担を軽くしたいだけであれば、種類や高さを変えるという方法もあります。",
  },
  {
    h: "隣家との緩衝となっているもの",
    b: "境界に沿った植栽が、音、ほこり、視線を和らげている場合があります。撤去すると隣家との距離の感じ方が変わり、後から元に戻すことは容易ではありません。境界に関わるものを撤去する際は、事前に隣家に一言伝えておくことをおすすめします。",
  },
  {
    h: "根が斜面や土を支えているもの",
    b: "傾斜地や、土を留めている場所の木を抜根すると、土が緩むことがあります。斜面、擁壁の近く、段差の際にある木は、外観上の理由のみで判断せず、抜根後に何が土を支えるのかを確認してから判断します。抜根が構造に関わる場所では、造園以外の専門的な判断が必要になります。",
  },
];

const askItems = [
  {
    h: "状態を確認する担当者を決める",
    b: "空き家や遠方の住宅では、作業そのものより、状態を誰が確認するかという点で手続きが止まります。現地確認に立ち会えるのか、写真で判断するのか、鍵と出入りをどうするのかが決まっていないと、日程の相談が進みません。立ち会えない場合の進め方は別のページで解説しています。",
  },
  {
    h: "手入れの時期を決める",
    b: "縮小の工事は一度で終わりますが、縮小後も状態を確認する必要は残ります。草が生える時期に誰も確認しなければ、砂利を敷いても数年で元に近い状態になります。年に何回、誰が確認するのかを決めてから、どこまで縮小するかを決める順序です。",
  },
  {
    h: "「更地にしてほしい」とは依頼しない",
    b: "この表現で依頼すると、残したかったものまで含めて判断されます。伝えるべきは、何を残して何をやめるかです。この木は残す、生垣はやめる、こちらの面は草が生えにくい状態にしたいといったように、残すものを先に挙げると、業者も作業方法を決めやすくなります。",
  },
  {
    h: "一度にすべてを決めない",
    b: "縮小の判断には、元に戻しにくいものが多く含まれます。まず本数を減らして一年間様子を見る、次に地面の扱いを検討するという順序で進めても支障はありません。急いですべてを決めた結果、日よけや目隠しを失うほうが損失は大きくなります。",
  },
  {
    h: "工事の領域に入ると、依頼先が変わる場合があります",
    b: "木の伐採、草刈り、植栽の整理までは造園の範囲ですが、舗装、駐車場化、排水経路の変更となると、外構や土木の工事になります。一社で対応できる場合もあれば、別の会社が担当する場合もあります。どこまでを誰が担当するのかを、見積もりの段階で区別して確認しておきます。",
  },
];

const faqs = [
  {
    q: "庭を全部なくしてしまえば、手入れは終わりますか。",
    a: "手入れの種類が変わるだけで、ゼロにはなりません。砂利の隙間からは草が生え、舗装には継ぎ目や割れ目ができ、そこにも草が生えます。落ち葉や砂は、舗装した面のほうが目立ちます。手間の量は確かに減りますが、年に数回は状態を確認する必要があります。むしろ、誰も確認しない状態が続くことのほうが、庭の状態を悪化させます。",
  },
  {
    q: "どこから減らすのが順当ですか。",
    a: "元に戻しやすいものから始めます。本数を減らす、手間のかかる植栽をやめる、管理する面積を区切るといった段階までは、判断を変更できます。舗装や抜根は元に戻すことが難しいため、後に回します。急いですべてを決めると、日よけや目隠しとして機能していたものを失ってから気づくことになります。",
  },
  {
    q: "空き家の庭は、どこまで手を入れておけばよいですか。",
    a: "どこまで縮小するかより先に、誰が年に何回確認に行くかを決めてください。確認できる回数が少ないほど、伸びても支障のない状態に近づける必要があります。境界を越える枝、道路にはみ出す部分、倒れる可能性のある木は、確認の回数にかかわらず優先して対処する対象です。縮小後も、草が生える時期には一度は確認する前提で検討します。",
  },
  {
    q: "木を切るだけでなく、根まで抜いたほうがよいですか。",
    a: "その後の用途によります。舗装したり駐車スペースにしたりする場合は、根を残すと下から持ち上がることがあります。一方、傾斜地や擁壁の近く、段差の際では、根が土を支えている場合があります。抜根後に何が土を支えるのかが明確でない場所では、その場で決めずに、現地を確認した業者とご相談ください。",
  },
  {
    q: "費用はどのくらいかかりますか。",
    a: "作業の種類、量、搬出経路によって大きく異なるため、本ページでは扱っていません。費用の考え方と、自分で行う範囲を設ける場合の判断は、料金のページとDIYのページで解説しています。見積もりを取得する際は「更地にしてほしい」ではなく、何を残して何をやめるかを記載して渡すと、比較可能な形の見積もりが提示されます。",
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
          "手入れをやめる・庭を縮小するという判断を、段階と選択肢、残すべきもの、依頼する際の伝え方に分けて整理しています。",
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
          庭の手入れを続けるかどうかを検討する場面は、いずれ訪れます。脚立に上がれなくなった、居住者が減った、木が屋根を越えた、管理に行けない住宅になったといった場合に検討されるのが、庭を縮小する、あるいは手入れをやめるという選択です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          この判断が難しいのは、作業方法の問題ではなく、何を手放して何を残すかを決める問題であるためです。しかも、元に戻せるものと戻せないものが混在しています。本ページでは、すべてを撤去する前の段階、縮小の選択肢とその適否、縮小後に生じる別の手間、残しておくべきものを順に整理します。
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
          管理が困難になる場面には一定の傾向があります
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭の管理が急に困難になることは多くありません。多くの場合、徐々に追いつかなくなっていた状態が、何らかの変化をきっかけに顕在化します。どの場面に該当するかが分かると、どこまで縮小するかの目安がつきます。
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
          自分で行う範囲を残す場合の判断基準は
          <Link href="/cost/diy/" className="text-primary underline underline-offset-2 mx-1">
            DIY庭づくりガイド
          </Link>
          、家族に代わって手配する場合の段取りは
          <Link href="/area/nara/" className="text-primary underline underline-offset-2 mx-1">
            家族に代わって手配する場合の手順
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gd-steps" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          すべてを撤去する前の段階
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手入れをやめる検討は、残すか更地にするかの二択になりがちです。実際には、その間にいくつかの段階があります。手前の段階から試すほど、後で元に戻せる余地が残ります。
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
          、残す木を手間の少ない種類に替える方向は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが容易な庭木のおすすめ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gd-options" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          縮小の選択肢とそれぞれの適否
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          いずれを選んでも手間は減りますが、減り方と、その後の使い方が異なります。元への戻しやすさにも差があります。
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
          砂利・防草シート・舗装のいずれを選ぶかの比較は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策の選び方
          </Link>
          、芝を続ける場合の年間の作業量は
          <Link href="/guide/lawn-care/" className="text-primary underline underline-offset-2 mx-1">
            芝生の手入れガイド
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gd-tradeoff" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          縮小によって生じる別の手間
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          縮小した結果、手入れがゼロになるわけではありません。種類の異なる手間に置き換わります。この点を把握せずに進めると、想定と異なる結果になります。
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
          面を変更した後の排水先は
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          、木を残す場合の根と構造物の関係は
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根が塀・舗装・排水に影響しているとき
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gd-keep" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          残しておくべきもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭にあるものは、観賞のためだけに存在しているとは限りません。役割を持つものを撤去すると、その役割の分だけ別の問題が生じます。
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
          目隠しを残したまま手間のみを減らす方法は
          <Link href="/plant/hedge/" className="text-primary underline underline-offset-2 mx-1">
            生垣におすすめの品種
          </Link>
          、夏の日陰と暑さの関係は
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温と水やり
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="gd-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          空き家・遠方の庭と業者への伝え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          縮小の作業は一度で終わっても、その後に状態を確認する人は必要です。依頼前に決めておくべき事項と、伝え方を整理します。
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
          立ち会いができない場合の依頼方法は
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会いができない場合の依頼方法
          </Link>
          、剪定・抜根したものの処分方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          、費用の考え方は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          で解説しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び方" },
            { href: "/service/felling/", label: "庭木の伐採費用相場と業者の選び方" },
            { href: "/plant/low-maintenance/", label: "手入れが容易な庭木のおすすめ" },
            { href: "/guide/tree-roots/", label: "庭木の根が塀・舗装・排水に影響しているとき" },
            { href: "/guide/stump-removal/", label: "伐採した木の切り株｜残す・抜根する・削る" },
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
          何を残して何をやめるかを書き出してから相談すると、提示される提案が具体的になります。まずは候補を比較することをおすすめします。
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
