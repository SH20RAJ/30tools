import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("m3u8-downloader", "downloaders");

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
		name: "M3U8 HLS Downloader",
		alternateName: ["M3U8 to MP4 Converter", "HLS Stream Downloader"],
		description:
			"Free online tool to download and convert M3U8 (HLS) streams to MP4. No software installation required.",
		url: "https://30tools.com/m3u8-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download M3U8 HLS streams",
			"Convert to MP4 format",
			"No software required",
			"Works in browser",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download an M3U8 HLS Stream as MP4",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Get M3U8 URL",
				text: "Right-click the video player on any website, open browser DevTools Network tab, filter for .m3u8, and copy the M3U8 playlist URL.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Paste the M3U8 stream URL into the 30tools M3U8 Downloader.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Convert and Download",
				text: "Click Download. Our tool fetches all HLS segments and merges them into a single MP4 file for download.",
			},
		],
	},
};

export default async function M3u8DownloaderPage({ searchParams }) {
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
							<li className="text-foreground font-medium">M3U8 Downloader</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							M3U8 / HLS Stream Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download M3U8 HLS (HTTP Live Streaming) streams and save them as
							MP4 files online for free. No FFmpeg installation, no software.
							Works directly in your browser.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>📡 HLS Streams</span>
							<span>🔄 M3U8 to MP4</span>
							<span>💻 Browser-Based</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="M3U8 Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							What is M3U8 and Why Download It?
						</h2>
						<p className="text-muted-foreground mb-8">
							M3U8 is a UTF-8 encoded text file format used for HLS (HTTP Live
							Streaming) — the most common video streaming standard used by
							platforms like Apple TV, Twitch, and thousands of video websites.
							An M3U8 file is a playlist pointing to video segment files (.ts).
							Our <strong>M3U8 Downloader</strong> fetches all segments and
							assembles them into a single playable MP4 without needing any
							video software like FFmpeg or VLC.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Software Needed
								</h3>
								<p className="text-muted-foreground m-0">
									Our online M3U8 downloader works entirely in your browser. No
									FFmpeg, VLC, or other video software installation needed.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Auto Segment Merge
								</h3>
								<p className="text-muted-foreground m-0">
									Our tool automatically fetches all .ts video segments from the
									M3U8 playlist and merges them into a single continuous MP4
									file.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Universal Format
								</h3>
								<p className="text-muted-foreground m-0">
									Works with M3U8 streams from any website or platform. If you
									have the .m3u8 URL, our tool can download it.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							M3U8 Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I find the M3U8 URL on a webpage?
								</h3>
								<p className="text-muted-foreground">
									Open your browser DevTools (F12 or Cmd+Shift+I). Go to the
									Network tab. Play the video. Filter the network requests by
									"m3u8". The M3U8 playlist URL will appear in the request list
									— copy it and paste into our downloader.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download encrypted M3U8 streams?
								</h3>
								<p className="text-muted-foreground">
									M3U8 streams encrypted with AES-128 require the decryption
									key, which our tool fetches automatically if it is referenced
									in the playlist. DRM-protected streams using Widevine or
									FairPlay cannot be downloaded.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What is the difference between M3U8 and MP4?
								</h3>
								<p className="text-muted-foreground">
									M3U8 is a playlist format splitting the video into many small
									.ts segments for streaming. MP4 is a single complete video
									file for offline playback. Our downloader converts the
									segmented M3U8 stream into a single MP4 file you can store and
									play anywhere.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
