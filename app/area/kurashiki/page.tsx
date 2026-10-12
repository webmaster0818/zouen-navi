import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kurashiki/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "倉敷の造園・庭の手入れ業者の選び方｜前の住人の庭を引き継いだとき";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "中古住宅の購入、相続、転居で、知らない庭木や設備が残った庭を引き継いだとき。最初の一年でやること（何が植わっているかの把握、境界付近の木と危ない木の確認、前の持ち主や仲介への確認）、残す・減らすの判断を急がない理由、業者への最初の頼み方を整理し、倉敷で頼む場合の掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "前の住人が手入れしていた庭を引き継いだときに、最初の一年で何を確かめ、業者に何から頼むかを整理しました。",
  },
};

const toc = [
  { id: "kurashiki-unknown", label: "引き継いだ庭は「知らない」ところから始まる" },
  { id: "kurashiki-record", label: "最初の一年で、庭の中身を書き出す" },
  { id: "kurashiki-first", label: "先に見ておくのは、境界の近くと倒れたら困る木" },
  { id: "kurashiki-ask", label: "前の持ち主・仲介・家族に聞いておくこと" },
  { id: "kurashiki-wait", label: "残すか減らすかを、急いで決めない" },
  { id: "kurashiki-request", label: "業者への最初の頼み方" },
  { id: "kurashiki-pick", label: "この条件で見ておきたい3サービス" },
  { id: "kurashiki-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kurashiki-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kurashiki-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "townlife", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "庭木1本の剪定から年間管理まで扱う庭手入れ専門のチェーンで、完全自店舗施工を掲げています。最初に庭を見てもらった店舗がそのまま作業にも入る形なので、引き継いだ庭のことを一度説明すれば、その後の季節の手入れまで同じ相手に話がつながります。無料の明瞭見積もりで追加料金なしを掲げています。全国対応をうたう一方で、公式に列挙される対応都道府県は限られるため、対象かどうかは確認してください。運営は株式会社ガーデンメーカーです。",
  "townlife":
    "希望条件を入力すると、複数社から庭・外構のプランと見積もりを無料で取り寄せられます。一年見たうえで、庭の形そのものを変えると決めたときに、複数の案を並べて比べる段階で使えます。実際のプランと施工は提携会社によるため、届いた会社ごとに対応を見極めてください。「資料が届かない」という厳しい口コミもあります。運営はタウンライフ株式会社です。",
  "hikaku-biz":
    "発注側は利用無料で、造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分から事業者を探せます。引き継いだ庭には、植木だけでなく、古いフェンスや塀、敷石、排水まわりなど、前の住人が残した構造物があることが多く、それが植木の手入れとは別の区分の相談になる場合に候補になります。公式のクチコミは本文末尾が省略表示されており全文は確認できません。運営は株式会社ワンズマインドです。",
};

const recordItems = [
  {
    h: "庭の見取り図を一枚描いて、番号を振る",
    b: "上手な図である必要はありません。家と塀と通路の位置を描き、木や植え込み、石、物置、水栓などに番号を振っておきます。名前の分からない木も「3番の木」と呼べるようになると、写真を撮るときも、業者に相談するときも話が早くなります。",
  },
  {
    h: "同じ場所から、季節ごとに写真を撮る",
    b: "引き継いだのが冬なら、落葉樹は枯れ木に見えるかもしれません。春に芽吹くもの、夏に茂るもの、秋に実を付けるもの、地面から急に出てくる球根や宿根草。季節を一巡りして初めて、その庭に何があったのかが分かります。同じ位置から撮っておけば、伸び方も比べられます。",
  },
  {
    h: "花・実・葉の様子を、番号ごとに書き足す",
    b: "花が咲いた時期、実が付いたか、葉がどの時期に落ちたか。番号の横に一言ずつ書き足していくと、名前が分からなくても性質が見えてきます。木の名前は、写真を見せて業者や詳しい人に聞けば分かることも多いので、無理に自分で調べ切る必要はありません。",
  },
  {
    h: "困ったことも、日付と一緒に残す",
    b: "落ち葉が雨どいに詰まった、虫が大量に出た、枝が通路をふさいだ。困ったことが起きた時期と場所を書いておくと、その木に何をすればよいのか、何を急ぐべきなのかの手がかりになります。",
  },
];

const firstItems = [
  {
    h: "境界の近くにある木",
    b: "塀やフェンス沿い、隣家との境目の近くに植わっている木は、枝や根が敷地の外に出ていることがあります。引き継いだ時点ですでにはみ出していることもあり、前の住人と隣家とのあいだで何か話があったかどうかは、こちらからは見えません。まずは、どの木がどこまで外に出ているかを見ておきます。はみ出した枝や根の扱いについての法律上のルールは、別のガイドで扱っています。",
  },
  {
    h: "倒れたり折れたりすると困る木",
    b: "家や車、通路、電線の近くにある大きな木は、状態によっては強い風で枝が折れることがあります。葉が付かない枝が目立つ、幹が傾いている、根元に見慣れないキノコが出ている、幹に空洞がある、といった様子があれば、早めに専門家に見てもらう候補です。自分で判断して切るのではなく、見てもらうところまでを先に済ませます。",
  },
  {
    h: "建物や配管の近くにある木",
    b: "家の基礎や塀、排水のますの近くに大きな木があると、根が影響していることがあります。症状が出ていなければ急ぐ必要はありませんが、場所だけは見取り図に書いておきます。",
  },
  {
    h: "手を出すと危ないもの",
    b: "ハチの巣、毒を持つ毛虫、トゲの多い植物、崩れかけた石積みや古い支柱。引き継いだ庭では、どこに何があるかを知らないまま手を入れることになるので、草むしりの前に一度、庭をひと回り見ておきます。",
  },
];

const askItems = [
  {
    h: "出入りしていた植木屋や造園業者",
    b: "前の住人が定期的に頼んでいた相手が分かれば、その木をどう手入れしてきたかを聞けます。同じ相手に続けて頼むかどうかは別として、これまでの経緯を知るための手がかりになります。",
  },
  {
    h: "見えない設備の場所",
    b: "散水栓、地中の配管、庭の照明の配線、雨水の流れ道、埋めてある物。植え替えや掘る作業をする前に、どこに何が通っているかを知っておかないと、作業の途中で傷つけるおそれがあります。分からない場合は、分からないということを業者に伝えます。",
  },
  {
    h: "薬剤の使い方と、困っていたこと",
    b: "毎年消毒をしていた木があるか、虫や病気で困っていた木があるか、落ち葉や越境で隣家と話をしたことがあるか。前の住人にとっては当たり前のことでも、引き継ぐ側には大事な情報です。",
  },
  {
    h: "残していった物の扱い",
    b: "鉢植え、灯籠、庭石、物置、古い資材。引き継いだ物として扱ってよいのか、処分してよいのかを、売買や相続の手続きの中で確かめておきます。どこまでが引き継いだ範囲なのかは、受け取った書類や家族の話し合いで決まることなので、業者に頼む前にこちらで整理しておきます。",
  },
];

const waitItems = [
  {
    h: "一年見ないと、その木の役割が分からない",
    b: "冬に枯れ木に見えた木が、春に花を咲かせることがあります。夏の西日をさえぎっていた木、道路からの目隠しになっていた生け垣は、なくなって初めて役割に気づきます。季節を一巡りしてから決めれば、その木が庭の中で何をしていたかを見たうえで判断できます。",
  },
  {
    h: "大きな木は、切ったら戻らない",
    b: "時間をかけて育った木は、切ってしまえば元には戻せません。残すか減らすかで迷う木は、当面は危ないところだけ手を入れ、全体の判断は先に送るのが安全です。逆に、減らすと決めた場合の段階的な進め方は、庭じまいのガイドで扱っています。",
  },
  {
    h: "急いでよいのは、危ないところと、外に迷惑が出ているところ",
    b: "折れそうな枝、通路や道路をふさぐ枝、隣家に大きくはみ出した枝、ハチの巣。こうしたものは一年待たずに手を入れます。それ以外は、見取り図と写真がそろうまで待っても、たいてい大きな問題は起きません。",
  },
];

const requestItems = [
  {
    h: "最初の依頼は「見て回ってもらう」ことを中心にする",
    b: "引き継いだばかりの庭では、何を頼めばよいかがまだ分かりません。最初の依頼は、危ないところの対処に加えて、庭全体を見て回り、木の名前や状態、急いだほうがよい所を教えてもらうことを中心に置くと、その後の判断の材料がそろいます。現地を見てもらうことに費用がかかるかどうかは、問い合わせの時点で確かめてください。",
  },
  {
    h: "見取り図と写真を渡して、番号で話す",
    b: "番号を振った見取り図と写真を先に渡しておけば、「3番の木は残したいので形を整えるだけ」「7番は何の木か教えてほしい」と、木ごとに頼みたいことを分けて伝えられます。",
  },
  {
    h: "引き継いだ庭であることを、最初に伝える",
    b: "「この家に来たばかりで、前の住人がどう手入れしていたかが分からない」と最初に言っておくと、業者の側も、これまでの切り方の癖や、無理な剪定の跡がないかといった点まで見てくれる可能性が高くなります。分からないことを分からないと伝えるほうが、話が早く進みます。",
  },
  {
    h: "一度に全部を頼まない",
    b: "最初の一回で庭全体を作り替える見積もりまで取ると、まだ判断できない部分にまで決断を迫られます。初回は危ないところと、外に迷惑が出ているところに絞り、全体の手入れや作り替えは一年見てから相談するほうが、頼む内容がぶれません。",
  },
];

const checklist = [
  {
    h: "見取り図を描いて、木や設備に番号を振ったか",
    b: "名前の分からない木も番号で呼べるようにしておくと、相談のときに話が早くなります。",
  },
  {
    h: "境界の近くの木と、倒れたら困る木を確かめたか",
    b: "外へのはみ出しと、折れそうな枝や傾きを先に見ておきます。",
  },
  {
    h: "前の持ち主・仲介・家族に聞けることを聞いたか",
    b: "出入りしていた業者、見えない設備の場所、薬剤の使い方、残していった物の扱い。",
  },
  {
    h: "急ぐものと、一年見てから決めるものを分けたか",
    b: "危ないところと外に迷惑が出ているところだけを初回の対象にします。",
  },
  {
    h: "引き継いだ庭であることを、問い合わせで伝える準備ができているか",
    b: "見取り図と写真を添えて、分からないことは分からないと書きます。",
  },
];

const faqs = [
  {
    q: "引き継いだ庭の木を、すぐに全部切ってしまってもよいですか。",
    a: "自分の敷地の木をどうするかは持ち主が決めることですが、大きな木は一度切ると戻せません。冬に引き継いだ場合など、季節によってはその木が何の木なのか、どんな役割をしていたのかが見えていないこともあります。危ないところや外に迷惑が出ているところは早めに手を入れ、残すか減らすかの判断は季節を一巡りしてからにするのが、後で悔やまない進め方です。",
  },
  {
    q: "前の住人が頼んでいた植木屋に、そのまま頼むべきですか。",
    a: "そうする必要はありませんが、連絡先が分かれば、これまでの手入れの経緯を聞く相手としては貴重です。そのまま続けて頼むか、別の相手に替えるかは、話を聞いたうえで決めてかまいません。別の相手に頼む場合に、これまでの経緯をどう渡すかは金沢のページで扱っています。",
  },
  {
    q: "何の木か分からないものが多いのですが、業者に聞いてもよいですか。",
    a: "かまいません。最初の依頼のときに、木の名前や状態を教えてほしいと伝えておくと、見て回りながら説明してもらえることがあります。番号を振った見取り図と写真を先に渡しておくと、聞いたことを書き留めやすくなります。現地を見てもらうことに費用がかかるかどうかは、事前に確かめてください。",
  },
  {
    q: "隣の家に枝がはみ出していることに、引き継いでから気づきました。",
    a: "まずは、どの木がどこまで外に出ているかを確かめ、通路や隣家の建物に当たっているなど迷惑が出ている所から手を入れるのが順番です。枝や根が隣地にはみ出している場合の法律上のルールや、隣家との話の進め方は、造園ナビのガイド「隣家にはみ出した庭木の枝と根」で整理しています。",
  },
  {
    q: "倉敷市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、倉敷市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaKurashikiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "前の住人の庭を引き継いだときに、最初の一年で確かめることと、業者への最初の頼み方を整理しました。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "倉敷" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          中古の家を買った、親の家を相続した、転勤で庭付きの家に移った。そうして引き継いだ庭には、前の住人が植えた木や、何に使っていたのか分からない設備が残っています。自分で選んだ庭ではないので、どの木が大事なのか、何を急ぐべきなのかの手がかりがありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          倉敷にある家の庭を引き継いだ場合も同じです。このページでは、引き継いでからの最初の一年に何を確かめるか、先に見ておくべき木はどれか、前の持ち主や仲介に何を聞いておくか、そして業者に最初に何を頼むかを整理します。荒れた庭の状態から作業を見立てる話ではなく、知らない庭を知るところから始める話です。
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

      <section id="kurashiki-unknown" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          引き継いだ庭は「知らない」ところから始まる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自分で作った庭なら、どの木をいつ植えたか、どこに何が埋まっているかを覚えています。引き継いだ庭では、それが全部抜け落ちています。木の名前、これまでの切り方、毎年何に困っていたか、地面の下に何が通っているか。見た目は同じ庭でも、持ち主が替わった時点で、庭についての情報はほとんどゼロに戻ります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そのため、最初にやることは手入れではなく、知ることです。急いで手を入れると、残したかった木を切ってしまったり、見えない配管を傷つけたりといった、取り返しのつかない失敗につながります。一方で、危ない木や、すでに外に迷惑が出ている所は待てません。この二つを分けるのが、引き継いだ庭の最初の仕事です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            荒れた庭の状態から必要な作業を見立てる方法は
            <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2 mx-1">
              困りごとの切り分けと優先順位
            </Link>
            、頼む相手を替えるときに経緯を渡す方法は
            <Link href="/area/kanazawa/" className="text-primary underline underline-offset-2 mx-1">
              頼む先を替えるときの引き継ぎ
            </Link>
            で扱っています。このページは、それより前の「何があるのかを知る」段階を扱います。
          </p>
        </div>
      </section>

      <section id="kurashiki-record" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          最初の一年で、庭の中身を書き出す
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭は季節によって見え方が大きく変わります。引き継いだ時期の姿だけで判断せず、一年かけて庭の中身を書き出していきます。特別な道具は要りません。
        </p>
        <ol className="space-y-4">
          {recordItems.map((x, i) => (
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
          写真の撮り方そのものは
          <Link href="/area/funabashi/" className="text-primary underline underline-offset-2 mx-1">
            現地を見てもらう前に写真で伝える
          </Link>
          、季節ごとの手入れの目安は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="kurashiki-first" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          先に見ておくのは、境界の近くと倒れたら困る木
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一年待てるものと、待てないものがあります。待てないものは、たいてい庭の外に影響が出るものか、人や建物に危険が及ぶものです。
        </p>
        <div className="space-y-4">
          {firstItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          はみ出した枝や根の法律上の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          、根が建物や排水に影響しているかの見方は
          <Link href="/guide/tree-roots/" className="text-primary underline underline-offset-2 mx-1">
            庭木の根が塀・舗装・排水に影響しているとき
          </Link>
          、虫や病気の見分け方は
          <Link href="/guide/pest-disease/" className="text-primary underline underline-offset-2 mx-1">
            庭木の害虫と病気
          </Link>
          、ハチの巣の扱いは
          <Link href="/guide/garden-animals/" className="text-primary underline underline-offset-2 mx-1">
            庭に来る動物への対処
          </Link>
          のガイドにあります。
        </p>
      </section>

      <section id="kurashiki-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          前の持ち主・仲介・家族に聞いておくこと
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          中古住宅を買ったなら売主や仲介の不動産会社に、相続したなら家族や親族に、聞ける相手がいるうちに聞いておきます。引き渡しや手続きが終わってからでは、連絡が取りにくくなることがあります。近所の人が経緯を知っていることもあります。
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
          相続した家で、誰が決めて誰が費用を出すかがまだ決まっていない場合は
          <Link href="/area/niigata/" className="text-primary underline underline-offset-2 mx-1">
            誰が決めて誰が払うかの分担
          </Link>
          、離れて住む家族の家の庭を手配する場合は
          <Link href="/area/nara/" className="text-primary underline underline-offset-2 mx-1">
            家族に代わって手配するときの段取り
          </Link>
          を先に読んでください。
        </p>
      </section>

      <section id="kurashiki-wait" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          残すか減らすかを、急いで決めない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手のかかる庭を引き継ぐと、早く片づけてしまいたくなります。その気持ちは自然ですが、判断を急ぐほど、後になって「あの木は残せばよかった」と思うことが増えます。
        </p>
        <div className="space-y-4">
          {waitItems.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          一年見たうえで庭を減らすと決めたときの段階的な進め方は
          <Link href="/guide/garden-downsizing/" className="text-primary underline underline-offset-2 mx-1">
            庭じまいという選択
          </Link>
          、手のかからない木に植え替える場合の候補は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが楽な庭木
          </Link>
          、木を切る場合の考え方は
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採
          </Link>
          のページで扱っています。
        </p>
      </section>

      <section id="kurashiki-request" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者への最初の頼み方
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          引き継いだ庭での最初の依頼は、その後の付き合い方を決める一回でもあります。何を頼むかより、何を教えてもらうかを中心に組み立てます。
        </p>
        <ol className="space-y-4">
          {requestItems.map((x, i) => (
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
          最初の連絡で何を書くかは
          <Link href="/area/shizuoka/" className="text-primary underline underline-offset-2 mx-1">
            問い合わせ手段と最初のやり取り
          </Link>
          、費用の考え方は
          <Link href="/cost/price/" className="text-primary underline underline-offset-2 mx-1">
            庭工事の料金相場
          </Link>
          にまとめています。
        </p>
      </section>

      <section id="kurashiki-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、引き継いだ庭を一年かけて知り、その後に手入れや作り替えを決めていくという条件で見ると、次の3つはそれぞれ違う段階で使えます。
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

      <section id="kurashiki-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが個別に運営会社を確認した10サービスの一覧です。前の住人が頼んでいた相手が分からない場合に、新しく相談先を探す手がかりとして使ってください。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
        </p>
        <AreaCompanyTable cityName="倉敷" />
      </section>

      <section id="kurashiki-checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          問い合わせ前のチェックリスト
        </h2>
        <div className="space-y-4">
          {checklist.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kurashiki-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="kurashiki" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/garden-downsizing/", label: "庭じまいという選択" },
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/area/hiroshima/", label: "困りごとの切り分けと優先順位" },
            { href: "/area/kanazawa/", label: "頼む先を替えるときの引き継ぎ" },
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
          引き継いだ庭は、知るところから始まります。急ぐのは危ないところだけにして、あとは一年かけて見ていってください。
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
