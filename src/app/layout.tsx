import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./service-site.css";
import Header from "@/components/Header";
import SiteIntro from "@/components/SiteIntro";
import CursorParticles from "@/components/CursorParticles";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shota-world.jp"),
  title: "SHOTA WORLD｜庭野翔太のホームページ・チラシ制作",
  description: "SHOTA WORLDは、デザイナー庭野翔太が運営するデザインスタジオです。ホームページ制作とチラシ制作を、情報整理からデザイン、公開・納品まで一貫して行います。",
  applicationName: "SHOTA WORLD",
  keywords: [
    "SHOTA WORLD",
    "庭野翔太",
    "Shota Niwano",
    "ホームページ制作",
    "チラシ制作",
    "Webデザイン",
    "グラフィックデザイン",
    "デザイナー",
  ],
  authors: [{ name: "庭野翔太", url: "https://www.shota-world.jp/#about" }],
  creator: "庭野翔太",
  publisher: "SHOTA WORLD",
  category: "design",
  alternates: {
    canonical: "https://www.shota-world.jp",
    languages: {
      "ja-JP": "https://www.shota-world.jp",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "SHOTA WORLD｜庭野翔太のホームページ・チラシ制作",
    description: "デザイナー庭野翔太が、ホームページとチラシを情報整理からデザイン、公開・納品まで制作します。",
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
    title: "SHOTA WORLD｜庭野翔太のホームページ・チラシ制作",
    description: "デザイナー庭野翔太が、ホームページとチラシを制作します。",
    images: ["/images/ogp/shota-world-ogp.jpg"],
    creator: "@Niwano_creator",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.shota-world.jp/#website",
        url: "https://www.shota-world.jp",
        name: "SHOTA WORLD",
        alternateName: ["庭野翔太", "Shota Niwano"],
        description:
          "デザイナー庭野翔太が運営する、ホームページ制作・チラシ制作のデザインスタジオ。",
        inLanguage: "ja-JP",
        publisher: {
          "@id": "https://www.shota-world.jp/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.shota-world.jp/#organization",
        name: "SHOTA WORLD",
        alternateName: "SHOTA WORLD DESIGN STUDIO",
        url: "https://www.shota-world.jp",
        logo: {
          "@type": "ImageObject",
          url: "https://www.shota-world.jp/icon.png",
          width: 512,
          height: 512,
        },
        founder: {
          "@id": "https://www.shota-world.jp/#person",
        },
        sameAs: [
          "https://www.instagram.com/niwano_creator/",
          "https://x.com/Niwano_creator",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.shota-world.jp/#person",
        name: "庭野翔太",
        alternateName: "Shota Niwano",
        url: "https://www.shota-world.jp/#about",
        image: "https://www.shota-world.jp/images/profile/shota-artist-profile.jpg",
        jobTitle: "Web・グラフィックデザイナー",
        worksFor: {
          "@id": "https://www.shota-world.jp/#organization",
        },
        knowsAbout: [
          "ホームページ制作",
          "Webデザイン",
          "チラシ制作",
          "グラフィックデザイン",
          "ビジュアルデザイン",
        ],
        sameAs: [
          "https://www.instagram.com/niwano_creator/",
          "https://x.com/Niwano_creator",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.shota-world.jp/#website-design",
        name: "ホームページ制作",
        provider: {
          "@id": "https://www.shota-world.jp/#organization",
        },
        areaServed: "JP",
        url: "https://www.shota-world.jp/#service",
        description:
          "情報整理、オリジナルデザイン、スマートフォン対応、公開までを含むホームページ制作。",
      },
      {
        "@type": "Service",
        "@id": "https://www.shota-world.jp/#flyer-design",
        name: "チラシ制作",
        provider: {
          "@id": "https://www.shota-world.jp/#organization",
        },
        areaServed: "JP",
        url: "https://www.shota-world.jp/#service",
        description:
          "掲載内容の整理、写真・ビジュアル調整、印刷用データ作成を含むチラシ制作。",
      },
    ],
  };

  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className="bg-background text-foreground antialiased overflow-x-hidden"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SiteIntro />
        <CursorParticles />
        <Header />
        {children}
      </body>
    </html>
  );
}
