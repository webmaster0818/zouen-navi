import type { ReactNode } from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import {
  Cards, Cta, FaqList, Note, Related, Section, SourceList, Steps, Toc, articleJsonLd,
  type Faq, type Item, type RelatedLink, type Source,
} from "@/app/components/GuideParts";

/**
 * 市の生垣・緑化・保存樹の助成を扱うエリア子ページ（/area/<市>/<制度>/）の部品。2026-11-01 追加。
 * 金額・条件は各ページの config に、確認した公式ページの記載どおりに書く。
 */

export type Fact = { k: string; v: ReactNode };

export type SubsidySection = {
  id: string;
  title: string;
  body?: ReactNode;
  cards?: Item[];
  cardsAlt?: boolean;
  steps?: Item[];
  after?: ReactNode;
  note?: ReactNode;
};

export type SubsidyConfig = {
  pageUrl: string;
  citySlug: string;
  city: string;
  crumb: string;
  title: string;
  jsonLdDescription: string;
  updatedIso: string;
  updatedLabel: string;
  lead: ReactNode[];
  factsTitle: string;
  facts: Fact[];
  factsNote: ReactNode;
  sections: SubsidySection[];
  faqs: Faq[];
  sources: Source[];
  related: RelatedLink[];
  cta: string;
};

export default function SubsidyPage({ c }: { c: SubsidyConfig }) {
  const toc = [
    { id: "sb-facts", label: c.factsTitle },
    ...c.sections.map((s) => ({ id: s.id, label: s.title })),
    { id: "sb-faq", label: "よくある質問" },
    { id: "sb-sources", label: "本ページで参照した公式ページ" },
  ];
  const jsonLd = articleJsonLd({
    title: c.title,
    description: c.jsonLdDescription,
    updatedIso: c.updatedIso,
    url: c.pageUrl,
    faqs: c.faqs,
  });

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb
        items={[
          { label: "エリア別ガイド" },
          { label: c.city, href: `/area/${c.citySlug}/` },
          { label: c.crumb },
        ]}
      />

      <header className="mt-2">
        <span className="label inline-block mb-3 text-primary">エリア別ガイド</span>
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-text-primary mb-4">{c.title}</h1>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-6">
          <time dateTime={c.updatedIso}>最終更新：{c.updatedLabel}</time>
          <span className="w-px h-3 bg-border" />
          <span>造園ナビ編集部</span>
        </div>
        {c.lead.map((x, i) => (
          <p key={i} className="text-[15px] leading-8 text-text-secondary mb-4">
            {x}
          </p>
        ))}
      </header>

      <Toc toc={toc} />

      <Section id="sb-facts" title={c.factsTitle}>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[480px]">
            <tbody>
              {c.facts.map((f, idx) => (
                <tr key={f.k} className={idx % 2 ? "bg-surface-alt" : "bg-surface"}>
                  <th scope="row" className="text-left align-top font-semibold text-text-primary px-4 py-3 whitespace-nowrap">
                    {f.k}
                  </th>
                  <td className="px-4 py-3 align-top text-text-secondary leading-7">{f.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-7 text-text-muted mt-3">{c.factsNote}</p>
      </Section>

      {c.sections.map((s) => (
        <Section key={s.id} id={s.id} title={s.title}>
          {s.body}
          {s.cards ? <Cards items={s.cards} alt={s.cardsAlt} /> : null}
          {s.steps ? <Steps items={s.steps} /> : null}
          {s.after ? <p className="text-[15px] leading-8 text-text-secondary mt-5">{s.after}</p> : null}
          {s.note ? <div className="mt-5"><Note>{s.note}</Note></div> : null}
        </Section>
      ))}

      <Section id="sb-faq" title="よくある質問">
        <FaqList faqs={c.faqs} />
      </Section>

      <Section id="sb-sources" title="本ページで参照した公式ページ">
        <SourceList sources={c.sources} checked="2026年11月1日" />
      </Section>

      <Related links={c.related} />

      <Cta text={c.cta} updatedLabel={c.updatedLabel} />
    </article>
  );
}

