import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free WebP to JPG Converter Online – Fast & No Signup | 30tools",
	description: "Convert WebP images to JPG format for maximum compatibility across all devices and platforms. Our free online converter is fast, secure, and preserves image detail. 100% free, fast, and no signup required.",
	keywords: "webp to jpg converter, free webp to jpg converter, online webp to jpg converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/webp-to-jpg-converter",
	},
	openGraph: {
		title: "Free WebP to JPG Converter Online – Fast & No Signup | 30tools",
		description: "Convert WebP images to JPG format for maximum compatibility across all devices and platforms. Our free online converter is fast, secure, and preserves image detail. 100% free, fast, and no signup required.",
		url: "https://30tools.com/webp-to-jpg-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free WebP to JPG Converter Online – Fast & No Signup | 30tools",
		description: "Convert WebP images to JPG format for maximum compatibility across all devices and platforms. Our free online converter is fast, secure, and preserves image detail. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "webp-to-jpg-converter",
        "name": "WebP to JPG Converter",
        "description": "Convert WebP images to JPG format for maximum compatibility across all devices and platforms. Our free online converter is fast, secure, and preserves image detail.",
        "route": "/webp-to-jpg-converter",
        "extraSlugs": [
                "free-webp-to-jpg-converter-online",
                "webp-to-jpg-converter-tool",
                "webp-to-jpeg-online"
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
						url: "https://30tools.com/webp-to-jpg-converter",
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
