import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Photo Enhancer Online – Fast & No Signup | 30tools",
	description: "Enhance photo quality with AI-powered image enhancement 100% free, fast, and no signup required.",
	keywords: "photo enhancer, free photo enhancer, online photo enhancer, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/photo-enhancer",
	},
	openGraph: {
		title: "Free Photo Enhancer Online – Fast & No Signup | 30tools",
		description: "Enhance photo quality with AI-powered image enhancement 100% free, fast, and no signup required.",
		url: "https://30tools.com/photo-enhancer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Photo Enhancer Online – Fast & No Signup | 30tools",
		description: "Enhance photo quality with AI-powered image enhancement 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "photo-enhancer",
        "name": "Photo Enhancer",
        "description": "Enhance photo quality with AI-powered image enhancement",
        "route": "/photo-enhancer",
        "extraSlugs": [
                "ai-photo-enhancer",
                "cut-photo",
                "free-photo-grid-maker",
                "ig-photo-download-hd",
                "instagram-profile-photo-hd",
                "online-photo-editor",
                "photo-collage-maker",
                "photo-filter-editor",
                "photo-quality-improver",
                "upscale-illustration-online-free"
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
						url: "https://30tools.com/photo-enhancer",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
