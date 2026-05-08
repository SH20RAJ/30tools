import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


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
        "category": "seo",
		"features": [
			"Extract Every URL from Any XML Sitemap",
			"Support for Nested/Index Sitemaps",
			"Filter URLs by Pattern or Subdirectory",
			"Export to Clean CSV or Plain Text Format",
			"Fast Server-Side Parsing of Massive XML Files"
		],
		"article": `
## Easily Extract URLs from Large XML Sitemaps
Whether you are performing a site migration, auditing a competitor's content architecture, or preparing a list for a crawling tool like Screaming Frog, manually copying URLs from an XML sitemap is impossible. The Sitemap URL Downloader automates this process instantly.

### Handling Nested Sitemaps
Modern websites often use Sitemap Indexes—a single XML file that points to dozens of other XML sitemaps. Our extraction engine automatically detects index files and recursively parses the child sitemaps, ensuring you get every single URL in one consolidated list.

### Built for Scale
Large e-commerce sites and publishers can have sitemaps containing up to 50,000 URLs per file. Our proxy engine streams the XML parsing, preventing browser crashes and delivering the final CSV export rapidly, without requiring any desktop software installation.
		`,
		"howTo": {
			"name": "How to Download URLs from a Sitemap",
			"steps": [
				{
					"name": "Locate the Sitemap URL",
					"text": "Find the target XML sitemap (usually located at domain.com/sitemap.xml or specified in the robots.txt)."
				},
				{
					"name": "Enter and Fetch",
					"text": "Paste the sitemap URL into our tool and click extract. The engine will download and parse the XML."
				},
				{
					"name": "Filter the List (Optional)",
					"text": "Use the built-in search filter to narrow down the URLs (e.g., typing '/blog/' to only see blog posts)."
				},
				{
					"name": "Export Data",
					"text": "Download the final list as a plain text file (.txt) or CSV for easy import into Excel or your favorite SEO crawler."
				}
			]
		},
		"faqs": [
			{
				"question": "Can this tool read sitemaps blocked by robots.txt?",
				"answer": "Our tool functions as a standard web crawler. If the server explicitly blocks our proxy IP or requires authentication, the fetch may fail."
			},
			{
				"question": "Does it extract image and video sitemaps?",
				"answer": "Currently, the tool focuses on extracting the primary page <loc> URLs from standard XML sitemaps."
			},
			{
				"question": "Is there a limit to how many URLs it can extract?",
				"answer": "While the tool can handle standard 50,000 URL sitemaps, extremely massive index sitemaps (millions of URLs) may time out depending on the target server's response speed."
			}
		]
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
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
