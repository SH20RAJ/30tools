import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Twitter Card Generator Online – Fast & No Signup | 30tools",
	description: "Free twitter card generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "twitter card generator, free twitter card generator, online twitter card generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/twitter-card-generator",
	},
	openGraph: {
		title: "Free Twitter Card Generator Online – Fast & No Signup | 30tools",
		description: "Free twitter card generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/twitter-card-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Twitter Card Generator Online – Fast & No Signup | 30tools",
		description: "Free twitter card generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "twitter-card-generator",
        "name": "Twitter Card Generator",
        "description": "Free twitter card generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/twitter-card-generator",
        "extraSlugs": [
                "free-twitter-card-generator-online",
                "twitter-card-generator-tool",
                "twitter-header-size-maker",
                "twitter-bio-maker"
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
						url: "https://30tools.com/twitter-card-generator",
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
