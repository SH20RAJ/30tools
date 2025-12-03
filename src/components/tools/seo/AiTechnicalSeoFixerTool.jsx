"use client";

import { useState } from "react";
import { fixTechnicalSeo } from "@/lib/ai-seo-actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Loader2,
    Wrench,
    Code2,
    FileCode,
    Copy,
    Check,
    AlertTriangle,
} from "lucide-react";

export default function AiTechnicalSeoFixerTool() {
    const [issue, setIssue] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleFix = async () => {
        if (!issue.trim()) {
            setError("Please describe the issue or paste the code snippet.");
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fixTechnicalSeo(issue);
            if (response.success) {
                setResult(response.data);
            } else {
                setError(response.error);
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (result?.code) {
            navigator.clipboard.writeText(result.code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            {/* Input Section */}
            <Card className="border-2 border-primary/10 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Wrench className="w-6 h-6 text-primary" />
                        Technical SEO Fixer
                    </CardTitle>
                    <CardDescription>
                        Describe a technical SEO error (e.g., from Google Search Console) or
                        paste a code snippet (robots.txt, schema, etc.) to get an instant
                        AI-generated fix.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Textarea
                            placeholder="Example: 'Fix this broken Schema markup...' or 'My pages are not indexing due to a canonical tag error...'"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            className="min-h-[200px] font-mono text-sm"
                        />
                    </div>
                    <Button
                        onClick={handleFix}
                        disabled={loading || !issue}
                        size="lg"
                        className="w-full text-lg font-semibold"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Analyzing & Fixing...
                            </>
                        ) : (
                            <>
                                <Code2 className="mr-2 h-5 w-5" />
                                Generate Fix
                            </>
                        )}
                    </Button>
                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-md flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" />
                            {error}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Results Section */}
            {result && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Analysis Card */}
                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-lg">Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {result.analysis}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Code Fix Card */}
                    <Card className="overflow-hidden border-2 border-green-500/20">
                        <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between py-3">
                            <div className="flex items-center gap-2">
                                <FileCode className="w-5 h-5 text-green-600" />
                                <span className="font-semibold">Suggested Fix</span>
                                <Badge variant="outline" className="uppercase text-xs">
                                    {result.language}
                                </Badge>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={copyToClipboard}
                                className="h-8"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 mr-2 text-green-500" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy Code
                                    </>
                                )}
                            </Button>
                        </CardHeader>
                        <CardContent className="p-0">
                            <pre className="p-6 overflow-x-auto bg-[#1e1e1e] text-gray-100 font-mono text-sm leading-relaxed">
                                <code>{result.code}</code>
                            </pre>
                        </CardContent>
                    </Card>

                    {/* Explanation Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Explanation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {result.explanation}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
