import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Credit Card Validator Online – Fast & No Signup | 30tools",
	description: "Check if a credit card number is valid using the Luhn algorithm instantly. Our free online tool helps you verify card formats and identify card types for testing purposes. 100% free, fast, and no signup required.",
	keywords: "credit card validator, free credit card validator, online credit card validator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/credit-card-validator",
	},
	openGraph: {
		title: "Free Credit Card Validator Online – Fast & No Signup | 30tools",
		description: "Check if a credit card number is valid using the Luhn algorithm instantly. Our free online tool helps you verify card formats and identify card types for testing purposes. 100% free, fast, and no signup required.",
		url: "https://30tools.com/credit-card-validator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Credit Card Validator Online – Fast & No Signup | 30tools",
		description: "Check if a credit card number is valid using the Luhn algorithm instantly. Our free online tool helps you verify card formats and identify card types for testing purposes. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "credit-card-validator",
        "name": "Credit Card Validator",
        "description": "Check if a credit card number is valid using the Luhn algorithm instantly. Our free online tool helps you verify card formats and identify card types for testing purposes.",
        "route": "/credit-card-validator",
        "extraSlugs": [
                "free-credit-card-validator-online",
                "credit-card-validator-tool",
                "luhn-algorithm-checker"
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
						url: "https://30tools.com/credit-card-validator",
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
