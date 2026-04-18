"use client";

import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function BuiltInSafeHttp({ toolId }: { toolId: string }) {
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
			if (toolId === "page-size-checker") {
				const bytes = new Blob([d.text ?? ""]).size;
				setOut(`Final URL: ${d.finalUrl}\nHTTP ${d.status}\nApprox. downloaded bytes (truncated): ${bytes}`);
			} else if (toolId === "get-http-headers") {
				const heads = (d.text as string).match(/<head[\s\S]*?<\/head>/i)?.[0] ?? d.text;
				setOut(heads.slice(0, 8000));
			} else {
				setOut(`Final URL: ${d.finalUrl}\nHTTP ${d.status}\n\n--- body (truncated) ---\n${String(d.text).slice(0, 4000)}`);
			}
			toast.success("Fetched");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Error");
		}
	};

	const title =
		toolId === "redirect-checker"
			? "Redirect trace"
			: toolId === "http-status-code-checker"
				? "HTTP status"
				: toolId === "get-http-headers"
					? "Fetch HTML head snippet"
					: toolId === "page-size-checker"
						? "Page size (truncated fetch)"
						: "Server reachability";

	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">{title}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Input
					className=""
					value={url}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
					placeholder="https://..."
				/>
				<div className="flex flex-wrap gap-2">
					<Button type="button" variant="secondary" onClick={runHead}>
						HEAD chain
					</Button>
					<Button type="button" onClick={runGet}>
						GET snippet
					</Button>
				</div>
				<Textarea readOnly className="min-h-[240px] font-mono text-xs bg-muted/30" value={out} />
				<p className="text-xs text-muted-foreground">
					Uses a same-origin safety-checked fetch. Some sites block bots; results are best-effort.
				</p>
			</CardContent>
		</Card>
	);
}
