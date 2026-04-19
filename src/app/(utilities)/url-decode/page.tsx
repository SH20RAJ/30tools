import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free URL Decode Online - No Signup | 30tools",
	description:
		"Free url decode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"url decode, free online tool, no signup, utilities, url decode online, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-decode",
	},
	openGraph: {
		title: "Free URL Decode Online - No Signup | 30tools",
		description:
			"Free url decode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/url-decode",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20URL%20Decode%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Decode Online - No Signup | 30tools",
		description:
			"Free url decode tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20URL%20Decode%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "url-decode",
		name: "URL Decode",
		description:
			"Free url decode tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/url-decode",
		extraSlugs: [
			"free-url-decode-online",
			"url-decode-tool",
			"escape-url-characters",
			"make-url-shorter",
			"generate-payment-url",
			"check-url-indexation",
			"bulk-url-indexer",
			"find-backlinks-url",
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
			name: "URL Decode",
			url: "/url-decode",
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
						name: "URL Decode",
						description:
							"Free url decode tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/url-decode",
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
				<ToolImplementation toolId="url-decode" />
			</ToolLayout>
		</>
	);
}
