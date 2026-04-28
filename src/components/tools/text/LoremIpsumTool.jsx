"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, RefreshCw, AlignLeft } from "lucide-react";

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta explicabo nemo enim ipsam quia voluptas aspernatur aut odit fugit consequuntur magni dolores eos ratione sequi nesciunt neque porro quisquam".split(" ");

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function generateSentence() {
	const len = 8 + Math.floor(Math.random() * 12);
	const words = Array.from({ length: len }, () => pick(WORDS));
	words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
	return words.join(" ") + ".";
}

function generateParagraph() {
	const count = 3 + Math.floor(Math.random() * 5);
	return Array.from({ length: count }, generateSentence).join(" ");
}

export default function LoremIpsumTool() {
	const [count, setCount] = useState(3);
	const [unit, setUnit] = useState("paragraphs");
	const [output, setOutput] = useState("");

	const generate = useCallback(() => {
		let result = "";
		if (unit === "paragraphs") {
			result = Array.from({ length: count }, generateParagraph).join("\n\n");
		} else if (unit === "sentences") {
			result = Array.from({ length: count }, generateSentence).join(" ");
		} else {
			result = Array.from({ length: count }, () => pick(WORDS)).join(" ");
		}
		setOutput(result);
		toast.success("Generated!");
	}, [count, unit]);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<AlignLeft className="h-5 w-5 text-primary" />
					Lorem Ipsum Generator
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex gap-3 items-end">
					<div className="space-y-1">
						<label className="text-xs font-medium text-muted-foreground">Count</label>
						<input type="number" min="1" max="100" value={count}
							onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
							className="w-20 h-10 px-3 rounded-md border bg-background text-sm" />
					</div>
					<div className="space-y-1">
						<label className="text-xs font-medium text-muted-foreground">Unit</label>
						<select value={unit} onChange={(e) => setUnit(e.target.value)}
							className="h-10 px-3 rounded-md border bg-background text-sm">
							<option value="paragraphs">Paragraphs</option>
							<option value="sentences">Sentences</option>
							<option value="words">Words</option>
						</select>
					</div>
					<Button onClick={generate} className="gap-2">
						<RefreshCw className="h-4 w-4" /> Generate
					</Button>
					{output && (
						<Button variant="outline" onClick={() => { navigator.clipboard.writeText(output); toast.success("Copied!"); }} className="gap-2">
							<Copy className="h-4 w-4" /> Copy
						</Button>
					)}
				</div>
				<Textarea readOnly className="min-h-[300px] text-sm bg-muted/30 leading-relaxed" value={output} placeholder="Click Generate to create Lorem Ipsum text..." />
			</CardContent>
		</Card>
	);
}
