import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Time Zone Map Online - No Signup | 30tools",
	description:
		"Free Time Zone Map online. Time Zone Map allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"time zone map, free online tool, no signup, utilities, time zone map online, 30tools",
	alternates: {
		canonical: "https://30tools.com/time-zone-map",
	},
	openGraph: {
		title: "Free Time Zone Map Online - No Signup | 30tools",
		description:
			"Free Time Zone Map online. Time Zone Map allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/time-zone-map",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Time Zone Map Online - No Signup | 30tools",
		description:
			"Free Time Zone Map online. Time Zone Map allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "time-zone-map",
		name: "Time Zone Map",
		description:
			"Free Time Zone Map online. Time Zone Map allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/time-zone-map",
		extraSlugs: ["meeting-planner-time-zone", "time-zone-map"],
		category: "utilities",
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "Time Zone Map",
			url: "/time-zone-map",
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
						name: "Time Zone Map",
						description:
							"Free Time Zone Map online. Time Zone Map allows you to perform helpful calculations quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/time-zone-map",
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
