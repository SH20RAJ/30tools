import TextToolsNavbar from '@/components/navigation/TextToolsNavbar';
import TextToolsFooter from '@/components/footers/TextToolsFooter';

export const metadata = {
  title: "Text Tools - Free Online Text Processing | 30tools",
  description: "Professional text tools for word counting, case conversion, and text analysis. Free online text processing tools.",
  keywords: "text tools, word counter, character counter, text case converter, free text tools online",
  openGraph: {
    title: "Text Tools - Free Online Text Processing",
    description: "Professional text tools for word counting, case conversion, and text analysis.",
    url: "https://30tools.com/text-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/text-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Text Tools"
      }
    ],
    type: "website"
  },
};

export default function TextToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TextToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <TextToolsFooter />
    </div>
  );
}
