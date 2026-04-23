import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Text to ASCII Converter Online – Fast & No Signup | 30tools",
	description: "Convert plain text into ASCII character codes instantly. Our free online tool provides decimal ASCII values for every character in your input string. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "text to ascii converter, free text to ascii converter, online text to ascii converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-ascii-converter",
	},
	openGraph: {
		title: "Free Text to ASCII Converter Online – Fast & No Signup | 30tools",
		description: "Convert plain text into ASCII character codes instantly. Our free online tool provides decimal ASCII values for every character in your input string. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-ascii-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to ASCII Converter Online – Fast & No Signup | 30tools",
		description: "Convert plain text into ASCII character codes instantly. Our free online tool provides decimal ASCII values for every character in your input string. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-ascii-converter",
        "name": "Text to ASCII Converter",
        "description": "Convert plain text into ASCII character codes instantly. Our free online tool provides decimal ASCII values for every character in your input string. Fast and secure.",
        "route": "/text-to-ascii-converter",
        "extraSlugs": [
                "free-text-to-ascii-converter-online",
                "text-to-ascii-converter-tool",
                "string-to-ascii-code"
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
						url: "https://30tools.com/text-to-ascii-converter",
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
