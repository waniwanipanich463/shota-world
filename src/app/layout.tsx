import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./service-site.css";
import Header from "@/components/Header";
import CursorParticles from "@/components/CursorParticles";
import { brandIntro, brandName, brandShareImage, homeTitle } from "@/data/brand";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shota-world.jp"),
  title: homeTitle,
  description: `${brandIntro}ホームページ、ロゴ・キャラクター、チラシ・名刺など、お店やサービスに必要なデザインを情報整理から一緒につくります。`,
  applicationName: brandName,
  keywords: [
    brandName,
    "庭野翔太",
    "Shota Niwano",
    "ホームページ制作",
    "チラシ制作",
    "ロゴ制作",
    "キャラクターデザイン",
    "名刺デザイン",
    "Webデザイン",
    "グラフィックデザイン",
    "デザイナー",
  ],
  authors: [{ name: "庭野翔太", url: "https://www.shota-world.jp/#about" }],
  creator: "庭野翔太",
  publisher: brandName,
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
  verification: {
    google: "MUzIrfonFXFxKdf39FBcSaUec9pJHAD91GqReRJxduI",
  },
  openGraph: {
    title: homeTitle,
    description: "ホームページ、ロゴ・キャラクター、チラシ・名刺など、お店やサービスに必要なデザインを情報整理から一緒につくります。",
    url: "https://www.shota-world.jp",
    siteName: brandName,
    images: [
      {
        url: brandShareImage,
        width: 1200,
        height: 630,
        alt: brandName,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: "ホームページ、ロゴ・キャラクター、チラシ・名刺などのデザインを、情報整理から一緒につくります。",
    images: [brandShareImage],
    creator: "@Niwano_creator",
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=s-create", type: "image/svg+xml" },
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
        name: brandName,
        alternateName: ["庭野翔太", "Shota Niwano"],
        description:
          "デザイナー庭野翔太が運営する、Web・ロゴ・キャラクター・グラフィックデザインのスタジオ。",
        inLanguage: "ja-JP",
        publisher: {
          "@id": "https://www.shota-world.jp/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.shota-world.jp/#organization",
        name: brandName,
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
          "ロゴ制作",
          "キャラクターデザイン",
          "名刺デザイン",
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
        "@id": "https://www.shota-world.jp/#logo-character-design",
        name: "ロゴ・キャラクター制作",
        provider: {
          "@id": "https://www.shota-world.jp/#organization",
        },
        areaServed: "JP",
        url: "https://www.shota-world.jp/#service",
        description:
          "ヒアリング、デザイン提案、バリエーション制作、使用媒体に合わせた調整を含むロゴ・キャラクター制作。",
      },
      {
        "@type": "Service",
        "@id": "https://www.shota-world.jp/#flyer-design",
        name: "チラシ・名刺などの印刷物制作",
        provider: {
          "@id": "https://www.shota-world.jp/#organization",
        },
        areaServed: "JP",
        url: "https://www.shota-world.jp/#service",
        description:
          "掲載内容の整理、レイアウト・デザイン、印刷用データ作成、入稿サポートを含む印刷物制作。",
      },
    ],
  };

  return (
    <html lang="ja" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className="bg-background text-foreground antialiased overflow-x-hidden"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <CursorParticles />
        <Header />
        {children}
      </body>
    </html>
  );
}
