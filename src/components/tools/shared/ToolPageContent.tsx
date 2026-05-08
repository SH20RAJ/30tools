import React from "react";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { generateToolSchema, generateFAQSchema } from "@/lib/seo";
import { getRelatedTools, type Tool } from "@/lib/tools";
import RegisteredToolMount from "./RegisteredToolMount";

interface ToolPageContentProps {
    tool: Tool;
    intentData?: any;
}

export default function ToolPageContent({ tool, intentData }: ToolPageContentProps) {
    const toolId = intentData?.parentToolId || tool.id;
    
    // Use intent metadata if available to override tool's default seo data
    const enrichedTool = {
        ...tool,
        seoTitle: intentData?.title || tool.seoTitle || `${tool.name} Online - Free & No Signup`,
        seoDescription: intentData?.description || tool.seoDescription || tool.description,
        article: intentData?.article || tool.article,
        faqs: intentData?.faqs || tool.faqs,
    };
    
    const toolSchema = generateToolSchema({
        name: enrichedTool.name,
        description: enrichedTool.seoDescription,
        path: enrichedTool.route,
        category: enrichedTool.category === "pdf" ? "MultimediaApplication" : "UtilitiesApplication"
    });

    const faqSchema = enrichedTool.faqs ? generateFAQSchema(enrichedTool.faqs) : null;

    const relatedTools = getRelatedTools(tool, 6);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            
            <ToolLayout tool={enrichedTool} relatedTools={relatedTools}>
                <div className="min-h-[400px]">
                    <RegisteredToolMount toolId={toolId} />
                </div>
            </ToolLayout>
        </>
    );
}
