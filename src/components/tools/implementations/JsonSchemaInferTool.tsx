"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function infer(v: unknown): unknown {
	if (v === null) return { type: "null" };
	if (Array.isArray(v)) {
		if (!v.length) return { type: "array", items: {} };
		return { type: "array", items: infer(v[0]) };
	}
	if (typeof v === "object") {
		const props: Record<string, unknown> = {};
		for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
			props[k] = infer(val);
		}
		return { type: "object", properties: props };
	}
	return { type: typeof v };
}

export default function JsonSchemaInferTool() {
	const [text, setText] = useState("");
	const [out, setOut] = useState("");

	const run = () => {
		try {
			const parsed = JSON.parse(text);
			const schema = {
				$schema: "https://json-schema.org/draft/2020-12/schema",
				...infer(parsed),
			};
			setOut(JSON.stringify(schema, null, 2));
			toast.success("Inferred");
		} catch {
			toast.error("Invalid JSON");
			setOut("");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">JSON → JSON Schema (heuristic)</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[200px] font-mono text-xs" />
				<Button type="button" onClick={run}>
					Infer
				</Button>
				<Textarea readOnly value={out} className="min-h-[240px] font-mono text-xs" />
			</CardContent>
		</Card>
	);
}
