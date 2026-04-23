import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Image Enlarger Online – Fast & No Signup | 30tools",
	description: "Free image enlarger tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "image enlarger, free image enlarger, online image enlarger, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-enlarger",
	},
	openGraph: {
		title: "Free Image Enlarger Online – Fast & No Signup | 30tools",
		description: "Free image enlarger tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/image-enlarger",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Enlarger Online – Fast & No Signup | 30tools",
		description: "Free image enlarger tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-enlarger",
        "name": "Image Enlarger",
        "description": "Free image enlarger tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/image-enlarger",
        "extraSlugs": [
                "free-image-enlarger-online",
                "image-enlarger-tool"
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
						url: "https://30tools.com/image-enlarger",
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
