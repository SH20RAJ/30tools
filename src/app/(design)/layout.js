import DesignToolsNavbar from '@/components/navigation/DesignToolsNavbar';
import DesignToolsFooter from '@/components/footers/DesignToolsFooter';

export const metadata = {
  title: "Design Tools - Free Online Design Utilities | 30tools",
  description: "Creative design tools for color palettes and favicon generation. Free online design utilities for designers.",
  keywords: "design tools, color palette generator, favicon generator, free design tools online",
  openGraph: {
    title: "Design Tools - Free Online Design Utilities",
    description: "Creative design tools for color palettes and favicon generation.",
    url: "https://30tools.com/design-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/design-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Design Tools"
      }
    ],
    type: "website"
  },
};

export default function DesignToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-cute">
      <DesignToolsNavbar />
      <main className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-cute opacity-50"></div>
        <div className="relative z-10">{children}</div>
      </main>
      <DesignToolsFooter />
    </div>
  );
}
