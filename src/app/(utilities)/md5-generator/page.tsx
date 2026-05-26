import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import HashGeneratorTool from "@/components/tools/security/HashGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free MD5 Generator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free MD5 Generator online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
	keywords: "md5 generator, free online tool, no signup, md5-generator, free md5-generator, Md5 Generator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/md5-generator",
	},
	openGraph: {
		title: "Free MD5 Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free MD5 Generator online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
		url: "https://30tools.com/md5-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free MD5 Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free MD5 Generator online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/md5-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<HashGeneratorTool />
		</ToolLayout>
	);
}
