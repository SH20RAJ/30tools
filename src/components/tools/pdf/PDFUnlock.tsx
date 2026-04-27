"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Unlock, 
    Lock,
    FileText,
    Loader2,
    CheckCircle2,
    Download,
    Eye,
    EyeOff,
    AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

declare global {
    interface Window {
        PDFLib: any;
    }
}

export default function PDFUnlock() {
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDecrypted, setIsDecrypted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const loadPdfLib = async () => {
            if (window.PDFLib) {
                setPdflib(window.PDFLib);
                return;
            }

            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js";
            script.async = true;
            script.onload = () => {
                setPdflib(window.PDFLib);
            };
            document.head.appendChild(script);
        };
        loadPdfLib();
    }, []);

    const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setIsDecrypted(false);
            setPassword("");
            toast.success("PDF loaded successfully");
        } else if (selectedFile) {
            toast.error("Please select a valid PDF file");
        }
    }, []);

    const unlockPDF = async () => {
        if (!pdflib) return;
        if (!file) {
            toast.error("Please upload a PDF file first");
            return;
        }
        if (!password) {
            toast.error("Please enter the PDF password");
            return;
        }

        setIsProcessing(true);
        try {
            const { PDFDocument } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            
            const pdfDoc = await PDFDocument.load(arrayBuffer, { password });
            const pdfBytes = await pdfDoc.save();
            
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace('.pdf', '')}_unlocked.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            setIsDecrypted(true);
            toast.success("PDF unlocked successfully!");
        } catch (error: any) {
            console.error(error);
            if (error.message && error.message.includes("Incorrect password")) {
                toast.error("Incorrect password. Please try again.");
            } else {
                toast.error("Failed to unlock PDF. Make sure the file is password-protected.");
            }
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card/50 p-6 border border-border/40 rounded-none backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary">
                        <Unlock className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Unlocker</h2>
                        <p className="text-sm text-muted-foreground">Remove password protection and restrictions from your PDF files</p>
                    </div>
                </div>
                {!pdflib && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Loader2 className="h-3 w-3 animate-spin" /> Loading Decryption Engine...
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Upload className="mr-2 h-4 w-4" /> {file ? "Change PDF" : "Select PDF"}
                    </Button>
                    <Button 
                        disabled={!file || !password || isProcessing || !pdflib}
                        onClick={unlockPDF}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Unlocking...</>
                        ) : (
                            <><CheckCircle2 className="mr-2 h-4 w-4" /> Unlock PDF</>
                        )}
                    </Button>
                </div>
                <input 
                    type="file" 
                    accept="application/pdf" 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={onFileChange}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {!file ? (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="group cursor-pointer flex flex-col items-center justify-center p-12 md:p-24 border-2 border-dashed border-primary/20 hover:border-primary/40 bg-card/30 hover:bg-card/50 transition-all rounded-none text-center"
                        >
                            <div className="p-6 bg-primary/5 rounded-none group-hover:scale-110 transition-transform">
                                <Lock className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload Locked PDF</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Enter the password to remove encryption and save a permanent unlocked version of your PDF.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">Decrypt</Badge>
                                <Badge variant="outline">No Watermark</Badge>
                                <Badge variant="outline">Fast</Badge>
                            </div>
                        </div>
                    ) : (
                        <Card className="rounded-none border-border/40 bg-card/40 overflow-hidden">
                            <div className="p-12 flex flex-col items-center justify-center bg-muted/30 border-b border-border/40">
                                <div className="p-6 bg-destructive/10 rounded-none mb-6 relative">
                                    <FileText className="h-16 w-16 text-destructive" />
                                    <div className="absolute bottom-0 right-0 p-1 bg-background rounded-full">
                                        <Lock className="h-6 w-6 text-destructive" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold truncate max-w-md">{file.name}</h3>
                                <div className="mt-4 flex gap-4">
                                    <Badge variant="secondary" className="rounded-none">{(file.size / (1024 * 1024)).toFixed(2)} MB</Badge>
                                    <Badge variant="outline" className="rounded-none border-destructive/20 text-destructive uppercase tracking-widest font-bold">Locked PDF</Badge>
                                </div>
                            </div>
                            <CardContent className="p-8 space-y-8">
                                <div className="max-w-md mx-auto space-y-6">
                                    <Alert variant="destructive" className="rounded-none border-destructive/20 bg-destructive/5">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle className="text-xs font-bold uppercase tracking-widest">Password Required</AlertTitle>
                                        <AlertDescription className="text-xs leading-relaxed">
                                            This tool removes the password from a PDF. You must know the current password to decrypt and unlock the file.
                                        </AlertDescription>
                                    </Alert>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="unlock-password" className="text-xs font-bold uppercase tracking-widest">Enter PDF Password</Label>
                                            <div className="relative">
                                                <Input 
                                                    id="unlock-password"
                                                    type={showPassword ? "text" : "password"} 
                                                    placeholder="Enter current password..." 
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="rounded-none pr-10 border-destructive/20 focus-visible:ring-destructive/30"
                                                />
                                                <button 
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                </button>
                                            </div>
                                        </div>

                                        <Button 
                                            size="lg"
                                            disabled={!password || isProcessing || !pdflib}
                                            onClick={unlockPDF}
                                            className="w-full rounded-none h-14 font-bold uppercase tracking-widest bg-destructive hover:bg-destructive/90"
                                        >
                                            {isProcessing ? "Unlocking..." : "Decrypt & Download Unlocked PDF"}
                                        </Button>
                                    </div>
                                </div>
                                
                                {isDecrypted && (
                                    <div className="flex flex-col items-center gap-4 p-6 bg-primary/5 border border-primary/20 animate-in zoom-in-95">
                                        <CheckCircle2 className="h-10 w-10 text-primary" />
                                        <div className="text-center">
                                            <h4 className="font-bold">Success! PDF Unlocked</h4>
                                            <p className="text-sm text-muted-foreground">The decrypted version has been downloaded to your computer.</p>
                                        </div>
                                        <Button variant="outline" size="sm" onClick={() => window.location.reload()} className="rounded-none">
                                            <Download className="h-4 w-4 mr-2" /> Download Again
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <Unlock className="h-4 w-4 text-primary" /> Why Unlock?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Remove Restrictions</h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Once unlocked, you can print, copy text, and edit the PDF without entering a password every time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Zero Server Uploads</h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Our unlocker works entirely in-browser. Your password and data are never sent to our servers.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Secure & Legal</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                This tool is intended for unlocking PDFs for which you have the legal right and correct password.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function ShieldCheck({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
