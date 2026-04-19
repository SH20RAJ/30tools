"use client";

import {
	AlertCircleIcon,
	ArrowRightIcon,
	CheckCircleIcon,
	DownloadIcon,
	FolderIcon,
	ImageIcon,
	RefreshCwIcon,
	SettingsIcon,
	TrashIcon,
	UploadIcon,
	ZapIcon,
	Image as ImageLucide
} from "lucide-react";
import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassCard, PremiumDropZone, WorkspaceTitle } from "../shared/WorkspaceComponents";
import { cn } from "@/lib/utils";

export default function ImageConverterTool({ defaultOutputFormat = "png" }) {
	const [files, setFiles] = useState([]);
	const [isConverting, setIsConverting] = useState(false);
	const [progress, setProgress] = useState(0);
	const [conversionSettings, setConversionSettings] = useState({
		outputFormat: defaultOutputFormat,
		quality: [90],
		maintainAspectRatio: true,
		preserveExif: false,
		resizeWidth: "",
		resizeHeight: "",
		enableResize: false,
	});
	const fileInputRef = useRef(null);
	const [dragActive, setDragActive] = useState(false);

	// Supported formats with detailed info
	const supportedFormats = {
		input: {
			"image/jpeg": { ext: ".jpg/.jpeg", name: "JPEG", icon: "📷" },
			"image/png": { ext: ".png", name: "PNG", icon: "🖼️" },
			"image/webp": { ext: ".webp", name: "WebP", icon: "🌐" },
			"image/gif": { ext: ".gif", name: "GIF", icon: "🎞️" },
			"image/bmp": { ext: ".bmp", name: "BMP", icon: "🎨" },
			"image/tiff": { ext: ".tiff", name: "TIFF", icon: "📋" },
			"image/heic": { ext: ".heic", name: "HEIC", icon: "📱" },
			"image/heif": { ext: ".heif", name: "HEIF", icon: "📱" },
		},
		output: {
			jpeg: {
				ext: ".jpg",
				name: "JPEG",
				icon: "📷",
				description: "Best for photos, smaller file size",
			},
			png: {
				ext: ".png",
				name: "PNG",
				icon: "🖼️",
				description: "Best for graphics, supports transparency",
			},
			webp: {
				ext: ".webp",
				name: "WebP",
				icon: "🌐",
				description: "Modern format, excellent compression",
			},
			gif: {
				ext: ".gif",
				name: "GIF",
				icon: "🎞️",
				description: "Supports animation, limited colors",
			},
			bmp: {
				ext: ".bmp",
				name: "BMP",
				icon: "🎨",
				description: "Uncompressed, large file size",
			},
			tiff: {
				ext: ".tiff",
				name: "TIFF",
				icon: "📋",
				description: "High quality, supports layers",
			},
		},
	};

	const formatFileSize = (bytes) => {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const sizes = ["Bytes", "KB", "MB", "GB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
	};

	const getFormatIcon = (mimeType) => {
		const format = Object.keys(supportedFormats.input).find((key) =>
			mimeType.includes(key.split("/")[1]),
		);
		return format ? supportedFormats.input[format].icon : "📄";
	};

	const processFiles = (fileList) => {
		const validFiles = fileList.filter((file) => {
			const isValidFormat = Object.keys(supportedFormats.input).some(
				(format) =>
					file.type === format ||
					file.name.toLowerCase().endsWith(format.split("/")[1]),
			);
			return isValidFormat && file.size <= 50 * 1024 * 1024; // 50MB limit
		});

		const newFiles = validFiles.map((file, index) => ({
			id: Date.now() + index,
			file,
			name: file.name,
			size: file.size,
			type: file.type,
			originalFormat:
				file.type.split("/")[1] || file.name.split(".").pop().toLowerCase(),
			status: "ready",
			convertedBlob: null,
			convertedSize: null,
			preview: null,
		}));

		setFiles((prev) => [...prev, ...newFiles]);

		// Generate previews
		newFiles.forEach((fileData) => {
			if (fileData.file.type.startsWith("image/")) {
				const reader = new FileReader();
				reader.onload = (e) => {
					setFiles((prev) =>
						prev.map((f) =>
							f.id === fileData.id ? { ...f, preview: e.target.result } : f,
						),
					);
				};
				reader.readAsDataURL(fileData.file);
			}
		});
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		const droppedFiles = Array.from(e.dataTransfer.files);
		processFiles(droppedFiles);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
	};

	const handleFileSelect = (event) => {
		const selectedFiles = Array.from(event.target.files);
		processFiles(selectedFiles);
	};

	const convertImage = async (fileData) => {
		return new Promise((resolve) => {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			const img = new Image();

			img.onload = () => {
				// Calculate new dimensions if resize is enabled
				let { width, height } = img;

				if (conversionSettings.enableResize) {
					const newWidth =
						parseInt(conversionSettings.resizeWidth, 10) || width;
					const newHeight =
						parseInt(conversionSettings.resizeHeight, 10) || height;

					if (conversionSettings.maintainAspectRatio) {
						const aspectRatio = width / height;
						if (newWidth && !newHeight) {
							width = newWidth;
							height = newWidth / aspectRatio;
						} else if (newHeight && !newWidth) {
							height = newHeight;
							width = newHeight * aspectRatio;
						} else {
							width = newWidth;
							height = newHeight;
						}
					} else {
						width = newWidth;
						height = newHeight;
					}
				}

				canvas.width = width;
				canvas.height = height;

				// Set background for formats that don't support transparency
				if (["jpeg", "bmp"].includes(conversionSettings.outputFormat)) {
					ctx.fillStyle = "#FFFFFF";
					ctx.fillRect(0, 0, width, height);
				}

				// Draw the image
				ctx.drawImage(img, 0, 0, width, height);

				// Convert to target format
				const mimeType =
					conversionSettings.outputFormat === "jpeg"
						? "image/jpeg"
						: `image/${conversionSettings.outputFormat}`;
				const quality = conversionSettings.quality[0] / 100;

				canvas.toBlob(
					(blob) => {
						resolve({
							blob,
							size: blob.size,
							width,
							height,
						});
					},
					mimeType,
					quality,
				);
			};

			img.src = fileData.preview;
		});
	};

	const handleConvert = async () => {
		if (files.length === 0) return;

		setIsConverting(true);
		setProgress(0);

		for (let i = 0; i < files.length; i++) {
			const fileData = files[i];

			try {
				setFiles((prev) =>
					prev.map((f) =>
						f.id === fileData.id ? { ...f, status: "converting" } : f,
					),
				);

				const result = await convertImage(fileData);

				setFiles((prev) =>
					prev.map((f) =>
						f.id === fileData.id
							? {
								...f,
								status: "completed",
								convertedBlob: result.blob,
								convertedSize: result.size,
								convertedWidth: result.width,
								convertedHeight: result.height,
							}
							: f,
					),
				);
			} catch (error) {
				console.error("Conversion failed:", error);
				setFiles((prev) =>
					prev.map((f) =>
						f.id === fileData.id ? { ...f, status: "error" } : f,
					),
				);
			}

			setProgress(((i + 1) / files.length) * 100);
		}

		setIsConverting(false);
	};

	const downloadFile = (fileData) => {
		if (!fileData.convertedBlob) return;

		const url = URL.createObjectURL(fileData.convertedBlob);
		const link = document.createElement("a");
		link.href = url;

		const extension =
			supportedFormats.output[conversionSettings.outputFormat].ext;
		const nameWithoutExt = fileData.name.replace(/\.[^/.]+$/, "");
		link.download = `${nameWithoutExt}_converted${extension}`;

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	};

	const downloadAll = async () => {
		const completedFiles = files.filter(
			(f) => f.status === "completed" && f.convertedBlob,
		);

		if (completedFiles.length === 0) return;

		if (completedFiles.length === 1) {
			downloadFile(completedFiles[0]);
			return;
		}

		// For multiple files, create a zip
		const JSZip = (await import("jszip")).default;
		const zip = new JSZip();

		completedFiles.forEach((fileData) => {
			const extension =
				supportedFormats.output[conversionSettings.outputFormat].ext;
			const nameWithoutExt = fileData.name.replace(/\.[^/.]+$/, "");
			const fileName = `${nameWithoutExt}_converted${extension}`;
			zip.file(fileName, fileData.convertedBlob);
		});

		const zipBlob = await zip.generateAsync({ type: "blob" });
		const url = URL.createObjectURL(zipBlob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `converted_images_${Date.now()}.zip`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	};

	const removeFile = (id) => {
		setFiles((prev) => prev.filter((f) => f.id !== id));
	};

	const clearAll = () => {
		setFiles([]);
		setProgress(0);
	};

	const getStatusIcon = (status) => {
		switch (status) {
			case "ready":
				return <ImageIcon className="h-4 w-4 text-primary" />;
			case "converting":
				return <RefreshCwIcon className="h-4 w-4 text-primary animate-spin" />;
			case "completed":
				return <CheckCircleIcon className="h-4 w-4 text-emerald-500" />;
			case "error":
				return <AlertCircleIcon className="h-4 w-4 text-destructive" />;
			default:
				return <ImageIcon className="h-4 w-4" />;
		}
	};

	const getSavingsInfo = (originalSize, convertedSize) => {
		if (!convertedSize) return null;
		const savings = ((originalSize - convertedSize) / originalSize) * 100;
		const isSmaller = convertedSize < originalSize;
		return {
			percentage: Math.abs(savings).toFixed(1),
			isSmaller,
			text: isSmaller ? "smaller" : "larger",
		};
	};

	return (
		<div className="w-full max-w-5xl mx-auto space-y-12 pb-24 animate-in">
			{/* Hero / Uploader Section */}
			<section>
				<PremiumDropZone
					onDrop={handleDrop}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onClick={() => fileInputRef.current?.click()}
					dragActive={dragActive}
					icon={ImageLucide}
					title="Drop your images here"
					subtitle="Support for JPG, PNG, WebP, GIF, BMP, and more (Max 50MB)"
				/>
				<input
					ref={fileInputRef}
					type="file"
					multiple
					accept="image/*,.heic,.heif"
					onChange={handleFileSelect}
					className="hidden"
				/>

				{files.length > 0 && (
					<div className="mt-8 flex justify-between items-center px-4">
						<div className="flex items-center gap-4">
							<Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full">
								{files.length} file(s) ready
							</Badge>
							<span className="text-sm text-muted-foreground animate-pulse">
								Click 'Convert' below to start
							</span>
						</div>
						<Button variant="ghost" size="sm" onClick={clearAll} className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors">
							<TrashIcon className="h-4 w-4 mr-2" />
							Clear Workspace
						</Button>
					</div>
				)}
			</section>

			{/* Main Workspace Area (Displayed only if files selected) */}
			{files.length > 0 && (
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					{/* Left Column: File List */}
					<div className="lg:col-span-7 space-y-6">
						<GlassCard className="p-8">
							<h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
								<ImageIcon className="text-primary w-6 h-6" />
								Your Gallery
							</h3>

							<div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
								{files.map((fileData) => {
									const savings = getSavingsInfo(fileData.size, fileData.convertedSize);
									return (
										<div
											key={fileData.id}
											className={cn(
												"flex items-center gap-4 p-5 rounded-3xl-off border border-border/40 transition-all duration-300 group hover:bg-primary/[0.02]",
												fileData.status === "completed" && "bg-emerald-500/[0.03] border-emerald-500/20"
											)}
										>
											<div className="relative flex-shrink-0">
												{fileData.preview ? (
													<img
														src={fileData.preview}
														alt={fileData.name}
														className="w-20 h-20 object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform"
													/>
												) : (
													<div className="w-20 h-20 bg-muted/30 rounded-2xl flex items-center justify-center text-4xl">
														{getFormatIcon(fileData.type)}
													</div>
												)}
												{fileData.status === "completed" && (
													<div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg">
														<CheckCircleIcon className="w-4 h-4" />
													</div>
												)}
											</div>

											<div className="flex-1 min-w-0">
												<div className="flex items-center gap-2 mb-2">
													<span className="font-bold truncate text-lg">
														{fileData.name}
													</span>
													{getStatusIcon(fileData.status)}
												</div>

												<div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
													<span className="bg-muted/30 px-2 py-0.5 rounded-md font-mono">{formatFileSize(fileData.size)}</span>
													<ArrowRightIcon className="h-3 w-3" />
													<span className="text-foreground">
														{supportedFormats.output[conversionSettings.outputFormat].name}
														{fileData.convertedSize &&
															<span className="ml-2 font-bold text-emerald-500">
																({formatFileSize(fileData.convertedSize)})
															</span>
														}
													</span>
												</div>

												{savings && (
													<div className="mt-3">
														<Badge variant={savings.isSmaller ? "success" : "secondary"} className="rounded-full">
															{savings.percentage}% {savings.text}
														</Badge>
													</div>
												)}
											</div>

											<div className="flex flex-col gap-2">
												{fileData.status === "completed" && (
													<Button size="icon" variant="secondary" onClick={() => downloadFile(fileData)} className="rounded-xl hover:scale-110 transition-transform">
														<DownloadIcon className="h-5 w-5" />
													</Button>
												)}
												<Button variant="ghost" size="icon" onClick={() => removeFile(fileData.id)} className="rounded-xl hover:text-destructive transition-colors">
													<TrashIcon className="h-5 w-5" />
												</Button>
											</div>
										</div>
									);
								})}
							</div>
						</GlassCard>
					</div>

					{/* Right Column: Settings & Summary */}
					<div className="lg:col-span-5 space-y-8">
						{/* Settings Card */}
						<GlassCard className="p-8">
							<div className="flex items-center gap-3 mb-8">
								<SettingsIcon className="text-primary w-6 h-6" />
								<h3 className="text-2xl font-bold">Optimization</h3>
							</div>

							<Tabs defaultValue="format" className="w-full">
								<TabsList className="grid w-full grid-cols-3 bg-muted/30 p-1.5 h-14 rounded-2xl mb-8">
									<TabsTrigger value="format" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg font-bold">Format</TabsTrigger>
									<TabsTrigger value="quality" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg font-bold">Quality</TabsTrigger>
									<TabsTrigger value="resize" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg font-bold">Resize</TabsTrigger>
								</TabsList>

								<TabsContent value="format" className="space-y-8 mt-0">
									<div className="space-y-4">
										<Label className="text-base font-bold ml-1">Target Extension</Label>
										<Select
											value={conversionSettings.outputFormat}
											onValueChange={(value) => setConversionSettings(prev => ({ ...prev, outputFormat: value }))}
										>
											<SelectTrigger className="h-16 rounded-2xl border-border/40 bg-muted/20 px-6 font-bold text-lg hover:border-primary/40 transition-all">
												<SelectValue />
											</SelectTrigger>
											<SelectContent className="rounded-2xl border-border/40 p-2">
												{Object.entries(supportedFormats.output).map(([key, format]) => (
													<SelectItem key={key} value={key} className="rounded-xl py-3 px-4 focus:bg-primary/10 mb-1">
														<div className="flex items-center gap-4">
															<span className="text-2xl">{format.icon}</span>
															<div>
																<div className="font-bold">{format.name}</div>
																<div className="text-xs text-muted-foreground">{format.description}</div>
															</div>
														</div>
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									<div className="flex items-center justify-between p-6 rounded-3xl-off bg-muted/20 border border-border/40">
										<div className="space-y-1">
											<Label htmlFor="preserve-exif" className="text-lg font-bold">Preserve Metadata</Label>
											<p className="text-sm text-muted-foreground leading-tight">Keep camera settings & location</p>
										</div>
										<Switch
											id="preserve-exif"
											checked={conversionSettings.preserveExif}
											onCheckedChange={(checked) => setConversionSettings(prev => ({ ...prev, preserveExif: checked }))}
											className="scale-125"
										/>
									</div>
								</TabsContent>

								<TabsContent value="quality" className="space-y-10 mt-0">
									<div className="space-y-6 px-2">
										<div className="flex justify-between items-end">
											<Label className="text-lg font-bold">Compression Quality</Label>
											<span className="text-4xl font-black text-primary font-mono tracking-tighter">
												{conversionSettings.quality[0]}
												<span className="text-xl">%</span>
											</span>
										</div>
										<Slider
											value={conversionSettings.quality}
											onValueChange={(value) => setConversionSettings(prev => ({ ...prev, quality: value }))}
											min={10}
											max={100}
											step={5}
											className="py-4"
										/>
										<div className="flex justify-between text-xs font-bold text-muted-foreground leading-none">
											<span className="flex items-center gap-1"><ZapIcon className="w-3 h-3" /> Smaller Size</span>
											<span className="flex items-center gap-1">Maximum Quality <RefreshCwIcon className="w-3 h-3" /></span>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
										{[
											{ value: 60, label: "Lite", color: "text-blue-500" },
											{ value: 90, label: "Pro", color: "text-primary" },
										].map((preset) => (
											<Button
												key={preset.value}
												variant={conversionSettings.quality[0] === preset.value ? "default" : "outline"}
												className={cn(
													"h-20 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all",
													conversionSettings.quality[0] !== preset.value && "border-border/40 hover:border-primary/40 bg-muted/10"
												)}
												onClick={() => setConversionSettings(prev => ({ ...prev, quality: [preset.value] }))}
											>
												<span className="text-lg font-black tracking-tight">{preset.label}</span>
												<span className="text-xs opacity-70 font-bold">{preset.value}% Quality</span>
											</Button>
										))}
									</div>
								</TabsContent>

								<TabsContent value="resize" className="space-y-8 mt-0">
									<div className="flex items-center justify-between p-6 rounded-3xl-off bg-muted/20 border border-border/40 overflow-hidden relative">
										<div className="space-y-1 z-10">
											<Label htmlFor="enable-resize" className="text-lg font-bold">Image Rescaling</Label>
											<p className="text-sm text-muted-foreground leading-tight">Change pixel dimensions</p>
										</div>
										<Switch
											id="enable-resize"
											checked={conversionSettings.enableResize}
											onCheckedChange={(checked) => setConversionSettings(prev => ({ ...prev, enableResize: checked }))}
											className="scale-125 z-10"
										/>
										{conversionSettings.enableResize && <div className="absolute inset-0 bg-primary/5 animate-pulse" />}
									</div>

									{conversionSettings.enableResize && (
										<div className="space-y-6 animate-in">
											<div className="grid grid-cols-2 gap-4">
												<div className="space-y-2">
													<Label className="font-bold ml-1">Width (px)</Label>
													<input
														type="number"
														placeholder="1920"
														value={conversionSettings.resizeWidth}
														onChange={(e) => setConversionSettings(prev => ({ ...prev, resizeWidth: e.target.value }))}
														className="h-14 w-full rounded-2xl bg-muted/20 border border-border/40 px-6 font-bold placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
													/>
												</div>
												<div className="space-y-2">
													<Label className="font-bold ml-1">Height (px)</Label>
													<input
														type="number"
														placeholder="1080"
														value={conversionSettings.resizeHeight}
														onChange={(e) => setConversionSettings(prev => ({ ...prev, resizeHeight: e.target.value }))}
														className="h-14 w-full rounded-2xl bg-muted/20 border border-border/40 px-6 font-bold placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
													/>
												</div>
											</div>

											<div className="flex items-center justify-between p-6 rounded-3xl-off bg-muted/20 border border-border/40">
												<Label className="text-base font-bold">Keep Aspect Ratio</Label>
												<Switch
													checked={conversionSettings.maintainAspectRatio}
													onCheckedChange={(checked) => setConversionSettings(prev => ({ ...prev, maintainAspectRatio: checked }))}
												/>
											</div>
										</div>
									)}
								</TabsContent>
							</Tabs>
						</GlassCard>

						{/* Action & Stats Card */}
						<GlassCard className="p-8">
							<div className="space-y-6">
								<div className="space-y-4">
									<div className="flex justify-between text-base font-bold">
										<span className="text-muted-foreground uppercase tracking-widest text-[10px]">Queue Status</span>
										<span>{files.length} Item(s)</span>
									</div>
									{isConverting && <Progress value={progress} className="h-3 rounded-full bg-muted/50 overflow-hidden shadow-inner" />}
								</div>

								<div className="space-y-4">
									<Button
										onClick={handleConvert}
										disabled={isConverting || files.length === 0}
										className="w-full h-20 rounded-[2rem] text-xl font-black tracking-tighter shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group overflow-hidden"
									>
										{isConverting ? (
											<>
												<RefreshCwIcon className="w-8 h-8 animate-spin" />
												<span>OPTIMIZING...</span>
											</>
										) : (
											<>
												<ZapIcon className="w-8 h-8 fill-current group-hover:animate-pulse" />
												<span>CONVERT NOW</span>
											</>
										)}
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
									</Button>

									{files.some(f => f.status === "completed") && (
										<Button
											onClick={downloadAll}
											variant="secondary"
											className="w-full h-16 rounded-2xl font-black text-lg shadow-xl hover:bg-secondary/80 transition-all flex items-center justify-center gap-3"
										>
											<DownloadIcon className="w-6 h-6" />
											DOWNLOAD ALL (.ZIP)
										</Button>
									)}
								</div>
							</div>
						</GlassCard>
					</div>
				</div>
			)}
		</div>
	);
}
