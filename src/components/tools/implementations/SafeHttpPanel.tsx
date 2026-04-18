"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Mode =
	| "redirect"
	| "headers"
	| "page-size"
	| "status"
	| "fetch-html"
	| "dns-note"
	| "response-headers";

const copy = async (t: string) => {
	await navigator.clipboard.writeText(t);
	toast.success("Copied");
};

export default function SafeHttpPanel({
	mode,
	title,
	description,
}: {
	mode: Mode;
	title: string;
	description: string;
}) {
	const [url, setUrl] = useState("https://");
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<string>("");

	const run = async () => {
		setLoading(true);
		setResult("");
		try {
			if (mode === "response-headers") {
				const res = await fetch("/api/tools/safe-http", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ url, mode: "getHeaders" }),
				});
				const data = (await res.json()) as {
					error?: string;
					status?: number;
					finalUrl?: string;
					headers?: Record<string, string>;
				};
				if (!res.ok) throw new Error(data.error || "Request failed");
				const block = [
					`Final URL: ${data.finalUrl}`,
					`HTTP status: ${data.status}`,
					"",
					...Object.entries(data.headers || {}).map(([k, v]) => `${k}: ${v}`),
				].join("\n");
				setResult(block);
				toast.success("Done");
				setLoading(false);
				return;
			}
			if (mode === "dns-note") {
				setResult(
					"DNS lookups use resolver infrastructure outside the browser. Use your OS `dig`/`nslookup`, your registrar panel, or a DNS API from a server you control. You can still inspect redirect chains and HTML below for SEO checks.",
				);
				setLoading(false);
				return;
			}
			if (mode === "fetch-html" || mode === "headers" || mode === "page-size") {
				const res = await fetch("/api/tools/safe-http", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						url,
						mode: "getText",
						maxBytes: mode === "page-size" ? 500_000 : 200_000,
					}),
				});
				const data = (await res.json()) as {
					error?: string;
					text?: string;
					status?: number;
					finalUrl?: string;
				};
				if (!res.ok) throw new Error(data.error || "Request failed");
				if (mode === "page-size") {
					const bytes = new TextEncoder().encode(data.text || "").length;
					setResult(
						`Final URL: ${data.finalUrl}\nHTTP status: ${data.status}\nDownloaded bytes (capped): ${bytes}`,
					);
				} else if (mode === "headers") {
					setResult(
						`Final URL: ${data.finalUrl}\nHTTP status: ${data.status}\n\nNote: full response headers are only visible server-side; this response includes the fetched document for manual inspection.`,
					);
				} else {
					setResult(data.text || "");
				}
			} else {
				const res = await fetch("/api/tools/safe-http", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ url, mode: "headChain" }),
				});
				const data = (await res.json()) as {
					error?: string;
					chain?: { url: string; status: number; location?: string }[];
				};
				if (!res.ok) throw new Error(data.error || "Request failed");
				const lines =
					data.chain?.map(
						(c) =>
							`${c.status}  ${c.url}${c.location ? `  → ${c.location}` : ""}`,
					) ?? [];
				setResult(lines.join("\n"));
			}
			toast.success("Done");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Failed");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{title}</CardTitle>
				<p className="text-sm text-muted-foreground">{description}</p>
			</CardHeader>
			<CardContent className="space-y-4">
				{mode !== "dns-note" ? (
					<div className="space-y-2">
						<Label htmlFor="u">URL (https only)</Label>
						<Input
							id="u"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							placeholder="https://example.com"
						/>
						<Button type="button" onClick={run} disabled={loading} className="gap-2">
							{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
							Run check
						</Button>
					</div>
				) : (
					<Button type="button" variant="secondary" onClick={run}>
						Show guidance
					</Button>
				)}
				{result ? (
					<div className="space-y-2">
						<div className="flex justify-end">
							<Button type="button" variant="ghost" size="sm" onClick={() => copy(result)}>
								Copy output
							</Button>
						</div>
						<Textarea readOnly className="min-h-[220px] font-mono text-xs" value={result} />
					</div>
				) : null}
			</CardContent>
		</Card>
	);
}
