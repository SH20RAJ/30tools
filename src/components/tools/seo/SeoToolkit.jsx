"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Globe, MoveRight, CheckCircle2, AlertTriangle, XCircle, ChevronRight, FileCode, Shield, Zap, Smartphone, Image as ImageIcon, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

// Mock Data for the 27 Checks (Features Grid)
const CHECKS = [
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Title Tag Analysis", desc: "Check length, keyword placement, and truncation issues." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Meta Description", desc: "Analyze description length and quality for CTR." },
    { icon: <FileCode className="w-6 h-6 text-orange-100" />, title: "H1 Structure", desc: "Verify exactly one H1 tag with primary keyword." },
    { icon: <LinkIcon className="w-6 h-6 text-orange-100" />, title: "Internal Links", desc: "Count and analyze internal linking structure." },
    { icon: <LinkIcon className="w-6 h-6 text-white" />, title: "External Links", desc: "Analyze outbound links and nofollow usage." }, // Highlighted in screenshot
    { icon: <Smartphone className="w-6 h-6 text-orange-500" />, title: "Mobile Responsiveness", desc: "Check viewport configuration and mobile-friendliness." },
    { icon: <Shield className="w-6 h-6 text-orange-500" />, title: "SSL/HTTPS Check", desc: "Verify secure connection and certificates." },
    { icon: <LinkIcon className="w-6 h-6 text-orange-500" />, title: "Open Graph Tags", desc: "Analyze social media optimization tags." },
    { icon: <FileCode className="w-6 h-6 text-white" />, title: "Robots.txt", desc: "Verify crawler access control." },
    { icon: <Globe className="w-6 h-6 text-orange-500" />, title: "Sitemap Detection", desc: "Check for XML sitemap presence." },
    { icon: <Globe className="w-6 h-6 text-orange-500" />, title: "URL Structure", desc: "Check URL format and friendliness." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Content Analysis", desc: "Analyze word count and readability." },
    { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "Core Web Vitals", desc: "Measure LCP, FID, and CLS metrics." },
    { icon: <ImageIcon className="w-6 h-6 text-orange-500" />, title: "Image Optimization", desc: "Check alt tags and file sizes." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Canonical URL", desc: "Prevent duplicate content issues." },
    { icon: <Globe className="w-6 h-6 text-orange-500" />, title: "Hreflang Tags", desc: "Verify international SEO setup." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Favicon Detection", desc: "Check for brand icons." },
    { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "Lazy Loading", desc: "Analyze image loading strategy." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Doctype Validation", desc: "Verify HTML5 declaration." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Character Encoding", desc: "Check UTF-8 declaration." },
    { icon: <LinkIcon className="w-6 h-6 text-orange-500" />, title: "Broken Links", desc: "Scan for 404 errors." },
    { icon: <LinkIcon className="w-6 h-6 text-orange-500" />, title: "Social Links", desc: "Detect social media profiles." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Structured Data", desc: "Detect JSON-LD schema markup." },
    { icon: <Smartphone className="w-6 h-6 text-orange-500" />, title: "Touch Elements", desc: "Verify tap target sizing." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Inline CSS", desc: "Check for excessive inline styles." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Deprecated HTML", desc: "Identify outdated tags." },
    { icon: <FileCode className="w-6 h-6 text-orange-500" />, title: "Iframe Usage", desc: "Analyze content embedding." },
];

export default function SeoToolkit() {
    const [url, setUrl] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [auditData, setAuditData] = useState(null);

    const handleAnalyze = async (e) => {
        e.preventDefault();
        if (!url) {
            toast.error("Please enter specific URL");
            return;
        }

        setIsAnalyzing(true);
        // Simulate API call
        await new Promise(r => setTimeout(r, 2000));

        // Mock Result Data
        setAuditData({
            url: url,
            score: 78,
            issues: {
                critical: 2,
                warning: 3,
                passed: 22
            },
            results: CHECKS.map(c => ({
                ...c,
                status: Math.random() > 0.8 ? 'critical' : Math.random() > 0.6 ? 'warning' : 'good',
                value: "Sample Data"
            }))
        });
        setIsAnalyzing(false);
    };

    if (auditData) {
        return (
            <div className="container mx-auto px-4 py-12">
                <Button variant="ghost" className="mb-8" onClick={() => setAuditData(null)}>
                    ← Scan another site
                </Button>

                {/* Score Card */}
                <Card className="p-8 mb-8 bg-card border-none shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-muted/20" />
                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={2 * Math.PI * 56} strokeDashoffset={2 * Math.PI * 56 * (1 - auditData.score / 100)} className={`text-emerald-500 transition-all duration-1000 ease-out`} />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-4xl font-bold">{auditData.score}</span>
                                <span className="text-xs text-muted-foreground">/ 100</span>
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-2">SEO Audit Complete</h2>
                            <a href={auditData.url} target="_blank" className="text-sm text-muted-foreground hover:underline mb-4 block">{auditData.url} ↗</a>
                            <p className="text-muted-foreground mb-4">Your site has {auditData.issues.critical} critical issues that need immediate attention.</p>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <span className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-red-500" /> {auditData.issues.critical} Critical</span>
                                <span className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-amber-500" /> {auditData.issues.warning} Warning</span>
                                <span className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-emerald-500" /> {auditData.issues.passed} Good</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline">Copy</Button>
                            <Button variant="outline">Markdown</Button>
                        </div>
                    </div>
                </Card>

                {/* Results Grid */}
                <h3 className="text-xl font-bold mb-6">Detailed Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {auditData.results.map((check, i) => (
                        <Card key={i} className="p-6 border hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-4 right-4">
                                {check.status === 'good' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                                {check.status === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                                {check.status === 'critical' && <XCircle className="w-5 h-5 text-red-500" />}
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4 text-orange-500">
                                {check.icon}
                            </div>
                            <h4 className="font-semibold mb-2 pr-8">{check.title}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{check.desc}</p>
                            {check.status !== 'good' && (
                                <div className="mt-4 p-3 bg-muted/50 rounded-md text-sm border border-border/50">
                                    <span className="font-medium text-foreground">Issue:</span> Sample issue description detected.
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-8">
                    <Zap className="w-3 h-3" /> 27 Free Checks included
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
                    SEO fixes <span className="text-orange-500">you can</span> apply <span className="text-orange-500">today</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Paste your URL and get a prioritized checklist of high-impact SEO issues in seconds. <span className="font-semibold text-foreground">No bloated reports.</span>
                </p>

                <form onSubmit={handleAnalyze} className="relative max-w-xl mx-auto mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <Input
                        type="url"
                        placeholder="Enter website URL..."
                        className="pl-11 pr-32 h-14 text-lg rounded-xl shadow-sm border-2 focus-visible:ring-offset-0 focus-visible:border-orange-500"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                    <div className="absolute inset-y-2 right-2">
                        <Button
                            type="submit"
                            size="lg"
                            className="h-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 font-semibold"
                            disabled={isAnalyzing}
                        >
                            {isAnalyzing ? "Scanning..." : "Scan Free"}
                        </Button>
                    </div>
                </form>

                <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 27+ SEO Checks</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant Results</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free Tier</span>
                </div>
            </div>

            {/* Features Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
                {CHECKS.map((check, i) => (
                    <Card key={i} className="p-6 border border-border/50 shadow-sm hover:shadow-md transition-all">
                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                            {check.icon}
                        </div>
                        <h3 className="font-semibold mb-2">{check.title}</h3>
                        <p className="text-sm text-muted-foreground">{check.desc}</p>
                    </Card>
                ))}

                {/* Upgrade / More Card */}
                <div className="p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-border rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                        <Zap className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">And much more...</h3>
                    <p className="text-sm text-muted-foreground">We continuously add new checks to the toolkit.</p>
                </div>
            </div>
        </div>
    );
}
