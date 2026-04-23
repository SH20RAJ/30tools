import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free BluTV Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download publicly accessible BluTV content—trailers, previews, and clips from Turkish original series and movies. Free, no signup, MP4 downloads.",
	keywords: "blutv video downloader, free blutv video downloader, online blutv video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/blutv-video-downloader",
	},
	openGraph: {
		title: "Free BluTV Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download publicly accessible BluTV content—trailers, previews, and clips from Turkish original series and movies. Free, no signup, MP4 downloads.",
		url: "https://30tools.com/blutv-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free BluTV Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download publicly accessible BluTV content—trailers, previews, and clips from Turkish original series and movies. Free, no signup, MP4 downloads.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "blutv-video-downloader",
        "name": "BluTV Video Downloader",
        "description": "Download publicly accessible BluTV content\u2014trailers, previews, and clips from Turkish original series and movies. Free, no signup, MP4 downloads.",
        "route": "/blutv-video-downloader",
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
						url: "https://30tools.com/blutv-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="BluTV Video Downloader" />
			</ToolLayout>
		</>
	);
}
