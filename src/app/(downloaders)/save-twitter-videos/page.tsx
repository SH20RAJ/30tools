import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Save Twitter Videos Online - No Signup | 30tools",
	description:
		"Free Save Twitter Videos online. Save Twitter Videos allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"save twitter videos, free online tool, no signup, downloaders, save twitter videos online, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-twitter-videos",
	},
	openGraph: {
		title: "Free Save Twitter Videos Online - No Signup | 30tools",
		description:
			"Free Save Twitter Videos online. Save Twitter Videos allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/save-twitter-videos",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Save%20Twitter%20Videos%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Twitter Videos Online - No Signup | 30tools",
		description:
			"Free Save Twitter Videos online. Save Twitter Videos allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Save%20Twitter%20Videos%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "save-twitter-videos",
		name: "Save Twitter Videos",
		description:
			"Free Save Twitter Videos online. Save Twitter Videos allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/save-twitter-videos",
		extraSlugs: ["save-snapchat-videos", "save-twitter-videos"],
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "Save Twitter Videos",
			url: "/save-twitter-videos",
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
						name: "Save Twitter Videos",
						description:
							"Free Save Twitter Videos online. Save Twitter Videos allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/save-twitter-videos",
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
