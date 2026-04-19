import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free Page Size Checker Online - No Signup | 30tools",
	description:
		"Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"page size checker, free online tool, no signup, utilities, page size checker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/page-size-checker",
	},
	openGraph: {
		title: "Free Page Size Checker Online - No Signup | 30tools",
		description:
			"Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/page-size-checker",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Page%20Size%20Checker%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Page Size Checker Online - No Signup | 30tools",
		description:
			"Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Page%20Size%20Checker%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "page-size-checker",
		name: "Page Size Checker",
		description:
			"Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/page-size-checker",
		extraSlugs: [
			"audio-size-reducer",
			"download-full-size-dp",
			"duplicate-page-detector",
			"free-page-size-checker-online",
			"on-page-seo-checker",
			"page-size-checker-tool",
			"reduce-audio-file-size",
			"reduce-js-file-size",
			"shrink-mp3-size",
			"social-media-post-size",
			"view-full-size-ig-dp",
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
			name: "Page Size Checker",
			url: "/page-size-checker",
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
						name: "Page Size Checker",
						description:
							"Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/page-size-checker",
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
				<ToolImplementation toolId="page-size-checker" />
			</ToolLayout>
		</>
	);
}
