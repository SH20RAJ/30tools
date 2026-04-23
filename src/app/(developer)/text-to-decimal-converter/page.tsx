import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Text to Decimal Converter Online – Fast & No Signup | 30tools",
	description: "Convert text characters into their decimal numeric equivalents instantly. Our free online tool is useful for debugging character encoding and understanding data representations. 100% free, fast, and no signup required.",
	keywords: "text to decimal converter, free text to decimal converter, online text to decimal converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-decimal-converter",
	},
	openGraph: {
		title: "Free Text to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert text characters into their decimal numeric equivalents instantly. Our free online tool is useful for debugging character encoding and understanding data representations. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-decimal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert text characters into their decimal numeric equivalents instantly. Our free online tool is useful for debugging character encoding and understanding data representations. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-decimal-converter",
        "name": "Text to Decimal Converter",
        "description": "Convert text characters into their decimal numeric equivalents instantly. Our free online tool is useful for debugging character encoding and understanding data representations.",
        "route": "/text-to-decimal-converter",
        "extraSlugs": [
                "free-text-to-decimal-converter-online",
                "text-to-decimal-converter-tool",
                "string-to-decimal-values"
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
						url: "https://30tools.com/text-to-decimal-converter",
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
