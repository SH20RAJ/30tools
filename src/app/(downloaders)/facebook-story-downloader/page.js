import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "Facebook Story Downloader - Save FB Stories Free | 30tools",
	description:
		"Download Facebook Stories anonymously in HD for free. Save Facebook story videos and photos without notification. No login required. Works on Android & iPhone.",
	keywords: [
		"facebook story downloader",
		"download facebook stories",
		"save facebook story",
		"fb story saver",
		"facebook story downloader no watermark",
		"download facebook stories anonymously",
		"how to save facebook stories",
		"facebook story video download",
		"fb story download free",
		"save facebook story to gallery",
		"facebook story grabber",
		"download facebook story online",
	].join(", "),
	openGraph: {
		title: "Facebook Story Downloader - Save FB Stories Anonymously Free",
		description:
			"⚡ Download Facebook Stories in HD without watermarks. Anonymous, free, no login needed.",
		url: "https://30tools.com/facebook-story-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "Facebook Story Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Facebook Story Downloader (2026) - Anonymous & Free",
		description:
			"⚡ Save Facebook Stories to your gallery without them knowing. No watermarks, free.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/facebook-story-downloader" },
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

const jsonLdSchemas = {
	webApp: {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "Facebook Story Downloader",
		alternateName: ["FB Story Saver", "Facebook Stories Downloader"],
		description:
			"Free online tool to download Facebook Stories anonymously in HD without watermarks.",
		url: "https://30tools.com/facebook-story-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Facebook Stories anonymously",
			"Save story videos and photos in HD",
			"No notification sent to the uploader",
			"No login or account required",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Facebook Stories",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Get Profile URL",
				text: "Go to the Facebook profile whose story you want to download. Copy the profile URL from your browser's address bar.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Paste the Facebook profile URL into the 30tools Facebook Story Downloader input box.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download Story",
				text: "Browse the available stories and click Download to save photos or videos directly to your device.",
			},
		],
	},
};

export default async function FacebookStoryDownloaderPage({ searchParams }) {
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
								Facebook Story Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Facebook Story Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Facebook Stories before they disappear in 24 hours. Download
							story photos and videos anonymously — no notification is sent, no
							login required. Works on all devices.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>👁️ Anonymous</span>
							<span>📸 Photos & Videos</span>
							<span>⏳ Before Expiry</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Facebook Story Downloader" />
					</div>

					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Facebook Stories Before They Disappear
						</h2>
						<p className="text-muted-foreground mb-8">
							Facebook Stories vanish after just 24 hours. Whether it's a
							business announcement, a friend's travel memory, or an event
							highlight, our <strong>Facebook Story Downloader</strong> lets you
							capture and save those moments permanently — without the story
							poster knowing you saved it.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									No Notification Sent
								</h3>
								<p className="text-muted-foreground m-0">
									Unlike taking a screenshot, our server-side download doesn't
									trigger any Facebook notification to the story creator.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									HD Video & Photos
								</h3>
								<p className="text-muted-foreground m-0">
									Download Facebook story videos in MP4 and photos in original
									JPEG quality. No compression, no quality degradation.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Works on All Devices
								</h3>
								<p className="text-muted-foreground m-0">
									Save Facebook stories on Android, iPhone, PC, or Mac. Open
									30tools in any browser — no app installation required.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Download Facebook Stories
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy Profile URL</h3>
								<p className="text-muted-foreground text-sm">
									Go to the Facebook profile of the person whose story you want
									to save. Copy the profile URL from your browser.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste URL Here</h3>
								<p className="text-muted-foreground text-sm">
									Paste the Facebook profile URL into the input box above and
									click the Download button to fetch available stories.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Save Story</h3>
								<p className="text-muted-foreground text-sm">
									Click the Download button on the story item you want. Videos
									and photos save directly to your device gallery.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Facebook Story Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Will my friend know I downloaded their Facebook story?
								</h3>
								<p className="text-muted-foreground">
									No. Our tool fetches the story from Facebook's servers
									directly without triggering a view notification to the story
									uploader. Your identity remains completely anonymous.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download stories from Facebook Pages or Groups?
								</h3>
								<p className="text-muted-foreground">
									Yes. Our tool supports stories shared to public Facebook
									Profiles and Pages. Group stories may require group membership
									to access publicly.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How long do Facebook stories last before I must download them?
								</h3>
								<p className="text-muted-foreground">
									Facebook Stories automatically disappear after 24 hours. Make
									sure to download the story before it expires if you want to
									keep it permanently.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Facebook stories on my iPhone?
								</h3>
								<p className="text-muted-foreground">
									Yes. Open 30tools in Safari on your iPhone, paste the Facebook
									profile URL, and long-press the story preview image to save it
									to your Photos app.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
