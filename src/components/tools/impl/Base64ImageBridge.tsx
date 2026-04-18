"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Base64ImageBridge({ mode }: { mode: "to-image" | "from-image" }) {
	const [text, setText] = useState("");
	const [preview, setPreview] = useState("");

	if (mode === "to-image") {
		const load = () => {
			try {
				const src = text.includes("base64,") ? text : `data:image/png;base64,${text}`;
				setPreview(src);
				toast.success("Preview updated");
			} catch {
				toast.error("Invalid data URL");
			}
		};
		return (
			<Card>
				<CardHeader>
					<CardTitle>Base64 to image</CardTitle>
					<CardDescription>Paste a data URL or raw base64 (PNG assumed if no prefix).</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[160px] font-mono text-xs" />
					<Button type="button" onClick={load}>
						Preview
					</Button>
					{preview ? <img src={preview} alt="Decoded" className="max-h-80 rounded border" /> : null}
				</CardContent>
			</Card>
		);
	}

	const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const f = e.target.files?.[0];
		if (!f) return;
		const r = new FileReader();
		r.onload = () => {
			const res = String(r.result || "");
			setText(res);
			setPreview(res);
			toast.success("Encoded");
		};
		r.readAsDataURL(f);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Image to Base64</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<input type="file" accept="image/*" onChange={onFile} />
				<Textarea readOnly value={text} className="min-h-[160px] font-mono text-xs" />
			</CardContent>
		</Card>
	);
}
