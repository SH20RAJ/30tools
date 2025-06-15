import toolsData from './tools.json';
import seoConfig from './seo-config.json';

/**
 * Get all tools as a flat array
 */
export function getAllTools() {
    const allTools = [];

    Object.entries(toolsData.categories).forEach(([categoryKey, categoryData]) => {
        if (categoryData.tools) {
            categoryData.tools.forEach(tool => {
                allTools.push({
                    ...tool,
                    categoryKey,
                    categoryName: categoryData.name,
                    categorySlug: categoryData.slug,
                    categoryIcon: categoryData.icon
                });
            });
        }
    });

    return allTools;
}

/**
 * Get popular tools
 */
export function getPopularTools(limit = 8) {
    return getAllTools()
        .filter(tool => tool.popular)
        .slice(0, limit);
}

/**
 * Get tools by category
 */
export function getToolsByCategory(categoryKey) {
    const category = toolsData.categories[categoryKey];
    if (!category || !category.tools) return [];

    return category.tools.map(tool => ({
        ...tool,
        categoryKey,
        categoryName: category.name,
        categorySlug: category.slug,
        categoryIcon: category.icon
    }));
}

/**
 * Get category information
 */
export function getCategory(categoryKey) {
    return toolsData.categories[categoryKey] || null;
}

/**
 * Get all categories
 */
export function getAllCategories() {
    return Object.entries(toolsData.categories).map(([key, category]) => ({
        key,
        ...category
    }));
}

/**
 * Search tools
 */
export function searchTools(query, categoryFilter = 'all') {
    const allTools = getAllTools();

    if (!query) {
        return categoryFilter === 'all'
            ? allTools.filter(tool => tool.popular)
            : allTools.filter(tool => tool.categoryKey === categoryFilter);
    }

    const searchQuery = query.toLowerCase();

    return allTools
        .map(tool => {
            let score = 0;

            // Name match (highest priority)
            if (tool.name.toLowerCase().includes(searchQuery)) {
                score += 100;
            }

            // Description match
            if (tool.description.toLowerCase().includes(searchQuery)) {
                score += 70;
            }

            // Category match
            if (tool.categoryName.toLowerCase().includes(searchQuery)) {
                score += 50;
            }

            // Boost popular tools
            if (tool.popular) {
                score *= 1.2;
            }

            return { ...tool, searchScore: score };
        })
        .filter(tool => {
            const matchesCategory = categoryFilter === 'all' || tool.categoryKey === categoryFilter;
            const matchesQuery = tool.searchScore > 0;
            return matchesCategory && matchesQuery;
        })
        .sort((a, b) => b.searchScore - a.searchScore);
}

/**
 * Get tool by ID
 */
export function getToolById(toolId) {
    return getAllTools().find(tool => tool.id === toolId) || null;
}

/**
 * Get SEO configuration
 */
export function getSEOConfig() {
    return seoConfig.seoConfig;
}

/**
 * Get category SEO description
 */
export function getCategorySEODescription(categoryKey) {
    return seoConfig.categoryDescriptions[categoryKey] || null;
}

/**
 * Get global content (FAQs, features, etc.)
 */
export function getGlobalContent() {
    return seoConfig.globalContent;
}

export { toolsData, seoConfig };
