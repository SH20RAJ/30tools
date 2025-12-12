"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FileCode, Play, Copy, Check, Sparkles, Download } from "lucide-react";
import { toast } from "sonner";

/**
 * Code Minifier Component
 * @param {string} language - 'javascript' | 'css'
 */
export default function CodeMinifier({ language }) {
    const [inputCode, setInputCode] = useState("");
    const [outputCode, setOutputCode] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [stats, setStats] = useState(null);
    const [isCopied, setIsCopied] = useState(false);

    const langLabel = language === 'javascript' ? 'JavaScript' : 'CSS';

    const minify = async () => {
        if (!inputCode.trim()) {
            toast.error("Please paste some code first");
            return;
        }

        setIsProcessing(true);

        // Simulate minification delay
        await new Promise(resolve => setTimeout(resolve, 600));

        try {
            let minified = "";

            // Basic simulation of minification logic
            if (language === 'css') {
                // Remove comments and whitespace
                minified = inputCode
                    .replace(/\/\*[\s\S]*?\*\//g, "")
                    .replace(/\s+/g, " ")
                    .replace(/ ?([:;,{}]) ?/g, "$1")
                    .trim();
            } else {
                // Simple JS minification sim (removing comments and extra spaces)
                minified = inputCode
                    .replace(/\/\*[\s\S]*?\*\//g, "")
                    .replace(/\/\/.*$/gm, "")
                    .replace(/\s+/g, " ")
                    .trim();
            }

            setOutputCode(minified);

            // Calculate savings
            const originalSize = new Blob([inputCode]).size;
            const minifiedSize = new Blob([minified]).size;
            const savings = ((originalSize - minifiedSize) / originalSize * 100).toFixed(2);

            setStats({
                original: (originalSize / 1024).toFixed(2) + " KB",
                minified: (minifiedSize / 1024).toFixed(2) + " KB",
                savings: savings + "%"
            });

            toast.success(`${langLabel} minified successfully!`);
        } catch (error) {
            toast.error("Minification failed");
        } finally {
            setIsProcessing(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputCode);
        setIsCopied(true);
        toast.success("Copied to clipboard");
        setTimeout(() => setIsCopied(false), 2000);
    };

    const downloadCode = () => {
        const blob = new Blob([outputCode], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `minified.${language === 'javascript' ? 'js' : 'css'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            <Card className="flex flex-col h-[600px]">
                <CardHeader className="bg-muted/30 border-b pb-4">
                    <CardTitle className="flex items-center gap-2">
                        <FileCode className="w-5 h-5 text-blue-500" />
                        Input {langLabel}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                    <textarea
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        className="w-full h-full p-4 resize-none font-mono text-sm bg-background border-0 focus:ring-0 focus:outline-none"
                        placeholder={`Paste your ${langLabel} code here...`}
                    />
                </CardContent>
                <div className="p-4 border-t bg-muted/10">
                    <Button onClick={minify} disabled={isProcessing || !inputCode} className="w-full">
                        {isProcessing ? <Sparkles className="w-4 h-4 mr-2 animate-spin" /> : <Play className="w-4 h-4 mr-2" />}
                        Minify {langLabel}
                    </Button>
                </div>
            </Card>

            <Card className="flex flex-col h-[600px] border-primary/20 shadow-lg">
                <CardHeader className="bg-primary/5 border-b pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <Sparkles className="w-5 h-5" />
                            Minified Output
                        </CardTitle>
                        {stats && (
                            <span className="text-xs font-mono bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                                Saved {stats.savings}
                            </span>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-0 flex-1 bg-muted/10 relative">
                    {outputCode ? (
                        <textarea
                            readOnly
                            value={outputCode}
                            className="w-full h-full p-4 resize-none font-mono text-sm bg-transparent border-0 focus:ring-0 focus:outline-none text-muted-foreground"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            <p>Minified code will appear here</p>
                        </div>
                    )}
                </CardContent>
                <div className="p-4 border-t bg-muted/10 flex gap-4">
                    <Button variant="outline" onClick={copyToClipboard} disabled={!outputCode} className="flex-1">
                        {isCopied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        Copy Code
                    </Button>
                    <Button variant="outline" onClick={downloadCode} disabled={!outputCode} className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                    </Button>
                </div>
            </Card>
        </div>
    );
}
