import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free PNG to BMP Converter Online – Fast & No Signup | 30tools",
	description: "Convert PNG images to BMP format instantly. Our free online converter preserves original quality while ensuring compatibility with legacy software. Fast, secure, and privacy-focused. 100% free, fast, and no signup required.",
	keywords: "png to bmp converter, free png to bmp converter, online png to bmp converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-bmp-converter",
	},
	openGraph: {
		title: "Free PNG to BMP Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG images to BMP format instantly. Our free online converter preserves original quality while ensuring compatibility with legacy software. Fast, secure, and privacy-focused. 100% free, fast, and no signup required.",
		url: "https://30tools.com/png-to-bmp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to BMP Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG images to BMP format instantly. Our free online converter preserves original quality while ensuring compatibility with legacy software. Fast, secure, and privacy-focused. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "png-to-bmp-converter",
        "name": "PNG to BMP Converter",
        "description": "Convert PNG images to BMP format instantly. Our free online converter preserves original quality while ensuring compatibility with legacy software. Fast, secure, and privacy-focused.",
        "route": "/png-to-bmp-converter",
        "extraSlugs": [
                "free-png-to-bmp-converter-online",
                "png-to-bmp-converter-tool",
                "convert-png-to-bitmap"
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
						url: "https://30tools.com/png-to-bmp-converter",
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
