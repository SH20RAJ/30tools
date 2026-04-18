"use client";

import {
	ArrowDownUp,
	ArrowLeftRight,
	Copy,
	Download,
	List,
	RefreshCw,
	Trash2,
	Type,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const UPSIDE_DOWN_MAP: Record<string, string> = {
	a: "ɐ",
	b: "q",
	c: "ɔ",
	d: "p",
	e: "ǝ",
	f: "ɟ",
	g: "ƃ",
	h: "ɥ",
	i: "ᴉ",
	j: "ɾ",
	k: "ʞ",
	l: "l",
	m: "ɯ",
	n: "u",
	o: "o",
	p: "d",
	q: "b",
	r: "ɹ",
	s: "s",
	t: "ʇ",
	u: "n",
	v: "ʌ",
	w: "ʍ",
	x: "x",
	y: "ʎ",
	z: "z",
	A: "∀",
	B: "ᗺ",
	C: "Ɔ",
	D: "",
	E: "Ǝ",
	F: "Ⅎ",
	G: "⅁",
	H: "H",
	I: "I",
	J: "ᒋ",
	K: "lambda",
	L: "˥",
	M: "W",
	N: "N",
	O: "O",
	P: "Ԁ",
	Q: "Ό",
	R: "ᴚ",
	S: "S",
	T: "⊥",
	U: "∩",
	V: "Λ",
	W: "M",
	X: "X",
	Y: "⅄",
	Z: "Z",
	"1": "Ɩ",
	"2": "ᄅ",
	"3": "Ɛ",
	"4": "ㄣ",
	"5": "ϛ",
	"6": "9",
	"7": "ㄥ",
	"8": "8",
	"9": "6",
	"0": "0",
	".": "˙",
	",": "'",
	"'": ",",
	'"': "„",
	"?": "¿",
	"!": "¡",
	"(": ")",
	")": "(",
	"[": "]",
	"]": "[",
	"{": "}",
	"}": "{",
	"<": ">",
	">": "<",
	"&": "⅋",
	_: "‾",
};

const MIRROR_MAP: Record<string, string> = {
	a: "ɒ",
	b: "d",
	c: "ɔ",
	d: "b",
	e: "ɘ",
	f: "Ꮈ",
	g: "ǫ",
	h: "ʜ",
	i: "i",
	j: "ꞁ",
	k: "ʞ",
	l: "l",
	m: "m",
	n: "ᴎ",
	o: "o",
	p: "q",
	q: "p",
	r: "ᴙ",
	s: "ꙅ",
	t: "ᴛ",
	u: "ᴜ",
	v: "v",
	w: "w",
	x: "x",
	y: "ʏ",
	z: "ᴢ",
	A: "A",
	B: "ᙀ",
	C: "Ɔ",
	D: "ᗡ",
	E: "Ǝ",
	F: "ꟻ",
	G: "Ꭾ",
	H: "H",
	I: "I",
	J: "ᒐ",
	K: "⋊",
	L: "⅃",
	M: "M",
	N: "И",
	O: "O",
	P: "Գ",
	Q: "Ϙ",
	R: "ᴙ",
	S: "Ꙅ",
	T: "T",
	U: "U",
	V: "V",
	W: "W",
	X: "X",
	Y: "Y",
	Z: "Ƹ",
	"1": "I",
	"2": "S",
	"3": "Ɛ",
	"4": "߀",
	"5": "ट",
	"6": "д",
	"7": "߃",
	"8": "8",
	"9": "୧",
	"0": "0",
};

type Mode = "reverse-chars" | "reverse-words" | "mirror" | "upside-down";

export default function BackwardsTextGenerator() {
	const [inputText, setInputText] = useState("");
	const [outputText, setOutputText] = useState("");
	const [mode, setMode] = useState<Mode>("reverse-chars");

	const transformText = useCallback((text: string, currentMode: Mode) => {
		if (!text) return "";

		switch (currentMode) {
			case "reverse-chars":
				return text.split("").reverse().join("");
			case "reverse-words":
				return text.split(/(\s+)/).reverse().join("");
			case "mirror":
				return text
					.split("")
					.map((char) => MIRROR_MAP[char] || char)
					.reverse()
					.join("");
			case "upside-down":
				return text
					.split("")
					.map((char) => UPSIDE_DOWN_MAP[char] || char)
					.reverse()
					.join("");
			default:
				return text;
		}
	}, []);

	useEffect(() => {
		setOutputText(transformText(inputText, mode));
	}, [inputText, mode, transformText]);

	const copyToClipboard = () => {
		if (!outputText) return;
		navigator.clipboard.writeText(outputText);
		toast.success("Copied to clipboard!");
	};

	const clearText = () => {
		setInputText("");
		toast.info("Cleared text");
	};

	const downloadText = () => {
		if (!outputText) return;
		const element = document.createElement("a");
		const file = new Blob([outputText], { type: "text/plain" });
		element.href = URL.createObjectURL(file);
		element.download = "backwards-text.txt";
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	const modes = [
		{
			id: "reverse-chars",
			label: "Reverse Characters",
			icon: Type,
			description: "Hello → olleH",
		},
		{
			id: "reverse-words",
			label: "Reverse Words",
			icon: List,
			description: "Hello World → World Hello",
		},
		{
			id: "mirror",
			label: "Mirror Effect",
			icon: ArrowLeftRight,
			description: "Visual reflection effect",
		},
		{
			id: "upside-down",
			label: "Upside Down",
			icon: ArrowDownUp,
			description: "Upside down Unicode",
		},
	];

	return (
		<div className="max-w-5xl mx-auto space-y-8 p-4 md:p-0">
			{/* Mode Selection */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
				{modes.map((m) => (
					<button
						key={m.id}
						onClick={() => setMode(m.id as Mode)}
						className={cn(
							"flex flex-col items-center gap-3 p-4 sition-all duration-200 text-center",
							mode === m.id
								? "border-primary bg-primary/5 shadow-sm"
								: "border-border bg-card hover:border-primary/50 hover:bg-muted/50",
						)}
					>
						<div
							className={cn(
								"w-12 h-12 s-center justify-center transition-colors",
								mode === m.id
									? "bg-primary text-primary-foreground"
									: "bg-muted text-muted-foreground",
							)}
						>
							<m.icon className="w-6 h-6" />
						</div>
						<div>
							<div className="font-semibold text-sm">{m.label}</div>
							<div className="text-xs text-muted-foreground mt-1">
								{m.description}
							</div>
						</div>
					</button>
				))}
			</div>

			{/* Input/Output Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Input Area */}
				<div className="space-y-3">
					<div className="flex items-center justify-between px-1">
						<label className="text-sm font-medium text-muted-foreground">
							Input Text
						</label>
						<Button
							variant="ghost"
							size="sm"
							onClick={clearText}
							className="text-muted-foreground hover:text-destructive h-8"
						>
							<Trash2 className="w-4 h-4 mr-2" />
							Clear
						</Button>
					</div>
					<Textarea
						value={inputText}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setInputText(e.target.value)
						}
						placeholder="Type or paste your text here..."
						className="min-h-[350px] text-lg p-6 bg-card border-border/60 focus:border-primary/50 transition-colors resize-none shadow-sm"
					/>
				</div>

				{/* Output Area */}
				<div className="space-y-3">
					<div className="flex items-center justify-between px-1">
						<label className="text-sm font-medium text-muted-foreground">
							Preview Result
						</label>
						<div className="flex gap-2">
							<Button
								variant="outline"
								size="sm"
								onClick={downloadText}
								disabled={!outputText}
								className="h-8 "
							>
								<Download className="w-4 h-4 mr-2" />
								Download
							</Button>
							<Button
								variant="default"
								size="sm"
								onClick={copyToClipboard}
								disabled={!outputText}
								className="h-8 shadow-sm"
							>
								<Copy className="w-4 h-4 mr-2" />
								Copy
							</Button>
						</div>
					</div>
					<div className="relative group">
						<div className="min-h-[350px] w-full p-6 bg-muted/30 border border-border/60 s overflow-auto">
							{outputText || (
								<span className="text-muted-foreground italic">
									Your result will appear here...
								</span>
							)}
						</div>
						{outputText && (
							<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
								<div className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-primary/20">
									{mode.replace("-", " ")}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Statistics Footer */}
			<div className="flex flex-wrap items-center justify-center gap-8 py-6 px-10 bg-card border border-border/50 shadow-sm">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 s-center justify-center text-primary">
						<Type className="w-5 h-5" />
					</div>
					<div className="flex flex-col">
						<span className="text-2xl font-bold leading-none">
							{inputText.length}
						</span>
						<span className="text-xs text-muted-foreground font-medium uppercase tracking-tight">
							Characters
						</span>
					</div>
				</div>
				<div className="w-px h-8 bg-border hidden sm:block" />
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 s-center justify-center text-primary">
						<List className="w-5 h-5" />
					</div>
					<div className="flex flex-col">
						<span className="text-2xl font-bold leading-none">
							{inputText.trim() ? inputText.split(/\s+/).length : 0}
						</span>
						<span className="text-xs text-muted-foreground font-medium uppercase tracking-tight">
							Words
						</span>
					</div>
				</div>
				<div className="w-px h-8 bg-border hidden sm:block" />
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 s-center justify-center text-primary">
						<RefreshCw className="w-5 h-5" />
					</div>
					<div className="flex flex-col">
						<span className="text-2xl font-bold leading-none capitalize">
							{mode.split("-")[0]}
						</span>
						<span className="text-xs text-muted-foreground font-medium uppercase tracking-tight">
							Active Mode
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
