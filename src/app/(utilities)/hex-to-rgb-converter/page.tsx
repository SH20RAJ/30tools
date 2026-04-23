import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free HEX to RGB Converter Online – Fast & No Signup | 30tools",
	description: "Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "hex to rgb converter, free hex to rgb converter, online hex to rgb converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-rgb-converter",
	},
	openGraph: {
		title: "Free HEX to RGB Converter Online – Fast & No Signup | 30tools",
		description: "Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/hex-to-rgb-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to RGB Converter Online – Fast & No Signup | 30tools",
		description: "Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "hex-to-rgb-converter",
        "name": "HEX to RGB Converter",
        "description": "Free hex to rgb converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/hex-to-rgb-converter",
        "extraSlugs": [
                "convert-hex-to-rgb",
                "free-hex-to-rgb-converter-online",
                "hex-rgb-hsl-tool",
                "hex-to-rgb-converter-tool",
                "rgb-to-hsl-converter"
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
						url: "https://30tools.com/hex-to-rgb-converter",
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
