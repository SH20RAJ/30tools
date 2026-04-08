import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("espn-video-downloader", "downloaders");

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
	name: "ESPN Video Downloader",
	description:
		"Free online tool to download ESPN sports highlight videos and clips as MP4.",
	url: "https://30tools.com/espn-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download ESPN highlights as MP4",
		"Save NFL, NBA, MLB clips",
		"No ESPN+ subscription needed",
		"Works on all devices",
	],
};

export default async function EspnVideoDownloaderPage({ searchParams }) {
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
							<li className="text-foreground font-medium">
								ESPN Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							ESPN Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save ESPN sports highlights, replays, and top plays as MP4 for
							free. Download NFL touchdowns, NBA dunks, MLB home runs, and more
							for offline viewing without an ESPN+ subscription.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🏈 NFL</span>
							<span>🏀 NBA</span>
							<span>⚾ MLB</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="ESPN Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Your Favourite Sports Moments Forever
						</h2>
						<p className="text-muted-foreground mb-8">
							ESPN publishes thousands of sports highlight clips — game-winning
							shots, record-breaking plays, and iconic sports moments. Our{" "}
							<strong>ESPN Video Downloader</strong> lets you save publicly
							available ESPN clips directly to your device so you can relive
							those moments anytime, anywhere.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									All Major Sports
								</h3>
								<p className="text-muted-foreground m-0">
									Download highlights from NFL, NBA, MLB, NHL, MLS, College
									Football, March Madness, and more — all from ESPN's video
									library.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Top Plays Archive
								</h3>
								<p className="text-muted-foreground m-0">
									Save ESPN Top 10 Plays of the Day, SportsCenter highlights,
									and iconic moments from your favorite athletes to your
									personal archive.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Offline Viewing</h3>
								<p className="text-muted-foreground m-0">
									Download and watch sports highlights without an internet
									connection. Perfect for commuters, travellers, or areas with
									poor connectivity.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							ESPN Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download full ESPN game replays?
								</h3>
								<p className="text-muted-foreground">
									Full game replays on ESPN require an ESPN+ subscription and
									are protected by DRM. Our tool works for publicly available
									clips and highlight reels shared on espn.com without a
									subscription requirement.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the ESPN video URL?
								</h3>
								<p className="text-muted-foreground">
									Find the highlight clip on espn.com, click the share icon,
									copy the link, and paste it into the 30tools ESPN Downloader
									to download the video.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
