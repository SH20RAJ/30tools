import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Flip Image Online – Fast & No Signup | 30tools",
	description: "Free flip image tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "flip image, free flip image, online flip image, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/flip-image",
	},
	openGraph: {
		title: "Free Flip Image Online – Fast & No Signup | 30tools",
		description: "Free flip image tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/flip-image",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Flip Image Online – Fast & No Signup | 30tools",
		description: "Free flip image tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "flip-image",
        "name": "Flip Image",
        "description": "Free flip image tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/flip-image",
        "extraSlugs": [
                "free-flip-image-online",
                "flip-image-tool",
                "flip-pdf-pages"
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
						url: "https://30tools.com/flip-image",
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
