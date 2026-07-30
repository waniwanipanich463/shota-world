import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.shota-world.jp",
      lastModified: new Date("2026-07-30T00:00:00+09:00"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
