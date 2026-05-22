"use client";

import { AlertCircle, BookOpen, CheckCircle, Download, Globe, HelpCircle, Link, Loader2, Music, Play, Search, Shield, Star, Wrench, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SitemapUrlDownloader() {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [videoData, setVideoData] = useState(null);
	const [error, setError] = useState("");

	const handleDownload = async () => {
		if (!url.trim()) { setError("Please enter a URL"); return; }
		setIsLoading(true); setError(""); setVideoData(null);
		try {
			const response = await fetch("/api/proxy/universal", {
				method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }),
			});
			if (!response.ok) throw new Error("Failed to fetch data");
			const data = await response.json();
			if (!data || data.error || !data.medias) throw new Error("Could not find content. Please check the URL and try again.");
			setVideoData({
				title: data.title || "Content", thumbnail: data.thumbnail,
				duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "", author: data.author || "Unknown",
				medias: data.medias,
			});
		} catch (err) { setError("Failed to process. Please try again."); }
		finally { setIsLoading(false); }
	};

	return (
		<div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<Card><CardHeader><CardTitle className="flex items-center gap-2"><Search className="h-5 w-5" />Sitemap URL Downloader</CardTitle><CardDescription>Extract URLs from any website sitemap</CardDescription></CardHeader>
				<CardContent className="space-y-4">
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
						<Input type="url" placeholder="Enter website URL or sitemap URL..." value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1" />
						<Button onClick={handleDownload} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
							{isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
							{isLoading ? "Processing..." : "Extract URLs"}
						</Button>
					</div>
					{error && <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50"><AlertCircle className="h-4 w-4" /><span className="text-sm">{error}</span></div>}
				</CardContent>
			</Card>
		</div>
	);
}
