import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Unix Timestamp To Date Online - No Signup | 30tools",
	description:
		"Free Unix Timestamp To Date online. Unix Timestamp To Date allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"unix timestamp to date, free online tool, no signup, utilities, unix timestamp to date online, 30tools",
	alternates: {
		canonical: "https://30tools.com/unix-timestamp-to-date",
	},
	openGraph: {
		title: "Free Unix Timestamp To Date Online - No Signup | 30tools",
		description:
			"Free Unix Timestamp To Date online. Unix Timestamp To Date allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/unix-timestamp-to-date",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Unix Timestamp To Date Online - No Signup | 30tools",
		description:
			"Free Unix Timestamp To Date online. Unix Timestamp To Date allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "unix-timestamp-to-date",
		name: "Unix Timestamp To Date",
		description:
			"Free Unix Timestamp To Date online. Unix Timestamp To Date allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/unix-timestamp-to-date",
		extraSlugs: ["date-to-epoch", "unix-timestamp-to-date"],
		category: "utilities",
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "Unix Timestamp To Date",
			url: "/unix-timestamp-to-date",
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
						name: "Unix Timestamp To Date",
						description:
							"Free Unix Timestamp To Date online. Unix Timestamp To Date allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/unix-timestamp-to-date",
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
				<ToolInteractivePlaceholder toolName={tool.name} />
			</ToolLayout>
		</>
	);
}
