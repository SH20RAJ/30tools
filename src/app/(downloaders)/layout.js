export const metadata = {
	title: "Free Video Downloaders Online - No Signup | 30tools",
	description:
		"Free online video downloaders for 30+ platforms including TikTok (no watermark), Instagram Reels, Facebook, Twitter/X, Reddit, Pinterest, and YouTube. Save videos in HD and 4K MP4 format instantly. No registration, no watermarks, 100% free.",
	keywords:
		"online video downloader, all video downloader, tiktok no watermark, instagram reels saver, facebook video download, twitter video saver, reddit downloader, pinterest video saver, youtube downloader online, 4k video downloader, hd video save, mp4 downloader free, social media downloader",
	openGraph: {
		title: "Free Video Downloaders Online - No Signup | 30tools",
		description:
			"Download videos from TikTok, Instagram, Facebook, Twitter, Reddit, and 30+ platforms in HD. No watermark, no signup, 100% free.",
		url: "https://30tools.com/all-downloaders",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free Downloader Tools Collection",
			},
		],
		type: "website",
	},
};

const jsonLdSchemas = {
	collectionPage: {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Social Media Video Downloaders",
		description:
			"Collection of free tools to download videos from TikTok, Instagram, Facebook, Twitter, and other platforms.",
		url: "https://30tools.com/all-downloaders",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					url: "https://30tools.com/tiktok-downloader",
					name: "TikTok Downloader",
				},
				{
					"@type": "ListItem",
					position: 2,
					url: "https://30tools.com/instagram-downloader",
					name: "Instagram Downloader",
				},
				{
					"@type": "ListItem",
					position: 3,
					url: "https://30tools.com/facebook-video-downloader",
					name: "Facebook Downloader",
				},
				{
					"@type": "ListItem",
					position: 4,
					url: "https://30tools.com/twitter-video-downloader",
					name: "Twitter Downloader",
				},
			],
		},
	},
};

export default function DownloadersLayout({ children }) {
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
