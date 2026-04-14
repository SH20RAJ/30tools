import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free HTTP Status Code Checker Online - No Signup | 30tools",
	description:
		"Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"http status code checker, free online tool, no signup, utilities, http status code checker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/http-status-code-checker",
	},
	openGraph: {
		title: "Free HTTP Status Code Checker Online - No Signup | 30tools",
		description:
			"Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/http-status-code-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTTP Status Code Checker Online - No Signup | 30tools",
		description:
			"Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "http-status-code-checker",
		name: "HTTP Status Code Checker",
		description:
			"Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/http-status-code-checker",
		extraSlugs: [
			"free-http-status-code-checker-online",
			"http-status-code-checker-tool",
			"whatsapp-status-checker",
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
			name: "HTTP Status Code Checker",
			url: "/http-status-code-checker",
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
						name: "HTTP Status Code Checker",
						description:
							"Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/http-status-code-checker",
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
				<ToolPlaceholderPage toolId="http-status-code-checker" />
			</ToolLayout>
		</>
	);
}
