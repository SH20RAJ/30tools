import React from "react";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolComponent } from "@/lib/tool-registry";
import { generateToolSchema, generateFAQSchema } from "@/lib/seo";
import type { Tool } from "@/lib/tools";
import RegisteredToolMount from "./RegisteredToolMount";

interface ToolPageContentProps {
    tool: Tool;
    intentData?: any;
}

export default function ToolPageContent({ tool, intentData }: ToolPageContentProps) {
    const toolId = intentData?.parentToolId || tool.id;
    
    // Use intent metadata if available, else fallback to tool data
    const title = intentData?.title || tool.seoTitle || `${tool.name} Online - Free & No Signup`;
    const description = intentData?.description || tool.seoDescription || tool.description;
    
    const toolSchema = generateToolSchema({
        name: tool.name,
        description: tool.description,
        path: tool.route,
        category: tool.category === "pdf" ? "MultimediaApplication" : "UtilitiesApplication"
    });

    const faqSchema = intentData?.faqs ? generateFAQSchema(intentData.faqs) : 
                     (tool.faqs ? generateFAQSchema(tool.faqs) : null);

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
            
            <ToolLayout tool={tool}>
                <div className="space-y-12">
                    {/* Main Tool Component */}
                    <div className="min-h-[400px]">
                        <RegisteredToolMount toolId={toolId} />
                    </div>

                    {/* SEO Content Section */}
                    {(intentData?.article || tool.description) && (
                        <div className="prose prose-slate dark:prose-invert max-w-none mt-16 p-8 bg-card border border-border rounded-none">
                            {intentData?.article ? (
                                <div dangerouslySetInnerHTML={{ __html: intentData.article }} />
                            ) : (
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">About {tool.name}</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {tool.description}
                                    </p>
                                    
                                    {tool.features && (
                                        <div className="mt-8">
                                            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                                {tool.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-primary font-bold">✓</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {tool.howTo && (
                                        <div className="mt-12">
                                            <h3 className="text-2xl font-semibold mb-6">{tool.howTo.name || `How to use ${tool.name}`}</h3>
                                            <div className="space-y-6">
                                                {tool.howTo.steps?.map((step, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                                            {i + 1}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-lg">{step.name}</h4>
                                                            <p className="text-muted-foreground">{step.text}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* FAQ Section */}
                    {(intentData?.faqs || tool.faqs) && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                            <div className="grid gap-6">
                                {(intentData?.faqs || tool.faqs).map((faq: any, i: number) => (
                                    <div key={i} className="bg-card p-6 border border-border rounded-none">
                                        <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ToolLayout>
        </>
    );
}
