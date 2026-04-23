import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Convert SRT to VTT Online – Fast & No Signup | 30tools",
	description: "Convert subtitle files from SRT to VTT format instantly. Our free online tool ensures compatibility with web-based video players and modern streaming platforms. 100% free, fast, and no signup required.",
	keywords: "convert srt to vtt, free convert srt to vtt, online convert srt to vtt, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/convert-srt-to-vtt",
	},
	openGraph: {
		title: "Free Convert SRT to VTT Online – Fast & No Signup | 30tools",
		description: "Convert subtitle files from SRT to VTT format instantly. Our free online tool ensures compatibility with web-based video players and modern streaming platforms. 100% free, fast, and no signup required.",
		url: "https://30tools.com/convert-srt-to-vtt",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Convert SRT to VTT Online – Fast & No Signup | 30tools",
		description: "Convert subtitle files from SRT to VTT format instantly. Our free online tool ensures compatibility with web-based video players and modern streaming platforms. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "convert-srt-to-vtt",
        "name": "Convert SRT to VTT",
        "description": "Convert subtitle files from SRT to VTT format instantly. Our free online tool ensures compatibility with web-based video players and modern streaming platforms.",
        "route": "/convert-srt-to-vtt",
        "extraSlugs": [
                "free-convert-srt-to-vtt-online",
                "convert-srt-to-vtt-tool",
                "vtt-subtitle-converter"
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
						url: "https://30tools.com/convert-srt-to-vtt",
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
