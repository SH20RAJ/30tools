import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free Volumetric Flow Rate Converter Online - No Signup | 30tools",
	description:
		"Free volumetric flow rate converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"volumetric flow rate converter, free online tool, no signup, utilities, volumetric flow rate converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/volumetric-flow-rate-converter",
	},
	openGraph: {
		title: "Free Volumetric Flow Rate Converter Online - No Signup | 30tools",
		description:
			"Free volumetric flow rate converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/volumetric-flow-rate-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Volumetric Flow Rate Converter Online - No Signup | 30tools",
		description:
			"Free volumetric flow rate converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "volumetric-flow-rate-converter",
		name: "Volumetric Flow Rate Converter",
		description:
			"Free volumetric flow rate converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/volumetric-flow-rate-converter",
		extraSlugs: [
			"free-volumetric-flow-rate-converter-online",
			"volumetric-flow-rate-converter-tool",
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
			name: "Volumetric Flow Rate Converter",
			url: "/volumetric-flow-rate-converter",
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
						name: "Volumetric Flow Rate Converter",
						description:
							"Free volumetric flow rate converter tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/volumetric-flow-rate-converter",
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
				<ToolImplementation toolId="volumetric-flow-rate-converter" />
			</ToolLayout>
		</>
	);
}
