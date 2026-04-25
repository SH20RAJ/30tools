import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Advanced Keyword Research Online – Fast & No Signup | 30tools",
	description: "Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO. 100% free, fast, and no signup required.",
	keywords: "advanced keyword research, free advanced keyword research, online advanced keyword research, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/keyword-research-tool",
	},
	openGraph: {
		title: "Free Advanced Keyword Research Online – Fast & No Signup | 30tools",
		description: "Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO. 100% free, fast, and no signup required.",
		url: "https://30tools.com/keyword-research-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Advanced Keyword Research Online – Fast & No Signup | 30tools",
		description: "Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "keyword-research-tool",
        "name": "Advanced Keyword Research",
        "description": "Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO.",
        "route": "/keyword-research-tool",
        "extraSlugs": [
                "advanced-regex-tool",
                "bing-keyword-research",
                "bing-keyword-tool",
                "competitor-keyword-spy",
                "google-keyword-research",
                "keyword-counter-tool",
                "keyword-ideas-bing",
                "keyword-monitoring-tool",
                "keyword-tool-google",
                "long-tail-keyword-tool"
        ],
        "popular": true,
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
						url: "https://30tools.com/keyword-research-tool",
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
