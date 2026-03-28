import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "PuhuTV Video Downloader - Save Turkish Series Free | 30tools",
	description:
		"Download PuhuTV Turkish series, shows, and clips for free. Save PuhuTV content as MP4 without login. Works on all devices. No subscription needed for public content.",
	keywords: [
		"puhutv video downloader",
		"download puhutv video",
		"puhutv downloader",
		"save puhutv series",
		"puhutv to mp4",
		"turkish series download puhutv",
		"puhutv show download",
		"how to download puhutv content",
	].join(", "),
	openGraph: {
		title: "PuhuTV Video Downloader - Save Turkish Shows Free",
		description:
			"⚡ Download PuhuTV Turkish streaming series and clips as MP4. Free, instant.",
		url: "https://30tools.com/puhutv-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "PuhuTV Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "PuhuTV Video Downloader (2026)",
		description: "⚡ Save PuhuTV Turkish shows offline. Free downloader.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/puhutv-video-downloader" },
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
	name: "PuhuTV Video Downloader",
	description:
		"Free tool to download publicly accessible PuhuTV Turkish streaming content as MP4.",
	url: "https://30tools.com/puhutv-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function PuhutvVideoDownloaderPage({ searchParams }) {
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
								PuhuTV Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							PuhuTV Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download publicly available PuhuTV trailers, clips, and Turkish
							series highlights as MP4 for free. Save Turkish streaming content
							offline without a subscription.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🇹🇷 Turkish Shows</span>
							<span>🎬 Originals</span>
							<span>📹 MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="PuhuTV Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							PuhuTV - Turkey's Premium Streaming
						</h2>
						<p className="text-muted-foreground mb-8">
							PuhuTV is Turkey's rapidly growing streaming service owned by
							Doğuş Yayın Grubu, featuring acclaimed Turkish original series,
							box office films, and exclusive productions. Our{" "}
							<strong>PuhuTV Video Downloader</strong> lets you save publicly
							accessible content — trailers and free episode previews — as MP4
							files.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Turkish Originals
								</h3>
								<p className="text-muted-foreground m-0">
									Save trailers from PuhuTV acclaimed original series to preview
									content before deciding to subscribe.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Free Previews</h3>
								<p className="text-muted-foreground m-0">
									PuhuTV offers free episode previews. Download these publicly
									available preview episodes as MP4 for offline viewing.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Turkish Expats</h3>
								<p className="text-muted-foreground m-0">
									Turkish expats can access and save public PuhuTV content from
									anywhere in the world without geographic restrictions.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							PuhuTV FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download full PuhuTV episodes?
								</h3>
								<p className="text-muted-foreground">
									Full PuhuTV episodes are DRM-protected for subscribers only.
									Our tool works for publicly accessible trailers and preview
									clips shared freely on puhutv.com and social media.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
