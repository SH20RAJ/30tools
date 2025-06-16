import PDFToWord from "@/components/tools/pdf/PDFToWordTool";

export const metadata = {
  title: 'PDF to Word Converter - Convert PDF to DOC | 30tools',
  description: 'Convert PDF files to editable Word documents (DOC, DOCX). Extract text and formatting from PDFs for easy editing.',
  keywords: 'pdf to word, pdf to doc, pdf to docx, convert pdf, editable document',
  openGraph: {
    title: 'PDF to Word Converter - Convert PDF to DOC | 30tools',
    description: 'Convert PDF files to editable Word documents.',
    type: 'website',
  },
};

export default function PDFToWordPage() {
  return <PDFToWord />;
}
