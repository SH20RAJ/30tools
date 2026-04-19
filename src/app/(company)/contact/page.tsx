import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Contact Online - No Signup | 30tools",
	description:
		"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"contact, free online tool, no signup, others, contact online, 30tools",
	alternates: {
		canonical: "https://30tools.com/contact",
	},
	openGraph: {
		title: "Free Contact Online - No Signup | 30tools",
		description:
			"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/contact",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Contact%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Contact Online - No Signup | 30tools",
		description:
			"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Contact%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "contact",
		name: "Contact",
		description:
			"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/contact",
		extraSlugs: ["contact"],
		category: "others",
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Contact",
			url: "/contact",
		},
	];
	const relatedTools = [
		{
			id: "ai-video-summarizer",
			name: "Ai Video Summarizer",
			description: "Ai Video Summarizer - Coming Soon",
			route: "/ai-video-summarizer",
			extraSlugs: [],
			popular: false,
			category: "others",
		},
		{
			id: "all-downloaders",
			name: "All Downloaders",
			description: "All Downloaders - Coming Soon",
			route: "/all-downloaders",
			extraSlugs: [],
			popular: false,
			category: "others",
		},
		{
			id: "audio-equalizer",
			name: "Audio Equalizer",
			description: "Audio Equalizer - Coming Soon",
			route: "/audio-equalizer",
			extraSlugs: [
				"audio-tools",
				"audio-trimmer",
				"change-audio-format",
				"mp4-audio-ripper",
				"optimize-audio-files",
				"shorten-audio-clip",
				"split-audio-file",
			],
			popular: false,
			category: "others",
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
						name: "Contact",
						description:
							"Free Contact online. Contact allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/contact",
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
