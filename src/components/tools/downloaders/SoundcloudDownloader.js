"use client";

import { AlertCircle, BookOpen, CheckCircle, Download, Globe, Headphones, HelpCircle, Link, Loader2, Music, Shield, Star, Wrench, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SoundcloudDownloader() {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [audioData, setAudioData] = useState(null);
	const [error, setError] = useState("");

	const handleDownload = async () => {
		if (!url.trim()) { setError("Please enter a SoundCloud URL"); return; }
		if (!url.includes("soundcloud.com") && !url.includes("snd.sc")) { setError("Please enter a valid SoundCloud URL"); return; }
		setIsLoading(true); setError(""); setAudioData(null);
		try {
			const response = await fetch("/api/proxy/universal", {
				method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }),
			});
			if (!response.ok) throw new Error("Failed to fetch audio information");
			const data = await response.json();
			if (!data || data.error || !data.medias) throw new Error("Could not find audio. Please check the URL and try again.");
			setAudioData({
				title: data.title || "SoundCloud Track", thumbnail: data.thumbnail,
				duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "", author: data.author || "Unknown Artist",
				qualities: data.medias.map((m) => ({ quality: m.quality, size: m.size || "Unknown", url: m.url, type: m.type })),
			});
		} catch (err) { setError("Failed to process the SoundCloud audio. Please try again."); }
		finally { setIsLoading(false); }
	};
	const downloadContent = (quality) => window.open(quality.url, "_blank");

	return (
		<div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Headphones className="h-5 w-5" />SoundCloud Downloader</CardTitle></CardHeader>
				<CardContent className="space-y-4">
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
						<Input type="url" placeholder="Paste SoundCloud track URL here..." value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1" />
						<Button onClick={handleDownload} disabled={isLoading} className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
							{isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}{isLoading ? "Processing..." : "Download"}
						</Button>
					</div>
					{error && <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50"><AlertCircle className="h-4 w-4" /><span className="text-sm">{error}</span></div>}
					{audioData && <div className="space-y-4">
						<div className="flex items-center gap-2 p-3 bg-muted/50 border"><CheckCircle className="h-4 w-4" /><span className="text-sm">SoundCloud audio processed successfully!</span></div>
						<Card><CardContent className="p-4">
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								<img src={audioData.thumbnail} alt="Thumbnail" className="w-full sm:w-24 h-32 sm:h-16 object-cover rounded" />
								<div className="flex-1 min-w-0"><h3 className="font-medium text-sm mb-1">{audioData.title}</h3><p className="text-xs text-muted-foreground">Duration: {audioData.duration}</p><p className="text-xs text-muted-foreground">Artist: {audioData.author}</p></div>
							</div>
							<div className="mt-4 space-y-2"><h4 className="text-sm font-medium">Choose Download Option:</h4>
								{audioData.qualities.map((quality, index) => (
									<div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 border rounded gap-2">
										<div className="flex-1 min-w-0"><span className="text-sm font-medium">{quality.quality}</span><span className="text-xs text-muted-foreground ml-2">({quality.size})</span></div>
										<Button size="sm" onClick={() => downloadContent(quality)} className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
											<Music className="h-3 w-3 mr-1" />Download
										</Button>
									</div>
								))}
							</div>
						</CardContent></Card>
					</div>}
					<div className="text-xs text-muted-foreground"><p>Download SoundCloud tracks as MP3</p><p>High-quality audio downloads</p><p>Free and no registration required</p></div>
				</CardContent>
			</Card>
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />How to Download SoundCloud Tracks</CardTitle></CardHeader>
				<CardContent><div className="space-y-4">
					{[{step:1,title:"Find the Track",desc:"Browse SoundCloud and find the track."},{step:2,title:"Copy the URL",desc:"Copy the track URL."},{step:3,title:"Paste and Download",desc:"Paste URL above and click download."},{step:4,title:"Save Your Audio",desc:"The track will download as MP3."}].map((item) => (
						<div key={item.step} className="flex flex-col sm:flex-row gap-3 sm:gap-4"><div className="flex-shrink-0 w-8 h-8 bg-orange-100 items-center justify-center"><span className="text-sm font-semibold text-orange-500">{item.step}</span></div><div className="flex-1 min-w-0"><h4 className="font-semibold">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div></div>
					))}
				</div></CardContent>
			</Card>
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5" />Features</CardTitle></CardHeader>
				<CardContent><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-100 shrink-0 items-center justify-center"><Headphones className="h-4 w-4 text-orange-500" /></div><div className="min-w-0"><h4 className="font-semibold">High Quality Audio</h4><p className="text-sm text-muted-foreground">Download in best available quality</p></div></div>
					<div className="flex items-start gap-3"><div className="w-8 h-8 bg-green-100 shrink-0 items-center justify-center"><Shield className="h-4 w-4 text-green-600" /></div><div className="min-w-0"><h4 className="font-semibold">Safe & Secure</h4><p className="text-sm text-muted-foreground">No malware, no registration</p></div></div>
					<div className="flex items-start gap-3"><div className="w-8 h-8 bg-purple-100 shrink-0 items-center justify-center"><Zap className="h-4 w-4 text-purple-600" /></div><div className="min-w-0"><h4 className="font-semibold">Fast Processing</h4></div></div>
					<div className="flex items-start gap-3"><div className="w-8 h-8 bg-teal-100 shrink-0 items-center justify-center"><Globe className="h-4 w-4 text-teal-600" /></div><div className="min-w-0"><h4 className="font-semibold">All Devices</h4></div></div>
				</div></CardContent>
			</Card>
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><HelpCircle className="h-5 w-5" />FAQs</CardTitle></CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-3"><h4 className="font-semibold">Is it free?</h4><p className="text-sm text-muted-foreground">Yes, 100% free with no registration.</p></div>
					<div className="space-y-3"><h4 className="font-semibold">Can I download on mobile?</h4><p className="text-sm text-muted-foreground">Yes! Works on all devices.</p></div>
					<div className="space-y-3"><h4 className="font-semibold">What quality is available?</h4><p className="text-sm text-muted-foreground">We offer the best available quality from SoundCloud.</p></div>
				</CardContent>
			</Card>
		</div>
	);
}
