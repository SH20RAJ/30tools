"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type Mode =
	| "csv-to-json"
	| "tsv-to-json"
	| "json-to-csv"
	| "json-to-tsv"
	| "json-to-text"
	| "xml-to-json"
	| "json-to-xml";

function jsonToXml(value: unknown, tagName = "item"): string {
	if (value === null || value === undefined) return `<${tagName} />`;
	if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
		return `<${tagName}>${String(value)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")}</${tagName}>`;
	}
	if (Array.isArray(value)) {
		return value.map((v, i) => jsonToXml(v, `${tagName}-${i}`)).join("\n");
	}
	if (typeof value === "object") {
		const o = value as Record<string, unknown>;
		const inner = Object.entries(o)
			.map(([k, v]) => jsonToXml(v, k.replace(/[^a-zA-Z0-9_-]/g, "_") || "prop"))
			.join("\n");
		return `<${tagName}>\n${inner}\n</${tagName}>`;
	}
	return "";
}

function parseDelimited(text: string, delimiter: string) {
	const lines = text.trim().split(/\r?\n/).filter(Boolean);
	if (!lines.length) return [];
	const split = (line: string) => {
		const out: string[] = [];
		let cur = "";
		let q = false;
		for (let i = 0; i < line.length; i++) {
			const ch = line[i];
			if (ch === '"') {
				if (q && line[i + 1] === '"') {
					cur += '"';
					i++;
				} else q = !q;
			} else if (!q && ch === delimiter) {
				out.push(cur);
				cur = "";
			} else cur += ch;
		}
		out.push(cur);
		return out.map((c) => c.trim());
	};
	const headers = split(lines[0]);
	return lines.slice(1).map((line) => {
		const cells = split(line);
		return headers.reduce<Record<string, string>>((acc, h, i) => {
			acc[h] = cells[i] ?? "";
			return acc;
		}, {});
	});
}

function jsonToDelimited(jsonText: string, delimiter: string) {
	const data = JSON.parse(jsonText);
	if (!Array.isArray(data) || !data.length || typeof data[0] !== "object") {
		throw new Error("JSON must be a non-empty array of objects.");
	}
	const headers = Object.keys(data[0] as object);
	const esc = (v: unknown) => {
		const s = String(v ?? "");
		if (s.includes('"') || s.includes("\n") || s.includes(delimiter)) {
			return `"${s.replace(/"/g, '""')}"`;
		}
		return s;
	};
	const rows = data.map((row) =>
		headers.map((h) => esc((row as Record<string, unknown>)[h])).join(delimiter),
	);
	return [headers.join(delimiter), ...rows].join("\n");
}

function xmlToJson(xmlText: string) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(xmlText, "application/xml");
	const err = doc.querySelector("parsererror");
	if (err) throw new Error(err.textContent || "Invalid XML");

	function nodeToJson(el: Element): unknown {
		const kids = [...el.children];
		if (!kids.length) {
			const t = el.textContent?.trim() ?? "";
			return t === "" ? {} : t;
		}
		const obj: Record<string, unknown> = {};
		for (const c of kids) {
			const name = c.nodeName;
			const val = nodeToJson(c);
			if (name in obj) {
				const prev = obj[name];
				obj[name] = Array.isArray(prev) ? [...prev, val] : [prev, val];
			} else obj[name] = val;
		}
		return obj;
	}

	const root = doc.documentElement;
	return { [root.nodeName]: nodeToJson(root) };
}

const titles: Record<Mode, string> = {
	"csv-to-json": "CSV → JSON",
	"tsv-to-json": "TSV → JSON",
	"json-to-csv": "JSON → CSV",
	"json-to-tsv": "JSON → TSV",
	"json-to-text": "JSON → readable text",
	"xml-to-json": "XML → JSON",
	"json-to-xml": "JSON → XML (simple)",
};

export default function DataInterchangeTool({ mode }: { mode: Mode }) {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	const run = useCallback(() => {
		try {
			if (mode === "csv-to-json") {
				setOutput(JSON.stringify(parseDelimited(input, ","), null, 2));
			} else if (mode === "tsv-to-json") {
				setOutput(JSON.stringify(parseDelimited(input, "\t"), null, 2));
			} else if (mode === "json-to-csv") {
				setOutput(jsonToDelimited(input, ","));
			} else if (mode === "json-to-tsv") {
				setOutput(jsonToDelimited(input, "\t"));
			} else if (mode === "json-to-text") {
				setOutput(JSON.stringify(JSON.parse(input), null, 2));
			} else if (mode === "xml-to-json") {
				setOutput(JSON.stringify(xmlToJson(input), null, 2));
			} else if (mode === "json-to-xml") {
				const parsed = JSON.parse(input);
				setOutput(`<?xml version="1.0" encoding="UTF-8"?>\n${jsonToXml(parsed, "root")}`);
			}
			toast.success("Converted");
		} catch (e) {
			const msg = e instanceof Error ? e.message : "Conversion failed";
			toast.error(msg);
			setOutput("");
		}
	}, [input, mode]);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{titles[mode]}</CardTitle>
				<p className="text-sm text-muted-foreground">
					Runs entirely in your browser — ideal for small/medium files.
				</p>
			</CardHeader>
			<CardContent className="space-y-4">
				<Textarea
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Paste input here..."
					className="min-h-[200px] font-mono text-sm"
				/>
				<Button type="button" onClick={run}>
					Convert
				</Button>
				{output ? (
					<Textarea
						readOnly
						value={output}
						className="min-h-[220px] font-mono text-sm bg-muted/30"
					/>
				) : null}
			</CardContent>
		</Card>
	);
}
