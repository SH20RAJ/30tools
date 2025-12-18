const BASE_URL = "https://30tools.com";

export default async function sitemap() {
    try {
        const res = await fetch("https://dev.to/api/articles?tag=webdev&top=7&per_page=30", {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch articles");
        }

        const articles = await res.json();

        const blogRoutes = articles.map((article) => ({
            url: `${BASE_URL}/blogs/${article.user.username}/${article.slug}`,
            lastModified: new Date(article.published_at),
            changeFrequency: "monthly",
            priority: 0.7,
        }));

        const listingRoute = {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        };

        return [listingRoute, ...blogRoutes];
    } catch (error) {
        console.error("Error generating blog sitemap:", error);
        return [];
    }
}
