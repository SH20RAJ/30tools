import TextFormatter from "@/components/tools/text/TextFormatterTool";

export const metadata = {
  title: 'Text Formatter - Format and Clean Text | 30tools',
  description: 'Format and clean up text with various options. Remove extra spaces, fix line breaks, and apply text formatting.',
  keywords: 'text formatter, text cleaner, format text, clean text, text processing, text editor',
  openGraph: {
    title: 'Text Formatter - Format and Clean Text | 30tools',
    description: 'Format and clean up text with various options.',
    type: 'website',
  },
};

export default function TextFormatterPage() {
  return <TextFormatter />;
}
