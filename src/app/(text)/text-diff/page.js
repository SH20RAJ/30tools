import TextDiff from "@/components/tools/text/TextDiffTool";

export const metadata = {
  title: 'Text Diff Checker - Compare Two Texts | 30tools',
  description: 'Compare two texts and find differences. Highlight additions, deletions, and changes between text versions.',
  keywords: 'text diff, text comparison, compare text, text differences, diff checker, text analyzer',
  openGraph: {
    title: 'Text Diff Checker - Compare Two Texts | 30tools',
    description: 'Compare two texts and find differences.',
    type: 'website',
  },
};

export default function TextDiffPage() {
  return <TextDiff />;
}
