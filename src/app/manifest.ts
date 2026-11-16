import type { MetadataRoute } from "next";
import { brandName } from "@/data/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brandName}｜庭野翔太のデザインスタジオ`,
    short_name: brandName,
    description:
      "デザイナー庭野翔太が運営する、Web・ロゴ・キャラクター・グラフィックデザインのスタジオ。",
    start_url: "/",
    display: "standalone",
    background_color: "#07070b",
    theme_color: "#07070b",
    lang: "ja",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
