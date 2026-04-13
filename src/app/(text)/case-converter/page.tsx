import ToolContent from "@/components/shared/ToolContent";
import ToolLayout from "@/components/shared/ToolLayout";
import CaseConverter from "@/components/tools/text/CaseConverter";
import { getToolById } from "@/constants/tools-utils";

export const metadata = {
	title: "Free Case Converter Online - No Signup | 30tools",
	description:
		"Use our free Case Converter tool to instantly change text between upper case, lower case, title case, sentence case, and more. Copy-paste ready for any project.",
	keywords: [
		"case converter",
		"online case converter",
		"upper case to lower case",
		"title case generator",
		"sentence case converter",
	],
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

export default function ToolPage() {
	const toolData = getToolById("case-converter");

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
					<CaseConverter />
				</section>

				{/* Rich SEO Content */}
				<section id="content" className="border-t border-border/40 pt-16">
					<ToolContent toolId="case-converter" />
				</section>
			</div>
		</ToolLayout>
	);
}
