import TextToSpeechTool from "@/components/tools/audio/TextToSpeechTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
	title: "Free Text to Speech Online - No Signup | 30tools",
	description: "Convert text to natural sounding speech audio 100% free, no signup required, and privacy-focused processing in your browser.",
	path: "/text-to-speech",
});

export default async function ToolPage() {
	const tool = {
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
	};
	const breadcrumbs = [
		{
			name: "Audio Tools",
			url: "/audio-tools",
		},
		{
			name: "Text to Speech",
			url: "/text-to-speech",
		},
	];
	const relatedTools = [
		{
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
		<ToolLayout
			tool={tool}
			breadcrumbs={breadcrumbs}
			relatedTools={relatedTools}
		>
			<TextToSpeechTool />
		</ToolLayout>
	);
}
