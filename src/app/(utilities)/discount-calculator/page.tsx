import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Discount Calculator Online – Fast & No Signup | 30tools",
	description: "Calculate the final price after discounts and taxes instantly. Our free online tool helps you find the best deals and savings while shopping. 100% free, fast, and no signup required.",
	keywords: "discount calculator, free discount calculator, online discount calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/discount-calculator",
	},
	openGraph: {
		title: "Free Discount Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate the final price after discounts and taxes instantly. Our free online tool helps you find the best deals and savings while shopping. 100% free, fast, and no signup required.",
		url: "https://30tools.com/discount-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Discount Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate the final price after discounts and taxes instantly. Our free online tool helps you find the best deals and savings while shopping. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "discount-calculator",
        "name": "Discount Calculator",
        "description": "Calculate the final price after discounts and taxes instantly. Our free online tool helps you find the best deals and savings while shopping.",
        "route": "/discount-calculator",
        "extraSlugs": [
                "free-discount-calculator-online",
                "discount-calculator-tool",
                "percentage-off-calculator"
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
						url: "https://30tools.com/discount-calculator",
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
