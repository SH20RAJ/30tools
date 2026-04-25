import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Image Cropper Online – Fast & No Signup | 30tools",
	description: "Free image cropper tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "image cropper, free image cropper, online image cropper, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-cropper",
	},
	openGraph: {
		title: "Free Image Cropper Online – Fast & No Signup | 30tools",
		description: "Free image cropper tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/image-cropper",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Cropper Online – Fast & No Signup | 30tools",
		description: "Free image cropper tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-cropper",
        "name": "Image Cropper",
        "description": "Free image cropper tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/image-cropper",
        "extraSlugs": [
                "free-image-cropper-online",
                "image-cropper-tool",
                "square-photo-cropper",
                "free-picture-cropper"
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
						url: "https://30tools.com/image-cropper",
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
