import ImageEditor from "@/components/tools/image/ImageEditorTool";

export const metadata = {
  title: 'Image Editor - Edit Images Online | 30tools',
  description: 'Edit images online with filters, effects, and basic editing tools. Adjust brightness, contrast, saturation, and apply various filters to enhance your photos.',
  keywords: 'image editor, photo editor, online image editing, filters, effects, brightness, contrast, saturation',
  openGraph: {
    title: 'Image Editor - Edit Images Online | 30tools',
    description: 'Edit images online with filters, effects, and basic editing tools.',
    type: 'website',
  },
};

export default function ImageEditorPage() {
  return <ImageEditor />;
}
