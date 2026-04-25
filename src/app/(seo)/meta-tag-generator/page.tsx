import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Meta Tag Generator Online – Fast & No Signup | 30tools",
	description: "Free meta tag generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "meta tag generator, free meta tag generator, online meta tag generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/meta-tag-generator",
	},
	openGraph: {
		title: "Free Meta Tag Generator Online – Fast & No Signup | 30tools",
		description: "Free meta tag generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/meta-tag-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Meta Tag Generator Online – Fast & No Signup | 30tools",
		description: "Free meta tag generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "meta-tag-generator",
        "name": "Meta Tag Generator",
        "description": "Free meta tag generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/meta-tag-generator",
        "extraSlugs": [
                "free-meta-tag-generator",
                "free-meta-tag-generator-online",
                "meta-header-generator",
                "meta-tag-generator-tool",
                "meta-tags-generator"
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
						url: "https://30tools.com/meta-tag-generator",
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
