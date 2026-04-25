import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free FAQ Schema Generator Online – Fast & No Signup | 30tools",
	description: "Free faq schema generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "faq schema generator, free faq schema generator, online faq schema generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/faq-schema-generator",
	},
	openGraph: {
		title: "Free FAQ Schema Generator Online – Fast & No Signup | 30tools",
		description: "Free faq schema generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/faq-schema-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free FAQ Schema Generator Online – Fast & No Signup | 30tools",
		description: "Free faq schema generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "faq-schema-generator",
        "name": "FAQ Schema Generator",
        "description": "Free faq schema generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/faq-schema-generator",
        "extraSlugs": [
                "free-faq-schema-generator-online",
                "faq-schema-generator-tool",
                "schema-creator-online"
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
						url: "https://30tools.com/faq-schema-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
