import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Video Watermark Remover Online - No Signup | 30tools",
	description:
		"Video Watermark Remover - Coming Soon 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"video watermark remover, free online tool, no signup, others, video watermark remover online, 30tools",
	alternates: {
		canonical: "https://30tools.com/video-watermark-remover",
	},
	openGraph: {
		title: "Free Video Watermark Remover Online - No Signup | 30tools",
		description:
			"Video Watermark Remover - Coming Soon 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/video-watermark-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Watermark Remover Online - No Signup | 30tools",
		description:
			"Video Watermark Remover - Coming Soon 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "video-watermark-remover",
		name: "Video Watermark Remover",
		description: "Video Watermark Remover - Coming Soon",
		route: "/video-watermark-remover",
		extraSlugs: [],
		popular: false,
		category: "others",
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Video Watermark Remover",
			url: "/video-watermark-remover",
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
						name: "Video Watermark Remover",
						description: "Video Watermark Remover - Coming Soon",
						url: "https://30tools.com/video-watermark-remover",
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
