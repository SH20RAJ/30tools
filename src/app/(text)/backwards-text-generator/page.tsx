import ToolContent from "@/components/shared/ToolContent";
import ToolLayout from "@/components/shared/ToolLayout";
import BackwardsTextGenerator from "@/components/tools/text/BackwardsTextGenerator";
import { getToolById } from "@/constants/tools-utils";

export const metadata = {
	title: "Free Backwards Text Generator Online - No Signup | 30tools",
	description:
		"Use our free Backwards Text Generator to reverse text, words, or letters instantly. Perfect for Instagram bios, Discord, and social media. 100% secure & private.",
	keywords: [
		"backwards text generator",
		"reverse text online",
		"mirror text generator",
		"flip text generator",
		"backward text online",
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
