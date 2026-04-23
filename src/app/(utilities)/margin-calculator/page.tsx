import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Margin Calculator Online – Fast & No Signup | 30tools",
	description: "Free margin calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "margin calculator, free margin calculator, online margin calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/margin-calculator",
	},
	openGraph: {
		title: "Free Margin Calculator Online – Fast & No Signup | 30tools",
		description: "Free margin calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/margin-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Margin Calculator Online – Fast & No Signup | 30tools",
		description: "Free margin calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "margin-calculator",
        "name": "Margin Calculator",
        "description": "Free margin calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/margin-calculator",
        "extraSlugs": [
                "free-margin-calculator-online",
                "margin-calculator-tool"
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
						url: "https://30tools.com/margin-calculator",
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
