import toolsData from "@/constants/tools.json";

export const STATIC_ROUTES = {
	HOME: "/",
	SEARCH: "/search",
	CONTACT: "/contact",
	PRIVACY: "/privacy",
	TERMS: "/terms",
	ABOUT: "/about",
};

export const SUPPORTED_LANGUAGES = [
	"en", "es", "fr", "de", "hi", "it", "pt", "ja", "zh", "ko", "ru", "tr", "vi", "id"
];

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
	categoryKey?: string;
	categoryName?: string;
	categorySlug?: string;
	features?: string[];
	howTo?: {
		name?: string;
		steps?: { name: string; text: string; url?: string }[];
	};
	faqs?: { question: string; answer: string }[];
	author?: any;
	reviews?: any[];
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
	return Object.values(categories).flatMap((cat) => cat?.tools || []);
}

export function getToolByRoute(route: string): Tool | undefined {
	return getAllTools().find((t) => t.route === route);
}

export function getToolById(id: string): Tool | undefined {
	return getAllTools().find((t) => t.id === id);
}

export function getToolByExtraSlug(slug: string): Tool | undefined {
	return getAllTools().find((t) => t.extraSlugs?.includes(slug));
}

export function getAllCategories(): Category[] {
	return Object.values(categories);
}

export function getAllToolsByCategory(categorySlug: string): Tool[] {
	const category = getCategoryBySlug(categorySlug);
	return category ? category.tools : [];
}

export function getCategoryBySlug(slug: string): Category | undefined {
	return getAllCategories().find((category) => category.slug === slug);
}

/**
 * Returns the route for a tool by its ID.
 * If the ID is not found, returns "/" as a fallback.
 */
export function getRouteById(id: string): string {
	const tool = getToolById(id);
	return tool ? tool.route : "/";
}

let cachedAllTools: Tool[] | null = null;

export function getRelatedTools(tool: Tool, limit: number = 10): Tool[] {
	if (!tool) return [];
	
	if (!cachedAllTools) {
		cachedAllTools = getAllTools();
	}
	
	// Fast filter to same category or popular tools first
	const sameCategory = cachedAllTools.filter(t => t.category === tool.category && t.id !== tool.id);
	const popularOthers = cachedAllTools.filter(t => t.category !== tool.category && t.popular && t.id !== tool.id);
	
	const pool = [...sameCategory, ...popularOthers];
	
	// Define clusters based on common intent keywords
	const intents = ["converter", "downloader", "generator", "tester", "validator", "compressor", "calculator"];
	const toolIntent = intents.find(intent => 
		tool.id.toLowerCase().includes(intent) || 
		tool.name.toLowerCase().includes(intent)
	);

	return pool
		.sort((a, b) => {
			// 1. Same category is highest priority
			if (a.category === tool.category && b.category !== tool.category) return -1;
			if (b.category === tool.category && a.category !== tool.category) return 1;

			// 2. Same intent is second priority
			if (toolIntent) {
				const aHasIntent = a.id.toLowerCase().includes(toolIntent) || a.name.toLowerCase().includes(toolIntent);
				const bHasIntent = b.id.toLowerCase().includes(toolIntent) || b.name.toLowerCase().includes(toolIntent);
				if (aHasIntent && !bHasIntent) return -1;
				if (bHasIntent && !aHasIntent) return 1;
			}

			// 3. Popular tools are third priority
			if (a.popular && !b.popular) return -1;
			if (b.popular && !a.popular) return 1;

			return 0;
		})
		.slice(0, limit);
}
