import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./service-site.css";
import Header from "@/components/Header";
import SiteIntro from "@/components/SiteIntro";
import CursorParticles from "@/components/CursorParticles";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shota-world.jp"),
  title: "SHOTA WORLD｜ホームページ・チラシ制作",
  description: "ホームページ制作とチラシ制作を行う、デザイナー庭野翔太のデザインスタジオ。伝えたい内容を整理し、見た人に届くデザインへ仕上げます。",
  keywords: ["SHOTA WORLD", "庭野翔太", "ホームページ制作", "チラシ制作", "Webデザイン", "グラフィックデザイン", "デザイナー"],
  authors: [{ name: "Shota Niwano" }],
  alternates: {
    canonical: "https://www.shota-world.jp",
  },
  openGraph: {
    title: "SHOTA WORLD｜ホームページ・チラシ制作",
    description: "伝えたいことを整理し、選ばれるデザインへ。デザイナー庭野翔太が、ホームページとチラシを制作します。",
    url: "https://www.shota-world.jp",
    siteName: "SHOTA WORLD",
    images: [
      {
        url: "/images/ogp/shota-world-ogp.jpg",
        width: 1200,
        height: 630,
        alt: "SHOTA WORLD",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHOTA WORLD｜ホームページ・チラシ制作",
    description: "伝えたいことを整理し、選ばれるデザインへ。ホームページとチラシの制作を承ります。",
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
        <CursorParticles />
        <Header />
        {children}
      </body>
    </html>
  );
}
