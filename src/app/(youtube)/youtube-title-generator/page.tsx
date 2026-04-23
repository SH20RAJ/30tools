import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Title Generator Online – Fast & No Signup | 30tools",
	description: "Generate catchy and SEO-friendly titles for your YouTube videos instantly. Our free online tool suggests high-CTR titles based on your topic and keywords to help you get more views. 100% free, fast, and no signup required.",
	keywords: "youtube title generator, free youtube title generator, online youtube title generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-generator",
	},
	openGraph: {
		title: "Free YouTube Title Generator Online – Fast & No Signup | 30tools",
		description: "Generate catchy and SEO-friendly titles for your YouTube videos instantly. Our free online tool suggests high-CTR titles based on your topic and keywords to help you get more views. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-title-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Generator Online – Fast & No Signup | 30tools",
		description: "Generate catchy and SEO-friendly titles for your YouTube videos instantly. Our free online tool suggests high-CTR titles based on your topic and keywords to help you get more views. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-title-generator",
        "name": "YouTube Title Generator",
        "description": "Generate catchy and SEO-friendly titles for your YouTube videos instantly. Our free online tool suggests high-CTR titles based on your topic and keywords to help you get more views.",
        "route": "/youtube-title-generator",
        "extraSlugs": [
                "free-youtube-title-generator-online",
                "youtube-title-generator-tool",
                "viral-youtube-title-maker"
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
						url: "https://30tools.com/youtube-title-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
