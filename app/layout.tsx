import type { Metadata } from "next";
import "./globals.css";
import { OG_IMAGES } from "@/app/lib/og";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://zouen-navi.com"),
  twitter: {
    card: "summary_large_image",
    images: OG_IMAGES,
  },
  title: {
    default: "造園ナビ｜庭づくりの専門業者を比較する総合ガイド",
    template: "%s | 造園ナビ",
  },
  description:
    "造園ナビは、庭の剪定・造園・外構工事の業者を比較するポータルサイトです。費用相場・口コミ・各社の特徴を解説し、利用者の目的に沿った業者選びを支援します。",
  keywords: ["造園", "庭師", "剪定", "外構", "庭づくり", "業者比較", "造園ナビ"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "造園ナビ",
    images: OG_IMAGES,
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
        <main className="flex-1">{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"造園ナビ\",\"url\":\"https://zouen-navi.com/\",\"logo\":\"https://zouen-navi.com/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://zouen-navi.com/about/\"]}" }}
        />
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
