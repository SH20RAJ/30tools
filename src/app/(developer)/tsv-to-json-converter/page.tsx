import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free TSV to JSON Converter Online – Fast & No Signup | 30tools",
	description: "Convert Tab-Separated Values (TSV) into JSON format instantly. Our free online tool makes it easy to transform structured data for web applications and API development. 100% free, fast, and no signup required.",
	keywords: "tsv to json converter, free tsv to json converter, online tsv to json converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/tsv-to-json-converter",
	},
	openGraph: {
		title: "Free TSV to JSON Converter Online – Fast & No Signup | 30tools",
		description: "Convert Tab-Separated Values (TSV) into JSON format instantly. Our free online tool makes it easy to transform structured data for web applications and API development. 100% free, fast, and no signup required.",
		url: "https://30tools.com/tsv-to-json-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free TSV to JSON Converter Online – Fast & No Signup | 30tools",
		description: "Convert Tab-Separated Values (TSV) into JSON format instantly. Our free online tool makes it easy to transform structured data for web applications and API development. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "tsv-to-json-converter",
        "name": "TSV to JSON Converter",
        "description": "Convert Tab-Separated Values (TSV) into JSON format instantly. Our free online tool makes it easy to transform structured data for web applications and API development.",
        "route": "/tsv-to-json-converter",
        "extraSlugs": [
                "free-tsv-to-json-converter-online",
                "tsv-to-json-converter-tool",
                "tab-separated-to-json-online"
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
						url: "https://30tools.com/tsv-to-json-converter",
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
