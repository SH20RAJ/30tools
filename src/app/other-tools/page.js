import { getAllCategories, getOtherTools } from '@/lib/other-tools-actions';
import OtherToolsPage from '@/components/tools/OtherToolsPage';

export const metadata = {
  title: "Other Tools - Discover More Free Online Utilities | 30tools",
  description: "Professional other tools tool. Free online processing with high-quality results. No registration required, instant results.",
  keywords: [
    // Primary keywords
    "other online tools",
    "free utilities",
    "online converters",
    "specialized tools",
    
    // Long-tail keywords for SEO ranking
    "discover free online tools beyond basics",
    "niche online utilities for professionals",
    "specialized converter tools online free",
    "find perfect tool for specific needs",
    "comprehensive online toolkit all categories",
    "hidden gem online tools collection",
    "professional grade online utilities",
    "advanced online tools for power users",
    "unique online tools not found elsewhere",
    "complete toolkit for digital professionals",
    "rare online utilities and converters",
    "specialized tools for content creators",
    "advanced online tools for developers",
    "professional online utilities suite",
    "comprehensive digital toolkit free"
  ].join(", "),
  openGraph: {
    title: "Other Tools - Discover More Free Online Utilities",
    description: "Explore our collection of specialized online tools and utilities. Find the perfect tool for your specific needs.",
    url: "https://30tools.com/other-tools",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/other-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Other Tools - Free Online Utilities Collection"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Tools - Discover More Free Online Utilities",
    description: "Explore our collection of specialized online tools and utilities for every need.",
    images: ["/og-images/other-tools.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/other-tools"
  }
};

export default async function OtherToolsPageWrapper() {
  const categoriesResult = await getAllCategories();
  const otherToolsResult = await getOtherTools();

  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <OtherToolsPage 
      categories={categoriesResult.data} 
      otherTools={otherToolsResult.data}
    />
  );
}
