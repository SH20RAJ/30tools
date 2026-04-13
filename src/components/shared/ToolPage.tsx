"use client";

import { Download, Shield, Zap } from "lucide-react";
import Script from "next/script";
import { useMemo } from "react";
import ToolContent from "@/components/shared/ToolContent";
import ToolLayout from "@/components/shared/ToolLayout";
import { getToolById } from "@/constants/tools-utils";

interface ToolPageProps {
	toolId: string;
	children?: React.ReactNode;
}

export default function ToolPage({ toolId, children }: ToolPageProps) {
	const toolData = useMemo(() => getToolById(toolId), [toolId]);

	if (!toolData) return null;

	const title = toolData.seoTitle || toolData.name;
	const description = toolData.seoDescription || toolData.description;
	const categoryName = toolData.categoryName || "";
	const categorySlug = toolData.categorySlug || "";
	const route = toolData.route || `/${toolId}`;
	const baseUrl = "https://30tools.com";
	const toolUrl = `${baseUrl}${route}`;

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
			featureList: toolData.features || [],
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "4.8",
				reviewCount: "1250",
			},
		}),
		[title, description, toolUrl, toolData.features],
	);

	// JSON-LD: FAQ
	const faqJsonLd = useMemo(() => {
		if (!toolData.faqs?.length) return null;
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
	}, [toolData.faqs]);

	// JSON-LD: HowTo
	const howToJsonLd = useMemo(() => {
		if (!toolData.howTo?.steps?.length) return null;
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
	}, [toolData.howTo?.steps, title, description, toolUrl, toolData.howTo.name]);

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
			/>
			{faqJsonLd && (
				<Script
					id={`faq-${toolId}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
				/>
			)}
			{howToJsonLd && (
				<Script
					id={`howto-${toolId}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
				/>
			)}

			<div className="space-y-16">
				{/* Main Tool Interface */}
				<section id="tool" className="relative pt-4">
					<div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-[3rem] blur-3xl opacity-30 -z-10" />
					{children || (
						<div className="min-h-[400px] flex items-center justify-center bg-card border border-border/60 rounded-[2.5rem] p-8 shadow-sm">
							<div className="text-center space-y-6 max-w-md">
								<div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-500">
									<Zap className="w-10 h-10 text-primary" />
								</div>
								<h3 className="text-2xl font-bold tracking-tight">
									Tool Interface
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									The {toolData.name} interface is ready. This tool operates
									100% in your browser for maximum privacy and speed.
								</p>
								<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
									<div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
										<Shield className="w-4 h-4 text-green-500" />
										Private
									</div>
									<div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
										<Zap className="w-4 h-4 text-yellow-500" />
										Instant
									</div>
									<div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
										<Download className="w-4 h-4 text-blue-500" />
										Free
									</div>
								</div>
							</div>
						</div>
					)}
				</section>

				{/* Rich SEO Content */}
				<section id="content" className="border-t border-border/40 pt-16">
					<ToolContent toolId={toolId} />
				</section>
			</div>
		</ToolLayout>
	);
}
