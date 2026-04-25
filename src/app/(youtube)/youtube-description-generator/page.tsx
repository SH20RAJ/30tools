import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Description Generator Online – Fast & No Signup | 30tools",
	description: "Create SEO-optimized YouTube video descriptions instantly. Our free online generator helps you include keywords, links, and timestamps to boost your video visibility and engagement. 100% free, fast, and no signup required.",
	keywords: "youtube description generator, free youtube description generator, online youtube description generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-description-generator",
	},
	openGraph: {
		title: "Free YouTube Description Generator Online – Fast & No Signup | 30tools",
		description: "Create SEO-optimized YouTube video descriptions instantly. Our free online generator helps you include keywords, links, and timestamps to boost your video visibility and engagement. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-description-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Description Generator Online – Fast & No Signup | 30tools",
		description: "Create SEO-optimized YouTube video descriptions instantly. Our free online generator helps you include keywords, links, and timestamps to boost your video visibility and engagement. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-description-generator",
        "name": "YouTube Description Generator",
        "description": "Create SEO-optimized YouTube video descriptions instantly. Our free online generator helps you include keywords, links, and timestamps to boost your video visibility and engagement.",
        "route": "/youtube-description-generator",
        "extraSlugs": [
                "free-youtube-description-generator-online",
                "youtube-description-generator-tool",
                "youtube-seo-description-maker"
        ],
        "popular": false,
        "category": "youtube"
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
						url: "https://30tools.com/youtube-description-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
