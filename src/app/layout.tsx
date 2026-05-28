import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SiteIntro from "@/components/SiteIntro";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shota-world.jp"),
  title: "SHOTA WORLD｜AI ART × VISUAL DESIGN",
  description: "AIアートとビジュアルデザインを組み合わせ、広告・ポスター・SNSクリエイティブに使える印象的な世界観を制作するポートフォリオサイトです。",
  keywords: ["SHOTA WORLD", "Shota Niwano", "AI Art", "Visual Design", "Portfolio", "Graphic Design", "AI Creator"],
  authors: [{ name: "Shota Niwano" }],
  alternates: {
    canonical: "https://www.shota-world.jp",
  },
  openGraph: {
    title: "SHOTA WORLD｜AIで描く。デザインで伝える。",
    description: "AIアート、ポスター、SNS広告、キービジュアルなど、世界観のあるビジュアル制作を行うSHOTA WORLDのポートフォリオサイト。",
    url: "https://www.shota-world.jp",
    siteName: "SHOTA WORLD",
    images: [
      {
        url: "/images/ogp/shota-world-ogp.jpg",
        width: 1200,
        height: 630,
        alt: "SHOTA WORLD misty synthwave city",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHOTA WORLD｜AIで描く。デザインで伝える。",
    description: "AIアート、ポスター、SNS広告、キービジュアルなど、世界観のあるビジュアル制作を行うSHOTA WORLDのポートフォリオサイト。",
    images: ["/images/ogp/shota-world-ogp.jpg"],
    creator: "@Niwano_creator",
  },
  icons: {
    icon: "/fabicon.png",
    shortcut: "/fabicon.png",
    apple: "/fabicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050715",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className="bg-background text-foreground antialiased overflow-x-hidden"
      >
        <SiteIntro />
        <Header />
        {children}
      </body>
    </html>
  );
}
