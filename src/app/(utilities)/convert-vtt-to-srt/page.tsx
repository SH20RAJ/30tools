import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Convert VTT to SRT Online – Fast & No Signup | 30tools",
	description: "Convert subtitle files from VTT to SRT format instantly. Our free online tool makes it easy to use web captions with traditional desktop video players. 100% free, fast, and no signup required.",
	keywords: "convert vtt to srt, free convert vtt to srt, online convert vtt to srt, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/convert-vtt-to-srt",
	},
	openGraph: {
		title: "Free Convert VTT to SRT Online – Fast & No Signup | 30tools",
		description: "Convert subtitle files from VTT to SRT format instantly. Our free online tool makes it easy to use web captions with traditional desktop video players. 100% free, fast, and no signup required.",
		url: "https://30tools.com/convert-vtt-to-srt",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Convert VTT to SRT Online – Fast & No Signup | 30tools",
		description: "Convert subtitle files from VTT to SRT format instantly. Our free online tool makes it easy to use web captions with traditional desktop video players. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "convert-vtt-to-srt",
        "name": "Convert VTT to SRT",
        "description": "Convert subtitle files from VTT to SRT format instantly. Our free online tool makes it easy to use web captions with traditional desktop video players.",
        "route": "/convert-vtt-to-srt",
        "extraSlugs": [
                "free-convert-vtt-to-srt-online",
                "convert-vtt-to-srt-tool",
                "srt-subtitle-converter"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/convert-vtt-to-srt",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
