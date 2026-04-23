import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Rumble Video Downloader Online – Fast & No Signup | 30tools",
	description: "The ultimate tool for downloading videos from Rumble in HD quality. Our free online downloader is fast, secure, and works on all devices without any signup. 100% free, fast, and no signup required.",
	keywords: "rumble video downloader, free rumble video downloader, online rumble video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/rumble-video-downloader",
	},
	openGraph: {
		title: "Free Rumble Video Downloader Online – Fast & No Signup | 30tools",
		description: "The ultimate tool for downloading videos from Rumble in HD quality. Our free online downloader is fast, secure, and works on all devices without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/rumble-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Rumble Video Downloader Online – Fast & No Signup | 30tools",
		description: "The ultimate tool for downloading videos from Rumble in HD quality. Our free online downloader is fast, secure, and works on all devices without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "rumble-video-downloader",
        "name": "Rumble Video Downloader",
        "description": "The ultimate tool for downloading videos from Rumble in HD quality. Our free online downloader is fast, secure, and works on all devices without any signup.",
        "route": "/rumble-video-downloader",
        "extraSlugs": [
                "free-rumble-downloader-online",
                "save-rumble-videos-hd"
        ],
        "popular": false,
        "category": "downloaders"
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
						url: "https://30tools.com/rumble-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Rumble Video Downloader" />
			</ToolLayout>
		</>
	);
}
