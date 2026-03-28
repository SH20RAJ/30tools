import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Odnoklassniki Video Downloader - Save OK.Ru Videos Free | 30tools",
	description:
		"Download Odnoklassniki (OK.ru) videos in HD for free. Save Russian social network videos as MP4 without login. Works on all devices.",
	keywords: [
		"odnoklassniki video downloader",
		"ok.ru video downloader",
		"download ok.ru video",
		"odnoklassniki to mp4",
		"save odnoklassniki video",
		"russian social network video download",
		"ok ru downloader",
		"odnoklassniki hd download",
	].join(", "),
	openGraph: {
		title: "Odnoklassniki Video Downloader - Save OK.ru Videos Free",
		description:
			"⚡ Download OK.ru (Odnoklassniki) videos as HD MP4 for free. No login required.",
		url: "https://30tools.com/odnoklassniki-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Odnoklassniki Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "OK.ru Video Downloader (2026) - HD Free",
		description: "⚡ Save OK.ru Odnoklassniki videos offline. Free, no login.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: {
		canonical: "https://30tools.com/odnoklassniki-video-downloader",
	},
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
	name: "Odnoklassniki Video Downloader",
	alternateName: ["OK.ru Downloader", "Save OK.ru Video"],
	description:
		"Free online tool to download OK.ru (Odnoklassniki) videos as HD MP4 files.",
	url: "https://30tools.com/odnoklassniki-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function OdnoklassnikiVideoDownloaderPage({ searchParams }) {
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
								OK.ru Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Odnoklassniki (OK.ru) Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download OK.ru (Odnoklassniki) videos in HD MP4 for free. Save
							Russian social network videos, movies, and entertainment content
							offline. No login required.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇷🇺 Russian Social</span>
							<span>📹 HD MP4</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="OK.ru Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Download OK.ru Videos Without an Account
						</h2>
						<p className="text-muted-foreground mb-8">
							Odnoklassniki (OK.ru) is Russia's second-largest social network —
							popular with Russian-speaking communities worldwide for sharing
							family videos, music, movies, and classic TV content. Our tool
							lets you save any public OK.ru video as an HD MP4 without needing
							an Odnoklassniki account.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Family Videos</h3>
								<p className="text-muted-foreground m-0">
									Save family memories, celebrations, and personal videos shared
									on OK.ru by relatives abroad for permanent offline keeping.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Russian Entertainment
								</h3>
								<p className="text-muted-foreground m-0">
									Download classic Russian movies, folk music, comedy shows, and
									entertainment content from OK.ru's enormous video library.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Account Needed
								</h3>
								<p className="text-muted-foreground m-0">
									Access and download public OK.ru videos without registering
									for an Odnoklassniki account. Just paste and download.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							OK.ru Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the OK.ru video URL?
								</h3>
								<p className="text-muted-foreground">
									Go to ok.ru, find the video, and copy the URL from your
									browser's address bar. Paste it into the 30tools downloader
									and click Download.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
