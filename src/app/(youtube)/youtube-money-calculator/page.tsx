import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Money Calculator Online – Fast & No Signup | 30tools",
	description: "Estimate potential earnings for any YouTube video or channel with our free online Money Calculator. Understand revenue based on views, CPM, and engagement metrics. Perfect for creators. 100% free, fast, and no signup required.",
	keywords: "youtube money calculator, free youtube money calculator, online youtube money calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-money-calculator",
	},
	openGraph: {
		title: "Free YouTube Money Calculator Online – Fast & No Signup | 30tools",
		description: "Estimate potential earnings for any YouTube video or channel with our free online Money Calculator. Understand revenue based on views, CPM, and engagement metrics. Perfect for creators. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-money-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Money Calculator Online – Fast & No Signup | 30tools",
		description: "Estimate potential earnings for any YouTube video or channel with our free online Money Calculator. Understand revenue based on views, CPM, and engagement metrics. Perfect for creators. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-money-calculator",
        "name": "YouTube Money Calculator",
        "description": "Estimate potential earnings for any YouTube video or channel with our free online Money Calculator. Understand revenue based on views, CPM, and engagement metrics. Perfect for creators.",
        "route": "/youtube-money-calculator",
        "extraSlugs": [
                "free-youtube-money-calculator-online",
                "youtube-money-calculator-tool",
                "sha256-hash-calculator",
                "advanced-hash-calculator",
                "file-checksum-calculator",
                "flesch-kincaid-calculator",
                "exchange-rate-calculator",
                "currency-calculator-live",
                "youtube-earnings-calculator"
        ],
        "popular": false,
        "category": "youtube"
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
						url: "https://30tools.com/youtube-money-calculator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
