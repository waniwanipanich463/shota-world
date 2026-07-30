import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SHOTA WORLD｜庭野翔太のデザインスタジオ",
    short_name: "SHOTA WORLD",
    description:
      "デザイナー庭野翔太が運営する、ホームページ制作・チラシ制作のデザインスタジオ。",
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
