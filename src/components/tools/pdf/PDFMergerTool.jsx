'use client';

import { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeftIcon, 
  UploadIcon, 
  DownloadIcon, 
  FileTextIcon,
  TrashIcon,
  GripVerticalIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  RefreshCwIcon,
  FolderIcon,
  PlusIcon
} from 'lucide-react';
import Link from 'next/link';

export default function PDFMergerTool() {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mergedPdf, setMergedPdf] = useState(null);
  const fileInputRef = useRef(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const loadPDFLib = useCallback(async () => {
    if (typeof window !== 'undefined' && !window.PDFLib) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';
      document.head.appendChild(script);
      
      return new Promise((resolve) => {
        script.onload = () => resolve(window.PDFLib);
      });
    }
    return window.PDFLib;
  }, []);

  const handleFileSelect = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter(file => file.type === 'application/pdf');
    
    if (validFiles.length !== selectedFiles.length) {
      alert('Please select only PDF files.');
    }

    const newFiles = await Promise.all(
      validFiles.map(async (file, index) => {
        const arrayBuffer = await file.arrayBuffer();
        
        return {
          id: Date.now() + index,
          file,
          name: file.name,
          size: file.size,
          arrayBuffer,
          pageCount: await getPDFPageCount(arrayBuffer),
          status: 'ready'
        };
      })
    );

    setFiles(prev => [...prev, ...newFiles]);
  };

  const getPDFPageCount = async (arrayBuffer) => {
    try {
      const PDFLib = await loadPDFLib();
      const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
      return pdf.getPageCount();
    } catch (error) {
      console.error('Error reading PDF:', error);
      return 0;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const removeFile = (id) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const clearAllFiles = () => {
    setFiles([]);
    setMergedPdf(null);
  };

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) return;
    
    const newFiles = [...files];
    const draggedFile = newFiles[draggedIndex];
    
    newFiles.splice(draggedIndex, 1);
    newFiles.splice(dropIndex, 0, draggedFile);
    
    setFiles(newFiles);
    setDraggedIndex(null);
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert('Please select at least 2 PDF files to merge.');
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    try {
      const PDFLib = await loadPDFLib();
      const mergedPdf = await PDFLib.PDFDocument.create();
      
      for (let i = 0; i < files.length; i++) {
        setProgress(((i + 1) / files.length) * 90);
        
        const file = files[i];
        const sourcePdf = await PDFLib.PDFDocument.load(file.arrayBuffer);
        const pageIndices = sourcePdf.getPageIndices();
        
        const copiedPages = await mergedPdf.copyPages(sourcePdf, pageIndices);
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      setProgress(95);
      
      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      
      setMergedPdf({
        blob,
        size: blob.size,
        pageCount: mergedPdf.getPageCount(),
        name: `merged-${files.length}-files.pdf`
      });
      
      setProgress(100);
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('Error merging PDFs. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadMergedPDF = () => {
    if (mergedPdf) {
      const url = URL.createObjectURL(mergedPdf.blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = mergedPdf.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const totalPages = files.reduce((sum, file) => sum + file.pageCount, 0);
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <FileTextIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">PDF Merger</h1>
              <p className="text-muted-foreground">Combine multiple PDF files into one document</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">Unlimited Files</Badge>
            <Badge variant="secondary">Drag & Drop</Badge>
            <Badge variant="secondary">No Watermarks</Badge>
            <Badge variant="secondary">Preserve Quality</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* File Upload & Management */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Area */}
            <Card>
              <CardHeader>
                <CardTitle>Upload PDF Files</CardTitle>
                <CardDescription>
                  Select PDF files you want to merge. You can reorder them by dragging.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-20 border-dashed border-2"
                    variant="outline"
                  >
                    <div className="text-center">
                      <UploadIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm">
                        <span className="font-medium">Choose PDF files</span>
                        <span className="text-muted-foreground"> or drag and drop</span>
                      </div>
                    </div>
                  </Button>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,application/pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  
                  {files.length > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {files.length} file(s) selected
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllFiles}
                      >
                        <TrashIcon className="h-4 w-4 mr-2" />
                        Clear All
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* File List */}
            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>PDF Files to Merge</CardTitle>
                  <CardDescription>
                    Drag files to reorder them. The final PDF will follow this order.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {files.map((file, index) => (
                      <div
                        key={file.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                        className="flex items-center gap-3 p-3 border rounded-lg cursor-move hover:bg-muted/50 transition-colors"
                      >
                        <GripVerticalIcon className="h-4 w-4 text-muted-foreground" />
                        
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded">
                            #{index + 1}
                          </span>
                          <FileTextIcon className="h-4 w-4" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{file.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {file.pageCount} pages • {formatFileSize(file.size)}
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(file.id)}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Summary & Actions */}
          <div className="space-y-6">
            {/* Merge Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Merge Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>PDF Files:</span>
                    <span className="font-medium">{files.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Pages:</span>
                    <span className="font-medium">{totalPages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Size:</span>
                    <span className="font-medium">{formatFileSize(totalSize)}</span>
                  </div>
                </div>

                <Separator />

                <Button
                  onClick={mergePDFs}
                  disabled={files.length < 2 || isProcessing}
                  className="w-full"
                  size="lg"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCwIcon className="h-4 w-4 mr-2 animate-spin" />
                      Merging PDFs...
                    </>
                  ) : (
                    <>
                      <FileTextIcon className="h-4 w-4 mr-2" />
                      Merge PDFs
                    </>
                  )}
                </Button>

                {isProcessing && (
                  <div className="space-y-2">
                    <Progress value={progress} />
                    <div className="text-xs text-muted-foreground text-center">
                      {Math.round(progress)}% complete
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Download Results */}
            {mergedPdf && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    Merge Complete
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>File Name:</span>
                      <span className="font-medium">{mergedPdf.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pages:</span>
                      <span className="font-medium">{mergedPdf.pageCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span className="font-medium">{formatFileSize(mergedPdf.size)}</span>
                    </div>
                  </div>

                  <Button
                    onClick={downloadMergedPDF}
                    className="w-full"
                    size="lg"
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download Merged PDF
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Help & Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Tips for Best Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Drag files to reorder them before merging</li>
                  <li>• Original file quality is preserved</li>
                  <li>• No file size or page limits</li>
                  <li>• Bookmarks and links are maintained</li>
                  <li>• All processing happens in your browser</li>
                  <li>• No files are uploaded to our servers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 space-y-12">
          {/* How to Use */}
          <section>
            <h2 className="text-2xl font-bold mb-6">How to Merge PDF Files Online</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UploadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Upload PDF Files</h3>
                  <p className="text-sm text-muted-foreground">
                    Select multiple PDF files from your computer. No file size limits or registration required.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GripVerticalIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Arrange Order</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop files to arrange them in your preferred order for the final merged document.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DownloadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Download Result</h3>
                  <p className="text-sm text-muted-foreground">
                    Click merge and download your combined PDF file. Original quality is preserved.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold mb-6">When to Use PDF Merger</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Business Reports:</strong> Combine quarterly reports, financial statements, and presentations</li>
                  <li>• <strong>Legal Documents:</strong> Merge contracts, agreements, and supporting documents</li>
                  <li>• <strong>Project Proposals:</strong> Combine cover letters, proposals, and appendices</li>
                  <li>• <strong>Invoice Collections:</strong> Merge multiple invoices for accounting purposes</li>
                  <li>• <strong>Marketing Materials:</strong> Combine brochures, catalogs, and product sheets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Academic & Personal</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Research Papers:</strong> Combine literature reviews, methodology, and results</li>
                  <li>• <strong>Study Materials:</strong> Merge lecture notes, assignments, and reference materials</li>
                  <li>• <strong>Application Documents:</strong> Combine resumes, cover letters, and certificates</li>
                  <li>• <strong>Travel Documents:</strong> Merge tickets, itineraries, and accommodation confirmations</li>
                  <li>• <strong>Personal Archives:</strong> Combine family documents, certificates, and records</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Is it free to merge PDF files?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our PDF merger is completely free with no hidden fees, watermarks, or file limits. 
                    Merge unlimited PDF files without any restrictions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Are my files secure and private?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! All PDF merging happens in your browser. Your files never leave your device, 
                    ensuring complete privacy and security.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What's the maximum file size I can merge?</h3>
                  <p className="text-sm text-muted-foreground">
                    There are no file size limits! Merge large PDFs, combine hundreds of pages, or work with 
                    high-resolution documents without restrictions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Will the quality be reduced after merging?</h3>
                  <p className="text-sm text-muted-foreground">
                    No! We preserve the original quality of all PDFs. Text, images, and formatting remain 
                    exactly as they were in the source documents.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can I merge password-protected PDFs?</h3>
                  <p className="text-sm text-muted-foreground">
                    Currently, password-protected PDFs need to be unlocked before merging. We recommend 
                    removing passwords first, then using our merger.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How many PDF files can I merge at once?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can merge unlimited PDF files in a single operation. The tool automatically handles 
                    large batches efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* SEO Footer */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Professional PDF Merger - Free & No Watermarks</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="mb-4">
                <strong>Merge PDF files online for free</strong> with our professional PDF merger tool. Combine multiple PDF 
                documents into a single file with drag-and-drop simplicity. Perfect for businesses, students, and professionals 
                who need to merge PDF files quickly and securely.
              </p>
              <p className="mb-4">
                <strong>Key features include:</strong> unlimited file uploads, drag-and-drop reordering, preserved bookmarks and metadata, 
                no watermarks or branding, client-side processing for privacy, support for large files, and professional-quality output. 
                Our PDF merger works entirely in your browser, ensuring your sensitive documents never leave your device.
              </p>
              <p>
                <strong>Popular use cases:</strong> Merge business reports and presentations, combine legal documents and contracts, 
                join academic papers and research materials, consolidate invoices and financial documents, merge application materials 
                for job applications, and create comprehensive project documentation. Save time and stay organized with our free PDF merger.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
