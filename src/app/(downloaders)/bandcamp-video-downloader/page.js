import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Free Bandcamp Video Downloader Online - No Signup | 30tools",
	description:
		"Free Bandcamp Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your br",
	keywords: [
		"bandcamp video downloader",
		"bandcamp video downloader free",
		"bandcamp video downloader online",
		"bandcamp video downloader tool",
	],
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
	name: "Bandcamp Downloader",
	alternateName: ["Bandcamp to MP3", "Save Bandcamp Music"],
	description:
		"Free downloader for Bandcamp tracks and albums. Download indie and independent artist music from Bandcamp as MP3.",
	url: "https://30tools.com/bandcamp-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download Bandcamp tracks as MP3",
		"Save Bandcamp albums",
		"No account required",
		"Works on all devices",
	],
};

export default async function BandcampDownloaderPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
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
								Bandcamp Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Bandcamp Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Bandcamp tracks and albums as MP3 files for free. Download
							indie music, metal, jazz, and electronic from independent artists.
							No login required.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎸 Indie Music</span>
							<span>🎵 MP3 Audio</span>
							<span>💿 Full Albums</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Bandcamp Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Discover and Save Indie Music from Bandcamp
						</h2>
						<p className="text-muted-foreground mb-8">
							Bandcamp is home to over 700,000 independent artists across every
							genre. Many artists offer "Name Your Price" downloads, but
							streaming is the default. Our <strong>Bandcamp Downloader</strong>{" "}
							gives you direct access to the audio stream so you can save music
							for offline listening.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Indie & Underground
								</h3>
								<p className="text-muted-foreground m-0">
									Save albums and tracks from independent artists across metal,
									folk, jazz, electronic, and hundreds of other genres not found
									on mainstream platforms.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Rare & Exclusive
								</h3>
								<p className="text-muted-foreground m-0">
									Bandcamp hosts exclusive releases, limited editions, and
									albums unavailable on Spotify or Apple Music. Save them before
									they sell out or are taken down.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Offline Listening
								</h3>
								<p className="text-muted-foreground m-0">
									Add Bandcamp discoveries to your personal music library for
									offline listening — no subscription, no data usage during
									playback.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Bandcamp Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download any Bandcamp track?
								</h3>
								<p className="text-muted-foreground">
									Our tool downloads the publicly available stream of Bandcamp
									tracks. "Name Your Price" tracks that require a purchase
									cannot be downloaded via our tool without completing the
									artist's purchase process.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Should I support artists by buying on Bandcamp?
								</h3>
								<p className="text-muted-foreground">
									Absolutely! Bandcamp is one of the artist-friendliest
									platforms, with ~80% of revenue going directly to the artist.
									If you love a track or album you discovered, consider buying
									it on Bandcamp to support the creator.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What audio quality is the Bandcamp download?
								</h3>
								<p className="text-muted-foreground">
									Bandcamp streams at 128kbps MP3 publicly. Paid downloads from
									Bandcamp directly range from 128kbps up to lossless FLAC
									quality. Our tool captures the publicly streamed quality.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
