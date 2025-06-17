import Base64ImageTool from '@/components/tools/image/Base64ImageTool';

export const metadata = {
  title: 'Base64 Image Converter - Image to Base64 & Base64 to Image | 30tools',
  description: 'Convert images to Base64 strings and decode Base64 to images. Free online Base64 image encoder and decoder.',
  keywords: 'base64 image, image to base64, base64 to image, base64 encoder, base64 decoder, image encoder',
  openGraph: {
    title: 'Base64 Image Converter - Image to Base64 & Base64 to Image | 30tools',
    description: 'Convert images to Base64 and decode Base64 to images instantly.',
    type: 'website',
  },
};

export default function Base64ImagePage() {
  return <Base64ImageTool />;
}
