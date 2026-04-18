import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free Angle Converter Online - No Signup | 30tools",
	description:
		"Free angle converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"angle converter, free online tool, no signup, utilities, angle converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/angle-converter",
	},
	openGraph: {
		title: "Free Angle Converter Online - No Signup | 30tools",
		description:
			"Free angle converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/angle-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Angle Converter Online - No Signup | 30tools",
		description:
			"Free angle converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "angle-converter",
		name: "Angle Converter",
		description:
			"Free angle converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/angle-converter",
		extraSlugs: ["free-angle-converter-online", "angle-converter-tool"],
		popular: false,
		category: "utilities",
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "Angle Converter",
			url: "/angle-converter",
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
			id: "apparent-power-converter",
			name: "Apparent Power Converter",
			description:
				"Free apparent power converter tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/apparent-power-converter",
			extraSlugs: [
				"free-apparent-power-converter-online",
				"apparent-power-converter-tool",
			],
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
						name: "Angle Converter",
						description:
							"Free angle converter tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/angle-converter",
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
				<ToolImplementation toolId="angle-converter" />
			</ToolLayout>
		</>
	);
}
