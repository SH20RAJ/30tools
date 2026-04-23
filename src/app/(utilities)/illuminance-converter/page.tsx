import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Illuminance Converter Online – Fast & No Signup | 30tools",
	description: "Free illuminance converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "illuminance converter, free illuminance converter, online illuminance converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/illuminance-converter",
	},
	openGraph: {
		title: "Free Illuminance Converter Online – Fast & No Signup | 30tools",
		description: "Free illuminance converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/illuminance-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Illuminance Converter Online – Fast & No Signup | 30tools",
		description: "Free illuminance converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "illuminance-converter",
        "name": "Illuminance Converter",
        "description": "Free illuminance converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/illuminance-converter",
        "extraSlugs": [
                "free-illuminance-converter-online",
                "illuminance-converter-tool"
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
						url: "https://30tools.com/illuminance-converter",
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
