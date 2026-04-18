"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function titleCase(s: string) {
	return s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}

function extractVideoId(input: string) {
	const m =
		input.match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/) ||
		input.match(/^([a-zA-Z0-9_-]{11})$/);
	return m?.[1] ?? "";
}

function extractChannelId(input: string) {
	const m = input.match(/channel\/([a-zA-Z0-9_-]+)/);
	return m?.[1] ?? "";
}

export default function YouTubeSuite({ toolId }: { toolId: string }) {
	const [text, setText] = useState("");
	const [out, setOut] = useState("");

	const run = async () => {
		setOut("");
		try {
			if (toolId === "youtube-title-capitalizer") {
				setOut(titleCase(text));
				return;
			}
			if (toolId === "youtube-title-length-checker") {
				setOut(
					`Characters: ${text.length}\nRecommended: ≤ 100 chars for full visibility on many devices.`,
				);
				return;
			}
			if (toolId === "youtube-tag-generator") {
				const tags = text
					.split(/[\s,]+/)
					.filter(Boolean)
					.slice(0, 30)
					.join(", ");
				setOut(tags);
				return;
			}
			if (toolId === "youtube-hashtag-generator") {
				setOut(
					text
						.split(/\s+/)
						.filter(Boolean)
						.map((w) => (w.startsWith("#") ? w : `#${w.replace(/[^\p{L}\p{N}]/gu, "")}`))
						.join(" "),
				);
				return;
			}
			if (toolId === "youtube-subscribe-link-generator") {
				const id = extractChannelId(text) || text.trim();
				setOut(id ? `https://www.youtube.com/subscribe?channel_id=${id}` : "");
				return;
			}
			if (toolId === "youtube-embed-code-generator") {
				const r = await fetch(
					`/api/parse-youtube?url=${encodeURIComponent(text.trim())}`,
				);
				const j = (await r.json()) as { embedUrl?: string; id?: string; error?: string };
				if (!r.ok) throw new Error(j.error || "Bad URL");
				setOut(
					`<iframe width="560" height="315" src="${j.embedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
				);
				return;
			}
			if (toolId === "youtube-timestamp-link-generator") {
				const id = extractVideoId(text);
				const t = prompt("Seconds to jump to?", "60");
				if (!id || !t) return;
				setOut(`https://www.youtube.com/watch?v=${id}&t=${Number.parseInt(t, 10)}s`);
				return;
			}
			if (toolId === "youtube-channel-id-extractor") {
				setOut(extractChannelId(text) || "Paste a /channel/CHANNEL_ID URL");
				return;
			}
			if (toolId === "youtube-description-generator") {
				const lines = [
					`▶ ${text || "Video title"}`,
					"",
					"Chapters:",
					"0:00 Intro",
					"",
					"Links:",
					"—",
					"",
					"#Shorts",
				];
				setOut(lines.join("\n"));
				return;
			}
			if (toolId === "youtube-title-generator") {
				const topic = text.trim() || "your topic";
				setOut(
					[
						`${topic} — full guide (2026)`,
						`How to ${topic} step by step`,
						`${topic} tips you need today`,
					].join("\n"),
				);
				return;
			}
			toast.message("Use fields above; this preset is a lightweight helper.");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Failed");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">YouTube helper</CardTitle>
				<CardDescription>
					Client-side utilities. Official stats require YouTube Studio or the Data API.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				{toolId === "youtube-timestamp-link-generator" ? (
					<p className="text-sm text-muted-foreground">
						Paste a watch or youtu.be URL, click generate, then enter seconds in the prompt.
					</p>
				) : null}
				<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[140px]" />
				<Button type="button" onClick={run}>
					Run
				</Button>
				<pre className="rounded-lg border bg-muted/40 p-4 text-sm whitespace-pre-wrap">{out}</pre>
			</CardContent>
		</Card>
	);
}

export const YOUTUBE_SUITE_IDS = new Set([
	"youtube-title-capitalizer",
	"youtube-title-length-checker",
	"youtube-tag-generator",
	"youtube-hashtag-generator",
	"youtube-subscribe-link-generator",
	"youtube-embed-code-generator",
	"youtube-timestamp-link-generator",
	"youtube-channel-id-extractor",
	"youtube-description-generator",
	"youtube-title-generator",
]);
