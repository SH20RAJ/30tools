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
import { Progress } from "@/components/ui/progress";
import { Globe, Search, BarChart, Smartphone, gauge, Gauge, ShieldCheck, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

/**
 * Generic SEO Analyzer Component
 * can handle: meta-tag-analyzer, page-speed, mobile, local-seo, backlink, competitor
 */
export default function SeoAnalyzer({ type = "audit", title = "SEO Audit" }) {
    const [url, setUrl] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState(null);

    const analyze = async () => {
        if (!url) {
            toast.error("Please enter a website URL");
            return;
        }
        if (!url.startsWith("http")) {
            toast.error("Please include http:// or https://");
            return;
        }

        setIsAnalyzing(true);
        setProgress(0);
        setResult(null);

        // Simulate analysis
        const steps = [10, 30, 45, 60, 80, 90, 100];
        for (const step of steps) {
            await new Promise(r => setTimeout(r, 600));
            setProgress(step);
        }

        // Generate mock results based on type
        const mockResult = generateMockResult(type, url);
        setResult(mockResult);
        setIsAnalyzing(false);
        toast.success("Analysis complete!");
    };

    const generateMockResult = (analysisType, targetUrl) => {
        // In a real app, this would be an API response
        const domain = new URL(targetUrl).hostname;

        switch (analysisType) {
            case "meta-tags":
                return {
                    score: 85,
                    data: [
                        { label: "Title Tag", status: "good", value: `${domain} - Official Website` },
                        { label: "Meta Description", status: "warning", value: "Missing meta description or too short." },
                        { label: "Canonical URL", status: "good", value: targetUrl },
                        { label: "Robots.txt", status: "good", value: "Found" },
                    ]
                };
            case "page-speed":
                return {
                    score: 72,
                    data: [
                        { label: "First Contentful Paint", value: "1.2s", status: "good" },
                        { label: "Speed Index", value: "3.5s", status: "warning" },
                        { label: "Largest Contentful Paint", value: "2.8s", status: "warning" },
                        { label: "Cumulative Layout Shift", value: "0.05", status: "good" },
                    ]
                };
            case "mobile":
                return {
                    score: 90,
                    data: [
                        { label: "Viewport Tag", status: "good", value: "Found" },
                        { label: "Touch Elements", status: "good", value: "Well spaced" },
                        { label: "Font Size", status: "good", value: "Readable (16px+)" },
                    ]
                };
            case "backlink":
                return {
                    score: 0, // Not a score-based tool usually, but using structure
                    data: [
                        { label: "Total Backlinks", value: "1,245", status: "info" },
                        { label: "Referring Domains", value: "342", status: "info" },
                        { label: "Domain Authority", value: "45/100", status: "good" },
                    ]
                };
            default: // generic audit
                return {
                    score: 78,
                    data: [
                        { label: "SEO Score", value: "78/100", status: "good" },
                        { label: "Performance", value: "82/100", status: "good" },
                        { label: "Security", value: "100/100", status: "good" },
                    ]
                };
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Search className="w-5 h-5 text-primary" />
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-1 relative">
                            <Globe className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Enter website URL (e.g. https://example.com)"
                                className="pl-10 h-11 text-lg"
                            />
                        </div>
                        <Button size="lg" onClick={analyze} disabled={isAnalyzing}>
                            {isAnalyzing ? "Analyzing..." : "Analyze"}
                        </Button>
                    </div>

                    {isAnalyzing && (
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Scanning website...</span>
                                <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>
                    )}
                </CardContent>
            </Card>

            {result && (
                <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <CardHeader className="border-b">
                        <div className="flex items-center justify-between">
                            <CardTitle>Analysis Results</CardTitle>
                            {result.score > 0 && (
                                <div className={`text-2xl font-bold ${result.score > 80 ? 'text-green-500' : result.score > 50 ? 'text-amber-500' : 'text-red-500'}`}>
                                    {result.score}/100
                                </div>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            {result.data.map((item, i) => (
                                <div key={i} className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                    <span className="font-medium text-muted-foreground">{item.label}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono">{item.value}</span>
                                        {item.status === 'good' && <div className="w-3 h-3 rounded-full bg-green-500" />}
                                        {item.status === 'warning' && <div className="w-3 h-3 rounded-full bg-amber-500" />}
                                        {item.status === 'bad' && <div className="w-3 h-3 rounded-full bg-red-500" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
