import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Article Rewriter Online – Fast & No Signup | 30tools",
	description: "Paraphrase and rewrite articles instantly with our free online Article Rewriter. Improve readability, change tone, and create unique content variations for blogs and SEO. 100% free and secure. 100% free, fast, and no signup required.",
	keywords: "article rewriter, free article rewriter, online article rewriter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/article-rewriter",
	},
	openGraph: {
		title: "Free Article Rewriter Online – Fast & No Signup | 30tools",
		description: "Paraphrase and rewrite articles instantly with our free online Article Rewriter. Improve readability, change tone, and create unique content variations for blogs and SEO. 100% free and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/article-rewriter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Article Rewriter Online – Fast & No Signup | 30tools",
		description: "Paraphrase and rewrite articles instantly with our free online Article Rewriter. Improve readability, change tone, and create unique content variations for blogs and SEO. 100% free and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "article-rewriter",
        "name": "Article Rewriter",
        "description": "Paraphrase and rewrite articles instantly with our free online Article Rewriter. Improve readability, change tone, and create unique content variations for blogs and SEO. 100% free and secure.",
        "route": "/article-rewriter",
        "extraSlugs": [
                "free-article-rewriter-online",
                "article-rewriter-tool",
                "paraphrase-tool-online-free"
        ],
        "popular": false,
        "category": "text"
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
						url: "https://30tools.com/article-rewriter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
