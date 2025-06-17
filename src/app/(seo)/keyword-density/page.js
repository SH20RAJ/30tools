import KeywordDensity from "@/components/tools/seo/KeywordDensityTool";

export const metadata = {
  title: 'Keyword Density Checker - Analyze Text Keywords | 30tools',
  description: 'Check keyword density and frequency in text. Analyze keyword usage for SEO optimization and content analysis.',
  keywords: 'keyword density, keyword frequency, seo analysis, keyword checker, content analysis, text analysis',
  openGraph: {
    title: 'Keyword Density Checker - Analyze Text Keywords | 30tools',
    description: 'Check keyword density and frequency in text.',
    type: 'website',
  },
};

export default function KeywordDensityPage() {
  return <KeywordDensity />;
}
