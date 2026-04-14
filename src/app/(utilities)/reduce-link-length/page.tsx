import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Reduce Link Length Online - No Signup | 30tools",
	description:
		"Free Reduce Link Length online. Reduce Link Length allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"reduce link length, free online tool, no signup, others, reduce link length online, 30tools",
	alternates: {
		canonical: "https://30tools.com/reduce-link-length",
	},
	openGraph: {
		title: "Free Reduce Link Length Online - No Signup | 30tools",
		description:
			"Free Reduce Link Length online. Reduce Link Length allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/reduce-link-length",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reduce Link Length Online - No Signup | 30tools",
		description:
			"Free Reduce Link Length online. Reduce Link Length allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "reduce-link-length",
		name: "Reduce Link Length",
		description:
			"Free Reduce Link Length online. Reduce Link Length allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/reduce-link-length",
		extraSlugs: ["reduce-link-length"],
		category: "others",
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Reduce Link Length",
			url: "/reduce-link-length",
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
						name: "Reduce Link Length",
						description:
							"Free Reduce Link Length online. Reduce Link Length allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/reduce-link-length",
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
