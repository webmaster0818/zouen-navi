import { logoSvg, LOGO_AI, LOGO_MOSS } from "./marks";

// ロゴマーク「石と若葉」（2026-11-04 刷新）。ファビコン（app/icon.svg・favicon.ico・apple-icon.png）も同じ形。
export function ZnMark({ size = 40, tone = "dark" }: { size?: number; tone?: "dark" | "light" }) {
  const stone = tone === "light" ? "#FFFFFF" : LOGO_AI;
  const leaf = tone === "light" ? "#B5CC85" : LOGO_MOSS;
  return <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" dangerouslySetInnerHTML={{ __html: logoSvg(stone, leaf) }} />;
}

/** ヘッダー・フッター共通のロゴ。表示する文字は従来どおり「造園ナビ」だけ */
export default function ZnLogo({ tone = "dark", size = 36 }: { tone?: "dark" | "light"; size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <ZnMark size={size} tone={tone} />
      <span className={`text-[22px] font-bold leading-none tracking-[0.08em] md:text-[24px] ${tone === "light" ? "text-white" : "text-[#1A2D4A]"}`}>造園ナビ</span>
    </span>
  );
}
