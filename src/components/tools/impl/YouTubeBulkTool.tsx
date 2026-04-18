"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function videoIdFromUrl(url: string): string | null {
	const m =
		url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/) ||
		url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
	return m ? m[1] : null;
}

export function YouTubeBulkTool({ toolId }: { toolId: string }) {
	const [url, setUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	const [text, setText] = useState("");
	const [out, setOut] = useState("");

	const vid = videoIdFromUrl(url);

	const run = async () => {
		try {
			if (toolId === "youtube-embed-code-generator" && vid) {
				setOut(
					`<iframe width="560" height="315" src="https://www.youtube.com/embed/${vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
				);
			} else if (toolId === "youtube-subscribe-link-generator") {
				const id = text.trim() || vid;
				setOut(id ? `https://www.youtube.com/subscribe_embed?channel_id=${id}` : "Paste channel ID or video URL with channel");
			} else if (toolId === "youtube-timestamp-link-generator") {
				const t = Number.parseInt(text, 10) || 0;
				if (vid) setOut(`https://www.youtube.com/watch?v=${vid}&t=${t}s`);
			} else if (toolId === "youtube-title-capitalizer") {
				setOut(
					text
						.toLowerCase()
						.split(" ")
						.map((w, i) => (i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
						.join(" "),
				);
			} else if (toolId === "youtube-title-length-checker") {
				setOut(`Characters: ${text.length} (YouTube titles truncate around 100 characters in some views).`);
			} else if (toolId === "youtube-comment-picker") {
				const lines = text.split(/\r?\n/).filter(Boolean);
				setOut(lines.length ? lines[Math.floor(Math.random() * lines.length)] : "");
			} else if (toolId === "youtube-hashtag-generator") {
				setOut(
					text
						.split(/\s+/)
						.filter(Boolean)
						.map((w) => `#${w.replace(/[^a-zA-Z0-9]/g, "")}`)
						.join(" "),
				);
			} else if (toolId === "youtube-hashtag-extractor") {
				setOut((text.match(/#[\w]+/g) || []).join(" "));
			} else if (toolId === "youtube-tag-generator") {
				setOut(text.split(/\s+/).filter(Boolean).join(", "));
			} else if (toolId === "youtube-description-generator") {
				setOut(
					`${text}\n\nSubscribe for more tips.\n\nChapters:\n0:00 Intro\n\n#shorts`.trim(),
				);
			} else if (toolId === "youtube-title-generator") {
				setOut(`${text} | Updated ${new Date().getFullYear()}`.trim());
			} else if (toolId === "youtube-channel-id-extractor") {
				const m = url.match(/channel\/([\w-]+)/);
				setOut(m ? m[1] : "Paste a /channel/CHANNEL_ID URL");
			} else if (toolId === "youtube-title-extractor" || toolId === "youtube-description-extractor" || toolId === "youtube-tag-extractor") {
				if (!url.trim()) return;
				const oembed = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
				const r = await fetch(oembed);
				if (!r.ok) throw new Error("Could not fetch metadata (check URL)");
				const j = (await r.json()) as { title?: string; author_name?: string };
				if (toolId === "youtube-title-extractor") setOut(j.title || "");
				else if (toolId === "youtube-description-extractor") setOut(`Title: ${j.title}\nChannel: ${j.author_name || ""}`);
				else setOut(`Title: ${j.title}\n(Hashtags/tags are not exposed via oEmbed — paste tags manually if needed.)`);
			} else if (toolId === "youtube-video-statistics" || toolId === "youtube-channel-statistics") {
				setOut("YouTube does not expose full statistics without the Data API. Use YouTube Studio for authoritative numbers.");
			} else if (toolId === "youtube-video-count-checker" || toolId === "youtube-channel-age-checker" || toolId === "youtube-region-restriction-checker" || toolId === "youtube-channel-finder") {
				setOut("Paste the channel or video URL above, then open the channel tab in YouTube for live counts and details.");
			}
			toast.success("Updated");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Error");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>YouTube helper</CardTitle>
				<CardDescription>Client-side utilities; oEmbed works for public videos.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4 max-w-3xl">
				<div className="space-y-2">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="YouTube URL" />
				</div>
				<div className="space-y-2">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Extra text, lines, seconds, channel id..." className="min-h-[120px]" />
				</div>
				<div className="flex flex-wrap gap-2">
					<Button type="button" onClick={run}>
						Run
					</Button>
					{vid && (
						<Button type="button" variant="secondary" asChild>
							<a href={`https://www.youtube.com/watch?v=${vid}`} target="_blank" rel="noreferrer">
								<ExternalLink className="mr-2 h-4 w-4" />
								Open video
							</a>
						</Button>
					)}
				</div>
				<Textarea readOnly value={out} className="min-h-[160px] font-mono text-sm" />
			</CardContent>
		</Card>
	);
}

export const YOUTUBE_TOOL_IDS = new Set([
	"youtube-embed-code-generator",
	"youtube-subscribe-link-generator",
	"youtube-timestamp-link-generator",
	"youtube-title-capitalizer",
	"youtube-title-length-checker",
	"youtube-comment-picker",
	"youtube-hashtag-generator",
	"youtube-hashtag-extractor",
	"youtube-tag-generator",
	"youtube-description-generator",
	"youtube-title-generator",
	"youtube-channel-id-extractor",
	"youtube-title-extractor",
	"youtube-description-extractor",
	"youtube-tag-extractor",
	"youtube-video-statistics",
	"youtube-channel-statistics",
	"youtube-video-count-checker",
	"youtube-channel-age-checker",
	"youtube-region-restriction-checker",
	"youtube-channel-finder",
]);
