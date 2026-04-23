import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free XML to JSON Converter Online – Fast & No Signup | 30tools",
	description: "Convert XML documents to JSON format instantly. Our free online converter handles complex XML hierarchies to provide clean, developer-friendly JSON output for web apps. 100% free, fast, and no signup required.",
	keywords: "xml to json converter, free xml to json converter, online xml to json converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/xml-to-json-converter",
	},
	openGraph: {
		title: "Free XML to JSON Converter Online – Fast & No Signup | 30tools",
		description: "Convert XML documents to JSON format instantly. Our free online converter handles complex XML hierarchies to provide clean, developer-friendly JSON output for web apps. 100% free, fast, and no signup required.",
		url: "https://30tools.com/xml-to-json-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free XML to JSON Converter Online – Fast & No Signup | 30tools",
		description: "Convert XML documents to JSON format instantly. Our free online converter handles complex XML hierarchies to provide clean, developer-friendly JSON output for web apps. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "xml-to-json-converter",
        "name": "XML to JSON Converter",
        "description": "Convert XML documents to JSON format instantly. Our free online converter handles complex XML hierarchies to provide clean, developer-friendly JSON output for web apps.",
        "route": "/xml-to-json-converter",
        "extraSlugs": [
                "free-xml-to-json-converter-online",
                "xml-to-json-converter-tool",
                "convert-xml-to-json-online"
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
						url: "https://30tools.com/xml-to-json-converter",
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
