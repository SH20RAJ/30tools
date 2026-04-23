import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free EXIF Reader Online – Fast & No Signup | 30tools",
	description: "Extract metadata and EXIF data from images including camera settings and GPS location 100% free, fast, and no signup required.",
	keywords: "exif reader, free exif reader, online exif reader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/exif-reader",
	},
	openGraph: {
		title: "Free EXIF Reader Online – Fast & No Signup | 30tools",
		description: "Extract metadata and EXIF data from images including camera settings and GPS location 100% free, fast, and no signup required.",
		url: "https://30tools.com/exif-reader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free EXIF Reader Online – Fast & No Signup | 30tools",
		description: "Extract metadata and EXIF data from images including camera settings and GPS location 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "exif-reader",
        "name": "EXIF Reader",
        "description": "Extract metadata and EXIF data from images including camera settings and GPS location",
        "route": "/exif-reader",
        "extraSlugs": [
                "view-photo-metadata-online",
                "exif-data-viewer-free",
                "online-exif-reader",
                "photo-metadata-extractor",
                "read-image-metadata",
                "photo-exif-viewer",
                "read-exif-data-online",
                "online-tts-reader"
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
						url: "https://30tools.com/exif-reader",
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
