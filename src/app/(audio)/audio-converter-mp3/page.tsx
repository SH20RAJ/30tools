import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Audio Converter Mp3 Online - No Signup | 30tools",
	description:
		"Free Audio Converter Mp3 online. Audio Converter Mp3 allows you to edit audio files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"audio converter mp3, free online tool, no signup, audio, audio converter mp3 online, 30tools",
	alternates: {
		canonical: "https://30tools.com/audio-converter-mp3",
	},
	openGraph: {
		title: "Free Audio Converter Mp3 Online - No Signup | 30tools",
		description:
			"Free Audio Converter Mp3 online. Audio Converter Mp3 allows you to edit audio files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/audio-converter-mp3",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Audio Converter Mp3 Online - No Signup | 30tools",
		description:
			"Free Audio Converter Mp3 online. Audio Converter Mp3 allows you to edit audio files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "audio-converter-mp3",
		name: "Audio Converter Mp3",
		description:
			"Free Audio Converter Mp3 online. Audio Converter Mp3 allows you to edit audio files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/audio-converter-mp3",
		extraSlugs: [
			"audio-converter-mp3",
			"m4a-audio-converter",
			"ogg-audio-converter",
			"tiktok-mp3-converter",
			"wav-audio-converter",
		],
		category: "audio",
	};
	const breadcrumbs = [
		{
			name: "Audio Tools",
			url: "/audio-tools",
		},
		{
			name: "Audio Converter Mp3",
			url: "/audio-converter-mp3",
		},
	];
	const relatedTools = [
		{
			id: "text-to-speech",
			name: "Text to Speech",
			description: "Convert text to natural sounding speech audio",
			route: "/text-to-speech",
			extraSlugs: [
				"free-text-to-speech-with-no-word-limit",
				"natural-sounding-tts-online",
				"text-to-speech-ai",
			],
			popular: true,
			category: "audio",
		},
		{
			id: "optimize-audio-files",
			name: "Optimize Audio Files",
			description:
				"Free Optimize Audio Files online. Optimize Audio Files allows you to edit audio files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
			route: "/optimize-audio-files",
			extraSlugs: ["optimize-audio-files"],
			category: "audio",
		},
		{
			id: "audio-cutter-merger",
			name: "Audio Cutter Merger",
			description:
				"Free Audio Cutter Merger online. Audio Cutter Merger allows you to edit audio files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
			route: "/audio-cutter-merger",
			extraSlugs: ["audio-cutter-merger"],
			category: "audio",
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
						name: "Audio Converter Mp3",
						description:
							"Free Audio Converter Mp3 online. Audio Converter Mp3 allows you to edit audio files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/audio-converter-mp3",
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
				<ToolPlaceholderPage toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
