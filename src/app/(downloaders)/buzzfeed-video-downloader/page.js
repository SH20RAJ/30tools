import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Buzzfeed Video Downloader - Save Buzzfeed Videos Free | 30tools",
	description:
		"Download Buzzfeed videos, quizzes videos, and tasty cooking clips for free. Save any Buzzfeed video as MP4 without login. Works on all devices instantly.",
	keywords: [
		"buzzfeed video downloader",
		"download buzzfeed video",
		"save buzzfeed video",
		"tasty video downloader",
		"buzzfeed to mp4",
		"buzzfeed downloader free",
		"how to download buzzfeed videos",
		"tasty recipe video download",
		"buzzfeed video saver",
	].join(", "),
	openGraph: {
		title: "Buzzfeed Video Downloader - Save Tasty & Buzzfeed Videos",
		description:
			"⚡ Download Buzzfeed and Tasty cooking videos as MP4 for free. Instant, no login.",
		url: "https://30tools.com/buzzfeed-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Buzzfeed Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Buzzfeed Video Downloader (2026)",
		description:
			"⚡ Save Buzzfeed & Tasty videos offline as MP4. Free, instant.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/buzzfeed-video-downloader" },
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
	name: "Buzzfeed Video Downloader",
	alternateName: ["Tasty Video Downloader", "Save Buzzfeed Videos"],
	description:
		"Free online tool to download Buzzfeed and Tasty videos as MP4 files.",
	url: "https://30tools.com/buzzfeed-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function BuzzfeedVideoDownloaderPage() {
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
								Buzzfeed Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Buzzfeed Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Buzzfeed and Tasty cooking videos as MP4 for free. Download
							recipe videos, fun quizzes, and entertainment clips from Buzzfeed
							for offline viewing.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🍕 Tasty Recipes</span>
							<span>😂 Entertainment</span>
							<span>📹 MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Buzzfeed Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Tasty Recipes and Buzzfeed Hits Offline
						</h2>
						<p className="text-muted-foreground mb-8">
							Buzzfeed produces some of the internet's best viral content — from
							Tasty recipe videos to heartwarming stories, celebrity content,
							and entertainment news. Our{" "}
							<strong>Buzzfeed Video Downloader</strong> lets you save any
							public Buzzfeed video for offline reference, especially those
							quick Tasty recipe clips you want cooking step-by-step.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Tasty Cooking Videos
								</h3>
								<p className="text-muted-foreground m-0">
									Save Tasty recipe videos to your device so you can follow
									along in the kitchen without needing an internet connection or
									the Tasty app.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Viral Entertainment
								</h3>
								<p className="text-muted-foreground m-0">
									Download Buzzfeed viral videos — try not to laugh challenges,
									weird tests, and entertainment clips — to share with friends
									offline.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Keep It Forever</h3>
								<p className="text-muted-foreground m-0">
									Buzzfeed occasionally removes older content. Download your
									favourite Buzzfeed videos to keep them permanently in your
									personal collection.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Buzzfeed Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I download a Buzzfeed video?
								</h3>
								<p className="text-muted-foreground">
									On Buzzfeed.com, find the video you want. Copy the
									article/post URL. Paste it into the 30tools downloader and
									click Download. Our tool identifies and extracts the video
									file for download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Tasty full recipes from Buzzfeed?
								</h3>
								<p className="text-muted-foreground">
									Yes. Tasty recipe videos on Buzzfeed are public and
									downloadable using our tool. Paste the Tasty recipe page URL
									and download the full cooking video as MP4.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
