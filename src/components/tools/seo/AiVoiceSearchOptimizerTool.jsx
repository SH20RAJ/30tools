"use client";

import { useState } from "react";
import { optimizeForVoiceSearch } from "@/lib/ai-seo-actions";
import { Button } from "@/components/ui/button";
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
    Mic,
    MessageSquare,
    Copy,
    Check,
    Smartphone,
} from "lucide-react";

export default function AiVoiceSearchOptimizerTool() {
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleOptimize = async () => {
        if (!topic.trim()) {
            setError("Please enter a topic or keyword.");
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await optimizeForVoiceSearch(topic);
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

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            {/* Input Section */}
            <Card className="border-2 border-primary/10 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Mic className="w-6 h-6 text-primary" />
                        Voice Search Optimization
                    </CardTitle>
                    <CardDescription>
                        Enter a topic to generate natural language questions and direct
                        answers optimized for voice search and featured snippets.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex gap-4">
                        <Input
                            placeholder="e.g., how to bake sourdough bread"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="text-lg h-12"
                            onKeyDown={(e) => e.key === "Enter" && handleOptimize()}
                        />
                        <Button
                            onClick={handleOptimize}
                            disabled={loading || !topic}
                            size="lg"
                            className="h-12 px-8 font-semibold"
                        >
                            {loading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                "Optimize"
                            )}
                        </Button>
                    </div>
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
                    {/* Strategy Card */}
                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Smartphone className="w-5 h-5" />
                                Optimization Strategy
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {result.strategy}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Questions & Answers */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <MessageSquare className="w-5 h-5" />
                            Optimized Q&A Pairs
                        </h3>
                        <div className="grid gap-4">
                            {result.questions.map((item, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className="bg-muted/30 p-4 border-b flex items-center justify-between">
                                        <h4 className="font-semibold text-lg">{item.question}</h4>
                                        <Badge variant="outline">{item.intent}</Badge>
                                    </div>
                                    <div className="p-4 bg-card relative group">
                                        <p className="text-muted-foreground leading-relaxed pr-8">
                                            {item.answer}
                                        </p>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() =>
                                                copyToClipboard(
                                                    `<h3>${item.question}</h3>\n<p>${item.answer}</p>`,
                                                    index,
                                                )
                                            }
                                            title="Copy HTML"
                                        >
                                            {copiedIndex === index ? (
                                                <Check className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
