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
};

export default function SQLFormatterPage() {
  return <SQLFormatter />;
}
