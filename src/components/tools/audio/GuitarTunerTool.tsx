"use client";

import {
	ArrowLeftIcon,
	MicIcon,
	MicOffIcon,
	MusicIcon,
	SettingsIcon,
	Volume2Icon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SocialShareButtons from "@/components/shared/SocialShareButtons";
import { getRouteById } from "@/lib/tools";

const TUNINGS = {
	standard: {
		name: "Standard (EADGBE)",
		notes: [
			{ note: "E2", freq: 82.41 },
			{ note: "A2", freq: 110.00 },
			{ note: "D3", freq: 146.83 },
			{ note: "G3", freq: 196.00 },
			{ note: "B3", freq: 246.94 },
			{ note: "E4", freq: 329.63 },
		],
	},
	dropD: {
		name: "Drop D (DADGBE)",
		notes: [
			{ note: "D2", freq: 73.42 },
			{ note: "A2", freq: 110.00 },
			{ note: "D3", freq: 146.83 },
			{ note: "G3", freq: 196.00 },
			{ note: "B3", freq: 246.94 },
			{ note: "E4", freq: 329.63 },
		],
	},
	halfStepDown: {
		name: "Half Step Down (Eb Ab Db Gb Bb Eb)",
		notes: [
			{ note: "Eb2", freq: 77.78 },
			{ note: "Ab2", freq: 103.83 },
			{ note: "Db3", freq: 138.59 },
			{ note: "Gb3", freq: 185.00 },
			{ note: "Bb3", freq: 233.08 },
			{ note: "Eb4", freq: 311.13 },
		],
	},
};

export default function GuitarTunerTool() {
	const [isListening, setIsListening] = useState(false);
	const [pitch, setPitch] = useState<number>(0);
	const [closestNote, setClosestNote] = useState<{ note: string; freq: number } | null>(null);
	const [cents, setCents] = useState<number>(0);
	const [tuning, setTuning] = useState<keyof typeof TUNINGS>("standard");
	const [error, setError] = useState<string>("");

	const audioCtxRef = useRef<AudioContext | null>(null);
	const analyserRef = useRef<AnalyserNode | null>(null);
	const streamRef = useRef<MediaStream | null>(null);
	const requestRef = useRef<number>();

	useEffect(() => {
		return () => {
			stopListening();
		};
	}, []);

	const startListening = async () => {
		try {
			setError("");
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
			const audioCtx = new AudioContext();
			const analyser = audioCtx.createAnalyser();
			
			// Increased FFT size for better low-frequency resolution (important for guitar E2 string)
			analyser.fftSize = 4096; 
			
			const source = audioCtx.createMediaStreamSource(stream);
			source.connect(analyser);

			audioCtxRef.current = audioCtx;
			analyserRef.current = analyser;
			streamRef.current = stream;
			
			setIsListening(true);
			updatePitch();
		} catch (err) {
			console.error("Error accessing microphone:", err);
			setError("Could not access the microphone. Please grant permission.");
			setIsListening(false);
		}
	};

	const stopListening = () => {
		if (requestRef.current) {
			cancelAnimationFrame(requestRef.current);
		}
		if (streamRef.current) {
			streamRef.current.getTracks().forEach((track) => track.stop());
		}
		if (audioCtxRef.current) {
			audioCtxRef.current.close();
		}
		
		setIsListening(false);
		setPitch(0);
		setClosestNote(null);
		setCents(0);
	};

	// Autocorrelation algorithm for pitch detection
	const autoCorrelate = (buf: Float32Array, sampleRate: number) => {
		let SIZE = buf.length;
		let rms = 0;

		for (let i = 0; i < SIZE; i++) {
			const val = buf[i];
			rms += val * val;
		}
		rms = Math.sqrt(rms / SIZE);
		
		// Not enough signal
		if (rms < 0.01) return -1;

		let r1 = 0, r2 = SIZE - 1, thres = 0.2;
		for (let i = 0; i < SIZE / 2; i++)
			if (Math.abs(buf[i]) < thres) { r1 = i; break; }
		for (let i = 1; i < SIZE / 2; i++)
			if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }

		buf = buf.slice(r1, r2);
		SIZE = buf.length;

		const c = new Array(SIZE).fill(0);
		for (let i = 0; i < SIZE; i++)
			for (let j = 0; j < SIZE - i; j++)
				c[i] = c[i] + buf[j] * buf[j + i];

		let d = 0; while (c[d] > c[d + 1]) d++;
		let maxval = -1, maxpos = -1;
		for (let i = d; i < SIZE; i++) {
			if (c[i] > maxval) {
				maxval = c[i];
				maxpos = i;
			}
		}
		let T0 = maxpos;

		const x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
		const a = (x1 + x3 - 2 * x2) / 2;
		const b = (x3 - x1) / 2;
		if (a) T0 = T0 - b / (2 * a);

		return sampleRate / T0;
	};

	const updatePitch = () => {
		if (!analyserRef.current || !audioCtxRef.current) return;

		const bufferLength = analyserRef.current.fftSize;
		const buffer = new Float32Array(bufferLength);
		analyserRef.current.getFloatTimeDomainData(buffer);

		const acPitch = autoCorrelate(buffer, audioCtxRef.current.sampleRate);

		if (acPitch !== -1 && acPitch > 50 && acPitch < 2000) {
			setPitch(acPitch);
			
			// Find closest note from selected tuning
			const notes = TUNINGS[tuning].notes;
			let closest = notes[0];
			let minDiff = Math.abs(acPitch - notes[0].freq);
			
			for (let i = 1; i < notes.length; i++) {
				const diff = Math.abs(acPitch - notes[i].freq);
				if (diff < minDiff) {
					minDiff = diff;
					closest = notes[i];
				}
			}
			
			setClosestNote(closest);
			
			// Calculate cents
			const centsDev = 1200 * Math.log2(acPitch / closest.freq);
			setCents(Math.min(max(centsDev, -50), 50));
		} else {
			setCents(0);
			setClosestNote(null);
		}

		requestRef.current = requestAnimationFrame(updatePitch);
	};

	const max = (a: number, b: number) => a > b ? a : b;

	// Visual tuning helper
	const getTuningColor = () => {
		if (Math.abs(cents) < 5) return "bg-green-500";
		if (Math.abs(cents) < 15) return "bg-yellow-500";
		return "bg-red-500";
	};
	
	const getTuningStatus = () => {
		if (Math.abs(cents) < 5) return "In Tune!";
		return cents < 0 ? "Too Low - Tune Up" : "Too High - Tune Down";
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<Link
					href={getRouteById("audio-tools")}
					className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
				>
					<ArrowLeftIcon className="mr-2 h-4 w-4" />
					Back to Audio Tools
				</Link>

				<div className="flex items-center gap-3 mb-4">
					<div className="p-2 bg-background border">
						<MusicIcon className="h-6 w-6 text-foreground" />
					</div>
					<div>
						<h2 className="text-3xl font-bold bg-background text-foreground">
							Guitar Tuner
						</h2>
						<p className="text-muted-foreground">
							Accurate microphone-based online guitar tuner
						</p>
					</div>
				</div>

				<div className="flex flex-wrap gap-2 mb-6">
					<Badge variant="secondary">🎤 Microphone Required</Badge>
					<Badge variant="secondary">🎸 Standard & Drop Tunings</Badge>
					<Badge variant="secondary">⚡ Real-time Detection</Badge>
				</div>
			</div>

			{error && (
				<Alert variant="destructive" className="mb-6 rounded-none">
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2">
					<Card className="rounded-none h-full relative overflow-hidden">
						{/* Tuning Visualization */}
						<div className="absolute top-0 left-0 w-full h-1 bg-muted">
							{isListening && (
								<div 
									className={`h-full transition-all duration-100 ${getTuningColor()}`}
									style={{ width: '100%' }}
								/>
							)}
						</div>
						
						<CardContent className="pt-12 pb-12 flex flex-col items-center justify-center min-h-[400px]">
							{isListening ? (
								<div className="flex flex-col items-center w-full max-w-lg mx-auto">
									<div className="text-[8rem] font-bold tracking-tighter leading-none mb-4">
										{closestNote ? closestNote.note : "-"}
									</div>
									<div className="text-2xl font-mono text-muted-foreground mb-12">
										{pitch > 0 ? \`\${pitch.toFixed(1)} Hz\` : "Waiting for sound..."}
									</div>
									
									{/* Tuning Meter */}
									<div className="w-full relative h-16 flex flex-col justify-end">
										<div className="w-full h-2 bg-muted relative mb-2">
											<div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-foreground -translate-x-1/2 scale-y-150 z-10" />
											<div 
												className={`absolute top-0 bottom-0 w-2.5 -translate-x-1/2 transition-all duration-75 ${getTuningColor()}`}
												style={{ left: \`\${50 + cents}%\` }}
											/>
										</div>
										<div className="flex justify-between w-full text-xs text-muted-foreground font-mono px-2">
											<span>-50</span>
											<span>0</span>
											<span>+50</span>
										</div>
									</div>
									
									{closestNote && (
										<div className={`mt-8 text-xl font-bold ${Math.abs(cents) < 5 ? 'text-green-500' : 'text-foreground'}`}>
											{getTuningStatus()}
										</div>
									)}
								</div>
							) : (
								<div className="text-center text-muted-foreground">
									<MicIcon className="w-24 h-24 mx-auto mb-6 opacity-20" />
									<h3 className="text-2xl font-bold mb-2">Tuner is Offline</h3>
									<p>Click "Start Tuner" to allow microphone access.</p>
								</div>
							)}
						</CardContent>
					</Card>
				</div>

				<div className="lg:col-span-1 space-y-6">
					<Card className="rounded-none">
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<SettingsIcon className="w-5 h-5" />
								Controls
							</CardTitle>
							<CardDescription>Select tuning and start tuning</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div>
								<label className="text-sm font-medium mb-2 block">
									Tuning Mode
								</label>
								<div className="grid gap-2">
									{(Object.keys(TUNINGS) as Array<keyof typeof TUNINGS>).map((t) => (
										<Button
											key={t}
											variant={tuning === t ? "default" : "outline"}
											className="w-full justify-start rounded-none"
											onClick={() => setTuning(t)}
										>
											{TUNINGS[t].name}
										</Button>
									))}
								</div>
							</div>
							
							<div className="pt-4 border-t">
								{isListening ? (
									<Button 
										variant="destructive" 
										className="w-full rounded-none h-12 text-lg font-bold"
										onClick={stopListening}
									>
										<MicOffIcon className="mr-2 w-5 h-5" />
										Stop Tuner
									</Button>
								) : (
									<Button 
										variant="default" 
										className="w-full rounded-none h-12 text-lg font-bold"
										onClick={startListening}
									>
										<MicIcon className="mr-2 w-5 h-5" />
										Start Tuner
									</Button>
								)}
							</div>
						</CardContent>
					</Card>

					<Card className="rounded-none">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-sm">
								<Volume2Icon className="w-4 h-4" />
								Target Frequencies
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-2">
								{TUNINGS[tuning].notes.map((n, i) => (
									<div key={i} className="flex justify-between items-center text-sm py-1 border-b last:border-0 border-border/50">
										<span className="font-bold">{n.note}</span>
										<span className="font-mono text-muted-foreground">{n.freq.toFixed(2)} Hz</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className="mt-12">
				<SocialShareButtons
					toolName="Guitar Tuner"
					toolDescription="Free online guitar tuner. Works directly in your browser using your microphone for accurate standard and drop tunings! 🎸"
					toolUrl="https://30tools.com/guitar-tuner"
					category="audio"
				/>
			</div>
		</div>
	);
}
