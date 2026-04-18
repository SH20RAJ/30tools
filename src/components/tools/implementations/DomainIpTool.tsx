"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function DomainIpTool() {
	const [host, setHost] = useState("example.com");
	const [out, setOut] = useState("");

	const run = async () => {
		try {
			const clean = host.replace(/^https?:\/\//, "").split("/")[0];
			const r = await fetch(
				`https://dns.google/resolve?name=${encodeURIComponent(clean)}&type=A`,
			);
			const j = (await r.json()) as {
				Answer?: { data: string }[];
				Status?: number;
			};
			const ips = j.Answer?.map((a) => a.data).join(", ") || "No A record";
			setOut(`Status: ${j.Status}\nA: ${ips}`);
			toast.success("Resolved");
		} catch {
			toast.error("Lookup failed");
			setOut("");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">Domain → IPv4 (public DNS)</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 max-w-md">
				<Input value={host} onChange={(e) => setHost(e.target.value)} />
				<Button type="button" onClick={run}>
					Resolve
				</Button>
				<pre className="rounded border bg-muted/40 p-3 text-sm whitespace-pre-wrap">{out}</pre>
			</CardContent>
		</Card>
	);
}
