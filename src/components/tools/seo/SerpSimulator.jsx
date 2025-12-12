"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SerpSimulator() {
    const [title, setTitle] = useState("Your Page Title Goes Here | Brand");
    const [description, setDescription] = useState("This is your meta description. It should be enticing and between 150-160 characters long to maximize click-through rates from search results.");
    const [url, setUrl] = useState("example.com/your-page-slug");

    const titleWidth = title.length * 9; // Approx px
    const titleLimit = 580; // px limit Google approx

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Metadata Editor</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Title Tag</label>
                            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>{title.length} chars</span>
                                <span className={title.length > 60 ? "text-red-500" : "text-green-500"}>Max ~60</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Meta Description</label>
                            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>{description.length} chars</span>
                                <span className={description.length > 160 ? "text-red-500" : "text-green-500"}>Max ~160</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">URL</label>
                            <Input value={url} onChange={(e) => setUrl(e.target.value)} />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Preview */}
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Google Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="font-arial font-sans select-none pointer-events-none">
                            {/* Mobile View */}
                            <div className="mb-8">
                                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Mobile Result</p>
                                <div className="max-w-[360px] bg-white dark:bg-black p-2 rounded">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
                                        <div className="text-sm text-[#202124] dark:text-[#dadce0]">
                                            <div className="text-xs truncate">{url.split('/')[0]}</div>
                                            <div className="text-xs truncate text-[#5f6368] dark:text-[#bdc1c6]">{url}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-[#1a0dab] dark:text-[#8ab4f8] text-lg leading-6 truncate hover:underline cursor-pointer mb-1">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-[#4d5156] dark:text-[#bdc1c6] leading-5 line-clamp-2">
                                        {description}
                                    </p>
                                </div>
                            </div>

                            {/* Desktop View */}
                            <div>
                                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Desktop Result</p>
                                <div className="max-w-[600px] bg-white dark:bg-black p-2 rounded">
                                    <div className="flex items-center gap-1 text-sm text-[#202124] dark:text-[#dadce0] mb-1">
                                        <cite className="not-italic">{url}</cite>
                                        <span className="text-[#5f6368] dark:text-[#bdc1c6] -mt-2">.</span>
                                    </div>
                                    <h3 className="text-[#1a0dab] dark:text-[#8ab4f8] text-xl truncate hover:underline cursor-pointer mb-1">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-[#4d5156] dark:text-[#bdc1c6] leading-5 line-clamp-2">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
