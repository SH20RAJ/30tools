"use client";

import {
	AlertCircle,
	BookOpen,
	CheckCircle,
	Download,
	Globe,
	HelpCircle,
	Link,
	Loader2,
	Monitor,
	Music,
	Play,
	Scissors,
	Shield,
	Star,
	Users,
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

export default function DailymotionDownloader() {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [videoData, setVideoData] = useState(null);
	const [error, setError] = useState("");

	const handleDownload = async () => {
		if (!url.trim()) {
			setError("Please enter a Dailymotion video URL");
			return;
		}

		if (!url.includes("dailymotion.com") && !url.includes("dai.ly")) {
			setError("Please enter a valid Dailymotion URL");
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
				title: data.title || "Dailymotion Video",
				thumbnail: data.thumbnail,
				duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "",
				author: data.author || "Unknown",
				qualities: data.medias.map((m) => ({
					quality: m.quality,
					size: m.size || "Unknown",
					url: m.url,
					type: m.type,
				})),
			});
		} catch (err) {
			console.error(err);
			setError("Failed to process the Dailymotion video. Please try again.");
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
						Dailymotion Video Downloader
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
						<Input
							type="url"
							placeholder="Paste Dailymotion video URL here (e.g., https://www.dailymotion.com/video/...)"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							className="flex-1"
						/>
						<Button
							onClick={handleDownload}
							disabled={isLoading}
							className="bg-blue-700 hover:bg-blue-800 w-full sm:w-auto"
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
									Dailymotion video processed successfully!
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
													className="bg-blue-700 hover:bg-blue-800 w-full sm:w-auto"
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
						<p>Download Dailymotion videos in multiple qualities</p>
						<p>Support for HD and Full HD resolutions</p>
						<p>Free and no registration required</p>
					</div>
				</CardContent>
			</Card>

			{/* How to Use Guide */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<BookOpen className="h-5 w-5" />
						How to Download Dailymotion Videos
					</CardTitle>
					<CardDescription>
						Step-by-step guide to download Dailymotion videos
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
								<span className="text-sm font-semibold text-blue-700">1</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold">Find the Dailymotion Video</h4>
								<p className="text-sm text-muted-foreground">
									Open Dailymotion and find the video you want to download.
									Ensure it's publicly available.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
								<span className="text-sm font-semibold text-blue-700">2</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold">Copy the Video URL</h4>
								<p className="text-sm text-muted-foreground">
									Copy the URL from your browser's address bar or use the Share
									button.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
								<span className="text-sm font-semibold text-blue-700">3</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold">Paste and Download</h4>
								<p className="text-sm text-muted-foreground">
									Paste the URL above and click download. Select your preferred
									quality.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
								<span className="text-sm font-semibold text-blue-700">4</span>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold">Save Your Video</h4>
								<p className="text-sm text-muted-foreground">
									The video will download in your chosen quality. Save it for
									offline viewing.
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
						Dailymotion Downloader Features
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
									<Play className="h-4 w-4 text-blue-700" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">Multiple Qualities</h4>
									<p className="text-sm text-muted-foreground">
										Download from SD to Full HD
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
										No malware, no registration needed
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
									<Music className="h-4 w-4 text-purple-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">Audio Extraction</h4>
									<p className="text-sm text-muted-foreground">
										Extract audio from Dailymotion videos
									</p>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
									<Zap className="h-4 w-4 text-orange-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">Fast Processing</h4>
									<p className="text-sm text-muted-foreground">
										Quick downloads with instant processing
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
									<Globe className="h-4 w-4 text-teal-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">All Devices</h4>
									<p className="text-sm text-muted-foreground">
										Works on desktop, tablet, and mobile
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0">
									<Users className="h-4 w-4 text-red-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">Unlimited Downloads</h4>
									<p className="text-sm text-muted-foreground">
										No daily limits on video downloads
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
						Dailymotion Download FAQs
					</CardTitle>
					<CardDescription>
						Common questions about downloading Dailymotion videos
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-3">
						<h4 className="font-semibold">
							Is it legal to download Dailymotion videos?
						</h4>
						<p className="text-sm text-muted-foreground">
							Downloading for personal use is generally acceptable. Always
							respect copyright and the creator's rights. Never redistribute
							content without permission.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">
							What quality options are available?
						</h4>
						<p className="text-sm text-muted-foreground">
							We offer all available qualities from the original upload,
							including 240p, 380p, 480p, 720p HD, and 1080p Full HD.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">Is this service free?</h4>
						<p className="text-sm text-muted-foreground">
							Yes, 100% free with no registration, no hidden fees, and no
							download limits.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">Can I download on my phone?</h4>
						<p className="text-sm text-muted-foreground">
							Absolutely! Our tool works on all devices including iPhone,
							Android, tablets, and desktop computers.
						</p>
					</div>
				</CardContent>
			</Card>

			{/* User Reviews */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Star className="h-5 w-5" />
						What Users Say About Dailymotion Downloader
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
									<span className="text-sm font-medium">
										Pierre D., Journalist
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									"Great for downloading news clips and interviews from
									Dailymotion. Fast and reliable every time."
								</p>
								<p className="text-xs text-muted-foreground mt-2">
									November 15, 2024
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
										Marie L., Researcher
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									"Perfect for archiving educational content. The quality is
									always preserved perfectly."
								</p>
								<p className="text-xs text-muted-foreground mt-2">
									November 10, 2024
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
									<span className="text-sm font-medium">Jean M., Teacher</span>
								</div>
								<p className="text-sm text-muted-foreground">
									"Use it to download educational videos for my classes. Simple
									and effective tool."
								</p>
								<p className="text-xs text-muted-foreground mt-2">
									November 7, 2024
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
										Sophie R., Video Editor
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									"Reliable downloader for Dailymotion content. Clean interface
									and good download speeds."
								</p>
								<p className="text-xs text-muted-foreground mt-2">
									November 3, 2024
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
						Related Video Tools
					</CardTitle>
					<CardDescription>
						More tools for video content management
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
							<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
								<Play className="h-6 w-6 text-red-600" />
							</div>
							<h4 className="font-medium mb-1">YouTube Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Download YouTube videos and audio
							</p>
						</div>

						<div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
							<div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
								<Monitor className="h-6 w-6 text-cyan-600" />
							</div>
							<h4 className="font-medium mb-1">Vimeo Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Save Vimeo videos in original quality
							</p>
						</div>

						<div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
							<div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
								<Scissors className="h-6 w-6 text-indigo-600" />
							</div>
							<h4 className="font-medium mb-1">Twitch Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Download Twitch clips and VODs
							</p>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* SEO Content Section */}
			<div className="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle>The Complete Guide to Dailymotion Downloads</CardTitle>
					</CardHeader>
					<CardContent className="prose prose-sm max-w-none">
						<h3>Why Download Dailymotion Videos?</h3>
						<p>
							Dailymotion is one of the world's largest video sharing platforms,
							particularly popular in Europe. Whether you're a researcher
							archiving content, a teacher saving educational videos, or simply
							want to watch videos offline, our Dailymotion downloader makes it
							simple and fast.
						</p>

						<h3>Dailymotion Download Best Practices</h3>
						<p>
							When downloading Dailymotion videos, consider these best
							practices:
						</p>
						<ul>
							<li>
								<strong>Respect Copyright:</strong> Download only for personal
								use or with permission
							</li>
							<li>
								<strong>Choose Best Quality:</strong> Select the highest
								available resolution
							</li>
							<li>
								<strong>Check Video Availability:</strong> Some videos may be
								region-restricted
							</li>
							<li>
								<strong>Use for Education:</strong> Great for saving tutorials
								and documentaries
							</li>
						</ul>

						<h3>Common Dailymotion Download Issues</h3>
						<div className="bg-muted p-4 rounded-lg">
							<h4>Can't Download a Video?</h4>
							<ul className="mt-2 space-y-1">
								<li>
									<strong>Region Locked:</strong> Content may be restricted in
									your country
								</li>
								<li>
									<strong>Deleted Content:</strong> The video has been removed
								</li>
								<li>
									<strong>Private Video:</strong> Only accessible to specific
									users
								</li>
							</ul>
						</div>

						<h3>Legal Considerations</h3>
						<p>
							Always respect copyright laws and creator rights when downloading
							content from Dailymotion.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
