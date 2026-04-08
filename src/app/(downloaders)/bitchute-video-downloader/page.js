import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("bitchute-video-downloader", "downloaders");

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
	name: "BitChute Video Downloader",
	description:
		"Free online tool to download BitChute videos as MP4 files for offline viewing.",
	url: "https://30tools.com/bitchute-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function BitchuteVideoDownloaderPage({ searchParams }) {
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
								BitChute Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							BitChute Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download BitChute videos and alternative media content as MP4 for
							free. Save news, podcasts, and independent creator videos from
							BitChute offline. No login necessary.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>📰 Alt Media</span>
							<span>🎙️ Podcasts</span>
							<span>📹 MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="BitChute Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save BitChute Alternative Media Offline
						</h2>
						<p className="text-muted-foreground mb-8">
							BitChute is a peer-to-peer video hosting platform popular with
							independent creators, journalists, and alternative media outlets.
							Our <strong>BitChute Video Downloader</strong> lets you save any
							public BitChute video as an MP4 file for offline access without
							needing a BitChute account.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Independent Media
								</h3>
								<p className="text-muted-foreground m-0">
									Download news analysis, political commentary, and opinion
									content from independent creators who host on BitChute.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Archive Before Removal
								</h3>
								<p className="text-muted-foreground m-0">
									BitChute content can be removed. Download and preserve
									important video content before it disappears from the
									platform.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Account Needed
								</h3>
								<p className="text-muted-foreground m-0">
									Download BitChute videos without creating a BitChute account
									or logging in. Paste the URL and download instantly.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							BitChute Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the BitChute video URL?
								</h3>
								<p className="text-muted-foreground">
									Open BitChute, navigate to the video you want. Copy the URL
									from your browser's address bar (e.g.
									bitchute.com/video/xxxxxxx). Paste it into 30tools and click
									Download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Are BitChute downloads fast?
								</h3>
								<p className="text-muted-foreground">
									BitChute uses peer-to-peer hosting which can vary in speed.
									Our downloader fetches directly from BitChute's servers. Speed
									depends on the file size and server availability for that
									specific video.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
