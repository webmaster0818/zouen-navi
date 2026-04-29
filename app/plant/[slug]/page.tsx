import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import plantsData from "@/data/plants.json";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/app/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return plantsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plant = plantsData.find((p) => p.slug === slug);
  if (!plant) return {};
  return {
    title: plant.title,
    description: plant.description,
  };
}

export default async function PlantPage({ params }: Props) {
  const { slug } = await params;
  const plant = plantsData.find((p) => p.slug === slug);
  if (!plant) notFound();

  const recCompanies = companiesData.filter((c) =>
    plant.recommendedCompanies.includes(c.slug)
  );

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "植物ガイド" },
          { label: plant.title },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
          <span className="bg-[#15803D] text-white text-xs font-bold px-3 py-1 rounded-full">植物ガイド</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3 mb-3">{plant.title}</h1>
          <p className="text-gray-600 leading-relaxed">{plant.description}</p>
        </div>

        {/* Plants List */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">おすすめ品種一覧</h2>
        <div className="space-y-4 mb-8">
          {plant.plants.map((p, i) => (
            <div key={p.name} className="bg-white rounded-xl shadow-sm border border-green-100 p-5">
              <div className="flex items-start gap-3">
                <span className="bg-[#15803D] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">{p.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 text-sm">
                    <div className="bg-[#F0FDF4] rounded-lg p-2">
                      <span className="text-[#15803D] font-bold text-xs">特徴</span>
                      <p className="text-gray-700 mt-1">{p.features}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2">
                      <span className="text-blue-700 font-bold text-xs">手入れ</span>
                      <p className="text-gray-700 mt-1">{p.care}</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-2">
                      <span className="text-yellow-700 font-bold text-xs">価格目安</span>
                      <p className="text-gray-700 mt-1 font-bold">{p.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="bg-[#F0FDF4] rounded-xl p-6 mb-6 border border-green-200">
          <h2 className="font-bold text-[#15803D] text-lg mb-4">プロのアドバイス</h2>
          <ul className="space-y-2">
            {plant.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#15803D] font-bold mt-0.5 text-base">💡</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <div className="space-y-4">
            {plant.faqs.map((faq, i) => (
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
        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6">
          <h2 className="font-bold text-gray-800 text-lg mb-4">この作業に強いおすすめ業者</h2>
          <div className="space-y-3">
            {recCompanies.map((company) => (
              <div key={company.slug} className="flex items-center justify-between p-3 bg-[#F0FDF4] rounded-xl">
                <div>
                  <p className="font-bold text-gray-800">{company.name}</p>
                  <p className="text-xs text-gray-500">{company.tagline}</p>
                </div>
                <Link
                  href={`/company/${company.slug}/`}
                  className="bg-[#F59E0B] hover:bg-amber-500 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors flex-shrink-0"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
