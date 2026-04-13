"use client";

import {
	AlertCircle,
	CheckCircle2,
	Download,
	Loader2,
	Search,
} from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/**
 * @param {Object} props
 * @param {string} [props.placeholder]
 * @param {string} [props.buttonText]
 */
export const DownloaderEngine = ({ placeholder, buttonText }) => {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [videoData, setVideoData] = useState(null);
	const [error, setError] = useState("");

	const handleDownload = async () => {
		if (!url.trim()) {
			setError("Please enter a valid URL");
			return;
		}

		setIsLoading(true);
		setError("");
		setVideoData(null);

		try {
			const response = await fetch("/api/proxy/universal", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ url: url }),
			});

			if (!response.ok) throw new Error("Failed to fetch video information");

			const data = await response.json();

			if (!data || data.error || !data.medias) {
				throw new Error(
					"Could not find video. Please check the URL and try again.",
				);
			}

			setVideoData({
				platform: data.source || "Unknown",
				title: data.title || "Video",
				thumbnail: data.thumbnail,
				duration: data.duration ? `${(data.duration / 1000).toFixed(0)}s` : "",
				author: data.author,
				qualities: data.medias.map((m) => ({
					id: m.id || Math.random().toString(),
					quality: m.quality,
					size: m.size || "Unknown",
					type: m.type === "audio" ? "audio" : "video",
					url: m.url,
				})),
			});
		} catch (err) {
			setError(err.message || "Failed to process the video. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const triggerDownload = (quality) => {
		const link = document.createElement("a");
		link.href = quality.url;
		link.download = `${videoData.title || "video"}.${quality.type === "audio" ? "mp3" : "mp4"}`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row gap-3">
				<Input
					type="url"
					placeholder={placeholder || "Paste video URL here..."}
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					className="flex-1 h-12"
					disabled={isLoading}
				/>
				<Button
					onClick={handleDownload}
					disabled={isLoading}
					className="h-12 px-8 font-bold"
				>
					{isLoading ? (
						<Loader2 className="h-5 w-5 animate-spin mr-2" />
					) : (
						<Search className="h-5 w-5 mr-2" />
					)}
					{buttonText || "Analyze"}
				</Button>
			</div>

			{error && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}

			{videoData && (
				<div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
					<div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600">
						<CheckCircle2 className="h-5 w-5" />
						<span className="text-sm font-bold">
							{videoData.platform} video ready for download!
						</span>
					</div>

					<Card className="overflow-hidden border-border/50">
						<CardContent className="p-0 flex flex-col md:flex-row">
							<div className="md:w-64 aspect-video md:aspect-auto relative bg-muted">
								<img
									src={videoData.thumbnail}
									alt={videoData.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="p-6 flex-1 min-w-0">
								<h3 className="font-bold text-xl truncate mb-2">
									{videoData.title}
								</h3>
								<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
									{videoData.author && <span>By: {videoData.author}</span>}
									{videoData.duration && (
										<span>Duration: {videoData.duration}</span>
									)}
								</div>
							</div>
						</CardContent>
					</Card>

					<div className="grid grid-cols-1 gap-3">
						{videoData.qualities.map((quality, idx) => (
							<div
								key={idx}
								className="flex items-center justify-between p-4 bg-card border border-border/50 rounded-xl hover:bg-accent transition-colors"
							>
								<div className="flex items-center gap-4">
									<div className="font-bold">{quality.quality}</div>
									<Badge variant="outline">{quality.size}</Badge>
									{quality.type === "audio" && <Badge>MP3</Badge>}
								</div>
								<Button
									onClick={() => triggerDownload(quality)}
									variant="secondary"
									size="sm"
								>
									<Download className="h-4 w-4 mr-2" />
									Download
								</Button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
