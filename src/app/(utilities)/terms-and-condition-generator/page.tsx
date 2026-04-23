import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Terms And Condition Generator Online – Fast & No Signup | 30tools",
	description: "Free terms and condition generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "terms and condition generator, free terms and condition generator, online terms and condition generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/terms-and-condition-generator",
	},
	openGraph: {
		title: "Free Terms And Condition Generator Online – Fast & No Signup | 30tools",
		description: "Free terms and condition generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/terms-and-condition-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terms And Condition Generator Online – Fast & No Signup | 30tools",
		description: "Free terms and condition generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "terms-and-condition-generator",
        "name": "Terms And Condition Generator",
        "description": "Free terms and condition generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/terms-and-condition-generator",
        "extraSlugs": [
                "crop-and-edit-photos",
                "free-terms-and-condition-generator-online",
                "terms",
                "terms-and-condition-generator-tool"
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
						url: "https://30tools.com/terms-and-condition-generator",
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
