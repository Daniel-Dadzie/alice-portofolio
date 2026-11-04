import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alice-portofolio.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: "2026-11-04T00:00:00.000Z",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
