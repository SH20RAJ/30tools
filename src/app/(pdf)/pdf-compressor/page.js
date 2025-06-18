import PdfCompressorTool from '@/components/tools/pdf/PdfCompressorTool';

export const metadata = {
  title: 'PDF Compressor - Reduce PDF File Size Online | 30tools',
  description: 'Compress PDF files to reduce size while maintaining quality. Free online PDF compressor with advanced compression settings and instant download.',
  keywords: 'pdf compressor, compress pdf, reduce pdf size, pdf optimizer, pdf size reducer, online pdf compressor',
  openGraph: {
    title: 'PDF Compressor - Reduce PDF File Size Online | 30tools',
    description: 'Compress PDF files to reduce size while maintaining quality.',
    type: 'website',
  },
};

export default function PdfCompressorPage() {
  return <PdfCompressorTool />;
}
