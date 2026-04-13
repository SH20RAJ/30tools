import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Free Gaana Video Downloader Online - No Signup | 30tools",
  description: "Free Gaana Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your brows",
  keywords: ["gaana video downloader","gaana video downloader free","gaana video downloader online","gaana video downloader tool"],
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
	name: "Gaana Song Downloader",
	alternateName: ["Gaana to MP3", "Gaana Music Saver"],
	description:
		"Free online Gaana to MP3 downloader. Save Bollywood, Punjabi, and regional songs from Gaana.",
	url: "https://30tools.com/gaana-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download Gaana songs as MP3",
		"Save Bollywood and Punjabi music",
		"No subscription required",
		"Works on all devices",
	],
};

export default async function GaanaDownloaderPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
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
							<li className="text-foreground font-medium">Gaana Downloader</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Gaana Song Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download Gaana songs — Bollywood hits, Punjabi tracks, regional
							music — as MP3 for free. No Gaana Plus subscription needed. Works
							offline on all devices.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎵 Bollywood & More</span>
							<span>🎧 MP3 Audio</span>
							<span>🚫 No Subscription</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Gaana Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Your Favourite Gaana Tracks Offline
						</h2>
						<p className="text-muted-foreground mb-8">
							Gaana is India's top music streaming app with over 200 million
							users. While Gaana Plus allows offline listening in the app, it
							requires a paid subscription. Our{" "}
							<strong>Gaana Song Downloader</strong> lets you download any
							publicly available Gaana track as an MP3 file — completely free,
							no subscription needed.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Bollywood & Punjabi
								</h3>
								<p className="text-muted-foreground m-0">
									Save the newest Bollywood chart-toppers, Punjabi bangers, and
									classic Hindi film songs from Gaana directly to your device.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Regional Music</h3>
								<p className="text-muted-foreground m-0">
									Download Tamil, Telugu, Kannada, Malayalam, Marathi, and other
									regional language songs from Gaana's vast collection.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">No Subscription</h3>
								<p className="text-muted-foreground m-0">
									Skip the Gaana Plus payment. 30tools lets you download any
									public Gaana song for free as a high-quality MP3.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Gaana Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the Gaana song URL?
								</h3>
								<p className="text-muted-foreground">
									Open Gaana.com in a browser, find the song you want. Click the
									⋯ menu next to the track and choose "Share". Copy the link and
									paste it into the 30tools downloader.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Gaana playlists?
								</h3>
								<p className="text-muted-foreground">
									Paste the Gaana playlist URL and our tool will fetch all
									available tracks for individual download. Entire playlist bulk
									download may be processed track by track.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What audio quality is the download?
								</h3>
								<p className="text-muted-foreground">
									Gaana streams at 128kbps MP3 for free users. Our download
									captures the publicly available stream quality.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
