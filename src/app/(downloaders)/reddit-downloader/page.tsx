import ToolLayout from "@/components/tools/shared/ToolLayout";
import RedditDownloader from "@/components/tools/downloaders/RedditDownloader";

export const metadata = {
	title: "Free Reddit Video Downloader Online - No Signup | 30tools",
	description: "Download, convert, and edit video files instantly with our free Reddit Video Downloader online. Fast, secure, and private processing with no signup. 100% free.",
	keywords: "reddit video downloader, free online tool, no signup, video, reddit video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/reddit-downloader",
	},
	openGraph: {
		title: "Free Reddit Video Downloader Online - No Signup | 30tools",
		description: "Download, convert, and edit video files instantly with our free Reddit Video Downloader online. Fast, secure, and private processing with no signup. 100% free.",
		url: "https://30tools.com/reddit-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reddit Video Downloader Online - No Signup | 30tools",
		description: "Download, convert, and edit video files instantly with our free Reddit Video Downloader online. Fast, secure, and private processing with no signup. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "reddit-downloader",
		name: "Reddit Video Downloader",
		description:
			"Download Reddit videos with audio in HD quality - 100% free, no signup required, privacy-focused processing in your browser.",
		route: "/reddit-downloader",
		extraSlugs: [
			"reddit-hd-video-downloader",
			"reddit-media-saver",
		],
		popular: true,
		category: "downloaders",
		features: [
			"Download public Reddit videos with audio",
			"Works on desktop and mobile browsers",
			"No signup required",
		],
		article: `
## Download Reddit Videos Responsibly

This tool allows you to download publicly available Reddit videos for personal use. Please respect copyright and intellectual property rights when using this service.

### Important Guidelines
- Only download videos you own or have permission to download
- Do not redistribute downloaded content without authorization
- Respect the original creators' rights and attributions

### Supported Content
- Public Reddit posts with video
- Videos where the creator has explicitly permitted downloads
- Your own Reddit content

### Privacy Note
Video URLs are processed temporarily for retrieval. We do not store or log downloaded content.
		`,
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Reddit Video Downloader",
						description:
							"Download Reddit videos with audio in HD quality",
						url: "https://30tools.com/reddit-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={tool}>
				<RedditDownloader />
			</ToolLayout>
		</>
	);
}