import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://disk-karaoke.patriciavolt9.chatgpt.site/sitemap.xml",
  };
}
