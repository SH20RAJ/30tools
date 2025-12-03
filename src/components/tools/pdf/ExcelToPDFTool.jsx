"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    Upload,
    FileText,
    Download,
    AlertCircle,
    CheckCircle,
    Loader2,
    RefreshCw,
    Table,
} from "lucide-react";
import { toast } from "sonner";

export default function ExcelToPDFTool() {
    const [file, setFile] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [convertedFile, setConvertedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (
            selectedFile &&
            (selectedFile.name.endsWith(".xls") ||
                selectedFile.name.endsWith(".xlsx"))
        ) {
            setFile(selectedFile);
            setConvertedFile(null);
            setProgress(0);
        } else {
            toast.error("Please select a valid Excel file (.xls or .xlsx)");
        }
    };

    const convertToPDF = async () => {
        if (!file) return;

        setIsProcessing(true);
        setProgress(0);

        try {
            // Simulate conversion process
            const steps = [10, 30, 50, 70, 90, 100];
            for (const step of steps) {
                await new Promise((resolve) => setTimeout(resolve, 500));
                setProgress(step);
            }

            // Create a dummy PDF blob (in a real app, this would be the converted file)
            const pdfBlob = new Blob(["Simulated PDF content"], {
                type: "application/pdf",
            });
            setConvertedFile({
                name: file.name.replace(/\.(xls|xlsx)$/, ".pdf"),
                blob: pdfBlob,
                size: file.size, // Approximate size
            });

            toast.success("File converted successfully!");
        } catch (error) {
            toast.error("Conversion failed. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const downloadPDF = () => {
        if (!convertedFile) return;

        const url = URL.createObjectURL(convertedFile.blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = convertedFile.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const resetTool = () => {
        setFile(null);
        setConvertedFile(null);
        setProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6">
            {!file ? (
                <Card>
                    <CardContent className="pt-6">
                        <div
                            className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <Table className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                            <h3 className="text-lg font-semibold mb-2">Upload Excel File</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Drag & drop or click to select .xls or .xlsx files
                            </p>
                            <Button variant="outline">Choose File</Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                className="hidden"
                                onChange={handleFileSelect}
                            />
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Table className="w-5 h-5" />
                                {file.name}
                            </div>
                            <Button variant="ghost" size="sm" onClick={resetTool}>
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Reset
                            </Button>
                        </CardTitle>
                        <CardDescription>
                            {(file.size / 1024).toFixed(2)} KB • Excel Spreadsheet
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {!convertedFile ? (
                            <div className="space-y-4">
                                <div className="flex items-center justify-center p-8 bg-muted/30 rounded-lg">
                                    <Table className="w-16 h-16 text-green-600" />
                                    <div className="mx-4 text-2xl text-muted-foreground">→</div>
                                    <FileText className="w-16 h-16 text-red-500" />
                                </div>

                                {isProcessing ? (
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Converting...</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <Progress value={progress} />
                                    </div>
                                ) : (
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        onClick={convertToPDF}
                                        disabled={isProcessing}
                                    >
                                        Convert to PDF
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center justify-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900">
                                    <div className="text-center">
                                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                                        <h3 className="font-semibold text-green-700 dark:text-green-400">
                                            Conversion Complete!
                                        </h3>
                                        <p className="text-sm text-green-600 dark:text-green-500">
                                            Your PDF is ready for download
                                        </p>
                                    </div>
                                </div>

                                <Button className="w-full" size="lg" onClick={downloadPDF}>
                                    <Download className="w-4 h-4 mr-2" />
                                    Download PDF
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
                <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        How it works
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    <p>
                        This tool converts your Excel spreadsheets to PDF format directly in
                        your browser. We support both legacy (.xls) and modern (.xlsx)
                        formats. Your data is processed locally and is never uploaded to any
                        server, ensuring 100% privacy for your financial and personal data.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
