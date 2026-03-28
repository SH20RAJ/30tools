import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Flickr Video Downloader - Save Flickr Videos & Photos Free | 30tools",
	description:
		"Download Flickr videos and photos in original quality for free. Save Flickr media to your device for offline viewing or sharing. No login required.",
	keywords: [
		"flickr video downloader",
		"download flickr video",
		"flickr photo downloader",
		"save flickr media",
		"flickr to mp4",
		"flickr downloader free",
		"flickr image downloader",
		"how to download flickr videos",
		"flickr video saver",
		"download flickr photos original quality",
	].join(", "),
	openGraph: {
		title: "Flickr Video Downloader - Save Flickr Media Free",
		description:
			"⚡ Download Flickr videos and photos in original quality. Free, no login required.",
		url: "https://30tools.com/flickr-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Flickr Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Flickr Video Downloader (2026) - Free",
		description:
			"⚡ Save Flickr videos and photos offline. Original quality, no login.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/flickr-video-downloader" },
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
	name: "Flickr Video Downloader",
	description:
		"Free online tool to download Flickr videos and photos in original quality.",
	url: "https://30tools.com/flickr-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function FlickrVideoDownloaderPage({ searchParams }) {
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
								Flickr Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Flickr Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Flickr videos and photos in their original high resolution
							quality for free. Download any public Flickr media instantly —
							perfect for photographers and creators.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>📸 Photos & Videos</span>
							<span>🔭 Original Quality</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Flickr Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Download Professional Flickr Photography
						</h2>
						<p className="text-muted-foreground mb-8">
							Flickr is home to over 15 billion photos from professional
							photographers and enthusiasts worldwide. Many images are licensed
							under Creative Commons for free use. Our{" "}
							<strong>Flickr Video Downloader</strong> lets you save Flickr
							videos and high-resolution photos easily.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Professional Photography
								</h3>
								<p className="text-muted-foreground m-0">
									Flickr hosts stunning professional photography across nature,
									architecture, street photography, and more. Save your
									favorites in full resolution.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Creative Commons
								</h3>
								<p className="text-muted-foreground m-0">
									Millions of Flickr photos are available under Creative Commons
									licenses for free commercial and personal use. Always verify
									the license before reuse.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Original Resolution
								</h3>
								<p className="text-muted-foreground m-0">
									Download Flickr photos and videos in their original uploaded
									resolution — no compression, no cropping. Full quality every
									time.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Flickr Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download photos from Flickr for free?
								</h3>
								<p className="text-muted-foreground">
									Yes. Public Flickr photos can be downloaded using our tool.
									Always check the Creative Commons license or copyright
									information before using downloaded Flickr images
									commercially. Some rights-reserved photos may only be
									downloaded for personal use.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I download an entire Flickr album?
								</h3>
								<p className="text-muted-foreground">
									Paste the Flickr album URL and our tool will list all
									available media in the collection. Select individual files or
									bulk download the entire album.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
