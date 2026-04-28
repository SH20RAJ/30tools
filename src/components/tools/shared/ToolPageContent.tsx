import React from "react";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolComponent } from "@/lib/tool-registry";
import { generateToolSchema, generateFAQSchema } from "@/lib/seo";
import { getRelatedTools, type Tool } from "@/lib/tools";
import RegisteredToolMount from "./RegisteredToolMount";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
                                                {tool.features.map((feature: string, i: number) => (
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
                                                {tool.howTo.steps?.map((step: any, i: number) => (
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

                    {/* Related Tools Section */}
                    {relatedTools.length > 0 && (
                        <div className="mt-20 pt-12 border-t border-border/50">
                            <h2 className="text-3xl font-bold mb-8">Related Tools</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {relatedTools.map((relatedTool) => (
                                    <Link
                                        key={relatedTool.id}
                                        href={relatedTool.route}
                                        className="group p-6 bg-card border border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-300 no-underline h-full relative overflow-hidden flex flex-col"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10 flex-grow">
                                            <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                                                {relatedTool.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {relatedTool.description}
                                            </p>
                                        </div>
                                        <div className="mt-4 text-primary text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all relative z-10">
                                            Try Now <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ToolLayout>
        </>
    );
}
