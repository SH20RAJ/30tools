import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Tag Generator Online – Fast & No Signup | 30tools",
	description: "Generate SEO-friendly tags for your YouTube videos instantly. Our free online tool suggests relevant keywords based on your video topic to help you rank higher in search results. 100% free, fast, and no signup required.",
	keywords: "youtube tag generator, free youtube tag generator, online youtube tag generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-tag-generator",
	},
	openGraph: {
		title: "Free YouTube Tag Generator Online – Fast & No Signup | 30tools",
		description: "Generate SEO-friendly tags for your YouTube videos instantly. Our free online tool suggests relevant keywords based on your video topic to help you rank higher in search results. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-tag-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Tag Generator Online – Fast & No Signup | 30tools",
		description: "Generate SEO-friendly tags for your YouTube videos instantly. Our free online tool suggests relevant keywords based on your video topic to help you rank higher in search results. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-tag-generator",
        "name": "YouTube Tag Generator",
        "description": "Generate SEO-friendly tags for your YouTube videos instantly. This free online YouTube Tag Generator suggests relevant keywords based on your video topic to improve search rankings, increase visibility, and reach a wider audience.",
        "route": "/youtube-tag-generator",
        "extraSlugs": [
                "free-youtube-tag-generator-online",
                "youtube-tag-generator-tool",
                "youtube-seo-tag-maker"
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
						url: "https://30tools.com/youtube-tag-generator",
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