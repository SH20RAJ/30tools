"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Base64QuickTool({ mode }: { mode: "encode" | "decode" }) {
	const [text, setText] = useState("");
	const [out, setOut] = useState("");

	const run = () => {
		try {
			if (mode === "encode") {
				setOut(btoa(unescape(encodeURIComponent(text))));
			} else {
				setOut(decodeURIComponent(escape(atob(text.trim()))));
			}
			toast.success("Done");
		} catch {
			toast.error("Invalid input for this operation");
			setOut("");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{mode === "encode" ? "Base64 encode" : "Base64 decode"}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[180px] font-mono text-sm" />
				<Button type="button" onClick={run}>
					Run
				</Button>
				<Textarea readOnly value={out} className="min-h-[180px] font-mono text-xs" />
			</CardContent>
		</Card>
	);
}
