"use client";

import {
	CheckIcon,
	DownloadIcon,
	FileIcon,
	ReplaceAll,
	UploadIcon,
	XIcon,
	ZapIcon,
	ArrowRight
} from "lucide-react";
import { useCallback, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { GlassCard, PremiumDropZone } from "../shared/WorkspaceComponents";
import { cn } from "@/lib/utils";

export default function ImageCompressorTool() {
	const [files, setFiles] = useState([]);
	const [isCompressing, setIsCompressing] = useState(false);
	const [quality, setQuality] = useState([80]);
	const [dragActive, setDragActive] = useState(false);

	const processFiles = useCallback((fileList) => {
		const newFiles = fileList.map((file, index) => ({
			id: Date.now() + index,
			file,
			name: file.name,
			originalSize: file.size,
			status: "pending",
			progress: 0,
			compressedBlob: null,
			compressedSize: null,
		}));

		setFiles((prev) => [...prev, ...newFiles]);
	}, []);

	const handleDrag = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	}, []);

	const handleDrop = useCallback(
		(e) => {
			e.preventDefault();
			e.stopPropagation();
			setDragActive(false);

			const droppedFiles = Array.from(e.dataTransfer.files);
			const imageFiles = droppedFiles.filter((file) =>
				file.type.startsWith("image/"),
			);

			if (imageFiles.length > 0) {
				processFiles(imageFiles);
			}
		},
		[processFiles],
	);

	const handleFileInput = (e) => {
		const selectedFiles = Array.from(e.target.files);
		if (selectedFiles.length > 0) {
			processFiles(selectedFiles);
		}
	};

	const formatFileSize = (bytes) => {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const sizes = ["Bytes", "KB", "MB", "GB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
	};

	const compressImage = useCallback(async (fileItem) => {
		return new Promise((resolve) => {
			if (typeof window === "undefined") return resolve(null);
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			const img = new Image();

			img.onload = () => {
				// Calculate optimal dimensions for better compression
				let { width, height } = img;
				const maxDimension = 2048; // Max dimension for web optimization

				if (width > maxDimension || height > maxDimension) {
					const ratio = Math.min(maxDimension / width, maxDimension / height);
					width *= ratio;
					height *= ratio;
				}

				canvas.width = width;
				canvas.height = height;

				// Use better image rendering
				ctx.imageSmoothingEnabled = true;
				ctx.imageSmoothingQuality = "high";
				ctx.drawImage(img, 0, 0, width, height);

				// Determine optimal format and quality
				let outputFormat = "image/jpeg";
				let outputQuality = quality[0] / 100;

				// Use WebP for better compression if supported
				if (canvas.toBlob && typeof canvas.toBlob === "function") {
					// Test WebP support
					canvas.toBlob(
						(testBlob) => {
							if (testBlob && testBlob.type === "image/webp") {
								outputFormat = "image/webp";
								outputQuality = Math.max(0.8, quality[0] / 100); // WebP can use higher quality
							}

							canvas.toBlob(
								(blob) => {
									resolve({
										blob,
										size: blob.size,
										format: outputFormat,
										dimensions: { width, height },
									});
								},
								outputFormat,
								outputQuality,
							);
						},
						"image/webp",
						0.8,
					);
				} else {
					// Fallback to JPEG
					canvas.toBlob(
						(blob) => {
							resolve({
								blob,
								size: blob.size,
								format: outputFormat,
								dimensions: { width, height },
							});
						},
						outputFormat,
						outputQuality,
					);
				}
			};

			img.onerror = () => {
				resolve({ error: "Failed to load image" });
			};

			img.src = URL.createObjectURL(fileItem.file);
		});
	}, [quality]);

	const handleCompress = async () => {
		setIsCompressing(true);

		for (let i = 0; i < files.length; i++) {
			if (files[i].status === "pending") {
				setFiles((prev) =>
					prev.map((f, index) =>
						index === i ? { ...f, status: "compressing", progress: 50 } : f,
					),
				);

				try {
					const result = await compressImage(files[i]);

					setFiles((prev) =>
						prev.map((f, index) =>
							index === i
								? {
									...f,
									status: "completed",
									progress: 100,
									compressedBlob: result.blob,
									compressedSize: result.size,
								}
								: f,
						),
					);
				} catch (error) {
					setFiles((prev) =>
						prev.map((f, index) =>
							index === i ? { ...f, status: "error", progress: 0 } : f,
						),
					);
				}
			}
		}

		setIsCompressing(false);
	};

	const downloadFile = (fileItem) => {
		if (fileItem.compressedBlob) {
			const url = URL.createObjectURL(fileItem.compressedBlob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `compressed-${fileItem.name}`;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		}
	};

	const downloadAllAsZip = async () => {
		files.forEach((file) => {
			if (file.status === "completed") {
				setTimeout(() => downloadFile(file), 100);
			}
		});
	};

	const removeFile = (id) => {
		setFiles((prev) => prev.filter((f) => f.id !== id));
	};

	const clearAll = () => {
		setFiles([]);
	};

	const getSavingsPercentage = (original, compressed) => {
		if (!compressed) return 0;
		return Math.round((1 - compressed / original) * 100);
	};

	return (
		<div className="w-full max-w-5xl mx-auto space-y-12 animate-in pb-24">
			{/* Uploader */}
			<section>
				<PremiumDropZone
					onDrop={handleDrop}
					onDragOver={handleDrag}
					onDragLeave={handleDrag}
					onClick={() => document.getElementById('file-upload').click()}
					dragActive={dragActive}
					title="Drop photos to compress"
					subtitle="Instant size reduction for JPEG, PNG, and WebP images."
				/>
				<input
					type="file"
					multiple
					accept="image/*"
					onChange={handleFileInput}
					className="hidden"
					id="file-upload"
				/>
			</section>

			{files.length > 0 && (
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					{/* Settings & Summary Column (Fixed width on desktop) */}
					<div className="lg:col-span-5 space-y-8 order-last lg:order-first">
						<GlassCard className="p-8">
							<div className="flex items-center gap-3 mb-8">
								<ReplaceAll className="text-primary w-6 h-6" />
								<h3 className="text-2xl font-bold">Compression</h3>
							</div>

							<div className="space-y-10">
								<div className="space-y-6 px-2">
									<div className="flex justify-between items-end">
										<Label className="text-lg font-bold">Target Quality</Label>
										<span className="text-4xl font-black text-primary font-mono tracking-tighter">
											{quality[0]}
											<span className="text-xl">%</span>
										</span>
									</div>
									<Slider
										id="quality-slider"
										value={quality}
										onValueChange={setQuality}
										min={10}
										max={100}
										step={5}
										className="py-4"
									/>
									<div className="flex justify-between text-xs font-bold text-muted-foreground leading-none">
										<span>Smallest File</span>
										<span>Best Quality</span>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<Button 
										onClick={handleCompress} 
										disabled={isCompressing || !files.some(f => f.status === "pending")}
										className="h-20 rounded-none text-lg font-black tracking-tight shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
									>
										{isCompressing ? <RefreshCwIcon className="w-5 h-5" /> : <ZapIcon className="w-5 h-5 fill-current" />}
										{isCompressing ? "Shrinking..." : "Optimise"}
									</Button>
									
									<Button 
										variant="outline" 
										onClick={clearAll}
										className="h-20 rounded-none font-bold border-border/40 hover:bg-destructive/5 hover:text-destructive hover:border-destructive/20 transition-all px-0"
									>
										Clear All
									</Button>
								</div>
							</div>
						</GlassCard>

						<GlassCard className="p-8">
							<div className="space-y-6">
								<div className="flex justify-between text-base font-bold text-muted-foreground uppercase tracking-widest text-[10px]">
									Optimization Stats
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="p-6 rounded-3xl bg-muted/20 border border-border/40 text-center">
										<div className="text-2xl font-black">{files.length}</div>
										<div className="text-xs text-muted-foreground font-bold">Files</div>
									</div>
									<div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 text-center">
										<div className="text-2xl font-black text-emerald-500">
											{files.filter(f => f.status === "completed").length}
										</div>
										<div className="text-xs text-emerald-600 font-bold">Done</div>
									</div>
								</div>

								{files.some(f => f.status === "completed") && (
									<Button 
										onClick={downloadAllAsZip} 
										variant="secondary" 
										className="w-full h-14 rounded-none font-black text-lg shadow-xl"
									>
										<DownloadIcon className="w-5 h-5 mr-3" />
										Download All
									</Button>
								)}
							</div>
						</GlassCard>
					</div>

					{/* File List Column */ }
	<div className="lg:col-span-7 space-y-6">
		<GlassCard className="p-8 h-full">
			<h3 className="text-2xl font-bold mb-8">Ready to Process</h3>
			<div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
				{files.map((fileItem) => (
					<div
						key={fileItem.id}
						className={cn(
											"flex items-center gap-5 p-5 rounded-3xl border border-border/40 transition-all duration-300",
							fileItem.status === "completed" && "bg-emerald-500/[0.03] border-emerald-500/20 shadow-sm shadow-emerald-500/5"
						)}
					>
						<div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center text-primary flex-shrink-0">
							<FileIcon className="h-7 w-7" />
						</div>

						<div className="flex-1 min-w-0">
							<p className="font-bold truncate text-lg group-hover:text-primary transition-colors">
								{fileItem.name}
							</p>
							<div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
								<span className="bg-muted/30 px-2 py-0.5 rounded-md font-mono">{formatFileSize(fileItem.originalSize)}</span>
								{fileItem.compressedSize && (
									<>
										<ArrowRight className="h-3 w-3" />
										<span className="text-emerald-500 font-bold">
											{formatFileSize(fileItem.compressedSize)}
										</span>
									</>
								)}
							</div>

							{fileItem.compressedSize && (
								<div className="mt-2">
									<Badge variant="success" className="rounded-full px-3 py-1 bg-emerald-500 text-white border-0">
										{getSavingsPercentage(fileItem.originalSize, fileItem.compressedSize)}% Saved
									</Badge>
								</div>
							)}

							{fileItem.status === "compressing" && (
								<Progress value={fileItem.progress} className="mt-3 h-2 rounded-full" />
							)}
						</div>

						<div className="flex flex-col gap-2">
							{fileItem.status === "completed" && (
								<Button
									size="icon"
									variant="secondary"
									onClick={() => downloadFile(fileItem)}
									className="rounded-none hover:scale-110 transition-transform shadow-md"
								>
									<DownloadIcon className="h-5 w-5" />
								</Button>
							)}
							<Button
								onClick={() => removeFile(fileItem.id)}
								variant="ghost"
								size="icon"
								className="rounded-xl hover:text-destructive transition-colors"
							>
								<XIcon className="h-5 w-5" />
							</Button>
						</div>
					</div>
				))}
			</div>
		</GlassCard>
	</div>
				</div >
			)
}
		</div >
	);
}

// Minimal stub for missing icon
// Minimal high-fidelity Apple-style spinner
function RefreshCwIcon({ className }) {
	return (
		<div className={cn("relative flex items-center justify-center", className)}>
			{[...Array(8)].map((_, i) => (
				<div
					key={i}
					className="absolute w-[12%] h-[35%] bg-current rounded-none origin-[center_140%] animate-[apple-spinner_0.8s_linear_infinite]"
					style={{
						transform: `rotate(${i * 45}deg)`,
						animationDelay: `${-0.7 + i * 0.1}s`,
					}}
				/>
			))}
			<style jsx>{`
				@keyframes apple-spinner {
					0% { opacity: 1; }
					100% { opacity: 0.15; }
				}
			`}</style>
		</div>
	);
}
