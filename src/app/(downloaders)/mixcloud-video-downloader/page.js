import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Free Mixcloud Video Downloader Online - No Signup | 30tools",
  description: "Free Mixcloud Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your br",
  keywords: ["mixcloud video downloader","mixcloud video downloader free","mixcloud video downloader online","mixcloud video downloader tool"],
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
	name: "Mixcloud Downloader",
	alternateName: ["Mixcloud to MP3", "Save Mixcloud Mix"],
	description:
		"Free online Mixcloud to MP3 converter. Download DJ mixes, radio shows, and podcasts from Mixcloud.",
	url: "https://30tools.com/mixcloud-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download Mixcloud mixes as MP3",
		"Save DJ sets offline",
		"No Mixcloud Select subscription required",
		"Works on all devices",
	],
};

export default async function MixcloudDownloaderPage({ searchParams }) {
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
								Mixcloud Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Mixcloud Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Mixcloud DJ sets, radio shows, and podcast mixes as MP3 for
							free. No Mixcloud Select subscription required. Works on all
							devices, no login needed.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎧 DJ Mixes</span>
							<span>📻 Radio Shows</span>
							<span>🎵 MP3 Audio</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Mixcloud Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Download Mixcloud Mixes?
						</h2>
						<p className="text-muted-foreground mb-8">
							Mixcloud hosts millions of DJ sets, radio shows, and long-form
							music mixes. Mixcloud's paid "Select" plan is needed for offline
							downloads inside the app. Our free{" "}
							<strong>Mixcloud Downloader</strong> lets you save any publicly
							available mix directly as an MP3 — perfect for gym sessions, long
							drives, or DJing.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									DJ Sets & Festivals
								</h3>
								<p className="text-muted-foreground m-0">
									Save high-energy festival sets, club mixes, and exclusive DJ
									performances from your favourite artists for offline
									listening.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Radio Shows</h3>
								<p className="text-muted-foreground m-0">
									Download BBC Radio, NTS Radio, and independent radio show
									episodes from Mixcloud to catch up on the go without using
									data.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Subscription Needed
								</h3>
								<p className="text-muted-foreground m-0">
									30tools is completely free. No Mixcloud Select, no credit
									card, no account creation. Just paste, download, enjoy.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Mixcloud Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I download a Mixcloud mix?
								</h3>
								<p className="text-muted-foreground">
									Open the Mixcloud show page, copy the URL (e.g.
									mixcloud.com/username/show-name), paste it into 30tools, and
									click Download. The MP3 will save directly to your device.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download full DJ sets from Mixcloud?
								</h3>
								<p className="text-muted-foreground">
									Yes. Full-length Mixcloud shows — even multi-hour DJ sets —
									can be downloaded as a single MP3 file using our tool.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What bitrate is the Mixcloud MP3 download?
								</h3>
								<p className="text-muted-foreground">
									Mixcloud streams at 128kbps AAC format publicly. Most
									downloads will be in 128kbps. Higher quality is only available
									to Mixcloud Select members through Mixcloud's app.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
