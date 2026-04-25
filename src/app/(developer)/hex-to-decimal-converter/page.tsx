import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free HEX to Decimal Converter Online – Fast & No Signup | 30tools",
	description: "Convert hexadecimal numbers to decimal (Base-10) instantly. Our free online tool provides quick and accurate base conversions for programming and memory address analysis. 100% free, fast, and no signup required.",
	keywords: "hex to decimal converter, free hex to decimal converter, online hex to decimal converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-decimal-converter",
	},
	openGraph: {
		title: "Free HEX to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert hexadecimal numbers to decimal (Base-10) instantly. Our free online tool provides quick and accurate base conversions for programming and memory address analysis. 100% free, fast, and no signup required.",
		url: "https://30tools.com/hex-to-decimal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert hexadecimal numbers to decimal (Base-10) instantly. Our free online tool provides quick and accurate base conversions for programming and memory address analysis. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "hex-to-decimal-converter",
        "name": "HEX to Decimal Converter",
        "description": "Convert hexadecimal numbers to decimal (Base-10) instantly. Our free online tool provides quick and accurate base conversions for programming and memory address analysis.",
        "route": "/hex-to-decimal-converter",
        "extraSlugs": [
                "free-hex-to-decimal-converter-online",
                "hex-to-decimal-converter-tool",
                "hex-to-base10-converter"
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
						url: "https://30tools.com/hex-to-decimal-converter",
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
