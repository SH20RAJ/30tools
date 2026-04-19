import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Pinterest Gif Downloader Online - No Signup | 30tools",
	description:
		"Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"pinterest gif downloader, free online tool, no signup, downloaders, pinterest gif downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pinterest-gif-downloader",
	},
	openGraph: {
		title: "Free Pinterest Gif Downloader Online - No Signup | 30tools",
		description:
			"Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/pinterest-gif-downloader",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Pinterest%20Gif%20Downloader%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Gif Downloader Online - No Signup | 30tools",
		description:
			"Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Pinterest%20Gif%20Downloader%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "pinterest-gif-downloader",
		name: "Pinterest Gif Downloader",
		description:
			"Free online tool to download high-quality GIFs from Pinterest instantly. No registration required.",
		route: "/pinterest-gif-downloader",
		extraSlugs: [
			"pinterest-clip-saver",
			"pinterest-media-downloader",
			"twitter-gif-downloader",
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
			name: "Pinterest Gif Downloader",
			url: "/pinterest-gif-downloader",
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
						name: "Pinterest Gif Downloader",
						description:
							"Free online tool to download high-quality GIFs from Pinterest instantly. No registration required.",
						url: "https://30tools.com/pinterest-gif-downloader",
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
