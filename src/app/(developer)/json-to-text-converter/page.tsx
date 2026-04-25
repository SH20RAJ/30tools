import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JSON to Text Converter Online – Fast & No Signup | 30tools",
	description: "Convert JSON data into readable plain text instantly. Our free online tool is perfect for extracting values and creating human-readable documentation from raw data. 100% free, fast, and no signup required.",
	keywords: "json to text converter, free json to text converter, online json to text converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-text-converter",
	},
	openGraph: {
		title: "Free JSON to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data into readable plain text instantly. Our free online tool is perfect for extracting values and creating human-readable documentation from raw data. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data into readable plain text instantly. Our free online tool is perfect for extracting values and creating human-readable documentation from raw data. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-to-text-converter",
        "name": "JSON to Text Converter",
        "description": "Convert JSON data into readable plain text instantly. Our free online tool is perfect for extracting values and creating human-readable documentation from raw data.",
        "route": "/json-to-text-converter",
        "extraSlugs": [
                "free-json-to-text-converter-online",
                "json-to-text-converter-tool",
                "extract-text-from-json"
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
						url: "https://30tools.com/json-to-text-converter",
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
