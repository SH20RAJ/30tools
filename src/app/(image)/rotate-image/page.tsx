import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Rotate Image Online – Fast & No Signup | 30tools",
	description: "Rotate images clockwise, counter-clockwise, or flip them instantly. Our free online image rotator works in your browser, keeping your photos private and secure. No signup needed.",
	keywords: "rotate image, free rotate image, online rotate image, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/rotate-image",
	},
	openGraph: {
		title: "Free Rotate Image Online – Fast & No Signup | 30tools",
		description: "Rotate images clockwise, counter-clockwise, or flip them instantly. Our free online image rotator works in your browser, keeping your photos private and secure. No signup needed.",
		url: "https://30tools.com/rotate-image",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Rotate Image Online – Fast & No Signup | 30tools",
		description: "Rotate images clockwise, counter-clockwise, or flip them instantly. Our free online image rotator works in your browser, keeping your photos private and secure. No signup needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "rotate-image",
        "name": "Rotate Image",
        "description": "Rotate images clockwise, counter-clockwise, or flip them instantly. Our free online image rotator works in your browser, keeping your photos private and secure. No signup needed.",
        "route": "/rotate-image",
        "extraSlugs": [
                "free-rotate-image-online",
                "pdf-rotate",
                "rotate-image-tool",
                "rotate-pdf-online",
                "rotate-pdf-pages",
                "fix-image-orientation-online"
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
						url: "https://30tools.com/rotate-image",
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
