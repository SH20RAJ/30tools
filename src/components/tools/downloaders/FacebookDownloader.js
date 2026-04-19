"use client";

import {
	AlertCircle,
	BookOpen,
	CheckCircle,
	Download,
	FileText,
	HelpCircle,
	Link,
	Loader2,
	Play,
	Scissors,
	Shield,
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

export default function FacebookDownloader({
	title = "Facebook Video Downloader",
}) {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [videoData, setVideoData] = useState(null);
	const [error, setError] = useState("");

	const handleDownload = async () => {
		if (!url.trim()) {
			setError("Please enter a Facebook video URL");
			return;
		}

		if (
			!url.includes("facebook.com") &&
			!url.includes("fb.watch") &&
			!url.includes("fb.com")
		) {
			setError("Please enter a valid Facebook URL");
			return;
		}

		setIsLoading(true);
		setError("");
		setVideoData(null);

		try {
			const response = await fetch("/api/proxy/universal", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ url }),
			});

			if (!response.ok) throw new Error("Failed to fetch video information");

			const data = await response.json();

			if (!data || data.error || !data.medias) {
				throw new Error(
					"Could not find video. Please check the URL and try again.",
				);
			}

			setVideoData({
				title: data.title || "Facebook Video",
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
			setError("Failed to process the Facebook video. Please try again.");
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
							placeholder="Paste Facebook video, reel, or story URL here..."
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							className="flex-1"
						/>
						<Button
							onClick={handleDownload}
							disabled={isLoading}
							className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
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
						<div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 structive">
							<AlertCircle className="h-4 w-4" />
							<span className="text-sm">{error}</span>
						</div>
					)}

					{videoData && (
						<div className="space-y-4">
							<div className="flex items-center gap-2 p-3 bg-muted/50 border border-border ">
								<CheckCircle className="h-4 w-4" />
								<span className="text-sm">
									Facebook video processed successfully!
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
													className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
												>
													<Download className="h-3 w-3 mr-1" />
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
						<p>• Download Facebook videos in HD quality</p>
						<p>• Save Facebook Reels and Stories</p>
						<p>• No login required, 100% free</p>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<BookOpen className="h-5 w-5" />
						How to Download Facebook Videos
					</CardTitle>
					<CardDescription>
						Step-by-step guide to download Facebook videos easily
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{[
							{
								step: 1,
								title: "Find the Facebook Video",
								desc: "Open Facebook app or website and find the video, reel, or story you want to download.",
							},
							{
								step: 2,
								title: "Copy the Video URL",
								desc: "Click the share button and select 'Copy link' to get the video URL.",
							},
							{
								step: 3,
								title: "Paste URL and Download",
								desc: "Paste the URL in the input field above and click download. Choose your preferred quality.",
							},
							{
								step: 4,
								title: "Save Your Video",
								desc: "The video will be downloaded in MP4 format to your device.",
							},
						].map((item) => (
							<div
								key={item.step}
								className="flex flex-col sm:flex-row gap-3 sm:gap-4"
							>
								<div className="flex-shrink-0 w-8 h-8 bg-blue-100 items-center justify-center">
									<span className="text-sm font-semibold text-blue-600">
										{item.step}
									</span>
								</div>
								<div className="flex-1 min-w-0">
									<h4 className="font-semibold">{item.title}</h4>
									<p className="text-sm text-muted-foreground">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Zap className="h-5 w-5" />
						Facebook Downloader Features
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-blue-100 items-center justify-center shrink-0">
									<Video className="h-4 w-4 text-blue-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">HD & 4K Quality</h4>
									<p className="text-sm text-muted-foreground">
										Download videos in highest available resolution
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 bg-green-100 items-center justify-center shrink-0">
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
								<div className="w-8 h-8 bg-purple-100 items-center justify-center shrink-0">
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
								<div className="w-8 h-8 bg-orange-100 items-center justify-center shrink-0">
									<Users className="h-4 w-4 text-orange-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold">Reels & Stories</h4>
									<p className="text-sm text-muted-foreground">
										Download Facebook Reels and Stories easily
									</p>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<HelpCircle className="h-5 w-5" />
						Facebook Download FAQs
					</CardTitle>
					<CardDescription>
						Common questions about downloading Facebook videos
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					{[
						{
							q: "Is it free to download Facebook videos?",
							a: "Yes! Our Facebook video downloader is completely free. No hidden charges or subscription needed.",
						},
						{
							q: "Can I download Facebook Reels?",
							a: "Absolutely! Facebook Reels can be downloaded just like regular videos. Simply paste the reel URL.",
						},
						{
							q: "Can I download Facebook Stories?",
							a: "Yes, as long as the story is public and you have the direct URL to it.",
						},
						{
							q: "What quality options are available?",
							a: "We offer multiple quality options including SD, HD (720p), Full HD (1080p), and 4K when available.",
						},
						{
							q: "Do I need a Facebook account?",
							a: "No! You don't need to log in or create an account to use our downloader.",
						},
					].map((faq, i) => (
						<div key={i} className="space-y-3">
							<h4 className="font-semibold">{faq.q}</h4>
							<p className="text-sm text-muted-foreground">{faq.a}</p>
						</div>
					))}
				</CardContent>
			</Card>

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
						<div className="text-center p-4 border transition-colors">
							<div className="w-12 h-12 bg-black items-center justify-center mx-auto mb-3">
								<Scissors className="h-6 w-6 text-white" />
							</div>
							<h4 className="font-medium mb-1">TikTok Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Download TikTok videos without watermark
							</p>
						</div>
						<div className="text-center p-4 border transition-colors">
							<div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 items-center justify-center mx-auto mb-3">
								<FileText className="h-6 w-6 text-white" />
							</div>
							<h4 className="font-medium mb-1">Instagram Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Save Instagram photos, videos, and stories
							</p>
						</div>
						<div className="text-center p-4 border transition-colors">
							<div className="w-12 h-12 bg-red-600 items-center justify-center mx-auto mb-3">
								<Play className="h-6 w-6 text-white" />
							</div>
							<h4 className="font-medium mb-1">YouTube Downloader</h4>
							<p className="text-sm text-muted-foreground">
								Download YouTube videos and audio
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
