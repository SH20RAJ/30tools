import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free HEX to Octal Converter Online – Fast & No Signup | 30tools",
	description: "Convert hexadecimal values to octal format instantly. Our free online converter helps with computer science base transformations and data processing in your browser. 100% free, fast, and no signup required.",
	keywords: "hex to octal converter, free hex to octal converter, online hex to octal converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-octal-converter",
	},
	openGraph: {
		title: "Free HEX to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert hexadecimal values to octal format instantly. Our free online converter helps with computer science base transformations and data processing in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/hex-to-octal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert hexadecimal values to octal format instantly. Our free online converter helps with computer science base transformations and data processing in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "hex-to-octal-converter",
        "name": "HEX to Octal Converter",
        "description": "Convert hexadecimal values to octal format instantly. Our free online converter helps with computer science base transformations and data processing in your browser.",
        "route": "/hex-to-octal-converter",
        "extraSlugs": [
                "free-hex-to-octal-converter-online",
                "hex-to-octal-converter-tool",
                "hex-to-base8-converter"
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
						url: "https://30tools.com/hex-to-octal-converter",
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
