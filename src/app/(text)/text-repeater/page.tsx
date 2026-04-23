import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Text Repeater Online – Fast & No Signup | 30tools",
	description: "Repeat any text as many times as you need with our free online Text Repeater. Perfect for testing, social media, or fun content. Simple, fast, and works instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "text repeater, free text repeater, online text repeater, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-repeater",
	},
	openGraph: {
		title: "Free Text Repeater Online – Fast & No Signup | 30tools",
		description: "Repeat any text as many times as you need with our free online Text Repeater. Perfect for testing, social media, or fun content. Simple, fast, and works instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-repeater",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Repeater Online – Fast & No Signup | 30tools",
		description: "Repeat any text as many times as you need with our free online Text Repeater. Perfect for testing, social media, or fun content. Simple, fast, and works instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-repeater",
        "name": "Text Repeater",
        "description": "Repeat any text as many times as you need with our free online Text Repeater. Perfect for testing, social media, or fun content. Simple, fast, and works instantly in your browser.",
        "route": "/text-repeater",
        "extraSlugs": [
                "free-text-repeater-online",
                "text-repeater-tool",
                "text-multiplier-online"
        ],
        "popular": false,
        "category": "text"
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
						url: "https://30tools.com/text-repeater",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
