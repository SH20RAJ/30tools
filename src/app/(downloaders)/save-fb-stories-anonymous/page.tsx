import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Save Fb Stories Anonymous Online - No Signup | 30tools",
	description:
		"Free Save Fb Stories Anonymous online. Save Fb Stories Anonymous allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"save fb stories anonymous, free online tool, no signup, downloaders, save fb stories anonymous online, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-fb-stories-anonymous",
	},
	openGraph: {
		title: "Free Save Fb Stories Anonymous Online - No Signup | 30tools",
		description:
			"Free Save Fb Stories Anonymous online. Save Fb Stories Anonymous allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/save-fb-stories-anonymous",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20Save%20Fb%20Stories%20Anonymous%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Fb Stories Anonymous Online - No Signup | 30tools",
		description:
			"Free Save Fb Stories Anonymous online. Save Fb Stories Anonymous allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20Save%20Fb%20Stories%20Anonymous%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "save-fb-stories-anonymous",
		name: "Save Fb Stories Anonymous",
		description:
			"Free Save Fb Stories Anonymous online. Save Fb Stories Anonymous allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/save-fb-stories-anonymous",
		extraSlugs: ["save-fb-stories-anonymous"],
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "Save Fb Stories Anonymous",
			url: "/save-fb-stories-anonymous",
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
						name: "Save Fb Stories Anonymous",
						description:
							"Free Save Fb Stories Anonymous online. Save Fb Stories Anonymous allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/save-fb-stories-anonymous",
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
