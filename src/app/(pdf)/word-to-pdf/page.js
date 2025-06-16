import WordToPDF from "@/components/tools/pdf/WordToPDFTool";

export const metadata = {
  title: 'Word to PDF Converter - Convert DOC to PDF | 30tools',
  description: 'Convert Word documents (DOC, DOCX) to PDF format online. Preserve formatting and layout while converting documents.',
  keywords: 'word to pdf, doc to pdf, docx to pdf, convert word, document converter',
  openGraph: {
    title: 'Word to PDF Converter - Convert DOC to PDF | 30tools',
    description: 'Convert Word documents to PDF format online.',
    type: 'website',
  },
};

export default function WordToPDFPage() {
  return <WordToPDF />;
}
