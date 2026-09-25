import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AreaCompanyTable, { findReview, infoValue } from "@/app/components/AreaCompanyTable";
import AreaLinks from "@/app/components/AreaLinks";

const PAGE_URL = "https://zouen-navi.com/area/niigata/";
const UPDATED_LABEL = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";
const TITLE = "新潟の造園・庭の手入れ業者の選び方｜家族で持つ庭を誰が決めて誰が払うか";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "庭の手入れは、家の中で話がまとまらないまま止まることがあります。連絡する人、費用を出す人、当日いる人。新潟で家族の庭を手配するときに先に決めておく役割分担と、意見が割れたときの詰め方を整理し、掲載サービスの運営会社・対応エリアをまとめました。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "家族で持つ庭を誰が決めて誰が払うのかという観点から、新潟での業者選びを整理しました。",
  },
};

const toc = [
  { id: "niigata-stuck", label: "頼む前に止まるのは、たいてい家の中の話" },
  { id: "niigata-roles", label: "決めておく役割は4つに分かれる" },
  { id: "niigata-shared", label: "名義が一人でない庭で気をつけること" },
  { id: "niigata-split", label: "意見が割れたときに詰める順番" },
  { id: "niigata-pick", label: "この条件で見ておきたい3サービス" },
  { id: "niigata-companies", label: "掲載サービスの運営会社と対応エリア" },
  { id: "niigata-checklist", label: "問い合わせ前のチェックリスト" },
  { id: "niigata-faq", label: "よくある質問" },
  { id: "other-areas", label: "他のエリアの業者選び" },
];

const picks = ["townlife", "mitsumoa", "hikaku-biz"] as const;

const pickReasons: Record<string, string> = {
  "townlife":
    "希望条件を入力すると、複数社からプランと見積もりを無料で取り寄せられる形式です。同じ条件で出てきたものが並ぶため、家族に見せるときに説明が短く済みます。プラン請求と見積もりは無料と公表されています。",
  "mitsumoa":
    "最大5件の見積もりを比較でき、チャットで業者と直接やり取りできます。口頭ではなく文字でやり取りが残るため、その場にいなかった家族にもそのまま転送できます。見積もり依頼は無料です。",
  "hikaku-biz":
    "発注側は利用無料で、運営21年・登録事業者10万社超と公表されています。造園のほか門・塀・フェンス・デッキなどの区分も扱うため、庭だけでなく周囲の構造物まで含めて相談先を探したい場合に候補になります。",
};

const roles = [
  {
    h: "業者とやり取りする人",
    b: "問い合わせを出し、電話を受け、日程を調整する人です。ここは一人に絞るのが原則です。複数の人がそれぞれに連絡すると、業者側は誰の話を採用すればよいか分からなくなり、言った内容が上書きされていきます。窓口を一人にして、その人が家族に伝える形にします。",
  },
  {
    h: "費用を負担する人",
    b: "実際に払う人です。やり取りする人と別なら、見積もりが出た時点で必ず共有します。後から金額を知らされた側は、内容ではなく「勝手に決めた」ことに反応します。契約の名義と支払う口座の名義が違う場合、請求書の宛名をどうするかも先に決めておきます。",
  },
  {
    h: "当日その場にいる人",
    b: "作業日に敷地にいて、業者を迎え、必要なら判断する人です。遠方に住んでいる人が窓口になっている場合、この役は別の人になります。当日いる人が事前の話し合いに入っていないと、現場で「聞いていない」が発生します。頼んだ内容を、当日いる人にも同じ文面で渡しておきます。",
  },
  {
    h: "終わってから意見を言う人",
    b: "作業後に庭を見て感想を言う立場の人です。たいていは一番その庭に思い入れのある人で、話し合いには参加していないことが多い役どころです。この人が誰かは分かっているはずなので、切る前に一度意見を聞いておくだけで、後の摩擦が減ります。",
  },
];

const sharedCases = [
  {
    h: "名義と、住んでいる人が違う",
    b: "親名義の家に子が住んでいる、あるいはその逆という形です。日常の手入れであれば住んでいる側の判断で進めることが多いはずですが、大きく形を変える作業や、木を減らす作業は、名義のある人に一度通しておくほうが安全です。「元に戻せるかどうか」が線引きの目安になります。",
  },
  {
    h: "相続の手続きが途中",
    b: "話し合いが終わっていない土地は、誰の判断で手を入れるかが決まっていない状態です。一方で、放っておくと草木が伸びて近隣から連絡が来ることもあります。「危険を避けるための最低限」と「見た目を整える作業」を分けて考え、後者は結論が出てからにするという整理ができます。",
  },
  {
    h: "きょうだいで引き継いだ",
    b: "費用を誰がどう分けるかが、そのまま「誰が決めるか」に直結します。折半なら二人の合意が要り、一人が出すなら実質その人が決める形になります。先にそこを言葉にしておかないと、作業が終わってから費用の話で揉めます。",
  },
  {
    h: "売る予定がある",
    b: "手放す前提なら、庭にかける手間の目的が変わります。長く保つための手入れではなく、見せるための整理に寄ります。目的を業者に伝えておくと、提案の内容が変わります。伝えないと、長期の管理を前提にした提案が返ってきて、話が噛み合いません。",
  },
];

const splitSteps = [
  {
    h: "残すものを先に決める",
    b: "切るものから話すと反対が出ます。「この木は残す」を先に確定させると、残りは相対的に譲りやすくなります。思い入れのある木が一本でも守られていれば、話の温度が下がります。",
  },
  {
    h: "今年やることと、先送りにすることを分ける",
    b: "全部を今決める必要はありません。安全に関わるものと、今年でなくてもよいものを分けると、意見の対立する部分を先送りにできます。先送りにしたものは、いつ再検討するかだけ決めておきます。",
  },
  {
    h: "上限の金額を一つ置く",
    b: "「いくらまでなら出す」が決まると、範囲の話が現実的になります。金額の上限が共有されていない状態で範囲を議論しても、着地しません。",
  },
  {
    h: "決まらないものは決定者を指名する",
    b: "最後まで割れる項目は必ず出ます。そのときは内容ではなく「この件はこの人が決める」を合意します。多数決より早く、後から蒸し返されにくい形です。",
  },
];

const checklist = [
  {
    h: "連絡の窓口を一人に絞ったか",
    b: "複数の人がばらばらに問い合わせると、条件が上書きされて最後に何が決まっているのか分からなくなります。",
  },
  {
    h: "支払う人と請求書の宛名を合わせたか",
    b: "契約する名義と支払う人が違う場合、宛名をどちらにするのかを依頼の段階で決めておきます。",
  },
  {
    h: "当日いる人に同じ内容を渡したか",
    b: "頼んだ作業の一覧を、その場にいる人にも文面で渡します。口頭の伝達は当日に食い違います。",
  },
  {
    h: "残すものを先に決めたか",
    b: "切るものより先に「残すもの」を確定させておくと、家族内の合意が取りやすくなります。",
  },
  {
    h: "決まらない項目の決定者を指名したか",
    b: "最後まで割れた件は、内容を決めるのではなく誰が決めるかを決めて先に進めます。",
  },
];

const faqs = [
  {
    q: "親の家の庭を、離れて住む子が手配して支払ってもよいですか。",
    a: "手配と支払いを子が担うこと自体は珍しくありません。確認しておきたいのは、当日に敷地へ入ってもらう段取り、請求書と領収書の宛名、そして親本人が作業内容を了解しているかの三点です。特に木を減らす作業や形を大きく変える作業は、後から元に戻せません。対応の可否と条件は各社で異なるため、問い合わせ時に確認してください。",
  },
  {
    q: "きょうだいで意見が分かれているときは、どう進めればよいですか。",
    a: "全体を一度に決めようとせず、順番を固定すると進みます。まず残す木を確定し、次に今年やるものと先送りにするものを分け、そのうえで上限の金額を一つ置きます。それでも割れる項目は、内容を決めるのではなく「この件は誰が決めるか」を合意してしまうほうが早く、後から蒸し返されにくくなります。",
  },
  {
    q: "見積もりを家族に見せてから返事をしたいのですが、待ってもらえますか。",
    a: "見積書には有効期限が書かれていることがあります。返事に時間がかかりそうな場合は、その旨を先に伝えて期限の目安を聞いておくと、出し直しの手間を避けられます。書面のどこを見るかについては神戸のページで整理しています。",
  },
  {
    q: "新潟市内で対応してもらえるかどうかは、どこで分かりますか。",
    a: "このページの一覧に載せている対応エリアは、各社が公開している範囲をそのまま転記したものです。いずれも公開情報の上では全国を対象としていますが、新潟市内での個別の対応可否・作業日程・出張範囲までは公開されていません。実際に受けられるかどうかは、依頼時に各社へ直接ご確認ください。",
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
          "家族や親族で持つ庭の手入れを頼むときの役割分担と、意見が割れたときの進め方をまとめました。",
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
          庭の手入れが進まない理由は、業者が見つからないことより、家の中で話がまとまらないことのほうが多いかもしれません。親が住んでいる家の庭、きょうだいで引き継いだ土地、夫婦でどこまでやるかの意見が違う庭。新潟にある家の庭を家族で抱えている場合も、この形になります。業者に連絡する前に決めておくことがあり、それは庭の話ではなく人の話です。このページでは、頼む側の役割をどう分けるかという観点から、依頼の組み立て方を整理します。
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
          頼む前に止まるのは、たいてい家の中の話
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          見積もりを取るところまでは誰でも進めます。止まるのはその次です。金額を見て家族に相談したら反応が割れた、親が「まだいい」と言った、支払う人と連絡している人が違って話が二重になった。こうなると、業者側からは何も動かせません。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          業者にとって困るのは、決定する人が誰なのか分からない状態です。連絡してくる人と、条件を変えたい人と、お金を出す人が別々にいて、しかも互いの言っていることが違う。この状態では見積もりの出しようがなく、出しても結論が出ません。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            先に決めるのは「何をやるか」ではなく「誰が決めるか」です。ここが決まっていれば、内容は途中で変えられます。逆に、内容だけ決めて決定者が曖昧だと、最後に全部やり直しになります。
          </p>
        </div>
      </section>

      <section id="niigata-roles" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          決めておく役割は4つに分かれる
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          一人が全部を兼ねるなら簡単ですが、実際には分かれていることが多いはずです。分かれていること自体は問題ではなく、誰がどれを担うのかが共有されていないことが問題になります。
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
          当日その場にいる人を立てられない場合は、立ち会いなしで進める組み立てになります。その手順は
          <Link href="/area/sendai/" className="text-primary underline underline-offset-2 mx-1">
            立ち会えない庭の頼み方
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="niigata-shared" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          名義が一人でない庭で気をつけること
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          持ち主が一人でない土地や、これから持ち主が変わる土地では、手入れを頼むこと自体に確認が要る場合があります。庭木を切る作業は、元に戻せません。
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
          意見が割れたときに詰める順番
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          全員が納得する案を探すより、決める順番を固定するほうが早く進みます。どれを先に決めるかで、後の選択肢が絞れていきます。
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
          上限を先に置いてから範囲を組む進め方は
          <Link href="/area/kagoshima/" className="text-primary underline underline-offset-2 mx-1">
            予算から依頼の範囲を組み立てる
          </Link>
          で、作業そのものの優先順位の付け方は
          <Link href="/area/hiroshima/" className="text-primary underline underline-offset-2 mx-1">
            困りごとの切り分けと優先順位
          </Link>
          で扱っています。
        </p>
      </section>

      <section id="niigata-pick" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          この条件で見ておきたい3サービス
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          掲載しているサービスはいずれも公開情報の上では全国を対象としています。そのうえで、家族に見せて検討するための材料が手元に残るという条件で見ると、次の3つは扱いやすい構成です。
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
          造園ナビが個別に運営会社を確認した10サービスの一覧です。対応エリアの欄は、各社が公開している範囲をそのまま記載しています。
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
          あわせて読みたい
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/area/kobe/", label: "見積書の読み方と書面の確認" },
            { href: "/area/sendai/", label: "立ち会えない庭の頼み方" },
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
          誰が決めて誰が払うかが固まったら、同じ条件で複数のサービスに当たってみてください。
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
