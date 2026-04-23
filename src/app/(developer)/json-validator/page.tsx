import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JSON Validator Online – Fast & No Signup | 30tools",
	description: "Validate your JSON data for syntax errors and structural integrity instantly. Our free online tool helps you catch bugs and ensure your JSON is RFC-compliant. 100% free, fast, and no signup required.",
	keywords: "json validator, free json validator, online json validator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-validator",
	},
	openGraph: {
		title: "Free JSON Validator Online – Fast & No Signup | 30tools",
		description: "Validate your JSON data for syntax errors and structural integrity instantly. Our free online tool helps you catch bugs and ensure your JSON is RFC-compliant. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-validator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Validator Online – Fast & No Signup | 30tools",
		description: "Validate your JSON data for syntax errors and structural integrity instantly. Our free online tool helps you catch bugs and ensure your JSON is RFC-compliant. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-validator",
        "name": "JSON Validator",
        "description": "Validate your JSON data for syntax errors and structural integrity instantly. Our free online tool helps you catch bugs and ensure your JSON is RFC-compliant.",
        "route": "/json-validator",
        "extraSlugs": [
                "complex-regex-validator",
                "free-json-validator-online",
                "json-ld-validator",
                "json-validator-tool",
                "regular-expression-validator",
                "json-syntax-checker"
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
						url: "https://30tools.com/json-validator",
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
