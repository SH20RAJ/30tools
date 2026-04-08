import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = generateToolMetadata("instagram-story-downloader", "downloaders");

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
		name: "Instagram Story Downloader",
		alternateName: ["IG Story Saver", "Anonymous Instagram Story Viewer"],
		description:
			"Free online tool to download Instagram Stories and Highlights anonymously.",
		url: "https://30tools.com/instagram-story-downloader",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		featureList: [
			"Download Instagram Stories without being seen",
			"Save Story videos and photos",
			"Download Instagram Highlights",
			"Works on iOS and Android",
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Download Instagram Stories",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Get the Profile URL",
				text: "Open Instagram and go to the profile of the account whose story you want to save. Copy the profile URL from the address bar.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Paste URL",
				text: "Navigate to the 30tools Instagram Story Downloader and paste the Instagram profile URL.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download",
				text: "Select the story item you want to save and click Download to save it to your device.",
			},
		],
	},
};

export default async function InstagramStoryDownloaderPage({ searchParams }) {
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
								Instagram Story Downloader
							</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Instagram Story Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Save Instagram Stories anonymously before they disappear in 24
							hours. Download story photos and videos to your camera roll
							instantly.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>👁️ Anonymous</span>
							<span>📸 Photos & Videos</span>
							<span>⏳ Before They Expire</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Instagram Story Downloader" />
					</div>

					{/* SEO Content: Why Use Us */}
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Why Use Our Instagram Story Saver?
						</h2>
						<p className="text-muted-foreground mb-8">
							Instagram Stories disappear after 24 hours. If you want to{" "}
							<strong>save an Instagram story</strong> before it vanishes —
							whether it's a friend's memories, a brand announcement, or your
							own stories — our tool extracts the full-resolution video or photo
							without leaving a "seen" timestamp on the account.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">100% Anonymous</h3>
								<p className="text-muted-foreground m-0">
									View and download stories without appearing in the viewer
									list. The other user will not know you viewed or saved their
									story.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">Photos & Videos</h3>
								<p className="text-muted-foreground m-0">
									Download both story videos and story images in their original
									quality. Works for regular stories and story highlight
									archives.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">All Devices</h3>
								<p className="text-muted-foreground m-0">
									Works on iPhone (Safari), Android (Chrome), and desktop PCs.
									Our web-based tool requires no software installation.
								</p>
							</div>
						</div>
					</section>

					{/* How to Download Steps */}
					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							How to Save Instagram Stories Before They Expire
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									1
								</div>
								<h3 className="text-xl font-bold mb-4">Copy Profile URL</h3>
								<p className="text-muted-foreground">
									Go to the Instagram profile whose story you want to save. Copy
									the profile URL from the address bar or share button.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									2
								</div>
								<h3 className="text-xl font-bold mb-4">Paste URL</h3>
								<p className="text-muted-foreground">
									Return to 30tools and paste the copied Instagram profile link
									into the input box above.
								</p>
							</div>
							<div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">
									3
								</div>
								<h3 className="text-xl font-bold mb-4">Download Story</h3>
								<p className="text-muted-foreground">
									Browse the available stories and click the Download button on
									the ones you want to save to your gallery.
								</p>
							</div>
						</div>
					</section>

					<AdUnit />

					{/* FAQs */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Instagram Story Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Will the user know I viewed/downloaded their story?
								</h3>
								<p className="text-muted-foreground">
									No. Our tool accesses public story data without you directly
									viewing the story on Instagram. The account owner will not see
									your name in their story viewers list when you use 30tools to
									save their story.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download Instagram Highlights?
								</h3>
								<p className="text-muted-foreground">
									Yes! Instagram Highlights are archived stories pinned to a
									profile. Our Story Downloader supports both active (24-hour)
									stories and archived Highlight clips.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download stories from private Instagram accounts?
								</h3>
								<p className="text-muted-foreground">
									No. Our tool can only access content from public Instagram
									profiles. Stories from private accounts are not accessible
									without logging into Instagram directly.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I save an Instagram story on iPhone?
								</h3>
								<p className="text-muted-foreground">
									Open 30tools in Safari, paste the Instagram profile URL,
									select the story item you want to save, then tap and hold the
									preview image and choose "Save to Photos".
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
