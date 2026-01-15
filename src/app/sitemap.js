import { getAllTools } from "@/constants/tools-utils";

const BASE_URL = "https://30tools.com";

export default function sitemap() {
  const allTools = getAllTools();
  const currentDate = new Date();

  // Static pages with optimized priorities
  const staticPages = [
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
      url: `${BASE_URL}/calculators`,
      lastModified: currentDate,
      changeFrequency: "weekly",
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
  const toolPages = allTools.flatMap((tool) => {
    // Calculate priority based on popularity and category importance
    let priority = 0.8; // Base priority for tools

    // Boost popular tools
    if (tool.popular === true) {
      priority += 0.1;
    }

    // Category-based priority adjustments
    const categoryPriorities = {
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
    let changeFrequency = "weekly";
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
    const extraEntries = (tool.extraSlugs || []).map(slug => ({
      url: `${BASE_URL}/${slug}`, // slugs in filtered list don't have leading slash usually, but verify middleware logic
      lastModified: currentDate,
      changeFrequency,
      priority: Math.round((priority - 0.05) * 100) / 100, // Slightly lower priority for variants
    }));

    return [mainEntry, ...extraEntries];
  });

  // Category landing pages (future expansion)
  const categoryPages = [
    "image",
    "pdf",
    "video",
    "text",
    "seo",
    "developer",
    "utilities",
    "audio",
  ].map((category) => ({
    url: `${BASE_URL}/${category}-tools`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Blog posts from src/app/(content)/blog
  let blogPages = [];
  try {
      const fs = require('fs');
      const path = require('path');
      const blogsDirectory = path.join(process.cwd(), 'src/app/(content)/blog');
      const blogFolders = fs.readdirSync(blogsDirectory).filter(file => {
          // Filter out files, keep directories (potential blog slugs)
          // Also avoid Next.js page files if they are at the root of blog dir (page.tsx handled by staticPages)
          return fs.statSync(path.join(blogsDirectory, file)).isDirectory();
      });

      blogPages = blogFolders.map(slug => ({
          url: `${BASE_URL}/blog/${slug}`,
          lastModified: currentDate,
          changeFrequency: 'monthly',
          priority: 0.7,
      }));
  } catch (error) {
      console.warn("Could not read blog directory for sitemap:", error);
  }

  return [...staticPages, ...toolPages, ...categoryPages, ...blogPages].sort(
    (a, b) => b.priority - a.priority,
  ); // Sort by priority for better crawling
}
