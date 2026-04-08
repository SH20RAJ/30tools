import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("febspot-video-downloader", "downloaders");

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
	name: "FEBspot Video Downloader",
	description: "Free online tool to download FEBspot videos as MP4 files.",
	url: "https://30tools.com/febspot-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function FebspotVideoDownloaderPage({ searchParams }) {
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
								FEBspot Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							FEBspot Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download FEBspot videos as MP4 for free. Save any public FEBspot
							video to your device offline — no login, no watermarks, instant
							download.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>⚡ Instant</span>
							<span>📹 MP4</span>
							<span>🚫 No Watermark</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="FEBspot Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							How to Download FEBspot Videos
						</h2>
						<p className="text-muted-foreground mb-8">
							FEBspot hosts video content accessible to users worldwide. Our{" "}
							<strong>FEBspot Video Downloader</strong> makes it easy to save
							any publicly available FEBspot video directly to your device for
							offline viewing.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Step 1: Copy URL
								</h3>
								<p className="text-muted-foreground m-0">
									Open FEBspot and find the video you want. Copy the video URL
									from your browser's address bar.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Step 2: Paste URL
								</h3>
								<p className="text-muted-foreground m-0">
									Paste the FEBspot video URL into the 30tools input box above
									and click the Download button.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Step 3: Download
								</h3>
								<p className="text-muted-foreground m-0">
									Select your preferred quality and click Download. The MP4 file
									saves directly to your device.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							FEBspot Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is the FEBspot Video Downloader free?
								</h3>
								<p className="text-muted-foreground">
									Yes, 30tools FEBspot Video Downloader is completely free to
									use. No account, no subscription, and no hidden charges.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Does this work on mobile?
								</h3>
								<p className="text-muted-foreground">
									Yes. Open 30tools in your mobile browser (Chrome on Android or
									Safari on iPhone), paste the FEBspot URL, and download the
									video directly to your device.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
