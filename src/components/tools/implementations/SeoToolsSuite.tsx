"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function keywordDensity(body: string, focus: string) {
	const words = body
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\s]/gu, " ")
		.split(/\s+/)
		.filter(Boolean);
	if (!words.length) return "No words found.";
	const f = focus.toLowerCase().trim();
	if (!f) return "Enter a focus keyword.";
	const hits = words.filter((w) => w === f).length;
	const pct = (hits / words.length) * 100;
	return `Focus term "${f}": ${hits} hits / ${words.length} words (${pct.toFixed(2)}%).`;
}

function extractMeta(html: string, name: string) {
	const re = new RegExp(
		`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`,
		"i",
	);
	const m = html.match(re);
	return m?.[1] ?? "";
}

export default function SeoToolsSuite({ toolId }: { toolId: string }) {
	const [url, setUrl] = useState("https://");
	const [text, setText] = useState("");
	const [keyword, setKeyword] = useState("");
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [out, setOut] = useState("");

	const density = useMemo(() => keywordDensity(text, keyword), [text, keyword]);

	const fetchPage = async () => {
		setOut("");
		try {
			const res = await fetch("/api/tools/safe-http", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ url, mode: "getText", maxBytes: 250_000 }),
			});
			const data = (await res.json()) as { error?: string; text?: string; status?: number };
			if (!res.ok) throw new Error(data.error || "Fetch failed");
			const html = data.text || "";
			if (toolId === "open-graph-checker" || toolId === "google-cache-checker") {
				const ogTitle = extractMeta(html, "og:title") || html.match(/<title>([^<]+)<\/title>/i)?.[1];
				const ogDesc =
					extractMeta(html, "og:description") || extractMeta(html, "description");
				setOut(
					[
						`HTTP: ${data.status}`,
						`og:title: ${ogTitle || "—"}`,
						`og:description: ${ogDesc || "—"}`,
						`twitter:card: ${extractMeta(html, "twitter:card") || "—"}`,
					].join("\n"),
				);
				return;
			}
			if (toolId === "google-index-checker") {
				const host = new URL(url).hostname;
				setOut(`Search Google for indexed pages from this host:\nhttps://www.google.com/search?q=site%3A${encodeURIComponent(host)}`);
				return;
			}
			if (toolId === "website-ranking-checker") {
				setOut(
					"Live ranking requires SERP APIs. Use Google Search Console for your own domain, or connect a rank-tracking provider.",
				);
				return;
			}
			if (toolId === "keywords-suggestion-tool") {
				const words = text
					.toLowerCase()
					.split(/\s+/)
					.filter((w) => w.length > 3);
				const uniq = [...new Set(words)].slice(0, 40);
				setOut(uniq.join(", "));
				return;
			}
			toast.success("Done");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Failed");
		}
	};

	if (toolId === "keyword-density-checker") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Keyword density</CardTitle>
					<CardDescription>Exact whole-word matches in your pasted copy.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Focus keyword" />
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[220px]" />
					<pre className="rounded border bg-muted/40 p-3 text-sm">{density}</pre>
				</CardContent>
			</Card>
		);
	}

	if (
		toolId === "meta-tag-generator" ||
		toolId === "open-graph-generator" ||
		toolId === "twitter-card-generator"
	) {
		const build = () => {
			const lines = [
				`<title>${title || "Page title"}</title>`,
				`<meta name="description" content="${desc || "Description"}" />`,
			];
			if (toolId !== "twitter-card-generator") {
				lines.push(`<meta property="og:title" content="${title || "Page title"}" />`);
				lines.push(`<meta property="og:description" content="${desc || "Description"}" />`);
				lines.push(`<meta property="og:type" content="website" />`);
			}
			if (toolId !== "open-graph-generator") {
				lines.push(`<meta name="twitter:card" content="summary_large_image" />`);
				lines.push(`<meta name="twitter:title" content="${title || "Page title"}" />`);
				lines.push(`<meta name="twitter:description" content="${desc || "Description"}" />`);
			}
			setOut(lines.join("\n"));
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Markup snippet</CardTitle>
					<CardDescription>Fill fields, generate, then paste into your head block.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4 max-w-xl">
					<Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
					<Textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
					<Button type="button" onClick={build}>
						Generate
					</Button>
					<Textarea readOnly value={out} className="min-h-[200px] font-mono text-xs" />
				</CardContent>
			</Card>
		);
	}

	if (
		toolId === "open-graph-checker" ||
		toolId === "google-cache-checker" ||
		toolId === "google-index-checker" ||
		toolId === "website-ranking-checker" ||
		toolId === "keywords-suggestion-tool"
	) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>SEO fetch / helper</CardTitle>
					<CardDescription>
						{toolId === "keywords-suggestion-tool"
							? "Paste article copy to extract repeated meaningful tokens."
							: "Uses the 30tools safe HTTP proxy for public pages."}
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					{toolId !== "keywords-suggestion-tool" ? (
						<Input value={url} onChange={(e) => setUrl(e.target.value)} />
					) : (
						<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[200px]" />
					)}
					<Button type="button" onClick={fetchPage}>
						Run
					</Button>
					<pre className="rounded border bg-muted/40 p-3 text-sm whitespace-pre-wrap">{out}</pre>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>SEO tool</CardTitle>
			</CardHeader>
			<CardContent className="text-sm text-muted-foreground">
				Interactive panel for <code>{toolId}</code> is bundled with the other SEO utilities—use keyword
				density or meta generators from the menu above.
			</CardContent>
		</Card>
	);
}

export const SEO_SUITE_IDS = new Set([
	"keyword-density-checker",
	"meta-tag-generator",
	"open-graph-generator",
	"twitter-card-generator",
	"open-graph-checker",
	"google-cache-checker",
	"google-index-checker",
	"website-ranking-checker",
	"keywords-suggestion-tool",
]);
