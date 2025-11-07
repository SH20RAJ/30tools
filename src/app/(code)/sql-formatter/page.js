import SQLFormatter from "@/components/tools/code/SQLFormatterTool";

export const metadata = {
  title: 'SQL Formatter - Format and Beautify SQL Queries | 30tools',
  description: 'Format and beautify SQL queries with proper indentation and syntax highlighting. Support for MySQL, PostgreSQL, and more.',
  keywords: 'sql formatter, sql beautifier, format sql, sql query formatter, sql editor, database query',
  openGraph: {
    title: 'SQL Formatter - Format and Beautify SQL Queries | 30tools',
    description: 'Format and beautify SQL queries online.',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Sql Formatter - Free Online Tool | Professional Results",
    description: "Professional sql formatter tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/sql-formatter.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/sql-formatter"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Sql Formatter",
  "description": "Professional sql formatter tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/sql-formatter",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
};

export default function SQLFormatterPage() {
  return <SQLFormatter />;
}
