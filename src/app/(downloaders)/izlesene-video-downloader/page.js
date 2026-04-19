import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Izlesene Video Downloader Online - No Signup | 30tools",
	description:
		"The ultimate tool for downloading videos from Izlesene. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"izlesene video downloader, free online tool, no signup, downloaders, izlesene video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/izlesene-video-downloader",
	},
	openGraph: {
		title: "Free Izlesene Video Downloader Online - No Signup | 30tools",
		description:
			"The ultimate tool for downloading videos from Izlesene. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/izlesene-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Izlesene Video Downloader Online - No Signup | 30tools",
		description:
			"The ultimate tool for downloading videos from Izlesene. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "izlesene-video-downloader",
		name: "Izlesene Video Downloader",
		description: "The ultimate tool for downloading videos from Izlesene.",
		route: "/izlesene-video-downloader",
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
			name: "Izlesene Video Downloader",
			url: "/izlesene-video-downloader",
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
						name: "Izlesene Video Downloader",
						description:
							"The ultimate tool for downloading videos from Izlesene.",
						url: "https://30tools.com/izlesene-video-downloader",
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
