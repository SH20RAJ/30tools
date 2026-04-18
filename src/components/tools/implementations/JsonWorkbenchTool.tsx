"use client";

import { AlertCircle, Check, Wand2 } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

type Mode = "format" | "minify" | "validate";

export default function JsonWorkbenchTool({ initialTab = "format" as Mode }) {
	const [input, setInput] = useState("");
	const [tab, setTab] = useState<Mode>(initialTab);

	const formatted = useMemo(() => {
		try {
			const v = JSON.parse(input);
			return JSON.stringify(v, null, 2);
		} catch {
			return "";
		}
	}, [input]);

	const minified = useMemo(() => {
		try {
			return JSON.stringify(JSON.parse(input));
		} catch {
			return "";
		}
	}, [input]);

	const validation = useMemo(() => {
		try {
			JSON.parse(input);
			return { ok: true as const, message: "Valid JSON" };
		} catch (e) {
			return {
				ok: false as const,
				message: e instanceof Error ? e.message : "Invalid JSON",
			};
		}
	}, [input]);

	const apply = (action: Mode) => {
		if (action === "format") {
			if (!formatted) {
				toast.error("Cannot format — fix JSON syntax first.");
				return;
			}
			setInput(formatted);
			toast.success("Formatted");
		} else if (action === "minify") {
			if (!minified) {
				toast.error("Cannot minify — fix JSON syntax first.");
				return;
			}
			setInput(minified);
			toast.success("Minified");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">JSON workspace</CardTitle>
				<p className="text-sm text-muted-foreground">
					Pretty-print, minify, and validate JSON locally. No uploads.
				</p>
			</CardHeader>
			<CardContent className="space-y-4">
				<Tabs value={tab} onValueChange={(v: string) => setTab(v as Mode)}>
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="format">Format</TabsTrigger>
						<TabsTrigger value="minify">Minify</TabsTrigger>
						<TabsTrigger value="validate">Validate</TabsTrigger>
					</TabsList>
					<TabsContent value="format" className="space-y-3 pt-2">
						<Button type="button" onClick={() => apply("format")} className="gap-2">
							<Wand2 className="h-4 w-4" />
							Apply pretty print
						</Button>
					</TabsContent>
					<TabsContent value="minify" className="space-y-3 pt-2">
						<Button type="button" variant="secondary" onClick={() => apply("minify")}>
							Apply single-line minify
						</Button>
					</TabsContent>
					<TabsContent value="validate" className="pt-2">
						<div
							className={`flex items-center gap-2 sm ${
								validation.ok
									? "border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200"
									: "border-destructive/40 bg-destructive/10 text-destructive"
							}`}
						>
							{validation.ok ? (
								<Check className="h-4 w-4 shrink-0" />
							) : (
								<AlertCircle className="h-4 w-4 shrink-0" />
							)}
							{validation.message}
						</div>
					</TabsContent>
				</Tabs>

				<Textarea
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='Paste JSON, e.g. { "hello": "world" }'
					className="min-h-[320px] font-mono text-sm"
					spellCheck={false}
				/>
			</CardContent>
		</Card>
	);
}
