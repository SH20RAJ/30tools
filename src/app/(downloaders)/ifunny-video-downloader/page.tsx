import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Ifunny Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite iFunny videos and memes to your device easily. Our free online downloader preserves quality and works instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "ifunny video downloader, free ifunny video downloader, online ifunny video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ifunny-video-downloader",
	},
	openGraph: {
		title: "Free Ifunny Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite iFunny videos and memes to your device easily. Our free online downloader preserves quality and works instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ifunny-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ifunny Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite iFunny videos and memes to your device easily. Our free online downloader preserves quality and works instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ifunny-video-downloader",
        "name": "Ifunny Video Downloader",
        "description": "Save your favorite iFunny videos and memes to your device easily. Our free online downloader preserves quality and works instantly in your browser.",
        "route": "/ifunny-video-downloader",
        "extraSlugs": [
                "free-ifunny-downloader-online",
                "save-ifunny-memes-video"
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
						url: "https://30tools.com/ifunny-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Ifunny Video Downloader" />
			</ToolLayout>
		</>
	);
}
