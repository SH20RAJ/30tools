import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Chingari Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Chingari videos to your device. 100% free, fast, and no signup required.",
	keywords: "chingari video downloader, free chingari video downloader, online chingari video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/chingari-video-downloader",
	},
	openGraph: {
		title: "Free Chingari Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Chingari videos to your device. 100% free, fast, and no signup required.",
		url: "https://30tools.com/chingari-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Chingari Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Chingari videos to your device. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "chingari-video-downloader",
        "name": "Chingari Video Downloader",
        "description": "Save your favorite Chingari videos to your device.",
        "route": "/chingari-video-downloader",
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
						url: "https://30tools.com/chingari-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Chingari Video Downloader" />
			</ToolLayout>
		</>
	);
}
