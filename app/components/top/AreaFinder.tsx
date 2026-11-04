import Link from "next/link";
import { regions, tokyo, allAreaSlugs, prefCount, type AreaLink } from "@/data/areaRegions";

const Chevron = () => (
  <svg className="zn-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function Tiles({ items }: { items: AreaLink[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((x) => (
        <li key={x.slug}>
          <Link
            href={`/area/${x.slug}/`}
            className="flex min-h-[48px] items-center justify-between gap-2 rounded-[3px] border border-[color:var(--zn-border)] bg-white px-3.5 text-[14px] font-bold text-[color:var(--zn-ink)] transition-colors hover:border-[color:var(--zn-ai)] hover:bg-[color:var(--zn-wash)]"
          >
            <span>{x.label}</span>
            <svg className="h-3.5 w-3.5 shrink-0 text-[color:var(--zn-moss)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const summaryCls = "flex min-h-[60px] items-center justify-between gap-3 px-4 md:px-5";

/** TOP「エリアから探す」。東京は最上部の別枠、地方は都道府県ごと。地方はすべて折りたたみ（JS 不要の details）。 */
export default function AreaFinder() {
  return (
    <div>
      <p className="mb-5 text-[14px] text-[color:var(--zn-muted)]">
        {prefCount}都道府県・{allAreaSlugs.length}市のエリア別ガイドがあります。地方名を押すと市の一覧が開きます。
      </p>

      <div className="mb-4 grid gap-4 rounded-[3px] border-2 border-[color:var(--zn-ai)] bg-white p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-6" data-reveal="0">
        <div>
          <p className="text-[18px] font-bold tracking-[0.06em] text-[color:var(--zn-ai-dark)]">東京</p>
          <p className="mt-1 text-[13px] leading-relaxed text-[color:var(--zn-muted)]">23区・市ごとのページは、現在ありません。都内の方は東京のエリアガイドをご覧ください。</p>
        </div>
        <Link href={`/area/${tokyo.slug}/`} className="zn-btn w-full md:w-auto">
          東京のエリアガイドを見る
        </Link>
      </div>

      <div className="grid gap-3">
        {regions.map((r, i) => {
          const n = r.prefectures.reduce((m, p) => m + p.areas.length, 0);
          return (
            <details key={r.name} className="zn-acc group overflow-hidden rounded-[3px] border border-[color:var(--zn-border-strong)] bg-white" data-reveal={String(i + 1)}>
              <summary className={`${summaryCls} group-open:border-b group-open:border-[color:var(--zn-border)]`}>
                <span className="text-[16px] font-bold tracking-[0.04em] text-[color:var(--zn-ai-dark)]">{r.name}</span>
                <span className="flex items-center gap-2 text-[12px] font-bold text-[color:var(--zn-muted)]">
                  {n}市
                  <span className="text-[color:var(--zn-ai)]">
                    <Chevron />
                  </span>
                </span>
              </summary>
              <div className="divide-y divide-[color:var(--zn-border)] bg-[color:var(--zn-paper)]">
                {r.prefectures.map((p) => (
                  <div key={p.name} className="px-4 py-4 md:grid md:grid-cols-[120px_minmax(0,1fr)] md:items-start md:gap-4 md:px-6">
                    <p className="mb-2.5 text-[14px] font-bold md:mb-0 md:flex md:min-h-[48px] md:items-center">{p.name}</p>
                    <Tiles items={p.areas} />
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
