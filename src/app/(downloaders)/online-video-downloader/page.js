import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title:
		"Online Video Downloader - Download Videos from Any Website Free | 30tools",
	description:
		"Universal online video downloader. Download videos from any website for free — YouTube, Facebook, Twitter, TikTok, Instagram, and thousands more. No software needed.",
	keywords: [
		"online video downloader",
		"download video from any website",
		"universal video downloader",
		"video downloader online free",
		"save video from website",
		"download any video free",
		"video grabber online",
		"best online video downloader 2026",
		"all in one video downloader",
	].join(", "),
	openGraph: {
		title: "Online Video Downloader - Download from Any Website Free",
		description:
			"⚡ Download videos from any website in one click. YouTube, TikTok, Instagram, and thousands more.",
		url: "https://30tools.com/online-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Universal Online Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Online Video Downloader (2026) - Works Everywhere",
		description:
			"⚡ Download videos from any website free. No software, works on all devices.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/online-video-downloader" },
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

const jsonLdSchemas = {
	webApp: {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "Online Video Downloader",
		alternateName: [
			"Universal Video Downloader",
			"Download Videos from Any Website",
		],
		description:
			"Free universal online video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter, and thousands of other websites.",
		url: "https://30tools.com/online-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download from 1000+ websites",
			"No software installation",
			"HD and 4K quality",
			"Works on all devices",
			"No login required",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Videos from Any Website",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Video URL",
				text: "Go to any video website (YouTube, TikTok, Facebook, etc.) and copy the video URL from your browser's address bar.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste in Downloader",
				text: "Paste the URL into the 30tools Online Video Downloader input box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Select Quality and Download",
				text: "Choose your preferred video quality (1080p, 720p, 480p) and click Download. The video saves to your device.",
			},
		],
	},
};

export default function OnlineVideoDownloaderPage() {
	return (
		<>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.webApp),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.howTo),
				}}
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
								Online Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Online Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							The best free online video downloader supporting 1,000+ websites.
							Download videos from YouTube, TikTok, Instagram, Facebook,
							Twitter, and hundreds more in one place.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🌐 1000+ Sites</span>
							<span>📹 HD & 4K</span>
							<span>💻 No Software</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Online Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							The All-in-One Video Downloader for Any Website
						</h2>
						<p className="text-muted-foreground mb-8">
							30tools Online Video Downloader is the most comprehensive video
							downloading tool on the internet. Instead of searching for a
							specific downloader for each platform, our universal tool handles
							them all. Paste any video URL and it works — no matter which
							website it came from.
						</p>
						<div className="grid md:grid-cols-2 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Supported Platforms Include
								</h3>
								<ul className="text-muted-foreground space-y-1 m-0">
									<li>✅ YouTube, YouTube Shorts</li>
									<li>✅ TikTok, Douyin</li>
									<li>✅ Instagram Reels, Posts, Stories</li>
									<li>✅ Facebook Videos, Reels</li>
									<li>✅ Twitter/X Videos, GIFs</li>
									<li>✅ Reddit Videos (with audio)</li>
									<li>✅ Pinterest Videos, GIFs</li>
									<li>✅ And 990+ more sites</li>
								</ul>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Why 30tools is the Best
								</h3>
								<ul className="text-muted-foreground space-y-1 m-0">
									<li>✅ No software installation required</li>
									<li>✅ Up to 4K HD quality downloads</li>
									<li>✅ No watermarks on downloaded videos</li>
									<li>✅ No registration or login needed</li>
									<li>✅ Works on Android, iPhone, and PC</li>
									<li>✅ MP3 audio extraction supported</li>
									<li>✅ Fast server-side processing</li>
									<li>✅ Completely free with no limits</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Online Video Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What websites does the 30tools video downloader support?
								</h3>
								<p className="text-muted-foreground">
									Our tool supports 1,000+ websites including all major social
									media platforms (YouTube, TikTok, Instagram, Facebook,
									Twitter/X, Pinterest, Reddit, LinkedIn) plus niche platforms
									(Bilibili, VK, Rumble, Dailymotion, Twitch, SoundCloud) and
									hundreds more. If there's a publicly accessible video, our
									tool can likely download it.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is this video downloader really free?
								</h3>
								<p className="text-muted-foreground">
									Yes. 30tools is completely free to use with no download
									limits, no subscription, and no account required. We're
									supported by non-intrusive ads which allow us to keep the
									service free forever.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download videos on my phone?
								</h3>
								<p className="text-muted-foreground">
									Yes. Our online video downloader is fully mobile-responsive.
									Open 30tools in Chrome on Android or Safari on iPhone, paste
									the video URL, click Download, and the video saves to your
									phone's downloads folder.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What video quality can I download?
								</h3>
								<p className="text-muted-foreground">
									Available quality depends on the source website. When multiple
									qualities are available, we offer all options — from 360p up
									to 1080p HD and 4K if the source provides it. For audio, we
									support MP3 extraction at up to 320kbps.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
