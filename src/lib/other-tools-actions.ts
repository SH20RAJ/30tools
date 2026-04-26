"use server";

import toolsData from "@/constants/tools.json";
import { type Tool, type Category } from "@/lib/tools";

interface ToolWithCategory extends Tool {
	categoryName: string;
	categorySlug: string;
}

interface GroupedOtherTools {
	[key: string]: {
		categoryName: string;
		tools: ToolWithCategory[];
	};
}

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

const typedCategories = toolsData.categories as unknown as Record<string, Category>;

export async function getOtherTools() {
	try {
		const allTools: ToolWithCategory[] = [];

		// Collect all tools from all categories
		Object.entries(typedCategories).forEach(([categoryKey, category]) => {
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
		const groupedOtherTools: GroupedOtherTools = {};
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

export async function getToolsByCategory(category: string) {
	try {
		if (!typedCategories[category]) {
			return {
				success: false,
				error: "Category not found",
				data: null,
			};
		}

		const categoryData = typedCategories[category];
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
			data: null,
		};
	}
}

export async function getAllCategories() {
	try {
		const categories = Object.entries(typedCategories).map(
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
