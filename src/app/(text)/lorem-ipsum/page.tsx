import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Lorem Ipsum Generator Online – Fast & No Signup | 30tools",
	description: "Generate custom Lorem Ipsum text for your designs. 100% free, fast, and no signup required.",
	keywords: "lorem ipsum generator, free lorem ipsum generator, online lorem ipsum generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/lorem-ipsum",
	},
	openGraph: {
		title: "Free Lorem Ipsum Generator Online – Fast & No Signup | 30tools",
		description: "Generate custom Lorem Ipsum text for your designs. 100% free, fast, and no signup required.",
		url: "https://30tools.com/lorem-ipsum",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Lorem Ipsum Generator Online – Fast & No Signup | 30tools",
		description: "Generate custom Lorem Ipsum text for your designs. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "lorem-ipsum-generator",
        "name": "Lorem Ipsum Generator",
        "description": "Generate custom Lorem Ipsum text for your designs.",
        "route": "/lorem-ipsum",
        "extraSlugs": [
                "placeholder-text-generator",
                "lipsum-generator",
                "lorem-ipsum-generator",
                "blind-text-generator",
                "dummy-text-maker",
                "standard-lorem-ipsum-text",
                "lorem-ipsum-text-copy",
                "lorem-ipsum-generator-for-figma"
        ],
        "popular": false,
        "category": "text"
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
						url: "https://30tools.com/lorem-ipsum",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
