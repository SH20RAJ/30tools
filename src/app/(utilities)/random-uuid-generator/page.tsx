import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Random UUID Generator Online – Fast & No Signup | 30tools",
	description: "Free random uuid generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "random uuid generator, free random uuid generator, online random uuid generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/random-uuid-generator",
	},
	openGraph: {
		title: "Free Random UUID Generator Online – Fast & No Signup | 30tools",
		description: "Free random uuid generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/random-uuid-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Random UUID Generator Online – Fast & No Signup | 30tools",
		description: "Free random uuid generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "random-uuid-generator",
        "name": "Random UUID Generator",
        "description": "Free random uuid generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/random-uuid-generator",
        "extraSlugs": [
                "free-random-uuid-generator-online",
                "random-uuid-generator-tool"
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
						url: "https://30tools.com/random-uuid-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
