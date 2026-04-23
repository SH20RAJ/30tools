import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Google Cache Checker Online – Fast & No Signup | 30tools",
	description: "Free google cache checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "google cache checker, free google cache checker, online google cache checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/google-cache-checker",
	},
	openGraph: {
		title: "Free Google Cache Checker Online – Fast & No Signup | 30tools",
		description: "Free google cache checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/google-cache-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Google Cache Checker Online – Fast & No Signup | 30tools",
		description: "Free google cache checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "google-cache-checker",
        "name": "Google Cache Checker",
        "description": "Free google cache checker tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/google-cache-checker",
        "extraSlugs": [
                "free-google-cache-checker-online",
                "google-cache-checker-tool",
                "google-pixel-width-checker",
                "google-search-volume-checker"
        ],
        "popular": false,
        "category": "seo"
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
						url: "https://30tools.com/google-cache-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
