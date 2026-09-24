import { MetadataRoute } from "next";
import { flatNav } from "@/lib/navigation";

const BASE = "https://docs.chatty.personaliai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const navItems = flatNav();

  const entries: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...navItems.map((item) => {
      let priority = 0.8;
      if (item.href === "/introduction" || item.href === "/quickstart") priority = 1.0;
      else if (item.href.startsWith("/guides/")) priority = 0.9;
      else if (item.href.startsWith("/api-reference/")) priority = 0.8;
      else if (item.href === "/changelog") priority = 0.6;
      else if (item.href === "/security") priority = 0.7;

      return {
        url: `${BASE}${item.href}`,
        lastModified: new Date(),
        changeFrequency: item.href === "/changelog" ? ("weekly" as const) : ("monthly" as const),
        priority,
      };
    }),
  ];

  return entries;
}

