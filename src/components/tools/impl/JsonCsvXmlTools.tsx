"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function jsonToCsv(data: unknown): string {
	const rows = Array.isArray(data) ? data : [data];
	if (!rows.length || typeof rows[0] !== "object" || rows[0] === null) {
		throw new Error("JSON must be an object or array of objects");
	}
	const headers = Object.keys(rows[0] as object);
	const esc = (v: unknown) => {
		const s = v === null || v === undefined ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
		return `"${s.replace(/"/g, '""')}"`;
	};
	const lines = [headers.join(",")];
	for (const row of rows) {
		const o = row as Record<string, unknown>;
		lines.push(headers.map((h) => esc(o[h])).join(","));
	}
	return lines.join("\n");
}

function csvToJson(csv: string): unknown[] {
	const lines = csv.trim().split(/\r?\n/).filter(Boolean);
	if (!lines.length) return [];
	const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));
	return lines.slice(1).map((line) => {
		const cells = line.match(/("([^"]|"")*"|[^,]+)/g) || [];
		const obj: Record<string, string> = {};
		headers.forEach((h, i) => {
			let c = cells[i] || "";
			c = c.replace(/^"|"$/g, "").replace(/""/g, '"');
			obj[h] = c;
		});
		return obj;
	});
}

function xmlToJson(xml: string): unknown {
	const doc = new DOMParser().parseFromString(xml, "text/xml");
	const err = doc.querySelector("parsererror");
	if (err) throw new Error("Invalid XML");
	const node = doc.documentElement;
	if (!node) return null;
	const walk = (el: Element): unknown => {
		const kids = [...el.children];
		if (!kids.length) return el.textContent || "";
		const out: Record<string, unknown> = {};
		for (const k of kids) {
			const v = walk(k);
			if (out[k.tagName] !== undefined) {
				const prev = out[k.tagName];
				out[k.tagName] = Array.isArray(prev) ? [...prev, v] : [prev, v];
			} else {
				out[k.tagName] = v;
			}
		}
		return out;
	};
	return { [node.tagName]: walk(node) };
}

export function JsonCsvXmlTools({ toolId }: { toolId: string }) {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	const run = () => {
		try {
			if (toolId === "json-to-csv-converter") {
				setOutput(jsonToCsv(JSON.parse(input)));
			} else if (toolId === "csv-to-json-converter") {
				setOutput(JSON.stringify(csvToJson(input), null, 2));
			} else if (toolId === "json-to-text-converter") {
				setOutput(JSON.stringify(JSON.parse(input), null, 2));
			} else if (toolId === "tsv-to-json-converter") {
				const lines = input.trim().split(/\r?\n/).filter(Boolean);
				if (!lines.length) throw new Error("Empty");
				const headers = lines[0].split("\t");
				const rows = lines.slice(1).map((line) => {
					const cells = line.split("\t");
					const o: Record<string, string> = {};
					headers.forEach((h, i) => {
						o[h] = cells[i] ?? "";
					});
					return o;
				});
				setOutput(JSON.stringify(rows, null, 2));
			} else if (toolId === "xml-to-json-converter") {
				setOutput(JSON.stringify(xmlToJson(input), null, 2));
			} else if (toolId === "json-to-xml-converter") {
				const build = (val: unknown, name = "root"): string => {
					if (val === null || val === undefined) return `<${name} />`;
					if (typeof val !== "object") return `<${name}>${String(val)}</${name}>`;
					if (Array.isArray(val)) {
						return val.map((v, i) => build(v, `${name}-item`)).join("");
					}
					const inner = Object.entries(val as Record<string, unknown>)
						.map(([k, v]) => build(v, k))
						.join("");
					return `<${name}>${inner}</${name}>`;
				};
				setOutput(`<?xml version="1.0" encoding="UTF-8"?>\n${build(JSON.parse(input))}`);
			}
			toast.success("Converted");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Invalid input");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Convert</CardTitle>
				<CardDescription>All parsing happens in your browser.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<Textarea value={input} onChange={(e) => setInput(e.target.value)} className="min-h-[200px] font-mono" />
				<Button type="button" onClick={run}>
					Convert
				</Button>
				<Textarea readOnly value={output} className="min-h-[200px] font-mono" />
			</CardContent>
		</Card>
	);
}

export const JSON_CSV_XML_IDS = new Set([
	"json-to-csv-converter",
	"csv-to-json-converter",
	"json-to-text-converter",
	"tsv-to-json-converter",
	"xml-to-json-converter",
	"json-to-xml-converter",
]);
