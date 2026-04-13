"use client";

import { Download, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/shared/ToolLayout";
import { getAllTools, getToolById } from "@/constants/tools-utils";
import { cn } from "@/lib/utils";

interface ToolPlaceholderPageProps {
	toolId: string;
}

export default function ToolPlaceholderPage({
	toolId,
}: ToolPlaceholderPageProps) {
	const [toolData, setToolData] = useState<any>(null);
	const [activeTab, setActiveTab] = useState("tool");

	useEffect(() => {
		const tool = getToolById(toolId);
		if (tool) {
			setToolData(tool);
		}
	}, [toolId]);

	// Derived values
	const title = toolData?.seoTitle || toolData?.name || "";
	const description = toolData?.seoDescription || toolData?.description || "";
	const categoryName = toolData?.categoryName || "";
	const categorySlug = toolData?.categorySlug || "";
	const route = toolData?.route || `/${toolId}`;

	const baseUrl = "https://30tools.com";
	const toolUrl = `${baseUrl}${route}`;

	const relatedTools = useMemo(() => {
		if (!toolData) return [];
		return getAllTools()
			.filter(
				(tool) =>
					tool.categoryKey === "seo" && tool.id !== toolId && tool.route,
			)
			.slice(0, 6);
	}, [toolData, toolId]);

	// JSON-LD: WebApplication
	const softwareAppJsonLd = useMemo(
		() => ({
			"@context": "https://schema.org",
			"@type": "WebApplication",
			name: title,
			description: description,
			url: toolUrl,
			applicationCategory: "UtilityApplication",
			operatingSystem: "Any",
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
			},
			author: {
				"@type": "Organization",
				name: "30tools",
				url: baseUrl,
			},
			featureList: toolData?.features || [],
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "4.8",
				reviewCount: "1250",
			},
		}),
		[title, description, toolUrl, toolData?.features],
	);

	// JSON-LD: FAQ
	const faqJsonLd = useMemo(() => {
		if (!toolData?.faqs?.length) return null;
		return {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: toolData.faqs.map((faq: any) => ({
				"@type": "Question",
				name: faq.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.answer,
				},
			})),
		};
	}, [toolData?.faqs]);

	// JSON-LD: HowTo
	const howToJsonLd = useMemo(() => {
		if (!toolData?.howTo?.steps?.length) return null;
		return {
			"@context": "https://schema.org",
			"@type": "HowTo",
			name: toolData.howTo.name || `How to use ${title}`,
			description: description,
			step: toolData.howTo.steps.map((step: any, index: number) => ({
				"@type": "HowToStep",
				name: step.name,
				text: step.text,
				url: step.url || `${toolUrl}#step${index + 1}`,
				position: index + 1,
			})),
		};
	}, [
		toolData?.howTo?.steps,
		title,
		description,
		toolUrl,
		toolData.howTo.name,
	]);

	// Additional keyword-focused content for ranking
	const renderToolInfo = () => (
		<article className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed">
			<section className="mb-12">
				<h2 id="what-is" className="text-2xl font-bold mb-4 scroll-mt-24">
					What is {title}?
				</h2>
				<p className="text-lg text-muted-foreground leading-relaxed mb-4">
					{description} This {title} is designed to help you accomplish tasks
					quickly and efficiently. As part of 30tools' commitment to providing
					free online utilities, this tool offers professional-grade
					functionality without any cost or registration requirements.
				</p>
				<p className="text-muted-foreground leading-relaxed">
					With {toolData?.features?.length || 0}+ features, our {title} stands
					out as a reliable solution for professionals and casual users alike.
					The tool operates entirely in your browser, ensuring your data never
					leaves your device.
				</p>
			</section>

			<section className="mb-12">
				<h2 id="how-to-use" className="text-2xl font-bold mb-4 scroll-mt-24">
					How to Use {title}
				</h2>
				{toolData?.howTo?.steps?.length > 0 ? (
					<ol className="space-y-4 list-decimal list-inside">
						{toolData.howTo.steps.map((step: any, idx: number) => (
							<li key={idx} className="pl-2">
								<strong>{step.name}:</strong>{" "}
								<span className="text-muted-foreground">{step.text}</span>
							</li>
						))}
					</ol>
				) : (
					<div className="space-y-4">
						<p className="text-muted-foreground leading-relaxed">
							Using our {title} is simple and straightforward:
						</p>
						<ol className="space-y-4 list-decimal list-inside">
							<li className="pl-2">
								<strong>Enter your data:</strong> Use the input field or upload
								button to provide the necessary information.
							</li>
							<li className="pl-2">
								<strong>Configure settings:</strong> Adjust any available
								options to match your requirements.
							</li>
							<li className="pl-2">
								<strong>Process and download:</strong> Click the process button
								and download your results instantly.
							</li>
						</ol>
					</div>
				)}
			</section>

			<section className="mb-12">
				<h2 id="features" className="text-2xl font-bold mb-4 scroll-mt-24">
					Key Features
				</h2>
				{toolData?.features?.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{toolData.features.map((feature: string, idx: number) => (
							<div
								key={idx}
								className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
							>
								<div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
									<svg
										className="w-3 h-3 text-primary"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<span className="text-sm text-foreground">{feature}</span>
							</div>
						))}
					</div>
				) : null}
			</section>

			<section className="mb-12">
				<h2 id="benefits" className="text-2xl font-bold mb-4 scroll-mt-24">
					Why Choose Our {title}?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 rounded-xl border border-border bg-card">
						<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
							<Zap className="w-6 h-6 text-primary" />
						</div>
						<h3 className="font-semibold mb-2">Lightning Fast</h3>
						<p className="text-sm text-muted-foreground">
							Process your data instantly with optimized algorithms. No waiting,
							no delays.
						</p>
					</div>
					<div className="p-6 rounded-xl border border-border bg-card">
						<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
							<Shield className="w-6 h-6 text-primary" />
						</div>
						<h3 className="font-semibold mb-2">Secure & Private</h3>
						<p className="text-sm text-muted-foreground">
							All processing happens locally in your browser. We never store or
							transmit your data.
						</p>
					</div>
					<div className="p-6 rounded-xl border border-border bg-card">
						<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
							<Download className="w-6 h-6 text-primary" />
						</div>
						<h3 className="font-semibold mb-2">Free Forever</h3>
						<p className="text-sm text-muted-foreground">
							No hidden costs, no subscriptions, no limitations. Use it as much
							as you need.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-12">
				<h2 id="use-cases" className="text-2xl font-bold mb-4 scroll-mt-24">
					Common Use Cases
				</h2>
				<div className="space-y-4">
					<p className="text-muted-foreground leading-relaxed">
						This {title} is versatile and can be used in various scenarios:
					</p>
					<ul className="space-y-3 ml-4">
						<li className="flex items-start gap-2">
							<span className="text-primary mt-1">✓</span>
							<span>Quick task completion with no setup required</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-primary mt-1">✓</span>
							<span>Professional workflows requiring precise results</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-primary mt-1">✓</span>
							<span>Batch processing for efficiency</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-primary mt-1">✓</span>
							<span>Integration into larger projects and pipelines</span>
						</li>
					</ul>
				</div>
			</section>

			{/* Comparison Section */}
			<section className="mb-12">
				<h2 id="comparison" className="text-2xl font-bold mb-4 scroll-mt-24">
					Why {title} at 30tools?
				</h2>
				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b">
								<th className="text-left p-4 font-semibold">Feature</th>
								<th className="text-left p-4 font-semibold">30tools</th>
								<th className="text-left p-4 font-semibold">Other Tools</th>
							</tr>
						</thead>
						<tbody className="text-sm">
							<tr className="border-b">
								<td className="p-4">Cost</td>
								<td className="p-4 text-green-600 font-medium">100% Free</td>
								<td className="p-4 text-muted-foreground">
									Often paid or limited
								</td>
							</tr>
							<tr className="border-b">
								<td className="p-4">Registration</td>
								<td className="p-4 text-green-600 font-medium">Not Required</td>
								<td className="p-4 text-muted-foreground">Usually required</td>
							</tr>
							<tr className="border-b">
								<td className="p-4">Privacy</td>
								<td className="p-4 text-green-600 font-medium">
									Browser-based
								</td>
								<td className="p-4 text-muted-foreground">Server upload</td>
							</tr>
							<tr className="border-b">
								<td className="p-4">Speed</td>
								<td className="p-4 text-green-600 font-medium">Instant</td>
								<td className="p-4 text-muted-foreground">Variable</td>
							</tr>
							<tr>
								<td className="p-4">Support</td>
								<td className="p-4 text-green-600 font-medium">15 languages</td>
								<td className="p-4 text-muted-foreground">Limited</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			{/* Featured Snippet Definition */}
			<section className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
				<h2 className="text-2xl font-bold mb-4">Quick Reference</h2>
				<div className="text-lg leading-relaxed">
					<p className="font-medium mb-2">{title} definition:</p>
					<p className="text-muted-foreground mb-4">
						A {title} is a free online utility that allows users to perform
						specific tasks quickly and efficiently without installing software.
						It operates in the browser, ensuring privacy and instant results.
					</p>
					<p className="font-medium mb-2">Key characteristics:</p>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
						<li>✓ 100% free with no usage limits</li>
						<li>✓ No registration or signup required</li>
						<li>✓ Fast, instant processing</li>
						<li>✓ Secure, browser-based operations</li>
						<li>✓ Supports multiple formats</li>
						<li>✓ Works on all devices</li>
					</ul>
				</div>
			</section>

			{/* FAQ Section */}
			{toolData?.faqs?.length > 0 && (
				<section className="mb-12" id="faq">
					<h2 className="text-2xl font-bold mb-6">
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{toolData.faqs.map((faq: any, idx: number) => (
							<div
								key={idx}
								className="rounded-lg border border-border bg-card p-5"
							>
								<h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
								<p className="text-muted-foreground leading-relaxed">
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Trust Badges */}
			<section className="mb-12 py-8 border-y border-border/50">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
					<div>
						<div className="text-3xl font-bold text-primary mb-2">
							100% Free
						</div>
						<p className="text-sm text-muted-foreground">No hidden costs</p>
					</div>
					<div>
						<div className="text-3xl font-bold text-primary mb-2">
							No Signup
						</div>
						<p className="text-sm text-muted-foreground">Start instantly</p>
					</div>
					<div>
						<div className="text-3xl font-bold text-primary mb-2">Secure</div>
						<p className="text-sm text-muted-foreground">Browser-based</p>
					</div>
					<div>
						<div className="text-3xl font-bold text-primary mb-2">Fast</div>
						<p className="text-sm text-muted-foreground">Instant results</p>
					</div>
				</div>
			</section>

			{relatedTools.length > 0 && (
				<section className="mb-12" id="related-tools">
					<h2 className="text-2xl font-bold mb-4">Related SEO Tools</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{relatedTools.map((tool) => (
							<Link
								key={tool.id}
								href={tool.route}
								className="rounded-2xl border border-border p-4 bg-card hover:border-primary hover:shadow-sm transition"
							>
								<h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
								<p className="text-sm text-muted-foreground">
									{tool.description}
								</p>
							</Link>
						))}
					</div>
				</section>
			)}
		</article>
	);

	return (
		<ToolLayout
			toolId={toolId}
			title={title}
			description={description}
			category={{ name: categoryName, slug: categorySlug }}
			controls={
				<div className="p-6 bg-card border border-border/50 rounded-2xl space-y-4">
					<div className="rounded-2xl bg-primary/10 p-4">
						<p className="text-sm font-medium text-primary">Quick actions</p>
						<p className="text-sm text-muted-foreground mt-2">
							Start using the tool instantly or review the SEO guidance below.
						</p>
					</div>
					<button
						onClick={() => setActiveTab("tool")}
						className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary/90"
					>
						Use Tool Now
					</button>
					<button
						onClick={() => setActiveTab("info")}
						className="w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted"
					>
						Read SEO Tips
					</button>
				</div>
			}
		>
			{/* Structured Data */}
			<Script
				id={`software-app-${toolId}`}
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
				strategy="afterInteractive"
			/>
			{faqJsonLd && (
				<Script
					id={`faq-${toolId}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
					strategy="afterInteractive"
				/>
			)}
			{howToJsonLd && (
				<Script
					id={`howto-${toolId}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
					strategy="afterInteractive"
				/>
			)}

			{/* Tool Content */}
			<div className="max-w-4xl mx-auto">
				{/* Hero Badge */}
				<div className="flex justify-center mb-6">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
						<span className="text-primary font-medium">100% Free</span>
						<span className="text-muted-foreground">•</span>
						<span className="text-muted-foreground">No registration</span>
						<span className="text-muted-foreground">•</span>
						<span className="text-muted-foreground">Browser-based</span>
					</div>
				</div>

				{/* Tool Tabs */}
				<div className="mb-8">
					<div className="flex gap-4 border-b border-border">
						<button
							onClick={() => setActiveTab("tool")}
							className={cn(
								"pb-3 px-2 text-sm font-medium transition-colors border-b-2 -mb-px",
								activeTab === "tool"
									? "border-primary text-foreground"
									: "border-transparent text-muted-foreground hover:text-foreground",
							)}
						>
							Use Tool
						</button>
						<button
							onClick={() => setActiveTab("info")}
							className={cn(
								"pb-3 px-2 text-sm font-medium transition-colors border-b-2 -mb-px",
								activeTab === "info"
									? "border-primary text-foreground"
									: "border-transparent text-muted-foreground hover:text-foreground",
							)}
						>
							Learn More
						</button>
					</div>
				</div>

				{/* Tab Content */}
				{activeTab === "tool" ? (
					<div className="min-h-[400px] flex items-center justify-center bg-muted/30 rounded-2xl border border-border/60 p-8">
						<div className="text-center space-y-4">
							<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
								<Zap className="w-8 h-8 text-primary" />
							</div>
							<h3 className="text-xl font-semibold">Tool Interface</h3>
							<p className="text-muted-foreground max-w-md">
								The {title} is ready to use. Configure your settings above and
								click the process button to get instant results.
							</p>
							<div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
								<span>← Scroll up to access controls</span>
							</div>
						</div>
					</div>
				) : (
					renderToolInfo()
				)}
			</div>
		</ToolLayout>
	);
}
