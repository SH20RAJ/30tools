import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Bandcamp Video Downloader Online – Fast & No Signup | 30tools",
	description: "The easiest way to download Bandcamp videos online. 100% free, fast, and no signup required.",
	keywords: "bandcamp video downloader, free bandcamp video downloader, online bandcamp video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/bandcamp-video-downloader",
	},
	openGraph: {
		title: "Free Bandcamp Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download Bandcamp videos online. 100% free, fast, and no signup required.",
		url: "https://30tools.com/bandcamp-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Bandcamp Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download Bandcamp videos online. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "bandcamp-video-downloader",
        "name": "Bandcamp Video Downloader",
        "description": "The easiest way to download Bandcamp videos online.",
        "route": "/bandcamp-video-downloader",
        "extraSlugs": [],
        "popular": false,
        "category": "downloaders"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/bandcamp-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Bandcamp Video Downloader" />
			</ToolLayout>
		</>
	);
}
