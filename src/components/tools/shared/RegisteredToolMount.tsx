"use client";

import dynamic from "next/dynamic";
import { getToolComponent, TOOL_COMPONENTS } from "@/lib/tool-registry";
import {
    UNIT_TOOL_MAP,
    BASE_CONVERTER_MAP,
    IMAGE_FORMAT_TOOL_MAP
} from "@/components/tools/shared/tool-id-registry";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import BaseConverter, { type BaseConverterKind } from "@/components/tools/shared/BaseConverter";
import BuiltInCalculators, { type CalcKind } from "@/components/tools/built-ins/BuiltInCalculators";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";

import {
    TextCompareMount,
    SimpleRepeater,
    WordCounterMount,
    RemoveBreaks,
    CommaSeparatorMount,
    SlugMount,
    TagsFromText
} from "./ToolMiniComponents";

// Special case imports that are still needed here for logic or aren't in registry yet
const ImageConverterTool = dynamic(() => import("@/components/tools/image/ImageConverterTool.jsx"), { ssr: false });
const DownloaderEngine = dynamic(() => import("@/components/tools/downloaders/DownloaderEngine.jsx"), { ssr: false });
const YouTubeChannelIDFinderTool = dynamic(() => import("@/components/tools/youtube/YouTubeChannelIDFinderTool.jsx"), { ssr: false });

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

function GenericNotice({ toolId }: { toolId: string }) {
    return (
        <Card className="border-dashed">
            <CardHeader className="">
                <CardTitle className="text-lg">{titleCaseId(toolId)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                    Interactive workflow for this page is being expanded. You can still use breadcrumbs and related
                    tools below. 
                </p>
                <p className="font-medium text-foreground">
                    Want to request this tool or contribute?
                </p>
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild className="gap-2">
                        <a href="https://github.com/sh20raj/30tools" target="_blank" rel="noreferrer">
                            Create PR/Issue
                        </a>
                    </Button>
                    <Button variant="secondary" size="sm" asChild>
                        <a href="mailto:mail@30tools.com">
                            Email Request
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

const CALC_IDS = new Set([
    "percentage-calculator", "gst-calculator", "discount-calculator", "margin-calculator",
    "loan-calculator", "age-calculator", "sales-tax-calculator", "average-calculator",
    "cpm-calculator", "adsense-calculator", "paypal-fee-calculator", "probability-calculator",
    "confidence-interval-calculator", "currency-converter",
]);

const MARKUP_IDS = new Set([
    "html-minifier", "html-beautifier", "css-minifier", "css-beautifier",
    "javascript-minifier", "javascript-beautifier", "javascript-obfuscator", "javascript-deobfuscator",
    "html-encoder", "html-decoder",
]);

const SERIAL_IDS = new Set([
    "json-to-csv-converter", "json-to-tsv-converter", "json-to-text-converter",
    "csv-to-json-converter", "tsv-to-json-converter", "xml-to-json-converter", "json-to-xml-converter",
]);

const SAFE_HTTP_IDS = new Set([
    "redirect-checker", "http-status-code-checker", "get-http-headers", "page-size-checker",
    "server-status-checker", "hosting-checker", "whois-domain-lookup", "domain-age-checker",
    "wordpress-theme-detector", "google-cache-checker", "google-index-checker", "backlink-checker",
    "seo-audit-tool", "open-graph-checker", "website-ranking-checker", "sitemap-generator",
    "visual-sitemap", "facebook-id-finder", "indexnow-submitter",
]);

export default function RegisteredToolMount({ toolId }: { toolId: string }) {
    // 1. Check unit converters
    const preset = UNIT_TOOL_MAP[toolId as keyof typeof UNIT_TOOL_MAP];
    if (preset) return <UniversalUnitConverter preset={preset} />;

    // 2. Check base converters
    if (toolId in BASE_CONVERTER_MAP) return <BaseConvMount toolId={toolId} />;

    // 3. Check image format tools
    const imgFmt = IMAGE_FORMAT_TOOL_MAP[toolId as keyof typeof IMAGE_FORMAT_TOOL_MAP];
    if (imgFmt) return <ImageConverterTool defaultOutputFormat={imgFmt} />;

    // 4. Check special sets
    if (CALC_IDS.has(toolId)) return <BuiltInCalculators kind={toolId as CalcKind} />;
    if (MARKUP_IDS.has(toolId)) return <BuiltInMarkup toolId={toolId} />;
    if (SERIAL_IDS.has(toolId)) return <BuiltInSerialization toolId={toolId} />;
    if (SAFE_HTTP_IDS.has(toolId)) return <BuiltInSafeHttp toolId={toolId} />;

    // 5. Text tools (Mini components)
    if (toolId.startsWith("youtube-") && !TOOL_COMPONENTS[toolId]) {
        if (toolId.includes("downloader") || toolId.includes("extractor")) {
            return <DownloaderEngine apiEndpoint="/api/proxy/vidssave" />;
        }
        return <YouTubeChannelIDFinderTool toolId={toolId} />;
    }
    if (toolId === "text-compare") return <TextCompareMount />;
    if (toolId === "text-repeater") return <SimpleRepeater />;
    if (toolId === "word-counter") return <WordCounterMount />;
    if (toolId === "remove-line-breaks") return <RemoveBreaks />;
    if (toolId === "comma-separator") return <CommaSeparatorMount />;
    if (toolId === "text-to-slug-converter") return <SlugMount />;
    if (toolId === "text-to-hashtags-converter") return <TagsFromText prefix="#" />;
    if (toolId === "text-to-tags-converter") return <TagsFromText prefix="" />;

    // 6. Inline utility tools
    if (toolId === "number-to-roman-numerals") return <RomanMount toRoman={true} />;
    if (toolId === "roman-numerals-to-number") return <RomanMount toRoman={false} />;
    if (toolId === "rgb-to-hex-converter" || toolId === "color-converter") return <RgbHexMount mode="rgb2hex" />;
    if (toolId === "hex-to-rgb-converter") return <RgbHexMount mode="hex2rgb" />;
    if (toolId === "random-uuid-generator" || toolId === "credit-card-generator" || toolId === "credit-card-validator") return <UuidMount />;
    if (toolId === "url-encode") return <UrlCodecMount mode="enc" />;
    if (toolId === "url-decode") return <UrlCodecMount mode="dec" />;
    if (toolId === "url-parser" || toolId === "url-opener" || toolId === "url-rewriting-tool") return <UrlParserMount />;
    if (toolId === "what-is-my-screen-resolution" || toolId === "screen-resolution-simulator") return <ScreenResCard />;
    if (toolId === "what-is-my-user-agent") return <UserAgentCard />;
    if (toolId === "what-is-my-browser") return <BrowserGuessCard />;
    if (toolId === "what-is-my-ip-address") return <PublicIpCard />;
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
    if (toolId === "convert-srt-to-vtt" || toolId === "convert-vtt-to-srt") return <TextCompareMount />;
    if (toolId === "number-to-word-converter" || toolId === "word-to-number-converter") return <WordCounterMount />;
    if (toolId === "json-editor" || toolId === "json-viewer" || toolId === "json-validator") {
        const JsonFormatterTool = getToolComponent("json-formatter");
        if (JsonFormatterTool) return <JsonFormatterTool toolId={toolId} />;
    }
    if (toolId === "bulk-keyword-rank-checker") return <BuiltInSafeHttp toolId={toolId} />;

    // 7. Check main registry (tool-registry.tsx — covers 130+ tools)
    const Component = getToolComponent(toolId);
    if (Component) return <Component toolId={toolId} />;

    // Fallback
    return <GenericNotice toolId={toolId} />;
}

// ─── Inline Mini Components ─────────────────────────────────────────────
// These are small utilities that don't warrant separate files.

import { type ChangeEvent, useMemo, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function RomanMount({ toRoman }: { toRoman: boolean }) {
    const [val, setVal] = useState("");
    const romanMap: [number, string][] = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
    const toR = (n: number) => { let s=""; for(const [v,r] of romanMap){while(n>=v){s+=r;n-=v;}} return s; };
    const fromR = (s: string) => { let n=0; const u=s.toUpperCase(); const m: Record<string,number>={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}; for(let i=0;i<u.length;i++){const c=m[u[i]]||0;const nx=m[u[i+1]]||0;if(c<nx){n-=c;}else{n+=c;}} return n; };
    const result = toRoman ? toR(Number(val)||0) : String(fromR(val));
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input placeholder={toRoman ? "Enter a number..." : "Enter Roman numerals..."} value={val} onChange={(e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value)} />
            <div className="p-4 rounded-lg bg-muted/40 font-mono text-lg text-center">{result || "—"}</div>
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(result); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function RgbHexMount({ mode }: { mode: "rgb2hex" | "hex2rgb" }) {
    const [val, setVal] = useState(mode === "rgb2hex" ? "255, 100, 50" : "#FF6432");
    const result = useMemo(() => {
        if (mode === "rgb2hex") {
            const parts = val.split(",").map(s => parseInt(s.trim()));
            if (parts.length >= 3 && parts.every(n => !isNaN(n) && n >= 0 && n <= 255)) {
                return "#" + parts.slice(0, 3).map(n => n.toString(16).padStart(2, "0")).join("").toUpperCase();
            }
            return "Invalid";
        }
        const hex = val.replace("#", "");
        if (/^[0-9a-f]{6}$/i.test(hex)) {
            return `rgb(${parseInt(hex.slice(0,2),16)}, ${parseInt(hex.slice(2,4),16)}, ${parseInt(hex.slice(4,6),16)})`;
        }
        return "Invalid";
    }, [val, mode]);
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input placeholder={mode === "rgb2hex" ? "255, 100, 50" : "#FF6432"} value={val} onChange={(e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value)} />
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded border" style={{ backgroundColor: result.startsWith("Invalid") ? "#ccc" : (mode === "rgb2hex" ? result : val) }} />
                <span className="font-mono text-lg">{result}</span>
            </div>
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(result); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function UuidMount() {
    const gen = () => crypto.randomUUID();
    const [uuid, setUuid] = useState("");
    useEffect(() => { setUuid(gen()); }, []);
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input readOnly value={uuid} className="font-mono text-sm" />
            <div className="flex gap-2">
                <Button onClick={() => setUuid(gen())}>Generate New</Button>
                <Button variant="outline" onClick={() => { navigator.clipboard.writeText(uuid); toast.success("Copied!"); }}>Copy</Button>
            </div>
        </CardContent></Card>
    );
}

function UrlCodecMount({ mode }: { mode: "enc" | "dec" }) {
    const [val, setVal] = useState("");
    const result = mode === "enc" ? encodeURIComponent(val) : (() => { try { return decodeURIComponent(val); } catch { return "Invalid"; } })();
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Textarea placeholder={mode === "enc" ? "Text to encode..." : "URL-encoded text..."} value={val} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setVal(e.target.value)} className="min-h-[100px]" />
            <Textarea readOnly value={result} className="min-h-[100px] bg-muted/30 font-mono text-sm" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(result); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function UrlParserMount() {
    const [val, setVal] = useState("https://example.com/path?query=value#hash");
    const parsed = useMemo(() => { try { const u = new URL(val); return { protocol: u.protocol, host: u.host, pathname: u.pathname, search: u.search, hash: u.hash, origin: u.origin }; } catch { return null; } }, [val]);
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input placeholder="Enter a URL..." value={val} onChange={(e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value)} />
            {parsed ? (
                <div className="space-y-1 text-sm font-mono">
                    {Object.entries(parsed).map(([k, v]) => <div key={k} className="flex gap-2"><span className="text-muted-foreground w-24">{k}:</span><span>{v || "—"}</span></div>)}
                </div>
            ) : <p className="text-sm text-destructive">Invalid URL</p>}
        </CardContent></Card>
    );
}

function ScreenResCard() {
    const [res, setRes] = useState({ w: 0, h: 0, dpr: 1 });
    useEffect(() => { setRes({ w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio }); }, []);
    return (
        <Card><CardContent className="pt-6 space-y-2 text-center">
            <div className="text-4xl font-bold">{res.w} × {res.h}</div>
            <p className="text-muted-foreground">Device Pixel Ratio: {res.dpr}x</p>
            <p className="text-muted-foreground">Effective: {Math.round(res.w * res.dpr)} × {Math.round(res.h * res.dpr)}</p>
        </CardContent></Card>
    );
}

function UserAgentCard() {
    const [ua, setUa] = useState("");
    useEffect(() => { setUa(navigator.userAgent); }, []);
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Textarea readOnly value={ua} className="font-mono text-xs" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(ua); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function BrowserGuessCard() {
    const [info, setInfo] = useState({ browser: "", os: "", lang: "" });
    useEffect(() => {
        const ua = navigator.userAgent;
        let browser = "Unknown";
        if (ua.includes("Firefox")) browser = "Firefox";
        else if (ua.includes("Edg")) browser = "Edge";
        else if (ua.includes("Chrome")) browser = "Chrome";
        else if (ua.includes("Safari")) browser = "Safari";
        let os = "Unknown";
        if (ua.includes("Windows")) os = "Windows";
        else if (ua.includes("Mac")) os = "macOS";
        else if (ua.includes("Linux")) os = "Linux";
        else if (ua.includes("Android")) os = "Android";
        else if (ua.includes("iPhone")) os = "iOS";
        setInfo({ browser, os, lang: navigator.language });
    }, []);
    return (
        <Card><CardContent className="pt-6 space-y-2">
            <div className="grid gap-2 text-sm">{Object.entries(info).map(([k, v]) => <div key={k} className="flex justify-between"><span className="text-muted-foreground capitalize">{k}:</span><span className="font-medium">{v}</span></div>)}</div>
        </CardContent></Card>
    );
}

function PublicIpCard() {
    const [ip, setIp] = useState("Loading...");
    useEffect(() => { fetch("https://api.ipify.org?format=json").then(r => r.json()).then(d => setIp(d.ip)).catch(() => setIp("Could not detect")); }, []);
    return (
        <Card><CardContent className="pt-6 text-center space-y-3">
            <div className="text-3xl font-mono font-bold">{ip}</div>
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(ip); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function DomainToIpMount() {
    const [domain, setDomain] = useState("");
    const [result, setResult] = useState("");
    const lookup = async () => { try { const r = await fetch(`https://dns.google/resolve?name=${domain}&type=A`); const d = await r.json(); setResult(d.Answer?.map((a: any) => a.data).join(", ") || "No A records"); } catch { setResult("Lookup failed"); } };
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <div className="flex gap-2"><Input placeholder="example.com" value={domain} onChange={(e: ChangeEvent<HTMLInputElement>) => setDomain(e.target.value)} /><Button onClick={lookup}>Lookup</Button></div>
            {result && <div className="p-3 rounded bg-muted/40 font-mono text-sm">{result}</div>}
        </CardContent></Card>
    );
}

function DnsLookupMount() {
    const [domain, setDomain] = useState("");
    const [records, setRecords] = useState<any[]>([]);
    const lookup = async () => {
        const types = ["A", "AAAA", "MX", "NS", "TXT", "CNAME"];
        const results: any[] = [];
        for (const type of types) {
            try { const r = await fetch(`https://dns.google/resolve?name=${domain}&type=${type}`); const d = await r.json(); if (d.Answer) results.push(...d.Answer.map((a: any) => ({ type, name: a.name, data: a.data, ttl: a.TTL }))); } catch {}
        }
        setRecords(results);
    };
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <div className="flex gap-2"><Input placeholder="example.com" value={domain} onChange={(e: ChangeEvent<HTMLInputElement>) => setDomain(e.target.value)} /><Button onClick={lookup}>Lookup</Button></div>
            {records.length > 0 && <div className="overflow-x-auto"><table className="w-full text-xs font-mono"><thead><tr className="border-b">{["Type","Name","Data","TTL"].map(h => <th key={h} className="p-2 text-left">{h}</th>)}</tr></thead><tbody>{records.map((r,i) => <tr key={i} className="border-b border-border/50"><td className="p-2">{r.type}</td><td className="p-2">{r.name}</td><td className="p-2 break-all">{r.data}</td><td className="p-2">{r.ttl}</td></tr>)}</tbody></table></div>}
        </CardContent></Card>
    );
}

function MetaTagDraft() {
    const [title, setTitle] = useState(""); const [desc, setDesc] = useState("");
    const code = `<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>${title}</title>\n<meta name="description" content="${desc}">`;
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input placeholder="Page title" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            <Textarea placeholder="Meta description" value={desc} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)} />
            <Textarea readOnly value={code} className="min-h-[120px] font-mono text-xs bg-muted/30" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(code); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function OgDraft() {
    const [title, setTitle] = useState(""); const [desc, setDesc] = useState(""); const [url, setUrl] = useState("");
    const code = `<meta property="og:title" content="${title}">\n<meta property="og:description" content="${desc}">\n<meta property="og:url" content="${url}">\n<meta property="og:type" content="website">`;
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input placeholder="OG Title" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            <Textarea placeholder="OG Description" value={desc} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)} />
            <Input placeholder="URL" value={url} onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} />
            <Textarea readOnly value={code} className="min-h-[100px] font-mono text-xs bg-muted/30" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(code); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function TwitterCardDraft() {
    const [title, setTitle] = useState(""); const [desc, setDesc] = useState("");
    const code = `<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="${title}">\n<meta name="twitter:description" content="${desc}">`;
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input placeholder="Card title" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            <Textarea placeholder="Card description" value={desc} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)} />
            <Textarea readOnly value={code} className="min-h-[80px] font-mono text-xs bg-muted/30" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(code); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function JsonLdFaqDraft() {
    const [faqs, setFaqs] = useState([{ q: "", a: "" }]);
    const addFaq = () => setFaqs([...faqs, { q: "", a: "" }]);
    const schema = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.filter(f => f.q && f.a).map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }, null, 2);
    return (
        <Card><CardContent className="pt-6 space-y-3">
            {faqs.map((faq, i) => (
                <div key={i} className="space-y-2 p-3 border rounded">
                    <Input placeholder="Question" value={faq.q} onChange={(e: ChangeEvent<HTMLInputElement>) => { const n = [...faqs]; n[i] = { ...n[i], q: e.target.value }; setFaqs(n); }} />
                    <Textarea placeholder="Answer" value={faq.a} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { const n = [...faqs]; n[i] = { ...n[i], a: e.target.value }; setFaqs(n); }} />
                </div>
            ))}
            <Button variant="outline" size="sm" onClick={addFaq}>+ Add FAQ</Button>
            <Textarea readOnly value={schema} className="min-h-[200px] font-mono text-xs bg-muted/30" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(schema); toast.success("Copied!"); }}>Copy JSON-LD</Button>
        </CardContent></Card>
    );
}

function HtaccessDraft() {
    const [from, setFrom] = useState(""); const [to, setTo] = useState("");
    const code = `RewriteEngine On\nRewriteRule ^${from}$ ${to} [R=301,L]`;
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input placeholder="Old path (e.g. /old-page)" value={from} onChange={(e: ChangeEvent<HTMLInputElement>) => setFrom(e.target.value)} />
            <Input placeholder="New URL (e.g. /new-page)" value={to} onChange={(e: ChangeEvent<HTMLInputElement>) => setTo(e.target.value)} />
            <Textarea readOnly value={code} className="min-h-[80px] font-mono text-xs bg-muted/30" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(code); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

function LegalDraft({ kind }: { kind: "privacy" | "terms" | "disclaimer" }) {
    const [site, setSite] = useState(""); const [email, setEmail] = useState("");
    const templates: Record<string, string> = {
        privacy: `Privacy Policy for ${site || "[Your Site]"}\n\nLast updated: ${new Date().toLocaleDateString()}\n\nWe respect your privacy. This policy describes how we collect, use, and protect your information.\n\nContact: ${email || "[email]"}`,
        terms: `Terms and Conditions for ${site || "[Your Site]"}\n\nLast updated: ${new Date().toLocaleDateString()}\n\nBy accessing this website, you agree to these terms.\n\nContact: ${email || "[email]"}`,
        disclaimer: `Disclaimer for ${site || "[Your Site]"}\n\nLast updated: ${new Date().toLocaleDateString()}\n\nThe information provided is for general purposes only.\n\nContact: ${email || "[email]"}`,
    };
    return (
        <Card><CardContent className="pt-6 space-y-3">
            <Input placeholder="Website name" value={site} onChange={(e: ChangeEvent<HTMLInputElement>) => setSite(e.target.value)} />
            <Input placeholder="Contact email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <Textarea readOnly value={templates[kind]} className="min-h-[200px] text-sm bg-muted/30" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(templates[kind]); toast.success("Copied!"); }}>Copy</Button>
        </CardContent></Card>
    );
}

// Re-export mini components for dynamic import references
export { TextCompareMount, SimpleRepeater, WordCounterMount, RemoveBreaks, CommaSeparatorMount, SlugMount, TagsFromText };

