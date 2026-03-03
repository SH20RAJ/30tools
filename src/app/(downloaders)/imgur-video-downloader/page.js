import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Imgur Video Downloader - Save Imgur Videos & GIFs Free | 30tools",
	description:
		"Download Imgur videos, GIFs, and gifv files to your device for free. Save any Imgur post as MP4 without watermarks. No login required, works on all devices.",
	keywords: [
		"imgur video downloader",
		"download imgur video",
		"imgur gif downloader",
		"save imgur video",
		"imgur to mp4",
		"imgur gifv download",
		"imgur video saver",
		"how to save imgur gif",
		"download imgur post",
		"imgur video download free",
		"imgur gif to mp4",
	].join(", "),
	openGraph: {
		title: "Imgur Video Downloader - Save Videos & GIFs Free",
		description:
			"⚡ Download Imgur videos, GIFs, and gifv files as MP4 for free. Instant, no login.",
		url: "https://30tools.com/imgur-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Imgur Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Imgur Video Downloader (2026) - Free",
		description:
			"⚡ Save Imgur GIFs and videos as MP4 files instantly. Free, no account needed.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/imgur-video-downloader" },
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

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebApplication",
	name: "Imgur Video Downloader",
	alternateName: ["Imgur to MP4", "Imgur GIF Saver"],
	description:
		"Free tool to download Imgur videos, GIFs, and gifv files as MP4 without login.",
	url: "https://30tools.com/imgur-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download Imgur videos as MP4",
		"Convert Imgur gifv to MP4",
		"Save Imgur GIFs",
		"No account needed",
	],
};

export default function ImgurVideoDownloaderPage() {
	return (
		<>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
								Imgur Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Imgur Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Imgur videos, animated GIFs, and gifv posts as MP4 files for
							free. No account needed, no watermarks added. Works instantly on
							any browser or device.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎬 GIF & gifv</span>
							<span>📹 MP4 Output</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Imgur Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Imgur GIFs and Videos Offline
						</h2>
						<p className="text-muted-foreground mb-8">
							Imgur hosts billions of viral images, animated GIFs, and video
							clips shared across Reddit, social media, and chats. Imgur's
							"gifv" format plays like a video in browsers but is difficult to
							save directly. Our <strong>Imgur Video Downloader</strong>{" "}
							converts any Imgur gifv or video post into a downloadable MP4
							file.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">gifv to MP4</h3>
								<p className="text-muted-foreground m-0">
									Imgur gifv files are HTML5 video loops. Our tool downloads
									them as proper MP4 files compatible with every media player
									and device.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Viral Content Archive
								</h3>
								<p className="text-muted-foreground m-0">
									Save viral memes, funny clips, and trending Imgur posts before
									they get removed. Build your own collection of viral internet
									moments.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Original Quality
								</h3>
								<p className="text-muted-foreground m-0">
									Downloads are served directly from Imgur's CDN. No
									re-encoding, no quality loss — you get the original file
									quality.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Imgur Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I download an Imgur gifv?
								</h3>
								<p className="text-muted-foreground">
									Copy the Imgur post URL (e.g. imgur.com/gallery/xxxxxx or
									i.imgur.com/xxxxxx.gifv). Paste it into 30tools and click
									Download. The gifv will download as a standard MP4 file.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I save Imgur GIFs as actual GIF files?
								</h3>
								<p className="text-muted-foreground">
									Imgur stopped supporting raw GIF uploads due to file size.
									Most Imgur animated content is served as MP4 or gifv. Our tool
									downloads them as MP4, which you can convert to GIF using a
									converter tool if needed.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Imgur albums?
								</h3>
								<p className="text-muted-foreground">
									Paste the Imgur album URL and our tool will attempt to fetch
									all media items in the album for download. Individual items
									within the album are presented for selection.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
