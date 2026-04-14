"use client";

import { Check, Copy, Download, FileJson, Play, Sparkles, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function JSONMinifierTool() {
	const [inputJson, setInputJson] = useState("");
	const [outputJson, setOutputJson] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [stats, setStats] = useState(null);
	const [isCopied, setIsCopied] = useState(false);

	const minify = () => {
		if (!inputJson.trim()) {
			toast.error("Please paste some JSON first");
			return;
		}

		setIsProcessing(true);

		try {
			const parsed = JSON.parse(inputJson);
			const minified = JSON.stringify(parsed);
			setOutputJson(minified);

			const originalSize = new Blob([inputJson]).size;
			const minifiedSize = new Blob([minified]).size;
			const savings = originalSize > 0 
                ? (((originalSize - minifiedSize) / originalSize) * 100).toFixed(2)
                : 0;

			setStats({
				original: `${(originalSize / 1024).toFixed(2)} KB`,
				minified: `${(minifiedSize / 1024).toFixed(2)} KB`,
				savings: `${savings}%`,
			});

			toast.success("JSON minified successfully!");
		} catch (error) {
			toast.error("Invalid JSON format");
		} finally {
			setIsProcessing(false);
		}
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(outputJson);
		setIsCopied(true);
		toast.success("Copied to clipboard");
		setTimeout(() => setIsCopied(false), 2000);
	};

	const downloadJson = () => {
		const blob = new Blob([outputJson], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "minified.json";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	return (
		<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
			<Card className="flex flex-col h-[600px]">
				<CardHeader className="bg-muted/30 border-b pb-4">
					<div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <FileJson className="w-5 h-5 text-primary" />
                                Input JSON
                            </CardTitle>
                            <CardDescription>Paste your JSON to minify</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setInputJson("")}>
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
				</CardHeader>
				<CardContent className="p-0 flex-1">
					<Textarea
						value={inputJson}
						onChange={(e) => setInputJson(e.target.value)}
						className="w-full h-full p-4 resize-none font-mono text-sm bg-background border-0 focus:ring-0 focus:outline-none"
						placeholder="Paste your JSON code here..."
					/>
				</CardContent>
				<div className="p-4 border-t bg-muted/10">
					<Button
						onClick={minify}
						disabled={isProcessing || !inputJson}
						className="w-full"
					>
						{isProcessing ? (
							<Sparkles className="w-4 h-4 mr-2 animate-spin" />
						) : (
							<Play className="w-4 h-4 mr-2" />
						)}
						Minify JSON
					</Button>
				</div>
			</Card>

			<Card className="flex flex-col h-[600px] border-primary/20 shadow-lg relative overflow-hidden">
				<CardHeader className="bg-primary/5 border-b pb-4">
					<div className="flex items-center justify-between">
						<div>
                            <CardTitle className="flex items-center gap-2 text-primary">
                                <Sparkles className="w-5 h-5" />
                                Minified Output
                            </CardTitle>
                            <CardDescription>Production-ready minified JSON</CardDescription>
                        </div>
						{stats && (
							<span className="text-xs font-mono bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
								Saved {stats.savings}
							</span>
						)}
					</div>
				</CardHeader>
				<CardContent className="p-0 flex-1 bg-muted/10 relative">
					{outputJson ? (
						<Textarea
							readOnly
							value={outputJson}
							className="w-full h-full p-4 resize-none font-mono text-sm bg-transparent border-0 focus:ring-0 focus:outline-none"
						/>
					) : (
						<div className="absolute inset-0 flex items-center justify-center text-muted-foreground p-8 text-center">
							<p>Minified JSON will appear here after conversion</p>
						</div>
					)}
				</CardContent>
				<div className="p-4 border-t bg-muted/10 flex gap-4">
					<Button
						variant="outline"
						onClick={copyToClipboard}
						disabled={!outputJson}
						className="flex-1"
					>
						{isCopied ? (
							<Check className="w-4 h-4 mr-2" />
						) : (
							<Copy className="w-4 h-4 mr-2" />
						)}
						Copy Result
					</Button>
					<Button
						variant="outline"
						onClick={downloadJson}
						disabled={!outputJson}
						className="flex-1"
					>
						<Download className="w-4 h-4 mr-2" />
						Download
					</Button>
				</div>
			</Card>
		</div>
	);
}
