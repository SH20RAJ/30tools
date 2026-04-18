"use client";

import {
	Download,
	FlipHorizontal,
	FlipVertical,
	Image as ImageIcon,
	RotateCw,
	ZoomIn,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

type WorkbenchMode = "enlarge" | "rotate" | "flip" | "crop";

export default function CanvasImageWorkbench({
	mode,
	title,
}: {
	mode: WorkbenchMode;
	title: string;
}) {
	const inputRef = useRef<HTMLInputElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const source = useRef<HTMLImageElement | null>(null);
	const [scale, setScale] = useState([200]);

	const drawImage = useCallback(
		(img: HTMLImageElement) => {
			const c = canvasRef.current;
			if (!c) return;
			const ctx = c.getContext("2d");
			if (!ctx) return;
			let w = img.naturalWidth;
			let h = img.naturalHeight;
			if (mode === "enlarge") {
				const f = scale[0] / 100;
				w = Math.round(w * f);
				h = Math.round(h * f);
			} else if (mode === "crop") {
				const side = Math.min(w, h);
				const sx = (w - side) / 2;
				const sy = (h - side) / 2;
				c.width = side;
				c.height = side;
				ctx.clearRect(0, 0, side, side);
				ctx.drawImage(img, sx, sy, side, side, 0, 0, side, side);
				return;
			}
			c.width = w;
			c.height = h;
			ctx.clearRect(0, 0, w, h);
			ctx.drawImage(img, 0, 0, w, h);
		},
		[mode, scale],
	);

	const loadFile = (file: File) => {
		const url = URL.createObjectURL(file);
		const img = new Image();
		img.onload = () => {
			source.current = img;
			drawImage(img);
			URL.revokeObjectURL(url);
			toast.success("Image loaded");
		};
		img.onerror = () => {
			URL.revokeObjectURL(url);
			toast.error("Could not read image");
		};
		img.src = url;
	};

	const rotate = () => {
		const img = source.current;
		const c = canvasRef.current;
		if (!img || !c) return;
		const ctx = c.getContext("2d");
		if (!ctx) return;
		const w = img.naturalHeight;
		const h = img.naturalWidth;
		c.width = w;
		c.height = h;
		ctx.translate(w, 0);
		ctx.rotate(Math.PI / 2);
		ctx.drawImage(img, 0, 0);
		source.current = new Image();
		source.current.onload = () => {};
		source.current.src = c.toDataURL("image/png");
	};

	const flip = (dir: "h" | "v") => {
		const img = source.current;
		const c = canvasRef.current;
		if (!img || !c) return;
		const ctx = c.getContext("2d");
		if (!ctx) return;
		c.width = img.naturalWidth;
		c.height = img.naturalHeight;
		if (dir === "h") {
			ctx.translate(c.width, 0);
			ctx.scale(-1, 1);
		} else {
			ctx.translate(0, c.height);
			ctx.scale(1, -1);
		}
		ctx.drawImage(img, 0, 0);
	};

	const download = () => {
		const c = canvasRef.current;
		if (!c || !c.width) {
			toast.error("Nothing to download yet");
			return;
		}
		c.toBlob((blob) => {
			if (!blob) return;
			const a = document.createElement("a");
			a.href = URL.createObjectURL(blob);
			a.download = "30tools-image.png";
			a.click();
			URL.revokeObjectURL(a.href);
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{title}</CardTitle>
				<p className="text-sm text-muted-foreground">
					Runs fully client-side. PNG download keeps quality for further editing.
				</p>
			</CardHeader>
			<CardContent className="space-y-4">
				<input
					ref={inputRef}
					type="file"
					accept="image/*"
					className="hidden"
					onChange={(e) => {
						const f = e.target.files?.[0];
						if (f) loadFile(f);
					}}
				/>
				<div className="flex flex-wrap gap-2">
					<Button type="button" variant="secondary" onClick={() => inputRef.current?.click()}>
						<ImageIcon className="mr-2 h-4 w-4" />
						Choose image
					</Button>
					{mode === "enlarge" ? (
						<div className="flex min-w-[200px] flex-1 items-center gap-3 px-2">
							<Label className="text-xs text-muted-foreground">Scale</Label>
							<Slider value={scale} onValueChange={setScale} min={50} max={300} step={5} />
							<span className="text-xs tabular-nums">{scale[0]}%</span>
						</div>
					) : null}
					{mode === "enlarge" ? (
						<Button
							type="button"
							onClick={() => source.current && drawImage(source.current)}
						>
							<ZoomIn className="mr-2 h-4 w-4" />
							Apply scale
						</Button>
					) : null}
					{mode === "rotate" ? (
						<Button type="button" onClick={rotate}>
							<RotateCw className="mr-2 h-4 w-4" />
							Rotate 90°
						</Button>
					) : null}
					{mode === "flip" ? (
						<>
							<Button type="button" variant="outline" onClick={() => flip("h")}>
								<FlipHorizontal className="mr-2 h-4 w-4" />
								Flip horizontal
							</Button>
							<Button type="button" variant="outline" onClick={() => flip("v")}>
								<FlipVertical className="mr-2 h-4 w-4" />
								Flip vertical
							</Button>
						</>
					) : null}
					{mode === "crop" ? (
						<Button
							type="button"
							onClick={() => source.current && drawImage(source.current)}
						>
							Center square crop
						</Button>
					) : null}
					<Button type="button" onClick={download}>
						<Download className="mr-2 h-4 w-4" />
						Download PNG
					</Button>
				</div>
				<canvas
					ref={canvasRef}
					className="max-h-[480px] w-full "
				/>
			</CardContent>
		</Card>
	);
}
