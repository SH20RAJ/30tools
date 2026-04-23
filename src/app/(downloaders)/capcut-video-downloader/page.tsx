import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Capcut Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Capcut videos and templates easily. 100% free, fast, and no signup required.",
	keywords: "capcut video downloader, free capcut video downloader, online capcut video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/capcut-video-downloader",
	},
	openGraph: {
		title: "Free Capcut Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Capcut videos and templates easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/capcut-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Capcut Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Capcut videos and templates easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "capcut-video-downloader",
        "name": "Capcut Video Downloader",
        "description": "Download Capcut videos and templates easily.",
        "route": "/capcut-video-downloader",
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
						url: "https://30tools.com/capcut-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Capcut Video Downloader" />
			</ToolLayout>
		</>
	);
}
