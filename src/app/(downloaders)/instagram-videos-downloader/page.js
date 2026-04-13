import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Free Instagram Videos Downloader Online - No Signup | 30tools",
	description:
		"Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now! 100% free, no.",
	keywords: [
		"instagram videos downloader",
		"instagram",
		"videos",
		"downloader",
		"instagram-videos-downloader",
		"downloaders",
		"downloaders tool",
		"free",
		"online",
		"tool",
		"30tools",
		"no signup",
		"fast",
		"secure",
		"browser-based",
		"instant",
		"easy",
	],
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
		name: "Instagram Video Downloader",
		alternateName: [
			"IG Downloader",
			"Insta Video Saver",
			"Instagram Reels Downloader",
		],
		description:
			"Download Instagram Videos, Reels, Photos, IGTV and Carousel in HD. Save your favorite IG content securely.",
		url: "https://30tools.com/instagram-videos-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Instagram Reels & IGTV",
			"Save Instagram Videos in HD",
			"Download Instagram Photos & Carousels",
			"No login required",
			"Free to use",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Instagram Videos and Reels",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy the Instagram Link",
				text: "Open the Instagram app or website, find the video or Reel you want to save, tap the Share icon (paper airplane), and select 'Copy Link'.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste into the Downloader",
				text: "Go to the 30tools Instagram Downloader and paste the copied link into the search box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download Media",
				text: "Click the Download button and pick your preferred quality to save the MP4 video directly to your device.",
			},
		],
	},
};

export default async function InstagramVideosDownloaderPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
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
								Instagram Video Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Instagram Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download Instagram Videos, Reels, Photos, IGTV, and Carousel posts
							in HD. Save your favorite IG content securely to your phone or PC.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>📱 Reels & IGTV</span>
							<span>⚡ Fast</span>
							<span>🎥 HD MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Instagram Video Downloader" />
					</div>

					{/* SEO Content: Why Use Us */}
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Use the 30tools Instagram Video Downloader?
						</h2>
						<p className="text-muted-foreground mb-8">
							Instagram does not provide a built-in feature to download videos
							or photos to your local storage. Our online Instagram Downloader
							fills that gap. Whether you want to save a hilarious Reel, an
							educational IGTV tutorial, or a multi-photo Carousel, 30tools lets
							you effortlessly extract the media in crisp, high-definition MP4
							or JPG formats without needing to log in or install an app.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Download Reels & IGTV
								</h3>
								<p className="text-muted-foreground m-0">
									Easily save longer IGTV broadcasts or short-form Reels
									directly to your camera roll or downloads folder.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Login Required
								</h3>
								<p className="text-muted-foreground m-0">
									We never ask for your Instagram username or password. Download
									public posts securely and anonymously.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Universal Compatibility
								</h3>
								<p className="text-muted-foreground m-0">
									Works flawlessly on iPhones (iOS), Android phones, iPads,
									Macbooks, and Windows PCs right from the browser.
								</p>
							</div>
						</div>
					</section>

					{/* How to Download Steps */}
					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download Instagram Videos & Reels
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy the Post Link</h3>
								<p className="text-muted-foreground">
									Open the Instagram app, find the video or Reel, tap the Share
									icon (or the three dots), and select 'Copy Link'.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste the URL</h3>
								<p className="text-muted-foreground">
									Return to the 30tools Instagram Downloader and paste the
									copied link into the input box at the top of the page.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Save Content</h3>
								<p className="text-muted-foreground">
									Hit the 'Download' button to process the link. Once ready,
									save the MP4 video or JPG image straight to your device.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					{/* FAQs */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Instagram Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Instagram Reels with this tool?
								</h3>
								<p className="text-muted-foreground">
									Yes! Our downloader fully supports Instagram Reels. Just copy
									the link of the Reel and paste it into our tool. It will
									extract the high-quality MP4 file for you.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Do I need to sign in to my Instagram account?
								</h3>
								<p className="text-muted-foreground">
									No, you do not need to log in to Instagram to use 30tools. You
									can download videos from public accounts completely
									anonymously without providing any credentials.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download videos from private Instagram accounts?
								</h3>
								<p className="text-muted-foreground">
									No. 30tools only allows you to download videos, photos, and
									Reels from public Instagram profiles. We respect user privacy
									and Instagram's security measures.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Will the original poster be notified if I download their
									video?
								</h3>
								<p className="text-muted-foreground">
									No, Instagram does not notify creators when someone downloads
									their content using a third-party tool like ours. Your
									activity is completely private.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is it safe and legal to use an Insta video saver?
								</h3>
								<p className="text-muted-foreground">
									Yes, our web-based tool is completely safe. We don't host
									malware or require software installation. Legally, downloading
									content for personal, offline viewing is generally acceptable,
									but you should not redistribute copyrighted content without
									permission.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Are there any limits on the number of Instagram videos I can
									download?
								</h3>
								<p className="text-muted-foreground">
									No, there are no limits! You can download as many Instagram
									Reels, IGTV videos, and carousel photos as you want,
									completely free of charge.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
