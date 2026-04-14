import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Confidence Interval Calculator Online - No Signup | 30tools",
	description:
		"Free confidence interval calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"confidence interval calculator, free online tool, no signup, utilities, confidence interval calculator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/confidence-interval-calculator",
	},
	openGraph: {
		title: "Free Confidence Interval Calculator Online - No Signup | 30tools",
		description:
			"Free confidence interval calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/confidence-interval-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Confidence Interval Calculator Online - No Signup | 30tools",
		description:
			"Free confidence interval calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "confidence-interval-calculator",
		name: "Confidence Interval Calculator",
		description:
			"Free confidence interval calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/confidence-interval-calculator",
		extraSlugs: [
			"free-confidence-interval-calculator-online",
			"confidence-interval-calculator-tool",
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
			name: "Confidence Interval Calculator",
			url: "/confidence-interval-calculator",
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
						name: "Confidence Interval Calculator",
						description:
							"Free confidence interval calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/confidence-interval-calculator",
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
				<ToolPlaceholderPage toolId="confidence-interval-calculator" />
			</ToolLayout>
		</>
	);
}
