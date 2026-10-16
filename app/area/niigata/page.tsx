import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/niigata/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "新潟の造園・庭の手入れ業者の選び方｜家族で所有する庭の意思決定者と費用負担者";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れは、家族間で意見がまとまらないまま停滞することがあります。連絡担当者、費用負担者、当日の立会者など、新潟で家族の庭を手配する際に事前に決めておく役割分担と、意見が分かれた場合の調整方法を整理し、掲載サービスの運営会社・対応エリアをまとめています。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "家族で所有する庭の意思決定者と費用負担者という観点から、新潟での業者選びを整理しています。",
  },
};

const toc = [
  { id: "niigata-stuck", label: "依頼前に停滞する原因の多くは家族間の調整です" },
  { id: "niigata-roles", label: "決めておくべき4つの役割" },
  { id: "niigata-shared", label: "名義が一人ではない庭で注意すべき点" },
  { id: "niigata-split", label: "意見が分かれた場合の調整の順序" },
  { id: "niigata-pick", label: "この条件に適した3サービス" },
  { id: "niigata-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "niigata-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "niigata-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["townlife", "mitsumoa", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "townlife":
    "希望条件を入力すると、複数社からプランと見積もりを無料で取り寄せられる形式です。同じ条件で作成された資料を比較できるため、家族に説明する際の手間が少なく済みます。プラン請求と見積もりは無料と公表されています。",
  "mitsumoa":
    "最大5件の見積もりを比較でき、チャットで業者と直接やり取りできます。口頭ではなく文字でやり取りが記録されるため、その場にいなかった家族にもそのまま共有できます。見積もり依頼は無料です。",
  "hikaku-biz":
    "発注者の利用は無料で、運営21年・登録事業者10万社超と公表されています。造園のほか門・塀・フェンス・デッキなどの区分も扱うため、庭だけでなく周囲の構造物まで含めて相談先を探したい場合の候補になります。",
};

const roles = [
  {
    h: "業者との連絡担当者",
    b: "問い合わせを行い、電話を受け、日程を調整する人です。この役割は一人に絞ることが原則です。複数の人がそれぞれ連絡すると、業者はどの要望を採用すべきか判断できず、伝えた内容が上書きされていきます。窓口を一人に決め、その人が家族に共有する形にします。",
  },
  {
    h: "費用負担者",
    b: "実際に支払う人です。連絡担当者と異なる場合は、見積もりが提示された時点で必ず共有します。後から金額を知らされた側は、内容よりも独断で決められたことに反発しがちです。契約の名義と支払口座の名義が異なる場合は、請求書の宛名も事前に決めておきます。",
  },
  {
    h: "当日の立会者",
    b: "作業日に敷地にいて業者を迎え、必要に応じて判断する人です。遠方に住んでいる人が窓口となっている場合、この役割は別の人が担います。当日の立会者が事前の話し合いに参加していないと、現場で「聞いていない」という事態が生じます。依頼した内容を、当日の立会者にも同じ文面で伝えておきます。",
  },
  {
    h: "作業完了後に意見を述べる人",
    b: "作業後に庭を見て意見を述べる立場の人です。多くの場合、その庭に最も思い入れのある人であり、話し合いには参加していないことが多い役割です。該当者は把握できているはずのため、剪定前に一度意見を確認しておくだけで、後の摩擦を減らせます。",
  },
];

const sharedCases = [
  {
    h: "名義人と居住者が異なる場合",
    b: "親名義の家に子が住んでいる、あるいはその逆という形です。日常の手入れであれば居住者の判断で進めることが多いと考えられますが、形を大きく変える作業や木を減らす作業は、名義人に一度了承を得ておくほうが安全です。「元に戻せるかどうか」が判断の目安になります。",
  },
  {
    h: "相続の手続きが完了していない場合",
    b: "協議が完了していない土地は、誰の判断で手入れを行うかが決まっていない状態です。一方で、放置すると草木が伸び、近隣から連絡が来ることもあります。「危険を避けるための最低限の作業」と「外観を整える作業」を分けて考え、後者は結論が出てから行うという整理ができます。",
  },
  {
    h: "兄弟姉妹で相続した場合",
    b: "費用の分担方法が、そのまま意思決定者の決定に直結します。折半であれば二人の合意が必要であり、一人が負担する場合は実質的にその人が決定する形になります。事前にこの点を明確にしておかないと、作業完了後に費用をめぐって問題が生じます。",
  },
  {
    h: "売却の予定がある場合",
    b: "売却を前提とする場合は、庭の手入れの目的が変わります。長期的に維持するための手入れではなく、内覧に向けた整理が中心となります。目的を業者に伝えておくと、提案の内容が変わります。伝えないと、長期管理を前提とした提案が提示され、意図と合わなくなります。",
  },
];

const splitSteps = [
  {
    h: "残すものを先に決める",
    b: "剪定・伐採するものから話し合うと、反対意見が出やすくなります。「この木は残す」ことを先に確定させると、その他の木については合意を得やすくなります。思い入れのある木が一本でも残されることが決まれば、話し合いが円滑になります。",
  },
  {
    h: "今年行う作業と先送りする作業を分ける",
    b: "すべてを今決める必要はありません。安全に関わる作業と、今年でなくてもよい作業を分けると、意見が対立する部分を先送りできます。先送りした作業は、いつ再検討するかのみ決めておきます。",
  },
  {
    h: "上限額を一つ決める",
    b: "「いくらまで負担するか」が決まると、範囲の検討が具体的になります。上限額が共有されていない状態で範囲を議論しても、結論に至りません。",
  },
  {
    h: "決まらない事項は決定者を指名する",
    b: "最後まで意見が分かれる事項は必ず生じます。その場合は、内容ではなく「この件はこの人が決める」ことについて合意します。多数決より早く、後から蒸し返されにくい方法です。",
  },
];

const checklist = [
  {
    h: "連絡の窓口を一人に絞ったか",
    b: "複数の人が個別に問い合わせると、条件が上書きされ、最終的に何が決まっているのか分からなくなります。",
  },
  {
    h: "支払う人と請求書の宛名を一致させたか",
    b: "契約の名義と支払う人が異なる場合は、宛名をどちらにするかを依頼の段階で決めておきます。",
  },
  {
    h: "当日の立会者に同じ内容を伝えたか",
    b: "依頼した作業の一覧を、当日の立会者にも文面で渡します。口頭での伝達は当日に相違が生じます。",
  },
  {
    h: "残すものを先に決めたか",
    b: "剪定・伐採するものより先に「残すもの」を確定させておくと、家族内の合意を得やすくなります。",
  },
  {
    h: "決まらない事項の決定者を指名したか",
    b: "最後まで意見が分かれた事項は、内容を決めるのではなく、誰が決めるかを決めて先に進めます。",
  },
];

const faqs = [
  {
    q: "親の家の庭を、離れて住む子が手配して支払ってもよいですか。",
    a: "手配と支払いを子が担うこと自体は珍しくありません。確認しておくべきなのは、当日に敷地へ入ってもらう段取り、請求書と領収書の宛名、親本人が作業内容を了承しているかの三点です。特に、木を減らす作業や形を大きく変える作業は、後から元に戻せません。対応の可否と条件は各社で異なるため、問い合わせ時にご確認ください。",
  },
  {
    q: "きょうだいで意見が分かれているときは、どう進めればよいですか。",
    a: "全体を一度に決めようとせず、決める順序を固定すると進めやすくなります。まず残す木を確定し、次に今年行う作業と先送りする作業を分け、そのうえで上限額を一つ決めます。それでも意見が分かれる事項は、内容を決めるのではなく「この件は誰が決めるか」について合意するほうが早く、後から蒸し返されにくくなります。",
  },
  {
    q: "見積もりを家族に見せてから返事をしたいのですが、待ってもらえますか。",
    a: "見積書には有効期限が記載されていることがあります。回答に時間がかかりそうな場合は、その旨を事前に伝えて期限の目安を確認しておくと、再作成の手間を避けられます。書面の確認箇所については、神戸のページで解説しています。",
  },
  {
    q: "新潟市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "本ページの一覧に掲載している対応エリアは、各社が公開している範囲を転記したものです。いずれも公開情報では全国を対象としていますが、新潟市内での個別の対応可否・作業日程・出張範囲は公開されていません。対応の可否は、依頼時に各社へ直接ご確認ください。",
  },
];

export default function AreaNiigataPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "家族や親族で所有する庭の手入れを依頼する際の役割分担と、意見が分かれた場合の進め方をまとめています。",
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

      <Breadcrumb items={[{ label: "エリア別ガイド" }, { label: "新潟" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          庭の手入れが進まない理由は、業者が見つからないことより、家族間で意見がまとまらないことのほうが多い場合があります。親が住んでいる家の庭、兄弟姉妹で相続した土地、夫婦間で作業範囲の意見が異なる庭などです。新潟市内の住宅の庭を家族で管理している場合も、同様の状況が生じます。業者に連絡する前に決めておくべき事項があり、それは庭ではなく人に関する事項です。本ページでは、依頼する側の役割分担という観点から、依頼の進め方を整理します。
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

      <section id="niigata-stuck" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          依頼前に停滞する原因の多くは家族間の調整です
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりの取得までは誰でも進められます。停滞するのはその後です。金額を見て家族に相談したところ意見が分かれた、親が「まだ必要ない」と言った、支払う人と連絡担当者が異なり話が二重になったといった状況では、業者側からは何も進められません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          業者にとって困るのは、意思決定者が誰か分からない状態です。連絡してくる人、条件を変えたい人、費用を負担する人が別々にいて、しかもそれぞれの要望が異なる状態では、見積もりを作成できず、作成しても結論が出ません。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            先に決めるべきは「何を行うか」ではなく「誰が決めるか」です。これが決まっていれば、内容は途中で変更できます。反対に、内容のみを決めて意思決定者が曖昧なままでは、最終的にすべてやり直しになります。
          </p>
        </div>
      </section>

      <section id="niigata-roles" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          決めておくべき4つの役割
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一人がすべてを兼ねる場合は簡単ですが、実際には役割が分かれていることが多いと考えられます。分かれていること自体は問題ではなく、誰がどの役割を担うかが共有されていないことが問題です。
        </p>
        <ol className="space-y-4">
          {roles.map((x, i) => (
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
          当日の立会者を確保できない場合は、立ち会いなしで進める形になります。その手順は
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会いができない場合の依頼方法
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="niigata-shared" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          名義が一人ではない庭で注意すべき点
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          所有者が一人ではない土地や、今後所有者が変わる土地では、手入れを依頼すること自体に確認が必要な場合があります。庭木の伐採は元に戻せません。
        </p>
        <div className="space-y-4">
          {sharedCases.map((x) => (
            <div key={x.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{x.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="niigata-split" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          意見が分かれた場合の調整の順序
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          全員が納得する案を探すより、決める順序を固定するほうが早く進みます。何を先に決めるかによって、後の選択肢が絞られていきます。
        </p>
        <ol className="space-y-4">
          {splitSteps.map((x, i) => (
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
          上限額を先に決めてから範囲を組み立てる進め方は
          <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2 mx-1">
            予算から依頼の範囲を組み立てる
          </Link>
          で、作業の優先順位の付け方は
          <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2 mx-1">
            依頼内容の整理と優先順位
          </Link>
          で解説しています。
        </p>
      </section>

      <section id="niigata-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件に適した3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスは、いずれも公開情報では全国を対象としています。そのうえで、家族と共有して検討するための資料が手元に残るという条件では、次の3サービスが扱いやすい構成です。
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

      <section id="niigata-companies" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          掲載サービスの運営会社と対応エリア
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          造園ナビが運営会社を個別に確認した10サービスの一覧です。対応エリアの欄には、各社が公開している範囲を記載しています。
        </p>
        <AreaCompanyTable cityName="新潟" />
      </section>

      <section id="niigata-checklist" className="scroll-mt-20 mb-12">
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

      <section id="niigata-faq" className="scroll-mt-20 mb-12">
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

      <AreaLinks current="niigata" />

      <section className="mb-10">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          関連ページ
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/sendai/", label: "立ち会いができない場合の依頼方法" },
            { href: "/service/maintenance/", label: "庭木の年間メンテナンスカレンダー" },
            { href: "/review/", label: "掲載サービスの口コミ・評判まとめ" },
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
          意思決定者と費用負担者が決まったら、同じ条件で複数のサービスに相談することをおすすめします。
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
