"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileDown, UploadCloud, XCircle } from "lucide-react";

export default function PdfCompressorTool() {
    const [files, setFiles] = useState([]);
    const [compressedFiles, setCompressedFiles] = useState([]);
    const [isCompressing, setIsCompressing] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles.filter(file => file.type === "application/pdf")]);
    };

    const removeFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleCompress = async () => {
        if (files.length === 0) return;
        setIsCompressing(true);
        setProgress(0);
        // Simulate compression
        for (let i = 0; i < files.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay and processing
            setProgress(((i + 1) / files.length) * 100);
            // In a real app, you would call an API or use a library like pdf-lib here
        }
        setCompressedFiles(files.map(file => ({ name: `compressed-${file.name}`, url: URL.createObjectURL(new Blob(["compressed pdf data"], { type: "application/pdf" })) }))); // Placeholder
        setIsCompressing(false);
    };

    const handleDownload = (url, name) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">PDF Compressor</CardTitle>
                    <CardDescription>Reduce the file size of your PDF documents quickly and easily. Upload your PDFs, compress them, and download the optimized files.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="pdf-upload" className="text-lg font-medium">Upload PDF Files</Label>
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="pdf-upload"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <UploadCloud className="w-10 h-10 mb-3 text-gray-400" />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF files (MAX. 50MB per file)</p>
                                </div>
                                <Input id="pdf-upload" type="file" className="hidden" accept=".pdf" multiple onChange={handleFileChange} />
                            </label>
                        </div>
                    </div>

                    {files.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-md font-medium">Selected Files:</h3>
                            <ul className="space-y-1 list-disc list-inside">
                                {files.map((file, index) => (
                                    <li key={index} className="text-sm flex justify-between items-center">
                                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                        <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                                            <XCircle className="w-4 h-4 text-red-500" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {isCompressing && (
                        <div className="space-y-2">
                            <Label>Compressing...</Label>
                            <Progress value={progress} className="w-full" />
                            <p className="text-sm text-muted-foreground">{Math.round(progress)}% complete</p>
                        </div>
                    )}

                    {compressedFiles.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-md font-medium">Compressed Files:</h3>
                            <ul className="space-y-1 list-disc list-inside">
                                {compressedFiles.map((file, index) => (
                                    <li key={index} className="text-sm flex justify-between items-center">
                                        {file.name}
                                        <Button variant="outline" size="sm" onClick={() => handleDownload(file.url, file.name)}>
                                            <FileDown className="w-4 h-4 mr-2" /> Download
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button onClick={handleCompress} disabled={files.length === 0 || isCompressing} className="w-full">
                        {isCompressing ? "Compressing..." : "Compress PDFs"}
                    </Button>
                </CardFooter>
            </Card>

            <section className="mt-12 prose prose-lg max-w-4xl mx-auto">
                <h2>About PDF Compressor</h2>
                <p>Our PDF Compressor tool allows you to reduce the file size of your PDF documents without compromising their quality. This is particularly useful for sharing PDFs via email, uploading them to websites, or simply saving storage space. The tool supports batch processing, allowing you to compress multiple PDF files at once.</p>
                <h3>How It Works</h3>
                <ol>
                    <li><strong>Upload:</strong> Drag and drop your PDF files or click to select them from your device.</li>
                    <li><strong>Compress:</strong> Click the "Compress PDFs" button. Our tool will optimize your files for the smallest possible size while maintaining readability.</li>
                    <li><strong>Download:</strong> Once compressed, download your optimized PDF files individually.</li>
                </ol>
                <h3>Features</h3>
                <ul>
                    <li><strong>High Compression Ratio:</strong> Achieve significant file size reduction.</li>
                    <li><strong>Quality Preservation:</strong> Retains the quality and readability of your documents.</li>
                    <li><strong>Batch Processing:</strong> Compress multiple PDFs simultaneously.</li>
                    <li><strong>Secure:</strong> Your files are processed securely and are not stored on our servers.</li>
                    <li><strong>User-Friendly:</strong> Simple and intuitive interface.</li>
                    <li><strong>Free to Use:</strong> No hidden costs or registration required.</li>
                </ul>
                <h3>Why Compress PDFs?</h3>
                <p>Large PDF files can be cumbersome to share and store. Compressing PDFs makes them easier to email, faster to upload/download, and less demanding on storage resources. This is essential for students, professionals, and anyone who works with PDF documents regularly.</p>
            </section>
        </div>
    );
}
