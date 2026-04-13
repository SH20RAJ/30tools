import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Text Tools Online - No Signup | 30tools",
	description:
		"Free Text Tools online tool. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"text tools, free online tool, no signup, utilities, text tools online, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-tools",
	},
	openGraph: {
		title: "Free Text Tools Online - No Signup | 30tools",
		description:
			"Free Text Tools online tool. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/text-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Tools Online - No Signup | 30tools",
		description:
			"Free Text Tools online tool. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "text-tools",
		name: "Text Tools",
		description: "Free Text Tools online tool. Fast and secure.",
		route: "/text-tools",
		extraSlugs: [],
		popular: false,
		category: "utilities",
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "Text Tools",
			url: "/text-tools",
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
						name: "Text Tools",
						description: "Free Text Tools online tool. Fast and secure.",
						url: "https://30tools.com/text-tools",
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
				<div>{/* Tool component placeholder */}</div>
			</ToolLayout>
		</>
	);
}
