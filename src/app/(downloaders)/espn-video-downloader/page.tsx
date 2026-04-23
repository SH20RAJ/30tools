import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Espn Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Espn sports videos to your device. 100% free, fast, and no signup required.",
	keywords: "espn video downloader, free espn video downloader, online espn video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/espn-video-downloader",
	},
	openGraph: {
		title: "Free Espn Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Espn sports videos to your device. 100% free, fast, and no signup required.",
		url: "https://30tools.com/espn-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Espn Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Espn sports videos to your device. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "espn-video-downloader",
        "name": "Espn Video Downloader",
        "description": "Save your favorite Espn sports videos to your device.",
        "route": "/espn-video-downloader",
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
						url: "https://30tools.com/espn-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Espn Video Downloader" />
			</ToolLayout>
		</>
	);
}
