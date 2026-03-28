export default async function robots({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const baseUrl = "https://30tools.com";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/admin/", "/_next/static/", "/private/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Bingbot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Yandex",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Slurp", // Yahoo
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "DuckDuckBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Baiduspider",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
