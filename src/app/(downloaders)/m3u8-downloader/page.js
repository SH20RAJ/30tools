import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free M3U8 Downloader Online - No Signup | 30tools",
	description:
		"Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"m3u8 downloader, free online tool, no signup, downloaders, m3u8 downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/m3u8-downloader",
	},
	openGraph: {
		title: "Free M3U8 Downloader Online - No Signup | 30tools",
		description:
			"Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/m3u8-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free M3U8 Downloader Online - No Signup | 30tools",
		description:
			"Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "m3u8-downloader",
		name: "M3U8 Downloader",
		description:
			"Download m3u8 playlists and convert them to high-quality MP4 videos.",
		route: "/m3u8-downloader",
		extraSlugs: ["download-m3u8-video-online", "m3u8-to-mp4-converter"],
		popular: false,
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "M3U8 Downloader",
			url: "/m3u8-downloader",
		},
	];
	const relatedTools = [
		{
			id: "akillitv-video-downloader",
			name: "AkilliTv Video Downloader",
			description:
				"Download AkilliTv videos easily with our free online downloader.",
			route: "/akillitv-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
		},
		{
			id: "bandcamp-video-downloader",
			name: "Bandcamp Video Downloader",
			description: "The easiest way to download Bandcamp videos online.",
			route: "/bandcamp-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
		},
		{
			id: "bilibili-video-downloader",
			name: "Bilibili Video Downloader",
			description: "Download Bilibili videos online with ease.",
			route: "/bilibili-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "M3U8 Downloader",
						description:
							"Download m3u8 playlists and convert them to high-quality MP4 videos.",
						url: "https://30tools.com/m3u8-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<DownloaderEngine placeholder="Enter URL to download..." />
			</ToolLayout>
		</>
	);
}
