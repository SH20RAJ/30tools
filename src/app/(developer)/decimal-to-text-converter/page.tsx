import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Decimal to Text Converter Online – Fast & No Signup | 30tools",
	description: "Convert decimal character codes back to readable text instantly. Our free online tool helps you decode numeric data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
	keywords: "decimal to text converter, free decimal to text converter, online decimal to text converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-text-converter",
	},
	openGraph: {
		title: "Free Decimal to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal character codes back to readable text instantly. Our free online tool helps you decode numeric data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/decimal-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Decimal to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal character codes back to readable text instantly. Our free online tool helps you decode numeric data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "decimal-to-text-converter",
        "name": "Decimal to Text Converter",
        "description": "Convert decimal character codes back to readable text instantly. Our free online tool helps you decode numeric data streams and debug text processing tasks in your browser.",
        "route": "/decimal-to-text-converter",
        "extraSlugs": [
                "free-decimal-to-text-converter-online",
                "decimal-to-text-converter-tool",
                "decode-decimal-to-text"
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
						url: "https://30tools.com/decimal-to-text-converter",
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
