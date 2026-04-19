import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Snapchat Video Downloader Online - No Signup | 30tools",
	description:
		"Download Snapchat videos and stories in HD quality for free without app installation 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"snapchat video downloader, free online tool, no signup, downloaders, snapchat video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/snapchat-video-downloader",
	},
	openGraph: {
		title: "Free Snapchat Video Downloader Online - No Signup | 30tools",
		description:
			"Download Snapchat videos and stories in HD quality for free without app installation 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/snapchat-video-downloader",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Snapchat%20Video%20Downloader%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Snapchat Video Downloader Online - No Signup | 30tools",
		description:
			"Download Snapchat videos and stories in HD quality for free without app installation 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Snapchat%20Video%20Downloader%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "snapchat-video-downloader",
		name: "Snapchat Video Downloader",
		description:
			"Download Snapchat videos and stories in HD quality for free without app installation",
		route: "/snapchat-video-downloader",
		extraSlugs: [
			"save-snapchat-stories-online",
			"snap-video-downloader-free",
			"download-snapchat-stories",
		],
		popular: false,
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "Snapchat Video Downloader",
			url: "/snapchat-video-downloader",
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
						name: "Snapchat Video Downloader",
						description:
							"Download Snapchat videos and stories in HD quality for free without app installation",
						url: "https://30tools.com/snapchat-video-downloader",
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
