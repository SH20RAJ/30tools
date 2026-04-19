"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
	const [progress, setProgress] = useState(13);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		const timer2 = setTimeout(() => setProgress(88), 1500);
		return () => {
			clearTimeout(timer);
			clearTimeout(timer2);
		};
	}, []);

	return (
		<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background ambient-glow overflow-hidden">
			{/* Branding & Loading Content */}
			<div className="relative z-10 flex flex-col items-center gap-8 px-6 py-12 text-center apple-glass rounded-[2.5rem] border border-white/10 shadow-2xl max-w-sm w-full mx-4 transition-all duration-500 animate-in fade-in zoom-in-95">
				
				<div className="relative">
					<div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full animate-pulse" />
					<div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-primary shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]">
						<Loader2 className="w-10 h-10 text-primary-foreground animate-spin" />
					</div>
				</div>

				<div className="space-y-2">
					<h1 className="text-4xl font-bold tracking-tight text-foreground animate-pulse">
						30tools
					</h1>
					<p className="text-sm font-medium text-muted-foreground/80 tracking-wide uppercase">
						Preparing your workspace
					</p>
				</div>

				<div className="w-full space-y-4">
					<Progress value={progress} className="h-1.5 w-full bg-primary/10" />
					<div className="flex justify-between text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest">
						<span>Initializing tools</span>
						<span>{progress}%</span>
					</div>
				</div>
			</div>

			{/* Decorative background elements */}
			<div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
			<div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
		</div>
	);
}
