import ImageToolsNavbar from '@/components/navigation/ImageToolsNavbar';
import ImageToolsFooter from '@/components/footers/ImageToolsFooter';
import { OPEN_GRAPH_DEFAULTS, TWITTER_DEFAULTS } from '@/constants/seo/metadata-templates';

export const metadata = {
  title: "Image Tools - Free Online Image Processing | 30tools",
  description: "Professional image tools for compression, optimization, and conversion. Free online image processing with batch support and no watermarks.",
  keywords: "image tools, image compressor, image optimizer, image converter, free image tools online",
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: "Image Tools - Free Online Image Processing",
    description: "Professional image tools for compression, optimization, and conversion.",
  },
  twitter: {
    ...TWITTER_DEFAULTS,
    title: "Image Tools - Free Online Image Processing",
    description: "Professional image tools for compression, optimization, and conversion.",
  },
};

export default function ImageToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <ImageToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <ImageToolsFooter />
    </div>
  );
}
