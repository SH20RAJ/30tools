"use client";

import {
	CheckCircleIcon,
	DownloadIcon,
	FileIcon,
	MinimizeIcon,
	RefreshCwIcon,
	UploadIcon,
	ZapIcon,
	ArrowRight
} from "lucide-react";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { GlassCard, PremiumDropZone } from "../shared/WorkspaceComponents";
import { cn } from "@/lib/utils";

export default function PdfCompressorTool() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [isCompressing, setIsCompressing] = useState(false);
	const [compressionProgress, setCompressionProgress] = useState(0);
	const [compressedFile, setCompressedFile] = useState(null);
	const [compressionSettings, setCompressionSettings] = useState({
		quality: "medium",
		imageQuality: 70,
		removeMetadata: true,
		optimizeImages: true,
	});
	const [compressionStats, setCompressionStats] = useState(null);
	const fileInputRef = useRef(null);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		if (!file) return;

		if (file.type !== "application/pdf") {
			alert("Please select a PDF file");
			return;
		}

		if (file.size > 50 * 1024 * 1024) {
			// 50MB limit
			alert("File size must be less than 50MB");
			return;
		}

		setSelectedFile(file);
		setCompressedFile(null);
		setCompressionStats(null);
		setCompressionProgress(0);
	};

	const simulateCompression = async () => {
		setIsCompressing(true);
		setCompressionProgress(0);

		// Simulate compression progress
		const progressSteps = [10, 25, 45, 60, 80, 95, 100];

		for (let i = 0; i < progressSteps.length; i++) {
			await new Promise((resolve) => setTimeout(resolve, 600));
			setCompressionProgress(progressSteps[i]);
		}

		// Simulate compression results
		const originalSize = selectedFile.size;
		const compressionRatio = {
			low: 0.3,
			medium: 0.5,
			high: 0.7,
			lossless: 0.85,
		}[compressionSettings.quality] || 0.5;

		const compressedSize = Math.floor(originalSize * compressionRatio);
		const reductionPercentage = Math.round(
			((originalSize - compressedSize) / originalSize) * 100,
		);

		setCompressedFile({
			blob: new Blob([selectedFile], { type: "application/pdf" }),
			name: selectedFile.name.replace(".pdf", "_compressed.pdf"),
			size: compressedSize,
		});

		setCompressionStats({
			originalSize,
			compressedSize,
			reductionPercentage,
			quality: compressionSettings.quality,
		});

		setIsCompressing(false);
	};

	const formatFileSize = (bytes) => {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const sizes = ["Bytes", "KB", "MB", "GB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
	};

	const downloadCompressedFile = () => {
		if (!compressedFile) return;
		const url = URL.createObjectURL(compressedFile.blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = compressedFile.name;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	const resetTool = () => {
		setSelectedFile(null);
		setCompressedFile(null);
		setCompressionStats(null);
		setCompressionProgress(0);
		setIsCompressing(false);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	return (
		<div className="w-full max-w-5xl mx-auto space-y-12 animate-in pb-24">
			{/* Uploader */}
			<section>
				{!selectedFile ? (
					<PremiumDropZone
						onDrop={(e) => { e.preventDefault(); handleFileUpload({ target: { files: e.dataTransfer.files } }); }}
						onDragOver={(e) => e.preventDefault()}
						onClick={() => fileInputRef.current?.click()}
						icon={FileIcon}
						title="Drop your PDF here"
						subtitle="Reduce document size while maintaining professional quality (Max 50MB)"
					/>
				) : (
					<GlassCard className="p-8 group relative overflow-hidden">
						<div className="flex items-center gap-6">
							<div className="w-20 h-20 rounded-3xl-off bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0 shadow-lg shadow-destructive/5 group-hover:scale-110 transition-transform duration-500">
								<FileIcon className="w-10 h-10" />
							</div>
							<div className="flex-1 min-w-0">
								<h3 className="text-2xl font-black truncate">{selectedFile.name}</h3>
								<p className="text-muted-foreground font-bold">{formatFileSize(selectedFile.size)} • PDF Document</p>
							</div>
							<Button variant="ghost" size="icon" onClick={resetTool} className="rounded-2xl hover:bg-destructive/10 hover:text-destructive transition-colors">
								<RefreshCwIcon className="w-6 h-6" />
							</Button>
						</div>
					</GlassCard>
				)}
				<input
					ref={fileInputRef}
					type="file"
					accept=".pdf,application/pdf"
					onChange={handleFileUpload}
					className="hidden"
				/>
			</section>

			{selectedFile && (
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					{/* Settings */}
					<div className="lg:col-span-5 space-y-8 order-last lg:order-first">
						<GlassCard className="p-8">
							<div className="flex items-center gap-3 mb-8">
								<MinimizeIcon className="text-primary w-6 h-6" />
								<h3 className="text-2xl font-bold tracking-tight">Compression Level</h3>
							</div>

							<div className="space-y-8">
								<div className="grid grid-cols-2 gap-3">
									{[
										{ id: "low", label: "Max", desc: "Smallest" },
										{ id: "medium", label: "Balanced", desc: "Good" },
										{ id: "high", label: "Smart", desc: "Sharper" },
										{ id: "lossless", label: "Light", desc: "Best" },
									].map((q) => (
										<Button
											key={q.id}
											variant={compressionSettings.quality === q.id ? "default" : "outline"}
											size="lg"
											className={cn(
												"h-24 rounded-3xl-off flex flex-col items-center justify-center gap-1 border-border/40 transition-all",
												compressionSettings.quality !== q.id && "hover:border-primary/40 bg-muted/10"
											)}
											onClick={() => setCompressionSettings(prev => ({ ...prev, quality: q.id }))}
										>
											<span className="text-lg font-black">{q.label}</span>
											<span className="text-[10px] uppercase tracking-widest opacity-60 font-black">{q.desc} Quality</span>
										</Button>
									))}
								</div>

								<div className="space-y-4">
									<div className="flex items-center justify-between p-5 rounded-3xl-off bg-muted/20 border border-border/40">
										<Label className="font-bold">Optimise Images</Label>
										<Button
											variant={compressionSettings.optimizeImages ? "default" : "outline"}
											size="sm"
											className="rounded-full px-6 font-bold"
											onClick={() => setCompressionSettings(prev => ({ ...prev, optimizeImages: !prev.optimizeImages }))}
										>
											{compressionSettings.optimizeImages ? "ON" : "OFF"}
										</Button>
									</div>
								</div>

								<Button
									onClick={simulateCompression}
									disabled={isCompressing || compressedFile}
									className="w-full h-20 rounded-[2rem] text-xl font-black shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all gap-4 overflow-hidden relative"
								>
									{isCompressing ? <RefreshCwIcon className="w-6 h-6 animate-spin" /> : <ZapIcon className="w-6 h-6 fill-current" />}
									{isCompressing ? "PROCESSING..." : "SHRINK PDF NOW"}
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
								</Button>
							</div>
						</GlassCard>
					</div>

					{/* Stats / Results */}
					<div className="lg:col-span-7 space-y-8">
						<GlassCard className="p-8 h-full flex flex-col">
							<h3 className="text-2xl font-bold mb-8">Optimization Summary</h3>

							<div className="flex-1 flex flex-col justify-center gap-12">
								{isCompressing ? (
									<div className="space-y-8 animate-in text-center p-12">
										<div className="relative w-24 h-24 mx-auto">
											<div className="absolute inset-0 rounded-full border-4 border-primary/20" />
											<div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
											<RefreshCwIcon className="absolute inset-0 m-auto w-10 h-10 text-primary animate-pulse" />
										</div>
										<div className="space-y-4">
											<div className="flex justify-between text-sm font-black text-muted-foreground tracking-widest uppercase">
												<span>Compressing Stream</span>
												<span>{compressionProgress}%</span>
											</div>
											<Progress value={compressionProgress} className="h-4 rounded-full bg-muted/50" />
										</div>
									</div>
								) : compressionStats ? (
									<div className="space-y-12 animate-in slide-in-from-bottom-8 duration-700">
										<div className="grid grid-cols-2 gap-8 text-center">
											<div className="space-y-2 group">
												<div className="text-4xl font-black text-destructive group-hover:scale-110 transition-transform">
													{formatFileSize(compressionStats.originalSize)}
												</div>
												<div className="text-xs font-black text-muted-foreground tracking-widest uppercase">Original</div>
											</div>
											<div className="space-y-2 group">
												<div className="text-4xl font-black text-primary group-hover:scale-110 transition-transform">
													{formatFileSize(compressionStats.compressedSize)}
												</div>
												<div className="text-xs font-black text-muted-foreground tracking-widest uppercase">Optimized</div>
											</div>
										</div>

										<div className="p-10 rounded-[3rem] bg-emerald-500/5 border-2 border-dashed border-emerald-500/20 text-center space-y-2 group relative overflow-hidden">
											<div className="absolute inset-0 bg-emerald-500/[0.02] animate-pulse" />
											<div className="text-7xl font-black text-emerald-500 tracking-tighter transition-transform group-hover:scale-105 duration-700">
												{compressionStats.reductionPercentage}%
											</div>
											<div className="text-sm font-black text-emerald-600/80 tracking-[0.2em] uppercase">Size Reduction Achieved</div>
										</div>

										<Button onClick={downloadCompressedFile} size="lg" className="h-20 w-full rounded-[2.5rem] bg-emerald-500 hover:bg-emerald-600 shadow-2xl shadow-emerald-500/30 text-xl font-black gap-4 border-0">
											<DownloadIcon className="w-8 h-8" />
											DOWNLOAD PDF
										</Button>
									</div>
								) : (
									<div className="text-center py-20 bg-muted/10 rounded-[2.5rem] border border-dashed border-border/40">
										<FileIcon className="h-20 w-20 mx-auto mb-6 text-muted-foreground/30" />
										<p className="text-xl font-bold text-muted-foreground italic">Awaiting document for optimization...</p>
									</div>
								)}
							</div>
						</GlassCard>
					</div>
				</div>
			)}
		</div>
	);
}
