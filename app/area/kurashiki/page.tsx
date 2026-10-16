import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/kurashiki/";
const UPDATED_LABEL = "2026年10月12日";
const UPDATED_ISO = "2026-10-12";
const TITLE = "倉敷の造園・庭の手入れ業者の選び方｜前の住人から庭を引き継いだ場合";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "中古住宅の購入や相続などで庭を引き継いだ場合の進め方を解説します。最初の一年で行う植栽の把握、境界付近や危険な木の確認、前の所有者への確認事項、判断を急がない理由、業者への依頼方法を整理し、倉敷での掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "前の住人が手入れしていた庭を引き継いだ際に、最初の一年で確認する事項と、業者への最初の依頼内容を整理しています。",
  },
};

const toc = [
  { id: "kurashiki-unknown", label: "引き継いだ庭は現状の把握から始めます" },
  { id: "kurashiki-record", label: "最初の一年で庭の植栽と設備を記録する" },
  { id: "kurashiki-first", label: "境界付近の木と倒木の危険がある木を優先して確認する" },
  { id: "kurashiki-ask", label: "前の所有者・仲介業者・家族への確認事項" },
  { id: "kurashiki-wait", label: "残すか減らすかの判断は急がない" },
  { id: "kurashiki-request", label: "業者への最初の依頼方法" },
  { id: "kurashiki-pick", label: "この条件に適した3サービス" },
  { id: "kurashiki-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "kurashiki-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "kurashiki-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["smile-garden", "townlife", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "smile-garden":
    "庭木1本の剪定から年間管理まで扱う庭の手入れ専門のチェーンで、完全自店舗施工を掲げています。最初に庭を確認した店舗がそのまま作業も担当する形態のため、引き継いだ庭の経緯を一度説明すれば、その後の季節の手入れまで同じ業者に継続して相談できます。無料の明瞭な見積もりと追加料金なしを掲げています。全国対応を掲げる一方、公式サイトに列挙されている対応都道府県は限られるため、対象地域かどうかをご確認ください。運営は株式会社ガーデンメーカーです。",
  "townlife":
    "希望条件を入力すると、複数社から庭・外構のプランと見積もりを無料で取り寄せられます。一年間庭の状態を確認したうえで庭の形状を変更すると決めた際に、複数の案を比較する段階で利用できます。実際のプランと施工は提携会社が担当するため、届いた会社ごとに対応を見極めてください。「資料が届かない」という厳しい口コミもあります。運営はタウンライフ株式会社です。",
  "hikaku-biz":
    "発注者の利用は無料で、造園工事のほか、門・塀・フェンス、デッキ、舗装、排水といった区分から業者を探せます。引き継いだ庭には、植木だけでなく、古いフェンスや塀、敷石、排水設備など、前の住人が残した構造物があることが多く、植木の手入れとは別区分の相談が必要な場合の候補になります。公式サイトの口コミは本文の末尾が省略表示されており、全文は確認できません。運営は株式会社ワンズマインドです。",
};

const recordItems = [
  {
    h: "庭の見取り図を作成し、番号を付ける",
    b: "正確な図面である必要はありません。住宅・塀・通路の位置を描き、木や植え込み、石、物置、水栓などに番号を付けておきます。樹種の分からない木も「3番の木」と呼べるようにしておくと、写真の撮影や業者への相談を円滑に進められます。",
  },
  {
    h: "同じ場所から季節ごとに写真を撮影する",
    b: "冬に引き継いだ場合、落葉樹は枯れ木に見えることがあります。春に芽吹くもの、夏に茂るもの、秋に実を付けるもの、地面から出てくる球根や宿根草など、季節を一巡して初めて庭の植栽の全体が把握できます。同じ位置から撮影しておけば、成長の度合いも比較できます。",
  },
  {
    h: "花・実・葉の状態を番号ごとに記録する",
    b: "花が咲いた時期、実が付いたか、葉がどの時期に落ちたかを、番号ごとに記録していくと、樹種が分からなくても性質を把握できます。樹種は写真を見せて業者や専門家に尋ねれば判明することも多いため、自分ですべて調べる必要はありません。",
  },
  {
    h: "問題が発生した場合は日付とともに記録する",
    b: "落ち葉が雨どいに詰まった、害虫が大量に発生した、枝が通路をふさいだなど、問題が発生した時期と場所を記録しておくと、その木に必要な作業や優先度を判断する手がかりになります。",
  },
];

const firstItems = [
  {
    h: "境界の近くにある木",
    b: "塀やフェンス沿い、隣家との境界付近に植えられている木は、枝や根が敷地の外に出ていることがあります。引き継いだ時点ですでに越境していることもあり、前の住人と隣家との間で過去にどのような話し合いがあったかは把握できません。まずは、どの木がどこまで敷地外に出ているかを確認します。越境した枝や根の扱いに関する法律上の規定は、別のガイドで解説しています。",
  },
  {
    h: "倒木・折損のおそれがある木",
    b: "住宅や車、通路、電線の近くにある大きな木は、状態によっては強風で枝が折れることがあります。葉の付かない枝が目立つ、幹が傾いている、根元にキノコが発生している、幹に空洞があるといった状態が見られる場合は、早めに専門家に確認を依頼することをおすすめします。自分の判断で伐採せず、まず専門家による確認を済ませます。",
  },
  {
    h: "建物や配管の近くにある木",
    b: "住宅の基礎や塀、排水ますの近くに大きな木があると、根が影響を及ぼしていることがあります。症状が出ていなければ急ぐ必要はありませんが、位置は見取り図に記録しておきます。",
  },
  {
    h: "作業時に危険を伴うもの",
    b: "ハチの巣、毒を持つ毛虫、トゲの多い植物、崩れかけた石積みや古い支柱などがあります。引き継いだ庭では、危険物の位置を把握しないまま作業することになるため、草むしりの前に一度、庭全体を確認します。",
  },
];

const askItems = [
  {
    h: "以前依頼していた植木屋や造園業者",
    b: "前の住人が定期的に依頼していた業者が分かれば、その木のこれまでの手入れの方法を確認できます。同じ業者に継続して依頼するかどうかにかかわらず、これまでの経緯を把握する手がかりになります。",
  },
  {
    h: "地中や外から見えない設備の位置",
    b: "散水栓、地中の配管、庭の照明の配線、雨水の排水経路、埋設物などがあります。植え替えや掘削を行う前に設備の位置を把握しておかないと、作業中に損傷させるおそれがあります。位置が不明な場合は、その旨を業者に伝えます。",
  },
  {
    h: "薬剤の使用状況と過去の問題",
    b: "毎年消毒を行っていた木があるか、害虫や病気の被害を受けていた木があるか、落ち葉や越境について隣家と話し合ったことがあるか。前の住人にとっては当然のことでも、引き継ぐ側にとっては重要な情報です。",
  },
  {
    h: "残置物の扱い",
    b: "鉢植え、灯籠、庭石、物置、古い資材などが該当します。引き継いだ物として扱ってよいか、処分してよいかを、売買や相続の手続きの中で確認しておきます。引き継ぐ範囲は、受け取った書類や家族間の話し合いで決まる事項のため、業者に依頼する前に整理しておきます。",
  },
];

const waitItems = [
  {
    h: "一年間確認しないと木の役割は把握できません",
    b: "冬に枯れ木に見えた木が、春に花を咲かせることがあります。夏の西日を遮っていた木や、道路からの目隠しになっていた生垣は、失って初めてその役割に気づくことがあります。季節を一巡してから判断すれば、その木が庭の中で果たしていた役割を確認したうえで判断できます。",
  },
  {
    h: "大きな木は伐採すると元に戻せません",
    b: "長い年月をかけて育った木は、伐採すると元に戻すことはできません。残すか減らすかで迷う木は、当面は危険な箇所のみ手入れを行い、全体の判断は後に回すことをおすすめします。減らすと決めた場合の段階的な進め方は、庭じまいのガイドで解説しています。",
  },
  {
    h: "早急に対処すべきは、危険な箇所と近隣に影響が出ている箇所です",
    b: "折れそうな枝、通路や道路をふさぐ枝、隣家に大きく越境した枝、ハチの巣などは、一年を待たずに対処します。それ以外は、見取り図と写真が揃うまで待っても、大きな問題が生じることは多くありません。",
  },
];

const requestItems = [
  {
    h: "最初の依頼は庭全体の確認を中心とする",
    b: "引き継いだばかりの庭では、何を依頼すべきかがまだ判断できません。最初の依頼は、危険な箇所への対処に加えて、庭全体を確認してもらい、樹種や状態、優先して対処すべき箇所の説明を受けることを中心にすると、その後の判断材料が揃います。現地確認に費用がかかるかどうかは、問い合わせの時点でご確認ください。",
  },
  {
    h: "見取り図と写真を渡し、番号で伝える",
    b: "番号を付けた見取り図と写真を事前に渡しておけば、「3番の木は残したいので形を整えるだけ」「7番は何の木か教えてほしい」のように、木ごとに依頼内容を分けて伝えられます。",
  },
  {
    h: "引き継いだ庭であることを最初に伝える",
    b: "「この家に転居したばかりで、前の住人の手入れの方法が分からない」と最初に伝えておくと、業者がこれまでの剪定の傾向や、無理な剪定の跡がないかといった点まで確認する可能性が高くなります。不明な点は不明と伝えるほうが、相談を円滑に進められます。",
  },
  {
    h: "一度にすべてを依頼しない",
    b: "初回の依頼で庭全体の改修の見積もりまで取得すると、まだ判断できない部分についても決定を迫られます。初回は危険な箇所と近隣に影響が出ている箇所に絞り、全体の手入れや改修は一年間確認してから相談するほうが、依頼内容が定まります。",
  },
];

const checklist = [
  {
    h: "見取り図を作成し、木や設備に番号を付けたか",
    b: "樹種の分からない木も番号で呼べるようにしておくと、相談を円滑に進められます。",
  },
  {
    h: "境界付近の木と倒木のおそれがある木を確認したか",
    b: "敷地外への越境と、折れそうな枝や幹の傾きを優先して確認します。",
  },
  {
    h: "前の所有者・仲介業者・家族に確認すべき事項を確認したか",
    b: "以前の依頼先の業者、地中の設備の位置、薬剤の使用状況、残置物の扱いを確認します。",
  },
  {
    h: "早急に対処するものと、一年間確認してから決めるものを区別したか",
    b: "危険な箇所と近隣に影響が出ている箇所のみを初回の対象とします。",
  },
  {
    h: "引き継いだ庭であることを問い合わせで伝える準備ができているか",
    b: "見取り図と写真を添え、不明な点は不明と明記します。",
  },
];

const faqs = [
  {
    q: "引き継いだ庭の木を、すぐに全部切ってしまってもよいですか。",
    a: "敷地内の木の扱いは所有者が決める事項ですが、大きな木は一度伐採すると元に戻せません。冬に引き継いだ場合など、季節によってはその木の樹種や役割を把握できていないこともあります。危険な箇所や近隣に影響が出ている箇所は早めに対処し、残すか減らすかの判断は季節を一巡してから行うことをおすすめします。",
  },
  {
    q: "前の住人が頼んでいた植木屋に、そのまま頼むべきですか。",
    a: "その必要はありませんが、連絡先が分かれば、これまでの手入れの経緯を確認する相手として有用です。継続して依頼するか、別の業者に変更するかは、話を聞いたうえで決めて構いません。別の業者に依頼する場合の経緯の引き継ぎ方は、金沢のページで解説しています。",
  },
  {
    q: "何の木か分からないものが多いのですが、業者に聞いてもよいですか。",
    a: "問題ありません。最初の依頼の際に樹種や状態の説明を希望する旨を伝えておくと、現地を確認しながら説明を受けられる場合があります。番号を付けた見取り図と写真を事前に渡しておくと、説明内容を記録しやすくなります。現地確認に費用がかかるかどうかは、事前にご確認ください。",
  },
  {
    q: "隣の家に枝がはみ出していることに、引き継いでから気づきました。",
    a: "まず、どの木がどこまで越境しているかを確認し、通路や隣家の建物に接触しているなど影響が出ている箇所から対処します。枝や根が隣地に越境している場合の法律上の規定や、隣家との協議の進め方は、造園ナビのガイド「隣家にはみ出した庭木の枝と根」で解説しています。",
  },
  {
    q: "倉敷市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、倉敷市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
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
          "前の住人から庭を引き継いだ場合に、最初の一年で確認する事項と、業者への最初の依頼方法を整理しています。",
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
          中古住宅の購入、親の家の相続、転勤による庭付き住宅への転居などで引き継いだ庭には、前の住人が植えた木や、用途の分からない設備が残っています。自分で選んだ庭ではないため、どの木が重要か、何を優先すべきかを判断する手がかりがありません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary">
          倉敷市内の住宅の庭を引き継いだ場合も同様です。本ページでは、引き継いでから最初の一年に確認する事項、優先して確認すべき木、前の所有者や仲介業者への確認事項、業者への最初の依頼内容を整理します。荒れた庭の状態から必要な作業を判断する方法ではなく、庭の現状を把握する段階を扱います。
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
          引き継いだ庭は現状の把握から始めます
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          自分で作った庭であれば、どの木をいつ植えたか、どこに何が埋設されているかを把握しています。引き継いだ庭では、そうした情報がすべて失われています。樹種、これまでの剪定方法、毎年の問題、地中の設備などです。外見は同じ庭でも、所有者が替わった時点で、庭に関する情報はほとんどない状態になります。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          そのため、最初に行うべきは手入れではなく、現状の把握です。急いで作業すると、残したかった木を伐採してしまう、地中の配管を損傷させるといった、取り返しのつかない失敗につながります。一方で、危険な木や、すでに近隣に影響が出ている箇所は早急な対処が必要です。この二つを区別することが、引き継いだ庭での最初の作業です。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            荒れた庭の状態から必要な作業を判断する方法は
            <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2 mx-1">
              依頼内容の整理と優先順位
            </Link>
            、依頼先を変更する際に経緯を引き継ぐ方法は
            <Link href="/area/kanazawa/" className="text-primary underline underline-offset-2 mx-1">
              依頼先を変更する際の引き継ぎ
            </Link>
            で解説しています。本ページでは、それより前の「庭の現状を把握する」段階を扱います。
          </p>
        </div>
      </section>

      <section id="kurashiki-record" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          最初の一年で庭の植栽と設備を記録する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          庭は季節によって状態が大きく変わります。引き継いだ時期の状態だけで判断せず、一年をかけて庭の植栽と設備を記録していきます。特別な道具は必要ありません。
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
          写真の撮影方法は
          <Link href="/area/funabashi/" className="text-primary underline underline-offset-2 mx-1">
            現地調査の前に写真で状況を伝える方法
          </Link>
          、季節ごとの手入れの目安は
          <Link href="/service/maintenance/" className="text-primary underline underline-offset-2 mx-1">
            庭木の年間メンテナンスカレンダー
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="kurashiki-first" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          境界付近の木と倒木の危険がある木を優先して確認する
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一年待てるものと、待てないものがあります。待てないものは、多くの場合、敷地外に影響が出ているものか、人や建物に危険が及ぶものです。
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
          越境した枝や根の法律上の扱いは
          <Link href="/guide/neighbor-branch/" className="text-primary underline underline-offset-2 mx-1">
            隣家にはみ出した庭木の枝と根
          </Link>
          、根が建物や排水に影響しているかの確認方法は
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
          のガイドで解説しています。
        </p>
      </section>

      <section id="kurashiki-ask" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          前の所有者・仲介業者・家族への確認事項
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          中古住宅を購入した場合は売主や仲介の不動産会社に、相続した場合は家族や親族に、連絡が取れるうちに確認しておきます。引き渡しや手続きの完了後は、連絡が取りにくくなる場合があります。近隣の方が経緯を把握していることもあります。
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
          相続した住宅で、意思決定者と費用負担者がまだ決まっていない場合は
          <Link href="/area/niigata/" className="text-primary underline underline-offset-2 mx-1">
            意思決定者と費用負担者の確認
          </Link>
          、離れて暮らす家族の住宅の庭を手配する場合は
          <Link href="/area/nara/" className="text-primary underline underline-offset-2 mx-1">
            家族に代わって手配する場合の手順
          </Link>
          を先にご参照ください。
        </p>
      </section>

      <section id="kurashiki-wait" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          残すか減らすかの判断は急がない
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          手間のかかる庭を引き継ぐと、早く片づけたいと考えるのは自然なことです。ただし、判断を急ぐほど、後になって「あの木は残せばよかった」と感じることが増えます。
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
          一年間確認したうえで庭を縮小すると決めた場合の段階的な進め方は
          <Link href="/guide/garden-downsizing/" className="text-primary underline underline-offset-2 mx-1">
            庭じまいという選択
          </Link>
          、手入れが容易な木に植え替える場合の候補は
          <Link href="/plant/low-maintenance/" className="text-primary underline underline-offset-2 mx-1">
            手入れが容易な庭木
          </Link>
          、木を伐採する場合の考え方は
          <Link href="/service/felling/" className="text-primary underline underline-offset-2 mx-1">
            庭木の伐採
          </Link>
          のページで解説しています。
        </p>
      </section>

      <section id="kurashiki-request" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者への最初の依頼方法
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          引き継いだ庭での最初の依頼は、その後の業者との関係を左右する機会でもあります。何を依頼するかより、何の説明を受けるかを中心に依頼内容を組み立てます。
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
          最初の連絡で記載する内容は
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
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、引き継いだ庭を一年かけて把握し、その後に手入れや改修を決めていくという条件では、次の3サービスがそれぞれ異なる段階で利用できます。
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
          造園ナビが運営会社を個別に確認した10サービスの一覧です。前の住人の依頼先が分からない場合に、新たな相談先を探す手がかりとしてご活用ください。対応エリアの欄には、各社が公開している範囲を記載しています。
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
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/guide/garden-downsizing/", label: "庭じまいという選択" },
            { href: "/guide/neighbor-branch/", label: "隣家にはみ出した庭木の枝と根" },
            { href: "/area/hiroshima/", label: "依頼内容の整理と優先順位" },
            { href: "/area/kanazawa/", label: "依頼先を変更する際の引き継ぎ" },
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
          引き継いだ庭は、現状の把握から始まります。早急に対処するのは危険な箇所のみとし、その他は一年をかけて確認することをおすすめします。
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
