import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Credit Card Generator Online – Fast & No Signup | 30tools",
	description: "Generate valid dummy credit card numbers for software testing and data validation. Our free online tool provides numbers that pass Luhn algorithm checks without being real cards. 100% free, fast, and no signup required.",
	keywords: "credit card generator, free credit card generator, online credit card generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/credit-card-generator",
	},
	openGraph: {
		title: "Free Credit Card Generator Online – Fast & No Signup | 30tools",
		description: "Generate valid dummy credit card numbers for software testing and data validation. Our free online tool provides numbers that pass Luhn algorithm checks without being real cards. 100% free, fast, and no signup required.",
		url: "https://30tools.com/credit-card-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Credit Card Generator Online – Fast & No Signup | 30tools",
		description: "Generate valid dummy credit card numbers for software testing and data validation. Our free online tool provides numbers that pass Luhn algorithm checks without being real cards. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "credit-card-generator",
        "name": "Credit Card Generator",
        "description": "Generate valid dummy credit card numbers for software testing and data validation. Our free online tool provides numbers that pass Luhn algorithm checks without being real cards.",
        "route": "/credit-card-generator",
        "extraSlugs": [
                "free-credit-card-generator-online",
                "credit-card-generator-tool",
                "test-credit-card-numbers"
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
						url: "https://30tools.com/credit-card-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
