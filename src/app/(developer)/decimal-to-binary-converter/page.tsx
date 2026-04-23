import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Decimal to Binary Converter Online – Fast & No Signup | 30tools",
	description: "Convert decimal numbers (Base-10) to binary code (Base-2) instantly. Our free online converter is perfect for students, developers, and data analysis tasks. Fast, secure, and accurate. 100% free, fast, and no signup required.",
	keywords: "decimal to binary converter, free decimal to binary converter, online decimal to binary converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-binary-converter",
	},
	openGraph: {
		title: "Free Decimal to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal numbers (Base-10) to binary code (Base-2) instantly. Our free online converter is perfect for students, developers, and data analysis tasks. Fast, secure, and accurate. 100% free, fast, and no signup required.",
		url: "https://30tools.com/decimal-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Decimal to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal numbers (Base-10) to binary code (Base-2) instantly. Our free online converter is perfect for students, developers, and data analysis tasks. Fast, secure, and accurate. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "decimal-to-binary-converter",
        "name": "Decimal to Binary Converter",
        "description": "Convert decimal numbers (Base-10) to binary code (Base-2) instantly. Our free online converter is perfect for students, developers, and data analysis tasks. Fast, secure, and accurate.",
        "route": "/decimal-to-binary-converter",
        "extraSlugs": [
                "free-decimal-to-binary-converter-online",
                "decimal-to-binary-converter-tool",
                "convert-decimal-to-binary-code"
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
						url: "https://30tools.com/decimal-to-binary-converter",
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
