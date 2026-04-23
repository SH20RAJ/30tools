import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JSON to TSV Converter Online – Fast & No Signup | 30tools",
	description: "Convert JSON data to Tab-Separated Values (TSV) format instantly. Our free online converter helps you prepare data for Excel and other spreadsheet applications. 100% free, fast, and no signup required.",
	keywords: "json to tsv converter, free json to tsv converter, online json to tsv converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-tsv-converter",
	},
	openGraph: {
		title: "Free JSON to TSV Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data to Tab-Separated Values (TSV) format instantly. Our free online converter helps you prepare data for Excel and other spreadsheet applications. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-tsv-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to TSV Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data to Tab-Separated Values (TSV) format instantly. Our free online converter helps you prepare data for Excel and other spreadsheet applications. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-to-tsv-converter",
        "name": "JSON to TSV Converter",
        "description": "Convert JSON data to Tab-Separated Values (TSV) format instantly. Our free online converter helps you prepare data for Excel and other spreadsheet applications.",
        "route": "/json-to-tsv-converter",
        "extraSlugs": [
                "free-json-to-tsv-converter-online",
                "json-to-tsv-converter-tool",
                "json-to-tab-separated-values"
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
						url: "https://30tools.com/json-to-tsv-converter",
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
