import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Number to Word Converter Online – Fast & No Signup | 30tools",
	description: "Convert numbers to words instantly with our free online converter. Perfect for writing checks, legal documents, or educational purposes. Supports multiple formats and large numbers. 100% free, fast, and no signup required.",
	keywords: "number to word converter, free number to word converter, online number to word converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/number-to-word-converter",
	},
	openGraph: {
		title: "Free Number to Word Converter Online – Fast & No Signup | 30tools",
		description: "Convert numbers to words instantly with our free online converter. Perfect for writing checks, legal documents, or educational purposes. Supports multiple formats and large numbers. 100% free, fast, and no signup required.",
		url: "https://30tools.com/number-to-word-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Number to Word Converter Online – Fast & No Signup | 30tools",
		description: "Convert numbers to words instantly with our free online converter. Perfect for writing checks, legal documents, or educational purposes. Supports multiple formats and large numbers. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "number-to-word-converter",
        "name": "Number to Word Converter",
        "description": "Convert numbers to words instantly with our free online converter. Perfect for writing checks, legal documents, or educational purposes. Supports multiple formats and large numbers.",
        "route": "/number-to-word-converter",
        "extraSlugs": [
                "check-whatsapp-number",
                "check-word-count",
                "free-number-to-word-converter-online",
                "number-pdf-pages",
                "number-to-word-converter-tool",
                "random-number-picker",
                "wa-number-validator",
                "word-to-epub",
                "convert-digits-to-words"
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
						url: "https://30tools.com/number-to-word-converter",
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
