import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Background Remover Online – Fast & No Signup | 30tools",
	description: "Remove image backgrounds automatically with AI. Create transparent PNGs for product photos, headshots, or graphics instantly. 100% free, browser-based, and no signup needed.",
	keywords: "background remover, free background remover, online background remover, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/background-remover",
	},
	openGraph: {
		title: "Free Background Remover Online – Fast & No Signup | 30tools",
		description: "Remove image backgrounds automatically with AI. Create transparent PNGs for product photos, headshots, or graphics instantly. 100% free, browser-based, and no signup needed.",
		url: "https://30tools.com/background-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Background Remover Online – Fast & No Signup | 30tools",
		description: "Remove image backgrounds automatically with AI. Create transparent PNGs for product photos, headshots, or graphics instantly. 100% free, browser-based, and no signup needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "background-remover",
        "name": "Background Remover",
        "description": "Remove image backgrounds automatically with AI. Create transparent PNGs for product photos, headshots, or graphics instantly. 100% free, browser-based, and no signup needed.",
        "route": "/background-remover",
        "extraSlugs": [
                "remove-background-from-signature-free",
                "transparent-background-maker",
                "picture-background-eraser",
                "duplicate-line-remover",
                "background-gradient-tool",
                "background-gradient-creator",
                "ai-background-eraser-online"
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
						url: "https://30tools.com/background-remover",
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
