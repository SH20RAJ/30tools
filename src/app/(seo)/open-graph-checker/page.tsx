import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";


export const metadata = {
	title: "Free Open Graph Checker Online – Fast & No Signup | 30tools",
	description: "Free open graph checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "open graph checker, free open graph checker, online open graph checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/open-graph-checker",
	},
	openGraph: {
		title: "Free Open Graph Checker Online – Fast & No Signup | 30tools",
		description: "Free open graph checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/open-graph-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Open Graph Checker Online – Fast & No Signup | 30tools",
		description: "Free open graph checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "open-graph-checker",
        "name": "Open Graph Checker",
        "description": "Free open graph checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/open-graph-checker",
        "extraSlugs": [
                "free-open-graph-checker-online",
                "open-graph-checker-tool"
        ],
        "popular": false,
        "category": "seo",
		"features": [
			"Preview Social Media Sharing Cards (Facebook, Twitter, LinkedIn)",
			"Detect Missing or Malformed Open Graph (og:) Tags",
			"Validate Image Dimensions and Aspect Ratios",
			"Check Twitter Card Types (summary_large_image, etc.)",
			"No Login Required — Instant URL Fetching"
		],
		"article": `
## Ensure Your Links Look Great on Social Media
When someone shares your website on Facebook, Twitter, LinkedIn, or Slack, those platforms look for specific meta tags—called Open Graph tags—to generate the preview card. The Open Graph Checker allows you to see exactly how your URL will look before you post it, ensuring maximum click-through rates.

### Why Open Graph Tags Matter
A link shared without proper Open Graph tags often defaults to a random image from the page (or no image at all) and truncated text. By verifying your \`og:image\`, \`og:title\`, and \`og:description\`, you control the narrative and branding of your content across the web.

### Debug Caching Issues
Social platforms aggressively cache Open Graph data. If you recently updated your article's featured image but Facebook is still showing the old one, our checker helps you confirm that your live HTML actually reflects the changes. (Note: You may still need to use the platform's native sharing debugger to clear their specific cache).
		`,
		"howTo": {
			"name": "How to Use the Open Graph Checker",
			"steps": [
				{
					"name": "Enter Your URL",
					"text": "Paste the complete URL of the page you want to test into the checker."
				},
				{
					"name": "Fetch Meta Tags",
					"text": "Click check. The tool will download the HTML of the page and parse the <head> section."
				},
				{
					"name": "Review the Previews",
					"text": "Look at the generated visual previews for Facebook, Twitter, and LinkedIn to ensure the image isn't cropped awkwardly."
				},
				{
					"name": "Fix Missing Tags",
					"text": "If the tool flags any missing required tags, copy the recommended HTML snippets into your website's header."
				}
			]
		},
		"faqs": [
			{
				"question": "What is the best image size for Open Graph?",
				"answer": "The recommended size for an og:image is 1200 x 630 pixels. This 1.91:1 aspect ratio displays perfectly across Facebook, Twitter, and LinkedIn."
			},
			{
				"question": "Why does my preview look fine here but wrong on Facebook?",
				"answer": "Facebook caches your tags the first time a URL is shared. You must use the Facebook Sharing Debugger tool to scrape the URL again and clear their cache."
			},
			{
				"question": "Are Twitter Cards different from Open Graph?",
				"answer": "Yes, Twitter uses its own 'twitter:' meta tags (like twitter:card=summary_large_image). However, if Twitter tags are missing, it will fall back to using standard Open Graph tags."
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
						url: "https://30tools.com/open-graph-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<BuiltInSafeHttp toolId="open-graph-checker" />
			</ToolLayout>
		</>
	);
}
