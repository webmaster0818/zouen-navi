import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import servicesData from "@/data/services.json";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/app/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const recCompanies = companiesData.filter((c) =>
    service.recommendedCompanies.includes(c.slug)
  );

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "サービスガイド" },
          { label: service.title },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
          <span className="bg-[#92400E] text-white text-xs font-bold px-3 py-1 rounded-full">サービスガイド</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3 mb-3">{service.title}</h1>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>

          {/* Cost Range */}
          <div className="mt-4 bg-[#F0FDF4] rounded-xl p-4 border border-green-200">
            <p className="text-xs text-gray-500 mb-1">費用目安</p>
            <p className="text-2xl font-bold text-[#15803D]">
              {service.costRange.min.toLocaleString()}〜{service.costRange.max.toLocaleString()}円
            </p>
            <p className="text-sm text-gray-500">/ {service.costRange.unit}</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4 mb-8">
          {service.sections.map((section, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="bg-[#15803D] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="bg-[#F0FDF4] rounded-xl p-6 mb-6 border border-green-200">
          <h2 className="font-bold text-[#15803D] text-lg mb-4">専門家のアドバイス</h2>
          <ul className="space-y-2">
            {service.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#F59E0B] font-bold mt-0.5 text-base"></span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <p className="font-bold text-[#15803D] mb-2 flex items-start gap-2">
                  <span className="bg-[#15803D] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">Q</span>
                  {faq.question}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                  <span className="bg-[#F59E0B] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">A</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Companies */}
        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 mb-6">
          <h2 className="font-bold text-gray-800 text-lg mb-4">このサービスに強いおすすめ業者</h2>
          <div className="space-y-3">
            {recCompanies.map((company, i) => {
              const medals = ["", "", ""];
              return (
                <div key={company.slug} className="flex items-center justify-between p-3 bg-[#F0FDF4] rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{medals[i] || ""}</span>
                    <div>
                      <p className="font-bold text-gray-800">{company.name}</p>
                      <p className="text-xs text-gray-500">{company.tagline}</p>
                    </div>
                  </div>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="bg-[#F59E0B] hover:bg-amber-500 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors flex-shrink-0"
                  >
                    詳細を見る
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#15803D] to-[#166534] rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">無料で業者を比較する</h2>
          <p className="text-green-100 text-sm mb-4">複数の業者から見積もりを取って、最適な業者を選びましょう。</p>
          <Link
            href="/ranking/"
            className="bg-[#F59E0B] hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all inline-block"
          >
            業者ランキングを見る
          </Link>
          <p className="text-xs text-green-300 mt-3">※当サイトはアフィリエイト広告を含みます</p>
        </div>
      </div>
    </div>
  );
}
