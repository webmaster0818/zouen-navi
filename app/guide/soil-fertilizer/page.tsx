import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/soil-fertilizer/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "庭の土と肥料｜土が原因かを判断する前の切り分けと、土壌改良・施肥の考え方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "木に元気がない場合、原因が土であるとは限りません。事前に切り分けるべき事項、土に原因がある場合の兆候、踏み固めと根の呼吸、植栽前にしかできない改良と植栽後に行える改良、肥料が必要な場合と不要な場合、行ってはいけない施肥方法を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "土の兆候の見分け方、土壌改良の考え方、肥料が必要な場合と不要な場合を整理しています。",
  },
};

const toc = [
  { id: "soil-cause", label: "土が原因かを判断する前に切り分けるべき事項" },
  { id: "soil-sign", label: "土に原因がある場合の兆候" },
  { id: "soil-compaction", label: "踏み固めが起きている場所と根の呼吸" },
  { id: "soil-improve", label: "植栽前にしかできない改良と、植栽後に行える改良" },
  { id: "soil-fertilizer", label: "肥料は不足している場合に補うものです" },
  { id: "soil-dont", label: "行ってはいけない施肥方法" },
  { id: "soil-faq", label: "よくある質問" },
];

const otherCauses = [
  {
    h: "水の量と浸透している深さ",
    b: "元気がない木を見て最初に考えられるのが水です。ただし、不足しているのか、過剰なのかは症状が似ることがあります。乾燥しているのに水を与えていない場合も、反対に水が引かない場所に植えられていて根が常に濡れている場合も、葉の色が抜け、勢いが落ちます。表面のみを湿らせる与え方を続けている場合も、根のある深さには届いていません。土を入れ替える前に、この点を確認します。",
  },
  {
    h: "日の当たり方が植栽時から変わっていないか",
    b: "隣に建物が建った、自宅の別の木が成長して影を作るようになった、反対に大きな木を伐採して急に日が当たるようになったといった変化があります。植栽時と条件が変わると、同じ場所でも適さなくなります。この場合、土に何を加えても解決しません。日照の条件から選ぶ考え方は、日陰の庭木のページで解説しています。",
  },
  {
    h: "病気や害虫が付いていないか",
    b: "葉に斑点が出る、白い付着物がある、葉が食べられている、幹に穴と木くずがあるといった症状があれば、原因は土ではありません。肥料を与えても回復しないばかりか、新しく出た柔らかい芽に虫が集まることがあります。見分け方は害虫と病気のページにまとめています。",
  },
  {
    h: "根そのものが傷んでいないか",
    b: "近くで工事があった、駐車場を作った、地面を掘った、鉢の中で根が回りきっているなど、根が切られたり回りきったりしている場合は、地上部のみを確認しても原因は分かりません。根元が不自然に盛り上がっている、ぐらつく、幹の際に隙間があるといった場合は、土の質より根の状態を疑うべき場面です。",
  },
];

const soilSigns = [
  {
    h: "水をかけても、その場に溜まって浸透しない",
    b: "水が土に浸透せず、表面を流れていくか、水たまりになってしばらく残る状態は、土が締まっているか、表面が固まっている兆候です。乾燥しきった土が水をはじく状態も同様に見えますが、こちらは少量ずつ繰り返しかければ浸透するようになります。何度かけても変わらない場合は、締まっているほうです。",
  },
  {
    h: "手で押しても棒を刺しても入らない",
    b: "分かりやすい確認方法は、細い棒や移植ごてを地面に差してみることです。すぐに入る場所と、途中で止まる場所を比較します。庭の中で差し込める深さが場所によって大きく異なる場合は、その差が原因を示しています。雨の後、少し湿っている時に確認すると差が分かりやすくなります。",
  },
  {
    h: "常に湿っていて、においがする",
    b: "常に湿っていて、土をかき混ぜた際に不快なにおいがする場合は、水が抜けずに空気が入っていない状態です。根は水だけでなく空気も必要とするため、この状態が続くと根から傷みます。水はけそのものへの対処は、水はけのページで解説しています。",
  },
  {
    h: "地面に苔が広がる、苔や藻で滑る",
    b: "日陰であることと、水が抜けにくいことが重なると発生しやすくなります。それ自体が害ではありませんが、その場所の条件を示しています。通路に発生している場合は滑りやすくなるため、別の問題にもなります。",
  },
  {
    h: "植えたものが、いずれも同様に成長しない",
    b: "一本のみ調子が悪い場合は、その木の問題である可能性が高くなります。同じ場所に植えたものが種類を問わず成長しない、植え替えても同じことが起きるといった場合は、場所の条件、つまり土や水を疑うべき段階です。",
  },
];

const compactionItems = [
  {
    h: "踏み固めは特定の場所で起きます",
    b: "庭全体が固まることは多くありません。固くなるのは、人が通る経路と、物が置かれていた場所です。物置の跡、駐車していた場所、洗濯物を干しに行く動線、水道の蛇口までの通路などです。木の足元がちょうどその経路上にある場合、上の枝をいくら手入れしても状態は改善しません。",
  },
  {
    h: "工事の後は庭全体で起きることがあります",
    b: "住宅の建築時や外構の改修時には、重機や資材が搬入されます。その際に締まった土は、表面を耕しても下層が残ります。新しく植えたものが何年も成長しない、雨の後に水が長く残るようになったといった心当たりがある場合は、この原因が考えられます。",
  },
  {
    h: "固い土では根が呼吸できません",
    b: "根は水と養分だけでなく、土の隙間にある空気も必要とします。締まった土は隙間が潰れているため、水も空気も入りません。その結果、根は浅い位置にとどまり、乾燥にも風にも弱くなります。土が固い場所の木が乾燥に弱いのは、根が深く伸びていないためです。",
  },
  {
    h: "固さそのものより、踏み続けていることが問題です",
    b: "一度ほぐしても、同じ場所を毎日歩いていれば元に戻ります。根元周辺を歩かずに済むよう通路を変える、飛び石や敷材で荷重を分散する、木の足元を覆って直接踏まないようにするといった、使い方を変える対処のほうが、土を改良するより効果的です。",
  },
];

const improveItems = [
  {
    h: "植栽前にしかできないこと",
    b: "深くまで耕す、土を入れ替える、下層に溜まる水の排水経路を設ける、盛り土で高さを上げるといった作業は、根が張ってからでは行えません。植栽時にこれらを省くと、後から改善することが難しくなります。これから植栽する場合は、木を選ぶ前に場所の条件を確認する順序です。",
  },
  {
    h: "植栽後に行えること",
    b: "表面を覆う、上から有機物を加える、踏まれないようにする、水の与え方を変えるといった対処です。範囲は限られますが、継続することで改善します。時間はかかります。植えられている木の足元で大きく掘り返すことは、根を切ることになるため避けます。",
  },
  {
    h: "根の広がりを踏まえた範囲で手を加える",
    b: "根は幹のすぐ近くだけでなく、枝が広がっている外側付近まで伸びています。足元のみを手入れしても根には届かず、反対に離れた場所を深く掘れば根を切ります。手を加える範囲と深さは、この広がりを前提に決めます。根の広がり方は、根と構造物のページで解説しています。",
  },
  {
    h: "堆肥や腐葉土を加える意味は、養分より土の構造の改善です",
    b: "有機物を加える目的は、養分を補うこと以上に、土の粒のまとまり方を変えることにあります。隙間ができれば水と空気が入り、保水性と排水性が同時に向上する方向に働きます。効果は一度で現れるものではなく、繰り返すことで改善していくものです。植えられている木の足元では、掘り込まずに上から加え、徐々に下層へ浸透していくのを待つ形になります。",
  },
];

const fertilizerItems = [
  {
    h: "十分な状態で肥料を追加しても効果はありません",
    b: "肥料は、不足しているものを補うためのものです。十分な状態で追加すると、伸びすぎた柔らかい枝が増え、その柔らかい芽に虫が集まりやすくなります。徒長した枝は風にも弱く、翌年の剪定量も増えます。元気がないから肥料を与えるという判断の前に、原因の切り分けが必要です。",
  },
  {
    h: "地植えと鉢植えでは必要性が大きく異なります",
    b: "鉢植えは土の量が限られ、水やりのたびに養分が流れ出るため、補うことを前提に管理します。地植えは根が広い範囲から養分を吸収できるうえ、落ち葉や周囲の有機物が分解されて土に戻る循環があります。庭に植えられて年数の経った木は、何も与えていなくても問題なく育っていることが一般的です。",
  },
  {
    h: "施肥する場合は時期を外さない",
    b: "考え方としては、休眠している時期に与えて後の成長に備えるか、成長している時期に不足分を補うかの二つに分かれます。反対に、休眠期に入る直前に与えると、中途半端に芽が動き、寒さで傷むことがあります。樹種によって成長する時期が異なるため、木に合わせて決めます。年間の作業計画は、メンテナンスカレンダーで解説しています。",
  },
  {
    h: "花や実を付けさせたい場合と、木を維持したい場合は異なります",
    b: "花木や果樹で花付き・実付きを目的とする場合と、庭木の状態を維持したい場合では、考え方が変わります。前者は目的があって与えるものであり、後者は不足がなければ与えないことが基本です。同じ「肥料を与える」という行為でも、目的が異なれば判断も変わります。",
  },
];

const dontItems = [
  {
    h: "幹に密着させて盛らない",
    b: "肥料、土、被覆材のいずれも同様です。幹の際に寄せて盛ると、幹の根元が常に湿った状態になり、そこから傷みます。根元から少し離し、幹の付け根が見えている状態を維持します。土を加えて植え際を埋めてしまうことも、同じ理由で避けるべきです。",
  },
  {
    h: "分解しきっていない有機物を根に直接触れさせない",
    b: "刈った草、生の枝葉、分解途中のものを根に接するように埋めると、分解の過程で熱が発生したり、根に障害が出たりします。使用する場合は分解が進んだものを、地面の上に敷く形にします。生のまま土に混ぜ込む使い方は避けます。庭で出たものの扱いは、処分のページで解説しています。",
  },
  {
    h: "一度に大量に与えない",
    b: "多く与えれば早く効果が出るわけではありません。濃度が高くなった状態は根を傷めます。特に、乾燥している時に与えると影響が出やすくなります。与える場合は少量を、根元から離して、乾燥しきっていない状態で施します。回復させたい木ほど、この順序を守るほうが安全です。",
  },
  {
    h: "弱っている木に急に与えない",
    b: "根が傷んでいる木や、移植したばかりの木は、養分を吸収する機能が低下しています。その状態で与えても吸収できず、負担になるだけです。先に行うべきことは、水の届き方を整えること、直射日光や風から保護すること、踏まれないようにすることです。施肥するかどうかは、木が成長を始めてから判断します。",
  },
];

const faqs = [
  {
    q: "木に元気がありません。肥料を与えれば回復しますか。",
    a: "肥料で回復するのは、養分が不足していた場合のみです。水の量や浸透する深さ、日の当たり方の変化、病気や害虫、根の傷みの四点を先に切り分けてください。特に、病気や害虫が付いている状態で与えると、新しく出た柔らかい芽に虫が集まることがあります。根が傷んでいる木や移植したばかりの木も、吸収できる状態にないため、与えるのは成長を始めてからにします。",
  },
  {
    q: "土が固いかどうかは、どう確かめればよいですか。",
    a: "細い棒や移植ごてを地面に差して、入る深さを庭の数か所で比較してください。すぐに入る場所と途中で止まる場所の差が分かります。雨の後、少し湿っている時に確認すると分かりやすくなります。あわせて、水をかけた際に浸透せずに溜まるかどうかも確認します。人が通る経路や物を置いていた場所のみが固いことはよくあり、その経路上に木の足元があるかどうかが判断の基準になります。",
  },
  {
    q: "すでに植えてある木の足元を、掘り返して土を入れ替えてもよいですか。",
    a: "避けるべき作業です。根は枝が広がっている外側付近まで伸びているため、足元を深く掘り返すと根を切ることになります。植栽後に行えるのは、上から有機物を加える、表面を覆う、踏まれないようにする、水の与え方を変えるといった範囲です。時間はかかりますが、根を傷めずに進められます。深い改良や土の入れ替えは、植栽前にしかできない作業とお考えください。",
  },
  {
    q: "落ち葉や刈った草を、そのまま土に混ぜてもよいですか。",
    a: "分解しきっていないものを根に触れるように混ぜ込むことは避けてください。分解の過程で熱が発生したり、根に障害が出たりします。使用する場合は、分解が進んだものを地面の上に敷く形にします。また、斑点や白い付着物が出ていた葉、虫の食害が目立った葉は、敷いたり積んだりする対象から除外します。翌年、同じ木の根元に病害虫が戻ることになります。",
  },
  {
    q: "水はけが悪い土は、砂を混ぜれば改善しますか。",
    a: "必ずしもそうなるとは限りません。水が抜けない原因は、土の質だけでなく、下層、地面の高低、水の集まり方など複数あります。原因を確認せずに材料を加えると、かえって締まることもあります。まず、どこに水が溜まっているか、どこから流入しているかをご確認ください。水はけそのものの原因の切り分けと対処は、水はけのページで解説しています。",
  },
];

export default function SoilFertilizerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "土の兆候の見分け方、踏み固めと根の呼吸、植栽前後の改良の違い、肥料が必要な場合と不要な場合を整理しています。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "庭の土と肥料" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の木に元気がないと、土が悪いのではないか、肥料が不足しているのではないかと考えがちです。しかし実際には、原因が土ではないことのほうが多く、肥料を与えたために状態が悪化することもあります。土と肥料は、効果的な対処を誤ると手間ばかりかかる部分です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、土が原因かを判断する前に切り分けるべき事項、土に原因がある場合の兆候、踏み固めと根の呼吸、植栽前にしかできない改良と植栽後に行える改良の違い、肥料が必要な場合と不要な場合を整理します。商品の指定や施肥量の数値は扱わず、判断の順序について解説します。
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

      <section id="soil-cause" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          土が原因かを判断する前に切り分けるべき事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          葉の色が悪い、枝が伸びない、花が減ったといった同じ外観でも、原因は四つの方向に分かれます。土に手を加えるのは、これらを一通り確認してからです。
        </p>
        <div className="space-y-4">
          {otherCauses.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          水の与え方と浸透する深さは
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温で庭木が傷むとき
          </Link>
          、症状から原因を絞り込む方法は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          、日照の条件から選ぶ考え方は
          <Link href="/plant/shade/" className="text-primary underline underline-offset-2 mx-1">
            日陰に強い庭木おすすめ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="soil-sign" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          土に原因がある場合の兆候
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          土は外観では判断しにくいものです。色や外観より、水と空気の入り方から判断します。
        </p>
        <ol className="space-y-4">
          {soilSigns.map((x, i) => (
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
          水が引かない状態そのものの原因の切り分けと対処は
          <Link href="/guide/drainage/" className="text-primary underline underline-offset-2 mx-1">
            庭の水はけが悪いときの原因と対処
          </Link>
          で解説しています。土のみを改良しても、水の集まり方が変わらなければ元に戻ります。
        </p>
      </section>

      <section id="soil-compaction" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          踏み固めが起きている場所と根の呼吸
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          土が固い状態は、多くの場合、上から荷重がかかり続けた結果です。土の質の問題ではなく、使い方の結果として生じています。
        </p>
        <div className="space-y-4">
          {compactionItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="soil-improve" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          植栽前にしかできない改良と、植栽後に行える改良
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          土壌改良という言葉は範囲が広く、植栽前と植栽後では、行えることが大きく異なります。この区別をしておくと、効果のない作業を避けられます。
        </p>
        <ol className="space-y-4">
          {improveItems.map((x, i) => (
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
          根がどこまで広がっているかは
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根が塀・舗装・排水に影響しているとき
          </Link>
          、これから植栽する場所を決める際の考え方は
          <Link href="/plant/flower-bed/" className="text-primary underline underline-offset-2 mx-1">
            花壇の作り方
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="soil-fertilizer" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          肥料は不足している場合に補うものです
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          肥料は、与えれば育つものではありません。不足しているものを補う手段であり、十分な状態で追加すれば別の問題が生じます。
        </p>
        <div className="space-y-4">
          {fertilizerItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          樹種ごとの手入れの負担の違いは
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが容易な庭木のおすすめ
          </Link>
          、年間の作業計画は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="soil-dont" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          行ってはいけない施肥方法
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          良かれと思って行ったことが、そのまま負担になる場面があります。次の四点を押さえておけば、大きく誤ることはありません。
        </p>
        <div className="space-y-4">
          {dontItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          庭で出た枝葉や刈った草の扱いは
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          、落ち葉を庭で活用する場合の条件は
          <Link href="/guide/fallen-leaves/" className="text-primary underline underline-offset-2 mx-1">
            落ち葉が多い庭の手入れ
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="soil-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/drainage/", label: "庭の水はけが悪いときの原因と対処" },
            { href: "/guide/pest-disease/", label: "庭木の害虫と病気の見分け方" },
            { href: "/guide/tree-roots/", label: "庭木の根が塀・舗装・排水に影響しているとき" },
            { href: "/guide/summer-heat/", label: "夏の高温で庭木が傷むとき" },
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
          原因が土なのか、水なのか、根なのか、切り分けがつかない場合は、状態を伝えて専門家に確認を依頼してください。
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
