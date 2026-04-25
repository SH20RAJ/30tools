import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Text to Octal Converter Online – Fast & No Signup | 30tools",
	description: "Convert text into octal numeric values instantly. Our free online converter provides base-8 representations for every character in your text for technical analysis. 100% free, fast, and no signup required.",
	keywords: "text to octal converter, free text to octal converter, online text to octal converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-octal-converter",
	},
	openGraph: {
		title: "Free Text to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert text into octal numeric values instantly. Our free online converter provides base-8 representations for every character in your text for technical analysis. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-octal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert text into octal numeric values instantly. Our free online converter provides base-8 representations for every character in your text for technical analysis. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-octal-converter",
        "name": "Text to Octal Converter",
        "description": "Convert text into octal numeric values instantly. Our free online converter provides base-8 representations for every character in your text for technical analysis.",
        "route": "/text-to-octal-converter",
        "extraSlugs": [
                "free-text-to-octal-converter-online",
                "text-to-octal-converter-tool",
                "string-to-octal-code"
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
						url: "https://30tools.com/text-to-octal-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
