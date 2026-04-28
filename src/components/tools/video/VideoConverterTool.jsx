"use client";

import { useState, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
	Upload,
	Download,
	RefreshCcw,
	Film,
	Settings2,
	CheckCircle2,
	AlertCircle,
} from "lucide-react";

const OUTPUT_FORMATS = [
	{ value: "webm", label: "WebM (VP8)", mimeType: "video/webm" },
	{ value: "mp4", label: "MP4 (H.264)", mimeType: "video/mp4" },
	{ value: "ogg", label: "OGG (Theora)", mimeType: "video/ogg" },
];

export default function VideoConverterTool() {
	const [videoFile, setVideoFile] = useState(null);
	const [videoUrl, setVideoUrl] = useState("");
	const [outputFormat, setOutputFormat] = useState("webm");
	const [isConverting, setIsConverting] = useState(false);
	const [progress, setProgress] = useState(0);
	const [convertedUrl, setConvertedUrl] = useState("");
	const [convertedName, setConvertedName] = useState("");
	const [currentStep, setCurrentStep] = useState("");
	const [videoInfo, setVideoInfo] = useState(null);
	const fileInputRef = useRef(null);
	const videoRef = useRef(null);
	const canvasRef = useRef(null);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		if (!file) return;

		const validTypes = [
			"video/mp4",
			"video/webm",
			"video/ogg",
			"video/quicktime",
			"video/x-msvideo",
			"video/x-matroska",
		];
		if (!validTypes.includes(file.type) && !file.name.match(/\.(mp4|webm|ogg|mov|avi|mkv)$/i)) {
			toast.error("Unsupported format. Use MP4, WebM, OGG, MOV, AVI, or MKV.");
			return;
		}

		if (file.size > 2 * 1024 * 1024 * 1024) {
			toast.error("File too large. Max 2GB.");
			return;
		}

		setVideoFile(file);
		setConvertedUrl("");
		setVideoInfo(null);

		const url = URL.createObjectURL(file);
		setVideoUrl(url);

		const video = document.createElement("video");
		video.preload = "metadata";
		video.onloadedmetadata = () => {
			setVideoInfo({
				duration: Math.round(video.duration),
				width: video.videoWidth,
				height: video.videoHeight,
				size: (file.size / (1024 * 1024)).toFixed(1),
				type: file.type || "unknown",
			});
		};
		video.src = url;
		toast.success("Video uploaded successfully");
	};

	const convertVideo = useCallback(async () => {
		if (!videoFile || !videoUrl) {
			toast.error("Please upload a video first");
			return;
		}

		const format = OUTPUT_FORMATS.find((f) => f.value === outputFormat);
		if (!format) return;

		setIsConverting(true);
		setProgress(0);
		setConvertedUrl("");
		setCurrentStep("Setting up conversion...");

		try {
			const video = videoRef.current;
			if (!video) throw new Error("Video element not found");

			await new Promise((resolve) => {
				video.onloadedmetadata = resolve;
				video.load();
			});

			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			canvas.width = video.videoWidth || 1280;
			canvas.height = video.videoHeight || 720;

			const stream = canvas.captureStream(30);

			if (video.captureStream) {
				const audioTracks = video.captureStream().getAudioTracks();
				audioTracks.forEach((track) => stream.addTrack(track));
			}

			let mimeType = format.mimeType;
			if (!MediaRecorder.isTypeSupported(mimeType)) {
				if (MediaRecorder.isTypeSupported("video/webm;codecs=vp8")) {
					mimeType = "video/webm;codecs=vp8";
				} else if (MediaRecorder.isTypeSupported("video/webm")) {
					mimeType = "video/webm";
				} else {
					throw new Error("No supported video format found in this browser");
				}
			}

			const recorder = new MediaRecorder(stream, {
				mimeType,
				videoBitsPerSecond: 5000000,
			});
			const chunks = [];

			recorder.ondataavailable = (e) => {
				if (e.data.size > 0) chunks.push(e.data);
			};

			recorder.onstop = () => {
				const blob = new Blob(chunks, { type: mimeType });
				const url = URL.createObjectURL(blob);
				setConvertedUrl(url);
				setConvertedName(
					`${videoFile.name.replace(/\.[^/.]+$/, "")}.${format.value}`
				);
				setCurrentStep("Conversion complete!");
				setProgress(100);
				toast.success("Video converted successfully!");
			};

			setCurrentStep("Converting video frames...");
			video.currentTime = 0;
			await video.play();
			recorder.start(100);

			const duration = video.duration || 10;
			const drawFrame = () => {
				if (video.paused || video.ended) {
					recorder.stop();
					return;
				}
				ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
				const pct = Math.min((video.currentTime / duration) * 100, 99);
				setProgress(pct);
				requestAnimationFrame(drawFrame);
			};

			video.onended = () => {
				recorder.stop();
				video.pause();
			};

			drawFrame();
		} catch (error) {
			toast.error(error.message || "Conversion failed. Try a different format.");
			setCurrentStep("");
		} finally {
			setIsConverting(false);
		}
	}, [videoFile, videoUrl, outputFormat]);

	const downloadConverted = () => {
		if (!convertedUrl) return;
		const a = document.createElement("a");
		a.href = convertedUrl;
		a.download = convertedName;
		a.click();
		toast.success("Download started!");
	};

	const reset = () => {
		if (videoUrl) URL.revokeObjectURL(videoUrl);
		if (convertedUrl) URL.revokeObjectURL(convertedUrl);
		setVideoFile(null);
		setVideoUrl("");
		setConvertedUrl("");
		setVideoInfo(null);
		setProgress(0);
		setCurrentStep("");
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-wrap gap-2">
				<Badge variant="secondary">🔒 100% Browser-Side</Badge>
				<Badge variant="secondary">⚡ Fast Conversion</Badge>
				<Badge variant="secondary">🎬 No Upload to Server</Badge>
			</div>

			<div className="grid lg:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Settings2 className="h-5 w-5 text-primary" />
							Upload & Configure
						</CardTitle>
						<CardDescription>
							Upload your video and select the output format
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<Label>Video File</Label>
							<input
								ref={fileInputRef}
								type="file"
								accept="video/*"
								onChange={handleFileUpload}
								className="hidden"
							/>
							<Button
								variant="outline"
								onClick={() => fileInputRef.current?.click()}
								className="w-full h-28 border-dashed mt-2"
								disabled={isConverting}
							>
								<div className="text-center">
									<Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
									<p className="text-sm font-medium">
										{videoFile ? videoFile.name : "Click to upload video"}
									</p>
									<p className="text-xs text-muted-foreground">
										MP4, WebM, MOV, AVI (max 2GB)
									</p>
								</div>
							</Button>
						</div>

						{videoInfo && (
							<div className="grid grid-cols-2 gap-3 text-sm">
								<div className="p-2 bg-muted/50 rounded">
									<span className="text-muted-foreground">Duration:</span>{" "}
									{Math.floor(videoInfo.duration / 60)}m {videoInfo.duration % 60}s
								</div>
								<div className="p-2 bg-muted/50 rounded">
									<span className="text-muted-foreground">Resolution:</span>{" "}
									{videoInfo.width}x{videoInfo.height}
								</div>
								<div className="p-2 bg-muted/50 rounded">
									<span className="text-muted-foreground">Size:</span>{" "}
									{videoInfo.size}MB
								</div>
								<div className="p-2 bg-muted/50 rounded">
									<span className="text-muted-foreground">Format:</span>{" "}
									{videoInfo.type.split("/")[1]?.toUpperCase() || "Unknown"}
								</div>
							</div>
						)}

						<div>
							<Label>Output Format</Label>
							<Select
								value={outputFormat}
								onValueChange={setOutputFormat}
								disabled={isConverting}
							>
								<SelectTrigger className="mt-1">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{OUTPUT_FORMATS.map((f) => (
										<SelectItem key={f.value} value={f.value}>
											{f.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="flex gap-2">
							<Button
								onClick={convertVideo}
								disabled={isConverting || !videoFile}
								className="flex-1"
							>
								<Film className="h-4 w-4 mr-2" />
								{isConverting ? "Converting..." : "Convert Video"}
							</Button>
							<Button variant="outline" onClick={reset} disabled={isConverting}>
								<RefreshCcw className="h-4 w-4" />
							</Button>
						</div>

						{currentStep && (
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>{currentStep}</span>
									<span>{Math.round(progress)}%</span>
								</div>
								<Progress value={progress} />
							</div>
						)}
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Film className="h-5 w-5 text-primary" />
							Preview & Download
						</CardTitle>
						<CardDescription>
							Preview the converted video and download
						</CardDescription>
					</CardHeader>
					<CardContent>
						{convertedUrl ? (
							<div className="space-y-4">
								<video
									src={convertedUrl}
									controls
									className="w-full rounded-lg bg-black"
								/>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="h-5 w-5 text-green-500" />
									<span className="text-sm font-medium">
										{convertedName}
									</span>
								</div>
								<Button onClick={downloadConverted} className="w-full">
									<Download className="h-4 w-4 mr-2" />
									Download Converted Video
								</Button>
							</div>
						) : videoUrl ? (
							<video
								ref={videoRef}
								src={videoUrl}
								controls
								className="w-full rounded-lg bg-black"
							/>
						) : (
							<div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg">
								<div className="text-center text-muted-foreground">
									<Film className="h-12 w-12 mx-auto mb-2" />
									<p>Upload a video to start conversion</p>
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</div>

			<canvas ref={canvasRef} className="hidden" />
		</div>
	);
}
