import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Octal to Decimal Converter Online – Fast & No Signup | 30tools",
	description: "Convert octal numbers to decimal (Base-10) instantly. Our free online tool makes it easy to transform numeric bases for programming and mathematical calculations. 100% free, fast, and no signup required.",
	keywords: "octal to decimal converter, free octal to decimal converter, online octal to decimal converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/octal-to-decimal-converter",
	},
	openGraph: {
		title: "Free Octal to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert octal numbers to decimal (Base-10) instantly. Our free online tool makes it easy to transform numeric bases for programming and mathematical calculations. 100% free, fast, and no signup required.",
		url: "https://30tools.com/octal-to-decimal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Octal to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert octal numbers to decimal (Base-10) instantly. Our free online tool makes it easy to transform numeric bases for programming and mathematical calculations. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "octal-to-decimal-converter",
        "name": "Octal to Decimal Converter",
        "description": "Convert octal numbers to decimal (Base-10) instantly. Our free online tool makes it easy to transform numeric bases for programming and mathematical calculations.",
        "route": "/octal-to-decimal-converter",
        "extraSlugs": [
                "free-octal-to-decimal-converter-online",
                "octal-to-decimal-converter-tool",
                "octal-to-base10-converter"
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
						url: "https://30tools.com/octal-to-decimal-converter",
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
