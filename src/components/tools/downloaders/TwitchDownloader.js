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

export default function TwitchDownloader() {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [videoData, setVideoData] = useState(null);
	const [error, setError] = useState("");

	const handleDownload = async () => {
		if (!url.trim()) {
			setError("Please enter a Twitch URL");
			return;
		}

		if (!url.includes("twitch.tv") && !url.includes("clips.twitch.tv")) {
			setError("Please enter a valid Twitch URL");
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
				throw new Error("Could not find video. Please check the URL and try again.");
			}
			setVideoData({
				title: data.title || "Twitch Clip/VOD",
				thumbnail: data.thumbnail,
				duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "",
				author: data.author || "Unknown Streamer",
				qualities: data.medias.map((m) => ({
					quality: m.quality, size: m.size || "Unknown", url: m.url, type: m.type,
				})),
			});
		} catch (err) {
			setError("Failed to process the Twitch content. Please try again.");
		} finally { setIsLoading(false); }
	};

	const downloadContent = (quality) => window.open(quality.url, "_blank");

	return (
		<div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Card>
				<CardHeader><CardTitle className="flex items-center gap-2"><Link className="h-5 w-5" />Twitch Video Downloader</CardTitle></CardHeader>
				<CardContent className="space-y-4">
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
						<Input type="url" placeholder="Paste Twitch clip or VOD URL here..." value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1" />
						<Button onClick={handleDownload} disabled={isLoading} className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
							{isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
							{isLoading ? "Processing..." : "Download"}
						</Button>
					</div>
					{error && <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50"><AlertCircle className="h-4 w-4" /><span className="text-sm">{error}</span></div>}
					{videoData && <div className="space-y-4">
						<div className="flex items-center gap-2 p-3 bg-muted/50 border"><CheckCircle className="h-4 w-4" /><span className="text-sm">Twitch content processed successfully!</span></div>
						<Card><CardContent className="p-4">
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								<img src={videoData.thumbnail} alt="Thumbnail" className="w-full sm:w-24 h-32 sm:h-16 object-cover rounded" />
								<div className="flex-1 min-w-0">
									<h3 className="font-medium text-sm mb-1">{videoData.title}</h3>
									<p className="text-xs text-muted-foreground">Duration: {videoData.duration}</p>
									<p className="text-xs text-muted-foreground">Streamer: {videoData.author}</p>
								</div>
							</div>
							<div className="mt-4 space-y-2">
								<h4 className="text-sm font-medium">Choose Download Option:</h4>
								{videoData.qualities.map((quality, index) => (
									<div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 border rounded gap-2">
										<div className="flex-1 min-w-0"><span className="text-sm font-medium">{quality.quality}</span><span className="text-xs text-muted-foreground ml-2">({quality.size})</span></div>
										<Button size="sm" onClick={() => downloadContent(quality)} className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
											{quality.type === "audio" ? <Music className="h-3 w-3 mr-1" /> : <Download className="h-3 w-3 mr-1" />}Download
										</Button>
									</div>
								))}
							</div>
						</CardContent></Card>
					</div>}
					<div className="text-xs text-muted-foreground"><p>Download Twitch clips and VODs in multiple qualities</p><p>Support for highlights and full broadcasts</p><p>Free and no registration required</p></div>
				</CardContent>
			</Card>

			<Card><CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />How to Download Twitch Videos</CardTitle><CardDescription>Step-by-step guide to download Twitch clips and VODs</CardDescription></CardHeader>
				<CardContent><div className="space-y-4">
					{[{step:1,title:"Find the Twitch Clip/VOD",desc:"Browse Twitch and find the clip or VOD you want to download."},{step:2,title:"Copy the URL",desc:"Copy the URL from your browser's address bar."},{step:3,title:"Paste and Download",desc:"Paste the URL above and click download. Choose your preferred quality."},{step:4,title:"Save Your Video",desc:"The video will download to your device for offline viewing."}].map((item) => (
						<div key={item.step} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<div className="flex-shrink-0 w-8 h-8 bg-purple-100 items-center justify-center"><span className="text-sm font-semibold text-purple-600">{item.step}</span></div>
							<div className="flex-1 min-w-0"><h4 className="font-semibold">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div>
						</div>
					))}
				</div></CardContent>
			</Card>

			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5" />Twitch Downloader Features</CardTitle></CardHeader>
				<CardContent><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
					<div className="space-y-4">
						<div className="flex items-start gap-3"><div className="w-8 h-8 bg-purple-100 items-center justify-center shrink-0"><Play className="h-4 w-4 text-purple-600" /></div><div className="min-w-0"><h4 className="font-semibold">Clips & VODs</h4><p className="text-sm text-muted-foreground">Download both clips and full VODs easily</p></div></div>
						<div className="flex items-start gap-3"><div className="w-8 h-8 bg-green-100 items-center justify-center shrink-0"><Shield className="h-4 w-4 text-green-600" /></div><div className="min-w-0"><h4 className="font-semibold">Safe & Secure</h4><p className="text-sm text-muted-foreground">No malware, no registration needed</p></div></div>
					</div>
					<div className="space-y-4">
						<div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-100 items-center justify-center shrink-0"><Zap className="h-4 w-4 text-orange-600" /></div><div className="min-w-0"><h4 className="font-semibold">Fast Processing</h4><p className="text-sm text-muted-foreground">Quick downloads with instant processing</p></div></div>
						<div className="flex items-start gap-3"><div className="w-8 h-8 bg-teal-100 items-center justify-center shrink-0"><Globe className="h-4 w-4 text-teal-600" /></div><div className="min-w-0"><h4 className="font-semibold">All Devices</h4><p className="text-sm text-muted-foreground">Works on desktop, tablet, and mobile</p></div></div>
					</div>
				</div></CardContent>
			</Card>

			<Card><CardHeader><CardTitle className="flex items-center gap-2"><HelpCircle className="h-5 w-5" />Twitch Download FAQs</CardTitle><CardDescription>Common questions about downloading Twitch content</CardDescription></CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-3"><h4 className="font-semibold">Is it legal to download Twitch content?</h4><p className="text-sm text-muted-foreground">Downloading for personal offline viewing is generally acceptable. Always respect streamers' rights and Twitch's Terms of Service.</p></div>
					<div className="space-y-3"><h4 className="font-semibold">Can I download live streams?</h4><p className="text-sm text-muted-foreground">Our tool works with published VODs and clips. Live streams need to be completed and available as VODs first.</p></div>
					<div className="space-y-3"><h4 className="font-semibold">What quality options are available?</h4><p className="text-sm text-muted-foreground">We offer all available qualities including 1080p, 720p, 480p, and 360p depending on the original stream quality.</p></div>
					<div className="space-y-3"><h4 className="font-semibold">Is this service free?</h4><p className="text-sm text-muted-foreground">Yes, 100% free with no registration or download limits.</p></div>
				</CardContent>
			</Card>

			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Star className="h-5 w-5" />What Users Say</CardTitle><CardDescription>Reviews from our community</CardDescription></CardHeader>
				<CardContent><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
					{[{name:"Alex G., Streamer", review:"Great for downloading my own VODs for editing. Clean and fast.", date:"December 2024",rating:5},{name:"Mike R., Esports Fan", review:"Perfect for saving tournament highlights. Works every time.", date:"November 2024",rating:5},{name:"Sarah K., Content Creator", review:"Reliable Twitch downloader. The clip downloading is super useful.", date:"November 2024",rating:4},{name:"Tom L., Gamer", review:"Best free Twitch downloader I've found. Simple and effective.", date:"October 2024",rating:5}].map((review,i) => (
						<div key={i} className="border p-4"><div className="flex items-center gap-2 mb-2"><div className="flex">{[...Array(5)].map((_,j) => <Star key={j} className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />)}</div><span className="text-sm font-medium">{review.name}</span></div><p className="text-sm text-muted-foreground">{review.review}</p><p className="text-xs text-muted-foreground mt-2">{review.date}</p></div>
					))}
				</div></CardContent>
			</Card>

			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Wrench className="h-5 w-5" />Related Tools</CardTitle><CardDescription>More video tools</CardDescription></CardHeader>
				<CardContent><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="text-center p-4 border"><div className="w-12 h-12 bg-red-100 items-center justify-center mx-auto mb-3"><Play className="h-6 w-6 text-red-600" /></div><h4 className="font-medium mb-1">YouTube Downloader</h4><p className="text-sm text-muted-foreground">Download YouTube videos and audio</p></div>
					<div className="text-center p-4 border"><div className="w-12 h-12 bg-blue-100 items-center justify-center mx-auto mb-3"><Scissors className="h-6 w-6 text-blue-600" /></div><h4 className="font-medium mb-1">Dailymotion Downloader</h4><p className="text-sm text-muted-foreground">Save Dailymotion videos easily</p></div>
					<div className="text-center p-4 border"><div className="w-12 h-12 bg-cyan-100 items-center justify-center mx-auto mb-3"><Users className="h-6 w-6 text-cyan-600" /></div><h4 className="font-medium mb-1">Vimeo Downloader</h4><p className="text-sm text-muted-foreground">Download Vimeo videos in original quality</p></div>
				</div></CardContent>
			</Card>
		</div>
	);
}
