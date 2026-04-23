import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free HTML Encoder Online – Fast & No Signup | 30tools",
	description: "Encode text into HTML entities instantly for secure web display. Our free online tool protects your markup by converting special characters into safe HTML-encoded strings. 100% free, fast, and no signup required.",
	keywords: "html encoder, free html encoder, online html encoder, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-encoder",
	},
	openGraph: {
		title: "Free HTML Encoder Online – Fast & No Signup | 30tools",
		description: "Encode text into HTML entities instantly for secure web display. Our free online tool protects your markup by converting special characters into safe HTML-encoded strings. 100% free, fast, and no signup required.",
		url: "https://30tools.com/html-encoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Encoder Online – Fast & No Signup | 30tools",
		description: "Encode text into HTML entities instantly for secure web display. Our free online tool protects your markup by converting special characters into safe HTML-encoded strings. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "html-encoder",
        "name": "HTML Encoder",
        "description": "Encode text into HTML entities instantly for secure web display. Our free online tool protects your markup by converting special characters into safe HTML-encoded strings.",
        "route": "/html-encoder",
        "extraSlugs": [
                "free-html-encoder-online",
                "html-encoder-tool",
                "encode-text-for-html"
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
						url: "https://30tools.com/html-encoder",
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
