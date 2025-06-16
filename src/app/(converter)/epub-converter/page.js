import EPUBConverter from "@/components/tools/converter/EPUBConverterTool";

export const metadata = {
  title: 'EPUB Converter - Convert to EPUB Format | 30tools',
  description: 'Convert documents to EPUB format for e-readers. Perfect for creating eBooks from PDFs, Word documents, and text files.',
  keywords: 'epub converter, ebook converter, convert to epub, ebook format, e-reader format',
  openGraph: {
    title: 'EPUB Converter - Convert to EPUB Format | 30tools',
    description: 'Convert documents to EPUB format for e-readers.',
    type: 'website',
  },
};

export default function EPUBConverterPage() {
  return <EPUBConverter />;
}
