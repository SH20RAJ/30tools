import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free YouTube Thumbnail Downloader Online - No Signup | 30tools",
	description:
		"Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"youtube thumbnail downloader, free online tool, no signup, downloaders, youtube thumbnail downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-thumbnail-downloader",
	},
	openGraph: {
		title: "Free YouTube Thumbnail Downloader Online - No Signup | 30tools",
		description:
			"Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/youtube-thumbnail-downloader",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20YouTube%20Thumbnail%20Downloader%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Thumbnail Downloader Online - No Signup | 30tools",
		description:
			"Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20YouTube%20Thumbnail%20Downloader%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "youtube-thumbnail-downloader",
		name: "YouTube Thumbnail Downloader",
		description:
			"Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
		route: "/youtube-thumbnail-downloader",
		extraSlugs: [
			"create-youtube-thumbnail",
			"download youtube thumbnail hd",
			"free youtube thumbnail downloader",
			"free-thumbnail-design",
			"maxresdefault downloader",
			"youtube thumbnail downloader",
			"youtube thumbnail extractor",
			"youtube thumbnail grabber",
			"youtube thumbnail saver",
			"youtube video thumbnail download",
			"yt-thumbnail-maker",
		],
		popular: true,
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "YouTube Thumbnail Downloader",
			url: "/youtube-thumbnail-downloader",
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
						name: "YouTube Thumbnail Downloader",
						description:
							"Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
						url: "https://30tools.com/youtube-thumbnail-downloader",
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
