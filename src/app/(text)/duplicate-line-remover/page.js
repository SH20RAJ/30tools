import DuplicateLineRemoverTool from '@/components/tools/text/DuplicateLineRemoverTool';

export const metadata = {
  title: "Duplicate Line Remover - Remove Duplicate Lines from Text Online | 30tools",
  description: "Free online tool to remove duplicate lines from text and lists. Clean your data by removing repeated entries with options for case sensitivity and sorting.",
  keywords: [
    "duplicate remover",
    "remove duplicates",
    "unique lines",
    "text cleaner",
    "duplicate line remover",
    "text duplicate finder",
    "remove duplicate entries",
    "data cleaning tool"
  ],
  longTailKeywords: [
    "remove duplicate lines from text",
    "text duplicate finder",
    "unique lines extractor",
    "duplicate text remover online",
    "clean duplicate entries",
    "remove repeated lines from list",
    "text deduplication tool free",
    "list duplicate remover online"
  ],
  primaryKeyword: "duplicate line remover",
  openGraph: {
    title: "Duplicate Line Remover - Remove Duplicate Lines from Text Online",
    description: "Free online tool to remove duplicate lines from text and lists. Clean your data by removing repeated entries.",
    url: "https://30tools.com/duplicate-line-remover",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/duplicate-line-remover.jpg",
        width: 1200,
        height: 630,
        alt: "Free Duplicate Line Remover Tool"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Duplicate Line Remover - Remove Duplicate Lines from Text",
    description: "Free online tool to remove duplicate lines from text and lists. Clean your data instantly.",
    images: ["/og-images/duplicate-line-remover.jpg"]
  }
};

export default function DuplicateLineRemoverPage() {
  return <DuplicateLineRemoverTool />;
}