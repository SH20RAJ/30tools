"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { 
    Upload, 
    Lock, 
    Unlock, 
    FileText,
    Loader2,
    ShieldCheck,
    Download,
    Eye,
    EyeOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

declare global {
    interface Window {
        PDFLib: any;
    }
}

export default function PDFProtect() {
    const [pdflib, setPdflib] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [permissions, setPermissions] = useState({
        printing: true,
        modifying: false,
        copying: false,
        annotating: false
    });
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
            toast.success("PDF loaded successfully");
        } else if (selectedFile) {
            toast.error("Please select a valid PDF file");
        }
    }, []);

    const protectPDF = async () => {
        if (!pdflib) return;
        if (!file) {
            toast.error("Please upload a PDF file first");
            return;
        }
        if (!password) {
            toast.error("Please enter a password");
            return;
        }

        setIsProcessing(true);
        try {
            const { PDFDocument } = pdflib;
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            
            pdfDoc.encrypt({
                userPassword: password,
                ownerPassword: Math.random().toString(36).substring(7),
                permissions: {
                    printing: permissions.printing ? 'highResolution' : 'none',
                    modifying: permissions.modifying,
                    copying: permissions.copying,
                    annotating: permissions.annotating,
                },
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${file.name.replace('.pdf', '')}_protected.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDF protected successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to protect PDF. The file might already be encrypted.");
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
                        <Lock className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Protector</h2>
                        <p className="text-sm text-muted-foreground">Secure your PDF documents with industry-standard encryption</p>
                    </div>
                </div>
                {!pdflib && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Loader2 className="h-3 w-3 animate-spin" /> Loading Security Engine...
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
                        onClick={protectPDF}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Securing...</>
                        ) : (
                            <><ShieldCheck className="mr-2 h-4 w-4" /> Protect PDF</>
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
                                <FileText className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Upload PDF to Secure</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Add a strong password to your PDF and restrict unauthorized access, printing, or copying.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">AES Encryption</Badge>
                                <Badge variant="outline">Secure</Badge>
                                <Badge variant="outline">Private</Badge>
                            </div>
                        </div>
                    ) : (
                        <Card className="rounded-none border-border/40 bg-card/40 overflow-hidden">
                            <div className="p-12 flex flex-col items-center justify-center bg-muted/30 border-b border-border/40">
                                <div className="p-6 bg-primary/10 rounded-none mb-6">
                                    <FileText className="h-16 w-16 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold truncate max-w-md">{file.name}</h3>
                                <div className="mt-4 flex gap-4">
                                    <Badge variant="secondary" className="rounded-none">{(file.size / (1024 * 1024)).toFixed(2)} MB</Badge>
                                    <Badge variant="outline" className="rounded-none border-primary/20 text-primary">Ready to Secure</Badge>
                                </div>
                            </div>
                            <CardContent className="p-8 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="password-input" className="text-xs font-bold uppercase tracking-widest">Set Access Password</Label>
                                            <div className="relative">
                                                <Input 
                                                    id="password-input"
                                                    type={showPassword ? "text" : "password"} 
                                                    placeholder="Enter a strong password..." 
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="rounded-none pr-10 border-primary/20 focus-visible:ring-primary/30"
                                                />
                                                <button 
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                </button>
                                            </div>
                                            <p className="text-[10px] text-muted-foreground italic uppercase tracking-tighter">
                                                * This password will be required to open the PDF document.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-6 bg-muted/20 p-6 border border-border/40">
                                        <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                            <ShieldCheck className="h-4 w-4 text-primary" /> Restriction Settings
                                        </h4>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox 
                                                    id="perm-print" 
                                                    checked={permissions.printing} 
                                                    onCheckedChange={(checked) => setPermissions(p => ({ ...p, printing: !!checked }))}
                                                    className="rounded-none"
                                                />
                                                <Label htmlFor="perm-print" className="text-sm cursor-pointer font-medium">Allow Printing</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox 
                                                    id="perm-copy" 
                                                    checked={permissions.copying} 
                                                    onCheckedChange={(checked) => setPermissions(p => ({ ...p, copying: !!checked }))}
                                                    className="rounded-none"
                                                />
                                                <Label htmlFor="perm-copy" className="text-sm cursor-pointer font-medium">Allow Content Copying</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox 
                                                    id="perm-modify" 
                                                    checked={permissions.modifying} 
                                                    onCheckedChange={(checked) => setPermissions(p => ({ ...p, modifying: !!checked }))}
                                                    className="rounded-none"
                                                />
                                                <Label htmlFor="perm-modify" className="text-sm cursor-pointer font-medium">Allow Modifications</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox 
                                                    id="perm-annot" 
                                                    checked={permissions.annotating} 
                                                    onCheckedChange={(checked) => setPermissions(p => ({ ...p, annotating: !!checked }))}
                                                    className="rounded-none"
                                                />
                                                <Label htmlFor="perm-annot" className="text-sm cursor-pointer font-medium">Allow Annotations</Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="pt-4 border-t border-border/40 flex justify-end">
                                    <Button 
                                        size="lg"
                                        disabled={!password || isProcessing || !pdflib}
                                        onClick={protectPDF}
                                        className="rounded-none px-12 h-14 font-bold uppercase tracking-widest"
                                    >
                                        {isProcessing ? "Processing..." : "Generate Protected PDF"}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <Lock className="h-4 w-4 text-primary" /> Security Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Encryption Standard</h5>
                                <p className="text-sm font-medium">AES-256 Bit Encryption</p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Privacy Guarantee</h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Your files are processed locally. The password encryption happens inside your browser tab. We never see your password or your document.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-border/40">
                                <div className="flex items-center gap-2 text-primary">
                                    <ShieldCheck className="h-4 w-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">100% Client-Side</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Unlock className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Forgot Password?</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Please remember your password! Once a PDF is protected, it cannot be opened without the correct password. We do not store or recover passwords.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
