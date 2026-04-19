import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Reddit Media Saver Online - No Signup | 30tools",
	description:
		"Free Reddit Media Saver online. Reddit Media Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"reddit media saver, free online tool, no signup, downloaders, reddit media saver online, 30tools",
	alternates: {
		canonical: "https://30tools.com/reddit-media-saver",
	},
	openGraph: {
		title: "Free Reddit Media Saver Online - No Signup | 30tools",
		description:
			"Free Reddit Media Saver online. Reddit Media Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/reddit-media-saver",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Reddit%20Media%20Saver%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reddit Media Saver Online - No Signup | 30tools",
		description:
			"Free Reddit Media Saver online. Reddit Media Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Reddit%20Media%20Saver%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "reddit-media-saver",
		name: "Reddit Media Saver",
		description:
			"Free Reddit Media Saver online. Reddit Media Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/reddit-media-saver",
		extraSlugs: [
			"instagram-media-saver",
			"reddit-media-saver",
			"twitter-media-saver",
		],
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "Reddit Media Saver",
			url: "/reddit-media-saver",
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
						name: "Reddit Media Saver",
						description:
							"Free Reddit Media Saver online. Reddit Media Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/reddit-media-saver",
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
