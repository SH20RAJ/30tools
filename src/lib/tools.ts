import toolsData from "@/constants/tools.json";

export interface Tool {
	id: string;
	name: string;
	description: string;
	route: string;
	category: string;
	extraSlugs?: string[];
	popular?: boolean;
	seoTitle?: string;
	seoDescription?: string;
	categoryName?: string;
	categorySlug?: string;
	features?: string[];
	howTo?: {
		name?: string;
		steps?: { name: string; text: string; url?: string }[];
	};
	faqs?: { question: string; answer: string }[];
}

export interface Category {
	name: string;
	slug: string;
	icon: string;
	description: string;
	tools: Tool[];
}

export const categories = toolsData.categories as unknown as Record<string, Category>;

export function getAllTools(): Tool[] {
	return Object.values(categories).flatMap((cat) => cat.tools);
}

export function getToolByRoute(route: string): Tool | undefined {
	return getAllTools().find((t) => t.route === route);
}

export function getToolById(id: string): Tool | undefined {
	return getAllTools().find((t) => t.id === id);
}

export function getAllCategories(): Category[] {
	return Object.values(categories);
}

export function getCategoryBySlug(slug: string): Category | undefined {
	return getAllCategories().find((category) => category.slug === slug);
}

export function getRelatedTools(tool: Tool, limit: number = 10): Tool[] {
	if (!tool) return [];
	const allTools = getAllTools();
	return allTools
		.filter((t) => t.id !== tool.id && t.category === tool.category)
		.slice(0, limit);
}
