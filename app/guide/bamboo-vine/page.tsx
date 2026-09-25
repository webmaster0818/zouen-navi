import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/bamboo-vine/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "庭に広がった竹・笹・つる植物｜地下茎とつるの止め方";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "刈っても翌年また出てくる竹や笹、切っても伸び直すつる。厄介なのは、生えている場所に本体がないからです。地下茎の広がり方、つるを外す順番、やると悪化すること、業者に伝える内容を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "地下茎で広がる竹・笹と、巻きついて伸びるつる植物への対処の順番を整理しました。",
  },
};

const toc = [
  { id: "bv-body", label: "厄介なのは、生えている場所に本体がないから" },
  { id: "bv-bamboo", label: "竹・笹が広がるしくみと止め方" },
  { id: "bv-vine", label: "つる植物は「巻きついた先」で分けて考える" },
  { id: "bv-untangle", label: "木にからんだつるを外すとき" },
  { id: "bv-worse", label: "やると悪化すること" },
  { id: "bv-ask", label: "業者に相談するときに伝えること" },
  { id: "bv-faq", label: "よくある質問" },
];

const bambooSteps = [
  {
    h: "どこまで伸びているかを確かめる",
    b: "新しく出てきた場所を地図のように記録すると、広がりの向きが見えます。去年はなかった場所に出ているなら、その方向へ地下茎が伸びています。元の株からかなり離れた場所に出ることがあるため、「自分の庭に竹を植えた覚えがない」という状況も起こります。",
  },
  {
    h: "出てきたものは、早い段階で止める",
    b: "地上に出たばかりの柔らかい段階なら、折る・切るといった対処が比較的容易です。硬くなってからでは道具が要り、手間も増えます。出るたびに早く止め続けると、地下の側も消耗していきます。一度で終わる作業ではなく、続けることで効く方法です。",
  },
  {
    h: "地下に仕切りを入れる",
    b: "広がりを物理的に止める方法です。地下茎が通る深さより深く、隙間なく板状のものを入れます。浅い、切れ目がある、下を回れる、のいずれかがあると効きません。掘る作業が伴うため、配管や配線の位置を確認してから行う必要があります。",
  },
  {
    h: "元が自分の敷地にない場合",
    b: "隣地や、道路の向こう、放置されている土地から入ってきていることがあります。この場合、自分の庭の中だけで対処しても入り続けます。仕切りを入れて入口を塞ぐか、元のある側と話をするかの判断になります。地面の下から来ているものの扱いは、越境した枝とは考え方が異なります。",
  },
];

const vineTypes = [
  {
    h: "建物や塀に張り付いているもの",
    b: "壁面に吸盤状のものや細い根で貼り付く種類があります。引き剥がすと、取り付いていた部分が壁に残ったり、塗装や目地を持っていったりします。根元を断ってから枯れるのを待ち、もろくなってから外すほうが、傷が少なくて済みます。",
  },
  {
    h: "樹木に巻きついているもの",
    b: "幹に巻き付いて締め付ける種類と、枝葉の上に覆いかぶさって光を奪う種類があります。どちらも木の側が弱ります。上まで伸びている場合、高いところの作業になるため、自分で引っ張ると枝ごと落ちてくることがあります。",
  },
  {
    h: "地面を覆って広がるもの",
    b: "地表を這いながら、節から根を下ろして増えていきます。手で剥がすように取れますが、節の根が残ればそこから再開します。面で広がっているため、範囲を決めて端から進めるほうが確実です。",
  },
  {
    h: "根や塊が残ると戻るもの",
    b: "地中に太い根や塊を作る種類があります。地上部を取り除いても、それが残っていれば翌年出てきます。「取ったのに戻る」という場合、地中に残っている可能性を疑います。",
  },
];

const untangleSteps = [
  {
    h: "まず根元を断つ",
    b: "上のほうから引っ張るのではなく、地面に近い位置でつるを切り、水の通り道を断ちます。これだけで上の部分は枯れていきます。根元がどこにあるか分からない場合は、幹に沿って下までたどって探します。",
  },
  {
    h: "すぐに引き剥がさない",
    b: "生きているつるは強く、無理に引くと樹皮ごと剥がれます。傷んだ樹皮は、後から枯れ込みの入口になります。枯れてもろくなってから外すほうが、木への負担が少なくて済みます。",
  },
  {
    h: "高いところに残さない",
    b: "枯れたつるが上のほうに残ると、風で落ちてきたり、枝に引っかかったまま重さになったりします。手の届かない高さのものは、無理に脚立で届かせようとせず、相談する対象です。",
  },
  {
    h: "外したあとの跡を見る",
    b: "つるが巻いていた部分に、食い込んだ跡が残ることがあります。深く締め付けられていた場合、その上の枝が弱っていることがあります。外して終わりではなく、木の側の状態を確認します。",
  },
];

const makeWorse = [
  {
    h: "地上部だけを刈って終える",
    b: "見た目はきれいになりますが、地下や根元は無傷です。しかも刈られたことで、残った部分がより多くの芽を出すことがあります。一回で終わらせるつもりで刈るより、出るたびに止め続ける前提で計画するほうが結果につながります。",
  },
  {
    h: "掘り返して、細かく切ってしまう",
    b: "地下茎や地中の塊は、切れた断片からも再生することがあります。掘るのであれば、断片を残さず取り切ることが前提です。中途半端に掘って切り刻むと、出てくる場所が増えるという結果になりかねません。",
  },
  {
    h: "土ごとよその場所へ移す",
    b: "掘り上げた土を庭の別の場所や、植木鉢、他人の土地へ運ぶと、そこで新しく広がり始めることがあります。掘ったものの行き先は、処分として扱ってください。",
  },
  {
    h: "覆っただけで安心する",
    b: "地面を覆う資材は、種から出てくるものには効きますが、地下を横に走る茎は端から回り込みます。覆う対処だけで竹や笹を止められるとは考えないほうが安全です。",
  },
];

const askItems = [
  {
    h: "どこから出ているか",
    b: "自分の敷地の中に元があるのか、隣地や道路の向こうから入ってきているのか。ここで作業の範囲も、できることも変わります。分からない場合は、出ている場所の写真を複数の角度から撮って渡します。",
  },
  {
    h: "いつからか、広がり方はどうか",
    b: "去年からなのか、何年も前からなのか。出る場所が毎年増えているのか、同じ場所なのか。広がりの速さは、地下でどれだけ進んでいるかの手がかりになります。",
  },
  {
    h: "地中に何が通っているか",
    b: "掘る作業になる可能性があるため、配管、配線、浄化槽、水道の管の位置を伝えます。分かる範囲でかまいません。図面が残っていれば、それを見せるのが確実です。",
  },
  {
    h: "根ごと取りたいのか、抑えたいのか",
    b: "完全に取り除くのか、広がらない状態を保てればよいのか。目的によって工事の規模が大きく変わります。予算や条件によっては、抑える方向で組むという選択もあります。",
  },
];

const faqs = [
  {
    q: "隣の敷地から竹が入ってきています。自分で切ってよいですか。",
    a: "自分の敷地に出ている部分を切ること自体は、通常は自分の判断で行えます。ただし、地面の下を通ってきている以上、切っても入り続けます。根本的に止めるには、地下に仕切りを入れて入口を塞ぐか、元のある側と話をするかになります。隣地にまたがる作業や、隣の土地に入る必要がある場合は、枝の越境とは扱いが異なるため、先に確認したうえで進めてください。",
  },
  {
    q: "竹は薬剤で枯らせますか。",
    a: "薬剤を使う対処はありますが、地下でつながっている範囲、周囲に残したい植物があるか、地面の傾きや水の行き先といった条件で、使えるかどうかが変わります。また、製品ごとに使える場所と方法が決められています。周囲に木や芝がある庭では、意図しない範囲まで影響することがあるため、自分で判断せず、現物を見てもらってから決めてください。",
  },
  {
    q: "つるを切ったのに、また同じ場所から伸びてきます。",
    a: "根元が生きているか、地中に塊が残っている可能性があります。つる植物は、地上に見えている場所と根元が離れていることが多く、見えている部分を切っても本体が残っていれば伸び直します。幹や壁に沿って地面までたどり、どこから立ち上がっているのかを確かめるところから始めてください。",
  },
  {
    q: "木に巻きついたつるを放っておくとどうなりますか。",
    a: "幹を締め付ける種類では、太るにつれて食い込み、その上の部分が弱ります。枝葉の上に覆いかぶさる種類では、光を奪われて木の側が衰えます。どちらの場合も、木そのものの寿命に関わります。上まで伸びているものを自分で引っ張ると枝ごと落ちてくることがあるため、高さのあるものは相談してください。",
  },
  {
    q: "一度取り除けば、もう出てこなくなりますか。",
    a: "地下茎や地中の塊を残さず取り切れていれば、出てこなくなります。ただし、断片が残っているとそこから再生することがあり、敷地の外から入ってきている場合は取り切ること自体ができません。「一回で終わらせる」より「出たら早い段階で止め続ける」ほうが、結果として手間が少なくなる場合があります。",
  },
];

export default function BambooVinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "竹・笹の地下茎とつる植物の広がり方、止め方、やると悪化する対処を整理しました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "竹・笹・つる植物" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          刈っても、抜いても、翌年また同じ場所から出てくる。庭の植物の中で、竹や笹、そしてつる植物は、この繰り返しになりやすい相手です。手を抜いているわけでも、やり方が雑なわけでもありません。地上に出ている部分と、本体のある場所が違うからです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          このページでは、竹・笹が広がるしくみと止め方、つる植物をどこから断つのか、そしてやると悪化する対処を整理します。
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

      <section id="bv-body" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          厄介なのは、生えている場所に本体がないから
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一年で枯れる草なら、地上部を取れば終わります。竹や笹は違います。地面の下に横向きに走る茎があり、地上に出ているものはそこから立ち上がった一部です。一本切っても、本体は無傷のまま残ります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          つる植物も構造は似ています。目に付くのは壁や木に絡んだ部分ですが、そこから何メートルも離れた地面に根元があることがあります。絡んだ部分だけを引き剥がしても、根元が生きていれば伸び直します。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            どちらも、手を付ける前に「本体はどこか」を探すのが先です。見えている部分から対処を始めると、時間だけがかかります。
          </p>
        </div>
      </section>

      <section id="bv-bamboo" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          竹・笹が広がるしくみと止め方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          竹と笹は、地面の下を横に走る茎で領域を広げます。地上に何本出ているかより、下がどこまで行っているかが問題になります。
        </p>
        <ol className="space-y-4">
          {bambooSteps.map((x, i) => (
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
          境界をまたぐ枝と根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で整理しています。
        </p>
      </section>

      <section id="bv-vine" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          つる植物は「巻きついた先」で分けて考える
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          つると一口に言っても、どこに取り付いているかで問題の中身が変わります。
        </p>
        <div className="space-y-4">
          {vineTypes.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="bv-untangle" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          木にからんだつるを外すとき
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          順番を間違えると、つるではなく木のほうを傷めます。
        </p>
        <ol className="space-y-4">
          {untangleSteps.map((x, i) => (
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
          幹や枝の症状の見方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気の見分け方
          </Link>
          、高いところの作業で触ってはいけない状態は
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="bv-worse" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          やると悪化すること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          よかれと思ってやったことが、翌年の量を増やす場合があります。
        </p>
        <div className="space-y-4">
          {makeWorse.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          覆う対処が効く場面と効かない場面の切り分けは
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策の選び分け
          </Link>
          で整理しています。掘り上げたものの出し方は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          を参照してください。
        </p>
      </section>

      <section id="bv-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者に相談するときに伝えること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見た目の範囲だけでは、必要な作業が決まりません。次の四つを伝えると、話が具体的になります。
        </p>
        <ol className="space-y-4">
          {askItems.map((x, i) => (
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
          根と構造物の関係は
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根が塀・舗装・排水に影響しているとき
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="bv-faq" className="scroll-mt-20 mb-12">
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
            { href: "/guide/tree-roots/", label: "庭木の根が塀・舗装・排水に影響しているとき" },
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
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
          掘る作業になる場合は、地中に何が通っているかの確認が先に要ります。状態を伝えて相談してみてください。
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
