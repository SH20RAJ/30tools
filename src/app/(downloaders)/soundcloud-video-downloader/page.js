import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("soundcloud-video-downloader", "downloaders");

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
		name: "SoundCloud Downloader",
		alternateName: ["SoundCloud to MP3", "SoundCloud Track Saver"],
		description:
			"Free online SoundCloud to MP3 converter. Download any public SoundCloud track for offline listening.",
		url: "https://30tools.com/soundcloud-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download SoundCloud tracks as MP3",
			"Download SoundCloud playlists",
			"No account required",
			"High quality audio output",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download SoundCloud Music",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Track URL",
				text: "Open SoundCloud and find the track you want to download. Copy the URL from the browser address bar or the share button.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Paste the SoundCloud track URL into the 30tools SoundCloud Downloader input box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download MP3",
				text: "Click the Download button to save the track as an MP3 audio file to your device.",
			},
		],
	},
};

export default async function SoundcloudDownloaderPage({ searchParams }) {
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
								SoundCloud Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							SoundCloud Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download any SoundCloud track to MP3 for free. The simplest online
							SoundCloud to MP3 converter — paste a link, click download, done.
							Works on all devices.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎵 MP3 Audio</span>
							<span>🎧 High Quality</span>
							<span>📋 Playlists Too</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="SoundCloud Downloader" />
					</div>

					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Download SoundCloud Music?
						</h2>
						<p className="text-muted-foreground mb-8">
							SoundCloud hosts over 400 million tracks from independent artists,
							DJs, podcasters, and major labels. While SoundCloud Go+ offers
							offline downloads, it's a paid subscription. Our free{" "}
							<strong>SoundCloud Downloader</strong> lets you save any public
							track or playlist as a high-quality MP3 — no subscription needed,
							no app required.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Discover & Keep Indie Music
								</h3>
								<p className="text-muted-foreground m-0">
									SoundCloud is home to unsigned artists you won't find on
									Spotify. Download their tracks to support and save their work
									before it disappears.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									DJ Sets & Remixes
								</h3>
								<p className="text-muted-foreground m-0">
									Save DJ mixes, bootleg remixes, and exclusive sets that exist
									only on SoundCloud. Perfect for long road trips and workouts
									with no internet.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Podcast Episodes
								</h3>
								<p className="text-muted-foreground m-0">
									Many podcasters host their episodes on SoundCloud. Download
									single episodes or entire series as MP3 files to listen
									offline at your own pace.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download SoundCloud Tracks
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy Track Link</h3>
								<p className="text-muted-foreground text-sm">
									Open SoundCloud and find the track you want. Click the Share
									button (⋯ menu) and copy the link.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste Link</h3>
								<p className="text-muted-foreground text-sm">
									Paste the SoundCloud URL into the downloader box above. Works
									with individual tracks, albums, and playlists.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Save as MP3</h3>
								<p className="text-muted-foreground text-sm">
									Click Download. The MP3 file will be saved directly to your
									phone's storage or computer downloads folder.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							SoundCloud Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I download SoundCloud music for free?
								</h3>
								<p className="text-muted-foreground">
									Copy the SoundCloud track URL, paste it into the 30tools
									SoundCloud Downloader, and click the Download button. The MP3
									file downloads directly to your device — it's completely free
									and no login is required.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download SoundCloud playlists?
								</h3>
								<p className="text-muted-foreground">
									Yes! Copy the SoundCloud playlist URL and paste it into the
									downloader. Our tool supports both individual tracks and full
									playlist URLs. Tracks in the playlist will be available for
									download individually.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									What audio quality is the downloaded MP3?
								</h3>
								<p className="text-muted-foreground">
									The quality depends on what the artist uploaded to SoundCloud.
									Most tracks are available at 128kbps. SoundCloud Go tracks
									(artist-enabled downloads) may be available at 320kbps in some
									cases.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download tracks that are set to private on SoundCloud?
								</h3>
								<p className="text-muted-foreground">
									No. Our tool can only download public SoundCloud tracks.
									Private tracks require authentication and are not accessible
									to third-party downloaders.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
