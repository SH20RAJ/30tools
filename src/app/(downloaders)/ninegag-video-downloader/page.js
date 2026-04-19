import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free NineGag Video Downloader Online - No Signup | 30tools",
	description:
		"Save your favorite NineGag videos to your device easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"ninegag video downloader, free online tool, no signup, downloaders, ninegag video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/ninegag-video-downloader",
	},
	openGraph: {
		title: "Free NineGag Video Downloader Online - No Signup | 30tools",
		description:
			"Save your favorite NineGag videos to your device easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/ninegag-video-downloader",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20NineGag%20Video%20Downloader%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free NineGag Video Downloader Online - No Signup | 30tools",
		description:
			"Save your favorite NineGag videos to your device easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20NineGag%20Video%20Downloader%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "ninegag-video-downloader",
		name: "NineGag Video Downloader",
		description: "Save your favorite NineGag videos to your device easily.",
		route: "/ninegag-video-downloader",
		extraSlugs: [],
		popular: false,
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "NineGag Video Downloader",
			url: "/ninegag-video-downloader",
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
						name: "NineGag Video Downloader",
						description:
							"Save your favorite NineGag videos to your device easily.",
						url: "https://30tools.com/ninegag-video-downloader",
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
