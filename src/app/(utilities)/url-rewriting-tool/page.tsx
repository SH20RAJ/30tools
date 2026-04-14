import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free URL Rewriting Tool Online - No Signup | 30tools",
	description:
		"Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"url rewriting tool, free online tool, no signup, utilities, url rewriting tool online, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-rewriting-tool",
	},
	openGraph: {
		title: "Free URL Rewriting Tool Online - No Signup | 30tools",
		description:
			"Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/url-rewriting-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Rewriting Tool Online - No Signup | 30tools",
		description:
			"Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "url-rewriting-tool",
		name: "URL Rewriting Tool",
		description:
			"Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/url-rewriting-tool",
		extraSlugs: [
			"competitor-analysis-tool",
			"content-duplication-tool",
			"crawl-control-tool",
			"css3-gradient-tool",
			"css3-shadow-tool",
			"email-scraper-tool",
			"foreign-exchange-tool",
			"free-url-rewriting-tool-online",
			"gmb-optimization-tool",
			"mobile-optimization-tool",
			"percent-encoding-tool",
			"rank-tracking-tool",
			"regex-cheatsheet-tool",
			"serp-preview-tool",
			"typography-preview-tool",
			"url-decoder-tool",
			"url-rewriting-tool-tool",
			"website-comparison-tool",
		],
		popular: false,
		category: "utilities",
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "URL Rewriting Tool",
			url: "/url-rewriting-tool",
		},
	];
	const relatedTools = [
		{
			id: "adsense-calculator",
			name: "Adsense Calculator",
			description:
				"Free adsense calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/adsense-calculator",
			extraSlugs: ["free-adsense-calculator-online", "adsense-calculator-tool"],
			popular: false,
			category: "utilities",
		},
		{
			id: "age-calculator",
			name: "Age Calculator",
			description:
				"Free age calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/age-calculator",
			extraSlugs: ["free-age-calculator-online", "age-calculator-tool"],
			popular: false,
			category: "utilities",
		},
		{
			id: "angle-converter",
			name: "Angle Converter",
			description:
				"Free angle converter tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/angle-converter",
			extraSlugs: ["free-angle-converter-online", "angle-converter-tool"],
			popular: false,
			category: "utilities",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "URL Rewriting Tool",
						description:
							"Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/url-rewriting-tool",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<ToolPlaceholderPage toolId="url-rewriting-tool" />
			</ToolLayout>
		</>
	);
}
