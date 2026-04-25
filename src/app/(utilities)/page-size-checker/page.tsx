import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Page Size Checker Online – Fast & No Signup | 30tools",
	description: "Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "page size checker, free page size checker, online page size checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/page-size-checker",
	},
	openGraph: {
		title: "Free Page Size Checker Online – Fast & No Signup | 30tools",
		description: "Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/page-size-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Page Size Checker Online – Fast & No Signup | 30tools",
		description: "Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "page-size-checker",
        "name": "Page Size Checker",
        "description": "Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/page-size-checker",
        "extraSlugs": [
                "audio-size-reducer",
                "download-full-size-dp",
                "duplicate-page-detector",
                "free-page-size-checker-online",
                "on-page-seo-checker",
                "page-size-checker-tool",
                "reduce-audio-file-size",
                "reduce-js-file-size",
                "shrink-mp3-size",
                "social-media-post-size",
                "view-full-size-ig-dp"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/page-size-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
