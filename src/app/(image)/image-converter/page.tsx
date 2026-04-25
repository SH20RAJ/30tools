import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Image Converter Online – Fast & No Signup | 30tools",
	description: "Convert images between different formats (JPEG, PNG, WebP) 100% free, fast, and no signup required.",
	keywords: "image converter, free image converter, online image converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-converter",
	},
	openGraph: {
		title: "Free Image Converter Online – Fast & No Signup | 30tools",
		description: "Convert images between different formats (JPEG, PNG, WebP) 100% free, fast, and no signup required.",
		url: "https://30tools.com/image-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Converter Online – Fast & No Signup | 30tools",
		description: "Convert images between different formats (JPEG, PNG, WebP) 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-converter",
        "name": "Image Converter",
        "description": "Convert images between different formats (JPEG, PNG, WebP)",
        "route": "/image-converter",
        "extraSlugs": [
                "convert-image-to-embroidery-pattern",
                "free-image-converter-online"
        ],
        "popular": true,
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
						url: "https://30tools.com/image-converter",
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
