"use client";

import { ArrowUpDown, Code, Copy, FileText, Zap, Shield, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "../shared/WorkspaceComponents";
import { cn } from "@/lib/utils";

export default function TextEncoderTool() {
	const [inputText, setInputText] = useState("");
	const [outputText, setOutputText] = useState("");
	const [encodingType, setEncodingType] = useState("url");
	const [activeTab, setActiveTab] = useState("encode");

	const encodeText = () => {
		if (!inputText.trim()) {
			toast.error("Please enter some text to encode");
			return;
		}

		let result = "";
		try {
			switch (encodingType) {
				case "url": result = encodeURIComponent(inputText); break;
				case "base64": result = btoa(unescape(encodeURIComponent(inputText))); break;
				case "html": 
					result = inputText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"); 
					break;
				case "uri": result = encodeURI(inputText); break;
				case "css": 
					result = inputText.replace(/[^\w\s-]/g, (char) => `\\${char.charCodeAt(0).toString(16)} `); 
					break;
				case "javascript": 
					result = inputText.replace(/[\\'"]/g, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t"); 
					break;
				case "hex": 
					result = Array.from(inputText).map((char) => char.charCodeAt(0).toString(16).padStart(2, "0")).join(" "); 
					break;
				case "unicode": 
					result = Array.from(inputText).map((char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`).join(""); 
					break;
				default: result = inputText;
			}
			setOutputText(result);
			toast.success("Text encoded successfully!");
		} catch (error) {
			toast.error(`Error encoding text: ${error.message}`);
		}
	};

	const decodeText = () => {
		if (!inputText.trim()) {
			toast.error("Please enter some text to decode");
			return;
		}

		let result = "";
		try {
			switch (encodingType) {
				case "url": result = decodeURIComponent(inputText); break;
				case "base64": result = decodeURIComponent(escape(atob(inputText))); break;
				case "html": 
					result = inputText.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/"); 
					break;
				case "uri": result = decodeURI(inputText); break;
				case "css": 
					result = inputText.replace(/\\([0-9a-fA-F]+)\s?/g, (_match, code) => String.fromCharCode(parseInt(code, 16))); 
					break;
				case "javascript": 
					result = inputText.replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\([\\'"])/g, "$1"); 
					break;
				case "hex": 
					result = inputText.split(" ").filter((hex) => hex.length > 0).map((hex) => String.fromCharCode(parseInt(hex, 16))).join(""); 
					break;
				case "unicode": 
					result = inputText.replace(/\\u([0-9a-fA-F]{4})/g, (_match, code) => String.fromCharCode(parseInt(code, 16))); 
					break;
				default: result = inputText;
			}
			setOutputText(result);
			toast.success("Text decoded successfully!");
		} catch (error) {
			toast.error(`Error decoding text: ${error.message}`);
		}
	};

	const copyToClipboard = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			toast.success("Copied to clipboard!");
		} catch (_err) {
			toast.error("Failed to copy text");
		}
	};

	const encodingFormats = [
		{ value: "url", label: "URL Encoding", description: "Percent encoding for URLs" },
		{ value: "base64", label: "Base64", description: "Binary-safe text encoding" },
		{ value: "html", label: "HTML Entities", description: "HTML character entities" },
		{ value: "uri", label: "URI Encoding", description: "URI component encoding" },
		{ value: "css", label: "CSS Escape", description: "CSS string escaping" },
		{ value: "javascript", label: "JavaScript", description: "JS string escaping" },
		{ value: "hex", label: "Hexadecimal", description: "Hex representation" },
		{ value: "unicode", label: "Unicode", description: "Unicode sequences" },
	];

	return (
		<div className="w-full max-w-5xl mx-auto space-y-12 animate-in pb-24">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
				{/* Left Sidebar: Controls */}
				<div className="lg:col-span-4 space-y-8">
					<GlassCard className="p-8">
						<div className="flex items-center gap-3 mb-8">
							<Shield className="text-primary w-6 h-6" />
							<h3 className="text-2xl font-bold tracking-tight">Transformer</h3>
						</div>

						<div className="space-y-8">
							<div className="space-y-4">
								<Label className="text-base font-black ml-1 uppercase tracking-widest text-[10px] text-muted-foreground">Algorithm</Label>
								<Select value={encodingType} onValueChange={setEncodingType}>
									<SelectTrigger className="h-16 rounded-2xl border-border/40 bg-muted/20 px-6 font-bold text-lg hover:border-primary/40 transition-all">
										<SelectValue />
									</SelectTrigger>
									<SelectContent className="rounded-2xl border-border/40 p-2">
										{encodingFormats.map((format) => (
											<SelectItem key={format.value} value={format.value} className="rounded-xl py-3 px-4 focus:bg-primary/10 mb-1">
												<div className="flex flex-col">
													<span className="font-bold">{format.label}</span>
													<span className="text-[10px] text-muted-foreground uppercase font-black">{format.description}</span>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-4">
								<Label className="text-base font-black ml-1 uppercase tracking-widest text-[10px] text-muted-foreground">Action</Label>
								<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
									<TabsList className="grid w-full grid-cols-2 bg-muted/30 p-1.5 h-14 rounded-2xl">
										<TabsTrigger value="encode" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg font-bold">ENCODE</TabsTrigger>
										<TabsTrigger value="decode" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg font-bold">DECODE</TabsTrigger>
									</TabsList>
								</Tabs>
							</div>

							<Button 
								onClick={activeTab === "encode" ? encodeText : decodeText}
								disabled={!inputText.trim()}
								className="w-full h-20 rounded-[2rem] text-xl font-black shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all gap-4 relative overflow-hidden"
							>
								<Zap className="w-6 h-6 fill-current" />
								{activeTab === "encode" ? "ENCODE NOW" : "DECODE NOW"}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
							</Button>
						</div>
					</GlassCard>

					<GlassCard className="p-8">
						<div className="space-y-6">
							<h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Quick Actions</h4>
							<div className="grid grid-cols-2 gap-3">
								<Button variant="outline" onClick={() => { setInputText(""); setOutputText(""); }} className="h-14 rounded-2xl font-bold border-border/40 hover:bg-destructive/10 hover:text-destructive transition-all">
									Clear
								</Button>
								<Button variant="outline" onClick={() => { setInputText(outputText); setOutputText(""); }} disabled={!outputText} className="h-14 rounded-2xl font-bold border-border/40 transition-all">
									Swap
								</Button>
							</div>
						</div>
					</GlassCard>
				</div>

				{/* Right Workspace: Input/Output */}
				<div className="lg:col-span-8 space-y-8">
					<GlassCard className="p-8 group">
						<div className="flex items-center justify-between mb-6">
							<div className="flex items-center gap-3">
								<FileText className="text-primary w-5 h-5" />
								<h3 className="text-xl font-bold">Source Text</h3>
							</div>
							<div className="flex gap-2">
								<Badge variant="secondary" className="rounded-full px-3 py-1 font-mono text-xs">
									{inputText.length} chars
								</Badge>
							</div>
						</div>
						<Textarea
							placeholder="Paste your source text here..."
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
							className="min-h-[220px] rounded-3xl bg-muted/20 border-border/40 p-6 font-mono text-lg focus-visible:ring-primary/20 transition-all"
						/>
					</GlassCard>

					{outputText && (
						<GlassCard className="p-8 animate-in slide-in-from-bottom-4 duration-500 overflow-hidden relative">
							<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
							<div className="flex items-center justify-between mb-6">
								<div className="flex items-center gap-3">
									<Zap className="text-primary w-5 h-5" />
									<h3 className="text-xl font-bold">Result</h3>
								</div>
								<Button
									onClick={() => copyToClipboard(outputText)}
									className="rounded-2xl h-11 px-6 font-bold gap-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
								>
									<Copy className="h-4 w-4" />
									Copy Result
								</Button>
							</div>
							<Textarea
								value={outputText}
								readOnly
								className="min-h-[220px] rounded-3xl bg-primary/[0.03] border-primary/20 p-6 font-mono text-lg text-primary focus-visible:ring-0 cursor-default"
							/>
						</GlassCard>
					)}
					
					{!outputText && (
						<div className="h-[220px] flex flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-border/30 bg-muted/5">
							<HelpCircle className="w-12 h-12 text-muted-foreground/20 mb-4" />
							<p className="text-muted-foreground/40 font-bold italic">Awaiting transformation...</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
