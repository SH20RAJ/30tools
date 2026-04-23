import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Instagram Downloader Online – Fast & No Signup | 30tools",
	description: "Download Instagram videos, reels, stories, and photos in high quality 100% free, fast, and no signup required.",
	keywords: "instagram downloader, free instagram downloader, online instagram downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-downloader",
	},
	openGraph: {
		title: "Free Instagram Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram videos, reels, stories, and photos in high quality 100% free, fast, and no signup required.",
		url: "https://30tools.com/instagram-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram videos, reels, stories, and photos in high quality 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "instagram-downloader",
        "name": "Instagram Downloader",
        "description": "Download Instagram videos, reels, stories, and photos in high quality",
        "route": "/instagram-downloader",
        "extraSlugs": [
                "aesthetic-fonts-for-instagram",
                "aesthetic-instagram-bio",
                "download-from-instagram",
                "download-instagram-reels",
                "grow-on-instagram",
                "ig-video-photo-loader",
                "instagram-downloader-mp4",
                "instagram-dp-downloader",
                "instagram-media-saver",
                "instagram-photo-downloader",
                "instagram-picture-saver",
                "instagram-profile-pic-downloader",
                "instagram-tool-downloader",
                "save-instagram-clips",
                "save-instagram-content-online",
                "save-instagram-photos",
                "watch-instagram-stories"
        ],
        "popular": true,
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
						url: "https://30tools.com/instagram-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Instagram Downloader" />
			</ToolLayout>
		</>
	);
}
