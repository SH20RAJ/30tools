import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";



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
		name: "Reddit Video Downloader",
		alternateName: ["Reddit to MP4 with Sound", "Reddit Video Saver"],
		description:
			"Free online tool to download Reddit videos with sound as MP4 files. Merges Reddit's separate audio and video dashstreams automatically.",
		url: "https://30tools.com/reddit-video-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Reddit videos with audio",
			"Merge Reddit video and audio streams",
			"No login required",
			"Works on all devices",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Reddit Videos with Sound",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Post URL",
				text: "Find the Reddit video post. Copy the URL from your browser or tap Share → Copy Link on the Reddit app.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste in Downloader",
				text: "Paste the Reddit post URL into the 30tools Reddit Video Downloader.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download with Audio",
				text: "Click Download. Our tool automatically merges the video and audio streams and saves the complete MP4 with sound.",
			},
		],
	},
};

export const metadata = {
  title: "Free Reddit Video Downloader Online - No Signup | 30tools",
  description: "Free Reddit Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your brow",
  keywords: ["reddit video downloader","reddit video downloader free","reddit video downloader online","reddit video downloader tool"],
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

export default async function RedditVideoDownloaderPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const variant = params.variant;
	const toolData = {
  "id": "reddit-video-downloader",
  "name": "Reddit Video Downloader",
  "description": "Download Reddit Videos & GIFs in HD Free.",
  "category": "downloaders",
  "route": "/reddit-video-downloader",
  "features": [
    "HD video downloads with audio",
    "Support multiple platforms (YouTube, TikTok, Instagram)",
    "Direct download links",
    "Multiple format options (MP4, MP3, WEBM)",
    "Batch download capability",
    "100% Free - No hidden costs or subscriptions"
  ],
  "benefits": [],
  "useCases": [],
  "faqs": [
    {
      "question": "Is this Reddit Video Downloader really free?",
      "answer": "Yes! Our Reddit Video Downloader is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations."
    },
    {
      "question": "Is my data secure when using Reddit Video Downloader?",
      "answer": "Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security."
    },
    {
      "question": "Do I need to create an account to use Reddit Video Downloader?",
      "answer": "No registration required. You can start using Reddit Video Downloader immediately without creating an account or providing any personal information."
    },
    {
      "question": "Are there any file size limits for Reddit Video Downloader?",
      "answer": "There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably."
    },
    {
      "question": "Can I use Reddit Video Downloader on mobile devices?",
      "answer": "Yes, Reddit Video Downloader is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser."
    },
    {
      "question": "What file formats does Reddit Video Downloader support?",
      "answer": "Reddit Video Downloader supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software."
    }
  ],
  "howTo": {
    "name": "How to Use Reddit Video Downloader",
    "steps": [
      {
        "name": "Paste URL",
        "text": "Copy the video link from your platform and paste it into the input box above.",
        "url": "/reddit-video-downloader#step1",
        "position": 1
      },
      {
        "name": "Select Quality",
        "text": "Choose your preferred video quality and format (MP4, MP3, etc.).",
        "url": "/reddit-video-downloader#step2",
        "position": 2
      },
      {
        "name": "Download",
        "text": "Click the download button to get your file instantly.",
        "url": "/reddit-video-downloader#step3",
        "position": 3
      }
    ]
  }
};

	if (!toolData) return <div>Tool not found</div>;

	// Dynamic Title based on variant
	const displayTitle = variant 
		? variant.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
		: "Reddit Video Downloader";
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
								{displayTitle}
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							{displayTitle}
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download Reddit videos with sound as MP4 for free. Reddit
							separates audio and video streams — our tool automatically merges
							them so you always get the complete video with audio.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🔊 With Audio</span>
							<span>🎬 Auto Merge</span>
							<span>📹 HD MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Reddit Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Reddit Videos Are Hard to Download
						</h2>
						<p className="text-muted-foreground mb-8">
							Reddit uses DASH (Dynamic Adaptive Streaming) which splits the
							video and audio into separate files. This is why downloading
							Reddit videos directly often gives you silent videos. Our{" "}
							<strong>Reddit Video Downloader</strong> automatically fetches and
							merges both streams to give you a complete MP4 with full audio.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Auto Audio Merge
								</h3>
								<p className="text-muted-foreground m-0">
									Our tool automatically merges Reddit's separate video and
									audio DASH streams so your download always includes full
									sound.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">All Subreddits</h3>
								<p className="text-muted-foreground m-0">
									Works with native Reddit videos from any subreddit — r/funny,
									r/sports, r/gaming, r/aww, and millions more.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">GIF Support</h3>
								<p className="text-muted-foreground m-0">
									Reddit GIFs are actually looping MP4s internally. Our tool
									saves them in their original looping format so they animate
									correctly.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Reddit Video Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Why do my Reddit video downloads have no sound?
								</h3>
								<p className="text-muted-foreground">
									Reddit stores video and audio as separate streams. Most basic
									downloaders only grab the video track, leaving audio behind.
									30tools Reddit Downloader merges both streams automatically
									before downloading, so you always get sound.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Reddit GIFs?
								</h3>
								<p className="text-muted-foreground">
									Yes. Reddit's GIFs are actually silent looping MP4 videos.
									Paste the Reddit GIF post URL and our tool will download the
									looping video file for you.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the Reddit post URL?
								</h3>
								<p className="text-muted-foreground">
									On Reddit desktop: copy the URL from your browser's address
									bar. On mobile: tap Share → Copy Link. The URL starts with
									reddit.com/r/...
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
