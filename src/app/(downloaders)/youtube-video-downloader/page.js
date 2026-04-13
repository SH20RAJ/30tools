import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Free YouTube Video Downloader Online - No Signup | 30tools",
  description: "Free YouTube Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your bro",
  keywords: ["youtube video downloader","youtube video downloader free","youtube video downloader online","youtube video downloader tool"],
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
		name: "YouTube Video Downloader",
		alternateName: [
			"YouTube to MP4 Converter",
			"YT Saver",
			"YouTube Shorts Downloader",
		],
		description:
			"Download YouTube videos quickly in multiple formats and resolutions (MP4, MP3). Free, fast, secure YouTube downloader.",
		url: "https://30tools.com/youtube-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download YouTube videos to MP4",
			"Convert YouTube videos to MP3",
			"Download YouTube Shorts",
			"No software installation",
			"Free to use",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download YouTube Videos to MP4 & MP3",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy the YouTube Video Link",
				text: "Open YouTube on your app or browser, find the video or Short, click the 'Share' button, and select 'Copy Link'.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL into 30tools",
				text: "Head over to the 30tools YouTube Downloader and paste the copied URL into the search box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Select Format and Download",
				text: "Choose your desired format (MP4 video or MP3 audio) and quality, then click the Download button to save it to your device.",
			},
		],
	},
};

export default async function YouTubeVideoDownloaderPage({ searchParams }) {
	const _params = await searchParams;
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
								YouTube Video Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							YouTube Video Downloader 4K
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download YouTube videos and Shorts quickly in HD MP4 or convert to
							MP3 audio. Free, fast, secure, no signup, and fully browser-based.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>⚡ Fast MP4/MP3</span>
							<span>🎥 HD Quality</span>
							<span>📱 Supports Shorts</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="YouTube Video Downloader" />
					</div>

					{/* SEO Content: Why Use Us */}
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Use the 30tools Free YouTube Downloader?
						</h2>
						<p className="text-muted-foreground mb-8">
							Watching YouTube videos offline shouldn't require premium
							subscriptions or shady software downloads. The 30tools YouTube
							Video Downloader is a completely free, browser-based tool that
							lets you convert and save your favorite videos directly to your
							PC, iPhone, or Android device. Whether you want an HD MP4 for a
							presentation or an MP3 audio rip of a lecture, we provide a clean,
							secure, and lightning-fast extraction process.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									YouTube to MP4 & MP3
								</h3>
								<p className="text-muted-foreground m-0">
									Extract pure audio formats or high-definition video files. We
									support versatile formats suited for all devices and editing
									workflows.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Supports YouTube Shorts
								</h3>
								<p className="text-muted-foreground m-0">
									Easily grab short-form vertical content just by pasting the
									Shorts link. Great for reacting to trends or offline viewing.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">No App Required</h3>
								<p className="text-muted-foreground m-0">
									Steer clear of malware and shady APKs. Our tool runs directly
									in your web browser (Chrome, Safari, Firefox), 100% securely.
								</p>
							</div>
						</div>
					</section>

					{/* How to Download Steps */}
					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download YouTube Videos & Shorts
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy the Video URL</h3>
								<p className="text-muted-foreground">
									Go to YouTube, find the video or Short, click the 'Share'
									arrow below the player, and hit 'Copy'.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste into 30tools</h3>
								<p className="text-muted-foreground">
									Navigate back to the 30tools YouTube Downloader and paste your
									link into the top search bar.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Choose Format & Save</h3>
								<p className="text-muted-foreground">
									Select between MP4 (video) or MP3 (audio) and choose your
									quality settings. Click download to save!
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					{/* FAQs */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							YouTube Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download YouTube videos to MP3 audio?
								</h3>
								<p className="text-muted-foreground">
									Yes! Our downloader functions as an MP3 converter as well.
									Simply paste the YouTube link and select MP3 as your preferred
									output format before initiating the download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is it legal to download YouTube videos?
								</h3>
								<p className="text-muted-foreground">
									Downloading YouTube videos for personal, offline viewing is
									generally tolerated but goes against YouTube's terms of
									service. However, downloading copyright-free material,
									Creative Commons videos, or your own uploaded content is
									entirely legal. You should never redistribute copyrighted
									materials.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Are there any limits to how many videos I can download?
								</h3>
								<p className="text-muted-foreground">
									No, 30tools does not put arbitrary limits on your usage. You
									can convert and download as many YouTube videos, Shorts, and
									MP3 files as you want for free.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download YouTube Shorts?
								</h3>
								<p className="text-muted-foreground">
									Absolutely. YouTube Shorts use the same link architecture.
									Just copy the Short's link, paste it into our tool, and save
									it as an MP4 directly to your smartphone or desktop.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Do I need to install any software or extensions?
								</h3>
								<p className="text-muted-foreground">
									No, our YouTube downloader is 100% web-based. You don't need
									to install any browser extensions (which can be risky) or
									desktop software. It works instantly on Chrome, Safari,
									Firefox, and Edge.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What happens if the downloaded video has no sound?
								</h3>
								<p className="text-muted-foreground">
									In rare cases with ultra-high-definition downloads (like some
									4K formats), YouTube separates the audio and video tracks.
									Ensure you are selecting a standard MP4 output or using our
									default settings which automatically merge the streams for
									you.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
