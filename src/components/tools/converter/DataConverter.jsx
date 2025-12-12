"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileCode, ArrowRight, Download, Copy, Check, Upload, RefreshCw } from "lucide-react";
import { toast } from "sonner";

/**
 * Generic Data Converter Component
 * @param {string} fromFormat - Source format settings
 * @param {string} toFormat - Target format settings
 */
export default function DataConverter({ fromFormat, toFormat }) {
    const [inputData, setInputData] = useState("");
    const [outputData, setOutputData] = useState("");
    const [activeTab, setActiveTab] = useState("paste"); // paste | upload
    const [isCopied, setIsCopied] = useState(false);
    const fileInputRef = useRef(null);

    const from = fromFormat.toUpperCase();
    const to = toFormat.toUpperCase();

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            setInputData(e.target.result);
            toast.success("File content loaded!");
        };
        reader.readAsText(file);
    };

    const convertData = () => {
        if (!inputData.trim()) {
            toast.error("Please enter some data to convert");
            return;
        }

        try {
            let result = "";

            // Simple Simulation Logic for demo purposes
            // Needs actual libraries like papaparse or fast-xml-parser for real implementation
            if (fromFormat === 'csv' && toFormat === 'json') {
                // Mock CSV to JSON
                const lines = inputData.split('\n');
                const headers = lines[0].split(',');
                const json = lines.slice(1).map(line => {
                    const values = line.split(',');
                    return headers.reduce((obj, header, index) => {
                        obj[header.trim()] = values[index]?.trim();
                        return obj;
                    }, {});
                });
                result = JSON.stringify(json, null, 2);
            } else if (fromFormat === 'xml' && toFormat === 'json') {
                // Mock XML to JSON
                result = JSON.stringify({ note: "XML conversion simulated", content: inputData.substring(0, 50) + "..." }, null, 2);
            } else {
                result = `Converted content from ${from} to ${to}...\n` + inputData;
            }

            setOutputData(result);
            toast.success("Converted successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Conversion failed. Check your input format.");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputData);
        setIsCopied(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setIsCopied(false), 2000);
    };

    const downloadOutput = () => {
        const blob = new Blob([outputData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `converted.${toFormat.toLowerCase()}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <Card className="flex flex-col h-[600px]">
                    <CardHeader className="border-b bg-muted/30">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base flex items-center gap-2">
                                <FileCode className="w-5 h-5 text-blue-500" />
                                Input {from}
                            </CardTitle>
                            <Button variant="ghost" size="sm" onClick={() => { setInputData(""); setOutputData(""); }}>
                                Clear
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 flex flex-col">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                            <div className="px-4 pt-4 border-b">
                                <TabsList className="w-full grid grid-cols-2">
                                    <TabsTrigger value="paste">Paste Code</TabsTrigger>
                                    <TabsTrigger value="upload">Upload File</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="paste" className="flex-1 p-0 m-0 relative">
                                <textarea
                                    value={inputData}
                                    onChange={(e) => setInputData(e.target.value)}
                                    className="w-full h-full p-4 resize-none font-mono text-sm bg-background border-0 focus:ring-0 focus:outline-none"
                                    placeholder={`Paste your ${from} data here...`}
                                />
                            </TabsContent>

                            <TabsContent value="upload" className="flex-1 p-0 m-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        onChange={handleFileUpload}
                                        accept={`.${fromFormat}`}
                                    />
                                    <Button variant="outline" size="lg" onClick={() => fileInputRef.current?.click()}>
                                        <Upload className="w-4 h-4 mr-2" />
                                        Choose {from} File
                                    </Button>
                                    <p className="mt-4 text-sm text-muted-foreground">Supported file: .{fromFormat.toLowerCase()}</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Output Section */}
                <Card className="flex flex-col h-[600px] border-primary/20 shadow-lg relative overflow-hidden">
                    <CardHeader className="border-b bg-primary/5">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base flex items-center gap-2 text-primary">
                                <FileCode className="w-5 h-5" />
                                Output {to}
                            </CardTitle>
                            <div className="flex gap-2">
                                <Button size="sm" variant="ghost" onClick={copyToClipboard} disabled={!outputData}>
                                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </Button>
                                <Button size="sm" variant="ghost" onClick={downloadOutput} disabled={!outputData}>
                                    <Download className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 bg-muted/10 relative">
                        {outputData ? (
                            <textarea
                                readOnly
                                value={outputData}
                                className="w-full h-full p-4 resize-none font-mono text-sm bg-transparent border-0 focus:ring-0 focus:outline-none"
                            />
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
                                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                                    <ArrowRight className="w-8 h-8 opacity-50" />
                                </div>
                                <p className="mb-6">Enter data on the left to transform it.</p>
                                <Button onClick={convertData} disabled={!inputData} size="lg">Convert {from} to {to}</Button>
                            </div>
                        )}
                    </CardContent>
                    {outputData && (
                        <div className="absolute bottom-6 right-6">
                            <Button onClick={convertData} size="lg" className="shadow-xl">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Convert Again
                            </Button>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}
