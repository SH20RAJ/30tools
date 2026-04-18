"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function srtToVtt(srt: string) {
	const body = srt
		.replace(/\r/g, "")
		.replace(/(\d+)\n(\d{2}:\d{2}:\d{2}),(\d{3})\s+-->\s+(\d{2}:\d{2}:\d{2}),(\d{3})/g, (_, idx, a, am, b, bm) => {
			return `${idx}\n${a}.${am} --> ${b}.${bm}`;
		});
	return `WEBVTT\n\n${body}`;
}

function vttToSrt(vtt: string) {
	const lines = vtt.replace(/\r/g, "").split("\n");
	const out: string[] = [];
	let i = 0;
	let n = 1;
	while (i < lines.length) {
		const line = lines[i];
		const m = line.match(
			/^(\d{2}:\d{2}:\d{2})\.(\d{3})\s+-->\s+(\d{2}:\d{2}:\d{2})\.(\d{3})/,
		);
		if (m) {
			out.push(String(n++));
			out.push(`${m[1]},${m[2]} --> ${m[3]},${m[4]}`);
			i++;
			while (i < lines.length && lines[i].trim()) {
				out.push(lines[i]);
				i++;
			}
			out.push("");
		} else i++;
	}
	return out.join("\n").trim();
}

export default function SubtitleConvertTool({ mode }: { mode: "srt-vtt" | "vtt-srt" }) {
	const [text, setText] = useState("");
	const [out, setOut] = useState("");

	const go = () => {
		try {
			setOut(mode === "srt-vtt" ? srtToVtt(text) : vttToSrt(text));
			toast.success("Converted");
		} catch {
			toast.error("Could not convert — check cue timestamps.");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{mode === "srt-vtt" ? "SRT → WebVTT" : "WebVTT → SRT"}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[240px] font-mono text-xs" />
				<Button type="button" onClick={go}>
					Convert
				</Button>
				<Textarea readOnly value={out} className="min-h-[240px] font-mono text-xs" />
			</CardContent>
		</Card>
	);
}
