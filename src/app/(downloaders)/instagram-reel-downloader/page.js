import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import InstagramReelDownloader from "@/components/tools/downloaders/InstagramReelDownloader";

export async function generateMetadata({ searchParams }) {
	const params = await searchParams;
	const variant = params.variant;
	const baseMetadata = generateToolMetadata(
		"instagram-reel-downloader",
		"downloaders",
		"en",
		{},
		variant,
	);

	// If it's a specific variant, use the generated title, otherwise use our optimized default
	if (variant) {
		return baseMetadata;
	}

	return {
		...baseMetadata,
		title: "Instagram Reel Downloader: Save Reels in HD (Free & Fast)",
		description:
			"Download Instagram Reels in HD 1080p with original audio. No watermark, no signup, 100% free. Save IG Reels to your gallery instantly. Try it now!",
	};
}

const AdUnit = () => (
	<div className="my-6 flex justify-center min-h-[90px]">
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
		name: "Instagram Reel Downloader",
		alternateName: [
			"IG Reel Saver",
			"Insta Reel Downloader",
			"Save Instagram Reels",
		],
		description:
			"Free online tool to download Instagram Reels in HD 1080p with original audio. No watermark and no login required.",
		url: "https://30tools.com/instagram-reel-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Reels in HD 1080p",
			"Save original audio/music",
			"No watermark",
			"Works on iOS, Android, and PC",
			"Unlimited downloads",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Instagram Reels",
		description:
			"Follow these simple steps to download and save any Instagram Reel to your device gallery for free.",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Copy Reel Link",
				text: "Open the Instagram app or website, find the Reel you want to download, tap the 'Share' or 'Three Dots' icon, and select 'Copy Link'.",
				url: "https://30tools.com/instagram-reel-downloader#step1",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL in 30tools",
				text: "Paste the copied Instagram Reel link into the input box at the top of this page.",
				url: "https://30tools.com/instagram-reel-downloader#step2",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download and Save",
				text: "Click the 'Download' button. Wait for the processing to finish, then click 'Download' again to save the video to your gallery or camera roll.",
				url: "https://30tools.com/instagram-reel-downloader#step3",
			},
		],
	},
	faq: {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Can I download Instagram Reels without a watermark?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes! 30tools downloads the original high-quality MP4 file directly from Instagram's servers, which does not contain any added watermarks.",
				},
			},
			{
				"@type": "Question",
				name: "How to download Instagram Reels in gallery?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "To save a Reel to your gallery, copy the Reel link, paste it into our downloader, click download, and then save the file to your device's storage.",
				},
			},
			{
				"@type": "Question",
				name: "Does this tool save the original audio from the Reel?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Absolutely. Our Instagram Reel downloader extracts the video with its original high-quality audio or music track intact.",
				},
			},
			{
				"@type": "Question",
				name: "Is it free to use 30tools Instagram Reel Downloader?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, our service is 100% free and unlimited. You can download as many Reels as you want without any hidden costs or subscriptions.",
				},
			},
			{
				"@type": "Question",
				name: "Do I need to log in to my Instagram account?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "No login or registration is required. You can download any public Reel just by using its URL link.",
				},
			},
		],
	},
};

export default async function InstagramReelDownloaderPage({ searchParams }) {
	const _params = await searchParams;
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
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.faq),
				}}
			/>
			<div className="container mx-auto px-4 py-8 md:py-12">
				<div className="max-w-5xl mx-auto">
					{/* Breadcrumbs */}
					<nav aria-label="Breadcrumb" className="mb-6">
						<ol className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
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
							<li className="text-foreground font-medium truncate">
								Instagram Reel Downloader
							</li>
						</ol>
					</nav>

					{/* Hero Section */}
					<div className="text-center mb-8 md:mb-12">
						<h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-foreground tracking-tight">
							Instagram Reel Downloader
						</h1>
						<p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
							Fast, free, and secure way to <strong>save Instagram Reels</strong>{" "}
							in HD quality. Download Reels with audio and no watermark
							instantly.
						</p>
						<div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm">
							<span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
								✅ High Quality (1080p)
							</span>
							<span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
								✅ No Watermark
							</span>
							<span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
								✅ Original Audio
							</span>
						</div>
					</div>

					{/* Tool Interface - Above the fold */}
					<div className="bg-card rounded-2xl shadow-2xl border border-border p-4 md:p-8 mb-12 ring-1 ring-primary/5">
						<InstagramReelDownloader />
					</div>

					<AdUnit />

					{/* Step-by-Step Guide */}
					<section id="how-to" className="mb-16">
						<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
							How to Download Instagram Reels (3 Easy Steps)
						</h2>
						<div className="grid md:grid-cols-3 gap-6">
							{[
								{
									step: "1",
									title: "Copy Link",
									desc: "Find the Instagram Reel you want and copy its URL from the app or browser.",
									icon: "🔗",
								},
								{
									step: "2",
									title: "Paste URL",
									desc: "Paste the link into the search box above at 30tools.com.",
									icon: "📋",
								},
								{
									step: "3",
									title: "Save Video",
									desc: "Click 'Download' and the Reel will be saved to your device gallery instantly.",
									icon: "💾",
								},
							].map((s, i) => (
								<div
									key={i}
									className="relative p-6 bg-card rounded-xl border border-border flex flex-col items-center text-center group hover:border-primary/50 transition-colors"
								>
									<div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-lg">
										{s.step}
									</div>
									<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
										{s.icon}
									</div>
									<h3 className="text-xl font-bold mb-2">{s.title}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{s.desc}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Features Grid */}
					<section className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-16 border border-border">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
								Why Use Our Instagram Reel Downloader?
							</h2>
							<div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
								<div className="flex gap-4">
									<div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center font-bold">
										HD
									</div>
									<div>
										<h3 className="font-bold mb-1">Full HD Resolution</h3>
										<p className="text-sm text-muted-foreground">
											Download Reels in their original 1080p high-definition
											quality without any compression.
										</p>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="flex-shrink-0 w-10 h-10 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center font-bold">
										🎵
									</div>
									<div>
										<h3 className="font-bold mb-1">Original Audio & Music</h3>
										<p className="text-sm text-muted-foreground">
											Our tool preserves the original audio track, perfect for
											content creators and music lovers.
										</p>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center font-bold">
										🚫
									</div>
									<div>
										<h3 className="font-bold mb-1">No Watermark</h3>
										<p className="text-sm text-muted-foreground">
											Get clean videos without any intrusive 30tools or
											Instagram watermarks for professional use.
										</p>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="flex-shrink-0 w-10 h-10 bg-purple-500/10 text-purple-500 rounded-lg flex items-center justify-center font-bold">
										🔓
									</div>
									<div>
										<h3 className="font-bold mb-1">No Login Required</h3>
										<p className="text-sm text-muted-foreground">
											We value your privacy. Download any public Reel without
											ever logging into your Instagram account.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<AdUnit />

					{/* Detailed Content / Blog Section */}
					<article className="prose dark:prose-invert max-w-none mb-16">
						<h2 className="text-3xl font-bold">
							The Ultimate Tool to Download Instagram Reels Online
						</h2>
						<p>
							Instagram Reels have become the heart of social media trends.
							Whether it's a hilarious skit, a travel vlog, or a trending
							recipe, sometimes you just want to <strong>save Reels</strong> to
							your device. That's where 30tools comes in—the most reliable{" "}
							<strong>Instagram Reel video download</strong> service available
							in 2026.
						</p>
						<h3 className="text-xl font-bold mt-6 mb-2">
							Can you download Instagram Reels in gallery?
						</h3>
						<p>
							Yes, you can! While Instagram allows you to save Reels within the
							app, you can't officially download them to your local gallery
							without third-party tools. Our <strong>reels downloader</strong>{" "}
							makes this process seamless. Simply paste the{" "}
							<strong>instagram reel link download</strong> and we handle the
							rest, giving you a direct MP4 file.
						</p>
						<h3 className="text-xl font-bold mt-6 mb-2">
							High-Quality Insta Reel Download
						</h3>
						<p>
							Don't settle for low-quality screen recordings that capture UI
							elements and produce blurry results. Our{" "}
							<strong>insta reel download</strong> tool fetches the direct raw
							file from the CDN. This ensures you get 1080p HD quality, making
							it the <strong>best instagram reel downloader</strong> for editors
							and creators.
						</p>
					</article>

					{/* FAQs */}
					<section className="mb-16 border-t border-border pt-16">
						<h2 className="text-3xl font-bold text-center mb-12">
							Instagram Reel Downloader FAQ
						</h2>
						<div className="max-w-3xl mx-auto grid gap-4">
							{[
								{
									q: "Is it legal to download Instagram Reels?",
									a: "Downloading Reels for personal, offline viewing is generally acceptable. However, you should not re-upload or use others' content for commercial purposes without permission.",
								},
								{
									q: "How to download Reels on iPhone?",
									a: "Open 30tools.com in Safari, paste your link, and tap download. Safari's built-in download manager will save the file to your 'Downloads' folder or 'Files' app.",
								},
								{
									q: "How to download Reels on Android?",
									a: "Use Chrome or any mobile browser. After clicking download, the video will appear in your 'Downloads' folder and in your Google Photos or Gallery app.",
								},
								{
									q: "Why did my Instagram Reel download fail?",
									a: "Usually, this happens if the Reel is from a private account. Our tool can only access public Reels. Double-check that the URL is correct and the account is not private.",
								},
								{
									q: "Does 30tools store my downloaded videos?",
									a: "No. We do not store any videos or track your download history. Your privacy and security are our top priorities.",
								},
								{
									q: "Can I download trending Instagram Reels with music?",
									a: "Yes! Our downloader ensures the original music or trending audio is perfectly synced with the video file.",
								},
							].map((faq, i) => (
								<div
									key={i}
									className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
								>
									<h3 className="text-lg font-bold mb-3 flex items-start gap-2">
										<span className="text-primary mt-0.5">Q:</span> {faq.q}
									</h3>
									<p className="text-muted-foreground pl-7">
										<span className="font-semibold text-foreground/80 mr-1">
											A:
										</span>
										{faq.a}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Internal Linking / Related Tools */}
					<section className="mb-16">
						<h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
							Explore More Downloaders
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{[
								{
									href: "/instagram-downloader",
									title: "Insta Downloader",
									icon: "📸",
								},
								{
									href: "/instagram-story-downloader",
									title: "Story Saver",
									icon: "🎥",
								},
								{
									href: "/tiktok-downloader",
									title: "TikTok Saver",
									icon: "🎵",
								},
								{
									href: "/facebook-video-downloader",
									title: "FB Downloader",
									icon: "📹",
								},
							].map((tool, i) => (
								<Link
									key={i}
									href={tool.href}
									className="p-4 bg-card rounded-xl border border-border hover:border-primary hover:bg-primary/5 text-center transition-all group"
								>
									<div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
										{tool.icon}
									</div>
									<h3 className="font-bold text-sm md:text-base">
										{tool.title}
									</h3>
								</Link>
							))}
						</div>
					</section>

					{/* Trust Reassurance */}
					<div className="text-center text-xs text-muted-foreground pb-8">
						<p>
							30tools is not affiliated with Instagram or Meta. We provide a
							free tool for personal use only.
						</p>
						<p className="mt-1">
							&copy; {new Date().getFullYear()} 30tools.com - All Rights
							Reserved.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
