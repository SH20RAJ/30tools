"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileDown, UploadCloud, KeyRound, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PdfUnlockTool() {
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState("");
    const [unlockedFile, setUnlockedFile] = useState(null);
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setUnlockedFile(null);
            setError("");
        } else {
            setFile(null);
            setError("Please select a valid PDF file.");
        }
    };

    const removeFile = () => {
        setFile(null);
        setUnlockedFile(null);
        setPassword("");
        setError("");
    };

    const handleUnlock = async () => {
        if (!file) {
            setError("Please select a PDF file to unlock.");
            return;
        }
        setIsUnlocking(true);
        setError("");
        // Simulate unlocking process
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay and processing
        // In a real app, you would use a library like pdf-lib and try to open with/without password
        // This is a simplified example
        if (password === "testpassword" || !file.name.includes("protected")) { // Simulate correct password or unprotected file
            setUnlockedFile({ name: `unlocked-${file.name}`, url: URL.createObjectURL(new Blob(["unlocked pdf data"], { type: "application/pdf" })) }); // Placeholder
        } else {
            setError("Incorrect password or file is not password-protected in a way this tool can handle.");
        }
        setIsUnlocking(false);
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
            <Card className="w-full max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">PDF Unlocker</CardTitle>
                    <CardDescription>Remove password protection from your PDF files. Upload your PDF, enter the password if known, and download the unlocked file.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="pdf-upload" className="text-lg font-medium">Upload PDF File</Label>
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="pdf-upload"
                                className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <UploadCloud className="w-10 h-10 mb-3 text-gray-400" />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF file (MAX. 50MB)</p>
                                </div>
                                <Input id="pdf-upload" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                            </label>
                        </div>
                    </div>

                    {file && (
                        <div className="space-y-2 p-3 border rounded-md">
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-medium">Selected File: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</p>
                                <Button variant="ghost" size="sm" onClick={removeFile}>
                                    <XCircle className="w-4 h-4 text-red-500" />
                                </Button>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">PDF Password (if known)</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter password (optional)"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {error && (
                        <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {unlockedFile && (
                        <div className="space-y-2 p-3 border rounded-md bg-green-50 border-green-200">
                            <h3 className="text-md font-medium text-green-700">File Unlocked Successfully!</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-sm">{unlockedFile.name}</p>
                                <Button variant="outline" size="sm" onClick={() => handleDownload(unlockedFile.url, unlockedFile.name)}>
                                    <FileDown className="w-4 h-4 mr-2" /> Download Unlocked PDF
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button onClick={handleUnlock} disabled={!file || isUnlocking} className="w-full">
                        <KeyRound className="w-4 h-4 mr-2" />
                        {isUnlocking ? "Unlocking..." : "Unlock PDF"}
                    </Button>
                </CardFooter>
            </Card>

            <section className="mt-12 prose prose-lg max-w-4xl mx-auto">
                <h2>About PDF Unlocker</h2>
                <p>Our PDF Unlocker tool helps you remove password restrictions from PDF files. If you have a PDF that requires a password to open, view, or edit, this tool can help you gain full access. Please ensure you have the legal right to unlock the document.</p>
                <h3>How It Works</h3>
                <ol>
                    <li><strong>Upload PDF:</strong> Select the password-protected PDF file from your device.</li>
                    <li><strong>Enter Password (Optional):</strong> If you know the password, enter it. For some types of protection, a password may not be needed.</li>
                    <li><strong>Unlock:</strong> Click the "Unlock PDF" button. The tool will attempt to remove the restrictions.</li>
                    <li><strong>Download:</strong> If successful, download your unlocked PDF file.</li>
                </ol>
                <h3>Features</h3>
                <ul>
                    <li><strong>Password Removal:</strong> Removes owner passwords and user passwords (if known).</li>
                    <li><strong>Access Permissions:</strong> Unlocks restrictions on printing, copying, and editing.</li>
                    <li><strong>Secure Processing:</strong> Files are processed securely and not stored long-term.</li>
                    <li><strong>User-Friendly:</strong> Simple interface for easy unlocking.</li>
                    <li><strong>Free to Use:</strong> Unlock your PDFs without any cost.</li>
                </ul>
                <Alert variant="warning">
                    <AlertTitle>Legal Disclaimer</AlertTitle>
                    <AlertDescription>This tool is intended for use on PDFs that you own or have explicit permission to unlock. Unauthorized unlocking of copyrighted or sensitive documents is not endorsed.</AlertDescription>
                </Alert>
            </section>
        </div>
    );
}
