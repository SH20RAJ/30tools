import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "BluTV Video Downloader - Save BluTV Shows Free | 30tools",
	description:
		"Download BluTV series, movies, and shows as MP4 for free. Save Turkish streaming content from BluTV offline. No login required. Works on all devices.",
	keywords: [
		"blutv video downloader",
		"download blutv series",
		"blutv downloader",
		"save blutv video",
		"blutv to mp4",
		"turkish streaming download",
		"blutv show download",
		"how to download blutv content",
		"blutv offline viewing",
	].join(", "),
	openGraph: {
		title: "BluTV Video Downloader - Save Turkish Shows Free",
		description:
			"⚡ Download BluTV Turkish streaming series and movies as MP4. Free, instant.",
		url: "https://30tools.com/blutv-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "BluTV Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "BluTV Video Downloader (2026)",
		description: "⚡ Save BluTV Turkish shows offline as MP4. Free downloader.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/blutv-video-downloader" },
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
	name: "BluTV Video Downloader",
	description:
		"Free online tool to download publicly accessible BluTV content as MP4.",
	url: "https://30tools.com/blutv-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function BlutvVideoDownloaderPage() {
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
								BluTV Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							BluTV Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download publicly available BluTV content — trailers, previews,
							and clips from Turkish original series and movies. No registration
							required.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇹🇷 Turkish Content</span>
							<span>🎬 Series & Movies</span>
							<span>📹 MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="BluTV Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">About BluTV</h2>
						<p className="text-muted-foreground mb-8">
							BluTV is Turkey's leading subscription streaming service featuring
							Turkish original series, international content, and exclusive
							productions. While full episodes require a subscription, trailers
							and preview clips are publicly accessible. Our{" "}
							<strong>BluTV Video Downloader</strong> lets you save those
							publicly available clips.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Turkish Originals
								</h3>
								<p className="text-muted-foreground m-0">
									Save trailers and teaser clips from BluTV's acclaimed Turkish
									original series for preview purposes before subscribing.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Preview Content</h3>
								<p className="text-muted-foreground m-0">
									Download available preview episodes and promotional content
									from BluTV's growing library of international quality shows.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">All Devices</h3>
								<p className="text-muted-foreground m-0">
									Works on Android, iPhone, PC, and Mac. No BluTV app
									installation needed — just paste and download from your
									browser.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							BluTV Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download full BluTV episodes?
								</h3>
								<p className="text-muted-foreground">
									BluTV full episodes are DRM-protected and require a
									subscription. Our tool works for publicly accessible trailers
									and preview clips shared by BluTV on their website and social
									media.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Where do I find BluTV's public video links?
								</h3>
								<p className="text-muted-foreground">
									BluTV shares trailers on their YouTube channel, Facebook page,
									and official website. Copy the URL of any publicly embedded
									BluTV video player and paste it into our downloader.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
