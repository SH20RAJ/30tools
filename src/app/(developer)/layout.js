import DeveloperToolsNavbar from '@/components/navigation/DeveloperToolsNavbar';
import DeveloperToolsFooter from '@/components/footers/DeveloperToolsFooter';

export const metadata = {
  title: "Developer Tools - Free Online Developer Utilities | 30tools",
  description: "Essential developer tools for JSON formatting, hash generation, and more. Free online developer utilities.",
  keywords: "developer tools, json formatter, hash generator, free developer tools online",
  openGraph: {
    title: "Developer Tools - Free Online Developer Utilities",
    description: "Essential developer tools for JSON formatting, hash generation, and more.",
    url: "https://30tools.com/developer-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/developer-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Developer Tools"
      }
    ],
    type: "website"
  },
};

export default function DeveloperToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <DeveloperToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <DeveloperToolsFooter />
    </div>
  );
}
