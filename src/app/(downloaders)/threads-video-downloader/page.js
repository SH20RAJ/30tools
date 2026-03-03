import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Threads Video Downloader - Save Threads Videos Free | 30tools",
	description:
		"Download Threads videos by Meta to your device for free. Save any Threads post video without watermarks. No login required. Works on Android, iPhone, and PC.",
	keywords: [
		"threads video downloader",
		"download threads video",
		"save threads video",
		"threads by meta downloader",
		"threads video saver",
		"threads post video download",
		"threads to mp4",
		"how to download threads videos",
		"threads video download free",
		"meta threads downloader",
	].join(", "),
	openGraph: {
		title: "Threads Video Downloader - Save Threads Posts Free",
		description:
			"⚡ Download Threads (by Meta) videos as MP4 for free. No login, no watermarks, instant.",
		url: "https://30tools.com/threads-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Threads Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Threads Video Downloader (2026) - Free",
		description:
			"⚡ Save Threads by Meta videos offline as MP4. Free, no login required.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/threads-video-downloader" },
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
	name: "Threads Video Downloader",
	alternateName: ["Threads by Meta Downloader", "Save Threads Video"],
	description:
		"Free online tool to download Threads (by Meta) videos as MP4 files without login or watermarks.",
	url: "https://30tools.com/threads-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download Threads videos as MP4",
		"No Meta account required",
		"No watermarks added",
		"Works on all devices",
	],
};

export default function ThreadsVideoDownloaderPage() {
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
								Threads Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Threads Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Threads by Meta videos to any device for free. Download short
							clips and video posts from Threads without watermarks or logging
							in. Instant and 100% free.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🧵 Threads by Meta</span>
							<span>📹 HD MP4</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Threads Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Download Threads Videos?
						</h2>
						<p className="text-muted-foreground mb-8">
							Threads, Meta's Twitter/X alternative, is rapidly growing with
							creators sharing short videos, commentary, and entertainment.
							Threads doesn't provide a built-in video download button. Our{" "}
							<strong>Threads Video Downloader</strong> lets you save any public
							Threads video to your device quickly and for free.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									New Platform, Fast Growing
								</h3>
								<p className="text-muted-foreground m-0">
									Threads is growing at record speed. Save trending content from
									Threads before it's lost to the chronological feed or deleted
									by the creator.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Creator Content</h3>
								<p className="text-muted-foreground m-0">
									Download creator clips, video responses, and short-form
									commentary from Threads to watch offline or remix for your own
									content.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Cross-Platform Sharing
								</h3>
								<p className="text-muted-foreground m-0">
									Save a Threads video to share on WhatsApp, email, or other
									platforms where the Threads link may not embed properly.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Threads Video Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I copy a Threads video link?
								</h3>
								<p className="text-muted-foreground">
									On Threads, tap the share icon (⋯) on a post and select "Copy
									Link". Paste it into the 30tools downloader and click
									Download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Does this work for Threads posts without video?
								</h3>
								<p className="text-muted-foreground">
									This downloader is specifically for Threads posts that contain
									video content. Text-only posts have nothing to download. For
									image posts, you can right-click and save the image directly
									from threads.net.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is Threads video download available on iPhone?
								</h3>
								<p className="text-muted-foreground">
									Yes. Open 30tools in Safari on your iPhone, paste the Threads
									post URL, and click Download. The MP4 video saves directly to
									your Files or Photos app.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
