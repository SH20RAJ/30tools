import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JPG Converter Online – Fast & No Signup | 30tools",
	description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use. Privacy-focused and works entirely in your browser. 100% free, fast, and no signup required.",
	keywords: "jpg converter, free jpg converter, online jpg converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-converter",
	},
	openGraph: {
		title: "Free JPG Converter Online – Fast & No Signup | 30tools",
		description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use. Privacy-focused and works entirely in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/jpg-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG Converter Online – Fast & No Signup | 30tools",
		description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use. Privacy-focused and works entirely in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "jpg-converter",
        "name": "JPG Converter",
        "description": "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use. Privacy-focused and works entirely in your browser.",
        "route": "/jpg-converter",
        "extraSlugs": [
                "free-jpg-converter-online",
                "jpg-converter-tool",
                "convert-to-jpeg-online"
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
						url: "https://30tools.com/jpg-converter",
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
