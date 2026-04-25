import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Open Graph Generator Online – Fast & No Signup | 30tools",
	description: "Free open graph generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "open graph generator, free open graph generator, online open graph generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/open-graph-generator",
	},
	openGraph: {
		title: "Free Open Graph Generator Online – Fast & No Signup | 30tools",
		description: "Free open graph generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/open-graph-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Open Graph Generator Online – Fast & No Signup | 30tools",
		description: "Free open graph generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "open-graph-generator",
        "name": "Open Graph Generator",
        "description": "Free open graph generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/open-graph-generator",
        "extraSlugs": [
                "free-open-graph-generator-online",
                "open-graph-generator-tool"
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
						url: "https://30tools.com/open-graph-generator",
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
