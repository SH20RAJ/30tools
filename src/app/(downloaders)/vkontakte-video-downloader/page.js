import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("vkontakte-video-downloader", "downloaders");

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

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebApplication",
	name: "VK Video Downloader",
	alternateName: ["VKontakte Downloader", "VK to MP4"],
	description:
		"Free online tool to download VK (VKontakte) videos in HD quality as MP4 without login.",
	url: "https://30tools.com/vkontakte-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download VK videos as HD MP4",
		"No VK account required",
		"No watermarks",
		"Works on all devices",
	],
};

export default async function VkontakteVideoDownloaderPage({ searchParams }) {
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
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
								VK Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							VK Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download VKontakte (VK) videos in HD MP4 for free. Save movies,
							music clips, and media from Europe's largest social network. No VK
							account required.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇷🇺 VKontakte</span>
							<span>📹 HD MP4</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="VK Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Download VK Videos Without an Account
						</h2>
						<p className="text-muted-foreground mb-8">
							VKontakte (VK) is the largest social network in Russia and Eastern
							Europe with over 100 million active users. VK hosts a massive
							library of movies, music videos, TV shows, and user-generated
							content. Our <strong>VK Video Downloader</strong> lets you save
							any public VK video as an HD MP4 without needing a VK account.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Movies & Series</h3>
								<p className="text-muted-foreground m-0">
									VK hosts full movies and TV series. Download public video
									content to watch offline in HD quality.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Music Videos</h3>
								<p className="text-muted-foreground m-0">
									Save Russian and international music videos from VK's vast
									community-uploaded music video library.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">No VK Account</h3>
								<p className="text-muted-foreground m-0">
									Our tool accesses public VK video links without requiring a
									VKontakte login or profile registration.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							VK Video Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the VK video URL?
								</h3>
								<p className="text-muted-foreground">
									Open VK.com, navigate to the video, right-click and select
									"Copy video URL" or copy the address bar URL. Paste it into
									the 30tools downloader and click Download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download VK videos without a Russian SIM card or VPN?
								</h3>
								<p className="text-muted-foreground">
									Yes. Our tool is server-side and operates independently of
									your location or Roskomnadzor restrictions. You can access and
									download any public VK video from anywhere in the world.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
