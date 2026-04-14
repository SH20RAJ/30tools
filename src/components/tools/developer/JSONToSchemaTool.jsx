"use client";

import { Check, Copy, Download, FileJson, Play, Sparkles, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function JSONToSchemaTool() {
	const [inputJson, setInputJson] = useState("");
	const [outputSchema, setOutputSchema] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const generateSchema = () => {
		if (!inputJson.trim()) {
			toast.error("Please paste some JSON first");
			return;
		}

		setIsProcessing(true);

		try {
			const parsed = JSON.parse(inputJson);
			const schema = generateJsonSchema(parsed);
			setOutputSchema(JSON.stringify(schema, null, 2));
			toast.success("JSON Schema generated successfully!");
		} catch (error) {
			toast.error("Invalid JSON format");
		} finally {
			setIsProcessing(false);
		}
	};

	const generateJsonSchema = (val) => {
		const type = Array.isArray(val) ? "array" : val === null ? "null" : typeof val;
		const schema = { type };

		if (type === "object" && val !== null) {
			schema.properties = {};
			for (const key in val) {
				schema.properties[key] = generateJsonSchema(val[key]);
			}
		} else if (type === "array") {
			if (val.length > 0) {
				schema.items = generateJsonSchema(val[0]);
			} else {
				schema.items = {};
			}
		}

		return schema;
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(outputSchema);
		setIsCopied(true);
		toast.success("Copied to clipboard");
		setTimeout(() => setIsCopied(false), 2000);
	};

	const downloadSchema = () => {
		const blob = new Blob([outputSchema], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "schema.json";
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
                            <CardDescription>Paste JSON to generate schema</CardDescription>
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
						placeholder='Paste your JSON here, e.g. {"name": "John", "age": 30}'
					/>
				</CardContent>
				<div className="p-4 border-t bg-muted/10">
					<Button
						onClick={generateSchema}
						disabled={isProcessing || !inputJson}
						className="w-full"
					>
						{isProcessing ? (
							<Sparkles className="w-4 h-4 mr-2 animate-spin" />
						) : (
							<Play className="w-4 h-4 mr-2" />
						)}
						Generate JSON Schema
					</Button>
				</div>
			</Card>

			<Card className="flex flex-col h-[600px] border-primary/20 shadow-lg relative overflow-hidden">
				<CardHeader className="bg-primary/5 border-b pb-4">
					<div className="flex items-center justify-between">
						<div>
                            <CardTitle className="flex items-center gap-2 text-primary">
                                <Sparkles className="w-5 h-5" />
                                JSON Schema Output
                            </CardTitle>
                            <CardDescription>Generated JSON Schema (Draft 7 style)</CardDescription>
                        </div>
					</div>
				</CardHeader>
				<CardContent className="p-0 flex-1 bg-muted/10 relative">
					{outputSchema ? (
						<Textarea
							readOnly
							value={outputSchema}
							className="w-full h-full p-4 resize-none font-mono text-sm bg-transparent border-0 focus:ring-0 focus:outline-none"
						/>
					) : (
						<div className="absolute inset-0 flex items-center justify-center text-muted-foreground p-8 text-center">
							<p>JSON Schema will appear here after generation</p>
						</div>
					)}
				</CardContent>
				<div className="p-4 border-t bg-muted/10 flex gap-4">
					<Button
						variant="outline"
						onClick={copyToClipboard}
						disabled={!outputSchema}
						className="flex-1"
					>
						{isCopied ? (
							<Check className="w-4 h-4 mr-2" />
						) : (
							<Copy className="w-4 h-4 mr-2" />
						)}
						Copy Schema
					</Button>
					<Button
						variant="outline"
						onClick={downloadSchema}
						disabled={!outputSchema}
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
