import PDFEditor from "@/components/tools/pdf/PDFEditorTool";

export const metadata = {
  title: 'PDF Editor - Edit PDF Text and Content | 30tools',
  description: 'Edit PDF text, add annotations, and modify content online. Add text, images, signatures, and annotations to PDF documents.',
  keywords: 'PDF editor, edit PDF, PDF annotations, PDF text editing, modify PDF, online PDF editor',
  openGraph: {
    title: 'PDF Editor - Edit PDF Text and Content | 30tools',
    description: 'Edit PDF text, add annotations, and modify content online.',
    type: 'website',
  },
};

export default function PDFEditorPage() {
  return <PDFEditor />;
}
