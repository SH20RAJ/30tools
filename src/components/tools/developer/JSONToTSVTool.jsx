"use client";

import { Check, Copy, Download, FileJson, Play, Sparkles, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function JSONToTSVTool() {
	const [inputJson, setInputJson] = useState("");
	const [outputTsv, setOutputTsv] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const convertToTsv = () => {
		if (!inputJson.trim()) {
			toast.error("Please paste some JSON first");
			return;
		}

		setIsProcessing(true);

		try {
			const parsed = JSON.parse(inputJson);
			const data = Array.isArray(parsed) ? parsed : [parsed];
			
			if (data.length === 0) {
				setOutputTsv("");
				toast.info("Empty JSON data");
				return;
			}

			// Get headers
			const headers = Object.keys(data[0]);
			const tsvRows = [];
			
			// Add header row
			tsvRows.push(headers.join("\t"));
			
			// Add data rows
			for (const item of data) {
				const row = headers.map(header => {
					const val = item[header];
					return val === null ? "" : typeof val === "object" ? JSON.stringify(val) : String(val);
				});
				tsvRows.push(row.join("\t"));
			}

			setOutputTsv(tsvRows.join("\n"));
			toast.success("JSON converted to TSV successfully!");
		} catch (error) {
			toast.error("Invalid JSON format. Expected an array of objects.");
		} finally {
			setIsProcessing(false);
		}
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(outputTsv);
		setIsCopied(true);
		toast.success("Copied to clipboard");
		setTimeout(() => setIsCopied(false), 2000);
	};

	const downloadTsv = () => {
		const blob = new Blob([outputTsv], { type: "text/tab-separated-values" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "data.tsv";
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
                            <CardDescription>Paste JSON array to convert to TSV</CardDescription>
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
						placeholder='Paste your JSON here, e.g. [{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]'
					/>
				</CardContent>
				<div className="p-4 border-t bg-muted/10">
					<Button
						onClick={convertToTsv}
						disabled={isProcessing || !inputJson}
						className="w-full"
					>
						{isProcessing ? (
							<Sparkles className="w-4 h-4 mr-2 animate-spin" />
						) : (
							<Play className="w-4 h-4 mr-2" />
						)}
						Convert to TSV
					</Button>
				</div>
			</Card>

			<Card className="flex flex-col h-[600px] border-primary/20 shadow-lg relative overflow-hidden">
				<CardHeader className="bg-primary/5 border-b pb-4">
					<div className="flex items-center justify-between">
						<div>
                            <CardTitle className="flex items-center gap-2 text-primary">
                                <Sparkles className="w-5 h-5" />
                                TSV Output
                            </CardTitle>
                            <CardDescription>Tab-separated values</CardDescription>
                        </div>
					</div>
				</CardHeader>
				<CardContent className="p-0 flex-1 bg-muted/10 relative">
					{outputTsv ? (
						<Textarea
							readOnly
							value={outputTsv}
							className="w-full h-full p-4 resize-none font-mono text-sm bg-transparent border-0 focus:ring-0 focus:outline-none"
						/>
					) : (
						<div className="absolute inset-0 flex items-center justify-center text-muted-foreground p-8 text-center">
							<p>TSV data will appear here after conversion</p>
						</div>
					)}
				</CardContent>
				<div className="p-4 border-t bg-muted/10 flex gap-4">
					<Button
						variant="outline"
						onClick={copyToClipboard}
						disabled={!outputTsv}
						className="flex-1"
					>
						{isCopied ? (
							<Check className="w-4 h-4 mr-2" />
						) : (
							<Copy className="w-4 h-4 mr-2" />
						)}
						Copy TSV
					</Button>
					<Button
						variant="outline"
						onClick={downloadTsv}
						disabled={!outputTsv}
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
