import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Parts Per Converter Online – Fast & No Signup | 30tools",
	description: "Free parts per converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "parts per converter, free parts per converter, online parts per converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/parts-per-converter",
	},
	openGraph: {
		title: "Free Parts Per Converter Online – Fast & No Signup | 30tools",
		description: "Free parts per converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/parts-per-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Parts Per Converter Online – Fast & No Signup | 30tools",
		description: "Free parts per converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "parts-per-converter",
        "name": "Parts Per Converter",
        "description": "Free parts per converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/parts-per-converter",
        "extraSlugs": [
                "free-parts-per-converter-online",
                "parts-per-converter-tool"
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
						url: "https://30tools.com/parts-per-converter",
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
