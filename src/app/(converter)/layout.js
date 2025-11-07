import ConverterToolsNavbar from '@/components/navigation/ConverterToolsNavbar';
import ConverterToolsFooter from '@/components/footers/ConverterToolsFooter';

export const metadata = {
  title: "Converter Tools - Free Online File Converters | 30tools",
  description: "Free online file converters for documents, videos, audio, and more. Convert between formats instantly with no registration required.",
  keywords: "converter tools, file converter, document converter, video converter, audio converter, free converter tools online",
  openGraph: {
    title: "Converter Tools - Free Online File Converters",
    description: "Free online file converters for documents, videos, audio, and more.",
    url: "https://30tools.com/converter-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/converter-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Converter Tools"
      },
    ],
    type: "website"
  },
};

export default function ConverterLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ConverterToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <ConverterToolsFooter />
    </div>
  );
}
