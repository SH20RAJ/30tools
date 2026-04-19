import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free YouTube Video Downloader Online - No Signup | 30tools",
	description:
		"Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"youtube video downloader, free online tool, no signup, downloaders, youtube video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-downloader",
	},
	openGraph: {
		title: "Free YouTube Video Downloader Online - No Signup | 30tools",
		description:
			"Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/youtube-video-downloader",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20YouTube%20Video%20Downloader%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Downloader Online - No Signup | 30tools",
		description:
			"Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20YouTube%20Video%20Downloader%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "youtube-video-downloader",
		name: "YouTube Video Downloader",
		description:
			"Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.",
		route: "/youtube-video-downloader",
		extraSlugs: ["youtube-video-downloader-2026"],
		popular: false,
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "YouTube Video Downloader",
			url: "/youtube-video-downloader",
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
						name: "YouTube Video Downloader",
						description:
							"Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.",
						url: "https://30tools.com/youtube-video-downloader",
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
