import type { Metadata } from "next";
import LineSorter from "@/components/tools/text/LineSorter";

export const metadata: Metadata = {
  title: { absolute: "Line Sorter - Free Online List Sorting Tool | 30Tools" },
  description: "Sort lists alphabetically (A-Z, Z-A), by length, or randomize order instantly. Free online text sorter tool.",
  keywords: ["line sorter", "alphabetizer", "sort list online", "randomize list", "text sorter"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Line Sorter</h1>
        <p className="text-muted-foreground">
          Organize your lists instantly. Sort alphabetically, by length, or shuffle.
        </p>
      </div>
      <LineSorter />
    </div>
  );
}
