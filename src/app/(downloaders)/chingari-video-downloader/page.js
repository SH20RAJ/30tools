import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Free Chingari Video Downloader Online - No Signup | 30tools",
  description: "Free Chingari Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your br",
  keywords: ["chingari video downloader","chingari video downloader free","chingari video downloader online","chingari video downloader tool"],
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
	name: "Chingari Video Downloader",
	description:
		"Free online tool to download Chingari short videos without watermark.",
	url: "https://30tools.com/chingari-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function ChingariVideoDownloaderPage({ searchParams }) {
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
								Chingari Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Chingari Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download Chingari short videos without watermarks — India's
							homegrown TikTok alternative. Save viral Chingari content as clean
							MP4 files for free.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇮🇳 Made in India</span>
							<span>🚫 No Watermark</span>
							<span>📹 HD MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Chingari Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">About Chingari</h2>
						<p className="text-muted-foreground mb-8">
							Chingari is India's indigenous short-video app with millions of
							users sharing content in Hindi, Bhojpuri, and regional languages.
							The platform gained massive popularity as a TikTok alternative
							after the India ban. Our{" "}
							<strong>Chingari Video Downloader</strong> lets you save any
							public Chingari video as a clean, watermark-free MP4 file.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Made in India</h3>
								<p className="text-muted-foreground m-0">
									Support and enjoy India's homegrown short-video creators. Save
									the best Chingari content for offline enjoyment.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Hindi & Regional
								</h3>
								<p className="text-muted-foreground m-0">
									Download dance videos, comedy skits, and talent showcases in
									Hindi, Bhojpuri, Marathi, and other languages.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">No Watermark</h3>
								<p className="text-muted-foreground m-0">
									Bypass the Chingari watermark by fetching the source video
									stream directly. Get a clean file every time.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Chingari Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I share a Chingari video link?
								</h3>
								<p className="text-muted-foreground">
									Open Chingari app, tap the Share icon on a video, then "Copy
									Link". Paste that link in the 30tools downloader and click
									Download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is this the best Chingari downloader?
								</h3>
								<p className="text-muted-foreground">
									30tools is one of the fastest online downloaders for Chingari
									with no ads, no registration, no watermarks, and instant
									processing — making it one of the best Chingari downloader
									tools available.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
