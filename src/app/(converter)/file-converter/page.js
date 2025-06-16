import FileConverter from "@/components/tools/converter/FileConverterTool";

export const metadata = {
  title: 'Universal File Converter - Convert Any File Format | 30tools',
  description: 'Convert files between various formats automatically. Support for documents, images, audio, video, and more.',
  keywords: 'file converter, universal converter, format converter, file format, convert files',
  openGraph: {
    title: 'Universal File Converter - Convert Any File Format | 30tools',
    description: 'Convert files between various formats automatically.',
    type: 'website',
  },
};

export default function FileConverterPage() {
  return <FileConverter />;
}
