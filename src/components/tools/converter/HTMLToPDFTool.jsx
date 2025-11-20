"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FileText, Download, Eye, Loader2 } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";

export default function HTMLToPDFTool() {
  const [htmlContent, setHtmlContent] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>Sample Document</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    h1 { color: #333; }
    p { line-height: 1.6; }
  </style>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is a sample HTML document that will be converted to PDF.</p>
  <p>You can edit this HTML and click "Generate PDF" to download.</p>
</body>
</html>`);
  const [converting, setConverting] = useState(false);
  const previewRef = useRef(null);

  const generatePDF = async () => {
    if (!htmlContent.trim()) {
      toast.error("Please enter some HTML");
      return;
    }

    setConverting(true);

    try {
      // Create iframe for rendering
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '816px'; // A4 width in pixels at 96 DPI
      iframe.style.height = '1056px'; // A4 height
      iframe.style.left = '-9999px';
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();

      // Wait for content to load
      await new Promise(resolve => setTimeout(resolve, 500));

      // Use html2canvas to capture
      const canvas = await html2canvas(iframeDoc.body, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      // Convert to PDF using jsPDF
      const { jsPDF } = await import('jspdf');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('document.pdf');

      // Cleanup
      document.body.removeChild(iframe);

      toast.success("PDF generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate PDF");
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>HTML Content</Label>
            <Textarea
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
              className="min-h-[600px] font-mono text-sm"
              placeholder="Enter your HTML here..."
            />
          </div>

          <Button onClick={generatePDF} disabled={converting} className="w-full">
            {converting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Generate & Download PDF
              </>
            )}
          </Button>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="border rounded-lg p-4 bg-white dark:bg-gray-900 min-h-[600px] overflow-auto"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <CardHeader>
          <CardTitle className="text-sm">Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>💡 <strong>Inline Styles:</strong> Use inline CSS or `&lt;style&gt;` tags for best results</p>
          <p>💡 <strong>External Resources:</strong> Images must be accessible (use data URLs or CORS-enabled)</p>
          <p>💡 <strong>Page Size:</strong> Content will be scaled to fit A4 paper size</p>
          <p>💡 <strong>Fonts:</strong> Use web-safe fonts for consistent rendering</p>
        </CardContent>
      </Card>
    </div>
  );
}
