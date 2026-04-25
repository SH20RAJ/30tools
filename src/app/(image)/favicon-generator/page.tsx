import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Favicon Generator Online – Fast & No Signup | 30tools",
	description: "Generate favicons from text, images, or emojis for websites 100% free, fast, and no signup required.",
	keywords: "favicon generator, free favicon generator, online favicon generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/favicon-generator",
	},
	openGraph: {
		title: "Free Favicon Generator Online – Fast & No Signup | 30tools",
		description: "Generate favicons from text, images, or emojis for websites 100% free, fast, and no signup required.",
		url: "https://30tools.com/favicon-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Favicon Generator Online – Fast & No Signup | 30tools",
		description: "Generate favicons from text, images, or emojis for websites 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "favicon-generator",
        "name": "Favicon Generator",
        "description": "Generate favicons from text, images, or emojis for websites",
        "route": "/favicon-generator",
        "extraSlugs": [
                "online-favicon-generator",
                "free-favicon-maker",
                "website-favicon-creator",
                "favicon-generator-no-signup",
                "favicon-maker-online",
                "create-favicon-online"
        ],
        "popular": true,
        "category": "image"
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
						url: "https://30tools.com/favicon-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
