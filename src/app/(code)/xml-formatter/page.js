import XMLFormatter from "@/components/tools/code/XMLFormatterTool";

export const metadata = {
  title: 'XML Formatter - Format and Validate XML | 30tools',
  description: 'Format and validate XML documents with proper indentation and syntax highlighting. Check XML syntax and structure.',
  keywords: 'xml formatter, xml validator, format xml, xml beautifier, xml editor, xml syntax',
  openGraph: {
    title: 'XML Formatter - Format and Validate XML | 30tools',
    description: 'Format and validate XML documents online.',
    type: 'website',
  },
};

export default function XMLFormatterPage() {
  return <XMLFormatter />;
}
