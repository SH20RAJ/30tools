import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free WebP to PNG Converter Online – Fast & No Signup | 30tools",
	description: "Convert WebP to PNG to restore transparency and compatibility with all image editors. High-quality, free, and privacy-focused online conversion tool. 100% free, fast, and no signup required.",
	keywords: "webp to png converter, free webp to png converter, online webp to png converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/webp-to-png-converter",
	},
	openGraph: {
		title: "Free WebP to PNG Converter Online – Fast & No Signup | 30tools",
		description: "Convert WebP to PNG to restore transparency and compatibility with all image editors. High-quality, free, and privacy-focused online conversion tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/webp-to-png-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free WebP to PNG Converter Online – Fast & No Signup | 30tools",
		description: "Convert WebP to PNG to restore transparency and compatibility with all image editors. High-quality, free, and privacy-focused online conversion tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "webp-to-png-converter",
        "name": "WebP to PNG Converter",
        "description": "Convert WebP to PNG to restore transparency and compatibility with all image editors. High-quality, free, and privacy-focused online conversion tool.",
        "route": "/webp-to-png-converter",
        "extraSlugs": [
                "free-webp-to-png-converter-online",
                "webp-to-png-converter-tool",
                "webp-to-png-with-transparency"
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
						url: "https://30tools.com/webp-to-png-converter",
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
