import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Average Calculator Online – Fast & No Signup | 30tools",
	description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in seconds. 100% free, fast, and no signup required.",
	keywords: "average calculator, free average calculator, online average calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/average-calculator",
	},
	openGraph: {
		title: "Free Average Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in seconds. 100% free, fast, and no signup required.",
		url: "https://30tools.com/average-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Average Calculator Online – Fast & No Signup | 30tools",
		description: "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in seconds. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "average-calculator",
        "name": "Average Calculator",
        "description": "Calculate the mean, median, mode, and range of any dataset instantly. Our free online Average Calculator helps you analyze statistics and numeric data in seconds.",
        "route": "/average-calculator",
        "extraSlugs": [
                "free-average-calculator-online",
                "average-calculator-tool",
                "mean-median-mode-calculator"
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
						url: "https://30tools.com/average-calculator",
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
