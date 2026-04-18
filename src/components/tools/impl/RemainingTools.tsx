"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const REMAINING = new Set([
	"open-graph-checker",
	"google-cache-checker",
	"google-index-checker",
	"website-ranking-checker",
	"keywords-suggestion-tool",
	"ip-address-lookup",
	"wordpress-theme-detector",
	"domain-age-checker",
	"whois-domain-lookup",
	"screen-resolution-simulator",
	"convert-srt-to-vtt",
	"convert-vtt-to-srt",
	"url-rewriting-tool",
	"url-opener",
	"qr-code-decoder",
	"credit-card-validator",
	"credit-card-generator",
	"color-converter",
	"article-rewriter",
	"random-word-generator",
	"word-to-number-converter",
	"number-to-word-converter",
]);

export function isRemainingTool(toolId: string) {
	return REMAINING.has(toolId);
}

function luhnValid(digits: string): boolean {
	const d = digits.replace(/\D/g, "");
	if (d.length < 13) return false;
	let sum = 0;
	let alt = false;
	for (let i = d.length - 1; i >= 0; i--) {
		let n = Number.parseInt(d[i], 10);
		if (alt) {
			n *= 2;
			if (n > 9) n -= 9;
		}
		sum += n;
		alt = !alt;
	}
	return sum % 10 === 0;
}

export default function RemainingTools({ toolId }: { toolId: string }) {
	const [url, setUrl] = useState("https://example.com");
	const [text, setText] = useState("");
	const [a, setA] = useState("");
	const [b, setB] = useState("");

	if (toolId === "open-graph-checker") {
		const og = text.match(/property="og:[^"]+"\s+content="[^"]*"/g);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Open Graph scan</CardTitle>
					<CardDescription>Paste HTML source to list og:* meta tags.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<Textarea className="min-h-[200px] font-mono text-xs" value={text} onChange={(e) => setText(e.target.value)} />
					<pre className="rounded border bg-muted/40 p-3 text-xs whitespace-pre-wrap">{og?.join("\n") || "—"}</pre>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "google-cache-checker") {
		const u = encodeURIComponent(url);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Google cache</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} />
					<Button variant="secondary" asChild>
						<a href={`https://webcache.googleusercontent.com/search?q=cache:${u}`} target="_blank" rel="noreferrer">
							<ExternalLink className="mr-2 h-4 w-4" />
							Open cached page
						</a>
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "google-index-checker" || toolId === "website-ranking-checker") {
		const u = encodeURIComponent(url);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Google search</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} />
					<Button variant="secondary" asChild>
						<a href={`https://www.google.com/search?q=site:${u}`} target="_blank" rel="noreferrer">
							site: search
						</a>
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "keywords-suggestion-tool") {
		const words = useMemo(() => {
			const w = text.toLowerCase().match(/\b[a-z]{4,}\b/g) || [];
			return [...new Set(w)].slice(0, 40).join(", ");
		}, [text]);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Keyword tokens</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Textarea className="min-h-[200px]" value={text} onChange={(e) => setText(e.target.value)} />
					<p className="text-sm text-muted-foreground">{words || "Paste body copy…"}</p>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "ip-address-lookup") {
		const host = url.replace(/^https?:\/\//, "").split("/")[0];
		return (
			<Card>
				<CardHeader>
					<CardTitle>DNS lookup</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="domain or IP" />
					<Button variant="secondary" asChild>
						<a href={`https://dns.google/resolve?name=${encodeURIComponent(host)}&type=A`} target="_blank" rel="noreferrer">
							Google DNS JSON
						</a>
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "wordpress-theme-detector" || toolId === "domain-age-checker" || toolId === "whois-domain-lookup") {
		const host = url.replace(/^https?:\/\//, "").split("/")[0];
		return (
			<Card>
				<CardHeader>
					<CardTitle>External lookup</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 flex flex-col gap-2">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} />
					{toolId === "wordpress-theme-detector" && (
						<Button variant="secondary" asChild>
							<a href={`https://builtwith.com/?${host}`} target="_blank" rel="noreferrer">
								BuiltWith
							</a>
						</Button>
					)}
					<Button variant="secondary" asChild>
						<a href={`https://who.is/whois/${host}`} target="_blank" rel="noreferrer">
							WHOIS
						</a>
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "screen-resolution-simulator") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Common viewports</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2 text-sm">
					{["390×844 (phone)", "768×1024 (tablet)", "1366×768", "1920×1080"].map((s) => (
						<span key={s} className="rounded border px-3 py-1">
							{s}
						</span>
					))}
					<p className="w-full text-muted-foreground">Use DevTools device mode for accurate emulation.</p>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "convert-srt-to-vtt" || toolId === "convert-vtt-to-srt") {
		const flip = () => {
			if (toolId === "convert-srt-to-vtt") {
				setText((t) => `WEBVTT\n\n${t.replace(/(\d{2}):(\d{2}):(\d{2}),(\d{3})/g, "$1:$2.$3")}`);
			} else {
				setText((t) => t.replace(/^WEBVTT.*\n+/i, "").replace(/(\d{2}):(\d{2})\.(\d{3})/g, "$1:$2:$3,000"));
			}
			toast.success("Converted (verify timings)");
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Subtitle</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Textarea className="min-h-[220px] font-mono text-xs" value={text} onChange={(e) => setText(e.target.value)} />
					<Button type="button" onClick={flip}>
						Convert
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "url-rewriting-tool") {
		const out = useMemo(() => text.split(a).join(b), [text, a, b]);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Find & replace</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input placeholder="Find" value={a} onChange={(e) => setA(e.target.value)} />
					<Input placeholder="Replace" value={b} onChange={(e) => setB(e.target.value)} />
					<Textarea className="min-h-[160px]" value={text} onChange={(e) => setText(e.target.value)} />
					<Textarea readOnly className="min-h-[160px] font-mono text-sm" value={out} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "url-opener") {
		const href = url.startsWith("http") ? url : url ? `https://${url}` : "";
		return (
			<Card>
				<CardHeader>
					<CardTitle>Open URL</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-md">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} />
					<Button type="button" disabled={!href} onClick={() => href && window.open(href, "_blank", "noopener,noreferrer")}>
						Open
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "qr-code-decoder") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>QR decode</CardTitle>
					<CardDescription>Use a native scanner app for best results; generation is available in the QR tool.</CardDescription>
				</CardHeader>
				<CardContent />
			</Card>
		);
	}

	if (toolId === "credit-card-validator") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Luhn check</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-md">
					<Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Card number" />
					<Button type="button" onClick={() => toast.success(luhnValid(text) ? "Valid checksum" : "Invalid")}>
						Validate
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "credit-card-generator") {
		const gen = () => {
			const prefix = "4";
			let body = "";
			for (let i = 0; i < 15; i++) body += Math.floor(Math.random() * 10).toString();
			for (let check = 0; check < 10; check++) {
				const pan = prefix + body + check;
				if (luhnValid(pan)) {
					setText(pan);
					toast.success("Generated test PAN");
					return;
				}
			}
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Test PAN</CardTitle>
					<CardDescription>For QA only.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<Button type="button" onClick={gen}>
						Generate
					</Button>
					<Input readOnly className="font-mono" value={text} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "color-converter") {
		const hex = a;
		const setHex = setA;
		const out = useMemo(() => {
			const m = hex.trim().match(/^#?([0-9a-f]{6})$/i);
			if (!m) return "";
			const n = Number.parseInt(m[1], 16);
			return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
		}, [hex]);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Hex → RGB</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-md">
					<Input value={hex} onChange={(e) => setHex(e.target.value)} placeholder="#336699" />
					<Input readOnly value={out} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "article-rewriter") {
		const out = useMemo(
			() => text.replace(/\bvery\b/gi, "really").replace(/\bgood\b/gi, "solid").replace(/\bbad\b/gi, "rough"),
			[text],
		);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Light rewrite</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Textarea className="min-h-[200px]" value={text} onChange={(e) => setText(e.target.value)} />
					<Textarea readOnly className="min-h-[200px]" value={out} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "random-word-generator") {
		const pool = ["stream", "focus", "build", "launch", "scale", "craft", "signal", "design"];
		const gen = () => {
			const n = Math.min(50, Math.max(1, Number.parseInt(b, 10) || 5));
			setText(Array.from({ length: n }, () => pool[Math.floor(Math.random() * pool.length)]).join(" "));
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Random words</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input placeholder="Count" value={b} onChange={(e) => setB(e.target.value)} />
					<Button type="button" onClick={gen}>
						Generate
					</Button>
					<Textarea readOnly value={text} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "word-to-number-converter") {
		const map: Record<string, string> = {
			zero: "0",
			one: "1",
			two: "2",
			three: "3",
			four: "4",
			five: "5",
			six: "6",
			seven: "7",
			eight: "8",
			nine: "9",
			ten: "10",
		};
		const out = useMemo(
			() =>
				text
					.toLowerCase()
					.split(/\s+/)
					.map((w) => map[w] ?? w)
					.join(" "),
			[text],
		);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Words → digits</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} />
					<Textarea readOnly value={out} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "number-to-word-converter") {
		const n = Number.parseInt(text.trim(), 10);
		const out = useMemo(() => {
			if (!Number.isFinite(n) || n < 0 || n > 99) return "";
			const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
			const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
			const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
			if (n < 10) return ones[n];
			if (n < 20) return teens[n - 10];
			const t = Math.floor(n / 10);
			const o = n % 10;
			return `${tens[t]}${o ? `-${ones[o]}` : ""}`;
		}, [text, n]);
		return (
			<Card>
				<CardHeader>
					<CardTitle>0–99 to words</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-md">
					<Input value={text} onChange={(e) => setText(e.target.value)} />
					<Input readOnly value={out} />
				</CardContent>
			</Card>
		);
	}

	return null;
}
