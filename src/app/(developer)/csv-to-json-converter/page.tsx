import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free CSV to JSON Converter Online – Fast & No Signup | 30tools",
	description: "Convert CSV files to JSON format instantly. Our free online converter makes it easy to transform spreadsheet data into developer-friendly JSON code for web applications and APIs. 100% free, fast, and no signup required.",
	keywords: "csv to json converter, free csv to json converter, online csv to json converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/csv-to-json-converter",
	},
	openGraph: {
		title: "Free CSV to JSON Converter Online – Fast & No Signup | 30tools",
		description: "Convert CSV files to JSON format instantly. Our free online converter makes it easy to transform spreadsheet data into developer-friendly JSON code for web applications and APIs. 100% free, fast, and no signup required.",
		url: "https://30tools.com/csv-to-json-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSV to JSON Converter Online – Fast & No Signup | 30tools",
		description: "Convert CSV files to JSON format instantly. Our free online converter makes it easy to transform spreadsheet data into developer-friendly JSON code for web applications and APIs. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "csv-to-json-converter",
        "name": "CSV to JSON Converter",
        "description": "Convert CSV files to JSON format instantly. Our free online converter makes it easy to transform spreadsheet data into developer-friendly JSON code for web applications and APIs.",
        "route": "/csv-to-json-converter",
        "extraSlugs": [
                "comma-separated-to-json",
                "convert-csv-to-json",
                "convert-csv-to-json-code",
                "csv-data-to-json",
                "csv-file-to-json",
                "csv-json-parser",
                "csv-to-json",
                "csv-to-json-converter-tool",
                "csv-to-object-converter",
                "format-json-file",
                "free-csv-to-json-converter-online",
                "json-converter-from-csv",
                "json-web-token-decoder",
                "online-csv-json-tool",
                "prettify-json-online",
                "transform-csv-data",
                "convert-comma-separated-values-to-json"
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
						url: "https://30tools.com/csv-to-json-converter",
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
