import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


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
						url: "https://30tools.com/seo-audit-tool",
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
