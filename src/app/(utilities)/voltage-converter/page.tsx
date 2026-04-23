import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Voltage Converter Online – Fast & No Signup | 30tools",
	description: "Free voltage converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "voltage converter, free voltage converter, online voltage converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/voltage-converter",
	},
	openGraph: {
		title: "Free Voltage Converter Online – Fast & No Signup | 30tools",
		description: "Free voltage converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/voltage-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Voltage Converter Online – Fast & No Signup | 30tools",
		description: "Free voltage converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "voltage-converter",
        "name": "Voltage Converter",
        "description": "Free voltage converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/voltage-converter",
        "extraSlugs": [
                "free-voltage-converter-online",
                "voltage-converter-tool"
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
						url: "https://30tools.com/voltage-converter",
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
