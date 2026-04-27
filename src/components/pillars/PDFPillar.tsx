"use client";

import React from "react";
import Link from "next/link";
import { 
    FileText, 
    Merge, 
    Scissors, 
    Zap, 
    Lock, 
    Unlock, 
    FileImage, 
    FileCode, 
    Type, 
    Database,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pdfTools = [
    {
        title: "Conversion Suite",
        description: "Transform your documents to and from PDF without losing formatting.",
        tools: [
            { name: "Image to PDF", icon: FileImage, href: "/image-to-pdf", desc: "Convert JPG, PNG, WEBP to PDF" },
            { name: "PDF to Image", icon: FileImage, href: "/pdf-to-image", desc: "Extract pages as JPG or PNG" },
            { name: "Word to PDF", icon: FileText, href: "/word-to-pdf", desc: "High-quality DOCX conversion" },
            { name: "PDF to Word", icon: FileText, href: "/pdf-to-word", desc: "Edit PDFs in Microsoft Word" },
            { name: "HTML to PDF", icon: FileCode, href: "/html-to-pdf", desc: "Convert web snippets to PDF" },
        ]
    },
    {
        title: "Optimization & Editing",
        description: "Refine your PDF files for better sharing and professional presentation.",
        tools: [
            { name: "Compress PDF", icon: Zap, href: "/pdf-compressor", desc: "Reduce file size without quality loss" },
            { name: "PDF Editor", icon: Type, href: "/pdf-editor", desc: "Add text and annotations to pages" },
            { name: "Page Numbers", icon: Database, href: "/pdf-page-numbers", desc: "Add custom pagination to documents" },
            { name: "PDF Watermark", icon: CheckCircle2, href: "/pdf-watermark", desc: "Add logos or text watermarks" },
            { name: "Metadata Editor", icon: FileText, href: "/pdf-metadata-editor", desc: "Edit Title, Author, and Keywords" },
        ]
    },
    {
        title: "Structure & Security",
        description: "Manage document layout and protect sensitive information.",
        tools: [
            { name: "Merge PDF", icon: Merge, href: "/pdf-merger", desc: "Combine multiple PDFs into one" },
            { name: "Split PDF", icon: Scissors, href: "/pdf-splitter", desc: "Extract specific pages from PDF" },
            { name: "Rotate PDF", icon: ArrowRight, href: "/pdf-rotation", desc: "Fix orientation of individual pages" },
            { name: "Protect PDF", icon: Lock, href: "/pdf-protect", desc: "Secure documents with AES encryption" },
            { name: "Unlock PDF", icon: Unlock, href: "/pdf-unlocker", desc: "Remove restrictions from protected files" },
        ]
    }
];

export default function PDFPillar() {
    return (
        <div className="space-y-32">
            {/* Tool Grid Section */}
            <div className="grid grid-cols-1 gap-16">
                {pdfTools.map((group, i) => (
                    <div key={i} className="space-y-8">
                        <div className="space-y-2 border-l-4 border-primary pl-6 py-2">
                            <h2 className="text-3xl font-bold tracking-tight">{group.title}</h2>
                            <p className="text-muted-foreground text-lg">{group.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.tools.map((tool, j) => (
                                <Link key={j} href={tool.href} className="group">
                                    <Card className="rounded-none border-border/60 bg-card/40 hover:bg-card/60 transition-all duration-300 hover:border-primary/40 group-hover:shadow-2xl">
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="p-3 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <tool.icon className="h-6 w-6" />
                                                </div>
                                                <Badge variant="outline" className="rounded-none opacity-0 group-hover:opacity-100 transition-opacity uppercase text-[10px] tracking-widest font-bold">Try Now</Badge>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Deep Content Section for SEO */}
            <section className="prose prose-invert max-w-none space-y-12">
                <div className="bg-muted/30 p-12 border-y border-border/40">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-8">Professional PDF Management Without the Premium Price Tag</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-muted-foreground">
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                Managing PDF files shouldn't require expensive subscriptions or heavy software installations. At 30tools, we've built a comprehensive suite of PDF utilities that bring enterprise-grade functionality directly to your browser. Whether you need to merge legal documents, compress portfolios for email, or secure sensitive reports, our tools deliver precision results in seconds.
                            </p>
                            <p>
                                Our architecture is built on the principle of **Local-First Processing**. Unlike traditional online PDF editors that upload your private documents to a remote server, 30tools uses advanced JavaScript libraries to process your files right on your computer. This means your data never leaves your device, providing the highest possible level of security and privacy.
                            </p>
                        </div>
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                Why choose 30tools over SmallPDF or iLovePDF? The answer is simple: **Zero Friction**. We have eliminated signups, daily usage limits, and watermarks. Our mission is to provide professional-grade tools that are genuinely free, fast, and accessible to everyone — from students and researchers to developers and business owners.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Browser-Side Encryption:</strong> AES-256 protection processed locally.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>High-Fidelity Conversion:</strong> Maintain fonts, layers, and formatting.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Batch Processing:</strong> Handle multiple files at once without a Pro account.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Secure by Design</h3>
                        <p className="text-muted-foreground">Every tool in our PDF suite operates without server-side storage. Your files are processed in a secure browser sandbox, ensuring 100% data sovereignty.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Format Integrity</h3>
                        <p className="text-muted-foreground">Our conversion engines are optimized to respect complex layouts, tables, and embedded fonts, ensuring your Word or Image conversions look professional.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Mobile First</h3>
                        <p className="text-muted-foreground">No app needed. Access the full power of our PDF suite on your iPhone, Android, or tablet with a fully responsive, high-performance interface.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
