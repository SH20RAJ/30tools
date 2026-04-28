"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy, RefreshCw, Sparkles } from "lucide-react";

const TEMPLATES = {
	bio: {
		label: "Bio Generator",
		placeholders: [
			"✨ {adj} {role} | {hobby} enthusiast | {emoji} Living my best life | DM for collabs 💌",
			"🚀 {role} by day, {hobby} lover by night | {adj} & proud | 📍 {city}",
			"🎯 {adj} {role} | Building the future one {hobby} at a time | {emoji}",
			"{emoji} {adj} soul with a passion for {hobby} | {role} | Coffee addict ☕",
			"💡 {role} | {adj} thinker | {hobby} is my therapy | {emoji} Let's connect!",
			"🌟 Aspiring {role} | {hobby} fanatic | {adj} vibes only | {emoji}",
			"🔥 {adj} {role} | {hobby} addict | Making an impact | {emoji}",
			"✌️ {role} | {adj} & ambitious | Love {hobby} | {emoji} Follow for inspo",
		],
		adjectives: ["Creative", "Ambitious", "Passionate", "Bold", "Fearless", "Driven", "Curious", "Authentic", "Visionary", "Dynamic"],
		roles: ["Developer", "Designer", "Writer", "Creator", "Entrepreneur", "Student", "Artist", "Photographer", "Marketer", "Freelancer"],
		hobbies: ["coding", "photography", "travel", "music", "reading", "cooking", "fitness", "art", "gaming", "hiking"],
		emojis: ["🌟", "💫", "🎨", "🏆", "🌈", "⚡", "🎭", "🎯", "🔮", "🦋"],
		cities: ["NYC", "London", "Tokyo", "Paris", "LA", "Berlin", "Mumbai", "Dubai", "Toronto", "Sydney"],
	},
	poem: {
		label: "Poem Generator",
		templates: [
			"In the {adj} light of {time},\nWhere {noun1} meets the {noun2},\nA whisper of {emotion} fills the air,\nAnd {nature} dances without a care.\n\nThrough {adj2} paths we wander still,\nWith {emotion2} hearts and iron will,\nThe {noun3} speaks of days gone by,\nBeneath the vast and {adj3} sky.",
			"Oh {noun1}, so {adj} and true,\nYour {noun2} shines with morning dew,\nIn gardens where the {nature} grows,\nA {adj2} wind forever blows.\n\nWith {emotion} we hold you near,\nThrough every season, year by year.",
			"The {noun1} of {time} reminds me so,\nOf {adj} days and {nature}'s glow,\nWhen {emotion} was all we knew,\nAnd the world felt {adj2} and new.",
		],
		adjectives: ["golden", "silver", "gentle", "ancient", "eternal", "silent", "radiant", "mystic"],
		adjectives2: ["peaceful", "winding", "hidden", "sacred", "tender", "boundless"],
		adjectives3: ["endless", "starlit", "amber", "crimson", "sapphire"],
		nouns1: ["moonlight", "silence", "memory", "river", "forest", "ocean"],
		nouns2: ["soul", "spirit", "beauty", "grace", "melody", "flame"],
		nouns3: ["wind", "dawn", "shadow", "echo", "tide"],
		emotions: ["love", "wonder", "hope", "joy", "peace", "longing"],
		emotions2: ["grateful", "hopeful", "steadfast", "gentle", "burning"],
		nature: ["wildflowers", "starlight", "raindrops", "sunbeams", "autumn leaves"],
		times: ["dawn", "twilight", "midnight", "sunrise", "dusk"],
	},
	excuse: {
		label: "Excuse Generator",
		excuses: [
			"Sorry, I can't make it — my {pet} accidentally {action} and I need to {fix}.",
			"I would love to, but I just realized I {realization} and now I have to {consequence}.",
			"My {relative} called and apparently {emergency} so I need to {response} ASAP.",
			"I can't — I'm stuck in {location} because {reason}.",
			"I just got a call from my {authority} saying I need to {obligation} by tonight.",
			"I'm so sorry but my {appliance} just {malfunction} and the {professional} can only come {timeframe}.",
			"I would but I accidentally {mistake} and now I need to spend the rest of the day {recovery}.",
		],
		pets: ["cat", "dog", "hamster", "parrot", "goldfish", "turtle"],
		actions: ["locked me out", "ate my keys", "unplugged the router", "hid my shoes", "chewed through the charger"],
		fixes: ["call a locksmith", "find a pet sitter", "sort this out", "take them to the vet"],
		realizations: ["double-booked myself", "forgot to pay my electricity bill", "left the stove on", "signed up for jury duty"],
		consequences: ["reschedule everything", "deal with it immediately", "stay home and wait", "sort out my calendar"],
		relatives: ["mom", "uncle", "cousin", "neighbor", "landlord"],
		emergencies: ["there's a leak in the ceiling", "the power went out", "they need help moving", "they lost their keys"],
		responses: ["head over there", "call the plumber", "drive across town", "figure things out"],
		locations: ["traffic", "the parking lot", "the wrong side of town", "a meeting that won't end"],
		reasons: ["there's an accident on the highway", "my car won't start", "the GPS sent me the wrong way"],
		authorities: ["boss", "doctor", "accountant", "professor"],
		obligations: ["submit paperwork", "reschedule an appointment", "finish a report", "attend a mandatory session"],
		appliances: ["washing machine", "dishwasher", "AC unit", "fridge", "water heater"],
		malfunctions: ["started making weird noises", "flooded the kitchen", "stopped working", "caught fire (small)"],
		professionals: ["repairman", "technician", "plumber", "electrician"],
		timeframes: ["right now", "in the next 30 minutes", "today between 2-5pm"],
		mistakes: ["deleted all my files", "locked my keys in my car", "spilled coffee on my laptop"],
		recoveries: ["recovering data", "waiting for roadside assistance", "trying to fix things", "damage control"],
	},
	"business-name": {
		label: "Business Name Generator",
		patterns: [
			"{prefix}{suffix}",
			"{word1}{word2}",
			"{adj}{noun}",
			"{prefix} {noun}",
			"{word1} & {word2}",
			"{adj}{suffix}",
			"The {adj} {noun}",
			"{noun}{suffix}",
		],
		prefixes: ["Nova", "Apex", "Zen", "Flux", "Vibe", "Spark", "Cloud", "Peak", "Edge", "Core", "Bolt", "Nex", "Lumina", "Prism"],
		suffixes: ["ly", "ify", "Hub", "Lab", "Works", "Forge", "Stack", "Base", "Craft", "ware", "io", "ology", "ment"],
		words: ["Bright", "Swift", "Bold", "True", "Blue", "Flow", "Rise", "Sync", "Pixel", "Wave", "Mint", "Sage"],
		adjectives: ["Smart", "Fresh", "Bright", "Bold", "Swift", "Prime", "Elite", "Agile", "Nimble", "Grand"],
		nouns: ["Studios", "Labs", "Works", "Solutions", "Ventures", "Digital", "Media", "Systems", "Group", "Co"],
	},
};

function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function generateBio() {
	const t = TEMPLATES.bio;
	let bio = pick(t.placeholders);
	bio = bio.replace("{adj}", pick(t.adjectives));
	bio = bio.replace("{role}", pick(t.roles));
	bio = bio.replace("{hobby}", pick(t.hobbies));
	bio = bio.replace("{emoji}", pick(t.emojis));
	bio = bio.replace("{city}", pick(t.cities));
	return bio;
}

function generatePoem() {
	const t = TEMPLATES.poem;
	let poem = pick(t.templates);
	poem = poem.replace(/{adj}/g, pick(t.adjectives));
	poem = poem.replace(/{adj2}/g, pick(t.adjectives2));
	poem = poem.replace(/{adj3}/g, pick(t.adjectives3));
	poem = poem.replace(/{noun1}/g, pick(t.nouns1));
	poem = poem.replace(/{noun2}/g, pick(t.nouns2));
	poem = poem.replace(/{noun3}/g, pick(t.nouns3));
	poem = poem.replace(/{emotion}/g, pick(t.emotions));
	poem = poem.replace(/{emotion2}/g, pick(t.emotions2));
	poem = poem.replace(/{nature}/g, pick(t.nature));
	poem = poem.replace(/{time}/g, pick(t.times));
	return poem;
}

function generateExcuse() {
	const t = TEMPLATES.excuse;
	let excuse = pick(t.excuses);
	excuse = excuse.replace("{pet}", pick(t.pets));
	excuse = excuse.replace("{action}", pick(t.actions));
	excuse = excuse.replace("{fix}", pick(t.fixes));
	excuse = excuse.replace("{realization}", pick(t.realizations));
	excuse = excuse.replace("{consequence}", pick(t.consequences));
	excuse = excuse.replace("{relative}", pick(t.relatives));
	excuse = excuse.replace("{emergency}", pick(t.emergencies));
	excuse = excuse.replace("{response}", pick(t.responses));
	excuse = excuse.replace("{location}", pick(t.locations));
	excuse = excuse.replace("{reason}", pick(t.reasons));
	excuse = excuse.replace("{authority}", pick(t.authorities));
	excuse = excuse.replace("{obligation}", pick(t.obligations));
	excuse = excuse.replace("{appliance}", pick(t.appliances));
	excuse = excuse.replace("{malfunction}", pick(t.malfunctions));
	excuse = excuse.replace("{professional}", pick(t.professionals));
	excuse = excuse.replace("{timeframe}", pick(t.timeframes));
	excuse = excuse.replace("{mistake}", pick(t.mistakes));
	excuse = excuse.replace("{recovery}", pick(t.recoveries));
	return excuse;
}

function generateBusinessName() {
	const t = TEMPLATES["business-name"];
	let name = pick(t.patterns);
	name = name.replace("{prefix}", pick(t.prefixes));
	name = name.replace("{suffix}", pick(t.suffixes));
	name = name.replace("{word1}", pick(t.words));
	name = name.replace("{word2}", pick(t.words));
	name = name.replace("{adj}", pick(t.adjectives));
	name = name.replace("{noun}", pick(t.nouns));
	return name;
}

const GENERATOR_MAP = {
	"bio-generator": { fn: generateBio, count: 5, label: "Generate Bios" },
	"business-name-generator": { fn: generateBusinessName, count: 10, label: "Generate Names" },
	"ai-poem-generator": { fn: generatePoem, count: 1, label: "Generate Poem" },
	"poetry-generator": { fn: generatePoem, count: 1, label: "Generate Poem" },
	"excuse-generator": { fn: generateExcuse, count: 3, label: "Generate Excuses" },
};

export default function TextGeneratorTool({ toolId = "bio-generator" }) {
	const config = GENERATOR_MAP[toolId] || GENERATOR_MAP["bio-generator"];
	const [results, setResults] = useState([]);
	const [topic, setTopic] = useState("");

	const generate = useCallback(() => {
		const items = Array.from({ length: config.count }, () => config.fn());
		setResults(items);
		toast.success("Generated!");
	}, [config]);

	const copyAll = () => {
		navigator.clipboard.writeText(results.join("\n\n---\n\n"));
		toast.success("Copied to clipboard");
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<Sparkles className="h-5 w-5 text-primary" />
					{config.label}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{(toolId === "bio-generator" || toolId === "business-name-generator") && (
					<Input
						placeholder={toolId === "bio-generator" ? "Optional: your role or niche..." : "Optional: your industry..."}
						value={topic}
						onChange={(e) => setTopic(e.target.value)}
					/>
				)}
				<div className="flex gap-2">
					<Button onClick={generate} className="gap-2">
						<RefreshCw className="h-4 w-4" />
						{config.label}
					</Button>
					{results.length > 0 && (
						<Button variant="outline" onClick={copyAll} className="gap-2">
							<Copy className="h-4 w-4" />
							Copy All
						</Button>
					)}
				</div>
				{results.length > 0 && (
					<div className="space-y-3">
						{results.map((result, i) => (
							<div
								key={i}
								className="p-4 rounded-lg bg-muted/40 border border-border/50 cursor-pointer hover:bg-muted/60 transition-colors"
								onClick={() => {
									navigator.clipboard.writeText(result);
									toast.success("Copied!");
								}}
							>
								<pre className="whitespace-pre-wrap text-sm font-sans leading-relaxed">{result}</pre>
							</div>
						))}
					</div>
				)}
				{results.length === 0 && (
					<div className="text-center py-12 text-muted-foreground">
						<Sparkles className="h-12 w-12 mx-auto mb-4 opacity-30" />
						<p>Click the button above to generate content instantly.</p>
						<p className="text-xs mt-2 opacity-60">100% browser-based — no AI API calls, no data sent anywhere.</p>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
