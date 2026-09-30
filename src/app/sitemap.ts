import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.shota-world.jp",
      lastModified: new Date("2026-09-30T00:00:00+09:00"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.shota-world.jp/works",
      lastModified: new Date("2026-09-30T00:00:00+09:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
