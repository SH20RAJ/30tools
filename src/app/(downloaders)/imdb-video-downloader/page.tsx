import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Imdb Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save IMDb trailers, interviews, and clips to your device instantly. Our free online tool helps you keep high-quality movie metadata and videos for offline reference. 100% free, fast, and no signup required.",
	keywords: "imdb video downloader, free imdb video downloader, online imdb video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/imdb-video-downloader",
	},
	openGraph: {
		title: "Free Imdb Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save IMDb trailers, interviews, and clips to your device instantly. Our free online tool helps you keep high-quality movie metadata and videos for offline reference. 100% free, fast, and no signup required.",
		url: "https://30tools.com/imdb-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Imdb Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save IMDb trailers, interviews, and clips to your device instantly. Our free online tool helps you keep high-quality movie metadata and videos for offline reference. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "imdb-video-downloader",
        "name": "Imdb Video Downloader",
        "description": "Save IMDb trailers, interviews, and clips to your device instantly. Our free online tool helps you keep high-quality movie metadata and videos for offline reference.",
        "route": "/imdb-video-downloader",
        "extraSlugs": [
                "free-imdb-video-downloader-online",
                "save-imdb-trailers-hd"
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
						url: "https://30tools.com/imdb-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Imdb Video Downloader" />
			</ToolLayout>
		</>
	);
}
