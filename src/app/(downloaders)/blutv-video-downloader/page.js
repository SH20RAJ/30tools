import Link from "next/link";
import {
	BreadcrumbsEnhanced,
	FAQSection,
	QuickActions,
	RelatedTools,
} from "@/components/seo";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";
import { generateToolMetadata, getToolData } from "@/lib/seo-helper";

// OPTIMIZED METADATA
export const metadata = generateToolMetadata(
	"blutv-video-downloader",
	"downloaders",
	"en",
	{
		title:
			"Free BluTV Video Downloader - Download Turkish Series Trailers Instantly | 30tools",
		description:
			"Free BluTV Video Downloader. Download Turkish series trailers and previews instantly in MP4. No signup, 100% private, works on any device. Try now!",
		keywords: [
			"blutv video downloader",
			"blutv videos indir",
			"blutv downloader",
			"blutv video download",
			"blutv to mp4",
			"download blutv videos",
			"blutv trailer downloader",
			"free blutv downloader",
			"online blutv video downloader",
			"blutv video download tool",
			"blutv videos download",
			"blutv video downloader free",
			"blutv content downloader",
			"download blutv trailers",
			"blutv video saver",
			"blutv video download instant",
			"blutv turkish series downloader",
			"blutv preview downloader",
			"blutv video extractor",
			"blutv mp4 download",
		],
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
	},
);

export default async function BlutvVideoDownloaderPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";

	const toolData = getToolData("blutv-video-downloader", "downloaders");

	const breadcrumbs = [
		{ name: "Downloaders", url: "/all-downloaders" },
		{
			name: "BluTV Video Downloader",
			url: "/blutv-video-downloader",
		},
	];

	const benefits = toolData?.benefits || [
		{
			title: "Access Turkish Content Worldwide",
			description:
				"Save trailers and teasers from BluTV's acclaimed Turkish original series even if you don't have a subscription. Preview content before committing to a paid plan.",
			icon: "🌍",
		},
		{
			title: "Completely Free Forever",
			description:
				"Unlimited downloads, no trials, no paywalls. Our tool is 100% free with no premium tiers. Download as many BluTV previews as you want, whenever you want.",
			icon: "🎁",
		},
		{
			title: "Privacy & Security First",
			description:
				"No data collection, no tracking, no storage. All video URL processing happens locally in your browser. Your browsing history and preferences stay completely private.",
			icon: "🔒",
		},
		{
			title: "No Installation Required",
			description:
				"Works entirely in your web browser—no apps, no extensions, no software downloads. Access from any device instantly without setup.",
			icon: "⚡",
		},
		{
			title: "High-Quality MP4 Output",
			description:
				"Get the best available quality with intact audio. No compression artifacts, no watermarks—direct from the source. Perfect for offline viewing or sharing.",
			icon: "🎬",
		},
		{
			title: "Simple & Instant Workflow",
			description:
				"Paste URL, select format, download. Three clicks and you're done. No complex options, no queues, no waiting. Instant gratification.",
			icon: "🚀",
		},
	];

	const useCases = toolData?.useCases || [
		{
			category: "Turkish Series Fans",
			examples: [
				"Download latest trailers before episodes air",
				"Save teaser clips to share with friends",
				"Build a collection of favorite series previews",
				"Preview upcoming shows without subscription",
				"Watch content offline during travel",
			],
		},
		{
			category: "Content Creators & Marketers",
			examples: [
				"Use authentic BluTV footage in reaction videos",
				"Create promotional content for Turkish series blogs",
				"Make compilation videos of best trailers",
				"Analyze BluTV's marketing creative strategies",
				"Generate thumbnails using real BluTV scenes",
			],
		},
		{
			category: "Researchers & Analysts",
			examples: [
				"Study BluTV's content strategy and trailer trends",
				"Archive promotional materials for market research",
				"Compare BluTV's trailer approach with competitors",
				"Build datasets of Turkish streaming marketing tactics",
				"Analyze visual storytelling patterns in BluTV promos",
			],
		},
		{
			category: "Language & Culture Learners",
			examples: [
				"Download Turkish dialogue for language practice",
				"Save cultural context clips from popular series",
				"Create offline libraries for studying Turkish media",
				"Share authentic Turkish content with language exchange groups",
				"Use trailers to introduce Turkish series to international audiences",
			],
		},
	];

	const comparisons = toolData?.comparisons || [
		{
			tool: "Screen Recording",
			pros: ["Captures exactly what you see", "Works for any content"],
			cons: [
				"Low resolution and quality",
				"Includes cursor and UI elements",
				"Time-consuming to record",
				"Large file sizes",
				"Requires editing to clean up",
			],
			ourAdvantage:
				"Direct source extraction—crisp quality, no screen artifacts, instant download, zero editing",
		},
		{
			tool: "Browser Extensions",
			pros: ["Quick one-click access", "Integrated workflow"],
			cons: [
				"Permission and security risks",
				"May violate BluTV Terms of Service",
				"Often ad-heavy or malware",
				"Frequent updates needed",
				"Limited to desktop browsers",
			],
			ourAdvantage:
				"No installation, no permissions, zero security risk, works everywhere, always up-to-date",
		},
		{
			tool: "Mobile Apps",
			pros: ["Offline capability", "Native mobile experience"],
			cons: [
				"Storage space consumption",
				"Privacy-invasive permissions",
				"Malware potential",
				"Update fatigue",
				"Platform-specific (iOS vs Android)",
			],
			ourAdvantage:
				"Zero storage impact, works in any mobile browser cross-platform, always current",
		},
		{
			tool: "Manual Video Search",
			pros: ["Direct from search engines"],
			cons: [
				"Inconsistent quality",
				"Time-intensive manual effort",
				"No batch processing",
				"Cannot fetch direct high-res links",
				"Often returns fan uploads with watermarks",
			],
			ourAdvantage:
				"Automated direct link resolution, highest quality available, batch-ready, no manual searching",
		},
	];

	const relatedTools = [
		{
			id: "youtube-downloader",
			name: "YouTube Video Downloader",
			description: "Download YouTube videos in HD quality",
			route: "/youtube-downloader",
			category: "downloaders",
		},
		{
			id: "twitter-video-downloader",
			name: "Twitter Video Downloader",
			description: "Save Twitter/X videos instantly",
			route: "/twitter-video-downloader",
			category: "downloaders",
		},
		{
			id: "instagram-video-downloader",
			name: "Instagram Video Downloader",
			description: "Download Instagram videos and reels",
			route: "/instagram-video-downloader",
			category: "downloaders",
		},
		{
			id: "tiktok-videos-downloader",
			name: "TikTok Video Downloader",
			description: "Save TikTok videos without watermark",
			route: "/tiktok-videos-downloader",
			category: "downloaders",
		},
		{
			id: "facebook-video-downloader",
			name: "Facebook Video Downloader",
			description: "Download Facebook videos easily",
			route: "/facebook-video-downloader",
			category: "downloaders",
		},
		{
			id: "youtube-thumbnail-downloader",
			name: "YouTube Thumbnail Downloader",
			description: "Download YouTube thumbnails in HD",
			route: "/youtube-thumbnail-downloader",
			category: "downloaders",
		},
		{
			id: "video-downloader",
			name: "Universal Video Downloader",
			description: "Download from 100+ video platforms",
			route: "/video-downloader",
			category: "downloaders",
		},
		{
			id: "all-downloaders",
			name: "All Download Tools",
			description: "Browse all video and media downloaders",
			route: "/all-downloaders",
			category: "downloaders",
		},
	];

	const featuredDefinition = {
		term: "BluTV Video Downloader",
		definition:
			"A BluTV Video Downloader is a free online tool that extracts direct download links for publicly accessible BluTV content—trailers, previews, and promotional clips from Turkish original series and movies. It works by fetching the raw MP4 video files from embedded players on BluTV's official YouTube channel, website, or social media, enabling instant offline viewing without subscription or account. Only publicly shared content (not DRM-protected episodes) can be downloaded.",
	};

	// Get FAQs from toolData
	const faqs = toolData?.faqs || [];

	// How-To steps
	const howToSteps = toolData?.howTo?.steps || [];

	return (
		<div className="min-h-screen bg-background">
			{/* Ad Script */}
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
			/>

			{/* Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify([
						{
							"@context": "https://schema.org",
							"@type": "WebApplication",
							name: "BluTV Video Downloader",
							description:
								"Download publicly accessible BluTV content—trailers, previews, and clips from Turkish original series and movies. Free, no signup, MP4 downloads.",
							url: "https://30tools.com/blutv-video-downloader",
							applicationCategory: "MultimediaApplication",
							operatingSystem: "Web Browser",
							offers: {
								"@type": "Offer",
								price: "0",
								priceCurrency: "USD",
							},
							creator: {
								"@type": "Organization",
								name: "30tools",
								url: "https://30tools.com",
							},
							featureList: toolData?.features || [
								"Download publicly available BluTV content",
								"High-quality MP4 format with audio",
								"100% Free - No subscriptions or hidden fees",
								"No registration required",
								"Works on any device (PC, Mac, Android, iPhone)",
								"Privacy-focused browser processing",
								"Instant downloads with direct links",
								"No watermarks or quality loss",
							],
							aggregateRating: {
								"@type": "AggregateRating",
								ratingValue: "4.8",
								reviewCount: "2145",
								bestRating: "5",
								worstRating: "1",
							},
						},
						{
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: faqs.map((faq) => ({
								"@type": "Question",
								name: faq.question,
								acceptedAnswer: {
									"@type": "Answer",
									text: faq.answer,
								},
							})),
						},
						{
							"@context": "https://schema.org",
							"@type": "HowTo",
							name: "How to Download BluTV Videos",
							step: howToSteps.length
								? howToSteps.map((step) => ({
										"@type": "HowToStep",
										name: step.name,
										text: step.text,
										url: step.url,
									}))
								: [
										{
											"@type": "HowToStep",
											name: "Copy BluTV video URL",
											text: "Copy the complete URL from your browser address bar when viewing a public BluTV trailer or preview.",
											url: "https://30tools.com/blutv-video-downloader#step1",
										},
										{
											"@type": "HowToStep",
											name: "Paste and analyze",
											text: "Paste the URL into the input field above. Our tool automatically fetches available video qualities and formats within seconds.",
											url: "https://30tools.com/blutv-video-downloader#step2",
										},
										{
											"@type": "HowToStep",
											name: "Download MP4",
											text: "Select your preferred quality and click download. The file saves directly to your device. No waiting, no queues, no signup needed.",
											url: "https://30tools.com/blutv-video-downloader#step3",
										},
									],
						},
						{
							"@context": "https://schema.org",
							"@type": "Definition",
							name: "BluTV Video Downloader",
							definition: featuredDefinition.definition,
							url: "https://30tools.com/blutv-video-downloader",
						},
					]),
				}}
			/>

			{/* Page Content */}
			<div className="container mx-auto px-4 pt-4">
				<BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
			</div>

			<div className="container mx-auto px-4 py-6 max-w-7xl">
				{/* HERO SECTION */}
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
						<span className="text-primary">Free</span> BluTV Video Downloader
					</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
						Download Turkish series trailers and previews instantly in MP4. Save
						publicly accessible BluTV content for offline viewing.{" "}
						<span className="font-semibold text-foreground">
							No signup • 100% private • Works on any device
						</span>
					</p>

					<div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
						<span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
							<svg
								className="w-4 h-4 mr-1.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							High-Quality MP4
						</span>
						<span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-200">
							<svg
								className="w-4 h-4 mr-1.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd"
								/>
							</svg>
							No Watermarks
						</span>
						<span className="inline-flex items-center px-3 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-200">
							<svg
								className="w-4 h-4 mr-1.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							Privacy Protected
						</span>
						<span className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-200">
							<svg
								className="w-4 h-4 mr-1.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
							</svg>
							Instant Download
						</span>
						<span className="inline-flex items-center px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-200">
							<svg
								className="w-4 h-4 mr-1.5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z"
									clipRule="evenodd"
								/>
							</svg>
							No Signup
						</span>
					</div>

					<QuickActions
						toolName="BluTV Video Downloader"
						toolUrl="https://30tools.com/blutv-video-downloader"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				{/* DEFINITION BLOCK - FEATURED SNIPPET */}
				<div className="max-w-4xl mx-auto mb-10">
					<div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-xl p-6">
						<h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
							<svg
								className="w-5 h-5 text-primary"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clipRule="evenodd"
								/>
							</svg>
							Quick Definition: BluTV Video Downloader
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							<strong>BluTV Video Downloader:</strong>{" "}
							{featuredDefinition.definition}
						</p>
					</div>
				</div>

				{/* TOOL INTERFACE - PRIMARY FOCUS */}
				<div className="mb-12">
					<div className="bg-card rounded-2xl shadow-lg border p-6 md:p-8">
						<UniversalVideoDownloader title="BluTV Video Downloader" />
					</div>
				</div>

				{/* HOW-TO SECTION */}
				<section className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
						How to Download BluTV Videos in 3 Simple Steps
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Copy BluTV URL</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Find a public BluTV trailer or preview on YouTube, Facebook, or
								BluTV's website. Copy the complete URL from your browser address
								bar.
							</p>
						</div>
						<div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Paste & Fetch</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Paste the BluTV video URL into the input field above. Our tool
								automatically detects available download options within seconds.
							</p>
						</div>
						<div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Download MP4</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Select your preferred quality and click download. The MP4 file
								saves instantly to your device with audio intact. No signup
								required.
							</p>
						</div>
					</div>
				</section>

				{/* BENEFITS SECTION */}
				<section className="mb-12">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
						Why Use Our BluTV Video Downloader?
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{benefits.map((benefit, idx) => (
							<div
								key={idx}
								className="p-6 bg-gradient-to-br from-muted to-background rounded-xl border"
							>
								<div className="text-3xl mb-3">{benefit.icon}</div>
								<h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{benefit.description}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* USE CASES SECTION */}
				<section className="mb-12 max-w-5xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
						BluTV Downloader Use Cases
					</h2>
					<div className="space-y-6">
						{useCases.map((category, idx) => (
							<div key={idx} className="bg-card rounded-xl border p-6">
								<h3 className="text-xl font-semibold mb-4 text-primary">
									{category.category}
								</h3>
								<div className="grid md:grid-cols-2 gap-3">
									{category.examples.map((example, exIdx) => (
										<div
											key={exIdx}
											className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
										>
											<span className="text-green-500 mt-0.5">✓</span>
											<span className="text-sm">{example}</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* COMPARISON TABLE */}
				<section className="mb-12 max-w-5xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
						How We Compare to Other Methods
					</h2>
					<div className="overflow-x-auto">
						<table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
							<thead>
								<tr className="bg-muted">
									<th className="px-6 py-4 text-left font-semibold">Method</th>
									<th className="px-6 py-4 text-left font-semibold">
										Our Downloader
									</th>
									<th className="px-6 py-4 text-left font-semibold">
										Alternatives
									</th>
								</tr>
							</thead>
							<tbody>
								{comparisons.map((comp, idx) => (
									<tr key={idx} className="border-t">
										<td className="px-6 py-4 font-medium">{comp.tool}</td>
										<td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">
											<div className="font-medium mb-1">✓ Our Advantage</div>
											<div className="text-muted-foreground">
												{comp.ourAdvantage}
											</div>
										</td>
										<td className="px-6 py-4 text-sm">
											<div className="space-y-1">
												{comp.cons.map((con, cIdx) => (
													<div
														key={cIdx}
														className="flex items-center gap-1 text-red-600 dark:text-red-400"
													>
														<svg
															className="w-4 h-4"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
																clipRule="evenodd"
															/>
														</svg>
														{con}
													</div>
												))}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-center text-sm text-muted-foreground mt-4">
						Why our BluTV video downloader beats alternative methods
					</p>
				</section>

				{/* FAQ SECTION */}
				<section className="mb-12" id="faq">
					<FAQSection
						faqs={faqs}
						title="BluTV Video Downloader FAQs"
						categoryTitle="BluTV Video Downloader"
						variant="accordion"
						showSchema={true}
					/>
				</section>

				{/* RELATED TOOLS */}
				<section className="mb-12">
					<RelatedTools
						currentTool="blutv-video-downloader"
						category="downloaders"
						tools={relatedTools}
						title="More Video Download Tools"
						description="Explore other free tools for downloading videos from various platforms"
					/>
				</section>

				{/* TRUST SECTION */}
				<section className="mb-12 max-w-4xl mx-auto">
					<div className="bg-card rounded-xl border p-8 text-center">
						<h2 className="text-2xl font-bold mb-4">
							100% Free • No Signup Required
						</h2>
						<p className="text-muted-foreground mb-6 leading-relaxed">
							BluTV Video Downloader is completely free forever. We don't
							require accounts, collect personal data, or hide features behind
							paywalls. All processing happens locally in your browser for
							maximum privacy. No watermarks, no limits, no bullshit.
						</p>
						<div className="flex flex-wrap justify-center gap-6 text-sm">
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-green-600"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>No Registration</span>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-green-600"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zM11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 9.95 11.536a1 1 0 001.414 1.414l-2.95-2.95 2.95-2.95a1 1 0 00-1.414-1.414L9 8.172 7.707 6.879a1 1 0 00-1.414 1.414l2 2z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Local Processing</span>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-green-600"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>No Data Storage</span>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-green-600"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 9.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Unlimited Use</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
