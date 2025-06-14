import ImageCompressionTool from '@/components/tools/image/compression';
import { IMAGE_MINIMIZER_METADATA } from '@/constants/seo/image-metadata';

export const metadata = IMAGE_MINIMIZER_METADATA;

export default function ImageMinimizerPage() {
  return <ImageCompressionTool />;
}
