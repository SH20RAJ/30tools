import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free Time Converter Online - No Signup | 30tools",
	description:
		"Free time converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"time converter, free online tool, no signup, utilities, time converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/time-converter",
	},
	openGraph: {
		title: "Free Time Converter Online - No Signup | 30tools",
		description:
			"Free time converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/time-converter",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Time%20Converter%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Time Converter Online - No Signup | 30tools",
		description:
			"Free time converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Time%20Converter%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "time-converter",
		name: "Time Converter",
		description:
			"Free time converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/time-converter",
		extraSlugs: [
			"check-time-difference",
			"free-time-converter-online",
			"human-readable-time",
			"meeting-planner-time-zone",
			"time-converter-tool",
			"time-zone-map",
			"unix-time-converter",
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
			name: "Time Converter",
			url: "/time-converter",
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
						name: "Time Converter",
						description:
							"Free time converter tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/time-converter",
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
				<ToolImplementation toolId="time-converter" />
			</ToolLayout>
		</>
	);
}
