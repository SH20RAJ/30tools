import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("ninegag-video-downloader", "downloaders");

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
	name: "9GAG Video Downloader",
	alternateName: ["9GAG to MP4", "9GAG GIF Saver"],
	description:
		"Free online tool to download 9GAG videos and GIFs as MP4 or GIF files.",
	url: "https://30tools.com/ninegag-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download 9GAG videos as MP4",
		"Save 9GAG GIFs",
		"No account required",
	],
};

export default async function NinegagVideoDownloaderPage({ searchParams }) {
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
								9GAG Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							9GAG Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save your favourite 9GAG memes, GIFs, and video posts directly to
							your device for free. No login, no watermarks. Works on Android,
							iPhone, and desktop.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>😂 Memes & GIFs</span>
							<span>📹 MP4 Videos</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="9GAG Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">Why Save 9GAG Videos?</h2>
						<p className="text-muted-foreground mb-8">
							9GAG is one of the world's most popular meme platforms, hosting
							millions of funny videos, GIFs, and images. 9GAG doesn't offer a
							built-in download button. Our{" "}
							<strong>9GAG Video Downloader</strong> lets you save any public
							9GAG post as an MP4 or GIF to share with friends offline.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Share the Funny</h3>
								<p className="text-muted-foreground m-0">
									Save 9GAG memes and viral videos to share in group chats on
									WhatsApp, Telegram, and Discord — no internet needed when
									sharing.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									GIF & Video Support
								</h3>
								<p className="text-muted-foreground m-0">
									Download 9GAG animated GIFs and short funny videos in their
									original MP4 or GIF format for perfect quality.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Build your Meme Library
								</h3>
								<p className="text-muted-foreground m-0">
									Create your own offline meme collection from 9GAG's trending
									posts to use as reaction GIFs in chats.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							9GAG Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the 9GAG post URL?
								</h3>
								<p className="text-muted-foreground">
									Open 9GAG and find the video or GIF. Tap the Share icon and
									copy the post link (e.g. 9gag.com/gag/aXXXXXX). Paste it into
									the downloader above.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Will the downloaded 9GAG video have a watermark?
								</h3>
								<p className="text-muted-foreground">
									No. Our tool downloads the original file from 9GAG's servers.
									No watermarks are added by 30tools.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download GIFs from 9GAG as GIF format?
								</h3>
								<p className="text-muted-foreground">
									9GAG serves most animated content as MP4 for efficiency. You
									may download the MP4 and convert it to GIF using a converter
									if needed.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
