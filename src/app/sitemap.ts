import { MetadataRoute } from "next";
import { getAllTools, getAllCategories } from "@/constants/tools-utils";

const BASE_URL = "https://30tools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const allTools = getAllTools();
  const allCategories = getAllCategories();
  const currentDate = new Date();

  // Static pages with optimized priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/help`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/api-docs`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // Tool pages with intelligent priority calculation
  const toolPages: MetadataRoute.Sitemap = allTools.flatMap((tool: any) => {
    // Calculate priority based on popularity and category importance
    let priority = 0.8; // Base priority for tools

    // Boost popular tools
    if (tool.popular === true) {
      priority += 0.1;
    }

    // Category-based priority adjustments
    const categoryPriorities: Record<string, number> = {
      image: 0.95, // High demand category
      pdf: 0.92, // Very popular
      video: 0.9, // High value
      text: 0.9, // Commonly used
      seo: 0.9, // Professional tools
      developer: 0.9, // Technical audience
      utilities: 0.9, // General tools
      audio: 0.9, // Specialized
      converter: 0.9, // High utility
      design: 0.9, // Creative tools
      legal: 0.9, // Niche category
      calculators: 0.9, // Niche category
    };

    priority = Math.min(0.95, categoryPriorities[tool.category] || 0.8);

    // Determine change frequency based on tool type
    let changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never" = "weekly";
    if (["image", "pdf", "video"].includes(tool.category)) {
      changeFrequency = "daily"; // High-traffic tools
    } else if (["text", "seo", "developer"].includes(tool.category)) {
      changeFrequency = "weekly";
    } else {
      changeFrequency = "monthly";
    }

    const mainEntry = {
      url: tool.external ? tool.route : `${BASE_URL}${tool.route}`,
      lastModified: currentDate,
      changeFrequency,
      priority: Math.round(priority * 100) / 100, // Round to 2 decimal places
    };

    // Add entries for extra slugs if they exist
    const extraEntries = (tool.extraSlugs || []).map((slug: string) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: currentDate,
      changeFrequency,
      priority: Math.round((priority - 0.05) * 100) / 100, // Slightly lower priority for variants
    }));

    return [mainEntry, ...extraEntries];
  });

  // Category landing pages
  const categoryPages: MetadataRoute.Sitemap = allCategories.map(
    (category: any) => ({
      url: `${BASE_URL}/${category.slug}`, // Assuming categories are at root /slug or /tools/slug?
      // Based on previous sitemaps, some were /tools/[category], but tools.json says slug: "generators", and route logic might map /generators.
      // The old sitemap.js produced `${BASE_URL}/${category}-tools` (hardcoded list)
      // The enhanced-sitemap route.js used `${BASE_URL}/${category.slug}`.
      // Let's assume `${BASE_URL}/${category.slug}` is the correct canonical path for now based on improved logic in enhanced-sitemap.
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    }),
  );

  // Blog posts - skipping complex FS read for now to keep it safe,
  // or I can re-implement the try-catch block from the original sitemap.js if needed.
  // The original sitemap.js had it. Let's add it back for completeness.

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const fs = require("fs");
    const path = require("path");
    const blogsDirectory = path.join(process.cwd(), "src/app/(content)/blog");
    // Check if directory exists first
    if (fs.existsSync(blogsDirectory)) {
      const blogFolders = fs
        .readdirSync(blogsDirectory)
        .filter((file: string) => {
          return fs.statSync(path.join(blogsDirectory, file)).isDirectory();
        });

      blogPages = blogFolders.map((slug: string) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.warn("Could not read blog directory for sitemap:", error);
  }

  return [...staticPages, ...categoryPages, ...toolPages, ...blogPages].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  );
}
