import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("streamable-video-downloader", "downloaders");

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
	name: "Streamable Video Downloader",
	alternateName: ["Streamable to MP4", "Save Streamable Clip"],
	description:
		"Free tool to download Streamable videos as MP4 files for offline viewing.",
	url: "https://30tools.com/streamable-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download Streamable videos as MP4",
		"No login required",
		"No watermarks added",
		"Fast download",
	],
};

export default async function StreamableVideoDownloaderPage({ searchParams }) {
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
								Streamable Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Streamable Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download Streamable video clips as MP4 files for free. Sports
							highlights, gaming clips, and all other Streamable content can be
							saved to any device instantly.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>⚡ Instant</span>
							<span>📹 HD MP4</span>
							<span>🚫 No Watermark</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Streamable Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Download Streamable Sports Clips & More
						</h2>
						<p className="text-muted-foreground mb-8">
							Streamable is widely used by sports fans and gaming communities to
							share short video clips. Streamable videos have a limited lifespan
							and are also dependent on hosting — our{" "}
							<strong>Streamable Video Downloader</strong> lets you permanently
							save clips before they get deleted.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Sports Highlights
								</h3>
								<p className="text-muted-foreground m-0">
									Save sports clips, goals, funny moments, and match highlights
									shared on Reddit communities before they expire from
									Streamable.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Gaming Clips</h3>
								<p className="text-muted-foreground m-0">
									Download gaming moments, wins, and epic plays shared as
									Streamable links on gaming forums and Discord servers.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Before Expiry</h3>
								<p className="text-muted-foreground m-0">
									Streamable videos can be deleted by the uploader at any time.
									Download and save important clips to prevent losing them
									forever.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Streamable Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I save a Streamable video?
								</h3>
								<p className="text-muted-foreground">
									Copy the Streamable URL (e.g. streamable.com/xxxxx). Paste it
									into the downloader above and click Download. The MP4 file
									saves to your downloads folder.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Do Streamable videos expire?
								</h3>
								<p className="text-muted-foreground">
									Yes. Streamable videos can be deleted by the uploader or
									expire if the account is on a free plan. Download important
									clips as soon as possible to archive them permanently.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
