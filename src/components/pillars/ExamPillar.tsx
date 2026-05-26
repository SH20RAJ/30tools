"use client";

import React from "react";
import Link from "next/link";
import { 
    FileImage, 
    User, 
    FileText, 
    FileCheck, 
    Scale, 
    Image as ImageIcon,
    FileSpreadsheet,
    Scissors,
    ArrowRightLeft,
    CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const examTools = [
    {
        title: "Official Exam Resizers",
        description: "Resize photos and signatures to match exact guidelines for government and entrance exams.",
        tools: [
            { name: "UPSC Photo Resizer", icon: User, href: "/upsc-photo-resizer", desc: "350x350 pixels, under 300KB constraint" },
            { name: "SSC Photo Resizer", icon: User, href: "/ssc-photo-resizer", desc: "3.5 x 4.5 cm (350x450px), 20KB-50KB constraint" },
            { name: "NEET Photo Resizer", icon: FileImage, href: "/neet-photo-resizer", desc: "NTA NEET passport and 4x6 postcard resizer" },
            { name: "JEE Photo Resizer", icon: FileImage, href: "/jee-photo-resizer", desc: "JEE Main/Advanced photo & signature resizer" },
            { name: "CUET Photo Resizer", icon: FileImage, href: "/cuet-photo-resizer", desc: "NTA CUET application photo and signature dimensions" },
            { name: "Railway Exam Resizer", icon: User, href: "/railway-exam-photo-resizer", desc: "RRB/RRC photo and signature dimension resizer" },
        ]
    },
    {
        title: "Size & Format Compressors",
        description: "Compress images and PDF documents to fit within strict portal upload limits.",
        tools: [
            { name: "Signature Resizer Under 20KB", icon: Scissors, href: "/signature-resizer-under-20kb", desc: "Keep signatures readable and under 20KB" },
            { name: "Photo Compressor Under 50KB", icon: Scale, href: "/photo-compressor-under-50kb", desc: "Shrink passport photo size strictly under 50KB" },
            { name: "PDF Compressor Under 200KB", icon: FileText, href: "/pdf-compressor-under-200kb", desc: "Compress PDF certificates under 200KB" },
            { name: "JPG to PDF for Exam Forms", icon: ArrowRightLeft, href: "/jpg-to-pdf-exam-forms", desc: "Merge images into single PDF for portals" },
        ]
    },
    {
        title: "Photo Tools & Checkers",
        description: "Verify your files and create print-ready standard document files.",
        tools: [
            { name: "Passport Photo Maker", icon: ImageIcon, href: "/passport-photo-maker", desc: "Create printable standard sheets (2x2 inch, 3.5x4.5cm)" },
            { name: "Form Image Size Checker", icon: FileCheck, href: "/form-image-size-checker", desc: "Verify dimensions & size before submitting" },
        ]
    }
];

export default function ExamPillar() {
    return (
        <div className="space-y-32">
            {/* Tool Grid Section */}
            <div className="grid grid-cols-1 gap-16">
                {examTools.map((group, i) => (
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
                                                <Badge variant="outline" className="rounded-none opacity-0 group-hover:opacity-100 transition-opacity uppercase text-[10px] tracking-widest font-bold">Launch</Badge>
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
                    <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-primary">Prepare Exam Portal Uploads Instantly and Privately</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-muted-foreground">
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                Indian government recruitment and entrance exam portals (like UPSC, SSC, NEET, JEE, and Railways) enforce strict limits on the width, height, and file size of photo and signature uploads. Preparing these files manually often leads to frustration and rejection. Our dedicated Exam Tools help you resize and compress your documents to the exact specs in seconds.
                            </p>
                            <p>
                                **Privacy-First browser-based processing.** We do not upload your personal passport photos, signatures, or academic certificates to any server. All cropping, resizing, and PDF conversion happens **directly in your browser** using JavaScript and HTML5 canvas APIs, making it 100% secure and safe from identity theft.
                            </p>
                        </div>
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                No registration, no email signup, and no software installation required. Our tools are optimized to run on all mobile browsers, allowing you to prepare your form documents directly from your smartphone. Keep your data private and avoid cyber cafes.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Standard Exam Specs:</strong> Built-in dimensions for NTA, UPSC, SSC, RRB, and state boards.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>File Size Targets:</strong> Compress signature under 20KB and photos under 50KB cleanly.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <span><strong>Multi-Format:</strong> Download in JPG, PNG, or convert certificates directly to PDF.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">NTA & UPSC Compliant</h3>
                        <p className="text-muted-foreground">Our templates are updated to match the latest notifications of NTA JEE/NEET, UPSC Civil Services, SSC CGL/CHSL, and Railway RRB exams.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Scanned Signature Enhancer</h3>
                        <p className="text-muted-foreground">Compress scanned signatures without losing quality. Our canvas rendering ensures text and ink strokes remain perfectly legible even under 20KB.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">100% Free</h3>
                        <p className="text-muted-foreground">No payment, no watermark, no trial period. Access all resizers, compilers, and checkers completely free for your college and exam forms.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
