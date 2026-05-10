import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";


export const metadata = {
	title: "Free Complete SEO Audit Tool Online – Fast & No Signup | 30tools",
	description: "Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, fast, and no signup required.",
	keywords: "complete seo audit tool, free complete seo audit tool, online complete seo audit tool, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/seo-audit-tool",
	},
	openGraph: {
		title: "Free Complete SEO Audit Tool Online – Fast & No Signup | 30tools",
		description: "Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, fast, and no signup required.",
		url: "https://30tools.com/seo-audit-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Complete SEO Audit Tool Online – Fast & No Signup | 30tools",
		description: "Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "seo-audit-tool",
        "name": "Complete SEO Audit Tool",
        "description": "Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations.",
        "route": "/seo-audit-tool",
        "extraSlugs": [
                "bing-seo-keywords",
                "local-business-seo",
                "local-seo-tool",
                "seo-competition-analysis",
                "seo-potransition-tracker",
                "seo-tools",
                "technical-seo-audit",
                "website-meta-audit",
                "website-seo-audit"
        ],
        "popular": true,
        "category": "seo",
		"features": [
			"Comprehensive On-Page SEO Analysis",
			"Check Meta Tags (Title, Description, Robots)",
			"Analyze Heading Hierarchy (H1, H2, H3)",
			"Validate Structured Data & JSON-LD Schema",
			"Check Image Alt Attributes and Linking Structure",
			"No API Keys Required — Instant Processing"
		],
		"article": `
## Identify and Fix Technical SEO Issues in Seconds
A single missing canonical tag or misconfigured robots directive can tank a website's ranking. The Complete SEO Audit Tool acts as your technical co-pilot, scanning any public URL to detect critical errors before they impact your traffic. 

### What Our Auditor Checks
We go beyond simple keyword density. This tool parses the raw HTML of your target URL, extracting Open Graph tags, Twitter Cards, Schema.org markup, and heading structures. It checks for common pitfalls like duplicate H1s, missing image alt text, and broken canonical links.

### Safe, Secure, and Anonymous Auditing
Unlike heavy desktop crawlers or subscription SaaS products, our audit tool requires zero installation and no account. Your audit requests are proxied through our edge network, meaning the target server sees an anonymous fetch request. We do not store, index, or share the results of your audit.
		`,
		"howTo": {
			"name": "How to Run an SEO Audit",
			"steps": [
				{
					"name": "Enter the URL",
					"text": "Paste the full URL (including https://) of the page you want to audit into the input field."
				},
				{
					"name": "Run the Scan",
					"text": "Click the audit button. Our engine will fetch the page and analyze its HTML structure in real time."
				},
				{
					"name": "Review the Report",
					"text": "Scroll through the generated report. We categorize issues by severity (Errors, Warnings, Passed) so you know what to fix first."
				},
				{
					"name": "Apply Fixes",
					"text": "Use the provided recommendations and HTML snippets to update your website's code or CMS configuration."
				}
			]
		},
		"faqs": [
			{
				"question": "Can I audit my competitors' websites?",
				"answer": "Yes. Because the tool simply fetches public HTML, you can use it to analyze competitors' meta tags, heading structures, and schema markup."
			},
			{
				"question": "Does this tool check Core Web Vitals or page speed?",
				"answer": "This tool focuses purely on On-Page SEO elements (HTML structure). For detailed Core Web Vitals, we recommend using Google PageSpeed Insights."
			},
			{
				"question": "Are my audit results saved or shared?",
				"answer": "No. The audit results exist only in your browser session. Once you close the tab, the data is gone forever."
			},
			{
				"question": "Why did the audit fail to fetch my URL?",
				"answer": "If a site has strict anti-bot protection (like Cloudflare Turnstile) or blocks external fetching, our proxy may be unable to retrieve the HTML for analysis."
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
						url: "https://30tools.com/seo-audit-tool",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<BuiltInSafeHttp toolId="seo-audit-tool" />
			</ToolLayout>
		</>
	);
}
