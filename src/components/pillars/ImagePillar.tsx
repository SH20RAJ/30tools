"use client";

import React from "react";
import Link from "next/link";
import { 
    ImageIcon, 
    Maximize, 
    Minimize, 
    Zap, 
    Layers, 
    Eraser, 
    Crop, 
    Palette, 
    Type, 
    Download,
    CheckCircle2,
    Monitor
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const imageTools = [
    {
        title: "Optimization & Compression",
        description: "Speed up your website with high-performance image optimization.",
        tools: [
            { name: "Image Compressor", icon: Zap, href: "/image-compressor", desc: "Reduce size with zero quality loss" },
            { name: "Image Resizer", icon: Maximize, href: "/image-resizer", desc: "Change dimensions for social media" },
            { name: "Image to WebP", icon: Monitor, href: "/image-converter", desc: "Modern format for faster loading" },
            { name: "HEIC to JPG", icon: Download, href: "/image-converter", desc: "Convert iPhone photos for Windows" },
            { name: "Image to Base64", icon: Layers, href: "/image-to-base64", desc: "Inline images into CSS or HTML" },
        ]
    },
    {
        title: "Creative Editing",
        description: "Professional tools for quick creative adjustments and branding.",
        tools: [
            { name: "Background Remover", icon: Eraser, href: "/background-remover", desc: "AI-powered subject isolation" },
            { name: "Circular Crop", icon: Crop, href: "/circular-image-crop", desc: "Perfect profile pictures for social" },
            { name: "Color Picker", icon: Palette, href: "/image-color-picker", desc: "Extract HEX/RGB from any image" },
            { name: "Photo Enhancer", icon: Zap, href: "/photo-enhancer", desc: "Sharpen and clarify blurry shots" },
            { name: "Watermark Adder", icon: Type, href: "/image-watermark", desc: "Protect your creative work" },
        ]
    },
    {
        title: "Format Conversion",
        description: "Universal compatibility for all your digital assets.",
        tools: [
            { name: "JPG to PNG", icon: Download, href: "/image-converter", desc: "Lossless transparent conversion" },
            { name: "SVG to PNG", icon: Download, href: "/image-converter", desc: "Rasterize vector files for web" },
            { name: "ICO Generator", icon: Download, href: "/favicon-generator", desc: "Create favicons from any logo" },
            { name: "GIF Maker", icon: Download, href: "/gif-generator", desc: "Convert video or images to animation" },
            { name: "WebP to JPG", icon: Download, href: "/image-converter", desc: "Legacy format compatibility" },
        ]
    }
];

export default function ImagePillar() {
    return (
        <div className="space-y-32">
            {/* Tool Grid Section */}
            <div className="grid grid-cols-1 gap-16">
                {imageTools.map((group, i) => (
                    <div key={i} className="space-y-8">
                        <div className="space-y-2 border-l-4 border-secondary pl-6 py-2">
                            <h2 className="text-3xl font-bold tracking-tight">{group.title}</h2>
                            <p className="text-muted-foreground text-lg">{group.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.tools.map((tool, j) => (
                                <Link key={j} href={tool.href} className="group">
                                    <Card className="rounded-none border-border/60 bg-card/40 hover:bg-card/60 transition-all duration-300 hover:border-secondary/40 group-hover:shadow-2xl">
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="p-3 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
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
                    <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-secondary">The Fast, Private Way to Edit and Optimize Images</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-muted-foreground">
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                High-quality images shouldn't slow down your workflow or your website. Our suite of free online image tools is designed for creators, developers, and social media managers who need professional results without the bloat of traditional photo editing software. From background removal to advanced WebP compression, we handle it all.
                            </p>
                            <p>
                                **Privacy is our Core Feature.** Most online editors upload your personal photos to their servers. 30tools processes your images **locally in your browser**. Your data never leaves your device, ensuring that sensitive documents, personal photos, and proprietary designs remain 100% private.
                            </p>
                        </div>
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                Whether you're optimizing a landing page for Core Web Vitals or preparing photos for an Instagram campaign, our tools are built for speed and precision. No signups, no "Pro" subscriptions, and no hidden watermarks. Just pure, functional tools that work when you need them.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                                    <span><strong>Instant Processing:</strong> Zero server latency. Results in milliseconds.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                                    <span><strong>Lossless Optimization:</strong> Maintain crisp details while reducing size.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                                    <span><strong>Universal Formats:</strong> Support for JPG, PNG, WEBP, HEIC, and SVG.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">SEO Optimized</h3>
                        <p className="text-muted-foreground">Our compression tools are fine-tuned to help you hit those Green Lighthouse scores by stripping unnecessary metadata and using modern formats.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Social Ready</h3>
                        <p className="text-muted-foreground">Instantly resize and crop images for Instagram, LinkedIn, and Twitter with our pre-set dimension engine built into the resizer.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Safe & Anonymous</h3>
                        <p className="text-muted-foreground">No tracking, no cookies, no signup. Just a clean, distraction-free environment to get your creative tasks done securely.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
