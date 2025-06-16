import DocumentConverter from "@/components/tools/converter/DocumentConverterTool";

export const metadata = {
  title: 'Document Converter - Convert DOC, DOCX, PDF, TXT | 30tools',
  description: 'Convert between document formats (DOC, DOCX, PDF, TXT, RTF). Preserve formatting and layout during conversion.',
  keywords: 'document converter, doc converter, docx converter, pdf converter, txt converter',
  openGraph: {
    title: 'Document Converter - Convert Document Formats | 30tools',
    description: 'Convert between document formats easily.',
    type: 'website',
  },
};

export default function DocumentConverterPage() {
  return <DocumentConverter />;
}
