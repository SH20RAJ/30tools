import Link from "next/link";
import TextToSpeechTool from "@/components/tools/audio/TextToSpeechTool";

export const metadata = {
  title: "Free Text to Speech Online - No Signup | 30tools",
  description: "Audio tools: Text to Speech. Convert, edit, enhance audio files. Support for MP3, WAV, FLAC. Free and fast. All processing happens locally in your browser for c",
  keywords: ["text to speech","text to speech free","text to speech online","text to speech tool"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const textToSpeechJsonLd = generateToolJsonLd("text-to-speech", "audio", {
	name: "Free AI Voice Generator & TTS Converter",
	description:
		"Professional-grade text to speech tool to generate human-like voiceovers for YouTube, TikTok, and social media videos.",
	applicationCategory: "MultimediaApplication",
	featureList: [
		"Multiple voice options",
		"Language support",
		"Adjustable speech rate",
		"Pitch control",
		"Volume adjustment",
		"Real-time playback",
		"Pause and resume",
		"Browser-based processing",
	],
	about: {
		"@type": "Thing",
		name: "Text-to-Speech Technology",
		description:
			"Technology that converts written text into spoken words using synthetic speech",
	},
});

export default async function TextToSpeechPage({ searchParams }) {
	const params = await searchParams;
	// Dynamic context for future expansion
	return (
		<>
			<TextToSpeechTool />

			{/* Content Section */}
			<section className="container mx-auto px-4 py-16 max-w-4xl">
				<h2 className="text-3xl font-bold text-center mb-12">
					Realistic AI Voice Generator for Professional Content
				</h2>

				<div className="grid md:grid-cols-2 gap-8 mb-16">
					<div className="bg-card p-6 rounded-2xl border border-border">
						<h3 className="text-xl font-bold mb-4">🎙️ For Content Creators</h3>
						<p className="text-muted-foreground mb-4">
							Turn your scripts into voiceovers instantly. Perfect for YouTube
							videos, TikToks, and podcasts. Pair this with our{" "}
							<Link
								href="/youtube-script-generator"
								className="text-primary hover:underline"
							>
								AI Script Generator
							</Link>{" "}
							for a complete workflow.
						</p>
					</div>
					<div className="bg-card p-6 rounded-2xl border border-border">
						<h3 className="text-xl font-bold mb-4">
							📚 For Students & Research
						</h3>
						<p className="text-muted-foreground mb-4">
							Listen to articles, papers, and study notes. Increase your
							productivity by listening while you multitask. Need to summarize
							content first? Try our{" "}
							<Link
								href="/youtube-video-summarizer"
								className="text-primary hover:underline"
							>
								Video Summarizer
							</Link>
							.
						</p>
					</div>
				</div>

				<div className="bg-muted/30 rounded-3xl p-8 mb-16 border border-border/50">
					<h3 className="text-2xl font-bold mb-6 text-center">
						Why use our TTS Tool?
					</h3>
					<ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
						<li className="flex items-center gap-2">
							✓ Natural Sounding Voices
						</li>
						<li className="flex items-center gap-2">
							✓ Multi-Language Support
						</li>
						<li className="flex items-center gap-2">
							✓ Unlimited Text Conversion
						</li>
						<li className="flex items-center gap-2">
							✓ No Registration Required
						</li>
						<li className="flex items-center gap-2">
							✓ Adjustable Speed & Pitch
						</li>
						<li className="flex items-center gap-2">
							✓ 100% Free for Commercial Use
						</li>
					</ul>
				</div>

				<h2 className="text-2xl font-bold text-center mb-8">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4 max-w-2xl mx-auto">
					<details className="bg-card p-4 rounded-xl border cursor-pointer">
						<summary className="font-semibold">
							How to use AI voice generator for YouTube videos?
						</summary>
						<p className="mt-2 text-muted-foreground text-sm">
							Simply paste your script into our tool, select a natural-sounding
							voice, and preview. It's the perfect way to create professional 
							voiceovers for YouTube and Shorts without hiring a voice actor.
						</p>
					</details>
					<details className="bg-card p-4 rounded-xl border cursor-pointer">
						<summary className="font-semibold">
							Is this text to speech tool really free for commercial use?
						</summary>
						<p className="mt-2 text-muted-foreground text-sm">
							Absolutely! The generated audio is royalty-free and safe for
							commercial projects like YouTube voiceovers.
						</p>
					</details>
				</div>
			</section>

			{/* Schema.org structured data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(textToSpeechJsonLd),
				}}
			/>
		</>
	);
}
