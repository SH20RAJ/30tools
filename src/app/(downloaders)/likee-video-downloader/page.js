import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Likee Video Downloader - Save Likee Videos No Watermark | 30tools",
	description:
		"Download Likee videos without watermark for free. Save Likee short videos and special effects clips as HD MP4. No login required. Works on all devices.",
	keywords: [
		"likee video downloader",
		"download likee video no watermark",
		"likee downloader",
		"save likee video",
		"likee to mp4",
		"likee video download free",
		"likee video saver",
		"likee without watermark",
		"how to download likee videos",
		"likee short video download",
	].join(", "),
	openGraph: {
		title: "Likee Video Downloader - Save Videos Without Watermark",
		description:
			"⚡ Download Likee videos without watermark in HD. Free, no login required.",
		url: "https://30tools.com/likee-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Likee Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Likee Video Downloader (2026) - No Watermark",
		description:
			"⚡ Save Likee videos without watermark as HD MP4. Free and instant.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/likee-video-downloader" },
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
	name: "Likee Video Downloader",
	alternateName: ["Likee to MP4", "Likee No Watermark Downloader"],
	description:
		"Free online tool to download Likee videos without watermark as HD MP4 files.",
	url: "https://30tools.com/likee-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download Likee videos without watermark",
		"HD MP4 quality",
		"No account required",
	],
};

export default async function LikeeVideoDownloaderPage({ searchParams }) {
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
								Likee Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Likee Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Likee short videos and special effects clips without
							watermarks for free. Download trending Likee content as HD MP4 —
							no account required.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🚫 No Watermark</span>
							<span>✨ Special Effects</span>
							<span>📹 HD MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Likee Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Download Likee Special Effects Videos
						</h2>
						<p className="text-muted-foreground mb-8">
							Likee is a short-video platform known for its advanced AI special
							effects, magic face filters, and viral dance challenges. Users add
							Likee watermarks when downloading through the app. Our{" "}
							<strong>Likee Video Downloader</strong> gives you the clean,
							original video without the Likee logo overlay.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">No Watermark</h3>
								<p className="text-muted-foreground m-0">
									Download Likee videos with the watermark removed — perfect for
									creators repurposing content across platforms like Instagram
									or TikTok.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Special Effects Preserved
								</h3>
								<p className="text-muted-foreground m-0">
									The full video with all AI filters, face morphs, and magic
									effects is preserved in the download — only the Likee
									watermark is removed.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Global Platform</h3>
								<p className="text-muted-foreground m-0">
									Works with Likee videos from India, Indonesia, Russia, Middle
									East, and all other regions where the platform is active.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Likee Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I copy the Likee video link?
								</h3>
								<p className="text-muted-foreground">
									Open the Likee app, tap the Share icon on a video, and choose
									"Copy Link". Paste the link into the 30tools Likee Downloader
									and click Download.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Are Likee downloads truly watermark-free?
								</h3>
								<p className="text-muted-foreground">
									Yes. Our tool fetches the source video stream directly rather
									than using Likee's in-app download function, which adds the
									watermark. The result is a clean MP4 without any overlay.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
