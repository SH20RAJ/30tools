import CodeToolsNavbar from '@/components/navigation/CodeToolsNavbar';
import CodeToolsFooter from '@/components/footers/CodeToolsFooter';

export const metadata = {
  title: "Code Tools - Free Online Code Processing | 30tools",
  description: "Professional code tools for formatting, minification, and conversion. Free online code processing utilities.",
  keywords: "code tools, code formatter, code minifier, csv to json, free code tools online",
  openGraph: {
    title: "Code Tools - Free Online Code Processing",
    description: "Professional code tools for formatting, minification, and conversion.",
    url: "https://30tools.com/code-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/code-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Code Tools"
      },
    ],
    type: "website"
  },
};

export default function CodeToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CodeToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <CodeToolsFooter />
    </div>
  );
}
