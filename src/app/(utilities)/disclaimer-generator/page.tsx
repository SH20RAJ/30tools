import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Disclaimer Generator Online – Fast & No Signup | 30tools",
	description: "Create professional disclaimers for your website or app instantly. Our free online generator helps you protect your business and comply with legal requirements. 100% free, fast, and no signup required.",
	keywords: "disclaimer generator, free disclaimer generator, online disclaimer generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/disclaimer-generator",
	},
	openGraph: {
		title: "Free Disclaimer Generator Online – Fast & No Signup | 30tools",
		description: "Create professional disclaimers for your website or app instantly. Our free online generator helps you protect your business and comply with legal requirements. 100% free, fast, and no signup required.",
		url: "https://30tools.com/disclaimer-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Disclaimer Generator Online – Fast & No Signup | 30tools",
		description: "Create professional disclaimers for your website or app instantly. Our free online generator helps you protect your business and comply with legal requirements. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "disclaimer-generator",
        "name": "Disclaimer Generator",
        "description": "Create professional disclaimers for your website or app instantly. Our free online generator helps you protect your business and comply with legal requirements.",
        "route": "/disclaimer-generator",
        "extraSlugs": [
                "free-disclaimer-generator-online",
                "disclaimer-generator-tool",
                "website-legal-disclaimer-maker"
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
						url: "https://30tools.com/disclaimer-generator",
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
