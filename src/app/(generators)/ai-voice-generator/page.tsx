import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free AI Voice Generator Online – Fast & No Signup | 30tools",
	description: "Convert text to natural-sounding AI voices instantly. Our free text-to-speech tool offers multiple languages and accents for professional voiceovers, accessibility, and creative projects. No signup required.",
	keywords: "ai voice generator, free ai voice generator, online ai voice generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ai-voice-generator",
	},
	openGraph: {
		title: "Free AI Voice Generator Online – Fast & No Signup | 30tools",
		description: "Convert text to natural-sounding AI voices instantly. Our free text-to-speech tool offers multiple languages and accents for professional voiceovers, accessibility, and creative projects. No signup required.",
		url: "https://30tools.com/ai-voice-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI Voice Generator Online – Fast & No Signup | 30tools",
		description: "Convert text to natural-sounding AI voices instantly. Our free text-to-speech tool offers multiple languages and accents for professional voiceovers, accessibility, and creative projects. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ai-voice-generator",
        "name": "AI Voice Generator",
        "description": "Convert text to natural-sounding AI voices instantly. Our free text-to-speech tool offers multiple languages and accents for professional voiceovers, accessibility, and creative projects. No signup required.",
        "route": "/ai-voice-generator",
        "extraSlugs": [
                "ai-voice-changer",
                "ai-voice-creator-online",
                "ai-voice-reader",
                "celebrity-voice-generator",
                "free-ai-voice-over",
                "realistic-voice-generator",
                "record-voice-online",
                "text-to-speech-robotic-voice-free",
                "voice-recorder",
                "natural-sounding-ai-voices",
                "ai-speech-synthesis-online"
        ],
        "popular": true,
        "category": "generators"
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
						url: "https://30tools.com/ai-voice-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "generators" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
