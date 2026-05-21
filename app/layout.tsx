import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://zouen-navi.com"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
  title: {
    default: "造園ナビ｜庭づくりのプロが見つかる総合ガイド",
    template: "%s | 造園ナビ",
  },
  description:
    "造園ナビは、庭の剪定・造園・外構工事のおすすめ業者を徹底比較するポータルサイトです。費用相場・口コミ・特徴を詳しく解説。あなたにぴったりの造園業者が見つかります。",
  keywords: ["造園", "庭師", "剪定", "外構", "庭づくり", "業者比較", "造園ナビ"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "造園ナビ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F0FDF4] font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
