import GeneratorToolsNavbar from '@/components/navigation/GeneratorToolsNavbar';
import GeneratorToolsFooter from '@/components/footers/GeneratorToolsFooter';

export const metadata = {
  title: "Generator Tools - Free Online Content Generators | 30tools",
  description: "Creative generator tools for AI content, bios, quotes, and more. Free online generators for social media and content creation.",
  keywords: "generator tools, ai generator, bio generator, quote generator, free generator tools online",
  openGraph: {
    title: "Generator Tools - Free Online Content Generators",
    description: "Creative generator tools for AI content, bios, quotes, and more.",
    url: "https://30tools.com/generator-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/generator-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Generator Tools"
      }
    ],
    type: "website"
  },
};

export default function GeneratorsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <GeneratorToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <GeneratorToolsFooter />
    </div>
  );
}