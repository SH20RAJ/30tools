import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Convert to ICO Online – Fast & No Signup | 30tools",
	description: "Free convert to ico tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "convert to ico, free convert to ico, online convert to ico, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/convert-to-ico",
	},
	openGraph: {
		title: "Free Convert to ICO Online – Fast & No Signup | 30tools",
		description: "Free convert to ico tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/convert-to-ico",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Convert to ICO Online – Fast & No Signup | 30tools",
		description: "Free convert to ico tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "convert-to-ico",
        "name": "Convert to ICO",
        "description": "Free convert to ico tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/convert-to-ico",
        "extraSlugs": [
                "convert-audio-format",
                "convert-avi-to-mp4",
                "convert-doc-to-pdf",
                "convert-epoch-time",
                "convert-flv-to-mp4",
                "convert-html-to-pdf",
                "convert-landscape-to-portrait-video",
                "convert-m4a-to-mp3",
                "convert-md-to-html",
                "convert-mkv-to-mp4",
                "convert-money-online",
                "convert-mov-to-mp4",
                "convert-mp4-to-gif",
                "convert-mp4-to-mp3",
                "convert-mp4-video-to-mp3",
                "convert-ogg-to-mp3",
                "convert-pdf-to-doc",
                "convert-picture-to-string",
                "convert-png-to-favicon",
                "convert-ppt-to-pdf",
                "convert-string-to-binary",
                "convert-text-case",
                "convert-text-to-audio",
                "convert-tiktok-to-mp3",
                "convert-time-across-zones",
                "convert-time-to-timestamp",
                "convert-to-epub-online",
                "convert-to-ico-tool",
                "convert-units-online",
                "convert-video-file-to-mp3",
                "convert-video-format",
                "convert-wav-to-mp3",
                "convert-webm-to-mp4",
                "convert-xls-to-pdf",
                "free-convert-to-ico-online"
        ],
        "popular": false,
        "category": "image"
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
						url: "https://30tools.com/convert-to-ico",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
