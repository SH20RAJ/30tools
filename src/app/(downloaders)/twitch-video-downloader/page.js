import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Twitch Video Downloader - Save Twitch VODs & Clips Free | 30tools",
	description:
		"Download Twitch VODs, past broadcasts, and clips as MP4 for free. No Twitch subscription required. The fastest online Twitch video downloader.",
	keywords: [
		"twitch video downloader",
		"download twitch vod",
		"twitch clip downloader",
		"save twitch video",
		"twitch to mp4",
		"twitch video download free",
		"how to download twitch vods",
		"twitch past broadcast downloader",
		"twitch clip saver",
		"download twitch clips",
	].join(", "),
	openGraph: {
		title: "Twitch Video Downloader - Save VODs and Clips Free",
		description:
			"⚡ Download Twitch VODs and clips as MP4 for free. No subscription needed!",
		url: "https://30tools.com/twitch-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Twitch Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Twitch Video Downloader (2026)",
		description:
			"⚡ Download Twitch VODs and clips offline for free. No login required.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/twitch-video-downloader" },
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
		name: "Twitch Video Downloader",
		alternateName: ["Twitch VOD Downloader", "Twitch Clip Saver"],
		description:
			"Free online tool to download Twitch VODs and clips as MP4 files without a subscription.",
		url: "https://30tools.com/twitch-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Twitch VODs as MP4",
			"Save Twitch clips",
			"No subscription required",
			"Works on all devices",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Twitch VODs and Clips",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Twitch URL",
				text: "Open Twitch VOD or clip you want to download. Copy the URL from the address bar.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Paste the Twitch URL into 30tools Twitch Downloader and press Enter.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download",
				text: "Select the video quality and click Download to save the MP4 file to your device.",
			},
		],
	},
};

export default async function TwitchVideoDownloaderPage({ searchParams }) {
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
								Twitch Video Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Twitch Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Twitch VODs and clips as offline MP4 files. Perfect for
							streamers, esports fans, and gaming content creators. No Twitch
							subscription needed.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎮 VODs & Clips</span>
							<span>📹 HD MP4</span>
							<span>🚫 No Sub Needed</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Twitch Video Downloader" />
					</div>

					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Download Twitch VODs?
						</h2>
						<p className="text-muted-foreground mb-8">
							Twitch VODs (Video on Demand) are only available for a limited
							time — 14 days for standard accounts and 60 days for Partners.
							Clips expire too. Our <strong>Twitch Video Downloader</strong>{" "}
							lets you save valuable gaming moments, speedruns, tech demos, or
							music streams before they disappear.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Save Before They Expire
								</h3>
								<p className="text-muted-foreground m-0">
									Twitch VODs don't last forever. Download them while available
									so you never miss an epic gaming moment or exclusive stream.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Content Repurposing
								</h3>
								<p className="text-muted-foreground m-0">
									Streamers can save their best clips to repurpose for YouTube,
									TikTok, or Instagram highlights — growing your audience across
									platforms.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Offline Viewing</h3>
								<p className="text-muted-foreground m-0">
									Save VODs to watch later on a flight or in areas with no
									internet connection. Perfect for long streams you want to
									catch up on your own schedule.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download Twitch VODs and Clips
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy the Link</h3>
								<p className="text-muted-foreground text-sm">
									Open the Twitch VOD or Clip you want to save. Copy the URL
									directly from your browser's address bar.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste & Process</h3>
								<p className="text-muted-foreground text-sm">
									Paste the Twitch URL into the box above. Our servers will
									fetch the video and present available download options.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Download MP4</h3>
								<p className="text-muted-foreground text-sm">
									Choose your preferred quality and download the MP4 video
									directly. The file will save to your device's default download
									folder.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Twitch Video Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Twitch VODs without a subscription?
								</h3>
								<p className="text-muted-foreground">
									Yes! 30tools operates independently and does not require a
									Twitch subscription of any kind. Just paste the public VOD or
									clip URL and download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download subscriber-only VODs?
								</h3>
								<p className="text-muted-foreground">
									No. Our tool can only access publicly available Twitch
									content. Subscriber-only or restricted VODs require
									authenticated access and cannot be downloaded via third-party
									tools.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What's the difference between a Twitch VOD and a Clip?
								</h3>
								<p className="text-muted-foreground">
									A VOD is the full recorded version of a past live stream. A
									Clip is a short (up to 60-second) highlight excerpt created by
									viewers or streamers from the VOD. Both can be downloaded with
									our tool.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Do Twitch VODs expire?
								</h3>
								<p className="text-muted-foreground">
									Yes. Standard Twitch accounts get 14 days of VOD storage.
									Twitch Partners and Affiliates get up to 60 days. Download
									important VODs soon after the stream while they're available.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
