"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function minJsCss(s: string): string {
	return s
		.replace(/\/\*[\s\S]*?\*\//g, "")
		.replace(/\/\/.*$/gm, "")
		.replace(/\s+/g, " ")
		.trim();
}

function basicBeautifyHtml(s: string): string {
	return s.replace(/>\s+</g, ">\n<").replace(/(<[^/][^>]*>)/g, "\n$1");
}

function escapeHtml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

function unescapeHtml(s: string): string {
	const ta = document.createElement("textarea");
	ta.innerHTML = s;
	return ta.value;
}

export default function BuiltInMarkup({ toolId }: { toolId: string }) {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	const run = (mode: string) => {
		try {
			let out = input;
			switch (mode) {
				case "html-min":
					out = minJsCss(input.replace(/\n/g, " "));
					break;
				case "html-beauty":
					out = basicBeautifyHtml(input);
					break;
				case "css-min":
					out = minJsCss(input);
					break;
				case "css-beauty":
					out = input.replace(/\{/g, " {\n  ").replace(/;/g, ";\n  ").replace(/\}/g, "\n}\n");
					break;
				case "js-min":
					out = minJsCss(input);
					break;
				case "js-beauty":
					out = input.replace(/;/g, ";\n").replace(/\{/g, " {\n").replace(/\}/g, "\n}\n");
					break;
				case "js-ob":
					out = minJsCss(input)
						.split("")
						.map((c) => `\\u${`000${c.charCodeAt(0).toString(16)}`.slice(-4)}`)
						.join("");
					break;
				case "js-de":
					out = input;
					break;
				case "enc":
					out = escapeHtml(input);
					break;
				case "dec":
					out = unescapeHtml(input);
					break;
				default:
					out = input;
			}
			setOutput(out);
			toast.success("Done");
		} catch {
			toast.error("Failed");
		}
	};

	const modeFor = (): { title: string; primary: string; actions: { label: string; m: string }[] } => {
		switch (toolId) {
			case "html-minifier":
				return { title: "HTML minify", primary: "html-min", actions: [{ label: "Minify", m: "html-min" }] };
			case "html-beautifier":
				return {
					title: "HTML format",
					primary: "html-beauty",
					actions: [{ label: "Format", m: "html-beauty" }],
				};
			case "css-minifier":
				return { title: "CSS minify", primary: "css-min", actions: [{ label: "Minify", m: "css-min" }] };
			case "css-beautifier":
				return {
					title: "CSS format",
					primary: "css-beauty",
					actions: [{ label: "Format", m: "css-beauty" }],
				};
			case "javascript-minifier":
				return { title: "JS minify", primary: "js-min", actions: [{ label: "Minify", m: "js-min" }] };
			case "javascript-beautifier":
				return {
					title: "JS format",
					primary: "js-beauty",
					actions: [{ label: "Format", m: "js-beauty" }],
				};
			case "javascript-obfuscator":
				return {
					title: "JS obfuscate (light)",
					primary: "js-ob",
					actions: [{ label: "Obfuscate", m: "js-ob" }],
				};
			case "javascript-deobfuscator":
				return {
					title: "JS expand",
					primary: "js-de",
					actions: [{ label: "Expand lines", m: "js-beauty" }],
				};
			case "html-encoder":
				return { title: "HTML encode", primary: "enc", actions: [{ label: "Encode", m: "enc" }] };
			case "html-decoder":
				return { title: "HTML decode", primary: "dec", actions: [{ label: "Decode", m: "dec" }] };
			default:
				return { title: "Markup", primary: "html-min", actions: [] };
		}
	};

	const cfg = modeFor();

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">{cfg.title}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Textarea
					className="min-h-[200px] font-mono text-sm"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<div className="flex flex-wrap gap-2">
					{cfg.actions.map((a) => (
						<Button key={a.m} type="button" variant="secondary" onClick={() => run(a.m)}>
							{a.label}
						</Button>
					))}
				</div>
				<Textarea
					className="min-h-[200px] font-mono text-sm bg-muted/30"
					readOnly
					value={output}
				/>
				<p className="text-xs text-muted-foreground">
					Heuristic minifiers — always keep originals and test output before shipping to production.
				</p>
			</CardContent>
		</Card>
	);
}
