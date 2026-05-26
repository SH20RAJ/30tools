import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TextToSpeechTool from "@/components/tools/audio/TextToSpeechTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text to Speech Online - No Signup | 30tools",
	description: "Process, edit, and convert audio files with our free Text to Speech online. High-quality output and private browser-based tools with no signup. Try it free now.",
	keywords: "text to speech, tts, text to audio, voice generator, ai voice, free online tool, 30tools, text-to-speech, free text-to-speech, text to speech online, audio converter, online audio tool",
	alternates: {
		canonical: "https://30tools.com/text-to-speech",
	},
	openGraph: {
		title: "Free Text to Speech Online - No Signup | 30tools",
		description: "Process, edit, and convert audio files with our free Text to Speech online. High-quality output and private browser-based tools with no signup. Try it free now.",
		url: "https://30tools.com/text-to-speech",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Speech Online - No Signup | 30tools",
		description: "Process, edit, and convert audio files with our free Text to Speech online. High-quality output and private browser-based tools with no signup. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-to-speech");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TextToSpeechTool />
		</ToolLayout>
	);
}
