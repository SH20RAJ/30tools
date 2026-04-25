import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free PNG to WebP Converter Online – Fast & No Signup | 30tools",
	description: "Convert PNG to WebP to optimize your website speed. Significantly reduce file sizes while maintaining image transparency and quality. Free, fast, and secure online tool. 100% free, fast, and no signup required.",
	keywords: "png to webp converter, free png to webp converter, online png to webp converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-webp-converter",
	},
	openGraph: {
		title: "Free PNG to WebP Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG to WebP to optimize your website speed. Significantly reduce file sizes while maintaining image transparency and quality. Free, fast, and secure online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/png-to-webp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to WebP Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG to WebP to optimize your website speed. Significantly reduce file sizes while maintaining image transparency and quality. Free, fast, and secure online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "png-to-webp-converter",
        "name": "PNG to WebP Converter",
        "description": "Convert PNG to WebP to optimize your website speed. Significantly reduce file sizes while maintaining image transparency and quality. Free, fast, and secure online tool.",
        "route": "/png-to-webp-converter",
        "extraSlugs": [
                "free-png-to-webp-converter-online",
                "png-to-webp-converter-tool",
                "png-to-webp-online"
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
						url: "https://30tools.com/png-to-webp-converter",
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
