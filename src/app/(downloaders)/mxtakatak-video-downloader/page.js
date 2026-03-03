import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "MX TakaTak Video Downloader - Save Videos No Watermark | 30tools",
	description:
		"Download MX TakaTak videos without watermark for free. Save short videos from MX TakaTak as MP4. No login required. Works on Android, iPhone, and PC.",
	keywords: [
		"mx takatak video downloader",
		"download mx takatak video no watermark",
		"mxtakatak downloader",
		"save mx takatak video",
		"mx takatak to mp4",
		"mxtakatak video saver",
		"mx takatak without watermark",
		"how to download mx takatak videos",
	].join(", "),
	openGraph: {
		title: "MX TakaTak Video Downloader - No Watermark Free",
		description:
			"⚡ Download MX TakaTak short videos without watermark. Free, instant.",
		url: "https://30tools.com/mxtakatak-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "MX TakaTak Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "MX TakaTak Video Downloader (2026)",
		description: "⚡ Save MX TakaTak videos without watermark for free.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/mxtakatak-video-downloader" },
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
	name: "MX TakaTak Video Downloader",
	description:
		"Free online tool to download MX TakaTak videos without watermark as MP4.",
	url: "https://30tools.com/mxtakatak-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function MxtakatakVideoDownloaderPage() {
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
								MX TakaTak Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							MX TakaTak Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download MX TakaTak short videos without watermarks for free. Save
							viral Indian short videos as clean MP4 files. No login, no app
							needed.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇮🇳 Indian Short Videos</span>
							<span>🚫 No Watermark</span>
							<span>📹 MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="MX TakaTak Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save MX TakaTak Content Offline
						</h2>
						<p className="text-muted-foreground mb-8">
							MX TakaTak is an Indian short video platform powered by MX Player
							with millions of creators sharing entertainment, comedy, dance,
							and talent content. Save your favorite MX TakaTak videos without
							the platform's watermark using our free{" "}
							<strong>MX TakaTak Video Downloader</strong>.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Watermark Download
								</h3>
								<p className="text-muted-foreground m-0">
									Get clean, watermark-free MP4 videos from MX TakaTak for
									reposting, archiving, or sharing on WhatsApp status.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Comedy & Dance</h3>
								<p className="text-muted-foreground m-0">
									Save funny comedy sketches, dance challenges, and talent
									videos from India's fastest-growing creators on MX TakaTak.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									WhatsApp Status Ready
								</h3>
								<p className="text-muted-foreground m-0">
									Downloaded videos are perfectly sized for WhatsApp status,
									Instagram stories, and short-form platforms.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							MX TakaTak Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How to get MX TakaTak video link?
								</h3>
								<p className="text-muted-foreground">
									Open MX TakaTak, find the video you want, tap the Share icon
									and select "Copy Link". Paste it into the 30tools downloader
									and click Download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I save MX TakaTak videos to my gallery?
								</h3>
								<p className="text-muted-foreground">
									Yes. After downloading through our site, the MP4 file saves to
									your phone's download folder. From there, you can move it to
									your gallery or WhatsApp media folder.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
