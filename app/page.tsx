import Link from "next/link";
import type { Metadata } from "next";
import companiesData from "@/data/companies.json";
import { getVerifiedRating } from "@/app/lib/verifiedRating";
import { AREA_SUBSIDY_PAGES, AREA_TREE_PAGES, AREA_WASTE_PAGES } from "./components/AreaLinks";
import { GUIDE_LINKS } from "./components/SiteFooter";
import { allAreaSlugs, prefCount } from "@/data/areaRegions";
import TaskIcon from "./components/top/TaskIcon";
import AreaFinder from "./components/top/AreaFinder";
import ScrollReveal from "./components/top/ScrollReveal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "造園ナビ｜庭づくりの専門業者を比較する総合ガイド",
  description:
    "庭の剪定・造園・外構工事の業者を比較しています。費用相場・口コミ・各社の特徴を解説し、目的に沿った造園業者選びを支援します。",
};

// 2026-11-04 TOP デザイン刷新（redesign-20261104）。本文・料金・業者情報・リンク先は変えず、見せ方だけを変えている。

const top3 = companiesData.slice(0, 3);

const ArrowRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const PinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

// 作業・お悩みから探す（各ページの内容に合わせた短い説明。サービスの説明は従来の TOP の文言のまま）
const TASKS = [
  { icon: "sentei", title: "剪定", desc: "費用と時期のガイド", href: "/service/pruning/" },
  { icon: "bassai", title: "伐採", desc: "費用相場と業者の選び方", href: "/service/felling/" },
  { icon: "design", title: "庭デザイン", desc: "専門家への依頼方法と費用", href: "/service/garden-design/" },
  { icon: "wateien", title: "和庭園", desc: "坪庭から本格庭園まで", href: "/service/japanese-garden/" },
  { icon: "kanri", title: "年間管理", desc: "月別メンテナンスカレンダー", href: "/service/maintenance/" },
  { icon: "ikegaki", title: "生垣", desc: "刈り込み回数が少ない5種", href: "/plant/hedge/" },
  { icon: "symbol", title: "シンボルツリー", desc: "樹種の選び方", href: "/plant/symbol-tree/" },
  { icon: "zasso", title: "雑草対策", desc: "庭の雑草対策", href: "/guide/weed-control/" },
];

// 従来の「植物・テーマ別ガイド」の残り（花壇・日陰向き・手入れが容易）と、よく使うガイド
const TASK_MORE: [string, string][] = [
  ["花壇", "/plant/flower-bed/"],
  ["日陰向き", "/plant/shade/"],
  ["手入れが容易", "/plant/low-maintenance/"],
  ["芝生の手入れ", "/guide/lawn-care/"],
];

const faqs = [
  {
    q: "庭木の剪定はどの業者に頼むのが一番いいですか？",
    a: "実績・口コミ・費用の透明性を確認することが重要です。お庭レスキュープロ（旧お庭マスター）やsmileガーデンなど複数社で見積もり比較を行うことをおすすめします。",
  },
  {
    q: "造園業者選びで失敗しないポイントは？",
    a: "見積もりの詳細が明確か、資格・保険の有無、施工事例の確認の3点が最重要です。見積もりは必ず複数社から取得することをおすすめします。",
  },
  {
    q: "剪定や草刈りの費用の相場はいくらですか？",
    a: "剪定は、掲載業者の公式料金でお庭レスキュープロ（旧お庭マスター） 550円〜/本、お庭110番 3,300円〜/本（いずれも税込・下限、2026-10-25確認）です。高さ・樹種や草刈りの面積ごとの金額は、業者の見積もりで確認してください。",
  },
  {
    q: "庭師に頼む前に準備しておくことはありますか？",
    a: "庭の広さ・木の本数・高さを記録しておくと、見積もりを円滑に進められます。仕上がりのイメージ写真（Webや雑誌など）を用意しておくと、打ち合わせで要望を伝えやすくなります。",
  },
];

// 掲載業者の公式料金（税込・下限）。2026-10-25 に各社の公式料金ページで確認した値だけを載せる
const costCards = [
  { label: "剪定（お庭レスキュープロ（旧お庭マスター））", range: "550円〜", unit: "1本", src: "https://oniwa-master.info/servicelist/index.html" },
  { label: "剪定（お庭110番）", range: "3,300円〜", unit: "1本", src: "https://www.kusakari-a.com/price/" },
];

/* ─── FV ─── */
function HeroButtons() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      <a href="#task" className="zn-btn zn-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <TaskIcon name="sentei" size={30} className="text-white" />
          作業・お悩みから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
      <a href="#area" className="zn-btn zn-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <PinIcon />
          エリアから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const HERO_LINKS: [string, string][] = [
  ["業者ランキングを見る", "/ranking/"],
  ["料金相場を確認する", "/cost/price/"],
];

function HeroSub({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="max-w-[34em] text-[14px] leading-[1.9] text-[color:var(--zn-muted)] md:text-[15px]">
        剪定・造園・外構工事の業者を比較しています。
        <br className="hidden sm:inline" />
        費用相場から業者の選び方までを解説します。
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {HERO_LINKS.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="inline-flex min-h-[42px] items-center gap-1 rounded-[3px] border border-[color:var(--zn-border-strong)] bg-white px-3.5 text-[13px] font-bold text-[color:var(--zn-ai-dark)] hover:border-[color:var(--zn-ai)]">
              {label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[13px] font-bold text-[color:var(--zn-muted)]">全国対応・無料見積もり・複数業者を比較</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--zn-border)] bg-[color:var(--zn-paper)]">
      <div className="md:grid md:min-h-[600px] md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:min-h-[640px]">
        {/* 左：見出しと主導線 */}
        <div className="relative z-10 flex flex-col justify-center px-4 pb-6 pt-7 md:py-14 md:pl-[max(24px,calc((100vw-1160px)/2+24px))] md:pr-0">
          <p className="text-[13px] font-bold tracking-[0.08em] text-[color:var(--zn-moss)] md:text-[14px]">庭づくりの総合ガイド</p>
          <h1 className="mt-3 text-[32px] font-bold leading-[1.32] tracking-[0.04em] text-[color:var(--zn-ink)] md:mt-4 md:text-[46px] lg:text-[54px]">
            庭づくりの
            <br />
            <span className="text-[color:var(--zn-ai)]">専門業者</span>を比較
          </h1>

          {/* PC：見出しの直後に主導線。右の写真に少し重ねる */}
          <div className="relative mt-8 hidden md:block md:mr-[-110px] lg:mr-[-190px]">
            <div className="border border-[color:var(--zn-border-strong)] bg-white p-3">
              <HeroButtons />
            </div>
          </div>
          <HeroSub className="mt-6 hidden md:block" />
        </div>

        {/* 右（PC）：写真を見出しの下まで広げ、左から背景色のグラデーションを重ねる */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] md:block lg:w-[62%]" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-zouen-pc.jpg" alt="" width={1400} height={1315} className="absolute inset-0 h-full w-full object-cover object-[60%_55%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--zn-paper)_0%,var(--zn-paper)_6%,color-mix(in_srgb,var(--zn-paper)_82%,transparent)_24%,color-mix(in_srgb,var(--zn-paper)_35%,transparent)_42%,transparent_58%)]" />
          <p className="absolute bottom-3 right-3 bg-black/45 px-2 py-1 text-[11px] text-white">写真はイメージです</p>
        </div>
        <div className="hidden md:block" />

        {/* スマホ：写真の中に主導線 */}
        <div className="relative md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-zouen-sp.jpg" alt="日本庭園の苔の上を竹ぼうきで掃く作業者" width={1000} height={1037} className="block h-[400px] w-full object-cover object-[50%_20%]" fetchPriority="high" />
          <p className="absolute right-2 top-2 bg-black/45 px-2 py-0.5 text-[10px] text-white">写真はイメージです</p>
          <div className="absolute inset-x-3 bottom-3">
            <HeroButtons />
          </div>
        </div>
        <HeroSub className="px-4 pb-6 pt-5 md:hidden" />
      </div>
    </section>
  );
}

/* ─── 数字（サイト内のページを数えた値） ─── */
function Numbers() {
  const cityPages = [AREA_SUBSIDY_PAGES, AREA_TREE_PAGES, AREA_WASTE_PAGES].reduce((n, m) => n + Object.keys(m).length, 0);
  const guideCount = GUIDE_LINKS.filter((g) => g.href.startsWith("/guide/")).length;
  const items: { k: string; v: string; u: string; desc: string }[] = [
    { k: "掲載業者", v: String(companiesData.length), u: "社", desc: "各社の紹介ページあり" },
    { k: "エリア別ガイド", v: String(allAreaSlugs.length), u: "市", desc: `${prefCount}都道府県の市のページ` },
    { k: "お手入れガイド", v: String(guideCount), u: "本", desc: "剪定・雑草・生垣など" },
    { k: "市の制度・出し方", v: String(cityPages), u: "ページ", desc: "生垣・保存樹の助成、剪定枝の出し方" },
  ];
  return (
    <section className="border-b border-[color:var(--zn-border)] bg-white">
      <div className="zn-container">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {items.map((b, i) => (
            <div
              key={b.k}
              className={`px-3 py-5 md:px-6 md:py-7 ${i % 2 === 0 ? "border-r border-[color:var(--zn-border)]" : "md:border-r md:border-[color:var(--zn-border)]"} ${i < 2 ? "border-b border-[color:var(--zn-border)] md:border-b-0" : ""} ${i === 3 ? "md:border-r-0" : ""}`}
            >
              <dt className="text-[12px] font-bold tracking-[0.06em] text-[color:var(--zn-muted)] md:text-[13px]">{b.k}</dt>
              <dd className="mt-1.5">
                <span className="text-[30px] font-bold leading-none text-[color:var(--zn-ai)] md:text-[38px]">{b.v}</span>
                <span className="ml-1 text-[13px] font-bold md:text-[15px]">{b.u}</span>
                <span className="mt-1.5 block text-[12px] leading-snug text-[color:var(--zn-muted)] md:text-[13px]">{b.desc}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="zn-container pb-3 text-[11px] leading-relaxed text-[color:var(--zn-muted)]">
        ※ 数は当サイトの掲載ページを数えた値です（2026年11月4日時点）。写真はイメージです（Unsplash・撮影 Yoel Winkler）。
      </p>
    </section>
  );
}

/* ─── 作業・お悩みから探す ─── */
function TaskFinder() {
  return (
    <section id="task" className="zn-section scroll-mt-20">
      <div className="zn-container">
        <h2 className="zn-h2">作業・お悩みから探す</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {TASKS.map((t, i) => (
            <li key={t.href} data-reveal={String(i % 4)}>
              <Link href={t.href} className="zn-card zn-card-link group flex h-full flex-col items-center px-3 pb-4 pt-6 text-center md:pb-6 md:pt-8">
                <TaskIcon name={t.icon} size={96} className="h-[72px] w-[72px] text-[color:var(--zn-ai)] md:h-[100px] md:w-[100px]" />
                <span className="mt-3 text-[16px] font-bold tracking-[0.04em] md:mt-4 md:text-[18px]">{t.title}</span>
                <span className="mt-1 text-[12px] leading-snug text-[color:var(--zn-muted)] md:text-[13px]">{t.desc}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-[color:var(--zn-moss)] md:text-[13px]">
                  ガイドを見る
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid grid-cols-2 gap-3 md:mt-4 md:grid-cols-4 md:gap-4" data-reveal="1">
          {TASK_MORE.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="zn-card zn-card-link flex min-h-[52px] items-center justify-between px-4 text-[14px] font-bold">
                {label}
                <span className="text-[color:var(--zn-ai)]">
                  <ArrowRight />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── エリアから探す ─── */
function AreaSection() {
  return (
    <section id="area" className="zn-section zn-band scroll-mt-20">
      <div className="zn-container">
        <h2 className="zn-h2">エリアから探す</h2>
        <AreaFinder />
      </div>
    </section>
  );
}

/* ─── TOP3 ─── */
function TopRanking() {
  return (
    <section className="zn-section scroll-mt-20">
      <div className="zn-container">
        <h2 className="zn-h2">
          造園業者ランキング TOP3<small>編集部おすすめ</small>
        </h2>
        <p className="-mt-3 mb-6 text-[14px] text-[color:var(--zn-muted)] md:-mt-5 md:mb-8">口コミ・費用・対応の総合評価で厳選</p>
        <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
          {top3.map((company, i) => {
            const vr = getVerifiedRating(company.slug);
            return (
              <li key={company.slug} className={`zn-card flex flex-col p-5 md:p-6 ${i === 0 ? "border-2 border-[color:var(--zn-ai)]" : ""}`} data-reveal={String(i)}>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="text-[30px] font-bold leading-none text-[color:var(--zn-ai)]">
                    第{i + 1}
                    <span className="ml-0.5 text-[15px]">位</span>
                  </span>
                  <span className="rounded-[3px] border border-[color:var(--zn-moss)] px-2.5 py-0.5 text-[12px] font-bold text-[color:var(--zn-moss)]">{company.coverage}</span>
                </div>
                <h3 className="text-[20px] font-bold tracking-[0.03em]">{(company as { displayName?: string }).displayName ?? company.name}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-[color:var(--zn-muted)]">{company.tagline}</p>
                {/* 評価（出典付きの一次確認値がある社だけ表示） */}
                {vr ? (
                  <div className="mt-3 flex flex-wrap items-center gap-2 border-l-[3px] border-[color:var(--zn-moss)] bg-[color:var(--zn-paper)] px-3 py-2">
                    <span className="text-[14px] font-bold">★{vr.rating}</span>
                    <span className="text-[12px] text-[color:var(--zn-muted)]">
                      （{vr.sourceLabel}・口コミ{vr.reviewCount}件／{vr.fetchedAt}時点）
                    </span>
                  </div>
                ) : null}
                <ul className="mb-5 mt-4 flex-1 space-y-2 text-[14px]">
                  {company.features.slice(0, 3).map((f) => (
                    <li key={f} className="zn-dot">
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/company/${company.slug}/`} className={`zn-btn w-full text-[15px] ${i === 0 ? "" : "zn-btn--ghost"}`}>
                  詳細・口コミを見る
                  <ArrowRight />
                </Link>
              </li>
            );
          })}
        </ol>
        <div className="mt-6">
          <Link href="/ranking/" className="zn-btn zn-btn--ghost w-full sm:w-auto">
            全10社のランキングを見る
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── 剪定の公式料金 ─── */
function CostSection() {
  return (
    <section className="zn-section zn-band scroll-mt-20">
      <div className="zn-container max-w-[920px]">
        <h2 className="zn-h2">剪定の公式料金（掲載業者）</h2>
        <p className="-mt-3 mb-6 text-[14px] leading-relaxed text-[color:var(--zn-muted)] md:-mt-5 md:mb-8">
          各社公式の下限（税込・2026-10-25確認）。お庭110番は「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」と注記しています。金額は業者の見積もりで確認してください。
        </p>
        <ul className="zn-card divide-y divide-[color:var(--zn-border)]">
          {costCards.map((c, i) => (
            <li key={c.label} className="grid gap-2 px-4 py-5 md:grid-cols-[minmax(0,1fr)_200px_160px] md:items-center md:gap-6 md:px-6" data-reveal={String(i)}>
              <p className="text-[15px] font-bold">{c.label}</p>
              <p className="text-[24px] font-bold leading-none text-[color:var(--zn-ai)] md:text-right">
                {c.range}
                <span className="ml-1 text-[13px] font-bold text-[color:var(--zn-muted)]">/ {c.unit}</span>
              </p>
              <p className="text-[13px] md:text-right">
                <a href={c.src} target="_blank" rel="noopener noreferrer" className="text-[color:var(--zn-muted)] underline underline-offset-4 hover:text-[color:var(--zn-ai)]">
                  出典：公式料金ページ
                </a>
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/cost/price/" className="zn-btn zn-btn--ghost w-full sm:w-auto">
            詳細な費用相場ガイドを見る
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── よくある質問 ─── */
function FAQ() {
  return (
    <section className="zn-section scroll-mt-20">
      <div className="zn-container max-w-[920px]">
        <h2 className="zn-h2">よくある質問</h2>
        <p className="-mt-3 mb-6 text-[14px] text-[color:var(--zn-muted)] md:-mt-5 md:mb-8">利用者からよく寄せられる質問にお答えします</p>
        <div className="grid gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="zn-card" data-reveal="0">
              <p className="flex items-start gap-3 px-4 pt-4 text-[15px] font-bold leading-relaxed md:px-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[color:var(--zn-ai)] text-[13px] text-white">Q</span>
                <span className="flex-1 pt-0.5">{faq.q}</span>
              </p>
              <div className="mx-4 mb-4 mt-3 flex gap-3 border-t border-[color:var(--zn-border)] pt-3 text-[14px] leading-[1.9] text-[color:var(--zn-muted)] md:mx-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[color:var(--zn-ai)] text-[13px] font-bold text-[color:var(--zn-ai)]">A</span>
                <p className="flex-1">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 締めの導線 ─── */
function CTASection() {
  return (
    <section className="border-t border-[color:var(--zn-border)] bg-[color:var(--zn-wash)] py-14 md:py-20">
      <div className="zn-container max-w-[920px]">
        <div className="zn-card border-2 border-[color:var(--zn-ai)] px-5 py-8 text-center md:px-10 md:py-12" data-reveal="0">
          <h2 className="text-[22px] font-bold tracking-[0.04em] md:text-[28px]">庭の作業は複数の業者を比較して依頼します</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.9] text-[color:var(--zn-muted)]">複数の業者から無料で見積もりを取得し、条件に合う業者を選ぶことをおすすめします。</p>
          <div className="mt-7 flex justify-center">
            <Link href="/ranking/" className="zn-btn zn-btn--lg w-full sm:w-auto sm:px-12">
              無料で業者を比較する
            </Link>
          </div>
          <p className="mt-5 text-[12px] text-[color:var(--zn-muted)]">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="zn-page">
      <Hero />
      <Numbers />
      <TaskFinder />
      <AreaSection />
      <TopRanking />
      <CostSection />
      <FAQ />
      <CTASection />
      <ScrollReveal />
    </div>
  );
}
