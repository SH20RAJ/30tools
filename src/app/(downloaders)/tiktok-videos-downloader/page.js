import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "TikTok Video Downloader No Watermark - Free HD Saver | 30tools",
	description:
		"Download TikTok videos without watermark in HD MP4. Fast, free online TikTok video downloader. Save clean, high-quality TikTok clips directly to your device.",
	keywords: [
		"tiktok video downloader no watermark",
		"download tiktok video free",
		"save tiktok mp4 hd",
		"tiktok saver without watermark",
		"download tiktok audio",
		"tiktok downloader 2026",
		"free online tiktok video downloader",
	].join(", "),
	openGraph: {
		title: "TikTok Video Downloader Without Watermark (2026)",
		description:
			"⚡ Download TikTok videos without watermark in HD MP4. Fast, free online TikTok video downloader.",
		url: "https://30tools.com/tiktok-videos-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "TikTok Video Downloader No Watermark",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "TikTok Video Downloader No Watermark (2026)",
		description:
			"⚡ Download TikTok videos without watermark in HD MP4. Fast, free online tool.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/tiktok-videos-downloader" },
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
		name: "TikTok Video Downloader",
		alternateName: ["TikTok Saver", "TikTok Downloader No Watermark"],
		description:
			"Download TikTok videos without watermark in HD MP4. Fast, free online TikTok video downloader.",
		url: "https://30tools.com/tiktok-videos-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download TikTok without watermark",
			"Save TikTok videos in HD MP4",
			"Fast download speed",
			"No registration required",
			"Free to use",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download TikTok Videos Without Watermark",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Get the TikTok Link",
				text: "Open the TikTok app or website. Find the video you want to save, click the 'Share' button, and tap 'Copy Link'.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste into Downloader",
				text: "Go to 30tools TikTok Video Downloader and paste the copied link into the search box at the top.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download Video",
				text: "Click the Download button and select the option to save the video without a watermark in HD MP4 format to your device.",
			},
		],
	},
};

export default function TiktokVideosDownloaderPage() {
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
								TikTok Video Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							TikTok Video Downloader Without Watermark
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Free online tool to download TikTok videos without the watermark.
							Save TikTok clips in HD MP4 format directly to your phone or
							computer.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>💧 No Watermark</span>
							<span>⚡ Fast & Secure</span>
							<span>🎥 HD MP4 Quality</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="TikTok Video Downloader No Watermark" />
					</div>

					{/* SEO Content: Why Use Us */}
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Use Our TikTok Video Downloader Without Watermark?
						</h2>
						<p className="text-muted-foreground mb-8">
							30tools is the ultimate solution for saving TikTok videos. When
							you download directly from the TikTok app, the videos are saved
							with a persistent watermark and creator logo. Our tool allows you
							to bypass this, providing a clean, watermark-free HD MP4 file that
							is perfect for reposting, saving offline, or creative inspiration.
							No app installation or account login is required!
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Watermark Download
								</h3>
								<p className="text-muted-foreground m-0">
									Save your favorite TikToks completely free of logos and
									watermarks for a clean viewing experience.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Compatible with All Devices
								</h3>
								<p className="text-muted-foreground m-0">
									Our web-based downloader works seamlessly on iPhone, Android,
									Mac, iPad, and Windows PC.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Fast, Free, & Secure
								</h3>
								<p className="text-muted-foreground m-0">
									Enjoy unlimited downloads with zero hidden fees. We prioritize
									your privacy and do not store downloaded videos.
								</p>
							</div>
						</div>
					</section>

					{/* How to Download Steps */}
					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download TikTok Videos Without Watermark
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Find TikTok Video</h3>
								<p className="text-muted-foreground">
									Open the TikTok app and find the video you wish to download.
									Tap the 'Share' icon (the arrow) and select 'Copy Link'.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste the URL</h3>
								<p className="text-muted-foreground">
									Navigate back to the 30tools TikTok Downloader and paste the
									copied link into the input box at the top of the screen.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Download HD MP4</h3>
								<p className="text-muted-foreground">
									Click the 'Download' button. Wait a moment for processing,
									then select the 'No Watermark' option to save the file.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					{/* FAQs */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							TikTok Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download TikTok videos without a watermark?
								</h3>
								<p className="text-muted-foreground">
									Yes! Removing the watermark is the primary feature of our
									TikTok downloader. We process the video link and provide you
									with a clean, high-quality MP4 file without the TikTok logo or
									creator tag.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is it free to use the 30tools TikTok Downloader?
								</h3>
								<p className="text-muted-foreground">
									Absolutely. Our tool is 100% free with unlimited downloads.
									There are no subscriptions, hidden charges, or premium tiers
									required to download videos.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Do I need to install any software or extensions?
								</h3>
								<p className="text-muted-foreground">
									No. Our TikTok video saver is entirely web-based. You do not
									need to install any software, browser extensions, or mobile
									apps. Simply use your browser.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download private TikTok videos?
								</h3>
								<p className="text-muted-foreground">
									No, you cannot download private TikTok videos. Our downloader
									can only access and process videos from public TikTok
									accounts.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is it legal to download TikTok videos?
								</h3>
								<p className="text-muted-foreground">
									Downloading videos for personal, offline viewing is generally
									acceptable. However, you should not edit, redistribute, or use
									copyrighted content for commercial purposes without the
									original creator's explicit permission.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Where do the videos save to my device?
								</h3>
								<p className="text-muted-foreground">
									This depends on your browser and device. On PC or Mac, they
									usually go to the "Downloads" folder. On an iPhone or Android
									phone, check your generic "Downloads" app or Files app.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
