import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Whatsapp Chat Link Online - No Signup | 30tools",
	description:
		"Free Whatsapp Chat Link online. Whatsapp Chat Link allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"whatsapp chat link, free online tool, no signup, others, whatsapp chat link online, 30tools",
	alternates: {
		canonical: "https://30tools.com/whatsapp-chat-link",
	},
	openGraph: {
		title: "Free Whatsapp Chat Link Online - No Signup | 30tools",
		description:
			"Free Whatsapp Chat Link online. Whatsapp Chat Link allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/whatsapp-chat-link",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Whatsapp Chat Link Online - No Signup | 30tools",
		description:
			"Free Whatsapp Chat Link online. Whatsapp Chat Link allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "whatsapp-chat-link",
		name: "Whatsapp Chat Link",
		description:
			"Free Whatsapp Chat Link online. Whatsapp Chat Link allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/whatsapp-chat-link",
		extraSlugs: [
			"click-to-chat-whatsapp",
			"fake-whatsapp-chat-generator",
			"whatsapp-chat-link",
			"whatsapp-direct-message-link",
		],
		category: "others",
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Whatsapp Chat Link",
			url: "/whatsapp-chat-link",
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
						name: "Whatsapp Chat Link",
						description:
							"Free Whatsapp Chat Link online. Whatsapp Chat Link allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/whatsapp-chat-link",
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
