import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "YouTube Thumbnail Downloader - Save HD Thumbnails Free | 30tools",
	description:
		"Download YouTube video thumbnails in HD (1280x720) and full resolution for free. Paste any YouTube URL and save the custom thumbnail instantly.",
	keywords: [
		"youtube thumbnail downloader",
		"download youtube thumbnail",
		"youtube thumbnail hd download",
		"save youtube thumbnail",
		"youtube thumbnail saver",
		"how to download youtube thumbnail",
		"youtube thumbnail 1080p",
		"youtube thumbnail grabber",
		"youtube thumbnail extractor",
		"get youtube video thumbnail",
		"youtube thumbnail download free",
	].join(", "),
	openGraph: {
		title: "YouTube Thumbnail Downloader - Save HD Thumbnails Instantly",
		description:
			"⚡ Download YouTube video thumbnails in 1080p, 720p, and 480p. Free, no login, instant download.",
		url: "https://30tools.com/youtube-thumbnail-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "YouTube Thumbnail Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "YouTube Thumbnail Downloader (2026)",
		description:
			"⚡ Save any YouTube video's thumbnail in HD. Free and instant.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/youtube-thumbnail-downloader" },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const AdUnit = () => (
	<div className="my-6 flex justify-center">
		<ins
			className="adsbygoogle"
			style={{ display: "block" }}
			data-ad-format="autorelaxed"
			data-ad-client="ca-pub-1828915420581549"
			data-ad-slot="4669751596"
		></ins>
	</div>
);

const jsonLdSchemas = {
	webApp: {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "YouTube Thumbnail Downloader",
		alternateName: ["YouTube Thumbnail Grabber", "Save YouTube Thumbnail HD"],
		description:
			"Free online tool to download YouTube video thumbnails in HD resolution.",
		url: "https://30tools.com/youtube-thumbnail-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download maxresdefault HD thumbnails",
			"Multiple resolution options",
			"No account required",
			"Free to use",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download a YouTube Thumbnail",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy YouTube URL",
				text: "Open the YouTube video whose thumbnail you want. Copy the URL from the address bar or share button.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Paste the YouTube video URL into the 30tools YouTube Thumbnail Downloader input box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download Thumbnail",
				text: "Click on the resolution you want (maxresdefault for best quality) and save the JPEG thumbnail image to your device.",
			},
		],
	},
};

export default function YouTubeThumbnailDownloaderPage() {
	return (
		<>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.webApp),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.howTo),
				}}
			/>
			<div className="container mx-auto px-4 py-12 md:py-20">
				<div className="max-w-6xl mx-auto">
					<nav aria-label="Breadcrumb" className="mb-8">
						<ol className="flex items-center space-x-2 text-sm text-muted-foreground">
							<li>
								<Link href="/" className="hover:text-primary">
									Home
								</Link>
							</li>
							<li>/</li>
							<li>
								<Link href="/all-downloaders" className="hover:text-primary">
									Downloaders
								</Link>
							</li>
							<li>/</li>
							<li className="text-foreground font-medium">
								YouTube Thumbnail Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							YouTube Thumbnail Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save any YouTube video's thumbnail in HD resolution (1280x720) or
							full maxresdefault quality for free. Perfect for designers,
							marketers, and content creators.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🖼️ HD 1080p</span>
							<span>🆓 100% Free</span>
							<span>⚡ Instant</span>
							<span>📱 All Devices</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="YouTube Thumbnail Downloader" />
					</div>

					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Who Uses YouTube Thumbnail Downloaders?
						</h2>
						<p className="text-muted-foreground mb-8">
							YouTube thumbnails are carefully designed marketing images.
							Creators, designers, and researchers download them for competitive
							analysis, inspiration, presentations, and content repurposing. Our
							tool extracts the <strong>maxresdefault</strong> (1280×720)
							thumbnail image in its highest quality.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Content Creator Research
								</h3>
								<p className="text-muted-foreground m-0">
									Study competitors' thumbnail styles, color schemes, and
									typography to optimize your own click-through rates.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Design Inspiration
								</h3>
								<p className="text-muted-foreground m-0">
									Collect thumbnail reference images for mood boards and design
									projects. Save them in high resolution for accurate analysis.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Multiple Resolutions
								</h3>
								<p className="text-muted-foreground m-0">
									Download thumbnails in maxresdefault (1280x720), hqdefault
									(480x360), and more based on what's available.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download a YouTube Thumbnail
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy YouTube URL</h3>
								<p className="text-muted-foreground text-sm">
									Open the YouTube video. Copy the URL from the browser address
									bar or click Share → Copy Link.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste URL</h3>
								<p className="text-muted-foreground text-sm">
									Paste the URL into the 30tools downloader and let our system
									fetch all available thumbnail sizes.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Save Thumbnail</h3>
								<p className="text-muted-foreground text-sm">
									Choose your preferred resolution and right-click the thumbnail
									image to save it to your device.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							YouTube Thumbnail Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What is maxresdefault YouTube thumbnail?
								</h3>
								<p className="text-muted-foreground">
									maxresdefault is YouTube's highest quality thumbnail format at
									1280×720 pixels. Not all videos have this size available; some
									may only have hqdefault (480×360) if the creator uploaded at
									low resolution.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is it legal to download YouTube thumbnails?
								</h3>
								<p className="text-muted-foreground">
									YouTube thumbnails are publicly accessible images. Downloading
									them for personal research, inspiration, or analysis is
									generally acceptable. However, using someone else's thumbnail
									commercially or representing it as your own violates copyright
									law.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What image format are YouTube thumbnails in?
								</h3>
								<p className="text-muted-foreground">
									YouTube thumbnails are saved as JPEG (.jpg) image files. They
									can be opened in any standard image viewer or editing
									software.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Do I need a YouTube account to download thumbnails?
								</h3>
								<p className="text-muted-foreground">
									No. Our tool accesses publicly available thumbnail images from
									YouTube. No login or YouTube account is required.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
