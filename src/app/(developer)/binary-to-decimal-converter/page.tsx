import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Binary to Decimal Converter Online – Fast & No Signup | 30tools",
	description: "Convert binary numbers to decimal (Base-10) instantly. Our free online converter helps you with computer science calculations and binary data analysis in seconds. 100% free, fast, and no signup required.",
	keywords: "binary to decimal converter, free binary to decimal converter, online binary to decimal converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-decimal-converter",
	},
	openGraph: {
		title: "Free Binary to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert binary numbers to decimal (Base-10) instantly. Our free online converter helps you with computer science calculations and binary data analysis in seconds. 100% free, fast, and no signup required.",
		url: "https://30tools.com/binary-to-decimal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert binary numbers to decimal (Base-10) instantly. Our free online converter helps you with computer science calculations and binary data analysis in seconds. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "binary-to-decimal-converter",
        "name": "Binary to Decimal Converter",
        "description": "Convert binary numbers to decimal (Base-10) instantly. Our free online converter helps you with computer science calculations and binary data analysis in seconds.",
        "route": "/binary-to-decimal-converter",
        "extraSlugs": [
                "free-binary-to-decimal-converter-online",
                "binary-to-decimal-converter-tool",
                "binary-to-base10-converter"
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
						url: "https://30tools.com/binary-to-decimal-converter",
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
