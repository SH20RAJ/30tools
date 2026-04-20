export const metadata = {
	title: "Free AI Generator Tools Online - No Signup | 30tools",
	description:
		"Free AI generator tools: create images from text prompts, generate natural voiceovers with text-to-speech, produce QR codes with logos, and build secure passwords. Customizable output, no watermarks, instant download. No signup required.",
	keywords:
		"ai generator tools, ai image generator, ai voice generator, free ai tools, content creation ai, text to speech free, text to image free, qr code generator free, password generator secure, lorem ipsum generator, free online generators, ai content generator",
	openGraph: {
		title: "Free AI Generator Tools Online - No Signup | 30tools",
		description:
			"Generate AI images, voiceovers, QR codes, and passwords for free. Customizable, no watermarks, instant download.",
		url: "https://30tools.com/generator-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free AI Generator Tools",
			},
		],
		type: "website",
	},
};

const jsonLdSchemas = {
	collectionPage: {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "AI Generator Tools Collection",
		description:
			"Suite of powerful free AI generator tools for images and voice.",
		url: "https://30tools.com/generator-tools",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					url: "https://30tools.com/ai-image-generator",
					name: "AI Image Generator",
				},
				{
					"@type": "ListItem",
					position: 2,
					url: "https://30tools.com/ai-voice-generator",
					name: "AI Voice Generator",
				},
			],
		},
	},
};

export default function GeneratorsLayout({ children }) {
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
