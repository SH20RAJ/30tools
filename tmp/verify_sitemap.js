const LANGUAGES = [
	"en", "es", "fr", "de", "it", "pt", "hi", "ja", "zh", "ko", "ru", "ar", "tr", "vi", "id",
];

const mockTools = Array.from({ length: 135 }, (_, i) => ({
	route: `/tool-${i}`,
	category: "utilities",
}));

const mockCategories = Array.from({ length: 12 }, (_, i) => ({
	slug: `category-${i}`,
}));

const mockBlogs = Array.from({ length: 5 }, (_, i) => ({
	slug: `blog-${i}`,
}));

const staticPagesSlugs = ["", "/search", "/about", "/contact", "/privacy", "/terms", "/blog"];

let count = 0;

// Static pages
count += staticPagesSlugs.length * LANGUAGES.length;

// Tools
count += mockTools.length * LANGUAGES.length;

// Categories
count += mockCategories.length * LANGUAGES.length;

// Blogs
count += mockBlogs.length * LANGUAGES.length;

// Downloaders (roughly 60)
count += (1 + 60) * LANGUAGES.length;

console.log(`Estimated total URLs in sitemap: ${count}`);
console.log(`Increase factor: ${count / (staticPagesSlugs.length + mockTools.length + mockCategories.length + mockBlogs.length + 61)}x`);
