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
		<div className="space-y-16">
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

			<div className="text-left space-y-12 pt-12 border-t border-border/50">
				<div className="space-y-4">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">What is {toolName}?</h2>
					<p className="text-muted-foreground leading-relaxed text-lg">
						The free online {toolName.toLowerCase()} is a powerful utility designed to process your data instantly. 
						Currently under active development, this tool will soon allow you to perform complex tasks directly in your browser without any software installation. 
						Our focus is on delivering a high-quality, privacy-first experience where your data never leaves your device.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why use our Free {toolName} Online?</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
						<div className="flex flex-col space-y-2 p-4 bg-muted/30 rounded-2xl border border-border/40">
							<strong className="text-primary">100% Free to Use</strong>
							<p className="text-sm text-muted-foreground">No hidden fees, subscriptions, or premium paywalls. Use the tool entirely for free.</p>
						</div>
						<div className="flex flex-col space-y-2 p-4 bg-muted/30 rounded-2xl border border-border/40">
							<strong className="text-primary">No Signup Required</strong>
							<p className="text-sm text-muted-foreground">Start using the {toolName.toLowerCase()} immediately without creating an account or logging in.</p>
						</div>
						<div className="flex flex-col space-y-2 p-4 bg-muted/30 rounded-2xl border border-border/40">
							<strong className="text-primary">Privacy First</strong>
							<p className="text-sm text-muted-foreground">All operations are processed locally in your browser. We never store or upload your files.</p>
						</div>
						<div className="flex flex-col space-y-2 p-4 bg-muted/30 rounded-2xl border border-border/40">
							<strong className="text-primary">Fast & Secure</strong>
							<p className="text-sm text-muted-foreground">Enjoy lightning-fast processing speeds utilizing modern, secure web technologies.</p>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">How to use the {toolName}</h2>
					<div className="space-y-3 mt-4">
						<div className="flex gap-4 p-4 bg-card border border-border/50 rounded-2xl">
							<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
							<p className="text-muted-foreground self-center">Select or drag and drop your input into the {toolName.toLowerCase()} interface.</p>
						</div>
						<div className="flex gap-4 p-4 bg-card border border-border/50 rounded-2xl">
							<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
							<p className="text-muted-foreground self-center">Adjust the custom settings according to your specific requirements.</p>
						</div>
						<div className="flex gap-4 p-4 bg-card border border-border/50 rounded-2xl">
							<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
							<p className="text-muted-foreground self-center">Click the process button to generate your results instantly.</p>
						</div>
						<div className="flex gap-4 p-4 bg-card border border-border/50 rounded-2xl">
							<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">4</div>
							<p className="text-muted-foreground self-center">Download or copy the final output directly to your device.</p>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
					<div className="space-y-4 mt-4">
						<div className="p-5 bg-card border border-border/50 rounded-2xl">
							<h3 className="text-lg font-bold mb-2">Is the {toolName.toLowerCase()} free to use?</h3>
							<p className="text-muted-foreground">Yes, our {toolName.toLowerCase()} is completely free for both personal and professional use. There are no usage limits or premium paywalls.</p>
						</div>
						<div className="p-5 bg-card border border-border/50 rounded-2xl">
							<h3 className="text-lg font-bold mb-2">Do I need to install any software?</h3>
							<p className="text-muted-foreground">No, the {toolName.toLowerCase()} is entirely web-based and works directly in your browser on Windows, Mac, Linux, iOS, and Android.</p>
						</div>
						<div className="p-5 bg-card border border-border/50 rounded-2xl">
							<h3 className="text-lg font-bold mb-2">Is my data secure?</h3>
							<p className="text-muted-foreground">Absolutely. We prioritize your privacy by processing everything locally on your device. Your data is never uploaded to our servers.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
