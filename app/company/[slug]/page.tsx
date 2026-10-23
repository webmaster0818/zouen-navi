import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import { getVerifiedRating } from "@/app/lib/verifiedRating";
import Breadcrumb from "@/app/components/Breadcrumb";

type CompanyExtra = {
  seoTitle?: string;
  seoDescription?: string;
  answer?: {
    heading: string;
    paragraphs: string[];
    reviewLink?: { href: string; label: string };
    source: string;
  };
  faqs?: { q: string; a: string }[];
  ctaNote?: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return companiesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) return {};
  const c = company as CompanyExtra;
  return {
    alternates: { canonical: `/company/${slug}/` },
    title: c.seoTitle ?? `${company.name}の評判・口コミ・費用｜特徴と料金`,
    description: c.seoDescription ?? `${company.name}の特徴・料金・口コミを解説します。${company.tagline}。造園ナビ編集部が調査した情報を掲載しています。`,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) notFound();

  const rank = companiesData.findIndex((c) => c.slug === slug) + 1;
  const vr = getVerifiedRating(company.slug);
  const extra = company as CompanyExtra;
  const faqLd = extra.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: extra.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "業者ランキング", href: "/ranking/" },
          { label: company.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6 border-l-4 border-[#15803D]">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-sm font-bold text-white bg-[#15803D] px-2 py-0.5 rounded-full mr-2">第{rank}位</span>
              <span className="text-sm text-white bg-gray-500 px-2 py-0.5 rounded-full">{company.coverage}</span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">{company.name}</h1>
              <p className="text-gray-600 mt-1">{company.tagline}</p>
            </div>
            {vr && (
              <div className="text-right">
                <span className="text-lg font-bold text-gray-800">★{vr.rating}</span>
                <p className="text-sm text-gray-500">
                  <a href={vr.mapsUri} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{vr.sourceLabel}</a>
                  ・口コミ{vr.reviewCount}件（{vr.fetchedAt}時点）
                </p>
              </div>
            )}
          </div>
          <p className="text-gray-700 leading-relaxed">{company.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {company.features.map((f) => (
              <span key={f} className="bg-[#F0FDF4] text-[#15803D] border border-green-200 rounded-full px-3 py-1 text-sm font-medium">
                 {f}
              </span>
            ))}
          </div>
        </div>

        {extra.answer && (
          <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6 border border-green-100">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{extra.answer.heading}</h2>
            {extra.answer.paragraphs.map((p) => (
              <p key={p} className="text-gray-700 leading-relaxed mb-3">{p}</p>
            ))}
            {extra.answer.reviewLink && (
              <p className="text-sm mb-3">
                <Link href={extra.answer.reviewLink.href} className="text-[#15803D] underline underline-offset-2">
                  {extra.answer.reviewLink.label}
                </Link>
              </p>
            )}
            <p className="text-xs text-gray-500">{extra.answer.source}</p>
          </section>
        )}

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F0FDF4] rounded-xl p-5 border border-green-200">
            <h2 className="font-bold text-[#15803D] text-lg mb-3 flex items-center gap-2">
              <span></span> メリット
            </h2>
            <ul className="space-y-2">
              {company.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold mt-0.5">◉</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          {company.cons.length > 0 && (
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
              <h2 className="font-bold text-[#92400E] text-lg mb-3 flex items-center gap-2">
                <span></span> デメリット
              </h2>
              <ul className="space-y-2">
                {company.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-orange-500 font-bold mt-0.5">◉</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">{company.name}に無料で相談する</h2>
          <p className="text-green-100 text-sm mb-4">{extra.ctaNote ?? "見積もりは無料です。依頼条件の詳細は公式サイトにてご確認ください。"}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {company.officialUrl && (
            <a
              href={company.officialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all"
            >
              公式サイトを見る（PR）
            </a>
            )}
            <Link
              href="/ranking/"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-3 rounded-full border border-white/30 transition-all"
            >
              他の業者と比較する
            </Link>
          </div>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>

        {extra.faqs && extra.faqs.length > 0 && (
          <section className="mt-8">
            <h2 className="font-bold text-gray-800 text-lg mb-4">よくある質問</h2>
            <dl className="space-y-4">
              {extra.faqs.map((f) => (
                <div key={f.q} className="bg-white rounded-xl p-5 border border-green-100">
                  <dt className="font-semibold text-gray-800 mb-2">Q. {f.q}</dt>
                  <dd className="text-sm text-gray-700 leading-relaxed">A. {f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        {faqLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        )}

        {/* Related */}
        <div className="mt-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">関連サービスガイド</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/service/pruning/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-sm text-center">
              <span className="text-2xl"></span>
              <p className="font-medium text-gray-700 mt-1">剪定費用ガイド</p>
            </Link>
            <Link href="/cost/price/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-sm text-center">
              <span className="text-2xl"></span>
              <p className="font-medium text-gray-700 mt-1">料金相場一覧</p>
            </Link>
            <Link href="/ranking/" className="bg-white rounded-xl p-4 border border-green-100 hover:border-[#15803D] transition-colors text-sm text-center">
              <span className="text-2xl"></span>
              <p className="font-medium text-gray-700 mt-1">全業者ランキング</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
