import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title:
		"Free Make Your Own Custom Terabox Telegram Bot Online - No Signup | 30tools",
	description:
		"Free Make Your Own Custom Terabox Telegram Bot online tool. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"make your own custom terabox telegram bot, free online tool, no signup, others, make your own custom terabox telegram bot online, 30tools",
	alternates: {
		canonical:
			"https://30tools.com/blog/make-your-own-custom-terabox-telegram-bot",
	},
	openGraph: {
		title:
			"Free Make Your Own Custom Terabox Telegram Bot Online - No Signup | 30tools",
		description:
			"Free Make Your Own Custom Terabox Telegram Bot online tool. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/blog/make-your-own-custom-terabox-telegram-bot",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Free Make Your Own Custom Terabox Telegram Bot Online - No Signup | 30tools",
		description:
			"Free Make Your Own Custom Terabox Telegram Bot online tool. Fast and secure. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "make-your-own-custom-terabox-telegram-bot",
		name: "Make Your Own Custom Terabox Telegram Bot",
		description:
			"Free Make Your Own Custom Terabox Telegram Bot online tool. Fast and secure.",
		route: "/blog/make-your-own-custom-terabox-telegram-bot",
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
			name: "Make Your Own Custom Terabox Telegram Bot",
			url: "/blog/make-your-own-custom-terabox-telegram-bot",
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
						name: "Make Your Own Custom Terabox Telegram Bot",
						description:
							"Free Make Your Own Custom Terabox Telegram Bot online tool. Fast and secure.",
						url: "https://30tools.com/blog/make-your-own-custom-terabox-telegram-bot",
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
