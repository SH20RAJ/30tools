import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free WordPress Theme Detector Online - No Signup | 30tools",
	description:
		"Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"wordpress theme detector, free online tool, no signup, utilities, wordpress theme detector online, 30tools",
	alternates: {
		canonical: "https://30tools.com/wordpress-theme-detector",
	},
	openGraph: {
		title: "Free WordPress Theme Detector Online - No Signup | 30tools",
		description:
			"Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/wordpress-theme-detector",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free WordPress Theme Detector Online - No Signup | 30tools",
		description:
			"Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "wordpress-theme-detector",
		name: "WordPress Theme Detector",
		description:
			"Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/wordpress-theme-detector",
		extraSlugs: [
			"free-wordpress-theme-detector-online",
			"wordpress-theme-detector-tool",
			"disposable-email-detector",
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
			name: "WordPress Theme Detector",
			url: "/wordpress-theme-detector",
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
						name: "WordPress Theme Detector",
						description:
							"Free wordpress theme detector tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/wordpress-theme-detector",
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
				<ToolPlaceholderPage toolId="wordpress-theme-detector" />
			</ToolLayout>
		</>
	);
}
