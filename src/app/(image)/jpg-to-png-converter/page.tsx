import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JPG to PNG Converter Online – Fast & No Signup | 30tools",
	description: "Convert JPG to PNG with transparency support. Maintain high image quality and convert formats instantly in your browser. Free, secure, and privacy-focused online tool. 100% free, fast, and no signup required.",
	keywords: "jpg to png converter, free jpg to png converter, online jpg to png converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-png-converter",
	},
	openGraph: {
		title: "Free JPG to PNG Converter Online – Fast & No Signup | 30tools",
		description: "Convert JPG to PNG with transparency support. Maintain high image quality and convert formats instantly in your browser. Free, secure, and privacy-focused online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/jpg-to-png-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to PNG Converter Online – Fast & No Signup | 30tools",
		description: "Convert JPG to PNG with transparency support. Maintain high image quality and convert formats instantly in your browser. Free, secure, and privacy-focused online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "jpg-to-png-converter",
        "name": "JPG to PNG Converter",
        "description": "Convert JPG to PNG with transparency support. Maintain high image quality and convert formats instantly in your browser. Free, secure, and privacy-focused online tool.",
        "route": "/jpg-to-png-converter",
        "extraSlugs": [
                "convert-png-to-jpg",
                "free-jpg-to-png-converter-online",
                "jpg-png-to-pdf",
                "jpg-to-png-converter-tool",
                "jpeg-to-png-online-free"
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
						url: "https://30tools.com/jpg-to-png-converter",
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
