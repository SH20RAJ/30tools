import Link from "next/link";
import TwitterDownloader from "@/components/tools/downloaders/TwitterDownloader";

export const metadata = {
  title: "Free Twitter/X Video Downloader Online - No Signup | 30tools",
  description: "Free Twitter/X Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your b",
  keywords: ["twitter/x video downloader","twitter/x video downloader free","twitter/x video downloader online","twitter/x video downloader tool"],
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

const jsonLdSchemas = {
	webApp: {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "Twitter Video Downloader",
		alternateName: [
			"X Video Downloader",
			"Twitter GIF Saver",
			"Tweet Media Downloader",
		],
		description:
			"Free online tool to download videos and GIFs from Twitter (X) in HD quality MP4.",
		url: "https://30tools.com/twitter-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Twitter videos in HD",
			"Save Twitter GIFs as MP4",
			"Works on X.com links and Twitter.com links",
			"No software installation needed",
			"Mobile friendly (iOS/Android)",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Twitter (X) Videos",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Link",
				text: "Click the Share icon on the tweet containing the video or GIF and select 'Copy Link'.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Navigate to the 30tools Twitter Downloader and paste the copied link into the input box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download",
				text: "Select your preferred video quality and click the download button to save to your device.",
			},
		],
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

export default async function TwitterVideoDownloaderPage({ searchParams }) {
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
								Twitter Video Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Twitter Video Downloader Free
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download videos and GIFs from Twitter (X) directly to your PC or
							mobile device. Free, secure, high-definition downloads with no
							watermark.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🐦 Save Tweets</span>
							<span>🎥 HD MP4 Format</span>
							<span>⚡ Zero Ads/Logs</span>
							<span>📱 iOS & Android</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<TwitterDownloader />
					</div>

					{/* Deep Dive: Why Use Our Downloader */}
					<section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Use 30tools to Download Twitter Videos?
						</h2>
						<p className="text-muted-foreground mb-8">
							Twitter (now X) doesn't have a built-in "save video" button. When
							you see a breaking news clip, a funny meme, or a viral GIF, saving
							it locally requires a third-party tool. The 30tools{" "}
							<strong>Twitter Video Downloader</strong> bridges that gap by
							providing a fast, ad-free web interface to extract high-quality
							MP4 files directly from tweet URLs. It's completely safe, doesn't
							require any invasive browser extensions, and respects user
							privacy.
						</p>

						<div className="grid md:grid-cols-2 gap-8 mt-10">
							<div className="bg-secondary dark:bg-slate-900/50 p-8 rounded-2xl border border-border dark:border-slate-800">
								<h3 className="text-xl font-bold mb-4 mt-0">
									Download Twitter GIFs
								</h3>
								<p className="text-muted-foreground mb-4 leading-relaxed">
									Did you know Twitter converts uploaded GIFs to looping videos?
									Our tool reverse-engineers this, allowing you to{" "}
									<strong>download Twitter GIFs</strong> as universally
									compatible MP4 files so you can share them natively in
									WhatsApp, Discord, or iMessage.
								</p>
								<span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
									GIF to MP4
								</span>
							</div>
							<div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50">
								<h3 className="text-xl font-bold mb-4 mt-0">
									X Video Downloader (HD)
								</h3>
								<p className="text-muted-foreground mb-4 leading-relaxed">
									Whether the link says <code>twitter.com</code> or{" "}
									<code>x.com</code>, our <strong>X video downloader</strong>{" "}
									engine handles both effortlessly. Choose between multiple
									resolutions to save bandwidth or archive the highest available
									quality (up to 1080p).
								</p>
								<span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
									X.com Support
								</span>
							</div>
						</div>
					</section>

					{/* How To Section */}
					<section className="mb-20 text-center">
						<h2 className="text-3xl font-bold mb-12">
							How to Save Twitter (X) Videos to Your Phone or PC
						</h2>
						<div className="flex flex-wrap justify-center gap-8">
							<div className="w-full md:w-64 p-6 bg-card rounded-xl border border-border shadow-sm">
								<div className="text-4xl mb-4">🔗</div>
								<h3 className="font-bold mb-2">1. Copy Link</h3>
								<p className="text-sm text-muted-foreground">
									Tap the "Share" icon beneath the tweet and select "Copy Link".
								</p>
							</div>
							<div className="w-full md:w-64 p-6 bg-card rounded-xl border border-border shadow-sm">
								<div className="text-4xl mb-4">📋</div>
								<h3 className="font-bold mb-2">2. Paste URL</h3>
								<p className="text-sm text-muted-foreground">
									Paste the copied URL into the 30tools downloader box above.
								</p>
							</div>
							<div className="w-full md:w-64 p-6 bg-card rounded-xl border border-border shadow-sm">
								<div className="text-4xl mb-4">⬇️</div>
								<h3 className="font-bold mb-2">3. Download</h3>
								<p className="text-sm text-muted-foreground">
									Choose your HD MP4 quality and hit download to save locally.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					{/* FAQs */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Twitter Video Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is it legal to download videos from Twitter?
								</h3>
								<p className="text-muted-foreground">
									Downloading Twitter videos for personal, offline viewing is
									generally considered acceptable. However, reproducing,
									distributing, or monetizing copyrighted content without the
									original creator's permission is discouraged. Always respect
									copyrights.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download videos from a private Twitter account?
								</h3>
								<p className="text-muted-foreground">
									No. To respect user privacy and data protection policies, our
									downloader can only access and fetch media from public tweets.
									Private X accounts are completely restricted.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Where do Twitter videos save on my iPhone/Android?
								</h3>
								<p className="text-muted-foreground">
									On iOS, downloaded files typically save to your "Files" app or
									Safari downloads folder, though you can save them directly to
									Photos. On Android devices, check your "Downloads" folder or
									gallery.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Why isn't the downloader working on my link?
								</h3>
								<p className="text-muted-foreground">
									Ensure the link you copied is a direct link to the specific
									tweet containing the video (e.g.,{" "}
									<code>https://x.com/user/status/123456...</code>). If the
									video is a quote-tweet, try grabbing the link to the original
									uploader's tweet instead.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Do I need a browser extension to save Twitter GIFs?
								</h3>
								<p className="text-muted-foreground">
									Not at all! Our tool is entirely web-based. You don't need to
									install any potentially unsafe Chrome extensions or dedicated
									applications to download Twitter media.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-16 border-t border-border pt-12">
						<h2 className="text-3xl font-bold text-center mb-10">
							Related Social Downloaders
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
							{[
								{
									href: "/facebook-video-downloader",
									icon: "📘",
									title: "Facebook Downloader",
									desc: "Download HD FB clips",
								},
								{
									href: "/instagram-videos-downloader",
									icon: "📸",
									title: "Instagram Downloader",
									desc: "Save IG Reels & posts",
								},
								{
									href: "/tiktok-videos-downloader",
									icon: "🎵",
									title: "TikTok Downloader",
									desc: "Save TikToks without watermark",
								},
								{
									href: "/reddit-video-downloader",
									icon: "🤖",
									title: "Reddit Downloader",
									desc: "Download Reddit videos with audio",
								},
							].map((tool, i) => (
								<Link
									key={i}
									href={tool.href}
									className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
								>
									<div className="flex items-center gap-3 mb-2">
										<span className="text-2xl">{tool.icon}</span>
										<h3 className="font-semibold group-hover:text-primary transition-colors">
											{tool.title}
										</h3>
									</div>
									<p className="text-sm text-muted-foreground">{tool.desc}</p>
								</Link>
							))}
						</div>
					</section>
				</div>
			</div>
			<script
				dangerouslySetInnerHTML={{
					__html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(
						5,
					),
				}}
			/>
		</>
	);
}
