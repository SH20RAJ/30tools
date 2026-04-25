import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Currency Converter Online – Fast & No Signup | 30tools",
	description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial planning. 100% free, fast, and no signup required.",
	keywords: "currency converter, free currency converter, online currency converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/currency-converter",
	},
	openGraph: {
		title: "Free Currency Converter Online – Fast & No Signup | 30tools",
		description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial planning. 100% free, fast, and no signup required.",
		url: "https://30tools.com/currency-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Currency Converter Online – Fast & No Signup | 30tools",
		description: "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial planning. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "currency-converter",
        "name": "Currency Converter",
        "description": "Convert currencies with real-time exchange rates instantly. Our free online tool supports all major global currencies for travel, business, and financial planning.",
        "route": "/currency-converter",
        "extraSlugs": [
                "free-currency-converter-online",
                "currency-converter-tool",
                "live-exchange-rates-calculator"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/currency-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
