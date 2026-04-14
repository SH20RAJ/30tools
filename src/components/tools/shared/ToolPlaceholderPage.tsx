"use client";

import { Zap, Clock, Shield, Wrench } from "lucide-react";

interface ToolPlaceholderPageProps {
	toolId: string;
}

export default function ToolPlaceholderPage({ toolId }: ToolPlaceholderPageProps) {
	const toolName = toolId
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return (
		<div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-8 p-8 md:p-12">
			<div className="relative">
				<div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
				<div className="relative w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
					<Wrench className="w-12 h-12" />
				</div>
			</div>

			<div className="space-y-4 max-w-lg">
				<h3 className="text-3xl font-black tracking-tight">{toolName}</h3>
				<p className="text-lg text-muted-foreground leading-relaxed">
					This tool is coming soon! We&apos;re building a powerful, free{" "}
					{toolName.toLowerCase()} that works entirely in your browser — no
					uploads, no signups, complete privacy.
				</p>
			</div>

			<div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm font-bold text-muted-foreground">
				<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
					<Clock className="w-4 h-4 text-primary" />
					<span>Coming Soon</span>
				</div>
				<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
					<Shield className="w-4 h-4 text-primary" />
					<span>Privacy-First</span>
				</div>
				<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
					<Zap className="w-4 h-4 text-primary" />
					<span>100% Free</span>
				</div>
			</div>

			<a
				href="https://github.com/sh20raj/30tools/issues"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
			>
				<span>🤝</span>
				<span>Contribute This Tool on GitHub</span>
			</a>
		</div>
	);
}
