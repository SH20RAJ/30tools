import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Decimal to HEX Converter Online – Fast & No Signup | 30tools",
	description: "Transform decimal numbers into hexadecimal format instantly. Our free online tool is perfect for web development, low-level programming, and color code analysis. Fast and private. 100% free, fast, and no signup required.",
	keywords: "decimal to hex converter, free decimal to hex converter, online decimal to hex converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-hex-converter",
	},
	openGraph: {
		title: "Free Decimal to HEX Converter Online – Fast & No Signup | 30tools",
		description: "Transform decimal numbers into hexadecimal format instantly. Our free online tool is perfect for web development, low-level programming, and color code analysis. Fast and private. 100% free, fast, and no signup required.",
		url: "https://30tools.com/decimal-to-hex-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Decimal to HEX Converter Online – Fast & No Signup | 30tools",
		description: "Transform decimal numbers into hexadecimal format instantly. Our free online tool is perfect for web development, low-level programming, and color code analysis. Fast and private. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "decimal-to-hex-converter",
        "name": "Decimal to HEX Converter",
        "description": "Transform decimal numbers into hexadecimal format instantly. Our free online tool is perfect for web development, low-level programming, and color code analysis. Fast and private.",
        "route": "/decimal-to-hex-converter",
        "extraSlugs": [
                "free-decimal-to-hex-converter-online",
                "decimal-to-hex-converter-tool",
                "convert-decimal-to-hexadecimal"
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
						url: "https://30tools.com/decimal-to-hex-converter",
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
