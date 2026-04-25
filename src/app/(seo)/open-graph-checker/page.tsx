import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


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
						url: "https://30tools.com/open-graph-checker",
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
