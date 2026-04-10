import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolLayout from "@/components/shared/ToolLayout";
import BackwardsTextGenerator from "@/components/tools/text/BackwardsTextGenerator";
import { getToolById } from "@/constants/tools-utils";
import ToolContent from "@/components/shared/ToolContent";

export const metadata = generateToolMetadata("backwards-text-generator", "text");

export default function ToolPage() {
	const toolData = getToolById("backwards-text-generator");
	
	if (!toolData) return null;

	return (
		<ToolLayout
			toolId={toolData.id}
			title={toolData.seoTitle || toolData.name}
			description={toolData.seoDescription || toolData.description}
			category={{ name: "Text Tools", slug: "text" }}
		>
			<div className="space-y-16">
				{/* Main Tool Interface */}
				<section id="tool" className="relative pt-4">
					<div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-[3rem] blur-3xl opacity-30 -z-10" />
					<BackwardsTextGenerator />
				</section>

				{/* Rich SEO Content */}
				<section id="content" className="border-t border-border/40 pt-16">
					<ToolContent toolId="backwards-text-generator" />
				</section>
			</div>
		</ToolLayout>
	);
}