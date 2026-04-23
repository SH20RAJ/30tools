import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JSON to XML Converter Online – Fast & No Signup | 30tools",
	description: "Convert JSON data to XML format instantly. Our free online tool handles nesting and attributes to ensure a clean transformation for legacy system compatibility. 100% free, fast, and no signup required.",
	keywords: "json to xml converter, free json to xml converter, online json to xml converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-xml-converter",
	},
	openGraph: {
		title: "Free JSON to XML Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data to XML format instantly. Our free online tool handles nesting and attributes to ensure a clean transformation for legacy system compatibility. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-xml-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to XML Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data to XML format instantly. Our free online tool handles nesting and attributes to ensure a clean transformation for legacy system compatibility. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-to-xml-converter",
        "name": "JSON to XML Converter",
        "description": "Convert JSON data to XML format instantly. Our free online tool handles nesting and attributes to ensure a clean transformation for legacy system compatibility.",
        "route": "/json-to-xml-converter",
        "extraSlugs": [
                "beautify-xml-online",
                "convert-xml-to-json",
                "create-xml-sitemap",
                "format-xml-file",
                "free-json-to-xml-converter-online",
                "json-to-xml-converter-tool",
                "online-xml-converter",
                "parse-xml-to-json",
                "validate-xml-format",
                "xml-data-converter",
                "xml-file-to-json",
                "xml-indenter",
                "xml-pretty-print",
                "xml-sitemap-analyzer",
                "xml-sitemap-builder"
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
						url: "https://30tools.com/json-to-xml-converter",
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
