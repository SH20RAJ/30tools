import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Volume Converter Online – Fast & No Signup | 30tools",
	description: "Free volume converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "volume converter, free volume converter, online volume converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/volume-converter",
	},
	openGraph: {
		title: "Free Volume Converter Online – Fast & No Signup | 30tools",
		description: "Free volume converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/volume-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Volume Converter Online – Fast & No Signup | 30tools",
		description: "Free volume converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "volume-converter",
        "name": "Volume Converter",
        "description": "Free volume converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/volume-converter",
        "extraSlugs": [
                "free-volume-converter-online",
                "volume-converter-tool",
                "bing-search-volume"
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
						url: "https://30tools.com/volume-converter",
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
