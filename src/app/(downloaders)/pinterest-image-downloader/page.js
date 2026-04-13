import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Pinterest Image Downloader Online - No Signup | 30tools",
	description:
		"Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"pinterest image downloader, free online tool, no signup, downloaders, pinterest image downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pinterest-image-downloader",
	},
	openGraph: {
		title: "Free Pinterest Image Downloader Online - No Signup | 30tools",
		description:
			"Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/pinterest-image-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Image Downloader Online - No Signup | 30tools",
		description:
			"Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "pinterest-image-downloader",
		name: "Pinterest Image Downloader",
		description:
			"Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
		route: "/pinterest-image-downloader",
		extraSlugs: [
			"free pinterest image downloader",
			"download pinterest images hd",
			"pinterest photo saver",
			"pinterest image downloader no watermark",
			"save pinterest pins",
			"pinterest mood board downloader",
			"pinterest image downloader online",
			"pinterest picture downloader free",
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
			name: "Pinterest Image Downloader",
			url: "/pinterest-image-downloader",
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
						name: "Pinterest Image Downloader",
						description:
							"Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
						url: "https://30tools.com/pinterest-image-downloader",
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
