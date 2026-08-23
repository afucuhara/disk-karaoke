import type { MetadataRoute } from "next";

const baseUrl = "https://disk-karaoke.patriciavolt9.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/sobre`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/produtos`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
