import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free PNG to JPG Converter Online – Fast & No Signup | 30tools",
	description: "Convert PNG images to JPG format for smaller file sizes and better web compatibility. Our free online tool maintains high quality and works instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "png to jpg converter, free png to jpg converter, online png to jpg converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-jpg-converter",
	},
	openGraph: {
		title: "Free PNG to JPG Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG images to JPG format for smaller file sizes and better web compatibility. Our free online tool maintains high quality and works instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/png-to-jpg-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to JPG Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG images to JPG format for smaller file sizes and better web compatibility. Our free online tool maintains high quality and works instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "png-to-jpg-converter",
        "name": "PNG to JPG Converter",
        "description": "Convert PNG images to JPG format for smaller file sizes and better web compatibility. Our free online tool maintains high quality and works instantly in your browser.",
        "route": "/png-to-jpg-converter",
        "extraSlugs": [
                "free-png-to-jpg-converter-online",
                "png-to-jpg-converter-tool",
                "convert-png-to-jpeg-free"
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
						url: "https://30tools.com/png-to-jpg-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
