"use client";

import { Wand2, History, HeartIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIMusicGeneratorHeader from "./AIMusicGeneratorHeader";
import AIMusicGeneratorSettings from "./AIMusicGeneratorSettings";
import AIMusicGeneratorResults from "./AIMusicGeneratorResults";
import AIMusicGeneratorExamples from "./AIMusicGeneratorExamples";
import AIMusicGeneratorHistory from "./AIMusicGeneratorHistory";
import AIMusicGeneratorFavorites from "./AIMusicGeneratorFavorites";
import AIMusicGeneratorFAQ from "./AIMusicGeneratorFAQ";

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
				<AIMusicGeneratorHeader />

				<Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="generator" className="gap-2">
							<Wand2 className="h-4 w-4" />
							Generator
						</TabsTrigger>
						<TabsTrigger value="history" className="gap-2">
							<History className="h-4 w-4" />
							History ({history.length})
						</TabsTrigger>
						<TabsTrigger value="favorites" className="gap-2">
							<HeartIcon className="h-4 w-4" />
							Favorites ({favorites.length})
						</TabsTrigger>
					</TabsList>

					<TabsContent value="generator" className="space-y-6">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<AIMusicGeneratorSettings
								prompt={prompt}
								setPrompt={setPrompt}
								lyrics={lyrics}
								setLyrics={setLyrics}
								audioData={audioData}
								loading={loading}
								error={error}
								lyricsOptimizer={lyricsOptimizer}
								setLyricsOptimizer={setLyricsOptimizer}
								isInstrumental={isInstrumental}
								setIsInstrumental={setIsInstrumental}
								sampleRate={sampleRate}
								setSampleRate={setSampleRate}
								bitrate={bitrate}
								setBitrate={setBitrate}
								format={format}
								setFormat={setFormat}
								generationProgress={generationProgress}
								handleGenerate={handleGenerate}
								insertTag={insertTag}
							/>

							<div className="lg:col-span-2 space-y-6">
								<AIMusicGeneratorResults
									audioData={audioData}
									audioRef={audioRef}
									handleDownload={handleDownload}
									addToFavorites={addToFavorites}
									prompt={prompt}
									lyrics={lyrics}
									lyricsOptimizer={lyricsOptimizer}
									isInstrumental={isInstrumental}
									sampleRate={sampleRate}
									bitrate={bitrate}
									format={format}
									copied={copied}
									setCopied={setCopied}
									toast={toast}
								/>

								<AIMusicGeneratorExamples loadPrompt={loadPrompt} loading={loading} />
							</div>
						</div>
					</TabsContent>

					<TabsContent value="history">
						<AIMusicGeneratorHistory
							history={history}
							clearHistory={clearHistory}
							loadFromHistory={loadFromHistory}
						/>
					</TabsContent>

					<TabsContent value="favorites">
						<AIMusicGeneratorFavorites favorites={favorites} removeFromFavorites={removeFromFavorites} />
					</TabsContent>
				</Tabs>

				<AIMusicGeneratorFAQ />
			</div>
		</div>
	);
}
