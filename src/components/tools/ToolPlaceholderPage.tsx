"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import ToolLayout from "@/components/shared/ToolLayout";
import { getToolById } from "@/constants/tools-utils";

interface ToolPlaceholderPageProps {
	toolId: string;
	title: string;
	description: string;
	categoryName: string;
	categorySlug: string;
}

export default function ToolPlaceholderPage({
	toolId,
	title,
	description,
	categoryName,
	categorySlug,
}: ToolPlaceholderPageProps) {
	const [toolData, setToolData] = useState<any>(null);

	useEffect(() => {
		// Fetch tool data client-side from tools.json
		const tool = getToolById(toolId);
		if (tool) {
			setToolData(tool);
		}
	}, [toolId]);

	const baseUrl = "https://30tools.com";
	const toolUrl = `${baseUrl}${toolId !== "search" ? `/${toolId}` : "/search"}`;

	return (
		<ToolLayout
			toolId={toolId}
			title={title}
			description={description}
			category={{ name: categoryName, slug: categorySlug }}
		>
			{/* JSON-LD Structured Data: WebApplication */}
			<Script
				id={`software-app-${toolId}`}
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
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
					}),
				}}
				strategy="afterInteractive"
			/>

			{/* JSON-LD Structured Data: FAQPage (if available) */}
			{toolData?.faqs &&
				Array.isArray(toolData.faqs) &&
				toolData.faqs.length > 0 && (
					<Script
						id={`faq-${toolId}`}
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
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
							}),
						}}
						strategy="afterInteractive"
					/>
				)}

			{/* JSON-LD Structured Data: HowTo (if available) */}
			{toolData?.howTo &&
				toolData.howTo.steps &&
				toolData.howTo.steps.length > 0 && (
					<Script
						id={`howto-${toolId}`}
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
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
							}),
						}}
						strategy="afterInteractive"
					/>
				)}

			<div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-8">
				{/* Main Description */}
				<section className="space-y-4">
					<p className="text-base text-muted-foreground leading-relaxed">
						{description}
					</p>
					<p className="text-sm text-muted-foreground">
						100% free, no registration required. All processing happens securely
						in your browser.
					</p>
				</section>

				{/* Features Section */}
				{toolData?.features &&
					Array.isArray(toolData.features) &&
					toolData.features.length > 0 && (
						<section className="space-y-4">
							<h2 className="text-2xl font-bold">Key Features</h2>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{toolData.features.map((feature: string, idx: number) => (
									<li key={idx} className="flex items-start gap-3">
										<span className="text-primary mt-1">✓</span>
										<span className="text-sm text-muted-foreground">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</section>
					)}

				{/* HowTo Section */}
				{toolData?.howTo &&
					toolData.howTo.steps &&
					toolData.howTo.steps.length > 0 && (
						<section className="space-y-4" id="how-to">
							<h2 className="text-2xl font-bold">How to Use This Tool</h2>
							<div className="space-y-4">
								{toolData.howTo.steps.map((step: any, idx: number) => (
									<div key={idx} className="flex gap-4">
										<div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
											{idx + 1}
										</div>
										<div className="space-y-1">
											<h3 className="font-semibold">{step.name}</h3>
											<p className="text-sm text-muted-foreground">
												{step.text}
											</p>
										</div>
									</div>
								))}
							</div>
						</section>
					)}

				{/* FAQ Section */}
				{toolData?.faqs &&
					Array.isArray(toolData.faqs) &&
					toolData.faqs.length > 0 && (
						<section className="space-y-4" id="faq">
							<h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
							<div className="space-y-4">
								{toolData.faqs.map((faq: any, idx: number) => (
									<div
										key={idx}
										className="border-b border-border pb-4 last:border-0"
									>
										<h3 className="font-semibold mb-2">{faq.question}</h3>
										<p className="text-sm text-muted-foreground">
											{faq.answer}
										</p>
									</div>
								))}
							</div>
						</section>
					)}

				{/* Fallback message if no data */}
				{!toolData && (
					<div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
						<p>
							This tool is being prepared with SEO-ready metadata and rich
							content. Full functionality will be added soon.
						</p>
					</div>
				)}
			</div>
		</ToolLayout>
	);
}
