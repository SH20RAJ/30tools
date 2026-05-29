import ToolLayout from "@/components/tools/shared/ToolLayout";
import AIMusicGeneratorTool from "@/components/tools/generators/AIMusicGeneratorTool";

export const metadata = {
	title: "Free AI Music Generator Online - No Signup | 30tools",
	description: "Generate full-length AI songs with vocals and instrumentation from text prompts using MiniMax Music 2.6 on Cloudflare AI. Royalty-free music generation...",
	keywords: "ai music generator, free ai music generator, minimax music 2.6, cloudflare ai music, text to song ai, ai song maker, royalty free ai music, free music generator online, ai vocal generator, instrumental ai music, free this week",
	alternates: {
		canonical: "https://30tools.com/ai-music-generator",
	},
	openGraph: {
		title: "Free AI Music Generator Online - No Signup | 30tools",
		description: "Generate full-length AI songs with vocals and instrumentation from text prompts using MiniMax Music 2.6 on Cloudflare AI. Royalty-free music generation...",
		url: "https://30tools.com/ai-music-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI Music Generator Online - No Signup | 30tools",
		description: "Generate full-length AI songs with vocals and instrumentation from text prompts using MiniMax Music 2.6 on Cloudflare AI. Royalty-free music generation...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "ai-music-generator",
		name: "AI Music Generator",
		description:
			"Generate full-length AI songs with vocals and instrumentation from text prompts using MiniMax Music 2.6 on Cloudflare AI. Royalty-free music generation with studio-grade quality. Free this week!",
		route: "/ai-music-generator",
		extraSlugs: [
			"ai-song-generator",
			"ai-music-maker",
			"free-ai-music-generator",
			"text-to-song-ai",
			"ai-vocal-generator",
			"ai-instrumental-generator",
			"royalty-free-ai-music",
			"minimax-music-generator",
			"cloudflare-ai-music",
			"ai-music-generator-no-signup",
			"free-music-generator-online",
			"ai-music-creator",
			"ai-song-maker-free",
			"generate-ai-music",
			"ai-music-production",
			"text-to-music-ai",
			"ai-composer-online",
			"free-ai-vocal-generator",
			"ai-background-music-generator",
			"ai-music-for-videos",
		],
		popular: true,
		category: "generators",
		features: [
			"Generate full-length songs with natural vocals and layered instrumentation using MiniMax Music 2.6",
			"Instrumental mode for background music, video scores, and ambient soundscapes",
			"Lyrics Optimizer auto-writes lyrics from your style prompt — no writing needed",
			"14+ song structure tags including [Verse], [Chorus], [Bridge], [Drop], [Outro] for precise arrangement control",
			"Studio-grade audio output up to 44.1kHz sample rate and 256kbps bitrate",
			"Export in MP3 or WAV format for any professional production workflow",
			"Completely free this week via Cloudflare Workers AI — no cost, no signup",
			"All generated music is royalty-free and cleared for commercial use",
		],
		howTo: {
			name: "How to generate AI music",
			steps: [
				{
					name: "Write a Style Prompt",
					text: "Describe the sound you want — genre, mood, vocal style, tempo, and instruments. Example: 'Indie folk, melancholic, female vocal, fingerpicked acoustic guitar, 75 BPM.'",
				},
				{
					name: "Add Lyrics or Use Auto-Generate",
					text: "Paste your own lyrics with structure tags like [Verse] and [Chorus], enable Lyrics Optimizer to auto-write from your prompt, or turn on Instrumental Mode for vocals-free tracks.",
				},
				{
					name: "Generate and Download",
					text: "Click Generate. Your song is ready in seconds. Preview it in the browser, then download in MP3 or WAV at your chosen quality settings.",
				},
			],
		},
		faqs: [
			{
				question: "What is MiniMax Music 2.6?",
				answer: "MiniMax Music 2.6 is an advanced AI music generation model released in April 2026. It creates complete, studio-quality songs with vocals and instrumentation from text prompts and lyrics, or instrumental-only tracks.",
			},
			{
				question: "Is the AI Music Generator really free?",
				answer: "Yes — MiniMax Music 2.6 is free this week on Cloudflare Workers AI. You can generate unlimited songs at no cost. No credit card or signup is required.",
			},
			{
				question: "Can I use the generated music commercially?",
				answer: "Absolutely. All music generated is royalty-free and cleared for commercial use including YouTube videos, podcasts, game soundtracks, advertisements, and branded content.",
			},
			{
				question: "Do I need to write lyrics?",
				answer: "No. You have three options: write your own lyrics with structure tags, enable Lyrics Optimizer to auto-generate lyrics from your prompt, or enable Instrumental Mode to create music without vocals.",
			},
			{
				question: "What audio quality can I export?",
				answer: "You can export in MP3 or WAV format with sample rates up to 44.1kHz and bitrates up to 256kbps, making the output suitable for professional production workflows.",
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/ai-music-generator",
						applicationCategory: "MultimediaApplication",
						operatingSystem: "Any",
						offers: {
							"@type": "Offer",
							price: "0",
							priceCurrency: "USD",
						},
						// NOTE: aggregateRating removed - no real reviews exist for this tool
					}),
				}}
			/>
			<ToolLayout tool={{ ...tool, category: "generators" }}>
				<AIMusicGeneratorTool />
			</ToolLayout>
		</>
	);
}
