import Link from "next/link";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Free Blogger Video Downloader Online - No Signup | 30tools",
  description: "Free Blogger Video Downloader. Download videos from multiple platforms. HD quality, no watermarks, instant downloads. All processing happens locally in your bro",
  keywords: ["blogger video downloader","blogger video downloader free","blogger video downloader online","blogger video downloader tool"],
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
	name: "Blogger Video Downloader",
	description:
		"Free online tool to download videos from Blogger.com (Blogspot) blogs as MP4.",
	url: "https://30tools.com/blogger-video-downloader",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Any",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default async function BloggerVideoDownloaderPage({ searchParams }) {
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
								Blogger Video Downloader
							</li>
						</ol>
					</nav>
					<AdUnit />
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Blogger Video Downloader
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Download videos embedded in Blogger (Blogspot) blog posts for
							free. Save any blog video as MP4 for offline viewing or sharing.
							Works on all devices.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>📝 Blogspot</span>
							<span>📹 MP4</span>
							<span>🚫 No Login</span>
							<span>🆓 100% Free</span>
						</div>
					</div>
					<AdUnit />
					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<UniversalVideoDownloader title="Blogger Video Downloader" />
					</div>
					<section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-6">
							Download Videos from Blogger Blogs
						</h2>
						<p className="text-muted-foreground mb-8">
							Blogger, Google's free blogging platform, hosts millions of blogs
							across topics like cooking, travel, technology, and lifestyle.
							When bloggers upload videos directly to Blogger (not YouTube
							embeds), there's no native download button. Our{" "}
							<strong>Blogger Video Downloader</strong> extracts those native
							Blogger video files for download.
						</p>
						<div className="grid md:grid-cols-3 gap-8 text-left">
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Native Blog Videos
								</h3>
								<p className="text-muted-foreground m-0">
									Extract and download videos uploaded natively to Blogger posts
									— not YouTube embeds, but the actual Blogger-hosted video
									files.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Tutorial Content
								</h3>
								<p className="text-muted-foreground m-0">
									Save cooking tutorials, DIY guides, travel vlogs, and other
									educational content from Blogger blogs for offline reference.
								</p>
							</div>
							<div className="p-6 bg-card rounded-xl border border-border">
								<h3 className="text-xl font-bold mb-3 mt-0">
									Research Archive
								</h3>
								<p className="text-muted-foreground m-0">
									Download blog videos for research, reference, or presentation
									purposes. Blogger content can be deleted anytime — save it
									now.
								</p>
							</div>
						</div>
					</section>
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-10">
							Blogger Video Downloader FAQs
						</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									Can I download YouTube videos embedded in Blogger?
								</h3>
								<p className="text-muted-foreground">
									If the video is a YouTube embed, use our YouTube Video
									Downloader instead. This Blogger Downloader works for videos
									hosted directly on Blogger's servers, not
									YouTube/Vimeo/Dailymotion embeds within blog posts.
								</p>
							</div>
							<div className="bg-card border border-border rounded-xl p-6">
								<h3 className="text-lg font-bold mb-2">
									How do I get the Blogger video URL?
								</h3>
								<p className="text-muted-foreground">
									Copy the full URL of the Blogger post page containing the
									video. Paste it into our downloader and our tool will extract
									the native video file for download.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
