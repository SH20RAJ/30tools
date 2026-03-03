import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title:
		"Pinterest GIF Downloader - Save Pinterest Animated GIFs Free | 30tools",
	description:
		"Download Pinterest animated GIFs for free. Save any Pinterest GIF pin to your device. No login required. Works on Android, iPhone, and PC instantly.",
	keywords: [
		"pinterest gif downloader",
		"download pinterest gif",
		"save pinterest animated gif",
		"pinterest gif saver",
		"pinterest gif download free",
		"how to download gif from pinterest",
		"pinterest animated image downloader",
		"pin gif download",
	].join(", "),
	openGraph: {
		title: "Pinterest GIF Downloader - Save Animated GIFs Free",
		description:
			"⚡ Download Pinterest GIF pins as animated GIF files. Free, instant, no login.",
		url: "https://30tools.com/pinterest-gif-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Pinterest GIF Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Pinterest GIF Downloader (2026) - Free",
		description: "⚡ Save Pinterest animated GIFs offline. Free, instant.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/pinterest-gif-downloader" },
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

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebApplication",
	name: "Pinterest GIF Downloader",
	description: "Free online tool to download Pinterest animated GIF pins.",
	url: "https://30tools.com/pinterest-gif-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function PinterestGifDownloaderPage() {
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
								Pinterest GIF Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Pinterest GIF Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download animated GIF pins from Pinterest for free. Save funny
							animations, aesthetic loops, and DIY GIFs directly to your device
							without login or watermarks.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>📌 GIF Pins</span>
							<span>🎭 Animations</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Pinterest GIF Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Pinterest GIF Animations Quickly
						</h2>
						<p className="text-muted-foreground mb-8">
							Pinterest has millions of animated GIF pins — from clever visual
							metaphors and aesthetic loops to how-to animations and funny
							reaction GIFs. Right-clicking on Pinterest GIFs doesn't always
							work. Our <strong>Pinterest GIF Downloader</strong> makes saving
							them simple — just paste the pin URL and download the original
							GIF.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Aesthetic Loops</h3>
								<p className="text-muted-foreground m-0">
									Save mesmerizing aesthetic GIF loops and animations from
									Pinterest boards for use as screen savers, wallpapers, or
									social media content.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Reaction GIFs</h3>
								<p className="text-muted-foreground m-0">
									Download funny reaction GIFs discovered on Pinterest to use in
									messaging apps like WhatsApp, Discord, or Telegram.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Design Assets</h3>
								<p className="text-muted-foreground m-0">
									Save animated design assets and motion graphic loops from
									Pinterest for use in creative projects and presentations.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Pinterest GIF FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I download a GIF from Pinterest?
								</h3>
								<p className="text-muted-foreground">
									Open the Pinterest GIF pin and copy its URL. Paste into
									30tools and click Download. The animated GIF or its equivalent
									MP4 (for modern loop pins) will save to your device.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
