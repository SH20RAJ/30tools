import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JPG to WebP Converter Online – Fast & No Signup | 30tools",
	description: "Convert JPG to WebP for superior web performance. Reduce file sizes significantly without losing quality. Our free online converter helps you speed up your website instantly. 100% free, fast, and no signup required.",
	keywords: "jpg to webp converter, free jpg to webp converter, online jpg to webp converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-webp-converter",
	},
	openGraph: {
		title: "Free JPG to WebP Converter Online – Fast & No Signup | 30tools",
		description: "Convert JPG to WebP for superior web performance. Reduce file sizes significantly without losing quality. Our free online converter helps you speed up your website instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/jpg-to-webp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to WebP Converter Online – Fast & No Signup | 30tools",
		description: "Convert JPG to WebP for superior web performance. Reduce file sizes significantly without losing quality. Our free online converter helps you speed up your website instantly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "jpg-to-webp-converter",
        "name": "JPG to WebP Converter",
        "description": "Convert JPG to WebP for superior web performance. Reduce file sizes significantly without losing quality. Our free online converter helps you speed up your website instantly.",
        "route": "/jpg-to-webp-converter",
        "extraSlugs": [
                "free-jpg-to-webp-converter-online",
                "jpg-to-webp-converter-tool",
                "webp-converter"
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
						url: "https://30tools.com/jpg-to-webp-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
