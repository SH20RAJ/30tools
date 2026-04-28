"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import {
	Upload,
	Download,
	RefreshCcw,
	Scissors,
	Play,
	Pause,
	SkipBack,
	SkipForward,
	Crop,
	Settings2,
	CheckCircle2,
} from "lucide-react";

export default function VideoEditorTool() {
	const [videoFile, setVideoFile] = useState(null);
	const [videoUrl, setVideoUrl] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [progress, setProgress] = useState(0);
	const [currentStep, setCurrentStep] = useState("");
	const [editedUrl, setEditedUrl] = useState("");
	const [editedName, setEditedName] = useState("");
	const [videoInfo, setVideoInfo] = useState(null);
	const [currentTime, setCurrentTime] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [trimStart, setTrimStart] = useState(0);
	const [trimEnd, setTrimEnd] = useState(100);
	const [editMode, setEditMode] = useState("trim");
	const [outputQuality, setOutputQuality] = useState("high");
	const [cropTop, setCropTop] = useState(0);
	const [cropBottom, setCropBottom] = useState(0);
	const [cropLeft, setCropLeft] = useState(0);
	const [cropRight, setCropRight] = useState(0);
	const [playbackRate, setPlaybackRate] = useState(1);
	const fileInputRef = useRef(null);
	const videoRef = useRef(null);
	const canvasRef = useRef(null);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		if (!file) return;

		if (!file.type.startsWith("video/")) {
			toast.error("Please upload a valid video file.");
			return;
		}

		if (file.size > 2 * 1024 * 1024 * 1024) {
			toast.error("File too large. Max 2GB.");
			return;
		}

		setVideoFile(file);
		setEditedUrl("");
		setVideoInfo(null);

		const url = URL.createObjectURL(file);
		setVideoUrl(url);

		const video = document.createElement("video");
		video.preload = "metadata";
		video.onloadedmetadata = () => {
			setVideoInfo({
				duration: video.duration,
				width: video.videoWidth,
				height: video.videoHeight,
				size: (file.size / (1024 * 1024)).toFixed(1),
				type: file.type,
			});
			setTrimEnd(100);
		};
		video.src = url;
		toast.success("Video uploaded successfully");
	};

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const updateTime = () => setCurrentTime(video.currentTime);
		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);

		video.addEventListener("timeupdate", updateTime);
		video.addEventListener("play", handlePlay);
		video.addEventListener("pause", handlePause);

		return () => {
			video.removeEventListener("timeupdate", updateTime);
			video.removeEventListener("play", handlePlay);
			video.removeEventListener("pause", handlePause);
		};
	}, [videoUrl]);

	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;
		if (video.paused) video.play();
		else video.pause();
	};

	const seekTo = (time) => {
		const video = videoRef.current;
		if (!video) return;
		video.currentTime = time;
	};

	const skipFrames = (seconds) => {
		const video = videoRef.current;
		if (!video) return;
		video.currentTime = Math.max(
			0,
			Math.min(video.duration, video.currentTime + seconds)
		);
	};

	const formatTime = (seconds) => {
		if (!seconds || isNaN(seconds)) return "0:00";
		const m = Math.floor(seconds / 60);
		const s = Math.floor(seconds % 60);
		return `${m}:${s.toString().padStart(2, "0")}`;
	};

	const processVideo = useCallback(async () => {
		if (!videoFile || !videoUrl) {
			toast.error("Please upload a video first");
			return;
		}

		const video = videoRef.current;
		if (!video) return;

		setIsProcessing(true);
		setProgress(0);
		setCurrentStep("Preparing video...");

		try {
			const duration = video.duration;
			const startTime = (trimStart / 100) * duration;
			const endTime = (trimEnd / 100) * duration;
			const clipDuration = endTime - startTime;

			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");

			let outputWidth = video.videoWidth;
			let outputHeight = video.videoHeight;

			if (editMode === "crop") {
				outputWidth =
					video.videoWidth - cropLeft - cropRight;
				outputHeight =
					video.videoHeight - cropTop - cropBottom;
				if (outputWidth <= 0 || outputHeight <= 0) {
					throw new Error("Invalid crop dimensions");
				}
			}

			canvas.width = outputWidth;
			canvas.height = outputHeight;

			const stream = canvas.captureStream(30);

			if (video.captureStream) {
				const audioTracks = video.captureStream().getAudioTracks();
				audioTracks.forEach((track) => stream.addTrack(track));
			}

			let mimeType = "video/webm;codecs=vp8";
			if (!MediaRecorder.isTypeSupported(mimeType)) {
				mimeType = "video/webm";
			}

			const qualityBitrate = {
				original: 8000000,
				high: 5000000,
				medium: 2500000,
				low: 1000000,
			};

			const recorder = new MediaRecorder(stream, {
				mimeType,
				videoBitsPerSecond: qualityBitrate[outputQuality] || 5000000,
			});
			const chunks = [];

			recorder.ondataavailable = (e) => {
				if (e.data.size > 0) chunks.push(e.data);
			};

			recorder.onstop = () => {
				const blob = new Blob(chunks, { type: mimeType });
				const url = URL.createObjectURL(blob);
				setEditedUrl(url);
				setEditedName(
					`${videoFile.name.replace(/\.[^/.]+$/, "")}_edited.webm`
				);
				setCurrentStep("Done!");
				setProgress(100);
				toast.success("Video edited successfully!");
			};

			video.currentTime = startTime;
			await new Promise((resolve) => {
				video.onseeked = resolve;
			});

			setCurrentStep("Processing video...");
			await video.play();
			recorder.start(100);

			const drawFrame = () => {
				if (video.currentTime >= endTime || video.paused || video.ended) {
					video.pause();
					recorder.stop();
					return;
				}

				if (editMode === "crop") {
					ctx.drawImage(
						video,
						cropLeft,
						cropTop,
						outputWidth,
						outputHeight,
						0,
						0,
						outputWidth,
						outputHeight
					);
				} else {
					ctx.drawImage(video, 0, 0, outputWidth, outputHeight);
				}

				const pct = Math.min(
					((video.currentTime - startTime) / clipDuration) * 100,
					99
				);
				setProgress(pct);
				requestAnimationFrame(drawFrame);
			};

			drawFrame();
		} catch (error) {
			toast.error(error.message || "Editing failed. Please try again.");
			setCurrentStep("");
		} finally {
			setIsProcessing(false);
		}
	}, [
		videoFile,
		videoUrl,
		editMode,
		trimStart,
		trimEnd,
		outputQuality,
		cropTop,
		cropBottom,
		cropLeft,
		cropRight,
	]);

	const downloadEdited = () => {
		if (!editedUrl) return;
		const a = document.createElement("a");
		a.href = editedUrl;
		a.download = editedName;
		a.click();
		toast.success("Download started!");
	};

	const reset = () => {
		if (videoUrl) URL.revokeObjectURL(videoUrl);
		if (editedUrl) URL.revokeObjectURL(editedUrl);
		setVideoFile(null);
		setVideoUrl("");
		setEditedUrl("");
		setVideoInfo(null);
		setProgress(0);
		setCurrentStep("");
		setTrimStart(0);
		setTrimEnd(100);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-wrap gap-2">
				<Badge variant="secondary">🔒 100% Browser-Side</Badge>
				<Badge variant="secondary">✂️ Trim & Crop</Badge>
				<Badge variant="secondary">🎬 No Upload Required</Badge>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Scissors className="h-5 w-5 text-primary" />
						Video Editor
					</CardTitle>
					<CardDescription>
						Trim, crop, and edit videos directly in your browser
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div>
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
							className="w-full h-20 border-dashed"
							disabled={isProcessing}
						>
							<div className="text-center">
								<Upload className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
								<p className="text-sm font-medium">
									{videoFile ? videoFile.name : "Click to upload video"}
								</p>
							</div>
						</Button>
					</div>

					{videoUrl && (
						<>
							<div className="relative bg-black rounded-lg overflow-hidden">
								<video
									ref={videoRef}
									src={videoUrl}
									className="w-full max-h-[400px]"
									playsInline
								/>
							</div>

							<div className="flex items-center gap-2 justify-center">
								<Button
									variant="outline"
									size="icon"
									onClick={() => skipFrames(-5)}
								>
									<SkipBack className="h-4 w-4" />
								</Button>
								<Button
									variant="outline"
									size="lg"
									onClick={togglePlay}
									className="w-12 h-12 rounded-full"
								>
									{isPlaying ? (
										<Pause className="h-5 w-5" />
									) : (
										<Play className="h-5 w-5" />
									)}
								</Button>
								<Button
									variant="outline"
									size="icon"
									onClick={() => skipFrames(5)}
								>
									<SkipForward className="h-4 w-4" />
								</Button>
								<span className="text-sm font-mono ml-4">
									{formatTime(currentTime)} /{" "}
									{formatTime(videoInfo?.duration)}
								</span>
							</div>

							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<Label>Edit Mode</Label>
									<Select
										value={editMode}
										onValueChange={setEditMode}
										disabled={isProcessing}
									>
										<SelectTrigger className="mt-1">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="trim">Trim (Cut segment)</SelectItem>
											<SelectItem value="crop">Crop (Resize frame)</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div>
									<Label>Output Quality</Label>
									<Select
										value={outputQuality}
										onValueChange={setOutputQuality}
										disabled={isProcessing}
									>
										<SelectTrigger className="mt-1">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="original">Original</SelectItem>
											<SelectItem value="high">High</SelectItem>
											<SelectItem value="medium">Medium</SelectItem>
											<SelectItem value="low">Low</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							{editMode === "trim" && (
								<div className="space-y-3">
									<div>
										<Label>
											Trim Start: {formatTime(
												(trimStart / 100) * (videoInfo?.duration || 0)
											)}
										</Label>
										<Slider
											value={[trimStart]}
											onValueChange={([v]) => {
												setTrimStart(v);
												seekTo((v / 100) * (videoInfo?.duration || 0));
											}}
											max={trimEnd}
											step={0.1}
											className="mt-2"
										/>
									</div>
									<div>
										<Label>
											Trim End: {formatTime(
												(trimEnd / 100) * (videoInfo?.duration || 0)
											)}
										</Label>
										<Slider
											value={[trimEnd]}
											onValueChange={([v]) => {
												setTrimEnd(v);
												seekTo((v / 100) * (videoInfo?.duration || 0));
											}}
											min={trimStart}
											max={100}
											step={0.1}
											className="mt-2"
										/>
									</div>
									<div className="text-center text-sm text-muted-foreground">
										Output duration:{" "}
										{formatTime(
											((trimEnd - trimStart) / 100) *
												(videoInfo?.duration || 0)
										)}
									</div>
								</div>
							)}

							{editMode === "crop" && videoInfo && (
								<div className="space-y-3">
									<div className="grid grid-cols-2 gap-3">
										<div>
											<Label>Crop Top (px)</Label>
											<Input
												type="number"
												value={cropTop}
												onChange={(e) =>
													setCropTop(
														Math.min(
															Number(e.target.value),
															videoInfo.height - 1
														)
													)
												}
												min={0}
												max={videoInfo.height - 1}
											/>
										</div>
										<div>
											<Label>Crop Bottom (px)</Label>
											<Input
												type="number"
												value={cropBottom}
												onChange={(e) =>
													setCropBottom(
														Math.min(
															Number(e.target.value),
															videoInfo.height - cropTop - 1
														)
													)
												}
												min={0}
											/>
										</div>
										<div>
											<Label>Crop Left (px)</Label>
											<Input
												type="number"
												value={cropLeft}
												onChange={(e) =>
													setCropLeft(
														Math.min(
															Number(e.target.value),
															videoInfo.width - 1
														)
													)
												}
												min={0}
												max={videoInfo.width - 1}
											/>
										</div>
										<div>
											<Label>Crop Right (px)</Label>
											<Input
												type="number"
												value={cropRight}
												onChange={(e) =>
													setCropRight(
														Math.min(
															Number(e.target.value),
															videoInfo.width - cropLeft - 1
														)
													)
												}
												min={0}
											/>
										</div>
									</div>
									<div className="text-center text-sm text-muted-foreground">
										Output size:{" "}
										{videoInfo.width - cropLeft - cropRight}x
										{videoInfo.height - cropTop - cropBottom}
									</div>
								</div>
							)}

							<div className="flex gap-2">
								<Button
									onClick={processVideo}
									disabled={isProcessing || !videoFile}
									className="flex-1"
								>
									<Scissors className="h-4 w-4 mr-2" />
									{isProcessing ? "Processing..." : "Apply Edits"}
								</Button>
								<Button
									variant="outline"
									onClick={reset}
									disabled={isProcessing}
								>
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
						</>
					)}

					{editedUrl && (
						<div className="space-y-3 p-4 border rounded-lg bg-muted/20">
							<h4 className="font-medium flex items-center gap-2">
								<CheckCircle2 className="h-5 w-5 text-green-500" />
								Edited Video
							</h4>
							<video
								src={editedUrl}
								controls
								className="w-full rounded-lg bg-black"
							/>
							<Button onClick={downloadEdited} className="w-full">
								<Download className="h-4 w-4 mr-2" />
								Download Edited Video
							</Button>
						</div>
					)}
				</CardContent>
			</Card>

			<canvas ref={canvasRef} className="hidden" />
		</div>
	);
}
