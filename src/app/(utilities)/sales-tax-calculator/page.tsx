import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Sales Tax Calculator Online – Fast & No Signup | 30tools",
	description: "Free sales tax calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "sales tax calculator, free sales tax calculator, online sales tax calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/sales-tax-calculator",
	},
	openGraph: {
		title: "Free Sales Tax Calculator Online – Fast & No Signup | 30tools",
		description: "Free sales tax calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/sales-tax-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Sales Tax Calculator Online – Fast & No Signup | 30tools",
		description: "Free sales tax calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "sales-tax-calculator",
        "name": "Sales Tax Calculator",
        "description": "Free sales tax calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/sales-tax-calculator",
        "extraSlugs": [
                "free-sales-tax-calculator-online",
                "sales-tax-calculator-tool"
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
						url: "https://30tools.com/sales-tax-calculator",
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
