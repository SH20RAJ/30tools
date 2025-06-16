import HTMLToPDF from "@/components/tools/converter/HTMLToPDFTool";

export const metadata = {
  title: 'HTML to PDF Converter - Convert Web Pages to PDF | 30tools',
  description: 'Convert HTML pages and content to PDF format. Preserve styling, images, and layout from web pages.',
  keywords: 'html to pdf, web page to pdf, convert html, webpage converter, pdf generator',
  openGraph: {
    title: 'HTML to PDF Converter - Convert Web Pages to PDF | 30tools',
    description: 'Convert HTML pages and content to PDF format.',
    type: 'website',
  },
};

export default function HTMLToPDFPage() {
  return <HTMLToPDF />;
}
