import {
	AuthorBio,
	BreadcrumbsEnhanced,
	FAQSection,
	ToolFeatures,
	UserComments,
} from "@/components/seo";
import StructuredData from "@/components/shared/StructuredData";
import { getToolById } from "@/lib/tools";
import React from "react";

interface ToolSEOLayoutProps {
	toolId: string;
	children: React.ReactNode;
	faqs?: any[];
	features?: any[];
	reviews?: any[];
	howTo?: any;
}

export default function ToolSEOLayout({
	toolId,
	children,
	faqs,
	features,
	reviews,
	howTo,
}: ToolSEOLayoutProps) {
	const tool = getToolById(toolId);

	if (!tool) {
		return <>{children}</>;
	}

	// Merge props with tool data, preferring props if provided
	const mergedTool = {
		...tool,
		faqs: faqs || tool.faqs || [],
		features: features || tool.features || [],
		reviews: reviews || tool.reviews || [],
		howTo: howTo || tool.howTo,
		author: tool.author || "30Tools Engineering Team"
	};

	return (
		<div className="tool-page-container">
			<StructuredData tool={mergedTool} />

			<div className="container mx-auto px-4 py-8">
				<BreadcrumbsEnhanced />

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
					<div className="lg:col-span-12">
						{/* Main Tool Area */}
						<div className="mb-12">
							<h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground">
								{mergedTool.name}
							</h1>
							{children}
						</div>

						{/* Tool Features */}
						<ToolFeatures features={mergedTool.features} />

						{/* FAQs */}
						<FAQSection
							faqs={mergedTool.faqs}
							title={`${mergedTool.name} FAQs`}
						/>

						{/* Comments */}
						<UserComments toolId={mergedTool.id} toolName={mergedTool.name} />

						{/* E-E-A-T Author Bio */}
						<AuthorBio author={mergedTool.author} />
					</div>

					{/* <div className="lg:col-span-4 space-y-8">
            <RelatedTools currentToolId={mergedTool.id} category={mergedTool.category} />
          </div> */}
				</div>
			</div>
		</div>
	);
}
