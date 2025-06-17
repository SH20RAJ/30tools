import BinaryConverterTool from '@/components/tools/text/BinaryConverterTool';

export const metadata = {
  title: 'Binary Converter - Text to Binary & Binary to Text | 30tools',
  description: 'Convert text to binary and binary to text instantly. Free online binary converter with UTF-8 encoding support.',
  keywords: 'binary converter, text to binary, binary to text, ascii converter, binary encoder, binary decoder',
  openGraph: {
    title: 'Binary Converter - Text to Binary & Binary to Text | 30tools',
    description: 'Convert text to binary and binary to text with instant results.',
    type: 'website',
  },
};

export default function BinaryConverterPage() {
  return <BinaryConverterTool />;
}
