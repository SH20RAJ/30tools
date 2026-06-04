"use client";

import { Copy, FileText, RefreshCw } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

const WORD_VARIATIONS = {
	classic: {
		label: "Classic Lorem",
		description: "Traditional placeholder copy",
		words: [
			"lorem",
			"ipsum",
			"dolor",
			"sit",
			"amet",
			"consectetur",
			"adipiscing",
			"elit",
			"sed",
			"do",
			"eiusmod",
			"tempor",
			"incididunt",
			"ut",
			"labore",
			"et",
			"dolore",
			"magna",
			"aliqua",
			"ut",
			"enim",
			"ad",
			"minim",
			"veniam",
			"quis",
			"nostrud",
			"exercitation",
			"ullamco",
			"laboris",
			"nisi",
			"ut",
			"aliquip",
			"ex",
			"ea",
			"commodo",
			"consequat",
			"duis",
			"aute",
			"irure",
			"dolor",
			"in",
			"reprehenderit",
			"in",
			"voluptate",
			"velit",
			"esse",
			"cillum",
			"dolore",
			"eu",
			"fugiat",
			"nulla",
			"pariatur",
			"excepteur",
			"sint",
			"occaecat",
			"cupidatat",
			"non",
			"proident",
			"sunt",
			"in",
			"culpa",
			"qui",
			"officia",
			"deserunt",
			"mollit",
			"anim",
			"id",
			"est",
			"laborum",
		],
	},
	tech: {
		label: "Tech Ipsum",
		description: "Product and engineering filler",
		words: [
			"deploy",
			"cluster",
			"schema",
			"runtime",
			"pipeline",
			"endpoint",
			"cache",
			"token",
			"payload",
			"request",
			"response",
			"gateway",
			"service",
			"module",
			"adapter",
			"queue",
			"event",
			"worker",
			"index",
			"bundle",
			"latency",
			"throughput",
			"session",
			"component",
			"interface",
			"protocol",
			"webhook",
			"repository",
			"commit",
			"release",
		],
	},
	startup: {
		label: "Startup Ipsum",
		description: "Founder-friendly product copy",
		words: [
			"launch",
			"iterate",
			"market",
			"growth",
			"traction",
			"customer",
			"segment",
			"insight",
			"workflow",
			"platform",
			"onboarding",
			"conversion",
			"retention",
			"metrics",
			"roadmap",
			"prototype",
			"validation",
			"feedback",
			"ecosystem",
			"revenue",
			"strategy",
			"partnership",
			"funnel",
			"experience",
			"automation",
			"dashboard",
			"alignment",
			"scale",
			"velocity",
			"outcome",
		],
	},
	hipster: {
		label: "Hipster Ipsum",
		description: "Playful lifestyle placeholder text",
		words: [
			"artisan",
			"pour-over",
			"vinyl",
			"bespoke",
			"succulent",
			"cold-brew",
			"denim",
			"letterpress",
			"microdose",
			"craft",
			"brunch",
			"polaroid",
			"fixie",
			"locavore",
			"banh-mi",
			"slow-carb",
			"organic",
			"mustache",
			"kombucha",
			"chia",
			"brooklyn",
			"distillery",
			"flannel",
			"wayfarers",
			"skateboard",
			"bodega",
			"taiyaki",
			"vaporware",
			"selvage",
			"turmeric",
		],
	},
	pirate: {
		label: "Pirate Ipsum",
		description: "Nautical placeholder text",
		words: [
			"ahoy",
			"matey",
			"plunder",
			"cutlass",
			"anchor",
			"deck",
			"harbor",
			"galley",
			"crow",
			"mast",
			"voyage",
			"parley",
			"doubloon",
			"galleon",
			"buccaneer",
			"seafarer",
			"jolly",
			"roger",
			"tide",
			"rum",
			"booty",
			"keelhaul",
			"maroon",
			"sail",
			"swab",
			"lagoon",
			"treasure",
			"cannon",
			"compass",
			"island",
		],
	},
};

const VARIATION_OPTIONS = Object.entries(WORD_VARIATIONS).map(
	([value, config]) => ({
		value,
		...config,
	}),
);

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const DEFAULT_OPTIONS = {
	count: 3,
	type: "paragraphs",
	variation: "classic",
	startWithLorem: true,
};

const buildLoremIpsum = ({ count, type, variation, startWithLorem }) => {
	const selectedWords =
		WORD_VARIATIONS[variation]?.words ?? WORD_VARIATIONS.classic.words;
	const shouldStartWithLorem = variation === "classic" && startWithLorem;
	const result = [];

	if (type === "words") {
		for (let i = 0; i < count; i++) {
			result.push(selectedWords[i % selectedWords.length]);
		}
		let text = result.join(" ");
		if (shouldStartWithLorem && !text.toLowerCase().startsWith("lorem ipsum")) {
			text = `Lorem ipsum ${text}`;
		}
		return `${capitalize(text)}.`;
	}

	const sentencesPerPara = 5;
	const numSentences = type === "sentences" ? count : count * sentencesPerPara;

	const sentences = [];
	for (let i = 0; i < numSentences; i++) {
		const sentenceLength = Math.floor(Math.random() * 10) + 5;
		const sentenceWords = [];
		for (let j = 0; j < sentenceLength; j++) {
			const word =
				selectedWords[Math.floor(Math.random() * selectedWords.length)];
			sentenceWords.push(word);
		}
		const sentenceStr = `${capitalize(sentenceWords.join(" "))}.`;
		sentences.push(sentenceStr);
	}

	if (type === "sentences") {
		let text = sentences.join(" ");
		if (shouldStartWithLorem && !text.toLowerCase().startsWith("lorem ipsum")) {
			// Force replace first two words
			text = `Lorem ipsum ${text.split(" ").slice(2).join(" ")}`;
		}
		return text;
	}

	const paras = [];
	for (let i = 0; i < sentences.length; i += sentencesPerPara) {
		paras.push(sentences.slice(i, i + sentencesPerPara).join(" "));
	}
	let text = paras.join("\n\n");
	if (shouldStartWithLorem && !text.toLowerCase().startsWith("lorem ipsum")) {
		text = `Lorem ipsum ${text.split(" ").slice(2).join(" ")}`;
	}
	return text;
};

export default function LoremIpsumGeneratorTool() {
	const [options, setOptions] = useState(DEFAULT_OPTIONS);
	const [generatedText, setGeneratedText] = useState(() =>
		buildLoremIpsum(DEFAULT_OPTIONS),
	);

	const { count, type, variation, startWithLorem } = options;

	const updateOptions = (nextOptions) => {
		setOptions(nextOptions);
		setGeneratedText(buildLoremIpsum(nextOptions));
	};

	const generate = React.useCallback(() => {
		setGeneratedText(buildLoremIpsum(options));
	}, [options]);

	const copyToClipboard = () => {
		if (!generatedText) return;
		navigator.clipboard.writeText(generatedText);
		toast.success("Text copied to clipboard!");
	};

	return (
		<Card className="w-full max-w-4xl mx-auto shadow-lg">
			<CardHeader className="bg-muted/30">
				<CardTitle className="flex items-center gap-2">
					<FileText className="h-6 w-6 text-primary" />
					Lorem Ipsum Generator
				</CardTitle>
				<CardDescription>
					Generate placeholder text for your designs and layouts.
				</CardDescription>
			</CardHeader>
			<CardContent className="p-6 space-y-6">
				{/* Controls */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="space-y-4">
						<Label className="text-base font-semibold">Generate</Label>
						<RadioGroup
							defaultValue="paragraphs"
							value={type}
							onValueChange={(nextType) =>
								updateOptions({ ...options, type: nextType })
							}
							className="flex flex-col space-y-2"
						>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="paragraphs" id="paragraphs" />
								<Label htmlFor="paragraphs">Paragraphs</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="sentences" id="sentences" />
								<Label htmlFor="sentences">Sentences</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="words" id="words" />
								<Label htmlFor="words">Words</Label>
							</div>
						</RadioGroup>
					</div>

					<div className="space-y-4">
						<Label className="text-base font-semibold">Style</Label>
						<Select
							value={variation}
							onValueChange={(nextVariation) =>
								updateOptions({ ...options, variation: nextVariation })
							}
						>
							<SelectTrigger className="w-full">
								<span>{WORD_VARIATIONS[variation].label}</span>
							</SelectTrigger>
							<SelectContent>
								{VARIATION_OPTIONS.map((option) => (
									<SelectItem key={option.value} value={option.value}>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<p className="text-sm text-muted-foreground">
							{WORD_VARIATIONS[variation].description}
						</p>
					</div>

					<div className="space-y-6">
						<div className="space-y-4">
							<Label className="text-base font-semibold">Count: {count}</Label>
							<Slider
								value={[count]}
								onValueChange={(val) =>
									updateOptions({ ...options, count: val[0] })
								}
								min={1}
								max={type === "words" ? 100 : 20}
								step={1}
							/>
						</div>

						<div className="flex items-center space-x-2">
							<Checkbox
								id="startLorem"
								checked={startWithLorem}
								onCheckedChange={(checked) =>
									updateOptions({
										...options,
										startWithLorem: Boolean(checked),
									})
								}
								disabled={variation !== "classic"}
							/>
							<Label htmlFor="startLorem">Start with "Lorem ipsum..."</Label>
						</div>
					</div>
				</div>

				{/* Output */}
				<div className="space-y-3 pt-6 border-t">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<h3 className="text-lg font-semibold">Generated Text</h3>
						<div className="grid grid-cols-2 gap-2 sm:flex">
							<Button
								variant="outline"
								size="sm"
								onClick={generate}
								className="w-full sm:w-auto"
							>
								<RefreshCw className="mr-2 h-4 w-4" /> Regenerate
							</Button>
							<Button
								onClick={copyToClipboard}
								size="sm"
								className="w-full sm:w-auto"
							>
								<Copy className="mr-2 h-4 w-4" /> Copy Text
							</Button>
						</div>
					</div>

					<Textarea
						value={generatedText}
						readOnly
						className="min-h-[300px] font-serif text-lg leading-relaxed resize-none bg-secondary/20"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
