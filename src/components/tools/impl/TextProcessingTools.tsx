"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const WORDS = [
	"stream",
	"focus",
	"design",
	"build",
	"launch",
	"growth",
	"signal",
	"craft",
	"scale",
	"clarity",
];

export function TextProcessingTools({ toolId }: { toolId: string }) {
	const [text, setText] = useState("");
	const [count, setCount] = useState("3");
	const [out, setOut] = useState("");

	const run = () => {
		try {
			if (toolId === "text-repeater") {
				const n = Math.min(5000, Math.max(1, Number.parseInt(count, 10) || 1));
				setOut(text.repeat(n));
			} else if (toolId === "text-to-hashtags-converter") {
				setOut(
					text
						.split(/\s+/)
						.filter(Boolean)
						.map((w) => `#${w.replace(/[^a-zA-Z0-9_]/g, "")}`)
						.join(" "),
				);
			} else if (toolId === "text-to-tags-converter") {
				setOut(
					text
						.split(/\s+/)
						.filter(Boolean)
						.map((w) => `<span class="tag">${w.replace(/[<>]/g, "")}</span>`)
						.join("\n"),
				);
			} else if (toolId === "text-to-slug-converter") {
				setOut(
					text
						.toLowerCase()
						.trim()
						.replace(/[^a-z0-9]+/g, "-")
						.replace(/^-|-$/g, ""),
				);
			} else if (toolId === "remove-line-breaks") {
				setOut(text.replace(/\r?\n+/g, " ").replace(/\s+/g, " ").trim());
			} else if (toolId === "word-counter") {
				const words = text.trim() ? text.trim().split(/\s+/) : [];
				const chars = text.length;
				setOut(`Words: ${words.length} | Characters: ${chars} | Lines: ${text.split(/\r?\n/).length}`);
			} else if (toolId === "text-sorter") {
				setOut(
					text
						.split(/\r?\n/)
						.filter((l) => l.length > 0)
						.sort((a, b) => a.localeCompare(b))
						.join("\n"),
				);
			} else if (toolId === "text-compare") {
				const [a, b] = text.split("---");
				setOut(a === b ? "Blocks are identical." : "Blocks differ (split input with --- on its own line).");
			} else if (toolId === "comma-separator") {
				setOut(text.split(/\s+/).filter(Boolean).join(", "));
			} else if (toolId === "random-word-generator") {
				const n = Math.min(50, Math.max(1, Number.parseInt(count, 10) || 5));
				const pick = () => WORDS[Math.floor(Math.random() * WORDS.length)];
				setOut(Array.from({ length: n }, pick).join(" "));
			} else if (toolId === "article-rewriter") {
				setOut(
					text
						.replace(/\bvery\b/gi, "really")
						.replace(/\bgood\b/gi, "solid")
						.replace(/\bbad\b/gi, "rough"),
				);
			} else if (toolId === "word-to-number-converter") {
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
				setOut(
					text
						.toLowerCase()
						.split(/\s+/)
						.map((w) => map[w] ?? w)
						.join(" "),
				);
			} else if (toolId === "number-to-word-converter") {
				const n = Number.parseInt(text.trim(), 10);
				if (Number.isNaN(n) || n < 0 || n > 99) {
					setOut("Enter an integer 0–99.");
				} else {
					const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
					const teens = [
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
					if (n < 10) setOut(ones[n]);
					else if (n < 20) setOut(teens[n - 10]);
					else {
						const t = Math.floor(n / 10);
						const o = n % 10;
						setOut(`${tens[t]}${o ? `-${ones[o]}` : ""}`);
					}
				}
			}
			toast.success("Done");
		} catch {
			toast.error("Could not process");
		}
	};

	const showCount =
		toolId === "text-repeater" || toolId === "random-word-generator";

	return (
		<Card>
			<CardHeader>
				<CardTitle>Text tool</CardTitle>
				<CardDescription>Runs locally in your browser.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				{toolId === "word-counter" ? (
					<>
						<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[220px] font-mono" />
						<Button type="button" onClick={run}>
							Count
						</Button>
						<div className="rounded border bg-muted/40 p-3 font-mono">{out}</div>
					</>
				) : (
					<>
						{showCount && (
							<div className="space-y-2 max-w-xs">
								<Label>Repeat / word count</Label>
								<Input value={count} onChange={(e) => setCount(e.target.value)} />
							</div>
						)}
						<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[220px] font-mono" />
						<Button type="button" onClick={run}>
							Run
						</Button>
						<Textarea readOnly value={out} className="min-h-[220px] font-mono" />
					</>
				)}
			</CardContent>
		</Card>
	);
}

export const TEXT_TOOL_IDS = new Set([
	"text-repeater",
	"text-to-hashtags-converter",
	"text-to-tags-converter",
	"text-to-slug-converter",
	"remove-line-breaks",
	"word-counter",
	"text-sorter",
	"text-compare",
	"comma-separator",
	"random-word-generator",
	"article-rewriter",
	"word-to-number-converter",
	"number-to-word-converter",
]);
