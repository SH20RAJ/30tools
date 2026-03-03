import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
	title: "LinkedIn Video Downloader - Save LinkedIn Videos Free | 30tools",
	description:
		"Download LinkedIn videos, corporate presentations, and native posts for free. Save any LinkedIn video as MP4 without login. Works on all devices instantly.",
	keywords: [
		"linkedin video downloader",
		"download linkedin video",
		"save linkedin video",
		"linkedin to mp4",
		"linkedin video saver",
		"linkedin post video download",
		"how to download linkedin videos",
		"save linkedin native video",
		"linkedin video download free",
		"linkedin video grabber",
	].join(", "),
	openGraph: {
		title: "LinkedIn Video Downloader - Save Native Videos Free",
		description:
			"⚡ Download LinkedIn native videos and posts as MP4 for free. Professional, instant.",
		url: "https://30tools.com/linkedin-video-downloader",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-images/universal-downloader.jpg",
				width: 1200,
				height: 630,
				alt: "LinkedIn Video Downloader",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "LinkedIn Video Downloader (2026) - Professional",
		description:
			"⚡ Save LinkedIn native post videos offline as MP4. Free, no login.",
		images: ["/og-images/universal-downloader.jpg"],
		creator: "@30tools",
	},
	alternates: { canonical: "https://30tools.com/linkedin-video-downloader" },
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
	name: "LinkedIn Video Downloader",
	alternateName: ["LinkedIn to MP4", "Save LinkedIn Post Video"],
	description:
		"Free online tool to download LinkedIn native videos and post media as MP4.",
	url: "https://30tools.com/linkedin-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
	featureList: [
		"Download LinkedIn native videos",
		"Save corporate content offline",
		"No LinkedIn Premium needed",
		"Works on all devices",
	],
};

export default function LinkedinVideoDownloaderPage() {
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
								LinkedIn Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							LinkedIn Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download LinkedIn native post videos, webinar clips, and corporate
							presentations as MP4 for free. Save professional LinkedIn content
							offline — no login required.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>💼 Professional</span>
							<span>🎤 Webinars</span>
							<span>📹 HD MP4</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="LinkedIn Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Save Professional LinkedIn Videos Offline
						</h2>
						<p className="text-muted-foreground mb-8">
							LinkedIn has evolved into a major video platform where CEOs,
							thought leaders, and companies share insights, product launches,
							and career advice through native video posts. LinkedIn provides no
							native download button. Our{" "}
							<strong>LinkedIn Video Downloader</strong> solves this by letting
							you save any public LinkedIn video post as MP4.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Thought Leadership
								</h3>
								<p className="text-muted-foreground m-0">
									Save insightful videos from industry leaders, CEOs, and
									experts on LinkedIn for offline learning and reference.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Corporate Content
								</h3>
								<p className="text-muted-foreground m-0">
									Download company announcement videos, product launches, and
									employer branding content from LinkedIn for business research.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Career Development
								</h3>
								<p className="text-muted-foreground m-0">
									Save career advice, interview tips, and skill-building videos
									from LinkedIn coaches and HR professionals for offline viewing
									during your job search.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							LinkedIn Video Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the LinkedIn post URL?
								</h3>
								<p className="text-muted-foreground">
									On LinkedIn, click the three dots (⋯) on a post and select
									"Copy link to post". Paste that URL into 30tools and click
									Download to get the native video as MP4.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download LinkedIn Learning videos?
								</h3>
								<p className="text-muted-foreground">
									LinkedIn Learning videos are premium DRM-protected content.
									Our tool works for native video posts shared on LinkedIn
									feeds, not LinkedIn Learning courses which require a separate
									subscription.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
