import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Random Word Generator Online – Fast & No Signup | 30tools",
	description: "Generate random words instantly for creative writing, brainstorming, or vocabulary practice. Our free online tool offers customizable options for word type and quantity. Fun and fast. 100% free, fast, and no signup required.",
	keywords: "random word generator, free random word generator, online random word generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/random-word-generator",
	},
	openGraph: {
		title: "Free Random Word Generator Online – Fast & No Signup | 30tools",
		description: "Generate random words instantly for creative writing, brainstorming, or vocabulary practice. Our free online tool offers customizable options for word type and quantity. Fun and fast. 100% free, fast, and no signup required.",
		url: "https://30tools.com/random-word-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Random Word Generator Online – Fast & No Signup | 30tools",
		description: "Generate random words instantly for creative writing, brainstorming, or vocabulary practice. Our free online tool offers customizable options for word type and quantity. Fun and fast. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "random-word-generator",
        "name": "Random Word Generator",
        "description": "Generate random words instantly for creative writing, brainstorming, or vocabulary practice. Our free online tool offers customizable options for word type and quantity. Fun and fast.",
        "route": "/random-word-generator",
        "extraSlugs": [
                "free-random-word-generator-online",
                "generate-random-stuff",
                "random-color-schemes",
                "random-excuse-generator",
                "random-generator",
                "random-password-maker",
                "random-string-generator-secure",
                "random-string-maker",
                "random-word-generator-tool",
                "pick-random-words"
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
						url: "https://30tools.com/random-word-generator",
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
