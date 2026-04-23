import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free CPM Calculator Online – Fast & No Signup | 30tools",
	description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and reach efficiency. 100% free, fast, and no signup required.",
	keywords: "cpm calculator, free cpm calculator, online cpm calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/cpm-calculator",
	},
	openGraph: {
		title: "Free CPM Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and reach efficiency. 100% free, fast, and no signup required.",
		url: "https://30tools.com/cpm-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CPM Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and reach efficiency. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "cpm-calculator",
        "name": "CPM Calculator",
        "description": "Calculate Cost Per Mille (CPM) for your advertising campaigns instantly. Our free online tool helps marketers and creators understand their ad spend and reach efficiency.",
        "route": "/cpm-calculator",
        "extraSlugs": [
                "free-cpm-calculator-online",
                "cpm-calculator-tool",
                "advertising-cost-calculator"
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
						url: "https://30tools.com/cpm-calculator",
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
