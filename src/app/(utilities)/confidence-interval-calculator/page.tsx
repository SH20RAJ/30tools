import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Confidence Interval Calculator Online – Fast & No Signup | 30tools",
	description: "Calculate the confidence interval for your statistical data instantly. Our free online tool helps you understand data precision and margin of error in your research. 100% free, fast, and no signup required.",
	keywords: "confidence interval calculator, free confidence interval calculator, online confidence interval calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/confidence-interval-calculator",
	},
	openGraph: {
		title: "Free Confidence Interval Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate the confidence interval for your statistical data instantly. Our free online tool helps you understand data precision and margin of error in your research. 100% free, fast, and no signup required.",
		url: "https://30tools.com/confidence-interval-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Confidence Interval Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate the confidence interval for your statistical data instantly. Our free online tool helps you understand data precision and margin of error in your research. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "confidence-interval-calculator",
        "name": "Confidence Interval Calculator",
        "description": "Calculate the confidence interval for your statistical data instantly. Our free online tool helps you understand data precision and margin of error in your research.",
        "route": "/confidence-interval-calculator",
        "extraSlugs": [
                "free-confidence-interval-calculator-online",
                "confidence-interval-calculator-tool",
                "statistical-margin-of-error-calculator"
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
						url: "https://30tools.com/confidence-interval-calculator",
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
