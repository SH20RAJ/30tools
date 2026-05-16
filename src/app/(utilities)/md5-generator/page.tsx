import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import HashGeneratorTool from "@/components/tools/security/HashGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free MD5 Generator Online – Fast & No Signup | 30tools",
	description: "Free md5 generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "md5 generator, free md5 generator, online md5 generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/md5-generator",
	},
	openGraph: {
		title: "Free MD5 Generator Online – Fast & No Signup | 30tools",
		description: "Free md5 generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/md5-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free MD5 Generator Online – Fast & No Signup | 30tools",
		description: "Free md5 generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
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
