"use client";

import { Copy, Download, Trash2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function MarkdownToText() {
	const [markdown, setMarkdown] = useState("");
	const [plainText, setPlainText] = useState("");

	const markdownToText = useCallback((md) => {
		if (!md) return "";

		let text = md;

		// 1. Remove Headers (# Header)
		text = text.replace(/^#+\s+/gm, "");

		// 2. Remove Emphasis (Bold/Italic)
		text = text.replace(/(\*\*|__)(.*?)\1/g, "$2"); // Bold
		text = text.replace(/(\*|_)(.*?)\1/g, "$2"); // Italic

		// 3. Remove Links ([Text](URL))
		text = text.replace(/\[(.*?)\]\(.*?\)/g, "$1");

		// 4. Remove Images (![Alt](URL))
		text = text.replace(/!\[(.*?)\]\(.*?\)/g, "");

		// 5. Remove Inline Code (`code`)
		text = text.replace(/`(.*?)`/g, "$1");

		// 6. Remove Code Blocks (```code```)
		text = text.replace(/```[\s\S]*?```/g, (match) => {
			return match
				.replace(/```\w*/g, "")
				.replace(/```/g, "")
				.trim();
		});

		// 7. Remove Blockquotes (> Quote)
		text = text.replace(/^\s*>\s+/gm, "");

		// 8. Remove Horizontal Rules (---, ***, ___)
		text = text.replace(/^[-*_]{3,}\s*$/gm, "");

		// 9. Remove HTML tags
		text = text.replace(/<[^>]*>/g, "");

		// 10. Clean up extra whitespace
		text = text.replace(/\n\s*\n/g, "\n\n").trim();

		return text;
	}, []);

	useEffect(() => {
		setPlainText(markdownToText(markdown));
	}, [markdown, markdownToText]);

	const copyToClipboard = () => {
		if (!plainText) return;
		navigator.clipboard.writeText(plainText);
		toast.success("Copied to clipboard!");
	};

	const clearAll = () => {
		setMarkdown("");
		setPlainText("");
		toast.info("Cleared");
	};

	const downloadText = () => {
		if (!plainText) return;
		const element = document.createElement("a");
		const file = new Blob([plainText], { type: "text/plain" });
		element.href = URL.createObjectURL(file);
		element.download = "converted-text.txt";
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	return (
		<div className="max-w-6xl mx-auto space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Input Section */}
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
							Markdown Input
						</label>
						<Button
							variant="ghost"
							size="sm"
							onClick={clearAll}
							className="h-8 text-destructive hover:text-destructive/90"
						>
							<Trash2 className="w-4 h-4 mr-2" /> Clear
						</Button>
					</div>
					<Textarea
						value={markdown}
						onChange={(e) => setMarkdown(e.target.value)}
						placeholder="Paste content from ChatGPT, Claude, Grok (Markdown)..."
						className="min-h-[400px] font-mono text-sm p-4 bg-muted/20 focus-visible:ring-primary/20"
					/>
				</div>

				{/* Output Section */}
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
							Plain Text Output
						</label>
						<div className="flex gap-2">
							<Button
								variant="outline"
								size="sm"
								onClick={downloadText}
								disabled={!plainText}
								className="h-8"
							>
								<Download className="w-4 h-4 mr-2" /> Download
							</Button>
							<Button
								size="sm"
								onClick={copyToClipboard}
								disabled={!plainText}
								className="h-8 bg-primary hover:bg-primary/90"
							>
								<Copy className="w-4 h-4 mr-2" /> Copy
							</Button>
						</div>
					</div>
					<div className="relative group">
						<Textarea
							value={plainText}
							readOnly
							placeholder="Plain text will appear here..."
							className="min-h-[400px] text-sm p-4 bg-muted/5 border-dashed border-2 cursor-default"
						/>
					</div>
				</div>
			</div>

			{/* Stats Bar */}
			<div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground bg-secondary/30 p-3 ">
				<div className="flex items-center px-2 py-1 bg-background/50 ">
					<span className="opacity-70 mr-2">Input Characters:</span>
					<span className="text-foreground">{markdown.length}</span>
				</div>
				<div className="flex items-center px-2 py-1 bg-background/50 ">
					<span className="opacity-70 mr-2">Output Words:</span>
					<span className="text-foreground">
						{plainText.split(/\s+/).filter((w) => w.length > 0).length}
					</span>
				</div>
				<div className="flex items-center px-2 py-1 bg-background/50 ">
					<span className="opacity-70 mr-2">Markdown Savings:</span>
					<span className="text-green-500 font-bold">
						{markdown.length > 0
							? `${Math.round(((markdown.length - plainText.length) / markdown.length) * 100)}%`
							: "0%"}
					</span>
				</div>
			</div>
		</div>
	);
}
