"use client";

import { AlertCircle, BookOpen, CheckCircle, Download, Globe, HelpCircle, Link, Loader2, Music, Play, Shield, Star, Wrench, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function BilibiliDownloader() {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [videoData, setVideoData] = useState(null);
	const [error, setError] = useState("");

	const handleDownload = async () => {
		if (!url.trim()) { setError("Please enter a Bilibili video URL"); return; }
		if (!url.includes("bilibili.com") && !url.includes("b23.tv")) { setError("Please enter a valid Bilibili URL"); return; }
		setIsLoading(true); setError(""); setVideoData(null);
		try {
			const response = await fetch("/api/proxy/universal", {
				method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }),
			});
			if (!response.ok) throw new Error("Failed to fetch video information");
			const data = await response.json();
			if (!data || data.error || !data.medias) throw new Error("Could not find video. Please check the URL and try again.");
			setVideoData({
				title: data.title || "Bilibili Video", thumbnail: data.thumbnail,
				duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "", author: data.author || "Unknown",
				qualities: data.medias.map((m) => ({ quality: m.quality, size: m.size || "Unknown", url: m.url, type: m.type })),
			});
		} catch (err) { setError("Failed to process the Bilibili video. Please try again."); }
		finally { setIsLoading(false); }
	};
	const downloadContent = (quality) => window.open(quality.url, "_blank");

	return (
		<div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Link className="h-5 w-5" />Bilibili Video Downloader</CardTitle></CardHeader>
				<CardContent className="space-y-4">
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
						<Input type="url" placeholder="Paste Bilibili video URL here..." value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1" />
						<Button onClick={handleDownload} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
							{isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}{isLoading ? "Processing..." : "Download"}
						</Button>
					</div>
					{error && <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50"><AlertCircle className="h-4 w-4" /><span className="text-sm">{error}</span></div>}
					{videoData && <div className="space-y-4">
						<div className="flex items-center gap-2 p-3 bg-muted/50 border"><CheckCircle className="h-4 w-4" /><span className="text-sm">Bilibili video processed successfully!</span></div>
						<Card><CardContent className="p-4">
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								<img src={videoData.thumbnail} alt="Thumbnail" className="w-full sm:w-24 h-32 sm:h-16 object-cover rounded" />
								<div className="flex-1 min-w-0"><h3 className="font-medium text-sm mb-1">{videoData.title}</h3><p className="text-xs text-muted-foreground">Duration: {videoData.duration}</p><p className="text-xs text-muted-foreground">Uploader: {videoData.author}</p></div>
							</div>
							<div className="mt-4 space-y-2"><h4 className="text-sm font-medium">Choose Download Option:</h4>
								{videoData.qualities.map((quality, index) => (
									<div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 border rounded gap-2">
										<div className="flex-1 min-w-0"><span className="text-sm font-medium">{quality.quality}</span><span className="text-xs text-muted-foreground ml-2">({quality.size})</span></div>
										<Button size="sm" onClick={() => downloadContent(quality)} className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
											{quality.type === "audio" ? <Music className="h-3 w-3 mr-1" /> : <Download className="h-3 w-3 mr-1" />}Download
										</Button>
									</div>
								))}
							</div>
						</CardContent></Card>
					</div>}
					<div className="text-xs text-muted-foreground"><p>Download Bilibili videos in HD quality</p><p>Support for all Bilibili video formats</p><p>Free and no registration required</p></div>
				</CardContent>
			</Card>
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />How to Download Bilibili Videos</CardTitle></CardHeader>
				<CardContent><div className="space-y-4">
					{[{step:1,title:"Find the Bilibili Video",desc:"Open Bilibili and find the video you want."},{step:2,title:"Copy the URL",desc:"Copy the video URL from your browser."},{step:3,title:"Paste and Download",desc:"Paste the URL above and click download."},{step:4,title:"Save Your Video",desc:"The video will download to your device."}].map((item) => (
						<div key={item.step} className="flex flex-col sm:flex-row gap-3 sm:gap-4"><div className="flex-shrink-0 w-8 h-8 bg-blue-100 items-center justify-center"><span className="text-sm font-semibold text-blue-600">{item.step}</span></div><div className="flex-1 min-w-0"><h4 className="font-semibold">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div></div>
					))}
				</div></CardContent>
			</Card>
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5" />Features</CardTitle></CardHeader>
				<CardContent><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="flex items-start gap-3"><div className="w-8 h-8 bg-blue-100 shrink-0 items-center justify-center"><Play className="h-4 w-4 text-blue-600" /></div><div className="min-w-0"><h4 className="font-semibold">HD Quality</h4><p className="text-sm text-muted-foreground">Multiple resolution options</p></div></div>
					<div className="flex items-start gap-3"><div className="w-8 h-8 bg-green-100 shrink-0 items-center justify-center"><Shield className="h-4 w-4 text-green-600" /></div><div className="min-w-0"><h4 className="font-semibold">Safe & Secure</h4><p className="text-sm text-muted-foreground">No malware, no registration</p></div></div>
					<div className="flex items-start gap-3"><div className="w-8 h-8 bg-purple-100 shrink-0 items-center justify-center"><Zap className="h-4 w-4 text-purple-600" /></div><div className="min-w-0"><h4 className="font-semibold">Fast Processing</h4><p className="text-sm text-muted-foreground">Quick downloads</p></div></div>
					<div className="flex items-start gap-3"><div className="w-8 h-8 bg-teal-100 shrink-0 items-center justify-center"><Globe className="h-4 w-4 text-teal-600" /></div><div className="min-w-0"><h4 className="font-semibold">All Devices</h4><p className="text-sm text-muted-foreground">Desktop, tablet, and mobile</p></div></div>
				</div></CardContent>
			</Card>
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><HelpCircle className="h-5 w-5" />FAQs</CardTitle></CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-3"><h4 className="font-semibold">Is it free?</h4><p className="text-sm text-muted-foreground">Yes, 100% free with no registration.</p></div>
					<div className="space-y-3"><h4 className="font-semibold">Can I download danmaku videos?</h4><p className="text-sm text-muted-foreground">Yes, our tool works with all Bilibili content including videos with danmaku.</p></div>
					<div className="space-y-3"><h4 className="font-semibold">Can I download on mobile?</h4><p className="text-sm text-muted-foreground">Absolutely! Works on all devices.</p></div>
				</CardContent>
			</Card>
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Star className="h-5 w-5" />User Reviews</CardTitle></CardHeader>
				<CardContent><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{[{name:"Zhang L.", review:"Perfect for downloading Bilibili content for offline study.", date:"Dec 2024",r:5},{name:"Wei C.", review:"Works great! Fast downloads and good quality.", date:"Nov 2024",r:5},{name:"Hannah M.", review:"Reliable Bilibili downloader. Highly recommend.", date:"Nov 2024",r:4}].map((r,i) => (
						<div key={i} className="border p-4"><div className="flex items-center gap-2 mb-2"><div className="flex">{[...Array(5)].map((_,j) => <Star key={j} className={`h-4 w-4 ${j<r.r?'fill-yellow-400 text-yellow-400':'text-gray-300'}`} />)}</div><span className="text-sm font-medium">{r.name}</span></div><p className="text-sm text-muted-foreground">{r.review}</p><p className="text-xs text-muted-foreground mt-2">{r.date}</p></div>
					))}
				</div></CardContent>
			</Card>
		</div>
	);
}
