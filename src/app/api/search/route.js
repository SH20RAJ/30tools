import { NextResponse } from "next/server";
import toolsData from "@/constants/tools.json";

const getAllTools = () => {
  const tools = [];
  Object.entries(toolsData.categories).forEach(([categoryKey, category]) => {
    if (category.tools) {
      tools.push(
        ...category.tools.map((tool) => ({
          ...tool,
          categoryKey,
          categoryName: category.name,
          categorySlug: category.slug,
        })),
      );
    }
  });
  return tools;
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";
  const category = searchParams.get("category") || "";

  let allTools = getAllTools();

  // Filter by category if specified
  if (category && category !== "all") {
    allTools = allTools.filter((tool) => tool.categoryKey === category);
  }

  // If no query, return all tools
  if (!query) {
    return NextResponse.json({
      query: "",
      results: allTools,
      total: allTools.length,
      categories: Object.keys(toolsData.categories),
    });
  }

  // Search logic with scoring
  const searchResults = allTools
    .map((tool) => {
      let score = 0;
      const nameMatch = tool.name.toLowerCase().includes(query);
      const descMatch = tool.description.toLowerCase().includes(query);
      const categoryMatch = tool.categoryName.toLowerCase().includes(query);
      const routeMatch = tool.route.toLowerCase().includes(query);

      // Scoring system
      if (tool.name.toLowerCase() === query) score += 100;
      else if (tool.name.toLowerCase().startsWith(query)) score += 50;
      else if (nameMatch) score += 25;

      if (descMatch) score += 15;
      if (categoryMatch) score += 20;
      if (routeMatch) score += 10;
      if (tool.popular) score += 5;

      return { ...tool, score };
    })
    .filter((tool) => tool.score > 0)
    .sort((a, b) => b.score - a.score);

  return NextResponse.json({
    query,
    results: searchResults,
    total: searchResults.length,
    categories: Object.keys(toolsData.categories),
  });
}
