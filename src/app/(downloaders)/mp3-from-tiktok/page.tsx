import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Mp3 From Tiktok Online - No Signup | 30tools",
	description:
		"Free Mp3 From Tiktok online. Mp3 From Tiktok allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"mp3 from tiktok, free online tool, no signup, downloaders, mp3 from tiktok online, 30tools",
	alternates: {
		canonical: "https://30tools.com/mp3-from-tiktok",
	},
	openGraph: {
		title: "Free Mp3 From Tiktok Online - No Signup | 30tools",
		description:
			"Free Mp3 From Tiktok online. Mp3 From Tiktok allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/mp3-from-tiktok",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Mp3%20From%20Tiktok%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mp3 From Tiktok Online - No Signup | 30tools",
		description:
			"Free Mp3 From Tiktok online. Mp3 From Tiktok allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Mp3%20From%20Tiktok%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "mp3-from-tiktok",
		name: "Mp3 From Tiktok",
		description:
			"Free Mp3 From Tiktok online. Mp3 From Tiktok allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/mp3-from-tiktok",
		extraSlugs: ["mp3-from-tiktok"],
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "Mp3 From Tiktok",
			url: "/mp3-from-tiktok",
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
						name: "Mp3 From Tiktok",
						description:
							"Free Mp3 From Tiktok online. Mp3 From Tiktok allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/mp3-from-tiktok",
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
