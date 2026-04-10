"use client";

import { Check, Zap, Shield, Download, HelpCircle } from "lucide-react";
import { getToolById } from "@/constants/tools-utils";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface ToolContentProps {
	toolId: string;
}

export default function ToolContent({ toolId }: ToolContentProps) {
	const toolData = useMemo(() => getToolById(toolId), [toolId]);

	if (!toolData) return null;

	const title = toolData.seoTitle || toolData.name;
	const description = toolData.seoDescription || toolData.description;

	return (
		<article className="prose prose-slate dark:prose-invert max-w-none space-y-16">
			{/* What is Section */}
			<section className="scroll-mt-24">
				<h2 className="text-3xl font-bold tracking-tight mb-6">What is {toolData.name}?</h2>
				<div className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
					<p className="text-lg text-muted-foreground leading-relaxed">
						{description} This free online tool is part of the 30tools suite, designed to provide lightning-fast text processing directly in your browser. Whether you're looking to create unique social media bios, reverse strings for coding, or just have fun with mirrored text, our {toolData.name} offers a professional, privacy-first solution.
					</p>
				</div>
			</section>

			{/* How to Use Section */}
			<section className="scroll-mt-24">
				<h2 className="text-3xl font-bold tracking-tight mb-8">How to Use {toolData.name}</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{toolData.howTo?.steps?.map((step: any, idx: number) => (
						<div key={idx} className="relative p-6 bg-muted/30 rounded-2xl border border-border/40 group hover:border-primary/30 transition-colors">
							<div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-lg">
								{idx + 1}
							</div>
							<h3 className="text-xl font-bold mb-3 mt-2">{step.name}</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{step.text}
							</p>
						</div>
					)) || (
						<div className="col-span-full text-center text-muted-foreground italic">
							Follow the simple steps in the interface above to get started.
						</div>
					)}
				</div>
			</section>

			{/* Features Grid */}
			<section className="scroll-mt-24">
				<h2 className="text-3xl font-bold tracking-tight mb-8">Key Features & Benefits</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{toolData.features?.map((feature: string, idx: number) => (
						<div key={idx} className="flex items-start gap-4 p-5 bg-card border border-border/50 rounded-2xl hover:shadow-md transition-all">
							<div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
								<Check className="w-4 h-4" />
							</div>
							<span className="text-base font-medium">{feature}</span>
						</div>
					))}
				</div>
			</section>

			{/* Trust Section */}
			<section className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10 rounded-[2.5rem]">
				<div className="text-center space-y-3">
					<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
						<Zap className="w-7 h-7" />
					</div>
					<h3 className="font-bold text-lg">Instant Results</h3>
					<p className="text-sm text-muted-foreground">Real-time processing with zero latency. No waiting, just instant output.</p>
				</div>
				<div className="text-center space-y-3">
					<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
						<Shield className="w-7 h-7" />
					</div>
					<h3 className="font-bold text-lg">Maximum Privacy</h3>
					<p className="text-sm text-muted-foreground">All processing is done locally in your browser. We never store or see your data.</p>
				</div>
				<div className="text-center space-y-3">
					<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
						<Download className="w-7 h-7" />
					</div>
					<h3 className="font-bold text-lg">Free Forever</h3>
					<p className="text-sm text-muted-foreground">No signups, no hidden costs, and no limits. Use it as much as you need.</p>
				</div>
			</section>

			{/* FAQ Section */}
			{toolData.faqs?.length > 0 && (
				<section className="scroll-mt-24">
					<h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
						<HelpCircle className="w-8 h-8 text-primary" />
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{toolData.faqs.map((faq: any, idx: number) => (
							<div key={idx} className="p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/20 transition-all">
								<h3 className="text-xl font-bold mb-4">{faq.question}</h3>
								<p className="text-muted-foreground leading-relaxed text-lg">
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Comparison Table */}
			<section className="scroll-mt-24">
				<h2 className="text-3xl font-bold tracking-tight mb-8">Why 30tools is Better</h2>
				<div className="overflow-hidden rounded-3xl border border-border/50 bg-card">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-muted/50 border-b border-border/50">
								<th className="p-6 font-bold text-sm uppercase tracking-wider">Feature</th>
								<th className="p-6 font-bold text-sm uppercase tracking-wider text-primary">30tools</th>
								<th className="p-6 font-bold text-sm uppercase tracking-wider">Others</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-border/50">
							<tr>
								<td className="p-6 font-medium">Cost</td>
								<td className="p-6 text-green-600 font-bold">Free Forever</td>
								<td className="p-6 text-muted-foreground">Often Paid/Credits</td>
							</tr>
							<tr>
								<td className="p-6 font-medium">Registration</td>
								<td className="p-6 text-green-600 font-bold">No Signup</td>
								<td className="p-6 text-muted-foreground">Email Required</td>
							</tr>
							<tr>
								<td className="p-6 font-medium">Data Storage</td>
								<td className="p-6 text-green-600 font-bold">100% Client-side</td>
								<td className="p-6 text-muted-foreground">Stored on Servers</td>
							</tr>
							<tr>
								<td className="p-6 font-medium">Processing Speed</td>
								<td className="p-6 text-green-600 font-bold">Instant (ms)</td>
								<td className="p-6 text-muted-foreground">Network Dependent</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			{/* Quick Reference / Snippet Section */}
			<section className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10">
				<div className="max-w-2xl">
					<h2 className="text-2xl font-bold mb-4">The #1 Backwards Text Generator Online</h2>
					<p className="text-lg text-muted-foreground mb-6">
						Our {toolData.name} is a versatile, high-speed utility for anyone needing to flip, reverse, or mirror text. Developed with modern SEO standards and user privacy in mind, it outperforms typical alternatives by processing everything locally. Use it for social media, coding tests, or creative design without ever worrying about your data privacy.
					</p>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<li className="flex items-center gap-2 text-sm font-medium">
							<div className="w-1.5 h-1.5 rounded-full bg-primary" />
							Optimized for Google SGE
						</li>
						<li className="flex items-center gap-2 text-sm font-medium">
							<div className="w-1.5 h-1.5 rounded-full bg-primary" />
							Supports Multi-line Text
						</li>
						<li className="flex items-center gap-2 text-sm font-medium">
							<div className="w-1.5 h-1.5 rounded-full bg-primary" />
							One-click Clipboard Sync
						</li>
						<li className="flex items-center gap-2 text-sm font-medium">
							<div className="w-1.5 h-1.5 rounded-full bg-primary" />
							Mobile & Desktop Ready
						</li>
					</ul>
				</div>
			</section>
		</article>
	);
}
