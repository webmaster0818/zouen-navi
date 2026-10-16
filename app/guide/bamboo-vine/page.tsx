import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/bamboo-vine/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "庭に広がった竹・笹・つる植物｜地下茎とつるの対処方法";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "刈っても翌年再び生えてくる竹や笹、切っても再び伸びるつる植物は、生えている場所に本体がないことが対処を難しくしています。地下茎の広がり方、つるを外す順序、状況を悪化させる対処、業者に伝える内容を整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "地下茎で広がる竹・笹と、巻きついて伸びるつる植物への対処の順序を整理しています。",
  },
};

const toc = [
  { id: "bv-body", label: "対処が難しい原因は、生えている場所に本体がないことです" },
  { id: "bv-bamboo", label: "竹・笹が広がる仕組みと対処方法" },
  { id: "bv-vine", label: "つる植物は取り付いている対象によって分けて考える" },
  { id: "bv-untangle", label: "木に絡んだつるを外す際の手順" },
  { id: "bv-worse", label: "状況を悪化させる対処" },
  { id: "bv-ask", label: "業者に相談する際に伝える事項" },
  { id: "bv-faq", label: "よくある質問" },
];

const bambooSteps = [
  {
    h: "広がっている範囲を確認する",
    b: "新たに生えてきた場所を地図のように記録すると、広がりの方向が分かります。前年にはなかった場所に生えている場合は、その方向へ地下茎が伸びています。元の株からかなり離れた場所に生えることがあるため、「自宅の庭に竹を植えた覚えがない」という状況も起こります。",
  },
  {
    h: "生えてきたものは早い段階で対処する",
    b: "地上に出たばかりの柔らかい段階であれば、折る・切るといった対処が比較的容易です。硬くなってからでは道具が必要となり、手間も増えます。生えるたびに早めに対処し続けると、地下の茎も次第に衰えていきます。一度で終わる作業ではなく、継続することで効果が現れる方法です。",
  },
  {
    h: "地下に仕切りを設置する",
    b: "広がりを物理的に止める方法です。地下茎が通る深さより深く、隙間なく板状の資材を埋設します。深さが不足している、切れ目がある、下を回り込めるといった状態があると効果がありません。掘削を伴うため、配管や配線の位置を確認してから行う必要があります。",
  },
  {
    h: "発生源が自分の敷地にない場合",
    b: "隣地や道路の向こう、管理されていない土地から侵入していることがあります。この場合、自分の庭の中だけで対処しても侵入が続きます。仕切りを設置して侵入経路を塞ぐか、発生源の所有者と協議するかを判断することになります。地中から侵入しているものの扱いは、越境した枝とは考え方が異なります。",
  },
];

const vineTypes = [
  {
    h: "建物や塀に張り付いているもの",
    b: "壁面に吸盤状の器官や細い根で張り付く種類があります。引き剥がすと、取り付いていた部分が壁に残ったり、塗装や目地を損傷したりします。根元を切断してから枯れるのを待ち、もろくなってから外すほうが、損傷を少なくできます。",
  },
  {
    h: "樹木に巻きついているもの",
    b: "幹に巻き付いて締め付ける種類と、枝葉の上に覆いかぶさって光を遮る種類があります。いずれも木が弱ります。上部まで伸びている場合は高所作業となるため、自分で引っ張ると枝ごと落下することがあります。",
  },
  {
    h: "地面を覆って広がるもの",
    b: "地表を這いながら、節から根を下ろして増えていきます。手で剥がすように除去できますが、節の根が残るとそこから再び広がります。面で広がっているため、範囲を決めて端から進めるほうが確実です。",
  },
  {
    h: "根や塊が残ると再生するもの",
    b: "地中に太い根や塊を形成する種類があります。地上部を除去しても、それが残っていれば翌年再び生えてきます。「除去したのに再生する」場合は、地中に残っている可能性を考慮します。",
  },
];

const untangleSteps = [
  {
    h: "最初に根元を切断する",
    b: "上部から引っ張るのではなく、地面に近い位置でつるを切り、水分の通り道を断ちます。これだけで上部は枯れていきます。根元の位置が分からない場合は、幹に沿って下までたどって探します。",
  },
  {
    h: "すぐに引き剥がさない",
    b: "生きているつるは強く、無理に引くと樹皮ごと剥がれます。傷んだ樹皮は、後に枯れ込みの原因になります。枯れてもろくなってから外すほうが、木への負担が少なく済みます。",
  },
  {
    h: "高所に残さない",
    b: "枯れたつるが上部に残ると、風で落下したり、枝に引っかかったまま荷重となったりします。手の届かない高さのものは、無理に脚立で作業しようとせず、業者に相談する対象です。",
  },
  {
    h: "除去後の跡を確認する",
    b: "つるが巻いていた部分に、食い込んだ跡が残ることがあります。強く締め付けられていた場合、その上の枝が弱っていることがあります。除去して終わりではなく、木の状態を確認します。",
  },
];

const makeWorse = [
  {
    h: "地上部のみを刈って終える",
    b: "外観は整いますが、地下や根元は無傷のままです。さらに、刈られたことで残った部分がより多くの芽を出すことがあります。一度で終わらせるつもりで刈るより、生えるたびに対処し続ける前提で計画するほうが効果的です。",
  },
  {
    h: "掘り返して細かく切断する",
    b: "地下茎や地中の塊は、切断された断片からも再生することがあります。掘り返す場合は、断片を残さずに除去することが前提です。中途半端に掘り返して細かく切断すると、生えてくる場所が増える結果になりかねません。",
  },
  {
    h: "土ごと別の場所へ移す",
    b: "掘り上げた土を庭の別の場所や植木鉢、他人の土地へ運ぶと、そこで新たに広がり始めることがあります。掘り上げたものは、処分として扱ってください。",
  },
  {
    h: "地面を覆うだけで対処を終える",
    b: "地面を覆う資材は、種から生えてくるものには効果がありますが、地下を横に伸びる茎は端から回り込みます。覆う対処のみで竹や笹を止められるとは考えないほうが安全です。",
  },
];

const askItems = [
  {
    h: "発生源の位置",
    b: "自分の敷地内に発生源があるのか、隣地や道路の向こうから侵入しているのかによって、作業の範囲も対処の方法も変わります。不明な場合は、生えている場所の写真を複数の角度から撮影して伝えます。",
  },
  {
    h: "発生時期と広がり方",
    b: "前年からなのか、数年前からなのか、生える場所が毎年増えているのか、同じ場所なのかを伝えます。広がりの速さは、地下でどの程度進行しているかの手がかりになります。",
  },
  {
    h: "地中の埋設物",
    b: "掘削作業となる可能性があるため、配管、配線、浄化槽、水道管の位置を伝えます。分かる範囲で構いません。図面が残っていれば、それを提示することが確実です。",
  },
  {
    h: "根まで除去したいのか、抑制したいのか",
    b: "完全に除去するのか、広がらない状態を維持できればよいのかによって、工事の規模が大きく変わります。予算や条件によっては、抑制する方向で計画するという選択肢もあります。",
  },
];

const faqs = [
  {
    q: "隣の敷地から竹が入ってきています。自分で切ってよいですか。",
    a: "自分の敷地に生えている部分を切ること自体は、通常は所有者の判断で行えます。ただし、地中を通って侵入している以上、切っても侵入は続きます。根本的に止めるには、地下に仕切りを設置して侵入経路を塞ぐか、発生源の所有者と協議することになります。隣地にまたがる作業や、隣地に立ち入る必要がある場合は、枝の越境とは扱いが異なるため、事前に確認したうえで進めてください。",
  },
  {
    q: "竹は薬剤で枯らせますか。",
    a: "薬剤を使用する方法はありますが、地下でつながっている範囲、周囲に残したい植物があるか、地面の傾斜や水の流れといった条件によって、使用の可否が変わります。また、製品ごとに使用できる場所と方法が定められています。周囲に樹木や芝がある庭では、意図しない範囲まで影響が及ぶことがあるため、自分で判断せず、現物を確認してもらってから決めてください。",
  },
  {
    q: "つるを切ったのに、また同じ場所から伸びてきます。",
    a: "根元が生きているか、地中に塊が残っている可能性があります。つる植物は、地上に見えている部分と根元が離れていることが多く、見えている部分を切っても本体が残っていれば再び伸びます。幹や壁に沿って地面までたどり、どこから立ち上がっているのかを確認することから始めてください。",
  },
  {
    q: "木に巻きついたつるを放っておくとどうなりますか。",
    a: "幹を締め付ける種類では、幹が太るにつれて食い込み、その上の部分が弱ります。枝葉の上に覆いかぶさる種類では、光を遮られて木が衰えます。いずれの場合も、木そのものの寿命に関わります。上部まで伸びているものを自分で引っ張ると枝ごと落下することがあるため、高さのあるものは業者にご相談ください。",
  },
  {
    q: "一度取り除けば、もう出てこなくなりますか。",
    a: "地下茎や地中の塊を残さず除去できていれば、生えてこなくなります。ただし、断片が残っているとそこから再生することがあり、敷地外から侵入している場合は除去しきること自体ができません。「一度で終わらせる」より「生えたら早い段階で対処し続ける」ほうが、結果として手間が少なくなる場合があります。",
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
          "竹・笹の地下茎とつる植物の広がり方、対処方法、状況を悪化させる対処を整理しています。",
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
          刈っても抜いても、翌年再び同じ場所から生えてくる。庭の植物の中で、竹や笹、つる植物は、このような状況になりやすい植物です。手入れが不十分なわけでも、方法が不適切なわけでもありません。地上に出ている部分と、本体のある場所が異なるためです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページでは、竹・笹が広がる仕組みと対処方法、つる植物をどこから切断するのか、状況を悪化させる対処を整理します。
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
          対処が難しい原因は、生えている場所に本体がないことです
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一年で枯れる草であれば、地上部を除去すれば終わります。竹や笹は異なります。地中に横向きに伸びる茎があり、地上に出ているものはそこから立ち上がった一部です。一本切っても、本体は無傷のまま残ります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          つる植物も構造は似ています。目に付くのは壁や木に絡んだ部分ですが、そこから数メートル離れた地面に根元があることがあります。絡んだ部分のみを引き剥がしても、根元が生きていれば再び伸びます。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            いずれも、作業に着手する前に「本体がどこにあるか」を探すことが先決です。見えている部分から対処を始めると、時間ばかりかかります。
          </p>
        </div>
      </section>

      <section id="bv-bamboo" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          竹・笹が広がる仕組みと対処方法
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          竹と笹は、地中を横に伸びる茎によって範囲を広げます。地上に何本出ているかより、地下がどこまで伸びているかが問題となります。
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
          境界を越える枝と根の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="bv-vine" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          つる植物は取り付いている対象によって分けて考える
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          つる植物といっても、どこに取り付いているかによって問題の内容が変わります。
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
          木に絡んだつるを外す際の手順
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手順を誤ると、つるではなく木を傷めることになります。
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
          、高所作業で注意すべき状態は
          <Link href="/guide/storm-care/" className="text-primary underline underline-offset-2 mx-1">
            台風・強風に備える庭木の点検
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="bv-worse" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          状況を悪化させる対処
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          良かれと思って行ったことが、翌年の発生量を増やす場合があります。
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
          覆う対処が効果を発揮する場面と発揮しない場面の区別は
          <Link href="/guide/weed-control/" className="text-primary underline underline-offset-2 mx-1">
            庭の雑草対策の選び方
          </Link>
          で解説しています。掘り上げたものの処分方法は
          <Link href="/guide/green-waste/" className="text-primary underline underline-offset-2 mx-1">
            剪定枝・刈った草の処分方法
          </Link>
          をご参照ください。
        </p>
      </section>

      <section id="bv-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者に相談する際に伝える事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          外見上の範囲だけでは、必要な作業は決まりません。次の四点を伝えると、相談が具体的になります。
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
          で解説しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/weed-control/", label: "庭の雑草対策の選び方" },
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
          掘削作業となる場合は、地中の埋設物の確認が先に必要です。状態を伝えて相談することをおすすめします。
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
