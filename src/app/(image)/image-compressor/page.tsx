import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Image Compressor Online – Fast & No Signup | 30tools",
	description: "Compress images to reduce file size while maintaining quality 100% free, fast, and no signup required.",
	keywords: "image compressor, free image compressor, online image compressor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-compressor",
	},
	openGraph: {
		title: "Free Image Compressor Online – Fast & No Signup | 30tools",
		description: "Compress images to reduce file size while maintaining quality 100% free, fast, and no signup required.",
		url: "https://30tools.com/image-compressor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Compressor Online – Fast & No Signup | 30tools",
		description: "Compress images to reduce file size while maintaining quality 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-compressor",
        "name": "Image Compressor",
        "description": "Compress images to reduce file size while maintaining quality",
        "route": "/image-compressor",
        "extraSlugs": [
                "audio-compressor",
                "compress-image-to-50kb",
                "css-compressor",
                "free-image-compressor",
                "js-compressor-minifier",
                "shrink-image-file-size-free",
                "video-compressor",
                "web-code-compressor"
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
						url: "https://30tools.com/image-compressor",
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
