import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Gaana Video Downloader Online - No Signup | 30tools",
	description:
		"Download Gaana videos online with our free tool. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"gaana video downloader, free online tool, no signup, downloaders, gaana video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/gaana-video-downloader",
	},
	openGraph: {
		title: "Free Gaana Video Downloader Online - No Signup | 30tools",
		description:
			"Download Gaana videos online with our free tool. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/gaana-video-downloader",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Gaana%20Video%20Downloader%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Gaana Video Downloader Online - No Signup | 30tools",
		description:
			"Download Gaana videos online with our free tool. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Gaana%20Video%20Downloader%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "gaana-video-downloader",
		name: "Gaana Video Downloader",
		description: "Download Gaana videos online with our free tool.",
		route: "/gaana-video-downloader",
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
			name: "Gaana Video Downloader",
			url: "/gaana-video-downloader",
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
						name: "Gaana Video Downloader",
						description: "Download Gaana videos online with our free tool.",
						url: "https://30tools.com/gaana-video-downloader",
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
