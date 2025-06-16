import RegexTesterTool from '@/components/tools/developer/RegexTesterTool';

export const metadata = {
  title: "Regex Tester - Test Regular Expressions Online | 30tools",
  description: "Test and debug regular expressions with real-time matching, highlighting, and code generation. Free online regex tester with common patterns library.",
  keywords: "regex tester, regular expression tester, regex tool, regex validator, pattern tester, regex debugger",
  openGraph: {
    title: "Regex Tester - Test Regular Expressions Online",
    description: "Test and debug regular expressions with real-time matching and code generation.",
    url: "https://30tools.com/regex-tester",
    images: [
      {
        url: "/og-images/regex-tester.jpg",
        width: 1200,
        height: 630,
        alt: "Regex Tester Tool"
      }
    ],
  },
};

export default function RegexTesterPage() {
  return <RegexTesterTool />;
}
