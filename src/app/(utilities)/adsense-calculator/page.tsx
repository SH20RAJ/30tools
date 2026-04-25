import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Adsense Calculator Online – Fast & No Signup | 30tools",
	description: "Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "adsense calculator, free adsense calculator, online adsense calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/adsense-calculator",
	},
	openGraph: {
		title: "Free Adsense Calculator Online – Fast & No Signup | 30tools",
		description: "Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/adsense-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Adsense Calculator Online – Fast & No Signup | 30tools",
		description: "Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "adsense-calculator",
        "name": "Adsense Calculator",
        "description": "Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/adsense-calculator",
        "extraSlugs": [
                "free-adsense-calculator-online",
                "adsense-calculator-tool"
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
						url: "https://30tools.com/adsense-calculator",
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
