"use client";

import * as Tabs from "@radix-ui/react-tabs";
import {
	Code,
	Cpu,
	Download,
	FileText,
	Globe,
	HelpCircle,
	Layers,
	Layout,
	Rocket,
	ShieldCheck,
	Sparkles,
	Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import { getToolById } from "@/constants/tools-utils";
import { cn } from "@/lib/utils";

interface PremiumToolPageProps {
	toolId: string;
}

export default function PremiumToolPage({ toolId }: PremiumToolPageProps) {
	const [tool, setTool] = useState<any>(null);

	useEffect(() => {
		const toolData = getToolById(toolId);
		if (toolData) {
			setTool(toolData);
		}
	}, [toolId]);

	if (!tool) {
		return (
			<div className="flex h-screen items-center justify-center">
				<div className="animate-pulse text-primary font-medium">
					Loading premium experience...
				</div>
			</div>
		);
	}

	const features = tool.features || [
		"Lightning fast processing",
		"Secure & Private (Browser-based)",
		"Mobile-friendly design",
		"No registration required",
	];

	const steps = tool.howTo?.steps || [
		{
			name: "Input Data",
			text: "Provide the necessary information in the tool interface.",
		},
		{
			name: "Configure",
			text: "Adjust settings to match your specific requirements.",
		},
		{
			name: "Generate",
			text: "Click the process button to get instant results.",
		},
	];

	return (
		<ToolSEOLayout toolId={toolId}>
			<div className="animate-in space-y-12">
				{/* Premium Hero Section */}
				<section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary p-8 md:p-12 border border-primary/20">
					<div className="relative z-10 max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
							<Sparkles className="h-3.5 w-3.5" />
							<span>PREMIUM TOOL</span>
						</div>
						<h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-foreground">
							Power Up Your Workflow with {tool.name}
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							{tool.description} Experience the fastest 100% free solution for
							your digital needs. Built for professionals, accessed by everyone.
						</p>
						<div className="flex flex-wrap gap-4">
							<div className="flex items-center gap-2 text-sm text-foreground font-medium">
								<ShieldCheck className="h-5 w-5 text-green-500" />
								<span>Privacy Focused</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-foreground font-medium">
								<Zap className="h-5 w-5 text-yellow-500" />
								<span>Instant Results</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-foreground font-medium">
								<Globe className="h-5 w-5 text-blue-500" />
								<span>Browser Based</span>
							</div>
						</div>
					</div>
					{/* Decorative background element */}
					<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
					<div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-secondary/20 blur-2xl" />
				</section>

				{/* Interaction Tabs */}
				<Tabs.Root defaultValue="tool" className="w-full">
					<Tabs.List className="flex border-b border-border/50 mb-8 gap-8 overflow-x-auto pb-1 scrollbar-hide">
						<Tabs.Trigger
							value="tool"
							className={cn(
								"group flex items-center gap-2 pb-4 text-sm font-bold transition-all border-b-2 -mb-px whitespace-nowrap outline-none",
								"data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground hover:text-foreground",
							)}
						>
							<Layout className="h-4 w-4" />
							Launch Tool
						</Tabs.Trigger>
						<Tabs.Trigger
							value="docs"
							className={cn(
								"group flex items-center gap-2 pb-4 text-sm font-bold transition-all border-b-2 -mb-px whitespace-nowrap outline-none",
								"data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground hover:text-foreground",
							)}
						>
							<FileText className="h-4 w-4" />
							Documentation
						</Tabs.Trigger>
						<Tabs.Trigger
							value="faq"
							className={cn(
								"group flex items-center gap-2 pb-4 text-sm font-bold transition-all border-b-2 -mb-px whitespace-nowrap outline-none",
								"data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground hover:text-foreground",
							)}
						>
							<HelpCircle className="h-4 w-4" />
							FAQ & Troubleshooting
						</Tabs.Trigger>
					</Tabs.List>

					<Tabs.Content value="tool" className="outline-none">
						<div className="glass rounded-[2rem] p-12 text-center border-border/60 bg-gradient-to-b from-card to-secondary/30">
							<div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 shadow-inner">
								<Cpu className="h-12 w-12 text-primary" />
							</div>
							<h3 className="text-2xl font-bold mb-4">
								Initialize {tool.name} Engine
							</h3>
							<p className="mx-auto max-w-md text-muted-foreground mb-8">
								The tool logic is ready to execute in your local browser
								environment. Scroll down to configure specific parameters and
								start processing.
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<button className="w-full sm:w-auto rounded-2xl bg-primary px-8 py-4 font-bold text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
									Get Started Now
								</button>
								<button className="w-full sm:w-auto rounded-2xl bg-secondary px-8 py-4 font-bold text-foreground border border-border hover:bg-muted transition-all">
									Watch Tutorial
								</button>
							</div>
						</div>
					</Tabs.Content>

					<Tabs.Content value="docs" className="outline-none space-y-12 py-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="space-y-6">
								<h3 className="text-2xl font-bold flex items-center gap-3">
									<Rocket className="h-6 w-6 text-primary" />
									How to Start
								</h3>
								<div className="space-y-4">
									{steps.map((step: any, idx: number) => (
										<div key={idx} className="flex gap-4">
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
												{idx + 1}
											</div>
											<div>
												<h4 className="font-bold text-foreground">
													{step.name}
												</h4>
												<p className="text-sm text-muted-foreground">
													{step.text}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="space-y-6">
								<h3 className="text-2xl font-bold flex items-center gap-3">
									<Layers className="h-6 w-6 text-primary" />
									Advanced Features
								</h3>
								<div className="grid grid-cols-1 gap-3">
									{features.map((feature: string, idx: number) => (
										<div
											key={idx}
											className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-secondary/30"
										>
											<div className="h-2 w-2 rounded-full bg-primary" />
											<span className="text-sm font-medium">{feature}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Use Cases Section */}
						<div className="rounded-3xl border border-border bg-card p-8">
							<h3 className="text-2xl font-bold mb-6">
								Real-World Applications
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
								{[
									{ t: "Personal", d: "Quick solutions for daily tasks." },
									{ t: "Business", d: "Streamline professional workflows." },
									{ t: "Devs", d: "API-ready logic for development." },
									{ t: "Education", d: "Resource for students & teachers." },
								].map((item, i) => (
									<div key={i} className="space-y-2">
										<h4 className="font-bold text-primary">{item.t}</h4>
										<p className="text-sm text-muted-foreground">{item.d}</p>
									</div>
								))}
							</div>
						</div>
					</Tabs.Content>

					<Tabs.Content value="faq" className="outline-none py-4">
						<div className="bg-muted/10 rounded-3xl p-8 border border-border/50">
							<p className="text-center text-muted-foreground italic mb-8">
								Looking for something else? Our documentation covers 95% of use
								cases. For specific issues, see below.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{tool.faqs?.slice(0, 4).map((faq: any, idx: number) => (
									<div
										key={idx}
										className="bg-card p-6 rounded-2xl border border-border"
									>
										<h4 className="font-bold mb-2 flex items-center gap-2">
											<HelpCircle className="h-4 w-4 text-primary" />
											{faq.question}
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{faq.answer}
										</p>
									</div>
								))}
							</div>
						</div>
					</Tabs.Content>
				</Tabs.Root>

				{/* Trust Section */}
				<div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-border/50">
					<div className="flex items-center gap-3">
						<Code className="h-6 w-6 text-muted-foreground" />
						<span className="text-sm text-muted-foreground font-medium">
							Open Web Standard
						</span>
					</div>
					<div className="flex items-center gap-3">
						<ShieldCheck className="h-6 w-6 text-muted-foreground" />
						<span className="text-sm text-muted-foreground font-medium">
							ISO-Grade Privacy
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Download className="h-6 w-6 text-muted-foreground" />
						<span className="text-sm text-muted-foreground font-medium">
							No Install Required
						</span>
					</div>
				</div>
			</div>
		</ToolSEOLayout>
	);
}
