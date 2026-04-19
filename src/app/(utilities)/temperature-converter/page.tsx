import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free Temperature Converter Online - No Signup | 30tools",
	description:
		"Convert Celsius, Fahrenheit, Kelvin, and Rankine in your browser. Accurate offsets, instant results, no uploads, and no account required.",
	keywords:
		"temperature converter, celsius to fahrenheit, kelvin converter, rankine, free online, 30tools",
	alternates: {
		canonical: "https://30tools.com/temperature-converter",
	},
	openGraph: {
		title: "Free Temperature Converter Online - No Signup | 30tools",
		description:
			"Convert Celsius, Fahrenheit, Kelvin, and Rankine in your browser. Accurate offsets, instant results, no uploads, and no account required.",
		url: "https://30tools.com/temperature-converter",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Temperature%20Converter%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Temperature Converter Online - No Signup | 30tools",
		description:
			"Convert Celsius, Fahrenheit, Kelvin, and Rankine in your browser. Accurate offsets, instant results, no uploads, and no account required.",
		images: ["/api/og?title=Free%20Temperature%20Converter%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "temperature-converter",
		name: "Temperature Converter",
		description:
			"Free temperature converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/temperature-converter",
		extraSlugs: [
			"free-temperature-converter-online",
			"temperature-converter-tool",
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
			name: "Temperature Converter",
			url: "/temperature-converter",
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
						name: "Temperature Converter",
						description:
							"Free temperature converter tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/temperature-converter",
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
				<ToolImplementation toolId="temperature-converter" />
			</ToolLayout>
		</>
	);
}
