"use client";

import { diffChars } from "diff";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const WORDS_BANK =
	"alpha,bravo,charlie,delta,echo,foxtrot,golf,hotel,india,juliet,kilo,lima,mike,november,oscar,papa,quebec,romeo,sierra,tango,uniform,victor,whiskey,xray,yankee,zulu".split(
		",",
	);

function slugify(s: string) {
	return s
		.toLowerCase()
		.trim()
		.replace(/[^\p{L}\p{N}]+/gu, "-")
		.replace(/^-+|-+$/g, "");
}

export default function TextManipSuite({ toolId }: { toolId: string }) {
	const [left, setLeft] = useState("");
	const [right, setRight] = useState("");
	const [single, setSingle] = useState("");
	const [count, setCount] = useState("3");

	const out = useMemo(() => {
		if (toolId === "remove-line-breaks") return single.replace(/\r?\n+/g, " ").trim();
		if (toolId === "text-sorter")
			return single
				.split(/\r?\n/)
				.filter((l) => l.trim())
				.sort((a, b) => a.localeCompare(b))
				.join("\n");
		if (toolId === "comma-separator")
			return single
				.split(/\r?\n|\s+|,|;+/)
				.map((x) => x.trim())
				.filter(Boolean)
				.join(", ");
		if (toolId === "text-repeater") {
			const n = Math.min(5000, Math.max(1, Number.parseInt(count, 10) || 1));
			return Array.from({ length: n }, () => single).join("\n");
		}
		if (toolId === "text-to-slug-converter") return slugify(single);
		if (toolId === "text-to-hashtags-converter")
			return single
				.split(/\s+/)
				.map((w) => w.replace(/[^\p{L}\p{N}#]/gu, ""))
				.filter(Boolean)
				.map((w) => (w.startsWith("#") ? w : `#${w}`))
				.join(" ");
		if (toolId === "text-to-tags-converter")
			return single
				.split(/\s+/)
				.filter(Boolean)
				.map((w) => `<${slugify(w) || "tag"}>`)
				.join(" ");
		if (toolId === "random-word-generator") {
			const n = Math.min(50, Math.max(1, Number.parseInt(count, 10) || 5));
			const picks: string[] = [];
			for (let i = 0; i < n; i++)
				picks.push(WORDS_BANK[Math.floor(Math.random() * WORDS_BANK.length)]);
			return picks.join(", ");
		}
		if (toolId === "number-to-word-converter") {
			const n = Number.parseInt(single.replace(/,/g, ""), 10);
			if (!Number.isFinite(n) || n < 0 || n > 999999999) return "";
			const ones = [
				"",
				"one",
				"two",
				"three",
				"four",
				"five",
				"six",
				"seven",
				"eight",
				"nine",
				"ten",
				"eleven",
				"twelve",
				"thirteen",
				"fourteen",
				"fifteen",
				"sixteen",
				"seventeen",
				"eighteen",
				"nineteen",
			];
			const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
			function under1000(x: number): string {
				if (x < 20) return ones[x];
				if (x < 100) {
					const t = Math.floor(x / 10);
					const o = x % 10;
					return tens[t] + (o ? `-${ones[o]}` : "");
				}
				const h = Math.floor(x / 100);
				const r = x % 100;
				return `${ones[h]} hundred${r ? ` and ${under1000(r)}` : ""}`;
			}
			function go(x: number): string {
				if (x === 0) return "zero";
				const parts: string[] = [];
				const b = Math.floor(x / 1_000_000_000);
				if (b) {
					parts.push(`${under1000(b)} billion`);
					x %= 1_000_000_000;
				}
				const m = Math.floor(x / 1_000_000);
				if (m) {
					parts.push(`${under1000(m)} million`);
					x %= 1_000_000;
				}
				const t = Math.floor(x / 1000);
				if (t) {
					parts.push(`${under1000(t)} thousand`);
					x %= 1000;
				}
				if (x) parts.push(under1000(x));
				return parts.join(" ").replace(/\s+/g, " ").trim();
			}
			return go(n);
		}
		if (toolId === "word-to-number-converter") {
			const map: Record<string, number> = {
				zero: 0,
				one: 1,
				two: 2,
				three: 3,
				four: 4,
				five: 5,
				six: 6,
				seven: 7,
				eight: 8,
				nine: 9,
				ten: 10,
			};
			const tok = single.toLowerCase().trim().split(/\s+/)[0];
			return tok in map ? String(map[tok]) : "";
		}
		if (toolId === "article-rewriter") {
			return single
				.replace(/\bvery\b/gi, "really")
				.replace(/\butilize\b/gi, "use")
				.replace(/\bin order to\b/gi, "to");
		}
		return "";
	}, [toolId, single, count]);

	const diffHtml = useMemo(() => {
		if (toolId !== "text-compare") return "";
		const parts = diffChars(left, right);
		return parts
			.map((p) => {
				if (p.added) return `<span class="bg-emerald-500/25">${escapeHtml(p.value)}</span>`;
				if (p.removed) return `<span class="bg-rose-500/25">${escapeHtml(p.value)}</span>`;
				return escapeHtml(p.value);
			})
			.join("");
	}, [toolId, left, right]);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">Text tool</CardTitle>
				<CardDescription>Runs locally in your browser.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				{toolId === "text-compare" ? (
					<div className="grid gap-4 md:grid-cols-2">
						<Textarea value={left} onChange={(e) => setLeft(e.target.value)} placeholder="Text A" className="min-h-[200px]" />
						<Textarea value={right} onChange={(e) => setRight(e.target.value)} placeholder="Text B" className="min-h-[200px]" />
						<div
							className="md:col-span-2 sm font-mono whitespace-pre-wrap"
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: diffHtml || "<span class='text-muted-foreground'>Diff appears here…</span>" }}
						/>
					</div>
				) : (
					<>
						{(toolId === "text-repeater" || toolId === "random-word-generator") && (
							<div className="max-w-xs space-y-2">
								<p className="text-xs text-muted-foreground">Repeat / word count</p>
								<Input value={count} onChange={(e) => setCount(e.target.value)} />
							</div>
						)}
						<Textarea value={single} onChange={(e) => setSingle(e.target.value)} className="min-h-[220px]" />
						<Button
							type="button"
							onClick={() => {
								navigator.clipboard.writeText(out);
								toast.success("Copied");
							}}
							disabled={!out}
						>
							Copy output
						</Button>
						<pre className="sm whitespace-pre-wrap">{out || "—"}</pre>
					</>
				)}
			</CardContent>
		</Card>
	);
}

function escapeHtml(s: string) {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

export const TEXT_MANIP_TOOL_IDS = new Set([
	"remove-line-breaks",
	"text-sorter",
	"comma-separator",
	"text-repeater",
	"text-to-slug-converter",
	"text-to-hashtags-converter",
	"text-to-tags-converter",
	"random-word-generator",
	"number-to-word-converter",
	"word-to-number-converter",
	"article-rewriter",
	"text-compare",
]);
