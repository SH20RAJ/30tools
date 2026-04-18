"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function NaiveBeautifyTool({ language }: { language: "javascript" | "css" | "html" }) {
	const [input, setInput] = useState("");
	const [out, setOut] = useState("");

	const run = () => {
		let s = input;
		if (language === "html") {
			s = s.replace(/>\s*</g, ">\n<");
		} else {
			s = s.replace(/\{\s*/g, "{\n").replace(/;\s*/g, ";\n").replace(/\}\s*/g, "}\n");
		}
		setOut(s);
		toast.success("Formatted (naive — verify output)");
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Beautify ({language})</CardTitle>
				<CardDescription>Lightweight formatter for readability.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<Textarea value={input} onChange={(e) => setInput(e.target.value)} className="min-h-[240px] font-mono text-sm" />
				<Button type="button" onClick={run}>
					Format
				</Button>
				<Textarea readOnly value={out} className="min-h-[240px] font-mono text-sm" />
			</CardContent>
		</Card>
	);
}
