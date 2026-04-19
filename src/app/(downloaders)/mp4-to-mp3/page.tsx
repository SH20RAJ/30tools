import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Mp4 To Mp3 Online - No Signup | 30tools",
	description:
		"Free Mp4 To Mp3 online. Mp4 To Mp3 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"mp4 to mp3, free online tool, no signup, downloaders, mp4 to mp3 online, 30tools",
	alternates: {
		canonical: "https://30tools.com/mp4-to-mp3",
	},
	openGraph: {
		title: "Free Mp4 To Mp3 Online - No Signup | 30tools",
		description:
			"Free Mp4 To Mp3 online. Mp4 To Mp3 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/mp4-to-mp3",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Mp4%20To%20Mp3%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mp4 To Mp3 Online - No Signup | 30tools",
		description:
			"Free Mp4 To Mp3 online. Mp4 To Mp3 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Mp4%20To%20Mp3%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "mp4-to-mp3",
		name: "Mp4 To Mp3",
		description:
			"Free Mp4 To Mp3 online. Mp4 To Mp3 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/mp4-to-mp3",
		extraSlugs: [
			"avi-file-to-mp4-online",
			"change-avi-to-mp4",
			"change-flv-to-mp4",
			"change-m4a-to-mp3",
			"change-mkv-to-mp4",
			"change-mov-to-mp4",
			"change-ogg-to-mp3",
			"change-wav-to-mp3",
			"change-webm-to-mp4",
			"compress-ogg-to-mp3",
			"compress-wav-to-mp3",
			"flv-file-to-mp4-online",
			"instagram-reels-to-mp4",
			"m4a-file-to-mp3-online",
			"m4a-to-mp3-online",
			"mkv-file-to-mp4-online",
			"mov-file-to-mp4-online",
			"mov-to-mp4",
			"mp4-to-mp3",
			"ogg-file-to-mp3-online",
			"quicktime-to-mp4",
			"tiktok-to-mp3-online",
			"wav-file-to-mp3-online",
			"webm-file-to-mp4-online",
			"youtube-to-mp3-high-quality",
		],
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "Mp4 To Mp3",
			url: "/mp4-to-mp3",
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
						name: "Mp4 To Mp3",
						description:
							"Free Mp4 To Mp3 online. Mp4 To Mp3 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/mp4-to-mp3",
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
