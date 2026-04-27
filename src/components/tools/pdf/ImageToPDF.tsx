"use client";

import { useState, useCallback, useRef } from "react";
import { PDFDocument, PageSizes } from "pdf-lib";
import { 
    Upload, 
    FileText, 
    X, 
    MoveUp, 
    MoveDown, 
    Download, 
    Image as ImageIcon,
    Loader2,
    Plus,
    Settings2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface ImageFile {
    id: string;
    file: File;
    preview: string;
}

export default function ImageToPDF() {
    const [images, setImages] = useState<ImageFile[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [pageSize, setPageSize] = useState<"A4" | "AUTO">("AUTO");
    const [orientation, setOrientation] = useState<"PORTRAIT" | "LANDSCAPE">("PORTRAIT");
    const [margin, setMargin] = useState<"NONE" | "SMALL" | "LARGE">("NONE");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files).map(file => ({
                id: Math.random().toString(36).substr(2, 9),
                file,
                preview: URL.createObjectURL(file)
            }));
            setImages(prev => [...prev, ...newFiles]);
            toast.success(`${newFiles.length} images added`);
        }
    }, []);

    const removeImage = (id: string) => {
        setImages(prev => {
            const filtered = prev.filter(img => img.id !== id);
            // Revoke the URL to avoid memory leaks
            const removed = prev.find(img => img.id === id);
            if (removed) URL.revokeObjectURL(removed.preview);
            return filtered;
        });
    };

    const moveImage = (index: number, direction: 'up' | 'down') => {
        const newImages = [...images];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex >= 0 && targetIndex < newImages.length) {
            [newImages[index], newImages[targetIndex]] = [newImages[targetIndex], newImages[index]];
            setImages(newImages);
        }
    };

    const generatePDF = async () => {
        if (images.length === 0) {
            toast.error("Please add at least one image");
            return;
        }

        setIsProcessing(true);
        try {
            const pdfDoc = await PDFDocument.create();

            for (const img of images) {
                const imageBytes = await img.file.arrayBuffer();
                let embeddedImage;
                
                if (img.file.type === "image/jpeg" || img.file.type === "image/jpg") {
                    embeddedImage = await pdfDoc.embedJpg(imageBytes);
                } else if (img.file.type === "image/png") {
                    embeddedImage = await pdfDoc.embedPng(imageBytes);
                } else {
                    // Fallback for other formats - might need a converter but pdf-lib prefers jpg/png
                    // We'll skip or notify for now. WebP is not directly supported by pdf-lib yet.
                    toast.warning(`Format ${img.file.type} might not be supported. Skipping ${img.file.name}`);
                    continue;
                }

                const { width: imgWidth, height: imgHeight } = embeddedImage.size();
                
                let pageWidth, pageHeight;
                if (pageSize === "A4") {
                    [pageWidth, pageHeight] = orientation === "PORTRAIT" ? PageSizes.A4 : [PageSizes.A4[1], PageSizes.A4[0]];
                } else {
                    pageWidth = imgWidth;
                    pageHeight = imgHeight;
                }

                const page = pdfDoc.addPage([pageWidth, pageHeight]);
                
                // Calculate scaling and position based on margins
                const m = margin === "NONE" ? 0 : margin === "SMALL" ? 20 : 50;
                const availableWidth = pageWidth - (m * 2);
                const availableHeight = pageHeight - (m * 2);
                
                const scale = Math.min(availableWidth / imgWidth, availableHeight / imgHeight);
                const drawWidth = imgWidth * scale;
                const drawHeight = imgHeight * scale;
                
                page.drawImage(embeddedImage, {
                    x: (pageWidth - drawWidth) / 2,
                    y: (pageHeight - drawHeight) / 2,
                    width: drawWidth,
                    height: drawHeight,
                });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `converted-${Date.now()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            toast.success("PDF generated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate PDF. Make sure all images are valid JPG or PNG.");
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
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PDF Converter</h2>
                        <p className="text-sm text-muted-foreground">Transform your images into professional PDF documents</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-none border-primary/20 hover:border-primary/50"
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add Images
                    </Button>
                    <Button 
                        disabled={images.length === 0 || isProcessing}
                        onClick={generatePDF}
                        className="rounded-none bg-primary hover:bg-primary/90"
                    >
                        {isProcessing ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Download className="mr-2 h-4 w-4" /> Convert to PDF</>
                        )}
                    </Button>
                </div>
                <input 
                    type="file" 
                    multiple 
                    accept="image/jpeg,image/png" 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={onFileChange}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {images.length === 0 ? (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="group cursor-pointer flex flex-col items-center justify-center p-12 md:p-24 border-2 border-dashed border-primary/20 hover:border-primary/40 bg-card/30 hover:bg-card/50 transition-all rounded-none text-center"
                        >
                            <div className="p-6 bg-primary/5 rounded-none group-hover:scale-110 transition-transform">
                                <Upload className="h-12 w-12 text-primary/40 group-hover:text-primary/60" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold">Select or Drop Images</h3>
                            <p className="mt-2 text-muted-foreground max-w-sm">
                                Convert multiple JPG or PNG images into a single PDF. Your files stay private and never leave your browser.
                            </p>
                            <div className="mt-8 flex gap-3">
                                <Badge variant="outline">JPG</Badge>
                                <Badge variant="outline">PNG</Badge>
                                <Badge variant="outline">No Limit</Badge>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {images.map((img, index) => (
                                <Card key={img.id} className="rounded-none border-border/40 group overflow-hidden bg-card/40">
                                    <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                                        <img 
                                            src={img.preview} 
                                            alt={img.file.name} 
                                            className="w-full h-full object-contain"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                            <Button 
                                                size="icon" 
                                                variant="secondary" 
                                                className="rounded-none h-8 w-8"
                                                disabled={index === 0}
                                                onClick={() => moveImage(index, 'up')}
                                            >
                                                <MoveUp className="h-4 w-4" />
                                            </Button>
                                            <Button 
                                                size="icon" 
                                                variant="secondary" 
                                                className="rounded-none h-8 w-8"
                                                disabled={index === images.length - 1}
                                                onClick={() => moveImage(index, 'down')}
                                            >
                                                <MoveDown className="h-4 w-4" />
                                            </Button>
                                            <Button 
                                                size="icon" 
                                                variant="destructive" 
                                                className="rounded-none h-8 w-8"
                                                onClick={() => removeImage(img.id)}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 text-[10px] font-bold text-white uppercase tracking-widest">
                                            Page {index + 1}
                                        </div>
                                    </div>
                                    <CardContent className="p-3 text-xs truncate font-medium border-t border-border/40">
                                        {img.file.name}
                                    </CardContent>
                                </Card>
                            ))}
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="flex flex-col items-center justify-center border-2 border-dashed border-border/60 hover:border-primary/40 bg-card/20 hover:bg-card/40 transition-all rounded-none cursor-pointer aspect-[4/3]"
                            >
                                <Plus className="h-8 w-8 text-muted-foreground" />
                                <span className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">Add More</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-6">
                    <Card className="rounded-none border-border/40 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4 border-b border-border/40">
                            <CardTitle className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                <Settings2 className="h-4 w-4 text-primary" /> Settings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Page Size</Label>
                                <Select value={pageSize} onValueChange={(v: any) => setPageSize(v)}>
                                    <SelectTrigger className="rounded-none border-primary/10">
                                        <SelectValue placeholder="Select size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="AUTO">Original Image Size</SelectItem>
                                        <SelectItem value="A4">A4 (210 x 297 mm)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-3">
                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Orientation</Label>
                                <Select value={orientation} onValueChange={(v: any) => setOrientation(v)}>
                                    <SelectTrigger className="rounded-none border-primary/10">
                                        <SelectValue placeholder="Select orientation" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="PORTRAIT">Portrait</SelectItem>
                                        <SelectItem value="LANDSCAPE">Landscape</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-3">
                                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Margins</Label>
                                <Select value={margin} onValueChange={(v: any) => setMargin(v)}>
                                    <SelectTrigger className="rounded-none border-primary/10">
                                        <SelectValue placeholder="Select margin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="NONE">No Margin</SelectItem>
                                        <SelectItem value="SMALL">Small Margin</SelectItem>
                                        <SelectItem value="LARGE">Large Margin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="pt-4 border-t border-border/40">
                                <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                    <span>Total Images</span>
                                    <span className="text-foreground">{images.length}</span>
                                </div>
                                <Button 
                                    className="w-full rounded-none h-12 font-bold uppercase tracking-widest"
                                    disabled={images.length === 0 || isProcessing}
                                    onClick={generatePDF}
                                >
                                    {isProcessing ? "Processing..." : "Generate PDF"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-primary/20 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <ImageIcon className="h-5 w-5 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Privacy First</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Our Image to PDF converter processes files directly in your browser. Your photos are never uploaded to any server, keeping your data 100% private.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
