import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "IMDB Video Downloader - Save IMDB Trailers Free | 30tools",
	description:
		"Download IMDB movie trailers, clips, and TV show teasers for free. Save IMDB video content as MP4 offline. No login required. Works on all devices.",
	keywords: [
		"imdb video downloader",
		"download imdb trailer",
		"imdb clip downloader",
		"save imdb video",
		"imdb to mp4",
		"download movie trailer imdb",
		"imdb trailer saver",
		"how to download from imdb",
		"imdb video download free",
	].join(", "),
	openGraph: {
		title: "IMDB Video Downloader - Save Movie Trailers Free",
		description:
			"⚡ Download IMDB movie trailers and clips as MP4 for free. No login required.",
		url: "https://30tools.com/imdb-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "IMDB Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "IMDB Video Downloader (2026) - Movie Trailers",
		description:
			"⚡ Save IMDB movie trailers and TV clips offline as MP4. Free, instant.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/imdb-video-downloader" },
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
	name: "IMDB Video Downloader",
	alternateName: ["IMDB Trailer Downloader", "Save IMDB Clips"],
	description:
		"Free online tool to download IMDB movie trailers and TV clips as MP4 files.",
	url: "https://30tools.com/imdb-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download IMDB movie trailers",
		"Save TV show teasers",
		"No account required",
		"HD MP4 quality",
	],
};

export default async function ImdbVideoDownloaderPage({ searchParams }) {
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
								IMDB Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							IMDB Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download IMDB movie trailers, TV show teasers, behind-the-scenes
							clips, and interviews as MP4 for free. Save official movie content
							from IMDB offline.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🎬 Movie Trailers</span>
							<span>📺 TV Teasers</span>
							<span>📹 HD MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="IMDB Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Download Official Movie Trailers from IMDB
						</h2>
						<p className="text-muted-foreground mb-8">
							IMDB is the world's most authoritative movie and TV database.
							Beyond ratings and reviews, IMDB hosts official trailers, cast
							interviews, clips, and behind-the-scenes featurettes. Our{" "}
							<strong>IMDB Video Downloader</strong> lets you save any IMDB
							video content for offline viewing or creating movie-related
							content.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Official Trailers
								</h3>
								<p className="text-muted-foreground m-0">
									Download official movie and TV trailers directly from IMDB's
									video library — the highest quality, studio-released versions.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Cast Interviews</h3>
								<p className="text-muted-foreground m-0">
									Save actor interviews, director Q&As, and behind-the-scenes
									featurettes from IMDB for your movie review content or
									personal archive.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Offline Movie Research
								</h3>
								<p className="text-muted-foreground m-0">
									Download IMDB trailers and clips for use in film school
									projects, movie review videos, or offline presentation
									materials.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							IMDB Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download movie trailers from IMDB?
								</h3>
								<p className="text-muted-foreground">
									Yes. IMDB hosts official trailers provided by studios. These
									trailers are publicly accessible and can be downloaded using
									our tool for personal offline viewing. Commercial use of
									studio trailers may require permission from the rights holder.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I find the IMDB video URL?
								</h3>
								<p className="text-muted-foreground">
									On IMDB.com, navigate to a movie page and click on the
									official trailer. Copy the URL from your browser's address
									bar. Paste it into 30tools and click Download.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
