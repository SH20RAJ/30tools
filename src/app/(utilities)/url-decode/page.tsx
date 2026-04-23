import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free URL Decode Online – Fast & No Signup | 30tools",
	description: "Free url decode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "url decode, free url decode, online url decode, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-decode",
	},
	openGraph: {
		title: "Free URL Decode Online – Fast & No Signup | 30tools",
		description: "Free url decode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/url-decode",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Decode Online – Fast & No Signup | 30tools",
		description: "Free url decode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "url-decode",
        "name": "URL Decode",
        "description": "Free url decode tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/url-decode",
        "extraSlugs": [
                "free-url-decode-online",
                "url-decode-tool",
                "escape-url-characters",
                "make-url-shorter",
                "generate-payment-url",
                "check-url-indexation",
                "bulk-url-indexer",
                "find-backlinks-url"
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
						url: "https://30tools.com/url-decode",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
