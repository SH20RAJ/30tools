import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free URL Parser Online – Fast & No Signup | 30tools",
	description: "Free url parser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "url parser, free url parser, online url parser, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-parser",
	},
	openGraph: {
		title: "Free URL Parser Online – Fast & No Signup | 30tools",
		description: "Free url parser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/url-parser",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Parser Online – Fast & No Signup | 30tools",
		description: "Free url parser tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "url-parser",
        "name": "URL Parser",
        "description": "Free url parser tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/url-parser",
        "extraSlugs": [
                "free-url-parser-online",
                "sitemap-parser",
                "url-parser-tool"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/url-parser",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
