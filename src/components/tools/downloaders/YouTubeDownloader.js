"use client";

import {
	AlertCircle,
	BookOpen,
	CheckCircle,
	Download,
	FileText,
	Globe,
	HelpCircle,
	Link,
	Loader2,
	Music,
	Play,
	Scissors,
	Shield,
	Star,
	Users,
	Video,
	Wrench,
	Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function YouTubeDownloader({
	title = "YouTube Video Downloader",
}) {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [videoData, setVideoData] = useState(null);
	const [error, setError] = useState("");

	const handleDownload = async () => {
		if (!url.trim()) {
			setError("Please enter a YouTube video URL");
			return;
		}

		if (
			!url.includes("youtube.com") &&
			!url.includes("youtu.be") &&
			!url.includes("youtube.com/shorts")
		) {
			setError("Please enter a valid YouTube URL");
			return;
		}

		setIsLoading(true);
		setError("");
		setVideoData(null);

		try {
			const response = await fetch("/api/proxy/universal", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ url: url }),
			});

			if (!response.ok) {
				throw new Error("Failed to fetch video information");
			}

			const data = await response.json();

			if (!data || data.error || !data.medias) {
				throw new Error(
					"Could not find video. Please check the URL and try again.",
				);
			}

			setVideoData({
				title: data.title || "YouTube Video",
				thumbnail: data.thumbnail,
				duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "",
				author: data.author || "Unknown",
				music: data.music || "",
				qualities: data.medias.map((m) => ({
					quality: m.quality,
					size: m.size || "Unknown",
					url: m.url,
					type: m.type,
				})),
			});
		} catch (err) {
			console.error(err);
			setError("Failed to process the YouTube video. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const downloadContent = (quality) => {
		window.open(quality.url, "_blank");
	};

	return (
		<div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Link className="h-5 w-5" />
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
						<Input
							type="url"
							placeholder="Paste YouTube video or Shorts URL here..."
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							className="flex-1"
						/>
						<Button
							onClick={handleDownload}
							disabled={isLoading}
							className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
						>
							{isLoading ? (
								<Loader2 className="h-4 w-4 animate-spin" />
							) : (
								<Download className="h-4 w-4" />
							)}
							{isLoading ? "Processing..." : "Download"}
						</Button>
					</div>

					{error && (
						<div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
							<AlertCircle className="h-4 w-4" />
							<span className="text-sm">{error}</span>
						</div>
					)}

					{videoData && (
						<div className="space-y-4">
							<div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
								<CheckCircle className="h-4 w-4" />
								<span className="text-sm">
									YouTube video processed successfully!
								</span>
							</div>

							<Card>
								<CardContent className="p-4">
									<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
										<img
											src={videoData.thumbnail}
											alt="Video thumbnail"
											className="w-full sm:w-24 h-32 sm:h-16 object-cover rounded"
										/>
										<div className="flex-1 min-w-0">
											<h3 className="font-medium text-sm mb-1">
												{videoData.title}
											</h3>
											<p className="text-xs text-muted-foreground">
												Duration: {videoData.duration}
											</p>
											<p className="text-xs text-muted-foreground">
												Author: {videoData.author}
											</p>
											{videoData.music && (
												<p className="text-xs text-muted-foreground flex items-center gap-1">
													<Music className="h-3 w-3" />
													{videoData.music}
												</p>
											)}
										</div>
									</div>

									<div className="mt-4 space-y-2">
										<h4 className="text-sm font-medium">
											Choose Download Option:
										</h4>
										{videoData.qualities.map((quality, index) => (
											<div
												key={index}
												className="flex flex-col sm:flex-row sm:items-center justify-between p-2 border rounded gap-2"
											>
												<div className="flex-1 min-w-0">
													<span className="text-sm font-medium">
														{quality.quality}
													</span>
													<span className="text-xs text-muted-foreground ml-2">
														({quality.size})
													</span>
												</div>
												<Button
													size="sm"
													onClick={() => downloadContent(quality)}
													className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
												>
													{quality.type === "audio" ? (
														<Music className="h-3 w-3 mr-1" />
													) : (
														<Download className="h-3 w-3 mr-1" />
													)}
													Download
												</Button>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					)}

					<div className="text-xs text-muted-foreground">
						<p>• Download YouTube videos in HD/4K quality</p>
						<p>• Convert YouTube videos to MP3 audio</p>
						<p>• Download YouTube Shorts easily</p>
					</div>
				</CardContent>
			</Card>

			{/* How to Use Guide */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<BookOpen className="h-5 w-5" />
						How to Download YouTube Videos
					</CardTitle>
					<CardDescription>
						Step-by-step guide to download YouTube videos easily
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
								<span className="text-sm font-semibold text-red-600">1</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold">Find the YouTube Video</h4>
								<p className="text-sm text-muted-foreground">
									Open YouTube app or website and find the video or Short you
									want to download.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
								<span className="text-sm font-semibold text-red-600">2</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold">Copy the Video URL</h4>
								<p className="text-sm text-muted-foreground">
									Click the share button and select "Copy link" to get the video
									URL.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
								<span className="text-sm font-semibold text-red-600">3</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold">Paste URL and Download</h4>
								<p className="text-sm text-muted-foreground">
									Paste the URL in the input field above and click download.
									Choose your preferred quality.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
								<span className="text-sm font-semibold text-red-600">4</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold">Save Your Video</h4>
								<p className="text-sm text-muted-foreground">
									The video will be downloaded in your chosen quality format
									(MP4 or MP3).
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Features */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Zap className="h-5 w-5" />
						YouTube Downloader Features
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0">
									<Video className="h-4 w-4 text-red-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">HD & 4K Quality</h4>
									<p className="text-sm text-muted-foreground">
										Download videos in highest available resolution
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
									<Music className="h-4 w-4 text-blue-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">MP3 Audio Extraction</h4>
									<p className="text-sm text-muted-foreground">
										Extract audio as MP3 format from any video
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
									<Shield className="h-4 w-4 text-green-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">Safe & Secure</h4>
									<p className="text-sm text-muted-foreground">
										No malware, no suspicious downloads
									</p>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
									<Zap className="h-4 w-4 text-purple-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">Fast Processing</h4>
									<p className="text-sm text-muted-foreground">
										Quick download speeds and instant processing
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
									<Globe className="h-4 w-4 text-orange-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">YouTube Shorts Support</h4>
									<p className="text-sm text-muted-foreground">
										Download short-form vertical videos easily
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
									<Users className="h-4 w-4 text-teal-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">All Devices</h4>
									<p className="text-sm text-muted-foreground">
										Works on desktop, tablet, and mobile
									</p>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* FAQ Section */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<HelpCircle className="h-5 w-5" />
						YouTube Download FAQs
					</CardTitle>
					<CardDescription>
						Common questions about downloading YouTube videos
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-3">
						<h4 className="font-semibold">
							Is it legal to download YouTube videos?
						</h4>
						<p className="text-sm text-muted-foreground">
							Downloading videos for personal offline use is generally
							acceptable for public domain or Creative Commons content. However,
							downloading copyrighted content without permission may violate
							YouTube's Terms of Service. Always respect content creators'
							rights.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">Can I download YouTube Shorts?</h4>
						<p className="text-sm text-muted-foreground">
							Yes! YouTube Shorts use the same URL structure. Simply paste the
							Shorts link and download like any regular video.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">
							Can I convert YouTube videos to MP3?
						</h4>
						<p className="text-sm text-muted-foreground">
							Absolutely! Our tool extracts audio from any YouTube video and
							saves it as an MP3 file. Perfect for music, podcasts, and
							lectures.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">
							What video qualities are available?
						</h4>
						<p className="text-sm text-muted-foreground">
							We offer multiple quality options including 360p, 480p, 720p HD,
							1080p Full HD, and 4K when available from the original upload.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">
							Do I need to install any software?
						</h4>
						<p className="text-sm text-muted-foreground">
							No! Our YouTube downloader is 100% web-based. No software
							installation, browser extensions, or suspicious APKs required.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">Is there a download limit?</h4>
						<p className="text-sm text-muted-foreground">
							We don't impose artificial limits. Download as many videos as you
							need for personal use.
						</p>
					</div>
				</CardContent>
			</Card>

			{/* User Reviews */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Star className="h-5 w-5" />
						What Users Say About YouTube Downloader
					</CardTitle>
					<CardDescription>Reviews from our community of users</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div className="space-y-4">
							<div className="border rounded-lg p-4">
								<div className="flex items-center gap-2 mb-2">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="h-4 w-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<span className="text-sm font-medium">Alex T., Student</span>
								</div>
								<p className="text-sm text-muted-foreground">
									"Perfect for downloading lecture recordings for offline study.
									The MP3 conversion feature is a lifesaver for podcasts!"
								</p>
								<p className="text-xs text-muted-foreground mt-2">
									December 10, 2025
								</p>
							</div>

							<div className="border rounded-lg p-4">
								<div className="flex items-center gap-2 mb-2">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="h-4 w-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<span className="text-sm font-medium">
										Maria L., Content Creator
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									"Fast, reliable, and no annoying ads. I use this to save
									reference videos for my editing projects. Highly recommend!"
								</p>
								<p className="text-xs text-muted-foreground mt-2">
									December 5, 2025
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<div className="border rounded-lg p-4">
								<div className="flex items-center gap-2 mb-2">
									<div className="flex">
										{[...Array(4)].map((_, i) => (
											<Star
												key={i}
												className="h-4 w-4 fill-yellow-400 text-yellow-400"
											/>
										))}
										<Star className="h-4 w-4 text-gray-300" />
									</div>
									<span className="text-sm font-medium">James K., Teacher</span>
								</div>
								<p className="text-sm text-muted-foreground">
									"Great tool for downloading educational content for my
									classroom. Works perfectly on my phone too."
								</p>
								<p className="text-xs text-muted-foreground mt-2">
									November 28, 2025
								</p>
							</div>

							<div className="border rounded-lg p-4">
								<div className="flex items-center gap-2 mb-2">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="h-4 w-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<span className="text-sm font-medium">
										Sarah W., Marketing Manager
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									"The best YouTube downloader I've found. Clean interface, fast
									downloads, and the 4K quality option is amazing."
								</p>
								<p className="text-xs text-muted-foreground mt-2">
									November 20, 2025
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Related Tools */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Wrench className="h-5 w-5" />
						Related Social Media Tools
					</CardTitle>
					<CardDescription>
						More tools for social media content management
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
							<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
								<Scissors className="h-6 w-6 text-white" />
							</div>
							<h4 className="font-medium mb-1">TikTok Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Download TikTok videos without watermark
							</p>
						</div>

						<div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
							<div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
								<FileText className="h-6 w-6 text-white" />
							</div>
							<h4 className="font-medium mb-1">Instagram Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Save Instagram photos, videos, and stories
							</p>
						</div>

						<div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
							<div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
								<Play className="h-6 w-6 text-white" />
							</div>
							<h4 className="font-medium mb-1">Facebook Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Download Facebook videos and reels
							</p>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* SEO Content Section */}
			<div className="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle>The Ultimate Guide to YouTube Video Downloads</CardTitle>
					</CardHeader>
					<CardContent className="prose prose-sm max-w-none">
						<h3>Why Download YouTube Videos?</h3>
						<p>
							YouTube is the world's largest video platform with over 2 billion
							monthly active users. Whether you're a student saving lectures, a
							creator researching trends, or simply want offline access to your
							favorite content, having a reliable YouTube downloader is
							essential. Our tool provides fast, secure downloads in multiple
							quality options.
						</p>

						<h3>YouTube Video Download Best Practices</h3>
						<p>
							When downloading YouTube videos, consider these best practices:
						</p>
						<ul>
							<li>
								<strong>Respect Copyright:</strong> Only download content for
								personal use and respect creators' rights
							</li>
							<li>
								<strong>Choose Quality Wisely:</strong> Higher resolutions for
								archival, lower for mobile storage
							</li>
							<li>
								<strong>Use Legal Sources:</strong> Download from public videos
								only
							</li>
							<li>
								<strong>Backup Important Content:</strong> Save videos you want
								to keep before they're removed
							</li>
						</ul>

						<h3>YouTube Audio Downloads</h3>
						<p>
							Many users download YouTube videos just for the audio. Our MP3
							extraction feature allows you to:
						</p>
						<ul>
							<li>Save music tracks for offline listening</li>
							<li>Download podcasts and lectures</li>
							<li>Extract audio for video editing projects</li>
							<li>Create personal music libraries</li>
						</ul>

						<h3>Tips for Content Creators</h3>
						<p>
							If you're creating content on YouTube, downloading videos can help
							you:
						</p>
						<ul>
							<li>Study successful video formats and styles</li>
							<li>Analyze trending content strategies</li>
							<li>Get inspiration for your own videos</li>
							<li>Learn from top creators in your niche</li>
						</ul>

						<h3>Legal and Ethical Considerations</h3>
						<p>
							While downloading YouTube videos for personal use is generally
							acceptable, always consider:
						</p>
						<ul>
							<li>Copyright laws in your country</li>
							<li>Fair use guidelines for educational purposes</li>
							<li>YouTube's Terms of Service</li>
							<li>Respect for content creators' rights</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
