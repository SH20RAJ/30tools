"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle, XCircle, Code, Play } from "lucide-react";

export default function SchemaTester() {
    const [json, setJson] = useState(`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://www.example.com",
  "name": "Unlimited Ball Energy"
}`);
    const [result, setResult] = useState(null);

    const testSchema = () => {
        try {
            const parsed = JSON.parse(json);
            // Simple validation logic
            const hasContext = parsed["@context"] === "https://schema.org" || parsed["@context"] === "http://schema.org";
            const hasType = !!parsed["@type"];

            if (hasContext && hasType) {
                setResult({ valid: true, msg: "Valid JSON-LD Schema Structure detected." });
            } else {
                setResult({ valid: false, msg: "Missing @context or @type properties." });
            }
        } catch (e) {
            setResult({ valid: false, msg: "Invalid JSON syntax. Please check for missing commas or quotes." });
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        JSON-LD Input
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea
                        value={json}
                        onChange={(e) => setJson(e.target.value)}
                        className="font-mono h-64"
                        placeholder="Paste your JSON-LD code here..."
                    />
                    <Button onClick={testSchema} className="mt-4">
                        <Play className="w-4 h-4 mr-2" />
                        Test Structure
                    </Button>
                </CardContent>
            </Card>

            {result && (
                <Card className={result.valid ? "border-green-200 bg-green-50 dark:bg-green-900/10" : "border-red-200 bg-red-50 dark:bg-red-900/10"}>
                    <CardContent className="p-6 flex items-start gap-3">
                        {result.valid ? (
                            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" />
                        ) : (
                            <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0" />
                        )}
                        <div>
                            <h3 className={`font-bold text-lg mb-1 ${result.valid ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}>
                                {result.valid ? "Valid Schema" : "Error Detected"}
                            </h3>
                            <p className="text-muted-foreground">{result.msg}</p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
