import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Text to HEX Converter Online – Fast & No Signup | 30tools",
	description: "Convert plain text into hexadecimal format instantly. Our free online tool provides a clean hex representation of your input string for development and data analysis. 100% free, fast, and no signup required.",
	keywords: "text to hex converter, free text to hex converter, online text to hex converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-hex-converter",
	},
	openGraph: {
		title: "Free Text to HEX Converter Online – Fast & No Signup | 30tools",
		description: "Convert plain text into hexadecimal format instantly. Our free online tool provides a clean hex representation of your input string for development and data analysis. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-hex-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to HEX Converter Online – Fast & No Signup | 30tools",
		description: "Convert plain text into hexadecimal format instantly. Our free online tool provides a clean hex representation of your input string for development and data analysis. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-hex-converter",
        "name": "Text to HEX Converter",
        "description": "Convert plain text into hexadecimal format instantly. Our free online tool provides a clean hex representation of your input string for development and data analysis.",
        "route": "/text-to-hex-converter",
        "extraSlugs": [
                "free-text-to-hex-converter-online",
                "text-to-hex-converter-tool",
                "convert-string-to-hexadecimal"
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
						url: "https://30tools.com/text-to-hex-converter",
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
