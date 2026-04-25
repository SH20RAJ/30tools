import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JSON to JSON Schema Online – Fast & No Signup | 30tools",
	description: "Generate a JSON Schema from your JSON data automatically. Our free online tool helps you define validation rules and document your JSON structure for APIs. 100% free, fast, and no signup required.",
	keywords: "json to json schema, free json to json schema, online json to json schema, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-json-schema",
	},
	openGraph: {
		title: "Free JSON to JSON Schema Online – Fast & No Signup | 30tools",
		description: "Generate a JSON Schema from your JSON data automatically. Our free online tool helps you define validation rules and document your JSON structure for APIs. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-json-schema",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to JSON Schema Online – Fast & No Signup | 30tools",
		description: "Generate a JSON Schema from your JSON data automatically. Our free online tool helps you define validation rules and document your JSON structure for APIs. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-to-json-schema",
        "name": "JSON to JSON Schema",
        "description": "Generate a JSON Schema from your JSON data automatically. Our free online tool helps you define validation rules and document your JSON structure for APIs.",
        "route": "/json-to-json-schema",
        "extraSlugs": [
                "free-json-to-json-schema-online",
                "json-to-json-schema-tool",
                "schema-creator-online",
                "infer-json-schema-from-data"
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
						url: "https://30tools.com/json-to-json-schema",
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
