import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free PNG to ICO Converter Online – Fast & No Signup | 30tools",
	description: "Generate high-quality ICO favicon files from PNG images. Our free tool supports multiple sizes for perfect website icon compatibility. Privacy-first browser-based conversion. 100% free, fast, and no signup required.",
	keywords: "png to ico converter, free png to ico converter, online png to ico converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-ico-converter",
	},
	openGraph: {
		title: "Free PNG to ICO Converter Online – Fast & No Signup | 30tools",
		description: "Generate high-quality ICO favicon files from PNG images. Our free tool supports multiple sizes for perfect website icon compatibility. Privacy-first browser-based conversion. 100% free, fast, and no signup required.",
		url: "https://30tools.com/png-to-ico-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to ICO Converter Online – Fast & No Signup | 30tools",
		description: "Generate high-quality ICO favicon files from PNG images. Our free tool supports multiple sizes for perfect website icon compatibility. Privacy-first browser-based conversion. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "png-to-ico-converter",
        "name": "PNG to ICO Converter",
        "description": "Generate high-quality ICO favicon files from PNG images. Our free tool supports multiple sizes for perfect website icon compatibility. Privacy-first browser-based conversion.",
        "route": "/png-to-ico-converter",
        "extraSlugs": [
                "free-png-to-ico-converter-online",
                "png-to-ico-converter-tool",
                "png-to-favicon-generator"
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
						url: "https://30tools.com/png-to-ico-converter",
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
