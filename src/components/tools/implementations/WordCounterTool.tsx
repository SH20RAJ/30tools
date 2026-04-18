"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function WordCounterTool() {
	const [text, setText] = useState("");

	const stats = useMemo(() => {
		const trimmed = text.trim();
		const words = trimmed
			? trimmed.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w))
			: [];
		const chars = text.length;
		const charsNoSpace = text.replace(/\s/g, "").length;
		const lines = text ? text.split(/\r\n|\r|\n/).length : 0;
		const sentences = trimmed
			? (trimmed.match(/[.!?]+(\s|$)/g) || []).length || 1
			: 0;
		const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).length : 0;
		const avgLen = words.length ? Math.round(charsNoSpace / words.length) : 0;
		return {
			words: words.length,
			chars,
			charsNoSpace,
			lines,
			sentences,
			paragraphs,
			avgLen,
		};
	}, [text]);

	const items = [
		{ label: "Words", value: stats.words },
		{ label: "Characters", value: stats.chars },
		{ label: "Characters (no spaces)", value: stats.charsNoSpace },
		{ label: "Lines", value: stats.lines },
		{ label: "Paragraphs", value: stats.paragraphs },
		{ label: "Sentences (approx.)", value: stats.sentences },
		{ label: "Avg. word length", value: stats.avgLen },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">Word & character counter</CardTitle>
				<p className="text-sm text-muted-foreground">
					Live counts for essays, captions, and meta descriptions. Everything stays in
					your browser.
				</p>
			</CardHeader>
			<CardContent className="space-y-6">
				<Textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Paste or type your text here..."
					className="min-h-[240px] text-base leading-relaxed"
				/>
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((row) => (
						<div
							key={row.label}
							className="rounded-xl border border-border/70 bg-muted/30 px-4 py-3"
						>
							<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
								{row.label}
							</p>
							<p className="text-2xl font-semibold tabular-nums">{row.value}</p>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
