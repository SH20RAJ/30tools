import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/shared/ToolPlaceholderPage";

export const metadata = {
	title: "Free Screen Resolution Simulator Online - No Signup | 30tools",
	description:
		"Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"screen resolution simulator, free online tool, no signup, utilities, screen resolution simulator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/screen-resolution-simulator",
	},
	openGraph: {
		title: "Free Screen Resolution Simulator Online - No Signup | 30tools",
		description:
			"Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/screen-resolution-simulator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Screen Resolution Simulator Online - No Signup | 30tools",
		description:
			"Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "screen-resolution-simulator",
		name: "Screen Resolution Simulator",
		description:
			"Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/screen-resolution-simulator",
		extraSlugs: [
			"free-screen-recorder",
			"free-screen-resolution-simulator-online",
			"improve-picture-resolution",
			"screen-recorder",
			"screen-resolution-simulator-tool",
			"smartphone-view-simulator",
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
			name: "Screen Resolution Simulator",
			url: "/screen-resolution-simulator",
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
						name: "Screen Resolution Simulator",
						description:
							"Free screen resolution simulator tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/screen-resolution-simulator",
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
				<ToolPlaceholderPage toolId="screen-resolution-simulator" />
			</ToolLayout>
		</>
	);
}
