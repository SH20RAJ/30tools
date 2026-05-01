"use client";

import {
	ArrowLeftIcon,
	Clock,
	CopyIcon,
	DownloadIcon,
	HeartIcon,
	History,
	InfoIcon,
	MusicIcon,
	RefreshCwIcon,
	Settings,
	Sparkles,
	Star,
	TrashIcon,
	Wand2,
	Mic2,
	FileAudio,
	Zap,
	BadgePercent,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { getRouteById } from "@/lib/tools";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const STRUCTURE_TAGS = [
	"[Intro]","[Verse]","[Pre Chorus]","[Chorus]","[Interlude]",
	"[Bridge]","[Outro]","[Post Chorus]","[Transition]","[Break]",
	"[Hook]","[Build Up]","[Inst]","[Solo]",
];

const EXAMPLE_PROMPTS = [
	{ category: "Pop", prompts: [
		"A cheerful pop song about a summer road trip with friends, upbeat tempo, bright synths",
		"An emotional pop ballad about lost love, piano-driven, female vocals, 80 BPM",
		"A catchy K-pop style dance track with energetic beats and electronic drops",
	]},
	{ category: "Electronic", prompts: [
		"An upbeat electronic dance track with a catchy synth melody and driving beat, 128 BPM",
		"Ambient lo-fi chillhop with vinyl crackle and mellow piano chords for studying",
		"Dark techno track with heavy bass, industrial sounds, and atmospheric pads",
	]},
	{ category: "Rock & Metal", prompts: [
		"A classic rock anthem with powerful electric guitars, drums, and raspy male vocals",
		"A melodic metalcore track with clean vocals, heavy breakdowns, and orchestral elements",
		"An acoustic indie rock song with fingerpicked guitar, soft male vocals, rainy mood",
	]},
	{ category: "Cinematic", prompts: [
		"An orchestral cinematic score building to an epic crescendo with full symphony",
		"A mysterious dark fantasy soundtrack with haunting choirs and deep drums",
		"A triumphant hero theme with brass section, strings, and powerful percussion",
	]},
];

const EXAMPLE_LYRICS = `[Verse]\nWalking down a dusty road\nWith the sunset painting gold\nEvery step a story told\nOf the places I call home\n\n[Chorus]\nCarry me away tonight\nUnder stars so burning bright\nEvery wrong will turn to right\nIn the morning's golden light`;

export default function AIMusicGeneratorTool() {
	const [prompt, setPrompt] = useState("");
	const [lyrics, setLyrics] = useState("");
	const [audioData, setAudioData] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [copied, setCopied] = useState(false);
	const [history, setHistory] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [activeTab, setActiveTab] = useState("generator");
	const [generationProgress, setGenerationProgress] = useState(0);

	const [lyricsOptimizer, setLyricsOptimizer] = useState(false);
	const [isInstrumental, setIsInstrumental] = useState(false);
	const [sampleRate, setSampleRate] = useState("44100");
	const [bitrate, setBitrate] = useState("256");
	const [format, setFormat] = useState("wav");

	const audioRef = useRef(null);

	useEffect(() => {
		const savedHistory = localStorage.getItem("ai-music-history");
		const savedFavorites = localStorage.getItem("ai-music-favorites");
		if (savedHistory) setHistory(JSON.parse(savedHistory));
		if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
	}, []);

	const saveToHistory = useCallback((musicData) => {
		setHistory((prev) => {
			const newHistory = [musicData, ...prev.slice(0, 49)];
			localStorage.setItem("ai-music-history", JSON.stringify(newHistory));
			return newHistory;
		});
	}, []);

	const addToFavorites = useCallback((musicData) => {
		setFavorites((prev) => {
			if (prev.find((fav) => fav.id === musicData.id)) {
				toast.info("Already in favorites");
				return prev;
			}
			const newFavorites = [musicData, ...prev];
			localStorage.setItem("ai-music-favorites", JSON.stringify(newFavorites));
			toast.success("Added to favorites");
			return newFavorites;
		});
	}, []);

	const removeFromFavorites = useCallback((id) => {
		setFavorites((prev) => {
			const newFavorites = prev.filter((fav) => fav.id !== id);
			localStorage.setItem("ai-music-favorites", JSON.stringify(newFavorites));
			toast.success("Removed from favorites");
			return newFavorites;
		});
	}, []);

	const clearHistory = () => {
		if (window.confirm("Are you sure you want to clear all history?")) {
			setHistory([]);
			localStorage.removeItem("ai-music-history");
			toast.success("History cleared");
		}
	};

	const simulateProgress = useCallback(() => {
		setGenerationProgress(0);
		const interval = setInterval(() => {
			setGenerationProgress((prev) => {
				if (prev >= 90) { clearInterval(interval); return 90; }
				return prev + Math.random() * 12;
			});
		}, 600);
		return interval;
	}, []);

	const insertTag = (tag) => {
		const textarea = document.getElementById("lyrics-input");
		if (!textarea) return;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const newLyrics = lyrics.substring(0, start) + tag + "\n" + lyrics.substring(end);
		setLyrics(newLyrics);
		setTimeout(() => { textarea.focus(); textarea.setSelectionRange(start + tag.length + 1, start + tag.length + 1); }, 0);
	};

	const handleGenerate = async () => {
		if (!prompt.trim()) { toast.error("Please enter a style prompt"); return; }
		if (!isInstrumental && !lyricsOptimizer && !lyrics.trim()) {
			toast.error("Please enter lyrics, enable Lyrics Optimizer, or turn on Instrumental Mode");
			return;
		}
		setLoading(true); setError(""); setAudioData(""); setGenerationProgress(0);
		const progressInterval = simulateProgress();
		try {
			const response = await fetch("/api/ai/music", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					prompt: prompt.trim(),
					...(lyrics.trim() && !lyricsOptimizer ? { lyrics: lyrics.trim() } : {}),
					lyrics_optimizer: lyricsOptimizer,
					is_instrumental: isInstrumental,
					sample_rate: parseInt(sampleRate),
					bitrate: parseInt(bitrate),
					format,
				}),
			});
			const data = await response.json();
			if (!response.ok || data.error) throw new Error(data.error || "Generation failed");
			setAudioData(data.audio);
			setGenerationProgress(100);
			saveToHistory({
				id: Date.now(), audio: data.audio, prompt: prompt.trim(), lyrics: lyrics.trim(),
				lyricsOptimizer, isInstrumental, sampleRate, bitrate, format,
				timestamp: new Date().toISOString(),
			});
			toast.success("Music generated successfully!");
		} catch (err) {
			setError(err.message || "Failed to generate music. Please try again.");
			toast.error("Generation failed: " + (err.message || "Unknown error"));
		} finally {
			clearInterval(progressInterval); setLoading(false); setGenerationProgress(0);
		}
	};

	const handleDownload = () => {
		if (!audioData) return;
		try {
			const base64 = audioData.split(",")[1];
			const byteCharacters = atob(base64);
			const byteNumbers = new Array(byteCharacters.length);
			for (let i = 0; i < byteCharacters.length; i++) byteNumbers[i] = byteCharacters.charCodeAt(i);
			const byteArray = new Uint8Array(byteNumbers);
			const blob = new Blob([byteArray], { type: `audio/${format}` });
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url; a.download = `ai-music-${Date.now()}.${format}`;
			document.body.appendChild(a); a.click();
			window.URL.revokeObjectURL(url); document.body.removeChild(a);
			toast.success("Music downloaded");
		} catch (e) { toast.error("Download failed"); }
	};

	const loadPrompt = (selectedPrompt) => setPrompt(selectedPrompt);

	const loadFromHistory = (item) => {
		setPrompt(item.prompt); setLyrics(item.lyrics || "");
		setLyricsOptimizer(item.lyricsOptimizer); setIsInstrumental(item.isInstrumental);
		setSampleRate(item.sampleRate || "44100"); setBitrate(item.bitrate || "256");
		setFormat(item.format || "wav"); setAudioData(item.audio); setActiveTab("generator");
	};

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8 max-w-7xl">
				<div className="mb-8">
					<Link href={getRouteById("other-tools")} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
						<ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Generator Tools
					</Link>
					<div className="space-y-4 mb-8">
						<div className="flex items-start gap-4">
							<div className="p-3 border"><MusicIcon className="h-6 w-6" /></div>
							<div className="space-y-2">
								<div className="flex items-center gap-3 flex-wrap">
									<h2 className="text-4xl font-bold tracking-tight">AI Music Generator</h2>
									<Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-xs px-2 py-0.5 animate-pulse">Free This Week</Badge>
								</div>
								<p className="text-xl text-muted-foreground max-w-3xl">
									Create full-length songs with vocals and instrumentation from text prompts using MiniMax Music 2.6 on Cloudflare AI. Royalty-free AI music generation with studio-grade quality.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap gap-2">
							<Badge variant="secondary" className="gap-1"><Sparkles className="h-3 w-3" />AI-Powered (MiniMax 2.6)</Badge>
							<Badge variant="secondary" className="gap-1"><Mic2 className="h-3 w-3" />Vocals + Instruments</Badge>
							<Badge variant="secondary" className="gap-1"><FileAudio className="h-3 w-3" />Studio-Grade Audio</Badge>
							<Badge variant="secondary" className="gap-1"><DownloadIcon className="h-3 w-3" />MP3 & WAV Export</Badge>
							<Badge variant="secondary" className="gap-1"><Zap className="h-3 w-3" />Free on Cloudflare</Badge>
						</div>
					</div>
					<Alert className="mb-8 border-amber-500/30 bg-amber-500/5">
						<InfoIcon className="h-4 w-4 text-amber-500" />
						<AlertDescription className="text-amber-700 dark:text-amber-300">
							<strong>Free This Week Only!</strong> MiniMax Music 2.6 is powered by Cloudflare Workers AI and is completely free to use this week. Generate full-length songs with vocals or instrumentals from text prompts. No signup required — start creating royalty-free music instantly.
						</AlertDescription>
					</Alert>
				</div>

				<Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="generator" className="gap-2"><Wand2 className="h-4 w-4" />Generator</TabsTrigger>
						<TabsTrigger value="history" className="gap-2"><History className="h-4 w-4" />History ({history.length})</TabsTrigger>
						<TabsTrigger value="favorites" className="gap-2"><HeartIcon className="h-4 w-4" />Favorites ({favorites.length})</TabsTrigger>
					</TabsList>

					<TabsContent value="generator" className="space-y-6">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<div className="lg:col-span-1 space-y-6">
								<Card>
									<CardHeader>
										<CardTitle className="flex items-center gap-2"><Settings className="h-5 w-5" />Generation Settings</CardTitle>
										<CardDescription>Configure your AI music generation parameters</CardDescription>
									</CardHeader>
									<CardContent className="space-y-6">
										<div className="space-y-2">
											<Label htmlFor="prompt">Style Prompt</Label>
											<Textarea id="prompt" placeholder="An upbeat electronic dance track with a catchy synth melody and driving beat, 128 BPM..." value={prompt} onChange={(e) => setPrompt(e.target.value)} disabled={loading} className="min-h-[100px] resize-none" />
											<p className="text-xs text-muted-foreground">Describe genre, mood, vocal style, tempo, and instruments. Be specific for best results.</p>
										</div>
										<Separator />
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label className="text-sm">Instrumental Mode</Label>
													<p className="text-xs text-muted-foreground">Generate music without vocals</p>
												</div>
												<Switch checked={isInstrumental} onCheckedChange={setIsInstrumental} disabled={loading} />
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label className="text-sm">Lyrics Optimizer</Label>
													<p className="text-xs text-muted-foreground">Auto-write lyrics from your prompt</p>
												</div>
												<Switch checked={lyricsOptimizer} onCheckedChange={setLyricsOptimizer} disabled={loading || isInstrumental} />
											</div>
										</div>
										{!isInstrumental && (
											<>
												<Separator />
												<div className="space-y-2">
													<Label htmlFor="lyrics-input">Lyrics (optional)</Label>
													<Textarea id="lyrics-input" placeholder={EXAMPLE_LYRICS} value={lyrics} onChange={(e) => setLyrics(e.target.value)} disabled={loading || lyricsOptimizer} className="min-h-[160px] resize-none font-mono text-sm" />
													<p className="text-xs text-muted-foreground">Use \n to separate lines. Add structure tags below for arrangement control.</p>
													<div className="flex flex-wrap gap-1.5 pt-1">
														{STRUCTURE_TAGS.map((tag) => (
															<Button key={tag} variant="outline" size="sm" className="text-[10px] h-6 px-2 py-0" onClick={() => insertTag(tag)} disabled={loading || lyricsOptimizer}>{tag}</Button>
														))}
													</div>
												</div>
											</>
										)}
										<Separator />
										<div className="space-y-3">
											<Label className="text-sm font-semibold">Audio Quality</Label>
											<div className="grid grid-cols-3 gap-3">
												<div className="space-y-1">
													<Label className="text-xs">Sample Rate</Label>
													<Select value={sampleRate} onValueChange={setSampleRate} disabled={loading}>
														<SelectTrigger className="text-xs"><SelectValue /></SelectTrigger>
														<SelectContent>
															<SelectItem value="16000">16 kHz</SelectItem>
															<SelectItem value="24000">24 kHz</SelectItem>
															<SelectItem value="32000">32 kHz</SelectItem>
															<SelectItem value="44100">44.1 kHz</SelectItem>
														</SelectContent>
													</Select>
												</div>
												<div className="space-y-1">
													<Label className="text-xs">Bitrate</Label>
													<Select value={bitrate} onValueChange={setBitrate} disabled={loading}>
														<SelectTrigger className="text-xs"><SelectValue /></SelectTrigger>
														<SelectContent>
															<SelectItem value="32">32 kbps</SelectItem>
															<SelectItem value="64">64 kbps</SelectItem>
															<SelectItem value="128">128 kbps</SelectItem>
															<SelectItem value="256">256 kbps</SelectItem>
														</SelectContent>
													</Select>
												</div>
												<div className="space-y-1">
													<Label className="text-xs">Format</Label>
													<Select value={format} onValueChange={setFormat} disabled={loading}>
														<SelectTrigger className="text-xs"><SelectValue /></SelectTrigger>
														<SelectContent>
															<SelectItem value="mp3">MP3</SelectItem>
															<SelectItem value="wav">WAV</SelectItem>
														</SelectContent>
													</Select>
												</div>
											</div>
										</div>
										<Separator />
										<Button onClick={handleGenerate} disabled={loading || !prompt.trim() || (!isInstrumental && !lyricsOptimizer && !lyrics.trim())} className="w-full" size="lg">
											{loading ? (<><RefreshCwIcon className="animate-spin h-4 w-4 mr-2" />Generating...</>) : (<><Sparkles className="h-4 w-4 mr-2" />Generate AI Music</>)}
										</Button>
										{loading && (
											<div className="space-y-2">
												<div className="flex justify-between text-sm"><span>Composing your track...</span><span>{Math.round(generationProgress)}%</span></div>
												<Progress value={generationProgress} className="h-2" />
												<p className="text-xs text-muted-foreground">This may take 10-30 seconds. MiniMax Music 2.6 is crafting your song.</p>
											</div>
										)}
										{error && (<Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>)}
									</CardContent>
								</Card>
								<Card className="border-amber-500/20 bg-amber-500/5">
									<CardHeader className="pb-3">
										<CardTitle className="text-sm flex items-center gap-2"><BadgePercent className="h-4 w-4 text-amber-500" />Free on Cloudflare This Week</CardTitle>
									</CardHeader>
									<CardContent className="text-xs text-muted-foreground space-y-2">
										<p>MiniMax Music 2.6 is available for free on Cloudflare Workers AI this week. Generate unlimited songs with no cost.</p>
										<p>All generated music is royalty-free and cleared for commercial use in videos, podcasts, games, and ads.</p>
									</CardContent>
								</Card>
							</div>

							<div className="lg:col-span-2 space-y-6">
								<Card>
									<CardHeader>
										<CardTitle className="flex items-center gap-2"><MusicIcon className="h-5 w-5" />Generated Track</CardTitle>
										<CardDescription>Your AI-generated music will appear here with a built-in player</CardDescription>
									</CardHeader>
									<CardContent>
										{audioData ? (
											<div className="space-y-6">
												<audio ref={audioRef} controls className="w-full" src={audioData} />
												<div className="flex flex-wrap gap-3">
													<Button onClick={handleDownload} className="gap-2"><DownloadIcon className="h-4 w-4" />Download {format.toUpperCase()}</Button>
													<Button onClick={() => { navigator.clipboard.writeText(audioData); setCopied(true); setTimeout(() => setCopied(false), 2000); toast.success("Audio data copied"); }} variant="outline" className="gap-2"><CopyIcon className="h-4 w-4" />{copied ? "Copied!" : "Copy Data"}</Button>
													<Button onClick={() => addToFavorites({ id: Date.now(), audio: audioData, prompt, lyrics, lyricsOptimizer, isInstrumental, sampleRate, bitrate, format, timestamp: new Date().toISOString() })} variant="outline" className="gap-2"><HeartIcon className="h-4 w-4" />Add to Favorites</Button>
												</div>
												<div className="bg-muted/50 p-4 space-y-3 rounded-lg">
													<div><p className="text-sm font-medium mb-1">Prompt:</p><p className="text-sm text-muted-foreground">{prompt}</p></div>
													<div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
														<span className="flex items-center gap-1"><FileAudio className="h-3 w-3" />{sampleRate} Hz / {bitrate} kbps</span>
														<span className="flex items-center gap-1"><MusicIcon className="h-3 w-3" />{format.toUpperCase()}</span>
														{isInstrumental && <Badge variant="outline" className="text-[10px]">Instrumental</Badge>}
														{lyricsOptimizer && <Badge variant="outline" className="text-[10px]">Auto Lyrics</Badge>}
													</div>
												</div>
											</div>
										) : (
											<div className="text-center py-20">
												<MusicIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
												<h3 className="text-lg font-medium mb-2">Ready to Compose</h3>
												<p className="text-muted-foreground mb-4">Describe your song and let MiniMax 2.6 bring it to life</p>
												<p className="text-sm text-muted-foreground">Generated tracks appear here with a built-in audio player</p>
											</div>
										)}
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle className="flex items-center gap-2"><Star className="h-5 w-5" />Example Prompts</CardTitle>
										<CardDescription>Get inspired with these example style prompts</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{EXAMPLE_PROMPTS.map((category, idx) => (
												<div key={idx} className="space-y-2">
													<h4 className="font-medium text-sm">{category.category}</h4>
													<div className="space-y-1">
														{category.prompts.map((example, index) => (
															<button key={index} onClick={() => loadPrompt(example)} className="w-full text-left p-2 text-xs bg-muted hover:bg-muted/80 rounded transition-colors" disabled={loading}>{example}</button>
														))}
													</div>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="history">
						<Card>
							<CardHeader>
								<div className="flex items-center justify-between">
									<div>
										<CardTitle className="flex items-center gap-2"><History className="h-5 w-5" />Generation History</CardTitle>
										<CardDescription>View and reload your previously generated tracks</CardDescription>
									</div>
									{history.length > 0 && <Button onClick={clearHistory} variant="outline" size="sm" className="gap-2"><TrashIcon className="h-4 w-4" />Clear All</Button>}
								</div>
							</CardHeader>
							<CardContent>
								{history.length === 0 ? (
									<div className="text-center py-12">
										<History className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
										<h3 className="text-lg font-medium mb-2">No History Yet</h3>
										<p className="text-muted-foreground">Your generated tracks will appear here for easy access</p>
									</div>
								) : (
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
										{history.map((item) => (
											<div key={item.id} className="group border shadow-md transition-all cursor-pointer p-3" onClick={() => loadFromHistory(item)}>
												<div className="flex items-center gap-2 mb-2">
													<MusicIcon className="h-4 w-4 text-muted-foreground" />
													<p className="text-sm font-medium line-clamp-2">{item.prompt}</p>
												</div>
												<div className="flex justify-between items-center text-xs text-muted-foreground">
													<span className="flex items-center gap-1"><Clock className="h-3 w-3" />{new Date(item.timestamp).toLocaleDateString()}</span>
													{item.isInstrumental && <Badge variant="outline" className="text-[10px]">Instrumental</Badge>}
												</div>
											</div>
										))}
									</div>
									)}
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="favorites">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2"><HeartIcon className="h-5 w-5 text-destructive" />Favorite Tracks</CardTitle>
								<CardDescription>Your saved favorite AI-generated tracks</CardDescription>
							</CardHeader>
							<CardContent>
								{favorites.length === 0 ? (
									<div className="text-center py-12">
										<HeartIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
										<h3 className="text-lg font-medium mb-2">No Favorites Yet</h3>
										<p className="text-muted-foreground">Heart your best generations to save them here</p>
									</div>
								) : (
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
										{favorites.map((item) => (
											<div key={item.id} className="group border shadow-md transition-all p-3">
												<div className="flex items-center justify-between mb-2">
													<div className="flex items-center gap-2">
														<MusicIcon className="h-4 w-4 text-muted-foreground" />
														<p className="text-sm font-medium line-clamp-2">{item.prompt}</p>
													</div>
													<Button onClick={() => removeFromFavorites(item.id)} size="sm" variant="outline" className="w-7 h-7 p-0"><TrashIcon className="w-3 h-3" /></Button>
												</div>
												<div className="flex justify-between items-center text-xs text-muted-foreground">
													<span className="flex items-center gap-1"><Clock className="h-3 w-3" />{new Date(item.timestamp).toLocaleDateString()}</span>
													{item.isInstrumental && <Badge variant="outline" className="text-[10px]">Instrumental</Badge>}
												</div>
											</div>
										))}
									</div>
									)}
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				{/* FAQ Section */}
				<Card className="mt-8">
					<CardHeader><CardTitle>Frequently Asked Questions</CardTitle></CardHeader>
					<CardContent className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-4">
								<div>
									<h4 className="font-medium mb-2">What is MiniMax Music 2.6?</h4>
									<p className="text-sm text-muted-foreground">MiniMax Music 2.6 is an advanced AI music generation model that creates full-length songs with natural vocals, layered instrumentation, and professional mixing from text prompts and lyrics.</p>
								</div>
								<div>
									<h4 className="font-medium mb-2">Is the generated music royalty-free?</h4>
									<p className="text-sm text-muted-foreground">Yes. All music generated is royalty-free and cleared for commercial use in videos, podcasts, games, advertisements, and branded content without additional licensing.</p>
								</div>
								<div>
									<h4 className="font-medium mb-2">How does Lyrics Optimizer work?</h4>
									<p className="text-sm text-muted-foreground">When enabled, the AI automatically generates lyrics based on your style prompt. You do not need to write any lyrics yourself — just describe the mood and genre.</p>
								</div>
							</div>
							<div className="space-y-4">
								<div>
									<h4 className="font-medium mb-2">What audio formats are supported?</h4>
									<p className="text-sm text-muted-foreground">You can export in MP3 or WAV format. Sample rate options include 16kHz, 24kHz, 32kHz, and 44.1kHz. Bitrate options range from 32kbps to 256kbps.</p>
								</div>
								<div>
									<h4 className="font-medium mb-2">What are structure tags?</h4>
									<p className="text-sm text-muted-foreground">Structure tags like [Verse], [Chorus], [Bridge], and [Drop] let you precisely control the arrangement and emotional arc of your generated song.</p>
								</div>
								<div>
									<h4 className="font-medium mb-2">Why is it free this week?</h4>
									<p className="text-sm text-muted-foreground">Cloudflare is offering MiniMax Music 2.6 for free on Workers AI as a limited-time promotion. Take advantage of unlimited generation while the offer lasts.</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
