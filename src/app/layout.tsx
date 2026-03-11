import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SHOTA WORLD | TROPICAL ESCAPE",
  description: "Official portfolio of Shota Niwano. Tropical luxury and relaxed design. 海と光の美しさをデザインに落とし込む。",
  keywords: ["SHOTA WORLD", "Shota Niwano", "Portfolio", "Graphic Design", "Tropical", "Luxury", "Relaxed Design"],
  authors: [{ name: "Shota Niwano" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "SHOTA WORLD | TROPICAL ESCAPE",
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
    title: "SHOTA WORLD | TROPICAL ESCAPE",
    description: "Official portfolio of Shota Niwano. Graphic, Web, Photo, Movie.",
    images: ["/assets/logo-main.png"],
    creator: "@your_id", // Placeholder as per request
  },
  icons: {
    icon: "/fabicon.png",
    shortcut: "/fabicon.png",
    apple: "/fabicon.png",
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
        className={`${montserrat.variable} ${cormorant.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
