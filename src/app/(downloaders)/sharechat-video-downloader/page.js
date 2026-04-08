import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("sharechat-video-downloader", "downloaders");

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
	name: "ShareChat Video Downloader",
	alternateName: ["ShareChat to MP4", "Save ShareChat Video"],
	description:
		"Free online tool to download ShareChat videos in Hindi, Tamil, Telugu, and other Indian languages.",
	url: "https://30tools.com/sharechat-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download ShareChat videos as MP4",
		"Supports all Indian language content",
		"No watermarks",
		"No login required",
	],
};

export default async function ShareChatVideoDownloaderPage({ searchParams }) {
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
								ShareChat Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							ShareChat Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download ShareChat videos in Hindi, Tamil, Telugu, Marathi,
							Gujarati, and other Indian languages for free. Save funny posts,
							status videos, and reels as MP4.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇮🇳 All Indian Languages</span>
							<span>📱 Status Videos</span>
							<span>🚫 No Watermark</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="ShareChat Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							The Best ShareChat Downloader for Indian Content
						</h2>
						<p className="text-muted-foreground mb-8">
							ShareChat is India's largest Indian-language social platform with
							400+ million users across 15 languages. It's the go-to platform
							for vernacular content — festival greetings, funny videos,
							devotional content, and WhatsApp status videos. Our{" "}
							<strong>ShareChat Video Downloader</strong> lets you save all of
							it for free.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									WhatsApp Status Videos
								</h3>
								<p className="text-muted-foreground m-0">
									Save trending ShareChat WhatsApp status videos to set as your
									own status or share with friends and family.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									15+ Indian Languages
								</h3>
								<p className="text-muted-foreground m-0">
									Download content in Hindi, Tamil, Telugu, Kannada, Malayalam,
									Punjabi, Marathi, Bengali, Gujarati, and more.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Festival & Devotional
								</h3>
								<p className="text-muted-foreground m-0">
									Save festival greetings, devotional videos, and special
									occasion content to share with your community.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							ShareChat Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the ShareChat video link?
								</h3>
								<p className="text-muted-foreground">
									Open ShareChat and find the video. Tap the Share icon → Copy
									Link. Paste into the 30tools ShareChat Downloader and click
									Download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I use these videos as WhatsApp status?
								</h3>
								<p className="text-muted-foreground">
									Yes. Downloaded ShareChat videos can be set as WhatsApp or
									Instagram stories, or forwarded in group chats. Download and
									save to your device's gallery first.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
