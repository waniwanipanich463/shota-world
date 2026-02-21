import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHOTA WORLD | DESIGN WITHOUT LIMITS",
  description: "Official portfolio of Shota Niwano. Graphic, Web, Photo, Movie. ストリートと海の自由さをデザインに落とし込む。",
  keywords: ["SHOTA WORLD", "Shota Niwano", "Portfolio", "Graphic Design", "Web Design", "Video Production", "Street", "HipHop"],
  authors: [{ name: "Shota Niwano" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "SHOTA WORLD | DESIGN WITHOUT LIMITS",
    description: "Official portfolio of Shota Niwano. Graphic, Web, Photo, Movie.",
    url: "https://shota-world.com", // Placeholder
    siteName: "SHOTA WORLD",
    images: [
      {
        url: "/assets/logo-main.png",
        width: 1200,
        height: 630,
        alt: "SHOTA WORLD Logo",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHOTA WORLD | DESIGN WITHOUT LIMITS",
    description: "Official portfolio of Shota Niwano. Graphic, Web, Photo, Movie.",
    images: ["/assets/logo-main.png"],
    creator: "@your_id", // Placeholder as per request
  },
  icons: {
    icon: "/assets/logo-icon.png",
    shortcut: "/assets/logo-icon.png",
    apple: "/assets/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
