"use client";

import { useState } from "react";
import { analyzeContent } from "@/lib/ai-seo-actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Loader2,
    CheckCircle2,
    AlertCircle,
    BarChart3,
    BookOpen,
    Lightbulb,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function AiContentOptimizerTool() {
    const [content, setContent] = useState("");
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleAnalyze = async () => {
        if (!content.trim() || !keyword.trim()) {
            setError("Please enter both content and a target keyword.");
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await analyzeContent(content, keyword);
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

    const getScoreColor = (score) => {
        if (score >= 80) return "text-green-600";
        if (score >= 60) return "text-yellow-600";
        return "text-red-600";
    };

    const getProgressColor = (score) => {
        if (score >= 80) return "bg-green-600";
        if (score >= 60) return "bg-yellow-600";
        return "bg-red-600";
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            {/* Input Section */}
            <Card className="border-2 border-primary/10 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                        Content Analysis
                    </CardTitle>
                    <CardDescription>
                        Paste your content and target keyword to get AI-powered semantic SEO
                        insights.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Target Keyword</label>
                        <Input
                            placeholder="e.g., best running shoes"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            className="text-lg"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Content</label>
                        <Textarea
                            placeholder="Paste your article content here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="min-h-[300px] font-mono text-sm"
                        />
                        <div className="text-xs text-muted-foreground text-right">
                            {content.length} characters
                        </div>
                    </div>
                    <Button
                        onClick={handleAnalyze}
                        disabled={loading || !content || !keyword}
                        size="lg"
                        className="w-full text-lg font-semibold"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Analyzing Semantics...
                            </>
                        ) : (
                            <>
                                <BarChart3 className="mr-2 h-5 w-5" />
                                Analyze Content
                            </>
                        )}
                    </Button>
                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-md flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            {error}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Results Section */}
            {result && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Score Card */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="md:col-span-1 border-primary/20 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="text-center">Semantic Score</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center justify-center pt-0">
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="currentColor"
                                            strokeWidth="12"
                                            fill="transparent"
                                            className="text-muted/20"
                                        />
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="currentColor"
                                            strokeWidth="12"
                                            fill="transparent"
                                            strokeDasharray={351.86}
                                            strokeDashoffset={
                                                351.86 - (351.86 * result.score) / 100
                                            }
                                            className={`${getScoreColor(
                                                result.score,
                                            )} transition-all duration-1000 ease-out`}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span
                                        className={`absolute text-4xl font-bold ${getScoreColor(
                                            result.score,
                                        )}`}
                                    >
                                        {result.score}
                                    </span>
                                </div>
                                <div className="mt-4 text-center space-y-1">
                                    <Badge variant="outline" className="capitalize">
                                        {result.sentiment} Sentiment
                                    </Badge>
                                    <div className="text-sm text-muted-foreground">
                                        Readability: <span className="font-medium">{result.readability}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle>Analysis Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {result.summary}
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Missing Entities */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-yellow-500" />
                                Missing Semantic Entities
                            </CardTitle>
                            <CardDescription>
                                Include these related topics to improve your topical authority and
                                semantic completeness.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {result.missingEntities.map((entity, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                    >
                                        {entity}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Suggestions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                Optimization Suggestions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {result.suggestions.map((suggestion, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                            {index + 1}
                                        </div>
                                        <span className="text-muted-foreground">{suggestion}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
