import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/soil-fertilizer/";
const UPDATED_LABEL = "2026年9月30日";
const UPDATED_ISO = "2026-09-30";
const TITLE = "庭の土と肥料｜土を疑う前の切り分けと、土壌改良・施肥の考え方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "木の元気がないとき、原因が土であるとは限りません。先に切り分けること、土のほうに原因があるときのサイン、踏み固めと根の呼吸、植える前にしかできない改良とあとからできる改良、肥料が要る場合と要らない場合、やってはいけない与え方を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "土のサインの見分け方、土壌改良の考え方、肥料が要る場合と要らない場合を整理しました。",
  },
};

const toc = [
  { id: "soil-cause", label: "土を疑う前に切り分けること" },
  { id: "soil-sign", label: "土のほうに原因があるときのサイン" },
  { id: "soil-compaction", label: "踏み固めが起きている場所と、根の呼吸" },
  { id: "soil-improve", label: "植える前にしかできない改良と、あとからできる改良" },
  { id: "soil-fertilizer", label: "肥料は足りないときに足すもの" },
  { id: "soil-dont", label: "やってはいけない与え方" },
  { id: "soil-faq", label: "よくある質問" },
];

const otherCauses = [
  {
    h: "水の量と、届いている深さ",
    b: "元気がない木を見て最初に思い浮かぶのが水です。ただし、足りていないのか、多すぎるのかは症状が似ることがあります。乾いているのに与えていない、逆に水が引かない場所に植わっていて根が常に濡れている。どちらも葉の色が抜け、勢いが落ちます。表面だけ湿らせる与え方を続けている場合も、根のある深さには届いていません。土を入れ替える前に、ここを確かめます。",
  },
  {
    h: "日の当たり方が、植えたときから変わっていないか",
    b: "隣に建物が建った、こちらの別の木が育って影を作るようになった、逆に大きな木を切って急に日が当たるようになった。植えた当時と条件が変わると、同じ場所でも合わなくなります。この場合、土に何を入れても解決しません。日照の条件から選ぶ考え方は、日陰の庭木のページで扱っています。",
  },
  {
    h: "病気や虫が付いていないか",
    b: "葉に斑点が出る、白い付着物がある、葉が食われている、幹に穴と木くずがある。こうした症状があるなら、原因は土ではありません。肥料を与えても回復しないどころか、新しく出た柔らかい芽に虫が集まることがあります。見分け方は害虫と病気のページにまとめています。",
  },
  {
    h: "根そのものが傷んでいないか",
    b: "近くで工事があった、駐車場を作った、地面を掘った、鉢の中で根が回りきっている。根が切られたり回りきったりしていると、地上部だけを見ても原因は分かりません。根元が不自然に盛り上がっている、ぐらつく、幹の際に隙間があるといった場合は、土の質より根の状態を疑う場面です。",
  },
];

const soilSigns = [
  {
    h: "水をかけても、その場に溜まって染み込まない",
    b: "水が土に入らず、表面を流れていくか、水たまりになってしばらく残る。これは土が締まっているか、表面が固まっているサインです。乾ききった土が水をはじく状態も同じように見えますが、こちらは繰り返し少量ずつかければ入るようになります。何度かけても変わらないなら、締まっているほうです。",
  },
  {
    h: "手で押しても、棒を刺しても入っていかない",
    b: "分かりやすい確かめ方は、細い棒や移植ごてを地面に差してみることです。すっと入る場所と、途中で止まる場所を比べます。庭の中で差さる深さが場所によって大きく違うなら、その差が原因を示しています。雨のあと、少し湿っているときに確かめると差が出ます。",
  },
  {
    h: "常に湿っていて、匂いがする",
    b: "いつも湿っていて、土をかき混ぜたときに嫌な匂いがする場合は、水が抜けずに空気が入っていない状態です。根は水だけでなく空気も必要とするため、この状態が続くと根のほうから傷みます。水はけそのものの対処は、水はけのページで扱っています。",
  },
  {
    h: "地面に苔が広がる、コケや藻で滑る",
    b: "日陰であることと、水が抜けにくいことが重なると出やすくなります。それ自体が害ではありませんが、その場所の条件を示しています。通路に出ている場合は滑るため、別の問題にもなります。",
  },
  {
    h: "植えたものが、どれも同じように伸び悩む",
    b: "一本だけ調子が悪いなら、その木の問題である可能性が高い。同じ場所に植えたものが種類を問わず伸びない、植え替えても同じことが起きる。この場合は場所の条件、つまり土や水のほうを疑う番になります。",
  },
];

const compactionItems = [
  {
    h: "踏み固めは、決まった場所に起きる",
    b: "庭全体が固まることは多くありません。固くなるのは、人が通る線と、物が置かれていた場所です。物置の跡、駐車していた場所、洗濯物を干しに行く動線、水道の蛇口までの道。木の足元がちょうどその線上にある場合、上の枝をいくら手入れしても状態は戻りません。",
  },
  {
    h: "工事のあとは、庭全体で起きることがある",
    b: "家を建てたとき、外構をやり直したとき、重い機械や資材が入ります。そのときに締まった土は、表面を耕しても下のほうが残ります。新しく植えたものが何年も伸びない、雨のあと水が長く残るようになった。心当たりがあるなら、この線を疑います。",
  },
  {
    h: "固い土では、根が呼吸できない",
    b: "根は水と養分だけでなく、土の隙間にある空気も必要とします。締まった土は隙間が潰れているため、水が入らず、空気も入りません。その結果、根は浅いところに留まり、乾きにも風にも弱くなります。土が固い場所の木が乾燥に弱いのは、深く入れていないからです。",
  },
  {
    h: "固さそのものより、踏み続けていることが問題",
    b: "一度ほぐしても、同じ場所を毎日歩いていれば戻ります。根元まわりを歩かなくて済むように通り道を変える、飛び石や敷材で荷重を分ける、木の足元を覆って直接踏まないようにする。対処は土をいじることより、使い方を変えることのほうが効きます。",
  },
];

const improveItems = [
  {
    h: "植える前にしかできないこと",
    b: "深いところまで耕す、土を入れ替える、下に溜まる水の逃げ道を作る、盛って高さを上げる。これらは根が入ってからでは手を出せません。植えるときにここを省くと、あとから取り返すのが難しくなります。これから植えるなら、木を選ぶ前に場所の条件を確かめる順番です。",
  },
  {
    h: "植えたあとにできること",
    b: "表面を覆う、上から有機物を足す、踏まれないようにする、水の与え方を変える。範囲は限られますが、続けることで変わります。時間はかかります。植わっている木の足元で大きく掘り返すのは、根を切ることになるため避けます。",
  },
  {
    h: "根の広がりを踏まえた範囲で手を入れる",
    b: "根は幹のすぐ近くだけにあるわけではなく、枝が広がっている外側あたりまで伸びています。足元だけを手入れしても届かず、逆に離れた場所を深く掘れば根を切ります。手を入れる範囲と深さは、この広がりを前提に決めます。根の広がり方は、根と構造物のページで扱っています。",
  },
  {
    h: "堆肥や腐葉土を入れる意味は、栄養より構造",
    b: "有機物を入れる目的は、養分を足すこと以上に、土の粒のまとまり方を変えることにあります。隙間ができれば水が入り、空気も入り、水持ちと水はけが同時に良くなる方向へ働きます。効果は一度で出るものではなく、繰り返して変わっていくものです。植わっている木の足元では、掘り込まずに上から足して、少しずつ下へ入っていくのを待つ形になります。",
  },
];

const fertilizerItems = [
  {
    h: "足りているところに足しても、良いことは起きない",
    b: "肥料は、不足しているものを補うためのものです。足りている状態で足すと、伸びすぎた柔らかい枝が増え、その柔らかい芽に虫が集まりやすくなります。徒長した枝は風にも弱く、翌年の剪定の量も増えます。元気がないから肥料、という反射で与える前に、原因の切り分けが先に来ます。",
  },
  {
    h: "地植えと鉢では、必要度がまったく違う",
    b: "鉢は土の量が限られ、水やりのたびに流れ出ていくため、補う前提で管理します。地植えは根が広い範囲から集められるうえ、落ち葉や周りの有機物が分解されて戻る循環があります。庭に植わって年数の経った木は、何も与えていなくても問題なく育っていることが普通です。",
  },
  {
    h: "与えるなら、時期を外さない",
    b: "考え方としては、動いていない時期に与えて後の成長に備えるか、成長している時期に足りない分を補うか、という二つに分かれます。逆に、これから休む時期に入る直前に与えると、中途半端に芽が動いて寒さで傷むことがあります。樹種によって動く時期が違うため、木に合わせて決めます。年間の作業の組み立ては、メンテナンスカレンダーで扱っています。",
  },
  {
    h: "花や実を付けさせたい場合と、木を保ちたい場合は別",
    b: "花木や果樹で花付き・実付きを目的にする場合と、庭木の状態を保ちたい場合では、考え方が変わります。前者は目的があって与えるもので、後者は不足がなければ与えないのが基本です。同じ「肥料をやる」という言葉でも、目的が違えば判断も変わります。",
  },
];

const dontItems = [
  {
    h: "幹に密着させて盛らない",
    b: "肥料でも、土でも、覆いの材料でも同じです。幹の際に寄せて盛ると、幹の根元が常に湿った状態になり、そこから傷みます。根元から少し離し、幹の付け根が見えている状態を保ちます。土を足して植え際を埋めてしまうのも、同じ理由で避ける場面です。",
  },
  {
    h: "分解しきっていない有機物を、根に直接触れさせない",
    b: "刈った草、生の枝葉、分解の途中のもの。これらを根に接するように埋めると、分解の過程で熱が出たり、根に障害が出たりします。使うなら分解が進んだものを、地面の上に敷く形で。生のまま土に混ぜ込む使い方は避けます。庭で出たものの扱いは、処分のページで扱っています。",
  },
  {
    h: "一度に大量に与えない",
    b: "多く与えれば早く効くわけではありません。濃度が高くなった状態は根を傷めます。特に、乾いているときに与えると影響が出やすくなります。与える場合は少なく、離して、乾ききっていない状態で。回復させたい木ほど、この順序を崩さないほうが安全です。",
  },
  {
    h: "弱っている木に、いきなり与えない",
    b: "根が傷んでいる木や、移植したばかりの木は、養分を受け取る側の機能が落ちています。そこへ与えても吸えず、負担になるだけです。先にやるのは、水の届き方を整えること、直射や風から守ること、踏まれないようにすること。与えるかどうかは、木が動き出してから判断します。",
  },
];

const faqs = [
  {
    q: "木に元気がありません。肥料を与えれば回復しますか。",
    a: "肥料で回復するのは、不足していた場合だけです。水の量や届く深さ、日の当たり方の変化、病気や虫、根が傷んでいないか。この四つを先に切り分けてください。特に、病気や虫が付いている状態で与えると、新しく出た柔らかい芽に虫が集まることがあります。根が傷んでいる木や移植したばかりの木も、吸える状態にないため、与えるのは動き出してからにします。",
  },
  {
    q: "土が固いかどうかは、どう確かめればよいですか。",
    a: "細い棒や移植ごてを地面に差して、入っていく深さを庭の何か所かで比べてください。すっと入る場所と途中で止まる場所の差が出ます。雨のあと、少し湿っているときに確かめると分かりやすくなります。あわせて、水をかけたときに染み込まずに溜まるかどうかも見ます。人が通る線や物を置いていた場所だけが固いのはよくあることで、その線上に木の足元があるかどうかが判断の分かれ目になります。",
  },
  {
    q: "すでに植えてある木の足元を、掘り返して土を入れ替えてもよいですか。",
    a: "避けたほうがよい場面です。根は枝が広がっている外側あたりまで伸びているため、足元を深く掘り返すと根を切ることになります。植えたあとにできるのは、上から有機物を足す、表面を覆う、踏まれないようにする、水の与え方を変えるといった範囲です。時間はかかりますが、根を傷めずに進められます。深い改良や土の入れ替えは、植える前にしかできない作業として考えてください。",
  },
  {
    q: "落ち葉や刈った草を、そのまま土に混ぜてもよいですか。",
    a: "分解しきっていないものを根に触れるように混ぜ込むのは避けてください。分解の過程で熱が出たり、根に障害が出たりします。使うなら、分解が進んだものを地面の上に敷く形にします。また、斑点や白い付着物が出ていた葉、虫の食害が目立った葉は、敷いたり積んだりする対象から外します。翌年、同じ木の足元に戻ることになります。",
  },
  {
    q: "水はけが悪い土は、砂を混ぜれば改善しますか。",
    a: "単純にそうなるとは限りません。水が抜けない原因は、土の質だけでなく、下にある層、地面の高低、水の集まり方など複数あります。原因を確かめずに材料を足すと、かえって締まることもあります。まず、どこに水が溜まっているか、どこから来ているかを見てください。水はけそのものの原因の切り分けと対処は、水はけのページで扱っています。",
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
          "土のサインの見分け方、踏み固めと根の呼吸、植える前とあとの改良の違い、肥料が要る場合と要らない場合を整理しました。",
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
          庭の木に元気がないと、土が悪いのではないか、肥料が足りないのではないか、という順に考えが進みがちです。ところが実際には、原因が土でないことのほうが多く、肥料を与えたせいで状態が悪くなることもあります。土と肥料は、効きどころを外すと手間だけがかかる部分です。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          このページでは、土を疑う前に切り分けること、土のほうに原因があるときのサイン、踏み固めと根の呼吸、植える前にしかできない改良とあとからできる改良の違い、そして肥料が要る場合と要らない場合を整理します。商品の指定や与える量の数字は扱いません。判断の順番の話です。
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
          土を疑う前に切り分けること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          葉の色が悪い、枝が伸びない、花が減った。同じ見た目でも、原因は四方向に分かれます。土に手を入れるのは、ここを一通り見てからです。
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
          水の与え方と届く深さは
          <Link href="/guide/summer-heat/" className="text-primary underline underline-offset-2 mx-1">
            夏の高温で庭木が傷むとき
          </Link>
          、症状から原因を絞る方法は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          、日照の条件から選ぶ考え方は
          <Link href="/plant/shade/" className="text-primary underline underline-offset-2 mx-1">
            日陰に強い庭木おすすめ
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="soil-sign" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          土のほうに原因があるときのサイン
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          土は見た目では判断しにくい相手です。色や見た目より、水と空気の入り方から読み取ります。
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
          で扱っています。土の側だけを直しても、水の集まり方が変わらなければ元に戻ります。
        </p>
      </section>

      <section id="soil-compaction" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          踏み固めが起きている場所と、根の呼吸
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          土が固いという状態は、多くの場合、上から荷重がかかり続けた結果です。土の質の問題ではなく、使い方の結果として起きています。
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
          植える前にしかできない改良と、あとからできる改良
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          土壌改良という言葉は幅が広く、植える前と植えたあとでは、できることがまったく違います。この線を引いておくと、無理なことに手を出さずに済みます。
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
          、これから植える場所を決めるときの考え方は
          <Link href="/plant/flower-bed/" className="text-primary underline underline-offset-2 mx-1">
            花壇の作り方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="soil-fertilizer" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          肥料は足りないときに足すもの
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          肥料は、与えれば育つものではありません。足りていないものを補う道具であり、足りているところに足せば別の問題が出ます。
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
          樹種ごとに手のかかり方が違う点は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが楽な庭木おすすめ
          </Link>
          、一年の作業の組み立ては
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="soil-dont" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          やってはいけない与え方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          良かれと思ってやったことが、そのまま負担になる場面があります。四つだけ押さえておけば、大きく外すことはありません。
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
          、落ち葉を庭で使う場合の条件は
          <Link href="/guide/fallen-leaves/" className="text-primary underline underline-offset-2 mx-1">
            落ち葉が多い庭の手入れ
          </Link>
          で扱っています。
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
          あわせて読みたい
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
          原因が土なのか、水なのか、根なのか。切り分けが付かないときは、状態を伝えて見てもらう対象です。
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
