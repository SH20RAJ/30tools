import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Dailymotion Video Downloader - Save HD Videos Free | 30tools",
	description:
		"Download Dailymotion videos in HD MP4 for free. The best online Dailymotion downloader. No account needed, no watermarks, works on all devices.",
	keywords: [
		"dailymotion video downloader",
		"download dailymotion video",
		"free dailymotion downloader",
		"dailymotion to mp4",
		"save dailymotion video",
		"dailymotion video download",
		"how to download dailymotion videos",
		"dailymotion hd download",
		"dailymotion downloader online",
	].join(", "),
	openGraph: {
		title: "Dailymotion Video Downloader - Save HD Videos Free",
		description:
			"⚡ Download Dailymotion videos in HD MP4 instantly. Free, no account needed, no watermarks.",
		url: "https://30tools.com/dailymotion-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Dailymotion Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Dailymotion Video Downloader (2026)",
		description:
			"⚡ Download Dailymotion videos in HD MP4 for free. No login, no software needed.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/dailymotion-video-downloader" },
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
		name: "Dailymotion Video Downloader",
		alternateName: ["Dailymotion to MP4", "Save Dailymotion HD"],
		description:
			"Free online tool to download Dailymotion videos in HD MP4 format.",
		url: "https://30tools.com/dailymotion-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Dailymotion in HD MP4",
			"No account required",
			"Free to use",
			"Works on all devices",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Dailymotion Videos",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Video URL",
				text: "Open the Dailymotion video. Click the Share button and copy the URL.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Paste the copied URL into the 30tools Dailymotion Downloader input box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download",
				text: "Select your preferred quality and click Download to save the MP4 file to your device.",
			},
		],
	},
};

export default function DailymotionVideoDownloaderPage() {
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
								Dailymotion Video Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Dailymotion Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download Dailymotion videos in HD MP4 for free. Paste any
							Dailymotion link and save it to your device in seconds. No
							watermarks, no login required.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎥 HD MP4</span>
							<span>🚫 No Watermarks</span>
							<span>📱 All Devices</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Dailymotion Video Downloader" />
					</div>

					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Use Our Dailymotion Downloader?
						</h2>
						<p className="text-muted-foreground mb-8">
							Dailymotion hosts millions of videos across news, entertainment,
							sports, and music. While Dailymotion offers an app, it doesn't
							offer a built-in download feature for most content. Our{" "}
							<strong>Dailymotion Video Downloader</strong> lets you save any
							public video as a clean HD MP4 file with no watermarks.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Save News & Sports
								</h3>
								<p className="text-muted-foreground m-0">
									Download breaking news clips, sports highlights, and
									documentary segments to watch offline anytime.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">HD Quality</h3>
								<p className="text-muted-foreground m-0">
									Extract up to 1080p Full HD quality directly from
									Dailymotion's servers. No re-encoding, no quality loss.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Software Needed
								</h3>
								<p className="text-muted-foreground m-0">
									100% web-based. Just paste and download. Works on any browser
									on PC, Mac, Android, or iPhone.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download Dailymotion Videos
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy Video URL</h3>
								<p className="text-muted-foreground text-sm">
									Open Dailymotion and find the video you want. Click Share and
									copy the video URL.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste into 30tools</h3>
								<p className="text-muted-foreground text-sm">
									Paste the copied Dailymotion URL into the input box on this
									page and press Enter.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Download MP4</h3>
								<p className="text-muted-foreground text-sm">
									Choose your preferred quality and click Download to save the
									video file directly.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Dailymotion Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is it free to download Dailymotion videos?
								</h3>
								<p className="text-muted-foreground">
									Yes! 30tools is 100% free. No signup, no subscription, no
									hidden fees. Just paste, click, and download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What video quality can I download from Dailymotion?
								</h3>
								<p className="text-muted-foreground">
									Quality depends on what the uploader published. You can
									typically download in 360p, 480p, 720p HD, or 1080p Full HD
									depending on the video's original quality.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Does this work on mobile phones?
								</h3>
								<p className="text-muted-foreground">
									Yes! Open your mobile browser (Chrome on Android or Safari on
									iPhone), navigate to 30tools, paste the Dailymotion link, and
									download the video directly to your phone.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Dailymotion videos in MP3 format?
								</h3>
								<p className="text-muted-foreground">
									Our tool primarily extracts the MP4 video. For MP3 extraction
									specifically, you would need to use a video to MP3 converter
									after downloading.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
