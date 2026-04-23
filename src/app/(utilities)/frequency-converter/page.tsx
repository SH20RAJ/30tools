import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Frequency Converter Online – Fast & No Signup | 30tools",
	description: "Free frequency converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "frequency converter, free frequency converter, online frequency converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/frequency-converter",
	},
	openGraph: {
		title: "Free Frequency Converter Online – Fast & No Signup | 30tools",
		description: "Free frequency converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/frequency-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Frequency Converter Online – Fast & No Signup | 30tools",
		description: "Free frequency converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "frequency-converter",
        "name": "Frequency Converter",
        "description": "Free frequency converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/frequency-converter",
        "extraSlugs": [
                "free-frequency-converter-online",
                "frequency-converter-tool",
                "check-keyword-frequency"
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
						url: "https://30tools.com/frequency-converter",
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
