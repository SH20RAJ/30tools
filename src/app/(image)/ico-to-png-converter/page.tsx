import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";


export const metadata = {
	title: "Free ICO to PNG Converter Online – Fast & No Signup | 30tools",
	description: "Free ico to png converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "ico to png converter, free ico to png converter, online ico to png converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ico-to-png-converter",
	},
	openGraph: {
		title: "Free ICO to PNG Converter Online – Fast & No Signup | 30tools",
		description: "Free ico to png converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ico-to-png-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ICO to PNG Converter Online – Fast & No Signup | 30tools",
		description: "Free ico to png converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ico-to-png-converter",
        "name": "ICO to PNG Converter",
        "description": "Free ico to png converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/ico-to-png-converter",
        "extraSlugs": [
                "free-ico-to-png-converter-online",
                "ico-to-png-converter-tool",
                "compress-jpeg-png"
        ],
        "popular": false,
        "category": "image"
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
						url: "https://30tools.com/ico-to-png-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<ImageConverterTool defaultOutputFormat="png" />
			</ToolLayout>
		</>
	);
}
