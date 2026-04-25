import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JPG to ICO Converter Online – Fast & No Signup | 30tools",
	description: "Convert JPG images to ICO favicon files for your website. Our free tool creates high-quality icons in multiple sizes for perfect browser compatibility. No signup required.",
	keywords: "jpg to ico converter, free jpg to ico converter, online jpg to ico converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-ico-converter",
	},
	openGraph: {
		title: "Free JPG to ICO Converter Online – Fast & No Signup | 30tools",
		description: "Convert JPG images to ICO favicon files for your website. Our free tool creates high-quality icons in multiple sizes for perfect browser compatibility. No signup required.",
		url: "https://30tools.com/jpg-to-ico-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to ICO Converter Online – Fast & No Signup | 30tools",
		description: "Convert JPG images to ICO favicon files for your website. Our free tool creates high-quality icons in multiple sizes for perfect browser compatibility. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "jpg-to-ico-converter",
        "name": "JPG to ICO Converter",
        "description": "Convert JPG images to ICO favicon files for your website. Our free tool creates high-quality icons in multiple sizes for perfect browser compatibility. No signup required.",
        "route": "/jpg-to-ico-converter",
        "extraSlugs": [
                "free-jpg-to-ico-converter-online",
                "jpg-to-ico-converter-tool",
                "jpeg-to-favicon-converter"
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
						url: "https://30tools.com/jpg-to-ico-converter",
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
