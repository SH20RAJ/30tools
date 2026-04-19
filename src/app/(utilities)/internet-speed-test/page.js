import InternetSpeedTestTool from "@/components/tools/utilities/InternetSpeedTestTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Internet Speed Test Online - No Signup | 30tools",
	description:
		"Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"internet speed test, free online tool, no signup, utilities, internet speed test online, 30tools",
	alternates: {
		canonical: "https://30tools.com/internet-speed-test",
	},
	openGraph: {
		title: "Free Internet Speed Test Online - No Signup | 30tools",
		description:
			"Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/internet-speed-test",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Internet Speed Test Online - No Signup | 30tools",
		description:
			"Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "internet-speed-test",
		name: "Internet Speed Test",
		description:
			"Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly.",
		route: "/internet-speed-test",
		extraSlugs: [
			"check-internet-speed-for-gaming",
			"check-website-speed",
			"keyboard-speed-test",
			"microphone-test-recorder",
			"mobile-friendly-test",
			"online-bandwidth-test-free",
			"rich-results-test",
			"speed-test-google",
			"typing-racer-test",
			"typing-speed-test",
			"website-performance-test",
			"words-per-minute-test",
		],
		popular: true,
		category: "utilities",
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "Internet Speed Test",
			url: "/internet-speed-test",
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
						name: "Internet Speed Test",
						description:
							"Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly.",
						url: "https://30tools.com/internet-speed-test",
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
				<InternetSpeedTestTool />
			</ToolLayout>
		</>
	);
}
