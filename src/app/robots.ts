import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.shota-world.jp/sitemap.xml",
    host: "https://www.shota-world.jp",
  };
}
