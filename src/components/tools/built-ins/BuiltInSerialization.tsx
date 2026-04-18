"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function jsonToCsv(json: string): string {
	const parsed = JSON.parse(json) as unknown;
	const rows = Array.isArray(parsed) ? parsed : [parsed];
	if (!rows.length || typeof rows[0] !== "object" || rows[0] === null) {
		throw new Error("JSON must be an object or array of objects");
	}
	const keys = Object.keys(rows[0] as object);
	const esc = (v: unknown) => {
		const s = v === null || v === undefined ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
		if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
		return s;
	};
	const header = keys.join(",");
	const body = rows
		.map((row) => keys.map((k) => esc((row as Record<string, unknown>)[k])).join(","))
		.join("\n");
	return `${header}\n${body}`;
}

function jsonToTsv(json: string): string {
	const csv = jsonToCsv(json);
	return csv.replace(/,/g, "\t");
}

function jsonToText(json: string): string {
	return JSON.stringify(JSON.parse(json), null, 2);
}

function csvToJson(csv: string): string {
	const lines = csv.trim().split(/\r?\n/);
	if (!lines.length) return "[]";
	const headers = lines[0].split(",").map((h) => h.trim());
	const out = lines.slice(1).map((line) => {
		const cells = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		const o: Record<string, string> = {};
		headers.forEach((h, i) => {
			o[h] = (cells[i] ?? "").replace(/^"|"$/g, "");
		});
		return o;
	});
	return JSON.stringify(out, null, 2);
}

function tsvToJson(tsv: string): string {
	const lines = tsv.trim().split(/\r?\n/);
	if (!lines.length) return "[]";
	const headers = lines[0].split("\t");
	const out = lines.slice(1).map((line) => {
		const cells = line.split("\t");
		const o: Record<string, string> = {};
		headers.forEach((h, i) => {
			o[h] = cells[i] ?? "";
		});
		return o;
	});
	return JSON.stringify(out, null, 2);
}

function xmlToJson(xml: string): string {
	const doc = new DOMParser().parseFromString(xml, "application/xml");
	const err = doc.querySelector("parsererror");
	if (err) throw new Error("Invalid XML");
	function nodeToObj(el: Element): unknown {
		const kids = Array.from(el.children);
		if (!kids.length) return el.textContent ?? "";
		const o: Record<string, unknown> = {};
		for (const c of kids) {
			const name = c.nodeName;
			const v = nodeToObj(c);
			if (o[name] !== undefined) {
				const cur = o[name];
				o[name] = Array.isArray(cur) ? [...cur, v] : [cur, v];
			} else o[name] = v;
		}
		return o;
	}
	const root = doc.documentElement;
	return JSON.stringify({ [root.nodeName]: nodeToObj(root) }, null, 2);
}

function jsonToXml(json: string): string {
	const o = JSON.parse(json) as unknown;
	function walk(tag: string, val: unknown, depth: number): string {
		const pad = "  ".repeat(depth);
		if (val === null || typeof val !== "object") return `${pad}<${tag}>${String(val)}</${tag}>\n`;
		if (Array.isArray(val)) {
			return val.map((v) => walk(tag, v, depth)).join("");
		}
		return `${pad}<${tag}>\n${Object.entries(val as object)
			.map(([k, v]) => walk(k, v, depth + 1))
			.join("")}${pad}</${tag}>\n`;
	}
	if (typeof o !== "object" || o === null) throw new Error("Root must be object");
	const [[k, v]] = Object.entries(o as object);
	return `<?xml version="1.0" encoding="UTF-8"?>\n${walk(k, v, 0)}`;
}

export default function BuiltInSerialization({ toolId }: { toolId: string }) {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	const run = () => {
		try {
			let out = "";
			switch (toolId) {
				case "json-to-csv-converter":
					out = jsonToCsv(input);
					break;
				case "json-to-tsv-converter":
					out = jsonToTsv(input);
					break;
				case "json-to-text-converter":
					out = jsonToText(input);
					break;
				case "csv-to-json-converter":
					out = csvToJson(input);
					break;
				case "tsv-to-json-converter":
					out = tsvToJson(input);
					break;
				case "xml-to-json-converter":
					out = xmlToJson(input);
					break;
				case "json-to-xml-converter":
					out = jsonToXml(input);
					break;
				default:
					out = "";
			}
			setOutput(out);
			toast.success("Converted");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Conversion failed");
			setOutput("");
		}
	};

	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Convert</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Textarea
					className="min-h-[220px] font-mono text-sm"
					value={input}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
					placeholder="Paste input..."
				/>
				<Button type="button" onClick={run}>
					Run conversion
				</Button>
				<Textarea
					className="min-h-[220px] font-mono text-sm bg-muted/30"
					readOnly
					value={output}
					placeholder="Output"
				/>
			</CardContent>
		</Card>
	);
}
