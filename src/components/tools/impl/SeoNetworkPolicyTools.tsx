"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import QRCodeGeneratorTool from "@/components/tools/utilities/QRCodeGeneratorTool";

export function SeoNetworkPolicyTools({ toolId }: { toolId: string }) {
	const [url, setUrl] = useState("https://example.com");
	const [text, setText] = useState("");
	const [title, setTitle] = useState("My page");
	const [desc, setDesc] = useState("Description");
	const [img, setImg] = useState("https://30tools.com/og-image.jpg");
	const [kw, setKw] = useState("seo");
	const [hex, setHex] = useState("#3b82f6");
	const [r, setR] = useState("59");
	const [g, setG] = useState("130");
	const [b, setB] = useState("246");
	const [fromCur, setFromCur] = useState("USD");
	const [toCur, setToCur] = useState("EUR");
	const [amt, setAmt] = useState("100");
	const [rateOut, setRateOut] = useState("");

	if (toolId === "qr-code-generator") {
		return <QRCodeGeneratorTool />;
	}

	const link = (label: string, href: string) => (
		<Button key={href} variant="secondary" size="sm" asChild>
			<a href={href} target="_blank" rel="noreferrer">
				<ExternalLink className="mr-2 h-3 w-3" />
				{label}
			</a>
		</Button>
	);

	if (toolId === "open-graph-generator" || toolId === "twitter-card-generator" || toolId === "meta-tag-generator") {
		const tags =
			toolId === "twitter-card-generator"
				? `<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="${title.replace(/"/g, "&quot;")}" />\n<meta name="twitter:description" content="${desc.replace(/"/g, "&quot;")}" />\n<meta name="twitter:image" content="${img}" />`
				: `<meta property="og:title" content="${title.replace(/"/g, "&quot;")}" />\n<meta property="og:description" content="${desc.replace(/"/g, "&quot;")}" />\n<meta property="og:url" content="${url}" />\n<meta property="og:image" content="${img}" />\n<meta property="og:type" content="website" />`;
		return (
			<Card>
				<CardHeader>
					<CardTitle>Meta tags</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-2xl">
					<Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
					<Textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
					<Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Canonical URL" />
					<Input value={img} onChange={(e) => setImg(e.target.value)} placeholder="Image URL" />
					<Textarea readOnly className="min-h-[160px] font-mono text-xs" value={tags} />
					<Button
						type="button"
						onClick={() => {
							navigator.clipboard.writeText(tags);
							toast.success("Copied");
						}}
					>
						Copy
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "keyword-density-checker") {
		const words = text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
		const total = words.length || 1;
		const needle = kw.toLowerCase();
		const hits = words.filter((w) => w === needle).length;
		const dens = ((hits / total) * 100).toFixed(2);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Keyword density</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-2xl">
					<Input value={kw} onChange={(e) => setKw(e.target.value)} placeholder="Keyword" />
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[200px]" />
					<Button
						type="button"
						onClick={() => toast.success(`Approx. density: ${dens}% (${hits}/${total} tokens)`)}
					>
						Analyze
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "keywords-suggestion-tool") {
		const words = Array.from(new Set((text.toLowerCase().match(/\b[a-z]{4,}\b/g) || []).slice(0, 30)));
		return (
			<Card>
				<CardHeader>
					<CardTitle>Keyword ideas</CardTitle>
					<CardDescription>Token frequency from pasted text.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[200px]" />
					<Button type="button" onClick={() => toast.success("Updated list")}>
						Extract
					</Button>
					<div className="text-sm text-muted-foreground">{words.join(", ")}</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "open-graph-checker") {
		const og = text.match(/property="og:([^"]+)"\s+content="([^"]*)"/g);
		return (
			<Card>
				<CardHeader>
					<CardTitle>OG tag scan</CardTitle>
					<CardDescription>Paste HTML source (view-source) for rough extraction.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[200px] font-mono text-xs" />
					<pre className="rounded border bg-muted/40 p-3 text-xs whitespace-pre-wrap">{og?.join("\n") || "No og: matches found"}</pre>
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
					{link("Open cached view", `https://webcache.googleusercontent.com/search?q=cache:${u}`)}
				</CardContent>
			</Card>
		);
	}

	if (toolId === "google-index-checker" || toolId === "website-ranking-checker") {
		const u = encodeURIComponent(url);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Search operators</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 flex flex-col gap-2">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} />
					{link("site: lookup on Google", `https://www.google.com/search?q=site:${u}`)}
					{link("Indexed URL check", `https://www.google.com/search?q=info:${u}`)}
				</CardContent>
			</Card>
		);
	}

	if (
		toolId === "dns-records-checker" ||
		toolId === "domain-age-checker" ||
		toolId === "whois-domain-lookup" ||
		toolId === "wordpress-theme-detector" ||
		toolId === "hosting-checker"
	) {
		const host = url.replace(/^https?:\/\//, "").split("/")[0];
		return (
			<Card>
				<CardHeader>
					<CardTitle>External checks</CardTitle>
					<CardDescription>DNS and WHOIS are not available purely in-browser; use trusted providers.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3 flex flex-col gap-2">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Domain" />
					{link("DNS Google", `https://dns.google/resolve?name=${host}&type=A`)}
					{link("WHOIS lookup", `https://who.is/whois/${host}`)}
					{toolId === "wordpress-theme-detector" &&
						link("BuiltWith profile", `https://builtwith.com/?${host}`)}
				</CardContent>
			</Card>
		);
	}

	if (toolId === "redirect-checker" || toolId === "server-status-checker" || toolId === "page-size-checker" || toolId === "get-http-headers") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>HTTP check</CardTitle>
					<CardDescription>
						Many sites block browser fetch (CORS). Try curl or an online checker.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} />
					<pre className="rounded border bg-muted/40 p-3 text-xs whitespace-pre-wrap">
						{`curl -I "${url}"`}
					</pre>
					{link("HTTPStatus", `https://httpstatus.io/?url=${encodeURIComponent(url)}`)}
				</CardContent>
			</Card>
		);
	}

	if (toolId === "http-status-code-checker") {
		const code = Number.parseInt(text, 10);
		const map: Record<number, string> = {
			200: "OK",
			301: "Moved permanently",
			302: "Found",
			404: "Not found",
			500: "Server error",
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Status reference</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-md">
					<Input value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. 404" />
					<div className="font-mono">{Number.isNaN(code) ? "—" : `${code} — ${map[code] || "Look up MDN"}`}</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "domain-to-ip-converter" || toolId === "ip-address-lookup") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>DNS / IP</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="example.com" />
					{link("Resolve A record (Google DNS JSON)", `https://dns.google/resolve?name=${encodeURIComponent(url.replace(/^https?:\/\//, "").split("/")[0])}&type=A`)}
				</CardContent>
			</Card>
		);
	}

	if (toolId === "screen-resolution-simulator") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Viewport presets</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2">
					{[
						["iPhone 14", "390×844"],
						["iPad", "768×1024"],
						["HD", "1366×768"],
						["FHD", "1920×1080"],
					].map(([n, s]) => (
						<Button key={n} type="button" variant="outline" size="sm">
							{n}: {s}
						</Button>
					))}
					<p className="text-sm text-muted-foreground w-full pt-2">
						Use your browser devtools device toolbar for accurate simulation.
					</p>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "convert-srt-to-vtt" || toolId === "convert-vtt-to-srt") {
		const flip = () => {
			if (toolId === "convert-srt-to-vtt") {
				setText((t) =>
					t
						.replace(/(\d{2}):(\d{2}):(\d{2}),(\d{3})/g, "$1:$2.$3")
						.replace(/\r?\n/g, "\n")
						.replace(/^/m, "WEBVTT\n\n"),
				);
			} else {
				setText((t) => t.replace(/^WEBVTT.*\n+/i, "").replace(/(\d{2}):(\d{2})\.(\d{3})/g, "$1:$2:$3,000".replace(",000", ",$3")));
			}
			toast.success("Converted (basic timing rewrite — verify timings)");
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Subtitle convert</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[220px] font-mono text-xs" />
					<Button type="button" onClick={flip}>
						Convert
					</Button>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "htaccess-redirect-generator") {
		const snippet = `RewriteEngine On\nRewriteRule ^old/?$ ${url} [R=301,L]`;
		return (
			<Card>
				<CardHeader>
					<CardTitle>.htaccess snippet</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Label>Target URL</Label>
					<Input value={url} onChange={(e) => setUrl(e.target.value)} />
					<Textarea readOnly className="min-h-[120px] font-mono text-xs" value={snippet} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "faq-schema-generator") {
		const schema = JSON.stringify(
			{
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: "Sample question?",
						acceptedAnswer: { "@type": "Answer", text: "Sample answer." },
					},
				],
			},
			null,
			2,
		);
		return (
			<Card>
				<CardHeader>
					<CardTitle>FAQ JSON-LD starter</CardTitle>
				</CardHeader>
				<CardContent>
					<Textarea readOnly className="min-h-[200px] font-mono text-xs" value={schema} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "privacy-policy-generator" || toolId === "terms-and-condition-generator" || toolId === "disclaimer-generator") {
		const body =
			toolId === "privacy-policy-generator"
				? `Privacy Policy for ${url}\n\nWe respect your privacy. This policy describes data collected when you use our site.`
				: toolId === "terms-and-condition-generator"
					? `Terms of Use for ${url}\n\nBy using this site you agree to these terms.`
					: `Disclaimer for ${url}\n\nInformation is provided as-is without warranties.`;
		return (
			<Card>
				<CardHeader>
					<CardTitle>Template</CardTitle>
					<CardDescription>Starter text only — have counsel review before publishing.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Your site URL" />
					<Textarea readOnly className="min-h-[200px]" value={body} />
				</CardContent>
			</Card>
		);
	}

	if (toolId === "hex-to-rgb-converter" || toolId === "rgb-to-hex-converter" || toolId === "color-converter") {
		const toRgb = () => {
			const m = hex.trim().match(/^#?([0-9a-f]{6})$/i);
			if (!m) return;
			const n = Number.parseInt(m[1], 16);
			setR(String((n >> 16) & 255));
			setG(String((n >> 8) & 255));
			setB(String(n & 255));
		};
		const toHex = () => {
			const ri = Number.parseInt(r, 10);
			const gi = Number.parseInt(g, 10);
			const bi = Number.parseInt(b, 10);
			if ([ri, gi, bi].some((x) => Number.isNaN(x))) return;
			setHex(`#${((1 << 24) + (ri << 16) + (gi << 8) + bi).toString(16).slice(1)}`);
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Color</CardTitle>
				</CardHeader>
				<CardContent className="grid gap-4 md:grid-cols-2 max-w-xl">
					<div className="space-y-2">
						<Label>Hex</Label>
						<Input value={hex} onChange={(e) => setHex(e.target.value)} />
						<Button type="button" onClick={toRgb}>
							Hex → RGB
						</Button>
					</div>
					<div className="space-y-2">
						<Label>R / G / B</Label>
						<div className="flex gap-2">
							<Input value={r} onChange={(e) => setR(e.target.value)} />
							<Input value={g} onChange={(e) => setG(e.target.value)} />
							<Input value={b} onChange={(e) => setB(e.target.value)} />
						</div>
						<Button type="button" onClick={toHex}>
							RGB → Hex
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "currency-converter") {
		const go = async () => {
			try {
				const r = await fetch(`https://api.frankfurter.app/latest?from=${fromCur}&to=${toCur}`);
				const j = (await r.json()) as { rates?: Record<string, number> };
				const rate = j.rates?.[toCur];
				if (!rate) throw new Error("No rate");
				const v = Number.parseFloat(amt);
				setRateOut(`${v} ${fromCur} ≈ ${(v * rate).toFixed(2)} ${toCur} (ECB via frankfurter.app)`);
				toast.success("Loaded rate");
			} catch {
				toast.error("Could not load FX rate");
			}
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>FX convert</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-md">
					<Input value={amt} onChange={(e) => setAmt(e.target.value)} />
					<div className="flex gap-2">
						<Input value={fromCur} onChange={(e) => setFromCur(e.target.value.toUpperCase())} />
						<Input value={toCur} onChange={(e) => setToCur(e.target.value.toUpperCase())} />
					</div>
					<Button type="button" onClick={go}>
						Convert
					</Button>
					<div className="font-mono text-sm">{rateOut}</div>
				</CardContent>
			</Card>
		);
	}

	if (toolId === "url-rewriting-tool") {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Rewrite helper</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3 max-w-2xl">
					<Label>Find</Label>
					<Input value={title} onChange={(e) => setTitle(e.target.value)} />
					<Label>Replace</Label>
					<Input value={desc} onChange={(e) => setDesc(e.target.value)} />
					<Label>Text</Label>
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[160px]" />
					<Button
						type="button"
						onClick={() => {
							setText((t) => t.split(title).join(desc));
							toast.success("Replaced");
						}}
					>
						Replace all
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
					<CardDescription>
						Use Chrome&apos;s <code className="text-xs">BarcodeDetector</code> where available, or upload to a
						desktop scanner.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						For reliable batch decoding, use a native app. This page focuses on generation via the QR tool.
					</p>
				</CardContent>
			</Card>
		);
	}

	return null;
}

export const SEO_NETWORK_POLICY_IDS = new Set([
	"open-graph-generator",
	"twitter-card-generator",
	"meta-tag-generator",
	"keyword-density-checker",
	"keywords-suggestion-tool",
	"open-graph-checker",
	"google-cache-checker",
	"google-index-checker",
	"website-ranking-checker",
	"dns-records-checker",
	"domain-age-checker",
	"whois-domain-lookup",
	"wordpress-theme-detector",
	"hosting-checker",
	"redirect-checker",
	"server-status-checker",
	"page-size-checker",
	"get-http-headers",
	"http-status-code-checker",
	"domain-to-ip-converter",
	"ip-address-lookup",
	"screen-resolution-simulator",
	"convert-srt-to-vtt",
	"convert-vtt-to-srt",
	"htaccess-redirect-generator",
	"faq-schema-generator",
	"privacy-policy-generator",
	"terms-and-condition-generator",
	"disclaimer-generator",
	"hex-to-rgb-converter",
	"rgb-to-hex-converter",
	"color-converter",
	"currency-converter",
	"url-rewriting-tool",
	"qr-code-generator",
	"qr-code-decoder",
]);
