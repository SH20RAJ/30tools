import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("akillitv-video-downloader", "downloaders");

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
	name: "AkilliTV Video Downloader",
	description: "Free online tool to download AkilliTV Turkish videos as MP4.",
	url: "https://30tools.com/akillitv-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function AkillItvVideoDownloaderPage({ searchParams }) {
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
								AkilliTV Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							AkilliTV Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download AkilliTV Turkish videos and live content recordings as
							MP4 for free. No registration, no watermarks. Works on any browser
							or device.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇹🇷 Turkish Content</span>
							<span>📺 Live Shows</span>
							<span>📹 MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="AkilliTV Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Turkish AkilliTV Content Offline
						</h2>
						<p className="text-muted-foreground mb-8">
							AkilliTV provides access to Turkey's major TV channels online. Our{" "}
							<strong>AkilliTV Video Downloader</strong> lets you save clips and
							show segments from AkilliTV as MP4 for offline enjoyment. Perfect
							for Turkish drama fans and expats wanting to archive content.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Turkish TV Archive
								</h3>
								<p className="text-muted-foreground m-0">
									Download episodes and clips from Turkish TV channels broadcast
									on AkilliTV before they're removed from the platform.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Expat Friendly</h3>
								<p className="text-muted-foreground m-0">
									Turkish expats worldwide can save AkilliTV content to stay
									connected with homeland entertainment without relying on
									streaming availability.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">No Account</h3>
								<p className="text-muted-foreground m-0">
									Download without registering for an AkilliTV account. Just
									paste the content URL and get your MP4 instantly.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							AkilliTV FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I download videos from AkilliTV?
								</h3>
								<p className="text-muted-foreground">
									Copy the AkilliTV video URL from your browser. Paste it into
									the 30tools downloader and click Download. The video will be
									saved as an MP4 file.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
