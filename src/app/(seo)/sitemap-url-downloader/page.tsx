import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Sitemap Url Downloader Online – Fast & No Signup | 30tools",
	description: "Free Sitemap Url Downloader online. Sitemap Url Downloader allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "sitemap url downloader, free sitemap url downloader, online sitemap url downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/sitemap-url-downloader",
	},
	openGraph: {
		title: "Free Sitemap Url Downloader Online – Fast & No Signup | 30tools",
		description: "Free Sitemap Url Downloader online. Sitemap Url Downloader allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/sitemap-url-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Sitemap Url Downloader Online – Fast & No Signup | 30tools",
		description: "Free Sitemap Url Downloader online. Sitemap Url Downloader allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "sitemap-url-downloader",
        "name": "Sitemap Url Downloader",
        "description": "Free Sitemap Url Downloader online. Sitemap Url Downloader allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
        "route": "/sitemap-url-downloader",
        "extraSlugs": [
                "sitemap-url-downloader"
        ],
        "popular": false,
        "category": "seo"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/sitemap-url-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
