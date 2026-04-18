"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function beautifyHtmlLike(s: string) {
	return s
		.replace(/>\s+</g, ">\n<")
		.split("\n")
		.map((l) => l.trim())
		.filter(Boolean)
		.join("\n");
}

function minifyLoose(s: string) {
	return s.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();
}

export default function CodeSquashTool({
	language,
}: {
	language: "html" | "css" | "js";
}) {
	const [text, setText] = useState("");

	const beautify = () => {
		setText(language === "html" ? beautifyHtmlLike(text) : beautifyHtmlLike(text));
		toast.success("Beautified (heuristic)");
	};

	const minify = () => {
		setText(minifyLoose(text));
		toast.success("Minified (heuristic — verify output)");
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{language.toUpperCase()} formatter</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Tabs defaultValue="beautify">
					<TabsList>
						<TabsTrigger value="beautify">Beautify</TabsTrigger>
						<TabsTrigger value="minify">Minify</TabsTrigger>
					</TabsList>
					<TabsContent value="beautify" className="space-y-2">
						<Button type="button" onClick={beautify}>
							Apply
						</Button>
					</TabsContent>
					<TabsContent value="minify" className="space-y-2">
						<Button type="button" variant="secondary" onClick={minify}>
							Apply
						</Button>
					</TabsContent>
				</Tabs>
				<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[280px] font-mono text-xs" />
			</CardContent>
		</Card>
	);
}
