import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolLayout from "@/components/shared/ToolLayout";
import ToolContent from "@/components/shared/ToolContent";
import LineSorterTool from "@/components/tools/text/LineSorterTool";
import { getToolById } from "@/constants/tools-utils";

export const metadata = generateToolMetadata("line-sorter", "text");

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
