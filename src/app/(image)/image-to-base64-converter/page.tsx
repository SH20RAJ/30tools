import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Image to Base64 Converter Online – Fast & No Signup | 30tools",
	description: "Free image to base64 converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "image to base64 converter, free image to base64 converter, online image to base64 converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-to-base64-converter",
	},
	openGraph: {
		title: "Free Image to Base64 Converter Online – Fast & No Signup | 30tools",
		description: "Free image to base64 converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/image-to-base64-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image to Base64 Converter Online – Fast & No Signup | 30tools",
		description: "Free image to base64 converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-to-base64-converter",
        "name": "Image to Base64 Converter",
        "description": "Free image to base64 converter tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/image-to-base64-converter",
        "extraSlugs": [
                "free-image-to-base64-converter-online",
                "image-to-base64-converter-tool"
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
						url: "https://30tools.com/image-to-base64-converter",
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
