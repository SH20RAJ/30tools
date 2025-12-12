"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileCode, Search, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export default function HtmlValidator() {
    const [html, setHtml] = useState("");
    const [errors, setErrors] = useState(null);
    const [isValid, setIsValid] = useState(null);

    const validateHtml = () => {
        if (!html.trim()) return;

        const newErrors = [];

        // Basic checks
        if (!html.toLowerCase().includes("<!doctype html>")) {
            newErrors.push({ type: "warning", msg: "Missing DOCTYPE declaration" });
        }
        if (!html.includes("<html")) {
            newErrors.push({ type: "error", msg: "Missing <html> tag" });
        }
        if (!html.includes("<head")) {
            newErrors.push({ type: "warning", msg: "Missing <head> section" });
        }
        if (!html.includes("<body")) {
            newErrors.push({ type: "error", msg: "Missing <body> section" });
        }

        // Check for unclosed div tags (very basic count check)
        const openDivs = (html.match(/<div/g) || []).length;
        const closeDivs = (html.match(/<\/div>/g) || []).length;

        if (openDivs !== closeDivs) {
            newErrors.push({ type: "error", msg: `Mismatched <div> tags: ${openDivs} opened, ${closeDivs} closed` });
        }

        setErrors(newErrors);
        setIsValid(newErrors.filter(e => e.type === "error").length === 0);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>HTML Input</CardTitle>
                </CardHeader>
                <CardContent>
                    <textarea
                        value={html}
                        onChange={(e) => setHtml(e.target.value)}
                        className="w-full h-64 p-4 rounded-md border resize-y font-mono text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="Paste your HTML code here..."
                    />
                    <Button onClick={validateHtml} className="mt-4 w-full md:w-auto">
                        <Search className="w-4 h-4 mr-2" />
                        Check HTML
                    </Button>
                </CardContent>
            </Card>

            {isValid !== null && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            Result
                            {isValid ? (
                                <span className="text-green-600 flex items-center gap-1 text-base">
                                    <CheckCircle className="w-5 h-5" /> Valid Structure
                                </span>
                            ) : (
                                <span className="text-red-600 flex items-center gap-1 text-base">
                                    <XCircle className="w-5 h-5" /> Issues Found
                                </span>
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {errors.length === 0 ? (
                            <Alert className="bg-green-50 border-green-200">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <AlertTitle>Great Job!</AlertTitle>
                                <AlertDescription>No basic errors were found in your HTML structure.</AlertDescription>
                            </Alert>
                        ) : (
                            errors.map((err, i) => (
                                <Alert key={i} variant={err.type === "error" ? "destructive" : "default"} className={err.type === "warning" ? "border-amber-200 bg-amber-50" : ""}>
                                    {err.type === "error" ? <XCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4 text-amber-600" />}
                                    <AlertTitle className={err.type === "warning" ? "text-amber-800" : ""}>{err.type === "error" ? "Error" : "Warning"}</AlertTitle>
                                    <AlertDescription className={err.type === "warning" ? "text-amber-700" : ""}>{err.msg}</AlertDescription>
                                </Alert>
                            ))
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
