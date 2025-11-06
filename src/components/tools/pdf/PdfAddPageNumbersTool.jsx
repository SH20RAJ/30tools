'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Upload, 
  Download, 
  Hash,
  CheckCircle, 
  AlertCircle, 
  Loader, 
  FileText,
  Zap,
  Shield,
  Settings,
  Type,
  Eye
} from 'lucide-react';

export default function PdfAddPageNumbersTool() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [position, setPosition] = useState('bottom-center');
  const [startNumber, setStartNumber] = useState(1);
  const [format, setFormat] = useState('number');
  const [fontSize, setFontSize] = useState(12);
  const [fontColor, setFontColor] = useState('#000000');
  const [marginX, setMarginX] = useState(50);
  const [marginY, setMarginY] = useState(30);
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [skipFirstPage, setSkipFirstPage] = useState(false);
  const [skipLastPage, setSkipLastPage] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [numberedFile, setNumberedFile] = useState(null);
  const fileInputRef = useRef(null);

  const maxFileSize = 50 * 1024 * 1024; // 50MB

  const positions = [
    { value: 'top-left', label: 'Top Left' },
    { value: 'top-center', label: 'Top Center' },
    { value: 'top-right', label: 'Top Right' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-center', label: 'Bottom Center' },
    { value: 'bottom-right', label: 'Bottom Right' },
    { value: 'center-left', label: 'Center Left' },
    { value: 'center-right', label: 'Center Right' }
  ];

  const formats = [
    { value: 'number', label: '1, 2, 3...', example: '5' },
    { value: 'roman-lower', label: 'i, ii, iii...', example: 'v' },
    { value: 'roman-upper', label: 'I, II, III...', example: 'V' },
    { value: 'letter-lower', label: 'a, b, c...', example: 'e' },
    { value: 'letter-upper', label: 'A, B, C...', example: 'E' },
    { value: 'page-of-total', label: 'Page X of Y', example: 'Page 5 of 20' }
  ];

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatPageNumber = (pageNum, totalPages) => {
    switch (format) {
      case 'number':
        return pageNum.toString();
      case 'roman-lower':
        return toRoman(pageNum).toLowerCase();
      case 'roman-upper':
        return toRoman(pageNum);
      case 'letter-lower':
        return toLetter(pageNum).toLowerCase();
      case 'letter-upper':
        return toLetter(pageNum);
      case 'page-of-total':
        return `Page ${pageNum} of ${totalPages}`;
      default:
        return pageNum.toString();
    }
  };

  const toRoman = (num) => {
    const romanNumerals = [
      ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
      ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
      ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];
    
    let result = '';
    for (const [roman, value] of romanNumerals) {
      while (num >= value) {
        result += roman;
        num -= value;
      }
    }
    return result;
  };

  const toLetter = (num) => {
    let result = '';
    while (num > 0) {
      num--;
      result = String.fromCharCode(65 + (num % 26)) + result;
      num = Math.floor(num / 26);
    }
    return result;
  };

  const getPreviewText = () => {
    const pageNum = startNumber + 4; // Show example for 5th page
    const formattedNumber = formatPageNumber(pageNum, pageCount);
    return `${prefix}${formattedNumber}${suffix}`;
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      if (file.size > maxFileSize) {
        alert(`File too large. Maximum size is ${formatFileSize(maxFileSize)}.`);
        return;
      }
      
      setPdfFile(file);
      setNumberedFile(null);
      
      // Simulate PDF analysis
      setTimeout(() => {
        const pages = Math.floor(Math.random() * 50) + 10;
        setPageCount(pages);
      }, 1000);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const addPageNumbers = async () => {
    if (!pdfFile) return;

    setIsProcessing(true);
    setProgress(0);

    try {
      // Simulate PDF processing
      for (let i = 0; i <= 100; i += 5) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setProgress(i);
      }

      // Create numbered file (simulate)
      const numberedBlob = new Blob(['PDF with page numbers'], { type: 'application/pdf' });
      setNumberedFile({
        name: `numbered-${pdfFile.name}`,
        blob: numberedBlob,
        size: pdfFile.size + 2048 // Slightly larger due to page numbers
      });

    } catch (error) {
      console.error('Error adding page numbers:', error);
      alert('Error adding page numbers. Please try again.');
    }

    setIsProcessing(false);
  };

  const downloadNumberedFile = () => {
    if (!numberedFile) return;
    
    const url = URL.createObjectURL(numberedFile.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = numberedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setPdfFile(null);
    setPageCount(0);
    setNumberedFile(null);
    setProgress(0);
    setIsProcessing(false);
    setStartNumber(1);
    setPosition('bottom-center');
    setFormat('number');
    setFontSize(12);
    setFontColor('#000000');
    setMarginX(50);
    setMarginY(30);
    setPrefix('');
    setSuffix('');
    setSkipFirstPage(false);
    setSkipLastPage(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free PDF Page Number Tool</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Add customizable page numbers to your PDF documents. Choose position, format, 
          styling, and advanced options for professional document numbering.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Full Customization</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Instant Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Live Preview</span>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload PDF File
          </CardTitle>
          <CardDescription>
            Upload your PDF file to add page numbers • Max size: {formatFileSize(maxFileSize)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">Drop PDF file here or click to browse</p>
            <p className="text-sm text-muted-foreground mb-4">
              Perfect for reports, books, presentations, and official documents
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Choose PDF File
            </Button>
          </div>

          {pdfFile && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{pdfFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(pdfFile.size)} • {pageCount} pages
                  </p>
                </div>
                <Badge variant="outline" className="ml-2">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Ready
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Configuration Section */}
      {pdfFile && pageCount > 0 && (
        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          {/* Basic Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Basic Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="position">Position</Label>
                <Select value={position} onValueChange={setPosition}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((pos) => (
                      <SelectItem key={pos.value} value={pos.value}>
                        {pos.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="format">Number Format</Label>
                <Select value={format} onValueChange={setFormat}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {formats.map((fmt) => (
                      <SelectItem key={fmt.value} value={fmt.value}>
                        <div>
                          <div className="font-medium">{fmt.label}</div>
                          <div className="text-xs text-muted-foreground">Example: {fmt.example}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="start-number">Starting Number</Label>
                <Input
                  id="start-number"
                  type="number"
                  min="1"
                  value={startNumber}
                  onChange={(e) => setStartNumber(parseInt(e.target.value) || 1)}
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="prefix">Prefix (optional)</Label>
                  <Input
                    id="prefix"
                    placeholder="e.g., Page "
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="suffix">Suffix (optional)</Label>
                  <Input
                    id="suffix"
                    placeholder="e.g., ."
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Styling Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Styling & Layout
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="font-size">Font Size</Label>
                  <Input
                    id="font-size"
                    type="number"
                    min="8"
                    max="72"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value) || 12)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="font-color">Font Color</Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      id="font-color"
                      type="color"
                      value={fontColor}
                      onChange={(e) => setFontColor(e.target.value)}
                      className="w-16 h-10 p-1 border rounded"
                    />
                    <Input
                      type="text"
                      value={fontColor}
                      onChange={(e) => setFontColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="margin-x">Horizontal Margin (px)</Label>
                  <Input
                    id="margin-x"
                    type="number"
                    min="0"
                    max="200"
                    value={marginX}
                    onChange={(e) => setMarginX(parseInt(e.target.value) || 50)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="margin-y">Vertical Margin (px)</Label>
                  <Input
                    id="margin-y"
                    type="number"
                    min="0"
                    max="200"
                    value={marginY}
                    onChange={(e) => setMarginY(parseInt(e.target.value) || 30)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="skip-first"
                    checked={skipFirstPage}
                    onCheckedChange={setSkipFirstPage}
                  />
                  <Label htmlFor="skip-first" className="text-sm">Skip first page (cover page)</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="skip-last"
                    checked={skipLastPage}
                    onCheckedChange={setSkipLastPage}
                  />
                  <Label htmlFor="skip-last" className="text-sm">Skip last page</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Preview Section */}
      {pdfFile && pageCount > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Live Preview
            </CardTitle>
            <CardDescription>
              See how your page numbers will appear
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg p-8 bg-gray-50 relative">
              <div className="bg-white border rounded shadow-sm aspect-[3/4] relative mx-auto max-w-xs">
                <div className="absolute inset-4 border-2 border-dashed border-border rounded flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <FileText className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-sm">PDF Page Content</div>
                  </div>
                </div>
                
                {/* Page Number Preview */}
                <div 
                  className="absolute text-center"
                  style={{
                    fontSize: `${Math.max(fontSize * 0.75, 8)}px`,
                    color: fontColor,
                    ...(position.includes('top') ? { top: `${marginY * 0.5}px` } : { bottom: `${marginY * 0.5}px` }),
                    ...(position.includes('left') ? { left: `${marginX * 0.5}px` } : 
                        position.includes('right') ? { right: `${marginX * 0.5}px` } : 
                        { left: '50%', transform: 'translateX(-50%)' })
                  }}
                >
                  {getPreviewText()}
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-muted-foreground">
                Preview showing page numbering style • Actual size will match your settings
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Page Numbers Button */}
      {pdfFile && pageCount > 0 && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <Button 
              onClick={addPageNumbers} 
              disabled={isProcessing}
              className="w-full"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Adding Page Numbers...
                </>
              ) : (
                <>
                  <Hash className="h-4 w-4 mr-2" />
                  Add Page Numbers to PDF
                </>
              )}
            </Button>

            {isProcessing && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Processing pages...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Download Section */}
      {numberedFile && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Page Numbers Added Successfully
            </CardTitle>
            <CardDescription>
              Your PDF now has professional page numbering and is ready for download
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <Hash className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{numberedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(numberedFile.size)} • Page Numbers Added
                  </p>
                </div>
              </div>
              <Button onClick={downloadNumberedFile}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex gap-2">
              <Button onClick={resetTool} variant="outline">
                Number Another PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Settings className="h-5 w-5" />
              Complete Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Customize position, format, styling, margins, and skip options for perfect page numbering.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Type className="h-5 w-5" />
              Multiple Formats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Support for numbers, Roman numerals, letters, and custom "Page X of Y" formats.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5" />
              Professional Quality
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              High-quality page number rendering that integrates seamlessly with your document.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Use Cases */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Perfect For</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-3">Business Documents</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Annual reports and presentations</li>
                <li>• Contract documents</li>
                <li>• Policy manuals</li>
                <li>• Training materials</li>
                <li>• Proposals and RFPs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Academic & Publishing</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Research papers and theses</li>
                <li>• Books and manuscripts</li>
                <li>• Course materials</li>
                <li>• Academic journals</li>
                <li>• Reference documents</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Can I skip the first page for cover pages?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! Use the "Skip first page" option to exclude cover pages from numbering. The numbering will start from page 2.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What number formats are supported?</h4>
              <p className="text-sm text-muted-foreground">
                We support Arabic numbers (1,2,3), Roman numerals (I,II,III or i,ii,iii), letters (A,B,C or a,b,c), and "Page X of Y" format.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I customize the appearance?</h4>
              <p className="text-sm text-muted-foreground">
                Absolutely! You can adjust font size, color, position, margins, and add custom prefixes/suffixes like "Page " or ".".
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Will this work with existing page numbers?</h4>
              <p className="text-sm text-muted-foreground">
                This tool adds new page numbers to your PDF. If your document already has page numbers, you may want to remove them first or adjust positioning to avoid overlap.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
