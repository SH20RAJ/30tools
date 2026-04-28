import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free AI Image Generator Online – Fast & No Signup | 30tools",
	description: "Generate stunning AI images from text prompts instantly. Create photorealistic photos, digital art, anime, and illustrations for free. No signup required, unlimited generations, and 100% private browser-based processing.",
	keywords: "ai image generator, free ai image generator, online ai image generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ai-image-generator",
	},
	openGraph: {
		title: "Free AI Image Generator Online – Fast & No Signup | 30tools",
		description: "Generate stunning AI images from text prompts instantly. Create photorealistic photos, digital art, anime, and illustrations for free. No signup required, unlimited generations, and 100% private browser-based processing.",
		url: "https://30tools.com/ai-image-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI Image Generator Online – Fast & No Signup | 30tools",
		description: "Generate stunning AI images from text prompts instantly. Create photorealistic photos, digital art, anime, and illustrations for free. No signup required, unlimited generations, and 100% private browser-based processing.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ai-image-generator",
        "name": "AI Image Generator",
        "description": "Generate stunning AI images from text prompts instantly. Create photorealistic photos, digital art, anime, and illustrations for free. No signup required, unlimited generations, and 100% private browser-based processing.",
        "route": "/ai-image-generator",
        "extraSlugs": [
                "ai-art-generator-online",
                "ai-image-generator-for-beginners",
                "ai-photo-generator-free",
                "ai-picture-generator",
                "ai-picture-generator-no-signup",
                "free-ai-art-generator",
                "free-ai-image-generator",
                "instant-ai-image-creator",
                "simple-ai-image-generator",
                "text-to-image-ai",
                "text-to-image-free"
        ],
        "popular": true,
        "category": "generators"
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
						url: "https://30tools.com/ai-image-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "generators" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
