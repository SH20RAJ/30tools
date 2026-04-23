import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JSON Formatter Online – Fast & No Signup | 30tools",
	description: "Format and beautify your JSON data instantly for better readability. Our free online tool validates your JSON structure and provides a clean, indented view of your code. 100% free, fast, and no signup required.",
	keywords: "json formatter, free json formatter, online json formatter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-formatter",
	},
	openGraph: {
		title: "Free JSON Formatter Online – Fast & No Signup | 30tools",
		description: "Format and beautify your JSON data instantly for better readability. Our free online tool validates your JSON structure and provides a clean, indented view of your code. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-formatter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Formatter Online – Fast & No Signup | 30tools",
		description: "Format and beautify your JSON data instantly for better readability. Our free online tool validates your JSON structure and provides a clean, indented view of your code. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-formatter",
        "name": "JSON Formatter",
        "description": "Format and beautify your JSON data instantly for better readability. Our free online tool validates your JSON structure and provides a clean, indented view of your code.",
        "route": "/json-formatter",
        "extraSlugs": [
                "beautify-json-for-email",
                "json-validator-online",
                "sql-formatter",
                "xml-formatter",
                "online-json-prettifier"
        ],
        "popular": true,
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
						url: "https://30tools.com/json-formatter",
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
