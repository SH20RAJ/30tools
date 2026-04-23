import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Decimal to Octal Converter Online – Fast & No Signup | 30tools",
	description: "Convert decimal numbers to octal format instantly. Our free online converter provides quick and accurate base transformations for computer science and technical tasks. No signup required.",
	keywords: "decimal to octal converter, free decimal to octal converter, online decimal to octal converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-octal-converter",
	},
	openGraph: {
		title: "Free Decimal to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal numbers to octal format instantly. Our free online converter provides quick and accurate base transformations for computer science and technical tasks. No signup required.",
		url: "https://30tools.com/decimal-to-octal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Decimal to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal numbers to octal format instantly. Our free online converter provides quick and accurate base transformations for computer science and technical tasks. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "decimal-to-octal-converter",
        "name": "Decimal to Octal Converter",
        "description": "Convert decimal numbers to octal format instantly. Our free online converter provides quick and accurate base transformations for computer science and technical tasks. No signup required.",
        "route": "/decimal-to-octal-converter",
        "extraSlugs": [
                "free-decimal-to-octal-converter-online",
                "decimal-to-octal-converter-tool",
                "decimal-to-base8-converter"
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
						url: "https://30tools.com/decimal-to-octal-converter",
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
