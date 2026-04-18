"use client";

import { useCallback, useEffect, useState } from "react";
import { Copy, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import md5 from "md5";

const ROMAN_MAP: [number, string][] = [
	[1000, "M"],
	[900, "CM"],
	[500, "D"],
	[400, "CD"],
	[100, "C"],
	[90, "XC"],
	[50, "L"],
	[40, "XL"],
	[10, "X"],
	[9, "IX"],
	[5, "V"],
	[4, "IV"],
	[1, "I"],
];

function toRoman(n: number): string {
	if (n < 1 || n > 3999) return "";
	let s = "";
	let v = n;
	for (const [val, sym] of ROMAN_MAP) {
		while (v >= val) {
			s += sym;
			v -= val;
		}
	}
	return s;
}

function fromRoman(r: string): number {
	const t = r.toUpperCase().trim();
	let i = 0;
	let n = 0;
	const sym: Record<string, number> = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
	while (i < t.length) {
		const a = sym[t[i]] || 0;
		const b = sym[t[i + 1]] || 0;
		if (a < b) {
			n += b - a;
			i += 2;
		} else {
			n += a;
			i += 1;
		}
	}
	return n;
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

export function MixedBrowserTools({ toolId }: { toolId: string }) {
	const [text, setText] = useState("");
	const [out, setOut] = useState("");

	const runMd5 = () => setOut(md5(text));

	useEffect(() => {
		if (toolId === "what-is-my-user-agent") setOut(typeof navigator !== "undefined" ? navigator.userAgent : "");
		if (toolId === "what-is-my-browser") {
			const ua = navigator.userAgent;
			setOut(`Browser hint (from user-agent):\n${ua}`);
		}
		if (toolId === "what-is-my-screen-resolution") {
			setOut(
				`${window.screen.width} × ${window.screen.height} (avail ${window.screen.availWidth} × ${window.screen.availHeight}), DPR ${window.devicePixelRatio || 1}`,
			);
		}
	}, [toolId]);

	const fetchIp = useCallback(async () => {
		try {
			const r = await fetch("https://api.ipify.org?format=json");
			const j = (await r.json()) as { ip?: string };
			setOut(j.ip || "");
			toast.success("Loaded");
		} catch {
			toast.error("Could not load IP");
		}
	}, []);

	if (toolId === "md5-generator") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>MD5 hash</CardTitle>
					<CardDescription>MD5 runs locally (educational / checksum use).</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4 max-w-2xl">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[160px] font-mono" />
					<Button type="button" onClick={runMd5}>
						Hash
					</Button>
					<div className="rounded border bg-muted/40 p-3 font-mono break-all">{out}</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "random-uuid-generator") {
		const gen = () => setOut(crypto.randomUUID());
		return (
			<Card>
				<CardHeader>
					<CardTitle>UUID v4</CardTitle>
					<CardDescription>Generated with Web Crypto in the browser.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Button type="button" onClick={gen}>
						<RefreshCw className="mr-2 h-4 w-4" />
						Generate
					</Button>
					<div className="flex gap-2 items-center">
						<code className="rounded border px-3 py-2 font-mono text-sm">{out}</code>
						<Button
							type="button"
							size="sm"
							variant="secondary"
							onClick={() => {
								navigator.clipboard.writeText(out);
								toast.success("Copied");
							}}
							disabled={!out}
						>
							<Copy className="h-4 w-4" />
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "what-is-my-ip-address") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Your public IP</CardTitle>
					<CardDescription>Fetched via ipify from your browser.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Button type="button" onClick={fetchIp}>
						Reveal IP
					</Button>
					<div className="font-mono text-lg">{out || "—"}</div>
				</CardContent>
			</Card>
		);
	}

	if (
		toolId === "what-is-my-user-agent" ||
		toolId === "what-is-my-browser" ||
		toolId === "what-is-my-screen-resolution"
	) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Device info</CardTitle>
				</CardHeader>
				<CardContent>
					<pre className="whitespace-pre-wrap rounded border bg-muted/40 p-4 text-sm">{out}</pre>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "number-to-roman-numerals") {
		const go = () => {
			const n = Number.parseInt(text, 10);
			setOut(Number.isNaN(n) ? "" : toRoman(n));
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Number to Roman</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4 max-w-md">
					<Input value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. 2024" />
					<Button type="button" onClick={go}>
						Convert
					</Button>
					<div className="font-mono text-2xl">{out}</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "roman-numerals-to-number") {
		const go = () => setOut(String(fromRoman(text)));
		return (
			<Card>
				<CardHeader>
					<CardTitle>Roman to number</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4 max-w-md">
					<Input value={text} onChange={(e) => setText(e.target.value)} placeholder="MCMXCIV" />
					<Button type="button" onClick={go}>
						Convert
					</Button>
					<div className="font-mono text-2xl">{out}</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "credit-card-validator") {
		const go = () => setOut(luhnValid(text) ? "Valid Luhn checksum" : "Invalid or incomplete");
		return (
			<Card>
				<CardHeader>
					<CardTitle>Card Luhn check</CardTitle>
					<CardDescription>Numbers stay in your browser.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4 max-w-md">
					<Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Card number" />
					<Button type="button" onClick={go}>
						Validate
					</Button>
					<div>{out}</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "credit-card-generator") {
		const gen = () => {
			const prefix = "4";
			let body = "";
			for (let i = 0; i < 15; i++) body += Math.floor(Math.random() * 10).toString();
			const base = prefix + body;
			for (let check = 0; check < 10; check++) {
				if (luhnValid(base + check)) {
					setOut(base + check);
					return;
				}
			}
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Test card (Visa-like)</CardTitle>
					<CardDescription>For QA only — not a real account.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Button type="button" onClick={gen}>
						Generate
					</Button>
					<code className="block rounded border p-3 font-mono">{out}</code>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "url-encode" || toolId === "url-decode") {
		const go = () => {
			try {
				setOut(toolId === "url-encode" ? encodeURIComponent(text) : decodeURIComponent(text));
			} catch {
				setOut("Invalid input");
			}
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>{toolId === "url-encode" ? "Encode" : "Decode"}</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[160px] font-mono" />
					<Button type="button" onClick={go}>
						Run
					</Button>
					<Textarea readOnly value={out} className="min-h-[160px] font-mono" />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "html-encoder" || toolId === "html-decoder") {
		const go = () => {
			if (toolId === "html-encoder") {
				const el = document.createElement("div");
				el.textContent = text;
				setOut(el.innerHTML);
			} else {
				const el = document.createElement("textarea");
				el.innerHTML = text;
				setOut(el.value);
			}
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>{toolId === "html-encoder" ? "Encode HTML" : "Decode entities"}</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[160px] font-mono" />
					<Button type="button" onClick={go}>
						Run
					</Button>
					<Textarea readOnly value={out} className="min-h-[160px] font-mono" />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "url-parser") {
		const go = () => {
			try {
				const u = new URL(text.startsWith("http") ? text : `https://${text}`);
				setOut(
					[
						`href: ${u.href}`,
						`origin: ${u.origin}`,
						`host: ${u.host}`,
						`pathname: ${u.pathname}`,
						`search: ${u.search}`,
						`hash: ${u.hash}`,
					].join("\n"),
				);
			} catch {
				setOut("Invalid URL");
			}
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>URL parts</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Input value={text} onChange={(e) => setText(e.target.value)} placeholder="https://example.com/path?q=1" />
					<Button type="button" onClick={go}>
						Parse
					</Button>
					<pre className="rounded border bg-muted/40 p-3 text-sm whitespace-pre-wrap">{out}</pre>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "url-opener") {
		const href = text.startsWith("http") ? text : text ? `https://${text}` : "";
		return (
			<Card>
				<CardHeader>
					<CardTitle>Open URL</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4 max-w-md">
					<Input value={text} onChange={(e) => setText(e.target.value)} placeholder="https://..." />
					<Button
						type="button"
						disabled={!href}
						onClick={() => href && window.open(href, "_blank", "noopener,noreferrer")}
					>
						<ExternalLink className="mr-2 h-4 w-4" />
						Open
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "facebook-id-finder") {
		const go = () => {
			const m = text.match(/facebook\.com\/(?:profile\.php\?id=|people\/[^/]+\/|)([0-9]+)/i);
			setOut(m ? `Suspected numeric id: ${m[1]}` : "Paste a profile URL containing an id.");
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Facebook URL helper</CardTitle>
					<CardDescription>Extracts numeric id when present in the URL.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} />
					<Button type="button" onClick={go}>
						Parse
					</Button>
					<div>{out}</div>
				</CardContent>
			</Card>
		);
	}

	return null;
}

export const MIXED_BROWSER_IDS = new Set([
	"md5-generator",
	"random-uuid-generator",
	"what-is-my-ip-address",
	"what-is-my-user-agent",
	"what-is-my-browser",
	"what-is-my-screen-resolution",
	"number-to-roman-numerals",
	"roman-numerals-to-number",
	"credit-card-validator",
	"credit-card-generator",
	"url-encode",
	"url-decode",
	"html-encoder",
	"html-decoder",
	"url-parser",
	"url-opener",
	"facebook-id-finder",
]);
