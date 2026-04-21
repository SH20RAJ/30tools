import GuitarTunerTool from "@/components/tools/audio/GuitarTunerTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Guitar Tuner Online - No Signup | 30tools",
	description:
		"Tune your guitar online for free with our accurate microphone-based guitar tuner. No signup required. Works for acoustic, electric, and bass guitars with standard and drop tunings.",
	keywords: "free online guitar tuner, microphone guitar tuner, tune guitar online, standard tuning, drop D tuner",
	alternates: {
		canonical: "https://30tools.com/guitar-tuner",
	},
	openGraph: {
		title: "Free Guitar Tuner Online - No Signup | 30tools",
		description:
			"Tune your guitar online for free with our accurate microphone-based guitar tuner. No signup required. Works for acoustic, electric, and bass guitars with standard and drop tunings.",
		url: "https://30tools.com/guitar-tuner",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Guitar Tuner Online - No Signup | 30tools",
		description:
			"Tune your guitar online for free with our accurate microphone-based guitar tuner. No signup required.",
	},
};

export default function GuitarTunerPage() {
	const tool = {
		id: "guitar-tuner",
		name: "Guitar Tuner",
		description: "Free online guitar tuner. Uses your microphone to tune your guitar accurately.",
		route: "/guitar-tuner",
		extraSlugs: [
			"free-online-guitar-tuner",
			"acoustic-guitar-tuner-online",
			"bass-guitar-tuner",
			"ukulele-tuner-online",
		],
		popular: false,
		category: "audio",
	};

	const breadcrumbs = [
		{
			name: "Audio Tools",
			url: "/audio-tools",
		},
		{
			name: "Guitar Tuner",
			url: "/guitar-tuner",
		},
	];

	const relatedTools = [
		{
			id: "text-to-speech",
			name: "Text to Speech",
			description: "Convert text to natural sounding speech audio",
			route: "/text-to-speech",
			extraSlugs: ["free-text-to-speech-with-no-word-limit", "natural-sounding-tts-online"],
			category: "audio",
		},
		{
			id: "audio-converter-mp3",
			name: "Audio Converter Mp3",
			description: "Free Audio Converter Mp3 online. Audio Converter Mp3 allows you to edit audio files quickly and easily.",
			route: "/audio-converter-mp3",
			extraSlugs: ["m4a-audio-converter", "tiktok-mp3-converter"],
			category: "audio",
		},
		{
			id: "audio-cutter-merger",
			name: "Audio Cutter Merger",
			description: "Free Audio Cutter Merger online to edit audio files quickly and easily.",
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
			<GuitarTunerTool />
		</ToolLayout>
	);
}
