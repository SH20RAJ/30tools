"use client";

import { Check, Download, HelpCircle, Shield, Zap } from "lucide-react";
import { useMemo } from "react";
import { getToolById } from "@/lib/tools";

interface ToolContentProps {
	toolId: string;
}

export default function ToolContent({ toolId }: ToolContentProps) {
	const toolData = useMemo(() => getToolById(toolId), [toolId]);

	if (!toolData) return null;

	const _title = toolData.seoTitle || toolData.name;
	const description = toolData.seoDescription || toolData.description;

	return (
		<article className="prose prose-slate dark:prose-invert max-w-none space-y-24">
			{/* What is Section */}
			<section className="scroll-mt-24">
				<h2 className="text-3xl font-semibold tracking-tight mb-6">
					What is {toolData.name}?
				</h2>
				<div className="bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 ">
					<p className="text-lg text-[#1d1d1f]/80 dark:text-white/80 leading-relaxed">
						{description} This free online tool is part of the 30tools suite,
						designed to provide lightning-fast processing directly in your
						browser. Whether you're a professional looking for advanced
						utilities or a casual user needing a quick solution, our{" "}
						{toolData.name} offers a secure, privacy-first experience.
					</p>
				</div>
			</section>

			{/* How to Use Section */}
			<section className="scroll-mt-24">
				<h2 className="text-3xl font-semibold tracking-tight mb-8">
					How to Use {toolData.name}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{toolData.howTo?.steps?.map((step: any, idx: number) => (
						<div
							key={idx}
							className="relative p-8 bg-white dark:bg-[#1d1d1f] sition-all"
						>
							<div className="text-[#0071e3] font-bold text-lg mb-4">
								{idx + 1}.
							</div>
							<h3 className="text-xl font-semibold mb-3">{step.name}</h3>
							<p className="text-[#1d1d1f]/85 dark:text-white/85 text-sm leading-relaxed">
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
				<h2 className="text-3xl font-semibold tracking-tight mb-8">
					Key Features & Benefits
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{toolData.features?.map((feature: string, idx: number) => (
						<div
							key={idx}
							className="flex items-start gap-4 p-6 bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 shadow-sm transition-all"
						>
							<div className="mt-1 w-5 h-5 s-center justify-center text-[#0071e3]">
								<Check className="w-3 h-3" />
							</div>
							<span className="text-base font-medium">{feature}</span>
						</div>
					))}
				</div>
			</section>

			{/* Trust Section */}
			<section className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-12 bg-[#f5f5f7] dark:bg-[#161617] ">
				<div className="text-center space-y-4">
					<div className="w-12 h-12 bg-[#0071e3]/10 s-center justify-center mx-auto text-[#0071e3]">
						<Zap className="w-6 h-6" />
					</div>
					<h3 className="font-semibold text-lg">Instant Results</h3>
					<p className="text-sm opacity-85">
						Real-time processing with zero latency. No waiting, just instant
						output.
					</p>
				</div>
				<div className="text-center space-y-4">
					<div className="w-12 h-12 bg-[#0071e3]/10 s-center justify-center mx-auto text-[#0071e3]">
						<Shield className="w-6 h-6" />
					</div>
					<h3 className="font-semibold text-lg">Maximum Privacy</h3>
					<p className="text-sm opacity-85">
						All processing is done locally in your browser. We never store or
						see your data.
					</p>
				</div>
				<div className="text-center space-y-4">
					<div className="w-12 h-12 bg-[#0071e3]/10 s-center justify-center mx-auto text-[#0071e3]">
						<Download className="w-6 h-6" />
					</div>
					<h3 className="font-semibold text-lg">Free Forever</h3>
					<p className="text-sm opacity-85">
						No signups, no hidden costs, and no limits. Use it as much as you
						need.
					</p>
				</div>
			</section>

			{/* FAQ Section */}
			{(toolData.faqs?.length ?? 0) > 0 && (
				<section className="scroll-mt-24">
					<h2 className="text-3xl font-semibold tracking-tight mb-8">
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{toolData.faqs?.map((faq: any, idx: number) => (
							<div
								key={idx}
								className="p-8 bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 sition-all"
							>
								<h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
								<p className="opacity-85 leading-relaxed text-lg">
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Comparison Table */}
			<section className="scroll-mt-24">
				<h2 className="text-3xl font-semibold tracking-tight mb-8">
					Why 30tools is Better
				</h2>
				<div className="overflow-hidden ">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-[#f5f5f7] dark:bg-[#161617] border-b border-black/5 dark:border-white/5">
								<th className="p-6 font-semibold text-xs uppercase tracking-wider">
									Feature
								</th>
								<th className="p-6 font-semibold text-xs uppercase tracking-wider text-[#0071e3]">
									30tools
								</th>
								<th className="p-6 font-semibold text-xs uppercase tracking-wider">
									Others
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-black/5 dark:divide-white/5">
							<tr>
								<td className="p-6 text-sm font-medium">Cost</td>
								<td className="p-6 text-sm text-green-600 font-bold">Free Forever</td>
								<td className="p-6 text-sm opacity-85">
									Often Paid/Credits
								</td>
							</tr>
							<tr>
								<td className="p-6 text-sm font-medium">Registration</td>
								<td className="p-6 text-sm text-green-600 font-bold">No Signup</td>
								<td className="p-6 text-sm opacity-85">Email Required</td>
							</tr>
							<tr>
								<td className="p-6 text-sm font-medium">Data Storage</td>
								<td className="p-6 text-sm text-green-600 font-bold">
									100% Client-side
								</td>
								<td className="p-6 text-sm opacity-85">Stored on Servers</td>
							</tr>
							<tr>
								<td className="p-6 text-sm font-medium">Speed</td>
								<td className="p-6 text-sm text-green-600 font-bold">Instant (ms)</td>
								<td className="p-6 text-sm opacity-85">Network Dependent</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			{/* Quick Reference / Snippet Section */}
			<section className="p-12 bg-white dark:bg-[#1d1d1f] ">
				<div className="max-w-3xl">
					<h2 className="text-2xl font-semibold mb-6">
						The #1 Online {toolData.name}
					</h2>
					<p className="text-lg opacity-85 mb-8 leading-relaxed">
						Our {toolData.name} is a versatile, high-speed utility for anyone
						needing professional results instantly. Developed with modern SEO
						standards and user privacy in mind, it outperforms typical
						alternatives by processing everything locally in your browser. Use
						it for your projects, professional work, or creative tasks without
						ever worrying about your data privacy.
					</p>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<li className="flex items-center gap-3 text-sm font-medium">
							<div className="w-1.5 h-1.5 " />
							Optimized for Speed
						</li>
						<li className="flex items-center gap-3 text-sm font-medium">
							<div className="w-1.5 h-1.5 " />
							Supports Multiple Formats
						</li>
						<li className="flex items-center gap-3 text-sm font-medium">
							<div className="w-1.5 h-1.5 " />
							One-click Clipboard Sync
						</li>
						<li className="flex items-center gap-3 text-sm font-medium">
							<div className="w-1.5 h-1.5 " />
							Mobile & Desktop Ready
						</li>
					</ul>
				</div>
			</section>
		</article>
	);
}
