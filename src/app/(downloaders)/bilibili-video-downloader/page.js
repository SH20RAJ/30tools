import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("bilibili-video-downloader", "downloaders");

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
		name: "Bilibili Video Downloader",
		alternateName: [
			"Bilibili to MP4",
			"Save Bilibili 4K",
			"Bilibili Anime Downloader",
		],
		description:
			"Free online tool to download Bilibili videos in 4K, 1080p HD, or standard quality without a Bilibili Premium account.",
		url: "https://30tools.com/bilibili-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Bilibili videos in 4K and 1080p",
			"Save anime, dramas, and tutorials",
			"No Premium account required",
			"Works on all devices",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Bilibili Videos",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Bilibili URL",
				text: "Open bilibili.com and find the video you want. Copy the URL from the address bar.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Paste the Bilibili video URL into the 30tools Bilibili Downloader input box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download HD Video",
				text: "Select your preferred quality (4K, 1080p, 720p) and click Download to save the MP4 file.",
			},
		],
	},
};

export default async function BilibiliVideoDownloaderPage({ searchParams }) {
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
								Bilibili Video Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Bilibili Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download Bilibili videos including anime, tutorials, and
							entertainment in 4K, 1080p, or 720p HD for free. No Bilibili
							account or Premium subscription needed.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎌 Anime & Dramas</span>
							<span>🎬 4K & 1080p</span>
							<span>🚫 No Premium</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Bilibili Video Downloader" />
					</div>

					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Download Bilibili Videos?
						</h2>
						<p className="text-muted-foreground mb-8">
							Bilibili is China's premier video platform hosting anime
							simulcasts, gaming content, tutorials, and music videos.
							Bilibili's built-in download feature requires a paid Premium
							membership. Our <strong>Bilibili Video Downloader</strong>{" "}
							bypasses that restriction for publicly available content — letting
							you save in up to 4K quality for free.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Anime Offline</h3>
								<p className="text-muted-foreground m-0">
									Download simulcast anime episodes from Bilibili to watch on
									the go — no buffering, no internet required during playback.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">4K Quality</h3>
								<p className="text-muted-foreground m-0">
									Bilibili streams in up to 4K Ultra HD. Our downloader captures
									the highest quality stream available for the video you're
									saving.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">No Login Needed</h3>
								<p className="text-muted-foreground m-0">
									No Bilibili account required. Just paste the video URL and
									download. Works for publicly accessible Bilibili videos.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download Bilibili Videos
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Open Bilibili Video</h3>
								<p className="text-muted-foreground text-sm">
									Go to bilibili.com and open the video you want. Copy the URL
									from your browser's address bar (e.g.
									bilibili.com/video/BVxxxxxxx).
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste URL</h3>
								<p className="text-muted-foreground text-sm">
									Paste the Bilibili video URL into the downloader input above
									and press the Download button.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Select & Save</h3>
								<p className="text-muted-foreground text-sm">
									Choose your preferred quality — 4K, 1080p, 720p, or 360p — and
									click to save the MP4 file to your computer or phone.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Bilibili Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Bilibili videos without a Premium account?
								</h3>
								<p className="text-muted-foreground">
									Yes! Our tool works for publicly accessible Bilibili videos
									without requiring a Bilibili account or premium subscription.
									Videos locked to Bilibili Premium members only (marked 大会员)
									may not be downloadable.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Bilibili anime episodes?
								</h3>
								<p className="text-muted-foreground">
									Yes. Many anime simulcast episodes on Bilibili are publicly
									accessible. Paste the episode URL and download it as an MP4.
									Some licensed anime episodes may be region-locked or
									Premium-only.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What video qualities are available for Bilibili downloads?
								</h3>
								<p className="text-muted-foreground">
									Typically 360p, 720p HD, 1080p Full HD, and on some videos, 4K
									Ultra HD. Quality availability depends on what the uploader
									published and what your account access permits on Bilibili's
									side.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download videos from Bilibili in English?
								</h3>
								<p className="text-muted-foreground">
									Yes. Bilibili has English-language content and international
									sections. You can download any video regardless of language by
									pasting its URL into our downloader.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
