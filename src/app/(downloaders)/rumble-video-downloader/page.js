import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("rumble-video-downloader", "downloaders");

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
		name: "Rumble Video Downloader",
		alternateName: ["Rumble to MP4", "Save Rumble HD", "Rumble Clip Saver"],
		description:
			"Free online tool to download Rumble videos in 4K, HD 1080p as MP4 files without login.",
		url: "https://30tools.com/rumble-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Rumble in 4K and HD 1080p",
			"Save Rumble clips as MP4",
			"No account required",
			"Works on all devices",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Rumble Videos",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Rumble URL",
				text: "Go to Rumble.com and open the video you want. Copy the video URL from the address bar.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Paste the URL into the 30tools Rumble Video Downloader input box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download HD MP4",
				text: "Choose your preferred quality (4K, 1080p, 720p) and click Download to save the MP4 file.",
			},
		],
	},
};

export default async function RumbleVideoDownloaderPage({ searchParams }) {
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
								Rumble Video Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Rumble Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Rumble videos offline in 4K, 1080p HD, or standard quality
							for free. No login, no software — just paste the Rumble link and
							download the MP4 instantly.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎬 4K & 1080p</span>
							<span>📹 MP4 Format</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Rumble Video Downloader" />
					</div>

					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Save Rumble Videos Offline?
						</h2>
						<p className="text-muted-foreground mb-8">
							Rumble is one of the fastest-growing video platforms, hosting
							news, political commentary, entertainment, and sports content.
							Unlike YouTube, Rumble doesn't offer a native download option. Our{" "}
							<strong>Rumble Video Downloader</strong> lets you save any public
							Rumble video as an MP4 file — perfect for sharing, archiving, or
							offline viewing.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									News & Commentary
								</h3>
								<p className="text-muted-foreground m-0">
									Save breaking news clips, political analysis, and exclusive
									interviews hosted on Rumble before they are removed or edited.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									4K Quality Support
								</h3>
								<p className="text-muted-foreground m-0">
									Rumble streams at up to 4K resolution. Our downloader captures
									the highest quality stream available for the video you're
									saving.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Clips for Sharing
								</h3>
								<p className="text-muted-foreground m-0">
									Download Rumble clips to share across messaging apps, emails,
									or archive them in your personal video library.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download Rumble Videos
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy Rumble URL</h3>
								<p className="text-muted-foreground text-sm">
									Open rumble.com and navigate to the video you want. Copy the
									full URL from your browser's address bar.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste into 30tools</h3>
								<p className="text-muted-foreground text-sm">
									Paste the URL into the Rumble Downloader input box above and
									press Download. Available qualities will appear instantly.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">
									Select Quality & Save
								</h3>
								<p className="text-muted-foreground text-sm">
									Choose 4K, 1080p, 720p, or 360p. Click the download link to
									save the MP4 file to your device.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Rumble Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Rumble videos in 4K?
								</h3>
								<p className="text-muted-foreground">
									Yes, if the video was uploaded in 4K resolution. Our tool
									automatically detects and provides all available quality
									options including 4K (2160p), 1080p, 720p, and 360p where
									available.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Does this work with all Rumble videos?
								</h3>
								<p className="text-muted-foreground">
									It works with all publicly available Rumble videos. If a video
									is subscription-only or geo-restricted, it may not be
									downloadable via our tool.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Is there a file size limit for Rumble downloads?
								</h3>
								<p className="text-muted-foreground">
									There is no file size restriction on our end. However, very
									long videos in high quality (e.g., 4K livestream recordings)
									may take longer to download depending on your internet speed.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Do I need to install any software or browser extension?
								</h3>
								<p className="text-muted-foreground">
									No. 30tools is entirely web-based. Just visit the page in any
									browser on any device and paste your Rumble URL. No
									extensions, no apps, no downloads of any software.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
