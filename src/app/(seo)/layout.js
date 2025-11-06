import SEOToolsNavbar from '@/components/navigation/SEOToolsNavbar';
import SEOToolsFooter from '@/components/footers/SEOToolsFooter';

export const metadata = {
  title: "SEO Tools - Free Online SEO Utilities | 30tools",
  description: "Professional SEO tools for meta tag generation and QR code creation. Free online SEO optimization utilities.",
  keywords: "seo tools, meta tags generator, qr code generator, free seo tools online",
  openGraph: {
    title: "SEO Tools - Free Online SEO Utilities",
    description: "Professional SEO tools for meta tag generation and QR code creation.",
    url: "https://30tools.com/seo-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/seo-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free SEO Tools"
      }
    ],
    type: "website"
  },
};

export default function SEOToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <SEOToolsFooter />
    </div>
  );
}
