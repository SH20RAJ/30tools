"use client";

import { HelpCircle, Info, Lightbulb } from "lucide-react";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import ToolLayout from "@/components/shared/ToolLayout";
import { getToolById } from "@/constants/tools-utils";

interface ToolPlaceholderPageProps {
	toolId: string;
}

export default function ToolPlaceholderPage({
	toolId,
}: ToolPlaceholderPageProps) {
	const [toolData, setToolData] = useState<any>(null);

	useEffect(() => {
		const tool = getToolById(toolId);
		if (tool) {
			setToolData(tool);
		}
	}, [toolId]);

	// Derived values from toolData with fallbacks
	const title = toolData?.seoTitle || toolData?.name || "";
	const description = toolData?.seoDescription || toolData?.description || "";
	const categoryName = toolData?.categoryName || "";
	const categorySlug = toolData?.categorySlug || "";

	const baseUrl = "https://30tools.com";
	const toolUrl = `${baseUrl}${toolData?.route || "/" + toolId}`;

	// JSON-LD: WebApplication (memoized)
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
		}),
		[title, description, toolUrl, toolData?.features],
	);

	// JSON-LD: FAQ (memoized)
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

	// JSON-LD: HowTo (memoized)
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
	}, [toolData?.howTo?.steps, title, description, toolUrl]);

	return (
		<ToolLayout
			toolId={toolId}
			title={title}
			description={description}
			category={{ name: categoryName, slug: categorySlug }}
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

			{/* Clean, Minimal Content */}
			<div className="max-w-3xl mx-auto space-y-8">
				{/* Hero Description */}
				<section className="text-center space-y-4">
					<p className="text-lg text-muted-foreground leading-relaxed">
						{description}
					</p>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
						<span className="text-primary font-medium">100% Free</span>
						<span className="text-muted-foreground">•</span>
						<span className="text-muted-foreground">No registration</span>
						<span className="text-muted-foreground">•</span>
						<span className="text-muted-foreground">Browser-based</span>
					</div>
				</section>

				{/* Features Grid */}
				{toolData?.features?.length > 0 && (
					<section className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{toolData.features
							.slice(0, 6)
							.map((feature: string, idx: number) => (
								<div
									key={idx}
									className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
								>
									<div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
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
					</section>
				)}

				{/* How To - Simple Steps */}
				{toolData?.howTo?.steps?.length > 0 && (
					<section className="space-y-4">
						<div className="flex items-center gap-2 mb-4">
							<Lightbulb className="w-5 h-5 text-primary" />
							<h2 className="text-xl font-semibold">How to Use</h2>
						</div>
						<div className="space-y-3">
							{toolData.howTo.steps.map((step: any, idx: number) => (
								<div key={idx} className="flex gap-4">
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
										{idx + 1}
									</div>
									<div className="space-y-1">
										<h3 className="font-medium text-base">{step.name}</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{step.text}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* FAQ - Accordion Style */}
				{toolData?.faqs?.length > 0 && (
					<section className="space-y-4">
						<div className="flex items-center gap-2 mb-4">
							<HelpCircle className="w-5 h-5 text-primary" />
							<h2 className="text-xl font-semibold">FAQ</h2>
						</div>
						<div className="space-y-3">
							{toolData.faqs.map((faq: any, idx: number) => (
								<div
									key={idx}
									className="rounded-lg border border-border bg-card p-4"
								>
									<h3 className="font-medium text-base mb-2">{faq.question}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{faq.answer}
									</p>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Info Box */}
				<section className="bg-muted/50 rounded-xl p-6 border border-border">
					<div className="flex items-start gap-4">
						<Info className="w-5 h-5 text-primary mt-0.5" />
						<div className="space-y-2">
							<h3 className="font-semibold">About This Tool</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								This tool is part of 30tools' collection of free online
								utilities. All processing is done securely in your browser. No
								data is uploaded to our servers.
							</p>
							{toolData && (
								<p className="text-xs text-muted-foreground mt-2">
									Tool ID: {toolId} • Category: {categoryName}
								</p>
							)}
						</div>
					</div>
				</section>
			</div>
		</ToolLayout>
	);
}
