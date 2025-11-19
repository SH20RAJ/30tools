"use server";

import toolsData from "@/constants/tools.json";

const mainCategories = [
  "image",
  "pdf",
  "video",
  "audio",
  "text",
  "code",
  "seo",
  "design",
  "utilities",
  "developer",
  "youtube",
];

export async function getOtherTools() {
  try {
    const allTools = [];

    // Collect all tools from all categories
    Object.entries(toolsData.categories).forEach(([categoryKey, category]) => {
      if (category.tools && Array.isArray(category.tools)) {
        category.tools.forEach((tool) => {
          allTools.push({
            ...tool,
            categoryName: category.name,
            categorySlug: categoryKey,
          });
        });
      }
    });

    // Filter tools that are not in main categories
    const otherTools = allTools.filter(
      (tool) => !mainCategories.includes(tool.category),
    );

    // Group by category for better organization
    const groupedOtherTools = {};
    otherTools.forEach((tool) => {
      if (!groupedOtherTools[tool.categorySlug]) {
        groupedOtherTools[tool.categorySlug] = {
          categoryName: tool.categoryName,
          tools: [],
        };
      }
      groupedOtherTools[tool.categorySlug].tools.push(tool);
    });

    return {
      success: true,
      data: {
        allOtherTools: otherTools,
        groupedOtherTools,
        totalCount: otherTools.length,
        categories: Object.keys(groupedOtherTools),
      },
    };
  } catch (error) {
    console.error("Error fetching other tools:", error);
    return {
      success: false,
      error: "Failed to fetch other tools",
      data: {
        allOtherTools: [],
        groupedOtherTools: {},
        totalCount: 0,
        categories: [],
      },
    };
  }
}

export async function getToolsByCategory(category) {
  try {
    if (!toolsData.categories[category]) {
      return {
        success: false,
        error: "Category not found",
        data: [],
      };
    }

    const categoryData = toolsData.categories[category];
    const tools = categoryData.tools || [];

    return {
      success: true,
      data: {
        categoryName: categoryData.name,
        tools: tools.map((tool) => ({
          ...tool,
          categoryName: categoryData.name,
          categorySlug: category,
        })),
        totalCount: tools.length,
      },
    };
  } catch (error) {
    console.error("Error fetching tools by category:", error);
    return {
      success: false,
      error: "Failed to fetch tools",
      data: [],
    };
  }
}

export async function getAllCategories() {
  try {
    const categories = Object.entries(toolsData.categories).map(
      ([key, category]) => ({
        slug: key,
        name: category.name,
        description: category.description,
        icon: category.icon,
        toolsCount: category.tools ? category.tools.length : 0,
        isMainCategory: mainCategories.includes(key),
      }),
    );

    return {
      success: true,
      data: {
        allCategories: categories,
        mainCategories: categories.filter((cat) => cat.isMainCategory),
        otherCategories: categories.filter((cat) => !cat.isMainCategory),
        totalCategories: categories.length,
      },
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      success: false,
      error: "Failed to fetch categories",
      data: {
        allCategories: [],
        mainCategories: [],
        otherCategories: [],
        totalCategories: 0,
      },
    };
  }
}
