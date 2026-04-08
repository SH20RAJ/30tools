import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("izlesene-video-downloader", "downloaders");

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
	name: "İzlesene Video Downloader",
	description:
		"Free online tool to download İzlesene.com Turkish videos as MP4 files.",
	url: "https://30tools.com/izlesene-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function IzleseneVideoDownloaderPage({ searchParams }) {
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
								İzlesene Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							İzlesene Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download videos from İzlesene.com — Turkey's leading video
							platform — as MP4 for free. Save Turkish comedy, music, and
							entertainment videos instantly.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇹🇷 Turkish Videos</span>
							<span>🎬 Comedy & Music</span>
							<span>📹 MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="İzlesene Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Turkey's Largest Video Platform Downloader
						</h2>
						<p className="text-muted-foreground mb-8">
							İzlesene.com is one of Turkey's largest homegrown video-sharing
							platforms, often called "Turkey's YouTube." It hosts millions of
							videos — Turkish comedians, music clips, sports highlights, TV
							show excerpts, and more. Our{" "}
							<strong>İzlesene Video Downloader</strong> saves any public
							İzlesene video as an MP4 instantly.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Turkish Comedy</h3>
								<p className="text-muted-foreground m-0">
									Download the funniest Turkish stand-up comedy clips, prank
									videos, and viral humor from İzlesene's massive library.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Music & Concerts
								</h3>
								<p className="text-muted-foreground m-0">
									Save live concert performances, Turkish pop music videos, and
									folk music clips from İzlesene for offline listening.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">TV Excerpts</h3>
								<p className="text-muted-foreground m-0">
									Download TV show highlights and news clips uploaded from
									Turkish broadcast channels to İzlesene.com.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							İzlesene FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How to download from İzlesene?
								</h3>
								<p className="text-muted-foreground">
									Copy the İzlesene video URL (e.g. izlesene.com/video/...).
									Paste it into the 30tools downloader and click Download. The
									MP4 saves to your device.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
