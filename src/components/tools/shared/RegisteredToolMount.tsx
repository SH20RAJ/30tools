"use client";

import dynamic from "next/dynamic";
import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import { diffChars } from "diff";
import BuiltInCalculators, { type CalcKind } from "@/components/tools/built-ins/BuiltInCalculators";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import type { BaseConverterKind } from "@/components/tools/shared/BaseConverter";
import {
	BASE_CONVERTER_MAP,
	IMAGE_FORMAT_TOOL_MAP,
	UNIT_TOOL_MAP,
} from "@/components/tools/shared/tool-id-registry";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const JsonFormatterTool = dynamic(() => import("@/components/tools/code/JsonFormatterTool.jsx"), {
	ssr: false,
});
const JSONMinifierTool = dynamic(() => import("@/components/tools/developer/JSONMinifierTool.jsx"), {
	ssr: false,
});
const JSONToTSVTool = dynamic(() => import("@/components/tools/developer/JSONToTSVTool.jsx"), {
	ssr: false,
});
const JSONToSchemaTool = dynamic(() => import("@/components/tools/developer/JSONToSchemaTool.jsx"), {
	ssr: false,
});
const Base64Tool = dynamic(() => import("@/components/tools/developer/Base64Tool.jsx"), { ssr: false });
const HashGeneratorTool = dynamic(
	() => import("@/components/tools/security/HashGeneratorTool.jsx"),
	{ ssr: false },
);
const QrGeneratorTool = dynamic(() => import("@/components/tools/utilities/QrGeneratorTool.jsx"), {
	ssr: false,
});
const ImageConverterTool = dynamic(
	() => import("@/components/tools/image/ImageConverterTool.jsx"),
	{ ssr: false },
);
const ImageCompressorTool = dynamic(
	() => import("@/components/tools/image/ImageCompressorTool.jsx"),
	{ ssr: false },
);
const FaviconGeneratorTool = dynamic(
	() => import("@/components/tools/image/FaviconGeneratorTool.jsx"),
	{ ssr: false },
);
const PDFEditorTool = dynamic(
	() => import("@/components/tools/pdf/PDFEditorTool.jsx"),
	{ ssr: false },
);
const BackgroundRemoverTool = dynamic(() => import("@/components/tools/image/BackgroundRemoverTool.jsx"), { ssr: false });
const ExifReaderTool = dynamic(() => import("@/components/tools/image/ExifReaderTool.jsx"), { ssr: false });
const LogoGeneratorTool = dynamic(() => import("@/components/tools/image/LogoGeneratorTool.jsx"), { ssr: false });
const PhotoEnhancerTool = dynamic(() => import("@/components/tools/image/PhotoEnhancerTool.jsx"), { ssr: false });
const ImageResizerTool = dynamic(() => import("@/components/tools/image/ImageResizerTool.jsx"), {
	ssr: false,
});
const LineSorterTool = dynamic(() => import("@/components/tools/text/LineSorterTool.jsx"), {
	ssr: false,
});
const YouTubeChannelIDFinderTool = dynamic(
	() => import("@/components/tools/youtube/YouTubeChannelIDFinderTool.jsx"),
	{ ssr: false },
);
const DownloaderEngine = dynamic(
	() => import("@/components/tools/downloaders/DownloaderEngine.jsx"),
	{ ssr: false },
);
const WordToNumberConverter = dynamic(
	() => import("@/components/tools/converter/TextToNumberConverter.jsx"),
	{ ssr: false },
);
const MarkdownToText = dynamic(
	() => import("@/components/tools/text/MarkdownToText.jsx"),
	{ ssr: false },
);
const ImageToPDF = dynamic(
	() => import("@/components/tools/pdf/ImageToPDF.tsx"),
	{ ssr: false },
);
const PDFToImage = dynamic(
	() => import("@/components/tools/pdf/PDFToImage.tsx"),
	{ ssr: false },
);
const PDFProtect = dynamic(
	() => import("@/components/tools/pdf/PDFProtect.tsx"),
	{ ssr: false },
);
const PDFUnlock = dynamic(
	() => import("@/components/tools/pdf/PDFUnlock.tsx"),
	{ ssr: false },
);
const PDFMerger = dynamic(
	() => import("@/components/tools/pdf/PDFMerger.tsx"),
	{ ssr: false },
);
const PDFSplitter = dynamic(
	() => import("@/components/tools/pdf/PDFSplitter.tsx"),
	{ ssr: false },
);
const ImageColorPicker = dynamic(
	() => import("@/components/tools/image/ImageColorPicker.tsx"),
	{ ssr: false },
);
const WordToPDF = dynamic(
	() => import("@/components/tools/pdf/WordToPDF.tsx"),
	{ ssr: false },
);
const PDFToWord = dynamic(
	() => import("@/components/tools/pdf/PDFToWord.tsx"),
	{ ssr: false },
);
const PDFPageNumbers = dynamic(
	() => import("@/components/tools/pdf/PDFPageNumbers.tsx"),
	{ ssr: false },
);
const PDFWatermark = dynamic(
	() => import("@/components/tools/pdf/PDFWatermark.tsx"),
	{ ssr: false },
);
const PDFMetadataEditor = dynamic(
	() => import("@/components/tools/pdf/PDFMetadataEditor.tsx"),
	{ ssr: false },
);
const HTMLToPDF = dynamic(
	() => import("@/components/tools/pdf/HTMLToPDF.tsx"),
	{ ssr: false },
);
const PDFEditor = dynamic(
	() => import("@/components/tools/pdf/PDFEditor.tsx"),
	{ ssr: false },
);
const PDFCompressor = dynamic(
	() => import("@/components/tools/pdf/PDFCompressor.tsx"),
	{ ssr: false },
);
const ImageToBase64Tool = dynamic(
	() => import("@/components/tools/image/ImageToBase64Tool.tsx"),
	{ ssr: false },
);
const Base64ToImageTool = dynamic(
	() => import("@/components/tools/image/Base64ToImageTool.tsx"),
	{ ssr: false },
);

const JSON_FORMATTER_IDS = new Set(["json-editor", "json-viewer", "json-validator"]);

const CALC_IDS = new Set([
	"percentage-calculator",
	"gst-calculator",
	"discount-calculator",
	"margin-calculator",
	"loan-calculator",
	"age-calculator",
	"sales-tax-calculator",
	"average-calculator",
	"cpm-calculator",
	"adsense-calculator",
	"paypal-fee-calculator",
	"probability-calculator",
	"confidence-interval-calculator",
	"currency-converter",
]);

const MARKUP_IDS = new Set([
	"html-minifier",
	"html-beautifier",
	"css-minifier",
	"css-beautifier",
	"javascript-minifier",
	"javascript-beautifier",
	"javascript-obfuscator",
	"javascript-deobfuscator",
	"html-encoder",
	"html-decoder",
]);

const SERIAL_IDS = new Set([
	"json-to-csv-converter",
	"json-to-tsv-converter",
	"json-to-text-converter",
	"csv-to-json-converter",
	"tsv-to-json-converter",
	"xml-to-json-converter",
	"json-to-xml-converter",
]);

const IMAGE_RESIZER_IDS = new Set(["rotate-image", "flip-image", "image-cropper", "image-enlarger", "image-resizer"]);

function titleCaseId(id: string) {
	return id
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");
}

function BaseConvMount({ toolId }: { toolId: string }) {
	const k = BASE_CONVERTER_MAP[toolId] as BaseConverterKind | undefined;
	if (!k) return null;
	const t = titleCaseId(toolId.replace(/-converter$/, "").replace(/-/g, " "));
	return (
		<BaseConverter
			title={t}
			inputPlaceholder="Paste values here..."
			outputPlaceholder="Converted output"
			converterKind={k}
		/>
	);
}

function TextCompareMount() {
	const [a, setA] = useState("");
	const [b, setB] = useState("");
	const diff = useMemo(() => diffChars(a, b), [a, b]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Text compare</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Textarea className="min-h-[200px] font-mono text-sm" value={a} onChange={(e) => setA(e.target.value)} />
				<Textarea className="min-h-[200px] font-mono text-sm" value={b} onChange={(e) => setB(e.target.value)} />
				<div className="md:col-span-2 sm font-mono whitespace-pre-wrap">
					{diff.map((part, i) => (
						<span
							key={i}
							className={
								part.added ? "bg-emerald-500/25" : part.removed ? "bg-rose-500/25" : undefined
							}
						>
							{part.value}
						</span>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

function SimpleRepeater() {
	const [t, setT] = useState("Hello");
	const [n, setN] = useState("3");
	const out = useMemo(() => {
		const c = Math.max(0, Math.min(5000, Math.floor(Number(n) || 0)));
		return Array(c).fill(t).join("");
	}, [t, n]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Text repeater</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Textarea value={t} onChange={(e) => setT(e.target.value)} />
				<Input type="number" min={0} max={5000} value={n} onChange={(e) => setN(e.target.value)} />
				<Textarea readOnly className="min-h-[160px] font-mono text-sm bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function WordCounterMount() {
	const [t, setT] = useState("");
	const stats = useMemo(() => {
		const words = t.trim() ? t.trim().split(/\s+/).length : 0;
		const chars = t.length;
		const lines = t ? t.split(/\r?\n/).length : 0;
		return { words, chars, lines };
	}, [t]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Word counter</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Textarea className="min-h-[220px]" value={t} onChange={(e) => setT(e.target.value)} />
				<p className="text-sm text-muted-foreground">
					Words: <strong>{stats.words}</strong> · Characters: <strong>{stats.chars}</strong> · Lines:{" "}
					<strong>{stats.lines}</strong>
				</p>
			</CardContent>
		</Card>
	);
}

function RemoveBreaks() {
	const [t, setT] = useState("");
	const out = useMemo(() => t.replace(/\r?\n+/g, " ").replace(/\s+/g, " ").trim(), [t]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Remove line breaks</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Textarea className="min-h-[200px]" value={t} onChange={(e) => setT(e.target.value)} />
				<Textarea readOnly className="min-h-[120px] bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function CommaSeparatorMount() {
	const [t, setT] = useState("");
	const out = useMemo(() => t.split(/\r?\n/).join(", "), [t]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Lines to comma separated</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Textarea className="min-h-[200px]" value={t} onChange={(e) => setT(e.target.value)} />
				<Textarea readOnly className="min-h-[120px] bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function SlugMount() {
	const [t, setT] = useState("");
	const slug = useMemo(
		() =>
			t
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-")
				.replace(/^-+|-+$/g, ""),
		[t],
	);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Slug</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Textarea value={t} onChange={(e) => setT(e.target.value)} />
				<Input readOnly className="font-mono bg-muted/30" value={slug} />
			</CardContent>
		</Card>
	);
}

function TagsFromText({ prefix }: { prefix: string }) {
	const [t, setT] = useState("");
	const out = useMemo(() => {
		const words = t.toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
		const uniq = [...new Set(words)].slice(0, 60);
		return uniq.map((w) => `${prefix}${w}`).join(prefix === "#" ? " " : ", ");
	}, [t, prefix]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">{prefix === "#" ? "Hashtags" : "Comma tags"}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Textarea className="min-h-[180px]" value={t} onChange={(e) => setT(e.target.value)} />
				<Textarea readOnly className="min-h-[100px] bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function RomanMount({ toRoman }: { toRoman: boolean }) {
	const [v, setV] = useState(toRoman ? "2026" : "MMXXVI");
	const out = useMemo(() => {
		if (toRoman) {
			const n = Math.floor(Number(v));
			if (!Number.isFinite(n) || n <= 0 || n > 3999) return "";
			const sym: [number, string][] = [
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
			let x = n;
			let s = "";
			for (const [val, ch] of sym) {
				while (x >= val) {
					s += ch;
					x -= val;
				}
			}
			return s;
		}
		const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
		let total = 0;
		let prev = 0;
		for (const ch of v.trim().toUpperCase().split("").reverse()) {
			const n = map[ch] ?? 0;
			if (!n) return "";
			total += n < prev ? -n : n;
			prev = n;
		}
		return String(total);
	}, [v, toRoman]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">{toRoman ? "Number → Roman" : "Roman → Number"}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input value={v} onChange={(e) => setV(e.target.value)} />
				<Input readOnly className="font-mono bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function RgbHexMount({ mode }: { mode: "rgb2hex" | "hex2rgb" }) {
	const [v, setV] = useState(mode === "rgb2hex" ? "10 20 30" : "#0A141E");
	const out = useMemo(() => {
		if (mode === "rgb2hex") {
			const p = v.trim().split(/[\s,]+/).map(Number);
			if (p.length < 3 || p.some((n) => !Number.isFinite(n))) return "";
			const [r, g, b] = p.map((n) => Math.max(0, Math.min(255, Math.round(n))));
			return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
		}
		const m = v.trim().match(/^#?([0-9a-f]{6})$/i);
		if (!m) return "";
		const n = parseInt(m[1], 16);
		const r = (n >> 16) & 255;
		const g = (n >> 8) & 255;
		const b = n & 255;
		return `rgb(${r}, ${g}, ${b})`;
	}, [v, mode]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">{mode === "rgb2hex" ? "RGB → Hex" : "Hex → RGB"}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input value={v} onChange={(e) => setV(e.target.value)} />
				<Input readOnly className="font-mono bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function UuidMount() {
	const [ids, setIds] = useState("");
	const gen = () => {
		const rows = Array.from({ length: 5 }, () => crypto.randomUUID());
		setIds(rows.join("\n"));
		toast.success("Generated");
	};
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">UUID v4</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Button type="button" onClick={gen}>
					Generate batch
				</Button>
				<Textarea readOnly className="min-h-[140px] font-mono text-sm bg-muted/30" value={ids} />
			</CardContent>
		</Card>
	);
}

function UrlCodecMount({ mode }: { mode: "enc" | "dec" }) {
	const [t, setT] = useState("");
	const out = useMemo(() => {
		try {
			return mode === "enc" ? encodeURIComponent(t) : decodeURIComponent(t);
		} catch {
			return "";
		}
	}, [t, mode]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">{mode === "enc" ? "URL encode" : "URL decode"}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Textarea
					className="min-h-[160px] font-mono text-sm"
					value={t}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setT(e.target.value)}
				/>
				<Textarea readOnly className="min-h-[160px] font-mono text-sm bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function UrlParserMount() {
	const [u, setU] = useState("https://user:pass@example.com:8080/path?q=1#h");
	const parsed = useMemo(() => {
		try {
			const x = new URL(u);
			return JSON.stringify(
				{
					href: x.href,
					protocol: x.protocol,
					host: x.host,
					hostname: x.hostname,
					port: x.port,
					pathname: x.pathname,
					search: x.search,
					hash: x.hash,
					username: x.username,
					password: x.password ? "***" : "",
				},
				null,
				2,
			);
		} catch {
			return "Invalid URL";
		}
	}, [u]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">URL parser</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input
					className=""
					value={u}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setU(e.target.value)}
				/>
				<Textarea readOnly className="min-h-[220px] font-mono text-sm bg-muted/30" value={parsed} />
			</CardContent>
		</Card>
	);
}

function ScreenResCard() {
	const [dims, setDims] = useState({ sw: 0, sh: 0, vw: 0, vh: 0, pr: 1 });
	useEffect(() => {
		setDims({
			sw: window.screen.width,
			sh: window.screen.height,
			vw: window.innerWidth,
			vh: window.innerHeight,
			pr: window.devicePixelRatio,
		});
	}, []);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Screen</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2 text-sm">
				<p>
					Resolution:{" "}
					<strong>
						{dims.sw ? `${dims.sw}×${dims.sh}` : "—"}
					</strong>
				</p>
				<p>
					Viewport:{" "}
					<strong>
						{dims.vw ? `${dims.vw}×${dims.vh}` : "—"}
					</strong>
				</p>
				<p>
					Pixel ratio: <strong>{dims.sw ? dims.pr : "—"}</strong>
				</p>
			</CardContent>
		</Card>
	);
}

function UserAgentCard() {
	const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">User agent</CardTitle>
			</CardHeader>
			<CardContent className="">
				<Textarea readOnly className="min-h-[120px] font-mono text-xs" value={ua} />
			</CardContent>
		</Card>
	);
}

function BrowserGuessCard() {
	const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
	const isChrome = /Chrome\//.test(ua) && !/Edg\//.test(ua);
	const isFirefox = /Firefox\//.test(ua);
	const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
	const name = isChrome ? "Chromium-based" : isFirefox ? "Firefox" : isSafari ? "Safari" : "Unknown";
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Browser (heuristic)</CardTitle>
			</CardHeader>
			<CardContent className="text-sm space-y-2">
				<p>
					Likely family: <strong>{name}</strong>
				</p>
				<Textarea readOnly className="min-h-[100px] font-mono text-xs" value={ua} />
			</CardContent>
		</Card>
	);
}

function PublicIpCard() {
	const [ip, setIp] = useState("");
	const load = async () => {
		try {
			const r = await fetch("https://api.ipify.org?format=json");
			const d = (await r.json()) as { ip?: string };
			setIp(d.ip ?? "");
			toast.success("Loaded");
		} catch {
			toast.error("Could not load IP");
		}
	};
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Public IP</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Button type="button" onClick={load}>
					Fetch via ipify
				</Button>
				<Input readOnly value={ip} className="font-mono" />
			</CardContent>
		</Card>
	);
}

function DomainToIpMount() {
	const [domain, setDomain] = useState("example.com");
	const [out, setOut] = useState("");
	const run = async () => {
		try {
			const name = domain.replace(/^https?:\/\//, "").split("/")[0];
			const r = await fetch(
				`https://1.1.1.1/dns-query?name=${encodeURIComponent(name)}&type=A`,
				{ headers: { accept: "application/dns-json" } },
			);
			const j = (await r.json()) as { Answer?: { data?: string }[] };
			const ips = (j.Answer ?? []).map((a) => a.data).filter(Boolean);
			setOut(ips.length ? ips.join("\n") : "No A records (or blocked).");
			toast.success("Resolved");
		} catch {
			toast.error("Lookup failed");
		}
	};
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Domain → A records</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input value={domain} onChange={(e) => setDomain(e.target.value)} />
				<Button type="button" onClick={run}>
					Resolve (Cloudflare DoH)
				</Button>
				<Textarea readOnly className="min-h-[100px] font-mono text-sm bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function DnsLookupMount() {
	const [domain, setDomain] = useState("example.com");
	const [out, setOut] = useState("");
	const run = async (type: string) => {
		try {
			const name = domain.replace(/^https?:\/\//, "").split("/")[0];
			const r = await fetch(
				`https://1.1.1.1/dns-query?name=${encodeURIComponent(name)}&type=${type}`,
				{ headers: { accept: "application/dns-json" } },
			);
			const j = (await r.json()) as { Answer?: { type: number; data: string }[] };
			const lines = (j.Answer ?? []).map((a) => `${type} ${a.data}`);
			setOut(lines.join("\n") || "No answers.");
			toast.success("OK");
		} catch {
			toast.error("Lookup failed");
		}
	};
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">DNS lookup</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input value={domain} onChange={(e) => setDomain(e.target.value)} />
				<div className="flex flex-wrap gap-2">
					{["A", "AAAA", "MX", "TXT", "NS", "CNAME"].map((t) => (
						<Button key={t} type="button" size="sm" variant="secondary" onClick={() => run(t)}>
							{t}
						</Button>
					))}
				</div>
				<Textarea readOnly className="min-h-[180px] font-mono text-xs bg-muted/30" value={out} />
			</CardContent>
		</Card>
	);
}

function MetaTagDraft() {
	const [title, setTitle] = useState("My page title");
	const [desc, setDesc] = useState("Concise description for search results.");
	const snippet = useMemo(
		() =>
			`<title>${title.replace(/</g, "")}</title>\n<meta name="description" content="${desc.replace(/"/g, "&quot;")}" />`,
		[title, desc],
	);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Core meta tags</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input
					className=""
					value={title}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
				/>
				<Textarea
					className=""
					value={desc}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)}
				/>
				<Textarea readOnly className="min-h-[120px] font-mono text-xs bg-muted/30" value={snippet} />
			</CardContent>
		</Card>
	);
}

function OgDraft() {
	const [u, setU] = useState("https://30tools.com");
	const [t, setT] = useState("30tools");
	const [d, setD] = useState("Free utilities");
	const snippet = useMemo(
		() =>
			[
				`<meta property="og:url" content="${u}" />`,
				`<meta property="og:title" content="${t.replace(/"/g, "&quot;")}" />`,
				`<meta property="og:description" content="${d.replace(/"/g, "&quot;")}" />`,
				`<meta property="og:type" content="website" />`,
			].join("\n"),
		[u, t, d],
	);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Open Graph snippet</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input className="" value={u} onChange={(e: ChangeEvent<HTMLInputElement>) => setU(e.target.value)} />
				<Input className="" value={t} onChange={(e: ChangeEvent<HTMLInputElement>) => setT(e.target.value)} />
				<Textarea
					className=""
					value={d}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setD(e.target.value)}
				/>
				<Textarea readOnly className="min-h-[140px] font-mono text-xs bg-muted/30" value={snippet} />
			</CardContent>
		</Card>
	);
}

function TwitterCardDraft() {
	const [card, setCard] = useState("summary_large_image");
	const [t, setT] = useState("Title");
	const snippet = useMemo(
		() =>
			[
				`<meta name="twitter:card" content="${card}" />`,
				`<meta name="twitter:title" content="${t.replace(/"/g, "&quot;")}" />`,
			].join("\n"),
		[card, t],
	);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Twitter card snippet</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input value={card} onChange={(e) => setCard(e.target.value)} />
				<Input value={t} onChange={(e) => setT(e.target.value)} />
				<Textarea readOnly className="min-h-[100px] font-mono text-xs bg-muted/30" value={snippet} />
			</CardContent>
		</Card>
	);
}

function JsonLdFaqDraft() {
	const [q1, setQ1] = useState("What is this?");
	const [a1, setA1] = useState("A helpful answer.");
	const json = useMemo(
		() =>
			JSON.stringify(
				{
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: q1,
							acceptedAnswer: { "@type": "Answer", text: a1 },
						},
					],
				},
				null,
				2,
			),
		[q1, a1],
	);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">FAQ JSON-LD</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input value={q1} onChange={(e) => setQ1(e.target.value)} />
				<Textarea value={a1} onChange={(e) => setA1(e.target.value)} />
				<Textarea readOnly className="min-h-[200px] font-mono text-xs bg-muted/30" value={json} />
			</CardContent>
		</Card>
	);
}

function HtaccessDraft() {
	const [from, setFrom] = useState("/old-path");
	const [to, setTo] = useState("/new-path");
	const snippet = `RewriteEngine On\nRewriteRule ^${from.replace(/^\//, "")}/?$ ${to} [R=301,L]`;
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Apache redirect rule</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input value={from} onChange={(e) => setFrom(e.target.value)} />
				<Input value={to} onChange={(e) => setTo(e.target.value)} />
				<Textarea readOnly className="min-h-[120px] font-mono text-xs bg-muted/30" value={snippet} />
			</CardContent>
		</Card>
	);
}

function LegalDraft({ kind }: { kind: "privacy" | "terms" | "disclaimer" }) {
	const body =
		kind === "privacy"
			? "This template is not legal advice. Describe what data you collect, cookies, analytics, retention, and contact email."
			: kind === "terms"
				? "This template is not legal advice. Add jurisdiction, acceptable use, liability limits, and governing law."
				: "This template is not legal advice. Add scope of information, warranties, and professional advice disclaimer.";
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Draft outline</CardTitle>
			</CardHeader>
			<CardContent className="">
				<Textarea readOnly className="min-h-[200px] text-sm bg-muted/30" value={body} />
			</CardContent>
		</Card>
	);
}

function KeywordDensity() {
	const [text, setText] = useState("");
	const [word, setWord] = useState("");
	const pct = useMemo(() => {
		if (!text.trim() || !word.trim()) return "";
		const re = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
		const m = text.match(/\b[a-z0-9']+\b/gi) ?? [];
		const hits = (text.match(re) ?? []).length;
		if (!m.length) return "";
		return `${((hits / m.length) * 100).toFixed(2)}%`;
	}, [text, word]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Keyword density</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input
					className=""
					placeholder="Target word"
					value={word}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value)}
				/>
				<Textarea
					className="min-h-[200px]"
					value={text}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
				/>
				<p className="text-sm">
					Density (token-based): <strong>{pct || "—"}</strong>
				</p>
			</CardContent>
		</Card>
	);
}

function GenericNotice({ toolId }: { toolId: string }) {
	return (
		<Card className="border-dashed">
			<CardHeader className="">
				<CardTitle className="text-lg">{titleCaseId(toolId)}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3 text-sm text-muted-foreground">
				<p>
					Interactive workflow for this page is being expanded. You can still use breadcrumbs and related
					tools below, or request prioritization on GitHub.
				</p>
				<Button className="" variant="outline" asChild>
					<a href="https://github.com/sh20raj/30tools/issues" target="_blank" rel="noreferrer">
						Open GitHub issue
					</a>
				</Button>
			</CardContent>
		</Card>
	);
}

export default function RegisteredToolMount({ toolId }: { toolId: string }) {
	const preset = UNIT_TOOL_MAP[toolId as keyof typeof UNIT_TOOL_MAP];
	if (preset) return <UniversalUnitConverter preset={preset} />;

	if (toolId in BASE_CONVERTER_MAP) return <BaseConvMount toolId={toolId} />;

	const imgFmt = IMAGE_FORMAT_TOOL_MAP[toolId as keyof typeof IMAGE_FORMAT_TOOL_MAP];
	if (imgFmt) return <ImageConverterTool defaultOutputFormat={imgFmt} />;
	if (toolId === "image-converter") return <ImageConverterTool />;
	if (toolId === "image-compressor") return <ImageCompressorTool />;
	if (toolId === "favicon-generator") return <FaviconGeneratorTool />;
	if (toolId === "background-remover") return <BackgroundRemoverTool />;
	if (toolId === "exif-reader") return <ExifReaderTool />;
	if (toolId === "logo-generator") return <LogoGeneratorTool />;
	if (toolId === "photo-enhancer") return <PhotoEnhancerTool />;
	if (toolId === "pdf-editor") return <PDFEditorTool />;

	if (IMAGE_RESIZER_IDS.has(toolId)) return <ImageResizerTool />;

	if (JSON_FORMATTER_IDS.has(toolId)) return <JsonFormatterTool />;
	if (toolId === "json-minify") return <JSONMinifierTool />;
	if (toolId === "json-to-tsv-converter") return <JSONToTSVTool />;
	if (toolId === "json-to-json-schema") return <JSONToSchemaTool />;
	if (SERIAL_IDS.has(toolId)) return <BuiltInSerialization toolId={toolId} />;

	if (MARKUP_IDS.has(toolId)) return <BuiltInMarkup toolId={toolId} />;

	if (CALC_IDS.has(toolId)) return <BuiltInCalculators kind={toolId as CalcKind} />;

	if (toolId === "text-compare") return <TextCompareMount />;
	if (toolId === "text-repeater") return <SimpleRepeater />;
	if (toolId === "text-sorter") return <LineSorterTool />;
	if (toolId === "word-counter") return <WordCounterMount />;
	if (toolId === "remove-line-breaks") return <RemoveBreaks />;
	if (toolId === "comma-separator") return <CommaSeparatorMount />;
	if (toolId === "text-to-slug-converter") return <SlugMount />;
	if (toolId === "text-to-hashtags-converter") return <TagsFromText prefix="#" />;
	if (toolId === "text-to-tags-converter") return <TagsFromText prefix="" />;
	if (toolId === "base64-encode" || toolId === "base64-decode" || toolId === "base64-tool") return <Base64Tool />;
	if (toolId === "base64-to-image-converter") return <Base64ToImageTool />;
	if (toolId === "image-to-base64-converter") return <ImageToBase64Tool />;
	if (toolId === "md5-generator") return <HashGeneratorTool />;
	if (toolId === "qr-code-generator" || toolId === "qr-code-decoder") return <QrGeneratorTool />;
	if (toolId === "youtube-channel-id-extractor" || toolId === "youtube-channel-id-finder") return <YouTubeChannelIDFinderTool />;
	if (toolId === "word-to-number-converter") return <WordToNumberConverter />;
	if (toolId === "markdown-to-text") return <MarkdownToText />;
	if (toolId === "image-to-pdf") return <ImageToPDF />;
	if (toolId === "pdf-to-image") return <PDFToImage />;
	if (toolId === "pdf-protect") return <PDFProtect />;
	if (toolId === "pdf-unlocker") return <PDFUnlock />;
	if (toolId === "pdf-merger") return <PDFMerger />;
	if (toolId === "pdf-splitter") return <PDFSplitter />;
	if (toolId === "image-color-picker") return <ImageColorPicker />;
	if (toolId === "word-to-pdf") return <WordToPDF />;
	if (toolId === "pdf-to-word") return <PDFToWord />;
	if (toolId === "pdf-add-page-numbers") return <PDFPageNumbers />;
	if (toolId === "pdf-watermark") return <PDFWatermark />;
	if (toolId === "pdf-metadata-editor") return <PDFMetadataEditor />;
	if (toolId === "html-to-pdf") return <HTMLToPDF />;
	if (toolId === "pdf-editor") return <PDFEditor />;
	if (toolId === "pdf-size-reducer") return <PDFCompressor />;

	if (toolId.includes("downloader") || toolId.includes("extractor")) return <DownloaderEngine />;

	if (toolId === "number-to-roman-numerals") return <RomanMount toRoman={true} />;
	if (toolId === "roman-numerals-to-number") return <RomanMount toRoman={false} />;
	if (toolId === "rgb-to-hex-converter") return <RgbHexMount mode="rgb2hex" />;
	if (toolId === "hex-to-rgb-converter") return <RgbHexMount mode="hex2rgb" />;
	if (toolId === "random-uuid-generator") return <UuidMount />;
	if (toolId === "url-encode") return <UrlCodecMount mode="enc" />;
	if (toolId === "url-decode") return <UrlCodecMount mode="dec" />;
	if (toolId === "url-parser") return <UrlParserMount />;

	if (toolId === "what-is-my-screen-resolution") return <ScreenResCard />;
	if (toolId === "what-is-my-user-agent") return <UserAgentCard />;
	if (toolId === "what-is-my-browser") return <BrowserGuessCard />;
	if (toolId === "what-is-my-ip-address") return <PublicIpCard />;

	if (toolId === "keyword-density-checker") return <KeywordDensity />;

	const safeHttpIds = new Set([
		"redirect-checker",
		"http-status-code-checker",
		"get-http-headers",
		"page-size-checker",
		"server-status-checker",
		"hosting-checker",
	]);
	if (safeHttpIds.has(toolId)) return <BuiltInSafeHttp toolId={toolId} />;

	if (toolId === "domain-to-ip-converter") return <DomainToIpMount />;
	if (toolId === "dns-records-checker") return <DnsLookupMount />;

	if (toolId === "meta-tag-generator") return <MetaTagDraft />;
	if (toolId === "open-graph-generator") return <OgDraft />;
	if (toolId === "twitter-card-generator") return <TwitterCardDraft />;
	if (toolId === "faq-schema-generator") return <JsonLdFaqDraft />;
	if (toolId === "htaccess-redirect-generator") return <HtaccessDraft />;
	if (toolId === "privacy-policy-generator") return <LegalDraft kind="privacy" />;
	if (toolId === "terms-and-condition-generator") return <LegalDraft kind="terms" />;
	if (toolId === "disclaimer-generator") return <LegalDraft kind="disclaimer" />;

	return <GenericNotice toolId={toolId} />;
}
