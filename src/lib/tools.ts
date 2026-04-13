import toolsData from "@/constants/tools.json";

export interface Tool {
	id: string;
	name: string;
	description: string;
	route: string;
	category: string;
	extraSlugs?: string[];
	popular?: boolean;
}

export interface Category {
	name: string;
	slug: string;
	icon: string;
	description: string;
	tools: Tool[];
}

export const categories = toolsData.categories as Record<string, Category>;

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
