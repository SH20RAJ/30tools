import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Backlink Checker Online – Fast & No Signup | 30tools",
	description: "Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
	keywords: "backlink checker, free backlink checker, online backlink checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/backlink-checker",
	},
	openGraph: {
		title: "Free Backlink Checker Online – Fast & No Signup | 30tools",
		description: "Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
		url: "https://30tools.com/backlink-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Backlink Checker Online – Fast & No Signup | 30tools",
		description: "Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "backlink-checker",
        "name": "Backlink Checker",
        "description": "Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
        "route": "/backlink-checker",
        "extraSlugs": [
                "backlink checker free",
                "check backlinks online",
                "backlink analyzer tool",
                "website backlink checker",
                "seo backlink checker",
                "check website backlinks",
                "free backlink audit",
                "backlink analysis tool",
                "website-backlink-analysis"
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
						url: "https://30tools.com/backlink-checker",
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
