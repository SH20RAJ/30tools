import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Text to Speech Online – Fast & No Signup | 30tools",
	description: "Convert text to natural sounding speech audio 100% free, fast, and no signup required.",
	keywords: "text to speech, free text to speech, online text to speech, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-speech",
	},
	openGraph: {
		title: "Free Text to Speech Online – Fast & No Signup | 30tools",
		description: "Convert text to natural sounding speech audio 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-speech",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Speech Online – Fast & No Signup | 30tools",
		description: "Convert text to natural sounding speech audio 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-speech",
        "name": "Text to Speech",
        "description": "Convert text to natural sounding speech audio",
        "route": "/text-to-speech",
        "extraSlugs": [
                "free-text-to-speech-with-no-word-limit",
                "natural-sounding-tts-online",
                "text-to-speech-ai"
        ],
        "popular": true,
        "category": "audio"
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
						url: "https://30tools.com/text-to-speech",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "audio" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
