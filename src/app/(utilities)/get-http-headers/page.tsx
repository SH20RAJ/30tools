import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Get HTTP Headers Online – Fast & No Signup | 30tools",
	description: "Free get http headers tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "get http headers, free get http headers, online get http headers, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/get-http-headers",
	},
	openGraph: {
		title: "Free Get HTTP Headers Online – Fast & No Signup | 30tools",
		description: "Free get http headers tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/get-http-headers",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Get HTTP Headers Online – Fast & No Signup | 30tools",
		description: "Free get http headers tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "get-http-headers",
        "name": "Get HTTP Headers",
        "description": "Free get http headers tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/get-http-headers",
        "extraSlugs": [
                "free-get-http-headers-online",
                "get-http-headers-tool",
                "get-emails-from-string",
                "send-http-request",
                "get-urls-from-sitemap",
                "get-all-urls-from-page"
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
						url: "https://30tools.com/get-http-headers",
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
