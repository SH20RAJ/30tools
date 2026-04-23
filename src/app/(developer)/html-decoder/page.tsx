import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free HTML Decoder Online – Fast & No Signup | 30tools",
	description: "Decode HTML entities back to their original characters instantly. Our free online tool converts &amp; and similar entities into readable text for easy debugging and content cleaning. 100% free, fast, and no signup required.",
	keywords: "html decoder, free html decoder, online html decoder, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-decoder",
	},
	openGraph: {
		title: "Free HTML Decoder Online – Fast & No Signup | 30tools",
		description: "Decode HTML entities back to their original characters instantly. Our free online tool converts &amp; and similar entities into readable text for easy debugging and content cleaning. 100% free, fast, and no signup required.",
		url: "https://30tools.com/html-decoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Decoder Online – Fast & No Signup | 30tools",
		description: "Decode HTML entities back to their original characters instantly. Our free online tool converts &amp; and similar entities into readable text for easy debugging and content cleaning. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "html-decoder",
        "name": "HTML Decoder",
        "description": "Decode HTML entities back to their original characters instantly. Our free online tool converts &amp; and similar entities into readable text for easy debugging and content cleaning.",
        "route": "/html-decoder",
        "extraSlugs": [
                "free-html-decoder-online",
                "html-decoder-tool",
                "url-decoder",
                "decode-html-entities-online"
        ],
        "popular": false,
        "category": "developer"
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
						url: "https://30tools.com/html-decoder",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
