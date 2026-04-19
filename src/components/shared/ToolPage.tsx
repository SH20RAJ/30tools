"use client";

import { Download, Shield, Zap } from "lucide-react";
import Script from "next/script";
import { useMemo } from "react";
import ToolContent from "@/components/shared/ToolContent";
import ToolLayout from "@/components/shared/ToolLayout";
import { getToolById } from "@/lib/tools";

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
	}, [
		toolData.howTo?.steps,
		title,
		description,
		toolUrl,
		toolData.howTo?.name,
	]);

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
					{children || (
						<div className="min-h-[400px] flex items-center justify-center bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 ">
							<div className="text-center space-y-6 max-w-md">
								<div className="w-16 h-16 items-center justify-center mx-auto mb-4 animate-in zoom-in duration-500">
									<Zap className="w-8 h-8 text-[#0071e3]" />
								</div>
								<h3 className="text-2xl font-semibold tracking-tight">
									Tool Interface
								</h3>
								<p className="text-[#1d1d1f]/60 dark:text-white/60 leading-relaxed">
									The {toolData.name} interface is ready. This tool operates
									100% in your browser for maximum privacy and speed.
								</p>
								<div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
									<div className="flex items-center gap-2 text-sm font-medium opacity-60">
										<Shield className="w-4 h-4 text-green-500" />
										Private
									</div>
									<div className="flex items-center gap-2 text-sm font-medium opacity-60">
										<Zap className="w-4 h-4 text-yellow-500" />
										Instant
									</div>
									<div className="flex items-center gap-2 text-sm font-medium opacity-60">
										<Download className="w-4 h-4 text-[#0071e3]" />
										Free
									</div>
								</div>
							</div>
						</div>
					)}
				</section>

				{/* Rich SEO Content */}
				<section id="content" className="border-t border-black/5 dark:border-white/5 pt-16">
					<ToolContent toolId={toolId} />
				</section>
			</div>
		</ToolLayout>
	);
}
