"use client";

import { Copy, Trash2, Download, Check, RefreshCw, Type, Hash } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function TextToNumberConverter({ defaultTarget = "decimal" }) {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [targetBase, setTargetBase] = useState(defaultTarget);
	const [isCopied, setIsCopied] = useState(false);

	const convert = useCallback(() => {
		if (!input) {
			setOutput("");
			return;
		}

		try {
			const base = targetBase === "octal" ? 8 : 10;
			const result = Array.from(input)
				.map((char) => char.charCodeAt(0).toString(base))
				.join(" ");
			setOutput(result);
		} catch (error) {
			toast.error("Conversion failed");
		}
	}, [input, targetBase]);

    useEffect(() => {
        convert();
    }, [input, targetBase, convert]);

	const handleCopy = () => {
		if (!output) return;
		navigator.clipboard.writeText(output);
		setIsCopied(true);
		toast.success("Copied to clipboard");
		setTimeout(() => setIsCopied(false), 2000);
	};

	const handleDownload = () => {
		if (!output) return;
		const blob = new Blob([output], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `text-to-${targetBase}.txt`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	return (
		<div className="max-w-6xl mx-auto space-y-6">
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="flex items-center gap-2">
								<Type className="h-5 w-5 text-primary" />
								Text to Number Converter
							</CardTitle>
							<CardDescription>
								Convert each character of your text to its {targetBase} ASCII/Unicode value
							</CardDescription>
						</div>
						<div className="w-[180px]">
							<Select value={targetBase} onValueChange={setTargetBase}>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="decimal">Decimal (Base 10)</SelectItem>
									<SelectItem value="octal">Octal (Base 8)</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<label className="text-sm font-semibold opacity-60 uppercase">Input Text</label>
								<Button variant="ghost" size="sm" onClick={() => setInput("")} disabled={!input}>
									<Trash2 className="w-3.5 h-3.5 mr-1" />
									Clear
								</Button>
							</div>
							<Textarea
								placeholder="Enter text to convert..."
								value={input}
								onChange={(e) => setInput(e.target.value)}
								className="min-h-[300px] font-mono text-sm resize-none"
							/>
						</div>

						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<label className="text-sm font-semibold opacity-60 uppercase">{targetBase} Output</label>
								<div className="flex gap-2">
									<Button variant="ghost" size="sm" onClick={handleCopy} disabled={!output}>
										{isCopied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
										Copy
									</Button>
									<Button variant="ghost" size="sm" onClick={handleDownload} disabled={!output}>
										<Download className="w-3.5 h-3.5 mr-1" />
										Download
									</Button>
								</div>
							</div>
							<Textarea
								placeholder={`${targetBase} values will appear here...`}
								value={output}
								readOnly
								className="min-h-[300px] font-mono text-sm resize-none bg-muted/30"
							/>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
