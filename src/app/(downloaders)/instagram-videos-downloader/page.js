import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Instagram Videos Downloader Online - No Signup | 30tools",
	description:
		"Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now! 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"instagram videos downloader, free online tool, no signup, downloaders, instagram videos downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-videos-downloader",
	},
	openGraph: {
		title: "Free Instagram Videos Downloader Online - No Signup | 30tools",
		description:
			"Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now! 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/instagram-videos-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Videos Downloader Online - No Signup | 30tools",
		description:
			"Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now! 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "instagram-videos-downloader",
		name: "Instagram Videos Downloader",
		description:
			"Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now!",
		route: "/instagram-videos-downloader",
		extraSlugs: [
			"download-instagram-videos-online",
			"download-pinterest-videos",
			"download-videos-from-any-site",
			"save-snapchat-videos",
			"save-twitter-videos",
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
			name: "Instagram Videos Downloader",
			url: "/instagram-videos-downloader",
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
						name: "Instagram Videos Downloader",
						description:
							"Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now!",
						url: "https://30tools.com/instagram-videos-downloader",
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
