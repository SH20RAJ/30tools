#!/usr/bin/env node
/**
 * Generates individual SEO-friendly custom components for all generic/shared tools.
 * 
 * Categories handled:
 *   1. calculators/  — 14 calculator components (from BuiltInCalculators)
 *   2. converters/   — 24 base converter components (from BaseConverter)  
 *   3. units/        — 25 unit converter components (from UniversalUnitConverter)
 *   4. data-serial/  — 7 serialization converters (from BuiltInSerialization)
 *   5. code-markup/  — 10 markup/minify tools (from BuiltInMarkup)
 *   6. network/      — 18 HTTP/SEO checkers (from BuiltInSafeHttp)
 */

const fs = require("fs");
const path = require("path");

const COMP_ROOT = path.join(__dirname, "..", "src", "components", "tools");

// =============================================================
// 1. CATEGORY: Calculators (14 tools)
// =============================================================

const CALCULATORS_DIR = path.join(COMP_ROOT, "calculators");
const CALC_TOOLS = [
  { id: "adsense-calculator", name: "AdSense Calculator", title: "AdSense Revenue Estimator", desc: "Estimate your AdSense earnings based on RPM and pageviews." },
  { id: "age-calculator", name: "Age Calculator", title: "Age from Birth Date", desc: "Calculate your exact age from your date of birth." },
  { id: "average-calculator", name: "Average Calculator", title: "Mean Average Calculator", desc: "Quickly calculate the mean average of any set of numbers." },
  { id: "confidence-interval-calculator", name: "Confidence Interval Calculator", title: "Confidence Interval (Normal Approx.)", desc: "Compute the 95% style confidence interval from sample statistics." },
  { id: "cpm-calculator", name: "CPM Calculator", title: "Cost Per Mille (CPM) Calculator", desc: "Calculate CPM from campaign cost and impressions." },
  { id: "currency-converter", name: "Currency Converter", title: "Live Currency Converter", desc: "Convert between currencies using live exchange rates via Frankfurter API." },
  { id: "discount-calculator", name: "Discount Calculator", title: "Discount & Savings Calculator", desc: "Find out how much you save and the final price after a discount." },
  { id: "gst-calculator", name: "GST Calculator", title: "Goods & Services Tax Calculator", desc: "Calculate GST-inclusive total from exclusive base amount." },
  { id: "loan-calculator", name: "Loan Calculator", title: "Monthly Loan Payment Calculator", desc: "Estimate your monthly mortgage or loan payment." },
  { id: "margin-calculator", name: "Margin Calculator", title: "Gross Margin Calculator", desc: "Calculate gross margin percentage from cost and selling price." },
  { id: "paypal-fee-calculator", name: "PayPal Fee Calculator", title: "PayPal Fee (Simple) Calculator", desc: "Calculate net amount after PayPal percentage and fixed fees." },
  { id: "percentage-calculator", name: "Percentage Calculator", title: "Percentage Calculator", desc: "Find what percentage one number is of another." },
  { id: "probability-calculator", name: "Probability Calculator", title: "Binomial Probability Calculator", desc: "Calculate binomial probability mass P(X = k)." },
  { id: "sales-tax-calculator", name: "Sales Tax Calculator", title: "Sales Tax Calculator", desc: "Compute sales tax and gross amount from net price." },
];

// =============================================================
// 2. CATEGORY: Base Converters (24 tools)
// =============================================================

const CONVERTERS_DIR = path.join(COMP_ROOT, "converters");
const CONV_TOOLS = [
  { id: "ascii-to-binary-converter", kind: "ascii-to-binary", name: "ASCII to Binary Converter", from: "ASCII text", to: "binary" },
  { id: "ascii-to-text-converter", kind: "ascii-to-text", name: "ASCII to Text Converter", from: "ASCII codes", to: "plain text" },
  { id: "binary-to-ascii-converter", kind: "binary-to-ascii", name: "Binary to ASCII Converter", from: "binary", to: "ASCII text" },
  { id: "binary-to-decimal-converter", kind: "binary-to-decimal", name: "Binary to Decimal Converter", from: "binary", to: "decimal" },
  { id: "binary-to-hex-converter", kind: "binary-to-hex", name: "Binary to Hex Converter", from: "binary", to: "hexadecimal" },
  { id: "binary-to-octal-converter", kind: "binary-to-octal", name: "Binary to Octal Converter", from: "binary", to: "octal" },
  { id: "binary-to-text-converter", kind: "binary-to-text", name: "Binary to Text Converter", from: "binary", to: "plain text" },
  { id: "decimal-to-binary-converter", kind: "decimal-to-binary", name: "Decimal to Binary Converter", from: "decimal", to: "binary" },
  { id: "decimal-to-hex-converter", kind: "decimal-to-hex", name: "Decimal to Hex Converter", from: "decimal", to: "hexadecimal" },
  { id: "decimal-to-octal-converter", kind: "decimal-to-octal", name: "Decimal to Octal Converter", from: "decimal", to: "octal" },
  { id: "decimal-to-text-converter", kind: "decimal-to-text", name: "Decimal to Text Converter", from: "decimal codes", to: "plain text" },
  { id: "hex-to-binary-converter", kind: "hex-to-binary", name: "Hex to Binary Converter", from: "hexadecimal", to: "binary" },
  { id: "hex-to-decimal-converter", kind: "hex-to-decimal", name: "Hex to Decimal Converter", from: "hexadecimal", to: "decimal" },
  { id: "hex-to-octal-converter", kind: "hex-to-octal", name: "Hex to Octal Converter", from: "hexadecimal", to: "octal" },
  { id: "hex-to-text-converter", kind: "hex-to-text", name: "Hex to Text Converter", from: "hexadecimal", to: "plain text" },
  { id: "octal-to-binary-converter", kind: "octal-to-binary", name: "Octal to Binary Converter", from: "octal", to: "binary" },
  { id: "octal-to-decimal-converter", kind: "octal-to-decimal", name: "Octal to Decimal Converter", from: "octal", to: "decimal" },
  { id: "octal-to-hex-converter", kind: "octal-to-hex", name: "Octal to Hex Converter", from: "octal", to: "hexadecimal" },
  { id: "octal-to-text-converter", kind: "octal-to-text", name: "Octal to Text Converter", from: "octal codes", to: "plain text" },
  { id: "text-to-ascii-converter", kind: "text-to-ascii", name: "Text to ASCII Converter", from: "plain text", to: "ASCII codes" },
  { id: "text-to-binary-converter", kind: "text-to-binary", name: "Text to Binary Converter", from: "plain text", to: "binary" },
  { id: "text-to-decimal-converter", kind: "text-to-decimal", name: "Text to Decimal Converter", from: "plain text", to: "decimal codes" },
  { id: "text-to-hex-converter", kind: "text-to-hex", name: "Text to Hex Converter", from: "plain text", to: "hexadecimal" },
  { id: "text-to-octal-converter", kind: "text-to-octal", name: "Text to Octal Converter", from: "plain text", to: "octal codes" },
];

// =============================================================
// 3. CATEGORY: Units (25 tools)
// =============================================================

const UNITS_DIR = path.join(COMP_ROOT, "units");
const UNIT_TOOLS = [
  { id: "angle-converter", preset: "angle", name: "Angle Converter", from: "degrees", to: "radians" },
  { id: "apparent-power-converter", preset: "apparentPower", name: "Apparent Power Converter", from: "VA", to: "kVA" },
  { id: "area-converter", preset: "area", name: "Area Converter", from: "square meters", to: "square feet" },
  { id: "charge-converter", preset: "charge", name: "Electric Charge Converter", from: "coulombs", to: "mAh" },
  { id: "current-converter", preset: "current", name: "Current Converter", from: "amperes", to: "milliamperes" },
  { id: "digital-converter", preset: "digital", name: "Digital Storage Converter", from: "bytes", to: "megabytes" },
  { id: "each-converter", preset: "dimensionless", name: "Each / Ratio Converter", from: "ratio", to: "percent" },
  { id: "energy-converter", preset: "energy", name: "Energy Converter", from: "joules", to: "kilowatt-hours" },
  { id: "frequency-converter", preset: "frequency", name: "Frequency Converter", from: "hertz", to: "megahertz" },
  { id: "illuminance-converter", preset: "illuminance", name: "Illuminance Converter", from: "lux", to: "foot-candles" },
  { id: "length-converter", preset: "length", name: "Length Converter", from: "meters", to: "feet" },
  { id: "pace-converter", preset: "pace", name: "Pace Converter", from: "min/km", to: "min/mile" },
  { id: "parts-per-converter", preset: "dimensionless", name: "Parts Per Converter", from: "ppm", to: "ppb" },
  { id: "power-converter", preset: "power", name: "Power Converter", from: "watts", to: "horsepower" },
  { id: "pressure-converter", preset: "pressure", name: "Pressure Converter", from: "pascals", to: "PSI" },
  { id: "reactive-energy-converter", preset: "reactivePower", name: "Reactive Energy Converter", from: "var", to: "kVAR" },
  { id: "reactive-power-converter", preset: "reactivePower", name: "Reactive Power Converter", from: "var", to: "kVAR" },
  { id: "speed-converter", preset: "speed", name: "Speed Converter", from: "km/h", to: "mph" },
  { id: "temperature-converter", preset: "temperature", name: "Temperature Converter", from: "celsius", to: "fahrenheit" },
  { id: "time-converter", preset: "time", name: "Time Converter", from: "seconds", to: "minutes" },
  { id: "torque-converter", preset: "torque", name: "Torque Converter", from: "newton-meters", to: "pound-feet" },
  { id: "voltage-converter", preset: "voltage", name: "Voltage Converter", from: "volts", to: "millivolts" },
  { id: "volume-converter", preset: "volume", name: "Volume Converter", from: "liters", to: "gallons" },
  { id: "volumetric-flow-rate-converter", preset: "flowVolume", name: "Flow Rate Converter", from: "m³/s", to: "L/min" },
  { id: "weight-converter", preset: "mass", name: "Weight Converter", from: "kilograms", to: "pounds" },
];

// =============================================================
// 4. CATEGORY: Serialization (7 tools)
// =============================================================

const SERIAL_DIR = path.join(COMP_ROOT, "data-serial");
const SERIAL_TOOLS = [
  { id: "csv-to-json-converter", name: "CSV to JSON Converter", from: "CSV", to: "JSON", kind: "csv-to-json" },
  { id: "json-to-csv-converter", name: "JSON to CSV Converter", from: "JSON", to: "CSV", kind: "json-to-csv" },
  { id: "json-to-text-converter", name: "JSON to Text Converter", from: "JSON", to: "formatted text", kind: "json-to-text" },
  { id: "json-to-tsv-converter", name: "JSON to TSV Converter", from: "JSON", to: "TSV", kind: "json-to-tsv" },
  { id: "json-to-xml-converter", name: "JSON to XML Converter", from: "JSON", to: "XML", kind: "json-to-xml" },
  { id: "tsv-to-json-converter", name: "TSV to JSON Converter", from: "TSV", to: "JSON", kind: "tsv-to-json" },
  { id: "xml-to-json-converter", name: "XML to JSON Converter", from: "XML", to: "JSON", kind: "xml-to-json" },
];

// =============================================================
// 5. CATEGORY: Code Markup (10 tools)
// =============================================================

const CODE_DIR = path.join(COMP_ROOT, "code-markup");
const CODE_TOOLS = [
  { id: "css-beautifier", name: "CSS Beautifier", op: "css-beauty", label: "Format CSS", title: "CSS Formatter / Beautifier" },
  { id: "css-minifier", name: "CSS Minifier", op: "css-min", label: "Minify CSS", title: "CSS Minifier" },
  { id: "html-beautifier", name: "HTML Beautifier", op: "html-beauty", label: "Format HTML", title: "HTML Formatter / Beautifier" },
  { id: "html-decoder", name: "HTML Decoder", op: "dec", label: "Decode HTML", title: "HTML Decoder" },
  { id: "html-encoder", name: "HTML Encoder", op: "enc", label: "Encode HTML", title: "HTML Encoder" },
  { id: "html-minifier", name: "HTML Minifier", op: "html-min", label: "Minify HTML", title: "HTML Minifier" },
  { id: "javascript-beautifier", name: "JavaScript Beautifier", op: "js-beauty", label: "Format JS", title: "JavaScript Formatter" },
  { id: "javascript-deobfuscator", name: "JS Deobfuscator", op: "js-de", label: "Expand Lines", title: "JavaScript Deobfuscator" },
  { id: "javascript-minifier", name: "JavaScript Minifier", op: "js-min", label: "Minify JS", title: "JavaScript Minifier" },
  { id: "javascript-obfuscator", name: "JS Obfuscator", op: "js-ob", label: "Obfuscate JS", title: "JavaScript Obfuscator" },
];

// =============================================================
// 6. CATEGORY: Network / Safe HTTP (18 tools)
// =============================================================

const NETWORK_DIR = path.join(COMP_ROOT, "network");
const NET_TOOLS = [
  { id: "backlink-checker", name: "Backlink Checker", title: "Backlink Checker", desc: "Preview a page and inspect for backlink-related metadata." },
  { id: "bulk-keyword-rank-checker", name: "Bulk Keyword Rank Checker", title: "Bulk Keyword Rank Checker", desc: "Fetch snippets for SEO rank insight." },
  { id: "domain-age-checker", name: "Domain Age Checker", title: "Domain Age Checker", desc: "Estimate domain age via WHOIS-like HTTP inspection." },
  { id: "facebook-id-finder", name: "Facebook ID Finder", title: "Facebook Page ID Finder", desc: "Find Facebook page numerical IDs from URL." },
  { id: "get-http-headers", name: "Get HTTP Headers", title: "Fetch HTTP Headers", desc: "Retrieve HTTP headers and HTML head snippet from any URL." },
  { id: "google-cache-checker", name: "Google Cache Checker", title: "Google Cache Checker", desc: "Check if a URL is cached by Google." },
  { id: "google-index-checker", name: "Google Index Checker", title: "Google Index Checker", desc: "Check whether a URL is indexed in Google search results." },
  { id: "hosting-checker", name: "Hosting Checker", title: "Website Hosting Checker", desc: "Identify where a website is hosted." },
  { id: "http-status-code-checker", name: "HTTP Status Code Checker", title: "HTTP Status Code Checker", desc: "Check the HTTP status code a URL returns." },
  { id: "indexnow", name: "IndexNow", title: "IndexNow URL Submission", desc: "Submit URLs to search engines via the IndexNow protocol." },
  { id: "open-graph-checker", name: "Open Graph Checker", title: "Open Graph Tag Checker", desc: "Inspect Open Graph meta tags on any webpage." },
  { id: "page-size-checker", name: "Page Size Checker", title: "Page Size Checker", desc: "Estimate the size of a webpage." },
  { id: "redirect-checker", name: "Redirect Checker", title: "Redirect Chain Checker", desc: "Trace the full redirect chain of any URL." },
  { id: "seo-audit-tool", name: "SEO Audit Tool", title: "Quick SEO Audit Tool", desc: "Run a basic SEO audit by inspecting page metadata." },
  { id: "server-status-checker", name: "Server Status Checker", title: "Server Status Checker", desc: "Check if a remote server is reachable." },
  { id: "sitemap-generator", name: "Sitemap Generator", title: "Sitemap Generator", desc: "Preview and generate a basic sitemap structure." },
  { id: "whois-domain-lookup", name: "WHOIS Domain Lookup", title: "WHOIS Lookup", desc: "Perform a WHOIS-style domain lookup." },
  { id: "wordpress-theme-detector", name: "WordPress Theme Detector", title: "WordPress Theme Detector", desc: "Detect WordPress theme from a site's front-end clues." },
];

// =============================================================
// Component templates
// =============================================================

function calculatorTemplate(tool) {
  return `"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Field({ id, label, value, onChange, type = "text" }: { id: string; label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
    </div>
  );
}

export default function ${toPascal(tool.id)}() {
  return <${calcInnerComponent(tool.id)} />;
}

${getCalcLogic(tool.id)}
`;
}

function toPascal(slug) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

function getCalcLogic(toolId) {
  switch (toolId) {
    case "percentage-calculator":
      return `function PctCalcInner() {
  const [part, setPart] = useState("");
  const [whole, setWhole] = useState("");
  const out = useMemo(() => {
    const p = Number(part);
    const w = Number(whole);
    if (!Number.isFinite(p) || !Number.isFinite(w) || w === 0) return "";
    return \`\${((p / w) * 100).toFixed(4)}%\`;
  }, [part, whole]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Percentage Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="p" label="Part" value={part} onChange={setPart} /><Field id="w" label="Whole" value={whole} onChange={setWhole} /><div className="md:col-span-2 space-y-1"><Label>Result</Label><Input readOnly className="font-mono bg-muted/40" value={out} /></div></CardContent></Card>; }`;
    case "gst-calculator":
      return `function GstCalcInner() {
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState("18");
  const { base, tax, total } = useMemo(() => {
    const a = Number(amount); const r = Number(rate) / 100;
    if (!Number.isFinite(a) || !Number.isFinite(r)) return { base: "", tax: "", total: "" };
    const t = a * r;
    return { base: a.toFixed(2), tax: t.toFixed(2), total: (a + t).toFixed(2) };
  }, [amount, rate]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />GST Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="ga" label="Exclusive base amount" value={amount} onChange={setAmount} /><Field id="gr" label="GST rate (%)" value={rate} onChange={setRate} /><Input readOnly className="bg-muted/40" value={\`Base: \${base}\`} /><Input readOnly className="bg-muted/40" value={\`Tax: \${tax}\`} /><div className="md:col-span-2"><Input readOnly className="bg-muted/40" value={\`Total: \${total}\`} /></div></CardContent></Card>; }`;
    case "discount-calculator":
      return `function DiscountCalcInner() {
  const [price, setPrice] = useState("100");
  const [off, setOff] = useState("20");
  const { pay, save } = useMemo(() => {
    const p = Number(price); const d = Number(off);
    if (!Number.isFinite(p) || !Number.isFinite(d)) return { pay: "", save: "" };
    const s = (p * d) / 100;
    return { pay: (p - s).toFixed(2), save: s.toFixed(2) };
  }, [price, off]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Discount Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="dp" label="Original price" value={price} onChange={setPrice} /><Field id="dd" label="Discount %" value={off} onChange={setOff} /><Field id="ds" label="You save" value={save} onChange={()=>{}} /><Field id="dy" label="You pay" value={pay} onChange={()=>{}} /></CardContent></Card>; }`;
    case "margin-calculator":
      return `function MarginCalcInner() {
  const [cost, setCost] = useState("40");
  const [sell, setSell] = useState("100");
  const margin = useMemo(() => {
    const c = Number(cost); const s = Number(sell);
    if (!Number.isFinite(c) || !Number.isFinite(s) || s === 0) return "";
    return \`\${(((s - c) / s) * 100).toFixed(2)}%\`;
  }, [cost, sell]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Gross Margin Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="mc" label="Cost" value={cost} onChange={setCost} /><Field id="ms" label="Sell price" value={sell} onChange={setSell} /><div className="md:col-span-2"><Field id="mm" label="Gross margin" value={margin} onChange={()=>{}} /></div></CardContent></Card>; }`;
    case "loan-calculator":
      return `function LoanCalcInner() {
  const [p, setP] = useState("200000");
  const [apr, setApr] = useState("6.5");
  const [years, setYears] = useState("30");
  const pay = useMemo(() => {
    const principal = Number(p); const r = Number(apr) / 100 / 12; const n = Number(years) * 12;
    if (!Number.isFinite(principal) || !Number.isFinite(r) || !Number.isFinite(n) || n <= 0) return "";
    if (r === 0) return (principal / n).toFixed(2);
    const pow = (1 + r) ** n;
    const m = (principal * r * pow) / (pow - 1);
    return Number.isFinite(m) ? m.toFixed(2) : "";
  }, [p, apr, years]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Loan Payment Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-3"><Field id="lp" label="Principal" value={p} onChange={setP} /><Field id="lr" label="APR %" value={apr} onChange={setApr} /><Field id="ly" label="Years" value={years} onChange={setYears} /><div className="md:col-span-3"><Field id="lm" label="Monthly payment" value={pay} onChange={()=>{}} /></div></CardContent></Card>; }`;
    case "age-calculator":
      return `function AgeCalcInner() {
  const [dob, setDob] = useState("2000-01-01");
  const age = useMemo(() => {
    const t = Date.parse(dob);
    if (Number.isNaN(t)) return "";
    const diff = Date.now() - t;
    if (diff < 0) return "";
    return \`\${Math.floor(diff / (365.25 * 24 * 3600 * 1000))} years (approx.)\`;
  }, [dob]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Age Calculator</CardTitle></CardHeader><CardContent className="space-y-4"><Field id="ad" label="Date of birth" value={dob} onChange={setDob} type="date" /><Field id="aa" label="Approximate age" value={age} onChange={()=>{}} /></CardContent></Card>; }`;
    case "sales-tax-calculator":
      return `function SalesTaxCalcInner() {
  const [net, setNet] = useState("100");
  const [rate, setRate] = useState("8");
  const { tax, gross } = useMemo(() => {
    const n = Number(net); const r = Number(rate) / 100;
    if (!Number.isFinite(n) || !Number.isFinite(r)) return { tax: "", gross: "" };
    const t = n * r;
    return { tax: t.toFixed(2), gross: (n + t).toFixed(2) };
  }, [net, rate]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Sales Tax Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="sn" label="Net amount" value={net} onChange={setNet} /><Field id="sr" label="Tax rate %" value={rate} onChange={setRate} /><Field id="st" label="Tax" value={tax} onChange={()=>{}} /><Field id="sg" label="Gross" value={gross} onChange={()=>{}} /></CardContent></Card>; }`;
    case "average-calculator":
      return `function AverageCalcInner() {
  const [txt, setTxt] = useState("1, 2, 3, 4");
  const avg = useMemo(() => {
    const nums = txt.split(/[\\s,]+/).map(Number).filter(n => Number.isFinite(n));
    if (!nums.length) return "";
    return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(6);
  }, [txt]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Average Calculator</CardTitle></CardHeader><CardContent className="space-y-3"><Field id="avn" label="Numbers (comma/space separated)" value={txt} onChange={setTxt} /><Field id="avr" label="Mean" value={avg} onChange={()=>{}} /></CardContent></Card>; }`;
    case "cpm-calculator":
      return `function CpmCalcInner() {
  const [imp, setImp] = useState("100000");
  const [cost, setCost] = useState("500");
  const cpm = useMemo(() => {
    const i = Number(imp); const c = Number(cost);
    if (!Number.isFinite(i) || i <= 0 || !Number.isFinite(c)) return "";
    return ((c / i) * 1000).toFixed(4);
  }, [imp, cost]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />CPM Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="ci" label="Impressions" value={imp} onChange={setImp} /><Field id="cc" label="Campaign cost" value={cost} onChange={setCost} /><div className="md:col-span-2"><Field id="co" label="CPM" value={cpm} onChange={()=>{}} /></div></CardContent></Card>; }`;
    case "adsense-calculator":
      return `function AdsenseCalcInner() {
  const [rpm, setRpm] = useState("4");
  const [pv, setPv] = useState("50000");
  const earn = useMemo(() => {
    const r = Number(rpm); const p = Number(pv);
    if (!Number.isFinite(r) || !Number.isFinite(p)) return "";
    return ((r * p) / 1000).toFixed(2);
  }, [rpm, pv]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />AdSense Revenue Estimator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="ar" label="RPM (USD)" value={rpm} onChange={setRpm} /><Field id="ap" label="Pageviews" value={pv} onChange={setPv} /><div className="md:col-span-2"><Field id="ae" label="Estimated earnings (USD)" value={earn} onChange={()=>{}} /></div></CardContent></Card>; }`;
    case "paypal-fee-calculator":
      return `function PaypalCalcInner() {
  const [amt, setAmt] = useState("100");
  const [feePct, setFeePct] = useState("2.9");
  const [fixed, setFixed] = useState("0.30");
  const net = useMemo(() => {
    const a = Number(amt); const f = Number(feePct) / 100; const fx = Number(fixed);
    if (!Number.isFinite(a) || !Number.isFinite(f) || !Number.isFinite(fx)) return "";
    return (a - a * f - fx).toFixed(2);
  }, [amt, feePct, fixed]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />PayPal Fee Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-3"><Field id="pa" label="Gross received" value={amt} onChange={setAmt} /><Field id="pp" label="Percent fee" value={feePct} onChange={setFeePct} /><Field id="pf" label="Fixed fee" value={fixed} onChange={setFixed} /><div className="md:col-span-3"><Field id="pn" label="Net (approx.)" value={net} onChange={()=>{}} /></div></CardContent></Card>; }`;
    case "probability-calculator":
      return `function ProbCalcInner() {
  const [p, setP] = useState("0.5");
  const [n, setN] = useState("10");
  const [k, setK] = useState("5");
  const pmf = useMemo(() => {
    const prob = Number(p); const trials = Math.round(Number(n)); const kk = Math.round(Number(k));
    if (!Number.isFinite(prob) || trials < 0 || kk < 0 || kk > trials) return "";
    function binom(ni, ki) { if (ki < 0 || ki > ni) return 0; let c = 1; for (let i = 0; i < ki; i++) c = (c * (ni - i)) / (i + 1); return c; }
    const b = binom(trials, kk);
    const val = b * prob ** kk * (1 - prob) ** (trials - kk);
    return Number.isFinite(val) ? val.toExponential(4) : "";
  }, [p, n, k]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Binomial Probability Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-3"><Field id="bp" label="p (success)" value={p} onChange={setP} /><Field id="bn" label="n trials" value={n} onChange={setN} /><Field id="bk" label="k successes" value={k} onChange={setK} /><div className="md:col-span-3"><Field id="br" label="Probability mass" value={pmf} onChange={()=>{}} /></div></CardContent></Card>; }`;
    case "confidence-interval-calculator":
      return `function CiCalcInner() {
  const [mean, setMean] = useState("50");
  const [sd, setSd] = useState("5");
  const [n, setN] = useState("30");
  const [z, setZ] = useState("1.96");
  const { lo, hi } = useMemo(() => {
    const m = Number(mean); const s = Number(sd); const nn = Number(n); const zz = Number(z);
    if (!Number.isFinite(m) || !Number.isFinite(s) || !Number.isFinite(nn) || nn <= 1 || !Number.isFinite(zz)) return { lo: "", hi: "" };
    const se = s / Math.sqrt(nn);
    return { lo: (m - zz * se).toFixed(4), hi: (m + zz * se).toFixed(4) };
  }, [mean, sd, n, z]);
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Confidence Interval Calculator</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><Field id="cm" label="Sample mean" value={mean} onChange={setMean} /><Field id="cs" label="Sample SD" value={sd} onChange={setSd} /><Field id="cn" label="Sample size" value={n} onChange={setN} /><Field id="cz" label="z" value={z} onChange={setZ} /><Field id="cl" label="Lower" value={lo} onChange={()=>{}} /><Field id="ch" label="Upper" value={hi} onChange={()=>{}} /></CardContent></Card>; }`;
    case "currency-converter":
      return `import { toast } from "sonner";
function CurrencyInner() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rates, setRates] = useState(null);
  const [out, setOut] = useState("");
  const load = async () => {
    try {
      const res = await fetch(\`https://api.frankfurter.app/latest?from=\${encodeURIComponent(from)}\`);
      if (!res.ok) throw new Error("rate fetch failed");
      const data = await res.json();
      setRates(data.rates);
      const r = data.rates[to];
      const a = Number(amount);
      if (!Number.isFinite(a) || r === undefined) { setOut(""); return; }
      setOut((a * r).toFixed(4));
      toast.success("Rates updated");
    } catch { toast.error("Could not load exchange rates"); }
  };
  return <Card className="border-border/60 shadow-sm"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calculator className="h-5 w-5" />Currency Converter</CardTitle></CardHeader><CardContent className="space-y-4"><div className="grid gap-4 md:grid-cols-3"><Field id="ca" label="Amount" value={amount} onChange={setAmount} /><Field id="cf" label="From (ISO)" value={from} onChange={setFrom} /><Field id="ct" label="To (ISO)" value={to} onChange={setTo} /></div><Button type="button" onClick={load}>Convert</Button><Field id="cr" label="Result" value={out} onChange={()=>{}} /><p className="text-xs text-muted-foreground">Live rates via Frankfurter (ECB).</p></CardContent></Card>; }`;
    default:
      return "";
  }
}

function calcInnerComponent(toolId) {
  const map = {
    "percentage-calculator": "PctCalcInner",
    "gst-calculator": "GstCalcInner",
    "discount-calculator": "DiscountCalcInner",
    "margin-calculator": "MarginCalcInner",
    "loan-calculator": "LoanCalcInner",
    "age-calculator": "AgeCalcInner",
    "sales-tax-calculator": "SalesTaxCalcInner",
    "average-calculator": "AverageCalcInner",
    "cpm-calculator": "CpmCalcInner",
    "adsense-calculator": "AdsenseCalcInner",
    "paypal-fee-calculator": "PaypalCalcInner",
    "probability-calculator": "ProbCalcInner",
    "confidence-interval-calculator": "CiCalcInner",
    "currency-converter": "CurrencyInner",
  };
  return map[toolId] || "null";
}

// Base converter component
function converterTemplate(tool) {
  return `"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Copy, Trash2, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function splitTokens(input) {
  return input.trim().split(/[\\s,]+/);
}

function hexByteTokens(input) {
  const compact = input.replace(/\\s+/g, "");
  if (!compact) return [];
  return compact.includes(" ") || compact.includes(",")
    ? splitTokens(input).filter(Boolean)
    : compact.match(/.{1,2}/g) || [];
}

export default function ${toPascal(tool.id)}() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const convertNow = useCallback(() => {
    if (!input.trim()) { setOutput(""); return; }
    try {
      const kind = "${tool.kind}";
      let out = "";
      switch (kind) {
        case "binary-to-text": case "binary-to-ascii":
          out = splitTokens(input).map(bin => { const n = parseInt(bin, 2); return Number.isNaN(n) ? "" : String.fromCharCode(n); }).join(""); break;
        case "binary-to-decimal":
          out = splitTokens(input).map(bin => { const n = parseInt(bin, 2); return Number.isNaN(n) ? "" : n.toString(10); }).join(" "); break;
        case "binary-to-hex":
          out = splitTokens(input).map(bin => { const n = parseInt(bin, 2); return Number.isNaN(n) ? "" : n.toString(16).toUpperCase(); }).join(" "); break;
        case "binary-to-octal":
          out = splitTokens(input).map(bin => { const n = parseInt(bin, 2); return Number.isNaN(n) ? "" : n.toString(8); }).join(" "); break;
        case "decimal-to-text": case "ascii-to-text": case "text-to-ascii":
          out = splitTokens(input).map(dec => { const n = parseInt(dec, 10); return Number.isNaN(n) ? "" : String.fromCharCode(n); }).join(""); break;
        case "decimal-to-hex":
          out = splitTokens(input).map(dec => { const n = parseInt(dec, 10); return Number.isNaN(n) ? "" : n.toString(16).toUpperCase(); }).join(" "); break;
        case "decimal-to-binary":
          out = splitTokens(input).map(dec => { const n = parseInt(dec, 10); return Number.isNaN(n) ? "" : n.toString(2); }).join(" "); break;
        case "decimal-to-octal":
          out = splitTokens(input).map(dec => { const n = parseInt(dec, 10); return Number.isNaN(n) ? "" : n.toString(8); }).join(" "); break;
        case "ascii-to-binary": case "text-to-binary":
          out = input.split("").map(char => { const b = char.charCodeAt(0).toString(2); return "00000000".slice(b.length) + b; }).join(" "); break;
        case "text-to-hex":
          out = Array.from(input).map(char => char.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")).join(" "); break;
        case "text-to-octal":
          out = Array.from(input).map(char => char.charCodeAt(0).toString(8).padStart(3, "0")).join(" "); break;
        case "text-to-decimal":
          out = Array.from(input).map(char => String(char.charCodeAt(0))).join(" "); break;
        case "hex-to-text":
          out = hexByteTokens(input).map(h => { const n = parseInt(h, 16); return Number.isNaN(n) ? "" : String.fromCharCode(n & 0xff); }).join(""); break;
        case "hex-to-binary":
          out = hexByteTokens(input).map(h => { const n = parseInt(h, 16); return Number.isNaN(n) ? "" : n.toString(2).padStart(8, "0"); }).join(" "); break;
        case "hex-to-decimal":
          out = hexByteTokens(input).map(h => { const n = parseInt(h, 16); return Number.isNaN(n) ? "" : String(n); }).join(" "); break;
        case "hex-to-octal":
          out = hexByteTokens(input).map(h => { const n = parseInt(h, 16); return Number.isNaN(n) ? "" : n.toString(8); }).join(" "); break;
        case "octal-to-text":
          out = splitTokens(input).map(o => { const n = parseInt(o, 8); return Number.isNaN(n) ? "" : String.fromCharCode(n & 0xff); }).join(""); break;
        case "octal-to-binary":
          out = splitTokens(input).map(o => { const n = parseInt(o, 8); return Number.isNaN(n) ? "" : n.toString(2); }).join(" "); break;
        case "octal-to-decimal":
          out = splitTokens(input).map(o => { const n = parseInt(o, 8); return Number.isNaN(n) ? "" : String(n); }).join(" "); break;
        case "octal-to-hex":
          out = splitTokens(input).map(o => { const n = parseInt(o, 8); return Number.isNaN(n) ? "" : n.toString(16).toUpperCase(); }).join(" "); break;
        default: out = input;
      }
      setOutput(out);
    } catch { toast.error("Conversion error"); }
  }, [input]);

  useEffect(() => { convertNow(); }, [input, convertNow]);

  const handleCopy = () => { if (!output) return; navigator.clipboard.writeText(output); setIsCopied(true); toast.success("Copied"); setTimeout(() => setIsCopied(false), 2000); };
  const handleClear = () => { setInput(""); setOutput(""); };
  const handleDownload = () => { if (!output) return; const blob = new Blob([output], { type: "text/plain" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "converted.txt"; a.click(); URL.revokeObjectURL(url); };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold tracking-tight uppercase opacity-60">Input (${tool.from})</label>
            <Button variant="ghost" size="sm" onClick={handleClear} disabled={!input} className="h-8 px-2 text-xs"><Trash2 className="w-3.5 h-3.5 mr-1" />Clear</Button>
          </div>
          <Textarea placeholder="Enter ${tool.from} here..." value={input} onChange={e => setInput(e.target.value)} className="min-h-[300px] font-mono text-sm resize-none bg-background/50" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold tracking-tight uppercase opacity-60">Output (${tool.to})</label>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleCopy} disabled={!output} className="h-8 px-2 text-xs">{isCopied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}Copy</Button>
              <Button variant="ghost" size="sm" onClick={handleDownload} disabled={!output} className="h-8 px-2 text-xs"><Download className="w-3.5 h-3.5 mr-1" />Download</Button>
            </div>
          </div>
          <Textarea placeholder="Result will appear here..." value={output} readOnly className="min-h-[300px] font-mono text-sm resize-none bg-muted/30" />
        </div>
      </div>
    </div>
  );
}
`;
}

// Unit converter component
function unitTemplate(tool) {
  return `"use client";

import { useMemo, useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type UnitDef = { id: string; label: string; toBase: (v: number) => number; fromBase: (v: number) => number };
function linear(f: number) { return { toBase: (v: number) => v * f, fromBase: (v: number) => v / f }; }

function buildUnits() {
  switch ("${tool.preset}") {
    case "length": return [
      { id: "nm", label: "Nanometer", ...linear(1e-9) }, { id: "mm", label: "Millimeter", ...linear(1e-3) },
      { id: "cm", label: "Centimeter", ...linear(0.01) }, { id: "m", label: "Meter", ...linear(1) },
      { id: "km", label: "Kilometer", ...linear(1000) }, { id: "in", label: "Inch", ...linear(0.0254) },
      { id: "ft", label: "Foot", ...linear(0.3048) }, { id: "yd", label: "Yard", ...linear(0.9144) },
      { id: "mi", label: "Mile", ...linear(1609.344) },
    ];
    case "mass": return [
      { id: "mg", label: "Milligram", ...linear(1e-6) }, { id: "g", label: "Gram", ...linear(0.001) },
      { id: "kg", label: "Kilogram", ...linear(1) }, { id: "oz", label: "Ounce", ...linear(0.028349523125) },
      { id: "lb", label: "Pound", ...linear(0.45359237) }, { id: "st", label: "Stone", ...linear(6.35029318) },
    ];
    case "temperature": return [
      { id: "C", label: "Celsius", toBase: (v) => v + 273.15, fromBase: (v) => v - 273.15 },
      { id: "F", label: "Fahrenheit", toBase: (v) => ((v - 32) * 5) / 9 + 273.15, fromBase: (v) => ((v - 273.15) * 9) / 5 + 32 },
      { id: "K", label: "Kelvin", ...linear(1) },
    ];
    case "area": return [
      { id: "mm2", label: "Square mm", ...linear(1e-6) }, { id: "cm2", label: "Square cm", ...linear(1e-4) },
      { id: "m2", label: "Square m", ...linear(1) }, { id: "km2", label: "Square km", ...linear(1e6) },
      { id: "ft2", label: "Square ft", ...linear(0.09290304) }, { id: "ac", label: "Acre", ...linear(4046.8564224) },
      { id: "ha", label: "Hectare", ...linear(10000) },
    ];
    case "volume": return [
      { id: "ml", label: "Milliliter", ...linear(1e-6) }, { id: "l", label: "Liter", ...linear(0.001) },
      { id: "m3", label: "Cubic m", ...linear(1) }, { id: "gal_us", label: "US gal", ...linear(0.003785411784) },
      { id: "ft3", label: "Cubic ft", ...linear(0.028316846592) }, { id: "cup_us", label: "US cup", ...linear(0.0002365882365) },
    ];
    case "speed": return [
      { id: "mps", label: "m/s", ...linear(1) }, { id: "kmh", label: "km/h", ...linear(1 / 3.6) },
      { id: "mph", label: "mph", ...linear(0.44704) }, { id: "kn", label: "Knot", ...linear(0.514444) },
    ];
    case "time": return [
      { id: "ns", label: "Nanosecond", ...linear(1e-9) }, { id: "us", label: "Microsecond", ...linear(1e-6) },
      { id: "ms", label: "Millisecond", ...linear(0.001) }, { id: "s", label: "Second", ...linear(1) },
      { id: "min", label: "Minute", ...linear(60) }, { id: "h", label: "Hour", ...linear(3600) },
      { id: "d", label: "Day", ...linear(86400) }, { id: "wk", label: "Week", ...linear(604800) },
      { id: "yr", label: "Year", ...linear(31536000) },
    ];
    case "angle": return [
      { id: "deg", label: "Degree", toBase: (v) => (v * Math.PI) / 180, fromBase: (v) => (v * 180) / Math.PI },
      { id: "rad", label: "Radian", ...linear(1) },
      { id: "grad", label: "Gradian", toBase: (v) => (v * Math.PI) / 200, fromBase: (v) => (v * 200) / Math.PI },
    ];
    case "pressure": return [
      { id: "Pa", label: "Pascal", ...linear(1) }, { id: "kPa", label: "Kilopascal", ...linear(1000) },
      { id: "bar", label: "Bar", ...linear(100000) }, { id: "psi", label: "PSI", ...linear(6894.757293168) },
      { id: "atm", label: "Atmosphere", ...linear(101325) }, { id: "mmHg", label: "mmHg", ...linear(133.322387415) },
    ];
    case "energy": return [
      { id: "J", label: "Joule", ...linear(1) }, { id: "kJ", label: "Kilojoule", ...linear(1000) },
      { id: "cal", label: "Calorie", ...linear(4.184) }, { id: "kcal", label: "Kilocalorie", ...linear(4184) },
      { id: "kWh", label: "kWh", ...linear(3.6e6) }, { id: "BTU", label: "BTU", ...linear(1055.056) },
    ];
    case "power": case "reactivePower": case "apparentPower": return [
      { id: "W", label: "${tool.preset === "reactivePower" ? "var" : tool.preset === "apparentPower" ? "VA" : "Watt"}", ...linear(1) },
      { id: "kW", label: "Kilowatt-scale", ...linear(1000) }, { id: "hp", label: "HP", ...linear(745.69987158227022) },
    ];
    case "frequency": return [
      { id: "Hz", label: "Hertz", ...linear(1) }, { id: "kHz", label: "Kilohertz", ...linear(1000) },
      { id: "MHz", label: "Megahertz", ...linear(1e6) }, { id: "rpm", label: "RPM", ...linear(1 / 60) },
    ];
    case "digital": return [
      { id: "b", label: "Bit", ...linear(0.125) }, { id: "B", label: "Byte", ...linear(1) },
      { id: "KB", label: "KB", ...linear(1024) }, { id: "MB", label: "MB", ...linear(1024 ** 2) },
      { id: "GB", label: "GB", ...linear(1024 ** 3) },
    ];
    case "torque": return [
      { id: "Nm", label: "Newton meter", ...linear(1) }, { id: "lbfft", label: "Pound-foot", ...linear(1.3558179483314004) },
    ];
    case "current": return [
      { id: "A", label: "Ampere", ...linear(1) }, { id: "mA", label: "Milliampere", ...linear(0.001) },
    ];
    case "voltage": return [
      { id: "V", label: "Volt", ...linear(1) }, { id: "mV", label: "Millivolt", ...linear(0.001) },
      { id: "kV", label: "Kilovolt", ...linear(1000) },
    ];
    case "charge": return [
      { id: "C", label: "Coulomb", ...linear(1) }, { id: "mAh", label: "mAh (at 3.7V)", ...linear(3.7 * 3.6) },
    ];
    case "illuminance": return [
      { id: "lux", label: "Lux", ...linear(1) }, { id: "fc", label: "Foot-candle", ...linear(10.76391041671) },
    ];
    case "flowVolume": return [
      { id: "m3s", label: "m³/s", ...linear(1) }, { id: "Lmin", label: "L/min", ...linear(1 / 60000) },
      { id: "gpm", label: "US gal/min", ...linear(6.30901964e-5) },
    ];
    case "pace": return [
      { id: "spm", label: "s/m", toBase: (v) => v, fromBase: (v) => v },
      { id: "mpkm", label: "min/km", toBase: (v) => (v * 60) / 1000, fromBase: (v) => (v * 1000) / 60 },
      { id: "mpmi", label: "min/mi", toBase: (v) => (v * 60) / 1609.344, fromBase: (v) => (v * 1609.344) / 60 },
    ];
    case "dimensionless": return [
      { id: "ratio", label: "Ratio", ...linear(1) }, { id: "pct", label: "Percent", ...linear(0.01) },
      { id: "ppm", label: "ppm", ...linear(1e-6) }, { id: "ppb", label: "ppb", ...linear(1e-9) },
    ];
    default: return [{ id: "x", label: "Unit", ...linear(1) }];
  }
}

export default function ${toPascal(tool.id)}() {
  const units = useMemo(() => buildUnits(), []);
  const [fromId, setFromId] = useState(units[0]?.id ?? "");
  const [toId, setToId] = useState(units[1]?.id ?? units[0]?.id ?? "");
  const [input, setInput] = useState("1");
  const from = units.find((u) => u.id === fromId) ?? units[0];
  const to = units.find((u) => u.id === toId) ?? units[0];
  const output = useMemo(() => {
    const raw = Number.parseFloat(String(input).replace(/,/g, ""));
    if (Number.isNaN(raw) || !from || !to) return "";
    const base = from.toBase(raw);
    const v = to.fromBase(base);
    if (!Number.isFinite(v)) return "";
    return String(Number(v.toPrecision(8)));
  }, [input, from, to]);

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg"><ArrowRightLeft className="h-5 w-5 text-primary" />${tool.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="from-u">From</Label>
            <Select value={fromId} onValueChange={setFromId}>
              <SelectTrigger id="from-u"><SelectValue /></SelectTrigger>
              <SelectContent>{units.map((u) => (<SelectItem key={u.id} value={u.id}>{u.label}</SelectItem>))}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to-u">To</Label>
            <Select value={toId} onValueChange={setToId}>
              <SelectTrigger id="to-u"><SelectValue /></SelectTrigger>
              <SelectContent>{units.map((u) => (<SelectItem key={"t-"+u.id} value={u.id}>{u.label}</SelectItem>))}</SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="val-in">Value</Label>
            <Input id="val-in" inputMode="decimal" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="val-out">Result</Label>
            <Input id="val-out" readOnly className="bg-muted/40 font-mono" value={output} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
`;
}

// Serialization converter component
function serialTemplate(tool) {
  return `"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ${toPascal(tool.id)}() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const run = () => {
    try {
      let out = "";
      switch ("${tool.kind}") {
        case "json-to-csv": {
          const parsed = JSON.parse(input);
          const rows = Array.isArray(parsed) ? parsed : [parsed];
          if (!rows.length || typeof rows[0] !== "object" || rows[0] === null) throw new Error("JSON must be an object or array of objects");
          const keys = Object.keys(rows[0]);
          const esc = (v) => { const s = v === null || v === undefined ? "" : typeof v === "object" ? JSON.stringify(v) : String(v); return /[",\\n]/.test(s) ? \`"\${s.replace(/"/g, '""')}"\` : s; };
          out = [keys.join(","), ...rows.map((row) => keys.map((k) => esc(row[k])).join(","))].join("\\n");
          break;
        }
        case "json-to-tsv": {
          const p = JSON.parse(input);
          const r = Array.isArray(p) ? p : [p];
          if (!r.length || typeof r[0] !== "object" || r[0] === null) throw new Error("JSON must be an object or array of objects");
          const k = Object.keys(r[0]);
          out = [k.join("\\t"), ...r.map((row) => k.map((key) => String(row[key] ?? "")).join("\\t"))].join("\\n");
          break;
        }
        case "json-to-text":
          out = JSON.stringify(JSON.parse(input), null, 2);
          break;
        case "csv-to-json": {
          const lines = input.trim().split(/\\r?\\n/);
          if (!lines.length) { out = "[]"; break; }
          const headers = lines[0].split(",").map((h) => h.trim());
          const arr = lines.slice(1).map((line) => { const cells = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); const o = {}; headers.forEach((h, i) => { o[h] = (cells[i] ?? "").replace(/^"|"$/g, ""); }); return o; });
          out = JSON.stringify(arr, null, 2);
          break;
        }
        case "tsv-to-json": {
          const l = input.trim().split(/\\r?\\n/);
          if (!l.length) { out = "[]"; break; }
          const h = l[0].split("\\t");
          const a = l.slice(1).map((line) => { const c = line.split("\\t"); const o = {}; h.forEach((hh, i) => { o[hh] = c[i] ?? ""; }); return o; });
          out = JSON.stringify(a, null, 2);
          break;
        }
        case "xml-to-json": {
          const doc = new DOMParser().parseFromString(input, "application/xml");
          const err = doc.querySelector("parsererror");
          if (err) throw new Error("Invalid XML");
          const nodeToObj = (el) => { const kids = Array.from(el.children); if (!kids.length) return el.textContent ?? ""; const o = {}; for (const c of kids) { const n = c.nodeName; const v = nodeToObj(c); o[n] = o[n] !== undefined ? (Array.isArray(o[n]) ? [...o[n], v] : [o[n], v]) : v; } return o; };
          const root = doc.documentElement;
          out = JSON.stringify({ [root.nodeName]: nodeToObj(root) }, null, 2);
          break;
        }
        case "json-to-xml": {
          const o = JSON.parse(input);
          const walk = (tag, val, depth) => { const pad = "  ".repeat(depth); if (val === null || typeof val !== "object") return pad + "<" + tag + ">" + String(val) + "</" + tag + ">\\n"; if (Array.isArray(val)) return val.map((v) => walk(tag, v, depth)).join(""); return pad + "<" + tag + ">\\n" + Object.entries(val).map(([k, v]) => walk(k, v, depth + 1)).join("") + pad + "</" + tag + ">\\n"; };
          const [[k, v]] = Object.entries(o);
          out = '<?xml version="1.0" encoding="UTF-8"?>\\n' + walk(k, v, 0);
          break;
        }
        default: out = "";
      }
      setOutput(out);
      toast.success("Converted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Conversion failed");
      setOutput("");
    }
  };

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">${tool.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea className="min-h-[220px] font-mono text-sm" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste ${tool.from} here..." />
        <Button type="button" onClick={run}>Convert to ${tool.to}</Button>
        <Textarea className="min-h-[220px] font-mono text-sm bg-muted/30" readOnly value={output} placeholder="${tool.to} output" />
      </CardContent>
    </Card>
  );
}
`;
}

// Code markup component
function codeTemplate(tool) {
  return `"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ${toPascal(tool.id)}() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const run = () => {
    try {
      let out = input;
      const mode = "${tool.op}";
      switch (mode) {
        case "html-min": case "css-min": case "js-min":
          out = input.replace(/\\/\\*[\\s\\S]*?\\*\\//g, "").replace(/\\/\\/.*$/gm, "").replace(/\\s+/g, " ").trim();
          break;
        case "html-beauty":
          out = input.replace(/>\\s+</g, ">\\n<").replace(/(<[^/][^>]*>)/g, "\\n$1");
          break;
        case "css-beauty":
          out = input.replace(/\\{/g, " {\\n  ").replace(/;/g, ";\\n  ").replace(/\\}/g, "\\n}\\n");
          break;
        case "js-beauty":
          out = input.replace(/;/g, ";\\n").replace(/\\{/g, " {\\n").replace(/\\}/g, "\\n}\\n");
          break;
        case "js-ob":
          out = input.replace(/\\/\\*[\\s\\S]*?\\*\\//g, "").replace(/\\s+/g, " ").trim().split("").map(c => \`\\\\u\${"0000".slice(0, 4 - c.charCodeAt(0).toString(16).length)}\${c.charCodeAt(0).toString(16)}\`).join("");
          break;
        case "js-de":
          out = input;
          break;
        case "enc":
          out = input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
          break;
        case "dec": {
          const ta = document.createElement("textarea");
          ta.innerHTML = input;
          out = ta.value;
          break;
        }
        default: out = input;
      }
      setOutput(out);
      toast.success("Done");
    } catch { toast.error("Operation failed"); }
  };

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">${tool.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea className="min-h-[200px] font-mono text-sm" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste your code here..." />
        <div className="flex flex-wrap gap-2"><Button type="button" variant="secondary" onClick={run}>${tool.label}</Button></div>
        <Textarea className="min-h-[200px] font-mono text-sm bg-muted/30" readOnly value={output} placeholder="Output will appear here..." />
        <p className="text-xs text-muted-foreground">Heuristic processor — always keep originals and verify output before shipping to production.</p>
      </CardContent>
    </Card>
  );
}
`;
}

// Network checker component
function networkTemplate(tool) {
  return `"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const MODE_MAP = {
  "redirect-checker": "Redirect Chain Checker",
  "http-status-code-checker": "HTTP Status Checker",
  "get-http-headers": "Fetch HTML Head",
  "page-size-checker": "Page Size Checker",
  "server-status-checker": "Server Reachability",
  "hosting-checker": "Hosting Checker",
  "google-index-checker": "Google Index Checker",
  "google-cache-checker": "Google Cache Checker",
  "seo-audit-tool": "Quick SEO Audit",
  "open-graph-checker": "Open Graph Inspector",
  "backlink-checker": "Backlink Inspector",
  "bulk-keyword-rank-checker": "Keyword Rank Checker",
  "sitemap-generator": "Sitemap Generator",
  "whois-domain-lookup": "WHOIS Lookup",
  "wordpress-theme-detector": "WP Theme Detector",
  "domain-age-checker": "Domain Age Checker",
  "facebook-id-finder": "Facebook ID Finder",
  "indexnow": "IndexNow Submission",
};

export default function ${toPascal(tool.id)}() {
  const [url, setUrl] = useState("https://example.com");
  const [out, setOut] = useState("");

  const runHead = async () => {
    try {
      const r = await fetch("/api/tools/safe-http", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, mode: "headChain" }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "failed");
      setOut(JSON.stringify(d.chain, null, 2));
      toast.success("OK");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    }
  };

  const runGet = async () => {
    try {
      const r = await fetch("/api/tools/safe-http", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, mode: "getText", maxBytes: 120000 }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "failed");
      const tid = "${tool.id}";
      let text = "";
      if (tid === "page-size-checker") {
        const bytes = new Blob([d.text ?? ""]).size;
        text = \`Final URL: \${d.finalUrl}\\nHTTP \${d.status}\\nApprox. bytes: \${bytes}\`;
      } else if (tid === "get-http-headers") {
        text = (d.text || "").match(/<head[\\s\\S]*?<\\/head>/i)?.[0] ?? d.text ?? "";
        text = text.slice(0, 8000);
      } else {
        text = \`Final URL: \${d.finalUrl}\\nHTTP \${d.status}\\n\\n--- body (truncated) ---\\n\${String(d.text || "").slice(0, 4000)}\`;
      }
      setOut(text);
      toast.success("Fetched");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    }
  };

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">${tool.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="secondary" onClick={runHead}>HEAD chain</Button>
          <Button type="button" onClick={runGet}>GET snippet</Button>
        </div>
        <Textarea readOnly className="min-h-[240px] font-mono text-xs bg-muted/30" value={out} placeholder="Results will appear here..." />
        <p className="text-xs text-muted-foreground">Uses a same-origin safety-checked fetch. Some sites block bots.</p>
      </CardContent>
    </Card>
  );
}
`;
}

// =============================================================
// Generate all components
// =============================================================

function writeComponents(dir, tools, templateFn) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  let count = 0;
  for (const tool of tools) {
    const content = templateFn(tool);
    const filePath = path.join(dir, `${toPascal(tool.id)}.jsx`);
    fs.writeFileSync(filePath, content, "utf8");
    count++;
    console.log(`  [${path.basename(dir)}] ${tool.id} -> ${toPascal(tool.id)}.jsx`);
  }
  return count;
}

// =============================================================
// Update page.tsx imports
// =============================================================

function updatePages(category, tools) {
  const routeGroupMap = {
    calculators: "(utilities)",
    converters: "(developer)",
    units: "(utilities)",
    "data-serial": "(developer)",
    "code-markup": "(developer)",
    network: ["(utilities)", "(seo)"],
  };

  const importPathMap = {
    calculators: "@\/components\/tools\/calculators",
    converters: "@\/components\/tools\/converters",
    units: "@\/components\/tools\/units",
    "data-serial": "@\/components\/tools\/data-serial",
    "code-markup": "@\/components\/tools\/code-markup",
    network: "@\/components\/tools\/network",
  };

  const oldImportPatterns = {
    calculators: /import BuiltInCalculators from "@\/components\/tools\/built-ins\/BuiltInCalculators"/,
    converters: /import BaseConverter from "@\/components\/tools\/shared\/BaseConverter"/,
    units: /import UniversalUnitConverter from "@\/components\/tools\/built-ins\/UniversalUnitConverter"/,
    "data-serial": /import BuiltInSerialization from "@\/components\/tools\/built-ins\/BuiltInSerialization"/,
    "code-markup": /import BuiltInMarkup from "@\/components\/tools\/built-ins\/BuiltInMarkup"/,
    network: /import BuiltInSafeHttp from "@\/components\/tools\/built-ins\/BuiltInSafeHttp"/,
  };

  const oldUsagePatterns = {
    calculators: /<BuiltInCalculators\s+kind="([^"]*)"\s*\/>/g,
    converters: /<BaseConverter\s+converterKind="([^"]*)"\s*\/>/g,
    units: /<UniversalUnitConverter\s+preset="([^"]*)"\s*\/>/g,
    "data-serial": /<BuiltInSerialization\s+toolId="([^"]*)"\s*\/>/g,
    "code-markup": /<BuiltInMarkup\s+toolId="([^"]*)"\s*\/>/g,
    network: /<BuiltInSafeHttp\s+toolId="([^"]*)"\s*\/>/g,
  };

  const groups = Array.isArray(routeGroupMap[category]) ? routeGroupMap[category] : [routeGroupMap[category]];
  let updated = 0;

  for (const tool of tools) {
    const compName = toPascal(tool.id);
    for (const group of groups) {
      const appDir = path.join(__dirname, "..", "src", "app", `(${group})`, tool.id, "page.tsx");
      if (!fs.existsSync(appDir)) continue;

      let content = fs.readFileSync(appDir, "utf8");
      const oldImport = oldImportPatterns[category];
      const newImport = `import ${compName} from "${importPathMap[category]}/${compName}"`;

      // Replace import
      if (oldImport.test(content)) {
        content = content.replace(oldImport, newImport);
      } else {
        continue;
      }

      // Replace usage
      content = content.replace(oldUsagePatterns[category], `<${compName} />`);

      fs.writeFileSync(appDir, content, "utf8");
      updated++;
      console.log(`  PAGE: (${group})/${tool.id}/page.tsx -> ${compName}`);
    }
  }
  return updated;
}

// =============================================================
// Main execution
// =============================================================

console.log("\n=== Generating Custom Components ===\n");

let total = 0;

console.log("\n--- Calculators (14) ---");
total += writeComponents(CALCULATORS_DIR, CALC_TOOLS, calculatorTemplate);

console.log("\n--- Base Converters (24) ---");
total += writeComponents(CONVERTERS_DIR, CONV_TOOLS, converterTemplate);

console.log("\n--- Unit Converters (25) ---");
total += writeComponents(UNITS_DIR, UNIT_TOOLS, unitTemplate);

console.log("\n--- Data Serialization (7) ---");
total += writeComponents(SERIAL_DIR, SERIAL_TOOLS, serialTemplate);

console.log("\n--- Code Markup (10) ---");
total += writeComponents(CODE_DIR, CODE_TOOLS, codeTemplate);

console.log("\n--- Network Checkers (18) ---");
total += writeComponents(NETWORK_DIR, NET_TOOLS, networkTemplate);

console.log(`\n✓ Generated ${total} components total`);

// ------------------------------------------------------------------------
// Second pass: update page.tsx imports
// ------------------------------------------------------------------------

console.log("\n=== Updating Page Imports ===\n");

let pagesUpdated = 0;

console.log("\n--- Calculators ---");
pagesUpdated += updatePages("calculators", CALC_TOOLS);

console.log("\n--- Converters ---");
pagesUpdated += updatePages("converters", CONV_TOOLS);

console.log("\n--- Units ---");
pagesUpdated += updatePages("units", UNIT_TOOLS);

console.log("\n--- Data Serial ---");
pagesUpdated += updatePages("data-serial", SERIAL_TOOLS);

console.log("\n--- Code Markup ---");
pagesUpdated += updatePages("code-markup", CODE_TOOLS);

console.log("\n--- Network ---");
pagesUpdated += updatePages("network", NET_TOOLS);

console.log(`\n✓ Updated ${pagesUpdated} page imports`);

// Cleanup script files
console.log("\n=== Cleaning up intermediate script files ===\n");
for (const f of ["update-downloader-pages.cjs", "update-remaining-pages.cjs"]) {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log(`  Removed ${f}`);
  }
}

console.log("\n=== DONE ===\n");
