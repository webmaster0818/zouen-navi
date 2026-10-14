import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

const PAGE_URL = "https://zouen-navi.com/guide/neighbor-branch/";
const UPDATED_LABEL = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";
const TITLE = "隣家にはみ出した庭木の枝と根｜切る前に確認したいルールと手順";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "隣の家から伸びてきた枝は勝手に切ってよいのか、根はどうか。民法の定めは枝と根で扱いが異なり、2021年の改正で手順も変わりました。自分の木がはみ出している側の対応と、業者に頼むときの注意点まで整理します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description:
      "越境した枝と根の扱いの違い、改正民法で定められた手順、業者に依頼するときの確認点をまとめました。",
  },
};

const toc = [
  { id: "branch-rule", label: "枝と根では扱いが違う" },
  { id: "branch-law", label: "改正でどこが変わったか" },
  { id: "branch-steps", label: "枝を切ってもらうまでの進め方" },
  { id: "branch-owner", label: "自分の木がはみ出している場合" },
  { id: "branch-other", label: "落ち葉・果実・道路への越境" },
  { id: "branch-order", label: "業者に頼むときの確認点" },
  { id: "branch-faq", label: "よくある質問" },
];

const stepList = [
  {
    h: "現状を記録する",
    b: "どの枝がどこまで越えているのかを、写真と日付で残します。後から話し合いになったとき、口頭の記憶より記録のほうが確実です。屋根や外壁に触れている、雨樋に葉が溜まっているといった実害があれば、その状態も撮っておきます。",
  },
  {
    h: "所有者に伝える",
    b: "まずは木の持ち主に切ってもらうよう伝えます。民法の定めでも、越境した枝は所有者に切除させるのが原則です。近所付き合いの中で角が立ちにくいのもこの順番です。口頭で伝わりにくい場合は、書面にして残す方法もあります。",
  },
  {
    h: "相当の期間を置く",
    b: "伝えた後は、切除のための時間を置きます。すぐに切らないからといって即座に自分で切れるわけではありません。どれくらいが相当かは事情によるため、判断に迷う場合は専門家に相談してください。",
  },
  {
    h: "それでも解決しない場合",
    b: "所有者に催告しても相当の期間内に切除されないとき、所有者やその所在が分からないとき、急迫の事情があるときには、越境された側が自ら枝を切り取ることが認められています。ただし、自分のケースが要件を満たすかどうかの判断は慎重に行う必要があります。",
  },
  {
    h: "費用の負担を確認する",
    b: "切除にかかった費用を誰が負担するかは、事案によって扱いが分かれやすい部分です。争いになりそうな場合は、作業に着手する前に専門家へ相談しておくほうが安全です。",
  },
];

const ownerSide = [
  {
    h: "定期的に枝の先を確認する",
    b: "越境は、ある日突然起きるものではありません。毎年少しずつ伸びた結果です。剪定のときに境界側の枝を意識して整えておけば、そもそも問題になりません。",
  },
  {
    h: "指摘されたら早めに応じる",
    b: "隣家から申し入れがあった場合、放置すると相手が自ら切除できる要件に近づいていきます。自分の木を自分の判断で整えられるうちに対応するほうが、樹形の面でも有利です。",
  },
  {
    h: "切る位置を業者と相談する",
    b: "境界ぎりぎりで切ると、樹形が不自然になったり、切り口から傷みが出たりすることがあります。どこで切れば木に負担が少ないかは樹種によって違うため、剪定の適期と併せて相談してください。",
  },
  {
    h: "根が伸びる方向も考える",
    b: "地上の枝だけでなく、根も境界を越えます。塀や舗装を押し上げることもあるため、境界付近に植える木を選ぶ段階から、根の張り方を考慮しておくと後が楽です。",
  },
];

const otherCases = [
  {
    h: "落ち葉が隣地に入る",
    b: "落ち葉そのものは枝の越境とは別の問題として扱われます。法律上の解決より、日頃の声かけと剪定による量の抑制が現実的な対処になります。毎年同じ時期に落ちるのであれば、その前に一度手を入れておくと苦情になりにくくなります。",
  },
  {
    h: "果実が越境した枝になっている",
    b: "越境した枝になった実を勝手に取ってよいかは、枝そのものの扱いとは別の論点です。トラブルの種になりやすいため、気になる場合は自己判断で採らず、所有者に確認してください。",
  },
  {
    h: "道路や歩道にはみ出している",
    b: "公道にかかる枝は、通行の妨げや視界の遮りにつながります。自分の敷地の木であれば管理者として対応が求められますし、他人の木で危険を感じる場合は道路を管理する自治体の窓口に相談する方法があります。",
  },
  {
    h: "電線に触れそうになっている",
    b: "電線に接触するおそれのある枝は、自分で手を出すべきではありません。感電の危険があるため、電力会社の窓口に連絡して対応を相談してください。",
  },
];

const orderPoints = [
  {
    h: "誰の敷地から作業するかを決める",
    b: "越境した枝を切る際、隣地側に入る必要が出ることがあります。他人の敷地に無断で立ち入ることはできないため、立ち入りの可否を事前に確認し、必要なら承諾を得ておきます。",
  },
  {
    h: "切る範囲を図と言葉で共有する",
    b: "「はみ出している分だけ」という伝え方は、現場で解釈が分かれます。どの枝をどこまで切るのかを、写真に印をつけるなどして共有しておくと確実です。",
  },
  {
    h: "切った枝の処分先を決める",
    b: "越境部分を切った場合、その枝をどちらが処分するかで揉めることがあります。作業の依頼時に、処分まで含める契約かどうかをはっきりさせておきます。",
  },
  {
    h: "作業前後の写真を残す",
    b: "作業の範囲を後から示せるようにしておくと、認識の食い違いが起きたときに役立ちます。業者に写真報告を頼めるかどうかも確認しておくとよいでしょう。",
  },
];

const faqs = [
  {
    q: "隣から伸びてきた枝は、勝手に切ってもよいのですか。",
    a: "原則としては、越境した枝は木の所有者に切除してもらうことになります。ただし、所有者に催告しても相当の期間内に切除されないとき、所有者やその所在が分からないとき、急迫の事情があるときには、越境された側が自ら切り取ることが認められています。自分のケースが要件を満たすかどうかの判断は慎重に行い、迷う場合は専門家に相談してください。",
  },
  {
    q: "枝と根で扱いが違うと聞きましたが本当ですか。",
    a: "はい。民法では、境界を越えた枝については所有者に切除させることができるとされ、一方で境界を越えた根については自ら切り取ることができると定められています。枝と根で条文上の扱いが分かれているため、同じ「越境」でも進め方が変わります。",
  },
  {
    q: "2021年の民法改正で何が変わったのですか。",
    a: "改正前は、越境した枝について所有者に切除させることが原則で、自ら切る場面が限られていました。改正により、催告しても相当の期間内に切除されない場合、所有者やその所在が分からない場合、急迫の事情がある場合には、越境された側が自ら枝を切り取れることが明文化されました。この改正は2023年4月1日から施行されています。",
  },
  {
    q: "切除にかかった費用は請求できますか。",
    a: "費用の負担については事案によって扱いが分かれやすく、一律には言えません。金額が大きくなりそうな場合や、相手との認識が食い違っている場合は、作業に入る前に弁護士などの専門家へ相談することをおすすめします。",
  },
  {
    q: "自分の木が隣家にはみ出していると指摘されました。",
    a: "早めに剪定で対応するのが基本です。放置すると相手が自ら切除できる要件に近づき、木の形も自分の意図しない切られ方になる可能性があります。どこで切れば木に負担が少ないかは樹種によって異なるため、剪定の適期と併せて業者に相談してください。",
  },
];

export default function NeighborBranchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description:
          "越境した枝と根の扱いの違い、改正民法で定められた手順、業者に依頼するときの確認点をまとめました。",
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

      <Breadcrumb items={[{ label: "庭づくりガイド" }, { label: "越境した枝と根" }]} />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">庭づくりガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{TITLE}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={UPDATED_ISO}>最終更新：{UPDATED_LABEL}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary">
          隣の家の木が、いつの間にか自分の敷地の上まで伸びている。屋根に触れ、雨樋に葉が溜まり、洗濯物の上に影を落とす。
          このとき、手の届く枝を自分で切ってしまってよいのかどうか。答えは「枝か根か」で変わり、さらに枝については踏むべき手順が法律で定められています。
          このページでは、切る前に確認したいことを順に整理します。
        </p>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-surface-alt p-5">
        <p className="text-[15px] leading-8 text-text-secondary">
          本ページは一般的な考え方を整理したものであり、個別の事案について法的な判断を示すものではありません。
          相手との話し合いがまとまらない場合や、費用の負担で争いになりそうな場合は、弁護士などの専門家にご相談ください。
        </p>
      </div>

      <nav className="mb-10 rounded-2xl border border-border bg-surface-alt p-5">
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

      <section id="branch-rule" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          枝と根では扱いが違う
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          同じ越境でも、地上の枝と地中の根とでは、民法上の扱いが分かれています。
          境界を越えた枝については、その木の所有者に切除させることができるとされ、越境された側がただちに自分で切ってよいとはされていません。
          一方、境界を越えた根については、越境された側が自ら切り取ることができると定められています。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[460px]">
            <thead>
              <tr className="bg-surface-alt">
                <th className="text-left font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                  越境しているもの
                </th>
                <th className="text-left font-semibold text-text-primary px-4 py-3">基本の考え方</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-surface">
                <th
                  scope="row"
                  className="text-left align-top font-semibold text-text-primary px-4 py-3"
                >
                  枝
                </th>
                <td className="px-4 py-3 align-top text-text-secondary leading-7">
                  まず木の所有者に切除してもらう。一定の場合にかぎり、越境された側が自ら切り取れる。
                </td>
              </tr>
              <tr className="bg-surface-alt">
                <th
                  scope="row"
                  className="text-left align-top font-semibold text-text-primary px-4 py-3"
                >
                  根
                </th>
                <td className="px-4 py-3 align-top text-text-secondary leading-7">
                  越境された側が自ら切り取ることができる。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          なお、根を切ることが認められているとしても、木そのものを枯らすほど切ってよいという意味ではありません。
          塀や舗装を押し上げているといった実害がある場合でも、どこまで切るかは現場を見て判断する必要があります。
        </p>
      </section>

      <section id="branch-law" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          改正でどこが変わったか
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          かつては、越境した枝を切ってもらえないまま状況が動かない、という事態が起こりやすい仕組みでした。
          所有者が応じない場合や、そもそも所有者と連絡が取れない場合に、越境された側が取れる手段が限られていたためです。
        </p>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          2021年の民法改正では、この点が見直されました。所有者に催告しても相当の期間内に切除されないとき、所有者やその所在を知ることができないとき、急迫の事情があるときには、越境された側が自ら枝を切り取れることが明文で定められています。
          この改正は2023年4月1日から施行されています。
        </p>
        <div className="rounded-2xl border border-border bg-surface-alt p-5">
          <p className="text-[15px] leading-8 text-text-secondary">
            重要なのは、自分で切れる場面が広がったとはいえ、原則が「まず所有者に切除してもらう」ことである点は変わっていないということです。
            順番を飛ばすと、切った行為そのものが問題になりかねません。
          </p>
        </div>
      </section>

      <section id="branch-steps" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          枝を切ってもらうまでの進め方
        </h2>
        <ol className="space-y-4">
          {stepList.map((s, i) => (
            <li key={s.h} className="flex items-start gap-3">
              <span className="mono text-primary flex-shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-text-primary mb-1">{s.h}</h3>
                <p className="text-[15px] leading-8 text-text-secondary">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="branch-owner" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          自分の木がはみ出している場合
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          越境は、される側だけの問題ではありません。自分の庭の木が隣家へ伸びていれば、同じ話が逆の立場で起こります。
          こちらの側でできることは、実のところ単純です。
        </p>
        <div className="space-y-4">
          {ownerSide.map((o) => (
            <div key={o.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2">{o.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{o.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          樹種ごとの剪定の適期は
          <Link href="/service/pruning/" className="text-primary underline underline-offset-2 mx-1">
            庭木の剪定費用と最適な時期
          </Link>
          にまとめています。切る時期を外すと、木の傷みにつながります。
        </p>
      </section>

      <section id="branch-other" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          落ち葉・果実・道路への越境
        </h2>
        <div className="space-y-4">
          {otherCases.map((c) => (
            <div key={c.h} className="rounded-2xl border border-border bg-surface-alt p-5">
              <h3 className="font-bold text-text-primary mb-2">{c.h}</h3>
              <p className="text-[15px] leading-8 text-text-secondary">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="branch-order" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          業者に頼むときの確認点
        </h2>
        <p className="text-[15px] leading-8 text-text-secondary mb-5">
          越境が絡む剪定は、通常の剪定より確認事項が増えます。どこまで切るのか、誰の敷地から作業するのか、切った枝は誰が処分するのか。
          これらを曖昧にしたまま当日を迎えると、現場で判断できずに作業が止まります。
        </p>
        <div className="space-y-4">
          {orderPoints.map((p, i) => (
            <div key={p.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold text-text-primary mb-2 flex items-start gap-2">
                <span className="mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{p.h}</span>
              </h3>
              <p className="text-[15px] leading-8 text-text-secondary">{p.b}</p>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-8 text-text-secondary mt-5">
          住宅が密集した市街地では、作業スペースや搬出経路の制約も重なります。
          <Link href="/area/tokyo/" className="text-primary underline underline-offset-2 mx-1">
            東京の造園・庭の手入れ業者の選び方
          </Link>
          で、その段取りを整理しています。
        </p>
      </section>

      <section id="branch-faq" className="scroll-mt-20 mb-12">
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
            { href: "/service/pruning/", label: "庭木の剪定費用と最適な時期" },
            { href: "/service/felling/", label: "庭木の伐採費用相場と業者の選び方" },
            { href: "/area/tokyo/", label: "東京の造園・庭の手入れ業者の選び方" },
            { href: "/ranking/pruning/", label: "剪定業者ランキング" },
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
          切る範囲と立ち入りの段取りが決まったら、剪定に慣れた業者に相談してみてください。
        </p>
        <Link
          href="/ranking/pruning/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
        >
          剪定業者を比較する
        </Link>
        <p className="mt-3 text-xs text-text-muted">
          本ページにはPR（広告）を含む場合があります。掲載情報は{UPDATED_LABEL}時点のものです。
        </p>
      </div>
    </article>
  );
}
