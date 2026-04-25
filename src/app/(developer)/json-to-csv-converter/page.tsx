import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JSON to CSV Converter Online – Fast & No Signup | 30tools",
	description: "Convert JSON data to CSV format instantly. Our free online converter makes it easy to transform complex JSON structures into simple spreadsheet-ready tables. 100% free, fast, and no signup required.",
	keywords: "json to csv converter, free json to csv converter, online json to csv converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-csv-converter",
	},
	openGraph: {
		title: "Free JSON to CSV Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data to CSV format instantly. Our free online converter makes it easy to transform complex JSON structures into simple spreadsheet-ready tables. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-csv-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to CSV Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data to CSV format instantly. Our free online converter makes it easy to transform complex JSON structures into simple spreadsheet-ready tables. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-to-csv-converter",
        "name": "JSON to CSV Converter",
        "description": "Convert JSON data to CSV format instantly. Our free online converter makes it easy to transform complex JSON structures into simple spreadsheet-ready tables.",
        "route": "/json-to-csv-converter",
        "extraSlugs": [
                "free-json-to-csv-converter-online",
                "json-to-csv-converter-tool",
                "json-to-spreadsheet-online"
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
						url: "https://30tools.com/json-to-csv-converter",
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
