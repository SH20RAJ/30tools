import type { Metadata } from "next";
import ToolLayout from "@/components/shared/ToolLayout";
import ToolContent from "@/components/shared/ToolContent";
import LineSorterTool from "@/components/tools/text/LineSorterTool";
import { getToolById } from "@/constants/tools-utils";

export const metadata = {
  title: "Free Line Sorter Online - No Signup | 30tools",
  description: "Sort lines instantly online: A-Z, Z-A, natural, numeric, by length, or shuffle. Remove duplicates and empty lines, then copy clean output in one click.",
  keywords: ["line sorter","sort lines alphabetically","alphabetize list","sort lines online","remove duplicate lines","natural sort"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LineSorterPage() {
	const toolData = getToolById("line-sorter");

	if (!toolData) return null;

	return (
		<ToolLayout
			toolId={toolData.id}
			title={toolData.seoTitle || toolData.name}
			description={toolData.seoDescription || toolData.description}
			category={{ name: "Text Tools", slug: "text" }}
		>
			<div className="space-y-16">
				<section id="tool" className="relative pt-4">
					<div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-[3rem] blur-3xl opacity-30 -z-10" />
					<LineSorterTool />
				</section>

				<section id="content" className="border-t border-border/40 pt-16">
					<ToolContent toolId="line-sorter" />
				</section>
			</div>
		</ToolLayout>
	);
}
