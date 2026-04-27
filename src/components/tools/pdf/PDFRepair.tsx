"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { FileText, Loader2, ShieldCheck, Hammer } from "lucide-react";

export default function PDFRepair() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [pdfLibReady, setPdfLibReady] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && !(window as any).PDFLib) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js";
            script.onload = () => setPdfLibReady(true);
            document.head.appendChild(script);
        } else {
            setPdfLibReady(true);
        }
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const repairPDF = async () => {
        if (!file || !pdfLibReady) return;

        setIsProcessing(true);
        try {
            const { PDFDocument } = (window as any).PDFLib;
            const arrayBuffer = await file.arrayBuffer();
            
            // Rebuilding the PDF by loading and saving it
            // ignoreEncryption: true allows loading documents with minor corruption in encryption headers
            const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
            
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `repaired-${file.name}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            toast.success("PDF rebuilt and repaired successfully!");
        } catch (error) {
            console.error("Error repairing PDF:", error);
            toast.error("Failed to repair PDF. The file may be severely corrupted.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto border-2 border-dashed bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-primary/5 transition-all">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Hammer className="w-6 h-6 text-primary" />
                    PDF Repair & Optimization
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-2xl bg-muted/20 border-primary/20 hover:border-primary/40 transition-all cursor-pointer relative group">
                    <Input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-base font-semibold text-center">
                        {file ? file.name : "Select Corrupted PDF"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 text-center max-w-sm">
                        Fixes broken headers, cross-reference tables, and optimizes structure for better compatibility.
                    </p>
                </div>

                <Button
                    onClick={repairPDF}
                    disabled={!file || isProcessing || !pdfLibReady}
                    className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:to-primary transition-all active:scale-[0.98]"
                >
                    {isProcessing ? (
                        <>
                            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                            Repairing...
                        </>
                    ) : (
                        <>
                            <Hammer className="mr-2 h-6 w-6" />
                            Start Repair
                        </>
                    )}
                </Button>

                {!pdfLibReady && (
                    <p className="text-[10px] text-center uppercase tracking-widest text-muted-foreground opacity-50">
                        Initializing Repair Engine...
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
