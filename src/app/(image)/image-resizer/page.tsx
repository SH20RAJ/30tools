import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Image Resizer Online – Fast & No Signup | 30tools",
	description: "Resize images with custom dimensions and aspect ratios 100% free, fast, and no signup required.",
	keywords: "image resizer, free image resizer, online image resizer, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-resizer",
	},
	openGraph: {
		title: "Free Image Resizer Online – Fast & No Signup | 30tools",
		description: "Resize images with custom dimensions and aspect ratios 100% free, fast, and no signup required.",
		url: "https://30tools.com/image-resizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Resizer Online – Fast & No Signup | 30tools",
		description: "Resize images with custom dimensions and aspect ratios 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-resizer",
        "name": "Image Resizer",
        "description": "Resize images with custom dimensions and aspect ratios",
        "route": "/image-resizer",
        "extraSlugs": [
                "facebook-cover-resizer",
                "free-image-resizer-online",
                "ig-story-image-resizer",
                "linkedin-banner-resizer",
                "photo-resizer-free",
                "resize-image-for-etsy-banner",
                "social-media-resizer"
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
						url: "https://30tools.com/image-resizer",
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
