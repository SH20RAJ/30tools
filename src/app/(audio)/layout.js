export const metadata = {
	title: "Free Audio Tools Online - No Signup | 30tools",
	description:
		"Free online audio tools including AI text-to-speech, audio format conversion, and audio compression. Generate natural voiceovers, convert between MP3/WAV/OGG, and optimize audio files instantly. No signup, 100% browser-based processing.",
	keywords:
		"audio tools, text to speech, tts, ai voice generator, audio compressor, audio converter, mp3 converter, wav to mp3, free audio tools online, text to speech free, audio format converter, online audio processing",
	openGraph: {
		title: "Free Audio Tools Online - No Signup | 30tools",
		description:
			"Free AI text-to-speech, audio conversion, and compression tools. Generate voiceovers and process audio files instantly in your browser.",
		url: "https://30tools.com/audio-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free Audio Tools",
			},
		],
		type: "website",
	},
};

const jsonLdSchemas = {
	collectionPage: {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Online Audio Tools",
		description: "Collection of free audio utilities including Text to Speech.",
		url: "https://30tools.com/audio-tools",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					url: "https://30tools.com/text-to-speech",
					name: "Text to Speech",
				},
			],
		},
	},
};

export default function AudioToolsLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.collectionPage),
				}}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}
