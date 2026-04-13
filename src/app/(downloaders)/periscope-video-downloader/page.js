import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Free Periscope Video Downloader Online - No Signup | 30tools",
	description:
		"Free Periscope Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your b",
	keywords: [
		"periscope video downloader",
		"periscope video downloader free",
		"periscope video downloader online",
		"periscope video downloader tool",
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
	name: "Periscope Video Downloader",
	description:
		"Free online tool to download Periscope live broadcast recordings as MP4 before they expire.",
	url: "https://30tools.com/periscope-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function PeriscopeVideoDownloaderPage({ searchParams }) {
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
								Periscope Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Periscope Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Periscope (Twitter Live) broadcast recordings as MP4 before
							they expire. Download live stream replays for permanent offline
							access — no login required.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>📡 Live Streams</span>
							<span>⏰ Before Expiry</span>
							<span>📹 MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Periscope Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Periscope Streams Before They Disappear
						</h2>
						<p className="text-muted-foreground mb-8">
							Periscope broadcasts — now integrated with Twitter/X as Twitter
							Live — are typically available for replay for a limited time
							before expiring permanently. Our{" "}
							<strong>Periscope Video Downloader</strong> lets you save those
							broadcasts as MP4 before they're gone forever. Perfect for
							archiving live events, news streams, and creator broadcasts.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Live Event Archive
								</h3>
								<p className="text-muted-foreground m-0">
									Save concert livestreams, news broadcasts, political events,
									and other live content from Periscope before the 24-hour or
									30-day expiry.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Creator Content</h3>
								<p className="text-muted-foreground m-0">
									Archive live Q&A sessions, tutorials, and exclusive
									behind-the-scenes streams from your favorite creators on
									Periscope.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Journalism Archive
								</h3>
								<p className="text-muted-foreground m-0">
									Journalists and researchers can archive important Periscope
									broadcasts of public events before they expire and become
									unavailable.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Periscope Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is Periscope still active?
								</h3>
								<p className="text-muted-foreground">
									Periscope as a standalone app was shut down in March 2021.
									However, its technology was integrated into Twitter/X as
									Twitter Live. Past broadcasts may still be accessible via
									pscp.tv or Twitter post links. Our tool handles both formats.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I find the Periscope broadcast URL?
								</h3>
								<p className="text-muted-foreground">
									You can find Periscope broadcast URLs on pscp.tv or from the
									original Twitter/X post that embedded the live stream. Copy
									the URL and paste it into 30tools downloader.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
