import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Reddit Video Downloader Online - No Signup | 30tools",
	description:
		"Download Reddit videos with audio in HD quality 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"reddit video downloader, free online tool, no signup, video, reddit video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/reddit-downloader",
	},
	openGraph: {
		title: "Free Reddit Video Downloader Online - No Signup | 30tools",
		description:
			"Download Reddit videos with audio in HD quality 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/reddit-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reddit Video Downloader Online - No Signup | 30tools",
		description:
			"Download Reddit videos with audio in HD quality 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "reddit-downloader",
		name: "Reddit Video Downloader",
		description: "Download Reddit videos with audio in HD quality",
		route: "/reddit-downloader",
		extraSlugs: [
			"any-video-downloader",
			"change-video-type",
			"compress-video-for-whatsapp",
			"cut-and-merge-video",
			"cut-video-length",
			"download-fb-video",
			"download-reddit-video",
			"embed-video-player",
			"extract-mp3-from-video",
			"fb-clip-downloader",
			"fb-highlights-downloader",
			"fb-video-downloader",
			"fb-video-saver",
			"ig-downloader-all",
			"ig-reels-downloader-hd",
			"ig-video-downloader",
			"insta-video-saver",
			"instagram-video-downloader",
			"musically-downloader",
			"reddit-hd-video-downloader",
			"reddit-media-saver",
			"reddit-mp4-downloader",
			"reddit-video-saver",
			"reduce-video-size",
			"responsive-video-player",
			"save-reddit-video",
			"save-reddit-video-with-audio-online",
			"save-reels-video",
			"screen-capture-video",
			"shorten-video-clip",
			"sitemap-url-downloader",
			"snap-video-downloader",
			"social-media-downloader",
			"split-video-file",
			"tt-video-downloader",
			"video-player",
			"video-size-reducer",
			"video-tools",
			"video-trimmer",
			"x-video-downloader",
		],
		popular: true,
		category: "video",
		features: [
			"Download Reddit Videos with Audio Intact",
			"Save Content in HD (720p, 1080p)",
			"No API Keys or Reddit Account Required",
			"Bypass the Reddit App Restrictions",
			"Fast Proxy Extraction Engine"
		],
		article: `
## Download Reddit Videos With Sound Intact
Reddit is notoriously difficult when it comes to saving videos. If you use standard "Save Video" options on your phone or desktop, the video is often saved without audio, because Reddit separates the video and audio streams (DASH format) on their servers. Our Reddit Video Downloader automatically stitches the video and audio back together so you get a complete, playable MP4 file.

### Lawful Use Notice
**Important:** Reddit is home to original content created by users, as well as copyrighted material posted under fair use. You may only download videos for offline, personal viewing. Do not re-upload, distribute, or monetize downloaded videos without the explicit permission of the original poster (OP) or copyright holder.

### Platform-Specific Limitations
Because Reddit relies heavily on third-party video hosts (like Imgur or RedGifs) alongside their native v.redd.it player, our tool occasionally has to proxy requests through different engines. If a video is hosted on a highly restricted third-party site or is part of a private subreddit (NSFW/Quarantined), our downloader may not be able to access the media.
		`,
		howTo: {
			name: "How to Download a Reddit Video",
			steps: [
				{
					name: "Copy the Post Link",
					"text": "On Reddit, click 'Share' on the post containing the video and select 'Copy Link'."
				},
				{
					name: "Paste the URL",
					"text": "Paste the Reddit URL into our downloader input box. Ensure the link looks like 'reddit.com/r/...'"
				},
				{
					name: "Wait for Audio Stitching",
					"text": "Our engine fetches the video and audio files and merges them. This usually takes 3-10 seconds."
				},
				{
					name": "Download the MP4",
					"text": "Click the download button to save the final HD video to your device."
				}
			]
		},
		faqs: [
			{
				question: "Why do some Reddit videos download without sound?",
				answer: "If you download directly from the app, it's because Reddit streams audio separately. By using our tool, we fetch both streams and combine them so the final MP4 has sound."
			},
			{
				question: "Can I download NSFW videos?",
				answer: "Our tool can download most native Reddit videos, but Reddit places heavy restrictions on fetching media from NSFW subreddits without an authenticated account. Therefore, it may fail."
			},
			{
				question: "Are my downloads logged?",
				answer: "No. The download request is proxied through our edge servers and immediately discarded. We do not keep logs of which videos you download."
			}
		]
	};
	const breadcrumbs = [
		{
			name: "Video Tools",
			url: "/video-tools",
		},
		{
			name: "Reddit Video Downloader",
			url: "/reddit-downloader",
		},
	];
	const relatedTools = [
		{
			id: "terabox-downloader",
			name: "Terabox Video Downloader",
			description:
				"Download Terabox videos with direct links and embed custom video players",
			route: "/terabox-downloader",
			extraSlugs: [
				"download-terabox-file",
				"download-terabox-videos-without-app",
				"terabox-direct-download",
				"terabox-link-downloader",
				"terabox-player-online",
				"terabox-video-player-online",
				"terabox-video-saver",
			],
			popular: true,
			category: "video",
		},
		{
			id: "insta-story-size-converter",
			name: "Insta Story Size Converter",
			description:
				"Free Insta Story Size Converter online. Insta Story Size Converter allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
			route: "/insta-story-size-converter",
			extraSlugs: [
				"insta-story-saver",
				"insta-story-size-converter",
				"insta-story-viewer",
			],
			category: "video",
		},
		{
			id: "facebook-cover-resizer",
			name: "Facebook Cover Resizer",
			description:
				"Free Facebook Cover Resizer online. Facebook Cover Resizer allows you to process video files quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
			route: "/facebook-cover-resizer",
			extraSlugs: ["facebook-cover-resizer"],
			category: "video",
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
						name: "Reddit Video Downloader",
						description: "Download Reddit videos with audio in HD quality",
						url: "https://30tools.com/reddit-downloader",
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
